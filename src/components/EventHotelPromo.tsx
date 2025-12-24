import { Star, Train, Coffee, Wifi, Tv, Car, Users, Sparkles, ArrowRight, Clock, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import hotelChambre from "@/assets/hotel-chambre.jpg";

interface EventHotelPromoProps {
  eventName: string;
  accentColor?: string;
  urgencyMessage?: string;
}

export const EventHotelPromo = ({ 
  eventName, 
  accentColor = "from-primary via-burgundy to-primary",
  urgencyMessage
}: EventHotelPromoProps) => {
  const { t } = useLanguage();

  const advantages = [
    { icon: Train, text: t('enfoires.hotelPromo.location'), highlight: true },
    { icon: Coffee, text: t('enfoires.hotelPromo.breakfast') },
    { icon: Wifi, text: t('enfoires.hotelPromo.wifi') },
    { icon: Tv, text: t('enfoires.hotelPromo.tv') },
    { icon: Car, text: t('enfoires.hotelPromo.parkingOption') },
    { icon: Users, text: t('enfoires.hotelPromo.reception') },
  ];

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
              {t('enfoires.hotelPromo.subtitle')}
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
                          Offre limitée
                        </span>
                      </div>
                      <h2 className="font-display text-3xl md:text-4xl text-foreground mb-3">
                        {t('enfoires.hotelPromo.title')}
                      </h2>
                      <p className="text-muted-foreground">
                        Profitez de notre emplacement idéal à quelques minutes de l'événement
                      </p>
                    </div>

                    {/* Advantages Grid */}
                    <div className="grid grid-cols-2 gap-3 mb-8">
                      {advantages.map((advantage, index) => {
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

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Link to="/reservation-seminaire" className="flex-1">
                        <Button 
                          size="lg" 
                          className="w-full bg-gradient-to-r from-primary to-burgundy hover:from-primary/90 hover:to-burgundy/90 text-primary-foreground font-bold shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]"
                        >
                          Réserver maintenant
                          <ArrowRight className="w-5 h-5 ml-2" />
                        </Button>
                      </Link>
                      <Link to="/nos-chambres">
                        <Button 
                          size="lg" 
                          variant="outline" 
                          className="w-full border-primary/30 hover:bg-primary/5"
                        >
                          Voir les chambres
                        </Button>
                      </Link>
                    </div>

                    {/* Trust badges */}
                    <div className="flex items-center justify-center gap-4 mt-6 pt-6 border-t border-border/50">
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        Annulation gratuite
                      </div>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        Meilleur prix garanti
                      </div>
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