import { Reveal } from "@/components/site/reveal";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "We start by understanding the actual problem — not the AI feature you think you need, but what's slowing you down today.",
  },
  {
    number: "02",
    title: "Scoping",
    description: "We recommend the smallest solution that actually solves it, whether that's a single automation or a full custom build.",
  },
  {
    number: "03",
    title: "Build",
    description: "We build in iterative phases with regular checkpoints, so there are no surprises at the end.",
  },
  {
    number: "04",
    title: "Launch & Handoff",
    description: "You get a documented, maintainable system — plus a plan for ongoing support if you want it.",
  },
];

export function ProcessSection() {
  return (
    <section className="relative py-24 lg:py-32 border-t border-foreground/10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <Reveal className="max-w-2xl mb-16">
          <span className="text-sm font-mono text-muted-foreground mb-6 block">Our Process</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display tracking-tight leading-[1.05]">
            From first call
            <span className="text-muted-foreground"> to launch.</span>
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {steps.map((step, i) => (
            <Reveal key={step.number} delay={i * 100} className="relative">
              <span className="text-5xl font-display text-foreground/10 block mb-6">{step.number}</span>
              <h3 className="text-lg font-medium mb-3">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-6 -right-4 w-8 h-px bg-foreground/10" />
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
