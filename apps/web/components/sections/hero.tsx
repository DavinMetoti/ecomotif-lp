"use client"

import React, { useState, useEffect } from "react"
import { motion } from "motion/react"
import { Button } from "@workspace/ui/components/button"
import { Wheel, Settings, MapPoint, ArrowRight, GraphUp, ShieldWarning } from "@solar-icons/react"

export function Hero() {
  const [chargingPercentage, setChargingPercentage] = useState(64)
  const [towEta, setTowEta] = useState(15)

  // Simulation of real-time updates for interactive feel
  useEffect(() => {
    const chargeInterval = setInterval(() => {
      setChargingPercentage((prev) => (prev >= 100 ? 20 : prev + 1))
    }, 3000)

    const etaInterval = setInterval(() => {
      setTowEta((prev) => (prev <= 1 ? 15 : prev - 1))
    }, 10000)

    return () => {
      clearInterval(chargeInterval)
      clearInterval(etaInterval)
    }
  }, [])

  return (
    <section
      id="beranda"
      className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden bg-slate-50 dark:bg-slate-950"
    >
      {/* Background patterns & gradients */}
      <div className="absolute inset-0 z-0">
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(14,165,233,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(14,165,233,0.05)_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] dark:bg-[linear-gradient(to_right,rgba(14,165,233,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(14,165,233,0.02)_1px,transparent_1px)]" />

        {/* Glow blobs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-sky-200/40 dark:bg-sky-950/20 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -30, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-blue-200/30 dark:bg-blue-950/15 blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10 w-full">
        {/* Text Area */}
        <div className="lg:col-span-7 flex flex-col items-start gap-6 text-left">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-sky-200/50 bg-sky-50/50 dark:border-sky-950/40 dark:bg-sky-950/30 backdrop-blur-md"
          >
            <Wheel className="w-4 h-4 text-sky-600 dark:text-sky-400" />
            <span className="text-xs font-semibold text-sky-800 dark:text-sky-300 uppercase tracking-wider">
              Ekosistem Otomotif Terintegrasi
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.1]"
          >
            Semua Layanan{" "}
            <span className="bg-linear-to-r from-sky-500 via-sky-600 to-blue-600 dark:from-sky-300 dark:via-sky-400 dark:to-blue-500 bg-clip-text text-transparent">
              Otomotif Indonesia
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-slate-500 dark:text-slate-400 max-w-xl leading-relaxed"
          >
            Satu aplikasi terintegrasi untuk booking servis bengkel terpercaya, layanan bengkel darurat panggilan 24 jam, pencarian mobil showroom terdekat, hingga ruang diskusi komunitas otomotif terbesar.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4 w-full sm:w-auto"
          >
            <a
              href="https://play.google.com/store/apps/details?id=com.ecomotif.apps&pcampaignid=web_share"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-linear-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white shadow-lg shadow-sky-500/20 px-8 py-4 text-base font-semibold transition-all cursor-pointer select-none"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 mr-2.5 shrink-0" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.25 3.03c-.08.13-.12.3-.12.51v16.92c0 .21.04.38.12.51L11.59 12 3.25 3.03z" />
                <path d="M14.71 8.87L3.92 2.72c.4-.33.95-.31 1.45.02l9.34 5.4z" />
                <path d="M14.71 15.13L5.37 20.53c-.5.33-1.05.35-1.45.02l10.79-6.15z" />
                <path d="M18.8 11.23l-3.36-1.94-3.04 2.71 3.04 2.71 3.36-1.94c.58-.33.88-.86.88-1.27s-.3-.94-.88-1.27z" />
              </svg>
              <span>Download Play Store</span>
            </a>
            <a
              href="#ekosistem"
              className="inline-flex items-center justify-center rounded-full border border-sky-100 dark:border-sky-950 bg-white/40 dark:bg-slate-900/40 backdrop-blur-md hover:bg-sky-50/50 dark:hover:bg-sky-950/50 text-slate-700 dark:text-slate-200 px-8 py-4 text-base font-semibold transition-all cursor-pointer select-none"
            >
              <span>Jelajahi Ekosistem</span>
            </a>
          </motion.div>

          {/* Live stats footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-3 gap-6 sm:gap-8 pt-8 mt-4 border-t border-sky-100/50 dark:border-sky-950/30 w-full"
          >
            <div>
              <span className="block text-2xl sm:text-3xl font-extrabold text-slate-800 dark:text-slate-200">
                500+
              </span>
              <span className="text-xs text-slate-400 dark:text-slate-500 font-medium">
                Bengkel Mitra
              </span>
            </div>
            <div>
              <span className="block text-2xl sm:text-3xl font-extrabold text-slate-800 dark:text-slate-200">
                150+
              </span>
              <span className="text-xs text-slate-400 dark:text-slate-500 font-medium">
                Showroom Resmi
              </span>
            </div>
            <div>
              <span className="block text-2xl sm:text-3xl font-extrabold text-slate-800 dark:text-slate-200">
                25k+
              </span>
              <span className="text-xs text-slate-400 dark:text-slate-500 font-medium">
                Booking Sukses
              </span>
            </div>
          </motion.div>
        </div>

        {/* Dashboard/Graphic Area */}
        <div className="lg:col-span-5 relative flex items-center justify-center">
          {/* Main central glow sphere */}
          <div className="absolute w-64 h-64 rounded-full bg-sky-400/10 dark:bg-sky-500/5 blur-2xl animate-pulse" />

          {/* Core Interactive Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative w-full max-w-[400px] aspect-square flex items-center justify-center"
          >
            {/* Pulsing orbit rings */}
            <div className="absolute inset-0 rounded-full border border-sky-200/30 dark:border-sky-800/10 scale-95" />
            <div className="absolute inset-0 rounded-full border border-dashed border-sky-300/20 dark:border-sky-700/10 scale-75 animate-spin-[30s]" />

            {/* Glowing Center Logo/Emblem */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
              className="absolute w-44 h-44 rounded-full border border-sky-400/20 bg-white/20 dark:bg-slate-900/10 backdrop-blur-lg flex items-center justify-center shadow-lg shadow-sky-500/5"
            >
              <div className="w-36 h-36 rounded-full border border-dashed border-sky-400/30 flex items-center justify-center">
                <div className="w-28 h-28 rounded-full bg-linear-to-tr from-sky-400 to-blue-500 flex items-center justify-center shadow-inner">
                  <Wheel className="w-12 h-12 text-white" />
                </div>
              </div>
            </motion.div>

            {/* Floating Glassmorphic Card 1 - Emergency Mechanic Tracker */}
            <motion.div
              drag
              dragConstraints={{ left: -30, right: 30, top: -30, bottom: 30 }}
              whileDrag={{ scale: 1.05 }}
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 right-[-10px] p-4 rounded-2xl bg-white/60 dark:bg-slate-950/60 border border-white/40 dark:border-slate-800/40 backdrop-blur-md shadow-lg cursor-grab active:cursor-grabbing w-48 text-left"
            >
              <div className="flex items-center gap-2.5 mb-2">
                <div className="p-2 rounded-lg bg-sky-500 text-white">
                  <MapPoint className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-800 dark:text-slate-200">Mekanik Darurat SOS</h4>
                  <p className="text-[10px] text-slate-400 dark:text-slate-500">Mogok di Sudirman</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-semibold text-slate-400 dark:text-slate-500">Mekanik Meluncur</span>
                <span className="text-xs font-bold text-sky-600 dark:text-sky-400">ETA: {towEta} mnt</span>
              </div>
              <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden mt-1.5">
                <motion.div
                  className="bg-linear-to-r from-sky-400 to-blue-500 h-full rounded-full"
                  animate={{ width: ["20%", "90%"] }}
                  transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                />
              </div>
            </motion.div>

            {/* Floating Glassmorphic Card 2 - Booking Confirmation */}
            <motion.div
              drag
              dragConstraints={{ left: -30, right: 30, top: -30, bottom: 30 }}
              whileDrag={{ scale: 1.05 }}
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-[20px] left-[-20px] p-4 rounded-2xl bg-white/60 dark:bg-slate-950/60 border border-white/40 dark:border-slate-800/40 backdrop-blur-md shadow-lg cursor-grab active:cursor-grabbing w-44 text-left"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                  <Settings className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 flex items-center">
                  <GraphUp className="w-3 h-3 mr-0.5" /> +18.2%
                </span>
              </div>
              <p className="text-[10px] text-slate-400 dark:text-slate-500 font-medium">Servis Bengkel</p>
              <h3 className="text-xs font-extrabold text-slate-800 dark:text-slate-200 mt-0.5">Toyota Avanza</h3>
              <p className="text-[9px] text-slate-400 dark:text-slate-500">Status: Dikonfirmasi</p>
            </motion.div>

            {/* Floating Glassmorphic Card 3 - Emergency Alert */}
            <motion.div
              drag
              dragConstraints={{ left: -20, right: 20, top: -20, bottom: 20 }}
              whileDrag={{ scale: 1.05 }}
              animate={{ x: [0, -10, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute bottom-[-10px] right-2 p-3.5 rounded-2xl bg-white/60 dark:bg-slate-950/60 border border-white/40 dark:border-slate-800/40 backdrop-blur-md shadow-lg cursor-grab active:cursor-grabbing text-center flex items-center gap-2"
            >
              <div className="w-7.5 h-7.5 rounded-full bg-amber-100 dark:bg-amber-950/50 flex items-center justify-center text-amber-600 dark:text-amber-400">
                <ShieldWarning className="w-4 h-4" />
              </div>
              <span className="text-[10px] font-bold text-slate-700 dark:text-slate-300">Bengkel Siaga 24 Jam</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
