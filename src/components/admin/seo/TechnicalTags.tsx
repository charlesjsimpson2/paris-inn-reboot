import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Save, Code } from 'lucide-react';
import type { ExtendedSiteSettings } from './types';

interface Props {
  settings: ExtendedSiteSettings;
  onChange: (settings: ExtendedSiteSettings) => void;
  onSave: () => void;
  saving: boolean;
}

const defaultOrgSchema = `{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Hôtel Inn Design Paris Place d'Italie",
  "url": "https://hotel-inn-paris.fr",
  "logo": "https://hotel-inn-paris.fr/logo.png",
  "telephone": "+33 1 45 86 88 60",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "178 Boulevard Vincent Auriol",
    "addressLocality": "Paris",
    "postalCode": "75013",
    "addressCountry": "FR"
  },
  "sameAs": []
}`;

const defaultLocalBusinessSchema = `{
  "@context": "https://schema.org",
  "@type": "Hotel",
  "name": "Hôtel Inn Design Paris Place d'Italie",
  "url": "https://hotel-inn-paris.fr",
  "telephone": "+33 1 45 86 88 60",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "178 Boulevard Vincent Auriol",
    "addressLocality": "Paris",
    "postalCode": "75013",
    "addressCountry": "FR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 48.8346,
    "longitude": 2.3579
  },
  "priceRange": "€€"
}`;

const TechnicalTags = ({ settings, onChange, onSave, saving }: Props) => {
  const update = (key: keyof ExtendedSiteSettings, value: string) => {
    onChange({ ...settings, [key]: value });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2"><Code className="h-5 w-5" /> Balises techniques globales</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label>Favicon URL</Label>
            <Input value={settings.favicon_url} onChange={e => update('favicon_url', e.target.value)} placeholder="https://... ou /favicon.ico" />
          </div>
          <div>
            <Label>OG Image par défaut</Label>
            <Input value={settings.og_image_url} onChange={e => update('og_image_url', e.target.value)} placeholder="https://..." />
            {settings.og_image_url && (
              <img src={settings.og_image_url} alt="OG Preview" className="mt-2 h-16 rounded border object-cover" />
            )}
          </div>
          <div>
            <Label>Langue par défaut</Label>
            <Select value={settings.default_language} onValueChange={v => update('default_language', v)}>
              <SelectTrigger><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="fr">Français (fr)</SelectItem>
                <SelectItem value="en">English (en)</SelectItem>
                <SelectItem value="es">Español (es)</SelectItem>
                <SelectItem value="de">Deutsch (de)</SelectItem>
                <SelectItem value="it">Italiano (it)</SelectItem>
                <SelectItem value="zh">中文 (zh)</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label>URL canonique de base</Label>
            <Input value={settings.canonical_base_url} onChange={e => update('canonical_base_url', e.target.value)} placeholder="https://hotel-inn-paris.fr" />
          </div>
        </div>
        <div>
          <Label>JSON-LD Organization Schema</Label>
          <Textarea
            value={settings.jsonld_organization || defaultOrgSchema}
            onChange={e => update('jsonld_organization', e.target.value)}
            className="font-mono text-xs"
            rows={12}
          />
        </div>
        <div>
          <Label>JSON-LD LocalBusiness / Hotel Schema</Label>
          <Textarea
            value={settings.jsonld_localbusiness || defaultLocalBusinessSchema}
            onChange={e => update('jsonld_localbusiness', e.target.value)}
            className="font-mono text-xs"
            rows={12}
          />
        </div>
        <Button onClick={onSave} disabled={saving}>
          <Save className="h-4 w-4 mr-2" /> {saving ? 'Sauvegarde...' : 'Enregistrer'}
        </Button>
      </CardContent>
    </Card>
  );
};

export default TechnicalTags;
