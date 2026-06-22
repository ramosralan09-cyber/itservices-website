export interface PortfolioProject {
  slug: string
  featured: boolean
  client: string
  location: string
  title: string
  category: string
  summary: string
  challenge: string
  solution: string
  results: string
  technologies: string[]
  images: string[]
  completedDate: string
  duration?: string
}

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: 'cuartel-policia-cabo-rojo',
    featured: true,
    client: 'Policía de Puerto Rico',
    location: 'Cabo Rojo, Puerto Real, PR',
    title: 'Cuartel Policial · Seguridad & Comunicaciones Integral',
    category: 'Gobierno',
    summary: 'Desarrollo integral de infraestructura de seguridad y comunicaciones para el Distrito de Cabo Rojo. El proyecto incluyó 32 cámaras IP de alta definición, controles de acceso vehicular y peatonal, fibra óptica, redes Wi-Fi, alarmas de incendio, sistemas de radio e intercom, TeleEntry y sistemas especializados para el helipuerto. Todo centralizado para vigilancia, conectividad y operación eficiente del cuartel.',
    technologies: ['Hikvision IP', 'Fibra Óptica', 'Access Control', 'TeleEntry', 'Fire Alarm', 'Wi-Fi Enterprise'],
    images: Array.from({ length: 7 }, (_, i) => `/portfolio/cuartel-policia-cabo-rojo/imagen-${i + 1}.jpg`),
    challenge: 'Instalación en instalación gubernamental activa requiriendo coordinación sin interrumpir operaciones policiales 24/7.',
    solution: 'Ejecución por fases nocturnas con 32 cámaras, fibra óptica, acceso vehicular automatizado, radio, intercom y sistema helipuerto integrados en sala de control centralizada.',
    results: 'Cobertura total del cuartel con vigilancia 24/7, comunicaciones unificadas y centro de control que centraliza todos los sistemas de seguridad.',
    completedDate: '2024-06',
    duration: '8 semanas',
  },
  {
    slug: 'ricomini-camuy',
    featured: true,
    client: 'Ricomini Bakery',
    location: 'Camuy, PR',
    title: 'Ricomini Bakery · Sistema de Comunicación Servicarro',
    category: 'Comercial',
    summary: 'Instalación completa de un sistema profesional de comunicación para servicarro, incluyendo infraestructura, cableado estructurado, aislamiento acústico y configuración avanzada. La solución elevó la claridad de recepción y la eficiencia operativa en la atención al cliente, reduciendo tiempos de espera y mejorando la experiencia en línea.',
    technologies: ['Cableado Estructurado', 'Audio Profesional', 'Aislamiento Acústico', 'Drive-Thru System'],
    images: Array.from({ length: 4 }, (_, i) => `/portfolio/ricomini-camuy/imagen-${i + 1}.jpg`),
    challenge: 'Sistema de comunicación para servicarro con problemas de claridad de audio y eficiencia operativa.',
    solution: 'Instalación completa con cableado estructurado, aislamiento de sonido y configuración de sistema de audio profesional para drive-thru.',
    results: 'Mejora notable en claridad de comunicación, reducción de errores en pedidos y aumento en la velocidad de servicio.',
    completedDate: '2024-02',
    duration: '1 semana',
  },
  {
    slug: 'pr-9-ponce',
    featured: false,
    client: 'Proyecto Vial PR-9',
    location: 'Ponce, PR',
    title: 'Carretera PR-9 · Monitoreo Solar 4G en Construcción',
    category: 'Infraestructura',
    summary: 'Instalación de 4 cámaras solares con conectividad 4G para vigilar maquinaria pesada, labores de construcción y el progreso general de la obra vial. El sistema permite monitoreo remoto en tiempo real en zonas donde no existe acceso convencional a electricidad ni internet, garantizando supervisión continua de activos críticos.',
    technologies: ['Cámara Solar', '4G LTE', 'Monitoreo Remoto', 'Cloud Storage', 'Battery Backup'],
    images: Array.from({ length: 4 }, (_, i) => `/portfolio/pr-9-ponce/imagen-${i + 1}.jpg`),
    challenge: 'Zona de construcción sin acceso a electricidad ni internet convencional, requiriendo vigilancia continua de maquinaria de alto valor.',
    solution: '4 cámaras con panel solar integrado y conectividad 4G LTE, con almacenamiento en nube y acceso remoto desde cualquier dispositivo.',
    results: 'Vigilancia 24/7 de activos, reducción de incidentes con maquinaria y supervisión remota del progreso de obra en tiempo real.',
    completedDate: '2023-10',
    duration: '3 días',
  },
  {
    slug: 'mayaguez-square-district',
    featured: false,
    client: 'Mayagüez Square District',
    location: 'Mayagüez, PR',
    title: 'Mayagüez Square · Conectividad Starlink en Obra',
    category: 'Conectividad',
    summary: 'Instalación de 2 antenas Starlink para proveer conectividad satelital de alta velocidad durante el desarrollo del proyecto de construcción. La solución garantizó que ingenieros, contratistas y personal técnico mantuvieran acceso estable y confiable a internet en el área de trabajo, facilitando coordinación en tiempo real y gestión de planos digitales.',
    technologies: ['Starlink', 'Conectividad Satelital', 'Wi-Fi Distribución', 'Red Temporal Obra'],
    images: Array.from({ length: 4 }, (_, i) => `/portfolio/mayaguez-square-district/imagen-${i + 1}.jpg`),
    challenge: 'Proyecto de construcción comercial sin infraestructura de internet disponible, afectando la coordinación entre equipos técnicos.',
    solution: 'Instalación de 2 antenas Starlink con distribución Wi-Fi interna para cubrir toda el área de obra con conectividad satelital estable.',
    results: 'Conectividad estable para todo el equipo de construcción, mejora en coordinación y acceso a planos digitales en tiempo real.',
    completedDate: '2024-01',
    duration: '2 días',
  },
  {
    slug: 'infosys-aguadilla',
    featured: false,
    client: 'Infosys',
    location: 'Aguadilla, PR',
    title: 'Infosys · Infraestructura LAN Empresarial 300 Líneas',
    category: 'Redes',
    summary: 'Desarrollo completo de infraestructura de red corporativa mediante la instalación de 300 líneas LAN certificadas. El proyecto incluyó cableado estructurado de alto rendimiento, organización y rack management profesional, identificación de cada punto y preparación de la red para garantizar conectividad eficiente, escalabilidad empresarial y cumplimiento con estándares industriales.',
    technologies: ['Cat6A Certificado', 'Cableado Estructurado', 'Rack Management', 'Patch Panel', 'Network Testing'],
    images: Array.from({ length: 5 }, (_, i) => `/portfolio/infosys-aguadilla/imagen-${i + 1}.jpg`),
    challenge: 'Empresa de tecnología requería infraestructura de red nueva con 300 puntos LAN en instalación corporativa de gran escala.',
    solution: 'Cableado estructurado certificado Cat6A, organización de racks, patch panels y pruebas de certificación en cada punto para garantizar rendimiento.',
    results: '300 puntos LAN certificados, red escalable y organizada, preparada para expansión futura y con documentación completa de infraestructura.',
    completedDate: '2023-12',
    duration: '4 semanas',
  },
  {
    slug: 'vistas-del-rio-apartments',
    featured: false,
    client: 'Vistas del Río Apartments',
    location: 'Trujillo Alto, PR',
    title: 'Vistas del Río · Sistema CCTV Residencial 16 Cámaras',
    category: 'Residencial',
    summary: 'Instalación de 16 cámaras de seguridad IP para cubrir áreas exteriores, zonas comunes y facilidades internas del complejo residencial. El sistema fue diseñado para ofrecer vigilancia continua 24/7, monitoreo estratégico de puntos críticos y mayor tranquilidad para residentes, visitantes y personal administrativo.',
    technologies: ['Hikvision IP', 'NVR 16 Canales', 'Visión Nocturna', 'Acceso Remoto', 'Cableado Estructurado'],
    images: Array.from({ length: 5 }, (_, i) => `/portfolio/vistas-del-rio-apartments/imagen-${i + 1}.jpg`),
    challenge: 'Complejo residencial con áreas extensas sin cobertura de seguridad adecuada, preocupaciones de residentes sobre seguridad perimetral.',
    solution: '16 cámaras IP estratégicamente posicionadas cubriendo entradas, estacionamiento, áreas comunes y perímetro con NVR centralizado y acceso remoto.',
    results: 'Cobertura completa del complejo, mayor sensación de seguridad entre residentes y personal, monitoreo 24/7 con acceso remoto para administración.',
    completedDate: '2024-04',
    duration: '3 días',
  },
]

export const getFeaturedProjects = () => {
  return portfolioProjects.filter((p) => p.featured)
}

export const getProjectBySlug = (slug: string) => {
  return portfolioProjects.find((p) => p.slug === slug)
}
