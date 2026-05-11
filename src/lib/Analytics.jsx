import { useEffect } from 'react';

/**
 * Privacy-first analytics opt-in.
 *
 * Activación:
 *   1. Crea una cuenta en https://plausible.io (o self-host) y registra tu dominio.
 *   2. Crea un archivo `.env` en la raíz con:
 *        VITE_PLAUSIBLE_DOMAIN=albertcaminal.dev
 *        VITE_PLAUSIBLE_SRC=https://plausible.io/js/script.js  (opcional)
 *   3. Reinicia `npm run dev` o vuelve a hacer `npm run build`.
 *
 * Sin esa variable no se carga ningún script externo y no se envía nada.
 */
export default function Analytics() {
  useEffect(() => {
    const domain = import.meta.env.VITE_PLAUSIBLE_DOMAIN;
    if (!domain) return undefined;
    if (document.querySelector(`script[data-domain="${domain}"]`)) {
      return undefined;
    }

    const src = import.meta.env.VITE_PLAUSIBLE_SRC || 'https://plausible.io/js/script.js';
    const script = document.createElement('script');
    script.defer = true;
    script.src = src;
    script.dataset.domain = domain;
    document.head.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return null;
}
