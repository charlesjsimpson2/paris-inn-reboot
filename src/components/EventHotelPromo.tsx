import { Star, Train, Coffee, Wifi, Tv, Car, Users, Sparkles, ArrowRight, Clock, CheckCircle2 } from "lucide-react";
import { WiFiBanner } from "@/components/WiFiBanner";
import { Button } from "@/components/ui/button";
import { LocalizedLink } from "@/components/LocalizedLink";
import { useLanguage } from "@/contexts/LanguageContext";
import hotelChambre from "@/assets/hotel-chambre.jpg";

export type EventType = 'concert' | 'salon' | 'sport' | 'marathon' | 'rugby';

interface EventHotelPromoProps {
  eventName: string;
  accentColor?: string;
  urgencyMessage?: string;
  compact?: boolean;
  hideBookButton?: boolean;
  eventType?: EventType;
}

export const EventHotelPromo = ({ 
  eventName, 
  accentColor = "from-primary via-burgundy to-primary",
  urgencyMessage,
  compact = false,
  hideBookButton = false,
  eventType = 'concert'
}: EventHotelPromoProps) => {
  const { t } = useLanguage();

  // Get event-type specific translations
  const getPromoTitle = () => {
    switch (eventType) {
      case 'salon':
        return t('eventHotelPromo.title.salon');
      case 'sport':
        return t('eventHotelPromo.title.sport');
      case 'marathon':
        return t('eventHotelPromo.title.marathon');
      case 'rugby':
        return t('eventHotelPromo.title.rugby');
      default:
        return t('enfoires.hotelPromo.title');
    }
  };

  const getPromoSubtitle = () => {
    switch (eventType) {
      case 'salon':
        return t('eventHotelPromo.subtitle.salon');
      case 'sport':
        return t('eventHotelPromo.subtitle.sport');
      case 'marathon':
        return t('eventHotelPromo.subtitle.marathon');
      case 'rugby':
        return t('eventHotelPromo.subtitle.rugby');
      default:
        return t('enfoires.hotelPromo.subtitle');
    }
  };

  const advantages = [
    { icon: Train, text: t('enfoires.hotelPromo.location'), highlight: true },
    { icon: Coffee, text: t('enfoires.hotelPromo.breakfast') },
    { icon: Wifi, text: t('enfoires.hotelPromo.wifi') },
    { icon: Car, text: t('enfoires.hotelPromo.parkingOption') },
  ];

  if (compact) {
    return (
      <section className="py-8 bg-gradient-to-br from-muted/30 via-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className={`bg-gradient-to-r ${accentColor} rounded-2xl p-6 shadow-lg relative overflow-hidden`}>
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] bg-[length:250%_250%] animate-shimmer" />
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Star className="w-7 h-7 text-white" fill="currentColor" />
                  </div>
                  <div className="text-white text-center md:text-left">
                    <div className="flex items-center gap-2 mb-1">
                      <Clock className="w-4 h-4" />
                      <span className="text-xs font-medium uppercase tracking-wider opacity-90">{t("eventHotelPromo.limitedOffer")}</span>
                    </div>
                    <h3 className="font-display text-lg md:text-xl">{getPromoTitle()}</h3>
                    <p className="text-white/80 text-sm hidden md:block">{t("eventHotelPromo.idealLocation")}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="hidden lg:flex items-center gap-2 text-white/90 text-sm">
                    {advantages.slice(0, 3).map((adv, i) => {
                      const Icon = adv.icon;
                      return (
                        <div key={i} className="flex items-center gap-1 bg-white/10 px-2 py-1 rounded-full">
                          <Icon className="w-3 h-3" />
                          <span className="text-xs">{adv.text}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative py-0">
      {/* Urgency Banner */}
      <div className={`bg-gradient-to-r ${accentColor} py-4 relative overflow-hidden`}>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] bg-[length:250%_250%] animate-shimmer" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-white text-center">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 animate-pulse" />
              <span className="font-bold text-lg uppercase tracking-wider">
                {urgencyMessage || t('enfoires.hotelPromo.badge')}
              </span>
              <Sparkles className="w-5 h-5 animate-pulse" />
            </div>
            <div className="hidden md:block w-px h-6 bg-white/30" />
            <p className="text-white/90 text-sm">
              {getPromoSubtitle()}
            </p>
          </div>
        </div>
      </div>

      {/* Main Promo Section */}
      <div className="bg-gradient-to-b from-charcoal via-charcoal to-background py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Premium Card */}
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-burgundy to-primary rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity" />
              
              <div className="relative bg-card rounded-3xl overflow-hidden border border-primary/20 shadow-2xl">
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Image Side */}
                  <div className="relative h-64 lg:h-auto">
                    <img 
                      src={hotelChambre} 
                      alt="Chambre Hotel & Spa Le Marly" 
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-charcoal/80 lg:block hidden" />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent lg:hidden" />
                    
                    {/* Badge overlay */}
                    <div className="absolute top-4 left-4">
                      <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full font-bold text-sm flex items-center gap-2 shadow-lg">
                        <Star className="w-4 h-4" fill="currentColor" />
                        {eventName}
                      </div>
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className="p-8 lg:p-10 flex flex-col justify-center">
                    <div className="mb-6">
                      <div className="flex items-center gap-2 text-primary mb-2">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm font-medium uppercase tracking-wider">
                          {t("eventHotelPromo.limitedOffer")}
                        </span>
                      </div>
                      <h2 className="font-display text-3xl md:text-4xl text-foreground mb-3">
                        {getPromoTitle()}
                      </h2>
                      <p className="text-muted-foreground">
                        {t("eventHotelPromo.idealLocation")}
                      </p>
                    </div>

                    {/* Advantages Grid */}
                    <div className="grid grid-cols-2 gap-3 mb-8">
                      {[...advantages, { icon: Tv, text: t('enfoires.hotelPromo.tv') }, { icon: Users, text: t('enfoires.hotelPromo.reception') }].map((advantage, index) => {
                        const Icon = advantage.icon;
                        return (
                          <div 
                            key={index}
                            className={`flex items-center gap-3 p-3 rounded-xl transition-colors ${
                              advantage.highlight 
                                ? 'bg-primary/10 border border-primary/20' 
                                : 'bg-muted/50'
                            }`}
                          >
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                              advantage.highlight ? 'bg-primary text-primary-foreground' : 'bg-background'
                            }`}>
                              <Icon className="w-4 h-4" />
                            </div>
                            <span className="text-sm text-foreground font-medium">
                              {advantage.text}
                            </span>
                          </div>
                        );
                      })}
                    </div>

                    {/* CTA Button */}
                    <div className="flex justify-center">
                      <LocalizedLink to="/nos-chambres">
                        <Button
                          size="lg"
                          className="bg-gradient-to-r from-primary to-burgundy hover:from-primary/90 hover:to-burgundy/90 text-primary-foreground font-bold shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]"
                        >
                          {t("eventHotelPromo.viewRooms")}
                          <ArrowRight className="w-5 h-5 ml-2" />
                        </Button>
                      </Link>
                    </div>

                    {/* Trust badges */}
                    <div className="flex items-center justify-center gap-4 mt-6 pt-6 border-t border-border/50">
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        {t("eventHotelPromo.freeCancellation")}
                      </div>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        {t("eventHotelPromo.bestPrice")}
                      </div>
                    </div>

                    {/* WiFi Banner */}
                    <div className="mt-6">
                      <WiFiBanner compact />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};