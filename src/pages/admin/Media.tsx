import { useEffect, useState, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import AdminLayout from '@/components/admin/AdminLayout';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Upload, Copy, Trash2, ImageIcon } from 'lucide-react';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import type { Tables } from '@/integrations/supabase/types';

const MediaPage = () => {
  const [mediaItems, setMediaItems] = useState<Tables<'media'>[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const { userProfile } = useAuth();
  const { toast } = useToast();

  const fetchMedia = async () => {
    const { data } = await supabase.from('media').select('*').order('created_at', { ascending: false });
    setMediaItems(data ?? []);
    setLoading(false);
  };

  useEffect(() => { fetchMedia(); }, []);

  const uploadFiles = useCallback(async (files: FileList | File[]) => {
    if (!userProfile) return;
    setUploading(true);
    for (const file of Array.from(files)) {
      const path = `uploads/${Date.now()}-${file.name}`;
      const { error } = await supabase.storage.from('media').upload(path, file);
      if (error) {
        toast({ title: 'Erreur', description: error.message, variant: 'destructive' });
        continue;
      }
      const { data: urlData } = supabase.storage.from('media').getPublicUrl(path);
      await supabase.from('media').insert({
        filename: file.name,
        storage_path: path,
        url: urlData.publicUrl,
        uploaded_by: userProfile.id,
      });
    }
    setUploading(false);
    fetchMedia();
    toast({ title: 'Upload terminé' });
  }, [userProfile, toast]);

  const handleFileSelect = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.multiple = true;
    input.onchange = () => { if (input.files) uploadFiles(input.files); };
    input.click();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    if (e.dataTransfer.files.length) uploadFiles(e.dataTransfer.files);
  };

  const copyUrl = (url: string) => {
    navigator.clipboard.writeText(url);
    toast({ title: 'URL copiée !' });
  };

  const handleDelete = async (item: Tables<'media'>) => {
    await supabase.storage.from('media').remove([item.storage_path]);
    const { error } = await supabase.from('media').delete().eq('id', item.id);
    if (error) {
      toast({ title: 'Erreur', description: error.message, variant: 'destructive' });
    } else {
      toast({ title: 'Média supprimé' });
      fetchMedia();
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Médiathèque</h1>
          <Button onClick={handleFileSelect} disabled={uploading}>
            <Upload className="h-4 w-4 mr-2" /> {uploading ? 'Upload...' : 'Ajouter'}
          </Button>
        </div>

        <div
          onDragOver={e => { e.preventDefault(); setDragOver(true); }}
          onDragLeave={() => setDragOver(false)}
          onDrop={handleDrop}
          className={`border-2 border-dashed rounded-lg p-12 text-center transition-colors ${dragOver ? 'border-primary bg-primary/5' : 'border-muted-foreground/30'}`}
        >
          <ImageIcon className="h-10 w-10 mx-auto text-muted-foreground mb-3" />
          <p className="text-muted-foreground">Glissez-déposez vos images ici ou <button className="text-primary underline" onClick={handleFileSelect}>parcourez</button></p>
        </div>

        {loading ? (
          <div className="flex justify-center py-12">
            <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
          </div>
        ) : mediaItems.length === 0 ? (
          <p className="text-muted-foreground text-center py-12">Aucun média.</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {mediaItems.map(item => (
              <div key={item.id} className="group relative border rounded-lg overflow-hidden bg-card">
                <div className="aspect-square">
                  <img src={item.url} alt={item.filename} className="w-full h-full object-cover" />
                </div>
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                  <Button variant="secondary" size="icon" className="h-8 w-8" onClick={() => copyUrl(item.url)}>
                    <Copy className="h-4 w-4" />
                  </Button>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button variant="destructive" size="icon" className="h-8 w-8">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Supprimer ce média ?</AlertDialogTitle>
                        <AlertDialogDescription>Cette action est irréversible.</AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Annuler</AlertDialogCancel>
                        <AlertDialogAction onClick={() => handleDelete(item)}>Supprimer</AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
                <p className="text-xs truncate p-2 text-muted-foreground">{item.filename}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </AdminLayout>
  );
};

export default MediaPage;
