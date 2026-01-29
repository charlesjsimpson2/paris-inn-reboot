import { memo } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import logoHotel from "@/assets/logo-hotel-inn-paris.png";

export const Footer = memo(() => {
  const { t } = useLanguage();

  return (
    <footer className="bg-charcoal border-t border-border">
      <div className="container mx-auto px-4 py-5">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {/* Logo & Description */}
          <div className="col-span-2 lg:col-span-1">
            <img 
              src={logoHotel} 
              alt="Hôtel Inn Design Paris" 
              loading="lazy"
              className="h-8 w-auto mb-2"
            />
            <p className="text-muted-foreground text-sm leading-relaxed">
              {t('footer.description')}
            </p>
            <Link to="/mentions-legales" className="text-muted-foreground hover:text-primary transition-colors text-sm mt-1 inline-block">{t('footer.legal')}</Link>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display text-sm uppercase tracking-wider text-foreground mb-2">{t('footer.navigation')}</h4>
            <ul className="space-y-0.5 text-sm">
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
            <h4 className="font-display text-sm uppercase tracking-wider text-foreground mb-2">{t('footer.contact')}</h4>
            <ul className="space-y-1 text-sm">
              <li className="flex items-start gap-1.5 text-muted-foreground">
                <MapPin className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                <span>178 Bd Vincent Auriol, 75013 Paris</span>
              </li>
              <li>
                <a href="tel:+33144240101" className="flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors">
                  <Phone className="w-3.5 h-3.5 text-primary" />
                  +33 (0)1 44 24 01 01
                </a>
              </li>
              <li>
                <a href="mailto:hid.paris13@gmail.com" className="flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors">
                  <Mail className="w-3.5 h-3.5 text-primary" />
                  hid.paris13@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border/50 mt-4 pt-3 flex justify-center">
          <p className="text-muted-foreground text-xs">
            © 2025 Hôtel Inn Design Paris. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';
