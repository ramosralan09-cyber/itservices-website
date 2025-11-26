export const metadata = {
  title: 'Política de Privacidad | IT Services & Security Puerto Rico',
  description:
    'Política de privacidad de IT Services & Security en Puerto Rico. Conoce cómo protegemos tus datos personales al ofrecer servicios de cámaras, redes y seguridad.',
  keywords: [
    'política de privacidad Puerto Rico',
    'privacidad IT Services & Security',
    'protección de datos PR',
    'tratamiento de datos personales',
  ],
  openGraph: {
    title: 'Política de Privacidad | IT Services & Security',
    description:
      'Información clara sobre cómo recopilamos, usamos y protegemos tus datos personales en nuestros servicios de seguridad y tecnología en Puerto Rico.',
    url: 'https://itservicespr.com/privacidad',
    siteName: 'IT Services & Security',
    locale: 'es_PR',
    type: 'article',
  },
  alternates: {
    canonical: 'https://itservicespr.com/privacidad',
  },
};

export default function PrivacidadPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-4xl font-bold mb-6">Política de Privacidad</h1>

      <p className="mb-4">
        En <strong>IT Services & Security</strong> respetamos tu privacidad y protegemos la
        información que compartes con nosotros. Esta política explica cómo recopilamos, usamos y
        cuidamos tus datos personales cuando visitas nuestro sitio web o contratas nuestros
        servicios en Puerto Rico.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">1. Información que recopilamos</h2>
      <p className="mb-2">Podemos recopilar los siguientes tipos de datos:</p>
      <ul className="list-disc pl-6 space-y-2 mb-4">
        <li>Nombre y datos de contacto (teléfono, correo electrónico, empresa).</li>
        <li>Información de proyectos o servicios solicitados.</li>
        <li>Mensajes enviados por formularios, WhatsApp u otros canales.</li>
        <li>Datos técnicos básicos de navegación (IP, navegador, páginas visitadas).</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-3">2. Uso de la información</h2>
      <p className="mb-2">Usamos tus datos para:</p>
      <ul className="list-disc pl-6 space-y-2 mb-4">
        <li>Responder cotizaciones y solicitudes de servicio.</li>
        <li>Coordinar visitas técnicas, mantenimientos y proyectos.</li>
        <li>Mejorar nuestros servicios y contenido del sitio web.</li>
        <li>Enviar comunicaciones relacionadas a servicios que hayas solicitado.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-3">3. Conservación y protección</h2>
      <p className="mb-4">
        La información se almacena de forma segura y solo el personal autorizado de IT Services &
        Security tiene acceso a ella. No vendemos ni compartimos tus datos con terceros, excepto
        cuando sea necesario para prestar un servicio (por ejemplo, soporte de fabricantes o
        proveedores) o cuando la ley lo requiera.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">4. Cookies y análisis</h2>
      <p className="mb-4">
        Este sitio puede utilizar herramientas de análisis y píxeles de seguimiento (como Google
        Analytics y Meta Pixel) para medir el rendimiento de la página y campañas de marketing. Esta
        información se utiliza de forma agregada y no se emplea para identificarte de manera
        individual.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">5. Tus derechos</h2>
      <p className="mb-4">
        Si deseas actualizar, corregir o solicitar la eliminación de tus datos de contacto, puedes
        escribirnos a nuestro correo oficial o a través del formulario de contacto en la página web.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">6. Contacto</h2>
      <p className="mb-1">
        Si tienes preguntas sobre esta política de privacidad, puedes escribirnos a:
      </p>
      <p className="mb-4">
        <strong>IT Services & Security</strong>
        <br />
        Correo: <a href="mailto:itservice.pr4u@gmail.com">itservice.pr4u@gmail.com</a>
        <br />
        Teléfono: <a href="tel:+19392842551">(939) 284-2551</a>
      </p>

      <p className="text-sm text-gray-400 mt-6">
        Esta política puede actualizarse ocasionalmente para reflejar cambios en nuestros procesos o
        en la ley aplicable.
      </p>
    </div>
  );
}
