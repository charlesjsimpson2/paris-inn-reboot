import { X, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { getActiveEventTheme } from "@/config/eventThemes";

export const EventBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const theme = getActiveEventTheme();

  if (!theme || !isVisible) return null;

  return (
    <div className={`fixed top-0 left-0 right-0 z-[70] bg-gradient-to-r ${theme.bannerGradient} text-white shadow-lg`}>
      <div className="container mx-auto px-4 py-2 flex items-center justify-between gap-3">
        <Link 
          to={theme.bannerLink} 
          className="flex items-center gap-2 xs:gap-3 flex-1 group"
        >
          {(() => {
            const now = new Date();
            const isHoliday = theme.bannerHolidayStartDate && now >= new Date(theme.bannerHolidayStartDate);
            const text = isHoliday && theme.bannerTextHoliday ? theme.bannerTextHoliday : theme.bannerText;
            return (
              <>
                <span className="text-[11px] xs:text-xs sm:text-sm font-bold uppercase tracking-wider">
                  {theme.bannerEmoji} {theme.name}
                </span>
                <span className="hidden sm:inline text-xs sm:text-sm text-white/80">
                  {text.includes("—") ? text.split("—")[1]?.trim() : text}
                </span>
              </>
            );
          })()}
          <ArrowRight className="w-3.5 h-3.5 xs:w-4 xs:h-4 text-white/70 group-hover:translate-x-1 transition-transform shrink-0" />
        </Link>
        <button 
          onClick={(e) => { e.preventDefault(); setIsVisible(false); }}
          className="p-1 hover:bg-white/20 rounded transition-colors shrink-0"
          aria-label="Fermer"
        >
          <X className="w-3.5 h-3.5 xs:w-4 xs:h-4" />
        </button>
      </div>
    </div>
  );
};
