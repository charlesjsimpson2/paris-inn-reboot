import { useState, useEffect, memo, useMemo } from "react";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";
import { getActiveEventTheme } from "@/config/eventThemes";
import logoHotel from "@/assets/logo-hotel-inn-paris.png";

const getNavItems = (t: (key: string) => string) => [
  { name: t('nav.hotel'), href: "/" },
  { name: t('nav.rooms'), href: "/nos-chambres" },
  { name: t('nav.seminars'), href: "/seminaires" },
  { name: t('nav.breakfast'), href: "/petit-dejeuner" },
  { name: "WiFi", href: "/wifi" },
  { name: t('nav.location'), href: "/localisation" },
  { name: t('nav.discover'), href: "/decouvrir-paris" },
  { name: t('nav.events'), href: "/evenements" },
  { name: t('nav.tips') || "Nos conseils", href: "/conseils" },
  { name: t('nav.contact'), href: "/contact" },
];

export const Header = memo(() => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();
  const eventTheme = getActiveEventTheme();
  
  const navItems = useMemo(() => getNavItems(t), [t]);
  
  // Check if we're on homepage or a page with hero image or internal page
  const isHomePage = location.pathname === "/";
  const isHeroPage = location.pathname === "/nos-chambres" || location.pathname === "/evenements" || location.pathname === "/seminaires" || location.pathname === "/contact" || location.pathname === "/localisation" || location.pathname === "/petit-dejeuner" || location.pathname.startsWith("/decouvrir-paris");
  const isInternalPage = location.pathname === "/mentions-legales";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top contact bar - Desktop only - Always visible */}
      <div className="hidden md:block bg-primary">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-1 text-xs text-primary-foreground">
            {/* Left - Email */}
            <a 
              href="mailto:hid.paris13@gmail.com" 
              className="flex items-center gap-2 hover:underline transition-colors group"
            >
              <Mail className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
              <span>hid.paris13@gmail.com</span>
            </a>
            
            {/* Center - Address */}
            <Link 
              to="/localisation" 
              className="flex items-center gap-2 hover:underline transition-colors group"
            >
              <MapPin className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
              <span>178 boulevard Vincent Auriol – 75013 Paris</span>
            </Link>
            
            {/* Right - Phone */}
            <a 
              href="tel:+33144240101" 
              className="flex items-center gap-2 hover:underline transition-colors group"
            >
              <Phone className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
              <span>+33 (0)1 44 24 01 01</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div
        className={`transition-all duration-500 ${
          isScrolled || isHeroPage || isInternalPage
            ? "bg-background shadow-elegant py-2"
            : "bg-transparent py-4"
        }`}
      >
        <div className="container mx-auto px-3 sm:px-4">
          <nav className="grid grid-cols-[auto_1fr_auto] items-center relative gap-2">
            {/* Burger Menu - Left */}
            <button
              className={`group px-3 py-2 sm:px-5 sm:py-2.5 border-2 transition-all duration-300 flex items-center gap-2 sm:gap-3 z-20 shadow-md hover:shadow-lg active:scale-95 justify-self-start whitespace-nowrap ${
                isHeroPage || isScrolled || isInternalPage
                  ? "border-primary bg-transparent text-foreground hover:bg-primary hover:text-primary-foreground"
                  : "border-white/50 bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-foreground"
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Menu"
            >
              <Menu className="w-5 h-5" />
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider sm:tracking-widest hidden xs:inline">Menu</span>
            </button>

            {/* Logo - Center with event decorations */}
            <div className="flex justify-center min-w-0 z-30">
              <Link
                to="/"
                className="flex items-center justify-center gap-1.5 w-full max-w-[160px] xs:max-w-[200px] sm:max-w-none"
                aria-label="Accueil"
              >
                {eventTheme && (
                  <span className="text-base xs:text-lg sm:text-xl md:text-2xl animate-bounce-subtle shrink-0" aria-hidden="true">
                    {eventTheme.logoDecorations.left}
                  </span>
                )}
                <img
                  src={logoHotel}
                  alt="Hotel Inn Paris"
                  loading="eager"
                  fetchPriority="high"
                  className="h-9 xs:h-11 sm:h-12 md:h-14 w-auto object-contain drop-shadow-sm"
                />
                {eventTheme && (
                  <span className="text-base xs:text-lg sm:text-xl md:text-2xl animate-bounce-subtle animation-delay-400 shrink-0" aria-hidden="true">
                    {eventTheme.logoDecorations.right}
                  </span>
                )}
              </Link>
            </div>

            {/* Right side: Language + Réserver Button */}
            <div className="flex items-center gap-1 xs:gap-1.5 sm:gap-2 md:gap-4 z-20 justify-self-end whitespace-nowrap">
              {/* Language Switcher */}
              <div className={`relative z-50 ${isScrolled || isHeroPage || isInternalPage ? 'text-foreground' : 'text-white'}`}>
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

          {/* Contact Info - Styled */}
          <div className="mt-8 pt-6 border-t border-border">
            <p className="text-xs uppercase tracking-wider text-muted-foreground mb-4 font-medium">{t('footer.contact')}</p>
            <div className="flex flex-col gap-3">
              <a
                href="tel:+33144240101"
                className="flex items-center gap-3 p-3 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors group"
              >
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <span className="text-sm text-foreground">+33 (0)1 44 24 01 01</span>
              </a>
              <a
                href="mailto:hid.paris13@gmail.com"
                className="flex items-center gap-3 p-3 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors group"
              >
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <span className="text-sm text-foreground">hid.paris13@gmail.com</span>
              </a>
              <Link
                to="/localisation"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-3 p-3 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors group"
              >
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <span className="text-sm text-foreground">178 bd Vincent Auriol, 75013</span>
              </Link>
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
