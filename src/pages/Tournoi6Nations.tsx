import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Train, Trophy, Users, Play, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import rugbyHero from "@/assets/rugby-france-irlande.jpg";
import tourEiffel from "@/assets/tour-eiffel.jpg";
import drapeauFrance from "@/assets/drapeau-france.png";
import drapeauIrlande from "@/assets/drapeau-irlande.png";
const Tournoi6Nations = () => {
  // Résultats des 10 derniers matchs France - Irlande
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

  // Composition probable des équipes
  const franceTeam = [
    { pos: "15", name: "T. Ramos", role: "Arrière" },
    { pos: "14", name: "D. Penaud", role: "Ailier" },
    { pos: "13", name: "G. Fickou", role: "Centre" },
    { pos: "12", name: "Y. Moefana", role: "Centre" },
    { pos: "11", name: "L. Bielle-Biarrey", role: "Ailier" },
    { pos: "10", name: "R. Ntamack", role: "Ouverture" },
    { pos: "9", name: "A. Dupont", role: "Mêlée" },
    { pos: "1", name: "C. Baille", role: "Pilier" },
    { pos: "2", name: "P. Mauvaka", role: "Talonneur" },
    { pos: "3", name: "U. Atonio", role: "Pilier" },
    { pos: "4", name: "T. Lavault", role: "2ème ligne" },
    { pos: "5", name: "E. Meafou", role: "2ème ligne" },
    { pos: "6", name: "F. Cros", role: "3ème ligne" },
    { pos: "7", name: "C. Ollivon", role: "3ème ligne" },
    { pos: "8", name: "G. Alldritt", role: "N°8" },
  ];

  const irelandTeam = [
    { pos: "15", name: "H. Keenan", role: "Arrière" },
    { pos: "14", name: "C. Nash", role: "Ailier" },
    { pos: "13", name: "G. Ringrose", role: "Centre" },
    { pos: "12", name: "B. Aki", role: "Centre" },
    { pos: "11", name: "J. Lowe", role: "Ailier" },
    { pos: "10", name: "J. Crowley", role: "Ouverture" },
    { pos: "9", name: "J. Gibson-Park", role: "Mêlée" },
    { pos: "1", name: "A. Porter", role: "Pilier" },
    { pos: "2", name: "D. Sheehan", role: "Talonneur" },
    { pos: "3", name: "T. Furlong", role: "Pilier" },
    { pos: "4", name: "J. McCarthy", role: "2ème ligne" },
    { pos: "5", name: "T. Beirne", role: "2ème ligne" },
    { pos: "6", name: "P. O'Mahony", role: "3ème ligne" },
    { pos: "7", name: "J. van der Flier", role: "3ème ligne" },
    { pos: "8", name: "C. Doris", role: "N°8" },
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
        <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
          <img
            src={rugbyHero}
            alt="Match France - Irlande au Stade de France"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 via-black/50 to-green-900/70" />
          
          <div className="absolute inset-0 flex items-end">
            <div className="container mx-auto px-4 pb-16">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-3 mb-4">
                  <span className="bg-blue-600 text-white px-3 py-1.5 rounded-full font-medium text-sm flex items-center gap-2">
                    <img src={drapeauFrance} alt="France" className="w-5 h-4 object-cover rounded-sm" /> France
                  </span>
                  <span className="text-white text-xl font-bold">VS</span>
                  <span className="bg-green-600 text-white px-3 py-1.5 rounded-full font-medium text-sm flex items-center gap-2">
                    <img src={drapeauIrlande} alt="Irlande" className="w-5 h-4 object-cover rounded-sm" /> Irlande
                  </span>
                </div>
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full mb-4">
                  <Trophy className="w-4 h-4" />
                  <span className="font-medium text-sm">Tournoi des 6 Nations 2025</span>
                </div>
                <h1 className="font-display text-4xl md:text-6xl text-white mb-4">
                  France vs Irlande
                </h1>
                <p className="text-white/90 text-lg md:text-xl mb-6">
                  Le choc au sommet du rugby européen au Stade de France
                </p>
                <div className="flex flex-wrap gap-4 text-white/90">
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                    <Calendar className="w-4 h-4" />
                    <span>8 Mars 2025</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                    <Clock className="w-4 h-4" />
                    <span>21h00</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                    <MapPin className="w-4 h-4" />
                    <span>Stade de France</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 bg-gradient-to-r from-blue-50 via-white to-green-50 dark:from-blue-950/20 dark:via-card dark:to-green-950/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center gap-4 mb-6">
                <img src={drapeauFrance} alt="France" className="w-8 h-6 object-cover rounded-sm shadow" />
                <h2 className="font-display text-3xl md:text-4xl text-foreground">
                  Un événement incontournable
                </h2>
                <img src={drapeauIrlande} alt="Irlande" className="w-8 h-6 object-cover rounded-sm shadow" />
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Organisé chaque année, le Tournoi des 6 Nations réunit les six grandes nations européennes du rugby : 
                la <strong className="text-blue-600 dark:text-blue-400">France</strong>, l'<strong className="text-foreground">Angleterre</strong>, 
                l'<strong className="text-foreground">Écosse</strong>, l'<strong className="text-green-600 dark:text-green-400">Irlande</strong>, 
                le <strong className="text-foreground">Pays de Galles</strong> et l'<strong className="text-foreground">Italie</strong>.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Cette compétition prestigieuse est l'occasion de vivre des moments d'intense émotion 
                et de découvrir le meilleur du rugby européen dans une ambiance électrique.
              </p>
              <div className="mt-8 p-6 bg-white dark:bg-card rounded-xl shadow-lg border border-border">
                <p className="text-foreground font-medium text-lg">
                  🏨 Supporters <span className="text-blue-600 dark:text-blue-400">français</span> et <span className="text-green-600 dark:text-green-400">irlandais</span>, notre hôtel vous accueille avec le même enthousiasme !
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Accès facile au stade */}
        <section className="py-16 bg-gradient-to-r from-blue-600 via-blue-700 to-green-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-display text-3xl md:text-4xl mb-6">
                Stade de France facilement accessible
              </h2>
              <p className="text-white/90 text-lg leading-relaxed mb-8">
                Depuis l'Hotel Inn Paris, rejoignez le Stade de France en toute simplicité grâce au métro. 
                Un trajet direct et rapide pour ne rien manquer du spectacle !
              </p>
              <div className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                <div className="flex items-center gap-2">
                  <Train className="w-6 h-6" />
                  <span className="font-bold">Ligne 13</span>
                </div>
                <div className="h-8 w-px bg-white/30" />
                <div>
                  <p className="font-bold">~35 min</p>
                  <p className="text-sm text-white/80">Place d'Italie → Saint-Denis</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vidéo match précédent */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-10">
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
                Revivez le dernier France - Irlande
              </h2>
              <p className="text-muted-foreground">
                Les meilleurs moments de la dernière confrontation entre ces deux équipes
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="aspect-video rounded-lg overflow-hidden shadow-2xl">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/qr7IeGFKoQo"
                  title="France vs Irlande - Highlights"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Compositions des équipes */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
                Compositions probables
              </h2>
              <p className="text-muted-foreground">Les XV de départ attendus pour cette rencontre</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* France */}
              <div className="bg-blue-600 rounded-lg overflow-hidden">
                <div className="p-4 flex items-center justify-center gap-3 border-b border-blue-500">
                  <img src={drapeauFrance} alt="France" className="w-7 h-5 object-cover rounded-sm" />
                  <h3 className="font-display text-2xl text-white">France</h3>
                </div>
                <div className="p-4">
                  <div className="grid grid-cols-3 gap-2">
                    {franceTeam.map((player, index) => (
                      <div key={index} className="bg-blue-700/50 p-2 rounded text-center">
                        <span className="text-blue-200 text-xs">{player.pos}</span>
                        <p className="text-white font-medium text-sm truncate">{player.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Irlande */}
              <div className="bg-green-600 rounded-lg overflow-hidden">
                <div className="p-4 flex items-center justify-center gap-3 border-b border-green-500">
                  <img src={drapeauIrlande} alt="Irlande" className="w-7 h-5 object-cover rounded-sm" />
                  <h3 className="font-display text-2xl text-white">Irlande</h3>
                </div>
                <div className="p-4">
                  <div className="grid grid-cols-3 gap-2">
                    {irelandTeam.map((player, index) => (
                      <div key={index} className="bg-green-700/50 p-2 rounded text-center">
                        <span className="text-green-200 text-xs">{player.pos}</span>
                        <p className="text-white font-medium text-sm truncate">{player.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Résultats des 10 derniers matchs */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
                Les 10 derniers France - Irlande
              </h2>
              <p className="text-muted-foreground">Historique des confrontations récentes</p>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="space-y-3">
                {previousMatches.map((match, index) => (
                  <div 
                    key={index} 
                    className={`flex items-center justify-between p-4 rounded-lg border ${
                      match.winner === 'france' 
                        ? 'bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-800' 
                        : 'bg-green-50 dark:bg-green-950/30 border-green-200 dark:border-green-800'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-bold text-foreground">{match.year}</span>
                      <span className="text-muted-foreground text-sm">{match.competition}</span>
                    </div>
                    <div className="text-center">
                      <p className={`font-bold ${
                        match.winner === 'france' ? 'text-blue-600 dark:text-blue-400' : 'text-green-600 dark:text-green-400'
                      }`}>
                        {match.result}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="text-muted-foreground text-sm">{match.venue}</span>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-muted rounded-lg text-center">
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Bilan :</strong> France 3 victoires - Irlande 7 victoires
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Lieux à visiter à Paris */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
                Profitez de votre séjour pour découvrir Paris
              </h2>
              <p className="text-muted-foreground">
                Des sites incontournables accessibles rapidement depuis notre hôtel
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {parisAttractions.map((attraction, index) => (
                <div key={index} className="group relative aspect-[4/3] overflow-hidden rounded-lg">
                  <img
                    src={attraction.image}
                    alt={attraction.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <h3 className="text-white font-medium text-sm md:text-base">{attraction.name}</h3>
                    <p className="text-white/80 text-xs flex items-center gap-1">
                      <Train className="w-3 h-3" /> {attraction.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-20 bg-gradient-to-r from-blue-600 via-primary to-green-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-display text-3xl md:text-4xl text-white mb-4">
              Réservez votre séjour pour le match
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Profitez de notre offre spéciale Tournoi des 6 Nations et vivez une expérience rugby inoubliable à Paris
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
                <a href="https://www.secure-hotel-booking.com/d-edge/Hotel-inn-Paris-Place-d-Italie/JJGV/fr-FR/DateSelection" target="_blank" rel="noopener noreferrer">
                  Réserver une chambre
                </a>
              </Button>
              <Link to="/reservation-seminaire">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Nous contacter
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Tournoi6Nations;
