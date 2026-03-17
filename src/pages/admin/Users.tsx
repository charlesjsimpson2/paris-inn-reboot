import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import AdminLayout from '@/components/admin/AdminLayout';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { UserPlus, Shield, ShieldOff, KeyRound } from 'lucide-react';
import type { Database } from '@/integrations/supabase/types';

type AppRole = Database['public']['Enums']['app_role'];

interface UserProfile {
  id: string;
  user_id: string;
  full_name: string | null;
  email: string | null;
  role: AppRole;
  is_active: boolean;
  created_at: string;
}

const roleColors: Record<AppRole, string> = {
  super_admin: 'bg-red-100 text-red-700',
  editor: 'bg-blue-100 text-blue-700',
  viewer: 'bg-gray-100 text-gray-700',
};

const roleLabels: Record<AppRole, string> = {
  super_admin: 'Super Admin',
  editor: 'Éditeur',
  viewer: 'Lecteur',
};

const UsersPage = () => {
  const [users, setUsers] = useState<UserProfile[]>([]);
  const [loading, setLoading] = useState(true);
  const [inviteEmail, setInviteEmail] = useState('');
  const [inviteRole, setInviteRole] = useState<AppRole>('viewer');
  const [inviting, setInviting] = useState(false);
  const [resetUserId, setResetUserId] = useState<string | null>(null);
  const [resetUserEmail, setResetUserEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [resetting, setResetting] = useState(false);
  const [resetDialogOpen, setResetDialogOpen] = useState(false);
  const { toast } = useToast();

  const fetchUsers = async () => {
    const { data } = await supabase
      .from('user_profiles')
      .select('id, user_id, full_name, email, role, is_active, created_at')
      .order('created_at', { ascending: true });
    setUsers((data as unknown as UserProfile[]) ?? []);
    setLoading(false);
  };

  useEffect(() => { fetchUsers(); }, []);

  const updateRole = async (profileId: string, newRole: AppRole) => {
    const { error } = await supabase.from('user_profiles').update({ role: newRole }).eq('id', profileId);
    if (error) {
      toast({ title: 'Erreur', description: error.message, variant: 'destructive' });
    } else {
      toast({ title: 'Rôle mis à jour' });
      fetchUsers();
    }
  };

  const toggleActive = async (profileId: string, currentlyActive: boolean) => {
    const { error } = await supabase.from('user_profiles').update({ is_active: !currentlyActive }).eq('id', profileId);
    if (error) {
      toast({ title: 'Erreur', description: error.message, variant: 'destructive' });
    } else {
      toast({ title: currentlyActive ? 'Compte désactivé' : 'Compte réactivé' });
      fetchUsers();
    }
  };

  const handleInvite = async () => {
    if (!inviteEmail.trim()) {
      toast({ title: 'Email requis', variant: 'destructive' });
      return;
    }
    setInviting(true);
    const { data, error } = await supabase.functions.invoke('invite-user', {
      body: { email: inviteEmail.trim(), role: inviteRole },
    });
    setInviting(false);
    if (error || data?.error) {
      toast({ title: 'Erreur', description: error?.message || data?.error, variant: 'destructive' });
    } else {
      toast({ title: 'Invitation envoyée', description: `Un magic link a été envoyé à ${inviteEmail}` });
      setInviteEmail('');
      fetchUsers();
    }
  };

  const handleResetPassword = async () => {
    if (!newPassword || newPassword.length < 6) {
      toast({ title: 'Le mot de passe doit faire au moins 6 caractères', variant: 'destructive' });
      return;
    }
    if (newPassword !== confirmPassword) {
      toast({ title: 'Les mots de passe ne correspondent pas', variant: 'destructive' });
      return;
    }
    setResetting(true);
    const { data, error } = await supabase.functions.invoke('reset-password', {
      body: { user_id: resetUserId, new_password: newPassword },
    });
    setResetting(false);
    if (error || data?.error) {
      toast({ title: 'Erreur', description: error?.message || data?.error, variant: 'destructive' });
    } else {
      toast({ title: 'Mot de passe mis à jour', description: `Le mot de passe de ${resetUserEmail} a été changé.` });
      setResetDialogOpen(false);
      setNewPassword('');
      setConfirmPassword('');
      setResetUserId(null);
    }
  };

  const openResetDialog = (userId: string, email: string) => {
    setResetUserId(userId);
    setResetUserEmail(email);
    setNewPassword('');
    setConfirmPassword('');
    setResetDialogOpen(true);
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Gestion des utilisateurs</h1>

        {/* Invite user */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><UserPlus className="h-5 w-5" /> Inviter un utilisateur</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1">
                <Label htmlFor="invite-email">Email</Label>
                <Input
                  id="invite-email"
                  type="email"
                  value={inviteEmail}
                  onChange={e => setInviteEmail(e.target.value)}
                  placeholder="email@exemple.com"
                />
              </div>
              <div className="w-full sm:w-48">
                <Label>Rôle</Label>
                <Select value={inviteRole} onValueChange={v => setInviteRole(v as AppRole)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="super_admin">Super Admin</SelectItem>
                    <SelectItem value="editor">Éditeur</SelectItem>
                    <SelectItem value="viewer">Lecteur</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-end">
                <Button onClick={handleInvite} disabled={inviting}>
                  <UserPlus className="h-4 w-4 mr-2" /> {inviting ? 'Envoi...' : 'Inviter'}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Users list */}
        {loading ? (
          <div className="flex justify-center py-12">
            <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
          </div>
        ) : (
          <div className="bg-card border rounded-lg">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nom</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Rôle</TableHead>
                  <TableHead>Statut</TableHead>
                  <TableHead>Inscrit le</TableHead>
                  <TableHead>Modifier le rôle</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.map(user => (
                  <TableRow key={user.id} className={!user.is_active ? 'opacity-50' : ''}>
                    <TableCell className="font-medium">{user.full_name || '—'}</TableCell>
                    <TableCell className="text-sm text-muted-foreground">{user.email || '—'}</TableCell>
                    <TableCell>
                      <Badge variant="secondary" className={roleColors[user.role]}>
                        {roleLabels[user.role]}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant="secondary" className={user.is_active ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}>
                        {user.is_active ? 'Actif' : 'Désactivé'}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">
                      {new Date(user.created_at).toLocaleDateString('fr-FR')}
                    </TableCell>
                    <TableCell>
                      <Select value={user.role} onValueChange={(val) => updateRole(user.id, val as AppRole)}>
                        <SelectTrigger className="w-40">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="super_admin">Super Admin</SelectItem>
                          <SelectItem value="editor">Éditeur</SelectItem>
                          <SelectItem value="viewer">Lecteur</SelectItem>
                        </SelectContent>
                      </Select>
                    </TableCell>
                    <TableCell className="text-right">
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button variant="ghost" size="icon" title={user.is_active ? 'Désactiver' : 'Réactiver'}>
                            {user.is_active ? <ShieldOff className="h-4 w-4 text-destructive" /> : <Shield className="h-4 w-4 text-green-600" />}
                          </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>{user.is_active ? 'Désactiver ce compte ?' : 'Réactiver ce compte ?'}</AlertDialogTitle>
                            <AlertDialogDescription>
                              {user.is_active
                                ? 'L\'utilisateur ne pourra plus accéder au backoffice.'
                                : 'L\'utilisateur pourra de nouveau accéder au backoffice.'}
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Annuler</AlertDialogCancel>
                            <AlertDialogAction onClick={() => toggleActive(user.id, user.is_active)}>
                              {user.is_active ? 'Désactiver' : 'Réactiver'}
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </div>
    </AdminLayout>
  );
};

export default UsersPage;
