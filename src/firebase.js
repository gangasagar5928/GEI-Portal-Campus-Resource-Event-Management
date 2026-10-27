import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { 
  getFirestore, 
  initializeFirestore, 
  persistentLocalCache, 
  persistentMultipleTabManager 
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyBXnOqS9Z5meYeEN4FLC96pT66yM4HxQCw",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "gei-campus-portal.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "gei-campus-portal",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "gei-campus-portal.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "466870656669",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:466870656669:web:981afcb88610b674973e74"
};

let app = null;
let auth = null;
let db = null;

try {
  app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
  auth = getAuth(app);
  
  // Enable persistent offline cache with multi-tab synchronization for mobile PWA
  try {
    db = initializeFirestore(app, {
      localCache: persistentLocalCache({
        tabManager: persistentMultipleTabManager()
      })
    });
    console.log('[GEI System] Firestore initialized with IndexedDB offline persistence & multi-tab sync.');
  } catch (cacheErr) {
    db = getFirestore(app);
    console.log('[GEI System] Firestore initialized (default cache):', cacheErr.message);
  }
} catch (err) {
  console.warn('[GEI System] Firebase initialization error:', err);
}

export const isFirebaseConfigured = Boolean(db);
export { app, auth, db };
