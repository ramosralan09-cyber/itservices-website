'use client';

import { motion } from 'framer-motion';
import { Shield, CheckCircle, XCircle, Clock, Phone, MessageCircle, Download } from 'lucide-react';
import { downloadWarrantyPDF } from '@/lib/pdfGenerator';

export default function GarantiasPage() {
  return (
    <div className="min-h-screen bg-charcoal py-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-deepBlue to-skyBlue rounded-2xl mb-6 shadow-lg shadow-blue-500/30">
            <Shield className="w-10 h-10 text-white" />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Garantías y Protección
          </h1>
          <p className="text-xl text-gray-300 mb-6 max-w-3xl mx-auto">
            Respaldamos nuestro trabajo con garantías sólidas y servicio post-instalación profesional
          </p>
          <motion.button
            onClick={downloadWarrantyPDF}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all shadow-lg hover:shadow-2xl hover:shadow-blue-500/50"
          >
            <Download className="w-5 h-5" />
            Descargar Garantías PDF
          </motion.button>
        </div>

        <div className="bg-gradient-to-r from-deepBlue to-skyBlue p-8 rounded-2xl mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            1 Año de Garantía en Mano de Obra
          </h2>
          <p className="text-blue-100 text-lg mb-6">
            Todos nuestros servicios de instalación incluyen garantía completa de 1 año
            sobre la mano de obra, sin costo adicional.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { label: 'Instalación', value: '1 año' },
              { label: 'Configuración', value: '1 año' },
              { label: 'Cableado', value: '1 año' },
            ].map((item) => (
              <div key={item.label} className="bg-white/10 backdrop-blur-sm p-4 rounded-xl text-center">
                <p className="text-blue-200 text-sm mb-1">{item.label}</p>
                <p className="text-white text-2xl font-bold">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-slate p-8 rounded-2xl mb-8">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <CheckCircle className="w-7 h-7 text-green-400" />
            Garantía de Equipos
          </h2>
          <div className="space-y-4 text-gray-300">
            <p>
              Los equipos que instalamos están cubiertos por la <strong>garantía del fabricante</strong>,
              la cual varía según marca y modelo:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-6">
              {[
                { brand: 'Hikvision', warranty: '2-3 años', icon: '📹' },
                { brand: 'Uniview', warranty: '2 años', icon: '🎥' },
                { brand: 'Ruijie', warranty: '1 año (lifetime limitado)', icon: '🌐' },
                { brand: 'Mikroik', warranty: '1 año', icon: '📡' },
                { brand: 'Linear / LiftMaster', warranty: '1-2 años', icon: '🚪' },
                { brand: 'Epcom', warranty: '1 año', icon: '🔊' },
              ].map((item) => (
                <div key={item.brand} className="bg-charcoal p-4 rounded-xl flex items-center gap-3">
                  <span className="text-3xl">{item.icon}</span>
                  <div>
                    <p className="text-white font-semibold">{item.brand}</p>
                    <p className="text-skyBlue text-sm">{item.warranty}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-blue-600/10 border-l-4 border-blue-600 rounded-lg p-6 mb-8">
          <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
            <Clock className="w-6 h-6 text-blue-400" />
            Tiempos de Respuesta Garantizados
          </h3>

          <div className="space-y-4">
            <div className="bg-charcoal rounded-lg p-4 shadow-md border border-gray-700">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-green-600/20 rounded-full flex items-center justify-center">
                  <span className="text-green-400 font-bold text-sm">24h</span>
                </div>
                <div>
                  <h4 className="font-semibold text-white">Reclamos de Garantía</h4>
                  <p className="text-sm text-gray-400">
                    Respuesta inicial en <strong className="text-green-400">24 horas hábiles</strong> tras recibir tu reclamo.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-charcoal rounded-lg p-4 shadow-md border border-gray-700">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-600/20 rounded-full flex items-center justify-center">
                  <span className="text-blue-400 font-bold text-sm">72h</span>
                </div>
                <div>
                  <h4 className="font-semibold text-white">Evaluación Técnica</h4>
                  <p className="text-sm text-gray-400">
                    Diagnóstico completo en <strong className="text-blue-400">72 horas hábiles</strong> máximo.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-charcoal rounded-lg p-4 shadow-md border border-gray-700">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-orange-600/20 rounded-full flex items-center justify-center">
                  <span className="text-orange-400 font-bold text-sm">7d</span>
                </div>
                <div>
                  <h4 className="font-semibold text-white">Resolución o Reemplazo</h4>
                  <p className="text-sm text-gray-400">
                    Reparación o reemplazo completado en <strong className="text-orange-400">7 días hábiles</strong> (sujeto a disponibilidad de partes).
                  </p>
                </div>
              </div>
            </div>
          </div>

          <p className="text-xs text-gray-500 mt-4 italic">
            * Los tiempos especificados aplican únicamente a días laborables (lunes a viernes, excluyendo feriados).
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-green-500/10 border border-green-500/30 p-6 rounded-2xl">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <CheckCircle className="w-6 h-6 text-green-400" />
              Qué SÍ Cubre
            </h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              {[
                'Defectos de fabricación en equipos',
                'Fallas en la instalación o configuración',
                'Problemas con cableado estructurado',
                'Errores en programación de sistemas',
                'Reemplazo de equipos defectuosos (con RMA del fabricante)',
                'Mano de obra para correcciones',
                'Soporte técnico remoto ilimitado',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-red-500/10 border border-red-500/30 p-6 rounded-2xl">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <XCircle className="w-6 h-6 text-red-400" />
              Qué NO Cubre
            </h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              {[
                'Daños por desastres naturales (huracanes, inundaciones, rayos)',
                'Mal uso o negligencia del usuario',
                'Modificaciones no autorizadas por terceros',
                'Daños físicos intencionales o vandalismo',
                'Problemas eléctricos de la instalación del cliente',
                'Fluctuaciones de voltaje o apagones',
                'Robo de equipos instalados',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-slate p-8 rounded-2xl mb-8">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <Clock className="w-7 h-7 text-orange" />
            Cómo Hacer un Reclamo de Garantía
          </h2>
          <div className="space-y-6">
            {[
              {
                step: '1',
                title: 'Contacta Inmediatamente',
                description: 'Llámanos o escríbenos dentro de 48 horas de detectar el problema.',
                time: '< 48 horas'
              },
              {
                step: '2',
                title: 'Diagnóstico Remoto',
                description: 'Intentaremos resolver el problema por teléfono o acceso remoto primero.',
                time: '< 24 horas'
              },
              {
                step: '3',
                title: 'Visita Técnica (si necesario)',
                description: 'Si no se resuelve remotamente, programamos visita sin cargo dentro de garantía.',
                time: '24-72 horas'
              },
              {
                step: '4',
                title: 'Resolución',
                description: 'Reparamos o reemplazamos según corresponda. RMA del fabricante si aplica.',
                time: 'Según caso'
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-deepBlue rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {item.step}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-lg font-bold text-white">{item.title}</h4>
                    <span className="text-skyBlue text-sm">{item.time}</span>
                  </div>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-orange/20 to-deepBlue/20 border border-orange/30 p-8 rounded-2xl mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">
            ¿Quieres Mayor Protección?
          </h2>
          <p className="text-gray-300 mb-6">
            Ofrecemos <strong className="text-orange">Contratos de Mantenimiento</strong> que extienden
            la cobertura y añaden beneficios adicionales:
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { plan: 'Básico', price: '$XX/mes', features: ['2 visitas/año', 'Soporte prioritario', 'Descuentos 10%'] },
              { plan: 'Plus', price: '$XX/mes', features: ['4 visitas/año', 'Soporte 24/7', 'Descuentos 20%'] },
              { plan: 'Premium', price: '$XX/mes', features: ['Ilimitado', 'Emergencias gratis', 'Descuentos 30%'] },
            ].map((plan) => (
              <div key={plan.plan} className="bg-slate p-4 rounded-xl">
                <h4 className="text-white font-bold mb-2">{plan.plan}</h4>
                <p className="text-skyBlue text-2xl font-bold mb-4">{plan.price}</p>
                <ul className="space-y-2">
                  {plan.features.map((feature) => (
                    <li key={feature} className="text-gray-400 text-sm flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-deepBlue p-8 rounded-2xl text-center">
          <Phone className="w-12 h-12 text-white mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-4">
            ¿Necesitas Hacer un Reclamo?
          </h3>
          <p className="text-blue-100 mb-6">
            Nuestro equipo está listo para ayudarte. Contacta ahora:
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="https://wa.me/19392842551?text=Necesito%20hacer%20un%20reclamo%20de%20garantía"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-green-500/50 transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp: (939) 284-2551
            </motion.a>
            <motion.a
              href="tel:+17876193432"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-violet-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all"
            >
              <Phone className="w-5 h-5" />
              Llamar: (787) 619-3432
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  )
}
