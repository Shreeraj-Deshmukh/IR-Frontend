export interface Persona {
  id: number;
  name: string;
  firm: string;
  style: string[];
  difficulty: number;
  description: string;
  focusAreas: string[];
}

export const personas: Persona[] = [
  {
    id: 1,
    name: "Simon Baker",
    firm: "Redburn Atlantic",
    style: ["Aggressive", "Numbers-focused", "Challenging"],
    difficulty: 9,
    description: "Known for pressing management on market-share trends, pricing discipline, and pipeline differentiation. Pushes for brand and competitor specifics. Focus: Market-share dynamics • Competitive differentiation • Follow-up depth 3",
    focusAreas: ["Market-share dynamics", "Competitive differentiation", "Follow-up depth 3"],
  },
  {
    id: 2,
    name: "Florent Cespedes",
    firm: "Bernstein",
    style: ["Analytical", "Detail-oriented", "Patient"],
    difficulty: 7,
    description: "Probes deeply into research efficiency and trial readouts, linking science output to investor expectations. Focus: R&D productivity • Pipeline progression • Clinical trial outcomes",
    focusAreas: ["R&D productivity", "Pipeline progression", "Clinical trial outcomes"],
  },
  {
    id: 3,
    name: "Emily Field",
    firm: "Barclays",
    style: ["Strategic", "Big-picture", "Constructive"],
    difficulty: 6,
    description: "Focuses on high-level strategy and growth narratives. Asks about pipeline visibility and leadership priorities. Focus: Strategic growth • Pipeline visibility • Long-term guidance",
    focusAreas: ["Strategic growth", "Pipeline visibility", "Long-term guidance"],
  },
  {
    id: 4,
    name: "Matthew Weston",
    firm: "UBS",
    style: ["Technical", "Skeptical", "Direct"],
    difficulty: 8,
    description: "Challenges financial assumptions, probing cost control, margins, and external headwinds like FX and inflation. Focus: Financial sensitivity • Operational efficiency • Margins and FX",
    focusAreas: ["Financial sensitivity", "Operational efficiency", "Margins and FX"],
  },
];

export const getPersona = (id: number | string | null | undefined): Persona =>
  personas.find((p) => p.id === Number(id)) ?? personas[0];
