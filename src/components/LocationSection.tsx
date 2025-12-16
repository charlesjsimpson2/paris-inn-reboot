import { MapPin } from "lucide-react";

export const LocationSection = () => {
  return (
    <section id="localisation" className="py-24 bg-secondary/20">
      {/* Decorative separator */}
      <div className="container mx-auto px-4 mb-12">
        <div className="flex items-center justify-center gap-4">
          <div className="h-px w-16 bg-primary/30" />
          <div className="w-2 h-2 rotate-45 border border-primary/30" />
          <div className="h-px w-16 bg-primary/30" />
        </div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Map */}
          <div className="aspect-[4/3] overflow-hidden bg-charcoal-light shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2626.8876843547287!2d2.3586!3d48.8282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6721c7c1b1c1b%3A0x123456789abcdef!2s178%20Boulevard%20Vincent%20Auriol%2C%2075013%20Paris!5e0!3m2!1sfr!2sfr!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>

          {/* Info */}
          <div className="bg-background p-8 border-l-2 border-primary/30">
            <div className="mb-6">
              <p className="text-primary font-body uppercase tracking-[0.2em] text-sm mb-4">
                Comment nous trouver
              </p>
              <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
                Localisation
              </h2>
            </div>
            <div className="flex items-start gap-4 mb-8">
              <div className="w-12 h-12 bg-primary/10 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-display text-xl text-foreground mb-1">
                  178 boulevard Vincent Auriol
                </p>
                <p className="text-muted-foreground">75013 Paris, France</p>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <h4 className="font-display text-lg text-foreground">Accès</h4>
              <div className="grid gap-3">
                {[
                  { transport: "Métro", line: "Ligne 6 & 7", stop: "Place d'Italie", time: "2 min" },
                  { transport: "Bus", line: "Lignes 27, 47, 83", stop: "Vincent Auriol", time: "1 min" },
                  { transport: "Tramway", line: "T3a", stop: "Porte d'Italie", time: "10 min" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-card border border-border"
                  >
                    <div>
                      <span className="font-medium text-foreground">{item.transport}</span>
                      <span className="text-muted-foreground mx-2">•</span>
                      <span className="text-muted-foreground text-sm">{item.line}</span>
                    </div>
                    <span className="text-primary font-medium">{item.time}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-muted-foreground text-sm">
              Parking privé sécurisé disponible sur réservation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
