'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Network, Shield, Lightbulb, Headphones, ArrowRight, Zap } from 'lucide-react';
import { BorderBeam } from '@/components/ui/border-beam';

const categories = [
  {
    icon: Network,
    title: 'Redes',
    description: 'Infraestructura, cableado estructurado y conectividad empresarial',
    href: '/servicios/redes',
    image: '/images/services/service-redes.webp',
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/30',
    buttonClasses: 'from-blue-500 to-sky-400',
    shadowColor: 'md:hover:shadow-blue-500/50',
  },
  {
    icon: Shield,
    title: 'Cámaras / Accesos',
    description: 'Videovigilancia profesional y control de acceso para negocios',
    href: '/servicios/seguridad',
    image: '/images/services/service-seguridad.webp',
    color: 'text-yellow-400',
    bgColor: 'bg-yellow-500/10',
    borderColor: 'border-yellow-500/30',
    buttonClasses: 'from-yellow-500 to-amber-400',
    shadowColor: 'md:hover:shadow-yellow-500/50',
  },
  {
    icon: Lightbulb,
    title: 'Consultoría',
    description: 'Asesoría técnica y diseño de soluciones a la medida',
    href: '/servicios/consultoria',
    image: '/images/services/service-consultoria.webp',
    color: 'text-violet-400',
    bgColor: 'bg-violet-500/10',
    borderColor: 'border-violet-500/30',
    buttonClasses: 'from-violet-500 to-fuchsia-500',
    shadowColor: 'md:hover:shadow-violet-500/50',
  },
  {
    icon: Headphones,
    title: 'Soporte Técnico',
    description: 'Mantenimiento, soporte y continuidad operativa 24/7',
    href: '/servicios/soporte',
    image: '/images/services/service-soporte.webp',
    color: 'text-green-400',
    bgColor: 'bg-green-500/10',
    borderColor: 'border-green-500/30',
    buttonClasses: 'from-emerald-500 to-lime-400',
    shadowColor: 'md:hover:shadow-emerald-500/50',
  },
];

export function CategoryTabs() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full mb-6"
          >
            <Zap className="w-4 h-4 text-blue-400" />
            <span className="text-blue-400 font-semibold text-sm">
              Servicios Profesionales
            </span>
          </motion.div>

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Soluciones diseñadas para proteger
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">
              lo que más importa
            </span>
          </h2>

          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mt-4">
            Diseñamos, instalamos y mantenemos sistemas tecnológicos para
            empresas en Puerto Rico
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={category.href}>
                <motion.div
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                  className={`
                    group relative h-full min-h-[320px]
                    rounded-2xl overflow-hidden
                    border ${category.borderColor}
                    bg-slate/80 backdrop-blur-sm
                    hover:border-opacity-100 border-opacity-30
                    shadow-lg shadow-black/40
                    md:hover:shadow-2xl ${category.shadowColor}
                    transition-all duration-300 cursor-pointer
                  `}
                >
                  <BorderBeam duration={6} lightColor="#0B5FFF" />
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover opacity-45 group-hover:opacity-60 transition-opacity duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />

                  <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/70 via-[#020617]/80 to-[#020617]/95" />

                  <div className="relative z-10 h-full px-6 py-6 flex flex-col justify-center items-center text-center">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                      {category.title}
                    </h3>

                    <p className="text-gray-100 text-sm md:text-base max-w-xs">
                      {category.description}
                    </p>

                    <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-white/80">
                      Ver detalles <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 mb-4">
            ¿No estás seguro qué solución necesitas?
          </p>

          <Link href="/contacto">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate/80 backdrop-blur-sm border border-gray-600 text-white rounded-xl font-semibold hover:border-blue-500 transition-all"
            >
              Habla con un experto
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
