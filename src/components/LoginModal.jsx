import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useData } from '../context/DataContext';
import { 
  Lock, 
  Mail, 
  Phone,
  AlertCircle, 
  CheckCircle2, 
  X, 
  ShieldCheck,
  UserPlus,
  LogIn
} from 'lucide-react';

export default function LoginModal({ isOpen, onClose }) {
  const { login } = useAuth();
  const { users, registerMasterAdmin } = useData();

  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [resetMessage, setResetMessage] = useState('');

  // Setup mode when no users exist yet
  const [isSetupMode, setIsSetupMode] = useState(false);
  const [setupName, setSetupName] = useState('');
  const [setupEmail, setSetupEmail] = useState('');
  const [setupPhone, setSetupPhone] = useState('');
  const [setupPassword, setSetupPassword] = useState('');
  const [setupRole, setSetupRole] = useState('ADMIN');

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setResetMessage('');
    setLoading(true);

    try {
      if (isSetupMode) {
        if (!setupName.trim() || !setupEmail.trim() || !setupPassword.trim()) {
          throw new Error('Please fill all required setup fields.');
        }
        await registerMasterAdmin({
          name: setupName,
          institutionalEmail: setupEmail,
          phone: setupPhone,
          password: setupPassword,
          role: setupRole
        });
        // Login immediately with created account
        await login(setupEmail, setupPassword, [...users, { institutionalEmail: setupEmail, password: setupPassword, active: true }]);
        onClose();
      } else {
        await login(identifier, password, users);
        onClose();
      }
    } catch (err) {
      setError(err.message || 'Authentication failed. Please verify your credentials.');
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = () => {
    if (!identifier.trim()) {
      setError('Enter your institutional email or registered phone number first.');
      return;
    }
    const cleanInput = identifier.trim().toLowerCase();
    const user = users.find(u => 
      (u.institutionalEmail && u.institutionalEmail.toLowerCase() === cleanInput) ||
      (u.phone && u.phone.replace(/\D/g, '') === cleanInput.replace(/\D/g, ''))
    );

    if (!user) {
      setError('Account not found in institutional registry.');
      return;
    }

    setResetMessage(`Password reset instruction sent to registered contact. (Temporary password: Galgotias@2026).`);
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
            <img 
              src="./logo.webp" 
              alt="GEI Portal Logo" 
              width="64" 
              height="64" 
              className="w-full h-full object-cover rounded-xl" 
              loading="lazy" 
            />
          </div>
          <h2 className="text-xl font-black text-slate-900">
            {isSetupMode ? 'System Administrator Setup' : 'Institutional Sign In'}
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Galgotias Educational Institutions • Student Council Portal
          </p>
        </div>

        {/* First-time setup banner if no users exist */}
        {users.length === 0 && !isSetupMode && (
          <div className="mb-4 p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900 flex flex-col gap-2">
            <span className="font-bold">Initial System Bootstrap:</span>
            <span>No user accounts currently exist. Create your Master Administrator account to begin provisioning.</span>
            <button
              type="button"
              onClick={() => setIsSetupMode(true)}
              className="mt-1 px-3 py-1.5 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-lg text-xs self-start flex items-center gap-1.5 transition-colors"
            >
              <UserPlus className="w-3.5 h-3.5" />
              Initialize Master Admin Account
            </button>
          </div>
        )}

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
          
          {isSetupMode ? (
            <>
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Administrator Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Master Administrator"
                  value={setupName}
                  onChange={(e) => setSetupName(e.target.value)}
                  className="w-full px-3 py-2 text-xs border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Institutional Email (@galgotias.edu) *
                </label>
                <input
                  type="email"
                  required
                  placeholder="admin@galgotias.edu"
                  value={setupEmail}
                  onChange={(e) => setSetupEmail(e.target.value)}
                  className="w-full px-3 py-2 text-xs border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Contact Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 9876543210"
                  value={setupPhone}
                  onChange={(e) => setSetupPhone(e.target.value)}
                  className="w-full px-3 py-2 text-xs border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Initial Password *
                </label>
                <input
                  type="password"
                  required
                  minLength={6}
                  placeholder="••••••••"
                  value={setupPassword}
                  onChange={(e) => setSetupPassword(e.target.value)}
                  className="w-full px-3 py-2 text-xs border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
                />
              </div>

              <div className="flex items-center justify-between pt-2">
                <button
                  type="button"
                  onClick={() => setIsSetupMode(false)}
                  className="text-xs text-slate-500 hover:text-slate-800 font-semibold"
                >
                  Back to Sign In
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold shadow-md transition-all flex items-center gap-1.5"
                >
                  <UserPlus className="w-3.5 h-3.5" />
                  {loading ? 'Creating...' : 'Create Account'}
                </button>
              </div>
            </>
          ) : (
            <>
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Institutional Email or Phone Number
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    placeholder="email@galgotias.edu or Phone"
                    value={identifier}
                    onChange={(e) => setIdentifier(e.target.value)}
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
                <LogIn className="w-3.5 h-3.5" />
                {loading ? 'Authenticating...' : 'Sign In to Portal'}
              </button>

              {users.length === 0 && (
                <div className="text-center pt-2">
                  <button
                    type="button"
                    onClick={() => setIsSetupMode(true)}
                    className="text-xs text-blue-600 hover:text-blue-800 font-semibold"
                  >
                    Setup Initial Master Administrator
                  </button>
                </div>
              )}
            </>
          )}

        </form>

      </div>
    </div>
  );
}
