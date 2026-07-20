export interface Guide {
  slug: string;
  title: string;
  excerpt: string;
  readTime: string;
  content: string[];
}

// Guides are longer-form, evergreen reference content — distinct from the
// dated Blog. Kept as a simple static array rather than the file-backed CMS
// used for the Blog, since guides are edited far less frequently and don't
// need an admin UI for v1. If that changes, this can be swapped for the same
// store pattern as lib/blog-store.ts without touching the page templates.
export const guides: Guide[] = [
  {
    slug: "how-to-know-if-you-need-custom-software",
    title: "How to know if you need custom software (and if you don't, yet)",
    excerpt: "A practical checklist for deciding between a workaround, an off-the-shelf tool, and a custom build.",
    readTime: "6 min read",
    content: [
      "Not every operational pain point needs custom software. This guide walks through a simple framework for deciding what level of solution actually fits your problem.",
      "Start by asking whether the process is truly repeatable and high-volume, or a one-off exception. High-volume, repeatable, and currently manual is the strongest signal for automation or custom software.",
      "Next, check whether an off-the-shelf tool already solves 80% of the problem. If it does, the remaining 20% is often better solved with a small integration than a full custom build.",
      "If neither applies — the process is core to how your business operates and no existing tool fits — that's when a custom solution earns its cost.",
    ],
  },
  {
    slug: "preparing-for-an-ai-consultation",
    title: "What to bring to your first AI consultation",
    excerpt: "Get more out of your consultation call by coming prepared with these five things.",
    readTime: "4 min read",
    content: [
      "A good consultation call isn't a sales pitch — it's a scoping conversation. Coming prepared helps us give you a more accurate picture of fit, timeline, and cost in that first call.",
      "Bring a clear description of the process or problem, in your own words, including who's involved and how often it happens today.",
      "Bring a rough sense of the systems and tools currently involved — even an incomplete list helps us gauge integration complexity.",
      "Bring any constraints up front: budget range, timeline, compliance requirements. The earlier we know these, the more useful our recommendation will be.",
    ],
  },
];

export function getGuideBySlug(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}
