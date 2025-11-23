export default function StructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'IT Services & Security PR',
    url: 'https://itservicespr.com',
    logo: 'https://itservicespr.com/images/logos/itss-logo.png',
    description:
      'Servicios profesionales de redes, CCTV, control de acceso y consultoría IT en Puerto Rico',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Mayagüez',
      addressRegion: 'PR',
      addressCountry: 'PR',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-787-939-2684',
      contactType: 'customer service',
      areaServed: 'PR',
      availableLanguage: ['es', 'en'],
    },
    sameAs: [
      'https://www.facebook.com/share/1EThrPqd8w/',
      'https://www.instagram.com/itservicespr',
    ],
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'IT Services & Security PR',
    image: 'https://itservicespr.com/images/logos/itss-logo.png',
    '@id': 'https://itservicespr.com',
    url: 'https://itservicespr.com',
    telephone: '+1-787-939-2684',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '',
      addressLocality: 'Mayagüez',
      addressRegion: 'PR',
      postalCode: '',
      addressCountry: 'PR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 18.2009,
      longitude: -67.1397,
    },
    areaServed: {
      '@type': 'State',
      name: 'Puerto Rico',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '17:00',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Servicios IT y Seguridad',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Infraestructura de Redes',
            description:
              'Diseño, instalación y soporte de redes empresariales',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Sistemas de Seguridad CCTV',
            description: 'Cámaras IP, NVR, control de acceso y alarmas',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Consultoría Técnica',
            description: 'Auditorías, diseño y asesoría en tecnología',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Soporte Técnico y Mantenimiento',
            description: 'Soporte 24/7 y mantenimiento preventivo',
          },
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
    </>
  );
}
