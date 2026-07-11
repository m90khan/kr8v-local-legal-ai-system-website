import { Metadata } from "next"
import { Geist_Mono, Roboto } from "next/font/google"
import Script from "next/script"

import "./globals.css"
import { ThemeProvider } from "@/components/providers/ThemeProvider"
import { cn } from "@/lib/utils"
import { CookieConsent } from "@/components/shared/cookie-consent"
import { GA_MEASUREMENT_ID } from "@/lib/constants"
import { LenisProvider } from "@/components/providers/LenisProvider"
import { GlowFilter } from "@/components/shared/glow-filter"

const roboto = Roboto({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://lexon.p9ix.com"),
  title: {
    default: "Lexon AI | Private Legal AI Automation System",
    template: "%s | Lexon AI",
  },
  description:
    "Private, on-premise legal AI for NDA review, contract analysis, policy validation, and enterprise compliance. Deploy fully offline on your infrastructure.",
  keywords: [
    "private legal AI",
    "on-premise legal AI",
    "offline contract analysis",
    "NDA review AI",
    "legal intelligence platform",
    "contract risk analysis",
    "policy compliance engine",
    "AI contract review",
    "air-gapped AI",
    "enterprise legal AI",
    "procurement risk analysis",
    "private AI infrastructure",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://lexon.p9ix.com",
    title: "Lexon AI | Private Legal AI Automation",
    description:
      "Private, on-premise legal AI for NDA review, contract analysis, policy validation, and enterprise compliance.",
    siteName: "Lexon AI",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Lexon AI - Private Legal AI Automation System",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lexon AI | Private Legal AI Automation",
    description:
      "Private, on-premise legal AI for NDA review, contract analysis, and enterprise compliance.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "theme-color": "#6B5CE7",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLdOrganization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Kr8v",
    url: "https://lexon.p9ix.com",
    email: "lexon@p9ix.com",
    makesOffer: {
      "@type": "Offer",
      itemOffered: {
        "@type": "SoftwareApplication",
        name: "Lexon AI",
        description: "Private legal AI automation system for NDA review, contract analysis, and enterprise compliance.",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Windows, Linux",
      },
    },
  }

  const jsonLdWebSite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Lexon AI",
    url: "https://lexon.p9ix.com",
    publisher: {
      "@type": "Organization",
      name: "Kr8v",
    },
  }

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        roboto.variable
      )}
    >
      <head>
        <Script
          id="schema-organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization) }}
        />
        <Script
          id="schema-website"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebSite) }}
        />
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head>
      <body>
        <ThemeProvider>
          <LenisProvider>
            <GlowFilter />
            {children}
          </LenisProvider>
        </ThemeProvider>
        <CookieConsent />
      </body>
    </html>
  )
}
