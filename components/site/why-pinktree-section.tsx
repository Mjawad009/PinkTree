import { Reveal } from "@/components/site/reveal";

const reasons = [
  {
    number: "01",
    title: "We scope honestly",
    description: "If AI isn't the right fit for your problem, we'll tell you — even if it means recommending less than you asked for.",
  },
  {
    number: "02",
    title: "We build on what you have",
    description: "We connect and extend your existing systems wherever we can, instead of defaulting to a rip-and-replace.",
  },
  {
    number: "03",
    title: "We ship a product, too",
    description: "The Evasion Chat is our own platform, built by the same team scoping your engagement — we understand what we're recommending because we've built it ourselves.",
  },
  {
    number: "04",
    title: "You own what we build",
    description: "Every engagement is documented and maintainable, not a black box you're permanently dependent on us for.",
  },
];

export function WhyPinkTreeSection() {
  return (
    <section className="relative py-24 lg:py-32 border-t border-foreground/10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <Reveal className="max-w-2xl mb-16">
          <span className="text-sm font-mono text-muted-foreground mb-6 block">Why Pink Tree</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display tracking-tight leading-[1.05]">
            AI is easy to sell.
            <span className="text-muted-foreground"> We'd rather earn it.</span>
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-foreground/10">
          {reasons.map((reason, i) => (
            <Reveal key={reason.number} delay={i * 100} className="bg-background p-8 lg:p-10">
              <span className="text-xs font-mono text-muted-foreground block mb-6">{reason.number}</span>
              <h3 className="text-lg font-medium mb-3">{reason.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{reason.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
