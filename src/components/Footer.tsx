import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-charcoal border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <div className="flex flex-col mb-6">
              <span className="font-display text-2xl font-semibold text-foreground tracking-wide">
                HÔTEL
              </span>
              <span className="font-display text-xl italic text-primary">
                Inn Design
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Un hôtel 3 étoiles au cœur du 13ème arrondissement de Paris, 
              à deux pas de la Place d'Italie.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg text-foreground mb-6">Navigation</h4>
            <ul className="space-y-3">
              {["Accueil", "Nos Chambres", "Petit Déjeuner", "Séminaires", "Localisation", "Actualités"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      to={item === "Actualités" ? "/actualites" : "#"}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg text-foreground mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-muted-foreground text-sm">
                  178 boulevard Vincent Auriol<br />
                  75013 Paris, France
                </span>
              </li>
              <li>
                <a
                  href="tel:+33144240101"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  <Phone className="w-5 h-5 text-primary" />
                  +33 (0)1 44 24 01 01
                </a>
              </li>
              <li>
                <a
                  href="mailto:hid.paris13@gmail.com"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  <Mail className="w-5 h-5 text-primary" />
                  hid.paris13@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-display text-lg text-foreground mb-6">Horaires</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex justify-between">
                <span>Réception</span>
                <span className="text-foreground">24h/24</span>
              </li>
              <li className="flex justify-between">
                <span>Petit Déjeuner</span>
                <span className="text-foreground">7h - 10h</span>
              </li>
              <li className="flex justify-between">
                <span>Bar</span>
                <span className="text-foreground">17h - 23h</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2024 Hôtel Inn Design Paris. Tous droits réservés.
          </p>
          <div className="flex gap-6 text-sm">
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
