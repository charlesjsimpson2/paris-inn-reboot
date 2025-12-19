import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Train, Leaf, Users, Clock, Utensils, TreeDeciduous, Hotel } from "lucide-react";
import { Link } from "react-router-dom";

// Photos de l'hôtel
import hotelReception from "@/assets/hotel-reception.jpg";
import chambre1 from "@/assets/gallery/chambre-1.jpg";
import chambre2 from "@/assets/gallery/chambre-2.jpg";
import salleDeBain from "@/assets/gallery/salle-de-bain.jpg";
import petitDejeuner from "@/assets/petit-dejeuner.jpg";
import vueBalcon from "@/assets/vue-balcon-paris.jpg";
const SalonAgriculture = () => {
  const otherSalons = [
    { 
      name: "Salon Mondial du Tourisme", 
      date: "Mars 2025",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=300&fit=crop"
    },
    { 
      name: "Salon de la Plongée", 
      date: "Janvier 2026",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop"
    },
    { 
      name: "Salon du Chocolat", 
      date: "Octobre 2025",
      image: "https://images.unsplash.com/photo-1481391319762-47dff72954d9?w=400&h=300&fit=crop"
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=1920&h=1080&fit=crop"
            alt="Salon de l'Agriculture - Vaches dans un pré"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 via-green-800/60 to-amber-900/70" />
          
          <div className="absolute inset-0 flex items-end">
            <div className="container mx-auto px-4 pb-16">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-full mb-4">
                  <Leaf className="w-4 h-4" />
                  <span className="font-medium text-sm">Salon International</span>
                </div>
                <h1 className="font-display text-4xl md:text-6xl text-white mb-4">
                  🐄 Salon de l'Agriculture 2025
                </h1>
                <p className="text-white/90 text-lg md:text-xl mb-6">
                  La plus grande ferme de France s'installe à Paris
                </p>
                <div className="flex flex-wrap gap-4 text-white/90">
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                    <Calendar className="w-4 h-4" />
                    <span>22 Février - 2 Mars 2025</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                    <MapPin className="w-4 h-4" />
                    <span>Porte de Versailles</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Présentation */}
        <section className="py-16 bg-gradient-to-br from-green-50 via-white to-amber-50 dark:from-green-950/20 dark:via-card dark:to-amber-950/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Leaf className="w-8 h-8 text-green-600" />
                <h2 className="font-display text-3xl md:text-4xl text-foreground">
                  Un événement incontournable
                </h2>
                <TreeDeciduous className="w-8 h-8 text-green-600" />
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Le <strong className="text-green-700 dark:text-green-400">Salon International de l'Agriculture</strong> est 
                un événement parisien bien connu de tous les Français. Chaque année, cette grande foire agricole 
                réunit plus de <strong className="text-foreground">600 000 visiteurs</strong> au Parc des Expositions 
                de la Porte de Versailles.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                L'objectif du célèbre Salon est de <strong className="text-foreground">valoriser les produits agricoles</strong> français 
                et de faire découvrir au grand public des <strong className="text-foreground">produits locaux</strong> et 
                des <strong className="text-foreground">animaux d'élevage</strong>. Une immersion unique dans le monde agricole 
                sous toutes ses facettes !
              </p>
            </div>
          </div>
        </section>

        {/* Accès depuis l'hôtel */}
        <section className="py-16 bg-gradient-to-r from-green-600 via-green-700 to-amber-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="font-display text-3xl md:text-4xl mb-4">
                  Accès facile depuis l'Hotel Inn Paris
                </h2>
                <p className="text-white/90 text-lg">
                  Rejoignez le Salon en toute simplicité grâce aux transports en commun
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <Train className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl">En Métro</h3>
                      <p className="text-white/80 text-sm">~25 minutes</p>
                    </div>
                  </div>
                  <p className="text-white/90 text-sm leading-relaxed">
                    <strong>Ligne 7</strong> depuis Place d'Italie jusqu'à <strong>Porte de Versailles</strong> 
                    (correspondance ligne 12). Trajet direct et rapide !
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl">Horaires du Salon</h3>
                      <p className="text-white/80 text-sm">9h - 19h</p>
                    </div>
                  </div>
                  <p className="text-white/90 text-sm leading-relaxed">
                    Ouvert tous les jours de <strong>9h à 19h</strong>. 
                    Nocturne le vendredi jusqu'à 23h. Arrivez tôt pour éviter la foule !
                  </p>
                </div>
              </div>

              <div className="mt-8 text-center">
                <div className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                  <MapPin className="w-6 h-6" />
                  <div className="text-left">
                    <p className="font-bold">Parc des Expositions</p>
                    <p className="text-sm text-white/80">1 Place de la Porte de Versailles, 75015 Paris</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pourquoi séjourner chez nous */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
                Votre confort après une journée au Salon
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Profitez d'un hébergement de qualité pour vous ressourcer après avoir arpenté les allées du Salon
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="bg-card rounded-xl p-6 border border-border text-center">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Utensils className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-display text-xl text-foreground mb-2">Petit-déjeuner copieux</h3>
                <p className="text-muted-foreground text-sm">
                  Buffet généreux avec produits frais pour bien commencer votre journée de visite
                </p>
              </div>

              <div className="bg-card rounded-xl p-6 border border-border text-center">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Train className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-display text-xl text-foreground mb-2">Proximité transports</h3>
                <p className="text-muted-foreground text-sm">
                  Métro à 2 minutes à pied pour rejoindre facilement la Porte de Versailles
                </p>
              </div>

              <div className="bg-card rounded-xl p-6 border border-border text-center">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-display text-xl text-foreground mb-2">Accueil chaleureux</h3>
                <p className="text-muted-foreground text-sm">
                  Notre équipe vous conseille sur les meilleures heures de visite et itinéraires
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Galerie de l'hôtel */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 mb-4">
                <Hotel className="w-6 h-6 text-primary" />
              </div>
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
                Découvrez notre hôtel
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Un cadre confortable et élégant pour vous ressourcer après vos journées au Salon
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
              <div className="group relative aspect-[4/3] overflow-hidden rounded-xl col-span-2 md:col-span-1 md:row-span-2">
                <img
                  src={hotelReception}
                  alt="Réception de l'hôtel"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-white font-medium">Notre réception</p>
                </div>
              </div>

              <div className="group relative aspect-[4/3] overflow-hidden rounded-xl">
                <img
                  src={chambre1}
                  alt="Chambre confortable"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="group relative aspect-[4/3] overflow-hidden rounded-xl">
                <img
                  src={chambre2}
                  alt="Chambre double"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="group relative aspect-[4/3] overflow-hidden rounded-xl">
                <img
                  src={salleDeBain}
                  alt="Salle de bain moderne"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="group relative aspect-[4/3] overflow-hidden rounded-xl">
                <img
                  src={petitDejeuner}
                  alt="Petit-déjeuner buffet"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="group relative aspect-[4/3] overflow-hidden rounded-xl col-span-2 md:col-span-1">
                <img
                  src={vueBalcon}
                  alt="Vue depuis le balcon"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-white font-medium">Vue sur Paris</p>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <Link to="/nos-chambres">
                <Button variant="outline" size="lg" className="font-medium">
                  Voir toutes nos chambres
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Autres salons */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
                Autres salons à la Porte de Versailles
              </h2>
              <p className="text-muted-foreground">
                Découvrez les autres événements majeurs près de notre hôtel
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {otherSalons.map((salon, index) => (
                <div key={index} className="group relative aspect-[4/3] overflow-hidden rounded-xl">
                  <img
                    src={salon.image}
                    alt={salon.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-display text-lg">{salon.name}</h3>
                    <p className="text-white/80 text-sm flex items-center gap-2">
                      <Calendar className="w-4 h-4" /> {salon.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-20 bg-gradient-to-r from-green-600 via-green-700 to-amber-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-display text-3xl md:text-4xl text-white mb-4">
              Réservez votre séjour pour le Salon
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Profitez de notre emplacement idéal et de notre confort pour vivre pleinement le Salon de l'Agriculture
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://www.booking.com" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button size="lg" className="bg-white text-green-700 hover:bg-white/90 font-bold shadow-xl">
                  Réserver maintenant
                </Button>
              </a>
              <Link to="/contact">
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

export default SalonAgriculture;
