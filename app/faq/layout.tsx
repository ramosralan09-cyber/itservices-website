import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Preguntas Frecuentes',
  description:
    'Respuestas a preguntas comunes sobre CCTV, redes, control de acceso, garantías y más. Toda la información que necesitas antes de contratar.',
  keywords: [
    'preguntas CCTV',
    'FAQ redes',
    'preguntas frecuentes IT',
    'dudas tecnología',
    'Puerto Rico',
  ],
  openGraph: {
    title: 'Preguntas Frecuentes | IT Services & Security PR',
    description:
      'Encuentra respuestas rápidas a tus dudas sobre nuestros servicios',
    url: 'https://itservicespr.com/faq',
    type: 'website',
    images: ['/images/faq/og-faq.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FAQ | IT Services & Security PR',
    description: 'Preguntas frecuentes sobre nuestros servicios',
    images: ['/images/faq/og-faq.jpg'],
  },
  alternates: {
    canonical: 'https://itservicespr.com/faq',
  },
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
