import { motion } from 'framer-motion';
import { ScanSearch, Cpu, Rocket } from 'lucide-react';
import BentoCard from '../ui/BentoCard.jsx';
import SectionHeader from '../ui/SectionHeader.jsx';
import { staggerContainer } from '../../lib/motion.js';
import { methodologySteps } from '../../data/methodology.js';
import { useT } from '../../i18n/LanguageContext.jsx';

const iconMap = { ScanSearch, Cpu, Rocket };

export default function Methodology() {
  const t = useT();

  return (
    <section
      id="methodology"
      aria-labelledby="methodology-heading"
      className="scroll-mt-24 py-20 sm:py-28"
    >
      <SectionHeader
        eyebrow={t.methodology.eyebrow}
        title={
          <span id="methodology-heading">
            {t.methodology.titleStart}{' '}
            <span className="text-gradient-accent">
              {t.methodology.titleHighlight}
            </span>{' '}
            {t.methodology.titleEnd}
          </span>
        }
        description={t.methodology.description}
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-3"
      >
        {methodologySteps.map((step, index) => {
          const Icon = iconMap[step.icon] ?? Cpu;
          const stepTranslation = t.methodology.steps[step.translationKey];

          return (
            <BentoCard
              key={step.id}
              accent={step.accent}
              delay={index * 0.08}
              className="flex h-full flex-col gap-5"
            >
              <div className="flex items-center justify-between">
                <span
                  className={[
                    'flex size-12 items-center justify-center rounded-2xl border',
                    step.accent === 'cyan'
                      ? 'border-glow/30 bg-glow/5 text-glow'
                      : 'border-accent-500/30 bg-accent-500/5 text-accent-300',
                  ].join(' ')}
                  aria-hidden="true"
                >
                  <Icon className="size-6" />
                </span>
                <span
                  className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500"
                  aria-hidden="true"
                >
                  0{index + 1}
                </span>
              </div>

              <div className="flex flex-1 flex-col gap-2">
                <h3 className="text-xl font-semibold tracking-tight text-zinc-50 sm:text-2xl">
                  {stepTranslation.title}
                </h3>
                <p className="text-sm leading-relaxed text-zinc-400 sm:text-base">
                  {stepTranslation.description}
                </p>
              </div>
            </BentoCard>
          );
        })}
      </motion.div>
    </section>
  );
}
