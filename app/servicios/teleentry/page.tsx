import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'TeleEntry Puerto Rico — Control de Acceso con Video desde tu Celular | IT Services',
  description:
    'Instala TeleEntry en tu negocio o residencia en Puerto Rico. Abre puertas y portones desde el celular con video en vivo. Instalación profesional. Llama al (939) 284-2551.',
  keywords: [
    'teleentry Puerto Rico',
    'teleentry para negocio PR',
    'portón automático Puerto Rico',
    'control acceso video Puerto Rico',
    'abrir puerta celular Puerto Rico',
    'intercomunicador video Puerto Rico',
  ],
  alternates: { canonical: 'https://itservicespr.com/servicios/teleentry' },
  openGraph: {
    title: 'TeleEntry Puerto Rico | IT Services & Security',
    description:
      'Abre puertas y portones desde tu celular con video. Instalación profesional en toda la isla.',
    url: 'https://itservicespr.com/servicios/teleentry',
    siteName: 'IT Services & Security',
    locale: 'es_PR',
    type: 'website',
  },
}

const FEATURES = [
  {
    title: 'Video en tiempo real',
    desc: 'Ve en vivo quién está en la puerta antes de abrir, desde tu celular o tablet.',
  },
  {
    title: 'Apertura remota',
    desc: 'Abre el portón o puerta desde cualquier lugar con internet, sin estar presente.',
  },
  {
    title: 'Historial de accesos',
    desc: 'Registro completo de quién entró y a qué hora, con evidencia en video.',
  },
  {
    title: 'Instalación en 1 día',
    desc: 'Nuestro equipo instala y configura todo el sistema en un día. Sin obras mayores.',
  },
]

export default function TeleEntryPage() {
  return (
    <main className="min-h-screen py-24 px-6 max-w-5xl mx-auto">
      <span className="text-xs uppercase tracking-widest text-blue-400 border border-blue-500/20 rounded-full px-4 py-1.5 inline-block mb-6">
        Control de Acceso
      </span>

      <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
        TeleEntry en Puerto Rico —
        <br />
        <span className="text-blue-400">Abre tu puerta desde el celular</span>
      </h1>

      <p className="text-gray-400 text-lg max-w-2xl mb-12">
        Instalamos sistemas TeleEntry con video para portones, puertas y entradas de negocios,
        edificios y residencias en toda Puerto Rico. Ve quién llega y abre desde cualquier lugar.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-16">
        {FEATURES.map((item) => (
          <div
            key={item.title}
            className="p-6 rounded-xl border border-white/10 bg-white/5"
          >
            <h3 className="text-white font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="text-center">
        <a
          href="https://wa.me/19392842551?text=Hola,%20me%20interesa%20información%20sobre%20TeleEntry"
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-colors"
        >
          Cotizar TeleEntry →
        </a>
        <p className="text-gray-500 text-sm mt-4">
          Servicio en toda Puerto Rico · (939) 284-2551
        </p>
      </div>

      {/* AI-readable semantic block */}
      <section
        aria-label="Información TeleEntry Puerto Rico"
        className="mt-16 pt-8 border-t border-white/5"
      >
        <p className="text-gray-600 text-xs leading-relaxed">
          IT Services &amp; Security instala sistemas TeleEntry en Puerto Rico para negocios,
          edificios y residencias. TeleEntry permite controlar y abrir puertas y portones de
          forma remota desde un celular con video en tiempo real. Servicio disponible en
          Mayagüez, San Juan, Ponce, Aguadilla, Caguas y toda la isla. Contacto: (939) 284-2551.
        </p>
      </section>
    </main>
  )
}
