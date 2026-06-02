import { motion } from 'framer-motion';
import {
  Mail,
  Zap,
  HeartPulse,
  WandSparkles,
  GraduationCap,
  CheckCircle2,
} from 'lucide-react';
import BentoCard from '../ui/BentoCard.jsx';
import SectionHeader from '../ui/SectionHeader.jsx';
import { staggerContainer } from '../../lib/motion.js';
import { projects } from '../../data/projects.js';
import { useT } from '../../i18n/LanguageContext.jsx';

const iconMap = { Mail, Zap, HeartPulse, WandSparkles, GraduationCap };

export default function ProjectShowcase() {
  const t = useT();

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="scroll-mt-24 py-20 sm:py-28"
    >
      <SectionHeader
        eyebrow={t.projects.eyebrow}
        title={
          <span id="projects-heading">
            {t.projects.titleStart}{' '}
            <span className="text-gradient-accent">
              {t.projects.titleHighlight}
            </span>
          </span>
        }
        description={t.projects.description}
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="grid grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-3"
      >
        {projects.map((project, index) => {
          const Icon = iconMap[project.icon] ?? Zap;
          const translated = t.projects.items[project.translationKey];
          return (
            <BentoCard
              key={project.id}
              accent={project.accent}
              delay={index * 0.08}
              className={[
                'flex h-full flex-col gap-6',
                project.span ?? 'lg:col-span-1',
              ].join(' ')}
            >
              <div className="flex items-center justify-between">
                <span
                  className={[
                    'flex size-12 items-center justify-center rounded-2xl border',
                    project.accent === 'cyan'
                      ? 'border-glow/30 bg-glow/5 text-glow'
                      : 'border-accent-500/30 bg-accent-500/5 text-accent-300',
                  ].join(' ')}
                  aria-hidden="true"
                >
                  <Icon className="size-6" />
                </span>
                {translated.badge ? (
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-zinc-700/80 bg-zinc-800/40 px-2.5 py-1 text-[11px] font-medium text-zinc-300">
                    <CheckCircle2
                      className={[
                        'size-3',
                        project.accent === 'cyan'
                          ? 'text-glow'
                          : 'text-accent-400',
                      ].join(' ')}
                      aria-hidden="true"
                    />
                    {translated.badge}
                  </span>
                ) : null}
              </div>

              <div className="flex flex-1 flex-col gap-3">
                <h3 className="text-xl font-semibold tracking-tight text-zinc-50 sm:text-2xl">
                  {translated.title}
                </h3>
                <p className="text-sm leading-relaxed text-zinc-400 sm:text-base">
                  {translated.description}
                </p>
              </div>
            </BentoCard>
          );
        })}
      </motion.div>
    </section>
  );
}
