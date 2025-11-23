import { portfolioProjects } from './portfolio'

export interface SearchItem {
  id: string
  type: 'service' | 'portfolio' | 'page' | 'faq'
  title: string
  description: string
  url: string
  category?: string
  keywords?: string[]
  icon?: string
}

export const servicesSearchData: SearchItem[] = [
  {
    id: 'redes-patch-cords',
    type: 'service',
    title: 'Patch Cords Certificados',
    description: 'Cables a la medida con terminaciones certificadas y pruebas de continuidad',
    url: '/servicios/redes#patch-cords',
    category: 'Redes',
    keywords: ['cable', 'cat6', 'ethernet', 'patch', 'certificado', 'utp'],
    icon: '🔌'
  },
  {
    id: 'redes-reestructuracion',
    type: 'service',
    title: 'Reestructuración de Cableado',
    description: 'Ordenamiento y etiquetado de cuarto de telecomunicaciones',
    url: '/servicios/redes#reestructuracion',
    category: 'Redes',
    keywords: ['rack', 'organización', 'cableado', 'estructurado', 'telecom', 'orden'],
    icon: '📊'
  },
  {
    id: 'redes-diseno',
    type: 'service',
    title: 'Diseño de Infraestructura de Red',
    description: 'Desde levantamiento hasta switches, APs y VLANs',
    url: '/servicios/redes#diseno',
    category: 'Redes',
    keywords: ['diseño', 'red', 'vlan', 'switch', 'router', 'topología', 'planos'],
    icon: '🏗️'
  },
  {
    id: 'redes-fibra',
    type: 'service',
    title: 'Fibra Óptica',
    description: 'Instalación, empalmes, certificación y reparación de enlaces',
    url: '/servicios/redes#fibra-optica',
    category: 'Redes',
    keywords: ['fibra', 'óptica', 'otdr', 'empalme', 'fusion', 'monomodo', 'multimodo'],
    icon: '💡'
  },
  {
    id: 'redes-instalacion-equipos',
    type: 'service',
    title: 'Instalación de Equipos',
    description: 'Impresoras, PCs, servidores listos para tu red',
    url: '/servicios/redes#instalacion-equipos',
    category: 'Redes',
    keywords: ['instalación', 'configuración', 'impresora', 'pc', 'servidor', 'workstation'],
    icon: '💻'
  },
  {
    id: 'seguridad-camaras',
    type: 'service',
    title: 'Sistemas de Cámaras CCTV',
    description: 'Instalación y reparación con grabación 24/7 y acceso remoto',
    url: '/servicios/seguridad#camaras',
    category: 'Seguridad',
    keywords: ['cctv', 'cámara', 'ip', 'nvr', 'dvr', 'hikvision', 'uniview', 'vigilancia', 'video'],
    icon: '📹'
  },
  {
    id: 'seguridad-alarmas',
    type: 'service',
    title: 'Sistemas de Alarmas',
    description: 'Sensores perimetrales con notificaciones y protocolos de respuesta',
    url: '/servicios/seguridad#alarmas',
    category: 'Seguridad',
    keywords: ['alarma', 'sensor', 'motion', 'perimetral', 'intrusión', 'notificación'],
    icon: '🚨'
  },
  {
    id: 'seguridad-imanes',
    type: 'service',
    title: 'Imanes de Seguridad',
    description: 'Control de acceso magnético en puertas críticas',
    url: '/servicios/seguridad#imanes',
    category: 'Seguridad',
    keywords: ['imán', 'magnético', 'cerradura', 'electromagnético', 'fail-safe', 'fail-secure'],
    icon: '🧲'
  },
  {
    id: 'seguridad-portones',
    type: 'service',
    title: 'Portones de Acceso',
    description: 'Motores, lectores y credenciales con programación de horarios',
    url: '/servicios/seguridad#portones',
    category: 'Seguridad',
    keywords: ['portón', 'gate', 'motor', 'liftmaster', 'linear', 'automatización', 'barrera'],
    icon: '🚪'
  },
  {
    id: 'seguridad-intercoms',
    type: 'service',
    title: 'Intercoms',
    description: 'Comunicación entre visitantes y recepción con apertura remota',
    url: '/servicios/seguridad#intercoms',
    category: 'Seguridad',
    keywords: ['intercom', 'intercomunicador', 'audio', 'comunicación', 'portero'],
    icon: '📞'
  },
  {
    id: 'seguridad-ponchadores',
    type: 'service',
    title: 'Ponchadores Biométricos',
    description: 'Control de asistencia con huella, tarjeta o PIN',
    url: '/servicios/seguridad#ponchadores',
    category: 'Seguridad',
    keywords: ['ponchador', 'biométrico', 'asistencia', 'huella', 'reloj', 'timecard', 'empleados'],
    icon: '👆'
  },
  {
    id: 'seguridad-videoporteros',
    type: 'service',
    title: 'Videoporteros',
    description: 'Verificación y atención de visitantes desde app o monitores',
    url: '/servicios/seguridad#videoporteros',
    category: 'Seguridad',
    keywords: ['videoportero', 'video', 'portero', 'app', 'visitante', 'ring'],
    icon: '📱'
  },
  {
    id: 'seguridad-brazos',
    type: 'service',
    title: 'Brazos Mecánicos',
    description: 'Gestión de estacionamientos y control de flujos',
    url: '/servicios/seguridad#brazos',
    category: 'Seguridad',
    keywords: ['brazo', 'mecánico', 'barrera', 'estacionamiento', 'parking', 'boom'],
    icon: '🚧'
  },
  {
    id: 'consultoria-auditoria',
    type: 'service',
    title: 'Auditoría de Red',
    description: 'Evaluación completa de infraestructura con recomendaciones',
    url: '/servicios/consultoria#auditoria',
    category: 'Consultoría',
    keywords: ['auditoría', 'diagnóstico', 'análisis', 'evaluación', 'topología'],
    icon: '📋'
  },
  {
    id: 'consultoria-diseno',
    type: 'service',
    title: 'Diseño de Sistemas',
    description: 'Planos técnicos y presupuestos detallados antes de invertir',
    url: '/servicios/consultoria#diseno',
    category: 'Consultoría',
    keywords: ['diseño', 'planos', 'proyecto', 'presupuesto', 'cad', 'planificación'],
    icon: '✏️'
  },
  {
    id: 'consultoria-asesoria',
    type: 'service',
    title: 'Asesoría en Compras',
    description: 'Guía en adquisición de equipos comparando marcas y ROI',
    url: '/servicios/consultoria#asesoria',
    category: 'Consultoría',
    keywords: ['asesoría', 'compra', 'equipo', 'marca', 'comparación', 'roi'],
    icon: '🛒'
  },
  {
    id: 'consultoria-migracion',
    type: 'service',
    title: 'Migración Cloud',
    description: 'Planificación para migrar a Azure, AWS o Google Cloud',
    url: '/servicios/consultoria#migracion',
    category: 'Consultoría',
    keywords: ['cloud', 'nube', 'azure', 'aws', 'google', 'migración', 'híbrido'],
    icon: '☁️'
  },
  {
    id: 'soporte-remoto',
    type: 'service',
    title: 'Soporte Remoto 24/7',
    description: 'Diagnóstico y solución a distancia con respuesta rápida',
    url: '/servicios/soporte#remoto',
    category: 'Soporte',
    keywords: ['soporte', 'remoto', 'asistencia', 'helpdesk', 'vpn', 'teamviewer'],
    icon: '💻'
  },
  {
    id: 'soporte-sitio',
    type: 'service',
    title: 'Soporte On-Site',
    description: 'Técnicos certificados en tu localización',
    url: '/servicios/soporte#sitio',
    category: 'Soporte',
    keywords: ['soporte', 'on-site', 'técnico', 'visita', 'reparación', 'mantenimiento'],
    icon: '🔧'
  },
  {
    id: 'soporte-contratos',
    type: 'service',
    title: 'Contratos de Mantenimiento',
    description: 'Planes con visitas programadas y monitoreo proactivo',
    url: '/servicios/soporte#contratos',
    category: 'Soporte',
    keywords: ['contrato', 'mantenimiento', 'plan', 'mensual', 'anual', 'sla'],
    icon: '📄'
  },
  {
    id: 'soporte-actualizaciones',
    type: 'service',
    title: 'Actualizaciones y Upgrades',
    description: 'Firmware, software y mejoras de hardware',
    url: '/servicios/soporte#actualizaciones',
    category: 'Soporte',
    keywords: ['actualización', 'upgrade', 'firmware', 'software', 'parche', 'update'],
    icon: '🔄'
  },
]

export const portfolioSearchData: SearchItem[] = portfolioProjects.map(project => ({
  id: project.slug,
  type: 'portfolio',
  title: `${project.client} - ${project.title}`,
  description: project.summary,
  url: `/portafolio/${project.slug}`,
  category: project.category.join(', '),
  keywords: [
    ...project.category,
    ...project.technologies,
    project.client.toLowerCase(),
    project.location.toLowerCase()
  ],
  icon: '💼'
}))

export const pagesSearchData: SearchItem[] = [
  {
    id: 'home',
    type: 'page',
    title: 'Inicio',
    description: 'Página principal de IT Services & Security',
    url: '/',
    icon: '🏠'
  },
  {
    id: 'servicios',
    type: 'page',
    title: 'Servicios',
    description: 'Todos nuestros servicios de tecnología y seguridad',
    url: '/servicios',
    icon: '🛠️'
  },
  {
    id: 'portafolio',
    type: 'page',
    title: 'Portfolio',
    description: 'Proyectos completados en Puerto Rico',
    url: '/portafolio',
    icon: '💼'
  },
  {
    id: 'tienda',
    type: 'page',
    title: 'Tienda',
    description: 'Equipos, merch y rifas (próximamente)',
    url: '/tienda',
    icon: '🛍️'
  },
  {
    id: 'nosotros',
    type: 'page',
    title: 'Sobre Nosotros',
    description: 'Conoce al equipo de ITSS',
    url: '/nosotros',
    icon: '👥'
  },
  {
    id: 'contacto',
    type: 'page',
    title: 'Contacto',
    description: 'Ponte en contacto con nosotros',
    url: '/contacto',
    icon: '📧'
  },
  {
    id: 'garantias',
    type: 'page',
    title: 'Garantías',
    description: 'Política de garantías y protección',
    url: '/garantias',
    icon: '🛡️'
  },
  {
    id: 'terminos',
    type: 'page',
    title: 'Términos y Condiciones',
    description: 'Términos de servicio y uso',
    url: '/terminos',
    icon: '📜'
  },
  {
    id: 'privacidad',
    type: 'page',
    title: 'Política de Privacidad',
    description: 'Cómo protegemos tu información',
    url: '/privacidad',
    icon: '🔒'
  },
]

export const faqsSearchData: SearchItem[] = [
  {
    id: 'faq-3',
    type: 'faq',
    title: '¿Qué incluye la garantía?',
    description: '1 año de garantía en mano de obra. Equipos cubiertos por garantía del fabricante (1-3 años).',
    url: '/garantias',
    keywords: ['garantía', 'warranty', 'cobertura', 'protección'],
    icon: '✅'
  },
  {
    id: 'faq-5',
    type: 'faq',
    title: '¿Dan soporte después de instalar?',
    description: 'Sí, soporte técnico incluido durante garantía. Ofrecemos contratos de mantenimiento extendido.',
    url: '/servicios/soporte',
    keywords: ['soporte', 'ayuda', 'mantenimiento', 'después', 'post'],
    icon: '🆘'
  },
  {
    id: 'faq-6',
    type: 'faq',
    title: '¿Puedo ver las cámaras desde mi celular?',
    description: 'Sí, todos nuestros sistemas CCTV incluyen acceso remoto vía app móvil (iOS/Android).',
    url: '/servicios/seguridad#camaras',
    keywords: ['app', 'móvil', 'celular', 'remoto', 'teléfono', 'acceso'],
    icon: '📱'
  },
]

export const allSearchData: SearchItem[] = [
  ...servicesSearchData,
  ...portfolioSearchData,
  ...pagesSearchData,
  ...faqsSearchData,
]
