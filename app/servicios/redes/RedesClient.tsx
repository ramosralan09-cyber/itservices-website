'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Network,
  Wifi,
  Cable,
  Server,
  CheckCircle,
  ArrowRight,
  Phone,
  MessageCircle,
  Zap,
  Shield,
} from 'lucide-react';
import { ScrollColorBackground } from '@/components/shared/ScrollColorBackground';

export default function RedesClient() {
  const colorSections = [
    { offset: 0, color: '#050505' }, // Pure black - Hero top
    { offset: 0.12, color: '#0a0a12' }, // Very dark
    { offset: 0.25, color: '#0f1419' }, // Dark navy
    { offset: 0.40, color: '#0f172a' }, // Slate navy
    { offset: 0.60, color: '#1e293b' }, // Medium navy
    { offset: 0.75, color: '#1e3a5f' }, // Blue navy
    { offset: 0.88, color: '#0c4a6e' }, // Deep blue
    { offset: 1, color: '#0369a1' }, // Strong blue - CTA
  ];

  const whatsappLink =
    'https://wa.me/19392842551?text=Hola%2C%20estoy%20interesado%20en%20una%20cotizaci%C3%B3n%20con%20IT%20Services%20%26%20Security.%20Servicio%3A%20Redes%20Empresariales%20%7C%20Nombre%3A%20%5BEscribir%5D%20%7C%20Tel%C3%A9fono%3A%20%5Bxxx-xxx-xxxx%5D';

  return (
    <ScrollColorBackground sections={colorSections}>
      <div className="min-h-screen">
        {/* HERO */}
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
                className="inline-flex items-center justify-center w-20 h-20 bg-blue-500 rounded-2xl mb-6 shadow-[0_15px_30px_-10px_rgba(59,130,246,0.6)]"
              >
                <Network className="w-10 h-10 text-white" />
              </motion.div>

              {/* H1 optimizado para SEO */}
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Redes Empresariales y WiFi Profesional en Puerto Rico
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Diseño e instalación de infraestructura de red, cableado estructurado y
                WiFi empresarial para negocios en toda la isla.
              </p>

              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <div className="flex items-center gap-2 text-gray-300">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span>Certificación TIA/EIA</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                  <span>WiFi Empresarial</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                  <span>Fibra Óptica</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SERVICIOS PRINCIPALES */}
        <section className="py-20 relative overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Nuestros Servicios de Red
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Desde cableado estructurado hasta soluciones WiFi empresariales para
                negocios en Puerto Rico.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {[
                {
                  icon: Cable,
                  title: 'Cableado Estructurado',
                  description:
                    'Instalación profesional de cables Cat6/Cat6a certificados según normas TIA/EIA. Incluye racks, patch panels y documentación completa.',
                  features: [
                    'Certificación TIA/EIA',
                    'Documentación completa',
                    'Patch cords incluidos',
                    'Garantía 25 años',
                  ],
                  color: 'blue',
                  emoji: '🔌',
                  image: '/images/services/redes/patch-cords.jpg',
                },
                {
                  icon: Wifi,
                  title: 'Redes WiFi Empresariales',
                  description:
                    'Diseño e implementación de redes inalámbricas con cobertura completa. Access Points profesionales (Ubiquiti, Ruckus, TP-Link).',
                  features: [
                    'Site survey incluido',
                    'Múltiples SSIDs',
                    'Roaming automático',
                    'Gestión centralizada',
                  ],
                  color: 'violet',
                  emoji: '📡',
                  image: '/images/services/redes/equipos-tecnologicos.jpg',
                },
                {
                  icon: Server,
                  title: 'Switches y Routers',
                  description:
                    'Configuración de equipos de red empresariales: switches managed/unmanaged, routers, firewalls y balanceadores de carga.',
                  features: [
                    'VLANs configuradas',
                    'QoS optimizado',
                    'Redundancia',
                    'Monitoreo 24/7',
                  ],
                  color: 'green',
                  emoji: '🖥️',
                  image: '/images/services/redes/diseno-infraestructura.jpg',
                },
                {
                  icon: Shield,
                  title: 'Fibra Óptica',
                  description:
                    'Instalación de enlaces de fibra óptica para backbone de red. Fusiones certificadas y pruebas con OTDR.',
                  features: [
                    'Monomodo/multimodo',
                    'Fusiones certificadas',
                    'Pruebas OTDR',
                    'Documentación técnica',
                  ],
                  color: 'yellow',
                  emoji: '💡',
                  image: '/images/services/redes/fibra-optica.jpg',
                },
              ].map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative bg-gradient-to-br from-slate/80 to-charcoal/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 overflow-hidden"
                >
                  <div
                    className={`absolute inset-0 bg-${service.color}-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  ></div>

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

                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.1 + idx * 0.05 }}
                          className="flex items-center gap-2 text-gray-300 text-sm"
                        >
                          <CheckCircle
                            className={`w-4 h-4 text-${service.color}-400 flex-shrink-0`}
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

            {/* BENEFICIOS */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-violet-600/20 border border-blue-500/30 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                Beneficios de Nuestras Soluciones
              </h3>
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  {
                    icon: Zap,
                    label: 'Alto Rendimiento',
                    desc: 'Velocidades de hasta 10Gbps',
                  },
                  {
                    icon: Shield,
                    label: 'Seguro',
                    desc: 'VLANs y firewall configurados',
                  },
                  {
                    icon: CheckCircle,
                    label: 'Certificado',
                    desc: 'Cumple normas TIA/EIA',
                  },
                  {
                    icon: Server,
                    label: 'Escalable',
                    desc: 'Crece con tu empresa',
                  },
                ].map((benefit, idx) => (
                  <div key={idx} className="text-center">
                    <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <benefit.icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <h4 className="text-white font-semibold mb-1">
                      {benefit.label}
                    </h4>
                    <p className="text-gray-400 text-sm">{benefit.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA FINAL SEO + INTERLINKING */}
        <section className="py-20 bg-black/40">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                ¿Listo para optimizar la red de tu negocio en Puerto Rico?
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Diseñamos e instalamos redes empresariales, WiFi profesional y enlaces de
                fibra óptica pensados para la operación diaria de tu empresa. Te
                acompañamos desde el diseño hasta la puesta en marcha.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contacto"
                  className="inline-flex items-center justify-center px-8 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-semibold shadow-lg shadow-emerald-500/30 transition-all"
                >
                  Solicitar cotización
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <Link
                  href="/portafolio"
                  className="inline-flex items-center justify-center px-8 py-3 rounded-xl border border-gray-600 text-gray-100 hover:border-blue-400 hover:text-blue-200 transition-all"
                >
                  Ver proyectos realizados
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </ScrollColorBackground>
  );
}
