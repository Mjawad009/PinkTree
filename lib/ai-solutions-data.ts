import type { LucideIcon } from "lucide-react";
import { Workflow, Bot, Library, Network, Code2 } from "lucide-react";

export interface AiSolution {
  slug: string;
  icon: LucideIcon;
  name: string;
  headline: string;
  subheading: string;
  outcomes: { title: string; description: string }[];
  process: string[];
  faqs: { question: string; answer: string }[];
}

export const aiSolutions: AiSolution[] = [
  {
    slug: "ai-workflow-automation",
    icon: Workflow,
    name: "AI Workflow Automation",
    headline: "Automate the steps between the questions and the outcome.",
    subheading:
      "We design and build automations that connect your tools — CRM, helpdesk, internal systems — so routine work happens without someone re-entering data or chasing a handoff.",
    outcomes: [
      { title: "Fewer manual handoffs", description: "Work moves between systems automatically, with the context it needs attached." },
      { title: "Faster cycle times", description: "Processes that took days of back-and-forth run in minutes." },
      { title: "Fewer errors from manual re-entry", description: "Data moves once, correctly, instead of being copied by hand between tools." },
    ],
    process: [
      "Map your current process and identify where time and accuracy are lost",
      "Design the automation across your existing tools — no rip-and-replace",
      "Build, test against real cases, and hand off with documentation",
    ],
    faqs: [
      { question: "Do we need to replace our existing tools?", answer: "Usually not — we build automations that connect the tools you already use rather than requiring a platform switch." },
      { question: "How long does a typical engagement take?", answer: "4–8 weeks — depends on the complexity and number of systems involved. We'll scope this with you before starting." },
      { question: "What if our process changes after launch?", answer: "Automations built this way are meant to flex — most changes are configuration updates, not a rebuild. We'll scope ongoing support if you expect frequent process changes." },
    ],
  },
  {
    slug: "custom-ai-agents",
    icon: Bot,
    name: "Custom AI Agents",
    headline: "An AI agent built around your process, not a generic template.",
    subheading:
      "When The Evasion Chat's out-of-the-box configuration isn't enough, we build custom AI agents tailored to your specific workflow, data, and decision logic.",
    outcomes: [
      { title: "Handles your specific edge cases", description: "Built around how your business actually operates, not a one-size-fits-all script." },
      { title: "Integrates with proprietary systems", description: "Connects to internal tools and data sources a generic product can't reach." },
      { title: "Owned and documented", description: "You get a system your team understands and can maintain, not a black box." },
    ],
    process: [
      "Scope the agent's role, decision boundaries, and required integrations",
      "Build and train against your real data and edge cases",
      "Deploy with monitoring and a clear escalation path for anything it shouldn't handle alone",
    ],
    faqs: [
      { question: "How is this different from The Evasion Chat?", answer: "The Evasion Chat is our packaged product for common chatbot use cases. Custom AI agents are for situations that need bespoke logic, proprietary integrations, or a decision process the packaged product doesn't cover." },
      { question: "Who maintains it after launch?", answer: "We hand off with documentation, and offer ongoing support arrangements if you'd rather we maintain it — your call." },
      { question: "What happens if the agent encounters something it can't handle?", answer: "Every agent we build has a defined escalation path — it hands off to a human rather than guessing, with the boundaries of what it should and shouldn't decide set during scoping." },
    ],
  },
  {
    slug: "knowledge-base-systems",
    icon: Library,
    name: "Knowledge Base Systems",
    headline: "Turn scattered documentation into a system people actually use.",
    subheading:
      "We build searchable, AI-queryable knowledge systems out of your existing documents, wikis, and institutional knowledge — so the right answer is one query away, not one Slack message away.",
    outcomes: [
      { title: "Faster onboarding", description: "New hires find answers themselves instead of interrupting senior staff." },
      { title: "Consistent answers", description: "Everyone pulls from the same source of truth instead of tribal knowledge." },
      { title: "Answers with sources", description: "Every answer references the document it came from, so it can be verified." },
    ],
    process: [
      "Audit and consolidate existing documentation and knowledge sources",
      "Build the retrieval and query system around it",
      "Roll out with access controls appropriate to your organization",
    ],
    faqs: [
      { question: "Can this stay internal-only?", answer: "Yes — most knowledge base systems we build are staff-only, sitting behind your existing access controls." },
      { question: "What if our documentation is a mess?", answer: "That's normal — part of the engagement is helping consolidate and structure what you have before building the system on top of it." },
      { question: "Does it work with documents we add later?", answer: "Yes — the system is built to index new and updated documents on an ongoing basis, not just a one-time upload." },
    ],
  },
  {
    slug: "enterprise-integrations",
    icon: Network,
    name: "Enterprise Integrations",
    headline: "Make your systems talk to each other, reliably.",
    subheading:
      "We connect CRMs, ERPs, support platforms, and internal tools so data flows automatically between them — built for the reliability and governance an enterprise environment requires.",
    outcomes: [
      { title: "One source of truth", description: "Data stays in sync across systems instead of drifting apart." },
      { title: "Built for scale and governance", description: "Designed with the access control, logging, and reliability an enterprise environment needs." },
      { title: "Extensible", description: "Built to accommodate new systems and requirements as your stack evolves." },
    ],
    process: [
      "Map your current systems and integration requirements",
      "Design an integration architecture built for reliability and governance",
      "Build, test, and hand off with monitoring in place",
    ],
    faqs: [
      { question: "Do you work with our specific enterprise systems?", answer: "In most cases, yes — talk to us about your specific stack and requirements and we'll confirm fit before scoping anything." },
      { question: "What about data security and compliance?", answer: "Integrations are built with your existing security and compliance requirements as a baseline constraint, not an afterthought." },
      { question: "Will this create a single point of failure?", answer: "No — integrations are designed with fallback and monitoring in mind, so a failure in one connected system doesn't take down the others." },
    ],
  },
  {
    slug: "custom-software-development",
    icon: Code2,
    name: "Custom Software Development",
    headline: "When the problem needs software built around it, not the other way around.",
    subheading:
      "For needs that go beyond automation and integration, we design and build custom software — internal tools, customer-facing applications, or full platforms — built around your actual requirements.",
    outcomes: [
      { title: "Built for your exact requirements", description: "No working around the limitations of off-the-shelf software." },
      { title: "Owned by you", description: "You own the code and the system, not a subscription to someone else's roadmap." },
      { title: "Designed to scale with you", description: "Architecture chosen to support your business as it grows, not just launch." },
    ],
    process: [
      "Discovery — understand the problem, users, and constraints",
      "Design and build in iterative phases, with regular checkpoints",
      "Launch, with documentation and a plan for ongoing support",
    ],
    faqs: [
      { question: "Do you do fixed-price or ongoing engagements?", answer: "Both, depending on the project — we'll recommend the structure that fits your scope during the consultation." },
      { question: "Can you work with our existing engineering team?", answer: "Yes — we regularly work alongside in-house teams, either leading a specific build or augmenting existing capacity." },
      { question: "What happens to the code after the project ends?", answer: "You own it. We hand off the full codebase, documentation, and deployment setup — there's no lock-in to us for hosting or maintenance." },
    ],
  },
];

export function getAiSolutionBySlug(slug: string): AiSolution | undefined {
  return aiSolutions.find((s) => s.slug === slug);
}
