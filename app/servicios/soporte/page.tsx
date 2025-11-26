import SoporteClient from './SoporteClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title:
    'Soporte Técnico y Mantenimiento de Cámaras y Redes en Puerto Rico | IT Services & Security',
  description:
    'Soporte técnico profesional y planes de mantenimiento para cámaras de seguridad, CCTV, redes empresariales, control de acceso, imanes y TeleEntry en Puerto Rico. Respuesta rápida y servicio confiable para negocios en toda la isla.',
  keywords: [
    'soporte técnico Puerto Rico',
    'mantenimiento cámaras de seguridad PR',
    'mantenimiento CCTV Puerto Rico',
    'mantenimiento redes empresariales PR',
    'soporte sistemas de seguridad PR',
    'mantenimiento control de acceso PR',
    'servicio técnico cámaras PR',
    'soporte NVR DVR Puerto Rico',
    'IT Services & Security',
  ],
  alternates: {
    canonical: 'https://itservicespr.com/servicios/soporte',
  },
  openGraph: {
    title:
      'Soporte Técnico y Mantenimiento de Sistemas de Seguridad y Redes en Puerto Rico',
    description:
      'Planes de soporte y mantenimiento para cámaras, CCTV, redes empresariales, control de acceso e imanes de seguridad. Servicio profesional y respuesta rápida en toda la isla.',
    url: 'https://itservicespr.com/servicios/soporte',
    type: 'website',
    siteName: 'IT Services & Security',
    locale: 'es_PR',
    images: [
      {
        url: 'https://itservicespr.com/images/logo512.png',
        width: 1200,
        height: 630,
        alt: 'Soporte técnico y mantenimiento - IT Services & Security',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Soporte Técnico y Mantenimiento de Cámaras y Redes | IT Services & Security',
    description:
      'Mantenimiento preventivo y correctivo de sistemas de seguridad y redes para negocios en Puerto Rico.',
    images: ['https://itservicespr.com/images/logo512.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function SoportePage() {
  return <SoporteClient />;
}
