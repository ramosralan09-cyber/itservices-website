'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion'
import { Search, Wrench, CheckCircle2, Headphones } from 'lucide-react'

const STEPS = [
  {
    icon: Search,
    number: '01',
    title: 'Diagnóstico Inicial',
    description:
      'Evaluamos tus instalaciones y necesidades tecnológicas sin costo para diseñar la solución ideal.',
    highlight: 'Sin costo',
  },
  {
    icon: Wrench,
    number: '02',
    title: 'Diseño y Propuesta',
    description:
      'Creamos un plan detallado con equipos, tiempos y costos claros. Sin sorpresas ni letra pequeña.',
    highlight: 'Transparente',
  },
  {
    icon: CheckCircle2,
    number: '03',
    title: 'Instalación Profesional',
    description:
      'Nuestro equipo certificado instala y configura cada sistema con la mayor precisión y cuidado.',
    highlight: 'Certificado',
  },
  {
    icon: Headphones,
    number: '04',
    title: 'Soporte Continuo',
    description:
      'Te acompañamos con mantenimiento preventivo y soporte técnico rápido cuando lo necesites.',
    highlight: '7 días',
  },
]

function ProgressLine({
  scrollYProgress,
  start,
  end,
}: {
  scrollYProgress: MotionValue<number>
  start: number
  end: number
}) {
  const scaleX = useTransform(scrollYProgress, [start, end], [0, 1])
  return (
    <div className="h-0.5 flex-1 rounded-full bg-white/10 overflow-hidden">
      <motion.div
        className="h-full rounded-full bg-deepBlue"
        style={{ scaleX, transformOrigin: 'left' }}
      />
    </div>
  )
}

function StepCard({
  step,
  index,
}: {
  step: (typeof STEPS)[0]
  index: number
}) {
  return (
    <div className="w-80 bg-slate border border-gray-700/40 rounded-2xl p-8 flex-shrink-0 flex flex-col">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-14 h-14 rounded-xl bg-deepBlue/20 border border-deepBlue/30 flex items-center justify-center flex-shrink-0">
          <step.icon className="w-7 h-7 text-skyBlue" />
        </div>
        <span className="text-6xl font-black text-white/10 leading-none">{step.number}</span>
      </div>
      <span className="inline-block w-fit px-3 py-1 bg-orange/20 text-orange text-xs font-bold rounded-full mb-4">
        {step.highlight}
      </span>
      <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
      <p className="text-gray-400 leading-relaxed text-sm flex-1">{step.description}</p>
    </div>
  )
}

export function ProcessTimeline() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-75%'])

  return (
    <section className="bg-charcoal">
      {/* Section header */}
      <div className="container mx-auto px-6 pt-20 pb-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-deepBlue/10 border border-deepBlue/30 rounded-full mb-6"
        >
          <span className="text-skyBlue font-semibold text-sm">Cómo trabajamos</span>
        </motion.div>
        <h2 className="text-3xl md:text-5xl font-bold text-white">
          Proceso simple,{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-deepBlue to-skyBlue">
            resultados garantizados
          </span>
        </h2>
      </div>

      {/* Desktop: sticky horizontal scroll (300vh container) */}
      <div ref={containerRef} className="hidden lg:block relative" style={{ height: '300vh' }}>
        <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
          {/* Progress lines */}
          <div className="container mx-auto px-6 mb-8">
            <div className="flex items-center gap-3">
              {STEPS.map((_, i) => (
                <ProgressLine
                  key={i}
                  scrollYProgress={scrollYProgress}
                  start={i / STEPS.length}
                  end={(i + 1) / STEPS.length}
                />
              ))}
            </div>
          </div>

          {/* Horizontally scrolling cards */}
          <div className="pl-24 overflow-visible">
            <motion.div className="flex gap-8 w-max" style={{ x }}>
              {STEPS.map((step, i) => (
                <StepCard key={i} step={step} index={i} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Mobile: vertical 2-column grid */}
      <div className="lg:hidden container mx-auto px-6 pb-20">
        <div className="grid sm:grid-cols-2 gap-6">
          {STEPS.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-slate border border-gray-700/40 rounded-2xl p-8"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-deepBlue/20 border border-deepBlue/30 flex items-center justify-center flex-shrink-0">
                  <step.icon className="w-6 h-6 text-skyBlue" />
                </div>
                <span className="text-5xl font-black text-white/10 leading-none">{step.number}</span>
              </div>
              <span className="inline-block w-fit px-3 py-1 bg-orange/20 text-orange text-xs font-bold rounded-full mb-3">
                {step.highlight}
              </span>
              <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
