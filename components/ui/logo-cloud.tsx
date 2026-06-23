'use client'

import { motion } from 'framer-motion'
import { Building2 } from 'lucide-react'

const CLIENTS = [
  'Cuartel Policía Cabo Rojo',
  'Ricomini Bakery',
  'InfoSys Aguadilla',
  'PR-9 Ponce',
  'Mayagüez Square District',
  'Vistas del Río Apts',
  'Municipio de Aguadilla',
  'Caribbean Business Solutions',
  'PR Healthcare Systems',
  'Inversiones del Norte',
]

export function LogoCloud() {
  const doubled = [...CLIENTS, ...CLIENTS]

  return (
    <section className="py-16 bg-navy border-y border-gray-700/40 overflow-hidden">
      <div className="container mx-auto px-6 mb-10 text-center">
        <p className="text-gray-400 text-sm uppercase tracking-widest font-semibold">
          Clientes que confían en nosotros
        </p>
      </div>

      <div className="relative">
        {/* Edge fades */}
        <div
          className="absolute inset-y-0 left-0 w-32 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, #0B1220, transparent)' }}
        />
        <div
          className="absolute inset-y-0 right-0 w-32 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, #0B1220, transparent)' }}
        />

        <motion.div
          className="flex w-max gap-6"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 40, ease: 'linear', repeat: Infinity, repeatType: 'loop' }}
        >
          {doubled.map((client, i) => (
            <div
              key={`${client}-${i}`}
              className="flex items-center gap-3 px-6 py-3 bg-slate/40 border border-gray-700/30 rounded-xl whitespace-nowrap flex-shrink-0"
            >
              <Building2 className="w-4 h-4 text-skyBlue flex-shrink-0" />
              <span className="text-gray-300 text-sm font-medium">{client}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
