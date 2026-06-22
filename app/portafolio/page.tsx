import { Metadata } from 'next';
import PortafolioClient from './PortafolioClient';

export const metadata: Metadata = {
  title: 'Portafolio de Proyectos | IT Services & Security Puerto Rico',
  description:
    'Proyectos reales de instalación de cámaras CCTV, control de acceso, redes LAN, fibra óptica y seguridad empresarial en Puerto Rico. Más de 120 proyectos completados.',
  keywords: [
    'portafolio seguridad Puerto Rico',
    'instalación cámaras PR',
    'CCTV Puerto Rico',
    'redes empresariales PR',
    'control de acceso Puerto Rico',
  ],
  alternates: { canonical: 'https://itservices-website.vercel.app/portfolio' },
  openGraph: {
    title: 'Portafolio | IT Services & Security PR',
    description: 'Proyectos reales de seguridad y redes en toda Puerto Rico.',
    url: 'https://itservices-website.vercel.app/portfolio',
    type: 'website',
  },
};

export default function PortafolioPage() {
  return <PortafolioClient />;
}
