"use client"

import { useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "motion/react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FileText, Loader2 } from "lucide-react"

type RiskLevel = "low" | "medium" | "high"
type ClauseState = "initial" | "suggested" | "accepted" | "rejected" | "editing"

const content = {
  high: {
    badge: "HIGH RISK",
    badgeClass: "bg-red-500 text-white rounded-sm",
    container:
      "border-red-500/30 bg-red-50/30 dark:border-red-400/20 dark:bg-red-900/10",

    clause: `The Recipient shall be liable for any and all damages arising from a breach of this Agreement, including direct, indirect, incidental, or consequential damages, regardless of foreseeability.`,

    issue:
      "This clause creates uncapped liability by making the Recipient responsible for all types of damages, including indirect and unforeseeable losses.",

    impact:
      "This exposes the Recipient to potentially unlimited financial liability, even for minor breaches, which is often unenforceable and commercially unreasonable.",

    fix: `Limit liability to direct damages only and cap total liability at the fees paid under the agreement. Exclude indirect, incidental, and consequential damages except in cases of fraud or willful misconduct.`,

    evidence: [
      "Uncapped liability clauses are commonly rejected in commercial agreements.",
      "Exclusion of indirect damages is standard practice in most contracts.",
    ],

    policy: {
      id: "CONF-001",
      text: "Liability must be limited to reasonable and foreseeable damages to ensure enforceability and commercial fairness.",
    },
  },

  medium: {
    badge: "MEDIUM RISK",
    badgeClass: "bg-yellow-500 text-black",
    container:
      "border-yellow-500/30 bg-yellow-50/40 dark:border-yellow-400/20 dark:bg-yellow-900/10",

    clause: `The obligations of confidentiality shall survive the termination of this Agreement for an indefinite period unless otherwise required by law.`,

    issue:
      "The clause imposes indefinite confidentiality obligations without a defined time limit.",

    impact:
      "This may create long-term legal ambiguity and make enforcement difficult, especially across jurisdictions with different standards.",

    fix: `Define a fixed confidentiality period (e.g., 3–5 years after termination), while allowing exceptions only where required by law.`,

    evidence: [
      "Indefinite confidentiality obligations are often challenged in court.",
      "Most NDAs define a fixed duration between 2–5 years.",
    ],

    policy: {
      id: "CONF-002",
      text: "Confidentiality obligations should have clearly defined durations unless legally required otherwise.",
    },
  },

  low: {
    badge: "LOW RISK",
    badgeClass: "bg-green-500 text-white",
    container:
      "border-green-500/30 bg-green-50/30 dark:border-green-400/20 dark:bg-green-900/10",

    clause: `Confidential Information shall not include information that becomes publicly available, is already known to the Recipient, or is independently developed without reference to the disclosed information.`,

    issue:
      "The clause is well-structured and properly defines exclusions to confidentiality.",

    impact:
      "This reduces the risk of overbroad obligations and aligns with standard legal practice.",

    fix: `No major changes required. The clause appropriately balances protection with reasonable exclusions.`,

    evidence: [
      "Exclusion clauses like this are standard in well-drafted NDAs.",
    ],

    policy: {
      id: "CONF-003",
      text: "Confidentiality definitions should include clear exclusions for public, prior, and independently developed information.",
    },
  },
}

export function ProblemSectionV2Interactive() {
  const [risk, setRisk] = useState<RiskLevel>("high")

  const [clauseState, setClauseState] = useState<ClauseState>("initial")

  const [rewriteHistory, setRewriteHistory] = useState<string[]>([
    content.high.fix,
  ])
  const [currentRewriteIndex, setCurrentRewriteIndex] = useState(0)

  const [showEvidence, setShowEvidence] = useState(false)
  const [loadingEvidence, setLoadingEvidence] = useState(false)

  const { scrollYProgress } = useScroll()
  const riskFromScroll = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["low", "medium", "high"]
  )

  useEffect(() => {
    const unsub = riskFromScroll.on("change", (v) => {
      const newRisk = v as RiskLevel
      setRisk(newRisk)

      // Reset state when risk changes
      setClauseState("initial")
      setRewriteHistory([content[newRisk].fix])
      setCurrentRewriteIndex(0)
      setShowEvidence(false)
    })
    return () => unsub()
  }, [riskFromScroll])

  const c = content[risk]
  const currentRewrite = rewriteHistory[currentRewriteIndex]

  /* ---------------- ACTIONS ---------------- */

  const handleSuggestRewrite = () => {
    const newRewrite =
      c.fix +
      " This version improves clarity, tightens legal boundaries, and aligns with best practices."

    setRewriteHistory((prev) => [...prev, newRewrite])
    setCurrentRewriteIndex((prev) => prev + 1)
    setClauseState("suggested")
  }

  const handleUndo = () => {
    if (currentRewriteIndex > 0) {
      setCurrentRewriteIndex((prev) => prev - 1)
      setClauseState("suggested")
    } else {
      setClauseState("initial")
    }
  }

  const handleAccept = () => {
    setClauseState("accepted")
  }

  const handleReject = () => {
    setClauseState("rejected")
  }

  const handleEdit = () => {
    setClauseState("editing")
  }

  const handleEvidence = () => {
    setLoadingEvidence(true)
    setTimeout(() => {
      setShowEvidence((v) => !v)
      setLoadingEvidence(false)
    }, 800)
  }

  /* ---------------- UI ---------------- */

  return (
    <section className="mx-auto max-w-5xl space-y-4">
      {/* MAIN CARD */}
      <motion.div
        key={risk}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className={`space-y-4 rounded-lg border p-6 ${c.container}`}
      >
        {/* HEADER */}
        <div className="flex items-center justify-between">
          <Badge className={c.badgeClass}>{c.badge}</Badge>
          <span className="text-xs text-muted-foreground">
            AI + Policy Engine
          </span>
        </div>

        {/* CLAUSE */}
        <div>
          <p className="text-xs font-semibold text-muted-foreground uppercase">
            Clause
          </p>
          <p className="text-sm whitespace-pre-wrap">{c.clause}</p>
        </div>

        {/* ISSUE */}
        <div className="border-t pt-2">
          <p className="text-xs font-semibold text-red-600 uppercase">Issue</p>
          <p className="text-sm">{c.issue}</p>
        </div>

        {/* IMPACT */}
        <div className="border-t pt-2">
          <p className="text-xs font-semibold text-amber-500 uppercase">
            Why this matters
          </p>
          <p className="text-sm text-muted-foreground">{c.impact}</p>
        </div>

        {/* REWRITE */}
        <div className="border-t pt-2">
          <p className="text-xs font-semibold text-green-600 uppercase">
            AI Suggested Rewrite
          </p>
          <p className="mt-2 text-sm">{currentRewrite}</p>
        </div>

        {/* EVIDENCE */}
        <div className="border-t pt-2">
          {showEvidence && (
            <>
              <p className="text-xs font-semibold text-blue-500 uppercase">
                Evidence
              </p>
              {c.evidence.map((e, i) => (
                <p key={i} className="text-sm text-muted-foreground">
                  • {e}
                </p>
              ))}

              <div className="mt-2 rounded-sm border border-border/70 bg-background/70 p-2 text-xs">
                <p className="font-semibold uppercase">
                  {c.policy.id} - Company Policy
                </p>
                <p>{c.policy.text}</p>
              </div>
            </>
          )}

          <Button
            variant="outline"
            className="mt-2 text-[12px]"
            onClick={handleEvidence}
          >
            {loadingEvidence ? (
              <Loader2 className="mr-2 size-4 animate-spin" />
            ) : (
              <FileText className="mr-2 size-4" />
            )}
            {showEvidence ? "Hide Evidence" : "Load Evidence"}
          </Button>
        </div>

        {/* ACCEPTED */}
        {clauseState === "accepted" && (
          <div className="rounded-md border border-green-500/30 bg-green-50 p-3 text-sm text-green-800 dark:bg-green-900/20 dark:text-green-100">
            ✔ Fix accepted and applied to clause
          </div>
        )}
      </motion.div>

      {/* ACTIONS */}
      <div className="flex flex-wrap gap-2">
        <p className="w-full text-xs text-muted-foreground">
          Choose how to proceed with this clause
        </p>

        <Button
          variant={clauseState === "accepted" ? "outline" : "default"}
          disabled={clauseState === "accepted"}
          onClick={handleAccept}
          className="text-[12px]"
        >
          Accept Fix
        </Button>

        <Button
          variant="destructive"
          disabled={clauseState === "accepted"}
          onClick={handleReject}
          className="text-[12px]"
        >
          Reject & Flag Risk
        </Button>

        <Button
          variant="secondary"
          disabled={clauseState === "accepted"}
          onClick={handleSuggestRewrite}
          className="text-[12px]"
        >
          Suggest New Rewrite
        </Button>

        <Button
          variant="ghost"
          onClick={handleUndo}
          disabled={currentRewriteIndex === 0}
          className="text-muted-foreground"
        >
          Undo
        </Button>

        {clauseState === "accepted" && (
          <Button
            variant="outline"
            onClick={handleEdit}
            className="text-[12px]"
          >
            Edit Clause
          </Button>
        )}
      </div>
    </section>
  )
}
