export const COMPANY = {
  name: "Kr8v",
  address: "Pakistan",
  email: "lexon@p9ix.com",
  website: "https://lexon.p9ix.com",
} as const

export const PRODUCT = {
  name: "Lexon AI",
  description: "Legal AI Automation System",
  domain: "https://lexon.p9ix.com",
} as const

export const CALENDLY = {
  url: "https://calendly.com/kr8vcompany/30min",
  companySlug: "kr8vcompany",
} as const

export const COOKIE_CONSENT = {
  cookieName: "cookie-consent",
  duration: 6 * 30 * 24 * 60 * 60 * 1000,
  categories: {
    essential: ["csrf_token", "session_id", "theme"],
    analytics: ["_ga", "_gid", "_gat_gtag_"],
    marketing: [],
  },
} as const

export const GA_MEASUREMENT_ID = "G-SLVBZ24KQP"

export const DEMO_VIDEO_URL = "https://www.w3schools.com/html/mov_bbb.mp4"
