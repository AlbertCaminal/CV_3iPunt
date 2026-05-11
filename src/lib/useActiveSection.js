import { useEffect, useState } from 'react';

export function useActiveSection(sectionIds, options = {}) {
  const [active, setActive] = useState(sectionIds[0] ?? null);

  useEffect(() => {
    if (typeof window === 'undefined' || !sectionIds?.length) return undefined;

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!elements.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio ||
              a.boundingClientRect.top - b.boundingClientRect.top
          );
        if (visible[0]) {
          setActive(visible[0].target.id);
        }
      },
      {
        rootMargin: options.rootMargin ?? '-40% 0px -45% 0px',
        threshold: options.threshold ?? [0, 0.25, 0.5, 0.75, 1],
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [JSON.stringify(sectionIds), options.rootMargin, options.threshold]);

  return active;
}
