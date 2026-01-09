import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { useLanguage } from "@/contexts/LanguageContext";

const MentionsLegales = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title={t('legal.seo.title')}
        description={t('legal.seo.description')}
        canonical="/mentions-legales"
      />
      <Header />
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl text-foreground mb-4">
              {t('legal.title')}
            </h1>
            <p className="text-muted-foreground">
              {t('legal.lastUpdate')}
            </p>
          </div>

          {/* Content */}
          <div className="space-y-10 text-muted-foreground">
            {/* Éditeur du site */}
            <section>
              <h2 className="font-display text-xl sm:text-2xl text-foreground mb-4">{t('legal.editor.title')}</h2>
              <div className="space-y-2 text-sm sm:text-base">
                <p><strong className="text-foreground">{t('legal.editor.name')} :</strong> Hôtel Inn Design Paris Place d'Italie</p>
                <p><strong className="text-foreground">{t('legal.editor.legalForm')} :</strong> SARL</p>
                <p><strong className="text-foreground">{t('legal.editor.capital')} :</strong> 10 000 €</p>
                <p><strong className="text-foreground">{t('legal.editor.address')} :</strong> 178 Boulevard Vincent Auriol, 75013 Paris, France</p>
                <p><strong className="text-foreground">{t('legal.editor.phone')} :</strong> +33 (0)1 44 24 01 01</p>
                <p><strong className="text-foreground">{t('legal.editor.email')} :</strong> hid.paris13@gmail.com</p>
              </div>
            </section>

            {/* Hébergement */}
            <section>
              <h2 className="font-display text-xl sm:text-2xl text-foreground mb-4">{t('legal.hosting.title')}</h2>
              <div className="space-y-2 text-sm sm:text-base">
                <p><strong className="text-foreground">{t('legal.hosting.provider')} :</strong> Lovable (Netlify)</p>
                <p><strong className="text-foreground">{t('legal.hosting.address')} :</strong> San Francisco, CA, USA</p>
                <p><strong className="text-foreground">{t('legal.hosting.website')} :</strong> <a href="https://lovable.dev" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">lovable.dev</a></p>
              </div>
            </section>

            {/* Propriété intellectuelle */}
            <section>
              <h2 className="font-display text-xl sm:text-2xl text-foreground mb-4">{t('legal.intellectual.title')}</h2>
              <p className="text-sm sm:text-base leading-relaxed">
                {t('legal.intellectual.content')}
              </p>
            </section>

            {/* Données personnelles */}
            <section>
              <h2 className="font-display text-xl sm:text-2xl text-foreground mb-4">{t('legal.data.title')}</h2>
              <p className="text-sm sm:text-base leading-relaxed mb-4">
                {t('legal.data.content1')}
              </p>
              <p className="text-sm sm:text-base leading-relaxed">
                {t('legal.data.content2')}
              </p>
            </section>

            {/* Cookies */}
            <section>
              <h2 className="font-display text-xl sm:text-2xl text-foreground mb-4">{t('legal.cookies.title')}</h2>
              <p className="text-sm sm:text-base leading-relaxed">
                {t('legal.cookies.content')}
              </p>
            </section>

            {/* Responsabilité */}
            <section>
              <h2 className="font-display text-xl sm:text-2xl text-foreground mb-4">{t('legal.liability.title')}</h2>
              <p className="text-sm sm:text-base leading-relaxed">
                {t('legal.liability.content')}
              </p>
            </section>

            {/* Droit applicable */}
            <section>
              <h2 className="font-display text-xl sm:text-2xl text-foreground mb-4">{t('legal.law.title')}</h2>
              <p className="text-sm sm:text-base leading-relaxed">
                {t('legal.law.content')}
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MentionsLegales;
