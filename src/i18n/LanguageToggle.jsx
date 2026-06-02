import { Languages } from 'lucide-react';
import { useLanguage } from './LanguageContext.jsx';
import { LANG_OPTIONS } from './translations.js';

export default function LanguageToggle({ className = '', compact = false }) {
  const { lang, t, setLang } = useLanguage();

  return (
    <div
      role="group"
      aria-label={t.a11y.languageToggle}
      className={[
        'inline-flex items-center gap-1 rounded-full border border-zinc-700/80 bg-zinc-900/60 p-1',
        className,
      ].join(' ')}
    >
      {!compact ? (
        <Languages
          className="ml-1.5 size-3.5 text-accent-300"
          aria-hidden="true"
        />
      ) : null}
      {LANG_OPTIONS.map((option) => {
        const isActive = lang === option.code;
        return (
          <button
            key={option.code}
            type="button"
            onClick={() => setLang(option.code)}
            aria-pressed={isActive}
            lang={option.code}
            className={[
              'rounded-full px-2.5 py-1 text-xs font-semibold tabular-nums transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950',
              isActive
                ? 'bg-accent-500/20 text-zinc-50 shadow-sm'
                : 'text-zinc-500 hover:bg-zinc-800/60 hover:text-zinc-300',
            ].join(' ')}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
