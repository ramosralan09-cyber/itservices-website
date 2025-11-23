import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Garantías y Protección',
  description:
    '1 año de garantía en mano de obra. Equipos con garantía del fabricante 1-3 años. Respuesta en 24 horas. Servicio post-instalación garantizado.',
  keywords: [
    'garantía CCTV',
    'garantía instalación',
    'protección equipos',
    'servicio postventa',
    'Puerto Rico',
  ],
  openGraph: {
    title: 'Garantías | IT Services & Security PR',
    description: 'Respaldamos nuestro trabajo con garantías sólidas',
    url: 'https://itservicespr.com/garantias',
    type: 'website',
    images: ['/images/warranty/og-garantias.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Garantías | IT Services & Security PR',
    description: 'Garantía de 1 año en mano de obra',
    images: ['/images/warranty/og-garantias.jpg'],
  },
  alternates: {
    canonical: 'https://itservicespr.com/garantias',
  },
};

export default function GarantiasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
