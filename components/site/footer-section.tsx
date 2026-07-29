"use client";

import { ArrowUpRight, Mail, MessageSquare } from "lucide-react";
import { useEffect, useRef } from "react";

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
        {/* Gradient fade to black at bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black" />
        {/* Subtle dark vignette on sides */}
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

              {/* Premium Theme Action Buttons */}
              <div className="flex flex-col gap-3 max-w-xs">
                {/* Email Button - Solid Pink Glow Theme */}
                <a
                  href="mailto:contact@pinktreee.com"
                  className="relative group overflow-hidden flex items-center justify-center gap-2 w-full py-3 px-4 bg-pink-600 text-white rounded-lg text-sm font-semibold tracking-wide border border-pink-500 shadow-[0_0_15px_rgba(219,39,119,0.3)] hover:shadow-[0_0_25px_rgba(219,39,119,0.6)] hover:border-pink-400 transition-all duration-300"
                >
                  {/* Sprinkles Canvas Effect Container */}
                  <span className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.2),transparent_60%)]">
                    <span className="absolute top-1/2 left-1/4 w-1 h-1 bg-white rounded-full animate-ping [animation-duration:1s]" />
                    <span className="absolute top-1/3 left-2/3 w-1.5 h-1.5 bg-pink-200 rounded-full animate-ping [animation-duration:1.4s]" />
                    <span className="absolute top-2/3 left-1/2 w-1 h-1 bg-white rounded-full animate-ping [animation-duration:0.8s]" />
                    <span className="absolute top-1/4 left-3/4 w-1 h-1 bg-pink-300 rounded-full animate-ping [animation-duration:1.2s]" />
                  </span>
                  
                  <Mail className="w-4 h-4 transition-transform group-hover:scale-110" />
                  <span>Email Support</span>
                </a>

                {/* WhatsApp Button - Dark Border with Pink Hover Fill */}
                <a
                  href="https://wa.me" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group overflow-hidden flex items-center justify-center gap-2 w-full py-3 px-4 bg-transparent text-white/90 hover:text-white rounded-lg text-sm font-semibold tracking-wide border border-white/20 hover:border-pink-500/50 transition-all duration-300"
                >
                  {/* Sliding Pink Gradient Sparkle Underlay */}
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-pink-600/0 via-pink-600/20 to-pink-600/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
                  
                  {/* Hover Sprinkles */}
                  <span className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300">
                    <span className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-pink-400 rounded-full animate-ping [animation-duration:0.9s]" />
                    <span className="absolute top-1/4 left-1/2 w-1.5 h-1.5 bg-white rounded-full animate-ping [animation-duration:1.3s]" />
                    <span className="absolute top-2/3 left-3/4 w-1 h-1 bg-pink-400 rounded-full animate-ping [animation-duration:1.1s]" />
                  </span>

                  <MessageSquare className="w-4 h-4 text-pink-400 group-hover:text-white transition-colors duration-300" />
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
