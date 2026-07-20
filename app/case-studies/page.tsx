import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Navigation } from "@/components/site/navigation";
import { FooterSection } from "@/components/site/footer-section";
import { PageHero } from "@/components/site/page-hero";
import { CtaSection } from "@/components/site/cta-section";
import { Reveal } from "@/components/site/reveal";
import { caseStudies } from "@/lib/case-studies-data";

export const metadata: Metadata = {
  title: "Case Studies",
  description: "How Pink Tree has helped businesses design and implement custom AI solutions.",
};

export default function CaseStudiesPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navigation />

      <PageHero
        eyebrow="Case Studies"
        title={
          <>
            Real problems,
            <br />
            <span className="text-muted-foreground">real engagements.</span>
          </>
        }
        subheading="A look at how we've scoped and delivered AI solutions for businesses like yours."
      />

      <section className="relative py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 space-y-px bg-foreground/10">
          {caseStudies.map((study, i) => (
            <Reveal key={study.slug} delay={i * 100}>
              <Link
                href={`/case-studies/${study.slug}`}
                className="group grid gap-4 sm:grid-cols-[160px_1fr_auto] md:grid-cols-[200px_1fr_auto] sm:items-center sm:gap-6 bg-background p-8 lg:p-10 hover:bg-foreground/[0.03] transition-colors"
              >
                <div>
                  <span className="text-3xl font-display block mb-1">{study.result}</span>
                  <span className="text-xs text-muted-foreground">{study.resultLabel}</span>
                </div>
                <div>
                  <span className="text-xs font-mono text-muted-foreground">{study.industry}</span>
                  <h2 className="text-lg font-medium mt-1">{study.company}</h2>
                  <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{study.summary}</p>
                </div>
                <ArrowRight className="w-5 h-5 shrink-0 sm:justify-self-end transition-transform group-hover:translate-x-1" />
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaSection />
      <FooterSection />
    </main>
  );
}
