import { TrendingUp, Gauge, Timer, ArrowRight } from 'lucide-react';
import BentoCard from '../ui/BentoCard.jsx';
import AnimatedCounter from '../ui/AnimatedCounter.jsx';
import SectionHeader from '../ui/SectionHeader.jsx';
import { metrics } from '../../data/metrics.js';
import { useT } from '../../i18n/LanguageContext.jsx';

const iconByMetric = {
  wp: TrendingUp,
  mgmt: Gauge,
  sig: Timer,
};

function MetricNumber({ metric, translated }) {
  if (metric.isStatic) {
    return (
      <div className="flex flex-col gap-3">
        <span className="text-5xl font-extrabold tracking-tight text-zinc-50 sm:text-6xl md:text-7xl">
          {translated.staticValue}
        </span>
        <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm">
          <span className="rounded-md border border-zinc-700/80 bg-zinc-800/40 px-2 py-1 font-medium text-zinc-400 line-through decoration-zinc-500/60">
            {translated.beforeLabel}: {translated.before}
          </span>
          <ArrowRight className="size-3.5 text-accent-400" aria-hidden="true" />
          <span className="rounded-md border border-accent-500/30 bg-accent-500/10 px-2 py-1 font-semibold text-accent-200">
            {translated.afterLabel}: {translated.after}
          </span>
        </div>
      </div>
    );
  }

  return (
    <AnimatedCounter
      value={metric.value}
      prefix={metric.prefix}
      suffix={metric.suffix}
      glow={metric.highlight}
      className={[
        'text-6xl font-extrabold tracking-tight sm:text-7xl md:text-[5.5rem]',
        metric.accent === 'cyan' ? 'text-gradient-accent' : 'text-zinc-50',
      ].join(' ')}
    />
  );
}

export default function ImpactDashboard() {
  const t = useT();

  return (
    <section
      id="impact"
      aria-labelledby="impact-heading"
      className="scroll-mt-24 py-20 sm:py-28"
    >
      <SectionHeader
        eyebrow={t.impact.eyebrow}
        title={
          <span id="impact-heading">
            {t.impact.titleStart}{' '}
            <span className="text-gradient-accent">
              {t.impact.titleHighlight}
            </span>{' '}
            {t.impact.titleEnd}
          </span>
        }
        description={t.impact.description}
      />

      <div className="grid grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-4">
        {metrics.map((metric, index) => {
          const Icon = iconByMetric[metric.id] ?? TrendingUp;
          const translated = t.impact.metrics[metric.translationKey];
          return (
            <BentoCard
              key={metric.id}
              accent={metric.accent}
              delay={index * 0.08}
              className={[
                'flex flex-col justify-between gap-8',
                metric.span ?? 'lg:col-span-2',
              ].join(' ')}
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2 rounded-full border border-zinc-700/80 bg-zinc-800/40 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-zinc-400">
                  {translated.label}
                </span>
                <span
                  className={[
                    'flex size-10 items-center justify-center rounded-xl border',
                    metric.accent === 'cyan'
                      ? 'border-glow/30 bg-glow/5 text-glow'
                      : 'border-accent-500/30 bg-accent-500/5 text-accent-300',
                  ].join(' ')}
                  aria-hidden="true"
                >
                  <Icon className="size-5" />
                </span>
              </div>

              <MetricNumber metric={metric} translated={translated} />

              <p className="text-sm leading-relaxed text-zinc-400 sm:text-base">
                {translated.description}
              </p>
            </BentoCard>
          );
        })}
      </div>
    </section>
  );
}
