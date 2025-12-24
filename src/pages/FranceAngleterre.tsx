import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Train, Trophy, Clock, Car, Ticket, Hotel, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { RelatedEvents } from "@/components/RelatedEvents";
import { useState, useEffect } from "react";

import franceAngleterreHero from "@/assets/france-angleterre-match.png";

const drapeauFrance = "https://flagcdn.com/w80/fr.png";
const drapeauAngleterre = "https://flagcdn.com/w80/gb-eng.png";

// Date du match : 14 Mars 2026 à 20h10
const MATCH_DATE = new Date("2026-03-14T20:10:00");

const useCountdown = (targetDate: Date) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return timeLeft;
};

const FranceAngleterre = () => {
  const { t } = useLanguage();
  const countdown = useCountdown(MATCH_DATE);

  const previousMatches = [
    { year: "2024", competition: "6 Nations", result: "France 33 - 31 Angleterre", venue: "Lyon", winner: "france" },
    { year: "2023", competition: "Coupe du Monde", result: "France 28 - 29 Angleterre", venue: "Paris", winner: "england" },
    { year: "2023", competition: "6 Nations", result: "Angleterre 10 - 53 France", venue: "Londres", winner: "france" },
    { year: "2022", competition: "6 Nations", result: "France 25 - 13 Angleterre", venue: "Paris", winner: "france" },
    { year: "2021", competition: "6 Nations", result: "Angleterre 23 - 20 France", venue: "Londres", winner: "england" },
    { year: "2020", competition: "6 Nations", result: "France 24 - 17 Angleterre", venue: "Paris", winner: "france" },
    { year: "2019", competition: "6 Nations", result: "Angleterre 44 - 8 France", venue: "Londres", winner: "england" },
    { year: "2018", competition: "6 Nations", result: "France 22 - 16 Angleterre", venue: "Paris", winner: "france" },
    { year: "2017", competition: "6 Nations", result: "Angleterre 19 - 16 France", venue: "Londres", winner: "england" },
    { year: "2016", competition: "6 Nations", result: "France 21 - 31 Angleterre", venue: "Paris", winner: "england" },
  ];

  const franceTeam = [
    { pos: "15", name: "T. Ramos" }, { pos: "14", name: "D. Penaud" }, { pos: "13", name: "G. Fickou" },
    { pos: "12", name: "Y. Moefana" }, { pos: "11", name: "L. Bielle-Biarrey" }, { pos: "10", name: "R. Ntamack" },
    { pos: "9", name: "A. Dupont" }, { pos: "1", name: "C. Baille" }, { pos: "2", name: "P. Mauvaka" },
    { pos: "3", name: "U. Atonio" }, { pos: "4", name: "T. Lavault" }, { pos: "5", name: "E. Meafou" },
    { pos: "6", name: "F. Cros" }, { pos: "7", name: "C. Ollivon" }, { pos: "8", name: "G. Alldritt" },
  ];

  const englandTeam = [
    { pos: "15", name: "F. Steward" }, { pos: "14", name: "I. Feyi-Waboso" }, { pos: "13", name: "O. Lawrence" },
    { pos: "12", name: "H. Slade" }, { pos: "11", name: "T. Freeman" }, { pos: "10", name: "M. Smith" },
    { pos: "9", name: "B. Spencer" }, { pos: "1", name: "E. Genge" }, { pos: "2", name: "J. George" },
    { pos: "3", name: "W. Stuart" }, { pos: "4", name: "M. Itoje" }, { pos: "5", name: "G. Martin" },
    { pos: "6", name: "C. Cunningham-South" }, { pos: "7", name: "T. Curry" }, { pos: "8", name: "B. Earl" },
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
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-800 via-slate-100 to-red-700" />
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,hsl(var(--foreground))_1px,transparent_1px),radial-gradient(circle_at_80%_70%,hsl(var(--foreground))_1px,transparent_1px)] bg-[length:50px_50px]" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-10 items-center">
                {/* Image sur le côté */}
                <div className="flex justify-center order-2 md:order-1">
                  <div className="relative group">
                    <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-white to-red-500 rounded-3xl blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
                    <img 
                      src={franceAngleterreHero} 
                      alt="France vs Angleterre" 
                      className="relative w-full max-w-md rounded-2xl shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-500" 
                    />
                  </div>
                </div>
                
                {/* Texte */}
                <div className="text-center md:text-left order-1 md:order-2">
                  <div className="inline-flex items-center gap-3 mb-4">
                    <span className="bg-blue-600 text-white px-3 py-1.5 rounded-full font-medium text-sm flex items-center gap-2">
                      <img src={drapeauFrance} alt="France" className="w-5 h-4 object-cover rounded-sm" /> France
                    </span>
                    <span className="text-slate-800 text-xl font-bold">VS</span>
                    <span className="bg-red-600 text-white px-3 py-1.5 rounded-full font-medium text-sm flex items-center gap-2">
                      <img src={drapeauAngleterre} alt="Angleterre" className="w-5 h-4 object-cover rounded-sm" /> Angleterre
                    </span>
                  </div>
                  <div className="inline-flex items-center gap-2 bg-slate-900/80 backdrop-blur-sm text-white px-4 py-2 rounded-full mb-4">
                    <Trophy className="w-4 h-4" />
                    <span className="font-medium text-sm">Tournoi des 6 Nations 2026</span>
                  </div>
                  <h1 className="font-display text-4xl md:text-6xl text-slate-900 mb-4">France vs Angleterre</h1>
                  <p className="text-slate-700 text-lg md:text-xl mb-6">Le Crunch - La rivalité légendaire du rugby européen</p>
                  <div className="flex flex-wrap justify-center md:justify-start gap-3 text-slate-700">
                    <div className="flex items-center gap-2 bg-slate-900/80 text-white backdrop-blur-sm px-4 py-2 rounded-full">
                      <Calendar className="w-4 h-4" /><span>14 Mars 2026</span>
                    </div>
                    <div className="flex items-center gap-2 bg-slate-900/80 text-white backdrop-blur-sm px-4 py-2 rounded-full">
                      <Clock className="w-4 h-4" /><span>20h10</span>
                    </div>
                    <div className="flex items-center gap-2 bg-slate-900/80 text-white backdrop-blur-sm px-4 py-2 rounded-full">
                      <MapPin className="w-4 h-4" /><span>Stade de France</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Compte à rebours */}
        <section className="py-10 bg-gradient-to-r from-blue-900 via-slate-900 to-red-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-6">
              <h2 className="font-display text-2xl md:text-3xl text-white mb-2">Coup d'envoi dans</h2>
            </div>
            <div className="flex justify-center gap-4 md:gap-8">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 md:w-24 md:h-24 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30">
                  <span className="text-2xl md:text-4xl font-bold text-white">{countdown.days}</span>
                </div>
                <span className="text-white/80 text-sm mt-2">Jours</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 md:w-24 md:h-24 bg-slate-700 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-2xl md:text-4xl font-bold text-white">{countdown.hours}</span>
                </div>
                <span className="text-white/80 text-sm mt-2">Heures</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 md:w-24 md:h-24 bg-slate-700 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-2xl md:text-4xl font-bold text-white">{countdown.minutes}</span>
                </div>
                <span className="text-white/80 text-sm mt-2">Minutes</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 md:w-24 md:h-24 bg-red-600 rounded-xl flex items-center justify-center shadow-lg shadow-red-500/30">
                  <span className="text-2xl md:text-4xl font-bold text-white">{countdown.seconds}</span>
                </div>
                <span className="text-white/80 text-sm mt-2">Secondes</span>
              </div>
            </div>
          </div>
        </section>

        {/* Offres exclusives hôtel - DÉPLACÉ EN PREMIER */}
        <section className="py-16 bg-gradient-to-br from-blue-100 via-white to-red-100 dark:from-blue-950/30 dark:via-card dark:to-red-950/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
                  <Hotel className="w-5 h-5" />
                  <span className="font-semibold">Séjournez près du match</span>
                </div>
                <h2 className="font-display text-3xl md:text-4xl text-foreground mb-2">Nos offres exclusives</h2>
                <p className="text-muted-foreground">Pour les supporters du Crunch France - Angleterre</p>
              </div>

              {/* Avantage hébergement */}
              <div className="bg-white dark:bg-card rounded-2xl p-8 shadow-xl border-2 border-primary/20 mb-8">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-10 h-10 text-primary" />
                  </div>
                  <div className="text-center md:text-left flex-1">
                    <h3 className="font-display text-2xl text-foreground mb-2">Moins de transport, plus de rugby !</h3>
                    <p className="text-muted-foreground mb-4">
                      En séjournant à l'Hôtel Inn Design Paris, vous profitez d'un emplacement idéal à seulement 30 minutes du Stade de France. 
                      Évitez le stress des transports de dernière minute et profitez pleinement de l'ambiance d'avant-match dans la capitale.
                    </p>
                    <p className="text-sm text-primary font-medium">
                      Chambres disponibles à partir de 89€ la nuit - Petit-déjeuner inclus sur demande
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {/* Parking */}
                <div className="bg-white dark:bg-card rounded-2xl p-6 shadow-xl border-2 border-blue-200 dark:border-blue-800/50 hover:scale-105 transition-transform duration-300">
                  <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
                    <Car className="w-7 h-7 text-blue-600" />
                  </div>
                  <h3 className="font-display text-xl text-foreground mb-2">Parking privé</h3>
                  <p className="text-muted-foreground text-sm mb-4">Stationnez en toute sécurité pendant votre séjour</p>
                  <div className="inline-block bg-blue-600 text-white font-bold text-lg px-4 py-2 rounded-full">15€ / nuit</div>
                </div>

                {/* Taxi */}
                <div className="bg-white dark:bg-card rounded-2xl p-6 shadow-xl border-2 border-red-200 dark:border-red-800/50 hover:scale-105 transition-transform duration-300">
                  <div className="w-14 h-14 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mb-4">
                    <Ticket className="w-7 h-7 text-red-600" />
                  </div>
                  <h3 className="font-display text-xl text-foreground mb-2">Service Taxi</h3>
                  <p className="text-muted-foreground text-sm mb-4">Aller et retour vers le Stade de France</p>
                  <div className="inline-block bg-red-600 text-white font-bold text-lg px-4 py-2 rounded-full">-10%</div>
                </div>

                {/* Accès facile */}
                <div className="bg-white dark:bg-card rounded-2xl p-6 shadow-xl border-2 border-slate-200 dark:border-slate-800/50 hover:scale-105 transition-transform duration-300">
                  <div className="w-14 h-14 bg-slate-100 dark:bg-slate-900/30 rounded-full flex items-center justify-center mb-4">
                    <Train className="w-7 h-7 text-slate-600" />
                  </div>
                  <h3 className="font-display text-xl text-foreground mb-2">Métro direct</h3>
                  <p className="text-muted-foreground text-sm mb-4">Ligne 13 vers le Stade de France</p>
                  <div className="inline-block bg-slate-600 text-white font-bold text-lg px-4 py-2 rounded-full">~30 min</div>
                </div>
              </div>

              <p className="text-center text-sm text-muted-foreground mt-6 italic">* Offres réservées aux clients séjournant pendant le week-end du match</p>
            </div>
          </div>
        </section>

        {/* CTA Réservation - DÉPLACÉ EN PREMIER */}
        <section className="py-20 bg-blue-700">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-display text-3xl md:text-4xl text-white mb-4">Réservez votre séjour pour le Crunch</h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">Profitez des meilleures conditions pour vivre ce match légendaire entre la France et l'Angleterre</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
                <a href="https://www.secure-hotel-booking.com/d-edge/Hotel-inn-Paris-Place-d-Italie/JJGV/fr-FR/DateSelection" target="_blank" rel="noopener noreferrer">Réserver maintenant</a>
              </Button>
              <Link to="/reservation-seminaire"><Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">Nous contacter</Button></Link>
            </div>
          </div>
        </section>

        {/* Présentation du match */}
        <section className="py-16 bg-gradient-to-r from-blue-50 via-white to-red-50 dark:from-blue-950/20 dark:via-card dark:to-red-950/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center gap-4 mb-6">
                <img src={drapeauFrance} alt="France" className="w-10 h-7 object-cover rounded-sm shadow" />
                <h2 className="font-display text-3xl md:text-4xl text-foreground">Le Crunch : Une rivalité légendaire</h2>
                <img src={drapeauAngleterre} alt="Angleterre" className="w-10 h-7 object-cover rounded-sm shadow" />
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Le <strong>"Crunch"</strong> est le nom donné à cette confrontation mythique entre la <strong>France</strong> et l'<strong>Angleterre</strong>. 
                Depuis plus d'un siècle, ces deux nations s'affrontent dans des matchs d'une intensité inégalée, 
                faisant de cette rencontre l'une des plus attendues du rugby mondial.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Avec 104 confrontations au compteur, la France et l'Angleterre ont écrit les plus belles pages de l'histoire du rugby. 
                Ce match au Stade de France promet une nouvelle fois un spectacle exceptionnel.
              </p>
              <div className="mt-8 p-6 bg-white dark:bg-card rounded-xl shadow-lg border border-border">
                <p className="text-foreground font-medium text-lg">🏨 Supporters français et anglais, notre hôtel vous accueille à bras ouverts !</p>
              </div>
            </div>
          </div>
        </section>

        {/* Présentation des équipes */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">Les Équipes</h2>
              <p className="text-muted-foreground">Découvrez les deux nations qui s'affronteront</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* France */}
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl overflow-hidden shadow-xl">
                <div className="relative h-48">
                  <img src="https://images.unsplash.com/photo-1461896836934- voices-of-courage?w=800&h=400&fit=crop" alt="Équipe de France" className="w-full h-full object-cover opacity-60" />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-800 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-3">
                      <img src={drapeauFrance} alt="France" className="w-12 h-8 object-cover rounded shadow" />
                      <div>
                        <h3 className="font-display text-2xl text-white">XV de France</h3>
                        <p className="text-blue-200 text-sm">Fédération Française de Rugby</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6 text-white">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-blue-700/50 p-3 rounded-lg text-center">
                      <p className="text-3xl font-bold">6</p>
                      <p className="text-xs text-blue-200">Grands Chelems</p>
                    </div>
                    <div className="bg-blue-700/50 p-3 rounded-lg text-center">
                      <p className="text-3xl font-bold">17</p>
                      <p className="text-xs text-blue-200">Titres 6 Nations</p>
                    </div>
                  </div>
                  <p className="text-sm text-blue-100">
                    Menée par Antoine Dupont, considéré comme le meilleur joueur du monde, 
                    l'équipe de France affiche ses ambitions et vise le Grand Chelem.
                  </p>
                </div>
              </div>

              {/* Angleterre */}
              <div className="bg-gradient-to-br from-red-600 to-red-800 rounded-2xl overflow-hidden shadow-xl">
                <div className="relative h-48">
                  <img src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=400&fit=crop" alt="Équipe d'Angleterre" className="w-full h-full object-cover opacity-60" />
                  <div className="absolute inset-0 bg-gradient-to-t from-red-800 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-3">
                      <img src={drapeauAngleterre} alt="Angleterre" className="w-12 h-8 object-cover rounded shadow" />
                      <div>
                        <h3 className="font-display text-2xl text-white">XV de la Rose</h3>
                        <p className="text-red-200 text-sm">Rugby Football Union</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6 text-white">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-red-700/50 p-3 rounded-lg text-center">
                      <p className="text-3xl font-bold">13</p>
                      <p className="text-xs text-red-200">Grands Chelems</p>
                    </div>
                    <div className="bg-red-700/50 p-3 rounded-lg text-center">
                      <p className="text-3xl font-bold">29</p>
                      <p className="text-xs text-red-200">Titres 6 Nations</p>
                    </div>
                  </div>
                  <p className="text-sm text-red-100">
                    L'Angleterre, nation historique du rugby et championne du monde 2003, 
                    reste une équipe redoutable emmenée par Maro Itoje et Marcus Smith.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Compositions probables */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">Compositions probables</h2>
              <p className="text-muted-foreground">Les XV attendus pour ce Crunch</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-blue-600 rounded-lg overflow-hidden">
                <div className="p-4 flex items-center justify-center gap-3 border-b border-blue-500">
                  <img src={drapeauFrance} alt="France" className="w-7 h-5 object-cover rounded-sm" />
                  <h3 className="font-display text-2xl text-white">France</h3>
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
              <div className="bg-red-600 rounded-lg overflow-hidden">
                <div className="p-4 flex items-center justify-center gap-3 border-b border-red-500">
                  <img src={drapeauAngleterre} alt="Angleterre" className="w-7 h-5 object-cover rounded-sm" />
                  <h3 className="font-display text-2xl text-white">Angleterre</h3>
                </div>
                <div className="p-4 grid grid-cols-3 gap-2">
                  {englandTeam.map((player, i) => (
                    <div key={i} className="bg-red-700/50 p-2 rounded text-center">
                      <span className="text-red-200 text-xs">{player.pos}</span>
                      <p className="text-white font-medium text-sm truncate">{player.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Historique des confrontations */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">10 dernières confrontations</h2>
              <p className="text-muted-foreground">L'histoire d'une rivalité intense</p>
            </div>
            <div className="max-w-3xl mx-auto space-y-3">
              {previousMatches.map((match, i) => (
                <div key={i} className={`flex items-center justify-between p-4 rounded-lg border ${match.winner === 'france' ? 'bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-800' : 'bg-red-50 dark:bg-red-950/30 border-red-200 dark:border-red-800'}`}>
                  <div className="flex items-center gap-3"><span className="font-bold text-foreground">{match.year}</span><span className="text-muted-foreground text-sm">{match.competition}</span></div>
                  <p className={`font-bold ${match.winner === 'france' ? 'text-blue-600 dark:text-blue-400' : 'text-red-600 dark:text-red-400'}`}>{match.result}</p>
                  <span className="text-muted-foreground text-sm">{match.venue}</span>
                </div>
              ))}
              <div className="mt-6 p-4 bg-muted rounded-lg text-center">
                <p className="text-muted-foreground"><strong className="text-foreground">Bilan sur 10 matchs :</strong> France 5 victoires - Angleterre 5 victoires</p>
              </div>
            </div>
          </div>
        </section>

        {/* Découvrir Paris */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">Profitez de Paris</h2>
              <p className="text-muted-foreground">Prolongez votre week-end rugby par une visite de la capitale</p>
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

        {/* Related Events */}
        <RelatedEvents currentEventId="france-angleterre" />
      </main>
      <Footer />
    </div>
  );
};

export default FranceAngleterre;
