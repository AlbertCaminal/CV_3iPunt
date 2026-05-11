import { motion } from 'framer-motion';
import { ArrowDown, Sparkles } from 'lucide-react';
import { staggerContainer, fadeInUp } from '../../lib/motion.js';
import { smoothScrollTo } from '../../lib/useLenis.js';
import { useT } from '../../i18n/LanguageContext.jsx';
import Aurora from '../ui/Aurora.jsx';

export default function Hero() {
  const t = useT();

  const handleScroll = (event) => {
    event.preventDefault();
    smoothScrollTo('#impact');
  };

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative flex min-h-[92vh] flex-col items-center justify-center py-24 text-center"
    >
      <Aurora />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center gap-7"
      >
        <motion.span
          variants={fadeInUp}
          className="inline-flex items-center gap-2 rounded-full border border-accent-500/30 bg-accent-500/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.22em] text-accent-300 sm:text-sm"
        >
          <Sparkles className="size-3.5 text-accent-400" aria-hidden="true" />
          {t.hero.tagline}
        </motion.span>

        <motion.h1
          id="hero-heading"
          variants={fadeInUp}
          className="text-balance text-4xl font-extrabold leading-[1.05] tracking-tight text-zinc-50 sm:text-5xl md:text-6xl lg:text-7xl"
        >
          {t.hero.titleLine1}
          <br className="hidden sm:block" />{' '}
          <span className="text-gradient-accent">{t.hero.titleHighlight}</span>
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="max-w-2xl text-pretty text-base text-zinc-400 sm:text-lg md:text-xl"
        >
          {t.hero.subtitle}
        </motion.p>

        <motion.div variants={fadeInUp} className="pt-2">
          <a
            href="#impact"
            onClick={handleScroll}
            className="group relative inline-flex items-center gap-3 rounded-full border border-accent-500/40 bg-accent-500/10 px-6 py-3 text-sm font-semibold text-zinc-50 transition-all duration-300 hover:border-accent-400 hover:bg-accent-500/20 hover:shadow-glow-blue focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 sm:text-base"
          >
            <span>{t.hero.cta}</span>
            <motion.span
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              className="inline-flex"
              aria-hidden="true"
            >
              <ArrowDown className="size-4" />
            </motion.span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
