import { Leaf, X, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export const SalonAgricultureBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  // Only show between Feb 21 and Mar 1, 2026
  const now = new Date();
  const start = new Date("2026-02-21T00:00:00");
  const end = new Date("2026-03-01T23:59:59");
  const isActive = now >= start && now <= end;

  if (!isActive || !isVisible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[70] bg-gradient-to-r from-green-700 via-emerald-600 to-green-700 text-white shadow-lg">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between gap-3">
        <Link 
          to="/evenements/salon-agriculture" 
          className="flex items-center gap-2 xs:gap-3 flex-1 group"
        >
          <div className="flex items-center gap-1.5 xs:gap-2 shrink-0">
            <Leaf className="w-4 h-4 xs:w-5 xs:h-5 text-green-200 animate-bounce-subtle" />
            <span className="text-[11px] xs:text-xs sm:text-sm font-bold uppercase tracking-wider">
              🐄 Salon de l'Agriculture
            </span>
          </div>
          <span className="hidden sm:inline text-xs sm:text-sm text-green-100">
            — Du 21 février au 1er mars 2026 • Réservez votre séjour !
          </span>
          <ArrowRight className="w-3.5 h-3.5 xs:w-4 xs:h-4 text-green-200 group-hover:translate-x-1 transition-transform shrink-0" />
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
