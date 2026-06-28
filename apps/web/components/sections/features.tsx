"use client"

import React, { useState } from "react"
import { motion } from "motion/react"
import { Cpu, MapPoint, Wallet2 as CreditCard, MedalStar as Sparkles, Settings } from "@solar-icons/react"
import { Button } from "@workspace/ui/components/button"

type CarType = "LCGC" | "Hatchback" | "Sedan" | "SUV_MPV"

interface MileageInfo {
  cost: number
  items: string
}

export function Features() {
  // Calculator state
  const [carType, setCarType] = useState<CarType>("SUV_MPV")
  const [mileage, setMileage] = useState<number>(20000)

  const carMultipliers: Record<CarType, number> = {
    LCGC: 1.0,
    Hatchback: 1.15,
    Sedan: 1.3,
    SUV_MPV: 1.45,
  }

  const mileageData: Record<number, MileageInfo> = {
    10000: { cost: 350000, items: "Oli Mesin, Filter Oli, General Diagnostic Ringan" },
    20000: { cost: 580000, items: "Oli Mesin, Filter Oli, Filter AC, Tune-up Ringan" },
    40000: { cost: 1100000, items: "Oli Mesin, Filter Oli, Busi Standard, Minyak Rem, Tune-up Mayor" },
    60000: { cost: 720000, items: "Oli Mesin, Filter Oli, Filter Udara, Tune-up Standard" },
    80000: { cost: 1450000, items: "Oli Mesin, Filter Oli, Busi, Minyak Rem, Filter AC, Tune-up Mayor" },
    100000: { cost: 850000, items: "Oli Mesin, Filter Oli, Cairan Radiator, General Diagnostic" },
  }

  const activeData = mileageData[mileage] || { cost: 580000, items: "Oli Mesin, Filter Oli, Filter AC, Tune-up Ringan" }
  const estimatedCost = activeData.cost * carMultipliers[carType]

  const featureCards = [
    {
      icon: <Cpu className="w-6 h-6 text-sky-500" />,
      title: "Booking Servis Terjadwal",
      desc: "Jadwalkan servis kendaraan Anda tanpa repot mengantre. Pilih slot waktu, jenis kendaraan, dan bengkel terdekat dalam hitungan detik.",
    },
    {
      icon: <MapPoint className="w-6 h-6 text-sky-500" />,
      title: "Mekanik Panggilan Darurat (SOS)",
      desc: "Kendaraan mendadak bermasalah di jalan? Kirim sinyal SOS darurat untuk memanggil mekanik bengkel terdekat langsung ke lokasi Anda.",
    },
    {
      icon: <CreditCard className="w-6 h-6 text-sky-500" />,
      title: "Showroom & Pengajuan Kredit",
      desc: "Bandingkan harga dan spesifikasi mobil dari berbagai dealer mitra resmi, serta lakukan pengajuan pembelian dan simulasi cicilan langsung.",
    },
  ]

  const mileages = [10000, 20000, 40000, 60000, 80000, 100000]

  return (
    <section
      id="fitur"
      className="py-24 relative overflow-hidden bg-white dark:bg-slate-950"
    >
      {/* Decorative gradient blob */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 rounded-full bg-sky-200/10 dark:bg-sky-950/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-2xl text-left mb-16 flex flex-col gap-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-sky-100 bg-sky-50/50 dark:border-sky-950/30 dark:bg-sky-950/20 text-xs font-semibold text-sky-700 dark:text-sky-400 w-max">
            <Sparkles className="w-3.5 h-3.5" />
            Fitur Pintar
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
            Inovasi Digital untuk{" "}
            <span className="bg-linear-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
              Kemudahan Berkendara Anda
            </span>
          </h2>
          <p className="text-base text-slate-500 dark:text-slate-400 leading-relaxed">
            Ekomotif menghadirkan fitur-fitur terintegrasi untuk menjamin perawatan kendaraan dan bantuan darurat di jalan selalu dapat diandalkan secara transparan.
          </p>
        </div>

        {/* Features Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Column: Feature Info Cards */}
          <div className="lg:col-span-6 flex flex-col gap-6 text-left">
            {featureCards.map((feat, index) => (
              <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                key={feat.title}
                className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-sky-100/30 dark:border-sky-950/30 hover:border-sky-300/30 dark:hover:border-sky-800/30 transition-all flex gap-5 items-start group hover:shadow-xs"
              >
                <div className="p-3.5 rounded-xl bg-white dark:bg-slate-950 text-sky-500 group-hover:scale-105 transition-transform flex items-center justify-center shrink-0 shadow-xs border border-sky-100/30 dark:border-sky-950/20">
                  {feat.icon}
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 dark:text-slate-200 text-base mb-1.5">
                    {feat.title}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column: Interactive Cost Estimator */}
          <motion.div
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.95 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 p-6 rounded-3xl bg-linear-to-b from-sky-50/50 to-blue-50/20 dark:from-slate-900/60 dark:to-slate-950/60 border border-sky-100/40 dark:border-sky-950/30 backdrop-blur-md shadow-xl text-left"
          >
            <div className="flex items-center justify-between border-b border-sky-100/30 dark:border-sky-950/20 pb-4 mb-6">
              <div>
                <h3 className="font-bold text-lg text-slate-800 dark:text-slate-200">Estimator Biaya Servis</h3>
                <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">Prediksikan biaya perawatan berkala mobil Anda.</p>
              </div>
              <div className="p-2 rounded-xl bg-sky-500/10 text-sky-600 dark:text-sky-400">
                <Settings className="w-5 h-5" />
              </div>
            </div>

            <div className="flex flex-col gap-6">
              {/* Select Car Type */}
              <div className="flex flex-col gap-2.5">
                <span className="text-sm font-semibold text-slate-600 dark:text-slate-400">Tipe Kendaraan:</span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {(["LCGC", "Hatchback", "Sedan", "SUV_MPV"] as CarType[]).map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setCarType(type)}
                      className={`px-3 py-2 text-xs font-bold rounded-xl border transition-all cursor-pointer ${
                        carType === type
                          ? "bg-sky-500 border-sky-500 text-white shadow-xs"
                          : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-sky-50/50"
                      }`}
                    >
                      {type.replace("_", " / ")}
                    </button>
                  ))}
                </div>
              </div>

              {/* Select Mileage */}
              <div className="flex flex-col gap-2.5">
                <span className="text-sm font-semibold text-slate-600 dark:text-slate-400">Jarak Tempuh (Odometer):</span>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                  {mileages.map((m) => (
                    <button
                      key={m}
                      type="button"
                      onClick={() => setMileage(m)}
                      className={`px-2.5 py-2.5 text-xs font-bold rounded-xl border transition-all cursor-pointer ${
                        mileage === m
                          ? "bg-sky-500 border-sky-500 text-white shadow-xs"
                          : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-sky-50/50"
                      }`}
                    >
                      {(m / 1000) + "k km"}
                    </button>
                  ))}
                </div>
              </div>

              {/* Maintenance items display */}
              <div className="p-4 rounded-2xl bg-white/60 dark:bg-slate-900/60 border border-sky-100/20 dark:border-sky-950/20 text-left">
                <span className="block text-[10px] text-slate-400 dark:text-slate-500 font-bold uppercase tracking-wider">Item Pengerjaan Servis</span>
                <p className="text-xs font-bold text-slate-700 dark:text-slate-300 mt-1.5 leading-relaxed">
                  {activeData.items}
                </p>
              </div>

              {/* Cost card */}
              <div className="p-5 rounded-2xl bg-sky-500/10 dark:bg-sky-500/5 border border-sky-500/20 text-center flex flex-col gap-1.5">
                <span className="text-[10px] text-sky-600 dark:text-sky-400 font-bold uppercase tracking-wider">Estimasi Rata-rata Biaya Servis</span>
                <h4 className="text-2xl sm:text-3xl font-black text-sky-600 dark:text-sky-400">
                  Rp {Math.round(estimatedCost).toLocaleString("id-ID")}
                </h4>
                <p className="text-[9px] text-slate-400 dark:text-slate-500 font-medium">Asumsi estimasi biaya jasa dan suku cadang orisinal di bengkel mitra.</p>
              </div>

              {/* Booking Button */}
              <Button
                variant="default"
                className="w-full rounded-2xl bg-linear-to-r from-sky-500 to-blue-600 text-white py-6 text-sm font-bold shadow-md shadow-sky-500/10"
              >
                Booking Jadwal Servis Sekarang
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
