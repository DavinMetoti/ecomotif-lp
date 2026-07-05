"use client"

import React, { useRef } from "react"
import { motion, useScroll, useTransform } from "motion/react"
import { Cpu, MapPoint, Wallet2 as CreditCard, MedalStar as Sparkles, Star } from "@solar-icons/react"

export function Features() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  // Track scroll progress strictly between when the section sticks ('start start') and when it unsticks ('end end')
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  // Staggered vertical stacking interpolation (setipis gambar kedua):
  // Card 1 starts at 0px, scale 1. As scroll progresses, it scales down and shifts up to show its header border
  const y1 = useTransform(scrollYProgress, [0, 0.45, 0.95], ["0px", "-12px", "-24px"])
  const scale1 = useTransform(scrollYProgress, [0, 0.45, 0.95], [1, 0.96, 0.92])

  // Card 2 starts below screen (100vh). Slides in and lands on top of Card 1 (with 12px top offset) over [0.15, 0.5].
  // Then scales down and shifts up over [0.6, 0.95] when Card 3 stacks.
  const y2 = useTransform(scrollYProgress, [0, 0.15, 0.5, 0.6, 0.95], ["100vh", "100vh", "12px", "12px", "0px"])
  const scale2 = useTransform(scrollYProgress, [0, 0.5, 0.6, 0.95], [1, 1, 0.96, 0.96])

  // Card 3 starts below screen (100vh). Slides in and lands on top of Card 2 (with 24px top offset) over [0.6, 0.95].
  const y3 = useTransform(scrollYProgress, [0, 0.6, 0.95], ["100vh", "100vh", "24px"])
  const scale3 = useTransform(scrollYProgress, [0, 1], [1, 1])

  const featureCards = [
    {
      icon: <Cpu className="w-32 h-32 text-sky-500/5 dark:text-sky-500/4" />,
      title: "Booking Servis Terjadwal",
      desc: "Jadwalkan servis berkala kendaraan tanpa perlu antre panjang. Pilih tanggal, waktu, dan bengkel mitra terdekat langsung dari aplikasi.",
      badge: "Mitra Bengkel Resmi",
      y: y1,
      scale: scale1,
      zIndex: 10,
    },
    {
      icon: <MapPoint className="w-32 h-32 text-rose-500/5 dark:text-rose-500/4" />,
      title: "Mekanik Panggilan Darurat",
      desc: "Kendaraan bermasalah di tengah perjalanan? Kirimkan koordinat lokasi untuk mendatangkan mekanik darurat ke TKP.",
      badge: "Siaga 24 Jam penuh",
      y: y2,
      scale: scale2,
      zIndex: 20,
    },
    {
      icon: <CreditCard className="w-32 h-32 text-sky-500/5 dark:text-sky-500/4" />,
      title: "Showroom & Simulasi Kredit",
      desc: "Bandingkan harga dan spesifikasi teknis mobil dealer resmi, lengkap dengan fitur simulasi cicilan pembiayaan terpercaya.",
      badge: "Dealer Terverifikasi",
      y: y3,
      scale: scale3,
      zIndex: 30,
    },
  ]

  const anims = [
    { y: y1, scale: scale1, zIndex: 10 },
    { y: y2, scale: scale2, zIndex: 20 },
    { y: y3, scale: scale3, zIndex: 30 },
  ]

  return (
    <div ref={containerRef} className="relative h-[400vh] w-full bg-white dark:bg-slate-950">
      
      {/* Sticky viewport frame - Center items as flex column with safe gap to avoid overlapping */}
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center items-center gap-8 py-12">
        
        {/* Section Header */}
        <div className="max-w-7xl mx-auto px-6 md:px-8 w-full flex flex-col items-center text-center gap-3 shrink-0">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/30 text-[10px] font-medium tracking-wider uppercase text-slate-505 dark:text-slate-400">
            <Sparkles className="w-3.5 h-3.5" />
            Fitur Pintar
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extralight tracking-tight text-slate-900 dark:text-white leading-tight">
            Inovasi Digital untuk <span className="font-semibold bg-linear-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">Kemudahan Berkendara</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-xl font-light">
            Ekomotif memadukan transparansi data dan kecepatan akses layanan guna menghadirkan ketenangan dalam setiap perjalanan Anda.
          </p>
        </div>

        {/* Center Stacking Cards Area (Thinner height and micro stacking offsets) */}
        <div className="max-w-4xl w-full mx-auto px-6 relative h-[240px] flex items-center justify-center shrink-0">
          {featureCards.map((feat) => (
            <motion.div
              key={feat.title}
              style={{ 
                y: feat.y, 
                scale: feat.scale, 
                zIndex: feat.zIndex 
              }}
              className="absolute w-full h-[200px] rounded-[24px] border-2 border-sky-400 dark:border-sky-500/30 bg-white dark:bg-slate-900 shadow-xl dark:shadow-slate-950/40 flex flex-col justify-center items-center px-8 md:px-16 text-center overflow-hidden"
            >
              {/* Giant watermark icon in background */}
              <div className="absolute left-6 top-1/2 -translate-y-1/2 pointer-events-none select-none z-0">
                {feat.icon}
              </div>

              {/* Card Main Info */}
              <div className="relative z-10 flex flex-col items-center gap-2">
                <h3 className="text-lg md:text-xl font-semibold text-slate-900 dark:text-white tracking-wide">
                  {feat.title}
                </h3>
                <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 max-w-2xl leading-relaxed font-light">
                  {feat.desc}
                </p>
                <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-[9px] font-semibold text-slate-655 dark:text-slate-400 mt-1">
                  <Star className="w-2.5 h-2.5 text-sky-500" />
                  {feat.badge}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Spacer */}
        <div className="h-4" />
      </div>

    </div>
  )
}
