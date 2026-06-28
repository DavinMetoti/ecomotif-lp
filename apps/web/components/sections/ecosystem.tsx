"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { MapPoint, Key, Settings, ChatRoundDots, Bag, Eye, Heart, ArrowRight, ShieldWarning, Star, AltArrowRight as ChevronRight } from "@solar-icons/react"

export function Ecosystem() {
  const [activeTab, setActiveTab] = useState("showroom")

  const tabs = [
    { id: "showroom", label: "Showroom", icon: <Key className="w-4.5 h-4.5" /> },
    { id: "garage", label: "Servis Bengkel", icon: <Settings className="w-4.5 h-4.5" /> },
    { id: "emergency", label: "Servis Darurat", icon: <MapPoint className="w-4.5 h-4.5" /> },
    { id: "community", label: "Komunitas & Toko", icon: <ChatRoundDots className="w-4.5 h-4.5" /> },
  ]

  return (
    <section
      id="ekosistem"
      className="py-24 relative overflow-hidden bg-slate-50 dark:bg-slate-950"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-10 w-96 h-96 rounded-full bg-sky-200/20 dark:bg-sky-950/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 rounded-full bg-blue-200/10 dark:bg-blue-950/15 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 text-center flex flex-col items-center">
        {/* Section Heading */}
        <div className="max-w-2xl text-center mb-16 flex flex-col items-center gap-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-sky-200/50 bg-sky-100/50 dark:border-sky-950/40 dark:bg-sky-950/20 text-xs font-semibold text-sky-800 dark:text-sky-300">
            <Star className="w-3.5 h-3.5" />
            Layanan Terintegrasi
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Pilar Utama Layanan{" "}
            <span className="bg-linear-to-r from-sky-500 via-sky-600 to-blue-600 dark:from-sky-300 dark:via-sky-400 dark:to-blue-500 bg-clip-text text-transparent">
              Aplikasi Ekomotif
            </span>
          </h2>
          <p className="text-base text-slate-500 dark:text-slate-400 leading-relaxed">
            Semua kebutuhan otomotif Anda dirancang dan terhubung dalam satu aplikasi yang cepat, aman, dan transparan.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-white/40 dark:bg-slate-900/40 border border-white/30 dark:border-slate-800/30 backdrop-blur-md shadow-xs mb-12 max-w-2xl w-full">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2.5 px-5 py-3.5 rounded-xl text-sm font-semibold transition-all duration-300 relative cursor-pointer ${
                activeTab === tab.id
                  ? "text-white"
                  : "text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200"
              }`}
            >
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeEcosystemTab"
                  className="absolute inset-0 rounded-xl bg-linear-to-r from-sky-500 to-blue-600 shadow-md shadow-sky-500/10"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{tab.icon}</span>
              <span className="relative z-10">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Dynamic Display Area */}
        <div className="w-full min-h-[460px] relative">
          <AnimatePresence mode="wait">
            {activeTab === "showroom" && (
              <motion.div
                key="showroom"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
              >
                {/* Text Description */}
                <div className="lg:col-span-5 text-left flex flex-col gap-6">
                  <h3 className="text-2xl font-bold text-slate-800 dark:text-white">
                    Showroom Digital
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm">
                    Temukan mobil baru maupun bekas impian Anda dari berbagai showroom terpercaya. Dapatkan spesifikasi lengkap kendaraan, simulasi kredit, dan hubungi pihak showroom/marketing secara instan untuk pengajuan pembelian langsung di aplikasi.
                  </p>
                  <ul className="flex flex-col gap-3.5">
                    <li className="flex items-center gap-2.5 text-slate-600 dark:text-slate-300 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                      Pilihan Mobil Baru & Bekas Terverifikasi
                    </li>
                    <li className="flex items-center gap-2.5 text-slate-600 dark:text-slate-300 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                      Form Pengajuan Pembelian Langsung ke Dealer
                    </li>
                    <li className="flex items-center gap-2.5 text-slate-600 dark:text-slate-300 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                      Simulasi Pembiayaan & Cicilan Fleksibel
                    </li>
                  </ul>
                  <a href="#" className="inline-flex items-center text-sm font-bold text-sky-600 dark:text-sky-400 hover:gap-1.5 transition-all">
                    Cari Mobil di Showroom <ChevronRight className="w-4 h-4 ml-1" />
                  </a>
                </div>

                {/* Showroom List Mockup */}
                <div className="lg:col-span-7 bg-white/40 dark:bg-slate-900/40 border border-white/20 dark:border-slate-800/30 backdrop-blur-md rounded-3xl p-6 shadow-xl flex flex-col gap-4">
                  <div className="flex items-center justify-between border-b border-sky-100/30 dark:border-sky-950/20 pb-4">
                    <h4 className="font-bold text-sm text-slate-700 dark:text-slate-300">Mobil Tersedia di Showroom</h4>
                    <span className="text-[10px] bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold px-2.5 py-1 rounded-full">
                      Stok Terkini
                    </span>
                  </div>
                  {/* Car Item 1 */}
                  <div className="flex items-center justify-between p-4 rounded-2xl bg-white/50 dark:bg-slate-900/50 border border-sky-100/30 dark:border-sky-950/30 hover:shadow-xs transition-shadow">
                    <div className="flex gap-3 text-left">
                      <div className="p-3 bg-sky-500 text-white rounded-xl flex items-center justify-center shrink-0">
                        <Key className="w-4.5 h-4.5" />
                      </div>
                      <div>
                        <h5 className="font-bold text-slate-800 dark:text-slate-200 text-sm">Toyota Avanza 1.5 Veloz</h5>
                        <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">Showroom Tunas Mandiri • Baru</p>
                        <span className="inline-block text-[10px] text-slate-400 dark:text-slate-500 bg-slate-100 dark:bg-slate-800 font-medium px-2 py-0.5 rounded-md mt-1.5">
                          Tahun 2026 • Transmisi CVT • Bensin
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-bold text-slate-800 dark:text-slate-100 block">Rp 290 Jt</span>
                      <span className="text-[9px] text-emerald-500 font-bold">Tersedia</span>
                    </div>
                  </div>
                  {/* Car Item 2 */}
                  <div className="flex items-center justify-between p-4 rounded-2xl bg-white/50 dark:bg-slate-900/50 border border-sky-100/30 dark:border-sky-950/30 hover:shadow-xs transition-shadow">
                    <div className="flex gap-3 text-left">
                      <div className="p-3 bg-sky-500 text-white rounded-xl flex items-center justify-center shrink-0">
                        <Key className="w-4.5 h-4.5" />
                      </div>
                      <div>
                        <h5 className="font-bold text-slate-800 dark:text-slate-200 text-sm">Honda Civic RS 1.5 Turbo</h5>
                        <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">Showroom Auto Graha • Bekas</p>
                        <span className="inline-block text-[10px] text-slate-400 dark:text-slate-500 bg-slate-100 dark:bg-slate-800 font-medium px-2 py-0.5 rounded-md mt-1.5">
                          Tahun 2024 • KM 12.000 • Hitam Metalik
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-bold text-slate-800 dark:text-slate-100 block">Rp 485 Jt</span>
                      <span className="text-[9px] text-emerald-500 font-bold">Tersedia</span>
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
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
              >
                {/* Text Description */}
                <div className="lg:col-span-5 text-left flex flex-col gap-6">
                  <h3 className="text-2xl font-bold text-slate-800 dark:text-white">
                    Booking Servis Bengkel
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm">
                    Pertahankan kesehatan kendaraan Anda dengan melakukan reservasi servis rutin melalui aplikasi Ekomotif. Temukan bengkel umum maupun spesialis terdekat, jadwalkan waktu servis, pilih paket perawatan, dan dapatkan rincian biaya yang transparan di awal.
                  </p>
                  <ul className="flex flex-col gap-3.5">
                    <li className="flex items-center gap-2.5 text-slate-600 dark:text-slate-300 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                      Estimasi Rincian Biaya Jasa & Part Transparan
                    </li>
                    <li className="flex items-center gap-2.5 text-slate-600 dark:text-slate-300 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                      Antrean Terjadwal (Booking Slot Praktis)
                    </li>
                    <li className="flex items-center gap-2.5 text-slate-600 dark:text-slate-300 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                      Riwayat Servis Kendaraan Tercatat Secara Digital
                    </li>
                  </ul>
                  <a href="#" className="inline-flex items-center text-sm font-bold text-sky-600 dark:text-sky-400 hover:gap-1.5 transition-all">
                    Booking Jadwal Servis <ChevronRight className="w-4 h-4 ml-1" />
                  </a>
                </div>

                {/* Garage / Booking UI Mockup */}
                <div className="lg:col-span-7 bg-white/40 dark:bg-slate-900/40 border border-white/20 dark:border-slate-800/30 backdrop-blur-md rounded-3xl p-6 shadow-xl grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Active Booking Widget */}
                  <div className="p-5 rounded-2xl bg-white/50 dark:bg-slate-900/50 border border-sky-100/30 dark:border-sky-950/30 flex flex-col gap-3 text-left">
                    <h5 className="font-bold text-xs text-slate-400 dark:text-slate-500 uppercase tracking-wider">Jadwal Servis Aktif</h5>
                    <div className="flex items-baseline gap-1 mt-2">
                      <span className="text-xl font-extrabold text-slate-800 dark:text-slate-200">14:00 WIB</span>
                      <span className="text-xs text-sky-600 dark:text-sky-400 font-bold">Hari Ini</span>
                    </div>
                    <div className="mt-1 flex flex-col gap-1 text-[11px] text-slate-500 dark:text-slate-400">
                      <span className="font-bold text-slate-700 dark:text-slate-300">Bengkel Auto Jaya Motor</span>
                      <span>Paket: Ganti Oli + Tune Up</span>
                    </div>
                    <span className="inline-block text-[10px] text-amber-600 bg-amber-500/10 font-bold px-2 py-0.5 rounded-md mt-2 w-max">
                      Menunggu Kedatangan
                    </span>
                  </div>

                  {/* Diagnostic Report Widget */}
                  <div className="p-5 rounded-2xl bg-white/50 dark:bg-slate-900/50 border border-sky-100/30 dark:border-sky-950/30 flex flex-col gap-3 text-left">
                    <h5 className="font-bold text-xs text-slate-400 dark:text-slate-500 uppercase tracking-wider">Riwayat & Estimasi Biaya</h5>
                    <div className="flex flex-col gap-2 mt-1.5">
                      <div className="flex items-center justify-between text-xs border-b border-slate-100 dark:border-slate-800 pb-1.5">
                        <span className="text-slate-500 dark:text-slate-400">Jasa Service</span>
                        <span className="font-bold text-slate-800 dark:text-slate-200">Rp 150.000</span>
                      </div>
                      <div className="flex items-center justify-between text-xs border-b border-slate-100 dark:border-slate-800 pb-1.5">
                        <span className="text-slate-500 dark:text-slate-400">Oli Castrol 4L</span>
                        <span className="font-bold text-slate-800 dark:text-slate-200">Rp 420.000</span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-500 dark:text-slate-400">Total Estimasi</span>
                        <span className="font-bold text-emerald-500">Rp 570.000</span>
                      </div>
                    </div>
                  </div>

                  {/* Tip banner */}
                  <div className="md:col-span-2 p-4 rounded-xl bg-sky-500/10 border border-sky-500/20 text-left flex items-start gap-3">
                    <Settings className="w-5 h-5 text-sky-500 shrink-0 mt-0.5" />
                    <div>
                      <h6 className="text-xs font-bold text-sky-800 dark:text-sky-400">Garansi Servis Ekomotif</h6>
                      <p className="text-[10px] text-sky-700/80 dark:text-sky-500/85 mt-0.5">Semua booking servis melalui aplikasi dilindungi garansi pekerjaan bengkel selama 7 hari atau 500 km.</p>
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
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
              >
                {/* Text Description */}
                <div className="lg:col-span-5 text-left flex flex-col gap-6">
                  <h3 className="text-2xl font-bold text-slate-800 dark:text-white">
                    Bengkel Darurat 24/7 (SOS)
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm">
                    Kendaraan Anda mendadak mengalami kerusakan di tengah jalan? Jangan panik. Cukup kirim permintaan bantuan darurat (SOS) untuk memanggil mekanik bengkel terdekat ke lokasi Anda guna mengatasi masalah mesin, aki, maupun ban secara instan.
                  </p>
                  <ul className="flex flex-col gap-3.5">
                    <li className="flex items-center gap-2.5 text-slate-600 dark:text-slate-300 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                      Mekanik Panggilan Siaga 24 Jam
                    </li>
                    <li className="flex items-center gap-2.5 text-slate-600 dark:text-slate-300 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                      Penanganan Masalah Aki, Ban, dan Perbaikan Mesin Ringan
                    </li>
                    <li className="flex items-center gap-2.5 text-slate-600 dark:text-slate-300 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                      Pelacakan Lokasi Mekanik Panggilan Secara Real-Time
                    </li>
                  </ul>
                  <a href="#" className="inline-flex items-center text-sm font-bold text-sky-600 dark:text-sky-400 hover:gap-1.5 transition-all">
                    Panggil Bantuan Darurat <ChevronRight className="w-4 h-4 ml-1" />
                  </a>
                </div>

                {/* Emergency Mechanic Map Tracker Mockup */}
                <div className="lg:col-span-7 bg-white/40 dark:bg-slate-900/40 border border-white/20 dark:border-slate-800/30 backdrop-blur-md rounded-3xl p-6 shadow-xl flex flex-col gap-4">
                  <div className="flex items-center justify-between border-b border-sky-100/30 dark:border-sky-950/20 pb-4">
                    <h4 className="font-bold text-sm text-slate-700 dark:text-slate-300">Pelacakan Mekanik Darurat</h4>
                    <span className="text-[10px] bg-amber-500/10 text-amber-600 dark:text-amber-500 font-bold px-2.5 py-1 rounded-full animate-pulse">
                      Mekanik Menuju Lokasi
                    </span>
                  </div>
                  {/* Mechanic driver info */}
                  <div className="flex items-center justify-between p-4 rounded-2xl bg-white/50 dark:bg-slate-900/50 border border-sky-100/30 dark:border-sky-950/30">
                    <div className="flex gap-3 text-left">
                      <div className="p-3 bg-amber-500 text-white rounded-xl flex items-center justify-center shrink-0">
                        <Settings className="w-4.5 h-4.5" />
                      </div>
                      <div>
                        <h5 className="font-bold text-slate-800 dark:text-slate-200 text-sm">Dian Pratama (Mekanik Panggilan)</h5>
                        <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">Spesialis Mesin & Kelistrikan • Bengkel Mitra Citra</p>
                        <span className="inline-block text-[10px] text-slate-400 dark:text-slate-500 bg-slate-100 dark:bg-slate-800 font-medium px-2 py-0.5 rounded-md mt-1.5">
                          Motor: Honda Beat Hitam • ETA: 8 Menit
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* Mini Map simulation representation */}
                  <div className="h-32 w-full rounded-2xl bg-sky-100 dark:bg-slate-950 relative overflow-hidden flex items-center justify-center border border-sky-100/30 dark:border-sky-950/30">
                    {/* Simulated Map Grid lines */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#e0f2fe_100%)] dark:bg-[radial-gradient(circle_at_center,transparent_20%,#020617_100%)] opacity-30" />
                    <div className="absolute top-10 left-12 w-32 h-0.5 bg-slate-300 dark:bg-slate-800 rotate-12" />
                    <div className="absolute top-6 left-24 w-0.5 h-20 bg-slate-300 dark:bg-slate-800" />
                    
                    {/* User Marker */}
                    <div className="absolute top-16 left-24 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                      <div className="p-1 rounded-full bg-blue-600 text-white animate-bounce shadow-md">
                        <MapPoint className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-[8px] font-bold bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-1 py-0.5 rounded-sm mt-0.5 shadow-xs text-slate-700 dark:text-slate-300">Anda</span>
                    </div>

                    {/* Mechanic Marker */}
                    <div className="absolute top-10 left-48 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                      <div className="p-1 rounded-full bg-amber-500 text-white animate-pulse shadow-md">
                        <MapPoint className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-[8px] font-bold bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-1 py-0.5 rounded-sm mt-0.5 shadow-xs text-slate-700 dark:text-slate-300">Mekanik</span>
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
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
              >
                {/* Text Description */}
                <div className="lg:col-span-5 text-left flex flex-col gap-6">
                  <h3 className="text-2xl font-bold text-slate-800 dark:text-white">
                    Komunitas & Toko Suku Cadang
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm">
                    Bergabunglah dengan forum pecinta otomotif terbesar di Indonesia untuk berdiskusi mengenai tips berkendara, panduan perawatan mobil, hingga info acara *touring*. Temukan juga suku cadang original dan aksesoris terpercaya untuk mobil Anda di marketplace terintegrasi.
                  </p>
                  <ul className="flex flex-col gap-3.5">
                    <li className="flex items-center gap-2.5 text-slate-600 dark:text-slate-300 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                      Forum Diskusi dan Berbagi Tips Perawatan Kendaraan
                    </li>
                    <li className="flex items-center gap-2.5 text-slate-600 dark:text-slate-300 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                      Marketplace Aksesoris dan Suku Cadang Terverifikasi
                    </li>
                    <li className="flex items-center gap-2.5 text-slate-600 dark:text-slate-300 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                      Info Meetup dan Kegiatan Komunitas Otomotif
                    </li>
                  </ul>
                  <a href="#" className="inline-flex items-center text-sm font-bold text-sky-600 dark:text-sky-400 hover:gap-1.5 transition-all">
                    Gabung Komunitas Otomotif <ChevronRight className="w-4 h-4 ml-1" />
                  </a>
                </div>

                {/* Forum feed & store mockups */}
                <div className="lg:col-span-7 bg-white/40 dark:bg-slate-900/40 border border-white/20 dark:border-slate-800/30 backdrop-blur-md rounded-3xl p-6 shadow-xl grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Discussion Post */}
                  <div className="p-4 rounded-2xl bg-white/50 dark:bg-slate-900/50 border border-sky-100/30 dark:border-sky-950/30 flex flex-col gap-3 text-left">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-sky-100 dark:bg-sky-950/50 text-[10px] font-bold flex items-center justify-center text-sky-600 dark:text-sky-400">
                        AN
                      </div>
                      <div>
                        <h6 className="text-[10px] font-bold text-slate-700 dark:text-slate-300">Andi Nugroho</h6>
                        <p className="text-[8px] text-slate-400 dark:text-slate-500">2 jam yang lalu • Toyota Avanza</p>
                      </div>
                    </div>
                    <h5 className="font-bold text-xs text-slate-800 dark:text-slate-200">Tips Perawatan Transmisi Matic CVT</h5>
                    <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-normal line-clamp-2">
                      Halo teman-teman, mau share sedikit nih mengenai jadwal rutin penggantian oli CVT transmisi matic Avanza agar tidak slip...
                    </p>
                    <div className="flex items-center gap-3 mt-1.5 text-[9px] text-slate-400 dark:text-slate-500 font-bold">
                      <span className="flex items-center gap-0.5"><Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500/10" /> 42</span>
                      <span className="flex items-center gap-0.5"><ChatRoundDots className="w-3.5 h-3.5" /> 18</span>
                    </div>
                  </div>

                  {/* Store Item */}
                  <div className="p-4 rounded-2xl bg-white/50 dark:bg-slate-900/50 border border-sky-100/30 dark:border-sky-950/30 flex flex-col gap-3 text-left">
                    <div className="aspect-video w-full rounded-xl bg-linear-to-tr from-sky-100 to-sky-200/50 dark:from-slate-800 dark:to-slate-800/50 flex items-center justify-center border border-sky-100/50 dark:border-sky-950/30">
                      <Bag className="w-8 h-8 text-sky-600 dark:text-sky-400" />
                    </div>
                    <div>
                      <span className="text-[8px] font-bold text-sky-600 dark:text-sky-400 uppercase">Suku Cadang</span>
                      <h5 className="font-bold text-xs text-slate-800 dark:text-slate-200 mt-0.5">Filter Oli Original Avanza</h5>
                      <p className="text-[10px] text-slate-500 dark:text-slate-400 font-bold mt-1">Rp 65.000</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
