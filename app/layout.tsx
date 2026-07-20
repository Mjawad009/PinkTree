import React from "react"
import type { Metadata } from 'next'
import { Instrument_Sans, Instrument_Serif, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const instrumentSans = Instrument_Sans({ 
  subsets: ["latin"],
  variable: '--font-instrument'
});

const instrumentSerif = Instrument_Serif({ 
  subsets: ["latin"],
  weight: "400",
  variable: '--font-instrument-serif'
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: '--font-jetbrains'
});

// TODO: replace with your real production domain once deployed — this
// affects how OpenGraph images and canonical URLs resolve.
const SITE_URL = "https://pinktree.co";
const SITE_NAME = "Pink Tree";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — AI Solutions & Custom Software`,
    template: `%s — ${SITE_NAME}`,
  },
  description: "Pink Tree builds custom AI solutions — workflow automation, AI agents, knowledge base systems, and enterprise integrations — and is the team behind The Evasion Chat.",
  generator: "v0.app",
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: `${SITE_NAME} — AI Solutions & Custom Software`,
    description: "Pink Tree builds custom AI solutions — workflow automation, AI agents, knowledge base systems, and enterprise integrations — and is the team behind The Evasion Chat.",
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — AI Solutions & Custom Software`,
    description: "Pink Tree builds custom AI solutions — workflow automation, AI agents, knowledge base systems, and enterprise integrations — and is the team behind The Evasion Chat.",
  },
}

// Organization structured data, present on every page — this is what lets
// Google understand Pink Tree is the parent company / service provider,
// distinct from The Evasion Chat's SoftwareApplication schema on its own site.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      description: "AI consulting and custom software studio. Parent company of The Evasion Chat.",
      subOrganization: {
        "@type": "Organization",
        name: "The Evasion Chat",
        url: "https://evasionchat.pinktree.co",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${instrumentSans.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
