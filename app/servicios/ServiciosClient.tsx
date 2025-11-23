'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import {
  Network,
  Shield,
  Lightbulb,
  Wrench,
  CheckCircle,
  ArrowRight,
  Award,
  Users,
  TrendingUp,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const whatsappLink =
  "https://wa.me/19392842551?text=Hola%2C%20estoy%20interesado%20en%20una%20cotizaci%C3%B3n%20con%20IT%20Services%20%26%20Security.%20Servicio%3A%20%5BIndicar%5D%20%7C%20Nombre%3A%20%5BEscribir%5D%20%7C%20Tel%C3%A9fono%3A%20%5Bxxx-xxx-xxxx%5D";

const categories = [
  {
    icon: Network,
    title: 'Redes y Conectividad',
    gradient: 'from-blue-500 to-violet-500',
    isRedesCard: true,
    description:
      'Diseño y despliegue de redes robustas: switching administrable, VLANs, Wi-Fi empresarial y enlaces (fibra/PTP). Instalación limpia, etiquetado y documentación.',
    services: [
      'Diseño de red (site survey, planos, VLANs)',
      'Switches administrables (PoE/PoE+)',
      'Wi-Fi de alta densidad',
      'Enlaces y backbone (fibra óptica / PTP)',
      'Monitoreo y optimización',
    ],
    brands: 'Ruijie (switches/AP), MikroTik (routers)',
    projects: '40–60 proyectos completados',
    url: '/servicios/redes',
    image: '/images/services/service-redes.webp',
    imageAlt: 'Redes y conectividad',
  },
  {
    icon: Shield,
    title: 'Sistemas de Seguridad',
    gradient: 'from-yellow-500 to-yellow-600',
    isSecurityCard: true,
    description:
      'CCTV IP (2MP–4K, PTZ, LPR), NVR y almacenamiento; control de acceso (TeleEntry, maglocks) y alarmas. Integración total para prevención y respuesta.',
    services: [
      'Cámaras IP (2MP–4K, PTZ, LPR)',
      'NVR/servidores y almacenamiento',
      'Control de acceso (teclado, RFID, biometría)',
      'Integración CCTV + acceso + alarmas',
      'Soluciones solares/4G para sitios remotos',
    ],
    brands: 'Epcom, Hikvision, Linear TeleEntry',
    projects: '45–70 proyectos completados',
    url: '/servicios/seguridad',
    image: '/images/services/service-seguridad.webp',
    imageAlt: 'Sistemas de seguridad',
  },
  {
    icon: Lightbulb,
    title: 'Consultoría Técnica',
    gradient: 'from-purple-500 to-pink-500',
    description:
      'Auditorías, diseños y BOM listos para ejecutar o licitar. Entregables claros y priorización de mejoras.',
    services: [
      'Auditoría de red / seguridad',
      'Diseño de sistemas (CAD interno) + BOM + presupuesto',
      'Asesoría de compras y estandarización',
      'Hardening básico y segmentación',
      'Capacitación',
    ],
    brands: 'Metodología profesional',
    projects: '20–30 proyectos completados',
    url: '/servicios/consultoria',
    image: '/images/services/service-consultoria.webp',
    imageAlt: 'Consultoría técnica',
  },
  {
    icon: Wrench,
    title: 'Soporte y Mantenimiento',
    gradient: 'from-green-400 to-emerald-600',
    description:
      'Soporte remoto 1–3 h, visitas 24–48 h y emergencias 1–3 h. Mantenimientos preventivos/correctivos con checklist y bitácora.',
    services: [
      'Soporte remoto y on-site',
      'Mantenimiento preventivo programado',
      'Actualizaciones, limpieza y calibración',
      'Sustitución/garantías y optimización',
      'Monitoreo de salud del sistema',
    ],
    brands: 'Soporte multi-marca',
    projects: '15–25 contratos activos',
    url: '/servicios/soporte',
    image: '/images/services/service-soporte.webp',
    imageAlt: 'Soporte y mantenimiento',
  },
];

const stats = [
  { icon: Award, label: 'Años de Experiencia', value: '12+' },
  { icon: Users, label: 'Clientes Satisfechos', value: '80+' },
  { icon: TrendingUp, label: 'Proyectos Completados', value: '120+' },
];

export default function ServiciosClient() {
  return (
    <div className="min-h-screen bg-charcoal">
      <section className="relative py-20 bg-gradient-to-br from-deepBlue via-charcoal to-slate overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-deepBlue rounded-full filter blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-skyBlue rounded-full filter blur-3xl animate-pulse" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            {/* H1 optimizado para SEO */}
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Servicios de Redes, Cámaras de Seguridad y Soporte Tecnológico en Puerto Rico
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-skyBlue to-deepBlue mt-2">
                Soluciones integrales para negocios y empresas
              </span>
            </h1>

            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Infraestructura de red, videovigilancia, control de acceso, consultoría y soporte técnico —
              todo integrado, documentado y listo para escalar en tu empresa en Puerto Rico.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="card-elevated p-6 text-center"
                >
                  <Icon className="w-8 h-8 text-skyBlue mx-auto mb-3" />
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-slate">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Nuestros Servicios
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Soluciones completas para cada necesidad de tu negocio en redes, seguridad y soporte.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <Link href={category.url}>
                    <div className="group rounded-2xl overflow-hidden card-elevated hover:-translate-y-1 hover:shadow-xl transition-all duration-300 bg-charcoal border border-white/10">
                      {/* Image banner (top only) */}
                      {category.image && (
                        <div className="relative h-48 w-full overflow-hidden">
                          <Image
                            src={category.image}
                            alt={category.imageAlt || category.title}
                            fill
                            className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                        </div>
                      )}

                      {/* Content below image */}
                      <div className="p-6 md:p-8">
                        <div className="flex items-start justify-between mb-4">
                          {category.isSecurityCard ? (
                            <div className="w-14 h-14 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center shadow-lg shadow-yellow-500/30">
                              <Icon className="w-7 h-7 text-white" />
                            </div>
                          ) : category.isRedesCard ? (
                            <div className="w-14 h-14 bg-blue-500 rounded-xl flex items-center justify-center shadow-lg shadow-[0_10px_15px_-3px_rgba(59,130,246,0.3)]">
                              <Icon className="w-7 h-7 text-white" />
                            </div>
                          ) : (
                            <div
                              className={`w-14 h-14 bg-gradient-to-br ${category.gradient} rounded-xl flex items-center justify-center shadow-lg`}
                            >
                              <Icon className="w-7 h-7 text-white" />
                            </div>
                          )}
                          <span className="text-xs text-gray-400 font-medium">
                            {category.projects}
                          </span>
                        </div>

                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-skyBlue transition-colors">
                          {category.title}
                        </h3>

                        <p className="text-gray-300 text-sm mb-4">{category.description}</p>

                        <ul className="space-y-1.5 mb-4">
                          {category.services.map((service) => (
                            <li
                              key={service}
                              className="flex items-center text-gray-300 text-sm"
                            >
                              <CheckCircle className="w-4 h-4 text-green-400 mr-2" /> {service}
                            </li>
                          ))}
                        </ul>

                        <div className="text-gray-400 text-xs mb-1">Marcas:</div>
                        <div className="text-white text-sm font-medium mb-6">
                          {category.brands}
                        </div>

                        <Button
                          variant="outline"
                          className="w-full bg-white/10 text-white border-white/20 hover:bg-skyBlue hover:border-skyBlue transition-all"
                        >
                          Ver Detalles
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-slate to-charcoal">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              ¿No estás seguro qué servicio necesitas?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Habla con un experto y recibe orientación personalizada.
            </p>

            <motion.a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#0B5FFF] to-[#FF7A00] text-white rounded-xl font-bold hover:shadow-lg hover:shadow-orange/50 transition-all duration-300"
            >
              Solicitar Cotización
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
