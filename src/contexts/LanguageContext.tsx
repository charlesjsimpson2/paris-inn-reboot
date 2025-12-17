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
    'nav.home': 'Accueil',
    'nav.rooms': 'Nos Chambres',
    'nav.breakfast': 'Petit-déjeuner',
    'nav.seminars': 'Séminaires',
    'nav.location': 'Localisation',
    'nav.events': 'Événements',
    'nav.contact': 'Contact',
    'nav.book': 'Réserver',
    
    // Hero
    'hero.welcome': 'Bienvenue',
    'hero.name': 'Hôtel Inn Design',
    'hero.location': "Place d'Italie",
    
    // Intro
    'intro.badge': 'Bienvenue',
    'intro.title': 'Un hôtel bien placé pour tout faire !',
    'intro.description': "Situé au cœur du 13ᵉ arrondissement, l'Hôtel Inn Design Paris bénéficie d'un emplacement idéal, à proximité de la Butte-aux-Cailles, des parcs et des quais. Notre hôtel propose 70 chambres confortables, un parking privé et sécurisé, ainsi qu'un bar convivial et un espace d'accueil propice à la détente ou aux échanges professionnels.",
    'intro.cta': 'Réservez votre chambre et profitez de votre séjour à Paris !',
    'intro.button': 'Réserver une chambre',
    'intro.stars': '3 étoiles',
    'intro.rooms': '70 chambres',
    'intro.parking': 'Parking privé',
    'intro.bar': 'Bar convivial',
    
    // Rooms Section
    'rooms.badge': 'Nos Hébergements',
    'rooms.title': 'Chambres & Suites',
    'rooms.subtitle': 'Posez vos valises et profitez !',
    'rooms.description': 'Installez-vous dans l\'une de nos 70 chambres lumineuses, insonorisées et entièrement équipées pour votre confort.',
    'rooms.description2': 'Climatisation, TV écran plat, espace bureau, coffre-fort, sèche-cheveux, plateau de courtoisie… tout est pensé pour vous.',
    'rooms.viewAll': 'Voir toutes nos chambres',
    'rooms.book': 'Réserver une chambre',
    'rooms.double': 'Chambre Double',
    'rooms.double.desc': 'Lit de 160×200 cm. Profitez d\'un espace élégant et confortable, idéal pour un séjour en couple ou en solo.',
    'rooms.twin': 'Chambre Twin',
    'rooms.twin.desc': '2 lits de 100×200 cm. Parfaite pour les voyages entre amis ou collègues, avec tout le confort nécessaire.',
    'rooms.superior': 'Chambre supérieure avec balcon',
    'rooms.superior.desc': 'Profitez d\'un espace extérieur privé avec vue sur Paris. Une expérience unique au cœur de la ville.',
    'rooms.connecting': 'Chambres Communicantes',
    'rooms.connecting.desc': '2 chambres modulables avec portes communicantes. La solution idéale pour les familles ou groupes.',
    'rooms.bathroom': 'Salle d\'eau privative',
    'rooms.tv': 'TV écran plat',
    'rooms.desk': 'Espace bureau',
    'rooms.wifi': 'Wi-Fi gratuit',
    'rooms.courtesy': 'Plateau de courtoisie',
    'rooms.ac': 'Climatisation',
    
    // About / Location
    'about.badge': 'Emplacement idéal',
    'about.title': 'Un hôtel situé au cœur de Paris',
    'about.description': 'Hôtel Inn Paris est situé à 2min à pied du métro parisien et offre une grande commodité.',
    'about.metro': 'Accès métro (sortie 3)',
    
    // Breakfast
    'breakfast.badge': 'À votre service',
    'breakfast.title': 'Petit-déjeuner & Bar',
    'breakfast.subtitle': 'Le petit déjeuner qui donne le sourire !',
    'breakfast.desc1': 'Chaque matin, faites le plein d\'énergie avec notre petit déjeuner complet, servi en buffet sucré & salé à volonté.',
    'breakfast.desc2': 'Au menu : boissons chaudes, baguettes tradition et céréales, viennoiseries croustillantes, fruits frais et céréales. Côté salé, retrouvez œufs durs, charcuterie, blanc de dinde, fromages et yaourts nature bio. Et pour les plus gourmands : confitures et crêpes moelleuses délicatement vanillées.',
    'breakfast.cta': 'Découvrir notre petit-déjeuner',
    'breakfast.bar.title': 'Un bar convivial pour se détendre',
    'breakfast.bar.desc1': 'À tout moment de la journée, installez-vous au bar de l\'hôtel pour partager un verre, échanger ou simplement faire une pause.',
    'breakfast.bar.desc2': 'Dans une ambiance accueillante et décontractée, c\'est l\'endroit idéal pour se retrouver après une journée bien remplie.',
    
    // Seminars
    'seminars.badge': 'Espace professionnel',
    'seminars.title': 'Salle de séminaire',
    'seminars.subtitle': 'Organisez vos réunions autrement !',
    'seminars.desc1': 'L\'hôtel Inn Design de Paris met à votre disposition plusieurs salles de séminaire modernes et entièrement équipées : paperboard, écrans avec vidéoprojecteur, micros et connexion wifi.',
    'seminars.desc2': 'Selon vos objectifs, différentes configurations sont possibles afin de s\'adapter parfaitement à vos réunions, formations ou événements professionnels.',
    'seminars.quote': 'Demander un devis',
    'seminars.discover': 'Découvrir nos salles',
    
    // Events
    'events.badge': 'Événements & Offres',
    'events.title': 'Découvrez notre agenda et offres',
    'events.cta': 'Voir tous les événements',
    
    // CTA
    'cta.badge': 'Meilleur Prix Garanti',
    'cta.title': 'Réservez directement pour les meilleurs tarifs',
    'cta.description': 'En réservant sur notre site officiel, bénéficiez du meilleur tarif disponible et d\'avantages exclusifs pour votre séjour.',
    'cta.button': 'Réserver maintenant',
    'cta.contact': 'Nous contacter',
    
    // Footer
    'footer.description': 'Hôtel 3 étoiles au cœur du 13ème arrondissement, à deux pas de la Place d\'Italie.',
    'footer.navigation': 'Navigation',
    'footer.contact': 'Contact',
    'footer.rights': 'Tous droits réservés.',
    'footer.legal': 'Mentions légales',
    'footer.privacy': 'Politique de confidentialité',
  },
  en: {
    // Navigation
    'nav.hotel': 'The Hotel',
    'nav.home': 'Home',
    'nav.rooms': 'Our Rooms',
    'nav.breakfast': 'Breakfast',
    'nav.seminars': 'Seminars',
    'nav.location': 'Location',
    'nav.events': 'Events',
    'nav.contact': 'Contact',
    'nav.book': 'Book',
    
    // Hero
    'hero.welcome': 'Welcome',
    'hero.name': 'Hotel Inn Design',
    'hero.location': "Place d'Italie",
    
    // Intro
    'intro.badge': 'Welcome',
    'intro.title': 'A well-located hotel for everything!',
    'intro.description': "Located in the heart of the 13th arrondissement, Hotel Inn Design Paris enjoys an ideal location, close to Butte-aux-Cailles, parks and the quays. Our hotel offers 70 comfortable rooms, a private and secure car park, as well as a friendly bar and a reception area conducive to relaxation or professional exchanges.",
    'intro.cta': 'Book your room and enjoy your stay in Paris!',
    'intro.button': 'Book a room',
    'intro.stars': '3 stars',
    'intro.rooms': '70 rooms',
    'intro.parking': 'Private parking',
    'intro.bar': 'Friendly bar',
    
    // Rooms Section
    'rooms.badge': 'Our Accommodations',
    'rooms.title': 'Rooms & Suites',
    'rooms.subtitle': 'Unpack and enjoy!',
    'rooms.description': 'Settle into one of our 70 bright, soundproofed and fully equipped rooms for your comfort.',
    'rooms.description2': 'Air conditioning, flat-screen TV, desk area, safe, hairdryer, courtesy tray... everything is designed for you.',
    'rooms.viewAll': 'See all our rooms',
    'rooms.book': 'Book a room',
    'rooms.double': 'Double Room',
    'rooms.double.desc': '160×200 cm bed. Enjoy an elegant and comfortable space, ideal for a couple or solo stay.',
    'rooms.twin': 'Twin Room',
    'rooms.twin.desc': '2 beds of 100×200 cm. Perfect for trips with friends or colleagues, with all the necessary comfort.',
    'rooms.superior': 'Superior Room with balcony',
    'rooms.superior.desc': 'Enjoy a private outdoor space with views of Paris. A unique experience in the heart of the city.',
    'rooms.connecting': 'Connecting Rooms',
    'rooms.connecting.desc': '2 modular rooms with connecting doors. The ideal solution for families or groups.',
    'rooms.bathroom': 'Private bathroom',
    'rooms.tv': 'Flat screen TV',
    'rooms.desk': 'Desk area',
    'rooms.wifi': 'Free Wi-Fi',
    'rooms.courtesy': 'Courtesy tray',
    'rooms.ac': 'Air conditioning',
    
    // About / Location
    'about.badge': 'Ideal location',
    'about.title': 'A hotel in the heart of Paris',
    'about.description': 'Hotel Inn Paris is located 2 minutes walk from the Parisian metro and offers great convenience.',
    'about.metro': 'Metro access (exit 3)',
    
    // Breakfast
    'breakfast.badge': 'At your service',
    'breakfast.title': 'Breakfast & Bar',
    'breakfast.subtitle': 'The breakfast that makes you smile!',
    'breakfast.desc1': 'Every morning, fill up on energy with our full breakfast, served as an all-you-can-eat sweet & savory buffet.',
    'breakfast.desc2': 'On the menu: hot drinks, traditional baguettes and cereals, crispy pastries, fresh fruits and cereals. On the savory side, find hard-boiled eggs, cold cuts, turkey breast, cheeses and organic plain yogurts. And for those with a sweet tooth: jams and delicate vanilla pancakes.',
    'breakfast.cta': 'Discover our breakfast',
    'breakfast.bar.title': 'A friendly bar to relax',
    'breakfast.bar.desc1': 'At any time of the day, settle in at the hotel bar to share a drink, chat or simply take a break.',
    'breakfast.bar.desc2': 'In a welcoming and relaxed atmosphere, it\'s the ideal place to meet up after a busy day.',
    
    // Seminars
    'seminars.badge': 'Professional space',
    'seminars.title': 'Seminar room',
    'seminars.subtitle': 'Organize your meetings differently!',
    'seminars.desc1': 'Hotel Inn Design Paris provides you with several modern and fully equipped seminar rooms: flipchart, screens with video projector, microphones and wifi connection.',
    'seminars.desc2': 'Depending on your objectives, different configurations are possible to perfectly adapt to your meetings, training sessions or professional events.',
    'seminars.quote': 'Request a quote',
    'seminars.discover': 'Discover our rooms',
    
    // Events
    'events.badge': 'Events & Offers',
    'events.title': 'Discover our agenda and offers',
    'events.cta': 'See all events',
    
    // CTA
    'cta.badge': 'Best Price Guaranteed',
    'cta.title': 'Book directly for the best rates',
    'cta.description': 'By booking on our official website, benefit from the best available rate and exclusive advantages for your stay.',
    'cta.button': 'Book now',
    'cta.contact': 'Contact us',
    
    // Footer
    'footer.description': '3-star hotel in the heart of the 13th arrondissement, steps from Place d\'Italie.',
    'footer.navigation': 'Navigation',
    'footer.contact': 'Contact',
    'footer.rights': 'All rights reserved.',
    'footer.legal': 'Legal notice',
    'footer.privacy': 'Privacy policy',
  },
  es: {
    // Navigation
    'nav.hotel': 'El Hotel',
    'nav.home': 'Inicio',
    'nav.rooms': 'Habitaciones',
    'nav.breakfast': 'Desayuno',
    'nav.seminars': 'Seminarios',
    'nav.location': 'Ubicación',
    'nav.events': 'Eventos',
    'nav.contact': 'Contacto',
    'nav.book': 'Reservar',
    
    // Hero
    'hero.welcome': 'Bienvenido',
    'hero.name': 'Hotel Inn Design',
    'hero.location': "Place d'Italie",
    
    // Intro
    'intro.badge': 'Bienvenido',
    'intro.title': '¡Un hotel bien ubicado para todo!',
    'intro.description': "Situado en el corazón del distrito 13, Hotel Inn Design París disfruta de una ubicación ideal, cerca de Butte-aux-Cailles, parques y muelles. Nuestro hotel ofrece 70 habitaciones confortables, un aparcamiento privado y seguro, así como un bar acogedor y una zona de recepción propicia para el relax o los intercambios profesionales.",
    'intro.cta': '¡Reserve su habitación y disfrute de su estancia en París!',
    'intro.button': 'Reservar habitación',
    'intro.stars': '3 estrellas',
    'intro.rooms': '70 habitaciones',
    'intro.parking': 'Parking privado',
    'intro.bar': 'Bar acogedor',
    
    // Rooms Section
    'rooms.badge': 'Alojamientos',
    'rooms.title': 'Habitaciones & Suites',
    'rooms.subtitle': '¡Desempaque y disfrute!',
    'rooms.description': 'Instálese en una de nuestras 70 habitaciones luminosas, insonorizadas y totalmente equipadas para su comodidad.',
    'rooms.description2': 'Aire acondicionado, TV de pantalla plana, escritorio, caja fuerte, secador de pelo, bandeja de cortesía... todo está pensado para usted.',
    'rooms.viewAll': 'Ver todas las habitaciones',
    'rooms.book': 'Reservar habitación',
    'rooms.double': 'Habitación Doble',
    'rooms.double.desc': 'Cama de 160×200 cm. Disfrute de un espacio elegante y confortable, ideal para parejas o estancias en solitario.',
    'rooms.twin': 'Habitación Twin',
    'rooms.twin.desc': '2 camas de 100×200 cm. Perfecta para viajes con amigos o colegas, con todo el confort necesario.',
    'rooms.superior': 'Habitación Superior con balcón',
    'rooms.superior.desc': 'Disfrute de un espacio exterior privado con vistas a París. Una experiencia única en el corazón de la ciudad.',
    'rooms.connecting': 'Habitaciones Comunicantes',
    'rooms.connecting.desc': '2 habitaciones modulables con puertas comunicantes. La solución ideal para familias o grupos.',
    'rooms.bathroom': 'Baño privado',
    'rooms.tv': 'TV pantalla plana',
    'rooms.desk': 'Escritorio',
    'rooms.wifi': 'Wi-Fi gratis',
    'rooms.courtesy': 'Bandeja de cortesía',
    'rooms.ac': 'Aire acondicionado',
    
    // About / Location
    'about.badge': 'Ubicación ideal',
    'about.title': 'Un hotel en el corazón de París',
    'about.description': 'Hotel Inn París está a 2 minutos a pie del metro parisino y ofrece gran comodidad.',
    'about.metro': 'Acceso metro (salida 3)',
    
    // Breakfast
    'breakfast.badge': 'A su servicio',
    'breakfast.title': 'Desayuno & Bar',
    'breakfast.subtitle': '¡El desayuno que te hace sonreír!',
    'breakfast.desc1': 'Cada mañana, llénese de energía con nuestro desayuno completo, servido en buffet dulce y salado a voluntad.',
    'breakfast.desc2': 'En el menú: bebidas calientes, baguettes tradicionales y cereales, bollería crujiente, frutas frescas y cereales. En el lado salado, huevos duros, embutidos, pechuga de pavo, quesos y yogures naturales bio. Y para los más golosos: mermeladas y crepes suaves delicadamente vainilladas.',
    'breakfast.cta': 'Descubrir nuestro desayuno',
    'breakfast.bar.title': 'Un bar acogedor para relajarse',
    'breakfast.bar.desc1': 'En cualquier momento del día, siéntese en el bar del hotel para compartir una copa, charlar o simplemente hacer una pausa.',
    'breakfast.bar.desc2': 'En un ambiente acogedor y relajado, es el lugar ideal para reunirse después de un día ajetreado.',
    
    // Seminars
    'seminars.badge': 'Espacio profesional',
    'seminars.title': 'Sala de seminarios',
    'seminars.subtitle': '¡Organice sus reuniones de otra manera!',
    'seminars.desc1': 'Hotel Inn Design París pone a su disposición varias salas de seminarios modernas y totalmente equipadas: rotafolio, pantallas con videoproyector, micrófonos y conexión wifi.',
    'seminars.desc2': 'Según sus objetivos, diferentes configuraciones son posibles para adaptarse perfectamente a sus reuniones, formaciones o eventos profesionales.',
    'seminars.quote': 'Solicitar presupuesto',
    'seminars.discover': 'Descubrir nuestras salas',
    
    // Events
    'events.badge': 'Eventos y Ofertas',
    'events.title': 'Descubra nuestra agenda y ofertas',
    'events.cta': 'Ver todos los eventos',
    
    // CTA
    'cta.badge': 'Mejor Precio Garantizado',
    'cta.title': 'Reserve directamente para las mejores tarifas',
    'cta.description': 'Al reservar en nuestro sitio oficial, benefíciese de la mejor tarifa disponible y ventajas exclusivas para su estancia.',
    'cta.button': 'Reservar ahora',
    'cta.contact': 'Contáctenos',
    
    // Footer
    'footer.description': 'Hotel de 3 estrellas en el corazón del distrito 13, a pasos de Place d\'Italie.',
    'footer.navigation': 'Navegación',
    'footer.contact': 'Contacto',
    'footer.rights': 'Todos los derechos reservados.',
    'footer.legal': 'Aviso legal',
    'footer.privacy': 'Política de privacidad',
  },
  it: {
    // Navigation
    'nav.hotel': "L'Hotel",
    'nav.home': 'Home',
    'nav.rooms': 'Camere',
    'nav.breakfast': 'Colazione',
    'nav.seminars': 'Seminari',
    'nav.location': 'Posizione',
    'nav.events': 'Eventi',
    'nav.contact': 'Contatto',
    'nav.book': 'Prenota',
    
    // Hero
    'hero.welcome': 'Benvenuto',
    'hero.name': 'Hotel Inn Design',
    'hero.location': "Place d'Italie",
    
    // Intro
    'intro.badge': 'Benvenuto',
    'intro.title': 'Un hotel ben posizionato per tutto!',
    'intro.description': "Situato nel cuore del 13° arrondissement, l'Hotel Inn Design Paris gode di una posizione ideale, vicino a Butte-aux-Cailles, parchi e banchine. Il nostro hotel offre 70 camere confortevoli, un parcheggio privato e sicuro, nonché un bar accogliente e un'area reception propizia al relax o agli scambi professionali.",
    'intro.cta': 'Prenota la tua camera e goditi il tuo soggiorno a Parigi!',
    'intro.button': 'Prenota una camera',
    'intro.stars': '3 stelle',
    'intro.rooms': '70 camere',
    'intro.parking': 'Parcheggio privato',
    'intro.bar': 'Bar accogliente',
    
    // Rooms Section
    'rooms.badge': 'I nostri alloggi',
    'rooms.title': 'Camere & Suite',
    'rooms.subtitle': 'Disfa le valigie e goditi!',
    'rooms.description': 'Sistemati in una delle nostre 70 camere luminose, insonorizzate e completamente attrezzate per il tuo comfort.',
    'rooms.description2': 'Aria condizionata, TV a schermo piatto, scrivania, cassaforte, asciugacapelli, vassoio di cortesia... tutto è pensato per te.',
    'rooms.viewAll': 'Vedi tutte le camere',
    'rooms.book': 'Prenota una camera',
    'rooms.double': 'Camera Doppia',
    'rooms.double.desc': 'Letto 160×200 cm. Goditi uno spazio elegante e confortevole, ideale per un soggiorno di coppia o in solitaria.',
    'rooms.twin': 'Camera Twin',
    'rooms.twin.desc': '2 letti da 100×200 cm. Perfetta per viaggi con amici o colleghi, con tutto il comfort necessario.',
    'rooms.superior': 'Camera Superior con balcone',
    'rooms.superior.desc': 'Goditi uno spazio esterno privato con vista su Parigi. Un\'esperienza unica nel cuore della città.',
    'rooms.connecting': 'Camere Comunicanti',
    'rooms.connecting.desc': '2 camere modulabili con porte comunicanti. La soluzione ideale per famiglie o gruppi.',
    'rooms.bathroom': 'Bagno privato',
    'rooms.tv': 'TV schermo piatto',
    'rooms.desk': 'Scrivania',
    'rooms.wifi': 'Wi-Fi gratuito',
    'rooms.courtesy': 'Vassoio di cortesia',
    'rooms.ac': 'Aria condizionata',
    
    // About / Location
    'about.badge': 'Posizione ideale',
    'about.title': 'Un hotel nel cuore di Parigi',
    'about.description': "L'Hotel Inn Paris si trova a 2 minuti a piedi dalla metropolitana parigina e offre grande comodità.",
    'about.metro': 'Accesso metro (uscita 3)',
    
    // Breakfast
    'breakfast.badge': 'Al vostro servizio',
    'breakfast.title': 'Colazione & Bar',
    'breakfast.subtitle': 'La colazione che ti fa sorridere!',
    'breakfast.desc1': 'Ogni mattina, fai il pieno di energia con la nostra colazione completa, servita a buffet dolce e salato a volontà.',
    'breakfast.desc2': 'Nel menu: bevande calde, baguette tradizionali e cereali, paste croccanti, frutta fresca e cereali. Sul lato salato, uova sode, salumi, petto di tacchino, formaggi e yogurt naturali bio. E per i più golosi: marmellate e crepes morbide delicatamente vanilliate.',
    'breakfast.cta': 'Scopri la nostra colazione',
    'breakfast.bar.title': 'Un bar accogliente per rilassarsi',
    'breakfast.bar.desc1': 'In qualsiasi momento della giornata, accomodati al bar dell\'hotel per condividere un drink, chiacchierare o semplicemente fare una pausa.',
    'breakfast.bar.desc2': 'In un\'atmosfera accogliente e rilassata, è il luogo ideale per ritrovarsi dopo una giornata intensa.',
    
    // Seminars
    'seminars.badge': 'Spazio professionale',
    'seminars.title': 'Sala seminari',
    'seminars.subtitle': 'Organizza le tue riunioni in modo diverso!',
    'seminars.desc1': "L'Hotel Inn Design Paris mette a disposizione diverse sale seminari moderne e completamente attrezzate: lavagna a fogli mobili, schermi con videoproiettore, microfoni e connessione wifi.",
    'seminars.desc2': 'A seconda dei tuoi obiettivi, diverse configurazioni sono possibili per adattarsi perfettamente alle tue riunioni, formazioni o eventi professionali.',
    'seminars.quote': 'Richiedi preventivo',
    'seminars.discover': 'Scopri le nostre sale',
    
    // Events
    'events.badge': 'Eventi e Offerte',
    'events.title': 'Scopri la nostra agenda e offerte',
    'events.cta': 'Vedi tutti gli eventi',
    
    // CTA
    'cta.badge': 'Miglior Prezzo Garantito',
    'cta.title': 'Prenota direttamente per le migliori tariffe',
    'cta.description': 'Prenotando sul nostro sito ufficiale, beneficia della migliore tariffa disponibile e vantaggi esclusivi per il tuo soggiorno.',
    'cta.button': 'Prenota ora',
    'cta.contact': 'Contattaci',
    
    // Footer
    'footer.description': 'Hotel 3 stelle nel cuore del 13° arrondissement, a due passi da Place d\'Italie.',
    'footer.navigation': 'Navigazione',
    'footer.contact': 'Contatto',
    'footer.rights': 'Tutti i diritti riservati.',
    'footer.legal': 'Note legali',
    'footer.privacy': 'Informativa privacy',
  },
  pt: {
    // Navigation
    'nav.hotel': 'O Hotel',
    'nav.home': 'Início',
    'nav.rooms': 'Quartos',
    'nav.breakfast': 'Café da manhã',
    'nav.seminars': 'Seminários',
    'nav.location': 'Localização',
    'nav.events': 'Eventos',
    'nav.contact': 'Contato',
    'nav.book': 'Reservar',
    
    // Hero
    'hero.welcome': 'Bem-vindo',
    'hero.name': 'Hotel Inn Design',
    'hero.location': "Place d'Italie",
    
    // Intro
    'intro.badge': 'Bem-vindo',
    'intro.title': 'Um hotel bem localizado para tudo!',
    'intro.description': "Situado no coração do 13º arrondissement, o Hotel Inn Design Paris desfruta de uma localização ideal, perto da Butte-aux-Cailles, parques e cais. Nosso hotel oferece 70 quartos confortáveis, um estacionamento privado e seguro, bem como um bar acolhedor e uma área de recepção propícia ao relaxamento ou trocas profissionais.",
    'intro.cta': 'Reserve seu quarto e aproveite sua estadia em Paris!',
    'intro.button': 'Reservar um quarto',
    'intro.stars': '3 estrelas',
    'intro.rooms': '70 quartos',
    'intro.parking': 'Estacionamento privado',
    'intro.bar': 'Bar acolhedor',
    
    // Rooms Section
    'rooms.badge': 'Nossos alojamentos',
    'rooms.title': 'Quartos & Suítes',
    'rooms.subtitle': 'Desfaça as malas e aproveite!',
    'rooms.description': 'Acomode-se em um dos nossos 70 quartos luminosos, à prova de som e totalmente equipados para o seu conforto.',
    'rooms.description2': 'Ar condicionado, TV de tela plana, escrivaninha, cofre, secador de cabelo, bandeja de cortesia... tudo é pensado para você.',
    'rooms.viewAll': 'Ver todos os quartos',
    'rooms.book': 'Reservar um quarto',
    'rooms.double': 'Quarto Duplo',
    'rooms.double.desc': 'Cama de 160×200 cm. Desfrute de um espaço elegante e confortável, ideal para uma estadia a dois ou sozinho.',
    'rooms.twin': 'Quarto Twin',
    'rooms.twin.desc': '2 camas de 100×200 cm. Perfeito para viagens com amigos ou colegas, com todo o conforto necessário.',
    'rooms.superior': 'Quarto Superior com varanda',
    'rooms.superior.desc': 'Desfrute de um espaço exterior privado com vista para Paris. Uma experiência única no coração da cidade.',
    'rooms.connecting': 'Quartos Comunicantes',
    'rooms.connecting.desc': '2 quartos moduláveis com portas comunicantes. A solução ideal para famílias ou grupos.',
    'rooms.bathroom': 'Banheiro privativo',
    'rooms.tv': 'TV tela plana',
    'rooms.desk': 'Escrivaninha',
    'rooms.wifi': 'Wi-Fi grátis',
    'rooms.courtesy': 'Bandeja de cortesia',
    'rooms.ac': 'Ar condicionado',
    
    // About / Location
    'about.badge': 'Localização ideal',
    'about.title': 'Um hotel no coração de Paris',
    'about.description': 'O Hotel Inn Paris fica a 2 minutos a pé do metrô parisiense e oferece grande comodidade.',
    'about.metro': 'Acesso metrô (saída 3)',
    
    // Breakfast
    'breakfast.badge': 'Ao seu serviço',
    'breakfast.title': 'Café da manhã & Bar',
    'breakfast.subtitle': 'O café da manhã que faz você sorrir!',
    'breakfast.desc1': 'Todas as manhãs, recarregue suas energias com nosso café da manhã completo, servido em buffet doce e salgado à vontade.',
    'breakfast.desc2': 'No cardápio: bebidas quentes, baguetes tradicionais e cereais, croissants crocantes, frutas frescas e cereais. No lado salgado, ovos cozidos, frios, peito de peru, queijos e iogurtes naturais orgânicos. E para os mais gulosos: geleias e panquecas macias delicadamente baunilhadas.',
    'breakfast.cta': 'Descobrir nosso café da manhã',
    'breakfast.bar.title': 'Um bar acolhedor para relaxar',
    'breakfast.bar.desc1': 'A qualquer hora do dia, sente-se no bar do hotel para compartilhar uma bebida, conversar ou simplesmente fazer uma pausa.',
    'breakfast.bar.desc2': 'Em um ambiente acolhedor e descontraído, é o lugar ideal para se reunir após um dia agitado.',
    
    // Seminars
    'seminars.badge': 'Espaço profissional',
    'seminars.title': 'Sala de seminários',
    'seminars.subtitle': 'Organize suas reuniões de forma diferente!',
    'seminars.desc1': 'O Hotel Inn Design Paris disponibiliza várias salas de seminário modernas e totalmente equipadas: flipchart, telas com projetor de vídeo, microfones e conexão wifi.',
    'seminars.desc2': 'Dependendo dos seus objetivos, diferentes configurações são possíveis para se adaptar perfeitamente às suas reuniões, treinamentos ou eventos profissionais.',
    'seminars.quote': 'Solicitar orçamento',
    'seminars.discover': 'Descobrir nossas salas',
    
    // Events
    'events.badge': 'Eventos e Ofertas',
    'events.title': 'Descubra nossa agenda e ofertas',
    'events.cta': 'Ver todos os eventos',
    
    // CTA
    'cta.badge': 'Melhor Preço Garantido',
    'cta.title': 'Reserve diretamente para as melhores tarifas',
    'cta.description': 'Ao reservar em nosso site oficial, beneficie-se da melhor tarifa disponível e vantagens exclusivas para sua estadia.',
    'cta.button': 'Reservar agora',
    'cta.contact': 'Entre em contato',
    
    // Footer
    'footer.description': 'Hotel 3 estrelas no coração do 13º arrondissement, a poucos passos da Place d\'Italie.',
    'footer.navigation': 'Navegação',
    'footer.contact': 'Contato',
    'footer.rights': 'Todos os direitos reservados.',
    'footer.legal': 'Avisos legais',
    'footer.privacy': 'Política de privacidade',
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
