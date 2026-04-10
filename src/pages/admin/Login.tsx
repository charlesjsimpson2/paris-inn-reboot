import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/contexts/AuthContext';
import { useEffect } from 'react';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [resetMode, setResetMode] = useState(false);
  const [resetSent, setResetSent] = useState(false);
  const navigate = useNavigate();
  const { session } = useAuth();

  useEffect(() => {
    if (session) {
      navigate('/admin/dashboard', { replace: true });
    }
  }, [session, navigate]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      navigate('/admin/dashboard', { replace: true });
    }
  };

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/admin/reset-password`,
    });

    if (error) {
      setError(error.message);
    } else {
      setResetSent(true);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30 px-4">
      <div className="w-full max-w-sm space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-bold text-foreground">Administration</h1>
          <p className="text-sm text-muted-foreground">
            {resetMode ? 'Entrez votre email pour réinitialiser votre mot de passe' : 'Connectez-vous pour accéder au backoffice'}
          </p>
        </div>

        {resetSent ? (
          <div className="bg-card p-6 rounded-lg border shadow-sm text-center space-y-3">
            <p className="text-sm font-medium text-foreground">Email envoyé !</p>
            <p className="text-xs text-muted-foreground">
              Si un compte existe pour <strong>{email}</strong>, vous recevrez un lien de réinitialisation.
            </p>
            <Button variant="outline" size="sm" onClick={() => { setResetMode(false); setResetSent(false); }}>
              Retour à la connexion
            </Button>
          </div>
        ) : resetMode ? (
          <form onSubmit={handleForgotPassword} className="space-y-4 bg-card p-6 rounded-lg border shadow-sm">
            {error && (
              <div className="text-sm text-destructive bg-destructive/10 p-3 rounded-md">{error}</div>
            )}
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@hotel-inn-paris.com"
                required
              />
            </div>
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? 'Envoi...' : 'Envoyer le lien de réinitialisation'}
            </Button>
            <button
              type="button"
              onClick={() => { setResetMode(false); setError(''); }}
              className="text-xs text-muted-foreground hover:text-foreground w-full text-center"
            >
              Retour à la connexion
            </button>
          </form>
        ) : (
          <form onSubmit={handleLogin} className="space-y-4 bg-card p-6 rounded-lg border shadow-sm">
            {error && (
              <div className="text-sm text-destructive bg-destructive/10 p-3 rounded-md">{error}</div>
            )}
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@hotel-inn-paris.com"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Mot de passe</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
              />
            </div>
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? 'Connexion...' : 'Se connecter'}
            </Button>
            <button
              type="button"
              onClick={() => { setResetMode(true); setError(''); }}
              className="text-xs text-muted-foreground hover:text-foreground w-full text-center"
            >
              Mot de passe oublié ?
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default AdminLogin;
