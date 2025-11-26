const whatsappLink =
  'https://wa.me/19392842551?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20las%20garant%C3%ADas%20y%20soporte%20de%20IT%20Services%20%26%20Security';

export const metadata = {
  title: 'Garantías y Tiempos de Respuesta | IT Services & Security Puerto Rico',
  description:
    'Conoce nuestras garantías oficiales, tiempos de respuesta y políticas de servicio para cámaras de seguridad, redes, control de acceso y proyectos IT en Puerto Rico.',
  keywords: [
    'garantía cámaras seguridad PR',
    'garantía instalación CCTV Puerto Rico',
    'tiempos de respuesta IT Puerto Rico',
    'servicios IT Services & Security',
    'garantía redes empresariales PR',
    'garantía control de acceso Puerto Rico',
  ],
  openGraph: {
    title: 'Garantías y Tiempos de Respuesta | IT Services & Security',
    description:
      'Garantías oficiales para instalaciones de CCTV, redes, control de acceso, TeleEntry y más. Servicio rápido y profesional en todo Puerto Rico.',
    url: 'https://itservicespr.com/garantias',
    siteName: 'IT Services & Security',
    locale: 'es_PR',
    type: 'article',
  },
  alternates: {
    canonical: 'https://itservicespr.com/garantias',
  },
};

export default function GarantiasPage() {
  return (
    <div className="min-h-screen bg-charcoal text-white">
      {/* HERO */}
      <section className="relative py-16 md:py-20 bg-gradient-to-br from-deepBlue via-charcoal to-charcoal overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)',
              backgroundSize: '40px 40px',
            }}
          />
        </div>

        <div className="relative max-w-5xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/30 border border-blue-500/40 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-sm text-blue-200 font-medium">
              Garantías claras • Tiempos de respuesta definidos
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Garantías y Tiempos de Respuesta
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl">
            En <strong>IT Services & Security</strong> trabajamos con políticas transparentes
            para que sepas exactamente qué cubrimos, por cuánto tiempo y cómo respondemos
            cuando necesitas soporte.
          </p>
        </div>
      </section>

      {/* CONTENIDO PRINCIPAL */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6 space-y-12">
          {/* BLOQUE 1 – GARANTÍA DE INSTALACIÓN */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Garantía de Instalación
            </h2>
            <p className="text-gray-300 mb-4">
              Todas las instalaciones de{' '}
              <strong>cámaras de seguridad, redes, control de acceso, TeleEntry y equipos
              relacionados</strong> realizadas por nuestro equipo incluyen una{' '}
              <strong>garantía de instalación de 1 año</strong>, siempre y cuando:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>No se modifique el cableado, tubería o equipos instalados por terceros.</li>
              <li>No se realicen cambios eléctricos o estructurales sin notificar previamente.</li>
              <li>Se utilicen equipos recomendados o aprobados por IT Services & Security.</li>
            </ul>
            <p className="text-gray-400 text-sm mt-3">
              Esta garantía cubre errores de instalación, terminaciones defectuosas y ajustes
              necesarios para que el sistema funcione como fue diseñado originalmente.
            </p>
          </div>

          {/* BLOQUE 2 – GARANTÍA DE EQUIPOS */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Garantía de Equipos
            </h2>
            <p className="text-gray-300 mb-4">
              Los equipos instalados (cámaras, NVR/DVR, switches, controladores, cerraduras
              magnéticas, paneles, etc.) cuentan con{' '}
              <strong>garantía del fabricante</strong>, que usualmente va de{' '}
              <strong>1 a 3 años</strong> dependiendo de la marca y la línea de producto.
            </p>
            <p className="text-gray-300 mb-3">
              La garantía del fabricante aplica a <strong>defectos de fábrica</strong> y no
              cubre:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Daños por descargas eléctricas, variaciones de voltaje o eventos atmosféricos.</li>
              <li>Manipulación incorrecta del equipo, golpes o vandalismo.</li>
              <li>Instalaciones realizadas o modificadas por personal no autorizado.</li>
            </ul>
            <p className="text-gray-400 text-sm mt-3">
              En muchos casos, <strong>gestionamos la garantía directamente con el suplidor</strong>
              para que el proceso sea más simple para el cliente.
            </p>
          </div>

          {/* BLOQUE 3 – TIEMPOS DE RESPUESTA */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Tiempos de Respuesta Estimados
            </h2>
            <p className="text-gray-300 mb-4">
              Nuestros tiempos pueden variar según la carga de trabajo y la ubicación, pero
              trabajamos con los siguientes objetivos de respuesta:
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-slate rounded-xl p-5">
                <p className="text-sm text-gray-400 mb-1 font-medium uppercase tracking-wide">
                  Emergencias
                </p>
                <p className="text-3xl font-bold text-emerald-400 mb-2">&lt; 24h</p>
                <p className="text-gray-300 text-sm">
                  Cortes completos de sistema, caídas críticas o fallas que afecten la
                  operación del negocio.
                </p>
              </div>

              <div className="bg-slate rounded-xl p-5">
                <p className="text-sm text-gray-400 mb-1 font-medium uppercase tracking-wide">
                  Soporte Remoto
                </p>
                <p className="text-3xl font-bold text-blue-400 mb-2">1 – 4h</p>
                <p className="text-gray-300 text-sm">
                  Ajustes de configuración, accesos remotos, usuarios, apps móviles y
                  revisiones básicas.
                </p>
              </div>

              <div className="bg-slate rounded-xl p-5">
                <p className="text-sm text-gray-400 mb-1 font-medium uppercase tracking-wide">
                  Visitas Programadas
                </p>
                <p className="text-3xl font-bold text-amber-300 mb-2">1 – 5 días</p>
                <p className="text-gray-300 text-sm">
                  Mantenimientos preventivos, ampliaciones de sistema o trabajos no críticos.
                </p>
              </div>
            </div>

            <p className="text-gray-400 text-sm mt-4">
              * Estos tiempos son referencias generales. Para contratos de mantenimiento o
              clientes con SLA se pueden establecer tiempos específicos por escrito.
            </p>
          </div>

          {/* BLOQUE 4 – CÓMO SOLICITAR SERVICIO */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              ¿Cómo Solicitar Servicio o Garantía?
            </h2>
            <p className="text-gray-300 mb-4">
              Para atender tu caso de la forma más rápida posible, te recomendamos:
            </p>
            <ol className="list-decimal pl-6 space-y-2 text-gray-300">
              <li>Escribirnos por <strong>WhatsApp</strong> con una breve descripción del problema.</li>
              <li>Incluir fotos o videos del área afectada, si es posible.</li>
              <li>Indicar el nombre del negocio, ubicación y fecha aproximada de instalación.</li>
            </ol>
            <p className="text-gray-300 mt-4">
              También puedes contactar a través de nuestra página de{' '}
              <a
                href="/contacto"
                className="text-skyBlue hover:text-blue-300 underline"
              >
                contacto
              </a>
              , pero WhatsApp suele ser el canal más rápido para coordinar.
            </p>
          </div>

          {/* CTA FINAL */}
          <div className="mt-10 bg-gradient-to-r from-blue-600/30 via-skyBlue/20 to-emerald-500/20 border border-blue-500/40 rounded-2xl p-6 md:p-8 text-center">
            <h3 className="text-2xl font-bold mb-3">
              ¿Tienes una duda sobre tu garantía o necesitas soporte?
            </h3>
            <p className="text-gray-200 mb-6">
              Escríbenos y con gusto revisamos tu caso. Nuestro objetivo es que tu sistema
              se mantenga funcionando al 100% y con la claridad que mereces.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-sm md:text-base shadow-lg shadow-emerald-500/40 transition-colors"
              >
                Escribir por WhatsApp
              </a>
              <a
                href="/contacto"
                className="px-8 py-3 rounded-xl bg-transparent border border-blue-400 text-blue-200 hover:bg-blue-500/10 font-semibold text-sm md:text-base transition-colors"
              >
                Ir a la página de Contacto
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
