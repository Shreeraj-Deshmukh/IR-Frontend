export interface Persona {
  id: number;
  name: string;
  firm: string;
  style: string[];
  difficulty: number;
  description: string;
  focusAreas: string[];
}

// Ranked by number of questions in the Tagged QA Database (api/naive_prompt.txt, Table 2); only named analysts
// with 8+ questions are included. Difficulty and style tags are illustrative, derived from each analyst's tagged
// questions (catalyst-seeking, open-loop follow-ups, category mix).
export const personas: Persona[] = [
  {
    id: 1,
    name: "James Quigley",
    firm: "Goldman Sachs",
    style: ["Pipeline-heavy", "Catalyst-seeking", "Trial-design focused"],
    difficulty: 9,
    description: "Most frequent questioner in the Tagged QA Database (13 questions across 8 quarters). Presses on endpoint definitions, statistical powering and head-to-head comparator data, often looking for a near-term catalyst.",
    focusAreas: ["Endpoint powering", "Comparator efficacy", "Gross-to-net"],
  },
  {
    id: 2,
    name: "Florence Cespedes",
    firm: "Bernstein",
    style: ["Analytical", "Margin-focused", "Guidance-oriented"],
    difficulty: 8,
    description: "Asks about the margin bridge, guidance phasing and launch uptake (10 questions across 7 quarters). Wants one-offs and mix effects spelled out.",
    focusAreas: ["Margin bridge", "Guidance cadence", "Launch uptake"],
  },
  {
    id: 3,
    name: "Graham Parry",
    firm: "BofA / Citi",
    style: ["Comparator-driven", "Persistent", "Detail-oriented"],
    difficulty: 8,
    description: "Repeatedly benchmarks Novartis assets against named competitor data and follows up when answers are incomplete (9 questions across 5 quarters, 3 left as open loops).",
    focusAreas: ["Comparator efficacy", "Gross-to-net", "Launch uptake"],
  },
  {
    id: 4,
    name: "Steve Scala",
    firm: "TD Cowen",
    style: ["Big-picture", "Strategic", "Policy-aware"],
    difficulty: 6,
    description: "Covers long-term guidance, portfolio strategy and policy exposure such as tariffs and manufacturing (9 questions across 6 quarters).",
    focusAreas: ["Long-term guidance", "LOE erosion", "Tariffs & manufacturing"],
  },
  {
    id: 5,
    name: "Richard Vosser",
    firm: "JPMorgan",
    style: ["Competitive", "Share-focused", "Policy-aware"],
    difficulty: 7,
    description: "Focuses on market share against named competitors and the effect of US drug-pricing policy (8 questions across 7 quarters).",
    focusAreas: ["Competitor comparison", "IRA / Part D", "Gross-to-net"],
  },
  {
    id: 6,
    name: "Michael Leuchten",
    firm: "Jefferies",
    style: ["Numbers-focused", "Margin-driven", "Launch-curve focused"],
    difficulty: 7,
    description: "Digs into margin drivers, launch uptake and volume-versus-price splits (8 questions across 5 quarters).",
    focusAreas: ["Margin bridge", "Launch uptake", "Volume vs price"],
  },
];

export const getPersona = (id: number | string | null | undefined): Persona =>
  personas.find((p) => p.id === Number(id)) ?? personas[0];
