import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Navigation } from "@/components/site/navigation";
import { FooterSection } from "@/components/site/footer-section";
import { PageHero } from "@/components/site/page-hero";
import { guides } from "@/lib/guides-data";

export const metadata: Metadata = {
  title: "Guides",
  description: "Evergreen reference guides on AI strategy and scoping a custom build.",
};

export default function GuidesPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navigation />

      <PageHero
        variant="dots"
        eyebrow="Guides"
        title={
          <>
            Reference guides,
            <br />
            <span className="text-muted-foreground">not sales pages.</span>
          </>
        }
        subheading="Practical, evergreen guides for thinking through AI strategy and custom builds."
      />

      <section className="relative py-24 lg:py-32">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-12">
          <div className="space-y-px bg-foreground/10">
            {guides.map((guide) => (
              <Link
                key={guide.slug}
                href={`/resources/guides/${guide.slug}`}
                className="group flex items-center justify-between gap-6 bg-background p-8 transition-colors hover:bg-foreground/[0.03]"
              >
                <div>
                  <h2 className="text-xl font-medium mb-2">{guide.title}</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-xl">{guide.excerpt}</p>
                  <span className="text-xs font-mono text-muted-foreground mt-3 inline-block">{guide.readTime}</span>
                </div>
                <ArrowRight className="w-5 h-5 shrink-0 transition-transform group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
