import { Metadata } from 'next';
import { HomeContent } from '@/components/home/HomeContent';

export const metadata: Metadata = {
  title: 'IT Services & Security | Redes, CCTV, Control de Acceso en Puerto Rico',
  description:
    'Expertos en infraestructura tecnológica, sistemas de seguridad CCTV 4K, control de acceso biométrico y consultoría IT. 120+ proyectos en Puerto Rico. Mayagüez y toda la isla.',
  keywords:
    'IT Puerto Rico, cámaras seguridad PR, redes empresariales, CCTV Mayagüez, control acceso, fibra óptica, consultoría IT',
  openGraph: {
    title: 'IT Services & Security - Tecnología y Seguridad en Puerto Rico',
    description:
      'Infraestructura de redes, CCTV 4K, control de acceso y consultoría IT. Protegiendo empresas en Puerto Rico desde hace 12+ años.',
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
    title: 'IT Services & Security | Tecnología y Seguridad PR',
    description:
      'Expertos en infraestructura, CCTV y control de acceso en Puerto Rico',
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
