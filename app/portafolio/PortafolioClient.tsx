'use client';

import { motion } from 'framer-motion';
import { PortfolioGrid } from '@/components/portfolio/PortfolioGrid';
import {
  Briefcase,
  MessageCircle,
  Star,
  Building2,
  TrendingUp,
  Award,
} from 'lucide-react';
import { WHATSAPP_URL } from '@/lib/whatsapp';

export default function PortafolioClient() {
  return (
    <div className="min-h-screen bg-charcoal">
      <div className="py-20 bg-gradient-to-br from-slate via-charcoal to-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '40px 40px',
            }}
          ></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-deepBlue to-skyBlue rounded-2xl mb-6 shadow-lg shadow-blue-500/30"
            >
              <Briefcase className="w-10 h-10 text-white" />
            </motion.div>

            {/* H1 optimizado para SEO */}
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Portafolio de Proyectos en Puerto Rico
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
              Más de{' '}
              <span className="text-skyBlue font-bold">
                120 proyectos completados
              </span>{' '}
              en toda la isla. Desde pequeños negocios hasta instalaciones
              gubernamentales y educativas.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12">
              {[
                {
                  icon: Building2,
                  label: 'Proyectos',
                  value: '120+',
                  color: 'text-blue-400',
                  bgColor: 'bg-blue-500/10',
                },
                {
                  icon: TrendingUp,
                  label: 'Años de Experiencia',
                  value: '12+',
                  color: 'text-green-400',
                  bgColor: 'bg-green-500/10',
                },
                {
                  icon: Award,
                  label: 'Satisfacción',
                  value: '98%',
                  color: 'text-orange-400',
                  bgColor: 'bg-orange-500/10',
                },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="p-6 bg-gradient-to-br from-slate/80 to-charcoal/80 backdrop-blur-sm rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-all"
                >
                  <div
                    className={`w-12 h-12 ${stat.bgColor} rounded-xl flex items-center justify-center mx-auto mb-4`}
                  >
                    <stat.icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                  <p className="text-3xl font-bold text-white mb-1">
                    {stat.value}
                  </p>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <PortfolioGrid />
        </div>
      </div>

      <section className="py-16 bg-gradient-to-br from-blue-600 via-violet-600 to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-shimmer"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
              <Star className="w-4 h-4 text-white" />
              <span className="text-white font-semibold text-sm">
                Únete a Nuestros Clientes
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              ¿Listo para tu próximo proyecto?
            </h2>
            <p className="text-white/90 text-lg md:text-xl mb-8">
              Más de 120 clientes satisfechos confían en nosotros en toda la
              isla.
            </p>

            <div className="flex justify-center">
              <motion.a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-all shadow-2xl inline-flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Solicitar Cotización
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
