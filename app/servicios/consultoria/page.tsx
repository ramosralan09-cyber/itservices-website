import ConsultoriaClient from './ConsultoriaClient';

export const metadata = {
  title:
    'Consultoría Tecnológica y Diseño de Proyectos de Seguridad en Puerto Rico | IT Services & Security',
  description:
    'Asesoría experta en redes empresariales, cámaras de seguridad, control de acceso y proyectos de infraestructura tecnológica en Puerto Rico. Te ayudamos a planificar, optimizar y escalar tus sistemas de seguridad y networking.',
  keywords: [
    'consultoría tecnológica Puerto Rico',
    'consultoría redes PR',
    'consultoría seguridad Puerto Rico',
    'diseño de proyectos de seguridad PR',
    'auditoría de redes PR',
    'asesoría CCTV Puerto Rico',
    'consultoría IT Services & Security',
    'consultoría infraestructura tecnológica PR',
  ],
  alternates: {
    canonical: 'https://itservicespr.com/servicios/consultoria',
  },
  openGraph: {
    title:
      'Consultoría Tecnológica y de Seguridad en Puerto Rico | IT Services & Security',
    description:
      'Planeamos y diseñamos contigo redes empresariales, sistemas de cámaras, control de acceso y proyectos IT completos para tu negocio en Puerto Rico.',
    url: 'https://itservicespr.com/servicios/consultoria',
    type: 'website',
    siteName: 'IT Services & Security PR',
  },
};

export default function ConsultoriaPage() {
  return <ConsultoriaClient />;
}
