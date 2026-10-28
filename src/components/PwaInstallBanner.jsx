import React, { useState, useEffect } from 'react';
import { Download, X, Smartphone, Share2, CheckCircle2 } from 'lucide-react';

export default function PwaInstallBanner() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isStandalone, setIsStandalone] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [isIos, setIsIos] = useState(false);
  const [installedSuccessfully, setInstalledSuccessfully] = useState(false);

  useEffect(() => {
    // Check if running in standalone mode (already installed)
    const checkStandalone = window.matchMedia('(display-mode: standalone)').matches || 
      window.navigator.standalone === true;
    setIsStandalone(checkStandalone);

    // Detect iOS
    const userAgent = window.navigator.userAgent.toLowerCase();
    const isIosDevice = /iphone|ipad|ipod/.test(userAgent) && !window.MSStream;
    setIsIos(isIosDevice);

    // Capture install prompt
    const handleBeforeInstall = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    // Capture app installed
    const handleAppInstalled = () => {
      setDeferredPrompt(null);
      setIsStandalone(true);
      setInstalledSuccessfully(true);
      setTimeout(() => setInstalledSuccessfully(false), 4000);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstall);
    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstall);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      setInstalledSuccessfully(true);
    }
    setDeferredPrompt(null);
  };

  if (isStandalone || isDismissed) {
    if (installedSuccessfully) {
      return (
        <div className="bg-emerald-600 text-white px-4 py-2 text-xs font-semibold text-center flex items-center justify-center gap-2">
          <CheckCircle2 className="w-4 h-4" />
          GEI Portal app installed successfully to your device!
        </div>
      );
    }
    return null;
  }

  // If prompt is available (Android, Chrome, Edge)
  if (deferredPrompt) {
    return (
      <aside aria-label="Install GEI Portal Mobile App" className="bg-gradient-to-r from-[#2a0508] via-[#1a0507] to-[#120305] border-b border-amber-500/30 text-white px-4 py-2.5 shadow-lg relative z-40">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-white p-0.5 shadow-md shrink-0">
              <img 
                src="./logo-sm.webp" 
                alt="GEI Logo" 
                width="32" 
                height="32" 
                className="w-full h-full object-cover rounded-md" 
                loading="lazy" 
              />
            </div>
            <div>
              <p className="text-xs font-bold leading-tight flex items-center gap-1.5 text-white">
                <Smartphone className="w-3.5 h-3.5 text-amber-400" />
                Install GEI Portal Mobile App
              </p>
              <p className="text-[11px] text-slate-300">
                Install as a mobile app for offline access, real-time sync, and quick launch.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handleInstallClick}
              className="px-3 py-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-lg text-xs font-bold flex items-center gap-1.5 shadow-md shadow-amber-500/25 transition-all active:scale-95"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Install App</span>
            </button>
            <button
              onClick={() => setIsDismissed(true)}
              className="p-1 text-slate-400 hover:text-white rounded-md transition-colors"
              title="Dismiss"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </aside>
    );
  }

  // iOS Safari specific prompt
  if (isIos && !isStandalone) {
    return (
      <aside aria-label="Install GEI Portal on iOS" className="bg-gradient-to-r from-[#2a0508] via-[#1a0507] to-[#120305] border-b border-red-800/40 text-white px-4 py-2 shadow-sm text-xs relative z-40">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-[11px] text-slate-300">
            <Smartphone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>
              To install on iPhone/iPad: tap <Share2 className="w-3 h-3 inline text-amber-400 mx-0.5" /> then <strong className="text-white">"Add to Home Screen"</strong>
            </span>
          </div>
          <button
            onClick={() => setIsDismissed(true)}
            className="p-1 text-slate-400 hover:text-white rounded-md shrink-0"
            title="Dismiss"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </aside>
    );
  }

  return null;
}
