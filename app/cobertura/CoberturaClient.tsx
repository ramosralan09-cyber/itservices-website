'use client';

import { motion } from 'framer-motion';
import { MapPin, MessageCircle, CheckCircle } from 'lucide-react';
import { WHATSAPP_URL } from '@/lib/whatsapp';
import CoverageMap from '@/components/shared/CoverageMap';

export default function CoberturaClient() {
  const zones = [
    {
      color: 'bg-green-600',
      name: 'Región Oeste',
      areas:
        'Mayagüez, Aguadilla, Cabo Rojo, Rincón, Añasco, Aguada, San Sebastián, Moca, Isabela',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-300',
    },
    {
      color: 'bg-blue-600',
      name: 'Región Norte',
      areas:
        'Arecibo, Manatí, Barceloneta, Vega Baja, Vega Alta, Dorado, Camuy, Hatillo',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-300',
    },
    {
      color: 'bg-yellow-600',
      name: 'Región Central',
      areas:
        'Utuado, Adjuntas, Jayuya, Orocovis, Barranquitas, Comerío, Aibonito, Corozal',
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-300',
    },
    {
      color: 'bg-purple-600',
      name: 'Área Metropolitana',
      areas:
        'San Juan, Bayamón, Carolina, Guaynabo, Trujillo Alto, Cataño, Canóvanas, Loíza',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-300',
    },
    {
      color: 'bg-violet-600',
      name: 'Región Sur',
      areas:
        'Ponce, Yauco, Guayanilla, Peñuelas, Guánica, Juana Díaz, Santa Isabel, Salinas, Coamo',
      bgColor: 'bg-violet-50',
      borderColor: 'border-violet-300',
    },
    {
      color: 'bg-pink-600',
      name: 'Región Este',
      areas:
        'Caguas, Humacao, Fajardo, Gurabo, Juncos, Las Piedras, Ceiba, Naguabo, Yabucoa',
      bgColor: 'bg-pink-50',
      borderColor: 'border-pink-300',
    },
  ];

  return (
    <div className="min-h-screen bg-charcoal">
      <section className="pt-32 pb-16 md:pb-24 bg-gradient-to-b from-deepBlue to-charcoal relative overflow-hidden">
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

        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center w-20 h-20 bg-blue-600 rounded-2xl mb-6 shadow-lg shadow-blue-500/30 mx-auto">
              <MapPin className="w-10 h-10 text-white" />
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Áreas de Cobertura en Puerto Rico
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Brindamos servicios de seguridad, cámaras de vigilancia, control de
              acceso y redes empresariales en toda la isla. Consulta si tu área
              está dentro de nuestra zona de cobertura.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <CoverageMap />
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-slate">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-charcoal rounded-2xl shadow-xl p-6 md:p-8 border border-gray-700"
          >
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <MapPin className="w-6 h-6 text-blue-400" />
              Zonas de Servicio
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {zones.map((zone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex items-start gap-3 p-4 ${zone.bgColor} rounded-lg border-2 ${zone.borderColor} hover:shadow-md transition-shadow`}
                >
                  <div
                    className={`w-5 h-5 rounded-full ${zone.color} mt-1 flex-shrink-0 shadow-sm`}
                  ></div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">
                      {zone.name}
                    </h4>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {zone.areas}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-600 to-violet-600 rounded-2xl p-8 md:p-12 text-center text-white shadow-2xl"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              ¿Tu municipio no aparece en el mapa?
            </h3>
            <p className="text-lg mb-8 text-blue-100 max-w-2xl mx-auto">
              Contáctanos. Evaluamos proyectos en toda la isla según el alcance
              del servicio.
            </p>
            <div className="flex justify-center">
              <motion.a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all shadow-xl"
              >
                <MessageCircle className="w-5 h-5" />
                Consultar Disponibilidad
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-slate">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-charcoal rounded-2xl p-8 border border-gray-700"
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Proyectos Completados Destacados
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  name: 'Infosys Aguadilla',
                  type: 'Sistema de Seguridad Empresarial',
                  icon: '🏢',
                },
                {
                  name: 'Policía de Cabo Rojo',
                  type: 'Infraestructura de Red Completa',
                  icon: '🚔',
                },
                {
                  name: 'Ricomini Mayagüez',
                  type: 'CCTV y Control de Acceso',
                  icon: '🏭',
                },
                {
                  name: 'Ricomini Camuy',
                  type: 'Red y Sistemas de Vigilancia',
                  icon: '🏭',
                },
              ].map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-slate rounded-lg border border-gray-700 hover:border-blue-600 transition-colors"
                >
                  <span className="text-4xl">{project.icon}</span>
                  <div>
                    <h4 className="font-semibold text-white">{project.name}</h4>
                    <p className="text-sm text-gray-400">{project.type}</p>
                  </div>
                  <CheckCircle className="w-6 h-6 text-green-400 ml-auto" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
