import html
import io
import logging
import os
import re
from typing import Any, Iterable

from langchain_core.messages import HumanMessage, SystemMessage
from langchain_core.prompts import ChatPromptTemplate
from langchain_google_genai import ChatGoogleGenerativeAI

logger = logging.getLogger(__name__)

FIELD_LABELS = [
    ("why_investors_care", "WHY INVESTORS CARE:"),
    ("strong_response", "WHAT A STRONG MANAGEMENT RESPONSE SHOULD ADDRESS:"),
    ("supporting_source", "SUPPORTING SOURCE:"),
    ("likelihood", "LIKELIHOOD OF BEING ASKED:"),
    ("sentiment_impact", "POTENTIAL IMPACT ON INVESTOR SENTIMENT:"),
]


def coerce_model_text(content: Any) -> str:
    """Normalize LangChain/Gemini text blocks into one string."""
    if isinstance(content, list):
        pieces = []
        for block in content:
            if isinstance(block, dict) and block.get("type") == "text":
                pieces.append(block.get("text", ""))
            elif isinstance(block, str):
                pieces.append(block)
            elif hasattr(block, "text"):
                pieces.append(getattr(block, "text", ""))
        return "".join(pieces).strip()
    return str(content or "").strip()


def _extract_text(name: str, payload: bytes) -> str:
    """Decode an uploaded file; PDFs go through pypdf, everything else is read as UTF-8."""
    if name.lower().endswith(".pdf") or payload[:5] == b"%PDF-":
        try:
            from pypdf import PdfReader

            reader = PdfReader(io.BytesIO(payload))
            pages = [
                f"[Slide/Page {i}]\n{page.extract_text() or ''}"
                for i, page in enumerate(reader.pages, start=1)
            ]
            return "\n\n".join(pages)
        except Exception as exc:
            logger.warning(f"PDF extraction failed for {name}: {exc}")
    return payload.decode("utf-8", errors="ignore")


def build_context_from_named_bytes(
    files: Iterable[tuple[str, bytes]],
    max_chars_per_file: int,
):
    """Build the context while preserving source names and truncation metadata."""
    parts = []
    truncated_files = []
    total_chars = 0
    file_count = 0

    for name, payload in files:
        file_count += 1
        full_text = _extract_text(name, payload)
        text = full_text[:max_chars_per_file]
        if len(full_text) > max_chars_per_file:
            truncated_files.append(name)
        total_chars += len(text)
        parts.append(f"--- {name} ---\n{text}")

    return "\n\n".join(parts), {
        "file_count": file_count,
        "total_chars": total_chars,
        "truncated_files": truncated_files,
    }


def gather_medical_affairs_intelligence(
    api_key: str,
    combined_context: str,
    chat_model: str = "gemini-3.5-flash",
) -> str:
    """Uses Google Search Grounding to pull live medical affairs, competitor labels,

    regulatory decisions, and clinical trial registry updates for key assets.
    """
    research_prompt = (
        "You are a Senior Medical Affairs and Pharmaceutical Intelligence Specialist. "
        "Analyze the following Novartis earnings deck excerpt and identify key pipeline compounds, "
        "priority brands, and pending milestones (e.g., Pelacarsen, Remibrutinib, Leqvio, Pluvicto, "
        "Lutathera, Kisqali, Kesimpta, Ianalumab, Del-zota, Del-brax, Del-desiran, Votoplam, Abelacimab, Itvisma).\n\n"
        "Use Google Search to retrieve the latest real-world medical affairs and market context:\n"
        "1. Competitor Approvals & Labels: Look up recent FDA/EMA approvals of direct competitors "
        "(e.g., oral PCSK9 inhibitors and their fasting/food requirements, competitor BTK inhibitors in MS like fenebrutinib/tolebrutinib).\n"
        "2. ClinicalTrials.gov Updates: Check for recent timeline shifts or primary completion dates (e.g., Abelacimab in Factor XI).\n"
        "3. Regulatory Actions: Check recent FDA advisory committee opinions, accelerated approval precedents on surrogate endpoints "
        "(e.g., Huntington's disease, DMD exon-skipping, FSHD biomarkers).\n"
        "4. Patent Litigation & Generic Settlements: Check District Court rulings (e.g., Delaware court Lutathera generic decisions) "
        "and pediatric exclusivity extensions (e.g., Kisqali LOE dates post-settlement).\n\n"
        "Provide a concise, highly factual briefing (bullet points) containing concrete data, competitor drug names, "
        "clinical trial identifiers, and regulatory dates that an equity analyst would reference when questioning management."
    )

    try:
        search_llm = ChatGoogleGenerativeAI(
            model=chat_model,
            google_api_key=api_key,
            temperature=0.1,
        )
        # Bind native Google Search tool for live grounding
        search_llm_grounded = search_llm.bind(tools=[{"google_search": {}}])
        
        messages = [
            SystemMessage(content=research_prompt),
            HumanMessage(content=f"Context from uploaded materials:\n{combined_context[:12000]}"),
        ]
        response = search_llm_grounded.invoke(messages)
        intel_text = coerce_model_text(response.content)
        if intel_text:
            return (
                "\n\n======================================================================\n"
                "EXTERNAL MEDICAL AFFAIRS, REGULATORY & COMPETITIVE INTELLIGENCE (GROUNDED SEARCH)\n"
                "======================================================================\n"
                f"{intel_text}\n"
                "======================================================================\n\n"
            )
    except Exception as exc:
        logger.warning(f"Medical Affairs search grounding skipped or failed: {exc}")
    
    return ""


def run_naive_chain(
    llm: Any,
    system_prompt: str,
    combined_context: str,
    user_query: str,
    enable_web_search: bool = True,
) -> str:
    """Runs the QA prediction chain with dual-layer search grounding support."""
    prompt = ChatPromptTemplate.from_messages([
        ("system", system_prompt),
        ("human", "{input}"),
    ])

    # Bind Google Search grounding to the primary LLM call when enabled
    active_llm = llm
    if enable_web_search:
        try:
            active_llm = llm.bind(tools=[{"google_search": {}}])
        except Exception as tool_err:
            logger.warning(f"Could not bind search tool directly to generation model: {tool_err}")
            active_llm = llm

    chain = prompt | active_llm
    try:
        response = chain.invoke({"context": combined_context, "input": user_query})
        return coerce_model_text(response.content)
    except Exception as exc:
        # Fallback to ungrounded LLM if tool execution experienced an error
        logger.warning(f"Grounded invocation failed ({exc}), falling back to standard invoke.")
        fallback_chain = prompt | llm
        response = fallback_chain.invoke({"context": combined_context, "input": user_query})
        return coerce_model_text(response.content)


def parse_analyst_questions(text: str) -> list[dict]:
    """Parse the strict model output into structured question objects."""
    cleaned = (text or "").replace("**", "").strip()
    split_re = re.compile(r"(?m)^\s*(\d+)\.\s*QUESTION:\s*")
    matches = list(split_re.finditer(cleaned))
    if not matches:
        return []

    questions = []
    label_pattern = re.compile(
        r"(?m)^\s*(WHY INVESTORS CARE:|"
        r"WHAT A STRONG MANAGEMENT RESPONSE SHOULD ADDRESS:|"
        r"SUPPORTING SOURCE:|"
        r"LIKELIHOOD OF BEING ASKED:|"
        r"POTENTIAL IMPACT ON INVESTOR SENTIMENT:)\s*"
    )
    label_to_key = {label: key for key, label in FIELD_LABELS}

    for idx, match in enumerate(matches):
        number = int(match.group(1))
        start = match.end()
        end = matches[idx + 1].start() if idx + 1 < len(matches) else len(cleaned)
        block = cleaned[start:end].strip()
        field_matches = list(label_pattern.finditer(block))

        if field_matches:
            question_text = block[:field_matches[0].start()].strip()
        else:
            question_text = block.strip()

        item = {
            "number": number,
            "question": question_text,
            "why_investors_care": "",
            "strong_response": "",
            "supporting_source": "",
            "likelihood": "",
            "sentiment_impact": "",
        }

        for f_idx, f_match in enumerate(field_matches):
            label = f_match.group(1)
            value_start = f_match.end()
            value_end = field_matches[f_idx + 1].start() if f_idx + 1 < len(field_matches) else len(block)
            item[label_to_key[label]] = block[value_start:value_end].strip()

        questions.append(item)

    return questions


def _badge_class(value: str) -> str:
    normalized = (value or "").strip().lower()
    if normalized.startswith("high"):
        return "badge-high"
    if normalized.startswith("medium"):
        return "badge-medium"
    if normalized.startswith("low"):
        return "badge-low"
    return "badge-neutral"


def _html_text(value: str) -> str:
    return html.escape(value or "—").replace("\n", "<br>")


def render_question_card_html(item: dict) -> str:
    """Return one safe, styled <details> card for HTML renderers."""
    number = int(item.get("number") or 0)
    question = _html_text(item.get("question", ""))
    likelihood = _html_text(item.get("likelihood", ""))
    impact = _html_text(item.get("sentiment_impact", ""))
    likelihood_class = _badge_class(item.get("likelihood", ""))
    impact_class = _badge_class(item.get("sentiment_impact", ""))

    return f"""
<details class="qa-card">
  <summary class="qa-summary">
    <span class="qa-number">{number:02d}</span>
    <span class="qa-question">{question}</span>
    <span class="qa-summary-badges">
      <span class="qa-badge {likelihood_class}">{likelihood or '—'} likelihood</span>
      <span class="qa-badge {impact_class}">{impact or '—'} impact</span>
    </span>
  </summary>
  <div class="qa-details">
    <div class="qa-detail-block qa-why">
      <div class="qa-detail-label">Why investors care</div>
      <div class="qa-detail-value">{_html_text(item.get('why_investors_care', ''))}</div>
    </div>
    <div class="qa-detail-block qa-response">
      <div class="qa-detail-label">What a strong management response should address</div>
      <div class="qa-detail-value">{_html_text(item.get('strong_response', ''))}</div>
    </div>
    <div class="qa-footer-row">
      <div class="qa-source"><span>Source</span>{_html_text(item.get('supporting_source', ''))}</div>
      <div class="qa-inline-badges">
        <span class="qa-badge {likelihood_class}">Likelihood · {likelihood}</span>
        <span class="qa-badge {impact_class}">Sentiment · {impact}</span>
      </div>
    </div>
  </div>
</details>
"""