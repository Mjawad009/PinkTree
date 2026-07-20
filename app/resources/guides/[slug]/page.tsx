import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Navigation } from "@/components/site/navigation";
import { FooterSection } from "@/components/site/footer-section";
import { CtaSection } from "@/components/site/cta-section";
import { guides, getGuideBySlug } from "@/lib/guides-data";

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) return {};
  return {
    title: guide.title,
    description: guide.excerpt,
  };
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) notFound();

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navigation />

      <article className="relative pt-40 pb-24 lg:pt-48 lg:pb-32">
        <div className="max-w-[840px] mx-auto px-6 lg:px-12">
          <Link
            href="/resources/guides"
            className="inline-flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-foreground transition-colors mb-12"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to guides
          </Link>

          <div className="flex items-center gap-4 text-xs font-mono text-muted-foreground mb-6">
            <span>Guide</span>
            <span>&middot;</span>
            <span>{guide.readTime}</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-display tracking-tight leading-[1.05] mb-12">
            {guide.title}
          </h1>

          <div className="space-y-6">
            {guide.content.map((paragraph, i) => (
              <p key={i} className="text-lg text-muted-foreground leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </article>

      <CtaSection />
      <FooterSection />
    </main>
  );
}
