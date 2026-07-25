import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Navigation } from "@/components/site/navigation";
import { FooterSection } from "@/components/site/footer-section";
import { PageHero } from "@/components/site/page-hero";
import { CtaSection } from "@/components/site/cta-section";
import { Reveal } from "@/components/site/reveal";
import { aiSolutions } from "@/lib/ai-solutions-data";

export const metadata: Metadata = {
  title: "AI Solutions",
  description: "Custom AI workflow automation, AI agents, knowledge base systems, enterprise integrations, and custom software development.",
};

export default function AiSolutionsPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navigation />

      <PageHero
        variant="network"
        eyebrow="AI Solutions"
        title={
          <>
            Five ways we help
            <br />
            <span className="text-muted-foreground">businesses use AI well.</span>
          </>
        }
        subheading="Not every problem needs the same solution. We scope each engagement around what you actually need — from a single automation to a fully custom build."
      />

      <section className="relative py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid sm:grid-cols-2 gap-px bg-foreground/10">
            {aiSolutions.map((solution, i) => (
              <Reveal key={solution.slug} delay={i * 80}>
                <Link
                  href={`/ai-solutions/${solution.slug}`}
                  className="group relative block h-full bg-background p-10 lg:p-12 transition-colors hover:bg-foreground/[0.03]"
                >
                  <solution.icon className="w-7 h-7 mb-8 text-[#eca8d6]" />
                  <h2 className="text-2xl font-medium mb-3">{solution.name}</h2>
                  <p className="text-muted-foreground leading-relaxed mb-8 max-w-md">
                    {solution.headline}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-mono text-muted-foreground group-hover:text-foreground transition-colors">
                    Learn more
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
      <FooterSection />
    </main>
  );
}
