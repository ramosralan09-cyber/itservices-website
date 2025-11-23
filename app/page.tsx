import { Metadata } from 'next';
import { HomeContent } from '@/components/home/HomeContent';

export const metadata: Metadata = {
  title: 'Cámaras de Seguridad, Redes y Control de Acceso en Puerto Rico | IT Services & Security',
  description:
    'Instalación de cámaras de seguridad CCTV 4K, redes empresariales, control de acceso y soporte técnico para negocios en Puerto Rico. Equipo especializado con más de 12 años de experiencia en Mayagüez y toda la isla.',
  keywords:
    'cámaras de seguridad Puerto Rico, instalación CCTV Puerto Rico, instalación cámaras Mayagüez, redes empresariales Puerto Rico, técnicos de seguridad para negocios, control de acceso Puerto Rico, sistemas de videovigilancia PR, IT Services & Security, soporte técnico IT Puerto Rico, cámaras seguridad PR',
  openGraph: {
    title: 'IT Services & Security - Cámaras de Seguridad y Redes en Puerto Rico',
    description:
      'Soluciones profesionales de cámaras de seguridad, redes empresariales y control de acceso para negocios en Puerto Rico. Infraestructura tecnológica completa y soporte técnico especializado.',
    url: 'https://www.itservicespr.com',
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
    title: 'IT Services & Security | Cámaras de Seguridad y Redes en Puerto Rico',
    description:
      'Instalación de CCTV, redes empresariales y control de acceso para negocios en Puerto Rico.',
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
    canonical: 'https://www.itservicespr.com',
  },
};

export default function Home() {
  return <HomeContent />;
}
