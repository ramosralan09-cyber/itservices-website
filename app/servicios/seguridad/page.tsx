import SeguridadClient from './SeguridadClient';

export const metadata = {
  title: 'Instalación de Cámaras, Control de Acceso y Seguridad en Puerto Rico | IT Services & Security',
  description:
    'Instalación profesional de cámaras de seguridad, imanes de seguridad, control de acceso, teleentry y redes empresariales en Puerto Rico. Soluciones modernas, confiables y personalizadas en toda la isla.',
  keywords: [
    'cámaras de seguridad Puerto Rico',
    'instalación de CCTV PR',
    'control de acceso Puerto Rico',
    'imanes de seguridad',
    'teleentry Puerto Rico',
    'redes empresariales PR',
    'Hikvision Puerto Rico',
    'IT Services & Security',
    'cámaras solares 4G PR',
  ],
  openGraph: {
    title:
      'Instalación de Cámaras, Control de Acceso y Seguridad en Puerto Rico | IT Services & Security',
    description:
      'Expertos en cámaras de seguridad, control de acceso, imanes, teleentry y redes empresariales para negocios en toda la isla.',
    url: 'https://itservicespr.com/servicios/seguridad',
    images: [
      {
        url: 'https://itservicespr.com/images/logo512.png',
        width: 1200,
        height: 630,
        alt: 'IT Services & Security – Cámaras, Control de Acceso y Seguridad',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Instalación de Sistemas de Seguridad en Puerto Rico | Cámaras, Control de Acceso y Redes',
    description:
      'Servicios profesionales de seguridad: cámaras, imanes, teleentry, CCTV y redes empresariales.',
    images: ['https://itservicespr.com/images/logo512.png'],
  },
};

export default function SeguridadPage() {
  return <SeguridadClient />;
}
