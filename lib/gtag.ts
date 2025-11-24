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

  w.gtag('event', action, params);
}
