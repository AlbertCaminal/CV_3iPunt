import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { translations, LANG_OPTIONS } from './translations.js';

const STORAGE_KEY = 'cv3ipunt:lang';
const DEFAULT_LANG = 'es';
const SUPPORTED = LANG_OPTIONS.map((o) => o.code);

const LanguageContext = createContext({
  lang: DEFAULT_LANG,
  t: translations[DEFAULT_LANG],
  setLang: () => {},
});

function detectInitialLang() {
  if (typeof window === 'undefined') return DEFAULT_LANG;
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored && SUPPORTED.includes(stored)) return stored;
  } catch {
    /* localStorage may be unavailable */
  }
  const nav = window.navigator?.language?.toLowerCase() ?? '';
  if (nav.startsWith('ca')) return 'ca';
  if (nav.startsWith('en')) return 'en';
  return DEFAULT_LANG;
}

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(detectInitialLang);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang;
    }
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* noop */
    }
  }, [lang]);

  const setLang = useCallback((next) => {
    if (SUPPORTED.includes(next)) setLangState(next);
  }, []);

  const value = useMemo(
    () => ({ lang, t: translations[lang], setLang }),
    [lang, setLang]
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}

export function useT() {
  return useContext(LanguageContext).t;
}
