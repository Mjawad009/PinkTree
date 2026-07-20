import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Navigation } from "@/components/site/navigation";
import { FooterSection } from "@/components/site/footer-section";
import { CtaSection } from "@/components/site/cta-section";
import { caseStudies, getCaseStudyBySlug } from "@/lib/case-studies-data";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) return {};
  return {
    title: `${study.company} — Case Study`,
    description: study.summary,
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) notFound();

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navigation />

      <article className="relative pt-40 pb-24 lg:pt-48 lg:pb-32">
        <div className="max-w-[840px] mx-auto px-6 lg:px-12">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-foreground transition-colors mb-12"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            All case studies
          </Link>

          <span className="text-xs font-mono text-muted-foreground">{study.industry}</span>
          <h1 className="text-4xl md:text-5xl font-display tracking-tight leading-[1.05] mt-3 mb-10">
            {study.company}
          </h1>

          <div className="flex items-baseline gap-4 mb-16 pb-16 border-b border-foreground/10">
            <span className="text-5xl font-display">{study.result}</span>
            <span className="text-muted-foreground">{study.resultLabel}</span>
          </div>

          <div className="space-y-12">
            <div>
              <h2 className="text-sm font-mono text-muted-foreground mb-4">The engagement</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">{study.engagement}</p>
            </div>
            <div>
              <h2 className="text-sm font-mono text-muted-foreground mb-4">Our approach</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">{study.approach}</p>
            </div>
            <div>
              <h2 className="text-sm font-mono text-muted-foreground mb-4">The outcome</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">{study.outcome}</p>
            </div>
          </div>

          <blockquote className="mt-16 pt-16 border-t border-foreground/10">
            <p className="text-2xl font-display leading-snug mb-4">&ldquo;{study.quote.text}&rdquo;</p>
            <cite className="text-sm text-muted-foreground not-italic">{study.quote.role}</cite>
          </blockquote>
        </div>
      </article>

      <CtaSection />
      <FooterSection />
    </main>
  );
}
