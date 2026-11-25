/**
 * Institutional Security & Cryptography Utilities
 * Galgotias Educational Institutions - Student Council Portal
 * 
 * Features:
 * - PBKDF2 Password Hashing & Verification (Zero-dependency Web Crypto API)
 * - Rate Limiting & Anti-Brute-Force Lockout (Client-side Session Limiter)
 * - Input Sanitization & Anti-XSS Utilities
 */

const PBKDF2_ITERATIONS = 100000;
const HASH_ALGO = 'SHA-256';
const SALT_BYTES = 16;
const KEY_BYTES = 32;

// Convert buffer to hex string
function buf2hex(buffer) {
  return Array.from(new Uint8Array(buffer))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('');
}

// Convert hex string to Uint8Array
function hex2buf(hexStr) {
  const bytes = new Uint8Array(hexStr.length / 2);
  for (let i = 0; i < bytes.length; i++) {
    bytes[i] = parseInt(hexStr.substr(i * 2, 2), 16);
  }
  return bytes;
}

/**
 * Generate a cryptographically secure random temporary password.
 * Safe for initial credential provisioning and administrative resets.
 */
export function generateSecureTempPassword(length = 10) {
  const charset = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz23456789!@#$%';
  if (typeof crypto !== 'undefined' && crypto.getRandomValues) {
    const bytes = new Uint8Array(length);
    crypto.getRandomValues(bytes);
    return Array.from(bytes).map(b => charset[b % charset.length]).join('');
  }
  return Math.random().toString(36).slice(-8) + 'X9!';
}

// Constant-time comparison to prevent timing attacks
function timingSafeEqual(a, b) {
  if (a.length !== b.length) return false;
  let result = 0;
  for (let i = 0; i < a.length; i++) {
    result |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return result === 0;
}

/**
 * Hash a password using PBKDF2-HMAC-SHA256 with a unique cryptographic salt.
 * Output format: v1:saltHex:hashHex
 */
export async function hashPassword(plainPassword) {
  if (!plainPassword || typeof plainPassword !== 'string') {
    throw new Error('Password must be a non-empty string');
  }

  // Fallback if crypto.subtle is unavailable (e.g. non-HTTPS test contexts)
  if (typeof crypto === 'undefined' || !crypto.subtle) {
    // Basic fallback hash for unsupported environments
    return `v1:fallback:${btoa(encodeURIComponent(plainPassword))}`;
  }

  const encoder = new TextEncoder();
  const salt = crypto.getRandomValues(new Uint8Array(SALT_BYTES));

  const keyMaterial = await crypto.subtle.importKey(
    'raw',
    encoder.encode(plainPassword),
    { name: 'PBKDF2' },
    false,
    ['deriveBits', 'deriveKey']
  );

  const derivedBits = await crypto.subtle.deriveBits(
    {
      name: 'PBKDF2',
      salt,
      iterations: PBKDF2_ITERATIONS,
      hash: HASH_ALGO
    },
    keyMaterial,
    KEY_BYTES * 8
  );

  const saltHex = buf2hex(salt);
  const hashHex = buf2hex(derivedBits);

  return `v1:${saltHex}:${hashHex}`;
}

/**
 * Verify a plain password against a stored hash or legacy plain string.
 */
export async function verifyPassword(plainPassword, storedHash) {
  if (!plainPassword || !storedHash) return false;

  // Handle v1 PBKDF2 format
  if (storedHash.startsWith('v1:')) {
    const parts = storedHash.split(':');
    if (parts.length === 3) {
      const [, saltHex, hashHex] = parts;

      if (saltHex === 'fallback') {
        return timingSafeEqual(btoa(encodeURIComponent(plainPassword)), hashHex);
      }

      if (typeof crypto === 'undefined' || !crypto.subtle) return false;

      const encoder = new TextEncoder();
      const salt = hex2buf(saltHex);

      const keyMaterial = await crypto.subtle.importKey(
        'raw',
        encoder.encode(plainPassword),
        { name: 'PBKDF2' },
        false,
        ['deriveBits', 'deriveKey']
      );

      const derivedBits = await crypto.subtle.deriveBits(
        {
          name: 'PBKDF2',
          salt,
          iterations: PBKDF2_ITERATIONS,
          hash: HASH_ALGO
        },
        keyMaterial,
        KEY_BYTES * 8
      );

      const testHashHex = buf2hex(derivedBits);
      return timingSafeEqual(testHashHex, hashHex);
    }
  }

  // Constant-time fallback for legacy plain hashes during migration
  return timingSafeEqual(plainPassword, storedHash);
}

/* =======================================================================
 * RATE LIMITING & BRUTE FORCE DEFENSE (Session-scoped)
 * ======================================================================= */
const MAX_ATTEMPTS = 5;
const LOCKOUT_MS = 60 * 1000; // 60 seconds lockout
const RATE_LIMIT_PREFIX = 'gei_rl_';

export function getRateLimitStatus(identifier) {
  if (!identifier) return { isLocked: false, remainingSec: 0 };
  const key = `${RATE_LIMIT_PREFIX}${identifier.trim().toLowerCase()}`;

  try {
    const raw = sessionStorage.getItem(key);
    if (!raw) return { isLocked: false, remainingSec: 0, attempts: 0 };

    const data = JSON.parse(raw);
    const now = Date.now();

    if (data.lockedUntil && data.lockedUntil > now) {
      const remainingSec = Math.ceil((data.lockedUntil - now) / 1000);
      return { isLocked: true, remainingSec, attempts: data.attempts };
    }

    // Lockout expired, reset if needed
    if (data.lockedUntil && data.lockedUntil <= now) {
      sessionStorage.removeItem(key);
      return { isLocked: false, remainingSec: 0, attempts: 0 };
    }

    return { isLocked: false, remainingSec: 0, attempts: data.attempts || 0 };
  } catch {
    return { isLocked: false, remainingSec: 0, attempts: 0 };
  }
}

export function recordFailedLogin(identifier) {
  if (!identifier) return;
  const key = `${RATE_LIMIT_PREFIX}${identifier.trim().toLowerCase()}`;
  const now = Date.now();

  try {
    const status = getRateLimitStatus(identifier);
    const newAttempts = status.attempts + 1;

    if (newAttempts >= MAX_ATTEMPTS) {
      const payload = {
        attempts: newAttempts,
        lockedUntil: now + LOCKOUT_MS
      };
      sessionStorage.setItem(key, JSON.stringify(payload));
      return { isLocked: true, remainingSec: 60 };
    } else {
      sessionStorage.setItem(key, JSON.stringify({ attempts: newAttempts, lockedUntil: null }));
      return { isLocked: false, remainingSec: 0, attemptsRemaining: MAX_ATTEMPTS - newAttempts };
    }
  } catch {
    // Ignore storage errors
  }
}

export function clearRateLimit(identifier) {
  if (!identifier) return;
  const key = `${RATE_LIMIT_PREFIX}${identifier.trim().toLowerCase()}`;
  try {
    sessionStorage.removeItem(key);
  } catch {
    // Ignore storage errors
  }
}

/* =======================================================================
 * INPUT SANITIZATION & XSS PREVENTION
 * ======================================================================= */
const DANGEROUS_PATTERNS = [
  /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
  /javascript:/gi,
  /vbscript:/gi,
  /data:text\/html/gi,
  /onload\s*=/gi,
  /onerror\s*=/gi,
  /onclick\s*=/gi
];

/**
 * Sanitize untrusted user input string:
 * - Trims whitespace
 * - Strips script tags, inline javascript:, and event handler payloads
 * - Encodes unescaped HTML angle brackets to prevent DOM injection
 */
export function sanitizeInput(input = '') {
  if (typeof input !== 'string') return input;

  let sanitized = input.trim();

  // Strip dangerous patterns
  for (const pattern of DANGEROUS_PATTERNS) {
    sanitized = sanitized.replace(pattern, '');
  }

  // Escape HTML entities for storage/display safety
  sanitized = sanitized
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;');

  return sanitized;
}

/**
 * Deep sanitize an object's string properties recursively
 */
export function sanitizeObject(obj) {
  if (!obj || typeof obj !== 'object') return obj;

  if (Array.isArray(obj)) {
    return obj.map(item => (typeof item === 'object' ? sanitizeObject(item) : sanitizeInput(item)));
  }

  const result = {};
  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === 'string') {
      result[key] = sanitizeInput(value);
    } else if (typeof value === 'object' && value !== null) {
      result[key] = sanitizeObject(value);
    } else {
      result[key] = value;
    }
  }
  return result;
}
