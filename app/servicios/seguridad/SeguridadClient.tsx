'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { CheckCircle, MessageCircle, Shield } from 'lucide-react'

export default function SeguridadClient() {
  const services = [
    {
      title: 'CCTV / Videovigilancia',
      description:
        'Sistemas de cámaras de seguridad 4K/8MP con acceso remoto, grabación continua y detección inteligente. Marcas: Hikvision, Uniview, Dahua.',
      features: [
        'Cámaras 4K / 8MP',
        'Acceso remoto 24/7',
        'Grabación ilimitada',
        'Detección de movimiento',
        'Visión nocturna IR',
        'App móvil incluida',
      ],
      image: '/images/services/seguridad/bullet-camera.jpg', // <- CAMBIO
      overlayClass: 'bg-yellow-500/5',
      checkClass: 'text-yellow-400',
    },
    {
      title: 'Control de Acceso',
      description:
        'Gestión completa de accesos con tecnología RFID, biométrica o PIN. Control total desde tu celular con historial detallado.',
      features: [
        'Tarjetas RFID/Proximity',
        'Biométrico (huella)',
        'Códigos PIN',
        'App móvil',
        'Historial completo',
        'Alertas en tiempo real',
      ],
      image: '/images/services/seguridad/rfid-tarjetas.jpg', // <- CAMBIO
      overlayClass: 'bg-blue-500/5',
      checkClass: 'text-blue-400',
    },
    {
      title: 'Sistemas Inteligentes',
      description:
        'Cámaras con IA para reconocimiento facial, lectura de placas (LPR), conteo de personas y análisis de comportamiento.',
      features: [
        'Reconocimiento facial',
        'Lectura de placas (LPR)',
        'Conteo de personas',
        'Análisis de patrones',
        'Alertas inteligentes',
        'Integración total',
      ],
      image: '/images/services/seguridad/lpr-camera.jpg',
      overlayClass: 'bg-violet-500/5',
      checkClass: 'text-violet-400',
    },
    {
      title: 'Monitoreo Remoto',
      description:
        'Acceso completo desde cualquier lugar con apps móviles para iOS y Android. Notificaciones push en tiempo real.',
      features: [
        'Apps iOS y Android',
        'Notificaciones push',
        'Reproducción remota',
        'Control PTZ',
        'Multi-sitio',
        'Backup en nube',
      ],
      image: '/images/services/seguridad/app-movil.jpg',
      overlayClass: 'bg-green-500/5',
      checkClass: 'text-green-400',
    },
  ]

  return (
    <div className="min-h-screen bg-charcoal">
      {/* HERO */}
      <section className="relative pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-charcoal" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <div className="mx-auto mb-6 w-16 h-16 rounded-2xl bg-orange-500/15 border border-orange-500/30 flex items-center justify-center">
            <Shield className="w-8 h-8 text-orange-400" />
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            Cámaras de Seguridad y Control
            <br className="hidden md:block" />
            de Acceso para Negocios en
            <br className="hidden md:block" />
            Puerto Rico
          </h1>

          <p className="mt-6 text-gray-300 text-base md:text-lg max-w-3xl mx-auto">
            Instalación profesional de CCTV 4K, sistemas IP, cámaras solares 4G y soluciones completas
            de videovigilancia y control de acceso para empresas en toda la isla.
          </p>

          <div className="mt-8 flex items-center justify-center gap-6 text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              CCTV 4K / 8MP
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-400" />
              Control de Acceso
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-yellow-400" />
              Monitoreo Remoto
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="relative pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Nuestros Servicios de Seguridad
            </h2>
            <p className="mt-3 text-gray-300">
              Protección completa para tu empresa: CCTV, control de acceso y sistemas especializados.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="group relative bg-gradient-to-br from-slate/80 to-charcoal/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-orange-500/50 transition-all duration-300 overflow-hidden"
              >
                {/* hover overlay */}
                <div
                  className={`absolute inset-0 ${service.overlayClass} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />

                <div className="relative z-10">
                  {/* IMAGE (restaurada) */}
                  <div className="mb-6 relative h-48 rounded-xl overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority={index < 2}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-transparent" />
                  </div>

                  {/* TITLE (sin icono) */}
                  <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>

                  <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>

                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.08 + idx * 0.03 }}
                        className="flex items-center gap-2 text-gray-300 text-sm"
                      >
                        <CheckCircle className={`w-4 h-4 ${service.checkClass} flex-shrink-0`} />
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA ÚNICO debajo de los 4 cards */}
          <div className="mt-10 flex justify-center">
            <a
              href="/contacto"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600 to-orange-500 hover:opacity-95 transition-opacity shadow-lg"
            >
              <MessageCircle className="w-5 h-5" />
              Solicitar cotización
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
