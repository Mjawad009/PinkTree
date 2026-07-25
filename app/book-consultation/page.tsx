"use client";

import { useState } from "react";
import { Navigation } from "@/components/site/navigation";
import { FooterSection } from "@/components/site/footer-section";
import { PageHero } from "@/components/site/page-hero";
import { FaqAccordion } from "@/components/site/faq-accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowRight, Check } from "lucide-react";

// TODO: wire this to your real backend / CRM. This intake is intentionally
// broader than The Evasion Chat's "Book a Demo" form (project type, budget
// signal, industry) since a consultation needs to be scoped before the call,
// not during it.
const consultationFaqs = [
  {
    question: "What happens after I submit this form?",
    answer: "Someone from our team reviews your submission and reaches out within one business day to schedule a call — or, if it's clearly not a fit, to tell you that honestly instead of booking a call anyway.",
  },
  {
    question: "Do I need a fully scoped project already?",
    answer: "No — a rough description of the problem is enough to start. Scoping the specifics is part of what the consultation is for.",
  },
  {
    question: "Is there a cost for the initial consultation?",
    answer: "The first 30-minute consultation is free, no obligation. If we move into a paid discovery or scoping phase after that, we'll always agree on cost with you upfront.",
  },
  {
    question: "What if AI isn't actually the right fit for us?",
    answer: "We'll tell you that directly. Part of the consultation is figuring out whether this is worth pursuing at all — we'd rather say no upfront than take on a project that won't work.",
  },
  {
    question: "Do you only work with visa consultants and research companies?",
    answer: "Those are our two most-established verticals, but we take on projects outside them regularly. If your problem fits our AI Solutions, industry isn't a hard requirement.",
  },
  {
    question: "How is this different from just signing up for The Evasion Chat?",
    answer: "The Evasion Chat is our packaged product for common chatbot use cases — self-serve, no consultation needed. Book a consultation instead if you need something more custom: bespoke automation, integrations, or a full build.",
  },
];

export default function BookConsultationPage() {
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
        variant="globe"
        eyebrow="Book a Consultation"
        title={
          <>
            Let&apos;s scope
            <br />
            <span className="text-muted-foreground">your project.</span>
          </>
        }
        subheading="Tell us what you're working with. We'll tell you honestly whether AI is the right fit, and what it would take."
      />

      <section className="relative py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-7">
              {submitted ? (
                <div className="rounded-2xl border border-foreground/10 bg-foreground/[0.02] p-10">
                  <div className="w-12 h-12 rounded-full bg-[#eca8d6]/15 flex items-center justify-center mb-6">
                    <Check className="w-5 h-5 text-[#eca8d6]" />
                  </div>
                  <h2 className="text-2xl font-display mb-3">Thanks — we&apos;ve got it.</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Someone from our team will review your submission and reach out within one
                    business day. In the meantime, feel free to browse our{" "}
                    <a href="/case-studies" className="underline underline-offset-4 hover:text-foreground">
                      case studies
                    </a>{" "}
                    or{" "}
                    <a href="/ai-solutions" className="underline underline-offset-4 hover:text-foreground">
                      AI Solutions
                    </a>
                    .
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full name</Label>
                      <Input id="name" name="name" required placeholder="Jane Cooper" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company</Label>
                      <Input id="company" name="company" required placeholder="Acme Inc." />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">Work email</Label>
                      <Input id="email" name="email" type="email" required placeholder="jane@acme.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="industry">Industry</Label>
                      <Select name="industry">
                        <SelectTrigger id="industry">
                          <SelectValue placeholder="Select your industry" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="visa-consultants">Visa Consultants</SelectItem>
                          <SelectItem value="research-companies">Research Companies</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="project-type">Project type</Label>
                      <Select name="project-type">
                        <SelectTrigger id="project-type">
                          <SelectValue placeholder="What are you looking for?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="workflow-automation">AI Workflow Automation</SelectItem>
                          <SelectItem value="custom-agents">Custom AI Agents</SelectItem>
                          <SelectItem value="knowledge-base">Knowledge Base Systems</SelectItem>
                          <SelectItem value="integrations">Enterprise Integrations</SelectItem>
                          <SelectItem value="custom-software">Custom Software Development</SelectItem>
                          <SelectItem value="not-sure">Not sure yet</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="budget">Approximate budget range</Label>
                      <Select name="budget">
                        <SelectTrigger id="budget">
                          <SelectValue placeholder="Select a range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-10k">Under $10k</SelectItem>
                          <SelectItem value="10k-50k">$10k – $50k</SelectItem>
                          <SelectItem value="50k-plus">$50k+</SelectItem>
                          <SelectItem value="not-sure">Not sure yet</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Tell us about the problem you're trying to solve</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      placeholder="e.g. Our consultants spend hours answering the same eligibility questions before ever qualifying a lead..."
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="bg-foreground hover:bg-foreground/90 text-background px-8 h-14 text-base rounded-full group w-full sm:w-auto"
                  >
                    {isSubmitting ? "Sending..." : "Book a consultation"}
                    {!isSubmitting && (
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                    )}
                  </Button>

                  <p className="text-xs text-muted-foreground font-mono">
                    No obligation. Just a straight answer on fit.
                  </p>
                </form>
              )}
            </div>

            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-32 space-y-6">
                <div className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#eca8d6] mt-1 shrink-0" />
                  <p className="text-sm text-muted-foreground">
                    We'll review your submission before the call — you won't be re-explaining the basics.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#eca8d6] mt-1 shrink-0" />
                  <p className="text-sm text-muted-foreground">
                    If AI isn't the right fit for your problem, we'll tell you that directly.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#eca8d6] mt-1 shrink-0" />
                  <p className="text-sm text-muted-foreground">
                    Have a simpler question? Try{" "}
                    <a href="/contact" className="underline underline-offset-4 hover:text-foreground">
                      general contact
                    </a>{" "}
                    instead.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-24 border-t border-foreground/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <span className="inline-flex items-center gap-2 text-sm font-mono text-muted-foreground mb-6">
            Before you reach out
          </span>
          <FaqAccordion items={consultationFaqs} />
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
