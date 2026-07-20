import type { Metadata } from "next";
import { Navigation } from "@/components/site/navigation";
import { FooterSection } from "@/components/site/footer-section";
import { PageHero } from "@/components/site/page-hero";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms that govern your use of this website and Pink Tree's consulting services.",
};

export default function TermsPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navigation />

      <PageHero
        eyebrow="Legal"
        title={
          <>
            Terms of
            <br />
            <span className="text-muted-foreground">Service.</span>
          </>
        }
        subheading="Last updated: July 19, 2026"
      />

      <section className="relative py-16 lg:py-24">
        <div className="max-w-[760px] mx-auto px-6 lg:px-12">
          <div className="rounded-xl border border-foreground/10 bg-foreground/[0.02] p-6 mb-16 text-sm text-muted-foreground leading-relaxed">
            <strong className="text-foreground">This is a starting template, not legal advice.</strong>{" "}
            These are website terms of use. Your actual consulting engagements should be governed
            by a separate signed statement of work or master services agreement — have a lawyer
            draft or review both before you rely on either.
          </div>

          <div className="space-y-12 text-muted-foreground leading-relaxed">
            <div>
              <h2 className="text-xl font-medium text-foreground mb-4">1. About this site</h2>
              <p>
                These terms govern your use of pinktree.co. They don&apos;t cover the terms of any
                consulting engagement, which are governed by a separate signed agreement between
                Pink Tree and the client.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-medium text-foreground mb-4">2. Website content</h2>
              <p>
                Content on this site — including case studies, guides, and blog posts — is
                provided for informational purposes and doesn&apos;t constitute professional
                advice specific to your situation. Case studies describe past engagements at a
                summary level and results may not be typical for every project.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-medium text-foreground mb-4">3. Consultation requests</h2>
              <p>
                Submitting a Contact or Book a Consultation form doesn&apos;t create a client
                relationship or any obligation on either side. A working relationship begins only
                once both parties sign a statement of work or agreement.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-medium text-foreground mb-4">4. Intellectual property</h2>
              <p>
                The design, content, and code of this website belong to Pink Tree unless otherwise
                noted. You may not reproduce or repurpose it without permission.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-medium text-foreground mb-4">5. Our product, The Evasion Chat</h2>
              <p>
                If you sign up for our product, The Evasion Chat, its use is governed by that
                product&apos;s own{" "}
                <a
                  href="https://evasionchat.pinktree.co/terms"
                  className="text-foreground underline underline-offset-4"
                >
                  Terms of Service
                </a>
                , separate from these website terms.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-medium text-foreground mb-4">6. Limitation of liability</h2>
              <p>
                [This section needs a lawyer, and should be distinct from the liability terms in
                any signed client agreement, which will typically govern actual project work.]
              </p>
            </div>

            <div>
              <h2 className="text-xl font-medium text-foreground mb-4">7. Changes to these terms</h2>
              <p>
                We&apos;ll update the &ldquo;Last updated&rdquo; date above whenever these terms
                change materially.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-medium text-foreground mb-4">8. Contact</h2>
              <p>
                Questions about these terms? Reach us at{" "}
                <a href="mailto:hello@pinktree.co" className="text-foreground underline underline-offset-4">
                  hello@pinktree.co
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
