'use client';

import { Download } from 'lucide-react';
import { downloadPrivacyPDF } from '@/lib/pdfGenerator';
import Link from 'next/link';

export default function PrivacidadPage() {
  return (
    <div className="min-h-screen bg-charcoal py-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
          <h1 className="text-4xl font-bold text-white">Política de Privacidad</h1>
          <button
            onClick={downloadPrivacyPDF}
            className="w-full md:w-auto flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <Download className="w-5 h-5" />
            Descargar PDF
          </button>
        </div>

        <div className="prose prose-invert max-w-none">
          <p className="text-gray-400 mb-6">
            <strong>Última actualización:</strong> Enero 2025
          </p>

          <div className="bg-slate p-6 rounded-xl mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Resumen Ejecutivo</h2>
            <p className="text-gray-300">
              En IT Services & Security, respetamos tu privacidad y nos comprometemos a proteger
              cualquier información personal que compartas con nosotros.
            </p>
          </div>

          <section id="recopilacion-datos" className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">1. Recopilación de Información</h2>
            <p className="text-gray-400 mb-4">
              Cuando completas formularios en nuestro sitio web o a través de anuncios en
              plataformas como Facebook e Instagram, recopilamos:
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              <li>Nombre completo</li>
              <li>Número de teléfono</li>
              <li>Correo electrónico</li>
              <li>Información sobre el servicio solicitado</li>
              <li>Archivos adjuntos voluntarios (planos, fotos, etc.)</li>
            </ul>
            <p className="text-sm text-gray-500 mt-4 bg-slate/50 p-4 rounded-lg">
              <strong className="text-gray-300">Datos recopilados automáticamente:</strong> Dirección IP, tipo de navegador,
              sistema operativo, páginas visitadas, tiempo de permanencia, y datos de navegación
              (recopilados mediante Google Analytics y cookies técnicas).
            </p>
          </section>

          <section id="uso-informacion" className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">2. Uso de la Información</h2>
            <p className="text-gray-400 mb-4">
              Utilizamos tu información exclusivamente para:
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              <li>Responder a tu solicitud de cotización o consulta</li>
              <li>Proveer información sobre nuestros servicios</li>
              <li>Dar seguimiento a proyectos activos</li>
              <li>Enviar comunicaciones relacionadas con tu solicitud</li>
              <li>Mejorar nuestros servicios y experiencia del cliente</li>
            </ul>
          </section>

          <section id="cookies" className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">3. Cookies y Tecnologías de Rastreo</h2>
            <p className="text-gray-400">
              Nuestro sitio utiliza cookies para mejorar tu experiencia. Estas cookies nos ayudan a:
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2 mt-4">
              <li>Recordar tus preferencias</li>
              <li>Analizar el tráfico del sitio</li>
              <li>Personalizar contenido</li>
              <li>Medir la efectividad de campañas publicitarias</li>
            </ul>
            <div className="bg-slate/50 p-4 rounded-lg mt-4">
              <p className="text-sm text-gray-300 mb-2">
                <strong>Tipos de cookies utilizadas:</strong>
              </p>
              <ul className="text-sm text-gray-400 space-y-1 list-disc list-inside">
                <li><strong className="text-gray-300">Cookies necesarias:</strong> Esenciales para el funcionamiento del sitio</li>
                <li><strong className="text-gray-300">Cookies analíticas:</strong> Google Analytics para análisis de tráfico</li>
                <li><strong className="text-gray-300">Cookies de preferencias:</strong> Recordar tus configuraciones</li>
              </ul>
            </div>
          </section>

          <section id="seguridad" className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">4. Seguridad de Datos</h2>
            <p className="text-gray-400 mb-4">
              Tu información personal:
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              <li><strong className="text-gray-300">NO será vendida</strong> a terceros bajo ninguna circunstancia</li>
              <li><strong className="text-gray-300">NO será compartida</strong> con empresas externas para fines de marketing</li>
              <li><strong className="text-gray-300">Será almacenada de forma segura</strong> en servidores protegidos</li>
              <li><strong className="text-gray-300">Solo será accedida</strong> por personal autorizado de ITSS</li>
            </ul>
            <p className="text-sm text-gray-500 mt-4 bg-slate/50 p-4 rounded-lg">
              <strong className="text-gray-300">Medidas de seguridad implementadas:</strong> Cifrado SSL/TLS para todas las
              transmisiones, almacenamiento en servidores seguros con acceso restringido, y
              auditorías regulares de seguridad.
            </p>
          </section>

          <section id="cumplimiento-legal" className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">5. Cumplimiento Legal</h2>
            <p className="text-gray-400 mb-4">
              IT Services & Security cumple con:
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
              <li><strong className="text-gray-300">Ley 111-2005 de Puerto Rico:</strong> Ley para Proteger la Información Personal y Financiera del Consumidor</li>
              <li><strong className="text-gray-300">Ley de Protección de Información Personal (PIPA):</strong> Normativas locales de privacidad</li>
              <li>Mejores prácticas internacionales de protección de datos</li>
            </ul>
            <p className="text-gray-400 mt-4">
              Esta política también cumple con las regulaciones de privacidad de Meta (Facebook/Instagram)
              y las leyes aplicables en Puerto Rico y Estados Unidos.
            </p>
          </section>

          {/* Privacy Center Section */}
          <section className="mt-16 bg-gradient-to-br from-blue-50 to-violet-50 rounded-2xl p-8 md:p-12 border-2 border-blue-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              🔐 Centro de Privacidad
            </h2>
            <p className="text-gray-600 mb-8">
              Gestiona tus preferencias de privacidad y controla cómo utilizamos tu información.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Cookie Preferences Card - Blue */}
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all border-2 border-blue-200 hover:border-blue-400">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Preferencias de Cookies
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Controla qué tipos de cookies se utilizan en tu navegador.
                    </p>
                    <button
                      onClick={() => {
                        localStorage.removeItem('cookieConsent');
                        window.location.reload();
                      }}
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
                    >
                      Gestionar Cookies
                    </button>
                  </div>
                </div>
              </div>

              {/* Data Access Request Card - Cyan */}
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all border-2 border-violet-200 hover:border-violet-400">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-violet-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Solicitud de Datos
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Solicita una copia de tus datos personales o su eliminación.
                    </p>
                    <Link
                      href="/contacto?subject=solicitud-datos"
                      className="inline-block bg-violet-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-violet-700 transition-colors shadow-md hover:shadow-lg"
                    >
                      Solicitar Datos
                    </Link>
                  </div>
                </div>
              </div>

              {/* Email Preferences Card - Light Blue */}
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all border-2 border-sky-200 hover:border-sky-400">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-brandViolet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Comunicaciones por Email
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Gestiona tus suscripciones y preferencias de comunicación.
                    </p>
                    <Link
                      href="/contacto?subject=preferencias-email"
                      className="inline-block bg-brandViolet-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-brandViolet-600 transition-colors shadow-md hover:shadow-lg"
                    >
                      Gestionar Emails
                    </Link>
                  </div>
                </div>
              </div>

              {/* Privacy Policy Download Card - Indigo */}
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all border-2 border-indigo-200 hover:border-indigo-400">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Documentación Legal
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Descarga nuestras políticas y términos en formato PDF.
                    </p>
                    <button
                      onClick={downloadPrivacyPDF}
                      className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-indigo-700 transition-colors shadow-md hover:shadow-lg"
                    >
                      Descargar PDF
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Privacy Rights Summary */}
          <section className="mt-12 bg-white rounded-xl p-8 shadow-lg border-2 border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              📋 Resumen de tus Derechos de Privacidad
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-3 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Derecho de Acceso</h4>
                  <p className="text-sm text-gray-600">
                    Puedes solicitar una copia de todos los datos personales que tenemos sobre ti.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 p-4 bg-violet-50 rounded-lg border border-violet-200">
                <div className="w-10 h-10 bg-violet-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">✏</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Derecho de Rectificación</h4>
                  <p className="text-sm text-gray-600">
                    Puedes solicitar la corrección de datos incorrectos o incompletos.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 p-4 bg-sky-50 rounded-lg border border-sky-200">
                <div className="w-10 h-10 bg-brandViolet-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">🗑</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Derecho de Eliminación</h4>
                  <p className="text-sm text-gray-600">
                    Puedes solicitar la eliminación de tus datos personales bajo ciertas condiciones.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 p-4 bg-indigo-50 rounded-lg border border-indigo-200">
                <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">🚫</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Derecho de Oposición</h4>
                  <p className="text-sm text-gray-600">
                    Puedes oponerte al procesamiento de tus datos para ciertos propósitos.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">📦</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Derecho de Portabilidad</h4>
                  <p className="text-sm text-gray-600">
                    Puedes recibir tus datos en un formato estructurado y legible por máquina.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 p-4 bg-violet-50 rounded-lg border border-violet-200">
                <div className="w-10 h-10 bg-violet-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">⏸</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Derecho de Limitación</h4>
                  <p className="text-sm text-gray-600">
                    Puedes solicitar la restricción del procesamiento de tus datos.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-violet-50 rounded-lg border-l-4 border-blue-600">
              <p className="text-sm text-gray-700">
                <strong className="text-blue-700 text-base">💡 ¿Necesitas ejercer alguno de estos derechos?</strong>
                <br className="mb-2" />
                Contáctanos en{' '}
                <a href="mailto:itservice.pr4u@gmail.com" className="text-blue-600 hover:text-blue-800 hover:underline font-semibold">
                  itservice.pr4u@gmail.com
                </a>
                {' '}o a través de nuestro{' '}
                <Link href="/contacto" className="text-blue-600 hover:text-blue-800 hover:underline font-semibold">
                  formulario de contacto
                </Link>.
              </p>
            </div>
          </section>

          <section className="mb-8 mt-12 bg-deepBlue/10 p-6 rounded-xl border border-deepBlue/30">
            <h2 className="text-2xl font-bold text-white mb-4">Contacto</h2>
            <p className="text-gray-300 mb-4">
              Para ejercer tus derechos o cualquier pregunta sobre esta política:
            </p>
            <div className="space-y-2 text-gray-300">
              <p>📧 Email: <a href="mailto:itservice.pr4u@gmail.com" className="text-skyBlue hover:underline">itservice.pr4u@gmail.com</a></p>
              <p>📱 WhatsApp: <a href="https://wa.me/19392842551" className="text-skyBlue hover:underline">(939) 284-2551</a></p>
              <p>📞 Teléfono: <a href="tel:+17876193432" className="text-skyBlue hover:underline">(787) 619-3432</a></p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
