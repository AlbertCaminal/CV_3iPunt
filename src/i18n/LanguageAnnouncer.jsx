import { useEffect, useRef, useState } from 'react';
import { useLanguage } from './LanguageContext.jsx';

export default function LanguageAnnouncer() {
  const { t } = useLanguage();
  const firstRender = useRef(true);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return undefined;
    }
    setMessage(t.a11y.languageChanged);
    const id = window.setTimeout(() => setMessage(''), 1500);
    return () => window.clearTimeout(id);
  }, [t.a11y.languageChanged]);

  return (
    <div
      role="status"
      aria-live="polite"
      aria-atomic="true"
      className="sr-only"
    >
      {message}
    </div>
  );
}
