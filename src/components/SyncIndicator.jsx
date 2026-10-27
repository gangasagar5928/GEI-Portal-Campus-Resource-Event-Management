import React, { useState } from 'react';
import { useData } from '../context/DataContext';
import { 
  Wifi, 
  WifiOff, 
  RefreshCw, 
  CheckCircle2, 
  Database,
  Cloud 
} from 'lucide-react';

export default function SyncIndicator({ compact = false }) {
  const { isOnline, syncStatus, lastSyncTime, refreshSync } = useData();
  const [showDetails, setShowDetails] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleManualSync = async () => {
    setIsRefreshing(true);
    await refreshSync();
    setTimeout(() => setIsRefreshing(false), 600);
  };

  const formatSyncTime = (iso) => {
    if (!iso) return 'Just now';
    try {
      const d = new Date(iso);
      return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    } catch {
      return 'Just now';
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => setShowDetails(!showDetails)}
        className={`flex items-center gap-1.5 px-2 py-1 rounded-lg border text-xs font-semibold transition-all ${
          syncStatus === 'live'
            ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-300 hover:bg-emerald-900/50'
            : syncStatus === 'syncing' || isRefreshing
            ? 'bg-blue-950/40 border-blue-500/40 text-blue-300 hover:bg-blue-900/50'
            : syncStatus === 'offline'
            ? 'bg-amber-950/40 border-amber-500/40 text-amber-300 hover:bg-amber-900/50'
            : 'bg-slate-800 border-slate-700 text-slate-300'
        }`}
        title="PWA Live Sync Status"
      >
        {syncStatus === 'live' ? (
          <>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className={compact ? 'hidden sm:inline text-[11px]' : 'text-[11px]'}>Live Sync</span>
          </>
        ) : syncStatus === 'syncing' || isRefreshing ? (
          <>
            <RefreshCw className="w-3 h-3 animate-spin text-blue-400" />
            <span className={compact ? 'hidden sm:inline text-[11px]' : 'text-[11px]'}>Syncing</span>
          </>
        ) : (
          <>
            <WifiOff className="w-3 h-3 text-amber-400" />
            <span className={compact ? 'hidden sm:inline text-[11px]' : 'text-[11px]'}>Offline (IndexedDB)</span>
          </>
        )}
      </button>

      {/* Sync Details Dropdown / Popover */}
      {showDetails && (
        <div 
          className="absolute right-0 mt-2 w-64 bg-slate-900 border border-slate-800 rounded-xl shadow-2xl p-3 z-50 text-xs text-slate-200"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between pb-2 border-b border-slate-800">
            <span className="font-bold text-white flex items-center gap-1.5">
              <Cloud className="w-3.5 h-3.5 text-blue-400" />
              Live Sync Engine
            </span>
            <span className={`px-1.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
              syncStatus === 'live' 
                ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' 
                : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
            }`}>
              {syncStatus === 'live' ? 'Connected' : 'Offline'}
            </span>
          </div>

          <div className="py-2.5 space-y-1.5 text-slate-300">
            <div className="flex items-center justify-between text-[11px]">
              <span className="text-slate-400">Database:</span>
              <span className="font-medium text-white">Cloud Firestore</span>
            </div>
            <div className="flex items-center justify-between text-[11px]">
              <span className="text-slate-400">Offline Persistence:</span>
              <span className="font-medium text-emerald-400 flex items-center gap-1">
                <Database className="w-3 h-3" />
                IndexedDB Active
              </span>
            </div>
            <div className="flex items-center justify-between text-[11px]">
              <span className="text-slate-400">Last Synced:</span>
              <span className="font-medium text-slate-300">{formatSyncTime(lastSyncTime)}</span>
            </div>
            <div className="flex items-center justify-between text-[11px]">
              <span className="text-slate-400">Network:</span>
              <span className={`font-medium ${isOnline ? 'text-emerald-400' : 'text-rose-400'}`}>
                {isOnline ? 'Online (WiFi/Cellular)' : 'No Connection'}
              </span>
            </div>
          </div>

          <div className="pt-2 border-t border-slate-800 flex items-center justify-between gap-2">
            <button
              onClick={handleManualSync}
              disabled={isRefreshing}
              className="w-full py-1.5 px-2 bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 shadow-sm transition-all"
            >
              <RefreshCw className={`w-3 h-3 ${isRefreshing ? 'animate-spin' : ''}`} />
              <span>Sync Now</span>
            </button>
            <button
              onClick={() => setShowDetails(false)}
              className="py-1.5 px-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-xs font-medium transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
