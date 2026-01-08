"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Camera,
  Key,
  Wifi,
  CheckCircle2,
  MessageCircle,
  Sun,
  BatteryCharging,
  Signal,
  MapPin,
  Zap,
  ArrowRight,
} from "lucide-react";

const whatsappLink =
  "https://wa.me/19392844351?text=Hola%2C%20quiero%20una%20cotizaci%C3%B3n%20para%20c%C3%A1maras%20y%2Fo%20control%20de%20acceso.";

const services = [
  {
    title: "CCTV / Videovigilancia",
    desc: "Sistemas de cámaras de seguridad 4K/8MP con acceso remoto, grabación continua y detección inteligente. Marcas: Hikvision, Uniview, Dahua.",
    icon: Camera,
    color: "blue",
    benefits: [
      "Cámaras 4K / 8MP",
      "Acceso remoto 24/7",
      "Grabación ilimitada",
      "Detección de movimiento",
      "Visión nocturna IR",
      "App móvil incluida",
    ],
    img: "/images/seguridad/cctv.jpg",
  },
  {
    title: "Control de Acceso",
    desc: "Gestión completa de accesos con tecnología RFID, biométrica o PIN. Control total desde tu celular con historial detallado.",
    icon: Key,
    color: "cyan",
    benefits: [
      "Tarjetas RFID/Proximity",
      "Biométrico (huella)",
      "Códigos PIN",
      "App móvil",
      "Historial completo",
      "Alertas en tiempo real",
    ],
    img: "/images/seguridad/acceso.jpg",
  },
  {
    title: "Sistemas Inteligentes",
    desc: "Cámaras con IA para reconocimiento facial, lectura de placas (LPR), conteo de personas y análisis de comportamiento.",
    icon: Shield,
    color: "purple",
    benefits: [
      "Reconocimiento facial",
      "Lectura de placas (LPR)",
      "Conteo de personas",
      "Análisis de patrones",
      "Alertas inteligentes",
      "Integración total",
    ],
    img: "/images/seguridad/ia.jpg",
  },
  {
    title: "Monitoreo Remoto",
    desc: "Acceso completo desde cualquier lugar con apps móviles para iOS y Android. Notificaciones push en tiempo real.",
    icon: Wifi,
    color: "green",
    benefits: [
      "Apps iOS y Android",
      "Notificaciones push",
      "Reproducción remota",
      "Control PTZ",
      "Multi-sitio",
      "Backup en nube",
    ],
    img: "/images/seguridad/monitoreo.jpg",
  },
];

export default function SeguridadClient() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-[#07131f]" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute -top-48 left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-blue-600 blur-[140px]" />
          <div className="absolute top-40 left-1/2 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-orange-500 blur-[160px] opacity-40" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 pt-20 pb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-500/20 ring-1 ring-yellow-500/30"
          >
            <Shield className="h-8 w-8 text-yellow-400" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl"
          >
            Cámaras de Seguridad y Control <br className="hidden md:block" />
            de Acceso para Negocios en <br className="hidden md:block" />
            Puerto Rico
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mx-auto mt-6 max-w-3xl text-lg text-gray-300"
          >
            Instalación profesional de CCTV 4K, sistemas IP, cámaras solares 4G y
            soluciones completas de videovigilancia y control de acceso para
            empresas en toda la isla.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-8 flex flex-wrap justify-center gap-3 text-sm text-gray-300"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 ring-1 ring-white/10">
              <span className="h-2 w-2 rounded-full bg-green-400" />
              CCTV 4K / 8MP
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 ring-1 ring-white/10">
              <span className="h-2 w-2 rounded-full bg-blue-400" />
              Control de Acceso
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 ring-1 ring-white/10">
              <span className="h-2 w-2 rounded-full bg-yellow-400" />
              Monitoreo Remoto
            </span>
          </motion.div>
        </div>
      </section>

      {/* SERVICIOS + BENEFICIOS */}
      <section className="bg-[#07131f]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          {/* ===========================
              SERVICIOS (4 CARDS)
          =========================== */}
          <div className="text-center">
            <h2 className="text-4xl font-bold">Nuestros Servicios de Seguridad</h2>
            <p className="mt-3 text-gray-300">
              Protección completa para tu empresa: CCTV, control de acceso y sistemas
              especializados.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {services.map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: idx * 0.05 }}
                className="group relative overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-70"
                    style={{ backgroundImage: `url(${service.img})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07131f] via-[#07131f]/40 to-transparent" />
                </div>

                <div className="p-8">
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-xl bg-${service.color}-500/20 ring-1 ring-${service.color}-500/30`}
                    >
                      <service.icon className={`h-5 w-5 text-${service.color}-300`} />
                    </div>
                    <h3 className="text-2xl font-semibold">{service.title}</h3>
                  </div>

                  <p className="mt-4 text-gray-300">{service.desc}</p>

                  <ul className="mt-6 space-y-2 text-sm text-gray-300">
                    {service.benefits.map((b) => (
                      <li key={b} className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-400" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA único (después de ver los 4 servicios) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-10 text-center"
          >
            <motion.a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center gap-2 px-10 py-4 bg-gradient-to-r from-[#0B5FFF] to-[#FF7A00] text-white rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl hover:shadow-orange-500/40 transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              Solicitar cotización
            </motion.a>
            <p className="text-gray-400 text-sm mt-3">
              Cuéntanos qué necesitas y te orientamos rápido por WhatsApp.
            </p>
          </motion.div>

          {/* ===========================
              BENEFICIOS GENERALES
          =========================== */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 rounded-3xl bg-gradient-to-r from-blue-900/40 via-purple-900/40 to-indigo-900/40 p-10 ring-1 ring-white/10"
          >
            <h3 className="text-center text-3xl font-bold">
              ¿Por Qué Elegir Nuestros Sistemas?
            </h3>

            <div className="mt-10 grid gap-8 md:grid-cols-4">
              <div className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/10">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <p className="mt-3 font-semibold">Garantía Total</p>
                <p className="text-sm text-gray-300">1 año mano de obra</p>
              </div>

              <div className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/10">
                  <Camera className="h-6 w-6 text-white" />
                </div>
                <p className="mt-3 font-semibold">Calidad 4K</p>
                <p className="text-sm text-gray-300">Imagen ultra nítida</p>
              </div>

              <div className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/10">
                  <Wifi className="h-6 w-6 text-white" />
                </div>
                <p className="mt-3 font-semibold">Acceso Remoto</p>
                <p className="text-sm text-gray-300">Desde cualquier lugar</p>
              </div>

              <div className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/10">
                  <CheckCircle2 className="h-6 w-6 text-white" />
                </div>
                <p className="mt-3 font-semibold">Instalación Pro</p>
                <p className="text-sm text-gray-300">Técnicos certificados</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===========================
          SISTEMAS SOLARES 4G
      =========================== */}
      <section className="bg-[#0a1d2e]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-yellow-500/10 px-4 py-2 text-sm font-medium text-yellow-300 ring-1 ring-yellow-400/20">
              <Zap className="h-4 w-4" />
              Solución Especializada
            </span>
            <h2 className="mt-6 text-5xl font-extrabold">Sistemas Solares y 4G</h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-300">
              Vigilancia completamente autónoma para lugares sin energía eléctrica o
              conexión a internet.
            </p>
          </div>

          <div className="mt-14 grid gap-10 md:grid-cols-2">
            {/* Componentes */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl bg-white/5 p-8 ring-1 ring-white/10"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-500/20 ring-1 ring-yellow-500/30">
                  <Sun className="h-5 w-5 text-yellow-300" />
                </div>
                <h3 className="text-2xl font-semibold">Componentes del Sistema</h3>
              </div>

              <ul className="mt-6 space-y-3 text-gray-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-400" />
                  Panel solar dimensionado según consumo
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-400" />
                  Baterías de ciclo profundo (autonomía 3-5 días)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-400" />
                  Conectividad 4G/LTE para acceso remoto
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-400" />
                  NVR de bajo consumo energético
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-400" />
                  Cámaras IP PoE eficientes
                </li>
              </ul>
            </motion.div>

            {/* Ideal para */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl bg-white/5 p-8 ring-1 ring-white/10"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/20 ring-1 ring-blue-500/30">
                  <Signal className="h-5 w-5 text-blue-300" />
                </div>
                <h3 className="text-2xl font-semibold">Ideal Para</h3>
              </div>

              <ul className="mt-6 space-y-3 text-gray-300">
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-yellow-300" />
                  Construcciones en desarrollo
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-yellow-300" />
                  Fincas y terrenos rurales
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-yellow-300" />
                  Lotes sin infraestructura
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-yellow-300" />
                  Instalaciones temporales
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-yellow-300" />
                  Zonas con energía inestable
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Key stats */}
          <div className="mt-12 rounded-2xl bg-gradient-to-r from-blue-900/40 via-purple-900/40 to-indigo-900/40 p-8 ring-1 ring-white/10">
            <div className="grid gap-6 md:grid-cols-3 text-center">
              <div>
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/10">
                  <Sun className="h-6 w-6 text-yellow-300" />
                </div>
                <p className="mt-2 font-semibold">100% Autónomo</p>
                <p className="text-sm text-gray-300">Sin dependencia de red eléctrica</p>
              </div>
              <div>
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/10">
                  <Wifi className="h-6 w-6 text-blue-300" />
                </div>
                <p className="mt-2 font-semibold">Acceso Remoto</p>
                <p className="text-sm text-gray-300">Monitoreo desde cualquier lugar</p>
              </div>
              <div>
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/10">
                  <BatteryCharging className="h-6 w-6 text-green-300" />
                </div>
                <p className="mt-2 font-semibold">Alta Autonomía</p>
                <p className="text-sm text-gray-300">3–5 días sin luz solar</p>
              </div>
            </div>
          </div>

          {/* CTA solar */}
          <div className="mt-12 flex flex-col items-center justify-center gap-3 text-center">
            <motion.a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#0B5FFF] to-[#FF7A00] px-8 py-4 text-lg font-semibold text-white shadow-xl hover:shadow-2xl hover:shadow-orange-500/40"
            >
              <Zap className="h-5 w-5" />
              Solicitar Evaluación de Sistema Solar
              <ArrowRight className="h-5 w-5" />
            </motion.a>
            <p className="text-sm text-gray-400">
              Evaluación técnica gratuita · Instalación profesional · Garantía incluida
            </p>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-[#07131f]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="rounded-3xl bg-gradient-to-r from-blue-900/40 via-indigo-900/40 to-slate-900/40 p-12 text-center ring-1 ring-white/10">
            <h2 className="text-4xl font-extrabold">
              ¿Listo para tu próximo proyecto de seguridad en Puerto Rico?
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-300">
              Diseñamos e instalamos sistemas de cámaras de seguridad, control de acceso y
              monitoreo remoto a la medida de tu negocio. Revisamos tu caso, te orientamos y
              preparamos una propuesta completa sin compromiso.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <motion.a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-500 px-8 py-4 font-semibold text-white shadow-xl hover:bg-green-400"
              >
                <MessageCircle className="h-5 w-5" />
                Solicitar cotización
              </motion.a>

              <motion.a
                href="/portafolio"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/5 px-8 py-4 font-semibold text-white ring-1 ring-white/10 hover:bg-white/10"
              >
                Ver proyectos realizados
                <ArrowRight className="h-5 w-5" />
              </motion.a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
