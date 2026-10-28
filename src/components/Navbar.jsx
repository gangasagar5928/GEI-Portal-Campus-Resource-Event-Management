import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useData } from '../context/DataContext';
import SyncIndicator from './SyncIndicator';
import { 
  Calendar, 
  FileText, 
  Users, 
  Package, 
  CheckCircle2, 
  LogOut, 
  LogIn, 
  ShieldAlert, 
  Sparkles,
  Clock
} from 'lucide-react';

export default function Navbar({ activeTab, setActiveTab, onOpenLogin }) {
  const { currentUser, logout, isAdmin, isCeo, isClubHead, isPublic } = useAuth();
  const { requests, users, clubs } = useData();

  // Badge counts
  const pendingAdminCount = requests.filter(r => r.status === 'Submitted' || r.status === 'Under Review').length;
  const pendingCeoCount = requests.filter(r => r.status === 'Forwarded for Approval').length;
  const pendingClarificationCount = requests.filter(r => 
    r.status === 'Need Clarification' && (isClubHead ? r.submittedByUid === currentUser?.uid : true)
  ).length;

  return (
    <header className="bg-[#150406] text-white shadow-xl sticky top-0 z-50 border-b border-red-950/80">
      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between min-h-16 py-2 gap-2 sm:gap-4">
          
          {/* Logo & Branding */}
          <div className="flex items-center gap-2.5 sm:gap-3 cursor-pointer shrink-0" onClick={() => setActiveTab('schedule')}>
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white p-0.5 flex items-center justify-center shadow-lg shadow-red-950/50 border border-amber-400/50 overflow-hidden shrink-0">
              <img 
                src="./logo-sm.webp" 
                alt="GEI Portal Logo" 
                width="40" 
                height="40" 
                className="w-full h-full object-cover rounded-lg" 
                loading="eager" 
                fetchpriority="high" 
              />
            </div>
            <div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="font-extrabold text-base sm:text-lg tracking-tight bg-gradient-to-r from-white via-amber-100 to-amber-300 bg-clip-text text-transparent">
                  GEI Portal
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.2 rounded bg-amber-400/20 text-amber-300 border border-amber-400/40">
                  v1.0
                </span>
              </div>
              <p className="text-[10px] sm:text-[11px] text-amber-200/70 font-medium leading-none">
                Campus Resource & Event Management
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 min-w-0">
            <button
              onClick={() => setActiveTab('schedule')}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 lg:px-3 lg:py-2 rounded-lg text-xs lg:text-sm font-semibold whitespace-nowrap transition-all ${
                activeTab === 'schedule'
                  ? 'bg-gradient-to-r from-red-700 to-red-800 text-white shadow-md shadow-red-900/40 border border-amber-400/30'
                  : 'text-slate-300 hover:text-amber-300 hover:bg-red-950/40'
              }`}
            >
              <Calendar className="w-4 h-4 text-amber-400 shrink-0" />
              <span><span className="hidden lg:inline">Auditorium </span>Schedule</span>
            </button>

            {isClubHead && (
              <>
                <button
                  onClick={() => setActiveTab('club-requests')}
                  className={`relative flex items-center gap-1.5 px-2.5 py-1.5 lg:px-3 lg:py-2 rounded-lg text-xs lg:text-sm font-semibold whitespace-nowrap transition-all ${
                    activeTab === 'club-requests'
                      ? 'bg-gradient-to-r from-red-700 to-red-800 text-white shadow-md shadow-red-900/40 border border-amber-400/30'
                      : 'text-slate-300 hover:text-amber-300 hover:bg-red-950/40'
                  }`}
                >
                  <FileText className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>My Requests</span>
                  {pendingClarificationCount > 0 && (
                    <span className="ml-1 px-1.5 py-0.2 bg-amber-500 text-slate-950 rounded-full text-[10px] font-bold animate-bounce">
                      {pendingClarificationCount}
                    </span>
                  )}
                </button>

                <button
                  onClick={() => setActiveTab('new-request')}
                  className={`flex items-center gap-1.5 px-2.5 py-1.5 lg:px-3.5 lg:py-2 rounded-lg text-xs lg:text-sm font-semibold whitespace-nowrap transition-all ${
                    activeTab === 'new-request'
                      ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30'
                      : 'bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 border border-emerald-500/30'
                  }`}
                >
                  <Sparkles className="w-4 h-4 shrink-0" />
                  <span>New Request</span>
                </button>
              </>
            )}

            {isAdmin && (
              <>
                <button
                  onClick={() => setActiveTab('admin-requests')}
                  className={`relative flex items-center gap-1.5 px-2.5 py-1.5 lg:px-3 lg:py-2 rounded-lg text-xs lg:text-sm font-semibold whitespace-nowrap transition-all ${
                    activeTab === 'admin-requests'
                      ? 'bg-gradient-to-r from-red-700 to-amber-600 text-white shadow-md'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  <FileText className="w-4 h-4 shrink-0" />
                  <span><span className="hidden xl:inline">Requests </span>Queue</span>
                  {pendingAdminCount > 0 && (
                    <span className="ml-1 px-1.5 py-0.2 bg-amber-500 text-slate-950 rounded-full text-[10px] font-bold">
                      {pendingAdminCount}
                    </span>
                  )}
                </button>

                <button
                  onClick={() => setActiveTab('admin-equipment')}
                  className={`flex items-center gap-1.5 px-2.5 py-1.5 lg:px-3 lg:py-2 rounded-lg text-xs lg:text-sm font-semibold whitespace-nowrap transition-all ${
                    activeTab === 'admin-equipment'
                      ? 'bg-gradient-to-r from-red-700 to-amber-600 text-white shadow-md'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  <Package className="w-4 h-4 shrink-0" />
                  <span>Equipment</span>
                </button>

                <button
                  onClick={() => setActiveTab('admin-registry')}
                  className={`flex items-center gap-1.5 px-2.5 py-1.5 lg:px-3 lg:py-2 rounded-lg text-xs lg:text-sm font-semibold whitespace-nowrap transition-all ${
                    activeTab === 'admin-registry'
                      ? 'bg-gradient-to-r from-red-700 to-amber-600 text-white shadow-md'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  <Users className="w-4 h-4 shrink-0" />
                  <span><span className="hidden xl:inline">Clubs & </span>Accounts</span>
                </button>
              </>
            )}

            {isCeo && (
              <button
                onClick={() => setActiveTab('ceo-approvals')}
                className={`relative flex items-center gap-1.5 px-2.5 py-1.5 lg:px-3 lg:py-2 rounded-lg text-xs lg:text-sm font-semibold whitespace-nowrap transition-all ${
                  activeTab === 'ceo-approvals'
                    ? 'bg-gradient-to-r from-red-700 to-amber-600 text-white shadow-md'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span><span className="hidden lg:inline">CEO </span>Review</span>
                {pendingCeoCount > 0 && (
                  <span className="ml-1 px-1.5 py-0.2 bg-amber-500 text-slate-950 rounded-full text-[10px] font-bold animate-pulse">
                    {pendingCeoCount}
                  </span>
                )}
              </button>
            )}
          </nav>

          {/* User Profile & Auth Controls */}
          <div className="flex items-center gap-2 shrink-0">
            {/* Live Sync Status Pill */}
            <SyncIndicator compact={true} />

            {currentUser ? (
              <>
                <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-xl bg-[#200609] border border-red-900/60 text-xs shadow-xs shrink-0 max-w-[170px]">
                  <div className={`w-2 h-2 rounded-full shrink-0 ${
                    isAdmin ? 'bg-amber-400 ring-2 ring-amber-400/20' :
                    isCeo ? 'bg-amber-400 ring-2 ring-amber-400/20' :
                    isClubHead ? 'bg-emerald-400 ring-2 ring-emerald-400/20' : 'bg-slate-400'
                  }`} />
                  <div className="text-left hidden md:block min-w-0">
                    <div className="font-bold text-white leading-tight truncate whitespace-nowrap">
                      {currentUser.name}
                    </div>
                    <div className="text-[10px] text-amber-200/80 leading-tight truncate whitespace-nowrap">
                      {isAdmin ? 'Administrative Head' :
                       isCeo ? 'CEO Approver' :
                       currentUser.clubName ? `${currentUser.clubName} Head` : 'Authorized Account'}
                    </div>
                  </div>
                </div>

                <button
                  onClick={logout}
                  className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg bg-[#200609] hover:bg-rose-950/60 text-stone-200 hover:text-rose-300 border border-red-900/60 text-xs font-semibold whitespace-nowrap shrink-0 transition-colors"
                  title="Sign Out"
                >
                  <LogOut className="w-3.5 h-3.5 shrink-0" />
                  <span className="hidden sm:inline">Sign Out</span>
                </button>
              </>
            ) : (
              <button
                onClick={onOpenLogin}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-500 hover:to-amber-500 text-white text-xs font-bold shadow-md shadow-red-900/40 border border-amber-400/30 whitespace-nowrap shrink-0 transition-all active:scale-95"
              >
                <LogIn className="w-3.5 h-3.5 text-amber-200 shrink-0" />
                <span>Sign In</span>
              </button>
            )}
          </div>

        </div>
      </div>

      {/* Mobile navigation tab strip */}
      <div className="md:hidden flex overflow-x-auto border-t border-red-950/80 bg-[#150406]/95 px-2 py-1.5 gap-1 text-xs">
        <button
          onClick={() => setActiveTab('schedule')}
          className={`px-3 py-1.5 rounded-md whitespace-nowrap font-medium ${
            activeTab === 'schedule' ? 'bg-red-700 text-amber-200 font-bold border border-amber-400/30' : 'text-slate-400'
          }`}
        >
          Schedule
        </button>

        {isClubHead && (
          <>
            <button
              onClick={() => setActiveTab('club-requests')}
              className={`px-3 py-1.5 rounded-md whitespace-nowrap font-medium ${
                activeTab === 'club-requests' ? 'bg-red-700 text-amber-200 font-bold border border-amber-400/30' : 'text-slate-400'
              }`}
            >
              My Requests
            </button>
            <button
              onClick={() => setActiveTab('new-request')}
              className={`px-3 py-1.5 rounded-md whitespace-nowrap font-medium ${
                activeTab === 'new-request' ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-400'
              }`}
            >
              + New Request
            </button>
          </>
        )}

        {isAdmin && (
          <>
            <button
              onClick={() => setActiveTab('admin-requests')}
              className={`px-3 py-1.5 rounded-md whitespace-nowrap font-medium ${
                activeTab === 'admin-requests' ? 'bg-red-700 text-white' : 'text-slate-400'
              }`}
            >
              Requests ({pendingAdminCount})
            </button>
            <button
              onClick={() => setActiveTab('admin-equipment')}
              className={`px-3 py-1.5 rounded-md whitespace-nowrap font-medium ${
                activeTab === 'admin-equipment' ? 'bg-red-700 text-white' : 'text-slate-400'
              }`}
            >
              Equipment
            </button>
            <button
              onClick={() => setActiveTab('admin-registry')}
              className={`px-3 py-1.5 rounded-md whitespace-nowrap font-medium ${
                activeTab === 'admin-registry' ? 'bg-red-700 text-white' : 'text-slate-400'
              }`}
            >
              Clubs Roster
            </button>
          </>
        )}

        {isCeo && (
          <button
            onClick={() => setActiveTab('ceo-approvals')}
            className={`px-3 py-1.5 rounded-md whitespace-nowrap font-medium ${
              activeTab === 'ceo-approvals' ? 'bg-red-700 text-white' : 'text-slate-400'
            }`}
          >
            CEO Queue ({pendingCeoCount})
          </button>
        )}
      </div>
    </header>
  );
}
