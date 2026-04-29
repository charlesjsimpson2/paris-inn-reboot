/**
 * Vite plugin: Static SEO prerendering at build time.
 *
 * Generates one .html file per main route in the build output, each with
 * unique <title>, <meta description>, canonical, OG tags and hreflang
 * injected directly into the static HTML — visible to crawlers (Semrush,
 * GoogleBot, Bing) BEFORE any JavaScript executes.
 *
 * No Puppeteer / Chromium required → works on Lovable Hosting (which serves
 * static .html files in priority over the SPA fallback).
 *
 * The React app still hydrates normally on top of the prerendered HTML.
 */

import type { Plugin } from "vite";
import { writeFileSync, mkdirSync, readFileSync, existsSync } from "fs";
import { join, dirname } from "path";

type Lang = "fr" | "en" | "es" | "it" | "pt" | "de";

const BASE_URL = "https://hotel-inn-paris.fr";

const LOCALE_MAP: Record<Lang, string> = {
  fr: "fr_FR",
  en: "en_GB",
  es: "es_ES",
  it: "it_IT",
  pt: "pt_BR",
  de: "de_DE",
};

// SEO content per route, per language.
// Mirrors src/i18n/seoTranslations.ts but kept here to stay build-time pure
// (no need to import TS source from a Node script).
type SeoEntry = { title: string; description: string };

const SEO: Record<string, Partial<Record<Lang, SeoEntry>>> = {
  home: {
    fr: { title: "Hôtel Inn Design Paris Place d'Italie - 3 étoiles 13ème", description: "Hôtel 3 étoiles à Paris 13ème, à 2 min du métro Place d'Italie. 70 chambres, 3 salles séminaire, parking privé, WiFi très haut débit. Réservez en direct -15%." },
    en: { title: "Hôtel Inn Design Paris Place d'Italie - 3-star Hotel 13th", description: "3-star hotel in Paris 13th, 2 min from Place d'Italie metro. 70 rooms, 3 meeting rooms, private parking, ultra-fast WiFi. Book direct -15%." },
    es: { title: "Hôtel Inn Design Paris Place d'Italie - Hotel 3 estrellas 13º", description: "Hotel 3 estrellas en París 13º, a 2 min del metro Place d'Italie. 70 habitaciones, 3 salas de reuniones, parking privado, WiFi muy alta velocidad." },
    it: { title: "Hôtel Inn Design Paris Place d'Italie - Hotel 3 stelle 13°", description: "Hotel 3 stelle a Parigi 13°, a 2 min dalla metro Place d'Italie. 70 camere, 3 sale riunioni, parcheggio privato, WiFi ad altissima velocità." },
    pt: { title: "Hôtel Inn Design Paris Place d'Italie - Hotel 3 estrelas 13º", description: "Hotel 3 estrelas em Paris 13º, a 2 min do metro Place d'Italie. 70 quartos, 3 salas de reuniões, estacionamento privativo, WiFi de altíssima velocidade." },
    de: { title: "Hôtel Inn Design Paris Place d'Italie - 3-Sterne Hotel 13.", description: "3-Sterne-Hotel in Paris 13., 2 Min. von Metro Place d'Italie. 70 Zimmer, 3 Tagungsräume, Privatparkplatz, Highspeed-WLAN." },
  },
  rooms: {
    fr: { title: "Nos Chambres - Hôtel Inn Design Paris", description: "Découvrez nos chambres confortables à Paris 13ème : double, twin, supérieure avec balcon. WiFi gratuit, climatisation, TV écran plat. 3 chambres PMR." },
    en: { title: "Our Rooms - Hôtel Inn Design Paris", description: "Discover our comfortable rooms in Paris 13th: double, twin, superior with balcony. Free WiFi, air conditioning, flat-screen TV. 3 accessible rooms." },
  },
  seminars: {
    fr: { title: "Salles de Séminaires Paris - Hôtel Inn Design Paris", description: "3 salles de réunion modulables de 40 à 117m² au cœur de Paris 13ème. Équipement complet, WiFi très haut débit, vidéoprojecteur." },
    en: { title: "Meeting & Seminar Rooms Paris - Hôtel Inn Design Paris", description: "3 modular meeting rooms from 40 to 117 sqm in the heart of Paris 13th. Full equipment, ultra-fast WiFi, video projector." },
  },
  breakfast: {
    fr: { title: "Petit-déjeuner Buffet - Hôtel Inn Design Paris", description: "Petit-déjeuner buffet varié à l'Hôtel Inn Design Paris. Produits frais, viennoiseries, boissons chaudes. Gratuit pour les enfants de moins de 10 ans." },
    en: { title: "Breakfast Buffet - Hôtel Inn Design Paris", description: "Varied breakfast buffet at Hôtel Inn Design Paris. Fresh products, pastries, hot drinks. Free for children under 10." },
  },
  contact: {
    fr: { title: "Contact - Hôtel Inn Design Paris", description: "Contactez l'Hôtel Inn Design Paris Place d'Italie. Réservation, renseignements, demande de devis séminaire. Tél: +33 1 44 24 01 01" },
    en: { title: "Contact - Hôtel Inn Design Paris", description: "Contact Hôtel Inn Design Paris Place d'Italie. Reservations, information, seminar quote requests. Tel: +33 1 44 24 01 01" },
  },
  location: {
    fr: { title: "Localisation - Hôtel Inn Design Paris Place d'Italie", description: "Hôtel idéalement situé à 2 min du métro Place d'Italie (lignes 5, 6, 7). Accès direct Tour Eiffel, Louvre, Champs-Élysées. Paris 13ème." },
    en: { title: "Location - Hôtel Inn Design Paris Place d'Italie", description: "Hotel ideally located 2 min from Place d'Italie metro (lines 5, 6, 7). Direct access to Eiffel Tower, Louvre, Champs-Élysées. Paris 13th." },
  },
  wifi: {
    fr: { title: "WiFi Haut Débit - Hôtel Inn Design Paris | 3 Gbps, 25 bornes", description: "WiFi professionnel haut débit dans tout l'hôtel : 3 Gbps de capacité, triple redondance, 25 points d'accès sur 7 étages. Idéal télétravail et visioconférences." },
    en: { title: "High-Speed WiFi - Hôtel Inn Design Paris | 3 Gbps, 25 access points", description: "Professional high-speed WiFi throughout the hotel: 3 Gbps capacity, triple redundancy, 25 access points across 7 floors." },
  },
  discover: {
    fr: { title: "Découvrir Paris 13ème - Guide local | Hôtel Inn Design", description: "Découvrez le quartier Place d'Italie : restaurants, monuments, activités et bonnes adresses autour de l'Hôtel Inn Design Paris 13ème." },
    en: { title: "Discover Paris 13th - Local Guide | Hôtel Inn Design", description: "Discover the Place d'Italie neighborhood: restaurants, monuments, activities and great addresses around Hôtel Inn Design Paris 13th." },
  },
  events: {
    fr: { title: "Événements Paris 2026 - Concerts, Salons, Sports", description: "Découvrez les événements 2026 à Paris : concerts Accor Arena, salons professionnels, marathons. Réservez votre hébergement près du métro Place d'Italie." },
    en: { title: "Paris Events 2026 - Concerts, Trade Shows, Sports", description: "Discover 2026 Paris events: Accor Arena concerts, trade shows, marathons. Book your stay near Place d'Italie metro." },
  },
  blog: {
    fr: { title: "Blog hôtel Paris 13 - Hôtel Inn Design", description: "Conseils, actualités et guides pratiques pour préparer votre séjour à Paris 13 autour de l'Hôtel Inn Design Place d'Italie." },
    en: { title: "Paris 13 Hotel Blog - Hôtel Inn Design", description: "Tips, news and practical guides to prepare your stay in Paris 13 around Hôtel Inn Design Place d'Italie." },
  },
  tips: {
    fr: { title: "Conseils séjour Paris 13 - Hôtel Inn Design", description: "Nos meilleurs conseils pour préparer votre séjour à Paris 13e : astuces pratiques, bons plans et recommandations." },
    en: { title: "Paris 13 Travel Tips - Hôtel Inn Design", description: "Our best tips to prepare your stay in Paris 13th: practical advice, good deals and recommendations." },
  },
  legal: {
    fr: { title: "Mentions légales - Hôtel Inn Design Paris", description: "Mentions légales et informations sur l'éditeur du site Hôtel Inn Design Paris Place d'Italie." },
    en: { title: "Legal Notice - Hôtel Inn Design Paris", description: "Legal notice and publisher information for the Hôtel Inn Design Paris Place d'Italie website." },
  },
  requestQuote: {
    fr: { title: "Demande de devis Séminaire - Hôtel Inn Design Paris", description: "Demandez gratuitement un devis pour votre séminaire à Paris 13ème. 3 salles modulables, équipement pro, restauration sur place. Réponse sous 24h." },
    en: { title: "Seminar Quote Request - Hôtel Inn Design Paris", description: "Request a free quote for your seminar in Paris 13th. 3 modular rooms, pro equipment, on-site catering. Reply within 24h." },
  },
  planning: {
    fr: { title: "Planning des salles de séminaires - Hôtel Inn Design Paris", description: "Consultez en temps réel la disponibilité de nos 3 salles de séminaires à Paris 13ème. Bose, Fender, Marshall - jusqu'à 117m²." },
    en: { title: "Seminar Rooms Planning - Hôtel Inn Design Paris", description: "Check real-time availability of our 3 seminar rooms in Paris 13th. Bose, Fender, Marshall - up to 117 sqm." },
  },
};

// Event pages — unique titles per page (FR only, EN inherited from page-level <SEO />)
const EVENT_PAGES: Record<string, SeoEntry> = {
  "evenements/enfoires-2026": { title: "Les Enfoirés 2026 à Paris — Hôtel partenaire Accor Arena", description: "Concert Les Enfoirés 2026 à l'Accor Arena. Hôtel 3* à 15 min, parking sécurisé 15€, navette taxi -10%. Réservez avec -15%." },
  "evenements/tournoi-6-nations": { title: "Tournoi des 6 Nations 2026 à Paris — Hôtel partenaire", description: "Matches du Tournoi des 6 Nations au Stade de France. Hôtel 3* parisien proche RER, parking 15€, conciergerie sportive." },
  "evenements/salon-agriculture": { title: "Salon de l'Agriculture 2026 à Paris — Hôtel partenaire", description: "Salon International de l'Agriculture Porte de Versailles. Hôtel 3* à 20 min en métro, parking 15€, petit-déj robuste exposants." },
  "evenements/mika-concert": { title: "Concert Mika 2026 Accor Arena — Hôtel partenaire Paris", description: "Concert Mika à l'Accor Arena. Hôtel 3* parisien à 15 min, parking 15€, taxi -10% pour aller au show." },
  "evenements/clara-luciani-concert": { title: "Concert Clara Luciani Accor Arena — Hôtel partenaire", description: "Concert Clara Luciani à l'Accor Arena. Hébergement 3* proche, parking 15€, retour facile post-concert." },
  "evenements/semi-marathon-paris": { title: "Semi-Marathon de Paris 2026 — Hôtel partenaire runners", description: "Semi-Marathon de Paris : hôtel 3* avec petit-déj 06h30, services runners, sas dépôt sac, massage récupération." },
  "evenements/wu-tang-concert": { title: "Concert Wu-Tang Clan Accor Arena — Hôtel partenaire Paris", description: "Wu-Tang Clan en concert à l'Accor Arena. Hôtel 3* parisien proche, parking 15€, taxi -10%." },
  "evenements/france-angleterre": { title: "France-Angleterre Rugby 2026 Stade de France — Hôtel", description: "Match France-Angleterre au Stade de France. Hôtel 3* à Paris, RER B direct, parking 15€." },
  "evenements/guns-n-roses-concert": { title: "Concert Guns N' Roses Paris 2026 — Hôtel partenaire", description: "Guns N' Roses en concert à Paris. Hôtel 3* proche métro, parking 15€, retour garanti après show." },
  "evenements/scorpions-concert": { title: "Concert Scorpions Accor Arena 2026 — Hôtel partenaire", description: "Scorpions en concert à l'Accor Arena. Hôtel 3* parisien à 15 min, parking 15€, taxi -10%." },
  "evenements/meryl-concert": { title: "Concert Meryl Paris 2026 — Hôtel partenaire", description: "Meryl en concert à Paris. Hôtel 3* proche métro Place d'Italie, parking 15€." },
  "evenements/kery-james-concert": { title: "Concert Kery James Paris 2026 — Hôtel partenaire", description: "Kery James en concert à Paris. Hôtel 3* parisien proche salles, parking 15€, taxi -10%." },
  "evenements/orelsan-concert": { title: "Concert Orelsan Accor Arena 2026 — Hôtel partenaire", description: "Orelsan en concert à l'Accor Arena. Hôtel 3* parisien à 15 min, parking 15€, taxi -10%." },
  "evenements/indochine-concert": { title: "Concert Indochine Paris 2026 — Hôtel partenaire", description: "Indochine en concert à Paris. Hôtel 3* parisien proche, parking 15€, taxi -10% pour aller au show." },
  "evenements/salon-cse-mars": { title: "Salon CSE Mars 2026 Paris — Hôtel partenaire élus", description: "Salon CSE de mars à Paris Porte de Versailles. Hôtel 3* à 20 min, tarifs élus, parking 15€." },
  "evenements/salon-cse-septembre": { title: "Salon CSE Septembre 2026 Paris — Hôtel partenaire", description: "Salon CSE de septembre à Paris. Hôtel 3* parisien proche métro, tarifs élus, parking 15€." },
  "evenements/foire-de-paris": { title: "Foire de Paris 2026 — Hôtel partenaire Porte Versailles", description: "Foire de Paris Porte de Versailles. Hôtel 3* à 20 min, parking 15€, retour facile chargé d'achats." },
  "evenements/sante-expo": { title: "SantéExpo 2026 Paris — Hôtel partenaire professionnels", description: "SantéExpo Paris Porte de Versailles. Hôtel 3* à 20 min, tarifs pro, parking 15€, petit-déj 06h30." },
  "evenements/euro-pcr": { title: "EuroPCR 2026 Paris — Hôtel partenaire cardiologues", description: "Congrès EuroPCR au Palais des Congrès. Hôtel 3* parisien, tarifs congressistes, parking 15€." },
  "evenements/eurosatory": { title: "Eurosatory 2026 — Hôtel partenaire Villepinte", description: "Salon Eurosatory au Parc des Expositions de Villepinte. Hôtel 3* à Paris, RER B direct, tarifs pro." },
  "evenements/japan-expo": { title: "Japan Expo 2026 Villepinte — Hôtel partenaire fans", description: "Japan Expo Parc des Expositions Villepinte. Hôtel 3* parisien, RER B direct, parking 15€." },
  "evenements/tex-world": { title: "Texworld 2026 Paris — Hôtel partenaire textile", description: "Salon Texworld à Paris. Hôtel 3* parisien proche, tarifs exposants, parking 15€." },
  "evenements/sial": { title: "SIAL 2026 Villepinte — Hôtel partenaire agroalimentaire", description: "Salon SIAL Parc des Expositions Villepinte. Hôtel 3* parisien, RER B direct, tarifs pro." },
  "evenements/20-km-paris": { title: "20 km de Paris 2026 — Hôtel partenaire runners", description: "20 km de Paris : hôtel 3* avec petit-déj coureurs 06h30, sas dépôt sac, massage récupération." },
  "evenements/marathon-paris": { title: "Marathon de Paris 2026 — Hôtel partenaire runners", description: "Marathon de Paris : hôtel 3* services runners, petit-déj 06h00, dépôt sac, récupération post-course." },
  "evenements/equiphotel": { title: "EquipHotel 2026 Paris — Hôtel partenaire hôteliers", description: "Salon EquipHotel Porte de Versailles. Hôtel 3* à 20 min, tarifs pros hôteliers, parking 15€." },
  "evenements/congres-accdom": { title: "Congrès ACCD'OM 2026 Paris — Hôtel partenaire élus", description: "Congrès ACCD'OM à Paris. Hôtel 3* parisien proche métro, tarifs élus, parking 15€." },
  "evenements/congres-maires": { title: "Congrès des Maires 2026 Paris — Hôtel partenaire élus", description: "Congrès des Maires de France Porte de Versailles. Hôtel 3* à 20 min, tarifs élus, parking 15€." },
};

const STATIC_ROUTES: Array<{ path: string; key: keyof typeof SEO; lang: Lang }> = [
  // FR
  { path: "/", key: "home", lang: "fr" },
  { path: "/nos-chambres", key: "rooms", lang: "fr" },
  { path: "/seminaires", key: "seminars", lang: "fr" },
  { path: "/petit-dejeuner", key: "breakfast", lang: "fr" },
  { path: "/contact", key: "contact", lang: "fr" },
  { path: "/localisation", key: "location", lang: "fr" },
  { path: "/wifi", key: "wifi", lang: "fr" },
  { path: "/decouvrir-paris", key: "discover", lang: "fr" },
  { path: "/evenements", key: "events", lang: "fr" },
  { path: "/blog", key: "blog", lang: "fr" },
  { path: "/conseils", key: "tips", lang: "fr" },
  { path: "/mentions-legales", key: "legal", lang: "fr" },
  { path: "/reservation-seminaire", key: "requestQuote", lang: "fr" },
  { path: "/planning-seminaire", key: "planning", lang: "fr" },
  // EN
  { path: "/en", key: "home", lang: "en" },
  { path: "/en/rooms", key: "rooms", lang: "en" },
  { path: "/en/seminars", key: "seminars", lang: "en" },
  { path: "/en/breakfast", key: "breakfast", lang: "en" },
  { path: "/en/contact", key: "contact", lang: "en" },
  { path: "/en/location", key: "location", lang: "en" },
  { path: "/en/wifi", key: "wifi", lang: "en" },
  { path: "/en/discover-paris", key: "discover", lang: "en" },
  { path: "/en/events", key: "events", lang: "en" },
  { path: "/en/blog", key: "blog", lang: "en" },
  { path: "/en/tips", key: "tips", lang: "en" },
  { path: "/en/legal-notice", key: "legal", lang: "en" },
];

const escapeHtml = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const buildHeadInjection = (
  title: string,
  description: string,
  canonicalUrl: string,
  lang: Lang
): string => {
  const ogLocale = LOCALE_MAP[lang];
  const t = escapeHtml(title);
  const d = escapeHtml(description);
  const c = escapeHtml(canonicalUrl);
  return `
    <!-- ========== Prerendered SEO (build-time, per-route) ========== -->
    <link rel="canonical" href="${c}" />
    <meta property="og:title" content="${t}" />
    <meta property="og:description" content="${d}" />
    <meta property="og:url" content="${c}" />
    <meta property="og:locale" content="${ogLocale}" />
    <meta name="twitter:title" content="${t}" />
    <meta name="twitter:description" content="${d}" />
    <!-- ========== /Prerendered SEO ========== -->`;
};

const renderHtml = (
  template: string,
  title: string,
  description: string,
  canonicalUrl: string,
  lang: Lang
): string => {
  let html = template;

  // Replace <html lang="fr"> with the proper lang attribute
  html = html.replace(/<html\s+lang="[^"]*"/i, `<html lang="${lang}"`);

  // Replace the default <title>
  html = html.replace(/<title>[^<]*<\/title>/i, `<title>${escapeHtml(title)}</title>`);

  // Replace the default <meta name="description">
  html = html.replace(
    /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/i,
    `<meta name="description" content="${escapeHtml(description)}" />`
  );

  // Replace OG title/description (default ones in template)
  html = html.replace(
    /<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/i,
    `<meta property="og:title" content="${escapeHtml(title)}" />`
  );
  html = html.replace(
    /<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/i,
    `<meta property="og:description" content="${escapeHtml(description)}" />`
  );
  html = html.replace(
    /<meta\s+property="og:locale"\s+content="[^"]*"\s*\/?>/i,
    `<meta property="og:locale" content="${LOCALE_MAP[lang]}" />`
  );
  html = html.replace(
    /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/?>/i,
    `<meta name="twitter:title" content="${escapeHtml(title)}" />`
  );
  html = html.replace(
    /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/?>/i,
    `<meta name="twitter:description" content="${escapeHtml(description)}" />`
  );

  // Inject canonical (and reinforce OG url) right before </head>
  const injection = `    <link rel="canonical" href="${escapeHtml(canonicalUrl)}" />
    <meta property="og:url" content="${escapeHtml(canonicalUrl)}" />
  </head>`;
  html = html.replace(/<\/head>/i, injection);

  return html;
};

export const seoPrerenderPlugin = (): Plugin => {
  return {
    name: "seo-prerender",
    apply: "build",
    closeBundle() {
      const distDir = join(process.cwd(), "dist");
      const indexPath = join(distDir, "index.html");

      if (!existsSync(indexPath)) {
        console.warn("[seo-prerender] dist/index.html not found, skipping prerender");
        return;
      }

      const template = readFileSync(indexPath, "utf-8");

      // Build all routes: static (home + EN/FR core) + event detail pages (FR)
      const allRoutes: Array<{ path: string; title: string; description: string; lang: Lang }> = [];

      for (const route of STATIC_ROUTES) {
        const seoEntry = SEO[route.key]?.[route.lang] ?? SEO[route.key]?.fr;
        if (!seoEntry) continue;
        allRoutes.push({
          path: route.path,
          title: seoEntry.title,
          description: seoEntry.description,
          lang: route.lang,
        });
      }

      for (const [path, entry] of Object.entries(EVENT_PAGES)) {
        allRoutes.push({
          path: `/${path}`,
          title: entry.title,
          description: entry.description,
          lang: "fr",
        });
      }

      let count = 0;
      for (const route of allRoutes) {
        const canonicalUrl = `${BASE_URL}${route.path === "/" ? "" : route.path}` || BASE_URL;
        const fullTitle = route.title.includes("Hôtel Inn")
          ? route.title
          : `${route.title} | Hôtel Inn Design Paris Place d'Italie`;
        const html = renderHtml(template, fullTitle, route.description, canonicalUrl, route.lang);

        // Output: dist/<route>/index.html (so static hosting serves it on GET <route>)
        const outPath =
          route.path === "/"
            ? indexPath // homepage: overwrite dist/index.html
            : join(distDir, route.path.replace(/^\//, ""), "index.html");

        mkdirSync(dirname(outPath), { recursive: true });
        writeFileSync(outPath, html, "utf-8");
        count++;
      }

      console.log(`[seo-prerender] ✓ Generated ${count} prerendered HTML files with unique titles & meta`);

      // ========== Auto-generate sitemap.xml + sitemap-index.xml ==========
      const today = new Date().toISOString().split("T")[0];
      const langs: Lang[] = ["fr", "en", "es", "it", "pt", "de"];

      // Map FR canonical paths → localized paths per language (mirrors src/i18n/routes.ts)
      const LOCALIZED_PATHS: Record<string, Partial<Record<Lang, string>>> = {
        "/": { fr: "/", en: "/en/", es: "/es/", it: "/it/", pt: "/pt/", de: "/de/" },
        "/nos-chambres": { fr: "/nos-chambres", en: "/en/rooms", es: "/es/nos-chambres", it: "/it/nos-chambres", pt: "/pt/nos-chambres", de: "/de/nos-chambres" },
        "/seminaires": { fr: "/seminaires", en: "/en/seminars", es: "/es/seminaires", it: "/it/seminaires", pt: "/pt/seminaires", de: "/de/seminaires" },
        "/petit-dejeuner": { fr: "/petit-dejeuner", en: "/en/breakfast", es: "/es/petit-dejeuner", it: "/it/petit-dejeuner", pt: "/pt/petit-dejeuner", de: "/de/petit-dejeuner" },
        "/contact": { fr: "/contact", en: "/en/contact", es: "/es/contact", it: "/it/contact", pt: "/pt/contact", de: "/de/contact" },
        "/localisation": { fr: "/localisation", en: "/en/location", es: "/es/localisation", it: "/it/localisation", pt: "/pt/localisation", de: "/de/localisation" },
        "/wifi": { fr: "/wifi", en: "/en/wifi", es: "/es/wifi", it: "/it/wifi", pt: "/pt/wifi", de: "/de/wifi" },
        "/decouvrir-paris": { fr: "/decouvrir-paris", en: "/en/discover-paris", es: "/es/decouvrir-paris", it: "/it/decouvrir-paris", pt: "/pt/decouvrir-paris", de: "/de/decouvrir-paris" },
        "/evenements": { fr: "/evenements", en: "/en/events", es: "/es/evenements", it: "/it/evenements", pt: "/pt/evenements", de: "/de/evenements" },
        "/blog": { fr: "/blog", en: "/en/blog", es: "/es/blog", it: "/it/blog", pt: "/pt/blog", de: "/de/blog" },
        "/conseils": { fr: "/conseils", en: "/en/tips", es: "/es/conseils", it: "/it/conseils", pt: "/pt/conseils", de: "/de/conseils" },
        "/reservation-seminaire": { fr: "/reservation-seminaire", en: "/en/request-quote", es: "/es/reservation-seminaire", it: "/it/reservation-seminaire", pt: "/pt/reservation-seminaire", de: "/de/reservation-seminaire" },
        "/planning-seminaire": { fr: "/planning-seminaire", en: "/en/seminar-planning", es: "/es/planning-seminaire", it: "/it/planning-seminaire", pt: "/pt/planning-seminaire", de: "/de/planning-seminaire" },
        "/mentions-legales": { fr: "/mentions-legales", en: "/en/legal-notice", es: "/es/mentions-legales", it: "/it/mentions-legales", pt: "/pt/mentions-legales", de: "/de/mentions-legales" },
      };

      const PAGE_PRIORITIES: Record<string, { priority: string; changefreq: string }> = {
        "/": { priority: "1.0", changefreq: "weekly" },
        "/nos-chambres": { priority: "0.9", changefreq: "monthly" },
        "/seminaires": { priority: "0.8", changefreq: "monthly" },
        "/contact": { priority: "0.8", changefreq: "monthly" },
        "/evenements": { priority: "0.8", changefreq: "weekly" },
        "/blog": { priority: "0.7", changefreq: "weekly" },
        "/conseils": { priority: "0.7", changefreq: "weekly" },
        "/petit-dejeuner": { priority: "0.7", changefreq: "monthly" },
        "/localisation": { priority: "0.7", changefreq: "monthly" },
        "/decouvrir-paris": { priority: "0.7", changefreq: "monthly" },
        "/reservation-seminaire": { priority: "0.7", changefreq: "monthly" },
        "/planning-seminaire": { priority: "0.5", changefreq: "monthly" },
        "/wifi": { priority: "0.4", changefreq: "monthly" },
        "/mentions-legales": { priority: "0.3", changefreq: "yearly" },
      };

      // -------- sitemap-pages.xml (multilingual core pages with hreflang) --------
      const pageEntries: string[] = [];
      for (const [frPath, locales] of Object.entries(LOCALIZED_PATHS)) {
        const cfg = PAGE_PRIORITIES[frPath] || { priority: "0.6", changefreq: "monthly" };
        const altLinks = langs
          .filter((l) => locales[l])
          .map((l) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${BASE_URL}${locales[l]}"/>`)
          .join("\n");
        const xDefault = `    <xhtml:link rel="alternate" hreflang="x-default" href="${BASE_URL}${frPath}"/>`;
        for (const l of langs) {
          const loc = locales[l];
          if (!loc) continue;
          pageEntries.push(
            `  <url>\n    <loc>${BASE_URL}${loc}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${cfg.changefreq}</changefreq>\n    <priority>${cfg.priority}</priority>\n${altLinks}\n${xDefault}\n  </url>`
          );
        }
      }

      const sitemapPages = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${pageEntries.join("\n")}
</urlset>
`;
      writeFileSync(join(distDir, "sitemap-pages.xml"), sitemapPages, "utf-8");

      // -------- sitemap-events.xml (FR event detail pages) --------
      const eventEntries = Object.keys(EVENT_PAGES).map(
        (p) => `  <url>\n    <loc>${BASE_URL}/${p}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.6</priority>\n  </url>`
      );
      const sitemapEvents = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${eventEntries.join("\n")}
</urlset>
`;
      writeFileSync(join(distDir, "sitemap-events.xml"), sitemapEvents, "utf-8");

      // -------- sitemap-guides.xml (FR discover-paris sub-guides) --------
      const guidePaths = [
        "decouvrir-paris/quartier-chinois",
        "decouvrir-paris/butte-aux-cailles",
        "decouvrir-paris/bnf-francois-mitterrand",
        "decouvrir-paris/centre-italie-2",
        "decouvrir-paris/cuisine-italienne",
        "decouvrir-paris/cuisine-asiatique",
        "decouvrir-paris/cuisine-francaise",
        "decouvrir-paris/street-food",
      ];
      const guideEntries = guidePaths.map(
        (p) => `  <url>\n    <loc>${BASE_URL}/${p}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.6</priority>\n  </url>`
      );
      const sitemapGuides = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${guideEntries.join("\n")}
</urlset>
`;
      writeFileSync(join(distDir, "sitemap-guides.xml"), sitemapGuides, "utf-8");

      // -------- sitemap-index.xml (master index) --------
      const sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${BASE_URL}/sitemap-pages.xml</loc>
    <lastmod>${today}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${BASE_URL}/sitemap-events.xml</loc>
    <lastmod>${today}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${BASE_URL}/sitemap-guides.xml</loc>
    <lastmod>${today}</lastmod>
  </sitemap>
</sitemapindex>
`;
      writeFileSync(join(distDir, "sitemap-index.xml"), sitemapIndex, "utf-8");

      // -------- sitemap.xml (legacy alias = sitemap-index for back-compat) --------
      writeFileSync(join(distDir, "sitemap.xml"), sitemapIndex, "utf-8");

      console.log(
        `[seo-prerender] ✓ Generated sitemaps: ${pageEntries.length} page URLs, ${eventEntries.length} events, ${guideEntries.length} guides + sitemap-index`
      );
    },
  };
};
