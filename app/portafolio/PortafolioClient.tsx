'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import { Briefcase, CalendarDays, MapPin, Headphones } from 'lucide-react'
import { AnimatedMarqueeHero } from '@/components/ui/hero-portfolio'
import { PortfolioGrid } from '@/components/portfolio/PortfolioGrid'

const STATS = [
  { icon: Briefcase,    value: '120+',      label: 'proyectos completados' },
  { icon: CalendarDays, value: '12+',       label: 'años de experiencia en el mercado' },
  { icon: MapPin,       value: 'Cobertura', label: 'en todo Puerto Rico' },
  { icon: Headphones,   value: 'Soporte',   label: 'local y rápido 7 días a la semana' },
]

const MARQUEE_IMAGES = Array.from(
  { length: 7 },
  (_, i) => `/portfolio/header/imagen-${i + 1}.jpg`,
)

export default function PortafolioClient() {
  const gridRef = useRef<HTMLDivElement>(null)

  const scrollToGrid = () =>
    gridRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })

  return (
    <div className="min-h-screen bg-charcoal">

      {/* ─── ANIMATED MARQUEE HERO ───────────────────────────────────── */}
      <AnimatedMarqueeHero
        tagline="Nuestros Trabajos"
        title="Portafolio de Proyectos en Puerto Rico"
        description="Más de 120 proyectos completados en toda la isla. Desde pequeños negocios y residencias hasta instalaciones gubernamentales y educativas."
        ctaText="Ver proyectos"
        images={MARQUEE_IMAGES}
        onCtaClick={scrollToGrid}
      />

      {/* ─── STATS BAR ───────────────────────────────────────────────── */}
      <div className="bg-navy border-y border-gray-600/40">
        <div className="container mx-auto px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex items-center gap-4">
                <Icon className="w-6 h-6 text-skyBlue flex-shrink-0" />
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
      <section ref={gridRef} className="py-20 bg-charcoal">
        <div className="container mx-auto px-6">
          <PortfolioGrid />
        </div>
      </section>

    </div>
  )
}
