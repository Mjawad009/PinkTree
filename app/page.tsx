import dynamic from "next/dynamic";
import { Navigation } from "@/components/site/navigation";
import { HeroSection } from "@/components/site/hero-section";

// Below-the-fold sections are code-split via next/dynamic. SSR stays on
// (default) so HTML/SEO is unaffected — this only changes JS bundling.
const WhyPinkTreeSection = dynamic(() =>
  import("@/components/site/why-pinktree-section").then((m) => m.WhyPinkTreeSection)
);
const AiSolutionsOverviewSection = dynamic(() =>
  import("@/components/site/ai-solutions-overview-section").then((m) => m.AiSolutionsOverviewSection)
);
const FeaturedProductSection = dynamic(() =>
  import("@/components/site/featured-product-section").then((m) => m.FeaturedProductSection)
);
const IndustriesPreviewSection = dynamic(() =>
  import("@/components/site/industries-preview-section").then((m) => m.IndustriesPreviewSection)
);
const CaseStudiesPreviewSection = dynamic(() =>
  import("@/components/site/case-studies-preview-section").then((m) => m.CaseStudiesPreviewSection)
);
const ProcessSection = dynamic(() =>
  import("@/components/site/process-section").then((m) => m.ProcessSection)
);
const TechStackSection = dynamic(() =>
  import("@/components/site/tech-stack-section").then((m) => m.TechStackSection)
);
const CtaSection = dynamic(() =>
  import("@/components/site/cta-section").then((m) => m.CtaSection)
);
const FooterSection = dynamic(() =>
  import("@/components/site/footer-section").then((m) => m.FooterSection)
);

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <WhyPinkTreeSection />
      <AiSolutionsOverviewSection />
      <FeaturedProductSection />
      <IndustriesPreviewSection />
      <CaseStudiesPreviewSection />
      <ProcessSection />
      <TechStackSection />
      <CtaSection />
      <FooterSection />
    </main>
  );
}
