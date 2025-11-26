import { Metadata } from 'next';
import PortafolioClient from './PortafolioClient';

export const metadata: Metadata = {
  title:
    'Portafolio de Proyectos de Seguridad y Redes en Puerto Rico | IT Services & Security',
  description:
    'Explora más de 120 proyectos realizados por IT Services & Security en toda Puerto Rico: cámaras de seguridad, control de acceso, redes empresariales, soluciones solares y más.',
  keywords: [
    'portafolio cámaras de seguridad Puerto Rico',
    'proyectos CCTV Puerto Rico',
    'instalación de cámaras PR',
    'proyectos de redes empresariales PR',
    'control de acceso Puerto Rico',
    'IT Services & Security portafolio',
  ],
  openGraph: {
    title:
      'Portafolio de Proyectos | IT Services & Security Puerto Rico',
    description:
      'Más de 120 proyectos completados en cámaras de seguridad, redes, control de acceso y soluciones tecnológicas en toda la isla.',
    url: 'https://itservicespr.com/portafolio',
    siteName: 'IT Services & Security',
    locale: 'es_PR',
    type: 'website',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Portafolio de proyectos de IT Services & Security en Puerto Rico',
      },
    ],
  },
  alternates: {
    canonical: 'https://itservicespr.com/portafolio',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PortafolioPage() {
  return <PortafolioClient />;
}
