/**
 * app.js
 * ──────
 * Global application-level constants.
 */

export const APP_NAME        = 'Jatiraras Sawarga'
export const APP_TAGLINE     = 'Social Media Analytics'
export const APP_VERSION     = '1.0.0'

// Auto-refresh interval in milliseconds (default: 5 minutes)
export const REFRESH_INTERVAL_MS =
  Number(import.meta.env.VITE_REFRESH_INTERVAL_MS) || 300_000

// API base — Vite proxies /api to the backend
export const API_BASE_URL = '/api'
