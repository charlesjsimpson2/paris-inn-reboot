import { Button } from "@/components/ui/button";
import { Star, BedDouble, Car, Wine } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import hotelMetroFacade from "@/assets/hotel-metro-facade.jpg";

export const IntroSection = () => {
  const { t } = useLanguage();

  const features = [
    { icon: Star, label: t('intro.stars'), stars: true },
    { icon: BedDouble, label: t('intro.rooms') },
    { icon: Car, label: t('intro.parking') },
    { icon: Wine, label: t('intro.bar') },
  ];

  return (
    <section className="py-16 pb-8 bg-gradient-to-b from-card to-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-primary font-body uppercase tracking-[0.2em] text-sm mb-3">
            {t('intro.badge')}
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground">
            {t('intro.title')}
          </h2>
        </div>

        {/* Content: Text+Stats left, Image right */}
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center mb-10">
          {/* Left: Text + Stats */}
          <div>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              {t('intro.description')}
            </p>

            {/* Stats in row */}
            <div className="flex flex-wrap gap-3">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 bg-charcoal/50 border border-border/30"
                >
                  {feature.stars ? (
                    <div className="flex items-center gap-0.5 text-primary">
                      <Star className="w-3.5 h-3.5 fill-primary" />
                      <Star className="w-3.5 h-3.5 fill-primary" />
                      <Star className="w-3.5 h-3.5 fill-primary" />
                    </div>
                  ) : (
                    <feature.icon className="w-4 h-4 text-primary" />
                  )}
                  <span className="text-foreground text-sm">{feature.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative group">
            <div className="overflow-hidden shadow-xl">
              <img
                src={hotelMetroFacade}
                alt="Façade de l'Hotel Inn Paris avec le métro"
                loading="lazy"
                decoding="async"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-foreground text-lg md:text-xl font-display mb-4 md:mb-6">
            {t('intro.cta')}
          </p>
          <Button variant="gold" size="lg" className="px-8 py-5 md:px-12 md:py-7 text-base md:text-lg font-bold shadow-xl w-full sm:w-auto" asChild>
            <a href="https://www.secure-hotel-booking.com/d-edge/Hotel-inn-Paris-Place-d-Italie/JJGV/fr-FR/DateSelection" target="_blank" rel="noopener noreferrer">
              {t('intro.button')}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
