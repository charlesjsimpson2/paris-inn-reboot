import { memo } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import logoHotel from "@/assets/logo-hotel-inn-paris.png";

export const Footer = memo(() => {
  const { t } = useLanguage();

  return (
    <footer className="bg-charcoal border-t border-border">
      <div className="container mx-auto px-3 sm:px-4 py-8 sm:py-12">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
          {/* Logo & Description */}
          <div className="col-span-2 md:col-span-1">
            <img 
              src={logoHotel} 
              alt="Hôtel Inn Design Paris" 
              loading="lazy"
              className="h-10 sm:h-12 w-auto mb-3 sm:mb-4"
            />
            <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
              {t('footer.description')}
            </p>
          </div>

          {/* Navigation Col 1 */}
          <div>
            <h4 className="font-display text-sm uppercase tracking-wider text-foreground mb-4">{t('footer.navigation')}</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link to="/nos-chambres" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  {t('nav.rooms')}
                </Link>
              </li>
              <li>
                <Link to="/petit-dejeuner" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  {t('nav.breakfast')}
                </Link>
              </li>
              <li>
                <Link to="/seminaires" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  {t('nav.seminars')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Navigation Col 2 */}
          <div>
            <h4 className="font-display text-sm uppercase tracking-wider text-foreground mb-4 opacity-0">Liens</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/localisation" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  {t('nav.location')}
                </Link>
              </li>
              <li>
                <Link to="/actualites" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  {t('nav.events')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-sm uppercase tracking-wider text-foreground mb-4">{t('footer.contact')}</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>178 Bd Vincent Auriol, 75013 Paris</span>
              </li>
              <li>
                <a
                  href="tel:+33144240101"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone className="w-4 h-4 text-primary" />
                  +33 (0)1 44 24 01 01
                </a>
              </li>
              <li>
                <a
                  href="mailto:hid.paris13@gmail.com"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="w-4 h-4 text-primary" />
                  hid.paris13@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border/50 mt-8 sm:mt-10 pt-4 sm:pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-muted-foreground text-[10px] sm:text-xs text-center sm:text-left">
            © 2024 Hôtel Inn Design Paris. {t('footer.rights')}
          </p>
          <div className="flex gap-4 text-[10px] sm:text-xs">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors py-2">
              {t('footer.legal')}
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors py-2">
              {t('footer.privacy')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';
