import { Train, MapPin, Clock, Hotel } from "lucide-react";
import hotelMetroFacade from "@/assets/hotel-metro-facade.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

interface EasyAccessSectionProps {
  venue: string;
  travelTime: string;
  metroLine?: string;
  metroRoute?: string;
  /** i18n key, e.g. "easyAccess.routes.accorArena" */
  metroRouteKey?: string;
  /** i18n key, e.g. "easyAccess.lines.line14" */
  metroLineKey?: string;
  accentColor?: string;
}

export const EasyAccessSection = ({
  venue,
  travelTime,
  metroLine = "Ligne 7",
  metroRoute = "Place d'Italie → destination",
  metroRouteKey,
  metroLineKey,
  accentColor = "from-primary via-primary/80 to-primary",
}: EasyAccessSectionProps) => {
  const { t } = useLanguage();

  const subtitleTemplate = t("easyAccess.subtitle");
  const subtitle = subtitleTemplate.includes("{venue}")
    ? subtitleTemplate.replace("{venue}", venue)
    : `${subtitleTemplate} ${venue}`;

  const metroLineLabel = metroLineKey ? t(metroLineKey) : metroLine;
  const metroRouteLabel = metroRouteKey ? t(metroRouteKey) : metroRoute;

  return (
    <section className={`py-12 bg-gradient-to-r ${accentColor} text-white`}>
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
              <Hotel className="w-5 h-5" />
              <span className="font-semibold">{t("easyAccess.badge")}</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl mb-2">{t("easyAccess.title")}</h2>
            <p className="text-white/90 text-lg">{subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div className="relative group">
              <div className="absolute -inset-2 bg-white/20 rounded-2xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity" />
              <img
                src={hotelMetroFacade}
                alt={t("easyAccess.imageAlt")}
                className="relative w-full h-auto rounded-xl shadow-xl object-cover aspect-[4/3]"
              />
            </div>

            <div className="space-y-4">
              <div className="bg-white/10 backdrop-blur-sm p-5 rounded-xl">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Train className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl">{t("easyAccess.byMetro")}</h3>
                    <p className="text-white/80 text-sm">{metroLineLabel}</p>
                  </div>
                </div>
                <p className="text-white/90 leading-relaxed">{metroRouteLabel}</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-5 rounded-xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl">{t("easyAccess.travelTime")}</h3>
                    <p className="text-2xl font-bold">{travelTime}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-5 rounded-xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl">{venue}</h3>
                    <p className="text-white/80 text-sm">{t("easyAccess.destinationLabel")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
