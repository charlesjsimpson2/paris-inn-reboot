import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({
        title: "Erreur",
        description: "Veuillez remplir tous les champs obligatoires.",
        variant: "destructive",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Erreur",
        description: "Veuillez entrer une adresse email valide.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message envoyé !",
      description: "Nous vous répondrons dans les plus brefs délais.",
    });
    
    setFormData({ name: "", phone: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[45vh] min-h-[350px] bg-gradient-to-br from-charcoal via-muted to-charcoal overflow-hidden">
        <div className="absolute inset-0 bg-muted/30" />
        
        {/* Decorative icons */}
        <div className="absolute inset-0 flex items-center justify-center gap-8 md:gap-16">
          <div className="w-24 h-24 md:w-32 md:h-32 bg-muted rounded-lg shadow-xl flex items-center justify-center transform -rotate-6 hover:rotate-0 transition-transform duration-500">
            <Phone className="w-12 h-12 md:w-16 md:h-16 text-burgundy" />
          </div>
          <div className="w-24 h-24 md:w-32 md:h-32 bg-muted rounded-lg shadow-xl flex items-center justify-center transform rotate-3 hover:rotate-0 transition-transform duration-500">
            <Mail className="w-12 h-12 md:w-16 md:h-16 text-burgundy" />
          </div>
          <div className="w-24 h-24 md:w-32 md:h-32 bg-muted rounded-lg shadow-xl flex items-center justify-center transform -rotate-3 hover:rotate-0 transition-transform duration-500 hidden sm:flex">
            <span className="text-5xl md:text-6xl text-burgundy font-bold">@</span>
          </div>
          <div className="w-24 h-24 md:w-32 md:h-32 bg-muted rounded-lg shadow-xl flex items-center justify-center transform rotate-6 hover:rotate-0 transition-transform duration-500 hidden md:flex">
            <MapPin className="w-12 h-12 md:w-16 md:h-16 text-burgundy" />
          </div>
        </div>

        {/* Burgundy line at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-burgundy" />
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

              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Nom <span className="text-burgundy">*</span>
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Votre nom"
                      className="border-border focus:border-burgundy focus:ring-burgundy"
                      maxLength={100}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Téléphone
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Votre téléphone"
                      className="border-border focus:border-burgundy focus:ring-burgundy"
                      maxLength={20}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email <span className="text-burgundy">*</span>
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Votre adresse email"
                    className="border-border focus:border-burgundy focus:ring-burgundy"
                    maxLength={255}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message <span className="text-burgundy">*</span>
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Votre message..."
                    className="border-border focus:border-burgundy focus:ring-burgundy min-h-[150px]"
                    maxLength={2000}
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="bg-burgundy hover:bg-burgundy/90 text-white px-8 py-6 text-base"
                >
                  {isSubmitting ? (
                    "Envoi en cours..."
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Envoyer le message
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Right: Info + Map */}
            <div>
              <div className="bg-charcoal rounded-xl p-8 mb-8">
                <h2 className="font-display text-2xl text-burgundy mb-6">
                  Hôtel Inn Design Paris Place d'Italie
                </h2>
                
                <div className="space-y-5">
                  <a
                    href="https://maps.google.com/?q=211+Boulevard+Vincent+Auriol,+75013+Paris"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-full bg-burgundy/15 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-burgundy" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground group-hover:text-burgundy transition-colors">
                        211 boulevard Vincent Auriol
                      </p>
                      <p className="text-muted-foreground">75013 Paris</p>
                    </div>
                  </a>
                  
                  <a
                    href="tel:+33144240101"
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-full bg-burgundy/15 flex items-center justify-center flex-shrink-0">
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
                    <div className="w-12 h-12 rounded-full bg-burgundy/15 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-burgundy" />
                    </div>
                    <p className="font-medium text-foreground group-hover:text-burgundy transition-colors">
                      hid.paris13@gmail.com
                    </p>
                  </a>
                </div>
              </div>

              {/* Google Map */}
              <div className="rounded-xl overflow-hidden shadow-lg h-[350px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2626.8876744366814!2d2.3547!3d48.8288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6719c8c8c8c8c%3A0x0!2s211%20Boulevard%20Vincent%20Auriol%2C%2075013%20Paris!5e0!3m2!1sfr!2sfr!4v1234567890"
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