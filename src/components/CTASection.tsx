import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export const CTASection = () => {
  const { t } = useLanguage();

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
        <div className="absolute inset-0 bg-background/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <p className="text-primary font-body uppercase tracking-[0.2em] text-sm mb-4">
          {t('cta.badge')}
        </p>
        <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6 max-w-3xl mx-auto">
          {t('cta.title')}
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto mb-10">
          {t('cta.description')}
        </p>
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
    </section>
  );
};
