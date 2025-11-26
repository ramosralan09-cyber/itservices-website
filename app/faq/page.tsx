import type { Metadata } from 'next';
import FAQClient from './FAQClient';

export const metadata: Metadata = {
  title:
    'Preguntas Frecuentes | Cámaras de Seguridad, Redes y Control de Acceso en Puerto Rico',
  description:
    'Resuelve tus dudas sobre cámaras de seguridad, CCTV, redes empresariales, control de acceso, soporte técnico y garantías con IT Services & Security en Puerto Rico.',
  keywords: [
    'preguntas frecuentes IT Services & Security',
    'FAQ cámaras de seguridad Puerto Rico',
    'FAQ CCTV Puerto Rico',
    'FAQ redes empresariales PR',
    'FAQ control de acceso Puerto Rico',
    'soporte técnico cámaras PR',
    'garantía cámaras seguridad PR',
  ],
  alternates: {
    canonical: 'https://itservicespr.com/faq',
  },
  openGraph: {
    title:
      'Preguntas Frecuentes | IT Services & Security Puerto Rico',
    description:
      'Encuentra respuestas rápidas sobre nuestros servicios de cámaras, redes, control de acceso, soporte técnico y garantías en toda la isla.',
    url: 'https://itservicespr.com/faq',
    siteName: 'IT Services & Security',
    locale: 'es_PR',
    type: 'article',
  },
};

export default function FAQPage() {
  return <FAQClient />;
}
