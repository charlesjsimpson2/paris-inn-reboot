import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Train, Trophy, Clock, Car, Ticket, Gift, Shirt } from "lucide-react";
import { Link } from "react-router-dom";
import rugbyHero from "@/assets/rugby-france-irlande.jpg";
import { useLanguage } from "@/contexts/LanguageContext";
import { RelatedEvents } from "@/components/RelatedEvents";
import { EasyAccessSection } from "@/components/EasyAccessSection";
import { EventHotelPromo } from "@/components/EventHotelPromo";

const drapeauFrance = "https://flagcdn.com/w80/fr.png";
const drapeauIrlande = "https://flagcdn.com/w80/ie.png";

const Tournoi6Nations = () => {
  const { t } = useLanguage();

  const previousMatches = [
    { year: "2024", competition: "6 Nations", result: "France 17 - 38 Irlande", venue: "Marseille", winner: "ireland" },
    { year: "2023", competition: "6 Nations", result: "Irlande 32 - 19 France", venue: "Dublin", winner: "ireland" },
    { year: "2022", competition: "6 Nations", result: "France 30 - 24 Irlande", venue: "Paris", winner: "france" },
    { year: "2021", competition: "6 Nations", result: "Irlande 15 - 13 France", venue: "Dublin", winner: "ireland" },
    { year: "2020", competition: "6 Nations", result: "France 35 - 27 Irlande", venue: "Paris", winner: "france" },
    { year: "2019", competition: "6 Nations", result: "Irlande 26 - 14 France", venue: "Dublin", winner: "ireland" },
    { year: "2018", competition: "6 Nations", result: "France 13 - 15 Irlande", venue: "Paris", winner: "ireland" },
    { year: "2017", competition: "6 Nations", result: "Irlande 19 - 9 France", venue: "Dublin", winner: "ireland" },
    { year: "2016", competition: "6 Nations", result: "France 10 - 9 Irlande", venue: "Paris", winner: "france" },
    { year: "2015", competition: "6 Nations", result: "Irlande 18 - 11 France", venue: "Dublin", winner: "ireland" },
  ];

  const franceTeam = [
    { pos: "15", name: "T. Ramos" }, { pos: "14", name: "D. Penaud" }, { pos: "13", name: "G. Fickou" },
    { pos: "12", name: "Y. Moefana" }, { pos: "11", name: "L. Bielle-Biarrey" }, { pos: "10", name: "R. Ntamack" },
    { pos: "9", name: "A. Dupont" }, { pos: "1", name: "C. Baille" }, { pos: "2", name: "P. Mauvaka" },
    { pos: "3", name: "U. Atonio" }, { pos: "4", name: "T. Lavault" }, { pos: "5", name: "E. Meafou" },
    { pos: "6", name: "F. Cros" }, { pos: "7", name: "C. Ollivon" }, { pos: "8", name: "G. Alldritt" },
  ];

  const irelandTeam = [
    { pos: "15", name: "H. Keenan" }, { pos: "14", name: "C. Nash" }, { pos: "13", name: "G. Ringrose" },
    { pos: "12", name: "B. Aki" }, { pos: "11", name: "J. Lowe" }, { pos: "10", name: "J. Crowley" },
    { pos: "9", name: "J. Gibson-Park" }, { pos: "1", name: "A. Porter" }, { pos: "2", name: "D. Sheehan" },
    { pos: "3", name: "T. Furlong" }, { pos: "4", name: "J. McCarthy" }, { pos: "5", name: "T. Beirne" },
    { pos: "6", name: "P. O'Mahony" }, { pos: "7", name: "J. van der Flier" }, { pos: "8", name: "C. Doris" },
  ];

  const parisAttractions = [
    { name: "Montmartre & Sacré-Cœur", time: "25 min", image: "https://images.unsplash.com/photo-1550340499-a6c60fc8287c?w=400&h=300&fit=crop" },
    { name: "Champs-Élysées", time: "30 min", image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=400&h=300&fit=crop" },
    { name: "Opéra Garnier", time: "20 min", image: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=400&h=300&fit=crop" },
    { name: "Tour Eiffel", time: "26 min", image: "https://images.unsplash.com/photo-1511739001486-6bfe10ce65f4?w=400&h=300&fit=crop" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
          <img src={rugbyHero} alt="Match France - Irlande" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 via-black/50 to-green-900/70" />
          <div className="absolute inset-0 flex items-end">
            <div className="container mx-auto px-4 pb-16">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-3 mb-4">
                  <span className="bg-blue-600 text-white px-3 py-1.5 rounded-full font-medium text-sm flex items-center gap-2">
                    <img src={drapeauFrance} alt="France" className="w-5 h-4 object-cover rounded-sm" /> {t('rugby.france')}
                  </span>
                  <span className="text-white text-xl font-bold">VS</span>
                  <span className="bg-green-600 text-white px-3 py-1.5 rounded-full font-medium text-sm flex items-center gap-2">
                    <img src={drapeauIrlande} alt="Irlande" className="w-5 h-4 object-cover rounded-sm" /> {t('rugby.ireland')}
                  </span>
                </div>
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full mb-4">
                  <Trophy className="w-4 h-4" />
                  <span className="font-medium text-sm">{t('rugby.tournament')}</span>
                </div>
                <h1 className="font-display text-4xl md:text-6xl text-white mb-4">{t('rugby.title')}</h1>
                <p className="text-white/90 text-lg md:text-xl mb-6">{t('rugby.subtitle')}</p>
                <div className="flex flex-wrap gap-4 text-white/90">
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                    <Calendar className="w-4 h-4" /><span>22 Février 2026</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                    <Clock className="w-4 h-4" /><span>21h00</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                    <MapPin className="w-4 h-4" /><span>Stade de France</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Exclusive Offers - 3 columns */}
        <section className="py-10 bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-blue-950/20 dark:via-background dark:to-green-950/20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-green-600 text-white px-5 py-2 rounded-full mb-2 shadow-lg">
                  <Gift className="w-4 h-4" />
                  <span className="font-bold text-sm uppercase tracking-wider">{t('rugby.exclusiveOffers')}</span>
                </div>
                <p className="text-muted-foreground text-sm">{t('rugby.offersSubtitle')}</p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-5">
                {/* Parking */}
                <div className="bg-white dark:bg-card rounded-2xl p-5 shadow-xl border-2 border-blue-200 dark:border-blue-800/50 hover:scale-[1.02] transition-transform duration-300 group">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Car className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg text-foreground">{t('rugby.parking')}</h3>
                      <div className="inline-block bg-blue-600 text-white font-bold text-base px-2.5 py-0.5 rounded-full">{t('rugby.parkingPrice')}</div>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm">{t('rugby.parkingDesc')}</p>
                </div>

                {/* Taxi */}
                <div className="bg-white dark:bg-card rounded-2xl p-5 shadow-xl border-2 border-green-200 dark:border-green-800/50 hover:scale-[1.02] transition-transform duration-300 group">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Ticket className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg text-foreground">{t('rugby.taxi')}</h3>
                      <div className="inline-block bg-green-600 text-white font-bold text-base px-2.5 py-0.5 rounded-full">{t('rugby.taxiDiscount')}</div>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm">{t('rugby.taxiDesc')}</p>
                </div>

                {/* T-shirt Raffle */}
                <div className="bg-white dark:bg-card rounded-2xl p-5 shadow-xl border-2 border-purple-200 dark:border-purple-800/50 hover:scale-[1.02] transition-transform duration-300 group relative overflow-hidden">
                  <div className="absolute top-2 right-2">
                    <Trophy className="w-4 h-4 text-purple-400" />
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Shirt className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg text-foreground">{t('concert.raffle.title').replace('!', '')}</h3>
                      <span className="text-xs text-purple-600 dark:text-purple-400 font-medium uppercase tracking-wide">{t('concert.raffle.badge')}</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm">{t('concert.raffle.subtitle')}</p>
                </div>
              </div>
              
              <p className="text-center text-xs text-muted-foreground mt-4 italic">{t('rugby.offersNote')} {t('concert.raffle.note')}</p>
            </div>
          </div>
        </section>


        {/* Easy Access Section */}
        <EasyAccessSection 
          venue="Stade de France"
          travelTime="~30 min"
          metroLine="Ligne 13"
          metroRoute="Place d'Italie → Saint-Denis Porte de Paris (via Ligne 7 puis 13)"
          accentColor="from-blue-600 via-blue-700 to-green-600"
        />

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-10">
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">{t('rugby.relive')}</h2>
              <p className="text-muted-foreground">{t('rugby.highlights')}</p>
            </div>
            <div className="max-w-4xl mx-auto aspect-video rounded-lg overflow-hidden shadow-2xl">
              <iframe width="100%" height="100%" src="https://www.youtube.com/embed/qr7IeGFKoQo" title="France vs Irlande" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="w-full h-full" />
            </div>
          </div>
        </section>

        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">{t('rugby.probableLineups')}</h2>
              <p className="text-muted-foreground">{t('rugby.expectedLineups')}</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-blue-600 rounded-lg overflow-hidden">
                <div className="p-4 flex items-center justify-center gap-3 border-b border-blue-500">
                  <img src={drapeauFrance} alt="France" className="w-7 h-5 object-cover rounded-sm" />
                  <h3 className="font-display text-2xl text-white">{t('rugby.france')}</h3>
                </div>
                <div className="p-4 grid grid-cols-3 gap-2">
                  {franceTeam.map((player, i) => (
                    <div key={i} className="bg-blue-700/50 p-2 rounded text-center">
                      <span className="text-blue-200 text-xs">{player.pos}</span>
                      <p className="text-white font-medium text-sm truncate">{player.name}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-green-600 rounded-lg overflow-hidden">
                <div className="p-4 flex items-center justify-center gap-3 border-b border-green-500">
                  <img src={drapeauIrlande} alt="Irlande" className="w-7 h-5 object-cover rounded-sm" />
                  <h3 className="font-display text-2xl text-white">{t('rugby.ireland')}</h3>
                </div>
                <div className="p-4 grid grid-cols-3 gap-2">
                  {irelandTeam.map((player, i) => (
                    <div key={i} className="bg-green-700/50 p-2 rounded text-center">
                      <span className="text-green-200 text-xs">{player.pos}</span>
                      <p className="text-white font-medium text-sm truncate">{player.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">{t('rugby.last10')}</h2>
              <p className="text-muted-foreground">{t('rugby.history')}</p>
            </div>
            <div className="max-w-3xl mx-auto space-y-3">
              {previousMatches.map((match, i) => (
                <div key={i} className={`flex items-center justify-between p-4 rounded-lg border ${match.winner === 'france' ? 'bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-800' : 'bg-green-50 dark:bg-green-950/30 border-green-200 dark:border-green-800'}`}>
                  <div className="flex items-center gap-3"><span className="font-bold text-foreground">{match.year}</span><span className="text-muted-foreground text-sm">{match.competition}</span></div>
                  <p className={`font-bold ${match.winner === 'france' ? 'text-blue-600 dark:text-blue-400' : 'text-green-600 dark:text-green-400'}`}>{match.result}</p>
                  <span className="text-muted-foreground text-sm">{match.venue}</span>
                </div>
              ))}
              <div className="mt-6 p-4 bg-muted rounded-lg text-center">
                <p className="text-muted-foreground"><strong className="text-foreground">{t('rugby.record')}:</strong> {t('rugby.france')} 3 {t('rugby.wins')} - {t('rugby.ireland')} 7 {t('rugby.wins')}</p>
              </div>
            </div>
          </div>
        </section>


        <section className="py-20 bg-gradient-to-r from-blue-600 via-primary to-green-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-display text-3xl md:text-4xl text-white mb-4">{t('rugby.specialOffer')}</h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">{t('rugby.bestConditions')}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
                <a href="https://www.secure-hotel-booking.com/d-edge/Hotel-inn-Paris-Place-d-Italie/JJGV/fr-FR/DateSelection" target="_blank" rel="noopener noreferrer">{t('rugby.bookNow')}</a>
              </Button>
              <Link to="/reservation-seminaire"><Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">{t('contact.title')}</Button></Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">{t('rugby.discoverParis')}</h2>
              <p className="text-muted-foreground">{t('rugby.parisDesc')}</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {parisAttractions.map((attraction, i) => (
                <div key={i} className="group relative aspect-[4/3] overflow-hidden rounded-lg">
                  <img src={attraction.image} alt={attraction.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <h3 className="text-white font-medium text-sm md:text-base">{attraction.name}</h3>
                    <p className="text-white/80 text-xs flex items-center gap-1"><Train className="w-3 h-3" /> {attraction.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Hotel Promo Section - Compact */}
        <EventHotelPromo 
          eventName="France - Irlande" 
          accentColor="from-blue-600 via-blue-700 to-green-600"
          urgencyMessage="Offre Match 6 Nations"
          compact
        />

        {/* Related Events */}
        <RelatedEvents currentEventId="rugby" />
      </main>
      <Footer />
    </div>
  );
};

export default Tournoi6Nations;
