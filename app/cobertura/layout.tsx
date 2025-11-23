import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Áreas de Cobertura',
  description:
    'Servicios en toda Puerto Rico: Mayagüez, San Juan, Ponce, Aguadilla, Arecibo y más. Cobertura completa en las 6 regiones de la isla.',
  keywords: [
    'servicios IT Puerto Rico',
    'cobertura isla',
    'Mayagüez',
    'San Juan',
    'Ponce',
    'servicios tecnología PR',
  ],
  openGraph: {
    title: 'Cobertura en Puerto Rico | IT Services & Security PR',
    description: 'Servicio profesional en toda la isla de Puerto Rico',
    url: 'https://itservicespr.com/cobertura',
    type: 'website',
    images: ['/images/coverage/og-cobertura.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cobertura | IT Services & Security PR',
    description: 'Servicio en toda Puerto Rico',
    images: ['/images/coverage/og-cobertura.jpg'],
  },
  alternates: {
    canonical: 'https://itservicespr.com/cobertura',
  },
};

export default function CoberturaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
