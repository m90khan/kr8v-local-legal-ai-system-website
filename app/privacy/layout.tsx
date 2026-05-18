import { Metadata } from "next"
import { Navigation } from "@/components/sections/navigation"

export const metadata: Metadata = {
  title: "Privacy Policy | Lexon AI - Private Legal AI Automation",
  description:
    "Lexon AI Privacy Policy - Learn how we handle your data. Your contracts never leave your infrastructure.",
  keywords: [
    "privacy policy",
    "legal AI privacy",
    "local AI data privacy",
    "contract analysis privacy",
    "Lexon AI privacy",
    "data protection",
  ],
  alternates: {
    canonical: "/privacy",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://lexon.p9ix.com/privacy",
    title: "Privacy Policy | Lexon AI - Private Legal AI Automation",
    description:
      "Learn how Lexon AI handles your data. Your contracts are processed locally and never leave your infrastructure.",
    siteName: "Lexon AI",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Lexon AI Privacy Policy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Lexon AI - Private Legal AI Automation",
    description:
      "Learn how Lexon AI handles your data. Your contracts are processed locally and never leave your infrastructure.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function PrivacyLayout({
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
