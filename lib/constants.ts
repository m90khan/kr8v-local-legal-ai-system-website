export const COMPANY = {
  name: "KR8V",
  address: "Pakistan",
  email: "contact@kr8v.agency",
  website: "https://ndaagent.com",
} as const

export const CALENDLY = {
  url: "https://calendly.com/kr8vcompany/30min",
  companySlug: "kr8vcompany",
} as const

export const COOKIE_CONSENT = {
  cookieName: "cookie-consent",
  duration: 6 * 30 * 24 * 60 * 60 * 1000, // 6 months in ms
  categories: {
    essential: ["csrf_token", "session_id", "theme"],
    analytics: ["_ga", "_gid", "_gat_gtag_"],
    marketing: [],
  },
} as const

export const GA_MEASUREMENT_ID = "G-JWXXXXXXXXX"

export const DEMO_VIDEO_URL = "https://www.w3schools.com/html/mov_bbb.mp4"
