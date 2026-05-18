# Graph Report - .  (2026-05-16)

## Corpus Check
- Corpus is ~28,491 words - fits in a single context window. You may not need a graph.

## Summary
- 199 nodes · 325 edges · 17 communities (13 shown, 4 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Landing Page Components|Landing Page Components]]
- [[_COMMUNITY_Contact Form & Tabs|Contact Form & Tabs]]
- [[_COMMUNITY_Static Pages (PrivacyTermsVision)|Static Pages (Privacy/Terms/Vision)]]
- [[_COMMUNITY_Layout Wrappers|Layout Wrappers]]
- [[_COMMUNITY_Root Layout & Theme|Root Layout & Theme]]
- [[_COMMUNITY_Button & Hero UI|Button & Hero UI]]
- [[_COMMUNITY_Badge & Risk Display|Badge & Risk Display]]
- [[_COMMUNITY_Reveal Text Animation|Reveal Text Animation]]
- [[_COMMUNITY_Content Context|Content Context]]
- [[_COMMUNITY_Vision Context|Vision Context]]
- [[_COMMUNITY_Contact API Route|Contact API Route]]
- [[_COMMUNITY_Animated Stats|Animated Stats]]
- [[_COMMUNITY_Floating Particles|Floating Particles]]

## God Nodes (most connected - your core abstractions)
1. `cn()` - 35 edges
2. `Button()` - 11 edges
3. `Card()` - 9 edges
4. `Navigation()` - 6 edges
5. `Badge()` - 4 edges
6. `CtaSection()` - 4 edges
7. `TabsList()` - 3 edges
8. `SelectTrigger()` - 3 edges
9. `SelectContent()` - 3 edges
10. `SelectItem()` - 3 edges

## Surprising Connections (you probably didn't know these)
- `RootLayout()` --calls--> `cn()`  [EXTRACTED]
  app/layout.tsx → lib/utils.ts
- `ContactForm()` --calls--> `cn()`  [EXTRACTED]
  app/contact/page.tsx → lib/utils.ts
- `Tabs()` --calls--> `cn()`  [EXTRACTED]
  components/ui/tabs.tsx → lib/utils.ts
- `TabsTrigger()` --calls--> `cn()`  [EXTRACTED]
  components/ui/tabs.tsx → lib/utils.ts
- `TabsContent()` --calls--> `cn()`  [EXTRACTED]
  components/ui/tabs.tsx → lib/utils.ts

## Communities (17 total, 4 thin omitted)

### Community 0 - "Landing Page Components"
Cohesion: 0.06
Nodes (24): Content, getDifferentiatorContent(), getFaqContent(), getHowItWorksContent(), getUseCasesContent(), getWhoItsFor(), DecisionOutputSection(), comparisons (+16 more)

### Community 1 - "Contact Form & Tabs"
Cohesion: 0.11
Nodes (29): ContactForm(), INQUIRY_TYPES, cn(), Window, ZohoEmbed(), ZohoEmbedProps, CardAction(), CardContent() (+21 more)

### Community 2 - "Static Pages (Privacy/Terms/Vision)"
Cohesion: 0.13
Nodes (10): CALENDLY, COMPANY, CtaSection(), CalendlyEmbedProps, CalendlyModal(), CalendlyModalProps, VideoModal(), VideoModalProps (+2 more)

### Community 3 - "Layout Wrappers"
Cohesion: 0.17
Nodes (6): metadata, metadata, Navigation(), ThemeToggle(), metadata, metadata

### Community 4 - "Root Layout & Theme"
Cohesion: 0.15
Nodes (9): fontMono, metadata, roboto, RootLayout(), LenisContext, LenisProvider(), COOKIE_CONSENT, CookieConsent() (+1 more)

### Community 5 - "Button & Hero UI"
Cohesion: 0.24
Nodes (7): getHeroContent(), HeroSection(), PricingSection(), buttonVariants, MagneticButtonProps, Button(), buttonVariants

### Community 6 - "Badge & Risk Display"
Cohesion: 0.27
Nodes (7): ClauseState, content, ProblemSectionV2Interactive(), RiskLevel, ProblemSection(), Badge(), badgeVariants

### Community 7 - "Reveal Text Animation"
Cohesion: 0.33
Nodes (3): ElementType, RevealLinesProps, RevealTextProps

### Community 10 - "Contact API Route"
Cohesion: 0.4
Nodes (3): ratelimit, redis, resend

## Knowledge Gaps
- **40 isolated node(s):** `roboto`, `fontMono`, `metadata`, `metadata`, `INQUIRY_TYPES` (+35 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **4 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `cn()` connect `Contact Form & Tabs` to `Static Pages (Privacy/Terms/Vision)`, `Root Layout & Theme`, `Button & Hero UI`, `Badge & Risk Display`?**
  _High betweenness centrality (0.170) - this node is a cross-community bridge._
- **Why does `Button()` connect `Button & Hero UI` to `Contact Form & Tabs`, `Static Pages (Privacy/Terms/Vision)`, `Layout Wrappers`, `Root Layout & Theme`, `Badge & Risk Display`?**
  _High betweenness centrality (0.081) - this node is a cross-community bridge._
- **Why does `Card()` connect `Static Pages (Privacy/Terms/Vision)` to `Landing Page Components`, `Contact Form & Tabs`, `Button & Hero UI`?**
  _High betweenness centrality (0.039) - this node is a cross-community bridge._
- **What connects `roboto`, `fontMono`, `metadata` to the rest of the system?**
  _40 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Landing Page Components` be split into smaller, more focused modules?**
  _Cohesion score 0.06 - nodes in this community are weakly interconnected._
- **Should `Contact Form & Tabs` be split into smaller, more focused modules?**
  _Cohesion score 0.11 - nodes in this community are weakly interconnected._
- **Should `Static Pages (Privacy/Terms/Vision)` be split into smaller, more focused modules?**
  _Cohesion score 0.13 - nodes in this community are weakly interconnected._