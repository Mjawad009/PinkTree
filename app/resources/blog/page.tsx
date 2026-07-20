import type { Metadata } from "next";
import { Navigation } from "@/components/site/navigation";
import { FooterSection } from "@/components/site/footer-section";
import { PageHero } from "@/components/site/page-hero";
import { BlogList } from "@/components/site/blog-list";
import { NewsletterSignup } from "@/components/site/newsletter-signup";
import { getAllPosts } from "@/lib/blog-store";

// Posts can be added via /admin/blog at any time, so this page reads
// from disk on every request rather than being statically generated.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Blog",
  description: "Practical thinking on AI strategy, custom software, and where automation actually helps a business.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navigation />

      <PageHero
        eyebrow="Blog"
        title={
          <>
            Notes on AI strategy
            <br />
            <span className="text-muted-foreground">and building it right.</span>
          </>
        }
        subheading="Practical thinking on AI solutions, custom software, and where automation actually helps a business."
      />

      <section className="relative py-24 lg:py-32">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-12">
          <BlogList posts={posts} />
          <div className="mt-16">
            <NewsletterSignup />
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
