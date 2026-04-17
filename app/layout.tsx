import { Metadata } from "next"
import { Geist_Mono, Roboto } from "next/font/google"
import Script from "next/script"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

const roboto = Roboto({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://ndaagent.com"),
  title: {
    default: "NDA Agent | AI NDA Analysis & Contract Review AI",
    template: "%s | NDA Agent",
  },
  description:
    "Private, local AI NDA review tool. Analyze contracts and identify legal risks securely without data leaving your system.",
  keywords: [
    "NDA review tool",
    "AI NDA analysis",
    "contract review AI",
    "legal AI tool",
    "NDA risk analysis",
    "review NDA online",
    "analyze contract AI",
    "private AI legal tools",
    "local AI for contracts",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ndaagent.com",
    title: "NDA Agent | AI Contract & NDA Risk Analysis Tool",
    description:
      "Instant, private AI NDA review. Runs locally to detect legal risks securely.",
    siteName: "NDA Agent",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "NDA Agent - Local AI NDA Analysis Tool",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NDA Agent | Private AI NDA Review Tool",
    description:
      "Instant, private AI NDA review. Runs locally to detect legal risks securely.",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
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
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-TRACKINGID"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-TRACKINGID', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
