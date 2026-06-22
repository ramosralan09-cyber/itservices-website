'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface AnimatedMarqueeHeroProps {
  tagline: string
  title: React.ReactNode
  description: string
  ctaText: string
  images: string[]
  onCtaClick?: () => void
  className?: string
}

const FADE_UP = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring' as const, stiffness: 100, damping: 20 },
  },
}

export const AnimatedMarqueeHero: React.FC<AnimatedMarqueeHeroProps> = ({
  tagline,
  title,
  description,
  ctaText,
  images,
  onCtaClick,
  className,
}) => {
  const duplicated = [...images, ...images]

  return (
    <section
      className={cn(
        'relative w-full min-h-[640px] overflow-hidden flex flex-col items-center justify-center text-center px-4 py-28 bg-charcoal',
        className,
      )}
    >
      {/* Subtle radial glow behind content */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% 40%, rgba(11,95,255,0.12) 0%, transparent 70%)',
        }}
      />

      {/* Text content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Tagline pill — matches site's Hero.tsx badge style */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={FADE_UP}
          className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-deepBlue/10 border border-deepBlue/30 rounded-full"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-skyBlue animate-pulse" />
          <span className="text-skyBlue font-semibold text-sm uppercase tracking-widest">
            {tagline}
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.07 } },
          }}
          className="text-4xl md:text-6xl font-bold tracking-tight text-white max-w-3xl leading-tight"
        >
          {typeof title === 'string'
            ? title.split(' ').map((word, i) => (
                <motion.span key={i} variants={FADE_UP} className="inline-block mr-2">
                  {word}
                </motion.span>
              ))
            : title}
        </motion.h1>

        {/* Description */}
        <motion.p
          initial="hidden"
          animate="show"
          variants={FADE_UP}
          transition={{ delay: 0.45 }}
          className="mt-6 max-w-xl text-base text-gray-400 leading-relaxed"
        >
          {description}
        </motion.p>

        {/* CTA */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={FADE_UP}
          transition={{ delay: 0.65 }}
        >
          <motion.button
            onClick={onCtaClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 px-8 py-3.5 bg-deepBlue text-white rounded-full font-semibold shadow-lg shadow-deepBlue/30 hover:bg-skyBlue transition-colors focus:outline-none focus:ring-2 focus:ring-deepBlue/60"
          >
            {ctaText}
          </motion.button>
        </motion.div>
      </div>

      {/* Animated image marquee — fades in at the bottom */}
      <div className="absolute bottom-0 left-0 w-full h-2/5 overflow-hidden pointer-events-none [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_80%,transparent)]">
        <motion.div
          className="flex gap-4 items-end w-max"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ ease: 'linear', duration: 38, repeat: Infinity }}
        >
          {duplicated.map((src, i) => (
            <div
              key={i}
              className="relative h-44 md:h-56 w-36 md:w-44 flex-shrink-0 overflow-hidden rounded-2xl shadow-xl bg-navy"
              style={{ rotate: `${i % 2 === 0 ? '-3deg' : '4deg'}` }}
            >
              <img
                src={src}
                alt=""
                aria-hidden="true"
                className="w-full h-full object-cover"
                onError={(e) => {
                  ;(e.target as HTMLImageElement).parentElement!.style.display = 'none'
                }}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
