/**
 * URL routing strategy:
 * - FR: no prefix, original slugs (unchanged)
 * - EN: /en/ prefix + translated slugs
 * - ES/IT/PT/DE: /xx/ prefix + FR slugs preserved (hybrid)
 *
 * STAGE 1 — only homepage is wired. Other pages added in later stages.
 */

import type { Language } from '@/contexts/LanguageContext';

export const SUPPORTED_LANGUAGES: Language[] = ['fr', 'en', 'es', 'it', 'pt', 'de'];
export const NON_FR_LANGUAGES: Language[] = ['en', 'es', 'it', 'pt', 'de'];
export const DEFAULT_LANGUAGE: Language = 'fr';

/**
 * Canonical (FR) page key → per-language slug.
 * Empty string = homepage of that language.
 *
 * For EN: slugs are translated. /en/ and /en/homepage both serve the homepage.
 * For other non-FR: slugs match FR (hybrid strategy).
 */
export type PageKey = 'home';

export const SLUG_MAP: Record<PageKey, Record<Language, string>> = {
  home: {
    fr: '',
    en: '',
    es: '',
    it: '',
    pt: '',
    de: '',
  },
};

/**
 * Detect language from a pathname. Returns 'fr' if no recognized prefix.
 */
export const detectLanguageFromPath = (pathname: string): Language => {
  const match = pathname.match(/^\/(en|es|it|pt|de)(\/|$)/);
  if (match) return match[1] as Language;
  return 'fr';
};

/**
 * Strip the language prefix from a pathname.
 * /en/rooms -> /rooms
 * /en       -> /
 * /         -> /
 */
export const stripLanguagePrefix = (pathname: string): string => {
  const stripped = pathname.replace(/^\/(en|es|it|pt|de)(?=\/|$)/, '');
  return stripped === '' ? '/' : stripped;
};

/**
 * Build the localized URL for a given page key and language.
 */
export const buildLocalizedPath = (pageKey: PageKey, lang: Language): string => {
  const slug = SLUG_MAP[pageKey][lang];
  if (lang === 'fr') {
    return slug === '' ? '/' : `/${slug}`;
  }
  return slug === '' ? `/${lang}/` : `/${lang}/${slug}`;
};

/**
 * Given the current pathname, return its equivalent in the target language.
 * Stage 1: only homepage mapping is supported. Unknown paths fall back to
 * the homepage of the target language to guarantee a working switcher.
 */
export const switchPathLanguage = (currentPath: string, targetLang: Language): string => {
  const currentLang = detectLanguageFromPath(currentPath);
  const stripped = stripLanguagePrefix(currentPath);

  // Find the page key matching the stripped path against the current language slug
  const normalizedStripped = stripped === '/' ? '' : stripped.replace(/^\//, '');

  const pageKey = (Object.keys(SLUG_MAP) as PageKey[]).find((key) => {
    const slugForCurrent = SLUG_MAP[key][currentLang];
    return slugForCurrent === normalizedStripped;
  });

  if (pageKey) {
    return buildLocalizedPath(pageKey, targetLang);
  }

  // Fallback: page not yet localized → keep FR URL when switching to FR,
  // otherwise send to localized homepage so user is never stranded.
  if (targetLang === 'fr') return currentPath;
  return `/${targetLang}/`;
};

/**
 * Build all hreflang alternates for a given page key.
 * Returns absolute URLs ready to be injected into <link rel="alternate">.
 */
export const BASE_URL = 'https://hotel-inn-paris.fr';

export const buildHreflangAlternates = (pageKey: PageKey) => {
  return SUPPORTED_LANGUAGES.map((lang) => ({
    lang,
    href: `${BASE_URL}${buildLocalizedPath(pageKey, lang)}`,
  }));
};
