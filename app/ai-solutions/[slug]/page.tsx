import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { Navigation } from "@/components/site/navigation";
import { FooterSection } from "@/components/site/footer-section";
import { CtaSection } from "@/components/site/cta-section";
import { FaqAccordion } from "@/components/site/faq-accordion";
import { Button } from "@/components/ui/button";
import { aiSolutions, getAiSolutionBySlug } from "@/lib/ai-solutions-data";
import { faqPageJsonLd } from "@/lib/seo";

export function generateStaticParams() {
  return aiSolutions.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const solution = getAiSolutionBySlug(slug);
  if (!solution) return {};
  return {
    title: solution.name,
    description: solution.headline,
  };
}

export default async function AiSolutionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const solution = getAiSolutionBySlug(slug);
  if (!solution) notFound();

  const otherSolutions = aiSolutions.filter((s) => s.slug !== solution.slug).slice(0, 3);

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageJsonLd(solution.faqs)) }}
      />
      <Navigation />

      <section className="relative pt-40 pb-20 lg:pt-48 lg:pb-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <Link
            href="/ai-solutions"
            className="inline-flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-foreground transition-colors mb-12"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            All AI Solutions
          </Link>

          <solution.icon className="w-9 h-9 mb-8 text-[#eca8d6]" />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display tracking-tight leading-[1.05] mb-6">
            {solution.headline}
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mb-10">
            {solution.subheading}
          </p>
          <Button
            asChild
            size="lg"
            className="bg-foreground hover:bg-foreground/90 text-background px-8 h-14 text-base rounded-full group"
          >
            <Link href="/book-consultation">
              Book a consultation
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </section>

      <section className="relative py-20 lg:py-24 border-t border-foreground/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <span className="text-sm font-mono text-muted-foreground mb-10 block">What you get</span>
          <div className="grid sm:grid-cols-3 gap-8">
            {solution.outcomes.map((outcome) => (
              <div key={outcome.title}>
                <h3 className="font-medium mb-2">{outcome.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{outcome.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 lg:py-24 border-t border-foreground/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <span className="text-sm font-mono text-muted-foreground mb-10 block">How it works</span>
          <div className="space-y-6 max-w-2xl">
            {solution.process.map((step, i) => (
              <div key={step} className="flex items-start gap-5">
                <span className="text-sm font-mono text-muted-foreground w-8 shrink-0 pt-0.5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#eca8d6] mt-1 shrink-0" />
                  <p className="text-lg leading-relaxed">{step}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 lg:py-24 border-t border-foreground/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <span className="text-sm font-mono text-muted-foreground mb-10 block">Frequently asked</span>
          <FaqAccordion items={solution.faqs} />
        </div>
      </section>

      {otherSolutions.length > 0 && (
        <section className="relative py-20 lg:py-24 border-t border-foreground/10">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <span className="text-sm font-mono text-muted-foreground mb-10 block">Other AI Solutions</span>
            <div className="space-y-4">
              {otherSolutions.map((s) => (
                <Link
                  key={s.slug}
                  href={`/ai-solutions/${s.slug}`}
                  className="group flex items-center justify-between gap-4 py-4 border-b border-foreground/10"
                >
                  <span className="font-medium group-hover:text-muted-foreground transition-colors">
                    {s.name}
                  </span>
                  <ArrowRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaSection />
      <FooterSection />
    </main>
  );
}
