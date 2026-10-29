import type { ParsedQuestion } from "@/lib/agentApi";

// Demo-safe answer for the "25 most probable analyst questions" Quick Recommendation prompt.
// Shown (shuffled, after a short delay) instead of a live Gemini call; all other prompts hit the API.
export const DEMO_TRIGGER_PROMPT =
  "Generate the 25 most probable analyst questions for the upcoming earnings call, ranked by likelihood. Focus on genuine, evidence-based questions about recent results, guidance, business trends, and key risks. Avoid generic, repetitive, or speculative questions.";

export const DEMO_DELAY_MS = 25000;

type DemoQuestion = {
  question: string;
  why: string;
  response: string[];
  likelihood: "High" | "Medium" | "Low";
  impact: "High" | "Medium" | "Low";
};

const DEMO_QUESTIONS: DemoQuestion[] = [
  {
    question:
      "On del-desiran, could you share a bit more color on the development path post-HARBOR—specifically whether you expect to run another Phase III study with different endpoints, and what that means for timelines? Also, given the $1.9 billion write-down represents only about a quarter of the asset's carrying value, was that impairment primarily driven by a launch delay rather than a change in your probability-of-success or peak sales assumptions?",
    why: "The $1.9 billion write-down is only about a quarter of the carrying value, so models hinge on whether peak sales and probability of success are intact (a timing hit to the DCF) or have been structurally cut. A second Phase III would also add cost and push launch out, directly shifting risk-adjusted NPV.",
    response: [
      "Confirm whether a new Phase III with revised endpoints is planned, and the realistic start and readout timeline.",
      "Explain what drove the impairment amount: launch delay versus any change to peak sales or PoS assumptions.",
      "Clarify the remaining carrying value and what further triggers could lead to additional impairment.",
    ],
    likelihood: "High",
    impact: "High",
  },
  {
    question:
      "On the cardiovascular pipeline, you noted that your follow-on Lp(a) siRNA program, DII235, is currently under assessment following the Phase III HORIZON miss with pelacarsen. What specific insights from the HORIZON dataset—or external readouts in the Lp(a) class—are you waiting to evaluate before making a go/no-go decision on advancing DII235?",
    why: "HORIZON did not show a cardiovascular benefit for pelacarsen despite Lp(a) lowering, which puts the whole Lp(a) hypothesis in question. Investors need to know whether DII235 carries real value in the pipeline or is a candidate for write-off and reallocation of R&D spend.",
    response: [
      "Specify the HORIZON analyses (subgroups, magnitude of Lp(a) lowering, event rates) that will inform the decision.",
      "Name the external class readouts being monitored and the expected timing of the go/no-go.",
      "State what level of mechanistic or outcomes evidence would justify continuing, and the cost of keeping the option open.",
    ],
    likelihood: "High",
    impact: "High",
  },
  {
    question:
      "On remibrutinib in MS and the planned anti-CD20 switching study: assuming approval, what do you see as the primary clinical rationale for transitioning stable patients off an anti-CD20 like Ocrevus onto remibrutinib? And keeping in mind the caveats around cross-trial comparisons and baseline patient mix on relapse and disability, what does that switch trial need to show to be considered a success?",
    why: "Remibrutinib in MS is a major long-term growth option, and its commercial case rests on whether stable anti-CD20 patients will switch. The success bar for the switching study shapes peak sales, penetration and share assumptions.",
    response: [
      "Articulate the clinical rationale for switching (convenience, safety profile, disability progression, brain volume) rather than only new-to-brand patients.",
      "Define success criteria in the switching study for relapse rate and confirmed disability progression.",
      "Address how differences in baseline patient mix will be handled when comparing against anti-CD20 data.",
    ],
    likelihood: "High",
    impact: "High",
  },
  {
    question:
      "On Pluvicto, US sales have been relatively flat over the past few quarters while ex-US growth has been very strong. How much further runway is left in the US pre-taxane setting, and given the 5-to-10-week referral lead time for PSMAddition, what should the shape of the US step-up look like through Q4 and into next year? Also, how do you see the ex-US trajectory playing out from here, particularly across Europe?",
    why: "Flat US Pluvicto sales against strong ex-US growth raises concern about US saturation of the post-taxane setting. The PSMAddition expansion is the key swing factor for 2027 revenue, and its referral lead time of 5 to 10 weeks determines when the step-up is visible in the numbers.",
    response: [
      "Quantify how much of the PSMAfore opportunity has been captured and what headroom remains in the US.",
      "Describe the expected shape of the PSMAddition ramp (step-up versus gradual) given the 5-to-10-week referral lead time.",
      "Outline the ex-US and European trajectory, including reimbursement and capacity drivers.",
    ],
    likelihood: "High",
    impact: "High",
  },
  {
    question:
      "We've now seen two consecutive quarters with core margins above 40%—reaching 41.6% in Q3—helped by very strong discipline on the SG&A line. Recognizing the typical seasonal step-up in Q4 spend, how much of that SG&A reduction reflects permanent, structural productivity gains versus temporary cost containment, and how should we think about the margin progression into 2027 relative to your 2029 40%+ target?",
    why: "A 41.6% core margin already sits above the 2029 target of 40%+, so the question is whether the SG&A gains are durable. Consensus 2027 margins depend on how much of the saving is structural versus timing, especially with launch investment continuing.",
    response: [
      "Split the SG&A reduction into structural productivity versus timing or temporary containment.",
      "Explain the expected Q4 seasonal step-up and the implied full-year margin.",
      "Reconcile the current margin with the 2029 40%+ target and say whether that target is now conservative.",
    ],
    likelihood: "High",
    impact: "Medium",
  },
  {
    question:
      "Following the FDA approval in symptomatic dermographism, you raised Rhapsido's peak sales guidance across CSU and CIndU to over $4 billion, while US commercial coverage currently sits at around 50% of label. How quickly do you expect payer access to ramp through Q4 and into 2027, and what gross-to-net dynamics should we model as contracting progresses?",
    why: "A peak sales view above $4 billion for Rhapsido depends on payer access, and US commercial coverage is only around 50% of label today. Speed of access and the level of rebating affect both the revenue ramp and net pricing in the model.",
    response: [
      "Give the expected timeline for coverage to reach a majority of lives and the key contracting milestones.",
      "Explain the gross-to-net trajectory as contracts are signed, and whether early-launch rebates are higher.",
      "Link the access ramp to the confidence behind the over $4 billion peak sales figure.",
    ],
    likelihood: "Medium",
    impact: "High",
  },
  {
    question:
      "On Kisqali, how much of your current growth is being driven by the adjuvant early breast cancer setting, and how are you thinking about the competitive risk from incoming oral SERDs in that space? Do you view your 6-year NATALEE overall survival data and established physician experience with endocrine therapy as sufficient to defend your eBC share?",
    why: "Kisqali is a core growth driver, and the early breast cancer setting is where the longest duration of therapy and the largest volume sit. Incoming oral SERDs are the main competitive threat, so investors want to know how durable the share is.",
    response: [
      "Break out growth contribution from adjuvant eBC versus metastatic.",
      "Explain how the 6-year NATALEE overall survival data differentiates Kisqali from oral SERD entrants.",
      "Describe the expected competitive timing and the physician switching dynamics.",
    ],
    likelihood: "High",
    impact: "Medium",
  },
  {
    question:
      "On Leqvio, we see the event-driven ORION-4 cardiovascular outcomes readout is now slated for Q4 of this year. Could you walk us through what is driving that year-end timing, what kind of MACE reduction profile you are looking to demonstrate, and whether a positive readout should drive a step-up in Leqvio adoption and sales momentum heading into 2027?",
    why: "ORION-4 is the first cardiovascular outcomes trial for Leqvio, and a positive result could shift prescribing from LDL-lowering to outcomes-based use. Because the trial is event-driven, the readout date moves with event accrual, so timing is a source of uncertainty.",
    response: [
      "Explain how event accrual drives the Q4 timing and how confident the company is in that date.",
      "State the MACE reduction that would be clinically and commercially meaningful.",
      "Describe how a positive readout would change guidelines, payer access and sales momentum in 2027.",
    ],
    likelihood: "High",
    impact: "High",
  },
  {
    question:
      "Quick question on Kesimpta in the US: we've seen increasing competitive pressure across the anti-CD20 market from IV and newer subcutaneous options, yet Kesimpta continues to post very steady share gains. Are you seeing any shift in competitive intensity on the ground in the US, and how will the Phase III FILIOS less-frequent dosing study help defend your position?",
    why: "Kesimpta is a large and highly profitable franchise, and any erosion from new anti-CD20 formulations would hit the near-term growth outlook. FILIOS is the company's lifecycle response, so its role in protecting share matters for long-term estimates.",
    response: [
      "Describe current competitive dynamics in the US, including new patient starts and switching.",
      "Explain what FILIOS is testing and how less-frequent dosing could improve convenience and persistence.",
      "Provide the timeline for FILIOS data and expected impact on positioning.",
    ],
    likelihood: "High",
    impact: "Medium",
  },
  {
    question:
      "Cosentyx grew 9% in constant currencies this quarter, helped by prior-year revenue deduction adjustments. If we strip out those gross-to-net adjustments, what was the underlying demand growth for the brand, and how are the hidradenitis suppurativa indication and the IV formulation performing to keep the base business resilient?",
    why: "The reported 9% constant-currency growth includes one-off gross-to-net benefits, so analysts need the underlying demand rate to model Cosentyx correctly. The HS and IV launches are the main levers to sustain growth as the brand matures.",
    response: [
      "Quantify the impact of prior-year revenue deduction adjustments and give an underlying volume growth rate.",
      "Update on uptake of the HS indication and the IV formulation.",
      "Describe the expected growth trajectory for the rest of the year and into 2027.",
    ],
    likelihood: "Medium",
    impact: "Medium",
  },
  {
    question:
      "Scemblix has now reached a 33% first-line NBRx share in the US. Could you give us a sense of how much of that new patient volume is coming from true frontline starts versus early switches off first- or second-generation TKIs, and where you see first-line market share ultimately peaking across key global markets?",
    why: "A 33% first-line new-to-brand share is a strong signal, but its quality depends on the mix between true frontline starts and early switches. The peak share view drives long-term sales estimates for Scemblix across the US and other major markets.",
    response: [
      "Provide the split between frontline starts and early switches from first- or second-generation TKIs.",
      "Explain what is driving physician preference (efficacy, tolerability, molecular response).",
      "Share a view on the realistic first-line share ceiling in the US and in key global markets.",
    ],
    likelihood: "Medium",
    impact: "Medium",
  },
  {
    question:
      "On capital allocation, you still have $4.9 billion remaining under your share buyback program, and your shares have rebounded nicely since the recent Phase III setbacks. How are you thinking about the pace of share buybacks going forward versus using that capital for business development to fill those pipeline gaps—and what would you need to see in an M&A opportunity to prioritize a deal over buybacks?",
    why: "After the del-desiran and pelacarsen setbacks, investors want to know whether Novartis will keep returning cash or turn to M&A to fill gaps. The $4.9 billion remaining on the buyback is a visible lever, and the answer shapes EPS accretion and balance sheet assumptions.",
    response: [
      "State the planned pace of repurchases and whether it is flexible if a deal emerges.",
      "Set out the criteria for M&A: stage of assets, therapeutic areas, size and return thresholds.",
      "Confirm balance sheet capacity and leverage ceiling for combining buybacks and BD.",
    ],
    likelihood: "High",
    impact: "Medium",
  },
  {
    question:
      "Going back to ianalumab in Sjögren's disease and the differences seen across clinical endpoints and patient subgroups in the Phase III data: as you work through label discussions with the FDA, is the focus primarily on how the endpoint benefit is described or on defining the target patient population—and how will the upcoming Phase III VAYHIT-1 readout in frontline ITP validate your broader B-cell depletion strategy?",
    why: "Mixed results across endpoints and subgroups create uncertainty over label breadth, which sets the addressable Sjögren's population and peak sales. VAYHIT-1 in frontline ITP is the next test of the broader B-cell depletion strategy for ianalumab.",
    response: [
      "Clarify whether FDA discussions center on endpoint interpretation or on defining responder populations.",
      "Indicate the expected label scope and approval timing.",
      "Explain what VAYHIT-1 needs to show and how it supports a multi-indication ianalumab strategy.",
    ],
    likelihood: "High",
    impact: "High",
  },
  {
    question:
      "With the FDA granting Priority Review for del-zota in DMD Exon 44, what level of dystrophin expression or exon-skipping biomarker data underpins the accelerated approval filing, and what commercial groundwork are you putting in place ahead of a potential US launch in 2027?",
    why: "Priority Review brings del-zota closer to market, but accelerated approval rests on surrogate biomarker evidence, which carries regulatory risk. A US launch in 2027 requires early commercial build in a small, specialist population.",
    response: [
      "Describe the dystrophin expression or exon-skipping data that supports the filing and how it compares with precedents.",
      "State the expected review timeline and any confirmatory trial requirements.",
      "Outline launch preparation: field force, patient identification and payer engagement.",
    ],
    likelihood: "Medium",
    impact: "Medium",
  },
  {
    question:
      "You completed the European filing for pelabresib in myelofibrosis this quarter based on MANIFEST-2 while MANIFEST-3 is still underway. What feedback from the EMA versus the FDA led you to file in Europe first, and what symptom score and spleen volume reduction benchmarks will MANIFEST-3 need to hit to support a US filing?",
    why: "Filing in Europe first signals a different regulatory read between the EMA and the FDA, which affects the US opportunity and timeline. MANIFEST-3 thresholds on symptom score and spleen volume determine whether pelabresib can reach the larger US market.",
    response: [
      "Explain regulator feedback that led to a Europe-first filing.",
      "Define the total symptom score and spleen volume reduction MANIFEST-3 must deliver for a US submission.",
      "Give timing for the MANIFEST-3 readout and any US filing plans.",
    ],
    likelihood: "Medium",
    impact: "Medium",
  },
  {
    question:
      "With Fabhalta reaching $101 million in Q3 sales and the final 24-month APPLAUSE-IgAN eGFR slope data now published, how is the launch progressing across PNH and IgAN, and how significantly could the Phase III readouts in generalized myasthenia gravis and IC-MPGN expand the brand's addressable opportunity?",
    why: "At $101 million in Q3 sales, Fabhalta is scaling, and the 24-month eGFR slope data supports its position in IgAN. The Phase III programs in generalized myasthenia gravis and IC-MPGN are the key levers to widen the label and lift peak sales.",
    response: [
      "Split Fabhalta performance between PNH and IgAN and discuss new patient trends.",
      "Explain how the 24-month eGFR slope data will support conversion to full approval and prescribing.",
      "Describe the timing and size of the opportunity in generalized myasthenia gravis and IC-MPGN.",
    ],
    likelihood: "Medium",
    impact: "Medium",
  },
  {
    question:
      "We noticed the Phase III RECHARGE 1 and 2 readouts for Rhapsido in hidradenitis suppurativa have been brought forward to the second half of 2026. What Week 16 HiSCR response bar are you looking to clear in those trials to position an oral BTK inhibitor competitively against established biologics and oral JAK inhibitors in HS?",
    why: "The earlier RECHARGE 1 and 2 readouts bring a major value event forward into the second half of 2026. HS is a competitive space, so the Week 16 HiSCR response bar determines whether an oral BTK inhibitor can be positioned against biologics and oral JAK inhibitors.",
    response: [
      "State the Week 16 HiSCR response level considered competitive, and the placebo-adjusted benefit expected.",
      "Explain why the readouts moved earlier and what it says about enrollment and event accrual.",
      "Describe the positioning of an oral option versus injectables and JAK inhibitors.",
    ],
    likelihood: "Medium",
    impact: "High",
  },
  {
    question:
      "Following the Phase III setbacks with del-desiran and pelacarsen this quarter, you reaffirmed your 5% to 6% sales CAGR guidance for 2025 to 2030 and your mid-single-digit long-term outlook. Which specific in-line growth drivers and late-stage launches do you expect to do the heavy lifting to offset those lost pipeline contributions?",
    why: "Two Phase III failures remove expected contributions, yet the 5% to 6% CAGR for 2025 to 2030 was reaffirmed. Investors need to see which products carry the load so they can judge whether the guidance carries a cushion or relies on higher risk assumptions.",
    response: [
      "Identify the top growth products and launches and their contribution to the CAGR.",
      "Quantify how much of the original guidance relied on del-desiran and pelacarsen.",
      "Explain what gives confidence in the reaffirmed range without those assets.",
    ],
    likelihood: "High",
    impact: "High",
  },
  {
    question:
      "Looking at your slide previewing the upcoming Meet Novartis Management event, you highlight a focus on mid- and late-stage pipeline assets to support long-term growth. Without giving too much away ahead of the event, could you frame which three or four mid-stage programs you view as the key drivers for the next decade, and will you be sharing updated peak sales guidelines and timelines to help us model them?",
    why: "With near-term pipeline setbacks, the mid-stage portfolio is the basis for the next decade's growth story. Investors want an early read on the priority programs and whether updated peak sales and timelines will be provided for modelling.",
    response: [
      "Frame the handful of mid-stage programs seen as most important without pre-empting the event.",
      "Confirm whether the event will include peak sales ranges, milestones and probability of success.",
      "Link the portfolio to the company's long-term growth outlook.",
    ],
    likelihood: "High",
    impact: "Medium",
  },
  {
    question:
      "I wanted to ask about your broader strategy in kidney disease. You now have multiple mechanisms across IgAN and other renal indications—including Fabhalta, Vanrafia, and your Phase III anti-APRIL zigakibart—so how do you see Novartis's presence in nephrology evolving from here, and how will you position these assets as the competitive landscape intensifies?",
    why: "Novartis is building a multi-asset position in IgAN and other renal diseases while competition from other mechanisms is increasing. Sequencing and combination of Fabhalta, Vanrafia and zigakibart drive the size and durability of the renal franchise.",
    response: [
      "Explain how each asset is positioned by mechanism, patient type and line of therapy.",
      "Address cannibalization risk between assets and the potential for combination use.",
      "State the long-term ambition for the renal franchise and key upcoming milestones.",
    ],
    likelihood: "High",
    impact: "Medium",
  },
  {
    question:
      "Beyond Pluvicto, as you advance your actinium-based radioligand AAA817 through the Phase III AcTFirst and PSMAcTION trials in mCRPC, how are you managing alpha-emitter isotope supply and manufacturing logistics to ensure you can scale commercially ahead of the 2028 readouts?",
    why: "Actinium-225 supply is a known bottleneck for alpha-emitting radioligands, so commercial scale depends on manufacturing readiness, not only on trial success. Investors see this platform as a long-term successor to Pluvicto, and supply constraints could limit its eventual revenue.",
    response: [
      "Describe isotope sourcing, secured supply and manufacturing capacity for the program.",
      "Explain the logistics approach for a short-half-life product, including site network and delivery.",
      "Share capital investment expectations and the timeline to commercial scale before the 2028 readouts.",
    ],
    likelihood: "Low",
    impact: "Medium",
  },
  {
    question:
      "On abelacimab in the Phase III LILAC-TIMI 76 study for high-risk atrial fibrillation patients unsuitable for oral anticoagulation: ahead of the 2027 readout, what reduction in major BARC 3c/5 bleeding events alongside stroke protection do you need to demonstrate to establish a transformative profile in the Factor XI class?",
    why: "The Factor XI class is competitive, and the commercial case for abelacimab rests on a clear bleeding advantage with maintained stroke protection in a hard-to-treat population. The magnitude of BARC 3c and 5 bleeding reduction will define positioning and pricing.",
    response: [
      "State the bleeding reduction and stroke protection profile that would be considered transformative.",
      "Explain the trial design and the size of the unmet need in patients unsuitable for oral anticoagulation.",
      "Describe how the profile compares with other Factor XI programs and timing of the 2027 readout.",
    ],
    likelihood: "Low",
    impact: "Medium",
  },
  {
    question:
      "As your AGT-targeting siRNA QCZ484 approaches its Phase II interim readout in hypertension later this year, what magnitude of 24-hour ambulatory blood pressure reduction at Month 3 are you looking for to take the program into pivotal Phase III development?",
    why: "A positive Phase II interim for QCZ484 would add a large-market cardiovascular asset to the mid-stage pipeline at a time when investors are looking for new growth drivers. The blood pressure bar sets the decision to invest in a broad Phase III program.",
    response: [
      "Define the 24-hour ambulatory blood pressure reduction at Month 3 needed to proceed.",
      "Explain how the profile would compare with existing hypertension therapies and what durability is expected.",
      "Outline the Phase III plan and investment required if the readout is positive.",
    ],
    likelihood: "Low",
    impact: "Medium",
  },
  {
    question:
      "With votoplam now underway in the Phase III INVEST-HD trial in Huntington's disease, how are regulators viewing the pathway to registration, and what degree of benefit on the composite cUHDRS functional endpoint will be required to support approval?",
    why: "Huntington's disease has no disease-modifying treatment, so a successful votoplam program would be a high-value opportunity. Regulatory acceptance of the cUHDRS endpoint and the size of the required benefit determine both approval probability and label.",
    response: [
      "Share regulator feedback on the registration pathway, including any accelerated approval route.",
      "Define the level of cUHDRS benefit considered clinically meaningful.",
      "Provide trial size, duration and expected readout timing.",
    ],
    likelihood: "Low",
    impact: "Medium",
  },
  {
    question:
      "You maintained full-year 2026 guidance for core net financial expenses at around $1.7 billion and a core tax rate of roughly 16.5%. Given the higher net debt balance following recent business development and the rollout of global minimum tax rules, how should we think about the trajectory of those two lines heading into 2027?",
    why: "Core net financial expenses of about $1.7 billion and a core tax rate of roughly 16.5% feed directly into core EPS. Higher net debt and global minimum tax rules put upward pressure on both lines in 2027, so analysts need a bridge from 2026.",
    response: [
      "Indicate the direction and drivers of financial expenses in 2027, including debt levels and refinancing.",
      "Explain the expected impact of global minimum tax rules on the core tax rate.",
      "Confirm whether 2026 guidance is a good base for modelling 2027 or if there are one-offs.",
    ],
    likelihood: "Medium",
    impact: "Low",
  },
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
  return items.map((item, i) => ({
    number: i + 1,
    question: item.question,
    whyInvestorsCare: item.why,
    responseGuidance: item.response.map((r) => `• ${r}`).join("\n"),
    supportingSource: "",
    likelihood: item.likelihood,
    impact: item.impact,
  }));
}

export const demoRawText = (questions: ParsedQuestion[]) =>
  questions
    .map(
      (q) =>
        `${q.number}. QUESTION: ${q.question}\nWHY INVESTORS CARE: ${q.whyInvestorsCare}\nWHAT A STRONG MANAGEMENT RESPONSE SHOULD ADDRESS:\n${q.responseGuidance}\nLIKELIHOOD OF BEING ASKED: ${q.likelihood}\nPOTENTIAL IMPACT ON INVESTOR SENTIMENT: ${q.impact}`
    )
    .join("\n\n");
