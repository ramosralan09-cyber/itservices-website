import RedesClient from './RedesClient';

export const metadata = {
  title: 'Redes Empresariales en Puerto Rico | Instalación de WiFi, Cableado y Configuración Profesional',
  description:
    'Instalación profesional de redes empresariales, WiFi comercial, cableado estructurado, enlaces de fibra óptica y configuraciones avanzadas en toda la isla. IT Services & Security ofrece soluciones rápidas, seguras y optimizadas para negocios en Puerto Rico.',
  keywords: [
    'redes empresariales Puerto Rico',
    'wifi profesional PR',
    'instalación de redes PR',
    'configuración de redes',
    'cableado estructurado PR',
    'fibra óptica Puerto Rico',
    'networking Puerto Rico',
    'IT Services & Security',
    'redes para negocios PR',
    'servidores PR',
  ],
  alternates: {
    canonical: 'https://itservicespr.com/servicios/redes',
  },
  openGraph: {
    title:
      'Redes Empresariales en Puerto Rico | Instalación de WiFi, Cableado y Networking Profesional',
    description:
      'Soluciones completas en redes empresariales, cableado estructurado, WiFi profesional y configuración de infraestructura IT en toda la isla. Servicio rápido y confiable.',
    url: 'https://itservicespr.com/servicios/redes',
    siteName: 'IT Services & Security',
    locale: 'es_PR',
    type: 'website',
    images: [
      {
        url: 'https://itservicespr.com/images/logo512.png',
        width: 512,
        height: 512,
        alt: 'Redes Empresariales - IT Services & Security',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Redes Empresariales en Puerto Rico | Instalación de WiFi y Cableado',
    description:
      'IT Services & Security ofrece instalación profesional de redes empresariales, cableado y WiFi comercial en toda la isla.',
    images: ['https://itservicespr.com/images/logo512.png'],
  },
  other: {
    'script:type': 'application/ld+json',
    script: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'IT Services & Security',
      url: 'https://itservicespr.com/servicios/redes',
      image: 'https://itservicespr.com/images/logo512.png',
      description:
        'Servicio profesional de redes empresariales, cableado estructurado, WiFi comercial y configuraciones IT en Puerto Rico.',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Mayagüez',
        addressRegion: 'PR',
        addressCountry: 'US',
      },
      areaServed: 'Puerto Rico',
      serviceType: [
        'Redes empresariales',
        'WiFi profesional',
        'Cableado estructurado',
        'Configuración de routers y switches',
        'Servicios IT para negocios',
      ],
    }),
  },
};

export default function RedesPage() {
  return <RedesClient />;
}
