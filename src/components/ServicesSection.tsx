import { Clock, Car, Briefcase, Plane, Utensils, MapPin, Wifi, Video, Laptop } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import receptionHotel from "@/assets/reception-hotel.jpg";
import restaurantPlat from "@/assets/restaurant-plat.jpg";
import tourEiffel from "@/assets/tour-eiffel.jpg";
import wifiCoworking from "@/assets/wifi-coworking-hotel.webp";

export const ServicesSection = () => {
  const { t } = useLanguage();

  const receptionItems = [
    { icon: Clock, text: t('services.reception.247') },
    { icon: Briefcase, text: t('services.reception.checkin') },
    { icon: Car, text: t('services.reception.parking') },
  ];

  const infoItems = [
    { icon: Briefcase, text: t('services.reception.luggage') },
    { icon: Plane, text: t('services.reception.taxi') },
  ];

  const wifiFeatures = [
    { icon: Video, text: t('services.wifi.video') },
    { icon: Laptop, text: t('services.wifi.remote') },
  ];

  return (
    <section id="services" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-primary font-body uppercase tracking-[0.2em] text-sm mb-3">
            {t('services.badge')}
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground">
            {t('services.title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {/* Accueil à l'hôtel + Infos pratiques avec image */}
          <div className="bg-secondary/30 border border-border/30 overflow-hidden sm:col-span-2 md:col-span-1">
            <img 
              src={receptionHotel} 
              alt="Réception de l'hôtel" 
              loading="lazy"
              decoding="async"
              className="w-full h-40 sm:h-52 object-cover"
            />
            <div className="p-4 sm:p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/10">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display text-lg sm:text-xl text-foreground">{t('services.reception.title')}</h3>
              </div>
              
              {/* Accueil items */}
              <div className="space-y-2 mb-4">
                {receptionItems.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <item.icon className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
              
              <div className="border-t border-border/30 my-4"></div>
              
              {/* Infos pratiques en 2 colonnes */}
              <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                {infoItems.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <item.icon className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground text-xs">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Restaurant à proximité */}
          <div className="bg-secondary/30 border border-border/30 overflow-hidden">
            <img 
              src={restaurantPlat} 
              alt="Plat gastronomique" 
              loading="lazy"
              decoding="async"
              className="w-full h-40 sm:h-52 object-cover"
            />
            <div className="p-4 sm:p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/10">
                  <Utensils className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display text-lg sm:text-xl text-foreground">{t('services.restaurant.title')}</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed text-base">
                {t('services.restaurant.desc')}
              </p>
            </div>
          </div>

          {/* WiFi Très Haut Débit */}
          <div className="bg-primary/10 border border-primary/30 overflow-hidden">
            <img 
              src={wifiCoworking} 
              alt="WiFi très haut débit - Télétravail à l'hôtel" 
              loading="lazy"
              decoding="async"
              className="w-full h-40 sm:h-52 object-cover"
            />
            <div className="p-4 sm:p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/20">
                  <Wifi className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display text-lg sm:text-xl text-foreground">{t('services.wifi.title')}</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed text-base mb-4">
                {t('services.wifi.desc')}
              </p>
              <div className="space-y-2">
                {wifiFeatures.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <item.icon className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tourisme */}
          <div className="bg-secondary/30 border border-border/30 overflow-hidden">
            <img 
              src={tourEiffel} 
              alt="Tour Eiffel Paris" 
              loading="lazy"
              decoding="async"
              className="w-full h-40 sm:h-52 object-cover"
            />
            <div className="p-4 sm:p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/10">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display text-lg sm:text-xl text-foreground">{t('services.tourism.title')}</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed text-base">
                {t('services.tourism.desc')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};