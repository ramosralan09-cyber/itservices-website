import { Metadata } from 'next';
import { HomeContent } from '@/components/home/HomeContent';

export const metadata: Metadata = {
  title:
    'Cámaras de Seguridad, Control de Acceso y Redes en Puerto Rico | IT Services & Security',
  description:
    'Instalación profesional y limpia de cámaras de seguridad (CCTV 4K y cámaras solares 4G), control de acceso/TeleEntry y redes empresariales para negocios y proyectos comerciales en Puerto Rico. +12 años de experiencia y cobertura en toda la isla.',
  keywords: [
    'cámaras de seguridad Puerto Rico',
    'instalación CCTV Puerto Rico',
    'cámaras de seguridad Mayagüez',
    'cámaras solares 4G Puerto Rico',
    'control de acceso Puerto Rico',
    'teleentry Puerto Rico',
    'redes empresariales Puerto Rico',
    'wifi profesional Puerto Rico',
    'cableado estructurado Puerto Rico',
    'técnicos de seguridad para negocios',
    'IT Services & Security',
  ],
  openGraph: {
    title:
      'IT Services & Security | Cámaras, Control de Acceso y Redes en Puerto Rico',
    description:
      'Protección y conectividad para negocios en Puerto Rico: CCTV 4K, cámaras solares 4G, control de acceso/TeleEntry y redes empresariales, con instalación profesional y cobertura en toda la isla.',
    url: 'https://itservicespr.com',
    siteName: 'IT Services & Security',
    locale: 'es_PR',
    type: 'website',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'IT Services & Security – Seguridad y redes en Puerto Rico',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'IT Services & Security | Seguridad y redes para negocios en Puerto Rico',
    description:
      'CCTV 4K, cámaras solares 4G, control de acceso/TeleEntry y redes empresariales, con instalación profesional y cobertura en toda la isla.',
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
