import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../ui/SectionHeader.jsx';
import { fadeInUp, staggerContainer, viewportOnce } from '../../lib/motion.js';
import { stackItems } from '../../data/stack.js';
import { useT } from '../../i18n/LanguageContext.jsx';

function StackIcon({ tech }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <span
        aria-hidden="true"
        className="flex size-10 items-center justify-center rounded-xl border border-accent-500/30 bg-accent-500/5 text-base font-bold text-accent-300 sm:size-12 sm:text-lg"
      >
        {tech.name.slice(0, 2)}
      </span>
    );
  }

  return (
    <img
      src={`https://cdn.simpleicons.org/${tech.slug}/${tech.color}`}
      alt=""
      width="40"
      height="40"
      loading="lazy"
      onError={() => setFailed(true)}
      className="size-7 transition-transform duration-300 group-hover:scale-110 sm:size-9 lg:size-8"
    />
  );
}

export default function Stack() {
  const t = useT();

  return (
    <section
      id="stack"
      aria-labelledby="stack-heading"
      className="scroll-mt-24 py-20 sm:py-28"
    >
      <SectionHeader
        eyebrow={t.stack.eyebrow}
        title={
          <span id="stack-heading">
            {t.stack.titleStart}{' '}
            <span className="text-gradient-accent">
              {t.stack.titleHighlight}
            </span>
          </span>
        }
        description={t.stack.description}
      />

      <motion.ul
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="grid grid-cols-2 gap-2.5 sm:grid-cols-4 sm:gap-3 lg:grid-cols-8 lg:gap-3"
      >
        {stackItems.map((tech) => (
          <motion.li
            key={tech.slug}
            variants={fadeInUp}
            whileHover={{ y: -3 }}
            transition={{ type: 'spring', stiffness: 320, damping: 22 }}
            className="group relative flex min-w-0 flex-col items-center justify-center gap-1.5 overflow-hidden rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-3 backdrop-blur-sm transition-[border-color,box-shadow] duration-300 hover:border-accent-500/40 hover:shadow-glow-blue sm:gap-2 sm:p-4 lg:p-3"
          >
            <div className="flex size-9 items-center justify-center sm:size-10 lg:size-9">
              <StackIcon tech={tech} />
            </div>
            <span className="flex min-h-[2rem] w-full items-center justify-center px-0.5 text-center text-[10px] font-medium leading-snug text-zinc-300 sm:min-h-[2.25rem] sm:text-xs lg:text-[11px]">
              {tech.name}
            </span>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}
