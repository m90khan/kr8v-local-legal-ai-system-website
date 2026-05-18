import { Metadata } from "next"
import { Navigation } from "@/components/sections/navigation"

export const metadata: Metadata = {
  title: "Terms of Service | Lexon AI - Private Legal AI Automation",
  description:
    "Lexon AI Terms of Service - Governing your use of our private legal AI automation system. AI-assisted review, not legal advice.",
  keywords: [
    "terms of service",
    "terms and conditions",
    "legal AI terms",
    "Lexon AI terms",
    "AI contract review terms",
    "software terms",
  ],
  alternates: {
    canonical: "/terms",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://lexon.p9ix.com/terms",
    title: "Terms of Service | Lexon AI - Private Legal AI Automation",
    description:
      "Lexon AI Terms of Service - Governing your use of our private legal AI automation system.",
    siteName: "Lexon AI",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Lexon AI Terms of Service",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service | Lexon AI - Private Legal AI Automation",
    description:
      "Lexon AI Terms of Service - Governing your use of our private legal AI automation system.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navigation />
      {children}
    </>
  )
}
