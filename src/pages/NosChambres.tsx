import { useState, useEffect, useRef } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Wifi, Tv, Snowflake, Bath, Briefcase, CupSoda, X } from "lucide-react";
import chambreDouble from "@/assets/chambre-double.jpg";
import chambreTwin from "@/assets/chambre-twin.jpg";
import chambreSuperieureBalcon from "@/assets/chambre-superieure-balcon.jpg";
import heroChambres from "@/assets/hero-chambres.jpg";

// Gallery images
import gallery1 from "@/assets/gallery/chambre-1.jpg";
import gallery2 from "@/assets/gallery/chambre-2.jpg";
import gallery3 from "@/assets/gallery/chambre-3.jpg";
import gallery4 from "@/assets/gallery/chambre-4.jpg";
import gallery5 from "@/assets/gallery/salle-de-bain.jpg";
import gallery6 from "@/assets/gallery/chambre-5.jpg";
import gallery7 from "@/assets/gallery/chambre-6.jpg";
import gallery8 from "@/assets/gallery/plateau-courtoisie.jpg";
import gallery9 from "@/assets/gallery/coin-salon.jpg";

const galleryImages = [
  { src: gallery1, alt: "Chambre avec vue" },
  { src: gallery2, alt: "Chambre double" },
  { src: gallery3, alt: "Balcon avec petit déjeuner" },
  { src: gallery4, alt: "Chambre twin" },
  { src: gallery5, alt: "Salle de bain moderne" },
  { src: gallery6, alt: "Chambre supérieure" },
  { src: gallery7, alt: "Chambre twin confort" },
  { src: gallery8, alt: "Plateau de courtoisie" },
  { src: gallery9, alt: "Coin salon" },
];

const rooms = [
  {
    name: "Chambre Double",
    description: "Lit de 160×200 cm. Profitez d'un espace élégant et confortable, idéal pour un séjour en couple ou en solo.",
    image: chambreDouble,
  },
  {
    name: "Chambre Twin",
    description: "2 lits de 100×200 cm. Parfaite pour les voyages entre amis ou collègues, avec tout le confort nécessaire.",
    image: chambreTwin,
  },
  {
    name: "Chambre Supérieure avec Balcon",
    description: "Profitez d'un espace extérieur privé avec vue sur Paris. Une expérience unique au cœur de la ville.",
    image: chambreSuperieureBalcon,
  },
  {
    name: "Chambres Communicantes",
    description: "2 chambres modulables avec portes communicantes. La solution idéale pour les familles ou groupes.",
    image: "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?w=600&h=400&fit=crop",
  },
];

const equipments = [
  { icon: Bath, label: "Salle d'eau privative" },
  { icon: Tv, label: "TV écran plat" },
  { icon: Briefcase, label: "Espace bureau" },
  { icon: Wifi, label: "Wi-Fi gratuit" },
  { icon: CupSoda, label: "Plateau de courtoisie" },
  { icon: Snowflake, label: "Climatisation" },
];

const NosChambres = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const galleryRef = useRef<HTMLDivElement>(null);

  const maxIndex = Math.max(0, rooms.length - 2); // Show 2 at a time

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleItems((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    const items = galleryRef.current?.querySelectorAll('[data-index]');
    items?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const prevImage = () => {
    setLightboxIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setLightboxIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };

  const currentRoom = rooms[currentIndex];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section with Image */}
      <section className="relative h-[60vh] min-h-[400px]">
        <img 
          src={heroChambres} 
          alt="Chambre Hôtel Inn Design Paris" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
          <div className="container mx-auto">
            <span className="inline-block bg-primary text-primary-foreground font-body uppercase tracking-[0.15em] text-sm px-4 py-2 rounded-full mb-4">
              Nos Hébergements
            </span>
            <h1 className="font-display text-3xl md:text-5xl lg:text-6xl text-white">
              Les chambres de l'Hôtel Inn Design Paris
            </h1>
          </div>
        </div>
      </section>

      {/* Text + Equipment Section */}
      <section className="py-16 bg-charcoal">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left: Text */}
            <div>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Profitez de 70 chambres lumineuses, insonorisées et tout confort, avec salle de bain équipée. En solo, en famille ou entre amis, tout est pensé pour votre bien-être, avec des chambres communicantes et une équipe aux petits soins. Idéalement situé, l'hôtel est le point de départ parfait pour découvrir Paris sans stress.
              </p>
            </div>

            {/* Right: Equipment */}
            <div className="grid grid-cols-2 gap-4">
              {equipments.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 text-foreground"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Room Carousel - Cards Layout */}
      <section className="py-20 bg-background overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
              Découvrez nos chambres
            </h2>
            <p className="text-muted-foreground">
              Faites défiler pour voir toutes nos catégories
            </p>
          </div>

          <div className="relative">
            {/* Navigation arrows */}
            <button
              onClick={goToPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-primary text-primary-foreground hover:bg-primary/90 p-4 rounded-full transition-all shadow-xl -translate-x-1/2 hidden md:flex"
              aria-label="Chambres précédentes"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-primary text-primary-foreground hover:bg-primary/90 p-4 rounded-full transition-all shadow-xl translate-x-1/2 hidden md:flex"
              aria-label="Chambres suivantes"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Cards container */}
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-out gap-6"
                style={{ transform: `translateX(-${currentIndex * 50}%)` }}
              >
                {rooms.map((room, index) => (
                  <div
                    key={index}
                    className="w-full md:w-[calc(50%-12px)] flex-shrink-0 group"
                  >
                    <div className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                      {/* Image */}
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <img
                          src={room.image}
                          alt={room.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      </div>
                      
                      {/* Content */}
                      <div className="p-6">
                        <h3 className="font-display text-2xl text-foreground mb-3 group-hover:text-primary transition-colors">
                          {room.name}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                          {room.description}
                        </p>
                        <Button variant="gold" className="w-full" asChild>
                          <a href="https://www.secure-hotel-booking.com/d-edge/Hotel-inn-Paris-Place-d-Italie/JJGV/fr-FR/DateSelection" target="_blank" rel="noopener noreferrer">
                            Réserver
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile navigation */}
            <div className="flex justify-center gap-4 mt-8 md:hidden">
              <button
                onClick={goToPrev}
                className="bg-primary text-primary-foreground p-3 rounded-full"
                aria-label="Précédent"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={goToNext}
                className="bg-primary text-primary-foreground p-3 rounded-full"
                aria-label="Suivant"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Progress indicators */}
            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-primary w-8"
                      : "bg-muted hover:bg-primary/50 w-2"
                  }`}
                  aria-label={`Aller à la position ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-20 bg-charcoal overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block bg-primary text-primary-foreground font-body uppercase tracking-[0.15em] text-sm px-4 py-2 rounded-full mb-4 animate-fade-in">
              Galerie Photo
            </span>
            <h2 className="font-display text-3xl md:text-4xl text-foreground animate-fade-in">
              Découvrez nos espaces
            </h2>
          </div>

          {/* Gallery Grid */}
          <div ref={galleryRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <button
                key={index}
                data-index={index}
                onClick={() => openLightbox(index)}
                className={`relative overflow-hidden rounded-xl group cursor-pointer transition-all duration-700 ${
                  index === 0 ? "col-span-2 row-span-2" : ""
                } ${
                  visibleItems.includes(index)
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 translate-y-8 scale-95"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={`${index === 0 ? "aspect-[4/3]" : "aspect-[4/3]"} h-full`}>
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium text-lg">
                    Voir
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
            aria-label="Fermer"
          >
            <X className="w-8 h-8" />
          </button>
          
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white p-3 hover:bg-white/10 rounded-full transition-colors"
            aria-label="Image précédente"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          
          <img
            src={galleryImages[lightboxIndex].src}
            alt={galleryImages[lightboxIndex].alt}
            className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg"
          />
          
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white p-3 hover:bg-white/10 rounded-full transition-colors"
            aria-label="Image suivante"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
          
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm">
            {lightboxIndex + 1} / {galleryImages.length}
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl text-primary-foreground mb-4">
            Réservez votre chambre dès maintenant
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Profitez de -10% en réservant directement sur notre site
          </p>
          <Button variant="outline" size="xl" className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
            Voir les disponibilités
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NosChambres;
