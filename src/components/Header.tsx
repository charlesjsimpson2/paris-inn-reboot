import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logoHotel from "@/assets/logo-hotel-inn-paris.png";

const navItems = [
  { name: "Accueil", href: "/" },
  { name: "Nos Chambres", href: "/nos-chambres" },
  { name: "Séminaires", href: "/seminaires" },
  { name: "Petit Déjeuner", href: "/petit-dejeuner" },
  { name: "Localisation", href: "/localisation" },
  { name: "Actualités", href: "/actualites" },
  { name: "Contact", href: "/contact" },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  
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
      {/* Top bar with contact info - visible on homepage when not scrolled */}
      <div
        className={`transition-all duration-500 ${
          isScrolled || isHeroPage ? "h-0 opacity-0 overflow-hidden" : "h-auto opacity-100"
        }`}
      >
        <div className="bg-charcoal/80 backdrop-blur-sm border-b border-border/30">
          <div className="container mx-auto px-4 py-2">
            <div className="flex items-center justify-between">
              {/* Left: Address */}
              <div className="hidden md:flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 text-burgundy" />
                <span className="text-sm">211 Bd Vincent Auriol, 75013 Paris</span>
              </div>
              
              {/* Right: Contact info + Button */}
              <div className="flex items-center gap-4 ml-auto">
                <a
                  href="tel:+33144240101"
                  className="flex items-center gap-2 text-foreground hover:text-burgundy transition-colors"
                >
                  <div className="w-8 h-8 bg-burgundy/15 border border-burgundy/30 flex items-center justify-center">
                    <Phone className="w-4 h-4 text-burgundy" />
                  </div>
                  <span className="text-sm font-medium hidden sm:inline">+33 (0)1 44 24 01 01</span>
                </a>
                <a
                  href="mailto:hid.paris13@gmail.com"
                  className="flex items-center gap-2 text-foreground hover:text-burgundy transition-colors"
                >
                  <div className="w-8 h-8 bg-burgundy/15 border border-burgundy/30 flex items-center justify-center">
                    <Mail className="w-4 h-4 text-burgundy" />
                  </div>
                  <span className="text-sm font-medium hidden sm:inline">hid.paris13@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div
        className={`transition-all duration-500 ${
          isScrolled || isHeroPage
            ? "bg-background/95 backdrop-blur-md shadow-elegant py-2"
            : "bg-transparent py-4"
        }`}
      >
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between relative">
            {/* Burger Menu - Left */}
            <button
              className={`group px-5 py-2.5 border-2 transition-all duration-300 flex items-center gap-3 z-10 shadow-md hover:shadow-lg hover:scale-105 ${
                isHeroPage || isScrolled
                  ? "border-primary bg-transparent text-foreground hover:bg-primary hover:text-primary-foreground"
                  : "border-white/50 bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-foreground"
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Menu"
            >
              <Menu className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
              <span className="text-sm font-bold uppercase tracking-widest">Menu</span>
            </button>

            {/* Logo - Center */}
            <Link to="/" className="absolute left-1/2 -translate-x-1/2 flex items-center">
              <img 
                src={logoHotel} 
                alt="Hotel Inn Paris" 
                className="h-10 md:h-12 w-auto"
              />
            </Link>

            {/* Réserver Button - Right */}
            <Button 
              variant="gold" 
              size="lg" 
              className="z-10 px-6 py-5 text-base font-bold tracking-wide shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 bg-burgundy hover:bg-burgundy/90 border-burgundy animate-pulse hover:animate-none"
              asChild
            >
              <a href="https://www.secure-hotel-booking.com/d-edge/Hotel-inn-Paris-Place-d-Italie/JJGV/fr-FR/DateSelection" target="_blank" rel="noopener noreferrer">
                <span className="flex items-center gap-3">
                  <span className="text-lg">Réserver</span>
                  <span className="text-sm bg-white/25 px-3 py-1.5 rounded-full font-bold animate-bounce">-10%</span>
                </span>
              </a>
            </Button>
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
};
