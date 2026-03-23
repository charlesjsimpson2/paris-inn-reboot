import { useEffect, useState, useCallback, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import AdminLayout from '@/components/admin/AdminLayout';
import RichTextEditor, { type RichTextEditorHandle } from '@/components/admin/RichTextEditor';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { useToast } from '@/hooks/use-toast';
import { ChevronDown, Save, Send, ArrowLeft, CalendarIcon, Plus, Trash2, MapPin, Train, ExternalLink } from 'lucide-react';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { cn } from '@/lib/utils';
import type { Database } from '@/integrations/supabase/types';

type ArticleCategory = Database['public']['Enums']['article_category'];

const slugify = (text: string) =>
  text.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

const CATEGORIES: { value: ArticleCategory; label: string }[] = [
  { value: 'concert', label: '🎵 Concert' },
  { value: 'salon', label: '🏛️ Salon' },
  { value: 'sport', label: '⚽ Sport' },
  { value: 'congres', label: '📋 Congrès' },
  { value: 'guide', label: '📖 Guide' },
  { value: 'actualite', label: '📰 Actualité' },
  { value: 'seminaires', label: '🎤 Séminaires' },
  { value: 'connectivite_equipement', label: '📡 Connectivité / Équipement' },
  { value: 'partenaires', label: '🤝 Partenaires' },
  { value: 'partenaires_gourmands', label: '🍽️ Partenaires gourmands' },
  { value: 'chambres', label: '🛏️ Chambres' },
];

interface Offer {
  icon: string;
  title: string;
  description: string;
  details: string;
}

interface EasyAccess {
  venue: string;
  travelTime: string;
  metroLine: string;
  metroRoute: string;
}

const getPreviewPath = (slug: string, category: ArticleCategory | '') => {
  if (!slug) return null;
  const isEventCategory = category === 'concert' || category === 'salon' || category === 'sport' || category === 'congres';
  return isEventCategory ? `/evenements/${slug}` : `/blog/${slug}`;
};

const ArticleEditor = () => {
  const { id } = useParams();
  const isNew = id === 'new';
  const navigate = useNavigate();
  const { userProfile } = useAuth();
  const { toast } = useToast();

  // Base fields
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [content, setContent] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [coverImageUrl, setCoverImageUrl] = useState('');
  const [heroImageUrl, setHeroImageUrl] = useState('');
  const [status, setStatus] = useState<'draft' | 'published'>('draft');
  const [seoTitle, setSeoTitle] = useState('');
  const [seoDescription, setSeoDescription] = useState('');
  const [seoKeywords, setSeoKeywords] = useState('');
  const [seoOpen, setSeoOpen] = useState(false);
  const [saving, setSaving] = useState(false);
  const [lastSaved, setLastSaved] = useState<Date | null>(null);
  const [autoSlug, setAutoSlug] = useState(true);
  const contentEditorRef = useRef<RichTextEditorHandle>(null);
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
  const autoSaveTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const initialLoadDoneRef = useRef(false);

  // Event fields
  const [category, setCategory] = useState<ArticleCategory | ''>('');
  const [eventDate, setEventDate] = useState<Date | undefined>();
  const [eventEndDate, setEventEndDate] = useState<Date | undefined>();
  const [eventVenue, setEventVenue] = useState('');
  const [eventVenueAddress, setEventVenueAddress] = useState('');
  const [isFeatured, setIsFeatured] = useState(false);
  const [sortOrder, setSortOrder] = useState(0);

  // Offers
  const [offers, setOffers] = useState<Offer[]>([]);
  const [offersOpen, setOffersOpen] = useState(false);

  // Easy access / transport
  const [easyAccess, setEasyAccess] = useState<EasyAccess>({ venue: '', travelTime: '', metroLine: '', metroRoute: '' });
  const [transportOpen, setTransportOpen] = useState(false);

  // Mark initial load as done after data loads
  useEffect(() => {
    if (!isNew && id) {
      supabase.from('articles').select('*').eq('id', id).single().then(({ data }) => {
        if (data) {
          setTitle(data.title);
          setSlug(data.slug);
          setContent(data.content ?? '');
          setExcerpt(data.excerpt ?? '');
          setCoverImageUrl(data.cover_image_url ?? '');
          setHeroImageUrl(data.hero_image_url ?? '');
          setStatus(data.status);
          setSeoTitle(data.seo_title ?? '');
          setSeoDescription(data.seo_description ?? '');
          setSeoKeywords(data.seo_keywords ?? '');
          setCategory(data.category ?? '');
          setEventDate(data.event_date ? new Date(data.event_date) : undefined);
          setEventEndDate(data.event_end_date ? new Date(data.event_end_date) : undefined);
          setEventVenue(data.event_venue ?? '');
          setEventVenueAddress(data.event_venue_address ?? '');
          setIsFeatured(data.is_featured ?? false);
          setSortOrder(data.sort_order ?? 0);
          setOffers(Array.isArray(data.offers) ? (data.offers as unknown as Offer[]) : []);
          if (data.easy_access && typeof data.easy_access === 'object' && !Array.isArray(data.easy_access)) {
            const ea = data.easy_access as Record<string, unknown>;
            setEasyAccess({
              venue: (ea.venue as string) ?? '',
              travelTime: (ea.travelTime as string) ?? '',
              metroLine: (ea.metroLine as string) ?? '',
              metroRoute: (ea.metroRoute as string) ?? '',
            });
          }
          setAutoSlug(false);
          // Mark load done after a tick so initial state changes don't trigger autosave
          setTimeout(() => { initialLoadDoneRef.current = true; }, 500);
        }
      });
    } else {
      initialLoadDoneRef.current = true;
    }
  }, [id, isNew]);

  useEffect(() => {
    if (autoSlug) setSlug(slugify(title));
  }, [title, autoSlug]);

  // Track unsaved changes
  useEffect(() => {
    if (initialLoadDoneRef.current) {
      setHasUnsavedChanges(true);
    }
  }, [title, content, excerpt, coverImageUrl, heroImageUrl, category, eventDate, eventEndDate, eventVenue, eventVenueAddress, isFeatured, sortOrder, offers, easyAccess, seoTitle, seoDescription, seoKeywords]);

  // Auto-save every 30 seconds when there are unsaved changes
  useEffect(() => {
    if (!hasUnsavedChanges || !title.trim() || !slug.trim()) return;

    autoSaveTimerRef.current = setTimeout(async () => {
      // Don't auto-save if already saving or if currently published (avoid overwriting published status)
      if (saving) return;
      
      const latestContent = contentEditorRef.current?.getHTML() ?? content;
      const payload = {
        title, slug, content: latestContent, excerpt,
        cover_image_url: coverImageUrl || null,
        hero_image_url: heroImageUrl || null,
        status: status as 'draft' | 'published',
        seo_title: seoTitle || null,
        seo_description: seoDescription || null,
        seo_keywords: seoKeywords || null,
        category: category || null,
        event_date: eventDate?.toISOString() ?? null,
        event_end_date: eventEndDate?.toISOString() ?? null,
        event_venue: eventVenue || null,
        event_venue_address: eventVenueAddress || null,
        is_featured: isFeatured,
        sort_order: sortOrder,
        offers: offers.length > 0 ? offers : [],
        easy_access: (easyAccess.venue || easyAccess.travelTime) ? easyAccess : null,
      };

      let error;
      if (isNew) {
        if (!userProfile) return;
        const res = await supabase.from('articles').insert({ ...payload, status: 'draft', created_by: userProfile.id } as any).select().single();
        error = res.error;
        if (!error && res.data) navigate(`/admin/articles/${res.data.id}`, { replace: true });
      } else {
        const res = await supabase.from('articles').update(payload as any).eq('id', id!);
        error = res.error;
      }

      if (!error) {
        setHasUnsavedChanges(false);
        setLastSaved(new Date());
      }
    }, 30000);

    return () => {
      if (autoSaveTimerRef.current) clearTimeout(autoSaveTimerRef.current);
    };
  }, [hasUnsavedChanges, title, slug, saving]);

  const handleImageUpload = useCallback(async (): Promise<string | null> => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    return new Promise((resolve) => {
      input.onchange = async () => {
        const file = input.files?.[0];
        if (!file) return resolve(null);
        const path = `articles/${Date.now()}-${file.name}`;
        const { error } = await supabase.storage.from('media').upload(path, file);
        if (error) { toast({ title: 'Erreur upload', description: error.message, variant: 'destructive' }); return resolve(null); }
        const { data: urlData } = supabase.storage.from('media').getPublicUrl(path);
        if (userProfile) {
          await supabase.from('media').insert({
            filename: file.name,
            storage_path: path,
            url: urlData.publicUrl,
            uploaded_by: userProfile.id,
          });
        }
        resolve(urlData.publicUrl);
      };
      input.click();
    });
  }, [toast, userProfile]);

  const handleCoverUpload = async () => {
    const url = await handleImageUpload();
    if (url) setCoverImageUrl(url);
  };

  const handleHeroUpload = async () => {
    const url = await handleImageUpload();
    if (url) setHeroImageUrl(url);
  };

  // Offers management
  const addOffer = () => setOffers([...offers, { icon: 'Car', title: '', description: '', details: '' }]);
  const removeOffer = (index: number) => setOffers(offers.filter((_, i) => i !== index));
  const updateOffer = (index: number, field: keyof Offer, value: string) => {
    const updated = [...offers];
    updated[index] = { ...updated[index], [field]: value };
    setOffers(updated);
  };

  const save = async (newStatus?: 'draft' | 'published') => {
    if (!title.trim() || !slug.trim()) {
      toast({ title: 'Titre et slug requis', variant: 'destructive' });
      return;
    }
    setSaving(true);
    const finalStatus = newStatus ?? status;
    const latestContent = contentEditorRef.current?.getHTML() ?? content;

    if (latestContent !== content) {
      setContent(latestContent);
    }

    const payload = {
      title, slug, content: latestContent, excerpt,
      cover_image_url: coverImageUrl || null,
      hero_image_url: heroImageUrl || null,
      status: finalStatus,
      seo_title: seoTitle || null,
      seo_description: seoDescription || null,
      seo_keywords: seoKeywords || null,
      category: category || null,
      event_date: eventDate?.toISOString() ?? null,
      event_end_date: eventEndDate?.toISOString() ?? null,
      event_venue: eventVenue || null,
      event_venue_address: eventVenueAddress || null,
      is_featured: isFeatured,
      sort_order: sortOrder,
      offers: offers.length > 0 ? offers : [],
      easy_access: (easyAccess.venue || easyAccess.travelTime) ? easyAccess : null,
    };

    let error;
    if (isNew) {
      if (!userProfile) { setSaving(false); return; }
      const res = await supabase.from('articles').insert({ ...payload, created_by: userProfile.id } as any).select().single();
      error = res.error;
      if (!error && res.data) navigate(`/admin/articles/${res.data.id}`, { replace: true });
    } else {
      const res = await supabase.from('articles').update(payload as any).eq('id', id!);
      error = res.error;
    }

    setSaving(false);
    if (error) {
      toast({ title: 'Erreur', description: error.message, variant: 'destructive' });
    } else {
      setStatus(finalStatus);
      setLastSaved(new Date());
      setHasUnsavedChanges(false);
      toast({ title: finalStatus === 'published' ? 'Article publié !' : 'Brouillon sauvegardé' });
    }
  };

  const isEvent = category === 'concert' || category === 'salon' || category === 'sport' || category === 'congres';

  return (
    <AdminLayout>
      <div className="max-w-4xl space-y-6">
        {/* Header */}
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" onClick={() => navigate('/admin/articles')}>
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <h1 className="text-2xl font-bold">{isNew ? 'Nouvel article' : 'Modifier l\'article'}</h1>
          <span className="text-xs text-muted-foreground ml-auto flex items-center gap-2">
            {hasUnsavedChanges && <span className="inline-block h-2 w-2 rounded-full bg-amber-400" title="Modifications non sauvegardées" />}
            {lastSaved ? `Sauvegardé à ${lastSaved.toLocaleTimeString('fr-FR')}` : hasUnsavedChanges ? 'Sauvegarde auto dans 30s…' : ''}
          </span>
        </div>

        <div className="space-y-4">
          {/* Title + Slug */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="title">Titre</Label>
              <Input id="title" value={title} onChange={e => setTitle(e.target.value)} placeholder="Titre de l'article" />
            </div>
            <div>
              <Label htmlFor="slug">Slug</Label>
              <div className="flex gap-2 items-center">
                <Input id="slug" value={slug} onChange={e => { setAutoSlug(false); setSlug(e.target.value); }} placeholder="url-de-larticle" />
                <Switch checked={autoSlug} onCheckedChange={setAutoSlug} />
                <span className="text-xs text-muted-foreground whitespace-nowrap">Auto</span>
              </div>
            </div>
          </div>

          {/* Category + Featured + Sort */}
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <Label>Catégorie</Label>
              <Select value={category} onValueChange={(v) => setCategory(v as ArticleCategory)}>
                <SelectTrigger>
                  <SelectValue placeholder="Choisir une catégorie" />
                </SelectTrigger>
                <SelectContent>
                  {CATEGORIES.map(c => (
                    <SelectItem key={c.value} value={c.value}>{c.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-end gap-3">
              <div className="flex items-center gap-2">
                <Switch checked={isFeatured} onCheckedChange={setIsFeatured} id="featured" />
                <Label htmlFor="featured" className="text-sm">Mis en avant</Label>
              </div>
            </div>
            <div>
              <Label>Ordre d'affichage</Label>
              <Input type="number" value={sortOrder} onChange={e => setSortOrder(parseInt(e.target.value) || 0)} />
            </div>
          </div>

          {/* Event-specific fields */}
          {isEvent && (
            <div className="border rounded-lg p-4 space-y-4 bg-muted/20">
              <h3 className="font-semibold text-sm flex items-center gap-2">
                <CalendarIcon className="h-4 w-4" /> Informations événement
              </h3>

              {/* Dates */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label>Date de début</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className={cn("w-full justify-start text-left font-normal", !eventDate && "text-muted-foreground")}>
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {eventDate ? format(eventDate, 'PPP', { locale: fr }) : 'Choisir une date'}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar mode="single" selected={eventDate} onSelect={setEventDate} initialFocus className="p-3 pointer-events-auto" />
                    </PopoverContent>
                  </Popover>
                </div>
                <div>
                  <Label>Date de fin</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className={cn("w-full justify-start text-left font-normal", !eventEndDate && "text-muted-foreground")}>
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {eventEndDate ? format(eventEndDate, 'PPP', { locale: fr }) : 'Choisir une date'}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar mode="single" selected={eventEndDate} onSelect={setEventEndDate} initialFocus className="p-3 pointer-events-auto" />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>

              {/* Venue */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label className="flex items-center gap-1"><MapPin className="h-3 w-3" /> Lieu</Label>
                  <Input value={eventVenue} onChange={e => setEventVenue(e.target.value)} placeholder="ex: Accor Arena" />
                </div>
                <div>
                  <Label>Adresse du lieu</Label>
                  <Input value={eventVenueAddress} onChange={e => setEventVenueAddress(e.target.value)} placeholder="8 Boulevard de Bercy, 75012 Paris" />
                </div>
              </div>

              {/* Transport / Easy Access */}
              <Collapsible open={transportOpen} onOpenChange={setTransportOpen}>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" size="sm" className="w-full justify-between">
                    <span className="flex items-center gap-2"><Train className="h-4 w-4" /> Accès transport</span>
                    <ChevronDown className={`h-4 w-4 transition-transform ${transportOpen ? 'rotate-180' : ''}`} />
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-3 pt-3">
                  <div className="grid md:grid-cols-2 gap-3">
                    <div>
                      <Label className="text-xs">Lieu de destination</Label>
                      <Input value={easyAccess.venue} onChange={e => setEasyAccess({ ...easyAccess, venue: e.target.value })} placeholder="Accor Arena" />
                    </div>
                    <div>
                      <Label className="text-xs">Temps de trajet</Label>
                      <Input value={easyAccess.travelTime} onChange={e => setEasyAccess({ ...easyAccess, travelTime: e.target.value })} placeholder="~15 min" />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div>
                      <Label className="text-xs">Ligne de métro</Label>
                      <Input value={easyAccess.metroLine} onChange={e => setEasyAccess({ ...easyAccess, metroLine: e.target.value })} placeholder="Ligne 6" />
                    </div>
                    <div>
                      <Label className="text-xs">Itinéraire</Label>
                      <Input value={easyAccess.metroRoute} onChange={e => setEasyAccess({ ...easyAccess, metroRoute: e.target.value })} placeholder="Place d'Italie → Bercy" />
                    </div>
                  </div>
                </CollapsibleContent>
              </Collapsible>

              {/* Offers */}
              <Collapsible open={offersOpen} onOpenChange={setOffersOpen}>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" size="sm" className="w-full justify-between">
                    <span>🎁 Offres exclusives ({offers.length})</span>
                    <ChevronDown className={`h-4 w-4 transition-transform ${offersOpen ? 'rotate-180' : ''}`} />
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-3 pt-3">
                  {offers.map((offer, i) => (
                    <div key={i} className="border rounded-md p-3 space-y-2 bg-background">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-medium text-muted-foreground">Offre {i + 1}</span>
                        <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => removeOffer(i)}>
                          <Trash2 className="h-3 w-3 text-destructive" />
                        </Button>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <Label className="text-xs">Icône</Label>
                          <Input value={offer.icon} onChange={e => updateOffer(i, 'icon', e.target.value)} placeholder="Car, Coffee, Beer..." className="text-sm" />
                        </div>
                        <div>
                          <Label className="text-xs">Titre</Label>
                          <Input value={offer.title} onChange={e => updateOffer(i, 'title', e.target.value)} placeholder="Parking sécurisé" className="text-sm" />
                        </div>
                      </div>
                      <div>
                        <Label className="text-xs">Description</Label>
                        <Input value={offer.description} onChange={e => updateOffer(i, 'description', e.target.value)} placeholder="Place de parking privée..." className="text-sm" />
                      </div>
                      <div>
                        <Label className="text-xs">Détail / Prix</Label>
                        <Input value={offer.details} onChange={e => updateOffer(i, 'details', e.target.value)} placeholder="15€/nuit" className="text-sm" />
                      </div>
                    </div>
                  ))}
                  <Button variant="outline" size="sm" onClick={addOffer} className="w-full">
                    <Plus className="h-4 w-4 mr-1" /> Ajouter une offre
                  </Button>
                </CollapsibleContent>
              </Collapsible>
            </div>
          )}

          {/* Images */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label>Image de couverture</Label>
              <div className="flex gap-2 items-center">
                <Input value={coverImageUrl} onChange={e => setCoverImageUrl(e.target.value)} placeholder="URL de l'image" className="flex-1" />
                <Button type="button" variant="outline" size="sm" onClick={handleCoverUpload}>Upload</Button>
              </div>
              {coverImageUrl && <img src={coverImageUrl} alt="cover" className="mt-2 rounded-md max-h-32 object-cover" />}
            </div>
            <div>
              <Label>Image hero (événement)</Label>
              <div className="flex gap-2 items-center">
                <Input value={heroImageUrl} onChange={e => setHeroImageUrl(e.target.value)} placeholder="URL de l'image hero" className="flex-1" />
                <Button type="button" variant="outline" size="sm" onClick={handleHeroUpload}>Upload</Button>
              </div>
              {heroImageUrl && <img src={heroImageUrl} alt="hero" className="mt-2 rounded-md max-h-32 object-cover" />}
            </div>
          </div>

          {/* Excerpt */}
          <div>
            <Label htmlFor="excerpt">Extrait</Label>
            <Textarea id="excerpt" value={excerpt} onChange={e => setExcerpt(e.target.value)} placeholder="Courte description..." rows={3} />
          </div>

          {/* Content */}
          <div>
            <Label>Contenu</Label>
            <RichTextEditor ref={contentEditorRef} content={content} onChange={setContent} onImageUpload={handleImageUpload} />
          </div>

          {/* SEO */}
          <Collapsible open={seoOpen} onOpenChange={setSeoOpen}>
            <CollapsibleTrigger asChild>
              <Button variant="outline" className="w-full justify-between">
                Paramètres SEO
                <ChevronDown className={`h-4 w-4 transition-transform ${seoOpen ? 'rotate-180' : ''}`} />
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="space-y-4 pt-4">
              <div>
                <Label>Titre SEO</Label>
                <Input value={seoTitle} onChange={e => setSeoTitle(e.target.value)} placeholder={title} />
                <p className="text-xs text-muted-foreground mt-1">{(seoTitle || title).length}/60 caractères</p>
              </div>
              <div>
                <Label>Description SEO</Label>
                <Textarea value={seoDescription} onChange={e => setSeoDescription(e.target.value)} placeholder="Description pour les moteurs de recherche" rows={3} />
                <p className="text-xs text-muted-foreground mt-1">{seoDescription.length}/160 caractères</p>
              </div>
              <div>
                <Label>Mots-clés</Label>
                <Input value={seoKeywords} onChange={e => setSeoKeywords(e.target.value)} placeholder="mot-clé1, mot-clé2, ..." />
              </div>
              {(seoTitle || title) && (
                <div className="border rounded-md p-4 bg-muted/30">
                  <p className="text-sm font-medium text-blue-600">{seoTitle || title}</p>
                  <p className="text-xs text-green-700">{`paris-inn.com/blog/${slug}`}</p>
                  <p className="text-xs text-muted-foreground mt-1">{seoDescription || excerpt || 'Aucune description.'}</p>
                </div>
              )}
            </CollapsibleContent>
          </Collapsible>

          {/* Actions */}
          <div className="flex flex-wrap gap-3 pt-4 border-t">
            {getPreviewPath(slug, category) && (
              <Button variant="outline" asChild>
                <a href={getPreviewPath(slug, category) ?? '#'} target="_blank" rel="noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" /> Preview
                </a>
              </Button>
            )}
            <Button variant="outline" onClick={() => save('draft')} disabled={saving}>
              <Save className="h-4 w-4 mr-2" /> Sauvegarder brouillon
            </Button>
            <Button onClick={() => save('published')} disabled={saving}>
              <Send className="h-4 w-4 mr-2" /> Publier
            </Button>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default ArticleEditor;