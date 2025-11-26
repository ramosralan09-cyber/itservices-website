'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Shield,
  Camera,
  Eye,
  Lock,
  Smartphone,
  CheckCircle,
  MessageCircle,
  Zap,
  Sun,
  Wifi,
  Battery,
} from 'lucide-react';
import { ScrollColorBackground } from '@/components/shared/ScrollColorBackground';

export default function SeguridadClient() {
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
    'https://wa.me/19392842551?text=Hola%2C%20estoy%20interesado%20en%20una%20cotizaci%C3%B3n%20con%20IT%20Services%20%26%20Security.%20Servicio%3A%20Seguridad%20CCTV%20%7C%20Nombre%3A%20%5BEscribir%5D%20%7C%20Tel%C3%A9fono%3A%20%5Bxxx-xxx-xxxx%5D';

  return (
    <ScrollColorBackground sections={colorSections}>
      <div className="min-h-screen">
        {/* ===========================
            HERO SECTION
        ============================ */}
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
                className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl mb-6 shadow-lg shadow-yellow-500/30"
              >
                <Shield className="w-10 h-10 text-white" />
              </motion.div>

              {/* 🔥 SEO OPTIMIZED H1 */}
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Cámaras de Seguridad y Control de Acceso para Negocios en Puerto Rico
              </h1>

              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Instalación profesional de CCTV 4K, sistemas IP, cámaras solares 4G y
                soluciones completas de videovigilancia y control de acceso para empresas
                en toda la isla.
              </p>

              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <div className="flex items-center gap-2 text-gray-300">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                  <span>CCTV 4K / 8MP</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                  <span>Control de Acceso</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                  <span>Monitoreo Remoto</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ===========================
            SERVICIOS PRINCIPALES
        ============================ */}
        <section className="py-20 relative overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Nuestros Servicios de Seguridad
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Protección completa para tu empresa: CCTV, control de acceso y sistemas
                especializados.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {[
                {
                  icon: Camera,
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
                  color: 'yellow',
                  image: '/images/services/seguridad/bullet-camera.jpg',
                },
                {
                  icon: Lock,
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
                  color: 'blue',
                  image: '/images/services/seguridad/rfid-tarjetas.jpg',
                },
                {
                  icon: Eye,
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
                  color: 'violet',
                  image: '/images/services/seguridad/lpr-camera.jpg',
                },
                {
                  icon: Smartphone,
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
                  color: 'green',
                  image: '/images/services/seguridad/app-movil.jpg',
                },
              ].map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative bg-gradient-to-br from-slate/80 to-charcoal/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-orange-500/50 transition-all duration-300 overflow-hidden"
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

            {/* ===========================
                BENEFICIOS GENERALES
            ============================ */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-violet-600/20 border border-blue-500/30 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                ¿Por Qué Elegir Nuestros Sistemas?
              </h3>
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  { icon: Shield, label: 'Garantía Total', desc: '1 año mano de obra' },
                  { icon: Eye, label: 'Calidad 4K', desc: 'Imagen ultra nítida' },
                  {
                    icon: Smartphone,
                    label: 'Acceso Remoto',
                    desc: 'Desde cualquier lugar',
                  },
                  {
                    icon: CheckCircle,
                    label: 'Instalación Pro',
                    desc: 'Técnicos certificados',
                  },
                ].map((benefit, idx) => (
                  <div key={idx} className="text-center">
                    <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <benefit.icon className="w-6 h-6 text-orange-400" />
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

        {/* ===========================
            SISTEMAS SOLARES 4G
        ============================ */}
        <section className="py-20 relative overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full mb-6">
                <Zap className="w-4 h-4 text-yellow-400" />
                <span className="text-yellow-400 font-semibold text-sm">
                  Solución Especializada
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Sistemas Solares y 4G
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Vigilancia completamente autónoma para lugares sin energía eléctrica o
                conexión a internet.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="group relative bg-gradient-to-br from-slate/80 to-charcoal/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-yellow-500/50 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Sun className="w-6 h-6 text-yellow-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Componentes del Sistema
                  </h3>
                </div>

                <ul className="space-y-3">
                  {[
                    'Panel solar dimensionado según consumo',
                    'Baterías de ciclo profundo (autonomía 3-5 días)',
                    'Conectividad 4G/LTE para acceso remoto',
                    'NVR de bajo consumo energético',
                    'Cámaras IP PoE eficientes',
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3 text-gray-300"
                    >
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="group relative bg-gradient-to-br from-slate/80 to-charcoal/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Zap className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Ideal Para</h3>
                </div>

                <ul className="space-y-3">
                  {[
                    { text: 'Construcciones en desarrollo', emoji: '🏗️' },
                    { text: 'Fincas y terrenos rurales', emoji: '🌾' },
                    { text: 'Lotes sin infraestructura', emoji: '📍' },
                    { text: 'Instalaciones temporales', emoji: '⏱️' },
                    { text: 'Zonas con energía inestable', emoji: '⚡' },
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3 text-gray-300"
                    >
                      <span className="text-xl flex-shrink-0">{item.emoji}</span>
                      <span>{item.text}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 border border-blue-500/30 rounded-2xl p-6 mb-8"
            >
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <Sun className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                  <h4 className="text-white font-semibold mb-1">100% Autónomo</h4>
                  <p className="text-gray-400 text-sm">
                    Sin dependencia de red eléctrica
                  </p>
                </div>
                <div>
                  <Wifi className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                  <h4 className="text-white font-semibold mb-1">Acceso Remoto</h4>
                  <p className="text-gray-400 text-sm">
                    Monitoreo desde cualquier lugar
                  </p>
                </div>
                <div>
                  <Battery className="w-8 h-8 text-green-400 mx-auto mb-2" />
                  <h4 className="text-white font-semibold mb-1">Alta Autonomía</h4>
                  <p className="text-gray-400 text-sm">
                    3–5 días sin luz solar
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <motion.a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#0B5FFF] to-[#FF7A00] text-white rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl hover:shadow-orange-500/50 transition-all"
              >
                <Zap className="w-5 h-5" />
                Solicitar Evaluación de Sistema Solar
              </motion.a>

              <p className="text-gray-400 text-sm mt-4">
                Evaluación técnica gratuita • Instalación profesional • Garantía incluida
              </p>
            </motion.div>
          </div>
        </section>

        {/* ===========================
            CTA FINAL SEO + INTERLINKING
        ============================ */}
        <section className="py-20 bg-black/40">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                ¿Listo para tu próximo proyecto de seguridad en Puerto Rico?
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Diseñamos e instalamos sistemas de cámaras de seguridad, control de
                acceso y monitoreo remoto a la medida de tu negocio. Revisamos tu caso,
                te orientamos y preparamos una propuesta completa sin compromiso.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contacto"
                  className="inline-flex items-center justify-center px-8 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-semibold shadow-lg shadow-emerald-500/30 transition-all"
                >
                  Solicitar cotización
                </Link>
                <Link
                  href="/portafolio"
                  className="inline-flex items-center justify-center px-8 py-3 rounded-xl border border-gray-600 text-gray-100 hover:border-orange-400 hover:text-orange-200 transition-all"
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
