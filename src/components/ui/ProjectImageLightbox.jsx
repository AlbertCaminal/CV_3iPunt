import { useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';

export default function ProjectImageLightbox({
  open,
  imageSrc,
  title,
  closeLabel,
  onClose,
}) {
  const closeRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();

    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && imageSrc ? (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-lightbox-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[70] flex items-center justify-center p-4 sm:p-8"
        >
          <button
            type="button"
            className="absolute inset-0 bg-zinc-950/85 backdrop-blur-sm"
            aria-label={closeLabel}
            onClick={onClose}
          />

          <motion.figure
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 flex max-h-[min(92vh,900px)] w-full max-w-5xl flex-col gap-3"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              className="absolute -right-1 -top-1 z-20 flex size-10 items-center justify-center rounded-full border border-zinc-700/80 bg-zinc-900/90 text-zinc-300 shadow-lg transition-colors hover:border-zinc-600 hover:bg-zinc-800 hover:text-zinc-50 sm:-right-3 sm:-top-3"
              aria-label={closeLabel}
            >
              <X className="size-5" aria-hidden="true" />
            </button>

            <div className="overflow-hidden rounded-2xl border border-zinc-700/80 bg-zinc-900 shadow-2xl shadow-black/50">
              <img
                src={imageSrc}
                alt={title}
                className="max-h-[min(78vh,820px)] w-full object-contain object-center"
              />
            </div>

            <figcaption
              id="project-lightbox-title"
              className="text-center text-sm font-medium text-zinc-300 sm:text-base"
            >
              {title}
            </figcaption>
          </motion.figure>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
