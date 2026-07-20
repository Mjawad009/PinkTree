"use client";

import { useState } from "react";
import { Navigation } from "@/components/site/navigation";
import { FooterSection } from "@/components/site/footer-section";
import { PageHero } from "@/components/site/page-hero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowRight, Check } from "lucide-react";

// Lighter-weight than /book-consultation — for general questions that don't
// need a full project intake (press, partnerships, quick questions).
export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 600));
    setIsSubmitting(false);
    setSubmitted(true);
  }

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navigation />

      <PageHero
        eyebrow="Contact"
        title={
          <>
            Have a question?
            <br />
            <span className="text-muted-foreground">Just ask.</span>
          </>
        }
        subheading="For project inquiries, use Book a Consultation instead — this is for everything else."
      />

      <section className="relative py-24 lg:py-32">
        <div className="max-w-[640px] mx-auto px-6 lg:px-12">
          {submitted ? (
            <div className="rounded-2xl border border-foreground/10 bg-foreground/[0.02] p-10">
              <div className="w-12 h-12 rounded-full bg-[#eca8d6]/15 flex items-center justify-center mb-6">
                <Check className="w-5 h-5 text-[#eca8d6]" />
              </div>
              <h2 className="text-2xl font-display mb-3">Thanks — we&apos;ve got it.</h2>
              <p className="text-muted-foreground leading-relaxed">
                We'll get back to you within one business day.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" required placeholder="Jane Cooper" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" required placeholder="jane@acme.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" name="message" rows={5} required placeholder="What can we help with?" />
              </div>
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="bg-foreground hover:bg-foreground/90 text-background px-8 h-14 text-base rounded-full group w-full sm:w-auto"
              >
                {isSubmitting ? "Sending..." : "Send message"}
                {!isSubmitting && (
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                )}
              </Button>
            </form>
          )}
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
