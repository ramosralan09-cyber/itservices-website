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
      'Garantías oficiales para instalaciones de CCTV, redes, acceso, teleentry y más. Servicio rápido y profesional en todo Puerto Rico.',
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
    <div className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-4xl font-bold mb-6">Garantías y Tiempos de Respuesta</h1>

      <p className="mb-4">
        En <strong>IT Services & Security</strong> ofrecemos servicio profesional y soporte continuo
        para todos nuestros clientes en Puerto Rico. Nuestras garantías varían según el tipo de servicio
        y se explican a continuación.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Garantía de Instalación</h2>
      <p className="mb-4">
        Todas las instalaciones de cámaras, redes, control de acceso y equipos incluyen una garantía de
        instalación de <strong>1 año</strong> siempre que no se modifique la infraestructura instalada.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Garantía de Equipos</h2>
      <p className="mb-4">
        Los equipos cuentan con garantía del fabricante, la cual varía entre <strong>1 a 3 años</strong>
        dependiendo de la marca. La garantía del fabricante se aplica a defectos de fábrica.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Tiempos de Respuesta</h2>
      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li><strong>Emergencias:</strong> respuesta en menos de 24 horas.</li>
        <li><strong>Soporte remoto:</strong> 1–4 horas en horario laboral.</li>
        <li><strong>Visitas programadas:</strong> 1–5 días laborables.</li>
      </ul>

      <p className="mt-6">
        Para solicitar servicio, escríbenos por WhatsApp o completa el formulario de contacto.
      </p>
    </div>
  );
}
