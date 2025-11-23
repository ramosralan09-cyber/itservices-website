'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Lightbulb, Target, TrendingUp, Users, CheckCircle, MessageCircle, Phone, Zap, Award } from 'lucide-react';
import { ScrollColorBackground } from '@/components/shared/ScrollColorBackground';

export default function ConsultoriaPage() {
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

  const whatsappLink = "https://wa.me/19392842551?text=Hola%2C%20estoy%20interesado%20en%20una%20cotizaci%C3%B3n%20con%20IT%20Services%20%26%20Security.%20Servicio%3A%20Consultor%C3%ADa%20T%C3%A9cnica%20%7C%20Nombre%3A%20%5BEscribir%5D%20%7C%20Tel%C3%A9fono%3A%20%5Bxxx-xxx-xxxx%5D";

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
              className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-violet-600 to-blue-600 rounded-2xl mb-6 shadow-lg shadow-violet-500/30"
            >
              <Lightbulb className="w-10 h-10 text-white" />
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Consultoría IT Empresarial
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Asesoría especializada en tecnología para optimizar tu infraestructura y estrategia digital
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2 text-gray-300">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Auditorías Técnicas</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                <span>Planificación Estratégica</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                <span>Migración Cloud</span>
              </div>
            </div>
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
              Nuestros Servicios de Consultoría
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Soluciones personalizadas para impulsar tu transformación digital
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {[
              {
                icon: Target,
                title: 'Auditorías Tecnológicas',
                description: 'Evaluación completa de tu infraestructura actual, identificación de vulnerabilidades y recomendaciones de mejora.',
                features: ['Análisis de infraestructura', 'Evaluación de seguridad', 'Recomendaciones detalladas', 'Roadmap de implementación'],
                color: 'blue',
                emoji: '🎯',
                image: '/images/services/consultoria-auditoria.webp'
              },
              {
                icon: TrendingUp,
                title: 'Planificación Estratégica',
                description: 'Diseño de planes tecnológicos alineados con tus objetivos de negocio a corto, mediano y largo plazo.',
                features: ['Análisis de necesidades', 'Plan a 3-5 años', 'Presupuesto proyectado', 'KPIs definidos'],
                color: 'violet',
                emoji: '📈',
                image: '/images/services/consultoria-estrategia.webp'
              },
              {
                icon: Users,
                title: 'Gestión de Proyectos IT',
                description: 'Dirección profesional de proyectos tecnológicos desde la planificación hasta la implementación exitosa.',
                features: ['Metodología ágil', 'Control de presupuesto', 'Gestión de riesgos', 'Entrega a tiempo'],
                color: 'green',
                emoji: '👥',
                image: '/images/services/consultoria-proyectos.webp'
              },
              {
                icon: Zap,
                title: 'Optimización y Modernización',
                description: 'Mejora de sistemas existentes, migración a cloud, virtualización y actualización de infraestructura legacy.',
                features: ['Migración cloud', 'Virtualización', 'Optimización de costos', 'Automatización'],
                color: 'yellow',
                emoji: '⚡',
                image: '/images/services/consultoria-optimizacion.webp'
              },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-gradient-to-br from-slate/80 to-charcoal/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-violet-500/50 transition-all duration-300 overflow-hidden"
              >
                <div className={`absolute inset-0 bg-${service.color}-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>

                <div className="relative z-10">
                  <div className="mb-6 relative h-48 rounded-xl overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-transparent"></div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3 mt-6">
                    {service.title}
                  </h3>

                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 + idx * 0.05 }}
                        className="flex items-center gap-2 text-gray-300 text-sm"
                      >
                        <CheckCircle className={`w-4 h-4 text-${service.color}-400 flex-shrink-0`} />
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
              Nuestro Proceso de Consultoría
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: '1', label: 'Diagnóstico', desc: 'Evaluación inicial' },
                { step: '2', label: 'Análisis', desc: 'Identificación de gaps' },
                { step: '3', label: 'Propuesta', desc: 'Plan detallado' },
                { step: '4', label: 'Implementación', desc: 'Acompañamiento' },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center text-center px-4"
                >
                  <div className="w-12 h-12 bg-brandViolet-600 rounded-full flex items-center justify-center mb-4 shadow-lg">
                    <span className="text-white font-bold text-lg">{item.step}</span>
                  </div>

                  <h4 className="text-white font-semibold text-lg mb-1 drop-shadow-md">
                    {item.label}
                  </h4>

                  <p className="text-gray-300 text-sm drop-shadow-sm">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      </div>
    </ScrollColorBackground>
  );
}
