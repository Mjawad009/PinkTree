import type { Metadata } from "next";
import { Navigation } from "@/components/site/navigation";
import { FooterSection } from "@/components/site/footer-section";
import { PageHero } from "@/components/site/page-hero";
import { BlogList } from "@/components/site/blog-list";
import { NewsletterSignup } from "@/components/site/newsletter-signup";
import { getAllPosts } from "@/lib/blog-store";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Blog",
  description: "Practical thinking on AI strategy, custom software, and where automation actually helps a business.",
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navigation />

      <PageHero
        variant="dots"
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
