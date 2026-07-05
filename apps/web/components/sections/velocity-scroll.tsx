"use client"

import React, { useRef } from "react"
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  useAnimationFrame,
  useMotionValue,
} from "motion/react"

interface VelocityScrollProps {
  text: string
  defaultVelocity?: number
}

function ParallaxText({ children, baseVelocity = 100 }: { children: string; baseVelocity: number }) {
  const baseX = useMotionValue(0)
  const { scrollY } = useScroll()
  const scrollVelocity = useVelocity(scrollY)
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  })
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  })

  const directionFactor = useRef<number>(1)
  useAnimationFrame((time, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000)

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get()

    baseX.set(baseX.get() + moveBy)
  })

  const x = useTransform(baseX, (v) => `${((v % 25) + 25) % 25 - 25}%`)

  return (
    <div className="overflow-hidden tracking-tight leading-[0.8] whitespace-nowrap flex flex-nowrap w-full">
      <motion.div 
        className="font-light tracking-[0.25em] uppercase text-xl sm:text-2xl flex whitespace-nowrap gap-12 text-slate-800 dark:text-slate-200 select-none py-1" 
        style={{ x }}
      >
        {Array.from({ length: 12 }).map((_, i) => (
          <span key={i} className="flex gap-12 items-center">
            <span className="text-slate-400 dark:text-slate-500 font-sans tracking-[0.3em] font-extralight opacity-80">{children}</span>
            <span className="text-sky-500/50">•</span>
          </span>
        ))}
      </motion.div>
    </div>
  )
}

export function VelocityScroll({ text, defaultVelocity = 2 }: VelocityScrollProps) {
  return (
    <div className="relative w-full overflow-hidden py-4 bg-slate-50/50 dark:bg-slate-950/50 border-y border-slate-200/20 dark:border-slate-800/20 flex flex-col gap-2 backdrop-blur-md">
      <ParallaxText baseVelocity={defaultVelocity}>{text}</ParallaxText>
    </div>
  )
}
