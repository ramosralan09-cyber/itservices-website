import ConsultoriaClient from './ConsultoriaClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title:
    'Consultoría Tecnológica y Diseño de Proyectos de Seguridad en Puerto Rico | IT Services & Security',
  description:
    'Asesoría profesional en redes empresariales, cámaras de seguridad, control de acceso, infraestructura IT y planificación de proyectos tecnológicos en Puerto Rico. Optimizamos y escalamos tus sistemas con soluciones eficientes y estratégicas.',
  keywords: [
    'consultoría tecnológica Puerto Rico',
    'consultoría redes PR',
    'consultoría seguridad Puerto Rico',
    'diseño de proyectos de seguridad PR',
    'auditoría de redes Puerto Rico',
    'asesoría CCTV Puerto Rico',
    'consultoría empresarial PR',
    'infraestructura tecnológica Puerto Rico',
    'consultoría IT Services & Security',
  ],
  alternates: {
    canonical: 'https://itservicespr.com/servicios/consultoria',
  },
  openGraph: {
    title:
      'Consultoría Tecnológica y Diseño de Sistemas de Seguridad en Puerto Rico',
    description:
      'Expertos en análisis, optimización y diseño de redes empresariales, cámaras de seguridad, control de acceso y proyectos IT para negocios en todo Puerto Rico.',
    url: 'https://itservicespr.com/servicios/consultoria',
    type: 'website',
    locale: 'es_PR',
    siteName: 'IT Services & Security',
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Consultoría Tecnológica y de Seguridad | IT Services & Security Puerto Rico',
    description:
      'Planeación estratégica y asesoría experta en proyectos IT, redes y seguridad para negocios en Puerto Rico.',
    images: ['https://itservicespr.com/images/logo512.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ConsultoriaPage() {
  return <ConsultoriaClient />;
}
