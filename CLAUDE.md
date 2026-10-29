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

## Brand rule (Novartis only)
- This product is for Novartis. Never introduce J&J / Johnson & Johnson / JnJ / Janssen / Kenvue or any other non-Novartis company branding in code, copy, sample data, file names or assets. Competitors/peers may appear only where they are genuinely part of the analysis (e.g. peer call references).
- When porting content from the J&J-based IR Co-Pilot demo (https://ir-co-pilot.vercel.app or its codebase), replace every J&J reference, including J&J product, drug, trial and executive names, with the closest Novartis equivalent (e.g. Novartis products like Cosentyx, Entresto, Kisqali, Pluvicto, Kesimpta; Novartis executives and transcripts). Keep the sample data realistic and self-consistent after the swap.
- After any port or content change, grep the repo for J&J-related terms and report any remaining hits.

## IR Co-Pilot modules (Radar / Canvas / GEI)
- `/` is the IR Co-Pilot landing page (`src/pages/Home.tsx`). Top nav = Radar, Canvas, Coach (GEI is hidden: nav entry, Home section and `/gei*` routes removed; `src/ir/gei.tsx` kept in the repo); Coach holds the original app (Dashboard at `/coach`, Personas, Library, Workspace, Reports, IR Data Hub, Settings) with its own sub-nav in `src/components/NavBar.tsx`.
- Radar, Canvas and GEI live in `src/ir/{radar,canvas,gei,shared}.tsx`. They were generated from the minified bundle of the J&J-based demo (https://ir-co-pilot.vercel.app) and then rewritten for Novartis, so identifiers are minified (`// @ts-nocheck`). Replace them with the real demo source when it becomes available. Do not alter Coach when working on these sections.
- Theme/fonts come from our own `index.css`/Tailwind config; the demo-only utility classes (glass-card, card-hover, animate-fade-in-up) were added to `index.css` using our blue tokens.
