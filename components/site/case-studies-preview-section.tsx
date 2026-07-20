import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { caseStudies } from "@/lib/case-studies-data";
import { Reveal } from "@/components/site/reveal";

export function CaseStudiesPreviewSection() {
  return (
    <section className="relative py-24 lg:py-32 border-t border-foreground/10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <Reveal className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <span className="text-sm font-mono text-muted-foreground mb-6 block">Case Studies</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display tracking-tight leading-[1.05]">
              Real problems,
              <span className="text-muted-foreground"> real engagements.</span>
            </h2>
          </div>
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-foreground transition-colors shrink-0"
          >
            All case studies
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-px bg-foreground/10">
          {caseStudies.map((study, i) => (
            <Reveal key={study.slug} delay={i * 100}>
              <Link
                href={`/case-studies/${study.slug}`}
                className="group block h-full bg-background p-10 lg:p-12 transition-colors hover:bg-foreground/[0.03]"
              >
                <span className="text-4xl font-display block mb-2">{study.result}</span>
                <span className="text-sm text-muted-foreground block mb-8">{study.resultLabel}</span>
                <p className="text-lg leading-relaxed mb-8">{study.summary}</p>
                <span className="inline-flex items-center gap-2 text-sm font-mono text-muted-foreground group-hover:text-foreground transition-colors">
                  Read the case study
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
