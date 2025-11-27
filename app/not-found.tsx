'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowLeft, Home, ShieldAlert, Video, Network, DoorOpen } from 'lucide-react';

export default function NotFound() {
  const router = useRouter();

  return (
    <main className="relative min-h-[80vh] overflow-hidden bg-gradient-to-b from-black via-charcoal to-navy text-gray-100 flex items-center justify-center px-6">
      {/* Glows de fondo */}
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -top-32 -left-10 h-72 w-72 rounded-full bg-skyBlue/30 blur-3xl" />
        <div className="absolute -bottom-32 -right-10 h-80 w-80 rounded-full bg-deepBlue/50 blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl border border-slate-800 bg-slate/40 px-6 py-10 shadow-2xl backdrop-blur-xl md:px-10"
        >
          {/* Encabezado 404 */}
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-skyBlue/80">
                IT SERVICES &amp; SECURITY · PUERTO RICO
              </p>
              <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-white md:text-5xl">
                404 – Página no encontrada
              </h1>
              <p className="mt-3 text-sm md:text-base text-gray-300">
                La ruta que intentaste visitar no existe o fue movida. Pero tu seguridad y la de tu
                negocio siguen siendo nuestra prioridad.
              </p>
            </div>

            <div className="mt-4 md:mt-0 flex items-center gap-3 rounded-2xl border border-amber-400/30 bg-amber-500/10 px-4 py-3 text-xs text-amber-100">
              <ShieldAlert className="h-5 w-5" />
              <span>
                Si llegaste aquí desde un enlace externo,{' '}
                <span className="font-semibold">puedes volver al inicio</span> o visitar nuestros
                servicios principales.
              </span>
            </div>
          </div>

          {/* Botones principales */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <button
              onClick={() => router.back()}
              className="inline-flex items-center justify-center rounded-xl border border-slate-700 bg-slate/60 px-4 py-2.5 text-sm font-medium text-gray-100 hover:border-slate-500 hover:bg-slate-700/80 transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver a la página anterior
            </button>

            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-xl bg-skyBlue px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-skyBlue/40 hover:bg-sky-500 transition-colors"
            >
              <Home className="mr-2 h-4 w-4" />
              Ir al inicio
            </Link>
          </div>

          {/* Enlaces rápidos a servicios */}
          <div className="mt-10 border-t border-slate-800 pt-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
              Rutas rápidas
            </p>
            <p className="mt-2 text-sm text-gray-300">
              Elige una de estas opciones para continuar navegando por nuestros servicios:
            </p>

            <div className="mt-5 grid gap-3 md:grid-cols-3">
              <Link
                href="/servicios/seguridad"
                className="group rounded-2xl border border-slate-800 bg-slate/40 px-4 py-4 text-sm hover:border-skyBlue/60 hover:bg-slate-800/60 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-skyBlue/15 text-skyBlue">
                    <Video className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Cámaras de seguridad</p>
                    <p className="text-xs text-gray-400">
                      CCTV 4K, cámaras solares 4G y monitoreo profesional para negocios.
                    </p>
                  </div>
                </div>
              </Link>

              <Link
                href="/servicios/seguridad#acceso"
                className="group rounded-2xl border border-slate-800 bg-slate/40 px-4 py-4 text-sm hover:border-skyBlue/60 hover:bg-slate-800/60 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-skyBlue/15 text-skyBlue">
                    <DoorOpen className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Control de acceso</p>
                    <p className="text-xs text-gray-400">
                      TeleEntry, imanes, cerraduras y acceso inteligente para tu negocio.
                    </p>
                  </div>
                </div>
              </Link>

              <Link
                href="/servicios/redes"
                className="group rounded-2xl border border-slate-800 bg-slate/40 px-4 py-4 text-sm hover:border-skyBlue/60 hover:bg-slate-800/60 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-skyBlue/15 text-skyBlue">
                    <Network className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Redes y WiFi profesional</p>
                    <p className="text-xs text-gray-400">
                      Infraestructura de red, cableado estructurado y WiFi estable para empresas.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Mensaje final */}
          <p className="mt-8 text-xs text-slate-400">
            ¿Sigues sin encontrar lo que buscas?{' '}
            <Link href="/contacto" className="text-skyBlue hover:underline">
              Contáctanos
            </Link>{' '}
            y con gusto te ayudamos a diseñar la mejor solución de seguridad y redes para tu negocio
            en Puerto Rico.
          </p>
        </motion.div>
      </div>
    </main>
  );
}
