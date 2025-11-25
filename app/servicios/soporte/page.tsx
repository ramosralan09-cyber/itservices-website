import SoporteClient from './SoporteClient';

export const metadata = {
  title:
    'Soporte Técnico y Mantenimiento de Sistemas de Seguridad en Puerto Rico | IT Services & Security',
  description:
    'Soporte técnico profesional para cámaras de seguridad, redes empresariales, imanes, control de acceso y teleentry en Puerto Rico. Planes de mantenimiento preventivo y correctivo para negocios en toda la isla.',
  keywords: [
    'soporte técnico Puerto Rico',
    'mantenimiento cámaras de seguridad PR',
    'mantenimiento CCTV Puerto Rico',
    'mantenimiento redes empresariales PR',
    'soporte sistemas de seguridad PR',
    'mantenimiento control de acceso PR',
    'servicio técnico cámaras PR',
    'IT Services & Security',
  ],
  alternates: {
    canonical: 'https://itservicespr.com/servicios/soporte',
  },
  openGraph: {
    title:
      'Soporte Técnico y Mantenimiento de Sistemas de Seguridad en Puerto Rico',
    description:
      'Planes de soporte y mantenimiento para cámaras de seguridad, redes, imanes, control de acceso y teleentry. Respuesta rápida y servicio profesional en toda la isla.',
    url: 'https://itservicespr.com/servicios/soporte',
    type: 'website',
  },
};

export default function SoportePage() {
  return <SoporteClient />;
}
