import { useEffect } from "react";

/**
 * THN Connect AI - Redirection vers le fichier GEO llms.txt
 * 
 * Ce composant effectue une redirection immédiate vers le fichier llms.txt
 * hébergé chez The Hotels Network. Les crawlers IA modernes (ChatGPT,
 * Perplexity, etc.) exécutent JavaScript et suivront cette redirection.
 * 
 * Note : Sur Lovable, les redirections HTTP serveur (301/302) ne sont pas
 * configurables via _redirects ou vercel.json. Cette redirection client-side
 * est la méthode adaptée à l'hébergement Lovable.
 */
export default function THNConnectRedirect() {
  useEffect(() => {
    // Redirection immédiate vers le fichier GEO THN
    window.location.href = "https://thehotelsnetwork.com/static/thn-static-content/llms/01KDMWR73VHJ7R210SVGF3SX83/llms.txt";
  }, []);

  // Retourne un contenu minimal pendant la redirection
  return (
    <div style={{ 
      minHeight: "100vh", 
      display: "flex", 
      alignItems: "center", 
      justifyContent: "center",
      fontFamily: "system-ui, sans-serif",
      color: "#666"
    }}>
      <p>Chargement...</p>
    </div>
  );
}
