import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useData } from '../context/DataContext';
import { 
  Calendar, 
  FileText, 
  PlusCircle, 
  ShieldCheck, 
  CheckCircle2, 
  User, 
  LogIn 
} from 'lucide-react';

export default function MobileBottomNav({ activeTab, setActiveTab, onOpenLogin }) {
  const { currentUser, isAdmin, isCeo, isClubHead } = useAuth();
  const { requests, syncStatus } = useData();

  const pendingAdminCount = requests.filter(r => r.status === 'Submitted' || r.status === 'Under Review').length;
  const pendingCeoCount = requests.filter(r => r.status === 'Forwarded for Approval').length;
  const pendingClarificationCount = requests.filter(r => 
    r.status === 'Need Clarification' && (isClubHead ? r.submittedByUid === currentUser?.uid : true)
  ).length;

  return (
    <nav 
      aria-label="Mobile Navigation"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#150406]/95 backdrop-blur-md border-t border-red-950/80 px-2 pt-1.5 pb-[max(env(safe-area-inset-bottom),0.5rem)] shadow-2xl"
    >
      <div className="flex items-center justify-around">
        {/* Schedule */}
        <button
          onClick={() => setActiveTab('schedule')}
          className={`flex flex-col items-center justify-center py-1 px-2.5 rounded-lg text-[10px] font-bold transition-colors ${
            activeTab === 'schedule'
              ? 'text-amber-400 font-extrabold'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <Calendar className="w-5 h-5 mb-0.5" />
          <span>Schedule</span>
        </button>

        {/* Club Head: My Requests / New Request */}
        {isClubHead && (
          <>
            <button
              onClick={() => setActiveTab('club-requests')}
              className={`relative flex flex-col items-center justify-center py-1 px-2.5 rounded-lg text-[10px] font-bold transition-colors ${
                activeTab === 'club-requests'
                  ? 'text-amber-400 font-extrabold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <FileText className="w-5 h-5 mb-0.5" />
              <span>Requests</span>
              {pendingClarificationCount > 0 && (
                <span className="absolute top-0 right-1 w-2 h-2 bg-amber-400 rounded-full animate-ping" />
              )}
            </button>

            <button
              onClick={() => setActiveTab('new-request')}
              className={`flex flex-col items-center justify-center py-1 px-2.5 rounded-lg text-[10px] font-bold transition-colors ${
                activeTab === 'new-request'
                  ? 'text-amber-400 font-extrabold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <PlusCircle className="w-5 h-5 mb-0.5 text-amber-400" />
              <span className="text-amber-400">Book Venue</span>
            </button>
          </>
        )}

        {/* Admin Dashboard */}
        {isAdmin && (
          <button
            onClick={() => setActiveTab('admin')}
            className={`relative flex flex-col items-center justify-center py-1 px-2.5 rounded-lg text-[10px] font-bold transition-colors ${
              activeTab === 'admin'
                ? 'text-amber-400 font-extrabold'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <ShieldCheck className="w-5 h-5 mb-0.5" />
            <span>Admin Queue</span>
            {pendingAdminCount > 0 && (
              <span className="absolute top-0.5 right-1 px-1 min-w-4 h-4 bg-amber-500 text-slate-950 rounded-full text-[9px] font-black flex items-center justify-center">
                {pendingAdminCount}
              </span>
            )}
          </button>
        )}

        {/* CEO Review */}
        {isCeo && (
          <button
            onClick={() => setActiveTab('ceo-queue')}
            className={`relative flex flex-col items-center justify-center py-1 px-2.5 rounded-lg text-[10px] font-bold transition-colors ${
              activeTab === 'ceo-queue'
                ? 'text-amber-400 font-extrabold'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <CheckCircle2 className="w-5 h-5 mb-0.5" />
            <span>Approvals</span>
            {pendingCeoCount > 0 && (
              <span className="absolute top-0.5 right-1 px-1 min-w-4 h-4 bg-amber-500 text-slate-950 rounded-full text-[9px] font-black flex items-center justify-center">
                {pendingCeoCount}
              </span>
            )}
          </button>
        )}

        {/* User / Login Button */}
        {currentUser ? (
          <button
            onClick={() => {
              if (isAdmin) setActiveTab('admin');
              else if (isCeo) setActiveTab('ceo-queue');
              else if (isClubHead) setActiveTab('club-requests');
            }}
            className="flex flex-col items-center justify-center py-1 px-2.5 rounded-lg text-[10px] font-bold text-slate-300"
          >
            <div className="relative">
              <User className="w-5 h-5 mb-0.5 text-amber-400" />
              <span className={`absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full border border-slate-900 ${
                syncStatus === 'live' ? 'bg-emerald-400' : 'bg-amber-400'
              }`} />
            </div>
            <span className="truncate max-w-[55px]">{currentUser.name.split(' ')[0]}</span>
          </button>
        ) : (
          <button
            onClick={onOpenLogin}
            className="flex flex-col items-center justify-center py-1 px-2.5 rounded-lg text-[10px] font-bold text-amber-400 hover:text-amber-300"
          >
            <LogIn className="w-5 h-5 mb-0.5" />
            <span>Sign In</span>
          </button>
        )}
      </div>
    </nav>
  );
}
