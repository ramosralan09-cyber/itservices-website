'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Headphones,
  Clock,
  Monitor,
  Wrench,
  CheckCircle,
  MessageCircle,
  Phone,
  Shield,
  Zap,
} from 'lucide-react';
import Link from 'next/link';
import { ScrollColorBackground } from '@/components/shared/ScrollColorBackground';

export default function SoporteClient() {
  const colorSections = [
    { offset: 0, color: '#050505' },      // Pure black - Hero top
    { offset: 0.12, color: '#0a0a12' },   // Very dark
    { offset: 0.25, color: '#0f1419' },   // Dark navy
    { offset: 0.40, color: '#0f172a' },   // Slate navy
    { offset: 0.60, color: '#1e293b' },   // Medium navy
    { offset: 0.75, color: '#1e3a5f' },   // Blue navy
    { offset: 0.88, color: '#0c4a6e' },   // Deep blue
    { offset: 1, color: '#0369a1' },      // Strong blue - CTA
  ];

  const whatsappLink =
    "https://wa.me/19392842551?text=Hola%2C%20estoy%20interesado%20en%20una%20cotizaci%C3%B3n%20con%20IT%20Services%20%26%20Security.%20Servicio%3A%20Soporte%20T%C3%A9cnico%20%7C%20Nombre%3A%20%5BEscribir%5D%20%7C%20Tel%C3%A9fono%3A%20%5Bxxx-xxx-xxxx%5D";

  return (
    <ScrollColorBackground sections={colorSections}>
      <div className="min-h-screen">
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="container mx-auto px-6 relative z-10 py-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto text-center"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
                className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl mb-6 shadow-lg shadow-green-500/30"
              >
                <Headphones className="w-10 h-10 text-white" />
              </motion.div>

              {/* H1 optimizado para SEO */}
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Soporte Técnico para Sistemas de Seguridad y Redes en Puerto Rico
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Mantenimiento y asistencia técnica cuando la necesites: remoto, en sitio o preventivo,
                para mantener tus cámaras, redes y equipos funcionando al 100%.
              </p>

              <div className="flex flex-wrap justify-center gap-6 text-sm mb-8">
                <div className="flex items-center gap-2 text-gray-300">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span>Respuesta en 24h</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                  <span>Soporte Remoto</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                  <span>Visitas Programadas</span>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-lg"
              >
                <Shield className="w-4 h-4 text-blue-400" />
                <Link
                  href="/garantias"
                  className="text-blue-400 text-sm hover:text-blue-300 transition-colors"
                >
                  Ver nuestras garantías y tiempos de respuesta →
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section className="py-20 relative overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                3 Modalidades de Asistencia
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Elige el tipo de soporte que mejor se adapte a tus necesidades
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {[
                {
                  icon: Monitor,
                  title: 'Soporte Remoto',
                  description:
                    'Diagnóstico y resolución de problemas sin necesidad de visita. Más rápido y económico para la mayoría de casos.',
                  features: [
                    'Acceso seguro',
                    'Resolución inmediata',
                    'Sin costo de viaje',
                    'Horario flexible',
                  ],
                  color: 'blue',
                  emoji: '💻',
                  badge: 'Más Rápido',
                  image: '/images/services/soporte-remoto.webp',
                },
                {
                  icon: Wrench,
                  title: 'Soporte en Sitio',
                  description:
                    'Visitas técnicas cuando se requiere intervención física. Instalación, configuración o reparaciones.',
                  features: [
                    'Técnico certificado',
                    'Herramientas incluidas',
                    'Diagnóstico completo',
                    'Reparación inmediata',
                  ],
                  color: 'green',
                  emoji: '🔧',
                  badge: 'Profesional',
                  image: '/images/services/soporte-sitio.webp',
                },
                {
                  icon: Clock,
                  title: 'Mantenimiento Preventivo',
                  description:
                    'Visitas programadas para mantener tu infraestructura en óptimas condiciones y prevenir fallas.',
                  features: [
                    'Visitas mensuales',
                    'Reportes detallados',
                    'Actualización firmware',
                    'Prioridad 24/7',
                  ],
                  color: 'yellow',
                  emoji: '⏰',
                  badge: 'Recomendado',
                  image: '/images/services/soporte-preventivo.webp',
                },
              ].map((support, index) => (
                <motion.div
                  key={support.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative bg-gradient-to-br from-slate/80 to-charcoal/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-green-500/50 transition-all duration-300 overflow-hidden"
                >
                  <div
                    className={`absolute inset-0 bg-${support.color}-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  ></div>

                  <div className="relative z-10">
                    <div className="mb-6 relative h-48 rounded-xl overflow-hidden">
                      <Image
                        src={support.image}
                        alt={support.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-transparent"></div>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-3 mt-6">
                      {support.title}
                    </h3>

                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {support.description}
                    </p>

                    <ul className="space-y-2">
                      {support.features.map((feature, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.1 + idx * 0.05 }}
                          className="flex items-center gap-2 text-gray-300 text-sm"
                        >
                          <CheckCircle
                            className={`w-4 h-4 text-${support.color}-400 flex-shrink-0`}
                          />
                          <span>{feature}</span>
                        </motion.li>
                      ))}
                    </ul>

                    <motion.a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full px-6 py-3 bg-gradient-to-r from-[#0B5FFF] to-[#FF7A00] hover:from-blue-600 hover:to-orange-600 text-white rounded-lg font-semibold text-sm hover:shadow-lg transition-all inline-flex items-center justify-center gap-2 mt-6"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Cotizar ahora
                    </motion.a>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-violet-600/20 border border-blue-500/30 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                Tiempos de Respuesta Garantizados
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { time: '24h', label: 'Respuesta Inicial', icon: MessageCircle },
                  { time: '72h', label: 'Diagnóstico Completo', icon: Shield },
                  { time: '7d', label: 'Resolución Garantizada', icon: CheckCircle },
                ].map((item, idx) => (
                  <div key={idx} className="text-center">
                    <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <item.icon className="w-6 h-6 text-green-400" />
                    </div>
                    <p className="text-3xl font-bold text-white mb-1">{item.time}</p>
                    <p className="text-gray-400 text-sm">{item.label}</p>
                  </div>
                ))}
              </div>
              <p className="text-center text-gray-400 text-sm mt-6">
                <Link href="/garantias" className="text-blue-400 hover:text-blue-300 underline">
                  Ver detalles completos de garantías →
                </Link>
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </ScrollColorBackground>
  );
}
