import { memo } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import logoHotel from "@/assets/logo-hotel-inn-paris.png";

export const Footer = memo(() => {
  const { t } = useLanguage();

  return (
    <footer className="bg-charcoal border-t border-border">
      <div className="container mx-auto px-3 xs:px-4 py-6 xs:py-8 sm:py-12">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 xs:gap-6 sm:gap-8 lg:gap-12">
          {/* Logo & Description */}
          <div className="col-span-2 md:col-span-1">
            <img 
              src={logoHotel} 
              alt="Hôtel Inn Design Paris" 
              loading="lazy"
              className="h-8 xs:h-10 sm:h-12 w-auto mb-2 xs:mb-3 sm:mb-4"
            />
            <p className="text-muted-foreground text-[11px] xs:text-xs sm:text-sm leading-relaxed">
              {t('footer.description')}
            </p>
          </div>

          {/* Navigation Col 1 */}
          <div>
            <h4 className="font-display text-xs xs:text-sm uppercase tracking-wider text-foreground mb-2 xs:mb-3 sm:mb-4">{t('footer.navigation')}</h4>
            <ul className="space-y-1.5 xs:space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors text-xs xs:text-sm py-1 inline-block">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link to="/nos-chambres" className="text-muted-foreground hover:text-primary transition-colors text-xs xs:text-sm py-1 inline-block">
                  {t('nav.rooms')}
                </Link>
              </li>
              <li>
                <Link to="/petit-dejeuner" className="text-muted-foreground hover:text-primary transition-colors text-xs xs:text-sm py-1 inline-block">
                  {t('nav.breakfast')}
                </Link>
              </li>
              <li>
                <Link to="/seminaires" className="text-muted-foreground hover:text-primary transition-colors text-xs xs:text-sm py-1 inline-block">
                  {t('nav.seminars')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Navigation Col 2 */}
          <div>
            <h4 className="font-display text-xs xs:text-sm uppercase tracking-wider text-foreground mb-2 xs:mb-3 sm:mb-4 opacity-0">Liens</h4>
            <ul className="space-y-1.5 xs:space-y-2">
              <li>
                <Link to="/localisation" className="text-muted-foreground hover:text-primary transition-colors text-xs xs:text-sm py-1 inline-block">
                  {t('nav.location')}
                </Link>
              </li>
              <li>
                <Link to="/evenements" className="text-muted-foreground hover:text-primary transition-colors text-xs xs:text-sm py-1 inline-block">
                  {t('nav.events')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors text-xs xs:text-sm py-1 inline-block">
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-xs xs:text-sm uppercase tracking-wider text-foreground mb-2 xs:mb-3 sm:mb-4">{t('footer.contact')}</h4>
            <ul className="space-y-2 xs:space-y-3 text-xs xs:text-sm">
              <li className="flex items-start gap-1.5 xs:gap-2 text-muted-foreground">
                <MapPin className="w-3.5 h-3.5 xs:w-4 xs:h-4 text-primary shrink-0 mt-0.5" />
                <span>178 Bd Vincent Auriol, 75013 Paris</span>
              </li>
              <li>
                <a
                  href="tel:+33144240101"
                  className="flex items-center gap-1.5 xs:gap-2 text-muted-foreground hover:text-primary transition-colors py-1"
                >
                  <Phone className="w-3.5 h-3.5 xs:w-4 xs:h-4 text-primary" />
                  +33 (0)1 44 24 01 01
                </a>
              </li>
              <li>
                <a
                  href="mailto:hid.paris13@gmail.com"
                  className="flex items-center gap-1.5 xs:gap-2 text-muted-foreground hover:text-primary transition-colors py-1"
                >
                  <Mail className="w-3.5 h-3.5 xs:w-4 xs:h-4 text-primary" />
                  hid.paris13@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border/50 mt-6 xs:mt-8 sm:mt-10 pt-3 xs:pt-4 sm:pt-6 flex flex-col sm:flex-row justify-between items-center gap-2 xs:gap-3">
          <p className="text-muted-foreground text-[9px] xs:text-[10px] sm:text-xs text-center sm:text-left">
            © 2025 Hôtel Inn Design Paris. {t('footer.rights')}
          </p>
          <div className="flex gap-3 xs:gap-4 text-[9px] xs:text-[10px] sm:text-xs">
            <Link to="/mentions-legales" className="text-muted-foreground hover:text-primary transition-colors py-1.5 xs:py-2">
              {t('footer.legal')}
            </Link>
            <Link to="/mentions-legales" className="text-muted-foreground hover:text-primary transition-colors py-1.5 xs:py-2">
              {t('footer.privacy')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';
