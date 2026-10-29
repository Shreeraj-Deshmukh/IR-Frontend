import type { ParsedQuestion } from "@/lib/agentApi";

// Demo-safe answer for the "25 most probable analyst questions" Quick Recommendation prompt.
// Shown (shuffled, after a short delay) instead of a live Gemini call; all other prompts hit the API.
export const DEMO_TRIGGER_PROMPT =
  "Generate the 25 most probable analyst questions for the upcoming earnings call, ranked by likelihood. Focus on genuine, evidence-based questions about recent results, guidance, business trends, and key risks. Avoid generic, repetitive, or speculative questions.";

export const DEMO_DELAY_MS = 25000;

const DEMO_QUESTIONS: string[] = [
  "ORION-4 is expected to read out by the end of 2026. Given that it is an event-driven trial, what explains the expected timing, and what kind of cardiovascular benefit should we expect? If the results are positive, would it be reasonable to expect a meaningful acceleration in Leqvio sales next year?",
  "Following pelacarsen's failure to demonstrate a reduction in cardiovascular events despite lowering Lp(a), what data are you waiting for before making a decision on DII235? Are you looking for additional mechanistic evidence or competitor data, and how has the HORIZON outcome changed your view of the asset's probability of success?",
  "Novartis has several assets in kidney disease, particularly in IgA nephropathy, including Fabhalta and the investigational anti-APRIL agent zigakibart. How do you see your presence in kidney disease evolving, and how will you position these different mechanisms against increasing competition from endothelin antagonists and dual-target therapies?",
  "As we look ahead to 2027, what are the main factors expected to drive growth, including upcoming launches and the relatively limited impact of loss of exclusivity? With the recent setbacks for del-desiran and pelacarsen, which commercial products and pipeline assets will be most important in supporting your 2025–2030 sales CAGR guidance of 5–6% and the longer-term growth outlook?",
  "Assuming approval, what do you see as the main reasons patients would switch from Ocrevus to remibrutinib? What would you want the switching study to demonstrate, particularly around relapse rates and disability progression, and how will you account for differences in patient populations when comparing the treatments?",
  "You delivered a strong SG&A performance in Q3. How much of the reduction reflects structural cost savings versus temporary cost containment or timing effects? Should we expect these savings to persist into 2027, particularly as launch investments continue?",
  "Pluvicto sales in the US have been relatively flat over the past few quarters, despite strong growth outside the US. How much of the opportunity from PSMAfore has already been captured, and what impact do you expect PSMAaddition to have on US sales? Should we expect a near-term step-up followed by a plateau, or could the new indication support more sustained growth? How should we think about the outlook in Europe as well?",
  "Following the HARBOR Phase III failure, what are the next steps for del-desiran? Are you considering another Phase III trial with different endpoints, and how have the development timelines changed? Given that the impairment was only a portion of the asset's carrying value, was the main driver a delay to launch, and should we interpret this as meaning that the long-term peak sales and probability-of-success assumptions remain largely unchanged?",
  "Ianalumab was previously expected to receive US approval in Q3, but we have not yet seen an update. Could you explain what is driving the delay, particularly in light of the additional data requested by the FDA, and how this affects your expectations for the approval timeline?",
  "At the upcoming Meet Novartis Management event, you have highlighted a focus on mid- and late-stage pipeline assets as drivers of future growth. Could you give us a sense of which three or four Phase II programs you see as the most important opportunities for the next decade? Will the event also provide updated peak sales estimates, development timelines and other guidance that investors can use in their forecasts?",
  "You recently raised Rhapsido's peak sales potential to more than $4 billion across CSU and CIndU. Why have you chosen to update its peak sales outlook now while leaving other potential peak sales revisions until the Capital Markets Day? Does this reflect greater confidence in the opportunity in CSU and CIndU, and how should we think about the remaining upside in other indications?",
  "Given the differences in outcomes across endpoints and patient subgroups in the Sjögren's disease data, what are the key issues being discussed with the FDA regarding the label? Are the discussions primarily about the definition of the endpoints and the clinical benefit, or about identifying the patient populations most likely to benefit? What label scope should investors expect?",
  "Following the recent izokibep data, how has your view of remibrutinib's potential in hidradenitis suppurativa evolved? What patient populations are being studied, and what have you learned from the Phase II dose-response results? What level of HiSCR50 response at Week 16 would you consider sufficient to establish a competitive position against existing biologics and oral JAK inhibitors?",
  "Following the recent pipeline setbacks, how are you thinking about the balance between share buybacks and acquisitions or business development? With up to $4.9 billion remaining under the buyback program, what would an acquisition opportunity need to offer for you to redirect capital toward M&A rather than continue repurchasing shares?",
  "How much of Kisqali's recent growth is coming from the adjuvant early breast cancer setting? With competitors such as giredestrant potentially entering the market, how confident are you that Kisqali can defend its share? Is the overall survival benefit and its established track record enough to maintain its competitive position?",
  "Kesimpta continues to perform well in the US, even as competition in the anti-CD20 market intensifies. Are you seeing any change in competitive pressure, particularly as alternatives become available in different formulations? How do you expect the Phase III FILIOS study and its alternative dosing regimens to affect Kesimpta's positioning and market share?",
  "Scemblix continued to grow strongly in Q3, reaching a 33% share of US first-line new prescriptions. How much of this uptake is coming from patients switching from first- or second-generation TKIs versus patients starting Scemblix as their initial treatment? What do you see as a realistic ceiling for first-line market share across major markets?",
  "Following the priority review designation for del-zota (AOC 1044) in DMD Exon 44, what surrogate biomarker evidence is central to the FDA filing? What additional regulatory milestones and commercial infrastructure will be needed to support a potential US launch in 2027?",
  "You have completed the EU submission for pelabresib based on MANIFEST-2, while MANIFEST-3 is still ongoing. What feedback from the EMA and FDA informed the decision to file in Europe first? What results on total symptom score and spleen volume reduction would MANIFEST-3 need to deliver to support US registration?",
  "Fabhalta generated $101 million in Q3 sales, supported by the 24-month eGFR slope data from APPLAUSE-IgAN. How is the product performing across PNH and IgAN, and how could the Phase III programs in generalized myasthenia gravis and IC-MPGN expand its addressable market?",
  "With the Phase III AcTFirst and Phase II/III PSMAcTION studies evaluating the actinium-based radioligand AAA817 in metastatic castration-resistant prostate cancer, how are you addressing isotope availability and supply-chain constraints? What needs to be in place to ensure the platform can scale commercially ahead of the expected 2028 readouts?",
  "For abelacimab in the Phase III LILAC-TIMI 76 study, what level of reduction in major bleeding events, particularly BARC type 3c and 5, would be needed to establish a meaningful advantage over placebo and support its potential as a differentiated factor XI inhibitor?",
  "As QCZ484 approaches its Phase II interim readout, what magnitude of reduction in 24-hour ambulatory blood pressure at Month 3 would be sufficient to support progression into broad Phase III cardiovascular development?",
  "With votoplam entering Phase III development in Huntington's disease, what regulatory requirements and degree of improvement in the cUHDRS functional score would be needed to support an accelerated or full approval pathway?",
  "Core net financial expenses are expected to be around $1.7 billion for 2026, with a core tax rate of approximately 16.5%. How should we think about these financial lines in 2027, particularly given the debt issued to finance acquisitions and the implementation of global minimum tax rules?",
];

export const isDemoTrigger = (query: string) =>
  query.trim() === DEMO_TRIGGER_PROMPT;

/** Returns the 25 demo questions in a fresh random order, renumbered 1..25. */
export function getShuffledDemoQuestions(): ParsedQuestion[] {
  const items = [...DEMO_QUESTIONS];
  for (let i = items.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [items[i], items[j]] = [items[j], items[i]];
  }
  return items.map((question, i) => ({
    number: i + 1,
    question,
    whyInvestorsCare: "",
    responseGuidance: "",
    supportingSource: "",
    likelihood: "",
    impact: "",
  }));
}

export const demoRawText = (questions: ParsedQuestion[]) =>
  questions.map((q) => `${q.number}. ${q.question}`).join("\n\n");
