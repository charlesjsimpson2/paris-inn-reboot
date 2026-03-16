import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const { userProfile, user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate('/admin/login', { replace: true });
  };

  return (
    <div className="min-h-screen bg-muted/30 p-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
            <p className="text-sm text-muted-foreground">
              Connecté en tant que {user?.email} — Rôle : {userProfile?.role ?? 'chargement...'}
            </p>
          </div>
          <Button variant="outline" onClick={handleSignOut}>Déconnexion</Button>
        </div>

        <div className="bg-card border rounded-lg p-6">
          <p className="text-muted-foreground">L'interface d'administration sera construite ici.</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
