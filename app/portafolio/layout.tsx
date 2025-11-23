import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portafolio de Proyectos',
  description:
    'Más de 100 proyectos completados en Puerto Rico: Infosys, Policía de Cabo Rojo, Ricomini. Instalaciones de redes, CCTV y seguridad empresarial.',
  keywords: [
    'proyectos IT Puerto Rico',
    'casos de éxito',
    'instalaciones CCTV',
    'proyectos redes',
    'Mayagüez',
  ],
  openGraph: {
    title: 'Portafolio | IT Services & Security PR',
    description: 'Conoce nuestros proyectos completados en toda la isla',
    url: 'https://itservicespr.com/portafolio',
    type: 'website',
    images: ['/images/portfolio/og-portfolio.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portafolio | IT Services & Security PR',
    description: 'Más de 100 proyectos completados en Puerto Rico',
    images: ['/images/portfolio/og-portfolio.jpg'],
  },
  alternates: {
    canonical: 'https://itservicespr.com/portafolio',
  },
};

export default function PortafolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
