import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useData } from '../context/DataContext';
import { 
  Lock, 
  Mail, 
  AlertCircle, 
  CheckCircle2, 
  X, 
  ShieldCheck,
  KeyRound
} from 'lucide-react';

export default function LoginModal({ isOpen, onClose }) {
  const { login } = useAuth();
  const { users } = useData();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [resetMessage, setResetMessage] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setResetMessage('');
    setLoading(true);

    try {
      await login(email, password, users);
      onClose();
    } catch (err) {
      setError(err.message || 'Login failed. Please verify credentials.');
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = () => {
    if (!email.trim()) {
      setError('Enter your institutional email first.');
      return;
    }
    const cleanEmail = email.trim().toLowerCase();
    const user = users.find(u => u.institutionalEmail?.toLowerCase() === cleanEmail);
    if (!user) {
      setError('Email address is not in the authorized institutional registry.');
      return;
    }

    setResetMessage(`Password reset instruction sent to ${cleanEmail}. (Temporary password reset to Galgotias@2026).`);
    setError('');
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-slate-100 relative animate-in fade-in zoom-in-95 duration-150">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-500 flex items-center justify-center transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Branding */}
        <div className="text-center mb-6">
          <div className="w-16 h-16 rounded-2xl bg-white p-1 flex items-center justify-center mx-auto mb-3 shadow-lg border border-slate-200/80">
            <img src="./logo.png" alt="GEI Portal Logo" className="w-full h-full object-cover rounded-xl" />
          </div>
          <h2 className="text-xl font-black text-slate-900">
            Institutional Sign In
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Galgotias Educational Institutions • Student Council Portal
          </p>
        </div>

        {/* Notice on Pre-registration */}
        <div className="mb-5 p-3 bg-blue-50/70 border border-blue-200/60 rounded-xl text-xs text-blue-900 flex items-start gap-2">
          <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold block">Authorized Access Only</span>
            <span>Self-registration is disabled. Access is limited to pre-approved GCET club heads and administrators.</span>
          </div>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-rose-50 border border-rose-200 rounded-xl text-xs text-rose-800 flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {resetMessage && (
          <div className="mb-4 p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-800 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>{resetMessage}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Institutional Email
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                required
                placeholder="name.club@galgotias.edu"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-xs border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                Password
              </label>
              <button
                type="button"
                onClick={handleForgotPassword}
                className="text-[11px] text-blue-600 hover:text-blue-800 font-semibold"
              >
                Forgot Password?
              </button>
            </div>
            <div className="relative">
              <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                required
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-xs border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold shadow-md shadow-blue-600/30 transition-all flex items-center justify-center gap-2 disabled:bg-slate-400"
          >
            {loading ? 'Authenticating...' : 'Sign In to Portal'}
          </button>
        </form>

        {/* Quick Demo Credentials Footer */}
        <div className="mt-6 pt-4 border-t border-slate-100 text-[11px] text-slate-500">
          <span className="font-bold text-slate-700 block mb-1">Pre-Mapped Test Accounts:</span>
          <div className="space-y-1 text-slate-600">
            <div>• Admin: <code className="text-blue-600">ashish.awasthi@galgotias.edu</code></div>
            <div>• CEO: <code className="text-purple-600">ceo@galgotias.edu</code></div>
            <div>• Club Head: <code className="text-emerald-600">head.apex@galgotias.edu</code></div>
          </div>
        </div>

      </div>
    </div>
  );
}
