'use client'

import { motion } from 'framer-motion'
import {
  Shield,
  Users,
  Award,
  TrendingUp,
  Heart,
  Lightbulb,
  Target,
  Clock,
  MapPin,
  CheckCircle,
  Zap,
  Phone,
  MessageCircle
} from 'lucide-react'

export default function NosotrosClient() {
  return (
    <div className="min-h-screen bg-charcoal">
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-deepBlue via-charcoal to-charcoal opacity-50" />
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-skyBlue rounded-full filter blur-3xl opacity-20 animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-deepBlue rounded-full filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-deepBlue/30 backdrop-blur-sm rounded-full mb-6"
            >
              <Heart className="w-4 h-4 text-red-400" />
              <span className="text-skyBlue text-sm font-medium">Empresa 100% Puertorriqueña</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-6xl font-bold text-white mb-6"
            >
              Protegemos lo que más valoras
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-300 mb-4"
            >
              con tecnología y confianza 100% puertorriqueña
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-gray-400 text-lg max-w-2xl mx-auto"
            >
              De un proyecto familiar a liderar la innovación en seguridad y redes en toda la isla.
              12 años construyendo confianza, un proyecto a la vez.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-slate">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '120+', label: 'Proyectos Completados', icon: CheckCircle },
              { value: '12+', label: 'Años de Experiencia', icon: Award },
              { value: '80+', label: 'Clientes Satisfechos', icon: Users },
              { value: '98%', label: 'Satisfacción', icon: TrendingUp },
              { value: '600+', label: 'Equipos Instalados', icon: Shield },
              { value: '15-35', label: 'Municipios Cubiertos', icon: MapPin },
              { value: '12-24h', label: 'Tiempo de Respuesta', icon: Clock },
              { value: '6-12', label: 'Personas en Equipo', icon: Users },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-charcoal p-6 rounded-xl text-center"
              >
                <stat.icon className="w-8 h-8 text-skyBlue mx-auto mb-3" />
                <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
                <p className="text-sm text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Nuestra Historia</h2>
              <p className="text-xl text-gray-400">
                De residencias a empresas, de padre e hijo a equipo completo
              </p>
            </motion.div>

            <div className="space-y-12">
              {[
                {
                  year: '2012',
                  title: 'El Comienzo',
                  description: 'IT Services & Computer nace como un proyecto familiar entre padre e hijo, ofreciendo servicios de redes y computadoras a nivel residencial. Instalaciones pequeñas pero con gran atención al detalle.',
                  icon: Heart,
                  color: 'from-orange to-red-500'
                },
                {
                  year: '2015-2018',
                  title: 'Primer Gran Proyecto',
                  description: 'La instalación de una red LAN completa para Infosys System en Aguadilla marca el salto a clientes corporativos. Este proyecto abre las puertas al sector empresarial y gubernamental.',
                  icon: TrendingUp,
                  color: 'from-deepBlue to-skyBlue'
                },
                {
                  year: '2022',
                  title: 'Evolución y Rebranding',
                  description: 'La empresa se transforma oficialmente en IT Services & Security (ITSS), reflejando la expansión hacia sistemas de seguridad, CCTV, control de acceso y automatización inteligente.',
                  icon: Shield,
                  color: 'from-skyBlue to-deepBlue'
                },
                {
                  year: '2023-2024',
                  title: 'Expansión y Especialización',
                  description: 'Proyectos con la Policía de Puerto Rico, escuelas, panaderías y empresas industriales. Incorporación de IA, monitoreo remoto y soluciones solares off-grid. Alianza con West Security Services.',
                  icon: Zap,
                  color: 'from-green-400 to-emerald-500'
                },
                {
                  year: '2025',
                  title: 'El Futuro Hoy',
                  description: '120+ proyectos completados, equipo ampliado, y lanzamiento de West Virtual Security. Próximos pasos: tienda online, showroom físico, y expansión regional al Caribe.',
                  icon: Target,
                  color: 'from-orange to-yellow-500'
                }
              ].map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="relative"
                >
                  <div className="flex items-start gap-6">
                    <div className={`flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${milestone.color} flex items-center justify-center`}>
                      <milestone.icon className="w-8 h-8 text-white" />
                    </div>

                    <div className="flex-1">
                      <div className="bg-slate p-6 rounded-2xl">
                        <span className="inline-block px-3 py-1 bg-deepBlue text-skyBlue text-sm font-bold rounded-full mb-3">
                          {milestone.year}
                        </span>
                        <h3 className="text-2xl font-bold text-white mb-3">
                          {milestone.title}
                        </h3>
                        <p className="text-gray-300 leading-relaxed">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">El Equipo</h2>
            <p className="text-xl text-gray-400">
              Líderes con experiencia y pasión por la excelencia
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-charcoal rounded-2xl overflow-hidden group hover:shadow-xl hover:shadow-deepBlue/20 transition-shadow"
            >
              <div className="relative h-80 bg-gradient-to-br from-deepBlue to-skyBlue flex items-center justify-center">
                <div className="w-32 h-32 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <span className="text-6xl font-bold text-white">CR</span>
                </div>
                <div className="absolute bottom-4 right-4 px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-white text-xs">
                  📷 Foto pendiente
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-1">Carmelo Ramos</h3>
                <p className="text-skyBlue font-medium mb-3">CEO y Director Técnico</p>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  Técnico con más de 20 años de experiencia en comunicaciones, empalme de fibra óptica y seguridad electrónica.
                  Lidera la planificación e implementación técnica de los proyectos de IT Services & Security en toda la isla.
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {['Fibra Óptica', 'CCTV', 'Redes LAN', 'Control de Acceso'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-slate text-gray-300 text-xs rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-gray-700">
                  <p className="text-sm text-gray-500 mb-2">Certificaciones:</p>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Award className="w-4 h-4 text-orange" />
                    <span>CompTIA Strata</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-charcoal rounded-2xl overflow-hidden group hover:shadow-xl hover:shadow-skyBlue/20 transition-shadow"
            >
              <div className="relative h-80 bg-gradient-to-br from-skyBlue to-deepBlue flex items-center justify-center">
                <div className="w-32 h-32 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <span className="text-6xl font-bold text-white">AR</span>
                </div>
                <div className="absolute bottom-4 right-4 px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-white text-xs">
                  📷 Foto pendiente
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-1">Alan Ramos</h3>
                <p className="text-skyBlue font-medium mb-3">COO / Director de Operaciones y Tecnología</p>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  Dirige la estrategia operativa y tecnológica de la empresa, impulsando la innovación mediante
                  soluciones de automatización, desarrollo digital y agentes virtuales de voz para negocios.
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {['IA & Automatización', 'Marketing', 'Apps Móviles', 'Estrategia'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-slate text-gray-300 text-xs rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-gray-700">
                  <p className="text-sm text-gray-500 mb-2">Experiencia:</p>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Clock className="w-4 h-4 text-orange" />
                    <span>7+ años en tecnología e innovación</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto mt-12 text-center"
          >
            <div className="bg-charcoal p-6 rounded-xl">
              <Users className="w-8 h-8 text-skyBlue mx-auto mb-3" />
              <p className="text-gray-300">
                <strong className="text-white">Equipo Completo:</strong> Contamos con técnicos especializados
                y colaboradores estratégicos que hacen posible cada instalación en toda la isla.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Nuestros Valores</h2>
            <p className="text-xl text-gray-400">
              Los principios que guían cada proyecto y cada decisión
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: Award,
                title: 'Profesionalismo',
                description: 'Cada instalación es una obra de arte técnica. Cable management impecable, documentación completa.',
                color: 'from-orange to-red-500'
              },
              {
                icon: Shield,
                title: 'Confianza',
                description: 'Transparencia total en cotizaciones, tiempos y procesos. Sin sorpresas, solo resultados.',
                color: 'from-deepBlue to-skyBlue'
              },
              {
                icon: Lightbulb,
                title: 'Innovación',
                description: 'IA, automatización, soluciones solares. Siempre un paso adelante en tecnología.',
                color: 'from-skyBlue to-violet-400'
              },
              {
                icon: Heart,
                title: 'Compromiso con PR',
                description: 'Empresa 100% boricua, invirtiendo en nuestra isla y nuestra gente.',
                color: 'from-red-500 to-pink-500'
              },
              {
                icon: TrendingUp,
                title: 'Educación Continua',
                description: 'Capacitación constante en las últimas tecnologías y mejores prácticas del mercado.',
                color: 'from-green-400 to-emerald-500'
              },
              {
                icon: Users,
                title: 'Espíritu Familiar',
                description: 'Trabajo en equipo con valores familiares. Cada cliente es parte de nuestra historia.',
                color: 'from-purple-500 to-indigo-500'
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-slate p-6 rounded-2xl group cursor-default"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">¿Por Qué Elegirnos?</h2>
            <p className="text-xl text-gray-400">
              Lo que nos hace únicos en el mercado puertorriqueño
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-4">
            {[
              {
                title: 'Instalaciones Organizadas y Documentadas',
                description: 'Cableado profesional, racks ordenados, etiquetado completo. Tus instalaciones lucen como deberían.',
                icon: CheckCircle
              },
              {
                title: 'Integración Completa',
                description: 'Seguridad física + redes + inteligencia artificial. Todo conectado, todo funcionando en armonía.',
                icon: Zap
              },
              {
                title: 'Atención Local Personalizada',
                description: 'Cobertura en toda la isla con trato directo. Sin intermediarios, sin call centers.',
                icon: MapPin
              },
              {
                title: 'Innovación Constante',
                description: 'Soluciones solares, 4G, monitoreo remoto. Tecnología de vanguardia al alcance de tu negocio.',
                icon: Lightbulb
              },
              {
                title: 'Comunicación Directa',
                description: 'Hablas directamente con quienes diseñan e instalan tu proyecto. Respuestas claras, rápidas.',
                icon: Phone
              },
              {
                title: 'Experiencia Comprobada',
                description: 'Proyectos con gobierno, empresas, escuelas. Referencias verificables en toda la isla.',
                icon: Award
              },
            ].map((diff, index) => (
              <motion.div
                key={diff.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 bg-charcoal p-6 rounded-xl"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-deepBlue rounded-lg flex items-center justify-center">
                  <diff.icon className="w-5 h-5 text-skyBlue" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">{diff.title}</h3>
                  <p className="text-gray-400">{diff.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Partners Estratégicos</h2>
            <p className="text-gray-400">
              Trabajamos con las mejores marcas y colaboradores del mercado
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: 'West Security Services',
                  role: 'Monitoreo Híbrido',
                  description: 'Socio estratégico para West Virtual Security'
                },
                {
                  name: 'Epcom',
                  role: 'Equipos de Seguridad',
                  description: 'Distribuidor oficial de videovigilancia'
                },
                {
                  name: 'Ruijie Networks',
                  role: 'Soluciones de Red',
                  description: 'Switching y redes empresariales'
                },
              ].map((partner, index) => (
                <motion.div
                  key={partner.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-slate p-6 rounded-xl text-center"
                >
                  <div className="w-16 h-16 bg-charcoal rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-skyBlue">
                      {partner.name.charAt(0)}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">{partner.name}</h3>
                  <p className="text-skyBlue text-sm mb-2">{partner.role}</p>
                  <p className="text-gray-400 text-sm">{partner.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 text-center"
            >
              <p className="text-gray-500 text-sm mb-4">También trabajamos con:</p>
              <div className="flex flex-wrap justify-center gap-3">
                {['Hikvision', 'Uniview', 'MikroTik', 'Linear', 'LiftMaster', 'Starlink'].map((brand) => (
                  <span
                    key={brand}
                    className="px-4 py-2 bg-charcoal text-gray-400 rounded-lg text-sm"
                  >
                    {brand}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-deepBlue via-skyBlue to-deepBlue">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <Target className="w-16 h-16 text-white mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-white mb-6">Visión 2025-2026</h2>
            <p className="text-xl text-blue-100 mb-12">
              El futuro ya está aquí, y nosotros lo estamos construyendo
            </p>

            <div className="grid md:grid-cols-2 gap-6 text-left">
              {[
                {
                  icon: Shield,
                  title: 'West Virtual Security',
                  description: 'Expandir como la red de monitoreo híbrido más completa del Caribe'
                },
                {
                  icon: '🛍️',
                  title: 'Tienda Online',
                  description: 'Lanzamiento de plataforma e-commerce con productos, merch y rifas'
                },
                {
                  icon: '🏢',
                  title: 'Showroom Físico',
                  description: 'Espacio con demostraciones en vivo de cámaras, IA y control de acceso'
                },
                {
                  icon: Zap,
                  title: 'IoT y Automatización',
                  description: 'Ampliar servicios de edificios inteligentes y automatización empresarial'
                },
                {
                  icon: Award,
                  title: 'Certificaciones',
                  description: 'Obtener MikroTik MTCNA y certificaciones avanzadas de seguridad'
                },
                {
                  icon: MapPin,
                  title: 'Expansión Regional',
                  description: 'Extender servicios al área metro y comenzar operaciones en el Caribe'
                },
              ].map((goal, index) => (
                <motion.div
                  key={goal.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm p-6 rounded-xl"
                >
                  <div className="flex items-start gap-4">
                    {typeof goal.icon === 'string' ? (
                      <span className="text-3xl">{goal.icon}</span>
                    ) : (
                      <goal.icon className="w-8 h-8 text-white flex-shrink-0" />
                    )}
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">{goal.title}</h3>
                      <p className="text-blue-100 text-sm">{goal.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-charcoal">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              ¿Listo para Trabajar con Nosotros?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Únete a los 80+ clientes satisfechos que confían en ITSS para proteger su negocio
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contacto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all flex items-center justify-center gap-2"
              >
                Solicitar Cotización
              </motion.a>
              <motion.a
                href="https://wa.me/19392842551?text=Hola%2C%20quiero%20conocer%20más%20sobre%20sus%20servicios"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-slate border border-gray-600 text-white rounded-lg font-semibold hover:bg-navy transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Hablar con el Equipo
              </motion.a>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-700">
              <div className="flex flex-wrap items-center justify-center gap-8 text-gray-400">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Empresa Registrada</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-skyBlue" />
                  <span>Garantía Incluida</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-orange" />
                  <span>Técnicos Certificados</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-red-400" />
                  <span>100% Boricua</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
