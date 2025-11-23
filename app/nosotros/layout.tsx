import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sobre Nosotros',
  description:
    'Empresa líder en servicios de tecnología y seguridad en Puerto Rico. Más de 100 proyectos completados con experiencia en gobierno y sector privado.',
  keywords: [
    'empresa IT Puerto Rico',
    'servicios tecnología PR',
    'instalaciones CCTV',
    'proyectos tecnológicos',
    'Mayagüez',
  ],
  openGraph: {
    title: 'Sobre Nosotros | IT Services & Security PR',
    description:
      'Conoce al equipo detrás de las mejores soluciones tecnológicas en Puerto Rico',
    url: 'https://itservicespr.com/nosotros',
    type: 'website',
    images: ['/images/about/og-nosotros.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sobre Nosotros | IT Services & Security PR',
    description: 'Empresa líder en tecnología y seguridad en Puerto Rico',
    images: ['/images/about/og-nosotros.jpg'],
  },
  alternates: {
    canonical: 'https://itservicespr.com/nosotros',
  },
};

export default function NosotrosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
