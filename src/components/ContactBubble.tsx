import { useState } from "react";
import { MessageCircle, X, Phone, Mail, MapPin } from "lucide-react";

export const ContactBubble = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Contact Panel */}
      <div
        className={`absolute bottom-16 right-0 w-72 bg-background rounded-xl shadow-2xl border border-border overflow-hidden transition-all duration-300 ${
          isOpen ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-4 scale-95 pointer-events-none"
        }`}
      >
        <div className="bg-burgundy p-4">
          <h3 className="text-white font-display text-lg">Contactez-nous</h3>
          <p className="text-white/80 text-sm">Nous sommes là pour vous aider</p>
        </div>
        
        <div className="p-4 space-y-4">
          <a
            href="tel:+33144240101"
            className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors group"
          >
            <div className="w-10 h-10 rounded-full bg-burgundy/15 flex items-center justify-center">
              <Phone className="w-5 h-5 text-burgundy" />
            </div>
            <div>
              <span className="text-xs text-muted-foreground">Téléphone</span>
              <p className="text-sm font-medium group-hover:text-burgundy transition-colors">+33 (0)1 44 24 01 01</p>
            </div>
          </a>
          
          <a
            href="mailto:hid.paris13@gmail.com"
            className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors group"
          >
            <div className="w-10 h-10 rounded-full bg-burgundy/15 flex items-center justify-center">
              <Mail className="w-5 h-5 text-burgundy" />
            </div>
            <div>
              <span className="text-xs text-muted-foreground">Email</span>
              <p className="text-sm font-medium group-hover:text-burgundy transition-colors">hid.paris13@gmail.com</p>
            </div>
          </a>
          
          <a
            href="https://maps.google.com/?q=211+Bd+Vincent+Auriol,+75013+Paris"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors group"
          >
            <div className="w-10 h-10 rounded-full bg-burgundy/15 flex items-center justify-center">
              <MapPin className="w-5 h-5 text-burgundy" />
            </div>
            <div>
              <span className="text-xs text-muted-foreground">Adresse</span>
              <p className="text-sm font-medium group-hover:text-burgundy transition-colors">211 Bd Vincent Auriol, Paris 13</p>
            </div>
          </a>
        </div>
      </div>

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full bg-burgundy text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center hover:scale-110 ${
          isOpen ? "rotate-0" : "animate-pulse"
        }`}
        aria-label="Contactez-nous"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}
      </button>
    </div>
  );
};
