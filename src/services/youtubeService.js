/**
 * youtubeService.js
 * ──────────────────
 * Placeholder service for future YouTube Data API v3 integration.
 * Implement functions here when the YouTube API is connected.
 * Shape of return values defined in src/models/youtube.js.
 */

import apiClient from './apiClient'

export const fetchChannelMetrics = (params) =>
  apiClient.get('/youtube/metrics', { params }).then((r) => r.data)

export const fetchTopContent = (params) =>
  apiClient.get('/youtube/content', { params }).then((r) => r.data)
