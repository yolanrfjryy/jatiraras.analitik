/**
 * tiktokPublicService.js
 * ──────────────────────
 * Reusable service layer for fetching PUBLIC TikTok account data.
 *
 * Account: @jatiraras.sawarga
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * IMPORTANT — No authentication required
 * ─────────────────────────────────────────────────────────────────────────────
 * These functions target PUBLIC data only:
 *   - Public profile  (username, avatar, followers, following, likes, video count)
 *   - Public videos   (thumbnail, caption, upload date, views, likes, comments, shares)
 *
 * No OAuth, no API keys, no login.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * Integration strategy (when ready)
 * ─────────────────────────────────────────────────────────────────────────────
 * Option A — Proxy scraper (recommended for production):
 *   Deploy a lightweight backend proxy (e.g. Cloudflare Worker, Vercel Function)
 *   that fetches https://www.tiktok.com/@jatiraras.sawarga, parses the
 *   __UNIVERSAL_DATA_FOR_REHYDRATION__ JSON blob embedded in the HTML,
 *   and exposes it as a clean JSON endpoint that this service calls.
 *
 *   Endpoint: GET /api/tiktok/public/profile?username=jatiraras.sawarga
 *   Endpoint: GET /api/tiktok/public/videos?username=jatiraras.sawarga
 *
 * Option B — Third-party analytics API (RapidAPI / Apify):
 *   Use a service such as:
 *     https://rapidapi.com/search/tiktok
 *   Point the functions below at the chosen API's endpoint.
 *
 * Either way, the repository and UI require zero changes.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * Current state: STUBS — not yet connected
 * ─────────────────────────────────────────────────────────────────────────────
 * Un-comment and implement the fetch calls in each function when ready.
 * Then set USE_MOCK = false in tiktokRepository.js.
 */

// import apiClient from './apiClient'

/** TikTok account handle — change here to switch accounts. */
export const TIKTOK_ACCOUNT = 'jatiraras.sawarga'

/** Base URL for the proxy / third-party endpoint (set in .env). */
const PUBLIC_API_BASE = import.meta.env.VITE_TIKTOK_PUBLIC_API_BASE ?? ''

// ─────────────────────────────────────────────────────────────────────────────
// Public Profile
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Fetch public profile data for the configured TikTok account.
 *
 * Expected response shape: TikTokPublicProfile (see models/tiktok.js)
 *
 * @returns {Promise<import('@/models/tiktok').TikTokPublicProfile>}
 */
export async function fetchPublicProfile() {
  // ── Implement when proxy / API is ready ──────────────────────────────────
  // const response = await fetch(
  //   `${PUBLIC_API_BASE}/profile?username=${TIKTOK_ACCOUNT}`
  // )
  // if (!response.ok) throw new Error(`Profile fetch failed: ${response.status}`)
  // return response.json()
  // ─────────────────────────────────────────────────────────────────────────
  throw new Error(
    'tiktokPublicService.fetchPublicProfile() not yet implemented. ' +
    'See integration instructions in this file.'
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// Public Videos
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Fetch the list of public videos for the configured TikTok account.
 *
 * Expected response shape: TikTokVideo[] (see models/tiktok.js)
 *
 * @param {{ limit?: number, cursor?: string }} [params]
 * @returns {Promise<import('@/models/tiktok').TikTokVideo[]>}
 */
export async function fetchPublicVideos(params = {}) {
  // ── Implement when proxy / API is ready ──────────────────────────────────
  // const { limit = 20, cursor = '' } = params
  // const url = new URL(`${PUBLIC_API_BASE}/videos`)
  // url.searchParams.set('username', TIKTOK_ACCOUNT)
  // url.searchParams.set('limit',    String(limit))
  // if (cursor) url.searchParams.set('cursor', cursor)
  //
  // const response = await fetch(url.toString())
  // if (!response.ok) throw new Error(`Videos fetch failed: ${response.status}`)
  // return response.json()  // must match TikTokVideo[] shape
  // ─────────────────────────────────────────────────────────────────────────
  throw new Error(
    'tiktokPublicService.fetchPublicVideos() not yet implemented. ' +
    'See integration instructions in this file.'
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// Normalizers  (raw API → TikTokPublicProfile / TikTokVideo)
// ─────────────────────────────────────────────────────────────────────────────
// When the live endpoint is connected, add a normalizer here to transform
// the raw API/scraper response into the exact shape the dashboard expects.
// The repository calls these normalizers — the UI never sees raw API data.

/**
 * Normalize a raw public profile API response → TikTokPublicProfile.
 * Implement this when the live endpoint is known.
 *
 * @param {any} raw  - raw response from the proxy / third-party API
 * @returns {import('@/models/tiktok').TikTokPublicProfile}
 */
export function normalizeProfile(raw) {
  // Example skeleton — adapt field names to match the actual API response:
  // return {
  //   username:      raw.uniqueId         ?? '',
  //   displayName:   raw.nickname          ?? '',
  //   bio:           raw.signature         ?? '',
  //   avatarUrl:     raw.avatarMedium      ?? '',
  //   profileUrl:    `https://www.tiktok.com/@${raw.uniqueId}`,
  //   followers:     raw.followerCount     ?? 0,
  //   following:     raw.followingCount    ?? 0,
  //   totalLikes:    raw.heartCount        ?? 0,
  //   totalVideos:   raw.videoCount        ?? 0,
  //   lastFetchedAt: new Date().toISOString(),
  // }
  throw new Error('normalizeProfile() not yet implemented.')
}

/**
 * Normalize a single raw video item → TikTokVideo.
 * Implement this when the live endpoint is known.
 *
 * @param {any} raw  - single video item from the proxy / third-party API
 * @returns {import('@/models/tiktok').TikTokVideo}
 */
export function normalizeVideo(raw) {
  // Example skeleton:
  // return {
  //   id:             String(raw.id),
  //   caption:        raw.desc              ?? '',
  //   thumbnailUrl:   raw.video?.cover      ?? '',
  //   thumbnailBg:    'bg-slate-200',
  //   videoUrl:       `https://www.tiktok.com/@${TIKTOK_ACCOUNT}/video/${raw.id}`,
  //   uploadDate:     new Date(raw.createTime * 1000).toISOString().split('T')[0],
  //   views:          raw.stats?.playCount   ?? 0,
  //   likes:          raw.stats?.diggCount   ?? 0,
  //   comments:       raw.stats?.commentCount ?? 0,
  //   shares:         raw.stats?.shareCount  ?? 0,
  //   engagementRate: calcEngagementRate(raw.stats),
  //   avgWatchTime:   0,
  //   completionRate: 0,
  //   hashtags:       extractHashtags(raw.desc),
  // }
  throw new Error('normalizeVideo() not yet implemented.')
}
