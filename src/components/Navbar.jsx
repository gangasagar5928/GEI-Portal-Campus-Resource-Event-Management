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
    <header className="bg-slate-950 text-white shadow-xl sticky top-0 z-50 border-b border-red-950/80">
      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          
          {/* Logo & Branding */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveTab('schedule')}>
            <div className="w-10 h-10 rounded-xl bg-white p-0.5 flex items-center justify-center shadow-lg shadow-red-950/50 border border-amber-400/50 overflow-hidden shrink-0">
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
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-lg tracking-tight bg-gradient-to-r from-white via-amber-100 to-amber-300 bg-clip-text text-transparent">
                  GEI Portal
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-amber-400/20 text-amber-300 border border-amber-400/40">
                  v1.0
                </span>
              </div>
              <p className="text-[11px] text-amber-200/70 font-medium leading-none">
                Campus Resource & Event Management
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-1">
            <button
              onClick={() => setActiveTab('schedule')}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-semibold transition-all ${
                activeTab === 'schedule'
                  ? 'bg-gradient-to-r from-red-700 to-red-800 text-white shadow-md shadow-red-900/40 border border-amber-400/30'
                  : 'text-slate-300 hover:text-amber-300 hover:bg-red-950/40'
              }`}
            >
              <Calendar className="w-4 h-4 text-amber-400" />
              Auditorium Schedule
            </button>

            {isClubHead && (
              <>
                <button
                  onClick={() => setActiveTab('club-requests')}
                  className={`relative flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-semibold transition-all ${
                    activeTab === 'club-requests'
                      ? 'bg-gradient-to-r from-red-700 to-red-800 text-white shadow-md shadow-red-900/40 border border-amber-400/30'
                      : 'text-slate-300 hover:text-amber-300 hover:bg-red-950/40'
                  }`}
                >
                  <FileText className="w-4 h-4 text-amber-400" />
                  My Requests
                  {pendingClarificationCount > 0 && (
                    <span className="ml-1 px-1.5 py-0.2 bg-amber-500 text-slate-950 rounded-full text-[11px] font-bold animate-bounce">
                      {pendingClarificationCount}
                    </span>
                  )}
                </button>

                <button
                  onClick={() => setActiveTab('new-request')}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-sm font-semibold transition-all ${
                    activeTab === 'new-request'
                      ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30'
                      : 'bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 border border-emerald-500/30'
                  }`}
                >
                  <Sparkles className="w-4 h-4" />
                  New Request
                </button>
              </>
            )}

            {isAdmin && (
              <>
                <button
                  onClick={() => setActiveTab('admin-requests')}
                  className={`relative flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-semibold transition-all ${
                    activeTab === 'admin-requests'
                      ? 'bg-gradient-to-r from-red-700 to-amber-600 text-white shadow-md'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  <FileText className="w-4 h-4" />
                  Requests Queue
                  {pendingAdminCount > 0 && (
                    <span className="ml-1 px-1.5 py-0.2 bg-amber-500 text-slate-950 rounded-full text-[11px] font-bold">
                      {pendingAdminCount}
                    </span>
                  )}
                </button>

                <button
                  onClick={() => setActiveTab('admin-equipment')}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-semibold transition-all ${
                    activeTab === 'admin-equipment'
                      ? 'bg-gradient-to-r from-red-700 to-amber-600 text-white shadow-md'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  <Package className="w-4 h-4" />
                  Equipment
                </button>

                <button
                  onClick={() => setActiveTab('admin-registry')}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-semibold transition-all ${
                    activeTab === 'admin-registry'
                      ? 'bg-gradient-to-r from-red-700 to-amber-600 text-white shadow-md'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  <Users className="w-4 h-4" />
                  Clubs & Accounts
                </button>
              </>
            )}

            {isCeo && (
              <button
                onClick={() => setActiveTab('ceo-approvals')}
                className={`relative flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-semibold transition-all ${
                  activeTab === 'ceo-approvals'
                    ? 'bg-purple-600 text-white shadow-md'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                <CheckCircle2 className="w-4 h-4 text-purple-400" />
                CEO Review Queue
                {pendingCeoCount > 0 && (
                  <span className="ml-1 px-1.5 py-0.2 bg-purple-500 text-white rounded-full text-[11px] font-bold animate-pulse">
                    {pendingCeoCount}
                  </span>
                )}
              </button>
            )}
          </nav>

          {/* User Profile & Auth Controls */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            {/* Live Sync Status Pill */}
            <SyncIndicator compact={true} />

            {currentUser ? (
              <>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-800 border border-slate-700/80 text-xs shadow-xs">
                  <div className={`w-2 h-2 rounded-full ${
                    isAdmin ? 'bg-amber-400 ring-2 ring-amber-400/20' :
                    isCeo ? 'bg-purple-400 ring-2 ring-purple-400/20' :
                    isClubHead ? 'bg-emerald-400 ring-2 ring-emerald-400/20' : 'bg-slate-400'
                  }`} />
                  <div className="text-left hidden sm:block">
                    <div className="font-bold text-white leading-tight">
                      {currentUser.name}
                    </div>
                    <div className="text-[10px] text-slate-400">
                      {isAdmin ? 'Administrative Head' :
                       isCeo ? 'CEO Approver' :
                       currentUser.clubName ? `${currentUser.clubName} Head` : 'Authorized Account'}
                    </div>
                  </div>
                </div>

                <button
                  onClick={logout}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-rose-950/40 text-slate-300 hover:text-rose-400 border border-slate-700/80 text-xs font-semibold transition-colors"
                  title="Sign Out"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Sign Out</span>
                </button>
              </>
            ) : (
              <button
                onClick={onOpenLogin}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-500 hover:to-amber-500 text-white text-xs font-bold shadow-md shadow-red-900/40 border border-amber-400/30 transition-all active:scale-95"
              >
                <LogIn className="w-3.5 h-3.5 text-amber-200" />
                Sign In
              </button>
            )}
          </div>

        </div>
      </div>

      {/* Mobile navigation tab strip */}
      <div className="md:hidden flex overflow-x-auto border-t border-red-950/80 bg-slate-950/95 px-2 py-1.5 gap-1 text-xs">
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
              activeTab === 'ceo-approvals' ? 'bg-purple-600 text-white' : 'text-slate-400'
            }`}
          >
            CEO Queue ({pendingCeoCount})
          </button>
        )}
      </div>
    </header>
  );
}
