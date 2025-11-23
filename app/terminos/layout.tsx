import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Términos y Condiciones',
  description:
    'Términos y condiciones de servicio de IT Services & Security PR. Políticas de cancelación, reembolsos y garantías.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://itservicespr.com/terminos',
  },
};

export default function TerminosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
