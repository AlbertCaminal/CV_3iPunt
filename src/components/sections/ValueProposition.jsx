import { ArrowUpRight, Mail, Linkedin, Github, Rocket } from 'lucide-react';
import BentoCard from '../ui/BentoCard.jsx';
import { useT } from '../../i18n/LanguageContext.jsx';
import { contact } from '../../data/contact.js';
import { smoothScrollTo } from '../../lib/useLenis.js';

export default function ValueProposition() {
  const t = useT();
  const currentYear = new Date().getFullYear();

  return (
    <section
      id="contact"
      aria-labelledby="value-heading"
      className="scroll-mt-24 py-20 sm:py-28"
    >
      <BentoCard accent="blue" className="flex flex-col gap-10 p-8 sm:p-12">
        <div className="flex flex-col gap-6">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-accent-500/30 bg-accent-500/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.22em] text-accent-300">
            <Rocket className="size-3.5" aria-hidden="true" />
            {t.value.eyebrow}
          </span>

          <h2
            id="value-heading"
            className="text-balance text-3xl font-bold leading-tight tracking-tight text-zinc-50 sm:text-4xl md:text-5xl"
          >
            {t.value.titleStart}{' '}
            <span className="text-gradient-accent">
              {t.value.titleHighlight}
            </span>
          </h2>

          <p className="max-w-3xl text-pretty text-base leading-relaxed text-zinc-300 sm:text-lg">
            {t.value.body}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {t.value.chips.map((item) => (
            <div
              key={item.label}
              className="flex items-center justify-between gap-3 rounded-xl border border-zinc-800/80 bg-zinc-900/40 px-4 py-3"
            >
              <span className="text-xs font-medium uppercase tracking-[0.16em] text-zinc-500">
                {item.label}
              </span>
              <span className="text-sm font-semibold text-zinc-100">
                {item.value}
              </span>
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-accent-500/20 bg-accent-500/[0.04] p-6 sm:p-8">
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl font-bold tracking-tight text-zinc-50 sm:text-3xl">
              {t.value.contactTitle}
            </h3>
            <p className="max-w-2xl text-sm text-zinc-400 sm:text-base">
              {t.value.contactSubtitle}
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={`mailto:${contact.email}?subject=${encodeURIComponent('Hablemos · Informe de Impacto')}`}
              className="group inline-flex items-center gap-2 rounded-full border border-accent-500/50 bg-accent-500/15 px-5 py-2.5 text-sm font-semibold text-zinc-50 transition-all duration-300 hover:border-accent-400 hover:bg-accent-500/25 hover:shadow-glow-blue focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
            >
              <Mail className="size-4" aria-hidden="true" />
              <span>{t.value.ctaEmail}</span>
              <ArrowUpRight
                className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </a>

            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-zinc-700/80 bg-zinc-900/60 px-5 py-2.5 text-sm font-semibold text-zinc-100 transition-all duration-300 hover:border-accent-500/40 hover:bg-zinc-800/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
            >
              <Linkedin className="size-4" aria-hidden="true" />
              <span>{t.value.ctaLinkedin}</span>
              <ArrowUpRight
                className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </a>

            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-zinc-700/80 bg-zinc-900/60 px-5 py-2.5 text-sm font-semibold text-zinc-100 transition-all duration-300 hover:border-accent-500/40 hover:bg-zinc-800/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
            >
              <Github className="size-4" aria-hidden="true" />
              <span>{t.value.ctaGithub}</span>
              <ArrowUpRight
                className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </a>
          </div>

          <p className="mt-4 text-xs text-zinc-500">{contact.email}</p>
        </div>

        <div className="flex flex-col items-start justify-between gap-6 border-t border-zinc-800/80 pt-8 sm:flex-row sm:items-end">
          <div className="flex flex-col gap-1">
            <span className="text-xs font-medium uppercase tracking-[0.22em] text-zinc-500">
              {t.value.signedAs}
            </span>
            <span className="text-2xl font-bold tracking-tight text-zinc-50 sm:text-3xl">
              Albert Caminal i Mallol
            </span>
            <span className="text-sm text-zinc-400">{t.value.role}</span>
          </div>

          <button
            type="button"
            onClick={() => smoothScrollTo(0)}
            className="group inline-flex items-center gap-2 rounded-full border border-accent-500/40 bg-accent-500/10 px-5 py-2.5 text-sm font-semibold text-zinc-50 transition-all duration-300 hover:border-accent-400 hover:bg-accent-500/20 hover:shadow-glow-blue focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
          >
            {t.value.backTop}
            <ArrowUpRight
              className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </button>
        </div>
      </BentoCard>

      <p className="mt-10 text-center text-xs text-zinc-600">
        © {currentYear} · {t.value.footer}
      </p>
    </section>
  );
}
