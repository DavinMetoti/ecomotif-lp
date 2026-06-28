"use client"

import React from "react"
import { motion } from "motion/react"
import { ShieldCheck, Settings, Key, ShieldWarning } from "@solar-icons/react"

export function About() {
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

  return (
    <section
      id="tentang"
      className="py-24 relative overflow-hidden bg-white dark:bg-slate-950"
    >
      {/* Decorative Blur Background Element */}
      <div className="absolute top-1/2 left-full -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-sky-200/10 dark:bg-sky-950/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Column - Beautiful Grid Illustration */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4 relative">
            {/* Ambient light effect behind layout */}
            <div className="absolute inset-0 m-auto w-64 h-64 bg-sky-300/10 dark:bg-sky-950/10 blur-3xl rounded-full pointer-events-none" />

            {/* Card 1 */}
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-sky-100/50 dark:border-sky-950/50 flex flex-col gap-3 shadow-xs hover:border-sky-300/50 transition-colors"
            >
              <span className="text-3xl font-extrabold text-sky-600 dark:text-sky-400">500+</span>
              <h4 className="font-bold text-slate-800 dark:text-slate-200">Bengkel Mitra</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Ratusan bengkel resmi dan umum tersertifikasi siap melayani kendaraan Anda.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-sky-100/50 dark:border-sky-950/50 flex flex-col gap-3 mt-8 shadow-xs hover:border-sky-300/50 transition-colors"
            >
              <span className="text-3xl font-extrabold text-sky-600 dark:text-sky-400">24/7</span>
              <h4 className="font-bold text-slate-800 dark:text-slate-200">Siaga Darurat</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Layanan mekanik panggilan darurat siaga 24 jam kapan pun kendaraan Anda mengalami kendala.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-sky-100/50 dark:border-sky-950/50 flex flex-col gap-3 shadow-xs hover:border-sky-300/50 transition-colors"
            >
              <span className="text-3xl font-extrabold text-sky-600 dark:text-sky-400">100%</span>
              <h4 className="font-bold text-slate-800 dark:text-slate-200">Transparansi Biaya</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Rincian harga jasa dan suku cadang tertera jelas sebelum pengerjaan dimulai.
              </p>
            </motion.div>

            {/* Card 4 */}
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-sky-100/50 dark:border-sky-950/50 flex flex-col gap-3 mt-8 shadow-xs hover:border-sky-300/50 transition-colors"
            >
              <span className="text-3xl font-extrabold text-sky-600 dark:text-sky-400">20k+</span>
              <h4 className="font-bold text-slate-800 dark:text-slate-200">Komunitas Otomotif</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Ruang berkumpul dan berdiskusi sesama pemilik kendaraan di Indonesia.
              </p>
            </motion.div>
          </div>

          {/* Right Column - Text & Content */}
          <div className="lg:col-span-6 flex flex-col items-start gap-6 text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-sky-100 bg-sky-50/50 dark:border-sky-100/10 dark:bg-sky-950/20 text-xs font-semibold text-sky-700 dark:text-sky-400">
              <ShieldCheck className="w-3.5 h-3.5" />
              Mengenal Ekomotif
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
              Solusi Lengkap Perawatan dan{" "}
              <span className="bg-linear-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
                Kepemilikan Kendaraan Anda
              </span>
            </h2>

            <p className="text-base text-slate-500 dark:text-slate-400 leading-relaxed">
              Ekomotif adalah ekosistem digital otomotif terintegrasi di Indonesia yang menghubungkan pengguna kendaraan dengan jaringan showroom berkualitas, bengkel perawatan terpercaya, serta penanganan darurat darat dalam satu aplikasi yang cepat dan transparan.
            </p>

            {/* highlights list */}
            <div className="flex flex-col gap-5 mt-4 w-full">
              {highlights.map((item, index) => (
                <motion.div
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: 20 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  key={item.title}
                  className="flex gap-4 items-start"
                >
                  <div className="p-2.5 rounded-xl bg-sky-500/10 dark:bg-sky-950/30 text-sky-600 dark:text-sky-400 flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800 dark:text-slate-200 text-sm mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
