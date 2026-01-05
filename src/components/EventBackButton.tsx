import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const EventBackButton = () => {
  const { t } = useLanguage();
  
  return (
    <div className="bg-primary/10 border-b border-primary/20">
      <div className="container mx-auto px-4">
        <Link 
          to="/evenements" 
          className="inline-flex items-center gap-2 py-3 text-sm font-medium text-primary hover:text-primary/80 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>{t('events.backToEvents')}</span>
        </Link>
      </div>
    </div>
  );
};
