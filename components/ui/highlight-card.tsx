'use client'

import { motion } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'

interface HighlightCardProps {
  icon: LucideIcon
  title: string
  description: string
  accentColor?: string
}

export function HighlightCard({
  icon: Icon,
  title,
  description,
  accentColor = '#0B5FFF',
}: HighlightCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.03, rotate: -0.5 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="group relative bg-slate border border-gray-700/40 rounded-2xl p-8 overflow-hidden cursor-pointer"
    >
      {/* Radial glow on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
        style={{
          background: `radial-gradient(circle at 30% 30%, ${accentColor}20 0%, transparent 70%)`,
        }}
      />

      {/* Expanding bottom accent line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"
        style={{ backgroundColor: accentColor }}
      />

      {/* Icon with animated ring */}
      <div className="relative mb-6">
        <div
          className="w-14 h-14 rounded-xl flex items-center justify-center relative"
          style={{
            backgroundColor: `${accentColor}20`,
            border: `1px solid ${accentColor}40`,
          }}
        >
          <Icon className="w-7 h-7" style={{ color: accentColor }} />
          <motion.div
            className="absolute inset-0 rounded-xl border-2 opacity-0 group-hover:opacity-100"
            style={{ borderColor: accentColor }}
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </div>

      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </motion.div>
  )
}
