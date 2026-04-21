import { Metadata } from "next"
import { NavigationV2 } from "@/components/sections/navigation-v2"

export const metadata: Metadata = {
  title: "Privacy Policy | KR8V - Private AI NDA Analysis",
  description:
    "KR8V Privacy Policy - Learn how we handle your data when you use our private, local AI NDA analysis tool. Your contracts never leave your infrastructure.",
  keywords: [
    "privacy policy",
    "NDA analysis privacy",
    "local AI data privacy",
    "contract analysis privacy",
    "KR8V privacy",
    "GDPR privacy",
    "data protection",
  ],
  alternates: {
    canonical: "/privacy",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ndaagent.com/privacy",
    title: "Privacy Policy | KR8V - Private AI NDA Analysis",
    description:
      "Learn how KR8V handles your data. Your contracts are processed locally and never leave your infrastructure.",
    siteName: "NDA Agent",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "KR8V Privacy Policy",
      },
    ],
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
      <NavigationV2 />
      {children}
    </>
  )
}
