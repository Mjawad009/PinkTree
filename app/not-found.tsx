import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Navigation } from "@/components/site/navigation";
import { FooterSection } from "@/components/site/footer-section";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navigation />

      <section className="relative min-h-screen flex items-center justify-center px-6 py-40">
        <div className="max-w-lg mx-auto text-center">
          <span className="text-sm font-mono text-muted-foreground block mb-6">404</span>
          <h1 className="text-4xl md:text-5xl font-display tracking-tight leading-[1.05] mb-6">
            This page went quiet.
          </h1>
          <p className="text-muted-foreground leading-relaxed mb-10">
            The page you're looking for doesn't exist or may have moved. Let's get you back on track.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-foreground hover:bg-foreground/90 text-background px-8 h-12 rounded-full group"
            >
              <Link href="/">
                Back to home
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-12 px-8 rounded-full border-foreground/20">
              <Link href="/book-consultation">Book a consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
