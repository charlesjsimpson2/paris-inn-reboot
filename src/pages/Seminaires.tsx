import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { SalonSection } from "@/components/SalonSection";
import { Users, Projector, Wifi, Coffee, MonitorSpeaker, Utensils, Zap, Shield, Signal } from "lucide-react";
import { SeminarArticlesSection } from "@/components/SeminarArticlesSection";
import { useLanguage } from "@/contexts/LanguageContext";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import heroSeminaire from "@/assets/salon-marshall-1.webp";
import salonBose1 from "@/assets/salon-bose-1.webp";
import salonBose2 from "@/assets/salon-bose-2.webp";
import salonBose3 from "@/assets/salon-bose-3.webp";
import salonBose4 from "@/assets/salon-bose-4.webp";
import salonFender1 from "@/assets/salon-fender-1.webp";
import salonFender2 from "@/assets/salon-fender-2.webp";
import salonFender3 from "@/assets/salon-fender-3.webp";
import salonFender4 from "@/assets/salon-fender-4.webp";
import salonMarshall1 from "@/assets/salon-marshall-1.webp";
import salonMarshall2 from "@/assets/salon-marshall-2.webp";
import salonMarshall3 from "@/assets/salon-marshall-3.webp";
import salonMarshall4 from "@/assets/salon-marshall-4.webp";
import coworking1 from "@/assets/coworking-1.webp";
import coworking2 from "@/assets/coworking-2.webp";
import coworking3 from "@/assets/coworking-3.webp";
import coworking4 from "@/assets/coworking-4.webp";

const Seminaires = () => {
  const { t } = useLanguage();

  const equipments = [
    { icon: Projector, label: t('seminarsPage.projector') },
    { icon: MonitorSpeaker, label: t('seminarsPage.screen') },
    { icon: Wifi, label: t('seminarsPage.wifi') },
    { icon: Coffee, label: t('seminarsPage.coffee') },
    { icon: Users, label: t('seminarsPage.modular') },
    { icon: Utensils, label: t('seminarsPage.catering') },
  ];

  const salonsData = [
    {
      name: t('seminarsPage.bose.name'),
      description: t('seminarsPage.bose.description'),
      surface: "40 m²",
      images: [
        { src: salonBose1, alt: t('seminarsPage.bose.alt1') },
        { src: salonBose2, alt: t('seminarsPage.bose.alt2') },
        { src: salonBose3, alt: t('seminarsPage.bose.alt3') },
        { src: salonBose4, alt: t('seminarsPage.bose.alt4') },
      ],
      capacities: [
        { icon: "u-shape" as const, count: 20, label: t('seminarsPage.uShape') },
        { icon: "classe" as const, count: 30, label: t('seminarsPage.classroom') },
        { icon: "theatre" as const, count: 40, label: t('seminarsPage.theatre') },
      ],
    },
    {
      name: t('seminarsPage.fender.name'),
      description: t('seminarsPage.fender.description'),
      surface: "77 m²",
      images: [
        { src: salonFender1, alt: t('seminarsPage.fender.alt1') },
        { src: salonFender2, alt: t('seminarsPage.fender.alt2') },
        { src: salonFender3, alt: t('seminarsPage.fender.alt3') },
        { src: salonFender4, alt: t('seminarsPage.fender.alt4') },
      ],
      capacities: [
        { icon: "u-shape" as const, count: 33, label: t('seminarsPage.uShape') },
        { icon: "classe" as const, count: 50, label: t('seminarsPage.classroom') },
        { icon: "theatre" as const, count: 70, label: t('seminarsPage.theatre') },
      ],
    },
    {
      name: t('seminarsPage.marshall.name'),
      description: t('seminarsPage.marshall.description'),
      surface: "117 m²",
      images: [
        { src: salonMarshall1, alt: t('seminarsPage.marshall.alt1') },
        { src: salonMarshall2, alt: t('seminarsPage.marshall.alt2') },
        { src: salonMarshall3, alt: t('seminarsPage.marshall.alt3') },
        { src: salonMarshall4, alt: t('seminarsPage.marshall.alt4') },
      ],
      capacities: [
        { icon: "u-shape" as const, count: 42, label: t('seminarsPage.uShape') },
        { icon: "classe" as const, count: 63, label: t('seminarsPage.classroom') },
        { icon: "theatre" as const, count: 105, label: t('seminarsPage.theatre') },
      ],
    },
    {
      name: t('seminarsPage.coworking.name'),
      subtitle: t('seminarsPage.coworking.subtitle'),
      description: t('seminarsPage.coworking.description'),
      surface: t('seminarsPage.modularSpace'),
      images: [
        { src: coworking1, alt: t('seminarsPage.coworking.alt1') },
        { src: coworking2, alt: t('seminarsPage.coworking.alt2') },
        { src: coworking3, alt: t('seminarsPage.coworking.alt3') },
        { src: coworking4, alt: t('seminarsPage.coworking.alt4') },
      ],
      capacities: [],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={t('seo.seminars.title')}
        description={t('seo.seminars.description')}
        pageKey="seminars"
      />
      <Header />
      <div className="pt-24 md:pt-28 bg-background border-b border-border">
        <div className="container mx-auto px-4 py-3">
          <Breadcrumbs items={[{ label: t('nav.seminars'), pageKey: 'seminars' }]} />
        </div>
      </div>
      
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px]">
        <img 
          src={heroSeminaire} 
          alt={t('seminarsPage.heroAlt')} 
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
          <div className="container mx-auto">
            <span className="inline-block bg-primary text-primary-foreground font-body uppercase tracking-[0.15em] text-sm px-4 py-2 mb-4">
              {t('seminarsPage.badge')}
            </span>
            <h1 className="font-display text-3xl md:text-5xl lg:text-6xl text-white">
              {t('seminarsPage.title')}
            </h1>
          </div>
        </div>
      </section>

      {/* Video Section - Featured */}
      <section className="py-16 bg-charcoal relative">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <span className="text-primary font-medium text-sm uppercase tracking-[0.2em]">
                {t('seminarsPage.virtualTour')}
              </span>
              <h2 className="font-display text-2xl md:text-3xl text-foreground mt-2">
                {t('seminarsPage.videoTitle')}
              </h2>
            </div>
            <div className="relative aspect-video overflow-hidden shadow-2xl border border-border/30">
              <iframe
                src="https://www.youtube.com/embed/6VK-aPuljJY"
                title={t('seminarsPage.videoIframeTitle')}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-charcoal">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left: Text */}
            <div className="space-y-6">
              <p className="text-muted-foreground text-lg leading-relaxed">
                {t('seminarsPage.intro1')}
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {t('seminarsPage.intro2')}
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {t('seminarsPage.intro3')}
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <a href="/reservation-seminaire">
                  <Button variant="gold" size="lg">{t('seminarsPage.cta.button')}</Button>
                </a>
                <a href="/planning-seminaire">
                  <Button variant="elegant" size="lg">{t('seminarsPage.planning.link')}</Button>
                </a>
              </div>
            </div>

            {/* Right: Equipment - Elegant burgundy style */}
            <div className="bg-burgundy/10 border border-burgundy/20 p-8">
              <h3 className="font-display text-xl text-burgundy mb-6 text-center">{t('seminarsPage.equipment')}</h3>
              <div className="grid grid-cols-2 gap-5">
                {equipments.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 text-foreground"
                  >
                    <div className="w-10 h-10 bg-burgundy/15 flex items-center justify-center flex-shrink-0 border border-burgundy/30">
                      <item.icon className="w-5 h-5 text-burgundy" />
                    </div>
                    <span className="text-sm font-medium">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nos Salons - Elegant Overlapping Layout */}
      <section className="bg-background">
        {/* Section header */}
        <div className="py-16 bg-charcoal">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <span className="text-primary font-medium text-sm uppercase tracking-[0.2em]">{t('seminarsPage.spaces')}</span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mt-3">
                {t('seminarsPage.meetingRooms')}
              </h2>
            </div>
          </div>
        </div>
        
        {/* Salons list with alternating backgrounds and spacing */}
        <div className="space-y-12 py-12">
          {salonsData.map((salon, index) => {
            const bgColors = ['bg-muted/30', 'bg-charcoal', 'bg-muted/50', 'bg-charcoal/80'];
            return (
              <div key={index} className={`${bgColors[index % bgColors.length]} mx-4 lg:mx-8`}>
                <SalonSection salon={salon} reverse={index % 2 === 1} />
              </div>
            );
          })}
        </div>

        {/* WiFi Section for Seminars */}
        <div className="py-20 bg-charcoal relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-burgundy/10" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 px-5 py-2.5 mb-5 rounded-full">
                  <Wifi className="w-5 h-5 text-primary animate-pulse" />
                  <span className="text-primary font-semibold text-sm uppercase tracking-[0.15em]">{t('wifiPage.badge')}</span>
                </div>
                <h2 className="font-display text-3xl md:text-4xl text-foreground">
                  {t('seminarsWifi.title')}
                </h2>
                <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
                  {t('seminarsWifi.desc')}
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 mb-10">
                {[
                  { icon: Zap, value: "3 Gbps", label: t('wifi.spec.capacity') },
                  { icon: Shield, value: "3×", label: t('wifi.spec.redundancy') },
                  { icon: Signal, value: "25", label: t('wifi.spec.accessPoints') },
                  { icon: Users, value: "100%", label: t('seminarsWifi.fullLoad') },
                ].map((item, idx) => (
                  <div key={idx} className="bg-background/80 backdrop-blur-sm border border-primary/25 p-5 text-center rounded-lg hover:border-primary/50 hover:scale-105 transition-all duration-300">
                    <div className="w-10 h-10 bg-primary/15 rounded-full flex items-center justify-center mx-auto mb-3">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="font-display text-2xl text-primary font-bold">{item.value}</div>
                    <p className="text-muted-foreground text-xs mt-1.5">{item.label}</p>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <a href="/wifi" className="inline-flex items-center gap-2 bg-primary/15 border border-primary/30 text-primary font-semibold text-sm px-6 py-3 rounded-full hover:bg-primary/25 hover:gap-3 transition-all">
                  {t('services.wifi.learnMore')} <span>→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles dynamiques */}
      <SeminarArticlesSection />

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl text-primary-foreground mb-4">
            {t('seminarsPage.cta.title')}
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            {t('seminarsPage.cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/reservation-seminaire">
              <Button variant="outline" size="xl" className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                {t('seminarsPage.cta.button')}
              </Button>
            </a>
            <a href="/planning-seminaire">
              <Button variant="outline" size="xl" className="bg-primary-foreground text-primary border-2 border-primary-foreground hover:bg-transparent hover:text-primary-foreground">
                {t('seminarsPage.cta.planning')}
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Seminaires;
