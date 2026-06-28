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
      className="py-24 relative overflow-hidden bg-slate-50 dark:bg-slate-950"
    >
      {/* Background gradients */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-sky-200/20 dark:bg-sky-950/10 blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden bg-white/40 dark:bg-slate-900/40 border border-white/40 dark:border-slate-800/30 backdrop-blur-lg p-10 sm:p-16 shadow-2xl text-center flex flex-col items-center gap-6"
        >
          {/* Top Wheel Accent */}
          <div className="w-12 h-12 rounded-full bg-linear-to-tr from-sky-400 to-blue-600 flex items-center justify-center text-white shadow-md shadow-sky-500/20">
            <Wheel className="w-5.5 h-5.5" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight max-w-xl">
            Siap Menikmati Kemudahan{" "}
            <span className="bg-linear-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
              Layanan Otomotif?
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 max-w-lg leading-relaxed">
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
                    className="flex-grow px-5 py-3 rounded-full border border-sky-100 dark:border-sky-950/50 bg-white/80 dark:bg-slate-950/80 text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-sky-500 text-sm shadow-xs"
                  />
                  <Button
                    type="submit"
                    variant="default"
                    className="rounded-full bg-linear-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white shadow-md px-6 py-3 cursor-pointer h-auto text-sm font-semibold shrink-0"
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
                  <CheckCircle2 className="w-6 h-6 shrink-0 text-emerald-500" />
                  <div className="text-left">
                    <h4 className="font-bold text-sm">Pendaftaran Berhasil!</h4>
                    <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">
                      Terima kasih telah bergabung. Kami akan mengirimi Anda informasi menarik segera.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-xs font-semibold text-slate-400 dark:text-slate-500">
            <a href="#" className="hover:text-sky-600 transition-colors">Unduh Whitepaper</a>
            <span className="w-1.5 h-1.5 rounded-full bg-slate-200 dark:bg-slate-800" />
            <a href="#" className="hover:text-sky-600 transition-colors">Program Kemitraan</a>
            <span className="w-1.5 h-1.5 rounded-full bg-slate-200 dark:bg-slate-800" />
            <a href="#" className="hover:text-sky-600 transition-colors">Kontak Bisnis</a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
