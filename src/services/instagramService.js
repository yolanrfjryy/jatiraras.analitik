/**
 * instagramService.js
 * ────────────────────
 * Placeholder service for future Instagram Graph API integration.
 * Implement functions here when the Instagram API is connected.
 * Shape of return values defined in src/models/instagram.js.
 */

import apiClient from './apiClient'

export const fetchAccountMetrics = (params) =>
  apiClient.get('/instagram/metrics', { params }).then((r) => r.data)

export const fetchTopContent = (params) =>
  apiClient.get('/instagram/content', { params }).then((r) => r.data)
