import React, { createContext, useContext, useState, useEffect } from 'react';
import { INITIAL_USERS } from '../data/initialRegistry';

const AuthContext = createContext(null);

const STORAGE_KEY = 'gei_current_user_v1';

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error('Failed to load user state', e);
    }
    // Default to Administrative Head (Ashish Nath Awasthi) for instant review
    return INITIAL_USERS[0];
  });

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(currentUser));
    } else {
      localStorage.removeItem(STORAGE_KEY);
    }
  }, [currentUser]);

  // Login handler
  const login = async (email, password, usersList = INITIAL_USERS) => {
    const cleanEmail = email.trim().toLowerCase();
    
    // Check against authorized user registry
    const match = usersList.find(u => u.institutionalEmail && u.institutionalEmail.toLowerCase() === cleanEmail);
    
    if (!match) {
      throw new Error('Institutional email not found in approved registry. Contact System Administrator.');
    }

    if (!match.active) {
      throw new Error('Account deactivated by System Administrator. Access denied.');
    }

    // Update current user
    setCurrentUser(match);
    return match;
  };

  const logout = () => {
    setCurrentUser(null);
  };

  const switchUser = (user) => {
    setCurrentUser(user);
  };

  const updatePassword = (newPassword) => {
    if (!currentUser) return;
    const updated = { ...currentUser, mustChangePassword: false };
    setCurrentUser(updated);
  };

  const value = {
    currentUser,
    login,
    logout,
    switchUser,
    updatePassword,
    isAdmin: currentUser?.role === 'ADMIN',
    isCeo: currentUser?.role === 'CEO',
    isClubHead: currentUser?.role === 'CLUB_HEAD',
    isPublic: !currentUser || currentUser?.role === 'PUBLIC'
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used inside AuthProvider');
  return ctx;
}
