// lib/gtag.ts

// ID de medición de GA4
export const GA_MEASUREMENT_ID = 'G-TM2E7GF9F4';

// Función genérica para disparar eventos de GA4
export function gtagEvent(
  action: string,
  params?: Record<string, any>
) {
  if (typeof window === 'undefined') return;

  // Usamos window como any para evitar conflictos de tipos
  const w = window as any;
  if (!w.gtag) return;

  // Si entras con ?testga=1 en la URL, marcamos el evento como debug
  const isDebug = window.location.search.includes('testga=1');

  const eventParams = {
    ...(params || {}),
    ...(isDebug ? { debug_mode: true } : {}),
  };

  w.gtag('event', action, eventParams);
}

