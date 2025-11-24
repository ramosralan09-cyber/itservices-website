// lib/gtag.ts

// Opcional: puedes reutilizar este ID o dejarlo solo en layout.
// Lo importante es usar SIEMPRE el mismo valor.
export const GA_MEASUREMENT_ID = 'G-TM2E7GF9F4';

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

// Función genérica para disparar eventos de GA4
export function gtagEvent(
  action: string,
  params?: Record<string, any>
) {
  if (typeof window === 'undefined') return;
  if (!window.gtag) return;

  window.gtag('event', action, params);
}
