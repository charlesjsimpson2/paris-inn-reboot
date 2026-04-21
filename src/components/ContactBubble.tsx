import { memo } from "react";
import { MessageCircle } from "lucide-react";
import { useLocation } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { LocalizedLink } from "@/components/LocalizedLink";
import { stripLanguagePrefix } from "@/i18n/routes";

export const ContactBubble = memo(() => {
  const location = useLocation();
  const { t } = useLanguage();

  // Hide on contact page (any language: /contact, /en/contact, /es/contact, etc.)
  if (stripLanguagePrefix(location.pathname) === "/contact") {
    return null;
  }

  return (
    <LocalizedLink
      to="/contact"
      className="fixed bottom-2 right-2 xs:bottom-3 xs:right-3 sm:bottom-4 sm:right-4 md:bottom-8 md:right-8 z-50 flex items-center gap-1.5 xs:gap-2 bg-burgundy text-white px-2.5 py-2 xs:px-3 xs:py-2.5 sm:px-4 sm:py-3 md:px-6 md:py-4 shadow-xl hover:shadow-2xl active:scale-95 transition-all duration-300 rounded-lg"
    >
      <MessageCircle className="w-4 h-4 xs:w-4 xs:h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
      <span className="font-medium text-[11px] xs:text-xs sm:text-sm md:text-base">{t('contact.bubble')}</span>
    </LocalizedLink>
  );
});

ContactBubble.displayName = 'ContactBubble';
