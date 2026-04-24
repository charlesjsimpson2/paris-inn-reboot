import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

/**
 * SEO: Redirect /path/ → /path (no trailing slash) to avoid duplicate content.
 *
 * Google Search Console reports duplicate pages when the same content is
 * accessible via both /seminaires and /seminaires/. We standardize on the
 * NO-trailing-slash version (matches our canonical URLs in SEO.tsx).
 *
 * Uses replaceState so the redirected URL doesn't pollute browser history.
 * Note: this is a client-side redirect, but Googlebot executes JS and
 * follows it. The canonical link tag (set by SEO.tsx) reinforces the signal.
 */
export const TrailingSlashRedirect = () => {
  const { pathname, search, hash } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Only redirect if path ends with "/" and isn't the root "/"
    if (pathname.length > 1 && pathname.endsWith("/")) {
      const cleanPath = pathname.replace(/\/+$/, "");
      navigate(`${cleanPath}${search}${hash}`, { replace: true });
    }
  }, [pathname, search, hash, navigate]);

  return null;
};
