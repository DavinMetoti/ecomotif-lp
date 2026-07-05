"use client"

import React, { useRef } from "react"
import { motion, useScroll, useTransform } from "motion/react"
import { ShieldCheck, Settings, Key, ShieldWarning } from "@solar-icons/react"

export function About() {
  const targetRef = useRef<HTMLDivElement>(null)
  
  // Track scroll progress of the cards sticky container
  const { scrollYProgress } = useScroll({
    target: targetRef,
  })

  // Transform vertical scroll into full-page horizontal glide (0vw to -300vw)
  const x = useTransform(scrollYProgress, [0, 1], ["0vw", "-300vw"])

  // Transform background colors for light mode dynamically on scroll
  const bgLight = useTransform(
    scrollYProgress,
    [0, 0.33, 0.66, 1],
    ["#f0f9ff", "#f8fafc", "#eff6ff", "#f5f3ff"]
  )

  // Transform background colors for dark mode dynamically on scroll
  const bgDark = useTransform(
    scrollYProgress,
    [0, 0.33, 0.66, 1],
    ["#020617", "#051525", "#09090b", "#0e0922"]
  )

  const highlights = [
    {
      icon: <Key className="w-5 h-5 text-sky-500" />,
      title: "Jaringan Showroom Mitra",
      desc: "Temukan mobil baru maupun bekas dengan spesifikasi lengkap dan ajukan pembelian langsung ke dealer resmi.",
    },
    {
      icon: <Settings className="w-5 h-5 text-sky-500" />,
      title: "Booking Servis Tanpa Antre",
      desc: "Reservasi servis berkala, ganti oli, tune-up, hingga perbaikan AC di ratusan bengkel mitra terpercaya.",
    },
    {
      icon: <ShieldWarning className="w-5 h-5 text-sky-500" />,
      title: "Servis Bengkel Darurat 24/7",
      desc: "Hubungi mekanik panggilan darurat siaga 24 jam ke lokasi Anda saat kendaraan mogok, ban bocor, atau aki drop.",
    },
  ]

  const statsCards = [
    {
      num: "500+",
      title: "Bengkel Mitra Terpercaya",
      desc: "Kami bermitra dengan ratusan bengkel resmi dan umum tersertifikasi di seluruh penjuru wilayah Indonesia. Setiap bengkel mitra diinspeksi secara ketat demi menjamin ketersediaan suku cadang orisinal serta standarisasi mutu montir yang andal.",
    },
    {
      num: "24/7",
      title: "Siaga Darurat Jalan Raya (SOS)",
      desc: "Layanan mekanik panggilan darurat yang bersiaga penuh 24 jam sehari. Ketika kendaraan Anda mogok, ban bocor, atau mengalami masalah kelistrikan di jalan raya, tim mekanik terdekat akan langsung dikirim ke koordinat presisi Anda.",
    },
    {
      num: "100%",
      title: "Transparansi Biaya Mutlak",
      desc: "Tidak ada kejutan harga di akhir pekerjaan. Seluruh estimasi biaya jasa montir serta rincian harga suku cadang tertera jelas di aplikasi dan disetujui oleh Anda sebelum pengerjaan fisik kendaraan dimulai oleh pihak bengkel.",
    },
    {
      num: "20k+",
      title: "Komunitas Otomotif Teraktif",
      desc: "Ruang diskusi interaktif bagi puluhan ribu pemilik kendaraan di Indonesia. Bagikan tips perawatan berkala, dapatkan rekomendasi solusi kendala mesin, serta ikuti info agenda berkumpul (kopdar) komunitas regional.",
    },
  ]

  return (
    <div className="w-full bg-slate-50/30 dark:bg-slate-950">
      
      {/* Intro Section - Ultra-clean & High-end Layout */}
      <section className="py-32 max-w-7xl mx-auto px-6 md:px-8 relative overflow-hidden">
        {/* Ambient background light */}
        <div className="absolute top-1/4 right-0 w-[400px] h-[400px] rounded-full bg-sky-200/10 dark:bg-sky-950/5 blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start w-full relative z-10">
          {/* Left Column: Heading & Description */}
          <div className="lg:col-span-5 flex flex-col items-start gap-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 dark:bg-sky-950/40 text-[10px] font-semibold tracking-widest uppercase text-sky-600 dark:text-sky-400">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-pulse" />
              Mengenal Ekomotif
            </div>

            <h2 className="text-4xl sm:text-5xl font-extralight tracking-tight text-slate-900 dark:text-white leading-[1.1]">
              Ekosistem<br />
              <span className="font-semibold bg-linear-to-r from-sky-500 via-sky-600 to-blue-600 dark:from-sky-300 dark:via-sky-400 dark:to-blue-500 bg-clip-text text-transparent">
                Otomotif Terpadu
              </span>
            </h2>

            <p className="text-sm sm:text-base text-slate-450 dark:text-slate-400 leading-relaxed font-light max-w-md mt-2">
              Platform modern yang mengintegrasikan layanan showroom pilihan, kemudahan booking servis berkala, dan jaminan siaga bantuan darurat jalan raya dalam genggaman Anda.
            </p>
          </div>

          {/* Right Column: Clean Highlights List (Timeline/Vertical Stage Style) */}
          <div className="lg:col-span-7 flex flex-col gap-8 text-left relative pl-4 border-l border-slate-200/60 dark:border-slate-800/80">
            {highlights.map((item, idx) => (
              <div key={item.title} className="group relative flex gap-6 items-start">
                {/* Visual Connector Dot */}
                <div className="absolute left-[-21px] top-2.5 w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-800 border-2 border-white dark:border-slate-950 group-hover:bg-sky-500 transition-colors duration-300" />
                
                <div className="p-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 text-sky-500 flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform duration-300">
                  {item.icon}
                </div>
                <div className="flex flex-col gap-1.5">
                  <h3 className="font-medium text-slate-850 dark:text-slate-200 text-sm tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-450 dark:text-slate-400 leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cards Scroll Section - Sticky Horizontal Layout (1 Card per Screen Width) */}
      <div ref={targetRef} className="relative h-[350vh] w-full border-t border-slate-250/50 dark:border-slate-900/60">
        
        {/* Sticky container that keeps elements in viewport */}
        <div className="sticky top-0 h-screen overflow-hidden flex items-center">
          
          {/* Light Theme Background Color Interpolation */}
          <motion.div style={{ backgroundColor: bgLight }} className="absolute inset-0 z-0 dark:hidden" />
          
          {/* Dark Theme Background Color Interpolation */}
          <motion.div style={{ backgroundColor: bgDark }} className="absolute inset-0 z-0 hidden dark:block" />

          {/* Parallax Grid Pattern Background */}
          <motion.div 
            style={{ y: useTransform(scrollYProgress, [0, 1], [0, -120]) }}
            className="absolute inset-0 z-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:32px_32px] opacity-75 pointer-events-none"
          />

          {/* Interactive Floating Glowing Orb 1 */}
          <motion.div 
            style={{ 
              x: useTransform(scrollYProgress, [0, 1], [-120, 180]),
              y: useTransform(scrollYProgress, [0, 1], [80, -80]),
              scale: useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.25, 0.95])
            }}
            className="absolute top-1/4 left-10 w-[350px] h-[350px] rounded-full bg-sky-400/10 dark:bg-sky-500/5 blur-3xl pointer-events-none z-0"
          />

          {/* Interactive Floating Glowing Orb 2 */}
          <motion.div 
            style={{ 
              x: useTransform(scrollYProgress, [0, 1], [120, -180]),
              y: useTransform(scrollYProgress, [0, 1], [-80, 100]),
              scale: useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1.2, 1])
            }}
            className="absolute bottom-1/4 right-10 w-[400px] h-[400px] rounded-full bg-blue-450/10 dark:bg-indigo-500/5 blur-3xl pointer-events-none z-0"
          />

          {/* Sliding row of cards */}
          <motion.div style={{ x }} className="flex w-max relative z-10">
            {statsCards.map((card, idx) => (
              <div
                key={idx}
                className="w-screen flex items-center justify-center px-6 md:px-12 shrink-0"
              >
                <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-12 gap-8 items-center p-8 md:p-14 rounded-3xl border border-slate-200/50 dark:border-slate-800/40 bg-white/70 dark:bg-slate-950/70 shadow-xs backdrop-blur-md">
                  {/* Big Number Column */}
                  <div className="md:col-span-4 text-left">
                    <span className="text-6xl sm:text-8xl font-extralight text-sky-500 tracking-tight block">
                      {card.num}
                    </span>
                  </div>
                  {/* Detailed Description Column */}
                  <div className="md:col-span-8 flex flex-col gap-4 text-left">
                    <h3 className="text-xl sm:text-2xl font-semibold text-slate-800 dark:text-slate-200">
                      {card.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-light">
                      {card.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
      
    </div>
  )
}
