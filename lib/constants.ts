export const COMPANY = {
  name: "Kr8v",
  address: "Pakistan",
  email: "lexon@p9ix.com",
  website: "https://lexon.p9ix.com",
  registration: {
    owner: "Khan Muhammad Mohsin",
    authority: "Tax Office FBR",
    regNo: "3410187334611",
    refNo: "3815532-0",
  },
  privacyPolicy: "https://www.kr8v.agency/privacy",
  structure: {
    company: "Kr8v",
    aiDivision: "P9ix",
    product: "Lexon AI",
  },
} as const

export const PRODUCT = {
  name: "Lexon AI",
  description: "Legal AI Automation System",
  domain: "https://lexon.p9ix.com",
} as const

export const ZOHO_BOOKINGS = {
  url: "https://bookings.zoho.com/book/kr8vcompany",
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
