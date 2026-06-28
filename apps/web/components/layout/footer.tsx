"use client"

import React from "react"
import Link from "next/link"
import { Leaf, ArrowRight } from "@solar-icons/react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const links = {
    ekosistem: [
      { name: "E-Smart Station", href: "#ekosistem" },
      { name: "Eco-Care System", href: "#ekosistem" },
      { name: "Comoto Forum", href: "#ekosistem" },
      { name: "Eco-Market", href: "#ekosistem" },
    ],
    bantuan: [
      { name: "Pusat Bantuan", href: "#" },
      { name: "Tanya Jawab (FAQ)", href: "#" },
      { name: "Kebijakan Privasi", href: "#" },
      { name: "Syarat & Ketentuan", href: "#" },
    ],
    perusahaan: [
      { name: "Tentang Kami", href: "#tentang" },
      { name: "Karir", href: "#" },
      { name: "Hubungi Kami", href: "#kontak" },
      { name: "Kemitraan", href: "#" },
    ],
  }

  return (
    <footer className="relative bg-slate-50 dark:bg-slate-950 border-t border-sky-100/30 dark:border-sky-950/30 pt-16 pb-8 overflow-hidden">
      {/* Decorative background blur shapes */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-72 h-72 rounded-full bg-sky-200/20 dark:bg-sky-950/20 blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-80 h-80 rounded-full bg-blue-200/10 dark:bg-blue-950/15 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Company Brand Column */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <Link href="#beranda" className="flex items-center group w-max">
              <img
                src="/ecomotif-logo-white.png"
                alt="Ekomotif Logo"
                className="h-8 w-auto object-contain invert dark:invert-0 transition-transform group-hover:scale-102"
              />
            </Link>
            <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400 max-w-sm">
              Ekomotif adalah ekosistem digital otomotif ramah lingkungan terintegrasi pertama di Indonesia. Kami mempercepat transisi energi hijau untuk mobilitas berkelanjutan.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-white dark:bg-slate-900 border border-sky-100/50 dark:border-sky-950/50 hover:bg-sky-50 dark:hover:bg-sky-950 text-slate-600 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 transition-colors shadow-xs"
              >
                <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-white dark:bg-slate-900 border border-sky-100/50 dark:border-sky-950/50 hover:bg-sky-50 dark:hover:bg-sky-950 text-slate-600 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 transition-colors shadow-xs"
              >
                <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-white dark:bg-slate-900 border border-sky-100/50 dark:border-sky-950/50 hover:bg-sky-50 dark:hover:bg-sky-950 text-slate-600 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 transition-colors shadow-xs"
              >
                <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17z" />
                  <polygon points="9.7 15 9.7 9 14.5 12 9.7 15" />
                </svg>
              </a>
            </div>
          </div>

          {/* Nav links columns */}
          <div>
            <h4 className="font-semibold text-sm tracking-wider uppercase text-slate-900 dark:text-slate-100 mb-5">
              Ekosistem
            </h4>
            <ul className="flex flex-col gap-3">
              {links.ekosistem.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-500 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 transition-colors flex items-center gap-1 group"
                  >
                    <span>{link.name}</span>
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm tracking-wider uppercase text-slate-900 dark:text-slate-100 mb-5">
              Perusahaan
            </h4>
            <ul className="flex flex-col gap-3">
              {links.perusahaan.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-500 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 transition-colors flex items-center gap-1 group"
                  >
                    <span>{link.name}</span>
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm tracking-wider uppercase text-slate-900 dark:text-slate-100 mb-5">
              Dukungan
            </h4>
            <ul className="flex flex-col gap-3">
              {links.bantuan.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-500 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 transition-colors flex items-center gap-1 group"
                  >
                    <span>{link.name}</span>
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer bottom bar */}
        <div className="pt-8 border-t border-sky-100/20 dark:border-sky-950/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 dark:text-slate-500">
          <p>© {currentYear} Ekomotif Indonesia. Seluruh hak cipta dilindungi.</p>
          <p className="flex items-center gap-1">
            Dibuat dengan <span className="text-emerald-500">💚</span> di Indonesia untuk masa depan hijau
          </p>
        </div>
      </div>
    </footer>
  )
}
