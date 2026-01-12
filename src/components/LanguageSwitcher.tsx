import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage, languages, Language } from '@/contexts/LanguageContext';

// Import flag images
import flagFr from '@/assets/flags/flag-fr.png';
import flagEn from '@/assets/flags/flag-en.png';
import flagEs from '@/assets/flags/flag-es.png';
import flagIt from '@/assets/flags/flag-it.png';
import flagPt from '@/assets/flags/flag-pt.png';
import flagDe from '@/assets/flags/flag-de.png';

const flagImages: Record<Language, string> = {
  fr: flagFr,
  en: flagEn,
  es: flagEs,
  it: flagIt,
  pt: flagPt,
  de: flagDe,
};

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLanguage = languages.find(l => l.code === language);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (code: Language) => {
    setLanguage(code);
    setIsOpen(false);
  };

  return (
    <div className="relative z-[70]" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 sm:gap-1.5 px-1.5 sm:px-2 py-1.5 text-sm bg-card/80 border border-border rounded hover:bg-card active:scale-95 transition-all min-h-[40px] min-w-[40px]"
        aria-label="Select language"
      >
        <img 
          src={flagImages[language]} 
          alt={currentLanguage?.name} 
          loading="lazy"
          className="w-5 h-4 object-cover rounded-sm shadow-sm"
        />
        <span className="text-xs font-medium hidden xs:inline">{currentLanguage?.code.toUpperCase()}</span>
        <ChevronDown className={`w-3 h-3 transition-transform hidden xs:block ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-36 sm:w-40 bg-card border border-border rounded-md shadow-lg z-[80] overflow-hidden">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleSelect(lang.code)}
              className={`w-full flex items-center gap-2 sm:gap-2.5 px-2.5 sm:px-3 py-2.5 text-sm text-left hover:bg-muted active:bg-muted/80 transition-colors min-h-[44px] ${
                language === lang.code ? 'bg-muted text-primary' : 'text-foreground'
              }`}
            >
              <img 
                src={flagImages[lang.code]} 
                alt={lang.name}
                loading="lazy"
                className="w-5 sm:w-6 h-4 object-cover rounded-sm shadow-sm"
              />
              <span className="text-xs">{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
