import { Video as LucideIcon } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  image?: string;
  imageAlt?: string;
}

export interface ServiceCategory {
  slug: string;
  title: string;
  intro: string;
  services: Service[];
}

export const serviceCategories: ServiceCategory[] = [
  {
    slug: 'redes',
    title: 'Redes',
    intro: 'La conectividad es el sistema circulatorio de tu negocio. Un diseño de red correcto reduce tiempos muertos, acelera procesos y te prepara para crecer sin dolores de cabeza.',
    services: [
      {
        id: 'patch-cords',
        title: 'Patch cords hechos y verificados por nosotros',
        description: 'Cables a la medida con terminaciones certificadas y pruebas de continuidad. Menos fallas, mejor organización del rack y señal estable para tus equipos críticos.',
        icon: 'Cable',
        image: '/images/services/redes/patch-cords.jpg',
        imageAlt: 'Patch cords certificados fabricados por ITSS Puerto Rico',
      },
      {
        id: 'reestructuracion',
        title: 'Reestructuración de cableado e infraestructura',
        description: 'Ordenamos y etiquetamos tu cuarto de telecomunicaciones, canalizamos y optimizamos rutas para mejorar flujo de aire y mantenimiento.',
        icon: 'Network',
        image: '/images/services/redes/reestructuracion-cableado.jpg',
        imageAlt: 'Reestructuración de cableado estructurado e infraestructura de red',
      },
      {
        id: 'diseno-red',
        title: 'Diseño e instalación de infraestructura de Red',
        description: 'Desde el levantamiento y planos hasta switches/APs y VLANs. Implementamos mejores prácticas para rendimiento, seguridad y escalabilidad.',
        icon: 'Server',
        image: '/images/services/redes/diseno-infraestructura.jpg',
        imageAlt: 'Diseño e instalación de infraestructura de red empresarial - ITSS Puerto Rico',
      },
      {
        id: 'fibra-optica',
        title: 'Fibra óptica: instalación y reparación',
        description: 'Tendido, empalmes y certificación de enlaces para largas distancias y alto rendimiento. Reparación de cortes y medición con OTDR.',
        icon: 'Zap',
        image: '/images/services/redes/fibra-optica.jpg',
        imageAlt: 'Instalación y reparación de fibra óptica certificada - ITSS',
      },
      {
        id: 'instalacion-equipos',
        title: 'Instalación y configuración de equipos tecnológicos',
        description: 'Impresoras, PCs, servidores y más, listos para trabajar en tu dominio/segmento de red, con políticas y accesos correctos.',
        icon: 'HardDrive',
        image: '/images/services/redes/equipos-tecnologicos.jpg',
        imageAlt: 'Instalación y configuración de equipos de red - Access Points y Switches',
      },
    ],
  },
  {
    slug: 'seguridad',
    title: 'Seguridad',
    intro: 'La seguridad protege tus activos y la continuidad de tu operación. Integramos soluciones inteligentes para prevenir, detectar y responder, con instalaciones profesionales y soporte local.',
    services: [
      {
        id: 'camaras',
        title: 'Sistemas de cámaras (instalación y reparación)',
        description: 'CCTV/IP con grabación 24/7, acceso remoto y analíticas (PTZ, LPR, detección). Diseño por zonas y cobertura real para evidencias útiles.',
        icon: 'Camera',
        image: '/placeholder-service.jpg',
      },
      {
        id: 'alarmas',
        title: 'Sistemas de alarmas (instalación y reparación)',
        description: 'Sensores perimetrales e interiores con notificaciones y protocolos de respuesta. Integración con cámaras para verificación.',
        icon: 'Bell',
        image: '/placeholder-service.jpg',
      },
      {
        id: 'imanes',
        title: 'Imanes de seguridad',
        description: 'Control de acceso magnético en puertas críticas con fuentes dedicadas y fail-safe/fail-secure según tu necesidad.',
        icon: 'Lock',
        image: '/placeholder-service.jpg',
      },
      {
        id: 'portones',
        title: 'Portones de acceso controlado',
        description: 'Motores, lectores y credenciales; programación de horarios y reportes de acceso.',
        icon: 'DoorOpen',
        image: '/placeholder-service.jpg',
      },
      {
        id: 'intercoms',
        title: 'Intercoms',
        description: 'Comunicación clara entre visitantes y recepción/seguridad, con apertura remota segura.',
        icon: 'Radio',
        image: '/placeholder-service.jpg',
      },
      {
        id: 'ponchadores',
        title: 'Ponchadores',
        description: 'Control de asistencia con huella, tarjeta o PIN; reportes y exportación de datos.',
        icon: 'Fingerprint',
        image: '/placeholder-service.jpg',
      },
      {
        id: 'videoporteros',
        title: 'Videoporteros',
        description: 'Verifica y atiende visitantes desde app o monitores; registro de evidencias.',
        icon: 'Video',
        image: '/placeholder-service.jpg',
      },
      {
        id: 'brazos',
        title: 'Brazos mecánicos',
        description: 'Gestión de estacionamientos, conteo y control de flujos, integrados a tu sistema de acceso.',
        icon: 'GripVertical',
        image: '/placeholder-service.jpg',
      },
    ],
  },
  {
    slug: 'consultoria',
    title: 'Consultoría',
    intro: 'Análisis técnico especializado para tomar las mejores decisiones tecnológicas. Te ayudamos a diseñar, presupuestar y ejecutar proyectos complejos con confianza.',
    services: [
      {
        id: 'auditoria-red',
        title: 'Auditoría de infraestructura de red',
        description: 'Evaluación completa de tu red actual: topología, rendimiento, seguridad y puntos de mejora con recomendaciones priorizadas.',
        icon: 'ClipboardCheck',
      },
      {
        id: 'diseno-seguridad',
        title: 'Diseño de sistemas de seguridad',
        description: 'Planos técnicos, cálculo de cobertura, selección de equipos y presupuesto detallado antes de invertir.',
        icon: 'Layers',
      },
      {
        id: 'asesoria-compras',
        title: 'Asesoría en adquisición de tecnología',
        description: 'Te guiamos en la compra de equipos, comparando marcas, especificaciones y ROI para tu caso específico.',
        icon: 'ShoppingCart',
      },
      {
        id: 'migracion-cloud',
        title: 'Migración a soluciones cloud',
        description: 'Evaluación y planificación para migrar sistemas on-premise a la nube (Azure, AWS, Google Cloud) con mínima interrupción.',
        icon: 'Cloud',
      },
    ],
  },
  {
    slug: 'soporte',
    title: 'Soporte Técnico',
    intro: 'Respuesta rápida cuando más lo necesitas. Soporte remoto y on-site para mantener tus sistemas funcionando sin interrupciones.',
    services: [
      {
        id: 'soporte-remoto',
        title: 'Soporte remoto 24/7',
        description: 'Diagnóstico y solución de problemas a distancia con acceso seguro a tus sistemas. Respuesta en menos de 2 horas.',
        icon: 'MonitorSmartphone',
      },
      {
        id: 'soporte-sitio',
        title: 'Soporte on-site',
        description: 'Técnicos certificados en tu localización para reparaciones, mantenimientos preventivos y emergencias.',
        icon: 'Wrench',
      },
      {
        id: 'contratos-mantenimiento',
        title: 'Contratos de mantenimiento',
        description: 'Planes mensuales/anuales con visitas programadas, monitoreo proactivo y descuentos en servicios adicionales.',
        icon: 'FileText',
      },
      {
        id: 'actualizaciones',
        title: 'Actualizaciones y upgrades',
        description: 'Mantenemos tus sistemas al día: firmware, software, parches de seguridad y mejoras de hardware.',
        icon: 'RefreshCw',
      },
    ],
  },
];

export const getAllServices = () => {
  return serviceCategories.flatMap(category =>
    category.services.map(service => ({
      ...service,
      category: category.title,
      categorySlug: category.slug,
    }))
  );
};
