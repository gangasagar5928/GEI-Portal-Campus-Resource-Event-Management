import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useData } from '../context/DataContext';
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
    <header className="bg-slate-900 text-white shadow-xl sticky top-0 z-50 border-b border-slate-800">
      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          
          {/* Logo & Branding */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveTab('schedule')}>
            <div className="w-10 h-10 rounded-xl bg-white p-0.5 flex items-center justify-center shadow-lg shadow-blue-500/25 border border-white/20 overflow-hidden shrink-0">
              <img src="./logo.png" alt="GEI Portal Logo" className="w-full h-full object-cover rounded-lg" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-lg tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
                  GEI Portal
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30">
                  v1.0
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-medium leading-none">
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
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <Calendar className="w-4 h-4" />
              Auditorium Schedule
            </button>

            {isClubHead && (
              <>
                <button
                  onClick={() => setActiveTab('club-requests')}
                  className={`relative flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-semibold transition-all ${
                    activeTab === 'club-requests'
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  <FileText className="w-4 h-4" />
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
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  <FileText className="w-4 h-4" />
                  Requests Queue
                  {pendingAdminCount > 0 && (
                    <span className="ml-1 px-1.5 py-0.2 bg-blue-500 text-white rounded-full text-[11px] font-bold">
                      {pendingAdminCount}
                    </span>
                  )}
                </button>

                <button
                  onClick={() => setActiveTab('admin-equipment')}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-semibold transition-all ${
                    activeTab === 'admin-equipment'
                      ? 'bg-blue-600 text-white shadow-md'
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
                      ? 'bg-blue-600 text-white shadow-md'
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
          <div className="flex items-center gap-2.5">
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
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-md transition-all"
              >
                <LogIn className="w-3.5 h-3.5" />
                Sign In
              </button>
            )}
          </div>

        </div>
      </div>

      {/* Mobile navigation tab strip */}
      <div className="md:hidden flex overflow-x-auto border-t border-slate-800 bg-slate-900/90 px-2 py-1.5 gap-1 text-xs">
        <button
          onClick={() => setActiveTab('schedule')}
          className={`px-3 py-1.5 rounded-md whitespace-nowrap font-medium ${
            activeTab === 'schedule' ? 'bg-blue-600 text-white' : 'text-slate-400'
          }`}
        >
          Schedule
        </button>

        {isClubHead && (
          <>
            <button
              onClick={() => setActiveTab('club-requests')}
              className={`px-3 py-1.5 rounded-md whitespace-nowrap font-medium ${
                activeTab === 'club-requests' ? 'bg-blue-600 text-white' : 'text-slate-400'
              }`}
            >
              My Requests
            </button>
            <button
              onClick={() => setActiveTab('new-request')}
              className={`px-3 py-1.5 rounded-md whitespace-nowrap font-medium ${
                activeTab === 'new-request' ? 'bg-emerald-600 text-white' : 'text-slate-400'
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
                activeTab === 'admin-requests' ? 'bg-blue-600 text-white' : 'text-slate-400'
              }`}
            >
              Requests ({pendingAdminCount})
            </button>
            <button
              onClick={() => setActiveTab('admin-equipment')}
              className={`px-3 py-1.5 rounded-md whitespace-nowrap font-medium ${
                activeTab === 'admin-equipment' ? 'bg-blue-600 text-white' : 'text-slate-400'
              }`}
            >
              Equipment
            </button>
            <button
              onClick={() => setActiveTab('admin-registry')}
              className={`px-3 py-1.5 rounded-md whitespace-nowrap font-medium ${
                activeTab === 'admin-registry' ? 'bg-blue-600 text-white' : 'text-slate-400'
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
