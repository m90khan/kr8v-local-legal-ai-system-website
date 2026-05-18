import Script from "next/script"
import { HeroSection } from "@/components/sections/hero-section"
import { ProblemSection } from "@/components/sections/problem-section"
import { HowItWorksHorizontal } from "@/components/sections/how-it-works-horizontal"
import { ScreenshotAnnotationSection } from "@/components/sections/screenshot-annotation-section"
import { FeaturesSection } from "@/components/sections/features-section"
import { DifferentiatorSection } from "@/components/sections/differentiator-section"
import { SecuritySection } from "@/components/sections/security-section"
import { UseCasesSection } from "@/components/sections/use-cases-section"
import { PricingSection } from "@/components/sections/pricing-section"
import { FaqSection } from "@/components/sections/faq-section"
import { CtaSection } from "@/components/sections/cta-section"
import { CustomCursor } from "@/components/shared/custom-cursor"
import { ScrollProgress } from "@/components/shared/scroll-progress"
import { Navigation } from "@/components/sections/navigation"
import { DecisionOutputSection } from "@/components/sections/decision-output-section"
import { WhoItsFor } from "@/components/sections/who-its-for"

export default function LandingPageV3() {
  const jsonLdProduct = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Lexon AI",
    description:
      "Private legal AI automation system for NDA review, contract analysis, policy validation, and enterprise compliance.",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Windows, Linux",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  }

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is this legally reliable? Can I trust the AI's analysis?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Lexon AI uses advanced NLP models trained on thousands of contracts to identify risk patterns. However, we're clear: this is decision support, not legal advice.",
        },
      },
      {
        "@type": "Question",
        name: "Where does my data go? Who can see my contracts?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nowhere. Your contracts are processed entirely on your infrastructure using local AI models. We don't have external API calls.",
        },
      },
    ],
  }

  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://lexon.p9ix.com/",
      },
    ],
  }

  return (
    <>
      <Script
        id="schema-product"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdProduct) }}
      />
      <Script
        id="schema-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />
      <Script
        id="schema-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      <main className="relative bg-background">
        <CustomCursor />
        <ScrollProgress />
        <Navigation />

        {/* Hero with Decision Preview */}
        <HeroSection />

        {/* Problem with Real NDA Snippet */}
        <ProblemSection />

        {/* Before/After Comparison */}
        {/* <BeforeAfterSection /> */}

        {/* Decision Output Feature (NEW - Hook Feature) */}
        <DecisionOutputSection />

        {/* How It Works (Horizontal Scroll) */}
        <HowItWorksHorizontal />

        {/* Screenshot with Annotations (Visual Variety) */}
        <ScreenshotAnnotationSection />

        {/* Features (Cards - but different from others) */}
        <FeaturesSection />

        {/* Differentiator */}
        <DifferentiatorSection />

        {/* Security */}
        <SecuritySection />
        <WhoItsFor />
        {/* Testimonials (Ultra-Specific) */}
        <UseCasesSection />

        {/* Pricing (Safe Copy) */}
        <PricingSection />

        {/* FAQ */}
        <FaqSection />

        {/* CTA (Aggressive Action) */}
        <CtaSection />
      </main>
    </>
  )
}
