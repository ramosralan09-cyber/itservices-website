export default function StructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'IT Services & Security',
    url: 'https://itservicespr.com',
    logo: 'https://itservicespr.com/images/logos/itss-logo.png',
    description:
      'Empresa especializada en instalación de cámaras de seguridad, control de acceso, redes empresariales y soporte técnico para negocios en Puerto Rico desde 2012.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Mayagüez',
      addressRegion: 'PR',
      postalCode: '00680',
      addressCountry: 'US',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+1-939-268-4351',
        contactType: 'customer service',
        areaServed: 'PR',
        availableLanguage: ['Spanish', 'English'],
      },
      {
        '@type': 'ContactPoint',
        telephone: '+1-939-284-2551',
        contactType: 'customer service',
        areaServed: 'PR',
        availableLanguage: ['Spanish'],
        description: 'WhatsApp',
      },
    ],
    sameAs: [
      'https://www.facebook.com/share/1EThrPqd8w/',
      'https://www.instagram.com/itservicespr',
      'https://www.tiktok.com/@itservicespr',
    ],
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'IT Services & Security',
    image: 'https://itservicespr.com/images/logos/itss-logo.png',
    '@id': 'https://itservicespr.com',
    url: 'https://itservicespr.com',
    telephone: '+1-939-284-2551',
    email: 'itservice.pr4u@gmail.com',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Mayagüez',
      addressRegion: 'PR',
      postalCode: '00680',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '18.2013',
      longitude: '-67.1397',
    },
    areaServed: {
      '@type': 'State',
      name: 'Puerto Rico',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '17:00',
      },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Servicios de Seguridad y Redes',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Instalación de Cámaras de Seguridad CCTV',
            description:
              'Instalación profesional de cámaras de seguridad 4K/8MP con acceso remoto, grabación continua y detección inteligente para negocios en Puerto Rico.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Control de Acceso y TeleEntry',
            description:
              'Sistemas de control de acceso con RFID, biométrico, PIN y TeleEntry para portones y puertas de negocios en Puerto Rico.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Redes Empresariales y WiFi',
            description:
              'Diseño e instalación de infraestructura de red, cableado estructurado, switches y WiFi empresarial para negocios en toda la isla.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Soporte Técnico IT',
            description:
              'Mantenimiento preventivo, reparación de equipos y soporte técnico 24/7 para sistemas de seguridad y redes en Puerto Rico.',
          },
        },
      ],
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '¿Cuánto cuesta instalar cámaras de seguridad en Puerto Rico?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'El costo varía según el número de cámaras y el tipo de sistema. Un sistema básico de 4 cámaras HD con grabadora e instalación puede comenzar desde $849. Sistemas empresariales 4K para negocios medianos oscilan entre $2,000 y $8,000. Ofrecemos cotización gratuita sin compromiso.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Qué áreas de Puerto Rico cubren?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Cubrimos toda la isla de Puerto Rico: región oeste (Mayagüez, Aguadilla, Cabo Rojo), norte (Arecibo, Manatí), área metro (San Juan, Bayamón, Carolina), sur (Ponce, Yauco) y este (Caguas, Humacao, Fajardo). Nuestra base principal es Mayagüez.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Qué marcas de cámaras instalan?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Trabajamos con las marcas líderes del mercado: Hikvision, Uniview, Dahua y Epcom. Todas ofrecen resolución 4K/8MP, visión nocturna y acceso remoto desde celular con app incluida.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Qué es TeleEntry y cómo funciona?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'TeleEntry es un sistema de intercomunicación con video que permite abrir puertas o portones remotamente desde tu celular. Cuando alguien llega, ves quién es en tu teléfono y puedes abrir sin estar físicamente presente. Ideal para negocios, edificios y residencias en Puerto Rico.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Ofrecen mantenimiento y soporte después de la instalación?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sí, ofrecemos planes de mantenimiento preventivo y soporte técnico con tiempo de respuesta de 24 a 72 horas. Nuestro equipo está disponible para asistencia remota y visitas en toda la isla. También ofrecemos garantía en piezas e instalación.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Pueden instalar WiFi empresarial para mi negocio?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sí, diseñamos e instalamos redes WiFi empresariales completas: access points Ubiquiti/Ruckus, cableado estructurado Cat6, switches administrables y configuración de VLANs para separar redes de empleados, clientes y dispositivos de seguridad.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Trabajan con municipios y agencias de gobierno en Puerto Rico?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sí, tenemos experiencia con instituciones gubernamentales incluyendo cuarteles de la Policía de Puerto Rico, municipios y edificios públicos. Contamos con los seguros y certificaciones requeridas para contratos de gobierno.',
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
