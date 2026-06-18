/**
 * models/tiktok.js
 * ────────────────
 * Complete JSDoc type contracts for every TikTok data structure
 * used in the Jatiraras Sawarga dashboard.
 *
 * Single source of truth between:
 *   - JSON fixtures       (src/data/fixtures/tiktok/)
 *   - Named data files    (src/data/accountData.js, contentData.js, …)
 *   - Repository layer    (src/data/repositories/tiktokRepository.js)
 *   - Service layer       (src/services/tiktokService.js)
 *   - React components    (src/components/, src/pages/)
 *
 * Migration path: when moving to TypeScript, convert each @typedef
 * directly to an `interface` — field names are identical.
 */

// ─────────────────────────────────────────────────────────────────────────────
// Shared primitives
// ─────────────────────────────────────────────────────────────────────────────

/**
 * @typedef {'7d'|'28d'|'90d'|'180d'|'365d'} DateRange
 */

/**
 * @typedef {'positive'|'negative'|'neutral'} TrendDirection
 */

// ─────────────────────────────────────────────────────────────────────────────
// Public Profile
// ─────────────────────────────────────────────────────────────────────────────

/**
 * @typedef {Object} TikTokPublicProfile
 * Public-facing account identity shown in the dashboard header / profile strip.
 * All fields come from TikTok's public profile page — no authentication needed.
 *
 * @property {string} username         - handle without '@',  e.g. 'jatiraras.sawarga'
 * @property {string} displayName      - full display name,   e.g. 'Jatiraras Sawarga'
 * @property {string} bio              - profile bio text
 * @property {string} avatarUrl        - absolute URL to profile picture
 * @property {string} profileUrl       - full TikTok profile URL
 * @property {number} followers        - public follower count
 * @property {number} following        - accounts this account follows
 * @property {number} totalLikes       - cumulative likes across all videos (public)
 * @property {number} totalVideos      - total number of public videos posted
 * @property {string} lastFetchedAt    - ISO 8601 datetime of last data refresh
 */

// ─────────────────────────────────────────────────────────────────────────────
// Account Metrics  (KPI cards — includes derived/period data)
// ─────────────────────────────────────────────────────────────────────────────

/**
 * @typedef {Object} TikTokAccountMetrics
 * Period-level KPIs shown in the summary cards strip.
 * Extends the public profile counts with period-over-period changes.
 *
 * @property {number} followers           - current follower count
 * @property {number} followersChange     - % change vs previous period
 * @property {number} following           - accounts followed
 * @property {number} totalLikes          - cumulative likes (all-time)
 * @property {number} likesChange         - % change vs previous period
 * @property {number} totalViews          - video views in selected period
 * @property {number} viewsChange         - % change vs previous period
 * @property {number} totalComments       - comments in selected period
 * @property {number} commentsChange      - % change vs previous period
 * @property {number} totalShares         - shares in selected period
 * @property {number} sharesChange        - % change vs previous period
 * @property {number} totalEngagement     - likes + comments + shares in period
 * @property {number} engagementChange    - % change vs previous period
 * @property {number} engagementRate      - totalEngagement / totalViews × 100
 * @property {number} totalPosts          - videos published (all-time)
 * @property {number} postsChange         - % change vs previous period
 * @property {number} profileVisits       - profile page views in period
 * @property {string} lastUpdatedAt       - ISO 8601 datetime
 */

// ─────────────────────────────────────────────────────────────────────────────
// Public Video  (one row in the content table)
// ─────────────────────────────────────────────────────────────────────────────

/**
 * @typedef {Object} TikTokVideo
 * Per-video public statistics shown in the Content Performance table.
 *
 * @property {string}   id               - TikTok video ID (numeric string)
 * @property {string}   caption          - full public caption text
 * @property {string}   thumbnailUrl     - CDN URL to video thumbnail image
 *                                         Empty string until live data is connected;
 *                                         thumbnailBg is used as fallback.
 * @property {string}   thumbnailBg      - Tailwind bg colour class (visual placeholder)
 * @property {string}   videoUrl         - canonical TikTok video page URL
 * @property {string}   uploadDate       - ISO 8601 date  YYYY-MM-DD
 * @property {number}   views            - public view count
 * @property {number}   likes            - public like count
 * @property {number}   comments         - public comment count
 * @property {number}   shares           - public share count
 * @property {number}   engagementRate   - (likes+comments+shares) / views × 100
 * @property {number}   avgWatchTime     - average watch time in seconds (if available)
 * @property {number}   completionRate   - % viewers who watched to end (0–100)
 * @property {string[]} hashtags         - hashtag strings without '#' prefix
 */

// ─────────────────────────────────────────────────────────────────────────────
// Growth time-series
// ─────────────────────────────────────────────────────────────────────────────

/**
 * @typedef {Object} TikTokGrowthPoint
 * One day's snapshot in a growth time-series.
 *
 * @property {string} date        - ISO 8601 date  YYYY-MM-DD
 * @property {string} label       - short display label  e.g. 'Jun 1'
 * @property {number} followers   - follower count on this date
 * @property {number} views       - total views on this date
 * @property {number} likes       - total likes on this date
 * @property {number} comments    - total comments on this date
 * @property {number} shares      - total shares on this date
 */

/**
 * @typedef {Object} TikTokGrowthData
 * @property {string}              range   - DateRange this dataset covers
 * @property {TikTokGrowthPoint[]} points  - ordered oldest → newest
 */

// ─────────────────────────────────────────────────────────────────────────────
// Audience / Demographics
// ─────────────────────────────────────────────────────────────────────────────

/**
 * @typedef {Object} AgeGroup
 * @property {string} range    - e.g. '13-17', '18-24', '25-34'
 * @property {number} percent  - 0–100
 */

/**
 * @typedef {Object} GenderSplit
 * @property {number} male    - percent 0–100
 * @property {number} female  - percent 0–100
 * @property {number} other   - percent 0–100
 */

/**
 * @typedef {Object} TopLocation
 * @property {string} country      - full country name
 * @property {string} countryCode  - ISO 3166-1 alpha-2
 * @property {number} percent      - 0–100
 */

/**
 * @typedef {Object} DeviceSplit
 * @property {number} mobile   - percent
 * @property {number} desktop  - percent
 * @property {number} tablet   - percent
 */

/**
 * @typedef {Object} TikTokAudienceMetrics
 * @property {AgeGroup[]}    ageGroups
 * @property {GenderSplit}   gender
 * @property {TopLocation[]} topLocations
 * @property {DeviceSplit}   devices
 */

// ─────────────────────────────────────────────────────────────────────────────
// AI Insight
// ─────────────────────────────────────────────────────────────────────────────

/**
 * @typedef {Object} TikTokAiInsight
 * @property {string}         id          - unique identifier
 * @property {string}         summary     - short headline ≤ 60 chars
 * @property {string}         detail      - 1–3 sentence explanation
 * @property {TrendDirection} trend       - drives card accent colour
 * @property {string}         category    - 'engagement'|'content'|'audience'|'growth'
 * @property {string}         updatedAt   - ISO 8601 datetime
 */

// ─────────────────────────────────────────────────────────────────────────────
// Prediction
// ─────────────────────────────────────────────────────────────────────────────

/**
 * @typedef {Object} TikTokPrediction
 * @property {string} id             - unique identifier
 * @property {string} metric         - predicted metric key e.g. 'followers'
 * @property {string} summary        - short headline ≤ 60 chars
 * @property {string} detail         - 1–3 sentence explanation
 * @property {number} confidence     - model confidence 0–100
 * @property {string} horizon        - time window e.g. '30 days'
 * @property {number} projectedValue - expected metric value at horizon end
 * @property {string} generatedAt    - ISO 8601 datetime
 */

// ─────────────────────────────────────────────────────────────────────────────
// Composite page-level shapes  (returned by repository composite functions)
// ─────────────────────────────────────────────────────────────────────────────

/**
 * @typedef {Object} TikTokAnalyticsPageData
 * @property {TikTokAccountMetrics} accountMetrics
 * @property {TikTokVideo[]}        videos
 * @property {TikTokAiInsight}      insight
 * @property {TikTokPrediction}     prediction
 * @property {string}               fetchedAt   - ISO 8601 datetime
 */

/**
 * @typedef {Object} TikTokOverviewPageData
 * @property {TikTokAccountMetrics} accountMetrics
 * @property {TikTokGrowthData}     growth
 * @property {TikTokVideo[]}        topContent   - top 5 by engagementRate
 */
