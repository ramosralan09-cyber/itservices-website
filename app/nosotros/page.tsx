import { Metadata } from 'next';
import NosotrosClient from './NosotrosClient';

export const metadata: Metadata = {
  title:
    'Sobre IT Services & Security | Cámaras de Seguridad, Redes y Control de Acceso en Puerto Rico',
  description:
    'Conoce la historia de IT Services & Security: empresa puertorriqueña especializada en cámaras de seguridad, control de acceso, redes empresariales y soluciones tecnológicas para negocios en toda la isla. Más de 12 años de experiencia y más de 120 proyectos completados.',
  keywords: [
    'IT Services & Security',
    'empresa de seguridad Puerto Rico',
    'cámaras de seguridad Puerto Rico',
    'control de acceso Puerto Rico',
    'redes empresariales Puerto Rico',
    'seguridad electrónica PR',
    'empresa puertorriqueña de seguridad',
    'ITSS Puerto Rico',
  ],
  alternates: {
    canonical: 'https://itservicespr.com/nosotros',
  },
  openGraph: {
    title:
      'Sobre IT Services & Security | Empresa de Seguridad y Redes en Puerto Rico',
    description:
      'De un proyecto familiar a empresa reconocida en cámaras de seguridad, control de acceso, redes empresariales y soluciones tecnológicas en toda la isla.',
    url: 'https://itservicespr.com/nosotros',
    siteName: 'IT Services & Security',
    locale: 'es_PR',
    type: 'website',
  },
};

export default function NosotrosPage() {
  return <NosotrosClient />;
}
