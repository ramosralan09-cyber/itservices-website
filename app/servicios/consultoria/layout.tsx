import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Consultoría IT Empresarial',
  description:
    'Consultoría especializada en tecnología para empresas en Puerto Rico. Auditorías, optimización de infraestructura, estrategia IT y migración a la nube.',
  keywords: [
    'consultoría IT Puerto Rico',
    'auditoría tecnológica',
    'estrategia IT',
    'cloud computing',
    'transformación digital',
    'Mayagüez',
  ],
  openGraph: {
    title: 'Consultoría IT | IT Services & Security PR',
    description:
      'Asesoría experta para optimizar tu infraestructura tecnológica',
    url: 'https://itservicespr.com/servicios/consultoria',
    type: 'website',
    images: ['/images/services/consultoria/og-consultoria.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Consultoría IT | IT Services & Security PR',
    description: 'Consultoría especializada en tecnología empresarial',
    images: ['/images/services/consultoria/og-consultoria.jpg'],
  },
  alternates: {
    canonical: 'https://itservicespr.com/servicios/consultoria',
  },
};

export default function ConsultoriaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
