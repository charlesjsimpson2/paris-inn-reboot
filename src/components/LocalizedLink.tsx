import { forwardRef } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { localizePath } from '@/i18n/routes';

/**
 * LocalizedLink — drop-in replacement for react-router's <Link> that
 * automatically rewrites a canonical FR path to the active language.
 *
 * Usage:
 *   <LocalizedLink to="/nos-chambres">Rooms</LocalizedLink>
 *   - On FR pages → href is "/nos-chambres" (unchanged)
 *   - On EN pages → href is "/en/rooms"
 *   - On ES/IT/PT/DE pages → href is "/es/nos-chambres" (hybrid: FR slug under prefix)
 *
 * Notes:
 * - Only string `to` paths are localized. Object `to` (with state) is passed through.
 * - External and unknown paths are left untouched.
 * - For pages not yet mapped (event details, blog articles), the path is preserved.
 */

type LocalizedLinkProps = Omit<LinkProps, 'to'> & {
  to: string;
};

export const LocalizedLink = forwardRef<HTMLAnchorElement, LocalizedLinkProps>(
  ({ to, ...props }, ref) => {
    const { language } = useLanguage();
    const localized = typeof to === 'string' ? localizePath(to, language) : to;
    return <Link ref={ref} to={localized} {...props} />;
  }
);

LocalizedLink.displayName = 'LocalizedLink';

/**
 * Hook variant — returns the localized version of an FR canonical path.
 * Useful when you need the resolved href as a string (e.g. for buttons,
 * imperative navigation, or asChild patterns).
 */
export const useLocalizedPath = () => {
  const { language } = useLanguage();
  return (frPath: string): string => localizePath(frPath, language);
};
