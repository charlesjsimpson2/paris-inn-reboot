import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ChevronRight, Home } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { buildLocalizedPath, BASE_URL, type PageKey } from "@/i18n/routes";

export interface BreadcrumbItem {
  /** Display label (already translated). */
  label: string;
  /** Optional pageKey — generates a localized link automatically. */
  pageKey?: PageKey;
  /** Optional explicit href (for dynamic pages like articles). Overrides pageKey. */
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  /** Visual variant: 'light' for dark backgrounds, 'default' for light backgrounds. */
  variant?: "default" | "light";
  className?: string;
}

/**
 * Breadcrumb navigation with JSON-LD structured data for SEO.
 * The Home (root) item is added automatically as the first crumb.
 * The last item is rendered as the current page (non-clickable).
 */
export const Breadcrumbs = ({
  items,
  variant = "default",
  className = "",
}: BreadcrumbsProps) => {
  const { language, t } = useLanguage();

  const homeHref = buildLocalizedPath("home", language);
  const homeLabel = t("nav.home") || "Accueil";

  // Build full crumb list including Home
  const allCrumbs: Array<{ label: string; href: string | null }> = [
    { label: homeLabel, href: homeHref },
    ...items.map((item, idx) => {
      const isLast = idx === items.length - 1;
      const href = item.href
        ? item.href
        : item.pageKey
          ? buildLocalizedPath(item.pageKey, language)
          : null;
      return {
        label: item.label,
        href: isLast ? null : href, // last crumb = current page, no link
      };
    }),
  ];

  // JSON-LD BreadcrumbList for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: allCrumbs.map((crumb, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: crumb.label,
      ...(crumb.href ? { item: `${BASE_URL}${crumb.href}` } : {}),
    })),
  };

  const textColor =
    variant === "light"
      ? "text-white/90"
      : "text-muted-foreground";
  const linkHover =
    variant === "light"
      ? "hover:text-white"
      : "hover:text-foreground";
  const currentColor =
    variant === "light" ? "text-white font-medium" : "text-foreground font-medium";

  return (
    <>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <nav
        aria-label="Breadcrumb"
        className={`text-sm ${textColor} ${className}`}
      >
        <ol className="flex flex-wrap items-center gap-1.5">
          {allCrumbs.map((crumb, idx) => {
            const isLast = idx === allCrumbs.length - 1;
            const isHome = idx === 0;
            return (
              <li key={idx} className="inline-flex items-center gap-1.5">
                {idx > 0 && (
                  <ChevronRight
                    className="w-3.5 h-3.5 opacity-60 shrink-0"
                    aria-hidden="true"
                  />
                )}
                {isLast || !crumb.href ? (
                  <span className={currentColor} aria-current="page">
                    {isHome ? (
                      <Home className="w-3.5 h-3.5 inline" aria-hidden="true" />
                    ) : (
                      crumb.label
                    )}
                  </span>
                ) : (
                  <Link
                    to={crumb.href}
                    className={`transition-colors ${linkHover}`}
                  >
                    {isHome ? (
                      <Home className="w-3.5 h-3.5 inline" aria-hidden="true" />
                    ) : (
                      crumb.label
                    )}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
};
