import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Navigation } from "@/components/site/navigation";
import { FooterSection } from "@/components/site/footer-section";
import { PageHero } from "@/components/site/page-hero";
import { getAllPosts } from "@/lib/blog-store";
import { guides } from "@/lib/guides-data";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Resources",
  description: "Blog posts and guides on AI strategy, custom software, and automation.",
};

export default function ResourcesPage() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navigation />

      <PageHero
        variant="dots"
        eyebrow="Resources"
        title={
          <>
            Blog posts
            <br />
            <span className="text-muted-foreground">and reference guides.</span>
          </>
        }
        subheading="Practical thinking on AI strategy, plus evergreen guides on how to scope and approach a custom build."
      />

      <section className="relative py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 space-y-24">
          <div>
            <div className="flex items-end justify-between mb-10">
              <h2 className="text-2xl font-display">Latest from the blog</h2>
              <Link href="/resources/blog" className="text-sm font-mono text-muted-foreground hover:text-foreground inline-flex items-center gap-2">
                View all
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
            <div className="grid sm:grid-cols-3 gap-px bg-foreground/10">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/resources/blog/${post.slug}`}
                  className="group bg-background p-8 transition-colors hover:bg-foreground/[0.03]"
                >
                  <span className="text-xs font-mono text-muted-foreground">{post.category}</span>
                  <h3 className="text-lg font-medium mt-3 mb-2 leading-snug">{post.title}</h3>
                  <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    Read →
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-end justify-between mb-10">
              <h2 className="text-2xl font-display">Guides</h2>
              <Link href="/resources/guides" className="text-sm font-mono text-muted-foreground hover:text-foreground inline-flex items-center gap-2">
                View all
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 gap-px bg-foreground/10">
              {guides.map((guide) => (
                <Link
                  key={guide.slug}
                  href={`/resources/guides/${guide.slug}`}
                  className="group bg-background p-8 transition-colors hover:bg-foreground/[0.03]"
                >
                  <h3 className="text-lg font-medium mb-2 leading-snug">{guide.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{guide.excerpt}</p>
                  <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    Read guide →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
