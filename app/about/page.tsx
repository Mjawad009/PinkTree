import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Navigation } from "@/components/site/navigation";
import { FooterSection } from "@/components/site/footer-section";
import { PageHero } from "@/components/site/page-hero";
import { CtaSection } from "@/components/site/cta-section";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About",
  description: "Pink Tree is an AI consulting and custom software studio, and the team behind The Evasion Chat.",
};

const values = [
  {
    title: "We scope honestly",
    description: "If AI isn't the right fit for a problem, we'll tell you — even if that means recommending a smaller engagement than you asked for.",
  },
  {
    title: "We build on what you have",
    description: "We connect and extend your existing systems wherever we can, instead of defaulting to a rip-and-replace.",
  },
  {
    title: "We build things we'd stand behind",
    description: "Every engagement is built to be documented, maintainable, and owned by you — not a black box you're dependent on us for.",
  },
];

export default function AboutPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navigation />

      <PageHero
        eyebrow="About"
        title={
          <>
            We build the AI
            <br />
            <span className="text-muted-foreground">behind the AI hype.</span>
          </>
        }
        subheading="Pink Tree is an AI consulting and custom software studio. We're also the team behind The Evasion Chat, our own product."
      />

      <section className="relative py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-[840px]">
            <p className="text-xl leading-relaxed text-muted-foreground mb-8">
              [Founding story / mission placeholder — a short paragraph on why Pink Tree exists,
              who founded it, and what problem you set out to solve. Replace with your real story.]
            </p>
            <p className="text-xl leading-relaxed text-muted-foreground">
              We work directly with businesses to design and build AI solutions scoped to their
              actual problems — from a single workflow automation to a fully custom platform. The
              Evasion Chat, our flagship product, grew directly out of patterns we kept building
              for clients again and again.
            </p>
          </div>
        </div>
      </section>

      <section className="relative py-24 lg:py-32 border-t border-foreground/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <span className="text-sm font-mono text-muted-foreground mb-10 block">How we work</span>
          <div className="grid sm:grid-cols-3 gap-10">
            {values.map((value) => (
              <div key={value.title}>
                <h3 className="text-lg font-medium mb-3">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 lg:py-32 border-t border-foreground/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl lg:text-4xl font-display tracking-tight mb-6">Our product</h2>
          <p className="text-muted-foreground leading-relaxed max-w-xl mx-auto mb-10">
            The Evasion Chat is our flagship AI automation platform — built by the same team
            that scopes and delivers every custom engagement.
          </p>
          <Button asChild size="lg" variant="outline" className="h-12 px-8 rounded-full border-foreground/20">
            <Link href="/platform">
              See the platform
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </section>

      <CtaSection />
      <FooterSection />
    </main>
  );
}
