import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import AdminLayout from '@/components/admin/AdminLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Save, Lock, Building } from 'lucide-react';

interface SiteSettings {
  id: string;
  hotel_name: string;
  contact_email: string;
  contact_phone: string;
}

const SettingsPage = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [settings, setSettings] = useState<SiteSettings | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  // Password change
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [changingPassword, setChangingPassword] = useState(false);

  useEffect(() => {
    supabase.from('site_settings').select('id, hotel_name, contact_email, contact_phone').limit(1).single().then(({ data }) => {
      if (data) setSettings(data as unknown as SiteSettings);
      setLoading(false);
    });
  }, []);

  const handleSaveSettings = async () => {
    if (!settings) return;
    setSaving(true);
    const { error } = await supabase.from('site_settings').update({
      hotel_name: settings.hotel_name,
      contact_email: settings.contact_email,
      contact_phone: settings.contact_phone,
    }).eq('id', settings.id);
    setSaving(false);
    if (error) {
      toast({ title: 'Erreur', description: error.message, variant: 'destructive' });
    } else {
      toast({ title: 'Réglages sauvegardés' });
    }
  };

  const handleChangePassword = async () => {
    if (!newPassword || newPassword.length < 6) {
      toast({ title: 'Le mot de passe doit faire au moins 6 caractères', variant: 'destructive' });
      return;
    }
    if (newPassword !== confirmPassword) {
      toast({ title: 'Les mots de passe ne correspondent pas', variant: 'destructive' });
      return;
    }
    setChangingPassword(true);
    const { error } = await supabase.auth.updateUser({ password: newPassword });
    setChangingPassword(false);
    if (error) {
      toast({ title: 'Erreur', description: error.message, variant: 'destructive' });
    } else {
      toast({ title: 'Mot de passe mis à jour' });
      setNewPassword('');
      setConfirmPassword('');
    }
  };

  if (loading) {
    return (
      <AdminLayout>
        <div className="flex justify-center py-12">
          <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="space-y-6 max-w-2xl">
        <h1 className="text-2xl font-bold">Réglages</h1>

        {/* Change password */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><Lock className="h-5 w-5" /> Changer le mot de passe</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">Connecté : {user?.email}</p>
            <div>
              <Label>Nouveau mot de passe</Label>
              <Input type="password" value={newPassword} onChange={e => setNewPassword(e.target.value)} placeholder="••••••••" />
            </div>
            <div>
              <Label>Confirmer le mot de passe</Label>
              <Input type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} placeholder="••••••••" />
            </div>
            <Button onClick={handleChangePassword} disabled={changingPassword}>
              {changingPassword ? 'Mise à jour...' : 'Mettre à jour le mot de passe'}
            </Button>
          </CardContent>
        </Card>

        {/* Site settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><Building className="h-5 w-5" /> Informations du site</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label>Nom de l'hôtel</Label>
              <Input
                value={settings?.hotel_name ?? ''}
                onChange={e => setSettings(s => s ? { ...s, hotel_name: e.target.value } : s)}
                placeholder="Hôtel Paris Inn"
              />
            </div>
            <div>
              <Label>Email de contact</Label>
              <Input
                type="email"
                value={settings?.contact_email ?? ''}
                onChange={e => setSettings(s => s ? { ...s, contact_email: e.target.value } : s)}
                placeholder="contact@hotelparisinn.com"
              />
            </div>
            <div>
              <Label>Téléphone</Label>
              <Input
                type="tel"
                value={settings?.contact_phone ?? ''}
                onChange={e => setSettings(s => s ? { ...s, contact_phone: e.target.value } : s)}
                placeholder="+33 1 XX XX XX XX"
              />
            </div>
            <Button onClick={handleSaveSettings} disabled={saving}>
              <Save className="h-4 w-4 mr-2" /> {saving ? 'Sauvegarde...' : 'Sauvegarder'}
            </Button>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default SettingsPage;
