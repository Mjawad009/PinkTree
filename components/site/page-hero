"use client";

import { useEffect, useState } from "react";
import { HeroDotsBg } from "@/components/site/hero-dots-bg";
import { HeroNetworkBg } from "@/components/site/hero-network-bg";
import { HeroGlobeBg } from "@/components/site/hero-globe-bg";

interface PageHeroProps {
  eyebrow: string;
  title: React.ReactNode;
  subheading?: string;
  /** Ambient decorative background behind the hero content. Pick whichever
   * best matches the page's theme — "network" for anything about
   * connections/integrations/automation, "globe" for anything about scale,
   * reach, or infrastructure, "dots" as a calmer default, or "none" to keep
   * a page (e.g. legal, or an already-busy page) clean. */
  variant?: "dots" | "network" | "globe" | "none";
}

export function PageHero({ eyebrow, title, subheading, variant = "dots" }: PageHeroProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative pt-40 pb-20 lg:pt-48 lg:pb-28 border-b border-foreground/10 overflow-hidden">
      {variant === "dots" && <HeroDotsBg />}
      {variant === "network" && <HeroNetworkBg />}
      {variant === "globe" && <HeroGlobeBg />}

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        <span
          className={`inline-flex items-center gap-2 text-sm font-mono text-muted-foreground mb-8 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-[#eca8d6]" />
          {eyebrow}
        </span>

        <h1
          className={`text-6xl md:text-7xl lg:text-[128px] font-display tracking-tight leading-[0.9] transition-all duration-1000 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {title}
        </h1>

        {subheading && (
          <p
            className={`mt-8 text-xl text-muted-foreground leading-relaxed max-w-2xl transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            {subheading}
          </p>
        )}
      </div>
    </section>
  );
}
