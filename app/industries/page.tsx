import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Navigation } from "@/components/site/navigation";
import { FooterSection } from "@/components/site/footer-section";
import { PageHero } from "@/components/site/page-hero";
import { CtaSection } from "@/components/site/cta-section";
import { Reveal } from "@/components/site/reveal";
import { industries } from "@/lib/industries-data";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description: "How Pink Tree works with visa consultants and research companies to design and build custom AI solutions.",
};

export default function IndustriesPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navigation />

      <PageHero
        variant="network"
        eyebrow="Industries"
        title={
          <>
            We go deep,
            <br />
            <span className="text-muted-foreground">not wide.</span>
          </>
        }
        subheading="We're starting with two industries we understand well. See exactly how we approach each one."
      />

      <section className="relative py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid sm:grid-cols-2 gap-px bg-foreground/10">
            {industries.map((industry, i) => (
              <Reveal key={industry.slug} delay={i * 80}>
                <Link
                  href={`/industries/${industry.slug}`}
                  className="group relative block h-full bg-background p-10 lg:p-12 transition-colors hover:bg-foreground/[0.03]"
                >
                  <industry.icon className="w-7 h-7 mb-8 text-[#eca8d6]" />
                  <h2 className="text-2xl font-medium mb-3">{industry.industry}</h2>
                  <p className="text-muted-foreground leading-relaxed mb-8 max-w-md">
                    {industry.headline}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-mono text-muted-foreground group-hover:text-foreground transition-colors">
                    See how
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
