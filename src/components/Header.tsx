import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logoHotel from "@/assets/logo-hotel-inn-paris.png";

const navItems = [
  { name: "Accueil", href: "/" },
  { name: "Nos Chambres", href: "#chambres" },
  { name: "Séminaires", href: "#seminaire" },
  { name: "Petit Déjeuner", href: "#services" },
  { name: "Localisation", href: "#localisation" },
  { name: "Actualités", href: "/actualites" },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-elegant py-3"
          : "bg-transparent py-6"
      }`}
    >
      {/* Top bar */}
      <div
        className={`container mx-auto px-4 mb-2 transition-all duration-300 ${
          isScrolled ? "hidden" : "block"
        }`}
      >
        <div className="flex items-center justify-end gap-6 text-sm text-muted-foreground">
          <a
            href="tel:+33144240101"
            className="flex items-center gap-2 hover:text-primary transition-colors"
          >
            <Phone className="w-4 h-4" />
            +33 (0)1 44 24 01 01
          </a>
          <a
            href="mailto:hid.paris13@gmail.com"
            className="flex items-center gap-2 hover:text-primary transition-colors"
          >
            <Mail className="w-4 h-4" />
            hid.paris13@gmail.com
          </a>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between relative">
          {/* Burger Menu - Left */}
          <button
            className="group text-foreground px-4 py-2.5 rounded-full border-2 border-primary/80 bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center gap-3 z-10 shadow-sm hover:shadow-md"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu"
          >
            <Menu className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
            <span className="text-sm font-semibold uppercase tracking-widest">Menu</span>
          </button>

          {/* Logo - Center */}
          <Link to="/" className="absolute left-1/2 -translate-x-1/2 flex items-center">
            <img 
              src={logoHotel} 
              alt="Hotel Inn Paris" 
              className="h-12 md:h-16 w-auto"
            />
          </Link>

          {/* Réserver Button - Right */}
          <Button variant="gold" size="default" className="z-10">
            Réserver
          </Button>
        </nav>
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
            className="mb-8 p-2 rounded-lg hover:bg-muted transition-colors"
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
                className={`font-body text-lg uppercase tracking-wider py-3 px-4 rounded-lg transition-all hover:bg-muted hover:text-primary ${
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
