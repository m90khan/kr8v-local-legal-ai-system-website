export const easing = [0.16, 1, 0.3, 1] as const

export const springConfig = {
  stiffness: 300,
  damping: 20,
}

export const springConfigSoft = {
  stiffness: 200,
  damping: 25,
}

export const durations = {
  instant: 0.15,
  fast: 0.3,
  normal: 0.6,
  slow: 1.2,
  draw: 1.5,
} as const

export const stagger = {
  fast: 0.05,
  normal: 0.1,
  slow: 0.15,
} as const
