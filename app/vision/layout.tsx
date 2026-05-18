import { Metadata } from "next"
import { Navigation } from "@/components/sections/navigation"

export const metadata: Metadata = {
  title: "Our Vision | Lexon AI - Private Legal AI Infrastructure",
  description:
    "The future of legal decisions is private, local, and intelligent. Explore how Lexon AI is building the infrastructure for private legal intelligence.",
  keywords: [
    "legal AI vision",
    "private AI legal",
    "legal AI infrastructure",
    "local AI contract review",
    "private legal intelligence",
    "AI contract lifecycle management",
    "on-premise legal AI",
    "data privacy legal AI",
    "legal AI roadmap",
  ],
  alternates: {
    canonical: "/vision",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://lexon.p9ix.com/vision",
    title: "Our Vision | Lexon AI - Private Legal AI Infrastructure",
    description:
      "The future of legal decisions is private, local, and intelligent. Explore how Lexon AI is building the infrastructure for private legal intelligence.",
    siteName: "Lexon AI",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Lexon AI Vision - Private Legal AI Infrastructure",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Vision | Lexon AI - Private Legal AI Infrastructure",
    description:
      "The future of legal decisions is private, local, and intelligent. Explore how Lexon AI is building the infrastructure for private legal intelligence.",
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
