"use client"

import React, { useState, useRef } from "react"
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "motion/react"
import { MapPoint, Key, Settings, ChatRoundDots, Bag, Heart, Star, AltArrowRight as ChevronRight } from "@solar-icons/react"

export function Ecosystem() {
  const [activeTab, setActiveTab] = useState("showroom")
  const targetRef = useRef<HTMLDivElement>(null)

  // Track vertical scroll position of the section
  const { scrollYProgress } = useScroll({
    target: targetRef,
  })

  // Cycle through tabs automatically based on vertical scroll progress
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.25) {
      setActiveTab("showroom")
    } else if (latest >= 0.25 && latest < 0.50) {
      setActiveTab("garage")
    } else if (latest >= 0.50 && latest < 0.75) {
      setActiveTab("emergency")
    } else {
      setActiveTab("community")
    }
  })

  const tabs = [
    { id: "showroom", label: "Showroom", icon: <Key className="w-4 h-4" /> },
    { id: "garage", label: "Servis Bengkel", icon: <Settings className="w-4 h-4" /> },
    { id: "emergency", label: "Servis Darurat", icon: <MapPoint className="w-4 h-4" /> },
    { id: "community", label: "Komunitas & Toko", icon: <ChatRoundDots className="w-4 h-4" /> },
  ]

  return (
    <section
      id="ekosistem"
      ref={targetRef}
      className="relative h-[250vh] w-full bg-slate-50 dark:bg-slate-950"
    >
      {/* Sticky container that locks in viewport during scroll-controlled tab transition */}
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 text-center flex flex-col items-center w-full">
          
          {/* Section Heading */}
          <div className="max-w-2xl text-center mb-10 flex flex-col items-center gap-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/30 text-[10px] font-medium tracking-wider uppercase text-slate-500 dark:text-slate-400">
              <Star className="w-3.5 h-3.5" />
              Layanan Terintegrasi
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extralight tracking-tight text-slate-900 dark:text-white leading-tight">
              Pilar Utama Layanan<br />
              <span className="font-semibold bg-linear-to-r from-sky-500 via-sky-600 to-blue-600 dark:from-sky-300 dark:via-sky-400 dark:to-blue-500 bg-clip-text text-transparent">
                Aplikasi Ekomotif
              </span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-light mt-2 max-w-xl">
              Seluruh ekosistem kebutuhan otomotif Anda terangkum rapi dalam satu platform yang responsif, transparan, dan aman.
            </p>
          </div>

          {/* Tab Controls (Disabled onClick to keep purely scroll-driven, or kept active for hybrid control) */}
          <div className="flex flex-wrap items-center justify-center gap-1 p-1 rounded-2xl bg-white/40 dark:bg-slate-900/10 border border-slate-200/50 dark:border-slate-800/40 backdrop-blur-md shadow-xs mb-12 max-w-2xl w-full">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  // Allow clicking to jump to scroll positions if desired
                  const scrollPositions: Record<string, number> = { showroom: 0.1, garage: 0.35, emergency: 0.6, community: 0.85 }
                  const targetFraction = scrollPositions[tab.id] ?? 0.1
                  if (targetRef.current) {
                    const rect = targetRef.current.getBoundingClientRect()
                    const scrollTop = window.scrollY + rect.top
                    const scrollHeight = targetRef.current.clientHeight - window.innerHeight
                    window.scrollTo({
                      top: scrollTop + scrollHeight * targetFraction,
                      behavior: "smooth"
                    })
                  }
                }}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-medium transition-all duration-300 relative cursor-pointer ${
                  activeTab === tab.id
                    ? "text-slate-900 dark:text-white"
                    : "text-slate-400 hover:text-slate-600 dark:text-slate-500 dark:hover:text-slate-300"
                }`}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeEcosystemTab"
                    className="absolute inset-0 rounded-xl bg-white dark:bg-slate-800 shadow-xs border border-slate-200/60 dark:border-slate-700/60"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tab.icon}</span>
                <span className="relative z-10">{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Dynamic Display Area */}
          <div className="w-full min-h-[380px] relative">
            <AnimatePresence mode="wait">
              {activeTab === "showroom" && (
                <motion.div
                  key="showroom"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
                >
                  {/* Text Description */}
                  <div className="lg:col-span-5 text-left flex flex-col gap-5">
                    <h3 className="text-xl sm:text-2xl font-light text-slate-900 dark:text-white">
                      Showroom Digital
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm font-light">
                      Jelajahi unit mobil baru maupun bekas berkualitas dari berbagai dealer tepercaya. Dapatkan lembar spesifikasi orisinal lengkap dengan opsi reservasi janji temu serta kalkulator cicilan interaktif.
                    </p>
                    <ul className="flex flex-col gap-3">
                      <li className="flex items-center gap-2.5 text-slate-500 dark:text-slate-400 text-xs font-light">
                        <div className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                        Inventaris Mobil Terverifikasi Mutu
                      </li>
                      <li className="flex items-center gap-2.5 text-slate-500 dark:text-slate-400 text-xs font-light">
                        <div className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                        Hubungi Sales Executive Resmi Langsung
                      </li>
                      <li className="flex items-center gap-2.5 text-slate-500 dark:text-slate-400 text-xs font-light">
                        <div className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                        Simulasi Pembiayaan Fleksibel
                      </li>
                    </ul>
                    <a href="#" className="inline-flex items-center text-xs font-medium text-sky-500 hover:text-sky-600 transition-all mt-2 w-max">
                      Cari Mobil di Showroom <ChevronRight className="w-3.5 h-3.5 ml-1" />
                    </a>
                  </div>

                  {/* Showroom List Mockup */}
                  <div className="lg:col-span-7 bg-white dark:bg-slate-900/20 border border-slate-200/50 dark:border-slate-800/40 rounded-3xl p-6 shadow-xs flex flex-col gap-4">
                    <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800/50 pb-4">
                      <h4 className="font-medium text-xs text-slate-700 dark:text-slate-300">Unit Siap Tinjau</h4>
                      <span className="text-[9px] text-emerald-500 font-medium bg-emerald-500/10 px-2 py-0.5 rounded-full">
                        Tersedia
                      </span>
                    </div>
                    {/* Car Item 1 */}
                    <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-50/50 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800/40">
                      <div className="flex gap-3 text-left">
                        <div className="p-2.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-xl flex items-center justify-center shrink-0">
                          <Key className="w-4 h-4" />
                        </div>
                        <div>
                          <h5 className="font-medium text-slate-800 dark:text-slate-200 text-xs">Toyota Avanza 1.5 Veloz</h5>
                          <p className="text-[10px] text-slate-400 dark:text-slate-500 mt-0.5">Showroom Tunas Mandiri • Baru</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-semibold text-slate-800 dark:text-slate-100 block">Rp 290 Jt</span>
                        <span className="text-[9px] text-slate-400 dark:text-slate-500">CVT • Bensin</span>
                      </div>
                    </div>
                    {/* Car Item 2 */}
                    <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-50/50 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800/40">
                      <div className="flex gap-3 text-left">
                        <div className="p-2.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-xl flex items-center justify-center shrink-0">
                          <Key className="w-4 h-4" />
                        </div>
                        <div>
                          <h5 className="font-medium text-slate-800 dark:text-slate-200 text-xs">Honda Civic RS 1.5 Turbo</h5>
                          <p className="text-[10px] text-slate-400 dark:text-slate-500 mt-0.5">Showroom Auto Graha • Bekas</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-semibold text-slate-800 dark:text-slate-100 block">Rp 485 Jt</span>
                        <span className="text-[9px] text-slate-400 dark:text-slate-500">Auto • Turbo</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "garage" && (
                <motion.div
                  key="garage"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
                >
                  {/* Text Description */}
                  <div className="lg:col-span-5 text-left flex flex-col gap-5">
                    <h3 className="text-xl sm:text-2xl font-light text-slate-900 dark:text-white">
                      Booking Servis Berkala
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm font-light">
                      Kelola jadwal perawatan rutin tanpa perlu antre di bengkel. Cukup tentukan jenis servis, pilih mekanik andalan, dan pantau status pengerjaan secara berkala langsung dari handphone Anda.
                    </p>
                    <ul className="flex flex-col gap-3">
                      <li className="flex items-center gap-2.5 text-slate-500 dark:text-slate-400 text-xs font-light">
                        <div className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                        Transparansi Biaya Suku Cadang & Jasa
                      </li>
                      <li className="flex items-center gap-2.5 text-slate-500 dark:text-slate-400 text-xs font-light">
                        <div className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                        Pilihan Tanggal & Slot Antrean Pasti
                      </li>
                      <li className="flex items-center gap-2.5 text-slate-500 dark:text-slate-400 text-xs font-light">
                        <div className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                        Buku Servis Digital & Log Riwayat Hidup Mobil
                      </li>
                    </ul>
                    <a href="#" className="inline-flex items-center text-xs font-medium text-sky-500 hover:text-sky-600 transition-all mt-2 w-max">
                      Booking Servis Terjadwal <ChevronRight className="w-3.5 h-3.5 ml-1" />
                    </a>
                  </div>

                  {/* Garage / Booking UI Mockup */}
                  <div className="lg:col-span-7 bg-white dark:bg-slate-900/20 border border-slate-200/50 dark:border-slate-800/40 rounded-3xl p-6 shadow-xs grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Active Booking Widget */}
                    <div className="p-5 rounded-2xl bg-slate-50/50 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800/40 flex flex-col gap-2.5 text-left">
                      <h5 className="text-[9px] text-slate-400 dark:text-slate-500 font-bold uppercase tracking-wider">Antrean Terjadwal</h5>
                      <div className="mt-1 flex flex-col">
                        <span className="text-xl font-light text-slate-800 dark:text-slate-100">14:00 WIB</span>
                        <span className="text-[10px] text-sky-500 font-medium">Hari Ini</span>
                      </div>
                      <div className="flex flex-col text-[10px] text-slate-400 dark:text-slate-500">
                        <span className="font-medium text-slate-700 dark:text-slate-300">Auto Jaya Motor</span>
                        <span>Ganti Oli + Tune Up</span>
                      </div>
                    </div>

                    {/* Diagnostic Report Widget */}
                    <div className="p-5 rounded-2xl bg-slate-50/50 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800/40 flex flex-col gap-2.5 text-left">
                      <h5 className="text-[9px] text-slate-400 dark:text-slate-500 font-bold uppercase tracking-wider">Estimasi Rincian</h5>
                      <div className="flex flex-col gap-1.5 mt-1">
                        <div className="flex items-center justify-between text-[10px] text-slate-400 dark:text-slate-500">
                          <span>Jasa Perbaikan</span>
                          <span className="font-semibold text-slate-700 dark:text-slate-300">Rp 150k</span>
                        </div>
                        <div className="flex items-center justify-between text-[10px] text-slate-400 dark:text-slate-500">
                          <span>Suku Cadang</span>
                          <span className="font-semibold text-slate-700 dark:text-slate-300">Rp 420k</span>
                        </div>
                        <div className="flex items-center justify-between text-[11px] border-t border-slate-200/50 dark:border-slate-800/50 pt-1.5">
                          <span className="font-medium text-slate-700 dark:text-slate-300">Total</span>
                          <span className="font-semibold text-emerald-500">Rp 570k</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "emergency" && (
                <motion.div
                  key="emergency"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
                >
                  {/* Text Description */}
                  <div className="lg:col-span-5 text-left flex flex-col gap-5">
                    <h3 className="text-xl sm:text-2xl font-light text-slate-900 dark:text-white">
                      Bengkel Darurat 24/7 (SOS)
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm font-light">
                      Mogok di jalan raya atau mengalami kendala ban bocor/aki drop mendadak? Cukup picu koordinat SOS di aplikasi, dan mekanik panggilan terdekat akan meluncur ke posisi presisi Anda saat itu juga.
                    </p>
                    <ul className="flex flex-col gap-3">
                      <li className="flex items-center gap-2.5 text-slate-500 dark:text-slate-400 text-xs font-light">
                        <div className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                        Mekanik Panggilan Darurat Siaga Penuh
                      </li>
                      <li className="flex items-center gap-2.5 text-slate-500 dark:text-slate-400 text-xs font-light">
                        <div className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                        Penanganan Cepat di TKP
                      </li>
                      <li className="flex items-center gap-2.5 text-slate-500 dark:text-slate-400 text-xs font-light">
                        <div className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                        Live Tracking Koordinat Mekanik
                      </li>
                    </ul>
                    <a href="#" className="inline-flex items-center text-xs font-medium text-sky-500 hover:text-sky-600 transition-all mt-2 w-max">
                      Luncurkan Panggilan SOS <ChevronRight className="w-3.5 h-3.5 ml-1" />
                    </a>
                  </div>

                  {/* Emergency Mechanic Map Tracker Mockup */}
                  <div className="lg:col-span-7 bg-white dark:bg-slate-900/20 border border-slate-200/50 dark:border-slate-800/40 rounded-3xl p-6 shadow-xs flex flex-col gap-4">
                    <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800/50 pb-4">
                      <h4 className="font-medium text-xs text-slate-700 dark:text-slate-300">Posisi Mekanik SOS</h4>
                      <span className="text-[9px] text-amber-500 font-semibold bg-amber-500/10 px-2 py-0.5 rounded-full">
                        OTW Ke Lokasi
                      </span>
                    </div>
                    {/* Mechanic driver info */}
                    <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-50/50 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800/40">
                      <div className="flex gap-3 text-left">
                        <div className="p-2.5 bg-amber-500 text-white rounded-xl flex items-center justify-center shrink-0">
                          <Settings className="w-4 h-4" />
                        </div>
                        <div>
                          <h5 className="font-medium text-slate-800 dark:text-slate-200 text-xs">Dian Pratama</h5>
                          <p className="text-[10px] text-slate-400 dark:text-slate-500 mt-0.5">Spesialis Mesin • ETA: 8 Mnt</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "community" && (
                <motion.div
                  key="community"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
                >
                  {/* Text Description */}
                  <div className="lg:col-span-5 text-left flex flex-col gap-5">
                    <h3 className="text-xl sm:text-2xl font-light text-slate-900 dark:text-white">
                      Komunitas & Suku Cadang
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm font-light">
                      Kumpul bareng sesama pemilik kendaraan di forum otomotif terbesar. Berbagi tips perawatan, info meetup, serta miliki akses ke marketplace suku cadang original bergaransi resmi.
                    </p>
                    <ul className="flex flex-col gap-3">
                      <li className="flex items-center gap-2.5 text-slate-500 dark:text-slate-400 text-xs font-light">
                        <div className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                        Forum Diskusi Otomotif Teraktif
                      </li>
                      <li className="flex items-center gap-2.5 text-slate-500 dark:text-slate-400 text-xs font-light">
                        <div className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                        Toko Aksesoris & Sparepart Orisinal
                      </li>
                      <li className="flex items-center gap-2.5 text-slate-500 dark:text-slate-400 text-xs font-light">
                        <div className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                        Event & Agenda Kopi Darat (Kopdar)
                      </li>
                    </ul>
                    <a href="#" className="inline-flex items-center text-xs font-medium text-sky-500 hover:text-sky-600 transition-all mt-2 w-max">
                      Gabung Forum Komunitas <ChevronRight className="w-3.5 h-3.5 ml-1" />
                    </a>
                  </div>

                  {/* Forum feed & store mockups */}
                  <div className="lg:col-span-7 bg-white dark:bg-slate-900/20 border border-slate-200/50 dark:border-slate-800/40 rounded-3xl p-6 shadow-xs grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Discussion Post */}
                    <div className="p-4 rounded-2xl bg-slate-50/50 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800/40 flex flex-col gap-3 text-left">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-800 text-[9px] font-bold flex items-center justify-center text-slate-700 dark:text-slate-300">
                          AN
                        </div>
                        <div>
                          <h6 className="text-[10px] font-semibold text-slate-700 dark:text-slate-300">Andi Nugroho</h6>
                          <p className="text-[8px] text-slate-400 dark:text-slate-500">2 Jam Lalu • Toyota Avanza</p>
                        </div>
                      </div>
                      <h5 className="font-semibold text-xs text-slate-800 dark:text-slate-200 leading-snug">Tips Perawatan Transmisi CVT</h5>
                      <p className="text-[10px] text-slate-400 dark:text-slate-500 leading-normal line-clamp-2 font-light">
                        Halo teman-teman, mau share sedikit nih mengenai jadwal rutin penggantian oli CVT transmisi matic Avanza...
                      </p>
                      <div className="flex items-center gap-3 mt-1 text-[9px] text-slate-400 dark:text-slate-500 font-medium">
                        <span className="flex items-center gap-0.5"><Heart className="w-3 h-3 text-rose-500 fill-rose-500/10" /> 42</span>
                        <span className="flex items-center gap-0.5"><ChatRoundDots className="w-3 h-3" /> 18</span>
                      </div>
                    </div>

                    {/* Store Item */}
                    <div className="p-4 rounded-2xl bg-slate-50/50 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800/40 flex flex-col gap-3 text-left">
                      <div className="aspect-video w-full rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                        <Bag className="w-6 h-6 text-slate-400" />
                      </div>
                      <div>
                        <span className="text-[8px] font-bold text-sky-500 uppercase tracking-wider">Sparepart</span>
                        <h5 className="font-semibold text-xs text-slate-800 dark:text-slate-200 mt-0.5">Filter Oli Original Avanza</h5>
                        <p className="text-[10px] text-slate-500 dark:text-slate-400 font-bold mt-1">Rp 65.000</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
