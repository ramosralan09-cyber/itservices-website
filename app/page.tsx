import { Metadata } from 'next';
import { HomeContent } from '@/components/home/HomeContent';

export const metadata: Metadata = {
  title:
    'Cámaras de Seguridad, Control de Acceso y Redes en Puerto Rico | IT Services & Security',
  description:
    'Instalación profesional de cámaras de seguridad CCTV 4K, cámaras solares 4G, imanes de seguridad, control de acceso, TeleEntry y redes empresariales para negocios en Puerto Rico. Más de 12 años de experiencia brindando soluciones completas de seguridad y tecnología desde Mayagüez a toda la isla.',
  keywords: [
    'cámaras de seguridad Puerto Rico',
    'instalación CCTV Puerto Rico',
    'cámaras de seguridad Mayagüez',
    'cámaras solares 4G Puerto Rico',
    'imanes de seguridad PR',
    'control de acceso Puerto Rico',
    'teleentry Puerto Rico',
    'redes empresariales Puerto Rico',
    'wifi profesional PR',
    'técnicos de seguridad para negocios',
    'soporte técnico IT Puerto Rico',
    'IT Services & Security',
  ],
  openGraph: {
    title:
      'IT Services & Security – Cámaras de Seguridad, Control de Acceso y Redes en Puerto Rico',
    description:
      'Soluciones profesionales en cámaras de seguridad, imanes, control de acceso, TeleEntry, redes empresariales y soporte técnico para negocios en Puerto Rico. Infraestructura tecnológica completa y servicio confiable.',
    url: 'https://itservicespr.com',
    siteName: 'IT Services & Security',
    locale: 'es_PR',
    type: 'website',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'IT Services & Security Puerto Rico',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'IT Services & Security | Cámaras de Seguridad, Control de Acceso y Redes en Puerto Rico',
    description:
      'Instalación de CCTV, cámaras solares 4G, redes empresariales, imanes y control de acceso para negocios en Puerto Rico.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://itservicespr.com',
  },
};

export default function Home() {
  return <HomeContent />;
}
