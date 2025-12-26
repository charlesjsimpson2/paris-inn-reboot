import { MessageCircle } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

export const ContactBubble = () => {
  const location = useLocation();
  const { t } = useLanguage();
  
  // Hide on contact page
  if (location.pathname === "/contact") {
    return null;
  }

  return (
    <Link
      to="/contact"
      className="fixed bottom-3 right-3 sm:bottom-4 sm:right-4 md:bottom-8 md:right-8 z-50 flex items-center gap-2 bg-burgundy text-white px-3 py-2.5 sm:px-4 sm:py-3 md:px-6 md:py-4 shadow-xl hover:shadow-2xl active:scale-95 transition-all duration-300"
    >
      <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
      <span className="font-medium text-xs sm:text-sm md:text-base">{t('contact.bubble')}</span>
    </Link>
  );
};
