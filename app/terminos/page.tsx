export const metadata = {
  title: 'Términos y Condiciones de Servicio | IT Services & Security Puerto Rico',
  description:
    'Términos y condiciones de uso del sitio web y de los servicios ofrecidos por IT Services & Security en Puerto Rico. Alcance, limitaciones y responsabilidades.',
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
    <div className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-4xl font-bold mb-6">Términos y Condiciones</h1>

      <p className="mb-4">
        Estos términos y condiciones regulan el uso del sitio web de{' '}
        <strong>IT Services & Security</strong> y la relación entre la empresa y sus clientes en
        Puerto Rico. Al acceder a este sitio o contratar nuestros servicios, aceptas estas
        condiciones.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">1. Alcance de los servicios</h2>
      <p className="mb-4">
        IT Services & Security ofrece servicios de instalación, configuración y soporte de cámaras de
        seguridad, redes empresariales, control de acceso, teleentry y soluciones tecnológicas
        relacionadas. El alcance específico de cada proyecto se detalla en la propuesta o cotización
        enviada al cliente.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">2. Cotizaciones y pagos</h2>
      <p className="mb-4">
        Las cotizaciones emitidas tienen una validez limitada en el tiempo, indicada en cada
        documento. Los precios pueden variar si cambian las condiciones del proyecto, los equipos
        solicitados o si se añaden trabajos adicionales. Los términos de pago se acuerdan por
        escrito antes de iniciar los trabajos.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">3. Responsabilidad sobre el uso de los sistemas</h2>
      <p className="mb-4">
        El cliente es responsable del uso adecuado de los sistemas instalados (cámaras, redes,
        controles de acceso, etc.) y del cumplimiento de las leyes y regulaciones aplicables en
        Puerto Rico, incluyendo privacidad y vigilancia en lugares de trabajo o áreas públicas.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">4. Garantías y limitaciones</h2>
      <p className="mb-4">
        Las garantías de instalación y de equipos se describen en la sección de{' '}
        <a href="/garantias" className="text-emerald-400 underline">
          Garantías
        </a>
        . IT Services & Security no se hace responsable por daños causados por terceros, fenómenos
        atmosféricos, modificaciones no autorizadas a la instalación o mal uso de los equipos.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">5. Propiedad intelectual</h2>
      <p className="mb-4">
        El contenido de este sitio web (textos, imágenes, logotipos y material gráfico) es propiedad
        de IT Services & Security o se utiliza con autorización. No está permitido copiar, reproducir
        o distribuir dicho contenido sin consentimiento previo por escrito.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">6. Modificaciones a estos términos</h2>
      <p className="mb-4">
        IT Services & Security puede actualizar estos términos y condiciones en cualquier momento
        para reflejar cambios en los servicios, en la legislación o en las políticas internas. La
        versión vigente estará siempre disponible en esta página.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">7. Contacto</h2>
      <p className="mb-4">
        Para dudas relacionadas con estos términos puedes comunicarte con nosotros a través de:
      </p>
      <p className="mb-4">
        <strong>IT Services & Security</strong>
        <br />
        Correo: <a href="mailto:itservice.pr4u@gmail.com">itservice.pr4u@gmail.com</a>
        <br />
        Teléfono: <a href="tel:+19392842551">(939) 284-2551</a>
      </p>

      <p className="text-sm text-gray-400 mt-6">
        Última actualización: {new Date().getFullYear()}.
      </p>
    </div>
  );
}
