'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Shield, Lock, Wifi, Headphones } from 'lucide-react'
import { motion } from 'framer-motion'

const SERVICES = [
  {
    title: 'Cámaras de Seguridad',
    description:
      'Instalación de CCTV, cámaras IP, PTZ, NVR y acceso remoto desde tu celular.',
    image: '/services/camaras-de-seguridad.png',
    href: '/servicios/seguridad',
    cta: 'Ver cámaras',
    Icon: Shield,
  },
  {
    title: 'Control de Acceso',
    description:
      'Soluciones con RFID, PIN, biométrico, teleentry y portones para mayor seguridad.',
    image: '/services/control-de-acceso.png',
    href: '/servicios/seguridad#acceso',
    cta: 'Ver soluciones',
    Icon: Lock,
  },
  {
    title: 'Redes y WiFi',
    description:
      'Cableado estructurado, switches administrables, WiFi empresarial, fibra óptica y enlaces punto a punto.',
    image: '/services/redes-y-wifi.png',
    href: '/servicios/redes',
    cta: 'Ver redes',
    Icon: Wifi,
  },
  {
    title: 'Soporte Técnico',
    description:
      'Mantenimiento preventivo, reparación de equipos, expansión de sistemas y configuración profesional.',
    image: '/services/soporte-tecnico.png',
    href: '/servicios/soporte',
    cta: 'Solicitar soporte',
    Icon: Headphones,
  },
]

export function ServiceCards() {
  return (
    <section id="servicios" className="py-16 px-4 md:px-6 max-w-7xl mx-auto">
      {/* Heading */}
      <div className="text-center mb-10">
        <span className="text-xs uppercase tracking-widest text-gray-400 border border-white/10 rounded-full px-4 py-1.5 inline-flex items-center gap-1.5 mb-4">
          ⚡ Servicios Profesionales
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Seguridad, acceso y conectividad
          <br />
          para negocios{' '}
          <span className="text-skyBlue">en Puerto Rico</span>
        </h2>
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
          Instalamos cámaras de seguridad, control de acceso, teleentry, redes
          WiFi, cableado estructurado y soporte técnico para comercios, oficinas,
          edificios e instituciones.
        </p>
      </div>

      {/* 4-card grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {SERVICES.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="group relative overflow-hidden rounded-2xl aspect-[3/4] cursor-pointer"
          >
            {/* Background image */}
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />

            {/* Dark gradient overlay — always on */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
            {/* Slightly deeper on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Card content */}
            <div className="absolute inset-0 flex flex-col justify-end p-6">
              {/* Icon badge */}
              <div className="mb-4 w-10 h-10 rounded-xl bg-deepBlue/20 border border-deepBlue/30 backdrop-blur-sm flex items-center justify-center">
                <service.Icon className="w-5 h-5 text-skyBlue" />
              </div>

              <h3 className="text-xl font-bold text-white mb-2 leading-tight">
                {service.title}
              </h3>

              <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                {service.description}
              </p>

              <Link
                href={service.href}
                className="text-skyBlue text-sm font-medium inline-flex items-center gap-1.5 hover:gap-3 transition-all duration-300"
              >
                {service.cta}
                <span>→</span>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom CTA row */}
      <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
        <p className="text-gray-400 text-sm flex items-center gap-2">
          <Shield className="w-4 h-4 text-skyBlue flex-shrink-0" />
          Más de 120 proyectos completados en Puerto Rico para negocios, escuelas, edificios e instituciones.
        </p>
      </div>
    </section>
  )
}
