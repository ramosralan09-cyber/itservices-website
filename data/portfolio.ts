export interface PortfolioProject {
  slug: string
  featured: boolean
  client: string
  location: string
  title: string
  summary: string
  challenge: string
  solution: string
  results: string
  technologies: string[]
  images: string[]
  category: string[]
  completedDate: string
  projectValue?: string
  duration?: string
}

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: 'policia-cabo-rojo',
    featured: true,
    client: 'Policía de Puerto Rico',
    location: 'Cabo Rojo',
    title: 'Sistema de seguridad perimetral completo',
    summary: 'Instalación integral de videovigilancia y control de acceso para cuartel policial con cobertura 24/7',
    challenge: 'El cuartel requería seguridad 24/7 sin puntos ciegos, con redundancia de grabación y acceso restringido a áreas críticas. El presupuesto era limitado pero no se podía comprometer la calidad ni la confiabilidad del sistema.',
    solution: 'Implementamos 24 cámaras IP PTZ Hikvision 4K con analíticas de perímetro, NVR con disco redundante RAID, control de acceso biométrico en 8 puertas, y monitoreo remoto vía VPN. Cableado estructurado Cat6 certificado y UPS centralizado de 3KVA para protección contra apagones.',
    results: '100% de cobertura visual sin puntos ciegos, tiempo de respuesta ante alertas reducido en 70%, cero falsos positivos en 6 meses de operación. Sistema integrado exitosamente a central de monitoreo de distrito.',
    technologies: ['Hikvision 4K PTZ', 'RAID Storage', 'Biometric Access', 'VPN Remote', 'Cat6 Certified'],
    images: [
      '/portfolio/policia-cabo-rojo-1.jpg',
      '/portfolio/policia-cabo-rojo-2.jpg',
      '/portfolio/policia-cabo-rojo-3.jpg',
      '/portfolio/policia-cabo-rojo-4.jpg'
    ],
    category: ['CCTV', 'Access Control', 'Government'],
    completedDate: '2024-01',
    projectValue: '$45,000 - $60,000',
    duration: '3 semanas'
  },
  {
    slug: 'ricomini-mayaguez',
    featured: true,
    client: 'Ricomini Bakery',
    location: 'Mayagüez, Camuy, Aguadilla',
    title: 'Red empresarial multi-sucursal con fibra óptica',
    summary: 'Infraestructura de red escalable conectando 3 sucursales con enlaces de fibra óptica de alta velocidad',
    challenge: 'Tres locales operando con redes independientes, sin comunicación entre ellos. Inventario y sistemas POS descentralizados generaban inconsistencias y retrasos. Necesitaban centralizar operaciones manteniendo velocidad local y sin interrumpir el negocio.',
    solution: 'Diseño de red con core en Mayagüez, enlaces de fibra óptica 1Gbps entre sucursales, VLANs segmentadas por departamento (ventas, producción, administración), Wi-Fi 6 con roaming transparente, switches Ruijie L3 con redundancia y firewall centralizado. Migración ejecutada en horario nocturno sin downtime.',
    results: 'Inventario sincronizado en tiempo real entre sucursales, mejora de 300% en velocidad de respaldo a servidor central, Wi-Fi estable con 150+ dispositivos simultáneos, reducción de 60% en tickets de soporte de red. ROI recuperado en menos de 18 meses.',
    technologies: ['Fiber Optic 1Gbps', 'Ruijie L3 Switches', 'VLAN Segmentation', 'Wi-Fi 6', 'Centralized Firewall'],
    images: [
      '/portfolio/ricomini-1.jpg',
      '/portfolio/ricomini-2.jpg',
      '/portfolio/ricomini-3.jpg'
    ],
    category: ['Networking', 'Fiber Optic', 'Wi-Fi', 'Retail'],
    completedDate: '2023-11',
    projectValue: '$35,000 - $45,000',
    duration: '4 semanas'
  },
  {
    slug: 'infosys-aguadilla',
    featured: true,
    client: 'Infosys Systems',
    location: 'Aguadilla',
    title: 'Videovigilancia industrial con analíticas LPR',
    summary: 'Sistema de 48 cámaras con reconocimiento de placas y detección inteligente para planta industrial',
    challenge: 'Planta industrial de 50,000 sq ft con áreas de carga, producción y almacén de alto valor. Necesitaban control de acceso vehicular automatizado, monitoreo perimetral 24/7 y grabación de alta resolución para auditorías y cumplimiento regulatorio.',
    solution: '48 cámaras IP 4K (20 PTZ con zoom 30x, 28 fijas gran angular), 6 cámaras LPR especializadas en portones de entrada/salida, NVR enterprise de 128 canales con 80TB storage RAID-6, analíticas de línea virtual y detección de objetos abandonados. Software de gestión Hik-Central con dashboards personalizados y alertas push.',
    results: 'Identificación vehicular con 99.8% de precisión, reducción de 85% en tiempo de búsqueda de incidentes en video, alertas en tiempo real de intrusión perimetral con 0 falsos positivos en horario de producción. Sistema escalable hasta 200 cámaras. Base de datos de placas integrada con sistema de nómina.',
    technologies: ['Hikvision 4K', 'LPR Analytics', 'Hik-Central VMS', '80TB RAID-6', 'AI Object Detection'],
    images: [
      '/portfolio/infosys-1.jpg',
      '/portfolio/infosys-2.jpg',
      '/portfolio/infosys-3.jpg',
      '/portfolio/infosys-4.jpg',
      '/portfolio/infosys-5.jpg'
    ],
    category: ['CCTV', 'LPR', 'Analytics', 'Industrial'],
    completedDate: '2024-03',
    projectValue: '$70,000 - $85,000',
    duration: '6 semanas'
  },
  {
    slug: 'escuela-cades',
    featured: false,
    client: 'Escuela Cades',
    location: 'Mayagüez',
    title: 'Seguridad y conectividad para institución educativa',
    summary: 'Sistema integral de CCTV, Wi-Fi y control de acceso para campus escolar',
    challenge: 'Institución educativa con múltiples edificios requería actualizar sistema de seguridad obsoleto, mejorar cobertura Wi-Fi para educación digital y controlar acceso de visitantes. Presupuesto ajustado y necesidad de instalación durante receso escolar.',
    solution: '32 cámaras IP Uniview 2MP en exteriores e interiores, NVR con 30 días de grabación, 12 access points Ruijie Wi-Fi 6 con gestión centralizada, sistema de videoportero en recepción, control de acceso con credenciales RFID en puertas principales. Cableado Cat6 certificado y racks organizados.',
    results: 'Cobertura de seguridad completa en áreas comunes, Wi-Fi estable para 500+ estudiantes y tablets educativas, control de visitantes digitalizado con registro de entrada/salida. Proyecto completado en 2 semanas durante vacaciones de verano.',
    technologies: ['Uniview IP', 'Ruijie Wi-Fi 6', 'RFID Access', 'Video Intercom', 'Structured Cabling'],
    images: [
      '/portfolio/cades-1.jpg',
      '/portfolio/cades-2.jpg'
    ],
    category: ['CCTV', 'Wi-Fi', 'Access Control', 'Education'],
    completedDate: '2023-08',
    projectValue: '$25,000 - $35,000',
    duration: '2 semanas'
  }
]

export const categories = [
  'Todos',
  'CCTV',
  'Networking',
  'Access Control',
  'Government',
  'Retail',
  'Education',
  'Industrial',
  'Residential'
] as const

export const getFeaturedProjects = () => {
  return portfolioProjects.filter(p => p.featured)
}

export const getProjectBySlug = (slug: string) => {
  return portfolioProjects.find(p => p.slug === slug)
}
