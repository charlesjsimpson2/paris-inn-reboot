import { Helmet } from "react-helmet-async";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  buildHreflangAlternates,
  buildLocalizedPath,
  BASE_URL,
  type PageKey,
} from "@/i18n/routes";

interface SEOProps {
  title: string;
  description: string;
  /** Legacy: explicit canonical path (e.g. "/nos-chambres"). Used when pageKey is not provided. */
  canonical?: string;
  ogImage?: string;
  ogType?: "website" | "article";
  noIndex?: boolean;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
  /** New (Stage 1+): page key from i18n/routes — enables auto canonical + hreflang per language */
  pageKey?: PageKey;
}

const LOCALE_MAP: Record<string, string> = {
  fr: "fr_FR",
  en: "en_GB",
  es: "es_ES",
  it: "it_IT",
  pt: "pt_BR",
  de: "de_DE",
};

export const SEO = ({
  title,
  description,
  canonical,
  ogImage,
  ogType = "website",
  noIndex = false,
  jsonLd,
  pageKey,
}: SEOProps) => {
  const { language } = useLanguage();
  const siteName = "Hôtel Inn Design Paris Place d'Italie";
  const fullTitle = title === siteName ? title : `${title} | ${siteName}`;

  // Resolve canonical: prefer pageKey-based localized canonical, fallback to legacy prop
  const canonicalPath = pageKey
    ? buildLocalizedPath(pageKey, language)
    : canonical;
  const canonicalUrl = canonicalPath ? `${BASE_URL}${canonicalPath}` : undefined;

  const ogImageUrl = ogImage || `${BASE_URL}/og-image.jpg`;
  const ogLocale = LOCALE_MAP[language] || "fr_FR";

  // Block indexing on non-production domains (lovable.app, localhost, etc.)
  // Production = hotel-inn-paris.fr OR www.hotel-inn-paris.fr
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  const isProductionDomain =
    hostname === "hotel-inn-paris.fr" ||
    hostname === "www.hotel-inn-paris.fr";
  const shouldNoIndex = noIndex || !isProductionDomain;

  const hreflangAlternates = pageKey ? buildHreflangAlternates(pageKey) : [];
  const xDefaultHref = pageKey
    ? `${BASE_URL}${buildLocalizedPath(pageKey, "fr")}`
    : null;

  return (
    <Helmet>
      <html lang={language} />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />

      {shouldNoIndex && <meta name="robots" content="noindex, nofollow" />}

      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* hreflang alternates (only when pageKey is provided) */}
      {hreflangAlternates.map(({ lang, href }) => (
        <link key={lang} rel="alternate" hrefLang={lang} href={href} />
      ))}
      {xDefaultHref && (
        <link rel="alternate" hrefLang="x-default" href={xDefaultHref} />
      )}

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={siteName} />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:locale" content={ogLocale} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImageUrl} />

      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(Array.isArray(jsonLd) ? jsonLd : jsonLd)}
        </script>
      )}
    </Helmet>
  );
};
