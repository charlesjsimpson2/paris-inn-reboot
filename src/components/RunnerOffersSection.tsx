import { Sun, Utensils, Droplets, Coffee, Car, Ticket, Heart } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface RunnerOffersSectionProps {
  accentColor?: string;
  eventName?: string;
}

export const RunnerOffersSection = ({ 
  accentColor = "from-[#E94E4B] via-[#3BB5DC] to-[#2A9BC7]",
  eventName = "Semi-Marathon"
}: RunnerOffersSectionProps) => {
  const { t } = useLanguage();

  return (
    <section className="py-12 bg-gradient-to-br from-[#E94E4B]/10 via-white to-[#3BB5DC]/10 dark:from-[#E94E4B]/5 dark:via-background dark:to-[#3BB5DC]/5">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#E94E4B] to-[#3BB5DC] text-white px-5 py-2 rounded-full mb-3 shadow-lg">
              <Heart className="w-4 h-4" />
              <span className="font-bold text-sm uppercase tracking-wider">{t('runnerOffers.title')}</span>
            </div>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{t('runnerOffers.subtitle')}</p>
          </div>

          {/* Runner Special Offers - 3 columns */}
          <div className="grid md:grid-cols-3 gap-5 mb-6">
            {/* Petit-déjeuner Early */}
            <div className="bg-white dark:bg-card rounded-2xl p-5 shadow-xl border-2 border-[#E94E4B]/30 dark:border-[#E94E4B]/20 hover:scale-[1.02] transition-transform duration-300">
              <div className="w-12 h-12 bg-[#E94E4B]/10 dark:bg-[#E94E4B]/20 rounded-full flex items-center justify-center mb-3">
                <Sun className="w-6 h-6 text-[#E94E4B]" />
              </div>
              <h3 className="font-display text-lg text-foreground mb-2">{t('runnerOffers.earlyBreakfast')}</h3>
              <p className="text-muted-foreground text-sm mb-3">{t('runnerOffers.earlyBreakfastDesc')}</p>
              <div className="inline-flex items-center gap-2 bg-[#E94E4B]/10 dark:bg-[#E94E4B]/20 text-[#E94E4B] px-3 py-1.5 rounded-full text-sm font-medium">
                <Utensils className="w-4 h-4" />
                {t('runnerOffers.pastaSalad')}
              </div>
            </div>

            {/* Douche après la course */}
            <div className="bg-white dark:bg-card rounded-2xl p-5 shadow-xl border-2 border-[#3BB5DC]/30 dark:border-[#3BB5DC]/20 hover:scale-[1.02] transition-transform duration-300">
              <div className="w-12 h-12 bg-[#3BB5DC]/10 dark:bg-[#3BB5DC]/20 rounded-full flex items-center justify-center mb-3">
                <Droplets className="w-6 h-6 text-[#3BB5DC]" />
              </div>
              <h3 className="font-display text-lg text-foreground mb-2">{t('runnerOffers.showerAfterRace')}</h3>
              <p className="text-muted-foreground text-sm mb-3">{t('runnerOffers.showerAfterRaceDesc')}</p>
              <div className="inline-block bg-[#3BB5DC] text-white font-bold text-sm px-3 py-1.5 rounded-full">{t('runnerOffers.showerAccess')}</div>
            </div>

            {/* Happy Hour post-course */}
            <div className="bg-white dark:bg-card rounded-2xl p-5 shadow-xl border-2 border-[#F9C74F]/50 dark:border-[#F9C74F]/30 hover:scale-[1.02] transition-transform duration-300">
              <div className="w-12 h-12 bg-[#F9C74F]/20 dark:bg-[#F9C74F]/10 rounded-full flex items-center justify-center mb-3">
                <Coffee className="w-6 h-6 text-[#D4A843]" />
              </div>
              <h3 className="font-display text-lg text-foreground mb-2">{t('runnerOffers.happyHour')}</h3>
              <p className="text-muted-foreground text-sm mb-3">{t('runnerOffers.happyHourDesc')}</p>
              <div className="inline-block bg-[#F9C74F] text-black font-bold text-sm px-3 py-1.5 rounded-full">{t('runnerOffers.happyHourDiscount')}</div>
            </div>
          </div>

          {/* Standard Offers - 2 columns */}
          <div className="grid md:grid-cols-2 gap-5">
            {/* Parking */}
            <div className="bg-white dark:bg-card rounded-2xl p-5 shadow-lg border border-border/50">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#E94E4B]/10 dark:bg-[#E94E4B]/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Car className="w-6 h-6 text-[#E94E4B]" />
                </div>
                <div>
                  <h3 className="font-display text-lg text-foreground mb-1">{t('runnerOffers.parking')}</h3>
                  <p className="text-muted-foreground text-sm mb-2">{t('runnerOffers.parkingDesc')}</p>
                  <div className="inline-block bg-[#E94E4B] text-white font-bold text-sm px-3 py-1 rounded-full">{t('runnerOffers.parkingPrice')}</div>
                </div>
              </div>
            </div>

            {/* Taxi */}
            <div className="bg-white dark:bg-card rounded-2xl p-5 shadow-lg border border-border/50">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#3BB5DC]/10 dark:bg-[#3BB5DC]/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Ticket className="w-6 h-6 text-[#3BB5DC]" />
                </div>
                <div>
                  <h3 className="font-display text-lg text-foreground mb-1">{t('runnerOffers.taxi')}</h3>
                  <p className="text-muted-foreground text-sm mb-2">{t('runnerOffers.taxiDesc')}</p>
                  <div className="inline-block bg-[#3BB5DC] text-white font-bold text-sm px-3 py-1 rounded-full">{t('runnerOffers.taxiDiscount')}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer note */}
          <p className="text-center text-xs text-muted-foreground mt-5 italic">{t('runnerOffers.note')}</p>
        </div>
      </div>
    </section>
  );
};
