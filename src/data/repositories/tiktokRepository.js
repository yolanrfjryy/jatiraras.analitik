/**
 * tiktokRepository.js
 * ───────────────────
 * Data access layer for all TikTok analytics — @jatiraras.sawarga.
 *
 * ┌─ Architecture ───────────────────────────────────────────────────────┐
 * │                                                                      │
 * │  Page / Component                                                    │
 * │       ↓                                                              │
 * │  hooks/useTikTokAnalytics   useTikTokOverview   useTikTokProfile     │
 * │       ↓                                                              │
 * │  tiktokRepository  ← YOU ARE HERE                                    │
 * │       ↓  USE_MOCK = true          ↓  USE_MOCK = false (future)       │
 * │  profileData.js               tiktokPublicService.js                 │
 * │  accountData.js               → fetchPublicProfile()                 │
 * │  contentData.js               → fetchPublicVideos()                  │
 * │  insightData.js               → (derived from public data)           │
 * │  predictionData.js            → (derived from public data)           │
 * │                                                                      │
 * └──────────────────────────────────────────────────────────────────────┘
 *
 * HOW TO SWITCH TO LIVE PUBLIC DATA:
 *   1. Set USE_MOCK = false below
 *   2. Implement fetchPublicProfile() + fetchPublicVideos() in
 *      src/services/tiktokPublicService.js
 *   3. The rest of the codebase requires zero changes
 */

// ── Named data files ─────────────────────────────────────────────────────────
import { profileData }                    from '@/data/profileData'
import { accountData }                    from '@/data/accountData'
import { contentData }                    from '@/data/contentData'
import { insightData, allInsights }       from '@/data/insightData'
import { predictionData, allPredictions } from '@/data/predictionData'
import { growthFixture, audienceFixture } from '@/data/fixtures/tiktok'

// ── Feature flag ─────────────────────────────────────────────────────────────
// Set to false when tiktokPublicService.js is implemented.
const USE_MOCK = true

// ── Simulated network latency in mock mode (ms) ───────────────────────────────
const MOCK_DELAY_MS = 350

function mockResolve(data) {
  return new Promise((resolve) => setTimeout(() => resolve(data), MOCK_DELAY_MS))
}

// ─────────────────────────────────────────────────────────────────────────────
// Public Profile
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Fetch public profile for @jatiraras.sawarga.
 *
 * @returns {Promise<import('@/models/tiktok').TikTokPublicProfile>}
 */
export async function getPublicProfile() {
  if (USE_MOCK) return mockResolve(profileData)
  // Live ↓
  // const { fetchPublicProfile } = await import('@/services/tiktokPublicService')
  // return fetchPublicProfile()
  throw new Error('Live public profile service not yet connected.')
}

// ─────────────────────────────────────────────────────────────────────────────
// Account Metrics
// ─────────────────────────────────────────────────────────────────────────────

/**
 * @param {{ range?: import('@/models/tiktok').DateRange }} [params]
 * @returns {Promise<import('@/models/tiktok').TikTokAccountMetrics>}
 */
export async function getAccountMetrics(params = {}) {
  if (USE_MOCK) return mockResolve(accountData)
  // Live ↓
  // Derived from getPublicProfile() + getVideos() when real data is connected.
  // const { fetchPublicProfile, fetchPublicVideos } = await import('@/services/tiktokPublicService')
  throw new Error('Live account metrics service not yet connected.')
}

// ─────────────────────────────────────────────────────────────────────────────
// Videos / Content
// ─────────────────────────────────────────────────────────────────────────────

/**
 * @param {{ range?: import('@/models/tiktok').DateRange }} [params]
 * @returns {Promise<import('@/models/tiktok').TikTokVideo[]>}
 */
export async function getVideos(params = {}) {
  if (USE_MOCK) return mockResolve(contentData)
  // Live ↓
  // const { fetchPublicVideos } = await import('@/services/tiktokPublicService')
  // return fetchPublicVideos(params)
  throw new Error('Live video service not yet connected.')
}

/**
 * Top N videos sorted by engagement rate.
 * @param {number} [limit=5]
 * @returns {Promise<import('@/models/tiktok').TikTokVideo[]>}
 */
export async function getTopVideos(limit = 5) {
  const all = await getVideos()
  return all
    .slice()
    .sort((a, b) => b.engagementRate - a.engagementRate)
    .slice(0, limit)
}

// ─────────────────────────────────────────────────────────────────────────────
// Growth
// ─────────────────────────────────────────────────────────────────────────────

/**
 * @param {{ range?: import('@/models/tiktok').DateRange }} [params]
 * @returns {Promise<import('@/models/tiktok').TikTokGrowthData>}
 */
export async function getGrowthData(params = {}) {
  if (USE_MOCK) return mockResolve(growthFixture)
  throw new Error('Live growth data service not yet connected.')
}

// ─────────────────────────────────────────────────────────────────────────────
// Audience
// ─────────────────────────────────────────────────────────────────────────────

/**
 * @param {{ range?: import('@/models/tiktok').DateRange }} [params]
 * @returns {Promise<import('@/models/tiktok').TikTokAudienceMetrics>}
 */
export async function getAudienceMetrics(params = {}) {
  if (USE_MOCK) return mockResolve(audienceFixture)
  throw new Error('Live audience service not yet connected.')
}

// ─────────────────────────────────────────────────────────────────────────────
// AI Insights
// ─────────────────────────────────────────────────────────────────────────────

/**
 * @returns {Promise<import('@/models/tiktok').TikTokAiInsight[]>}
 */
export async function getInsights() {
  if (USE_MOCK) return mockResolve(allInsights)
  throw new Error('Live insights service not yet connected.')
}

/**
 * @returns {Promise<import('@/models/tiktok').TikTokAiInsight>}
 */
export async function getPrimaryInsight() {
  if (USE_MOCK) return mockResolve(insightData)
  const all = await getInsights()
  return all[0] ?? null
}

// ─────────────────────────────────────────────────────────────────────────────
// Predictions
// ─────────────────────────────────────────────────────────────────────────────

/**
 * @returns {Promise<import('@/models/tiktok').TikTokPrediction[]>}
 */
export async function getPredictions() {
  if (USE_MOCK) return mockResolve(allPredictions)
  throw new Error('Live predictions service not yet connected.')
}

/**
 * @returns {Promise<import('@/models/tiktok').TikTokPrediction>}
 */
export async function getPrimaryPrediction() {
  if (USE_MOCK) return mockResolve(predictionData)
  const all = await getPredictions()
  return all[0] ?? null
}

// ─────────────────────────────────────────────────────────────────────────────
// Composite page-level fetches
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Everything TikTokAnalyticsPage needs — fetched in parallel.
 *
 * @param {{ range?: import('@/models/tiktok').DateRange }} [params]
 * @returns {Promise<import('@/models/tiktok').TikTokAnalyticsPageData>}
 */
export async function getAnalyticsPageData(params = {}) {
  const [accountMetrics, videos, insight, prediction] = await Promise.all([
    getAccountMetrics(params),
    getVideos(params),
    getPrimaryInsight(),
    getPrimaryPrediction(),
  ])
  return { accountMetrics, videos, insight, prediction, fetchedAt: new Date().toISOString() }
}

/**
 * Everything OverviewPage needs from TikTok — fetched in parallel.
 *
 * @param {{ range?: import('@/models/tiktok').DateRange }} [params]
 * @returns {Promise<import('@/models/tiktok').TikTokOverviewPageData>}
 */
export async function getOverviewPageData(params = {}) {
  const [accountMetrics, growth, topContent] = await Promise.all([
    getAccountMetrics(params),
    getGrowthData(params),
    getTopVideos(5),
  ])
  return { accountMetrics, growth, topContent }
}
