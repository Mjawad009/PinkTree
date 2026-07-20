import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Navigation } from "@/components/site/navigation";
import { FooterSection } from "@/components/site/footer-section";
import { CtaSection } from "@/components/site/cta-section";
import { FaqAccordion } from "@/components/site/faq-accordion";
import { Button } from "@/components/ui/button";
import { industries, getIndustryBySlug } from "@/lib/industries-data";
import { caseStudies } from "@/lib/case-studies-data";
import { faqPageJsonLd } from "@/lib/seo";

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) return {};
  return {
    title: industry.industry,
    description: industry.headline,
  };
}

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) notFound();

  const relatedCaseStudy = caseStudies.find((c) => c.industry === industry.industry);

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageJsonLd(industry.faqs)) }}
      />
      <Navigation />

      <section className="relative pt-40 pb-20 lg:pt-48 lg:pb-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <Link
            href="/industries"
            className="inline-flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-foreground transition-colors mb-12"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            All Industries
          </Link>

          <industry.icon className="w-9 h-9 mb-8 text-[#eca8d6]" />
          <span className="text-sm font-mono text-muted-foreground mb-4 block">{industry.industry}</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display tracking-tight leading-[1.05] mb-6">
            {industry.headline}
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
            {industry.subheading}
          </p>
        </div>
      </section>

      <section className="relative py-20 lg:py-24 border-t border-foreground/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <span className="text-sm font-mono text-muted-foreground mb-10 block">Challenges we solve</span>
          <div className="space-y-10">
            {industry.challenges.map((challenge) => (
              <div key={challenge.title}>
                <h3 className="text-xl font-medium mb-2">{challenge.title}</h3>
                <p className="text-muted-foreground leading-relaxed max-w-2xl">{challenge.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 lg:py-24 border-t border-foreground/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <span className="text-sm font-mono text-muted-foreground mb-10 block">Relevant AI Solutions</span>
          <div className="flex flex-wrap gap-3">
            {industry.aiSolutions.map((s) => (
              <Link
                key={s.name}
                href={s.href}
                className="inline-flex items-center gap-2 text-sm border border-foreground/15 rounded-full px-5 py-2.5 hover:bg-foreground/[0.03] transition-colors"
              >
                {s.name}
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 lg:py-24 border-t border-foreground/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <span className="text-sm font-mono text-muted-foreground mb-10 block">Recommended product</span>
          <div className="rounded-2xl border border-foreground/10 p-10 lg:p-12">
            <h3 className="text-2xl font-medium mb-3">{industry.recommendedProduct.name}</h3>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mb-8">
              {industry.recommendedProduct.description}
            </p>
            <Button asChild variant="outline" className="rounded-full border-foreground/20">
              <Link href={industry.recommendedProduct.href}>
                See it for {industry.industry.toLowerCase()}
                <ArrowRight className="w-3.5 h-3.5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {relatedCaseStudy && (
        <section className="relative py-20 lg:py-24 border-t border-foreground/10">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <span className="text-sm font-mono text-muted-foreground mb-10 block">Case study</span>
            <Link
              href={`/case-studies/${relatedCaseStudy.slug}`}
              className="group block rounded-2xl border border-foreground/10 p-10 lg:p-12 hover:bg-foreground/[0.03] transition-colors"
            >
              <span className="text-3xl font-display block mb-2">{relatedCaseStudy.result}</span>
              <span className="text-sm text-muted-foreground block mb-6">{relatedCaseStudy.resultLabel}</span>
              <p className="text-lg leading-relaxed max-w-2xl mb-6">{relatedCaseStudy.summary}</p>
              <span className="inline-flex items-center gap-2 text-sm font-mono text-muted-foreground group-hover:text-foreground transition-colors">
                Read the case study
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </div>
        </section>
      )}

      <section className="relative py-20 lg:py-24 border-t border-foreground/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <FaqAccordion items={industry.faqs} title="Frequently asked" />
        </div>
      </section>

      <CtaSection />
      <FooterSection />
    </main>
  );
}
