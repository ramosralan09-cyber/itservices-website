'use client'

import { motion } from 'framer-motion'
import { AnimatedCounter } from '@/components/ui/animated-counter'

const STATS = [
  { value: 120, suffix: '+', label: 'Proyectos Completados' },
  { value: 12,  suffix: '+', label: 'Años de Experiencia' },
  { value: 78,  suffix: '',  label: 'Municipios Atendidos' },
  { value: 98,  suffix: '%', label: 'Clientes Satisfechos' },
]

export function StatsSection() {
  return (
    <section className="py-20 bg-navy border-y border-gray-700/40">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Números que hablan por sí solos
          </h2>
          <p className="text-gray-400 text-lg">
            Más de una década entregando resultados en Puerto Rico
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {STATS.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <AnimatedCounter
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
