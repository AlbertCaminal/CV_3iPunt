import { motion, useReducedMotion } from 'framer-motion';

export default function Aurora({ className = '' }) {
  const reduce = useReducedMotion();

  const transition = {
    duration: 14,
    repeat: Infinity,
    repeatType: 'mirror',
    ease: 'easeInOut',
  };

  const fadeMask =
    'linear-gradient(to bottom, black 0%, black 65%, transparent 100%)';

  return (
    <div
      aria-hidden="true"
      className={[
        'pointer-events-none absolute inset-x-0 top-0 -bottom-32 -z-10 overflow-hidden',
        className,
      ].join(' ')}
      style={{ maskImage: fadeMask, WebkitMaskImage: fadeMask }}
    >
      <motion.div
        className="absolute left-1/2 top-1/3 size-[680px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-500/15 blur-3xl"
        animate={
          reduce
            ? undefined
            : {
                x: ['-50%', '-42%', '-58%', '-50%'],
                y: ['-50%', '-58%', '-44%', '-50%'],
                scale: [1, 1.08, 0.95, 1],
              }
        }
        transition={transition}
      />

      <motion.div
        className="absolute right-[5%] top-[12%] size-[360px] rounded-full bg-glow/12 blur-3xl"
        animate={
          reduce
            ? undefined
            : {
                x: [0, -40, 30, 0],
                y: [0, 30, -20, 0],
                opacity: [0.7, 1, 0.7],
              }
        }
        transition={{ ...transition, duration: 18 }}
      />

      <motion.div
        className="absolute bottom-[18%] left-[10%] size-[480px] rounded-full bg-accent-500/12 blur-3xl"
        animate={
          reduce
            ? undefined
            : {
                x: [0, 40, -20, 0],
                y: [0, -30, 20, 0],
                opacity: [0.45, 0.85, 0.45],
              }
        }
        transition={{ ...transition, duration: 22 }}
      />

      <motion.div
        className="absolute left-1/2 top-0 h-[80%] w-px origin-top -translate-x-1/2 bg-gradient-to-b from-accent-400/30 via-glow/10 to-transparent"
        animate={reduce ? undefined : { opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div
        className="absolute inset-0 aurora-grid"
        style={{
          backgroundImage:
            'linear-gradient(rgba(59,130,246,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.04) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />
    </div>
  );
}
