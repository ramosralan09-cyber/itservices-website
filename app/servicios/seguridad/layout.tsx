import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CCTV y Control de Acceso',
  description:
    'Sistemas de videovigilancia CCTV y control de acceso en Puerto Rico. Hikvision, Uniview, Dahua. Instalación profesional con garantía. Acceso remoto incluido.',
  keywords: [
    'CCTV Puerto Rico',
    'cámaras seguridad',
    'videovigilancia',
    'control de acceso',
    'Hikvision',
    'biométrico',
    'tarjetas RFID',
    'Mayagüez',
  ],
  openGraph: {
    title: 'Sistemas CCTV y Control de Acceso | IT Services & Security PR',
    description:
      'Soluciones completas de seguridad electrónica para empresas en Puerto Rico',
    url: 'https://itservicespr.com/servicios/seguridad',
    type: 'website',
    images: ['/images/services/seguridad/og-seguridad.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CCTV y Control de Acceso | IT Services & Security PR',
    description: 'Sistemas de videovigilancia y control de acceso profesional',
    images: ['/images/services/seguridad/og-seguridad.jpg'],
  },
  alternates: {
    canonical: 'https://itservicespr.com/servicios/seguridad',
  },
};

export default function SeguridadLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
