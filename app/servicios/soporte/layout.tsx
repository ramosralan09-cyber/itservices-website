import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Soporte Técnico IT',
  description:
    'Soporte técnico profesional en Puerto Rico. Remoto, en sitio y mantenimiento preventivo. Contratos personalizados con respuesta garantizada.',
  keywords: [
    'soporte técnico Puerto Rico',
    'soporte IT',
    'mantenimiento preventivo',
    'soporte remoto',
    'help desk',
    'Mayagüez',
  ],
  openGraph: {
    title: 'Soporte Técnico IT | IT Services & Security PR',
    description:
      'Soporte profesional cuando lo necesites: remoto, en sitio o mantenimiento programado',
    url: 'https://itservicespr.com/servicios/soporte',
    type: 'website',
    images: ['/images/services/soporte/og-soporte.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Soporte Técnico IT | IT Services & Security PR',
    description: 'Soporte técnico profesional remoto y en sitio',
    images: ['/images/services/soporte/og-soporte.jpg'],
  },
  alternates: {
    canonical: 'https://itservicespr.com/servicios/soporte',
  },
};

export default function SoporteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
