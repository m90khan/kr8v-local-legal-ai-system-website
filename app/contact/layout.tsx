import { Metadata } from "next"
import { Navigation } from "@/components/sections/navigation"

export const metadata: Metadata = {
  title: "Contact Us | Lexon AI - Private Legal AI Automation",
  description:
    "Contact Lexon AI to book a demo, ask about pricing, or inquire about partnerships for our private legal AI automation system.",
  keywords: [
    "contact Lexon AI",
    "legal AI demo",
    "contract analysis pricing",
    "private legal AI contact",
  ],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://lexon.p9ix.com/contact",
    title: "Contact Us | Lexon AI - Private Legal AI Automation",
    description:
      "Contact Lexon AI to book a demo or learn more about our private legal AI automation system.",
    siteName: "Lexon AI",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Contact Lexon AI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Lexon AI - Private Legal AI Automation",
    description:
      "Contact Lexon AI to book a demo or learn more about our private legal AI automation system.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function ContactLayout({
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
