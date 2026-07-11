import Script from "next/script"
import { HeroSection } from "@/components/sections/hero-section"
import { ProblemSection } from "@/components/sections/problem-section"
import { DifferentiatorSection } from "@/components/sections/differentiator-section"
import { SecuritySection } from "@/components/sections/security-section"
import { UseCasesSection } from "@/components/sections/use-cases-section"
import { PricingSection } from "@/components/sections/pricing-section"
import { FaqSection } from "@/components/sections/faq-section"
import { CtaSection } from "@/components/sections/cta-section"
import { CustomCursor } from "@/components/shared/custom-cursor"
import { ScrollProgress } from "@/components/shared/scroll-progress"
import { Navigation } from "@/components/sections/navigation"
import { WhoItsFor } from "@/components/sections/who-its-for"

// New Pipeline Section
import { SeeItInAction } from "@/components/sections/see-it-in-action"

import { PrivateDeployment } from "@/components/sections/private-deployment"

export default function LandingPageV3() {
  const jsonLdProduct = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Lexon AI",
    description:
      "Private contract intelligence platform for NDA review, vendor agreement analysis, procurement contract review, and enterprise compliance.",
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
        name: "Where is contract data processed?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Lexon AI is designed for self-hosted and local deployment. In standard deployments, contracts remain within customer-controlled infrastructure.",
        },
      },
      {
        "@type": "Question",
        name: "Does Lexon AI require external AI APIs?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Lexon AI is designed to support local AI inference without requiring mandatory external AI services.",
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

        {/* Hero + Pipeline */}
        <HeroSection />
        <SeeItInAction />

        {/* Cinematic Storytelling Sections */}
        {/* <InsideAIBrain />
        <ProcurementIntelligence /> */}
        <PrivateDeployment />
        {/* <HumanReviewWorkflow /> */}
        {/* <WorkspaceTransition /> */}

        {/* Existing Sections (preserved) */}
        <ProblemSection />
        {/* <DecisionOutputSection /> */}
        {/* <HowItWorksHorizontal /> */}
        {/* <ScreenshotAnnotationSection /> */}
        {/* <FeaturesSection /> */}
        <DifferentiatorSection />
        <SecuritySection />
        <WhoItsFor />
        <UseCasesSection />
        <PricingSection />
        <FaqSection />
        <CtaSection />
      </main>
    </>
  )
}
