"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "motion/react"
import { HamburgerMenu, CloseSquare, Leaf, Moon, Sun, AltArrowRight } from "@solar-icons/react"
import { Button } from "@workspace/ui/components/button"
import { useTheme } from "next-themes"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Beranda", href: "#beranda" },
    { name: "Tentang", href: "#tentang" },
    { name: "Ekosistem", href: "#ekosistem" },
    { name: "Fitur", href: "#fitur" },
  ]

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark")
  }

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-white/70 dark:bg-slate-950/70 border-b border-sky-100/30 dark:border-sky-950/30 backdrop-blur-lg shadow-sm"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="#beranda" className="flex items-center group">
          <img
            src="/ecomotif-logo-white.png"
            alt="Ekomotif Logo"
            className="h-9 w-auto object-contain invert dark:invert-0 transition-transform group-hover:scale-102"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6 py-1.5 px-4 rounded-full bg-white/40 dark:bg-slate-900/40 border border-white/20 dark:border-slate-800/30 backdrop-blur-md shadow-xs">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-sky-600 dark:text-slate-300 dark:hover:text-sky-400 transition-colors relative py-1"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-4">
          {/* Theme Toggle Button */}
          {mounted && (
            <Button
              variant="outline"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full border-sky-100 dark:border-sky-950 bg-white/60 dark:bg-slate-900/60 backdrop-blur-xs hover:bg-sky-50 dark:hover:bg-sky-950 text-slate-600 dark:text-slate-300"
            >
              {resolvedTheme === "dark" ? (
                <Sun className="h-[1.2rem] w-[1.2rem] text-amber-400 transition-all" />
              ) : (
                <Moon className="h-[1.2rem] w-[1.2rem] text-sky-600 transition-all" />
              )}
            </Button>
          )}

          <a
            href="https://play.google.com/store/apps/details?id=com.ecomotif.apps&pcampaignid=web_share"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-linear-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white shadow-md shadow-sky-500/10 hover:shadow-sky-500/20 text-sm font-semibold transition-all cursor-pointer select-none"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 mr-2 shrink-0" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.25 3.03c-.08.13-.12.3-.12.51v16.92c0 .21.04.38.12.51L11.59 12 3.25 3.03z" />
              <path d="M14.71 8.87L3.92 2.72c.4-.33.95-.31 1.45.02l9.34 5.4z" />
              <path d="M14.71 15.13L5.37 20.53c-.5.33-1.05.35-1.45.02l10.79-6.15z" />
              <path d="M18.8 11.23l-3.36-1.94-3.04 2.71 3.04 2.71 3.36-1.94c.58-.33.88-.86.88-1.27s-.3-.94-.88-1.27z" />
            </svg>
            <span>Play Store</span>
          </a>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-3 md:hidden">
          {mounted && (
            <Button
              variant="outline"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full border-sky-100 dark:border-sky-950 bg-white/60 dark:bg-slate-900/60 text-slate-600 dark:text-slate-300"
            >
              {resolvedTheme === "dark" ? (
                <Sun className="h-[1.2rem] w-[1.2rem] text-amber-400" />
              ) : (
                <Moon className="h-[1.2rem] w-[1.2rem] text-sky-600" />
              )}
            </Button>
          )}

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-full text-slate-700 dark:text-slate-300 hover:bg-sky-50 dark:hover:bg-slate-900"
          >
            {isOpen ? <CloseSquare className="w-6 h-6" /> : <HamburgerMenu className="w-6 h-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t border-sky-100/20 dark:border-sky-950/20 bg-white/90 dark:bg-slate-950/90 backdrop-blur-xl overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-base font-medium text-slate-600 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 block py-1.5 transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
                className="pt-4 border-t border-sky-100/30 dark:border-sky-950/30"
              >
                <a
                  href="https://play.google.com/store/apps/details?id=com.ecomotif.apps&pcampaignid=web_share"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="w-full inline-flex items-center justify-center px-5 py-3 rounded-full bg-linear-to-r from-sky-500 to-blue-600 text-white text-sm font-semibold transition-all cursor-pointer shadow-md shadow-sky-500/10 hover:shadow-sky-500/20"
                >
                  <svg viewBox="0 0 24 24" className="w-4.5 h-4.5 mr-2 shrink-0" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.25 3.03c-.08.13-.12.3-.12.51v16.92c0 .21.04.38.12.51L11.59 12 3.25 3.03z" />
                    <path d="M14.71 8.87L3.92 2.72c.4-.33.95-.31 1.45.02l9.34 5.4z" />
                    <path d="M14.71 15.13L5.37 20.53c-.5.33-1.05.35-1.45.02l10.79-6.15z" />
                    <path d="M18.8 11.23l-3.36-1.94-3.04 2.71 3.04 2.71 3.36-1.94c.58-.33.88-.86.88-1.27s-.3-.94-.88-1.27z" />
                  </svg>
                  <span>Download Play Store</span>
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
