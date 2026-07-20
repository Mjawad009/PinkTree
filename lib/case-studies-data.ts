export interface CaseStudy {
  slug: string;
  company: string;
  industry: string;
  result: string;
  resultLabel: string;
  summary: string;
  engagement: string;
  approach: string;
  outcome: string;
  quote: { text: string; role: string };
}

// PLACEHOLDER CASE STUDIES — replace with real, permissioned client stories,
// names, companies, and metrics before publishing. These are told from the
// consulting-engagement angle (challenge → approach → outcome); the same
// underlying stories are told from the product-usage angle on
// evasionchat.pinktree.co/case-studies.
export const caseStudies: CaseStudy[] = [
  {
    slug: "consultancy-a-visa",
    company: "Meridian Visa Partners",
    industry: "Visa Consultants",
    result: "65%",
    resultLabel: "of routine eligibility questions resolved before a call",
    summary:
      "A multi-branch visa consultancy engaged Pink Tree to reduce the pre-call workload on its consultants without adding headcount.",
    engagement:
      "The consultancy's growth had outpaced its intake process — consultants were spending hours each week answering the same eligibility questions across email, phone, and WhatsApp before a case was even qualified.",
    approach:
      "We deployed a trained instance of The Evasion Chat across all branches, configured on their service list and eligibility criteria, and built a workflow automation layer that routed qualified leads directly into their CRM with full conversation context attached.",
    outcome:
      "Consultants now start every call with a pre-qualified, informed prospect. Routine eligibility questions are handled automatically, and the intake process is consistent across every branch for the first time.",
    quote: {
      text: "Pink Tree scoped this around how we actually work, not a generic template. Our consultants got their time back within the first month.",
      role: "Managing Director",
    },
  },
  {
    slug: "company-b-research",
    company: "Brightwell Research Institute",
    industry: "Research Companies",
    result: "6 hrs/week",
    resultLabel: "less time spent searching for existing findings",
    summary:
      "A research organization worked with Pink Tree to consolidate years of scattered documentation into a single, queryable knowledge system for staff.",
    engagement:
      "Institutional knowledge was spread across shared drives, an internal wiki, and individual inboxes. New researchers relied heavily on senior staff to find prior findings and protocols, slowing onboarding and duplicating effort.",
    approach:
      "Pink Tree audited and consolidated the existing documentation, then built an internal knowledge base system — an instance of The Evasion Chat configured as an internal assistant — that indexes the organization's documents and cites its source on every answer.",
    outcome:
      "New researchers now self-serve on process and prior-findings questions, with senior staff freed from repeat explanations. Every answer references its source document, so findings remain verifiable.",
    quote: {
      text: "It's the first system where I actually trust the answer, because it shows me exactly which document it came from.",
      role: "Research Operations Lead",
    },
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}
