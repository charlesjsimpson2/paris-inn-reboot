import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MapPin, Plane, Building2, Landmark, Train, Car, Clock, Phone } from "lucide-react";
import proximiteMetro from "@/assets/proximite-metro-hotel-inn.jpg";

const destinations = [
  { icon: Plane, time: "1h", label: "Aéroport Paris-CDG" },
  { icon: Plane, time: "45 min", label: "Aéroport Paris-Orly" },
  { icon: Building2, time: "26 min", label: "Tour Eiffel" },
  { icon: Landmark, time: "8 min", label: "Musée du Louvre" },
  { icon: MapPin, time: "30 min", label: "Champs-Élysées" },
  { icon: Landmark, time: "20 min", label: "Le Panthéon" },
];

const transports = [
  { type: "Métro", lines: "Lignes 5, 6 & 7", stop: "Place d'Italie", time: "2 min", color: "bg-burgundy" },
  { type: "Bus", lines: "Lignes 27, 47, 83", stop: "Vincent Auriol", time: "1 min", color: "bg-primary" },
  { type: "Tramway", lines: "T3a", stop: "Porte d'Italie", time: "10 min", color: "bg-muted-foreground" },
];

const Localisation = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Map Section - Full width with overlay */}
      <section className="pt-20 relative">
        {/* Full width map */}
        <div className="h-[60vh] min-h-[500px] w-full relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2626.8876744366814!2d2.3586!3d48.8282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6721c7c1b1c1b%3A0x123456789abcdef!2s178%20Boulevard%20Vincent%20Auriol%2C%2075013%20Paris!5e0!3m2!1sfr!2sfr!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localisation Hôtel Inn Design Paris"
          />
          
          {/* Gradient overlay at bottom */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-charcoal to-transparent" />
        </div>

        {/* Floating Card - overlapping map */}
        <div className="container mx-auto px-4 relative -mt-28 z-10">
          <div className="bg-charcoal rounded-3xl shadow-2xl border border-border/50 p-8 md:p-12 max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-10">
              <span className="text-burgundy font-medium text-base uppercase tracking-[0.3em] mb-4 block">
                Nous trouver
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
                Notre emplacement
              </h1>
            </div>

            {/* Address */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-10 p-6 bg-background/30 rounded-2xl">
              <div className="w-16 h-16 rounded-2xl bg-burgundy flex items-center justify-center shrink-0 shadow-lg">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <div className="text-center md:text-left">
                <h2 className="font-display text-2xl md:text-3xl text-foreground mb-2">
                  Hôtel Inn Design Paris
                </h2>
                <p className="text-muted-foreground text-lg md:text-xl">
                  178 boulevard Vincent Auriol, 75013 Paris
                </p>
              </div>
              <a 
                href="https://maps.google.com/?q=178+Boulevard+Vincent+Auriol,+75013+Paris" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-burgundy text-white rounded-xl hover:bg-burgundy/90 transition-colors font-medium text-base group shrink-0"
              >
                Itinéraire
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>

            {/* Transport Grid */}
            <div className="grid md:grid-cols-3 gap-6">
              {transports.map((item, index) => (
                <div
                  key={index}
                  className="text-center p-6 rounded-2xl bg-background/20 border border-border/30 hover:border-burgundy/40 transition-all duration-300 hover:bg-background/30"
                >
                  <div className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                    <span className="text-white font-bold text-xl">{item.time}</span>
                  </div>
                  <p className="text-foreground font-display text-xl mb-1">{item.type}</p>
                  <p className="text-muted-foreground text-base">{item.lines}</p>
                  <p className="text-muted-foreground/70 text-sm mt-1">{item.stop}</p>
                </div>
              ))}
            </div>

            {/* Metro Lines */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8 pt-8 border-t border-border/30">
              <div className="flex items-center gap-3">
                <span className="w-11 h-11 rounded-full bg-[#BB4D98] flex items-center justify-center text-white font-bold text-lg shadow-lg hover:scale-110 transition-transform cursor-default">5</span>
                <span className="w-11 h-11 rounded-full bg-[#7EC083] flex items-center justify-center text-white font-bold text-lg shadow-lg hover:scale-110 transition-transform cursor-default">6</span>
                <span className="w-11 h-11 rounded-full bg-[#F3A4BA] flex items-center justify-center text-charcoal font-bold text-lg shadow-lg hover:scale-110 transition-transform cursor-default">7</span>
              </div>
              <div className="flex items-center gap-3">
                <Train className="w-6 h-6 text-burgundy" />
                <span className="text-foreground text-lg">Métro Place d'Italie <span className="text-muted-foreground">(sortie 3)</span></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spacer */}
      <div className="h-20 bg-charcoal" />

      {/* Au cœur de Paris - Image + Text */}
      <section className="py-24 bg-charcoal">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="relative group order-2 lg:order-1">
              <div className="absolute -inset-4 bg-burgundy/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={proximiteMetro}
                  alt="Hôtel Inn Design près du métro Place d'Italie"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <span className="text-burgundy font-medium text-sm uppercase tracking-[0.3em] mb-4 block">
                Idéalement situé
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
                Un hôtel au cœur de Paris
              </h2>
              <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
                À deux pas du métro Place d'Italie, profitez d'un accès rapide à tous les monuments et attractions de la capitale.
              </p>

              {/* Destinations Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {destinations.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 rounded-xl bg-background/50 border border-border/50 hover:border-burgundy/30 hover:bg-background transition-all duration-300 group"
                  >
                    <div className="w-11 h-11 rounded-xl bg-burgundy/10 flex items-center justify-center shrink-0 group-hover:bg-burgundy/20 transition-colors">
                      <item.icon className="w-5 h-5 text-burgundy" />
                    </div>
                    <div>
                      <p className="font-display text-xl text-burgundy">{item.time}</p>
                      <p className="text-muted-foreground text-xs">{item.label}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Info boxes */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-5 rounded-xl bg-background/50 border border-border/50 hover:border-burgundy/30 transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-burgundy/10 flex items-center justify-center">
                      <Car className="w-4 h-4 text-burgundy" />
                    </div>
                    <span className="font-medium text-foreground">Parking</span>
                  </div>
                  <p className="text-muted-foreground text-sm">Parking privé sécurisé (15€/jour)</p>
                </div>
                <div className="p-5 rounded-xl bg-background/50 border border-border/50 hover:border-burgundy/30 transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-burgundy/10 flex items-center justify-center">
                      <Clock className="w-4 h-4 text-burgundy" />
                    </div>
                    <span className="font-medium text-foreground">Réception</span>
                  </div>
                  <p className="text-muted-foreground text-sm">Ouverte 24h/24</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-burgundy to-burgundy/90">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-center md:text-left">
            <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <div>
              <p className="text-white/70 mb-2 text-lg">Besoin d'indications ?</p>
              <a href="tel:+33144240101" className="text-white font-display text-3xl hover:text-white/90 transition-colors">
                +33 (0)1 44 24 01 01
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Localisation;