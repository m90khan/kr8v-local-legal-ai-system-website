import content from "../content.json"

type Content = typeof content

export function getHeroContent(): Content["hero"] {
  return content.hero
}

export function getProblemSectionContent(): Content["problem_section"] {
  return content.problem_section
}

export function getBeforeAfterContent(): Content["before_after_section"] {
  return content.before_after_section
}

export function getDecisionOutputContent(): Content["decision_output_section"] {
  return content.decision_output_section
}

export function getHowItWorksContent(): Content["how_it_works"] {
  return content.how_it_works
}

export function getScreenshotAnnotationContent(): Content["screenshot_annotation_section"] {
  return content.screenshot_annotation_section
}

export function getFeaturesContent(): Content["features"] {
  return content.features
}

export function getDifferentiatorContent(): Content["differentiator"] {
  return content.differentiator
}

export function getSecurityContent(): Content["security_section"] {
  return content.security_section
}
export function getWhoItsFor(): Content["who_its_for"] {
  return content.who_its_for
}
export function getUseCasesContent(): Content["use_cases"] {
  return content.use_cases
}

export function getLicensingContent(): Content["licensing"] {
  return content.licensing
}

export function getFaqContent(): Content["faq"] {
  return content.faq
}

export function getCtaContent(): Content["cta"] {
  return content.cta
}

export default content
