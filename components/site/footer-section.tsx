"use client";

import { ArrowUpRight, Mail, MessageSquare } from "lucide-react";

const footerLinks = {
  Company: [
    { name: "AI Solutions", href: "/ai-solutions" },
    { name: "Industries We Serve", href: "/industries" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "About", href: "/about" },
  ],
  Resources: [
    { name: "Blog", href: "/resources/blog" },
    { name: "Guides", href: "/resources/guides" },
    { name: "All Resources", href: "/resources" },
  ],
  Product: [
    { name: "The Evasion Chat", href: "https://pinktreee.com" },
    { name: "Platform Overview", href: "/platform" },
    { name: "Pricing", href: "https://pinktreee.com/pricing" },
  ],
  "Get Started": [
    { name: "Book a Consultation", href: "/book-consultation" },
  ],
  Legal: [
    { name: "Privacy", href: "/privacy" },
    { name: "Terms", href: "/terms" },
  ],
};

const socialLinks = [
  { name: "Email Us", href: "mailto:contact@pinktreee.com" },
];

export function FooterSection() {
  return (
    <footer className="relative bg-black">
      {/* Panoramic banner image */}
      <div className="relative w-full h-[340px] md:h-[420px] overflow-hidden">
        <img
          src="https://vercel-storage.com"
          alt="Bioluminescent landscape"
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />
      </div>

      {/* Footer content — black background, white text */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Main Footer */}
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-x-8 gap-y-12 lg:gap-8">
            {/* Brand Column */}
            <div className="col-span-2">
              <a href="/" className="flex items-center gap-2 group mb-6">
                <span className="font-display text-2xl tracking-tight text-white transition-all duration-300">
                  PINK TREE
                  <span className="ml-[1px] text-pink-400 drop-shadow-[0_0_10px_rgba(244,114,182,0.9)] group-hover:text-pink-300 group-hover:drop-shadow-[0_0_18px_rgba(244,114,182,1)] transition-all duration-500">
                    E
                  </span>
                </span>
              </a>

              <p className="text-white/50 leading-relaxed mb-8 max-w-xs text-sm">
                We build custom AI solutions — workflow automation, AI agents, and enterprise integrations — for businesses that want to adapt & Grow.
              </p>

              {/* Social Links */}
              <div className="flex gap-6 mb-6">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-sm text-white/40 hover:text-white transition-colors flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </a>
                ))}
              </div>

              {/* Contact actions — quiet pill buttons, consistent with the rest of the site */}
              <div className="flex flex-col gap-3 max-w-xs">
                <a
                  href="mailto:contact@pinktreee.com"
                  className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-full text-sm font-medium tracking-wide bg-white text-black hover:bg-pink-300 transition-colors duration-200"
                >
                  <Mail className="w-4 h-4" />
                  <span>Email support</span>
                </a>

                <a
                  href="https://api.whatsapp.com/send?phone=923364315089"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-full text-sm font-medium tracking-wide border border-white/15 text-white/80 hover:border-pink-400/50 hover:text-white transition-colors duration-200"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Link Columns */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="text-sm font-medium text-white mb-6">{title}</h3>
                <ul className="space-y-4">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-sm text-white/40 hover:text-white transition-colors inline-flex items-center gap-2"
                      >
                        {link.name}
                        {"badge" in link && link.badge && (
                          <span className="text-xs px-2 py-0.5 bg-white text-black rounded-full">
                            {link.badge}
                          </span>
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/30">
            &copy; 2026 Pink Tree. All rights reserved.
          </p>

          <div className="flex items-center gap-4 text-sm text-white/30">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#eca8d6]" />
              Parent company of The Evasion Chat
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
