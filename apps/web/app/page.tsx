import { Navbar } from "@/components/layout/navbar"
import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { Ecosystem } from "@/components/sections/ecosystem"
import { Features } from "@/components/sections/features"
import { Footer } from "@/components/layout/footer"

export default function Page() {
  return (
    <div className="relative min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-50 transition-colors duration-300">
      {/* Decorative background grid and blurs globally */}
      <div className="absolute inset-0 bg-[radial-gradient(80rem_50rem_at_50%_-10rem,rgba(14,165,233,0.15),transparent)] dark:bg-[radial-gradient(80rem_50rem_at_50%_-10rem,rgba(14,165,233,0.06),transparent)] pointer-events-none z-0" />
      <div className="absolute top-[20%] left-0 w-72 h-72 rounded-full bg-linear-to-tr from-sky-300/10 to-blue-400/5 dark:from-sky-950/10 dark:to-blue-950/5 blur-3xl pointer-events-none z-0" />
      <div className="absolute top-[60%] right-0 w-80 h-80 rounded-full bg-linear-to-tr from-sky-400/5 to-indigo-400/5 dark:from-sky-950/5 dark:to-indigo-950/5 blur-3xl pointer-events-none z-0" />

      {/* Navbar Layout */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero />
        <Features />
        <About />
        <Ecosystem />
      </main>

      {/* Footer Layout */}
      <Footer />
    </div>
  )
}
