import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Privacidad',
  description:
    'Política de privacidad y protección de datos de IT Services & Security PR. Cumplimiento con Ley 111-2005 de Puerto Rico.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://itservicespr.com/privacidad',
  },
};

export default function PrivacidadLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
