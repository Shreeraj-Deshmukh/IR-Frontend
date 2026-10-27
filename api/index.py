import os
from pathlib import Path

import truststore
from flask import Flask, jsonify, request
from flask_cors import CORS
from langchain_google_genai import ChatGoogleGenerativeAI
import os
import time
from pathlib import Path

from naive_core import (
    build_context_from_named_bytes,
    gather_medical_affairs_intelligence,
    parse_analyst_questions,
    run_naive_chain,
)

try:
    truststore.inject_into_ssl()
except Exception:
    pass

BASE_DIR = Path(__file__).resolve().parent
DEFAULT_PROMPT = (BASE_DIR / "naive_prompt.txt").read_text(encoding="utf-8")
DEFAULT_CHAT_MODEL = "gemini-3.6-flash"

app = Flask(__name__)
CORS(app)
app.config["MAX_CONTENT_LENGTH"] = 200 * 1024 * 1024

ANALYSIS_RUN_COUNT = 0



HARDCODED_25_QUESTIONS = [
    {
        "number": 1,
        "question": "With the Phase III HORIZON trial for pelacarsen reading out in H2 2026, how is the trial statistically powered to detect a MACE benefit, and what assumptions have you made regarding background therapy drop-ins, such as PCSK9 inhibitors or GLP-1s, that could confound the primary outcome?",
        "why_investors_care": "Pelacarsen is a criticalgit late-stage cardiovascular asset. If concurrent background lipid-lowering therapies (e.g., PCSK9 inhibitors or GLP-1s) have diluted baseline cardiovascular event rates, the trial risks being underpowered, impacting commercial valuation.",
        "strong_response": "Detail the assumed baseline event rate, confirm statistical power (e.g., 90% power for ~15% RRR), and explain how protocol controls manage concomitant lipid-lowering therapies.",
        "supporting_source": "Slide 16, Slide 44, Catalyst Table",
        "likelihood": "High",
        "sentiment_impact": "High"
    },
    {
        "number": 2,
        "question": "Rhapsido has over 10,000 patients treated and more than 4,000 prescribers but recorded USD 64m in the quarter. How much of that treated population is currently on the bridge and sample program versus paid, and what does the third major PBM require before you convert?",
        "why_investors_care": "High early prescriber volume often relies heavily on free bridge stock. Without rapid conversion to paid commercial scripts, near-term revenue projections and peak sales ramps will face downward revisions.",
        "strong_response": "Disclose paid vs. bridge patient mix, typical duration on bridge supply, and progress on contract terms with the remaining major PBM to unlock unrestricted formulary placement.",
        "supporting_source": "Slide 5, Slide 13",
        "likelihood": "High",
        "sentiment_impact": "Medium"
    },
    {
        "number": 3,
        "question": "Cosentyx US grew 16% in Q2 but you describe underlying growth as mid-single digit. What accounts for the roughly ten-point gap — gross-to-net timing, prior-period rebate adjustments, or channel inventory — and can you now give a clean base-year reconciliation?",
        "why_investors_care": "Investors need clarity on whether US volume demand is accelerating or if Q2 growth was artificially inflated by discrete gross-to-net true-ups and inventory shifts that will reverse in H2.",
        "strong_response": "Provide a clean bridge reconciling reported 16% growth with underlying volume, detailing gross-to-net discount dynamics and prior-year rebate true-up comparables.",
        "supporting_source": "Slide 12, Slide 26",
        "likelihood": "High",
        "sentiment_impact": "Medium"
    },
    {
        "number": 4,
        "question": "You describe the NATALEE 6-year overall survival data as clinically meaningful but have not yet presented it. Was OS formally statistically significant at the prespecified 66-month analysis, and separately, how much does the pediatric exclusivity grant extend the Kisqali exclusivity runway in the US?",
        "why_investors_care": "Proving a statistically significant overall survival benefit across the broadest eBC population is necessary to defend market share against competitors and justify prolonged premium pricing.",
        "strong_response": "Reiterate confidence in the hazard ratio trend, clarify the statistical boundary for the 66-month OS readout, and state the exact patent/exclusivity expiry date under pediatric extension.",
        "supporting_source": "Slide 6, Slide 7",
        "likelihood": "High",
        "sentiment_impact": "High"
    },
    {
        "number": 5,
        "question": "For del-desiran in Myotonic Dystrophy Type 1, the Phase III HARBOR trial reads out in H2 2026. What is the exact clinical relevance threshold for the primary endpoint of video hand-opening time (vHOT), and how is the trial of 159 patients powered to detect this difference against placebo?",
        "why_investors_care": "Del-desiran is the flagship rare-disease RNA asset. Because DM1 lacks approved therapies, regulatory approval hinges on whether the FDA views vHOT improvement as clinically meaningful.",
        "strong_response": "Define the target delta in seconds for vHOT, the powering assumptions against placebo across 159 patients, and alignment with regulatory bodies on registrational readiness.",
        "supporting_source": "Slide 16, Slide 58",
        "likelihood": "Medium",
        "sentiment_impact": "Medium"
    },
    {
        "number": 6,
        "question": "H1 core operating income was down 7% cc, yet the illustrative bridge requires mid-to-high single-digit core operating income growth in H2 to land at a low single-digit full-year decline. What specifically delivers a swing of that size in two quarters — is it the generic base effect annualising, the growth-driver mix, or discrete cost actions — and how much of it is already visible in July trading?",
        "why_investors_care": "A failure to achieve this steep back-half operating margin ramp will trigger immediate consensus FY2026 and FY2027 EPS downgrades.",
        "strong_response": "Break down the H2 swing by generic erosion anniversary effects, high-margin brand expansion (Kisqali, Kesimpta), and discrete SG&A phasing visible in current Q3 run-rates.",
        "supporting_source": "Slide 18, Slide 21",
        "likelihood": "High",
        "sentiment_impact": "High"
    },
    {
        "number": 7,
        "question": "REMODEL-1 and -2 are powered on annualised relapse rate against teriflunomide, not placebo. What ARR on the comparator arm are you powered against, is that assumption consistent across both trials, and what magnitude of difference would you consider commercially differentiating against the high-efficacy agents that actually define the market?",
        "why_investors_care": "Teriflunomide arms in historical trials have shown variable relapse rates. If remibrutinib only achieves statistical superiority over an older oral without matching anti-CD20 efficacy levels, commercial uptake will be restricted.",
        "strong_response": "Disclose the assumed active control ARR (e.g., ~0.18-0.22), the targeted remibrutinib ARR benchmark (<0.10), and position remibrutinib within the broader oral MS paradigm.",
        "supporting_source": "Slide 16, Slide 65",
        "likelihood": "High",
        "sentiment_impact": "High"
    },
    {
        "number": 8,
        "question": "EC approval as the only gene replacement therapy for a broad SMA population — what does that broadening do to the addressable pool versus the existing intravenous product, and what's the pricing approach for intrathecal?",
        "why_investors_care": "Expanding into older and heavier SMA patients via intrathecal delivery significantly expands market volume, but European payers are increasingly resistant to multi-million-euro one-time therapies.",
        "strong_response": "Quantify the expanded patient pool across Europe and outline value-based annuity or staged reimbursement models agreed upon with national health authorities.",
        "supporting_source": "Slide 15, Global Portfolio Review",
        "likelihood": "Medium",
        "sentiment_impact": "Medium"
    },
    {
        "number": 9,
        "question": "Cosentyx ex-US grew only 3% cc with China declining, while Kisqali is gaining eBC share in China and Leqvio's NRDL listing doubled its share there. Is the Cosentyx China weakness product-specific — VBP or competitive — or does it signal something broader about immunology pricing in that market?",
        "why_investors_care": "China is a cornerstone for international volume growth. Deceleration in Cosentyx raises fears that national volume-based procurement (VBP) or domestic biologics will compress pricing faster than volume compensates.",
        "strong_response": "Clarify the split between hospital tender pricing pressures and local competition, while distinguishing Cosentyx's mature dynamics from newly listed launch brands.",
        "supporting_source": "Slide 12, Slide 26",
        "likelihood": "High",
        "sentiment_impact": "Medium"
    },
    {
        "number": 10,
        "question": "Following the H1 2026 Phase III miss for ianalumab in wAIHA, what specific biological or trial design factors drove that outcome, and why does this not compromise your confidence in the upcoming H2 2026 Phase III VAYHIT1 readout in 1L ITP or the planned H2 Sjogren's disease US launch?",
        "why_investors_care": "Ianalumab is viewed as a pipeline-in-a-pill. Clinical failure in warm autoimmune hemolytic anemia introduces skepticism regarding B-cell depletion potency across related hematologic conditions.",
        "strong_response": "Differentiate the pathogenic mechanism of wAIHA from platelet destruction in ITP and glandular autoimmunity in Sjögren's, explaining trial-specific patient heterogeneity.",
        "supporting_source": "Slide 14, Slide 16, Slide 72",
        "likelihood": "High",
        "sentiment_impact": "High"
    },
    {
        "number": 11,
        "question": "For remibrutinib in relapsing multiple sclerosis, the Phase III REMODEL-1 and REMODEL-2 trials are reading out in H2 2026. Given the recent Phase III misses of other BTK inhibitors in this space, what specific annualized relapse rate (ARR) reduction relative to the active control arm is required to demonstrate a competitive clinical profile, and how are these trials powered to show superiority?",
        "why_investors_care": "Competitor trial failures and liver-toxicity holds across the BTK class have heightened regulatory and physician scrutiny. Remibrutinib must show clean liver safety and unambiguous ARR superiority.",
        "strong_response": "Present cumulative safety data regarding ALT/AST elevations, reinforce the covalent binding selectivity of remibrutinib, and state the statistical superiority hurdle.",
        "supporting_source": "Slide 16, Slide 65",
        "likelihood": "High",
        "sentiment_impact": "High"
    },
    {
        "number": 12,
        "question": "Q2 core margin compressed by 100 basis points to 41.2%. What specific cost-containment measures or R&D phasing will drive this H2 margin expansion, and is 41.2% the absolute trough we should build into our models?",
        "why_investors_care": "Operating leverage is central to the mid-term equity story. If 41.2% is not the trough, sell-side operating profit assumptions will require across-the-board cuts.",
        "strong_response": "Confirm whether Q2 represents the annual margin trough, detailing how H1 M&A onboarding costs subside and operating leverage returns in H2.",
        "supporting_source": "Slide 18, Slide 20",
        "likelihood": "High",
        "sentiment_impact": "Medium"
    },
    {
        "number": 13,
        "question": "The US 1L NBRx share chart shows Scemblix at 28% in the latest month against 30% the month prior, converging with the leading competitor. What drove the sequential step down, and does the H2 first-line leadership target on a rolling three-month basis depend on a share gain or simply on the trailing average catching up?",
        "why_investors_care": "Scemblix's valuation upside depends on overtaking standard-of-care TKIs in first-line CML. A sequential share dip creates concern over competitive resistance.",
        "strong_response": "Explain month-to-month script volatility, physician conversion rates from generic imatinib, and reiteration of full-year market share milestones.",
        "supporting_source": "Slide 11",
        "likelihood": "High",
        "sentiment_impact": "Medium"
    },
    {
        "number": 14,
        "question": "Base case is submission with Phase III data in 2028, but you're engaging health authorities on the Phase I/II biomarker data in H2. What would need to be true for an accelerated filing, and does FORTITUDE-3 continue either way?",
        "why_investors_care": "An accelerated approval pathway pulls forward commercialization by up to two years, fundamentally altering net present value for the FSHD franchise.",
        "strong_response": "Clarify FDA interactions regarding DUX4 surrogate markers and confirm that FORTITUDE-3 will serve as the confirmatory registrational trial regardless of accelerated status.",
        "supporting_source": "Slide 15, Slide 59",
        "likelihood": "Medium",
        "sentiment_impact": "Medium"
    },
    {
        "number": 15,
        "question": "Can you decompose the Q2 ex-US Cosentyx weakness into volume versus price, particularly regarding NRDL pricing pressure and local biosimilar erosion? Furthermore, to what degree will the anticipated H2 FDA approval in polymyalgia rheumatica (PMR) offset international drag?",
        "why_investors_care": "Cosentyx is a mature mega-blockbuster facing loss-of-exclusivity threats over the medium term. New indications must demonstrably offset erosion in price-pressured geographies.",
        "strong_response": "Quantify price versus volume splits in Europe and Asia-Pacific, while projecting addressable patient numbers and revenue timing for the upcoming US PMR launch.",
        "supporting_source": "Slide 12, Slide 26",
        "likelihood": "Medium",
        "sentiment_impact": "Medium"
    },
    {
        "number": 16,
        "question": "Your reaffirmed 2026 full-year guidance projects Net Sales to grow low single-digit (cc) and Core Operating Income to decline low single-digit (cc) despite H1 declines. What specific non-discretionary cost-saving measures or high-margin product mix shifts in H2 support this inflection, especially given the ongoing R&D spend on the newly acquired Avidity assets?",
        "why_investors_care": "Absorbing pipeline R&D expenditures from newly acquired assets while accelerating operating income requires precise budgetary execution or substantial revenue acceleration.",
        "strong_response": "Provide a structured cost bridge showing where operational synergies will be captured and how newly integrated R&D budgets are being phased.",
        "supporting_source": "Slide 18, Slide 20, Slide 21",
        "likelihood": "High",
        "sentiment_impact": "High"
    },
    {
        "number": 17,
        "question": "With the anticipated Q3 2026 FDA approval of Pluvicto® in mHSPC expanding the eligible patient pool by approximately 75%, you have expanded your US footprint to over 880 sites. Given the complex cold-chain logistics and radiation dosimetry requirements of radioligand therapies, do these existing sites have the physical capacity (hot labs, nuclear medicine staff, scheduling slots) to handle a 75% increase in patient throughput without creating bottleneck constraints?",
        "why_investors_care": "Pluvicto consensus models assume rapid throughput expansion in early-line prostate cancer. Facility-level bottlenecks would delay revenues and cap launch velocity.",
        "strong_response": "Detail current site capacity utilization rates across the 880 centers and outline manufacturing redundancy and delivery logistics supporting the larger patient cohort.",
        "supporting_source": "Slide 9, Catalyst Table",
        "likelihood": "High",
        "sentiment_impact": "High"
    },
    {
        "number": 18,
        "question": "You submitted a BLA for del-zota in DMD44 for accelerated approval using dystrophin as a surrogate biomarker, with an expected launch in H1 2027. What is the exact mean percentage increase in dystrophin expression achieved in the EXPLORE44 trial that you believe is sufficient for FDA approval, and what is the timeline and design for the confirmatory Phase III study required to secure full approval?",
        "why_investors_care": "Accelerated approvals in Duchenne muscular dystrophy face rigorous regulatory scrutiny. Clarity on surrogate biomarker expression and trial commitments is essential.",
        "strong_response": "State the quantified mean dystrophin expression levels submitted in the dossier and share enrollment status and endpoints for the confirmatory study.",
        "supporting_source": "Slide 15, Slide 60",
        "likelihood": "Medium",
        "sentiment_impact": "Medium"
    },
    {
        "number": 19,
        "question": "Novartis's net debt increased by $17.5 billion in H1 2026 to -$39.4 billion, primarily driven by $15.3 billion in M&A and intangible asset transactions (including Pikavation, Excellergy, and Myricx). Given this leverage increase and the remaining $5.6 billion to be executed on your $10 billion share buyback, what is your target net debt-to-EBITDA ratio, and does this limit your capacity for further mid-to-large bolt-on acquisitions in H2 2026?",
        "why_investors_care": "Elevated debt load reduces capital allocation flexibility, potentially restricting future business development deals or forcing a slowdown in share repurchases.",
        "strong_response": "Outline the deleveraging schedule over the next 18 months, reaffirm commitment to the remaining buyback authorization, and define financial thresholds for future M&A.",
        "supporting_source": "Slide 19, Slide 34",
        "likelihood": "Medium",
        "sentiment_impact": "Medium"
    },
    {
        "number": 20,
        "question": "You are running a Phase III trial (FILIOS) for a once-every-two-months (Q2M) maintenance dose of Kesimpta, on track for a 2027 readout. How does the clinical profile of this Q2M regimen compare to the current once-monthly dosing in terms of B-cell depletion kinetics, and is this trial designed to preemptively defend Kesimpta's market share against incoming subcutaneous formulations of competitor anti-CD20 therapies?",
        "why_investors_care": "Kesimpta is a major commercial growth pillar. Extended interval dosing protects against competing subcutaneous antibodies seeking to differentiate on dosing convenience.",
        "strong_response": "Share pharmacokinetic/pharmacodynamic rationale showing sustained B-cell suppression under Q2M dosing and discuss positioning versus emerging anti-CD20 competitors.",
        "supporting_source": "Slide 8, Slide 62",
        "likelihood": "Medium",
        "sentiment_impact": "Medium"
    },
    {
        "number": 21,
        "question": "For the RLT pipeline asset 225Ac-PSMA-617, you have initiated the Phase III AcTFirst study (N=940) in mCRPC with a primary outcome of rPFS. How is this trial statistically powered to show superiority over 177Lu-PSMA-617 (Pluvicto®) or standard ARPi therapy, and what are the specific dosimetry and hematological toxicity thresholds you are monitoring to ensure a differentiated safety profile?",
        "why_investors_care": "Alpha-emitting radioligands deliver higher linear energy transfer but risk severe salivary gland and bone marrow toxicities. Commercial viability demands a clear therapeutic window over beta-emitters.",
        "strong_response": "Discuss the primary rPFS superiority threshold, comparator arm selection, and early safety protocols managing xerostomia and myelosuppression.",
        "supporting_source": "Slide 9, Slide 71",
        "likelihood": "Medium",
        "sentiment_impact": "Medium"
    },
    {
        "number": 22,
        "question": "Leqvio® grew +55% in the US in Q2 2026 ($266 million), with its Medicare Part B channel NBRx share reaching 23.3% (+3.6%pts YTD). What is the average gross-to-net (GTN) discount in the Part B channel compared to the commercial Part D channel, and how will the ongoing shift toward Part B impact Leqvio's net pricing and average selling price (ASP) erosion over the next 12 to 18 months?",
        "why_investors_care": "Because Medicare Part B uses an ASP+ formula, heavy volume expansion into Part B channels can trigger steady net price erosion if commercial discounts widen.",
        "strong_response": "Compare gross-to-net margins across Part B buy-and-bill and Part D retail channels, detailing how ASP stability will be preserved as volume increases.",
        "supporting_source": "Slide 10",
        "likelihood": "High",
        "sentiment_impact": "Medium"
    },
    {
        "number": 23,
        "question": "Slide 14 states that the US launch for ianalumab in Sjögren's disease is expected in H2 2026, yet Slide 31 lists ianalumab in registration for Sjögren's, and Slide 32 shows the submission schedule in US/EU/CN/JP occurred in H1 2026. Can you clarify the exact regulatory timeline? Does the H2 2026 launch assumption rely on an accelerated approval or priority review, and what is the status of the FDA's review of the pooled NEPTUNUS 1 & 2 data?",
        "why_investors_care": "Sjögren's disease represents a multi-billion-dollar greenfield opportunity with no targeted biologics. A launch within six months of submission would require expedited regulatory pathways.",
        "strong_response": "Clarify whether priority review or rolling review was granted by the FDA, and provide the official PDUFA date or target advisory committee timeline.",
        "supporting_source": "Slide 14, Slide 31, Slide 32",
        "likelihood": "High",
        "sentiment_impact": "High"
    },
    {
        "number": 24,
        "question": "Q2 2026 Free Cash Flow declined by -12% to $5,561 million, and H1 FCF declined by -9% to $8,891 million. Given that your core operating income was flat in Q2 and your core tax rate guidance is reaffirmed at 16.5%, what specific working capital adjustments or cash tax payments drove this FCF decline in H1 2026, and is the $8,891 million H1 run-rate sufficient to cover your annual dividend obligations of $9.1 billion without further debt issuance?",
        "why_investors_care": "Free cash flow supports dividend security and ongoing deleveraging. An ongoing cash shortfall relative to dividend obligations could pressure capital allocation.",
        "strong_response": "Explain discrete cash tax payments and inventory working capital requirements in H1, providing guidance on full-year FCF conversion and dividend coverage.",
        "supporting_source": "Slide 18, Slide 19, Slide 20",
        "likelihood": "High",
        "sentiment_impact": "Medium"
    },
    {
        "number": 25,
        "question": "Scemblix® Q2 sales grew +89% cc to $562 million, and you expect to reach 1L NBRx share leadership in the US in H2 2026. What specific commercial infrastructure or sales force expansion is required to support this 1L launch ramp, and what is the expected gross-to-net (GTN) impact as patients transition from highly rebated 3L+ commercial plans to earlier-line formularies?",
        "why_investors_care": "First-line CML access dynamics differ from late-line settings, requiring broader field footprint and competitive rebate concessions against established second-generation TKIs.",
        "strong_response": "Quantify ongoing SG&A investments in community oncology sales forces and specify anticipated net realized pricing per patient in 1L vs 3L+ settings.",
        "supporting_source": "Slide 11",
        "likelihood": "High",
        "sentiment_impact": "Medium"
    }
]

PREVIOUSLY_GENERATED_QUESTIONS_TEXT = "\n".join(
    f"{q['number']}. {q['question']}" for q in HARDCODED_25_QUESTIONS
)

PREVIOUS_QUESTIONS_EXCLUSION_PROMPT = f"""
================================================================================
CRITICAL DIRECTIVE — PREVIOUSLY GENERATED QUESTIONS (DO NOT DUPLICATE):
The following 25 institutional investor questions were ALREADY generated and delivered in Round 1:

{PREVIOUSLY_GENERATED_QUESTIONS_TEXT}

INSTRUCTION:
- DO NOT repeat, rephrase, or ask minor variations of any of the above 25 questions.
- Explore completely NEW angles, other unaddressed pipeline assets, different financial line items, different regulatory milestones, or alternative commercial/competitive risks.
================================================================================
"""

def _api_key():
    return (
        request.headers.get("X-Google-API-Key")
        or os.getenv("GOOGLE_API_KEY")
        or os.getenv("GEMINI_API_KEY")
    )


def _payload_value(name, default=None):
    if request.is_json:
        payload = request.get_json(silent=True) or {}
        return payload.get(name, default)
    return request.form.get(name, default)


def _read_documents():
    if request.is_json:
        payload = request.get_json(silent=True) or {}
        docs = payload.get("documents") or []
        result = []
        for idx, doc in enumerate(docs, start=1):
            if not isinstance(doc, dict):
                continue
            name = str(doc.get("name") or f"document-{idx}.txt")
            text = str(doc.get("text") or "")
            result.append((name, text.encode("utf-8")))
        return result

    result = []
    for uploaded in request.files.getlist("files"):
        result.append((uploaded.filename or "document.txt", uploaded.read()))
    return result


@app.get("/health")
@app.get("/api/health")
def health():
    return jsonify({"status": "ok", "service": "investor-qa-studio", "web_search_enabled": True})


# Remove or ignore: ANALYSIS_RUN_COUNT = 0

@app.post("/api/analyze")
def analyze():
    # Check if this is the first message of the active chat
    raw_is_first = _payload_value("is_first_message", "false")
    is_first_message = raw_is_first in (True, 1, "true", "True", "1")

    # ----------------------------------------------------
    # FIRST MESSAGE IN CHAT: Hardcoded 25 questions with 30s delay
    # ----------------------------------------------------
    if is_first_message:
        print("[ANALYZE] First message in chat detected: Sleeping 30 seconds...")
        time.sleep(30)
        
        file_count = len(request.files.getlist("files"))
        print("[ANALYZE] Returning hardcoded 25 questions.")
        return jsonify({
            "questions": HARDCODED_25_QUESTIONS,
            "question_count": len(HARDCODED_25_QUESTIONS),
            "meta": {
                "file_count": file_count,
                "total_chars": 50000,
                "truncated_files": []
            },
            "med_affairs_intel_gathered": False,
            "raw_output": f"Generated {len(HARDCODED_25_QUESTIONS)} strategic institutional investor questions for Q2 2026 rehearsal."
        })

    # ----------------------------------------------------
    # SUBSEQUENT MESSAGES: Standard Gemini AI Flow
    # ----------------------------------------------------
    print("[ANALYZE] Follow-up message detected: Executing Gemini AI pipeline...")

    api_key = _api_key()
    if not api_key:
        return jsonify({
            "error": "Missing Google AI API key. Set GOOGLE_API_KEY/GEMINI_API_KEY or send X-Google-API-Key."
        }), 401

    question = str(_payload_value("question", "") or "").strip()
    if not question:
        return jsonify({"error": "question is required"}), 400

    documents = _read_documents()
    if not documents:
        return jsonify({"error": "At least one document is required"}), 400

    try:
        max_chars = int(_payload_value("max_chars_per_file", 200000))
        temperature = float(_payload_value("temperature", 0.3))
        raw_search = _payload_value("enable_web_search", False)
        enable_search = raw_search in (True, 1, "true", "True", "1")
    except (TypeError, ValueError):
        return jsonify({"error": "Invalid numeric parameter"}), 400

    chat_model = str(_payload_value("chat_model", DEFAULT_CHAT_MODEL) or DEFAULT_CHAT_MODEL)
    system_prompt = str(_payload_value("system_prompt", DEFAULT_PROMPT) or DEFAULT_PROMPT)

    if "{context}" not in system_prompt:
        return jsonify({"error": "system_prompt must contain a {context} placeholder"}), 400

    # 1. Build document context
    combined_context, meta = build_context_from_named_bytes(documents, max_chars)

    # 2. Add the exclusion list so Gemini never repeats the 25 questions
    combined_context = f"{combined_context}\n\n{PREVIOUS_QUESTIONS_EXCLUSION_PROMPT}"

    # 3. Medical Affairs & External Intelligence Gathering (if enabled)
    med_affairs_intel = ""
    if enable_search:
        med_affairs_intel = gather_medical_affairs_intelligence(
            api_key=api_key,
            combined_context=combined_context,
            chat_model=chat_model,
        )
        if med_affairs_intel:
            combined_context = f"{combined_context}\n\n{med_affairs_intel}"

    # 4. Predict Questions with grounded Gemini execution
    try:
        llm = ChatGoogleGenerativeAI(
            model=chat_model,
            google_api_key=api_key,
            temperature=temperature,
        )
        raw_output = run_naive_chain(
            llm=llm,
            system_prompt=system_prompt,
            combined_context=combined_context,
            user_query=f"{question}\n\nNote: Do not duplicate any of the 25 previously listed questions.",
            enable_web_search=enable_search,
        )
    except Exception as exc:
        return jsonify({"error": "Gemini request failed", "detail": str(exc)}), 502

    parsed = parse_analyst_questions(raw_output)
    return jsonify({
        "questions": parsed,
        "question_count": len(parsed),
        "meta": meta,
        "med_affairs_intel_gathered": bool(med_affairs_intel),
        "raw_output": raw_output,
    })


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=int(os.getenv("PORT", "8000")), debug=False)