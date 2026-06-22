'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Briefcase, CalendarDays, MapPin, Headphones } from 'lucide-react'
import { HeroSlideshow } from '@/components/portfolio/HeroSlideshow'
import { PortfolioGrid } from '@/components/portfolio/PortfolioGrid'

const STATS = [
  { icon: Briefcase,    value: '120+',     label: 'proyectos completados' },
  { icon: CalendarDays, value: '12+',      label: 'años de experiencia en el mercado' },
  { icon: MapPin,       value: 'Cobertura', label: 'en todo Puerto Rico' },
  { icon: Headphones,   value: 'Soporte',  label: 'local y rápido 7 días a la semana' },
]

const MOSAIC = [
  { src: '/portfolio/header/imagen-1.jpg', aspect: 'aspect-square',  radius: 'rounded-tl-2xl' },
  { src: '/portfolio/header/imagen-2.jpg', aspect: 'aspect-[3/4]',   radius: 'rounded-tr-2xl' },
  { src: '/portfolio/header/imagen-3.jpg', aspect: 'aspect-[3/4]',   radius: 'rounded-bl-2xl' },
  { src: '/portfolio/header/imagen-4.jpg', aspect: 'aspect-square',  radius: 'rounded-br-2xl' },
]

export default function PortafolioClient() {
  const gridRef = useRef<HTMLDivElement>(null)

  const scrollToGrid = () =>
    gridRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })

  return (
    <div className="min-h-screen bg-[#0a0e1a]">

      {/* ─── HERO ────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">

        {/* Slideshow background (z-0) */}
        <div className="absolute inset-0 z-0">
          <HeroSlideshow />
        </div>

        {/* Bottom fade into page background */}
        <div className="absolute bottom-0 inset-x-0 z-10 h-40 bg-gradient-to-t from-[#0a0e1a] to-transparent pointer-events-none" />

        {/* Hero content (z-20) */}
        <div className="relative z-20 container mx-auto px-6 py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left: text */}
            <div className="flex flex-col gap-6">
              <motion.span
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="inline-block w-fit px-4 py-1.5 bg-teal-500/10 border border-teal-500/30 text-teal-400 text-xs font-semibold uppercase tracking-widest rounded-full"
              >
                NUESTROS TRABAJOS
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl md:text-5xl font-bold text-white leading-tight"
              >
                Portafolio de Proyectos
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-gray-400 max-w-md text-base leading-relaxed"
              >
                Proyectos reales de instalación de cámaras, control de acceso, redes y
                soluciones empresariales en toda Puerto Rico.
              </motion.p>

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                onClick={scrollToGrid}
                className="inline-flex items-center gap-2 text-teal-400 hover:underline text-base w-fit"
              >
                Soluciones a la medida. Resultados que protegen.
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>

            {/* Right: 2×2 image mosaic */}
            <div className="hidden lg:block">
              <div className="grid grid-cols-2 gap-3 rotate-1 items-start">
                {MOSAIC.map(({ src, aspect, radius }) => (
                  <div
                    key={src}
                    className={`relative ${aspect} ${radius} overflow-hidden bg-gray-800 border border-teal-500/20 shadow-lg shadow-teal-500/10`}
                  >
                    <Image
                      src={src}
                      alt=""
                      fill
                      className="object-cover"
                      aria-hidden="true"
                    />
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── STATS BAR ───────────────────────────────────────────────── */}
      <div className="bg-[#0d1117] border-y border-gray-800">
        <div className="container mx-auto px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex items-center gap-4">
                <Icon className="w-6 h-6 text-teal-400 flex-shrink-0" />
                <div>
                  <p className="text-white font-bold text-lg leading-none">{value}</p>
                  <p className="text-gray-400 text-sm mt-0.5">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── PROJECTS GRID ───────────────────────────────────────────── */}
      <section ref={gridRef} className="py-20 bg-[#0a0e1a]">
        <div className="container mx-auto px-6">
          <PortfolioGrid />
        </div>
      </section>

    </div>
  )
}
