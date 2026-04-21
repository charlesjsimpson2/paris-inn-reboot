import { useState, useEffect, useRef } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Coffee, Croissant, Apple, Egg, Clock, Users, ChevronLeft, ChevronRight, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { SEO } from "@/components/SEO";

import salle1 from "@/assets/breakfast/salle-1.webp";
import salle2 from "@/assets/breakfast/salle-2.webp";
import buffet1 from "@/assets/breakfast/buffet-1.webp";
import balcon from "@/assets/breakfast/balcon.webp";
import petitDejeuner from "@/assets/breakfast/petit-dejeuner.webp";
import tablePetitDejeuner from "@/assets/breakfast/table-petit-dejeuner.webp";
import heroPetitDejeuner from "@/assets/breakfast/hero-petit-dejeuner.webp";

const PetitDejeuner = () => {
  const { t } = useLanguage();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const galleryRef = useRef<HTMLDivElement>(null);

  const features = [
    { icon: Coffee, label: t('breakfastPage.hotDrinks') },
    { icon: Croissant, label: t('breakfastPage.pastries') },
    { icon: Apple, label: t('breakfastPage.fruits') },
    { icon: Egg, label: t('breakfastPage.savory') },
  ];

  const galleryImages = [
    { src: tablePetitDejeuner, alt: t('breakfastPage.gallery.complete') },
    { src: buffet1, alt: t('breakfastPage.gallery.buffet') },
    { src: salle1, alt: t('breakfastPage.gallery.room1') },
    { src: salle2, alt: t('breakfastPage.gallery.room2') },
    { src: balcon, alt: t('breakfastPage.gallery.balcony') },
    { src: petitDejeuner, alt: t('breakfastPage.gallery.variety') },
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
        title={t('seo.breakfast.title')}
        description={t('seo.breakfast.description')}
        pageKey="breakfast"
      />
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px]">
        <img 
          src={heroPetitDejeuner} 
          alt={t('breakfastPage.heroAlt')} 
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
          <div className="container mx-auto">
            <span className="inline-block bg-primary text-primary-foreground font-body uppercase tracking-[0.15em] text-sm px-4 py-2 mb-4">
              {t('breakfastPage.badge')}
            </span>
            <h1 className="font-display text-3xl md:text-5xl lg:text-6xl text-white">
              {t('breakfastPage.title')}
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content Side */}
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed text-lg">
                {t('breakfastPage.intro1')}
              </p>

              <p className="text-muted-foreground leading-relaxed">
                {t('breakfastPage.intro2')}
              </p>

              <p className="text-foreground font-medium text-lg">
                {t('breakfastPage.enjoy')}
              </p>

              <p className="text-primary font-medium italic">
                {t('breakfastPage.glutenFree')}
              </p>

              {/* Info boxes - Horaires */}
              <div className="bg-secondary/30 rounded-xl border border-border/50 p-6 pt-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-display text-lg text-foreground">{t('breakfastPage.hours')}</h3>
                </div>
                <div className="space-y-3 ml-13">
                  <div className="flex justify-between items-center py-2 border-b border-border/30">
                    <span className="text-muted-foreground">{t('breakfastPage.mondayFriday')}</span>
                    <span className="font-medium text-foreground">06:30 – 10:00</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border/30">
                    <span className="text-muted-foreground">{t('breakfastPage.saturdaySunday')}</span>
                    <span className="font-medium text-foreground">07:00 – 10:30</span>
                  </div>
                </div>
              </div>

              {/* Info boxes - Formule et Gratuité */}
              <div className="grid sm:grid-cols-2 gap-4 pt-4">
                <div className="flex items-center gap-4 p-4 bg-secondary/30 rounded-xl border border-border/50">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{t('breakfastPage.formula')}</p>
                    <p className="font-medium text-foreground">{t('breakfastPage.formulaValue')}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-primary/10 rounded-xl border border-primary/30">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-primary font-bold text-lg">🎁</span>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{t('breakfastPage.children')}</p>
                    <p className="font-medium text-primary">{t('breakfastPage.childrenFree')}</p>
                  </div>
                </div>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center gap-2 p-4 bg-background rounded-xl border border-border/50 shadow-sm"
                  >
                    <feature.icon className="w-6 h-6 text-primary" />
                    <span className="text-sm text-muted-foreground text-center">
                      {feature.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Image Side */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={buffet1}
                  alt={t('breakfastPage.buffetAlt')}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary/10 rounded-full -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-charcoal">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block bg-primary text-primary-foreground font-body uppercase tracking-[0.15em] text-sm px-4 py-2 rounded-full mb-4">
              {t('breakfastPage.gallery')}
            </span>
            <h2 className="font-display text-3xl md:text-4xl text-foreground">
              {t('breakfastPage.space')}
            </h2>
          </div>

          {/* Gallery Grid */}
          <div ref={galleryRef} className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <button
                key={index}
                data-index={index}
                onClick={() => openLightbox(index)}
                className={`relative overflow-hidden rounded-xl group cursor-pointer transition-all duration-700 ${
                  visibleItems.includes(index)
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 translate-y-8 scale-95"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="aspect-[4/3]">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium text-lg">
                    {t('breakfastPage.view')}
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
            aria-label={t('breakfastPage.close')}
          >
            <X className="w-8 h-8" />
          </button>
          
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white p-3 hover:bg-white/10 rounded-full transition-colors"
            aria-label={t('breakfastPage.prevImage')}
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
            aria-label={t('breakfastPage.nextImage')}
          >
            <ChevronRight className="w-8 h-8" />
          </button>
          
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm">
            {lightboxIndex + 1} / {galleryImages.length}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default PetitDejeuner;
