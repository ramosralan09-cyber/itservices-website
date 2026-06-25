import type { Metadata } from 'next'
import Image from 'next/image'
import { LINKS_PAGE_CONFIG } from './config'
import { LinkButton } from './LinkButton'

export const metadata: Metadata = {
  title: 'IT Services & Security — Links',
  description: 'Seguridad y tecnología para negocios en Puerto Rico. Contáctanos por WhatsApp, síguenos en redes o conoce nuestros proyectos.',
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
  openGraph: {
    title: 'IT Services & Security',
    description: 'Seguridad y tecnología para negocios en Puerto Rico.',
    url: 'https://itservicespr.com/links',
    siteName: 'IT Services & Security',
    type: 'website',
  },
}

export default function LinksPage() {
  const { company, links } = LINKS_PAGE_CONFIG

  return (
    <main className="min-h-screen flex flex-col items-center justify-start px-4 py-12 bg-black">

      <div
        className="fixed inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(29,78,216,0.12) 0%, transparent 60%)' }}
      />

      <div className="relative w-full max-w-sm mx-auto flex flex-col items-center gap-6">

        {/* Encabezado */}
        <div className="flex flex-col items-center text-center gap-4 pt-4">
          <div className="relative w-52 h-32">
            <Image
              src={company.logoPath}
              alt={company.name}
              fill
              className="object-contain"
              priority
            />
          </div>
          <div>
            <p className="text-gray-300 text-sm leading-relaxed max-w-[260px]">
              {company.tagline}
            </p>
            <p className="text-gray-500 text-xs mt-2 flex items-center justify-center gap-1.5">
              <span className="inline-block w-1 h-1 rounded-full bg-blue-500" />
              {company.subtagline}
              <span className="inline-block w-1 h-1 rounded-full bg-blue-500" />
            </p>
          </div>
        </div>

        <div className="w-full h-px bg-white/5" />

        {/* Botones */}
        <div className="w-full flex flex-col gap-3">
          {links.map((link) => (
            <LinkButton key={link.id} item={link} />
          ))}
        </div>

        <div className="text-center pt-4 pb-8">
          <p className="text-gray-700 text-xs">
            © {new Date().getFullYear()} IT Services &amp; Security · Puerto Rico
          </p>
        </div>
      </div>
    </main>
  )
}
