# Investor Q&A Studio (single repo, deploys to one Vercel project)
- Frontend: Vite + React + TS + shadcn at repo root (`src/`). Build: `npm run build` -> `dist`.
- Backend: Flask app in `api/index.py` (+ `api/naive_core.py`, prompt txt files), served by Vercel as a Python function. Deps in root `requirements.txt`. Needs `GOOGLE_API_KEY` env var (see `.env.example`).
- `vercel.json` rewrites `/api/*` to the Flask function (maxDuration 60s) and everything else to `index.html`.
- Local dev: `pip install -r requirements.txt && python api/index.py` (port 8000) in one terminal, `npm i && npm run dev` in another (Vite proxies `/api` to localhost:8000).
- Main flow: `src/pages/SessionWorkspace.tsx` -> `src/lib/agentApi.ts` -> `POST /api/analyze`.
Known issues: first message returns 25 hardcoded questions after a 30s sleep; PDFs not parsed (pypdf unused); inconsistent Gemini model names; open CORS/no auth; hardcoded Novartis content.

## Change scope rule
- Text/content changes are app-wide by default. When the user points at a specific page or tab to show a string (name, quarter, date, label, etc.), treat it as an example of where it appears, not the limit. Grep all of `src/` (and `api/` prompts/hardcoded content when relevant) for the same string and related variants, and update every occurrence.
- Keep related values consistent (e.g. if a quarter or date moves forward, shift the dependent dates, sources and report text with it). List any places intentionally left unchanged in the summary.
