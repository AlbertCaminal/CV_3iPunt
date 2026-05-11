import FadeInUp from './FadeInUp.jsx';

export default function SectionHeader({ eyebrow, title, description, align = 'left' }) {
  const alignment = align === 'center' ? 'items-center text-center' : 'items-start text-left';

  return (
    <div className={['mb-10 flex flex-col gap-3 sm:mb-14', alignment].join(' ')}>
      {eyebrow ? (
        <FadeInUp>
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-accent-500/30 bg-accent-500/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-accent-300">
            <span className="size-1.5 rounded-full bg-accent-400 animate-pulse-soft" />
            {eyebrow}
          </span>
        </FadeInUp>
      ) : null}

      <FadeInUp delay={0.05}>
        <h2 className="text-balance text-3xl font-bold tracking-tight text-zinc-50 sm:text-4xl md:text-5xl">
          {title}
        </h2>
      </FadeInUp>

      {description ? (
        <FadeInUp delay={0.1}>
          <p
            className={[
              'max-w-2xl text-pretty text-base text-zinc-400 sm:text-lg',
              align === 'center' ? 'mx-auto' : '',
            ].join(' ')}
          >
            {description}
          </p>
        </FadeInUp>
      ) : null}
    </div>
  );
}
