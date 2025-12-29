import { translations, type Language } from "@/contexts/LanguageContext";

type AuditResult = {
  usedKeys: string[];
  missingByLanguage: Record<Language, string[]>;
};

const KEY_REGEX = /\bt\(\s*['\"]([a-z0-9_.-]+)['\"]/gi;

function extractKeys(source: string) {
  const keys: string[] = [];
  let match: RegExpExecArray | null;
  while ((match = KEY_REGEX.exec(source)) !== null) {
    if (match[1]) keys.push(match[1]);
  }
  return keys;
}

function pickFiles(rawFiles: Record<string, string>, wantedBasenames: string[]) {
  const wanted = new Set(wantedBasenames);
  return Object.entries(rawFiles)
    .filter(([path]) => wanted.has(path.split("/").pop() || ""))
    .map(([, content]) => content);
}

export function auditEventI18nKeys(): AuditResult {
  const pages = import.meta.glob("../pages/*.tsx", { as: "raw", eager: true }) as Record<
    string,
    string
  >;
  const components = import.meta.glob("../components/*.tsx", { as: "raw", eager: true }) as Record<
    string,
    string
  >;

  const pageSources = pickFiles(pages, [
    "Actualites.tsx",
    "Enfoires2026.tsx",
    "Tournoi6Nations.tsx",
    "SalonAgriculture.tsx",
    "MikaConcert.tsx",
    "ClaraLucianiConcert.tsx",
    "SemiMarathonParis.tsx",
    "WuTangConcert.tsx",
    "FranceAngleterre.tsx",
  ]);

  const componentSources = pickFiles(components, ["EasyAccessSection.tsx", "EventHotelPromo.tsx", "RelatedEvents.tsx"]);

  const used = new Set<string>();
  [...pageSources, ...componentSources].forEach((src) => {
    extractKeys(src).forEach((k) => used.add(k));
  });

  const usedKeys = Array.from(used).sort();

  const langs: Language[] = ["fr", "en", "es", "it", "pt"];
  const missingByLanguage = langs.reduce((acc, lang) => {
    const dict = translations[lang] || {};
    acc[lang] = usedKeys.filter((k) => !dict[k]);
    return acc;
  }, {} as Record<Language, string[]>);

  return { usedKeys, missingByLanguage };
}

export function logEventI18nAudit() {
  if (!import.meta.env.DEV) return;

  const { usedKeys, missingByLanguage } = auditEventI18nKeys();

  // eslint-disable-next-line no-console
  console.groupCollapsed(`[i18n audit] Event pages: ${usedKeys.length} keys`);
  (Object.keys(missingByLanguage) as Language[]).forEach((lang) => {
    const missing = missingByLanguage[lang] || [];
    // eslint-disable-next-line no-console
    console.log(`${lang}: ${missing.length} missing`, missing);
  });
  // eslint-disable-next-line no-console
  console.groupEnd();
}
