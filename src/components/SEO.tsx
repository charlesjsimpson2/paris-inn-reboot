import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: "website" | "article";
  noIndex?: boolean;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

export const SEO = ({
  title,
  description,
  canonical,
  ogImage,
  ogType = "website",
  noIndex = false,
  jsonLd,
}: SEOProps) => {
  const siteName = "Hôtel Inn Design Paris Place d'Italie";
  const baseUrl = "https://hotel-inn-paris.fr";
  const fullTitle = title === siteName ? title : `${title} | ${siteName}`;
  const canonicalUrl = canonical ? `${baseUrl}${canonical}` : undefined;
  const ogImageUrl = ogImage || `${baseUrl}/og-image.jpg`;
  
  // Block indexing on non-production domains (lovable.app, localhost, etc.)
  const isProductionDomain = typeof window !== 'undefined' && 
    window.location.hostname === 'hotel-inn-paris.fr';
  const shouldNoIndex = noIndex || !isProductionDomain;
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      
      {shouldNoIndex && <meta name="robots" content="noindex, nofollow" />}
      
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={siteName} />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:locale" content="fr_FR" />
      
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
