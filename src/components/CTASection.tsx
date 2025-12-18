import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Check, X, Shield, Percent, Gift } from "lucide-react";

export const CTASection = () => {
  const { t } = useLanguage();

  const advantages = [
    { icon: Percent, label: t('cta.advantage1') },
    { icon: Gift, label: t('cta.advantage2') },
    { icon: Shield, label: t('cta.advantage3') },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1920&h=600&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-background/95" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Badge with pulse animation */}
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2 rounded-full font-bold text-sm uppercase tracking-wider animate-pulse">
              <Shield className="w-4 h-4" />
              {t('cta.badge')}
            </span>
          </div>

          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4 text-center max-w-3xl mx-auto">
            {t('cta.title')}
          </h2>
          
          <p className="text-xl text-primary font-semibold text-center mb-3">
            {t('cta.subtitle')}
          </p>
          
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10">
            {t('cta.description')}
          </p>

          {/* Comparison cards */}
          <div className="grid md:grid-cols-3 gap-4 mb-10">
            {/* Other platforms */}
            <div className="bg-muted/50 border border-border rounded-xl p-6 relative opacity-70">
              <div className="absolute -top-2 -right-2 bg-destructive text-destructive-foreground text-xs px-2 py-1 rounded-full font-bold">
                {t('cta.moreExpensive')}
              </div>
              <p className="text-muted-foreground text-sm mb-2">Booking.com</p>
              <p className="text-foreground font-display text-2xl line-through decoration-destructive">€129</p>
              <div className="flex items-center gap-1 text-destructive text-sm mt-2">
                <X className="w-4 h-4" />
                <span>{t('cta.noAdvantages')}</span>
              </div>
            </div>

            <div className="bg-muted/50 border border-border rounded-xl p-6 relative opacity-70">
              <div className="absolute -top-2 -right-2 bg-destructive text-destructive-foreground text-xs px-2 py-1 rounded-full font-bold">
                {t('cta.moreExpensive')}
              </div>
              <p className="text-muted-foreground text-sm mb-2">Expedia</p>
              <p className="text-foreground font-display text-2xl line-through decoration-destructive">€125</p>
              <div className="flex items-center gap-1 text-destructive text-sm mt-2">
                <X className="w-4 h-4" />
                <span>{t('cta.noAdvantages')}</span>
              </div>
            </div>

            {/* Our site - highlighted */}
            <div className="bg-primary/10 border-2 border-primary rounded-xl p-6 relative transform md:-translate-y-2 shadow-lg">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs px-4 py-1.5 rounded-full font-bold whitespace-nowrap">
                ✓ {t('cta.bestPrice')}
              </div>
              <p className="text-primary font-medium text-sm mb-2">{t('cta.ourSite')}</p>
              <p className="text-foreground font-display text-3xl">€109</p>
              <div className="flex items-center gap-1 text-primary text-sm mt-2 font-medium">
                <Check className="w-4 h-4" />
                <span>-15% + {t('cta.exclusiveAdvantages')}</span>
              </div>
            </div>
          </div>

          {/* Advantages */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            {advantages.map((adv, index) => (
              <div key={index} className="flex items-center gap-2 text-foreground">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <adv.icon className="w-4 h-4 text-primary" />
                </div>
                <span className="text-sm font-medium">{adv.label}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="gold" size="lg" className="w-full sm:w-auto" asChild>
              <a href="https://www.secure-hotel-booking.com/d-edge/Hotel-inn-Paris-Place-d-Italie/JJGV/fr-FR/DateSelection" target="_blank" rel="noopener noreferrer">
                {t('cta.button')}
              </a>
            </Button>
            <Button variant="elegant" size="lg" className="w-full sm:w-auto">
              {t('cta.contact')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
