'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, ChevronRight, Check, AlertTriangle, Shield } from 'lucide-react';
import { downloadTermsPDF } from '@/lib/pdfGenerator';

export default function TerminosPage() {
  const [activeSection, setActiveSection] = useState<string>('');

  const sections = [
    { id: 'aceptacion', title: '1. Aceptación de Términos', icon: '📋' },
    { id: 'servicios', title: '2. Descripción de Servicios', icon: '🔧' },
    { id: 'cotizaciones', title: '3. Cotizaciones y Presupuestos', icon: '💰' },
    { id: 'pagos', title: '4. Términos de Pago', icon: '💳' },
    { id: 'cancelaciones', title: '5. Cancelaciones y Reembolsos', icon: '↩️' },
    { id: 'garantias', title: '6. Garantías', icon: '🛡️' },
    { id: 'acceso-remoto', title: '7. Acceso Remoto y Permisos', icon: '🖥️' },
    { id: 'privacidad', title: '8. Privacidad y Datos', icon: '🔒' },
    { id: 'responsabilidades', title: '9. Responsabilidades del Cliente', icon: '👤' },
    { id: 'limitaciones', title: '10. Limitaciones de Responsabilidad', icon: '⚠️' },
    { id: 'propiedad', title: '11. Propiedad Intelectual', icon: '©️' },
    { id: 'modificaciones', title: '12. Modificaciones', icon: '✏️' },
    { id: 'ley', title: '13. Ley Aplicable', icon: '⚖️' },
    { id: 'contacto', title: '14. Contacto', icon: '📧' },
  ];

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-charcoal py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-600 to-violet-600 rounded-2xl mb-6">
            <FileText className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Términos y Condiciones de Servicio
          </h1>
          <p className="text-xl text-gray-400 mb-4">
            IT Services & Security PR
          </p>
          <p className="text-sm text-gray-500 mb-6">
            Última actualización: Octubre 2025
          </p>

          <motion.button
            onClick={downloadTermsPDF}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all"
          >
            <Download className="w-5 h-5" />
            Descargar PDF
          </motion.button>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Clickable Index - Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 bg-gradient-to-br from-slate to-charcoal rounded-2xl p-6 border border-gray-700">
              <h3 className="text-lg font-bold text-white mb-4">Índice</h3>
              <nav className="space-y-2">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-all text-sm flex items-center gap-2 ${
                      activeSection === section.id
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-400 hover:text-white hover:bg-slate'
                    }`}
                  >
                    <span>{section.icon}</span>
                    <span className="flex-1 text-xs">{section.title}</span>
                    <ChevronRight className="w-4 h-4 flex-shrink-0" />
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Section 1 */}
            <section id="aceptacion" className="bg-gradient-to-br from-slate to-charcoal rounded-2xl p-8 border border-gray-700">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span>📋</span> 1. Aceptación de Términos
              </h2>
              <div className="prose prose-invert max-w-none text-gray-300 space-y-4">
                <p>
                  Al contratar cualquier servicio de IT Services & Security PR, usted acepta estar legalmente vinculado por estos Términos y Condiciones.
                  Si no está de acuerdo con alguna parte de estos términos, no deberá contratar nuestros servicios.
                </p>
                <p>
                  Estos términos constituyen un acuerdo legal entre usted (el "Cliente") y IT Services & Security PR (la "Empresa").
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section id="servicios" className="bg-gradient-to-br from-slate to-charcoal rounded-2xl p-8 border border-gray-700">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span>🔧</span> 2. Descripción de Servicios
              </h2>
              <div className="prose prose-invert max-w-none text-gray-300">
                <p className="mb-4">IT Services & Security PR ofrece los siguientes servicios:</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Instalación y configuración de sistemas de videovigilancia (CCTV)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Diseño e implementación de redes empresariales</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Sistemas de control de acceso biométrico y RFID</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Consultoría en tecnología de la información</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Soporte técnico y mantenimiento preventivo</span>
                  </li>
                </ul>
                <p className="mt-4">
                  Los servicios específicos contratados se detallarán en la cotización y orden de trabajo correspondiente.
                </p>
              </div>
            </section>

            {/* Section 3 - Cotizaciones */}
            <section id="cotizaciones" className="bg-gradient-to-br from-slate to-charcoal rounded-2xl p-8 border border-gray-700">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span>💰</span> 3. Cotizaciones y Presupuestos
              </h2>
              <div className="prose prose-invert max-w-none text-gray-300">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 font-bold">•</span>
                    <span>Las cotizaciones son válidas por <strong className="text-blue-400">30 días</strong> desde su emisión</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 font-bold">•</span>
                    <span>Los precios pueden variar según disponibilidad de equipos y costos de proveedores</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 font-bold">•</span>
                    <span>Se requiere aprobación por escrito (email o firma) antes de iniciar trabajos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 font-bold">•</span>
                    <span>Cotizaciones incluyen mano de obra, materiales especificados e IVU aplicable</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 4 - Pagos */}
            <section id="pagos" className="bg-gradient-to-br from-slate to-charcoal rounded-2xl p-8 border border-gray-700">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span>💳</span> 4. Términos de Pago
              </h2>
              <div className="prose prose-invert max-w-none text-gray-300">
                <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 mb-4">
                  <h4 className="text-blue-400 font-semibold mb-2">Estructura de Pagos</h4>
                  <p className="text-sm">
                    <strong>Depósito inicial:</strong> 50% del valor total al aprobar cotización<br />
                    <strong>Pago final:</strong> 50% restante al completar instalación y pruebas
                  </p>
                </div>

                <h4 className="text-white font-semibold mb-3 mt-6">Métodos de Pago Aceptados:</h4>
                <ul className="space-y-2">
                  <li>• Efectivo</li>
                  <li>• ATH Móvil Business</li>
                  <li>• Transferencia bancaria</li>
                  <li>• Cheque certificado (empresas)</li>
                </ul>

                <p className="mt-4 text-sm text-gray-400">
                  Proyectos mayores a $10,000 pueden negociar términos de pago especiales.
                </p>
              </div>
            </section>

            {/* Section 5 - Cancelaciones */}
            <section id="cancelaciones" className="bg-gradient-to-br from-slate to-charcoal rounded-2xl p-8 border border-gray-700">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span>↩️</span> 5. Cancelaciones y Reembolsos
              </h2>
              <div className="prose prose-invert max-w-none text-gray-300">
                <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4 mb-4">
                  <h4 className="text-orange-400 font-semibold mb-2 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5" />
                    Política de Cancelación
                  </h4>
                  <p className="text-sm">
                    El cliente puede cancelar servicios programados con al menos <strong>48 horas de anticipación</strong> sin penalidad.
                    Cancelaciones con menos de 48 horas pueden incurrir en un cargo del 25% del valor del servicio.
                  </p>
                </div>

                <h4 className="text-white font-semibold mb-3 mt-6">Reembolsos</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 font-bold">•</span>
                    <span>Los reembolsos por servicios no prestados se procesarán en un plazo de <strong className="text-blue-400">7 a 10 días laborables</strong> desde la solicitud aprobada</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 font-bold">•</span>
                    <span>No se emitirán reembolsos por servicios ya completados o parcialmente ejecutados</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 font-bold">•</span>
                    <span>Los equipos adquiridos a través de nosotros están sujetos a las políticas de devolución del fabricante</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 font-bold">•</span>
                    <span>Depósitos iniciales son reembolsables solo si el servicio no ha iniciado</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 6 - Garantías */}
            <section id="garantias" className="bg-gradient-to-br from-slate to-charcoal rounded-2xl p-8 border border-gray-700">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span>🛡️</span> 6. Garantías
              </h2>
              <div className="prose prose-invert max-w-none text-gray-300">
                <p>
                  Todos nuestros servicios están respaldados por garantías específicas. Para detalles completos,
                  consulte nuestra <a href="/garantias" className="text-blue-400 hover:text-blue-300 underline">página de Garantías</a>.
                </p>
                <p className="mt-4">
                  <strong className="text-white">Resumen de coberturas:</strong>
                </p>
                <ul className="space-y-2 mt-3">
                  <li>• Mano de obra: 1 año</li>
                  <li>• Equipos nuevos: 1-3 años (según fabricante)</li>
                  <li>• Cableado estructurado: 15 años</li>
                </ul>
              </div>
            </section>

            {/* Section 7 - NEW: Acceso Remoto */}
            <section id="acceso-remoto" className="bg-gradient-to-br from-slate to-charcoal rounded-2xl p-8 border border-gray-700">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span>🖥️</span> 7. Acceso Remoto y Permisos
              </h2>
              <div className="prose prose-invert max-w-none text-gray-300">
                <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 mb-4">
                  <h4 className="text-blue-400 font-semibold mb-2">Autorización de Acceso Temporal</h4>
                  <p className="text-sm">
                    Al contratar servicios de soporte técnico remoto, el Cliente autoriza expresamente a IT Services & Security PR
                    a acceder temporalmente a sus sistemas, equipos y redes para fines de diagnóstico, configuración y reparación.
                  </p>
                </div>

                <h4 className="text-white font-semibold mb-3 mt-6">Condiciones de Acceso Remoto:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>El acceso remoto solo se realizará con <strong>autorización previa explícita</strong> del Cliente</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Utilizamos software seguro y cifrado (TeamViewer, AnyDesk, etc.)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>El acceso es <strong>temporal</strong> y se termina al finalizar la sesión de soporte</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>No almacenamos credenciales de acceso permanentemente</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>El Cliente puede terminar la sesión remota en cualquier momento</span>
                  </li>
                </ul>

                <p className="mt-4 text-sm text-gray-400 italic">
                  El Cliente es responsable de respaldar sus datos antes de cualquier sesión de soporte remoto.
                  IT Services & Security PR no se hace responsable por pérdida de datos no respaldados.
                </p>
              </div>
            </section>

            {/* Section 8 - Privacidad */}
            <section id="privacidad" className="bg-gradient-to-br from-slate to-charcoal rounded-2xl p-8 border border-gray-700">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span>🔒</span> 8. Privacidad y Datos
              </h2>
              <div className="prose prose-invert max-w-none text-gray-300">
                <p>
                  Toda información recopilada durante la prestación de servicios está protegida según nuestra{' '}
                  <a href="/privacidad" className="text-blue-400 hover:text-blue-300 underline">Política de Privacidad</a>.
                </p>
                <p className="mt-4">
                  No compartimos información confidencial de clientes con terceros sin autorización expresa.
                </p>
              </div>
            </section>

            {/* Section 9 - Responsabilidades del Cliente */}
            <section id="responsabilidades" className="bg-gradient-to-br from-slate to-charcoal rounded-2xl p-8 border border-gray-700">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span>👤</span> 9. Responsabilidades del Cliente
              </h2>
              <div className="prose prose-invert max-w-none text-gray-300">
                <p className="mb-4">El Cliente se compromete a:</p>
                <ul className="space-y-2">
                  <li>• Proporcionar acceso seguro a las áreas de instalación</li>
                  <li>• Asegurar que la infraestructura eléctrica es adecuada</li>
                  <li>• Informar sobre restricciones o regulaciones del edificio</li>
                  <li>• Realizar respaldos de datos antes de cualquier mantenimiento</li>
                  <li>• Mantener las credenciales de acceso seguras</li>
                </ul>
              </div>
            </section>

            {/* Section 10 - Limitaciones */}
            <section id="limitaciones" className="bg-gradient-to-br from-slate to-charcoal rounded-2xl p-8 border border-gray-700">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span>⚠️</span> 10. Limitaciones de Responsabilidad
              </h2>
              <div className="prose prose-invert max-w-none text-gray-300">
                <p className="mb-4">IT Services & Security PR no será responsable por:</p>
                <ul className="space-y-2">
                  <li>• Daños causados por mal uso de equipos por parte del cliente</li>
                  <li>• Pérdida de datos no respaldados</li>
                  <li>• Eventos de fuerza mayor (huracanes, terremotos, apagones prolongados)</li>
                  <li>• Daños causados por terceros no autorizados</li>
                  <li>• Problemas derivados de modificaciones no autorizadas al sistema</li>
                </ul>
              </div>
            </section>

            {/* Section 11 - Propiedad Intelectual */}
            <section id="propiedad" className="bg-gradient-to-br from-slate to-charcoal rounded-2xl p-8 border border-gray-700">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span>©️</span> 11. Propiedad Intelectual
              </h2>
              <div className="prose prose-invert max-w-none text-gray-300">
                <p>
                  Todos los diseños, planos técnicos, documentación y configuraciones desarrolladas por IT Services & Security PR
                  son propiedad de la empresa, salvo acuerdo contrario por escrito.
                </p>
                <p className="mt-4">
                  El Cliente recibe una licencia de uso para los sistemas instalados, pero no la propiedad intelectual del diseño.
                </p>
              </div>
            </section>

            {/* Section 12 - Modificaciones */}
            <section id="modificaciones" className="bg-gradient-to-br from-slate to-charcoal rounded-2xl p-8 border border-gray-700">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span>✏️</span> 12. Modificaciones
              </h2>
              <div className="prose prose-invert max-w-none text-gray-300">
                <p>
                  IT Services & Security PR se reserva el derecho de modificar estos términos en cualquier momento.
                  Los cambios serán notificados a través de nuestro sitio web y por email a clientes activos.
                </p>
              </div>
            </section>

            {/* Section 13 - Ley Aplicable */}
            <section id="ley" className="bg-gradient-to-br from-slate to-charcoal rounded-2xl p-8 border border-gray-700">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span>⚖️</span> 13. Ley Aplicable
              </h2>
              <div className="prose prose-invert max-w-none text-gray-300">
                <p>
                  Estos términos se rigen por las leyes del Estado Libre Asociado de Puerto Rico.
                  Cualquier disputa será resuelta en los tribunales de Puerto Rico.
                </p>
              </div>
            </section>

            {/* Final Section - Contact */}
            <section id="contacto" className="bg-gradient-to-r from-blue-600 to-violet-600 rounded-2xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <span>📧</span> 14. Contacto
              </h2>
              <p className="mb-6">
                Para consultas sobre estos Términos y Condiciones, puede contactarnos:
              </p>
              <div className="space-y-3">
                <p><strong>Email:</strong> itservice.pr4u@gmail.com</p>
                <p><strong>Teléfono:</strong> (787) 939-2684</p>
                <p><strong>WhatsApp:</strong> (939) 284-2551</p>
                <p><strong>Dirección:</strong> Puerto Rico</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
