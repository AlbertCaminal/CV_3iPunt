import { useEffect, useRef, useState } from 'react';
import Lenis from 'lenis';

let sharedLenis = null;

export function getLenis() {
  return sharedLenis;
}

export function smoothScrollTo(target, options = {}) {
  if (typeof window === 'undefined') return;
  const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
  if (sharedLenis && !reduce) {
    sharedLenis.scrollTo(target, { offset: -16, duration: 1.2, ...options });
    return;
  }
  if (typeof target === 'string') {
    const el = document.querySelector(target);
    if (el) el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' });
  } else if (typeof target === 'number') {
    window.scrollTo({ top: target, behavior: reduce ? 'auto' : 'smooth' });
  } else if (target instanceof HTMLElement) {
    target.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' });
  }
}

export function useLenis() {
  const rafRef = useRef(0);
  const [, setReady] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return undefined;

    const prefersReduced = window.matchMedia?.(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReduced) return undefined;

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: false,
      wheelMultiplier: 1,
      touchMultiplier: 1.2,
    });

    sharedLenis = lenis;
    setReady(true);

    const raf = (time) => {
      lenis.raf(time);
      rafRef.current = requestAnimationFrame(raf);
    };
    rafRef.current = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafRef.current);
      lenis.destroy();
      sharedLenis = null;
    };
  }, []);
}
