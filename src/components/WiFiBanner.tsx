import { Wifi, Signal, Shield, Zap } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { LocalizedLink as Link } from "@/components/LocalizedLink";

interface WiFiBannerProps {
  compact?: boolean;
}

export const WiFiBanner = ({ compact = false }: WiFiBannerProps) => {
  const { t } = useLanguage();

  const specs = [
    { icon: Zap, label: t('wifi.spec.capacity') },
    { icon: Shield, label: t('wifi.spec.redundancy') },
    { icon: Signal, label: t('wifi.spec.accessPoints') },
  ];

  if (compact) {
    return (
      <div className="bg-primary/10 border border-primary/30 p-4 sm:p-5">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-1.5 bg-primary/20 rounded-sm">
            <Wifi className="w-4 h-4 text-primary" />
          </div>
          <span className="font-display text-sm sm:text-base text-foreground">{t('wifi.banner.title')}</span>
        </div>
        <p className="text-muted-foreground text-xs sm:text-sm mb-2">{t('wifi.banner.subtitle')}</p>
        <div className="flex flex-wrap gap-2">
          {specs.map((spec, idx) => (
            <span key={idx} className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs text-primary bg-primary/10 px-2 py-1">
              <spec.icon className="w-3 h-3" />
              {spec.label}
            </span>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-primary/5 border border-primary/20 p-6 sm:p-8">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2.5 bg-primary/15">
          <Wifi className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h3 className="font-display text-lg sm:text-xl text-foreground">{t('wifi.banner.title')}</h3>
          <p className="text-muted-foreground text-sm">{t('wifi.banner.subtitle')}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
        {specs.map((spec, idx) => (
          <div key={idx} className="flex items-center gap-3 bg-background/50 border border-border/30 p-3">
            <spec.icon className="w-5 h-5 text-primary flex-shrink-0" />
            <span className="text-sm text-foreground">{spec.label}</span>
          </div>
        ))}
      </div>

      <p className="text-muted-foreground text-sm leading-relaxed mb-3">
        {t('wifi.banner.desc')}
      </p>

      <Link to="/wifi" className="text-primary text-sm font-medium hover:underline inline-flex items-center gap-1">
        {t('wifi.banner.learnMore')} →
      </Link>
    </div>
  );
};
