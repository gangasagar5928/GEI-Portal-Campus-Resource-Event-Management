import React, { useState, useEffect, lazy, Suspense } from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import { DataProvider, useData } from './context/DataContext';
import Navbar from './components/Navbar';
import PublicSchedule from './components/PublicSchedule';
import PwaInstallBanner from './components/PwaInstallBanner';
import MobileBottomNav from './components/MobileBottomNav';
import { 
  Building2, 
  ShieldCheck, 
  Heart, 
  Lock, 
  CheckCircle2,
  Calendar,
  Loader2
} from 'lucide-react';

// Code Splitting: Lazy load authenticated portals to minimize initial bundle size
const ClubHeadDashboard = lazy(() => import('./components/ClubHeadDashboard'));
const AdminDashboard = lazy(() => import('./components/AdminDashboard'));
const CeoDashboard = lazy(() => import('./components/CeoDashboard'));
const LoginModal = lazy(() => import('./components/LoginModal'));

const LoadingFallback = () => (
  <div className="flex items-center justify-center py-24 text-slate-400">
    <Loader2 className="w-8 h-8 animate-spin text-red-700" />
  </div>
);

function AppContent() {
  const { currentUser, updatePassword, isAdmin, isCeo, isClubHead } = useAuth();
  const { academicYear } = useData();

  // Active navigation tab
  const [activeTab, setActiveTab] = useState(() => {
    if (isAdmin) return 'admin-requests';
    if (isCeo) return 'ceo-approvals';
    if (isClubHead) return 'club-requests';
    return 'schedule';
  });

  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [newPasswordInput, setNewPasswordInput] = useState('');
  const [showPasswordChangeModal, setShowPasswordChangeModal] = useState(false);

  // Sync tab with role change
  useEffect(() => {
    if (isAdmin && (activeTab === 'club-requests' || activeTab === 'new-request' || activeTab === 'ceo-approvals')) {
      setActiveTab('admin-requests');
    } else if (isCeo && (activeTab === 'club-requests' || activeTab === 'new-request' || activeTab === 'admin-requests' || activeTab === 'admin-equipment' || activeTab === 'admin-registry')) {
      setActiveTab('ceo-approvals');
    } else if (isClubHead && (activeTab === 'admin-requests' || activeTab === 'admin-equipment' || activeTab === 'admin-registry' || activeTab === 'ceo-approvals')) {
      setActiveTab('club-requests');
    }
  }, [currentUser]);

  // First time login password change requirement (PRD Section 4)
  useEffect(() => {
    if (currentUser?.mustChangePassword) {
      setShowPasswordChangeModal(true);
    }
  }, [currentUser]);

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (!newPasswordInput || newPasswordInput.length < 6) {
      alert('Password must be at least 6 characters long.');
      return;
    }
    updatePassword(newPasswordInput);
    setShowPasswordChangeModal(false);
    setNewPasswordInput('');
    alert('Password updated successfully!');
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-['Plus_Jakarta_Sans',sans-serif]">
      
      {/* PWA Mobile App Install Prompt Banner */}
      <PwaInstallBanner />

      {/* Institutional Top Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenLogin={() => setIsLoginOpen(true)}
      />

      {/* Main Content Viewport */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 pb-24 md:pb-8">
        
        {/* VIEW 1: Auditorium Public Schedule (Fast Critical Path) */}
        {activeTab === 'schedule' && (
          <PublicSchedule onOpenRequest={() => {
            if (currentUser) {
              setActiveTab(isClubHead ? 'new-request' : isAdmin ? 'schedule' : 'schedule');
            } else {
              setIsLoginOpen(true);
            }
          }} />
        )}

        {/* Authenticated Lazy Views wrapped in Suspense */}
        <Suspense fallback={<LoadingFallback />}>
          {/* VIEW 2: Club Head Dashboard - Requests */}
          {activeTab === 'club-requests' && (
            <ClubHeadDashboard
              initialMode="my-requests"
              onSwitchToSchedule={() => setActiveTab('schedule')}
            />
          )}

          {/* VIEW 3: Club Head Dashboard - New Request */}
          {activeTab === 'new-request' && (
            <ClubHeadDashboard
              initialMode="new-request"
              onSwitchToSchedule={() => setActiveTab('schedule')}
            />
          )}

          {/* VIEW 4: Administrative Dashboard - Requests Queue */}
          {activeTab === 'admin-requests' && (
            <AdminDashboard initialSubTab="requests" />
          )}

          {/* VIEW 5: Administrative Dashboard - Schedule Management */}
          {activeTab === 'admin-schedule' && (
            <AdminDashboard initialSubTab="schedule" />
          )}

          {/* VIEW 6: Administrative Dashboard - Equipment Inventory */}
          {activeTab === 'admin-equipment' && (
            <AdminDashboard initialSubTab="equipment" />
          )}

          {/* VIEW 7: Administrative Dashboard - 21 Clubs & Account Registry */}
          {activeTab === 'admin-registry' && (
            <AdminDashboard initialSubTab="registry" />
          )}

          {/* VIEW 8: CEO Higher Approver Review Queue */}
          {activeTab === 'ceo-approvals' && (
            <CeoDashboard />
          )}
        </Suspense>

      </main>

      {/* Mandatory Password Change Dialog on First Login (PRD Section 4) */}
      {showPasswordChangeModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-md w-full my-auto max-h-[90vh] overflow-y-auto p-5 sm:p-6 shadow-2xl border border-slate-100">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center mb-3">
              <Lock className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">
              Change Initial Temporary Password
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Welcome, <strong>{currentUser?.name}</strong>. Institutional policy requires updating your temporary password on your first sign-in.
            </p>

            <form onSubmit={handlePasswordSubmit} className="mt-4 space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  New Secure Password *
                </label>
                <input
                  type="password"
                  required
                  minLength={6}
                  value={newPasswordInput}
                  onChange={(e) => setNewPasswordInput(e.target.value)}
                  placeholder="At least 6 characters..."
                  className="w-full p-2.5 text-xs border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 font-medium"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 bg-gradient-to-r from-red-700 to-amber-600 hover:from-red-800 hover:to-amber-700 text-white rounded-xl text-xs font-bold shadow-md shadow-red-700/30 transition-colors"
              >
                Set Password & Proceed
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Institutional Sign In Modal (Lazy Loaded) */}
      {isLoginOpen && (
        <Suspense fallback={<LoadingFallback />}>
          <LoginModal
            isOpen={isLoginOpen}
            onClose={() => setIsLoginOpen(false)}
          />
        </Suspense>
      )}

      {/* Mobile Fixed Bottom Navigation Bar (PWA Ergonomics) */}
      <MobileBottomNav
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenLogin={() => setIsLoginOpen(true)}
      />

      {/* Institutional Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 mt-12 py-6 pb-24 md:pb-6 text-xs text-slate-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img 
              src="./logo-sm.webp" 
              alt="GEI Logo" 
              width="36" 
              height="36" 
              className="w-9 h-9 object-cover rounded-xl border border-slate-700 shadow-xs shrink-0" 
              loading="lazy" 
            />
            <div>
              <div className="font-bold text-white">
                Galgotias Educational Institutions (GEI)
              </div>
              <p className="text-[11px] text-slate-300 mt-0.5">
                Campus Resource & Event Management System • Academic Year {academicYear}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-[11px] text-slate-300">
            <span>Powered by Cloud Firestore & Firebase PWA</span>
            <span>•</span>
            <span className="text-emerald-400 font-semibold">Production Ready</span>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <DataProvider>
        <AppContent />
      </DataProvider>
    </AuthProvider>
  );
}
