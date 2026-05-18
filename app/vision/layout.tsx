import { Metadata } from "next"
import { Navigation } from "@/components/sections/navigation"

export const metadata: Metadata = {
  title: "Our Vision | Private Legal AI Infrastructure",
  description:
    "The future of legal decisions is private, local, and intelligent. Explore how KR8V is building the infrastructure for private legal intelligence - from NDA review to complete contract lifecycle management.",
  keywords: [
    "legal AI vision",
    "private AI legal",
    "legal AI infrastructure",
    "local AI contract review",
    "private legal intelligence",
    "AI contract lifecycle management",
    "on-premise legal AI",
    "data privacy legal AI",
    "NDA review AI future",
  ],
  alternates: {
    canonical: "/vision",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ndaagent.com/vision",
    title: "Our Vision | Private Legal AI Infrastructure",
    description:
      "The future of legal decisions is private, local, and intelligent. Explore how KR8V is building the infrastructure for private legal intelligence.",
    siteName: "NDA Agent",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "KR8V Vision - Private Legal AI Infrastructure",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Vision | Private Legal AI Infrastructure",
    description:
      "The future of legal decisions is private, local, and intelligent. Explore how KR8V is building the infrastructure for private legal intelligence.",
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
}

export default function VisionLayout({
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
