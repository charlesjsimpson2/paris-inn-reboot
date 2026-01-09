import { memo } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import logoHotel from "@/assets/logo-hotel-inn-paris.png";

export const Footer = memo(() => {
  const { t } = useLanguage();

  return (
    <footer className="bg-charcoal">
      {/* Accent line */}
      <div className="h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent" />
      
      <div className="container mx-auto px-4 py-8">
        {/* Top section - Logo centered */}
        <div className="text-center mb-6">
          <img 
            src={logoHotel} 
            alt="Hôtel Inn Design Paris" 
            loading="lazy"
            className="h-10 w-auto mx-auto mb-3"
          />
          <p className="text-muted-foreground text-sm max-w-md mx-auto">
            {t('footer.description')}
          </p>
        </div>

        {/* Contact info - elegant horizontal */}
        <div className="flex flex-wrap justify-center items-center gap-6 text-sm mb-6 pb-6 border-b border-border/30">
          <a href="tel:+33144240101" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors group">
            <Phone className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
            <span>+33 (0)1 44 24 01 01</span>
          </a>
          <span className="hidden sm:block w-px h-4 bg-border/50" />
          <a href="mailto:hid.paris13@gmail.com" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors group">
            <Mail className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
            <span>hid.paris13@gmail.com</span>
          </a>
          <span className="hidden sm:block w-px h-4 bg-border/50" />
          <span className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="w-4 h-4 text-primary" />
            <span>178 Bd Vincent Auriol, 75013 Paris</span>
          </span>
        </div>

        {/* Navigation - elegant inline */}
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm mb-6">
          <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">{t('nav.home')}</Link>
          <Link to="/nos-chambres" className="text-muted-foreground hover:text-primary transition-colors">{t('nav.rooms')}</Link>
          <Link to="/petit-dejeuner" className="text-muted-foreground hover:text-primary transition-colors">{t('nav.breakfast')}</Link>
          <Link to="/seminaires" className="text-muted-foreground hover:text-primary transition-colors">{t('nav.seminars')}</Link>
          <Link to="/localisation" className="text-muted-foreground hover:text-primary transition-colors">{t('nav.location')}</Link>
          <Link to="/evenements" className="text-muted-foreground hover:text-primary transition-colors">{t('nav.events')}</Link>
          <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">{t('nav.contact')}</Link>
        </nav>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-2 text-xs text-muted-foreground">
          <span>© 2025 Hôtel Inn Design Paris</span>
          <span className="hidden sm:inline">•</span>
          <Link to="/mentions-legales" className="hover:text-primary transition-colors">{t('footer.legal')}</Link>
          <span className="hidden sm:inline">•</span>
          <Link to="/mentions-legales" className="hover:text-primary transition-colors">{t('footer.privacy')}</Link>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';
