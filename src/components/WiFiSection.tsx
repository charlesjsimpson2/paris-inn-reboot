import { Wifi, Zap, Shield, Signal, Building, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import wifiCoworking from "@/assets/wifi-coworking-hotel.webp";

export const WiFiSection = () => {
  const { t } = useLanguage();

  const specs = [
    { icon: Zap, value: "3 Gbps", label: t('wifiPage.spec.capacity.label'), desc: t('wifiPage.spec.capacity.desc') },
    { icon: Shield, value: "3×", label: t('wifiPage.spec.redundancy.label'), desc: t('wifiPage.spec.redundancy.desc') },
    { icon: Signal, value: "25", label: t('wifiPage.spec.accessPoints.label'), desc: t('wifiPage.spec.accessPoints.desc') },
    { icon: Building, value: "7", label: t('wifiPage.spec.floors.label'), desc: t('wifiPage.spec.floors.desc') },
  ];

  return (
    <section className="py-16 lg:py-24 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: Image */}
          <div className="relative group">
            <div className="overflow-hidden shadow-xl">
              <img
                src={wifiCoworking}
                alt="WiFi haut débit - Espace de travail à l'hôtel"
                loading="lazy"
                decoding="async"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-4 py-2 shadow-lg">
              <span className="font-display text-lg">3 Gbps</span>
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/15">
                <Wifi className="w-5 h-5 text-primary" />
              </div>
              <p className="text-primary font-body uppercase tracking-[0.2em] text-sm">
                {t('wifiPage.badge')}
              </p>
            </div>

            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
              {t('wifiSection.title')}
            </h2>

            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-6">
              {t('wifiSection.desc')}
            </p>

            {/* Specs grid */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              {specs.map((spec, idx) => (
                <div key={idx} className="bg-background border border-border/30 p-3">
                  <div className="flex items-center gap-2 mb-1">
                    <spec.icon className="w-4 h-4 text-primary" />
                    <span className="font-display text-xl text-primary">{spec.value}</span>
                  </div>
                  <p className="text-foreground text-sm font-medium">{spec.label}</p>
                </div>
              ))}
            </div>

            <Link
              to="/wifi"
              className="inline-flex items-center gap-2 text-primary font-medium hover:underline text-sm"
            >
              {t('wifi.banner.learnMore')}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
