'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Shield, Camera, Network, DoorOpen, MessageCircle, ArrowRight } from 'lucide-react';
import { WHATSAPP_URL } from '@/lib/whatsapp';

export function Hero() {
  return (
    <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden">
      {/* Glow / fondo */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-charcoal to-navy opacity-80" />
      <div className="absolute -top-40 -right-32 w-[480px] h-[480px] bg-skyBlue/30 blur-3xl rounded-full" />
      <div className="absolute -bottom-40 -left-32 w-[420px] h-[420px] bg-deepBlue/40 blur-3xl rounded-full" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Antes era grid con 2 columnas, ahora 1 sola y ancho controlado */}
        <div className="grid gap-12 items-center max-w-4xl">
          {/* Texto principal */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-400/40 mb-5">
              <Shield className="w-4 h-4 text-emerald-400" />
              <span className="text-xs font-semibold text-emerald-200">
                Especialistas en seguridad y redes para negocios en Puerto Rico
              </span>
            </div>

            {/* H1 SEO principal */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-5">
              Cámaras de seguridad, control de acceso y redes{' '}
              <span className="text-skyBlue">para tu negocio en Puerto Rico</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-6 leading-relaxed">
              Instalamos <strong className="text-white font-semibold">CCTV 4K</strong>,{' '}
              <strong className="text-white font-semibold">cámaras solares 4G</strong>,{' '}
              <strong className="text-white font-semibold">imanes y control de acceso</strong>,
              además de <strong className="text-white font-semibold">redes empresariales y WiFi profesional</strong>.
              Más de 12 años protegiendo comercios, oficinas médicas, panaderías y empresas en toda la isla.
            </p>

            {/* Chips de servicios */}
            <div className="flex flex-wrap gap-2 mb-8">
              {[
                { icon: Camera, label: 'Cámaras 4K y solares 4G' },
                { icon: DoorOpen, label: 'Control de acceso y TeleEntry' },
                { icon: Network, label: 'Redes empresariales y WiFi' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate/80 border border-slate-600"
                >
                  <item.icon className="w-4 h-4 text-skyBlue" />
                  <span className="text-xs font-medium text-gray-200">{item.label}</span>
                </div>
              ))}
            </div>

            {/* CTA principal */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold shadow-lg shadow-blue-500/40 hover:from-blue-600 hover:to-blue-700 transition-all"
              >
                Solicitar cotización
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/60 text-emerald-100 font-semibold hover:bg-emerald-500/20 transition-all"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Hablar por WhatsApp
              </a>
            </div>

            {/* Confianza / métricas */}
            <div className="flex flex-wrap gap-6 text-sm text-gray-400">
              <div>
                <p className="text-white font-semibold">12+ años</p>
                <p>de experiencia en seguridad y redes</p>
              </div>
              <div>
                <p className="text-white font-semibold">120+ proyectos</p>
                <p>para negocios en toda la isla</p>
              </div>
              <div>
                <p className="text-white font-semibold">Cobertura completa</p>
                <p>Oeste, Norte, Sur, Centro y área metro</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
