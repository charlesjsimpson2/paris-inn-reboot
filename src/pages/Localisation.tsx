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

      {/* Map Section - Full width at top */}
      <section className="pt-24">
        <div className="relative h-[50vh] min-h-[400px]">
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
          
          {/* Floating address card */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-background rounded-xl shadow-2xl p-6 border border-border max-w-md w-[90%]">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-burgundy flex items-center justify-center shrink-0">
                <MapPin className="w-7 h-7 text-white" />
              </div>
              <div>
                <h2 className="font-display text-xl text-foreground mb-1">
                  Hôtel Inn Design Paris
                </h2>
                <p className="text-muted-foreground">
                  178 boulevard Vincent Auriol, 75013 Paris
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transports Section */}
      <section className="py-16 bg-charcoal">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-burgundy font-medium text-sm uppercase tracking-[0.2em] mb-3 block">
              Comment venir
            </span>
            <h2 className="font-display text-3xl md:text-4xl text-foreground">
              Accès & Transports
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">
            {transports.map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-background border border-border hover:border-burgundy/30 transition-colors text-center"
              >
                <div className={`w-3 h-3 rounded-full ${item.color} mx-auto mb-4`} />
                <p className="font-display text-3xl text-burgundy mb-2">{item.time}</p>
                <p className="font-display text-lg text-foreground mb-1">{item.type}</p>
                <p className="text-muted-foreground text-sm">{item.lines}</p>
                <p className="text-muted-foreground text-xs mt-1">{item.stop}</p>
              </div>
            ))}
          </div>

          {/* Metro Lines */}
          <div className="flex items-center justify-center gap-4 p-5 rounded-xl bg-background border border-border max-w-sm mx-auto">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-[#BB4D98] flex items-center justify-center text-white font-bold text-sm">5</span>
              <span className="w-8 h-8 rounded-full bg-[#7EC083] flex items-center justify-center text-white font-bold text-sm">6</span>
              <span className="w-8 h-8 rounded-full bg-[#F3A4BA] flex items-center justify-center text-foreground font-bold text-sm">7</span>
            </div>
            <div className="flex items-center gap-2">
              <Train className="w-5 h-5 text-burgundy" />
              <span className="text-muted-foreground text-sm">Place d'Italie (sortie 3)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Au cœur de Paris - Image + Text */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src={proximiteMetro}
                alt="Hôtel Inn Design près du métro Place d'Italie"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Content */}
            <div>
              <span className="text-burgundy font-medium text-sm uppercase tracking-[0.2em] mb-4 block">
                Idéalement situé
              </span>
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
                Un hôtel au cœur de Paris
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                À deux pas du métro Place d'Italie, profitez d'un accès rapide à tous les monuments et attractions de la capitale.
              </p>

              {/* Destinations Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {destinations.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 rounded-lg bg-charcoal border border-border"
                  >
                    <div className="w-10 h-10 rounded-full bg-burgundy/10 flex items-center justify-center shrink-0">
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
                <div className="p-4 rounded-lg bg-charcoal border border-border">
                  <div className="flex items-center gap-2 mb-2">
                    <Car className="w-4 h-4 text-burgundy" />
                    <span className="font-medium text-foreground text-sm">Parking</span>
                  </div>
                  <p className="text-muted-foreground text-xs">Parking privé sécurisé (15€/jour)</p>
                </div>
                <div className="p-4 rounded-lg bg-charcoal border border-border">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-4 h-4 text-burgundy" />
                    <span className="font-medium text-foreground text-sm">Réception</span>
                  </div>
                  <p className="text-muted-foreground text-xs">Ouverte 24h/24</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 bg-burgundy">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left">
            <Phone className="w-10 h-10 text-white" />
            <div>
              <p className="text-white/80 mb-1">Besoin d'indications ?</p>
              <a href="tel:+33144240101" className="text-white font-display text-2xl hover:underline">
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