import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Navigation } from "@/components/site/navigation";
import { FooterSection } from "@/components/site/footer-section";
import { PageHero } from "@/components/site/page-hero";
import { ChatWidgetMockup } from "@/components/site/chat-widget-mockup";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "The Evasion Chat — Our Flagship Product",
  description: "The Evasion Chat is Pink Tree's flagship AI automation platform — an AI chatbot trained on your own content.",
};

const benefits = [
  "Trained on your authentic documents, and knowledge base maintanied by Specialists",
  "Answers customers and prospects instantly, 24/7",
  "Automations connect to 500+ apps — CRM, WhatsApp, email, and more",
  "Multi-tenant setup for agencies and multi-branch businesses",
  "Full analytics and admin panel to manage every conversation",
];

export default function PlatformPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navigation />

      <PageHero
        variant="network"
        eyebrow="Our Product"
        title={
          <>
            Meet The Evasion Chat.
            <br />
            <span className="text-muted-foreground">Our flagship AI platform.</span>
          </>
        }
        subheading="Everything we've learned building custom AI solutions for clients, packaged into a product you can deploy in days, not months."
      />

      <section className="relative py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-display tracking-tight mb-8">What it does</h2>
            <ul className="space-y-4 mb-10">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#eca8d6] mt-1 shrink-0" />
                  <span className="text-muted-foreground leading-relaxed">{benefit}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-foreground hover:bg-foreground/90 text-background px-8 h-14 text-base rounded-full group"
              >
                <Link href="https://evasionchat.pinktree.co">
                  Visit The Evasion Chat
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-14 px-8 text-base rounded-full border-foreground/20">
                <Link href="https://evasionchat.pinktree.co/book-demo">Book a demo</Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <ChatWidgetMockup />
          </div>
        </div>
      </section>

      <section className="relative py-24 lg:py-32 border-t border-foreground/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl lg:text-4xl font-display tracking-tight mb-6">
            Need something The Evasion Chat doesn&apos;t cover?
          </h2>
          <p className="text-muted-foreground leading-relaxed max-w-xl mx-auto mb-10">
            The Evasion Chat is built for common chatbot use cases. If you need something more
            specific — a custom agent, a proprietary integration, a full custom build — that's what
            our AI Solutions team is for.
          </p>
          <Button asChild size="lg" variant="outline" className="h-12 px-8 rounded-full border-foreground/20">
            <Link href="/ai-solutions">
              Explore AI Solutions
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
