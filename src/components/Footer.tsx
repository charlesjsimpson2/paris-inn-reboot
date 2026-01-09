import { memo } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import logoHotel from "@/assets/logo-hotel-inn-paris.png";

export const Footer = memo(() => {
  const { t } = useLanguage();

  return (
    <footer className="bg-charcoal border-t border-border">
      <div className="container mx-auto px-4 py-6">
        {/* Main content - horizontal layout */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
          {/* Logo & Description */}
          <div className="lg:max-w-xs">
            <img 
              src={logoHotel} 
              alt="Hôtel Inn Design Paris" 
              loading="lazy"
              className="h-8 w-auto mb-2"
            />
            <p className="text-muted-foreground text-xs leading-relaxed">
              {t('footer.description')}
            </p>
          </div>

          {/* Navigation + Contact in row */}
          <div className="flex flex-wrap gap-x-12 gap-y-4">
            {/* Navigation */}
            <div>
              <h4 className="font-display text-xs uppercase tracking-wider text-foreground mb-2">{t('footer.navigation')}</h4>
              <ul className="flex flex-wrap gap-x-4 gap-y-1 text-xs">
                <li><Link to="/" className="text-muted-foreground hover:text-primary transition-colors">{t('nav.home')}</Link></li>
                <li><Link to="/nos-chambres" className="text-muted-foreground hover:text-primary transition-colors">{t('nav.rooms')}</Link></li>
                <li><Link to="/petit-dejeuner" className="text-muted-foreground hover:text-primary transition-colors">{t('nav.breakfast')}</Link></li>
                <li><Link to="/seminaires" className="text-muted-foreground hover:text-primary transition-colors">{t('nav.seminars')}</Link></li>
                <li><Link to="/localisation" className="text-muted-foreground hover:text-primary transition-colors">{t('nav.location')}</Link></li>
                <li><Link to="/evenements" className="text-muted-foreground hover:text-primary transition-colors">{t('nav.events')}</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-display text-xs uppercase tracking-wider text-foreground mb-2">{t('footer.contact')}</h4>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3 h-3 text-primary" />
                  178 Bd Vincent Auriol, 75013 Paris
                </span>
                <a href="tel:+33144240101" className="flex items-center gap-1.5 hover:text-primary transition-colors">
                  <Phone className="w-3 h-3 text-primary" />
                  +33 (0)1 44 24 01 01
                </a>
                <a href="mailto:hid.paris13@gmail.com" className="flex items-center gap-1.5 hover:text-primary transition-colors">
                  <Mail className="w-3 h-3 text-primary" />
                  hid.paris13@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border/50 mt-5 pt-3 flex flex-col sm:flex-row justify-between items-center gap-2 pr-0 sm:pr-40">
          <p className="text-muted-foreground text-[10px] text-center sm:text-left">
            © 2025 Hôtel Inn Design Paris. {t('footer.rights')}
          </p>
          <div className="flex gap-4 text-[10px]">
            <Link to="/mentions-legales" className="text-muted-foreground hover:text-primary transition-colors">
              {t('footer.legal')}
            </Link>
            <Link to="/mentions-legales" className="text-muted-foreground hover:text-primary transition-colors">
              {t('footer.privacy')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';
