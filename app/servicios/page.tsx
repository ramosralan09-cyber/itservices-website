import ServiciosClient from './ServiciosClient';

export const metadata = {
  title:
    'Servicios de Redes, Cámaras de Seguridad, Control de Acceso y Soporte Tecnológico en Puerto Rico | IT Services & Security',
  description:
    'Descubre todos los servicios de IT Services & Security: cámaras de seguridad, imanes, control de acceso, teleentry, redes empresariales, WiFi profesional y soporte técnico en Puerto Rico. Soluciones confiables para negocios en toda la isla.',
  keywords: [
    'servicios de seguridad Puerto Rico',
    'cámaras de seguridad PR',
    'control de acceso Puerto Rico',
    'teleentry PR',
    'redes empresariales Puerto Rico',
    'wifi profesional PR',
    'IT Services & Security',
    'soporte tecnológico PR',
    'cableado estructurado Puerto Rico',
    'instalación cámaras PR',
  ],
  alternates: {
    canonical: 'https://itservicespr.com/servicios',
  },
  openGraph: {
    title:
      'Servicios Profesionales de Seguridad y Redes en Puerto Rico | IT Services & Security',
    description:
      'Instalación profesional de cámaras, control de acceso, teleentry, redes empresariales y soporte técnico para negocios en Puerto Rico.',
    url: 'https://itservicespr.com/servicios',
    siteName: 'IT Services & Security',
    locale: 'es_PR',
    type: 'website',
  },
};

export default function ServiciosPage() {
  return <ServiciosClient />;
}
