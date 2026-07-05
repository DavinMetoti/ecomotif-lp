"use client"

import React from "react"
import { motion } from "motion/react"
import { Wheel, Key, Settings, MapPoint, ChatRoundDots, Bag } from "@solar-icons/react"

export function Hero() {
  return (
    <section
      id="beranda"
      className="relative min-h-screen pt-32 pb-24 flex items-center justify-center overflow-hidden bg-slate-50 dark:bg-slate-950"
    >
      {/* Premium ambient light background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-radial from-sky-400/10 to-transparent dark:from-sky-500/5 blur-3xl opacity-70" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10 w-full">
        {/* Left Column: Minimal Typography & Actions */}
        <div className="lg:col-span-7 flex flex-col items-start gap-8 text-left">
          {/* Minimal Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/30 backdrop-blur-md"
          >
            <Wheel className="w-3.5 h-3.5 text-sky-500 animate-spin-[6s] linear" />
            <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-slate-500 dark:text-slate-400">
              Integrasi Ekosistem Otomotif
            </span>
          </motion.div>

          {/* Headline */}
          <div className="flex flex-col gap-4">
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extralight tracking-tight text-slate-900 dark:text-white leading-[1.05]"
            >
              Semua Layanan<br />
              <span className="font-semibold bg-linear-to-r from-sky-500 via-sky-600 to-blue-600 dark:from-sky-300 dark:via-sky-400 dark:to-blue-500 bg-clip-text text-transparent">
                Otomotif Indonesia
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base text-slate-500 dark:text-slate-400 max-w-xl leading-relaxed font-light"
            >
              Satu portal pintar terintegrasi untuk penjadwalan servis, mekanik darurat panggilan 24 jam, pemesanan showroom terdekat, dan forum otomotif terbesar.
            </motion.p>
          </div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <a
              href="https://play.google.com/store/apps/details?id=com.ecomotif.apps"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-950 px-8 py-3.5 text-sm font-medium tracking-wide transition-all shadow-sm cursor-pointer select-none"
            >
              Download Play Store
            </a>
            <a
              href="#ekosistem"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 dark:border-slate-800 bg-white/40 dark:bg-slate-900/10 hover:bg-slate-50 dark:hover:bg-slate-900/50 text-slate-700 dark:text-slate-300 px-8 py-3.5 text-sm font-medium tracking-wide transition-all cursor-pointer select-none"
            >
              Jelajahi Ekosistem
            </a>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-3 gap-8 pt-8 border-t border-slate-200/60 dark:border-slate-800/60 w-full max-w-lg mt-4"
          >
            <div>
              <span className="block text-2xl font-semibold text-slate-900 dark:text-white">500+</span>
              <span className="text-[11px] uppercase tracking-wider text-slate-400 font-light mt-1 block">Bengkel Mitra</span>
            </div>
            <div>
              <span className="block text-2xl font-semibold text-slate-900 dark:text-white">150+</span>
              <span className="text-[11px] uppercase tracking-wider text-slate-400 font-light mt-1 block">Showroom Resmi</span>
            </div>
            <div>
              <span className="block text-2xl font-semibold text-slate-900 dark:text-white">25k+</span>
              <span className="text-[11px] uppercase tracking-wider text-slate-400 font-light mt-1 block">Booking Sukses</span>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Interactive Ecosystem Orbital System */}
        <div className="lg:col-span-5 relative flex items-center justify-center w-full aspect-square max-w-[560px] mx-auto min-h-[500px]">
          {/* Subtle glowing core halo */}
          <div className="absolute w-[400px] h-[400px] rounded-full bg-sky-500/10 dark:bg-sky-400/5 blur-3xl z-0 pointer-events-none" />

          {/* Central Hub - Enlarge Miniature Premium Mobile Mockup */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
            className="relative w-[160px] aspect-[9/19.2] rounded-[28px] border-[5px] border-slate-900 dark:border-slate-800 bg-slate-950 shadow-2xl z-25 overflow-hidden flex items-center justify-center pointer-events-none"
          >
            
            {/* Screen content */}
            <div className="relative w-full h-full overflow-hidden bg-slate-950 rounded-[22px]">
              {/* Glass reflection overlay */}
              <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/5 to-transparent z-20" />
              
              <img 
                src="/Home.png" 
                alt="Ecomotif Screen Mockup" 
                className="w-full h-full object-cover object-top" 
              />
            </div>
          </motion.div>

          {/* Orbit Level 1 (Diameter 380px) - Clears Mockup Height Safely */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 22, ease: "linear" }}
            className="absolute w-[380px] h-[380px] rounded-full border border-slate-300 dark:border-slate-800/80 flex items-center justify-center z-10"
          >
            {/* Showroom Element */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 22, ease: "linear" }}
              className="absolute -top-5 px-3 py-2 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md flex items-center gap-1.5 cursor-pointer hover:border-sky-500 transition-colors"
            >
              <Key className="w-4 h-4 text-sky-500" />
              <span className="text-[10px] font-semibold text-slate-700 dark:text-slate-355">Showroom</span>
            </motion.div>
          </motion.div>

          {/* Orbit Level 2 (Diameter 460px) - Clears Mockup Height Safely */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 32, ease: "linear" }}
            className="absolute w-[460px] h-[460px] rounded-full border border-dashed border-slate-300 dark:border-slate-800/80 flex items-center justify-center z-10"
          >
            {/* Booking Servis Element */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 32, ease: "linear" }}
              className="absolute -top-5 px-3 py-2 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md flex items-center gap-1.5 cursor-pointer hover:border-sky-500 transition-colors"
            >
              <Settings className="w-4 h-4 text-sky-500" />
              <span className="text-[10px] font-semibold text-slate-700 dark:text-slate-355">Servis</span>
            </motion.div>

            {/* Shop Element (Opposite Side) */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 32, ease: "linear" }}
              className="absolute -bottom-5 px-3 py-2 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md flex items-center gap-1.5 cursor-pointer hover:border-sky-500 transition-colors"
            >
              <Bag className="w-4 h-4 text-sky-500" />
              <span className="text-[10px] font-semibold text-slate-700 dark:text-slate-355">Toko Part</span>
            </motion.div>
          </motion.div>

          {/* Orbit Level 3 (Diameter 540px) - Clears Mockup Height Safely */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 42, ease: "linear" }}
            className="absolute w-[540px] h-[540px] rounded-full border border-slate-300/60 dark:border-slate-800/60 flex items-center justify-center z-10"
          >
            {/* SOS Emergency Element */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 42, ease: "linear" }}
              className="absolute -top-5 px-3 py-2 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md flex items-center gap-1.5 cursor-pointer hover:border-sky-500 transition-colors"
            >
              <MapPoint className="w-4 h-4 text-rose-500" />
              <span className="text-[10px] font-semibold text-slate-700 dark:text-slate-355">SOS 24h</span>
            </motion.div>

            {/* Community Element (Opposite Side) */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 42, ease: "linear" }}
              className="absolute -bottom-5 px-3 py-2 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md flex items-center gap-1.5 cursor-pointer hover:border-sky-500 transition-colors"
            >
              <ChatRoundDots className="w-4 h-4 text-sky-500" />
              <span className="text-[10px] font-semibold text-slate-700 dark:text-slate-355">Komunitas</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
