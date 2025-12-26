import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Train, Leaf, Users, Clock, Utensils, TreeDeciduous, Hotel, Car, Ticket, Star, Coffee, Wifi, Tv } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { RelatedEvents } from "@/components/RelatedEvents";
import { EventHotelPromo } from "@/components/EventHotelPromo";
import { EasyAccessSection } from "@/components/EasyAccessSection";
import salonAgricultureHero from "@/assets/salon-agriculture-hero.jpg";
import salonAgricultureImage from "@/assets/salon-agriculture.webp";
import salonAgricultureVaches from "@/assets/salon-agriculture-vaches.jpg";
import salonAgricultureEnfantAne from "@/assets/salon-agriculture-enfant-ane.jpg";
import hotelMetroFacade from "@/assets/hotel-metro-facade.jpg";
import petitDejeuner from "@/assets/petit-dejeuner.jpg";
import chambreDouble from "@/assets/chambre-double.jpg";

const SalonAgriculture = () => {
  const { t } = useLanguage();


  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-[50vh] min-h-[350px] overflow-hidden">
          <img src={salonAgricultureHero} alt="Salon de l'Agriculture" className="absolute inset-0 w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute inset-0 flex items-end">
            <div className="container mx-auto px-4 pb-8">
              <div className="inline-flex items-center gap-2 bg-green-600/90 backdrop-blur-sm text-white px-4 py-2 rounded-full mb-4 shadow-lg">
                <Leaf className="w-4 h-4" />
                <span className="font-medium text-sm uppercase tracking-wider">{t('agriculture.badge')}</span>
              </div>
              <h1 className="font-display text-4xl md:text-6xl text-white drop-shadow-lg">{t('agriculture.title')}</h1>
            </div>
          </div>
        </section>

        {/* Date and Booking Section */}
        <section className="bg-green-50 py-8">
          <div className="container mx-auto px-4">
            <p className="text-green-800 text-lg md:text-xl mb-6 font-medium">{t('agriculture.biggestFarm')}</p>
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <div className="flex items-center gap-2 bg-white px-5 py-3 rounded-full shadow-sm border border-green-200">
                <Calendar className="w-5 h-5 text-green-600" /><span className="text-green-800 font-medium">21 Février - 1 Mars 2026</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-5 py-3 rounded-full shadow-sm border border-green-200">
                <MapPin className="w-5 h-5 text-green-600" /><span className="text-green-800 font-medium">Porte de Versailles</span>
              </div>
            </div>
            <a href="https://www.booking.com" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white font-bold shadow-lg">
                <Hotel className="w-5 h-5 mr-2" />{t('agriculture.bookAccommodation')}
              </Button>
            </a>
          </div>
        </section>

        {/* Easy Access Section */}
        <EasyAccessSection 
          venue="Porte de Versailles"
          travelTime="~25 min"
          metroLine="Ligne 12"
          metroRoute="Place d'Italie → Porte de Versailles (via Ligne 7 puis 12)"
          accentColor="from-green-600 via-green-700 to-amber-600"
        />


        {/* Event Description */}
        <section className="py-16 bg-gradient-to-br from-green-50 via-white to-amber-50 dark:from-green-950/20 dark:via-card dark:to-amber-950/20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Leaf className="w-8 h-8 text-green-600" />
                  <h2 className="font-display text-3xl md:text-4xl text-foreground">{t('agriculture.unmissable')}</h2>
                  <TreeDeciduous className="w-8 h-8 text-green-600" />
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: t('agriculture.desc1') }} />
                <p className="text-muted-foreground text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: t('agriculture.desc2') }} />
              </div>
              <div className="flex justify-center">
                <img src={salonAgricultureImage} alt="Salon de l'Agriculture" className="max-w-xs md:max-w-sm shadow-xl object-contain" />
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-2">{t('agriculture.atmosphere')}</h2>
              <p className="text-muted-foreground">{t('agriculture.familyMoments')}</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <div className="group relative aspect-[16/9] overflow-hidden rounded-xl shadow-xl">
                <img src={salonAgricultureVaches} alt="Salle de traite" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="font-display text-lg">{t('agriculture.milkingRoom')}</p>
                  <p className="text-white/80 text-sm">{t('agriculture.milkingDesc')}</p>
                </div>
              </div>
              <div className="group relative aspect-[16/9] overflow-hidden rounded-xl shadow-xl">
                <img src={salonAgricultureEnfantAne} alt="Rencontres animales" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="font-display text-lg">{t('agriculture.animalMeetings')}</p>
                  <p className="text-white/80 text-sm">{t('agriculture.animalDesc')}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Access Section */}
        <section className="py-16 bg-gradient-to-r from-green-600 via-green-700 to-amber-600 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="font-display text-3xl md:text-4xl mb-4">{t('agriculture.easyAccess')}</h2>
              <p className="text-white/90 text-lg">{t('agriculture.accessDesc')}</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 items-stretch">
              <img src={hotelMetroFacade} alt="Façade de l'hôtel" className="w-full h-full object-cover rounded-lg shadow-xl" />
              <div className="grid grid-cols-1 gap-4">
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center"><Train className="w-4 h-4" /></div>
                    <div><h3 className="font-display text-base">{t('agriculture.byMetro')}</h3><p className="text-white/80 text-xs">{t('agriculture.metroTime')}</p></div>
                  </div>
                  <p className="text-white/90 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: t('agriculture.metroRoute') }} />
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center"><Clock className="w-4 h-4" /></div>
                    <div><h3 className="font-display text-base">{t('agriculture.hours')}</h3><p className="text-white/80 text-xs">{t('agriculture.hoursTime')}</p></div>
                  </div>
                  <p className="text-white/90 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: t('agriculture.hoursDesc') }} />
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center"><MapPin className="w-4 h-4" /></div>
                    <h3 className="font-display text-base">{t('agriculture.location')}</h3>
                  </div>
                  <p className="text-white/90 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: t('agriculture.address') }} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comfort Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">{t('agriculture.comfort')}</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">{t('agriculture.comfortDesc')}</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="bg-card overflow-hidden border border-border">
                <div className="aspect-[4/3] overflow-hidden"><img src={petitDejeuner} alt="Petit-déjeuner" className="w-full h-full object-cover" /></div>
                <div className="p-6 text-center">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4 -mt-10 relative z-10 border-4 border-card"><Utensils className="w-6 h-6 text-green-600" /></div>
                  <h3 className="font-display text-xl text-foreground mb-2">{t('agriculture.breakfast')}</h3>
                  <p className="text-muted-foreground text-sm">{t('agriculture.breakfastDesc')}</p>
                </div>
              </div>
              <div className="bg-card overflow-hidden border border-border">
                <div className="aspect-[4/3] overflow-hidden"><img src={hotelMetroFacade} alt="Métro" className="w-full h-full object-cover" /></div>
                <div className="p-6 text-center">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4 -mt-10 relative z-10 border-4 border-card"><Train className="w-6 h-6 text-green-600" /></div>
                  <h3 className="font-display text-xl text-foreground mb-2">{t('agriculture.transport')}</h3>
                  <p className="text-muted-foreground text-sm">{t('agriculture.transportDesc')}</p>
                </div>
              </div>
              <div className="bg-card overflow-hidden border border-border">
                <div className="aspect-[4/3] overflow-hidden"><img src={chambreDouble} alt="Chambre" className="w-full h-full object-cover" /></div>
                <div className="p-6 text-center">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4 -mt-10 relative z-10 border-4 border-card"><Users className="w-6 h-6 text-green-600" /></div>
                  <h3 className="font-display text-xl text-foreground mb-2">{t('agriculture.rooms')}</h3>
                  <p className="text-muted-foreground text-sm">{t('agriculture.roomsDesc')}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Offers Section */}
        <section className="py-16 bg-gradient-to-br from-amber-100 via-green-50 to-amber-100 dark:from-amber-950/30 dark:via-green-950/20 dark:to-amber-950/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="font-display text-3xl md:text-4xl text-foreground mb-2">{t('agriculture.exclusiveOffers')}</h2>
                <p className="text-muted-foreground">{t('agriculture.offersSubtitle')}</p>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white dark:bg-card rounded-2xl p-8 shadow-xl border-2 border-green-200 dark:border-green-800/50 hover:scale-105 transition-transform duration-300">
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-4"><Car className="w-8 h-8 text-green-600" /></div>
                  <h3 className="font-display text-2xl text-foreground mb-2">{t('agriculture.parking')}</h3>
                  <p className="text-muted-foreground mb-4">{t('agriculture.parkingDesc')}</p>
                  <div className="inline-block bg-green-600 text-white font-bold text-xl px-4 py-2 rounded-full">{t('agriculture.parkingPrice')}</div>
                </div>
                <div className="bg-white dark:bg-card rounded-2xl p-8 shadow-xl border-2 border-amber-200 dark:border-amber-800/50 hover:scale-105 transition-transform duration-300">
                  <div className="w-16 h-16 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center mb-4"><Ticket className="w-8 h-8 text-amber-600" /></div>
                  <h3 className="font-display text-2xl text-foreground mb-2">{t('agriculture.taxi')}</h3>
                  <p className="text-muted-foreground mb-4">{t('agriculture.taxiDesc')}</p>
                  <div className="inline-block bg-amber-600 text-white font-bold text-xl px-4 py-2 rounded-full">{t('agriculture.taxiDiscount')}</div>
                </div>
              </div>
              <p className="text-center text-sm text-muted-foreground mt-6 italic">{t('agriculture.offersNote')}</p>
            </div>
          </div>
        </section>

        {/* Hotel Promo Section - Compact */}
        <EventHotelPromo 
          eventName="Salon Agriculture" 
          accentColor="from-green-600 via-green-700 to-amber-600"
          urgencyMessage="Offre Salon de l'Agriculture"
          compact
        />

        {/* Related Events */}
        <RelatedEvents currentEventId="agriculture" />
      </main>
      <Footer />
    </div>
  );
};

export default SalonAgriculture;
