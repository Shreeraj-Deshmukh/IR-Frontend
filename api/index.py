import os
import sys
from pathlib import Path

# Vercel runs this file without its own directory on sys.path, so sibling modules must be made importable.
sys.path.insert(0, str(Path(__file__).resolve().parent))

import truststore
from flask import Flask, jsonify, request
from flask_cors import CORS
from langchain_google_genai import ChatGoogleGenerativeAI
import os
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


@app.post("/api/analyze")
def analyze():
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

    # 2. Medical Affairs & External Intelligence Gathering (if enabled)
    med_affairs_intel = ""
    if enable_search:
        med_affairs_intel = gather_medical_affairs_intelligence(
            api_key=api_key,
            combined_context=combined_context,
            chat_model=chat_model,
        )
        if med_affairs_intel:
            combined_context = f"{combined_context}\n\n{med_affairs_intel}"

    # 3. Predict Questions with grounded Gemini execution
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
            user_query=question,
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