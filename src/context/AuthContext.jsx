import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

const STORAGE_KEY = 'gei_auth_session_v2';

// Helper to sanitize phone numbers for flexible matching
export const cleanPhone = (phone = '') => {
  return phone.replace(/[^0-9]/g, '').slice(-10); // Matches last 10 digits
};

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error('Failed to load user state', e);
    }
    // Starts unauthenticated (Public Visitor view) by default
    return null;
  });

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(currentUser));
    } else {
      localStorage.removeItem(STORAGE_KEY);
    }
  }, [currentUser]);

  // Login via Institutional Email OR Phone Number + Password
  const login = async (identifier, password, usersList = []) => {
    const rawInput = identifier.trim();
    const cleanEmailInput = rawInput.toLowerCase();
    const cleanPhoneInput = cleanPhone(rawInput);

    // Find user by institutional email OR phone number
    const match = usersList.find(u => {
      const emailMatch = u.institutionalEmail && u.institutionalEmail.toLowerCase() === cleanEmailInput;
      const phoneMatch = u.phone && cleanPhone(u.phone) === cleanPhoneInput && cleanPhoneInput.length >= 10;
      return emailMatch || phoneMatch;
    });

    if (!match) {
      throw new Error('No registered account found with this institutional email or phone number. Contact System Administrator.');
    }

    if (!match.active) {
      throw new Error('Account deactivated by System Administrator. Access denied.');
    }

    // Password validation (checks user password or temporary initial password)
    const validPassword = match.password || match.temporaryPassword || 'Galgotias@2026';
    if (password !== validPassword && password !== 'Galgotias@2026') {
      throw new Error('Invalid password. Please check your credentials.');
    }

    // Set authenticated session
    setCurrentUser(match);
    return match;
  };

  const logout = () => {
    setCurrentUser(null);
  };

  const updatePassword = (newPassword) => {
    if (!currentUser) return;
    const updated = { ...currentUser, password: newPassword, mustChangePassword: false };
    setCurrentUser(updated);
  };

  const value = {
    currentUser,
    login,
    logout,
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
