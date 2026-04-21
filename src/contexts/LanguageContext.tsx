import React, { createContext, useContext, useCallback, useMemo, useEffect, ReactNode } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { translations } from '@/i18n/translations';
import { seoTranslations } from '@/i18n/seoTranslations';
import { detectLanguageFromPath, switchPathLanguage } from '@/i18n/routes';

export type Language = 'fr' | 'en' | 'es' | 'it' | 'pt' | 'de';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const languages: { code: Language; name: string; flag: string }[] = [
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹' },
  { code: 'pt', name: 'Português', flag: '🇧🇷' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
];

// Re-export translations for backward compatibility
export { translations };

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  const navigate = useNavigate();

  // Language is derived from the URL — single source of truth.
  // FR URLs (no prefix) keep working exactly as before.
  const language = useMemo<Language>(
    () => detectLanguageFromPath(location.pathname),
    [location.pathname]
  );

  // Keep <html lang="xx"> in sync with the detected language.
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = language;
    }
  }, [language]);

  // setLanguage now navigates to the equivalent URL in the target language.
  const setLanguage = useCallback(
    (lang: Language) => {
      const targetPath = switchPathLanguage(location.pathname, lang);
      if (targetPath !== location.pathname) {
        navigate(targetPath);
      }
    },
    [location.pathname, navigate]
  );

  const t = useCallback(
    (key: string): string => {
      // SEO keys (seo.*) live in a separate file; check there first.
      if (key.startsWith('seo.')) {
        return (
          seoTranslations[language]?.[key] ??
          seoTranslations.fr?.[key] ??
          translations[language]?.[key] ??
          translations.fr?.[key] ??
          key
        );
      }
      return translations[language]?.[key] ?? translations.fr?.[key] ?? key;
    },
    [language]
  );

  const contextValue = useMemo(
    () => ({
      language,
      setLanguage,
      t,
    }),
    [language, setLanguage, t]
  );

  return <LanguageContext.Provider value={contextValue}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
