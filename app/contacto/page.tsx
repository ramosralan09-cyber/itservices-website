import type { Metadata } from 'next';
import ContactoClient from './ContactoClient';

export const metadata: Metadata = {
  title:
    'Contacto y Cotizaciones | Cámaras de Seguridad y Redes en Puerto Rico | IT Services & Security',
  description:
    'Contáctanos para cotizaciones de cámaras de seguridad, redes empresariales y control de acceso en Puerto Rico. Respuesta en 24–48 horas para negocios en toda la isla.',
  keywords: [
    'contacto IT Services & Security',
    'cotización cámaras seguridad Puerto Rico',
    'contacto redes empresariales PR',
    'whatsapp cámaras seguridad PR',
    'instalación CCTV Puerto Rico contacto',
    'control de acceso cotización PR',
  ],
  alternates: {
    canonical: 'https://itservicespr.com/contacto',
  },
  openGraph: {
    title:
      'Contacto y Cotizaciones | IT Services & Security Puerto Rico',
    description:
      'Solicita una cotización para cámaras de seguridad, redes empresariales y control de acceso en Puerto Rico. Respuesta rápida y servicio profesional en toda la isla.',
    url: 'https://itservicespr.com/contacto',
    type: 'website',
    siteName: 'IT Services & Security',
    locale: 'es_PR',
  },
};

export default function ContactoPage() {
  return <ContactoClient />;
}
