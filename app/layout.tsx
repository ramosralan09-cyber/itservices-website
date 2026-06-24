import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppButton } from '@/components/shared/WhatsAppButton';
import CookieConsent from '@/components/shared/CookieConsent';
import { Toaster } from '@/components/ui/toaster';
import StructuredData from '@/components/shared/StructuredData';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
  adjustFontFallback: true,
});

const site = 'https://itservicespr.com';

// Hardcode GA4 ID (para asegurar funcionalidad inmediata)
const GA_MEASUREMENT_ID = 'G-TM2E7GF9F4';

export const metadata: Metadata = {
  metadataBase: new URL('https://itservicespr.com'),
  title: {
    default: 'IT Services & Security PR | Redes, CCTV y Seguridad en Puerto Rico',
    template: '%s | IT Services & Security PR',
  },
  description:
    'Servicios profesionales de redes, CCTV, control de acceso y consultoría IT en Puerto Rico. Más de 100 proyectos completados con garantía de 1 año.',
  keywords: [
    'IT Puerto Rico',
    'CCTV Puerto Rico',
    'redes empresariales',
    'seguridad PR',
    'control de acceso',
    'cableado estructurado',
    'Mayagüez',
    'videovigilancia',
    'Hikvision',
    'consultoría IT',
  ],
  authors: [{ name: 'IT Services & Security PR' }],
  creator: 'IT Services & Security PR',
  publisher: 'IT Services & Security PR',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'es_PR',
    url: 'https://itservicespr.com',
    siteName: 'IT Services & Security PR',
    title: 'IT Services & Security PR | Soluciones Tecnológicas en Puerto Rico',
    description:
      'Expertos en redes, CCTV, control de acceso y consultoría IT. Servicio profesional en toda la isla.',
    images: [
      {
        url: `${site}/images/logo512.png`,
        width: 512,
        height: 512,
        alt: 'IT Services & Security PR',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IT Services & Security PR',
    description: 'Soluciones profesionales de tecnología y seguridad en Puerto Rico',
    images: [`${site}/images/logo512.png`],
  },
  icons: {
    icon: [
      { url: '/images/logo512.png', sizes: '512x512', type: 'image/png' },
      { url: '/favicon.ico' },
    ],
    apple: [{ url: '/images/logo512.png', sizes: '180x180', type: 'image/png' }],
    shortcut: '/images/logo512.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || '',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={inter.variable}>
      <head>
        <link rel="icon" href="/images/logo512.png" sizes="32x32" />
        <link rel="icon" href="/images/logo512.png" sizes="192x192" />
        <link rel="apple-touch-icon" href="/images/logo512.png" />
        <link rel="shortcut icon" href="/images/logo512.png" />
        <StructuredData />
      </head>

      <body className="min-h-screen flex flex-col">

        {/* Google Analytics (forzado con ID hardcoded) */}
        <>
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          />
          <Script
            id="google-analytics"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}', {
                  page_path: window.location.pathname,
                });
              `,
            }}
          />
        </>

        {/* Meta Pixel – no cambiar */}
        {process.env.NEXT_PUBLIC_META_PIXEL_ID && (
          <>
            <Script
              id="meta-pixel"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  !function(f,b,e,v,n,t,s)
                  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                  n.queue=[];t=b.createElement(e);t.async=!0;
                  t.src=v;s=b.getElementsByTagName(e)[0];
                  s.parentNode.insertBefore(t,s)}(window, document,'script',
                  'https://connect.facebook.net/en_US/fbevents.js');
                  fbq('init', '${process.env.NEXT_PUBLIC_META_PIXEL_ID}');
                  fbq('track', 'PageView');
                `,
              }}
            />
            <noscript>
              <img
                height="1"
                width="1"
                style={{ display: 'none' }}
                src={`https://www.facebook.com/tr?id=${process.env.NEXT_PUBLIC_META_PIXEL_ID}&ev=PageView&noscript=1`}
                alt=""
              />
            </noscript>
          </>
        )}

        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
        <CookieConsent />
        <Toaster />
      </body>
    </html>
  );
}
