import SeguridadClient from './SeguridadClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cámaras de Seguridad y Control de Acceso en Puerto Rico | Instalación Profesional',
  description:
    'Instalamos cámaras de seguridad, CCTV, control de acceso, imanes, TeleEntry y soluciones de vigilancia para negocios en Puerto Rico. Sistemas modernos, confiables y diseñados para proteger tu empresa las 24 horas.',
  keywords: [
    'cámaras de seguridad Puerto Rico',
    'cámaras para negocios PR',
    'instalación de CCTV Puerto Rico',
    'control de acceso PR',
    'TeleEntry Puerto Rico',
    'imanes de seguridad',
    'cámaras solares 4G',
    'IT Services & Security',
    'seguridad comercial Puerto Rico',
    'sistemas de vigilancia PR',
  ],
  alternates: {
    canonical: 'https://itservicespr.com/servicios/seguridad',
  },
  openGraph: {
    title: 'Cámaras de Seguridad y Control de Acceso para Negocios en Puerto Rico',
    description:
      'Soluciones profesionales de seguridad para comercios, oficinas y empresas en toda la isla. CCTV, acceso controlado, TeleEntry e imanes de seguridad.',
    url: 'https://itservicespr.com/servicios/seguridad',
    siteName: 'IT Services & Security',
    locale: 'es_PR',
    type: 'website',
    images: [
      {
        url: 'https://itservicespr.com/images/logo512.png',
        width: 1200,
        height: 630,
        alt: 'IT Services & Security – Cámaras y Control de Acceso en Puerto Rico',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cámaras de Seguridad y Control de Acceso | IT Services & Security',
    description:
      'Instalación profesional de cámaras de seguridad, control de acceso, TeleEntry e imanes para negocios en Puerto Rico.',
    images: ['https://itservicespr.com/images/logo512.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function SeguridadPage() {
  return <SeguridadClient />;
}
