import { Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import logoHotel from "@/assets/logo-hotel-inn-paris.png";

export const Footer = () => {
  return (
    <footer className="bg-charcoal border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo & Description */}
          <div>
            <img 
              src={logoHotel} 
              alt="Hôtel Inn Design Paris" 
              className="h-12 w-auto mb-4"
            />
            <p className="text-muted-foreground text-sm leading-relaxed">
              Hôtel 3 étoiles au cœur du 13ème arrondissement, à deux pas de la Place d'Italie.
            </p>
          </div>

          {/* Navigation Col 1 */}
          <div>
            <h4 className="font-display text-sm uppercase tracking-wider text-foreground mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/nos-chambres" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Nos Chambres
                </Link>
              </li>
              <li>
                <Link to="/petit-dejeuner" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Petit Déjeuner
                </Link>
              </li>
              <li>
                <Link to="/seminaires" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Séminaires
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
                  Localisation
                </Link>
              </li>
              <li>
                <Link to="/actualites" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Actualités
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-sm uppercase tracking-wider text-foreground mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>211 Bd Vincent Auriol, 75013 Paris</span>
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
        <div className="border-t border-border/50 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-muted-foreground text-xs">
            © 2024 Hôtel Inn Design Paris. Tous droits réservés.
          </p>
          <div className="flex gap-4 text-xs">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Mentions légales
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Politique de confidentialité
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
