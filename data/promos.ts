export interface Promo {
  id: number;
  title: string;
  body: string;
  image: string;
  cta: string;
  ctaUrl: string;
}

export const promos: Promo[] = [
  {
    id: 1,
    title: 'Instalación profesional de CCTV',
    body: 'Sistemas Hikvision y Uniview con 2 años de garantía',
    image: '/placeholder-promo-1.jpg',
    cta: 'Cotizar ahora',
    ctaUrl: '/servicios/seguridad',
  },
  {
    id: 2,
    title: 'Infraestructura de red empresarial',
    body: 'Diseño, instalación y certificación con equipos Ruijie y MikroTik',
    image: '/placeholder-promo-2.jpg',
    cta: 'Solicitar consultoría',
    ctaUrl: '/servicios/consultoria',
  },
  {
    id: 3,
    title: 'Tienda en línea - Próximamente',
    body: 'Equipos, merch y rifas. Sé el primero en enterarte',
    image: '/placeholder-promo-3.jpg',
    cta: 'Unirme a la lista',
    ctaUrl: '/tienda',
  },
];
