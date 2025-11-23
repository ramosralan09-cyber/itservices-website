import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contáctanos',
  description:
    'Solicita tu cotización gratuita. WhatsApp: (939) 284-2551 | Tel: (787) 939-2684. Respondemos en 24-48 horas.',
  keywords: [
    'contacto IT Puerto Rico',
    'cotización gratis',
    'presupuesto tecnología',
    'WhatsApp IT',
    'Mayagüez',
  ],
  openGraph: {
    title: 'Contacto | IT Services & Security PR',
    description: 'Solicita tu cotización gratuita hoy',
    url: 'https://itservicespr.com/contacto',
    type: 'website',
    images: ['/images/contact/og-contacto.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contacto | IT Services & Security PR',
    description: 'Solicita tu cotización gratuita',
    images: ['/images/contact/og-contacto.jpg'],
  },
  alternates: {
    canonical: 'https://itservicespr.com/contacto',
  },
};

export default function ContactoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
