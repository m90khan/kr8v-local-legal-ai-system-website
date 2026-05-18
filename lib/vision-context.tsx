import { createContext, useContext, ReactNode } from "react"
import vision from "../vision.json" // vision.json at repo root

type VisionShape = typeof vision

const VisionContext = createContext<VisionShape | null>(null)

export function VisionProvider({ children }: { children: ReactNode }) {
  return (
    <VisionContext.Provider value={vision}>
      {children}
    </VisionContext.Provider>
  )
}

export function useVision() {
  const ctx = useContext(VisionContext)
  if (!ctx) throw new Error("useVision must be used within VisionProvider")
  return ctx
}

export function getVision(): VisionShape {
  return vision
}

export default vision
