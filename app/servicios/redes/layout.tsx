import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Servicios de Redes Empresariales',
  description:
    'Diseño e instalación de redes empresariales en Puerto Rico. Cableado estructurado, WiFi, switches y routers. Certificación TIA/EIA. Garantía 1 año.',
  keywords: [
    'redes Puerto Rico',
    'cableado estructurado',
    'WiFi empresarial',
    'switches',
    'routers',
    'patch cords',
    'fibra óptica',
    'Mayagüez',
  ],
  openGraph: {
    title: 'Servicios de Redes Empresariales | IT Services & Security PR',
    description:
      'Instalación profesional de redes empresariales con certificación TIA/EIA',
    url: 'https://itservicespr.com/servicios/redes',
    type: 'website',
    images: ['/images/services/redes/og-redes.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Redes Empresariales | IT Services & Security PR',
    description: 'Diseño e instalación profesional de infraestructura de redes',
    images: ['/images/services/redes/og-redes.jpg'],
  },
  alternates: {
    canonical: 'https://itservicespr.com/servicios/redes',
  },
};

export default function RedesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
