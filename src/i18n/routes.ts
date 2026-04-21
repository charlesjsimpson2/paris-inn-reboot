/**
 * URL routing strategy:
 * - FR: no prefix, original slugs (unchanged — never touch)
 * - EN: /en/ prefix + translated slugs (better SEO + Google Ads)
 * - ES/IT/PT/DE: /xx/ prefix + FR slugs preserved (hybrid — pragmatic SEO)
 *
 * STAGE 2 — all core pages mapped.
 */

import type { Language } from '@/contexts/LanguageContext';

export const SUPPORTED_LANGUAGES: Language[] = ['fr', 'en', 'es', 'it', 'pt', 'de'];
export const NON_FR_LANGUAGES: Language[] = ['en', 'es', 'it', 'pt', 'de'];
export const DEFAULT_LANGUAGE: Language = 'fr';

/**
 * Canonical (FR) page key → per-language slug.
 * Empty string = homepage of that language.
 *
 * For EN: slugs are translated (rooms, seminars, breakfast...).
 * For ES/IT/PT/DE: slugs match FR (hybrid strategy — fast, SEO-acceptable).
 */
export type PageKey =
  | 'home'
  | 'rooms'
  | 'seminars'
  | 'breakfast'
  | 'contact'
  | 'location'
  | 'wifi'
  | 'discover'
  | 'events'
  | 'blog'
  | 'tips'
  | 'legal'
  | 'requestQuote'
  | 'planning'
  | 'bookingConfirmation';

export const SLUG_MAP: Record<PageKey, Record<Language, string>> = {
  home: {
    fr: '',
    en: '',
    es: '',
    it: '',
    pt: '',
    de: '',
  },
  rooms: {
    fr: 'nos-chambres',
    en: 'rooms',
    es: 'nos-chambres',
    it: 'nos-chambres',
    pt: 'nos-chambres',
    de: 'nos-chambres',
  },
  seminars: {
    fr: 'seminaires',
    en: 'seminars',
    es: 'seminaires',
    it: 'seminaires',
    pt: 'seminaires',
    de: 'seminaires',
  },
  breakfast: {
    fr: 'petit-dejeuner',
    en: 'breakfast',
    es: 'petit-dejeuner',
    it: 'petit-dejeuner',
    pt: 'petit-dejeuner',
    de: 'petit-dejeuner',
  },
  contact: {
    fr: 'contact',
    en: 'contact',
    es: 'contact',
    it: 'contact',
    pt: 'contact',
    de: 'contact',
  },
  location: {
    fr: 'localisation',
    en: 'location',
    es: 'localisation',
    it: 'localisation',
    pt: 'localisation',
    de: 'localisation',
  },
  wifi: {
    fr: 'wifi',
    en: 'wifi',
    es: 'wifi',
    it: 'wifi',
    pt: 'wifi',
    de: 'wifi',
  },
  discover: {
    fr: 'decouvrir-paris',
    en: 'discover-paris',
    es: 'decouvrir-paris',
    it: 'decouvrir-paris',
    pt: 'decouvrir-paris',
    de: 'decouvrir-paris',
  },
  events: {
    fr: 'evenements',
    en: 'events',
    es: 'evenements',
    it: 'evenements',
    pt: 'evenements',
    de: 'evenements',
  },
  blog: {
    fr: 'blog',
    en: 'blog',
    es: 'blog',
    it: 'blog',
    pt: 'blog',
    de: 'blog',
  },
  tips: {
    fr: 'conseils',
    en: 'tips',
    es: 'conseils',
    it: 'conseils',
    pt: 'conseils',
    de: 'conseils',
  },
  legal: {
    fr: 'mentions-legales',
    en: 'legal-notice',
    es: 'mentions-legales',
    it: 'mentions-legales',
    pt: 'mentions-legales',
    de: 'mentions-legales',
  },
  requestQuote: {
    fr: 'reservation-seminaire',
    en: 'request-quote',
    es: 'reservation-seminaire',
    it: 'reservation-seminaire',
    pt: 'reservation-seminaire',
    de: 'reservation-seminaire',
  },
  planning: {
    fr: 'planning-seminaire',
    en: 'seminar-planning',
    es: 'planning-seminaire',
    it: 'planning-seminaire',
    pt: 'planning-seminaire',
    de: 'planning-seminaire',
  },
  bookingConfirmation: {
    fr: 'validation-reservation-seminaire',
    en: 'booking-confirmation',
    es: 'validation-reservation-seminaire',
    it: 'validation-reservation-seminaire',
    pt: 'validation-reservation-seminaire',
    de: 'validation-reservation-seminaire',
  },
};

/**
 * Reverse lookup: FR canonical path (e.g. "/nos-chambres" or "/") -> PageKey.
 * Built once at module load. Used by useLocalizedPath / LocalizedLink.
 */
const FR_PATH_TO_PAGEKEY: Record<string, PageKey> = (() => {
  const map: Record<string, PageKey> = {};
  (Object.keys(SLUG_MAP) as PageKey[]).forEach((key) => {
    const frSlug = SLUG_MAP[key].fr;
    const path = frSlug === '' ? '/' : `/${frSlug}`;
    map[path] = key;
  });
  return map;
})();

export const getPageKeyForFrPath = (frPath: string): PageKey | null => {
  // Normalize: strip query/hash, trailing slash (except root)
  const cleaned = frPath.split('?')[0].split('#')[0];
  const normalized =
    cleaned !== '/' && cleaned.endsWith('/') ? cleaned.slice(0, -1) : cleaned;
  return FR_PATH_TO_PAGEKEY[normalized] ?? null;
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
 * Localize an FR canonical path to the target language.
 * - If the path matches a known PageKey, returns the localized equivalent.
 * - Otherwise, returns the path unchanged (safe fallback for FR-only pages
 *   like event detail pages, blog articles, etc.).
 *
 * Examples:
 *   localizePath('/nos-chambres', 'en') -> '/en/rooms'
 *   localizePath('/nos-chambres', 'fr') -> '/nos-chambres'
 *   localizePath('/evenements/mika-concert', 'en') -> '/evenements/mika-concert'
 *     (not mapped → stays FR; switching language from event page falls back via switchPathLanguage)
 */
export const localizePath = (frPath: string, targetLang: Language): string => {
  if (targetLang === 'fr') return frPath;
  const pageKey = getPageKeyForFrPath(frPath);
  if (!pageKey) return frPath;
  return buildLocalizedPath(pageKey, targetLang);
};

/**
 * Given the current pathname (FR or localized), return its equivalent in the
 * target language. Used by the language switcher.
 *
 * Strategy:
 * 1. Detect current language from URL prefix.
 * 2. Strip prefix → derive the "core" path in the current language.
 * 3. Find the matching PageKey by comparing against per-language slugs.
 * 4. Build the equivalent URL in the target language.
 * 5. Fallback: unknown page → target homepage (never strand the user).
 */
export const switchPathLanguage = (currentPath: string, targetLang: Language): string => {
  const currentLang = detectLanguageFromPath(currentPath);
  const stripped = stripLanguagePrefix(currentPath);

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
