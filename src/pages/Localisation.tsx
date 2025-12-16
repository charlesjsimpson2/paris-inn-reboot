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

      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[350px]">
        <img
          src={proximiteMetro}
          alt="Localisation Hôtel Inn Design Paris"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
          <div className="container mx-auto">
            <span className="inline-block bg-burgundy text-white font-body uppercase tracking-[0.15em] text-sm px-4 py-2 rounded-full mb-4">
              Accès & Transport
            </span>
            <h1 className="font-display text-3xl md:text-5xl lg:text-6xl text-white">
              Localisation
            </h1>
          </div>
        </div>
      </section>

      {/* Un hôtel au cœur de Paris */}
      <section className="py-20 bg-charcoal">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-burgundy font-medium text-sm uppercase tracking-[0.2em] mb-4 block">
              Idéalement situé
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
              Un hôtel au cœur de Paris
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              À deux pas du métro Place d'Italie, profitez d'un accès rapide à tous les monuments et attractions de la capitale.
            </p>
          </div>

          {/* Destinations Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {destinations.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-5 rounded-xl bg-background border border-border hover:border-burgundy/30 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-full bg-burgundy/10 flex items-center justify-center shrink-0 group-hover:bg-burgundy/20 transition-colors">
                  <item.icon className="w-6 h-6 text-burgundy" />
                </div>
                <div>
                  <p className="font-display text-2xl text-burgundy">{item.time}</p>
                  <p className="text-muted-foreground text-sm">{item.label}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Metro Lines */}
          <div className="flex items-center justify-center gap-4 mt-12 p-6 rounded-xl bg-background border border-border max-w-md mx-auto">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-[#BB4D98] flex items-center justify-center text-white font-bold text-sm">5</span>
              <span className="w-8 h-8 rounded-full bg-[#7EC083] flex items-center justify-center text-white font-bold text-sm">6</span>
              <span className="w-8 h-8 rounded-full bg-[#F3A4BA] flex items-center justify-center text-foreground font-bold text-sm">7</span>
            </div>
            <div className="flex items-center gap-3">
              <Train className="w-6 h-6 text-burgundy" />
              <div>
                <p className="font-display text-xl text-burgundy">2 min à pied</p>
                <p className="text-muted-foreground text-sm">Métro Place d'Italie (sortie 3)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Carte & Informations */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Map */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2626.8876744366814!2d2.3547!3d48.8288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6719c8c8c8c8c%3A0x0!2s211%20Boulevard%20Vincent%20Auriol%2C%2075013%20Paris!5e0!3m2!1sfr!2sfr!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localisation Hôtel Inn Design Paris"
                />
              </div>
              {/* Floating address card */}
              <div className="absolute -bottom-6 left-6 right-6 bg-background rounded-xl shadow-xl p-6 border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-burgundy flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl text-foreground mb-1">
                      Hôtel Inn Design Paris
                    </h3>
                    <p className="text-muted-foreground">
                      211 boulevard Vincent Auriol<br />
                      75013 Paris, France
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Transport Info */}
            <div className="lg:pt-8">
              <span className="text-burgundy font-medium text-sm uppercase tracking-[0.2em] mb-4 block">
                Comment venir
              </span>
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-8">
                Accès & Transports
              </h2>

              <div className="space-y-4 mb-10">
                {transports.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-5 rounded-xl bg-charcoal border border-border hover:border-burgundy/30 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-2 h-12 rounded-full ${item.color}`} />
                      <div>
                        <p className="font-display text-lg text-foreground">{item.type}</p>
                        <p className="text-muted-foreground text-sm">{item.lines} • {item.stop}</p>
                      </div>
                    </div>
                    <span className="font-display text-2xl text-burgundy">{item.time}</span>
                  </div>
                ))}
              </div>

              {/* Additional Info */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-xl bg-charcoal border border-border">
                  <div className="flex items-center gap-3 mb-3">
                    <Car className="w-5 h-5 text-burgundy" />
                    <h4 className="font-display text-lg text-foreground">Parking</h4>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Parking privé sécurisé disponible sur réservation (15€/jour)
                  </p>
                </div>
                <div className="p-5 rounded-xl bg-charcoal border border-border">
                  <div className="flex items-center gap-3 mb-3">
                    <Clock className="w-5 h-5 text-burgundy" />
                    <h4 className="font-display text-lg text-foreground">Réception</h4>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Ouverte 24h/24 pour votre arrivée à tout moment
                  </p>
                </div>
              </div>

              {/* Contact CTA */}
              <div className="mt-8 p-6 rounded-xl bg-burgundy/10 border border-burgundy/20">
                <div className="flex items-center gap-4">
                  <Phone className="w-8 h-8 text-burgundy" />
                  <div>
                    <p className="text-foreground font-medium">Besoin d'indications ?</p>
                    <a href="tel:+33144240101" className="text-burgundy font-display text-xl hover:underline">
                      +33 (0)1 44 24 01 01
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Localisation;