import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { aiSolutions } from "@/lib/ai-solutions-data";
import { Reveal } from "@/components/site/reveal";

export function AiSolutionsOverviewSection() {
  return (
    <section className="relative py-24 lg:py-32 border-t border-foreground/10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <Reveal className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <span className="text-sm font-mono text-muted-foreground mb-6 block">AI Solutions</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display tracking-tight leading-[1.05]">
              Five ways we put
              <span className="text-muted-foreground"> AI to work.</span>
            </h2>
          </div>
          <Link
            href="/ai-solutions"
            className="inline-flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-foreground transition-colors shrink-0"
          >
            View all solutions
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-foreground/10">
          {aiSolutions.map((solution, i) => (
            <Reveal key={solution.slug} delay={i * 80}>
              <Link
                href={`/ai-solutions/${solution.slug}`}
                className="group block h-full bg-background p-8 lg:p-10 transition-colors hover:bg-foreground/[0.03]"
              >
                <solution.icon className="w-6 h-6 mb-6 text-[#eca8d6]" />
                <h3 className="text-lg font-medium mb-2">{solution.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">{solution.headline}</p>
                <span className="inline-flex items-center gap-2 text-xs font-mono text-muted-foreground group-hover:text-foreground transition-colors">
                  Learn more
                  <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
