/**
 * models/platform.js
 * ──────────────────
 * Shared type contracts that span all social platforms.
 * Extended by tiktok.js, instagram.js, youtube.js.
 */

/**
 * @typedef {'7d'|'28d'|'90d'|'180d'|'365d'} DateRange
 * Canonical date-range preset passed as a query param to all services.
 */

/**
 * @typedef {Object} TimeSeriesPoint
 * Generic single-metric daily data point used in line / area charts.
 *
 * @property {string} date   - ISO 8601 date string  e.g. '2026-06-01'
 * @property {string} label  - short display string  e.g. 'Jun 1'
 * @property {number} value  - the metric value on this date
 */

/**
 * @typedef {Object} PlatformSummary
 * One platform's contribution to the cross-platform Overview strip.
 *
 * @property {string} platform       - PLATFORM_KEYS value
 * @property {number} followers
 * @property {number} followersChange - % vs previous period
 * @property {number} totalViews
 * @property {number} viewsChange
 * @property {number} totalLikes
 * @property {number} engagementRate  - 0–100
 * @property {string} lastUpdatedAt   - ISO 8601
 */

/**
 * @typedef {Object} DataLayerResponse
 * Standard wrapper returned by every repository method.
 * Allows UI to handle loading / error / stale states uniformly.
 *
 * @template T
 * @property {T|null}      data        - the payload, null when loading or errored
 * @property {boolean}     isLoading
 * @property {string|null} error       - human-readable error message or null
 * @property {string|null} fetchedAt   - ISO 8601 when data was last fetched
 * @property {boolean}     isMock      - true when data comes from mock fixtures
 */
