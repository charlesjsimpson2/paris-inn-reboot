// Contact page
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Phone, Mail, MapPin } from "lucide-react";
import heroContact from "@/assets/hero-contact.jpg";
import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    // Load Tally embed script
    const script = document.createElement('script');
    script.src = 'https://tally.so/widgets/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[350px]">
        <img 
          src={heroContact} 
          alt="Contactez-nous - Hôtel Inn Design Paris" 
          className="absolute inset-0 w-full h-full object-cover object-[center_30%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      </section>

      {/* Contact Content */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left: Form */}
            <div>
              <h1 className="font-display text-4xl md:text-5xl text-foreground mb-6">
                Contactez-nous
              </h1>
              
              <p className="text-muted-foreground text-lg mb-4">
                Si vous avez des questions, des commentaires ou des préoccupations, n'hésitez pas à nous contacter. Notre équipe est là pour vous aider et répondre à vos besoins.
              </p>
              <p className="text-muted-foreground mb-4">
                Utilisez le formulaire ci-dessous pour nous envoyer un message. Nous nous efforçons de répondre rapidement à tous les messages que nous recevons.
              </p>
              <p className="text-muted-foreground mb-8">
                Si vous préférez nous contacter par téléphone, vous trouverez nos coordonnées à côté. Nous sommes disponibles pendant nos heures d'ouverture.
              </p>

              {/* Tally Form Embed */}
              <div className="bg-card rounded-lg border border-border overflow-hidden">
                <iframe 
                  data-tally-src="https://tally.so/embed/vGraVd?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                  loading="lazy" 
                  width="100%" 
                  height="500"
                  frameBorder="0" 
                  title="Formulaire de contact"
                  className="w-full"
                />
              </div>
            </div>

            {/* Right: Info + Map */}
            <div>
              <div className="bg-charcoal p-8 mb-8">
                <h2 className="font-display text-2xl text-burgundy mb-6">
                  Hôtel Inn Design Paris Place d'Italie
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
                  title="Localisation Hôtel Inn Design Paris"
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