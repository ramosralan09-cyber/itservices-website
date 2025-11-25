import ServiciosClient from './ServiciosClient';

export const metadata = {
  title:
    'Soporte Técnico y Mantenimiento de Sistemas de Seguridad en Puerto Rico | IT Services & Security',
  description:
    'Soporte técnico profesional para cámaras de seguridad, redes empresariales, control de acceso y teleentry en Puerto Rico. Mantenimiento preventivo, correctivo y respuesta rápida para negocios en toda la isla.',
  keywords: [
    'soporte técnico Puerto Rico',
    'mantenimiento cámaras de seguridad PR',
    'mantenimiento cctv Puerto Rico',
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
      'Planes de soporte y mantenimiento para cámaras de seguridad, redes, imanes, control de acceso y teleentry. Respuesta profesional y diagnósticos en sitio para negocios en Puerto Rico.',
    url: 'https://itservicespr.com/servicios/soporte',
    type: 'website',
  },
};

export default function ServiciosPage() {
  return <ServiciosClient />;
}
