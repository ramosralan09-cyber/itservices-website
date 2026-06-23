'use client'

import { motion } from 'framer-motion'

interface BorderBeamProps {
  duration?: number
  borderWidth?: number
  lightColor?: string
  className?: string
}

export function BorderBeam({
  duration = 8,
  borderWidth = 1,
  lightColor = '#0B5FFF',
  className = '',
}: BorderBeamProps) {
  return (
    <motion.div
      className={`pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 ${className}`}
      style={{
        padding: `${borderWidth}px`,
        WebkitMaskImage:
          'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
        WebkitMaskComposite: 'xor',
        maskImage:
          'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
        maskComposite: 'exclude',
      }}
    >
      <motion.div
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: 'inherit',
          background: `conic-gradient(from 0deg, transparent 0%, ${lightColor} 15%, transparent 30%)`,
        }}
        animate={{ rotate: 360 }}
        transition={{ duration, repeat: Infinity, ease: 'linear' }}
      />
    </motion.div>
  )
}
