import { Metadata } from "next"
import { Navigation } from "@/components/sections/navigation"

export const metadata: Metadata = {
  title: "Contact Us | KR8V - Private AI NDA Analysis",
  description:
    "Contact KR8V to book a demo, ask about pricing, or inquire about partnerships for our private AI NDA analysis tool.",
  keywords: [
    "contact KR8V",
    "NDA analysis demo",
    "AI contract review pricing",
    "private AI legal tool contact",
  ],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ndaagent.com/contact",
    title: "Contact Us | KR8V - Private AI NDA Analysis",
    description:
      "Contact KR8V to book a demo or learn more about our private AI NDA analysis tool.",
    siteName: "NDA Agent",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Contact KR8V",
      },
    ],
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
