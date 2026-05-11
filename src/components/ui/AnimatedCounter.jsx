import { useEffect, useRef, useState } from 'react';
import {
  animate,
  useInView,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from 'framer-motion';

export default function AnimatedCounter({
  value,
  prefix = '',
  suffix = '',
  duration = 1.6,
  className = '',
  glow = false,
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const shouldReduceMotion = useReducedMotion();
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const textRef = useRef(null);
  const [isCounting, setIsCounting] = useState(false);

  useEffect(() => {
    if (!inView) return undefined;

    if (shouldReduceMotion) {
      count.set(value);
      if (textRef.current) textRef.current.textContent = String(value);
      return undefined;
    }

    setIsCounting(true);
    const controls = animate(count, value, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onComplete: () => setIsCounting(false),
    });
    return () => controls.stop();
  }, [inView, value, duration, count, shouldReduceMotion]);

  useEffect(() => {
    const unsubscribe = rounded.on('change', (latest) => {
      if (textRef.current) {
        textRef.current.textContent = String(latest);
      }
    });
    return () => unsubscribe();
  }, [rounded]);

  return (
    <span
      ref={ref}
      className={[
        'inline-block transition-[filter] duration-700',
        glow && isCounting && !shouldReduceMotion
          ? 'drop-shadow-[0_0_24px_rgba(59,130,246,0.55)]'
          : '',
        className,
      ].join(' ')}
      aria-label={`${prefix}${value}${suffix}`}
    >
      {prefix}
      <span ref={textRef}>{shouldReduceMotion ? String(value) : '0'}</span>
      {suffix}
    </span>
  );
}
