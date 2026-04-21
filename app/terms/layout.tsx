import { Metadata } from "next"
import { NavigationV2 } from "@/components/sections/navigation-v2"

export const metadata: Metadata = {
  title: "Terms of Service | KR8V - Private AI NDA Analysis",
  description:
    "KR8V Terms of Service - Read our terms governing your use of the NDA Agent AI analysis tool. AI-assisted review, not legal advice.",
  keywords: [
    "terms of service",
    "terms and conditions",
    "NDA analysis terms",
    "KR8V terms",
    "AI legal tool terms",
    "software terms",
  ],
  alternates: {
    canonical: "/terms",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ndaagent.com/terms",
    title: "Terms of Service | KR8V - Private AI NDA Analysis",
    description:
      "KR8V Terms of Service - Governing your use of the NDA Agent AI analysis tool.",
    siteName: "NDA Agent",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "KR8V Terms of Service",
      },
    ],
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
      <NavigationV2 />
      {children}
    </>
  )
}
