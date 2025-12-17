import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'fr' | 'en' | 'es' | 'it' | 'pt';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const languages: { code: Language; name: string; flag: string }[] = [
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹' },
  { code: 'pt', name: 'Português', flag: '🇧🇷' },
];

const translations: Record<Language, Record<string, string>> = {
  fr: {
    // Navigation
    'nav.hotel': "L'Hôtel",
    'nav.rooms': 'Nos Chambres',
    'nav.breakfast': 'Petit-déjeuner',
    'nav.seminars': 'Séminaires',
    'nav.location': 'Localisation',
    'nav.events': 'Événements',
    'nav.contact': 'Contact',
    'nav.book': 'Réserver -10%',
    
    // Hero
    'hero.badge': 'Hôtel 3 étoiles à Paris',
    'hero.title': 'Votre séjour parisien commence ici',
    'hero.subtitle': 'Un hôtel moderne et confortable aux portes de Paris',
    'hero.cta': 'Découvrir nos chambres',
    
    // Intro
    'intro.badge': 'Bienvenue',
    'intro.title': 'Un hôtel chaleureux aux portes de Paris',
    'intro.description': "L'Hôtel Inn Design Paris vous accueille dans un cadre moderne et convivial. Situé à quelques minutes du centre de Paris, notre établissement 3 étoiles offre tout le confort nécessaire pour un séjour réussi, que ce soit pour affaires ou pour le plaisir.",
    'intro.cta': 'En savoir plus',
    
    // Rooms Section
    'rooms.badge': 'Nos Chambres',
    'rooms.title': 'Des chambres confortables pour tous vos séjours',
    'rooms.cta': 'Voir toutes nos chambres',
    'rooms.book': 'Réserver',
    'rooms.double.title': 'Chambre Double',
    'rooms.double.description': 'Chambre confortable avec lit double, idéale pour les couples.',
    'rooms.twin.title': 'Chambre Twin',
    'rooms.twin.description': 'Chambre avec deux lits simples, parfaite pour les amis ou collègues.',
    'rooms.superior.title': 'Chambre Supérieure',
    'rooms.superior.description': 'Notre chambre la plus spacieuse avec balcon et vue dégagée.',
    
    // About
    'about.badge': 'À Proximité',
    'about.title': 'Découvrez Paris et ses environs',
    'about.description': 'Notre hôtel est idéalement situé pour explorer Paris et ses trésors. À quelques minutes en métro du centre-ville, vous aurez accès aux plus beaux monuments et quartiers de la capitale.',
    
    // Breakfast
    'breakfast.badge': 'Petit-déjeuner',
    'breakfast.title': 'Commencez la journée du bon pied',
    'breakfast.description': 'Savourez notre petit-déjeuner buffet varié et copieux, préparé chaque matin avec des produits frais et de qualité.',
    'breakfast.cta': 'Découvrir notre petit-déjeuner',
    
    // Seminars
    'seminars.badge': 'Séminaires',
    'seminars.title': 'Des espaces adaptés à vos événements',
    'seminars.cta': 'Voir nos salles',
    
    // Events
    'events.badge': 'Événements & Offres',
    'events.title': 'Découvrez notre agenda et offres',
    'events.cta': 'Voir tous les événements',
    
    // CTA
    'cta.title': 'Prêt à réserver votre séjour ?',
    'cta.description': 'Profitez de -10% en réservant directement sur notre site',
    'cta.button': 'Réserver maintenant',
    'cta.contact': 'Nous contacter',
    
    // Footer
    'footer.description': 'Hôtel 3 étoiles aux portes de Paris, idéal pour vos séjours affaires ou loisirs.',
    'footer.navigation': 'Navigation',
    'footer.contact': 'Contact',
    'footer.hours': 'Horaires',
    'footer.reception': 'Réception 24h/24',
    'footer.checkin': 'Check-in : 15h00',
    'footer.checkout': 'Check-out : 11h00',
    'footer.rights': 'Tous droits réservés.',
    
    // Contact
    'contact.title': 'Contactez-nous',
    'contact.phone': 'Téléphone',
    'contact.email': 'Email',
    'contact.address': 'Adresse',
  },
  en: {
    // Navigation
    'nav.hotel': 'The Hotel',
    'nav.rooms': 'Our Rooms',
    'nav.breakfast': 'Breakfast',
    'nav.seminars': 'Seminars',
    'nav.location': 'Location',
    'nav.events': 'Events',
    'nav.contact': 'Contact',
    'nav.book': 'Book -10%',
    
    // Hero
    'hero.badge': '3-star Hotel in Paris',
    'hero.title': 'Your Parisian stay starts here',
    'hero.subtitle': 'A modern and comfortable hotel at the gates of Paris',
    'hero.cta': 'Discover our rooms',
    
    // Intro
    'intro.badge': 'Welcome',
    'intro.title': 'A warm hotel at the gates of Paris',
    'intro.description': 'Hotel Inn Design Paris welcomes you in a modern and friendly setting. Located just minutes from central Paris, our 3-star establishment offers all the comfort needed for a successful stay, whether for business or pleasure.',
    'intro.cta': 'Learn more',
    
    // Rooms Section
    'rooms.badge': 'Our Rooms',
    'rooms.title': 'Comfortable rooms for all your stays',
    'rooms.cta': 'See all our rooms',
    'rooms.book': 'Book',
    'rooms.double.title': 'Double Room',
    'rooms.double.description': 'Comfortable room with double bed, ideal for couples.',
    'rooms.twin.title': 'Twin Room',
    'rooms.twin.description': 'Room with two single beds, perfect for friends or colleagues.',
    'rooms.superior.title': 'Superior Room',
    'rooms.superior.description': 'Our most spacious room with balcony and open view.',
    
    // About
    'about.badge': 'Nearby',
    'about.title': 'Discover Paris and its surroundings',
    'about.description': 'Our hotel is ideally located to explore Paris and its treasures. Just a few metro minutes from the city center, you will have access to the most beautiful monuments and neighborhoods of the capital.',
    
    // Breakfast
    'breakfast.badge': 'Breakfast',
    'breakfast.title': 'Start the day off right',
    'breakfast.description': 'Enjoy our varied and hearty breakfast buffet, prepared every morning with fresh, quality products.',
    'breakfast.cta': 'Discover our breakfast',
    
    // Seminars
    'seminars.badge': 'Seminars',
    'seminars.title': 'Spaces adapted to your events',
    'seminars.cta': 'See our rooms',
    
    // Events
    'events.badge': 'Events & Offers',
    'events.title': 'Discover our agenda and offers',
    'events.cta': 'See all events',
    
    // CTA
    'cta.title': 'Ready to book your stay?',
    'cta.description': 'Get -10% off by booking directly on our website',
    'cta.button': 'Book now',
    'cta.contact': 'Contact us',
    
    // Footer
    'footer.description': '3-star hotel at the gates of Paris, ideal for business or leisure stays.',
    'footer.navigation': 'Navigation',
    'footer.contact': 'Contact',
    'footer.hours': 'Hours',
    'footer.reception': '24/7 Reception',
    'footer.checkin': 'Check-in: 3:00 PM',
    'footer.checkout': 'Check-out: 11:00 AM',
    'footer.rights': 'All rights reserved.',
    
    // Contact
    'contact.title': 'Contact us',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.address': 'Address',
  },
  es: {
    // Navigation
    'nav.hotel': 'El Hotel',
    'nav.rooms': 'Habitaciones',
    'nav.breakfast': 'Desayuno',
    'nav.seminars': 'Seminarios',
    'nav.location': 'Ubicación',
    'nav.events': 'Eventos',
    'nav.contact': 'Contacto',
    'nav.book': 'Reservar -10%',
    
    // Hero
    'hero.badge': 'Hotel 3 estrellas en París',
    'hero.title': 'Tu estancia parisina comienza aquí',
    'hero.subtitle': 'Un hotel moderno y confortable a las puertas de París',
    'hero.cta': 'Descubrir nuestras habitaciones',
    
    // Intro
    'intro.badge': 'Bienvenido',
    'intro.title': 'Un hotel acogedor a las puertas de París',
    'intro.description': 'Hotel Inn Design París le da la bienvenida en un entorno moderno y acogedor. Situado a pocos minutos del centro de París, nuestro establecimiento de 3 estrellas ofrece todo el confort necesario para una estancia exitosa, ya sea por negocios o por placer.',
    'intro.cta': 'Saber más',
    
    // Rooms Section
    'rooms.badge': 'Habitaciones',
    'rooms.title': 'Habitaciones confortables para todas sus estancias',
    'rooms.cta': 'Ver todas las habitaciones',
    'rooms.book': 'Reservar',
    'rooms.double.title': 'Habitación Doble',
    'rooms.double.description': 'Habitación confortable con cama doble, ideal para parejas.',
    'rooms.twin.title': 'Habitación Twin',
    'rooms.twin.description': 'Habitación con dos camas individuales, perfecta para amigos o colegas.',
    'rooms.superior.title': 'Habitación Superior',
    'rooms.superior.description': 'Nuestra habitación más espaciosa con balcón y vista despejada.',
    
    // About
    'about.badge': 'Cerca',
    'about.title': 'Descubre París y sus alrededores',
    'about.description': 'Nuestro hotel está idealmente situado para explorar París y sus tesoros. A pocos minutos en metro del centro de la ciudad, tendrá acceso a los monumentos y barrios más hermosos de la capital.',
    
    // Breakfast
    'breakfast.badge': 'Desayuno',
    'breakfast.title': 'Comience el día con buen pie',
    'breakfast.description': 'Disfrute de nuestro variado y abundante desayuno buffet, preparado cada mañana con productos frescos y de calidad.',
    'breakfast.cta': 'Descubrir nuestro desayuno',
    
    // Seminars
    'seminars.badge': 'Seminarios',
    'seminars.title': 'Espacios adaptados a sus eventos',
    'seminars.cta': 'Ver nuestras salas',
    
    // Events
    'events.badge': 'Eventos y Ofertas',
    'events.title': 'Descubre nuestra agenda y ofertas',
    'events.cta': 'Ver todos los eventos',
    
    // CTA
    'cta.title': '¿Listo para reservar su estancia?',
    'cta.description': 'Obtenga -10% reservando directamente en nuestro sitio web',
    'cta.button': 'Reservar ahora',
    'cta.contact': 'Contáctenos',
    
    // Footer
    'footer.description': 'Hotel de 3 estrellas a las puertas de París, ideal para estancias de negocios o de ocio.',
    'footer.navigation': 'Navegación',
    'footer.contact': 'Contacto',
    'footer.hours': 'Horarios',
    'footer.reception': 'Recepción 24h/24',
    'footer.checkin': 'Check-in: 15:00',
    'footer.checkout': 'Check-out: 11:00',
    'footer.rights': 'Todos los derechos reservados.',
    
    // Contact
    'contact.title': 'Contáctenos',
    'contact.phone': 'Teléfono',
    'contact.email': 'Email',
    'contact.address': 'Dirección',
  },
  it: {
    // Navigation
    'nav.hotel': "L'Hotel",
    'nav.rooms': 'Camere',
    'nav.breakfast': 'Colazione',
    'nav.seminars': 'Seminari',
    'nav.location': 'Posizione',
    'nav.events': 'Eventi',
    'nav.contact': 'Contatto',
    'nav.book': 'Prenota -10%',
    
    // Hero
    'hero.badge': 'Hotel 3 stelle a Parigi',
    'hero.title': 'Il tuo soggiorno parigino inizia qui',
    'hero.subtitle': 'Un hotel moderno e confortevole alle porte di Parigi',
    'hero.cta': 'Scopri le nostre camere',
    
    // Intro
    'intro.badge': 'Benvenuto',
    'intro.title': 'Un hotel accogliente alle porte di Parigi',
    'intro.description': "L'Hotel Inn Design Paris vi accoglie in un ambiente moderno e accogliente. Situato a pochi minuti dal centro di Parigi, il nostro hotel a 3 stelle offre tutto il comfort necessario per un soggiorno di successo, sia per affari che per piacere.",
    'intro.cta': 'Scopri di più',
    
    // Rooms Section
    'rooms.badge': 'Camere',
    'rooms.title': 'Camere confortevoli per tutti i vostri soggiorni',
    'rooms.cta': 'Vedi tutte le camere',
    'rooms.book': 'Prenota',
    'rooms.double.title': 'Camera Doppia',
    'rooms.double.description': 'Camera confortevole con letto matrimoniale, ideale per le coppie.',
    'rooms.twin.title': 'Camera Twin',
    'rooms.twin.description': 'Camera con due letti singoli, perfetta per amici o colleghi.',
    'rooms.superior.title': 'Camera Superior',
    'rooms.superior.description': 'La nostra camera più spaziosa con balcone e vista aperta.',
    
    // About
    'about.badge': 'Nelle vicinanze',
    'about.title': 'Scopri Parigi e i suoi dintorni',
    'about.description': "Il nostro hotel è situato in posizione ideale per esplorare Parigi e i suoi tesori. A pochi minuti di metro dal centro città, avrete accesso ai monumenti e quartieri più belli della capitale.",
    
    // Breakfast
    'breakfast.badge': 'Colazione',
    'breakfast.title': 'Inizia la giornata con il piede giusto',
    'breakfast.description': 'Godetevi la nostra colazione a buffet varia e abbondante, preparata ogni mattina con prodotti freschi e di qualità.',
    'breakfast.cta': 'Scopri la nostra colazione',
    
    // Seminars
    'seminars.badge': 'Seminari',
    'seminars.title': 'Spazi adatti ai vostri eventi',
    'seminars.cta': 'Vedi le nostre sale',
    
    // Events
    'events.badge': 'Eventi e Offerte',
    'events.title': 'Scopri la nostra agenda e offerte',
    'events.cta': 'Vedi tutti gli eventi',
    
    // CTA
    'cta.title': 'Pronto a prenotare il tuo soggiorno?',
    'cta.description': 'Ottieni -10% prenotando direttamente sul nostro sito',
    'cta.button': 'Prenota ora',
    'cta.contact': 'Contattaci',
    
    // Footer
    'footer.description': 'Hotel 3 stelle alle porte di Parigi, ideale per soggiorni di lavoro o di piacere.',
    'footer.navigation': 'Navigazione',
    'footer.contact': 'Contatto',
    'footer.hours': 'Orari',
    'footer.reception': 'Reception 24h/24',
    'footer.checkin': 'Check-in: 15:00',
    'footer.checkout': 'Check-out: 11:00',
    'footer.rights': 'Tutti i diritti riservati.',
    
    // Contact
    'contact.title': 'Contattaci',
    'contact.phone': 'Telefono',
    'contact.email': 'Email',
    'contact.address': 'Indirizzo',
  },
  pt: {
    // Navigation
    'nav.hotel': 'O Hotel',
    'nav.rooms': 'Quartos',
    'nav.breakfast': 'Café da manhã',
    'nav.seminars': 'Seminários',
    'nav.location': 'Localização',
    'nav.events': 'Eventos',
    'nav.contact': 'Contato',
    'nav.book': 'Reservar -10%',
    
    // Hero
    'hero.badge': 'Hotel 3 estrelas em Paris',
    'hero.title': 'Sua estadia parisiense começa aqui',
    'hero.subtitle': 'Um hotel moderno e confortável às portas de Paris',
    'hero.cta': 'Descobrir nossos quartos',
    
    // Intro
    'intro.badge': 'Bem-vindo',
    'intro.title': 'Um hotel acolhedor às portas de Paris',
    'intro.description': 'O Hotel Inn Design Paris recebe você em um ambiente moderno e acolhedor. Localizado a poucos minutos do centro de Paris, nosso estabelecimento 3 estrelas oferece todo o conforto necessário para uma estadia bem-sucedida, seja a negócios ou a lazer.',
    'intro.cta': 'Saiba mais',
    
    // Rooms Section
    'rooms.badge': 'Quartos',
    'rooms.title': 'Quartos confortáveis para todas as suas estadias',
    'rooms.cta': 'Ver todos os quartos',
    'rooms.book': 'Reservar',
    'rooms.double.title': 'Quarto Duplo',
    'rooms.double.description': 'Quarto confortável com cama de casal, ideal para casais.',
    'rooms.twin.title': 'Quarto Twin',
    'rooms.twin.description': 'Quarto com duas camas de solteiro, perfeito para amigos ou colegas.',
    'rooms.superior.title': 'Quarto Superior',
    'rooms.superior.description': 'Nosso quarto mais espaçoso com varanda e vista aberta.',
    
    // About
    'about.badge': 'Proximidades',
    'about.title': 'Descubra Paris e seus arredores',
    'about.description': 'Nosso hotel está idealmente localizado para explorar Paris e seus tesouros. A poucos minutos de metrô do centro da cidade, você terá acesso aos mais belos monumentos e bairros da capital.',
    
    // Breakfast
    'breakfast.badge': 'Café da manhã',
    'breakfast.title': 'Comece o dia com o pé direito',
    'breakfast.description': 'Aproveite nosso café da manhã buffet variado e farto, preparado todas as manhãs com produtos frescos e de qualidade.',
    'breakfast.cta': 'Descobrir nosso café da manhã',
    
    // Seminars
    'seminars.badge': 'Seminários',
    'seminars.title': 'Espaços adaptados aos seus eventos',
    'seminars.cta': 'Ver nossas salas',
    
    // Events
    'events.badge': 'Eventos e Ofertas',
    'events.title': 'Descubra nossa agenda e ofertas',
    'events.cta': 'Ver todos os eventos',
    
    // CTA
    'cta.title': 'Pronto para reservar sua estadia?',
    'cta.description': 'Ganhe -10% reservando diretamente em nosso site',
    'cta.button': 'Reservar agora',
    'cta.contact': 'Entre em contato',
    
    // Footer
    'footer.description': 'Hotel 3 estrelas às portas de Paris, ideal para estadias de negócios ou lazer.',
    'footer.navigation': 'Navegação',
    'footer.contact': 'Contato',
    'footer.hours': 'Horários',
    'footer.reception': 'Recepção 24h',
    'footer.checkin': 'Check-in: 15h00',
    'footer.checkout': 'Check-out: 11h00',
    'footer.rights': 'Todos os direitos reservados.',
    
    // Contact
    'contact.title': 'Entre em contato',
    'contact.phone': 'Telefone',
    'contact.email': 'Email',
    'contact.address': 'Endereço',
  },
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('fr');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
