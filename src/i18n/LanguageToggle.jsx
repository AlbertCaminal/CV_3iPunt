import { motion, AnimatePresence } from 'framer-motion';
import { Languages } from 'lucide-react';
import { useLanguage } from './LanguageContext.jsx';

export default function LanguageToggle({ className = '', compact = false }) {
  const { lang, t, toggleLang } = useLanguage();

  return (
    <button
      type="button"
      onClick={toggleLang}
      aria-label={t.a11y.languageToggle}
      title={t.lang.otherLabel}
      lang={lang}
      className={[
        'group relative inline-flex items-center gap-2 rounded-full border border-zinc-700/80 bg-zinc-900/60 px-3 py-1.5 text-xs font-semibold text-zinc-300 transition-all duration-300 hover:border-accent-500/40 hover:bg-accent-500/10 hover:text-zinc-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950',
        compact ? '' : 'sm:text-sm',
        className,
      ].join(' ')}
    >
      <Languages className="size-3.5 text-accent-300" aria-hidden="true" />
      <span className="flex items-center gap-1 tabular-nums">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.span
            key={lang}
            initial={{ y: 6, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -6, opacity: 0 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="inline-block"
          >
            {t.lang.label}
          </motion.span>
        </AnimatePresence>
        <span className="text-zinc-600">/</span>
        <span className="text-zinc-500 transition-colors group-hover:text-zinc-400">
          {t.lang.other}
        </span>
      </span>
    </button>
  );
}
