import { useState, useEffect, useRef } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { RoomSection } from "@/components/RoomSection";
import { ChevronLeft, ChevronRight, Wifi, Tv, Snowflake, Bath, Briefcase, CupSoda, X, Accessibility, Heater } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { SEO } from "@/components/SEO";
import chambreDouble from "@/assets/chambre-double.webp";
import chambreTwin from "@/assets/chambre-twin.webp";
import chambreSuperieureBalcon from "@/assets/chambre-superieure-balcon.webp";
import heroChambres from "@/assets/hero-chambres.jpg";

// Gallery images
import gallery1 from "@/assets/gallery/chambre-1.jpg";
import gallery2 from "@/assets/gallery/chambre-2.webp";
import gallery3 from "@/assets/gallery/chambre-3.jpg";
import gallery4 from "@/assets/gallery/chambre-4.webp";
import gallery5 from "@/assets/gallery/salle-de-bain.jpg";
import gallery6 from "@/assets/gallery/chambre-5.jpg";
import gallery7 from "@/assets/gallery/chambre-6.jpg";
import gallery8 from "@/assets/gallery/plateau-courtoisie.jpg";
import gallery9 from "@/assets/gallery/coin-salon.jpg";

// Chambre Supérieure images
import superieure1 from "@/assets/gallery/superieure-1.webp";
import superieure2 from "@/assets/gallery/superieure-2.webp";
import superieure3 from "@/assets/gallery/superieure-3.webp";

const NosChambres = () => {
  const { t } = useLanguage();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const galleryRef = useRef<HTMLDivElement>(null);

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

  const roomsData = [
    {
      name: t('roomsPage.double.name'),
      details: t('roomsPage.double.details'),
      description: t('roomsPage.double.desc'),
      images: [
        { src: chambreDouble, alt: "Chambre Double - Vue d'ensemble" },
        { src: gallery2, alt: "Chambre Double - Détail" },
      ],
    },
    {
      name: t('roomsPage.twin.name'),
      details: t('roomsPage.twin.details'),
      description: t('roomsPage.twin.desc'),
      images: [
        { src: chambreTwin, alt: "Chambre Twin - Vue d'ensemble" },
        { src: gallery4, alt: "Chambre Twin - Détail" },
      ],
    },
    {
      name: t('roomsPage.superior.name'),
      details: t('roomsPage.superior.details'),
      description: t('roomsPage.superior.desc'),
      images: [
        { src: superieure1, alt: "Chambre Supérieure - Vue balcon" },
        { src: superieure2, alt: "Chambre Supérieure - Détail" },
        { src: superieure3, alt: "Chambre Supérieure - Intérieur" },
      ],
    },
    {
      name: t('roomsPage.connecting.name'),
      details: t('roomsPage.connecting.details'),
      description: t('roomsPage.connecting.desc'),
      images: [
        { src: gallery2, alt: "Chambres Communicantes - Vue 1" },
        { src: gallery4, alt: "Chambres Communicantes - Vue 2" },
      ],
    },
  ];

  const equipments = [
    { icon: Bath, label: t('rooms.bathroom') },
    { icon: Tv, label: t('rooms.tv') },
    { icon: Briefcase, label: t('rooms.desk') },
    { icon: Wifi, label: t('rooms.wifi') },
    { icon: CupSoda, label: t('rooms.courtesy') },
    { icon: Snowflake, label: t('rooms.ac') },
    { icon: Heater, label: t('rooms.heating') },
    { icon: Accessibility, label: t('rooms.pmr') },
  ];

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

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Nos Chambres - Hôtel Inn Design Paris"
        description="Découvrez nos chambres confortables à Paris 13ème : chambre double, twin, supérieure avec balcon. WiFi gratuit, climatisation, TV écran plat."
        canonical="/nos-chambres"
      />
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
              {t('roomsPage.badge')}
            </span>
            <h1 className="font-display text-3xl md:text-5xl lg:text-6xl text-white">
              {t('roomsPage.title')}
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
                {t('roomsPage.intro')}
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

      {/* Nos Chambres - Layout style Séminaires */}
      <section className="bg-background">
        {/* Section header */}
        <div className="py-16 bg-charcoal">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <span className="text-primary font-medium text-sm uppercase tracking-[0.2em]">{t('roomsPage.ourRooms')}</span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mt-3">
                {t('roomsPage.discover')}
              </h2>
            </div>
          </div>
        </div>
        
        {/* Rooms list with alternating backgrounds */}
        <div className="space-y-12 py-12">
          {roomsData.map((room, index) => {
            const bgColors = ['bg-muted/30', 'bg-charcoal', 'bg-muted/50', 'bg-charcoal/80'];
            return (
              <div key={index} className={`${bgColors[index % bgColors.length]} rounded-lg mx-4 lg:mx-8`}>
                <RoomSection room={room} reverse={index % 2 === 1} />
              </div>
            );
          })}
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-20 bg-charcoal overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block bg-primary text-primary-foreground font-body uppercase tracking-[0.15em] text-sm px-4 py-2 rounded-full mb-4 animate-fade-in">
              {t('roomsPage.gallery')}
            </span>
            <h2 className="font-display text-3xl md:text-4xl text-foreground animate-fade-in">
              {t('roomsPage.spaces')}
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
                    {t('roomsPage.view')}
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
            {t('roomsPage.cta.title')}
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            {t('roomsPage.cta.subtitle')}
          </p>
          <a
            href="https://www.secure-hotel-booking.com/d-edge/Hotel-inn-Paris-Place-d-Italie/JJGV/fr-FR/DateSelection"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" size="xl" className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              {t('roomsPage.cta.button')}
            </Button>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NosChambres;
