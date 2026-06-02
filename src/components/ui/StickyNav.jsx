import { useEffect, useState } from 'react';
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useT } from '../../i18n/LanguageContext.jsx';
import LanguageToggle from '../../i18n/LanguageToggle.jsx';
import { useActiveSection } from '../../lib/useActiveSection.js';
import { smoothScrollTo } from '../../lib/useLenis.js';

const sections = [
  { id: 'impact', key: 'impact' },
  { id: 'methodology', key: 'methodology' },
  { id: 'projects', key: 'projects' },
  { id: 'timeline', key: 'timeline' },
  { id: 'stack', key: 'stack' },
  { id: 'contact', key: 'contact' },
];

const sectionIds = sections.map((s) => s.id);

export default function StickyNav() {
  const t = useT();
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(sectionIds);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setVisible(latest > 320);
  });

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (event) => {
      if (event.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  const handleAnchor = (event, id) => {
    event.preventDefault();
    setOpen(false);
    smoothScrollTo(`#${id}`);
  };

  const scrollTop = () => {
    setOpen(false);
    smoothScrollTo(0);
  };

  return (
    <AnimatePresence>
      {visible ? (
        <motion.header
          key="sticky-nav"
          initial={{ y: -64, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -64, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 print:hidden"
        >
          <nav className="flex w-full max-w-5xl items-center justify-between gap-3 rounded-full border border-zinc-800/80 bg-zinc-950/70 px-4 py-2 shadow-lg shadow-black/40 backdrop-blur-md">
            <button
              type="button"
              onClick={scrollTop}
              className="rounded-full px-2 py-1 text-sm font-semibold text-zinc-100 transition-colors hover:text-accent-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
            >
              {t.nav.brand}
            </button>

            <ul className="hidden items-center gap-1 lg:flex">
              {sections.map((section) => {
                const isActive = active === section.id;
                return (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      onClick={(event) => handleAnchor(event, section.id)}
                      aria-current={isActive ? 'true' : undefined}
                      className={[
                        'relative rounded-full px-3 py-1.5 text-xs font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950',
                        isActive
                          ? 'text-zinc-50'
                          : 'text-zinc-400 hover:bg-zinc-800/60 hover:text-zinc-50',
                      ].join(' ')}
                    >
                      {isActive ? (
                        <motion.span
                          layoutId="nav-active"
                          aria-hidden="true"
                          className="absolute inset-0 -z-10 rounded-full border border-accent-500/40 bg-accent-500/10"
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      ) : null}
                      <span className="relative">{t.nav[section.key]}</span>
                    </a>
                  </li>
                );
              })}
            </ul>

            <div className="flex items-center gap-1.5">
              <LanguageToggle compact />

              <button
                type="button"
                onClick={() => setOpen((prev) => !prev)}
                aria-expanded={open}
                aria-label={open ? t.a11y.closeMenu : t.a11y.openMenu}
                className="inline-flex size-9 items-center justify-center rounded-full border border-zinc-700/80 bg-zinc-900/60 text-zinc-300 transition-colors hover:border-accent-500/40 hover:text-zinc-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 lg:hidden"
              >
                {open ? (
                  <X className="size-4" aria-hidden="true" />
                ) : (
                  <Menu className="size-4" aria-hidden="true" />
                )}
              </button>
            </div>
          </nav>

          <AnimatePresence>
            {open ? (
              <motion.div
                key="mobile-menu"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className="absolute left-4 right-4 top-[68px] rounded-2xl border border-zinc-800/80 bg-zinc-950/90 p-2 shadow-2xl shadow-black/40 backdrop-blur-md lg:hidden"
              >
                <ul className="flex flex-col">
                  {sections.map((section) => {
                    const isActive = active === section.id;
                    return (
                      <li key={section.id}>
                        <a
                          href={`#${section.id}`}
                          onClick={(event) => handleAnchor(event, section.id)}
                          aria-current={isActive ? 'true' : undefined}
                          className={[
                            'block rounded-xl px-4 py-2.5 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950',
                            isActive
                              ? 'bg-accent-500/10 text-accent-200'
                              : 'text-zinc-300 hover:bg-zinc-800/60 hover:text-zinc-50',
                          ].join(' ')}
                        >
                          {t.nav[section.key]}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </motion.header>
      ) : null}
    </AnimatePresence>
  );
}
