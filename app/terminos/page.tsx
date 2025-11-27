import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Términos y Condiciones de Servicio | IT Services & Security Puerto Rico',
  description:
    'Términos y condiciones de uso del sitio web y de los servicios ofrecidos por IT Services & Security en Puerto Rico. Alcance, limitaciones, responsabilidades y garantías.',
  keywords: [
    'términos y condiciones Puerto Rico',
    'términos de servicio IT Services & Security',
    'condiciones de uso PR',
    'términos cámaras de seguridad PR',
    'términos servicios de redes PR',
  ],
  openGraph: {
    title: 'Términos y Condiciones | IT Services & Security',
    description:
      'Revisa los términos y condiciones aplicables al uso de este sitio web y a los servicios de instalación y soporte de seguridad y redes en Puerto Rico.',
    url: 'https://itservicespr.com/terminos',
    siteName: 'IT Services & Security',
    locale: 'es_PR',
    type: 'article',
  },
  alternates: {
    canonical: 'https://itservicespr.com/terminos',
  },
};

export default function TerminosPage() {
  return (
    <div className="min-h-screen bg-charcoal">
      <main className="max-w-4xl mx-auto py-16 px-6">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-white">
          Términos y Condiciones
        </h1>

        <p className="text-gray-300 mb-6">
          Estos términos y condiciones regulan el uso del sitio web de{' '}
          <strong>IT Services & Security</strong> y la relación entre la empresa y sus clientes en
          Puerto Rico. Al acceder a este sitio o contratar nuestros servicios, aceptas estas
          condiciones.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-white">
            1. Alcance de los servicios
          </h2>
          <p className="text-gray-300">
            IT Services & Security ofrece servicios de instalación, configuración y soporte de
            cámaras de seguridad, redes empresariales, control de acceso, teleentry y otras
            soluciones tecnológicas relacionadas. El alcance específico de cada proyecto se detalla
            en la propuesta o cotización enviada al cliente, incluyendo equipos, mano de obra,
            tiempos estimados y condiciones particulares.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-white">
            2. Cotizaciones y pagos
          </h2>
          <p className="text-gray-300 mb-2">
            Las cotizaciones emitidas tienen una validez limitada en el tiempo, indicada en cada
            documento. Los precios pueden variar si:
          </p>
          <ul className="list-disc pl-6 text-gray-300 space-y-1 mb-2">
            <li>Cambian las condiciones del proyecto o el alcance solicitado.</li>
            <li>Se modifican los equipos o marcas inicialmente propuestos.</li>
            <li>Se añaden trabajos adicionales no contemplados en la cotización original.</li>
          </ul>
          <p className="text-gray-300">
            Los términos de pago se acuerdan por escrito antes de iniciar los trabajos e incluyen,
            en la mayoría de los casos, un depósito inicial para compra de materiales y reserva de
            fecha, y un balance a pagar a la entrega o según etapas del proyecto.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-white">
            3. Responsabilidad sobre el uso de los sistemas
          </h2>
          <p className="text-gray-300">
            El cliente es responsable del uso adecuado de los sistemas instalados (cámaras, redes,
            controles de acceso, etc.) y del cumplimiento de las leyes y regulaciones aplicables en
            Puerto Rico, incluyendo privacidad y vigilancia en lugares de trabajo o áreas públicas.
            IT Services & Security no se hace responsable por el uso indebido que terceras personas
            hagan de las soluciones instaladas.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-white">
            4. Garantías y limitaciones
          </h2>
          <p className="text-gray-300 mb-2">
            Las garantías de instalación y de equipos se describen en la sección de{' '}
            <a href="/garantias" className="text-skyBlue underline">
              Garantías
            </a>
            . En términos generales:
          </p>
          <ul className="list-disc pl-6 text-gray-300 space-y-1 mb-2">
            <li>La mano de obra de instalación cuenta con garantía limitada.</li>
            <li>
              Los equipos tienen garantía del fabricante contra defectos de fabricación por el
              período indicado por la marca.
            </li>
            <li>
              No se cubren daños causados por terceros, fenómenos atmosféricos, fluctuaciones
              eléctricas severas, modificaciones no autorizadas o mal uso de los equipos.
            </li>
          </ul>
          <p className="text-gray-300">
            IT Services & Security no se hace responsable por pérdidas económicas, robos, daños o
            incidentes derivados de fallos en equipos, cortes de energía, problemas de internet o
            mal uso de los sistemas de seguridad.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-white">
            5. Propiedad intelectual
          </h2>
          <p className="text-gray-300">
            El contenido de este sitio web (textos, imágenes, logotipos y material gráfico) es
            propiedad de IT Services & Security o se utiliza con autorización. No está permitido
            copiar, reproducir o distribuir dicho contenido sin consentimiento previo por escrito.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-white">
            6. Acceso remoto y credenciales
          </h2>
          <p className="text-gray-300 mb-2">
            En proyectos donde configuramos acceso remoto a equipos (DVR, NVR, routers, sistemas de
            control de acceso, etc.):
          </p>
          <ul className="list-disc pl-6 text-gray-300 space-y-1">
            <li>
              Entregamos credenciales al cliente o a la persona encargada designada al finalizar el
              proyecto.
            </li>
            <li>
              Es responsabilidad del cliente resguardar dichas credenciales y notificarnos si
              requiere cambios, reseteos o revocación de accesos.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-white">
            7. Modificaciones a estos términos
          </h2>
          <p className="text-gray-300 mb-4">
            IT Services & Security puede actualizar estos términos y condiciones en cualquier
            momento para reflejar cambios en los servicios, en la legislación o en las políticas
            internas. La versión vigente estará siempre disponible en esta página.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-white">8. Contacto</h2>
          <p className="text-gray-300 mb-2">
            Para dudas relacionadas con estos términos puedes comunicarte con nosotros a través de:
          </p>
          <p className="text-gray-300 mb-4">
            <strong>IT Services & Security</strong>
            <br />
            Correo:{' '}
            <a
              href="mailto:itservice.pr4u@gmail.com"
              className="text-skyBlue underline"
            >
              itservice.pr4u@gmail.com
            </a>
            <br />
            Teléfono:{' '}
            <a href="tel:+19392842551" className="text-skyBlue underline">
              (939) 284-2551
            </a>
          </p>
        </section>

        <p className="text-sm text-gray-500 mt-6">
          Última actualización: {new Date().getFullYear()}.
        </p>
      </main>
    </div>
  );
}
