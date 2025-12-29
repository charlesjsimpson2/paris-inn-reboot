import { useState, useEffect, memo, useMemo } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";
import logoHotel from "@/assets/logo-hotel-inn-paris.png";

const getNavItems = (t: (key: string) => string) => [
  { name: t('nav.hotel'), href: "/" },
  { name: t('nav.rooms'), href: "/nos-chambres" },
  { name: t('nav.seminars'), href: "/seminaires" },
  { name: t('nav.breakfast'), href: "/petit-dejeuner" },
  { name: t('nav.location'), href: "/localisation" },
  { name: t('nav.events'), href: "/actualites" },
  { name: t('nav.contact'), href: "/contact" },
];

export const Header = memo(() => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();
  
  const navItems = useMemo(() => getNavItems(t), [t]);
  
  // Check if we're on homepage or a page with hero image
  const isHomePage = location.pathname === "/";
  const isHeroPage = location.pathname === "/nos-chambres" || location.pathname === "/actualites" || location.pathname === "/seminaires" || location.pathname === "/contact" || location.pathname === "/localisation" || location.pathname === "/petit-dejeuner";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Main navigation */}
      <div
        className={`transition-all duration-500 ${
          isScrolled || isHeroPage
            ? "bg-background/95 backdrop-blur-md shadow-elegant py-2"
            : "bg-transparent py-4"
        }`}
      >
        <div className="container mx-auto px-3 sm:px-4">
          <nav className="flex items-center justify-between relative">
            {/* Burger Menu - Left */}
            <button
              className={`group px-3 py-2 sm:px-5 sm:py-2.5 border-2 transition-all duration-300 flex items-center gap-2 sm:gap-3 z-10 shadow-md hover:shadow-lg active:scale-95 ${
                isHeroPage || isScrolled
                  ? "border-primary bg-transparent text-foreground hover:bg-primary hover:text-primary-foreground"
                  : "border-white/50 bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-foreground"
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Menu"
            >
              <Menu className="w-5 h-5" />
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider sm:tracking-widest hidden xs:inline">Menu</span>
            </button>

            {/* Logo - Center */}
            <Link to="/" className="absolute left-1/2 -translate-x-1/2 flex items-center">
              <img 
                src={logoHotel} 
                alt="Hotel Inn Paris" 
                loading="eager"
                fetchPriority="high"
                className="h-8 sm:h-10 md:h-12 w-auto"
              />
            </Link>

            {/* Right side: Language + Réserver Button */}
            <div className="flex items-center gap-1.5 sm:gap-2 md:gap-4 z-10">
              {/* Language Switcher */}
              <div className={`relative z-50 ${isScrolled || isHeroPage ? 'text-foreground' : 'text-white'}`}>
                <LanguageSwitcher />
              </div>
              
              <Button 
                variant="gold" 
                size="lg" 
                className="px-2.5 py-2 sm:px-4 md:px-6 md:py-5 text-xs sm:text-sm md:text-base font-bold tracking-wide shadow-lg hover:shadow-xl active:scale-95 transition-all duration-300 bg-burgundy hover:bg-burgundy/90 border-burgundy relative overflow-hidden group"
                asChild
              >
                <a href="https://www.secure-hotel-booking.com/d-edge/Hotel-inn-Paris-Place-d-Italie/JJGV/fr-FR/DateSelection" target="_blank" rel="noopener noreferrer">
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[shimmer_3s_infinite]"></span>
                  <span className="relative flex items-center gap-1 sm:gap-2 md:gap-3">
                    <span className="text-xs sm:text-sm md:text-lg">{t('nav.book').split(' ')[0]}</span>
                    <span className="text-[10px] sm:text-xs md:text-sm bg-white/25 px-1.5 py-0.5 sm:px-2 sm:py-1 md:px-3 md:py-1.5 rounded-full font-bold">-15%</span>
                  </span>
                </a>
              </Button>
            </div>
          </nav>
        </div>
      </div>

      {/* Slide-out Menu */}
      <div
        className={`fixed top-0 left-0 h-screen w-80 max-w-[85vw] bg-background shadow-2xl z-[60] transition-transform duration-300 ease-out ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6">
          {/* Close button */}
          <button
            className="mb-8 p-2 hover:bg-muted transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Fermer le menu"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Links */}
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`font-body text-lg uppercase tracking-wider py-3 px-4 transition-all hover:bg-muted hover:text-primary ${
                  location.pathname === item.href
                    ? "text-primary bg-muted/50"
                    : "text-foreground/80"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Contact Info */}
          <div className="mt-12 pt-8 border-t border-border">
            <div className="flex flex-col gap-4 text-sm text-muted-foreground">
              <a
                href="tel:+33144240101"
                className="flex items-center gap-3 hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                +33 (0)1 44 24 01 01
              </a>
              <a
                href="mailto:hid.paris13@gmail.com"
                className="flex items-center gap-3 hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                hid.paris13@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[55]"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </header>
  );
});

Header.displayName = 'Header';
