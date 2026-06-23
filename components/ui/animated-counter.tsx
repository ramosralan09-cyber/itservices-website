'use client'

import { useEffect, useRef, useState } from 'react'
import { useSpring, useInView, useMotionValueEvent } from 'framer-motion'

interface AnimatedCounterProps {
  value: number
  suffix?: string
  prefix?: string
  label: string
  className?: string
}

export function AnimatedCounter({
  value,
  suffix = '',
  prefix = '',
  label,
  className = '',
}: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const spring = useSpring(0, { stiffness: 60, damping: 20 })
  const [display, setDisplay] = useState(0)

  useMotionValueEvent(spring, 'change', (latest) => setDisplay(Math.round(latest)))

  useEffect(() => {
    if (isInView) spring.set(value)
  }, [isInView, spring, value])

  return (
    <div ref={ref} className={`text-center ${className}`}>
      <div className="text-4xl md:text-5xl font-bold text-white tabular-nums">
        <span className="text-skyBlue">{prefix}</span>
        {display}
        <span className="text-skyBlue">{suffix}</span>
      </div>
      <p className="text-gray-400 text-sm mt-2 leading-snug">{label}</p>
    </div>
  )
}
