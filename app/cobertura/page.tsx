import type { Metadata } from 'next';
import CoberturaClient from './CoberturaClient';

export const metadata: Metadata = {
  title:
    'Cobertura en Puerto Rico | Cámaras de Seguridad, Redes y Control de Acceso | IT Services & Security',
  description:
    'Instalación profesional de cámaras de seguridad, redes empresariales, control de acceso y sistemas de seguridad en toda Puerto Rico. Cobertura en Mayagüez, Aguadilla, San Juan, Ponce y más municipios.',
  keywords: [
    'cámaras de seguridad Puerto Rico',
    'cámaras de seguridad Mayagüez',
    'cámaras de seguridad Aguadilla',
    'cámaras de seguridad San Juan',
    'instalación de cámaras PR',
    'control de acceso Puerto Rico',
    'redes empresariales Puerto Rico',
    'servicios de seguridad en toda la isla',
    'IT Services & Security cobertura',
  ],
  openGraph: {
    title:
      'Cobertura en Puerto Rico | Servicios de Seguridad y Redes | IT Services & Security',
    description:
      'Brindamos servicios de seguridad, cámaras CCTV, redes empresariales y control de acceso en toda Puerto Rico: región oeste, norte, sur, este, centro y área metro.',
    url: 'https://itservicespr.com/cobertura',
    siteName: 'IT Services & Security',
    locale: 'es_PR',
    type: 'website',
  },
  alternates: {
    canonical: 'https://itservicespr.com/cobertura',
  },
};

export default function CoberturaPage() {
  return <CoberturaClient />;
}
