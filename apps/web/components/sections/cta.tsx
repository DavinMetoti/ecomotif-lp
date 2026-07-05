"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Button } from "@workspace/ui/components/button"
import { Wheel, CheckCircle as CheckCircle2, SendSquare as Send } from "@solar-icons/react"

export function CTA() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email.trim() && email.includes("@")) {
      setSubmitted(true)
    }
  }

  return (
    <section
      id="kontak"
      className="py-28 relative overflow-hidden bg-slate-50 dark:bg-slate-950 w-full"
    >
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 15 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden bg-white/40 dark:bg-slate-900/10 border border-slate-200/50 dark:border-slate-800/40 backdrop-blur-md p-10 sm:p-16 shadow-xs text-center flex flex-col items-center gap-6"
        >
          {/* Top Wheel Accent */}
          <div className="w-10 h-10 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center justify-center text-slate-700 dark:text-slate-350">
            <Wheel className="w-5 h-5 text-sky-500" />
          </div>


          <p className="text-xs sm:text-sm text-slate-400 dark:text-slate-500 max-w-lg leading-relaxed font-light">
            Dapatkan pembaruan peluncuran aplikasi Ekomotif, info promo perawatan bengkel, serta kupon towing darurat gratis langsung di email Anda.
          </p>

          {/* Form Area with AnimatePresence */}
          <div className="w-full max-w-md mt-4">
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="flex flex-col sm:flex-row gap-3 items-stretch justify-center w-full"
                >
                  <input
                    type="email"
                    required
                    placeholder="Masukkan alamat email Anda"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-grow px-5 py-3 rounded-full border border-slate-200 dark:border-slate-800 bg-white/85 dark:bg-slate-950/85 text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-sky-500 text-xs shadow-xs"
                  />
                  <Button
                    type="submit"
                    variant="default"
                    className="rounded-full bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-950 shadow-xs px-6 py-3 cursor-pointer h-auto text-xs font-semibold shrink-0"
                  >
                    Ikuti Update
                    <Send className="w-4 h-4 ml-1.5" />
                  </Button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  className="py-4 px-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 shrink-0 text-emerald-500" />
                  <div className="text-left">
                    <h4 className="font-semibold text-xs">Pendaftaran Berhasil</h4>
                    <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5 font-light">
                      Terima kasih telah bergabung. Kami akan mengirimkan informasi menarik segera.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-xs font-medium text-slate-400 dark:text-slate-500">
            <a href="#" className="hover:text-sky-500 transition-colors">Unduh Whitepaper</a>
            <span className="w-1 h-1 rounded-full bg-slate-200 dark:bg-slate-800" />
            <a href="#" className="hover:text-sky-500 transition-colors">Program Kemitraan</a>
            <span className="w-1 h-1 rounded-full bg-slate-200 dark:bg-slate-800" />
            <a href="#" className="hover:text-sky-500 transition-colors">Kontak Bisnis</a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
