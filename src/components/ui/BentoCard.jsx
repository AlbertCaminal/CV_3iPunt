import { useRef } from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { fadeInUp, viewportOnce } from '../../lib/motion.js';

const accentBorderHover = {
  blue: 'hover:border-accent-500/50 hover:shadow-glow-blue',
  cyan: 'hover:border-glow/50 hover:shadow-glow-cyan',
};

const spotlightColor = {
  blue: 'rgba(59, 130, 246, 0.18)',
  cyan: 'rgba(34, 211, 238, 0.18)',
};

export default function BentoCard({
  children,
  className = '',
  accent = 'blue',
  interactive = true,
  as = 'div',
  delay = 0,
  spotlight = true,
}) {
  const MotionComponent = motion[as] ?? motion.div;
  const cardRef = useRef(null);

  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);

  const handleMouseMove = (event) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set(event.clientX - rect.left);
    mouseY.set(event.clientY - rect.top);
  };

  const handleMouseLeave = () => {
    mouseX.set(-200);
    mouseY.set(-200);
  };

  const spotlightBg = useMotionTemplate`radial-gradient(420px circle at ${mouseX}px ${mouseY}px, ${spotlightColor[accent] ?? spotlightColor.blue}, transparent 60%)`;

  return (
    <MotionComponent
      ref={cardRef}
      onMouseMove={spotlight && interactive ? handleMouseMove : undefined}
      onMouseLeave={spotlight && interactive ? handleMouseLeave : undefined}
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      transition={{ ...fadeInUp.visible.transition, delay }}
      whileHover={interactive ? { y: -4 } : undefined}
      className={[
        'group relative overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-900/50 p-6 backdrop-blur-sm transition-[border-color,box-shadow] duration-300 sm:p-8',
        interactive ? accentBorderHover[accent] ?? accentBorderHover.blue : '',
        className,
      ].join(' ')}
    >
      {spotlight && interactive ? (
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: spotlightBg }}
        />
      ) : null}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 opacity-40"
        style={{
          background:
            accent === 'cyan'
              ? 'radial-gradient(120% 80% at 0% 0%, rgba(34,211,238,0.05), transparent 60%)'
              : 'radial-gradient(120% 80% at 0% 0%, rgba(59,130,246,0.06), transparent 60%)',
        }}
      />
      {children}
    </MotionComponent>
  );
}
