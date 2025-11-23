'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, ChevronDown, ChevronUp, Phone, Mail } from 'lucide-react';
import { useState } from 'react';

interface FAQ {
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQ[] = [
  {
    category: 'General',
    question: '¿En qué áreas de Puerto Rico ofrecen servicio?',
    answer: 'Ofrecemos servicios en toda la isla de Puerto Rico, con cobertura completa en las regiones Oeste, Norte, Central, Metropolitana, Sur y Este. Puedes ver nuestro mapa de cobertura detallado en la sección de Cobertura.'
  },
  {
    category: 'General',
    question: '¿Cuánto tiempo toma obtener una cotización?',
    answer: 'Típicamente respondemos a solicitudes de cotización en 24-48 horas hábiles. Para proyectos complejos que requieren visita al sitio, el proceso puede tomar 3-5 días hábiles.'
  },
  {
    category: 'General',
    question: '¿Ofrecen financiamiento?',
    answer: 'Sí, ofrecemos planes de pago flexibles para proyectos grandes. Contáctanos para discutir opciones de financiamiento adaptadas a tu presupuesto.'
  },
  {
    category: 'CCTV y Seguridad',
    question: '¿Qué marcas de cámaras instalan?',
    answer: 'Trabajamos principalmente con Hikvision, Uniview y Dahua, marcas líderes en la industria con garantías de 2-3 años. Todas nuestras cámaras son de calidad profesional.'
  },
  {
    category: 'CCTV y Seguridad',
    question: '¿Puedo ver las cámaras desde mi celular?',
    answer: 'Sí, todos nuestros sistemas CCTV incluyen acceso remoto vía aplicación móvil (iOS y Android). Podrás ver en vivo, reproducir grabaciones y recibir notificaciones desde cualquier lugar.'
  },
  {
    category: 'CCTV y Seguridad',
    question: '¿Cuánto almacenamiento necesito para las grabaciones?',
    answer: 'Depende del número de cámaras, resolución y días de retención deseados. Un sistema típico de 4-8 cámaras requiere 1-2TB para 15-30 días de grabación continua. Te asesoramos según tus necesidades.'
  },
  {
    category: 'Redes',
    question: '¿Qué es cableado estructurado?',
    answer: 'Es la infraestructura de cableado organizado que conecta todos los dispositivos de red en tu empresa. Incluye cables certificados, patch panels, racks y documentación completa.'
  },
  {
    category: 'Redes',
    question: '¿Cuánto dura la instalación de una red?',
    answer: 'Depende del tamaño del proyecto. Una oficina pequeña (5-10 puntos) toma 1-2 días. Oficinas grandes o edificios completos pueden tomar 1-2 semanas. Te damos un cronograma detallado en la cotización.'
  },
  {
    category: 'Redes',
    question: '¿Ofrecen WiFi para todo el edificio?',
    answer: 'Sí, diseñamos e instalamos redes WiFi empresariales con cobertura completa usando Access Points profesionales (Ubiquiti, Ruckus, TP-Link). Incluye site survey y optimización.'
  },
  {
    category: 'Control de Acceso',
    question: '¿Qué tipos de control de acceso ofrecen?',
    answer: 'Ofrecemos múltiples opciones: tarjetas RFID/Proximity, biométrico (huella dactilar), PIN/código numérico y aplicación móvil. Puedes combinar varios métodos según tus necesidades.'
  },
  {
    category: 'Control de Acceso',
    question: '¿Puedo gestionar los accesos remotamente?',
    answer: 'Sí, todos nuestros sistemas incluyen software de gestión que te permite añadir/eliminar usuarios, ver historial de accesos y recibir alertas desde cualquier lugar con internet.'
  },
  {
    category: 'Soporte',
    question: '¿Ofrecen soporte después de la instalación?',
    answer: 'Sí, todos nuestros proyectos incluyen 1 año de garantía en mano de obra. También ofrecemos contratos de mantenimiento con visitas programadas y soporte prioritario 24/7.'
  },
  {
    category: 'Soporte',
    question: '¿Qué incluye el soporte remoto?',
    answer: 'El soporte remoto incluye diagnóstico, configuración, actualizaciones de software y resolución de problemas sin necesidad de visita. Es más rápido y económico para muchos casos.'
  },
  {
    category: 'Garantías',
    question: '¿Qué cubre la garantía?',
    answer: 'La garantía cubre defectos de fabricación en equipos (según fabricante: 1-3 años) y 1 año en mano de obra de instalación. No cubre daños por desastres naturales, mal uso o modificaciones no autorizadas.'
  },
  {
    category: 'Garantías',
    question: '¿Cuánto tarda un reclamo de garantía?',
    answer: 'Respondemos en 24 horas hábiles, hacemos evaluación técnica en 72 horas máximo, y completamos reparación o reemplazo en 7 días hábiles (sujeto a disponibilidad de partes).'
  },
  {
    category: 'Pagos',
    question: '¿Qué formas de pago aceptan?',
    answer: 'Aceptamos efectivo, ATH Móvil, transferencias bancarias, cheques certificados y tarjetas de crédito/débito. Para proyectos grandes ofrecemos planes de pago por etapas.'
  },
  {
    category: 'Pagos',
    question: '¿Se requiere depósito inicial?',
    answer: 'Sí, típicamente solicitamos 50% de depósito para iniciar el proyecto (compra de materiales y equipos) y 50% al completar. El porcentaje puede variar según el proyecto.'
  }
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('Todas');

  const categories = ['Todas', ...Array.from(new Set(faqs.map(faq => faq.category)))];

  const filteredFaqs = selectedCategory === 'Todas'
    ? faqs
    : faqs.filter(faq => faq.category === selectedCategory);

  return (
    <div className="min-h-screen bg-charcoal py-20">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-600 to-violet-600 rounded-2xl mb-6 shadow-lg shadow-blue-500/30">
            <MessageCircle className="w-10 h-10 text-white" />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Preguntas Frecuentes
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Encuentra respuestas rápidas a las preguntas más comunes sobre nuestros servicios
          </p>
        </div>

        <div className="flex flex-wrap gap-3 mb-8 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg'
                  : 'bg-slate text-gray-400 hover:text-white hover:bg-navy'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="space-y-4">
          {filteredFaqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-gradient-to-br from-slate to-charcoal rounded-xl border border-gray-700 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-slate/50 transition-colors"
              >
                <div className="flex-1">
                  <span className="text-xs text-blue-400 font-semibold mb-1 block">
                    {faq.category}
                  </span>
                  <h3 className="text-lg font-semibold text-white">
                    {faq.question}
                  </h3>
                </div>
                {openIndex === index ? (
                  <ChevronUp className="w-6 h-6 text-blue-400 flex-shrink-0 ml-4" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-gray-400 flex-shrink-0 ml-4" />
                )}
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 pt-2">
                      <p className="text-gray-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-violet-600 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            ¿No encuentras tu respuesta?
          </h3>
          <p className="text-blue-100 mb-6">
            Nuestro equipo está listo para ayudarte con cualquier pregunta adicional
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="https://wa.me/19392842551"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all shadow-lg"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </motion.a>
            <motion.a
              href="tel:+17879392684"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm border-2 border-white text-white rounded-lg font-semibold hover:bg-white/30 transition-all"
            >
              <Phone className="w-5 h-5" />
              Llamar
            </motion.a>
            <motion.a
              href="/contacto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm border-2 border-white text-white rounded-lg font-semibold hover:bg-white/30 transition-all"
            >
              <Mail className="w-5 h-5" />
              Contacto
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  );
}
