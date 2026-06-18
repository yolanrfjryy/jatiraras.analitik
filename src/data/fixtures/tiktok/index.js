/**
 * fixtures/tiktok/index.js
 * ────────────────────────
 * Barrel export for all TikTok JSON fixtures and UI config.
 *
 * Import convention:
 *   - Always import from this index, never from individual JSON files.
 *   - Named data files (accountData.js, contentData.js …) are the
 *     preferred import path for application code — this index is
 *     used only by those named files and the repository.
 *
 * Account: @jatiraras.sawarga
 */

import profileRaw        from './profile.json'
import accountMetricsRaw from './accountMetrics.json'
import videosRaw         from './videos.json'
import growthRaw         from './growth.json'
import audienceRaw       from './audience.json'
import insightsRaw       from './insights.json'
import predictionsRaw    from './predictions.json'

// ── Data fixtures ─────────────────────────────────────────────────────────────

/** @type {import('@/models/tiktok').TikTokPublicProfile} */
export const profileFixture = profileRaw

/** @type {import('@/models/tiktok').TikTokAccountMetrics} */
export const accountMetricsFixture = accountMetricsRaw

/** @type {import('@/models/tiktok').TikTokVideo[]} */
export const videosFixture = videosRaw.videos

/** @type {import('@/models/tiktok').TikTokGrowthData} */
export const growthFixture = growthRaw

/** @type {import('@/models/tiktok').TikTokAudienceMetrics} */
export const audienceFixture = audienceRaw

/** @type {import('@/models/tiktok').TikTokAiInsight[]} */
export const insightsFixture = insightsRaw.insights

/** @type {import('@/models/tiktok').TikTokPrediction[]} */
export const predictionsFixture = predictionsRaw.predictions

// ── UI config re-exports ──────────────────────────────────────────────────────

export {
  TIKTOK_KPI_CARDS,
  OVERVIEW_KPI_CARDS,
  CONTENT_SORT_OPTIONS,
  CONTENT_SORT_DEFAULT,
  CONTENT_TABLE_COLUMNS,
  CONTENT_EMPTY_MESSAGE,
  CONTENT_SEARCH_PLACEHOLDER,
  TOP_CONTENT_COLUMNS,
  ENGAGEMENT_RATE_THRESHOLDS,
  GROWTH_CHART_METRICS,
  GROWTH_CHART_DEFAULT_METRIC,
  GROWTH_CHART_TITLE,
  GROWTH_CHART_SUBTITLE,
  INSIGHT_CARD_HEADER_LABEL,
  INSIGHT_TREND_CONFIG,
  PREDICTION_CARD_HEADER_LABEL,
  PREDICTION_CONFIDENCE_LABEL,
  PREDICTION_CONFIDENCE_THRESHOLDS,
} from './uiConfig'
