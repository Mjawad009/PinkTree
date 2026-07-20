import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { ChatWidgetMockup } from "@/components/site/chat-widget-mockup";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/reveal";

const points = [
  "Trained on your own website and documents",
  "Answers instantly, 24/7, no on-call required",
  "500+ app integrations for real automation",
];

export function FeaturedProductSection() {
  return (
    <section className="relative py-24 lg:py-32 border-t border-foreground/10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <Reveal className="order-2 lg:order-1 flex justify-center lg:justify-start">
            <ChatWidgetMockup />
          </Reveal>
          <Reveal delay={120} className="order-1 lg:order-2">
            <span className="text-sm font-mono text-muted-foreground mb-6 block">Our Flagship Product</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display tracking-tight leading-[1.05] mb-8">
              Meet
              <br />
              <span className="text-muted-foreground">The Evasion Chat.</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-md">
              Everything we've learned building custom AI for clients, packaged into a product
              you can deploy in days.
            </p>
            <ul className="space-y-3 mb-10">
              {points.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm">
                  <Check className="w-4 h-4 text-[#eca8d6] mt-0.5 shrink-0" />
                  <span className="text-muted-foreground">{point}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-foreground hover:bg-foreground/90 text-background px-8 h-14 text-base rounded-full group">
                <Link href="/platform">
                  See the platform
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-14 px-8 text-base rounded-full border-foreground/20">
                <Link href="https://evasionchat.pinktree.co">Visit product site ↗</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
