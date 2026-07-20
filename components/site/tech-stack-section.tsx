import { Reveal } from "@/components/site/reveal";

// Generic, defensible technology categories rather than a name-dropped stack
// that will inevitably go stale — swap in your actual stack/vendors if you'd
// rather be specific.
const stack = [
  { category: "Large Language Models", detail: "Leading foundation models, selected per use case" },
  { category: "Automation Layer", detail: "500+ app integrations for real workflow automation" },
  { category: "Data & Retrieval", detail: "Retrieval-augmented generation over your own documents" },
  { category: "Infrastructure", detail: "Built for reliability, data isolation, and audit logging" },
];

export function TechStackSection() {
  return (
    <section className="relative py-24 lg:py-32 border-t border-foreground/10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <Reveal className="max-w-2xl mb-16">
          <span className="text-sm font-mono text-muted-foreground mb-6 block">Technology</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display tracking-tight leading-[1.05]">
            Modern tools,
            <span className="text-muted-foreground"> chosen deliberately.</span>
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-foreground/10">
          {stack.map((item, i) => (
            <Reveal key={item.category} delay={i * 100} className="bg-background p-8 lg:p-10">
              <h3 className="text-lg font-medium mb-3">{item.category}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.detail}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
