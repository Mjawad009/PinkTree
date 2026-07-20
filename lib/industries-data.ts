import type { LucideIcon } from "lucide-react";
import { Stamp, Microscope } from "lucide-react";

export interface IndustryData {
  slug: string;
  industry: string;
  icon: LucideIcon;
  headline: string;
  subheading: string;
  challenges: { title: string; description: string }[];
  aiSolutions: { name: string; href: string }[];
  recommendedProduct: { name: string; description: string; href: string };
  faqs: { question: string; answer: string }[];
}

// Scoped to our two initial target industries — consulting/engagement angle
// (as opposed to evasionchat.pinktree.co's product-usage angle for the same
// two verticals). Shape is intentionally generic so more industries can be
// appended later without restructuring the page templates.
export const industries: IndustryData[] = [
  {
    slug: "visa-consultants",
    industry: "Visa Consultants",
    icon: Stamp,
    headline: "AI that scales your consultancy without diluting your advice.",
    subheading:
      "Visa and immigration consultancies run on repeatable process and judgment calls. We help you automate the repeatable part and free your consultants for the judgment calls.",
    challenges: [
      {
        title: "The same eligibility questions, every single day",
        description: "Prospects ask the same handful of qualifying questions before ever booking a call — consuming hours your consultants could spend on active cases.",
      },
      {
        title: "Case status and document requests generate constant back-and-forth",
        description: "Applicants want updates and clarity on what's still needed. Without automation, that's a stream of manual emails and calls.",
      },
      {
        title: "Multiple branches or consultants, inconsistent processes",
        description: "As a consultancy grows, keeping intake, documentation, and follow-up consistent across consultants gets harder without shared systems.",
      },
    ],
    aiSolutions: [
      { name: "AI Workflow Automation", href: "/ai-solutions/ai-workflow-automation" },
      { name: "Custom AI Agents", href: "/ai-solutions/custom-ai-agents" },
      { name: "Enterprise Integrations", href: "/ai-solutions/enterprise-integrations" },
    ],
    recommendedProduct: {
      name: "The Evasion Chat",
      description: "Trained on your service list and eligibility criteria, it pre-qualifies prospects and answers routine questions 24/7 — so consultants start every call with a warm, informed lead.",
      href: "https://evasionchat.pinktree.co/industries/visa-consultants",
    },
    faqs: [
      { question: "Will this replace our consultants' advice?", answer: "No — everything we build is scoped to answer routine, factual questions and hand off anything requiring judgment to a licensed consultant. It's built to inform, not to advise." },
      { question: "How do you handle sensitive applicant data?", answer: "Every engagement is scoped with your data handling and compliance requirements as a starting constraint, not an afterthought." },
      { question: "We have multiple branches with different processes — can this handle that?", answer: "Yes — multi-tenant setup means each branch can have its own trained configuration, service list, and pricing, while still rolling up to shared reporting." },
    ],
  },
  {
    slug: "research-companies",
    industry: "Research Companies",
    icon: Microscope,
    headline: "Make your institutional knowledge actually usable.",
    subheading:
      "Research organizations accumulate huge amounts of documentation — papers, protocols, internal reports — that becomes harder to find and use as the archive grows. We build systems that make it searchable and useful again.",
    challenges: [
      {
        title: "Institutional knowledge is scattered and hard to search",
        description: "Findings, protocols, and reports live across drives, wikis, and inboxes — with no single way to query across all of it.",
      },
      {
        title: "New researchers repeat questions that are already answered",
        description: "Without a shared knowledge system, onboarding relies on senior staff answering the same questions again and again.",
      },
      {
        title: "External inquiries pull staff away from research",
        description: "Common questions about published work or collaboration processes take time away from the research itself.",
      },
    ],
    aiSolutions: [
      { name: "Knowledge Base Systems", href: "/ai-solutions/knowledge-base-systems" },
      { name: "Custom AI Agents", href: "/ai-solutions/custom-ai-agents" },
      { name: "Enterprise Integrations", href: "/ai-solutions/enterprise-integrations" },
    ],
    recommendedProduct: {
      name: "The Evasion Chat",
      description: "An internal knowledge assistant trained on your documents, protocols, and reports — with every answer referencing its source document for verification.",
      href: "https://evasionchat.pinktree.co/industries/research-companies",
    },
    faqs: [
      { question: "Can the system cite where an answer came from?", answer: "Yes — this is a requirement we build in from the start for research use cases, so answers can be verified against the source document." },
      { question: "Does this need to be public-facing?", answer: "No — most of what we build for research organizations is internal-only, sitting behind your existing access controls." },
      { question: "Can it handle documents in formats other than PDF?", answer: "Yes — Word documents, spreadsheets, and most common formats are supported. Talk to us about anything more specialized in your archive." },
    ],
  },
];

export function getIndustryBySlug(slug: string): IndustryData | undefined {
  return industries.find((i) => i.slug === slug);
}
