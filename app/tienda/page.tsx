// app/tienda/page.tsx
import type { Metadata } from 'next';
import TiendaClient from './TiendaClient';

export const metadata: Metadata = {
  title:
    'Tienda Online de Cámaras de Seguridad y Equipos Tecnológicos en Puerto Rico | IT Services & Security',
  description:
    'Muy pronto podrás comprar cámaras de seguridad, equipos de redes, control de acceso, accesorios y merch de IT Services & Security con envío a toda la isla de Puerto Rico. Regístrate a la lista de espera y recibe un 15% de descuento en tu primera compra.',
  keywords: [
    'tienda cámaras seguridad Puerto Rico',
    'comprar cámaras de seguridad PR',
    'tienda CCTV online Puerto Rico',
    'equipos de redes Puerto Rico',
    'control de acceso Puerto Rico tienda',
    'accesorios CCTV PR',
    'cables UTP Puerto Rico',
    'tienda IT Services & Security',
    'cámaras solares 4G Puerto Rico',
    'merch IT Services & Security',
  ],
  alternates: {
    canonical: 'https://itservicespr.com/tienda',
  },
  openGraph: {
    title:
      'Tienda Online de Seguridad y Tecnología en Puerto Rico | IT Services & Security',
    description:
      'Próximamente: tienda online con cámaras de seguridad, equipos de redes, control de acceso, accesorios y merch oficial de IT Services & Security. Envío a toda la isla y soporte técnico incluido.',
    url: 'https://itservicespr.com/tienda',
    siteName: 'IT Services & Security',
    locale: 'es_PR',
    type: 'website',
  },
};

export default function TiendaPage() {
  return <TiendaClient />;
}
