import { memo } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import logoHotel from "@/assets/logo-hotel-inn-paris.png";

export const Footer = memo(() => {
  const { t } = useLanguage();

  return (
    <footer className="bg-charcoal border-t border-border">
      <div className="container mx-auto px-3 xs:px-4 py-4 xs:py-6 sm:py-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 xs:gap-5 sm:gap-6">
          {/* Logo & Description */}
          <div className="col-span-2 lg:col-span-1">
            <img 
              src={logoHotel} 
              alt="Hôtel Inn Design Paris" 
              loading="lazy"
              className="h-8 xs:h-9 sm:h-10 w-auto mb-2 xs:mb-3"
            />
            <p className="text-muted-foreground text-[11px] xs:text-xs sm:text-sm leading-relaxed">
              {t('footer.description')}
            </p>
          </div>

          {/* Navigation - Single column on mobile */}
          <div>
            <h4 className="font-display text-xs uppercase tracking-wider text-foreground mb-2 xs:mb-3">{t('footer.navigation')}</h4>
            <ul className="space-y-0.5 xs:space-y-1">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors text-xs xs:text-sm leading-tight inline-block">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link to="/nos-chambres" className="text-muted-foreground hover:text-primary transition-colors text-xs xs:text-sm leading-tight inline-block">
                  {t('nav.rooms')}
                </Link>
              </li>
              <li>
                <Link to="/petit-dejeuner" className="text-muted-foreground hover:text-primary transition-colors text-xs xs:text-sm leading-tight inline-block">
                  {t('nav.breakfast')}
                </Link>
              </li>
              <li>
                <Link to="/seminaires" className="text-muted-foreground hover:text-primary transition-colors text-xs xs:text-sm leading-tight inline-block">
                  {t('nav.seminars')}
                </Link>
              </li>
              <li>
                <Link to="/localisation" className="text-muted-foreground hover:text-primary transition-colors text-xs xs:text-sm leading-tight inline-block">
                  {t('nav.location')}
                </Link>
              </li>
              <li>
                <Link to="/evenements" className="text-muted-foreground hover:text-primary transition-colors text-xs xs:text-sm leading-tight inline-block">
                  {t('nav.events')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-xs uppercase tracking-wider text-foreground mb-2 xs:mb-3">{t('footer.contact')}</h4>
            <ul className="space-y-1.5 xs:space-y-2 text-xs xs:text-sm">
              <li className="flex items-start gap-1.5 text-muted-foreground">
                <MapPin className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                <span>178 Bd Vincent Auriol, 75013 Paris</span>
              </li>
              <li>
                <a
                  href="tel:+33144240101"
                  className="flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-primary" />
                  +33 (0)1 44 24 01 01
                </a>
              </li>
              <li>
                <a
                  href="mailto:hid.paris13@gmail.com"
                  className="flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-primary" />
                  hid.paris13@gmail.com
                </a>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors mt-1 inline-block">
                  → {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border/50 mt-4 xs:mt-5 sm:mt-6 pt-3 xs:pt-4 flex flex-col sm:flex-row justify-between items-center gap-2 pr-0 sm:pr-40">
          <p className="text-muted-foreground text-[10px] xs:text-xs text-center sm:text-left">
            © 2025 Hôtel Inn Design Paris. {t('footer.rights')}
          </p>
          <div className="flex flex-wrap justify-center sm:justify-end gap-x-4 gap-y-1 text-[10px] xs:text-xs">
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
