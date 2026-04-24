// Contact page
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Phone, Mail, MapPin, Loader2 } from "lucide-react";
import heroContact from "@/assets/hero-contact.jpg";
import { useEffect, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { SEO } from "@/components/SEO";

const Contact = () => {
  const { t, language } = useLanguage();
  const [isLoading, setIsLoading] = useState(true);

  // Map language to Tally form URLs
  const tallyFormUrls: Record<string, string> = {
    fr: 'https://tally.so/embed/vGraVd',
    en: 'https://tally.so/embed/b59bO0',
    es: 'https://tally.so/embed/LZzRXz',
    it: 'https://tally.so/embed/pbd8Gy',
    pt: 'https://tally.so/embed/jab1WY',
    de: 'https://tally.so/embed/LZK7dp'
  };

  const currentFormUrl = tallyFormUrls[language] || tallyFormUrls.fr;

  useEffect(() => {
    setIsLoading(true);
    
    // Remove existing Tally script if present
    const existingScript = document.querySelector('script[src="https://tally.so/widgets/embed.js"]');
    if (existingScript) {
      existingScript.remove();
    }

    // Load Tally embed script
    const script = document.createElement('script');
    script.src = 'https://tally.so/widgets/embed.js';
    script.async = true;
    script.onload = () => {
      // Give Tally time to initialize
      setTimeout(() => setIsLoading(false), 500);
    };
    document.body.appendChild(script);

    return () => {
      const scriptToRemove = document.querySelector('script[src="https://tally.so/widgets/embed.js"]');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [language]);

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={t('seo.contact.title')}
        description={t('seo.contact.description')}
        pageKey="contact"
      />
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[350px]">
        <img 
          src={heroContact} 
          alt={t('contactPage.heroAlt')} 
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover object-[center_30%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute inset-0 flex items-end pb-12 md:pb-16">
          <div className="container mx-auto px-4">
            <h1 className="font-display text-3xl md:text-5xl lg:text-6xl text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]">
              {t('seo.contact.title')}
            </h1>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left: Form */}
            <div>
              {/* Tally Form Embed - title is inside the form */}
              <div className="rounded-lg overflow-hidden relative min-h-[600px]">
                {isLoading && (
                  <div className="absolute inset-0 flex items-center justify-center bg-background/50">
                    <Loader2 className="w-8 h-8 text-burgundy animate-spin" />
                  </div>
                )}
                <iframe 
                  data-tally-src={`${currentFormUrl}?alignLeft=1&transparentBackground=1&dynamicHeight=1`}
                  loading="lazy" 
                  width="100%" 
                  height="600"
                  frameBorder="0" 
                  title={t('contactPage.formTitle')}
                  className="w-full"
                  key={language}
                />
              </div>
            </div>

            {/* Right: Info + Map */}
            <div>
              <div className="bg-charcoal p-8 mb-8">
                <h2 className="font-display text-2xl text-burgundy mb-6">
                  {t('contactPage.hotelName')}
                </h2>
                
                <div className="space-y-5">
                  <a
                    href="https://maps.google.com/?q=178+Boulevard+Vincent+Auriol,+75013+Paris"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 bg-burgundy/15 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-burgundy" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground group-hover:text-burgundy transition-colors">
                        178 boulevard Vincent Auriol
                      </p>
                      <p className="text-muted-foreground">75013 Paris</p>
                    </div>
                  </a>
                  
                  <a
                    href="tel:+33144240101"
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-12 h-12 bg-burgundy/15 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-burgundy" />
                    </div>
                    <p className="font-medium text-foreground group-hover:text-burgundy transition-colors">
                      +33 (0)1 44 24 01 01
                    </p>
                  </a>
                  
                  <a
                    href="mailto:hid.paris13@gmail.com"
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-12 h-12 bg-burgundy/15 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-burgundy" />
                    </div>
                    <p className="font-medium text-foreground group-hover:text-burgundy transition-colors">
                      hid.paris13@gmail.com
                    </p>
                  </a>
                </div>
              </div>

              {/* Google Map */}
              <div className="overflow-hidden shadow-lg h-[350px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2626.8876744366814!2d2.3547!3d48.8288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6719c8c8c8c8c%3A0x0!2s178%20Boulevard%20Vincent%20Auriol%2C%2075013%20Paris!5e0!3m2!1sfr!2sfr!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={t('contactPage.mapTitle')}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;