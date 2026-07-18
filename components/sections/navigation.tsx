"use client"

import { useState, useEffect } from "react"
import { motion } from "motion/react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { ZohoModal } from "@/components/shared/zoho-modal"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [showZoho, setShowZoho] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { label: "Features", href: "/#features" },
    { label: "How it Works", href: "/#how-it-works" },
    { label: "Pricing", href: "/#pricing" },
    { label: "Vision", href: "/vision" },
    { label: "Contact", href: "/contact" },
  ]

  return (
    <>
      <motion.nav
        className="fixed top-0 right-0 left-0 z-40 px-6 py-4"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.div
          className="mx-auto flex max-w-5xl items-center justify-between rounded-sm px-6 py-3"
          style={{
            backgroundColor: isScrolled
              ? "oklch(from var(--background) l c h / 0.8)"
              : "transparent",
            backdropFilter: isScrolled ? "blur(12px)" : "none",
          }}
          animate={{
            boxShadow: isScrolled
              ? "0 4px 24px oklch(from var(--foreground) l c h / 0.1)"
              : "none",
          }}
          transition={{ duration: 0.3 }}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo-dark.png"
              alt="Lexon AI"
              width={44}
              height={44}
              className="hidden h-9 w-auto md:block"
            />
            <span className="bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-xl font-bold tracking-tight text-transparent">
              Lexon AI
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                whileHover={{ y: -2 }}
              >
                {link.label}
              </motion.a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden items-center gap-3 md:flex">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <Button
                size="lg"
                onClick={() => setShowZoho(true)}
                className="bg-gradient-to-r from-primary to-chart-2 px-5 text-sm font-semibold"
              >
                Book a Demo
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="p-2 md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </motion.div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            className="mt-4 rounded-3xl border border-border bg-card p-6 shadow-xl backdrop-blur-xl md:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-lg font-medium transition-colors hover:text-primary"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-4 flex flex-col gap-3 border-t border-border pt-4">
                <Button
                  onClick={() => {
                    setShowZoho(true)
                    setIsMobileMenuOpen(false)
                  }}
                  className="w-full rounded-md bg-gradient-to-r from-primary to-chart-2 py-5 text-base font-semibold"
                >
                  Book a Demo
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </motion.nav>
      <ZohoModal open={showZoho} onClose={() => setShowZoho(false)} />
    </>
  )
}
