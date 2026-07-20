import type { Metadata } from "next";
import { Navigation } from "@/components/site/navigation";
import { FooterSection } from "@/components/site/footer-section";
import { PageHero } from "@/components/site/page-hero";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Pink Tree collects, uses, and protects your data.",
};

export default function PrivacyPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navigation />

      <PageHero
        eyebrow="Legal"
        title={
          <>
            Privacy
            <br />
            <span className="text-muted-foreground">Policy.</span>
          </>
        }
        subheading="Last updated: July 19, 2026"
      />

      <section className="relative py-16 lg:py-24">
        <div className="max-w-[760px] mx-auto px-6 lg:px-12">
          <div className="rounded-xl border border-foreground/10 bg-foreground/[0.02] p-6 mb-16 text-sm text-muted-foreground leading-relaxed">
            <strong className="text-foreground">This is a starting template, not legal advice.</strong>{" "}
            Pink Tree's data footprint is lighter than a SaaS product's (mainly contact forms and
            consultation intake, not a hosted product with end-user data), but have this reviewed
            by a lawyer before publishing.
          </div>

          <div className="space-y-12 text-muted-foreground leading-relaxed">
            <div>
              <h2 className="text-xl font-medium text-foreground mb-4">1. What we collect</h2>
              <p>
                When you submit our Contact or Book a Consultation forms, we collect the
                information you provide: name, company, email, and details about your project.
                We also collect basic analytics about how visitors use this site (pages viewed,
                general location, referring site).
              </p>
            </div>

            <div>
              <h2 className="text-xl font-medium text-foreground mb-4">2. How we use it</h2>
              <p>
                We use consultation intake information to follow up about your inquiry and, if we
                move forward together, to deliver the engagement. We use site analytics to
                understand what content is useful and improve the site. We do not sell your
                information to third parties.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-medium text-foreground mb-4">3. If you become a client</h2>
              <p>
                If you engage us for a project, any additional data you share as part of that
                engagement (e.g. documents, system access, business information) is governed by
                the terms of your specific agreement with us, in addition to this policy.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-medium text-foreground mb-4">4. Our product, The Evasion Chat</h2>
              <p>
                If you sign up for our product, The Evasion Chat, that product has its own{" "}
                <a
                  href="https://evasionchat.pinktree.co/privacy"
                  className="text-foreground underline underline-offset-4"
                >
                  Privacy Policy
                </a>{" "}
                specific to how it handles your chatbot&apos;s training content and conversation
                data.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-medium text-foreground mb-4">5. Data retention</h2>
              <p>
                We retain consultation and contact form submissions for as long as reasonably
                needed to respond to your inquiry or, if you become a client, for the duration of
                our engagement plus [your standard record-keeping period]. You can request
                deletion at any time.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-medium text-foreground mb-4">6. Your rights</h2>
              <p>
                Depending on your location, you may have rights under regulations like GDPR or
                CCPA to access, correct, or delete your personal data. Contact us at{" "}
                <a href="mailto:privacy@pinktree.co" className="text-foreground underline underline-offset-4">
                  privacy@pinktree.co
                </a>{" "}
                to exercise these rights.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-medium text-foreground mb-4">7. Cookies</h2>
              <p>
                We use essential and analytics cookies to understand site usage. [Add a cookie
                table or preferences tool link if you use one.]
              </p>
            </div>

            <div>
              <h2 className="text-xl font-medium text-foreground mb-4">8. Changes to this policy</h2>
              <p>
                We&apos;ll update the &ldquo;Last updated&rdquo; date above whenever this policy
                changes materially.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-medium text-foreground mb-4">9. Contact</h2>
              <p>
                Questions about this policy? Reach us at{" "}
                <a href="mailto:privacy@pinktree.co" className="text-foreground underline underline-offset-4">
                  privacy@pinktree.co
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
