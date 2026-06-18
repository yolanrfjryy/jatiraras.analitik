/**
 * apiClient.js
 * ────────────
 * Central Axios instance shared by all platform service modules.
 *
 * Responsibilities:
 *   - Sets the base URL (proxied by Vite in dev, real domain in prod)
 *   - Attaches any API key headers needed
 *   - Normalises error responses into a consistent shape
 *
 * No auth logic is needed — this is a public read-only dashboard.
 */

import axios from 'axios'
import { API_BASE_URL } from '@/config/app'

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 15_000,
  headers: {
    'Content-Type': 'application/json',
    Accept:         'application/json',
  },
})

// ── Response interceptor: normalise errors ───────────────────────────────────
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // Attach a human-readable message for the UI error states
    const message =
      error.response?.data?.message ??
      error.message ??
      'An unexpected error occurred'
    return Promise.reject(new Error(message))
  }
)

export default apiClient
