import { motion } from 'framer-motion';
import { CheckCircle2, Sparkles } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader.jsx';
import { fadeInUp, staggerContainer, viewportOnce } from '../../lib/motion.js';
import { timelineEvents } from '../../data/timeline.js';
import { useT } from '../../i18n/LanguageContext.jsx';

export default function Timeline() {
  const t = useT();

  return (
    <section
      id="timeline"
      aria-labelledby="timeline-heading"
      className="scroll-mt-24 py-20 sm:py-28"
    >
      <SectionHeader
        eyebrow={t.timeline.eyebrow}
        title={
          <span id="timeline-heading">
            {t.timeline.titleStart}{' '}
            <span className="text-gradient-accent">
              {t.timeline.titleHighlight}
            </span>
          </span>
        }
        description={t.timeline.description}
      />

      <motion.ol
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="relative ml-3 flex flex-col gap-5 border-l border-zinc-800/80 pl-6 sm:ml-4 sm:pl-8"
      >
        <span
          aria-hidden="true"
          className="absolute -left-px top-0 h-full w-px bg-gradient-to-b from-accent-500/40 via-accent-500/10 to-transparent"
        />

        {timelineEvents.map((event) => {
          const evt = t.timeline.events[event.translationKey];
          const dotAccent =
            event.accent === 'cyan'
              ? 'border-glow bg-glow/20 text-glow shadow-glow-cyan'
              : 'border-accent-400 bg-accent-500/20 text-accent-300 shadow-glow-blue';

          return (
            <motion.li
              key={event.id}
              variants={fadeInUp}
              className="relative"
            >
              <span
                aria-hidden="true"
                className={[
                  'absolute -left-[35px] top-3 flex size-5 items-center justify-center rounded-full border-2 sm:-left-[43px]',
                  dotAccent,
                ].join(' ')}
              >
                {event.milestone ? (
                  <Sparkles className="size-2.5" />
                ) : (
                  <CheckCircle2 className="size-2.5" />
                )}
              </span>

              <div className="group relative overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-900/50 p-5 backdrop-blur-sm transition-[border-color,box-shadow] duration-300 hover:border-accent-500/40 hover:shadow-glow-blue sm:p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-base font-semibold tracking-tight text-zinc-50 sm:text-lg">
                    {evt.title}
                  </h3>
                  <span
                    className={[
                      'rounded-full border px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-[0.16em]',
                      event.accent === 'cyan'
                        ? 'border-glow/30 bg-glow/5 text-glow'
                        : 'border-accent-500/30 bg-accent-500/5 text-accent-300',
                    ].join(' ')}
                  >
                    {evt.month}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400 sm:text-base">
                  {evt.description}
                </p>
              </div>
            </motion.li>
          );
        })}
      </motion.ol>
    </section>
  );
}
