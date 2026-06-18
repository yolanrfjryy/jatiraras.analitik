/**
 * tiktokService.js
 * ────────────────
 * HTTP client functions for the TikTok API (future live integration).
 *
 * ┌──────────────────────────────────────────────────────────────┐
 * │  These functions are NOT called directly by components.      │
 * │  The repository layer (tiktokRepository.js) calls them       │
 * │  only when USE_MOCK = false.                                  │
 * └──────────────────────────────────────────────────────────────┘
 *
 * When to implement:
 *   1. Set USE_MOCK = false in tiktokRepository.js
 *   2. Un-comment the import + return lines in each repository function
 *   3. Wire up real endpoint URLs below
 *
 * API reference:
 *   TikTok Research API  → https://developers.tiktok.com/doc/research-api-overview
 *   TikTok Display API   → https://developers.tiktok.com/doc/display-api-overview
 */

import apiClient from './apiClient'

// ─────────────────────────────────────────────────────────────────────────────
// Account Metrics
// ─────────────────────────────────────────────────────────────────────────────

/**
 * GET /api/tiktok/metrics
 *
 * @param {{ range: import('@/models/tiktok').DateRange }} params
 * @returns {Promise<import('@/models/tiktok').TikTokAccountMetrics>}
 */
export const fetchAccountMetrics = (params) =>
  apiClient.get('/tiktok/metrics', { params }).then((r) => r.data)

// ─────────────────────────────────────────────────────────────────────────────
// Videos / Content
// ─────────────────────────────────────────────────────────────────────────────

/**
 * GET /api/tiktok/videos
 *
 * @param {{ range: import('@/models/tiktok').DateRange, limit?: number }} params
 * @returns {Promise<import('@/models/tiktok').TikTokVideo[]>}
 */
export const fetchVideos = (params) =>
  apiClient.get('/tiktok/videos', { params }).then((r) => r.data)

// ─────────────────────────────────────────────────────────────────────────────
// Growth
// ─────────────────────────────────────────────────────────────────────────────

/**
 * GET /api/tiktok/growth
 *
 * @param {{ range: import('@/models/tiktok').DateRange }} params
 * @returns {Promise<import('@/models/tiktok').TikTokGrowthData>}
 */
export const fetchGrowthData = (params) =>
  apiClient.get('/tiktok/growth', { params }).then((r) => r.data)

// ─────────────────────────────────────────────────────────────────────────────
// Audience
// ─────────────────────────────────────────────────────────────────────────────

/**
 * GET /api/tiktok/audience
 *
 * @param {{ range: import('@/models/tiktok').DateRange }} params
 * @returns {Promise<import('@/models/tiktok').TikTokAudienceMetrics>}
 */
export const fetchAudienceMetrics = (params) =>
  apiClient.get('/tiktok/audience', { params }).then((r) => r.data)

// ─────────────────────────────────────────────────────────────────────────────
// Insights & Predictions
// ─────────────────────────────────────────────────────────────────────────────

/**
 * GET /api/tiktok/insights
 *
 * @returns {Promise<import('@/models/tiktok').TikTokAiInsight[]>}
 */
export const fetchInsights = () =>
  apiClient.get('/tiktok/insights').then((r) => r.data)

/**
 * GET /api/tiktok/predictions
 *
 * @returns {Promise<import('@/models/tiktok').TikTokPrediction[]>}
 */
export const fetchPredictions = () =>
  apiClient.get('/tiktok/predictions').then((r) => r.data)
