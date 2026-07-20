import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { industries } from "@/lib/industries-data";
import { Reveal } from "@/components/site/reveal";

export function IndustriesPreviewSection() {
  return (
    <section className="relative py-24 lg:py-32 border-t border-foreground/10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <Reveal className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <span className="text-sm font-mono text-muted-foreground mb-6 block">Industries We Serve</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display tracking-tight leading-[1.05]">
              We go deep,
              <span className="text-muted-foreground"> not wide.</span>
            </h2>
          </div>
          <Link
            href="/industries"
            className="inline-flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-foreground transition-colors shrink-0"
          >
            All industries
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-px bg-foreground/10">
          {industries.map((industry, i) => (
            <Reveal key={industry.slug} delay={i * 100}>
              <Link
                href={`/industries/${industry.slug}`}
                className="group block h-full bg-background p-10 lg:p-12 transition-colors hover:bg-foreground/[0.03]"
              >
                <industry.icon className="w-7 h-7 mb-8 text-[#eca8d6]" />
                <h3 className="text-2xl font-medium mb-3">{industry.industry}</h3>
                <p className="text-muted-foreground leading-relaxed mb-8 max-w-md">{industry.headline}</p>
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
  );
}
