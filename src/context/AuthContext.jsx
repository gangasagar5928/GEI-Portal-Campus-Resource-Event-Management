import React, { createContext, useContext, useState, useEffect } from 'react';
import { INITIAL_USERS } from '../data/initialRegistry';
import { 
  verifyPassword, 
  hashPassword, 
  getRateLimitStatus, 
  recordFailedLogin, 
  clearRateLimit,
  sanitizeInput
} from '../utils/security';

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
      if (saved) {
        const parsed = JSON.parse(saved);
        // Ensure no credential fields linger in restored session
        delete parsed.password;
        delete parsed.temporaryPassword;
        delete parsed.passwordHash;
        return parsed;
      }
    } catch {
      // Ignore parse errors
    }
    // Starts unauthenticated (Public Visitor view) by default
    return null;
  });

  useEffect(() => {
    if (currentUser) {
      // Strip any sensitive credentials before writing to localStorage
      const { password, temporaryPassword, passwordHash, ...safeUser } = currentUser;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(safeUser));
    } else {
      localStorage.removeItem(STORAGE_KEY);
    }
  }, [currentUser]);

  // Login via Institutional Email OR Phone Number + Password
  const login = async (identifier, password, usersList = []) => {
    const rawInput = sanitizeInput(identifier.trim());
    const cleanEmailInput = rawInput.toLowerCase();
    const cleanPhoneInput = cleanPhone(rawInput);

    // Rate Limiting & Anti-Brute-Force Lockout check
    const rateStatus = getRateLimitStatus(rawInput);
    if (rateStatus.isLocked) {
      throw new Error(`Account temporarily locked due to repeated failed attempts. Please retry in ${rateStatus.remainingSec}s.`);
    }

    // Merge dynamic users with baseline demo users
    const allUsers = [...usersList, ...INITIAL_USERS];

    // Find user by institutional email OR phone number
    const match = allUsers.find(u => {
      const emailMatch = u.institutionalEmail && u.institutionalEmail.toLowerCase() === cleanEmailInput;
      const phoneMatch = u.phone && cleanPhone(u.phone) === cleanPhoneInput && cleanPhoneInput.length >= 10;
      return emailMatch || phoneMatch;
    });

    if (!match) {
      recordFailedLogin(rawInput);
      throw new Error('No registered account found with this institutional email or phone number. Contact System Administrator.');
    }

    if (!match.active) {
      throw new Error('Account deactivated by System Administrator. Access denied.');
    }

    // Cryptographic PBKDF2 Password Verification
    const targetHash = match.passwordHash || match.password || match.temporaryPassword;
    if (!targetHash) {
      throw new Error('Account does not have valid credentials configured. Contact System Administrator.');
    }
    const isPasswordValid = await verifyPassword(password, targetHash);

    if (!isPasswordValid) {
      const attemptInfo = recordFailedLogin(rawInput);
      if (attemptInfo && attemptInfo.isLocked) {
        throw new Error('Maximum login attempts exceeded. Account locked for 60 seconds.');
      }
      const remainingMsg = attemptInfo?.attemptsRemaining !== undefined 
        ? ` (${attemptInfo.attemptsRemaining} attempt${attemptInfo.attemptsRemaining === 1 ? '' : 's'} remaining)` 
        : '';
      throw new Error(`Invalid password. Please check your credentials.${remainingMsg}`);
    }

    // Successful authentication: clear brute force counter
    clearRateLimit(rawInput);

    // Set sanitized authenticated session (omit all password hashes)
    const { password: _p, temporaryPassword: _tp, passwordHash: _ph, ...safeSessionUser } = match;
    setCurrentUser(safeSessionUser);
    return safeSessionUser;
  };

  const logout = () => {
    setCurrentUser(null);
  };

  const updatePassword = async (newPassword) => {
    if (!currentUser) return;
    const newHash = await hashPassword(newPassword);
    const updated = { ...currentUser, passwordHash: newHash, mustChangePassword: false };
    const { password: _p, temporaryPassword: _tp, passwordHash: _ph, ...safeUser } = updated;
    setCurrentUser(safeUser);
    return newHash;
  };

  const value = {
    currentUser,
    login,
    logout,
    updatePassword,
    isAdmin: currentUser?.role === 'ADMIN',
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
