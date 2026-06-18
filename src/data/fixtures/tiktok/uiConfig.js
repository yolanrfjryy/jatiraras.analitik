/**
 * fixtures/tiktok/uiConfig.js
 * ───────────────────────────
 * All UI configuration strings, labels, thresholds and colour tokens
 * that were previously hardcoded inside TikTok component files.
 *
 * Changing a label, sort option, column header, chart colour, or
 * confidence threshold only requires editing this one file.
 *
 * ─────────────────────────────────────────────────────────────
 *  Used by:
 *    components/tiktok/ContentTable.jsx
 *    components/tiktok/TikTokKpiStrip.jsx
 *    components/overview/KpiStrip.jsx
 *    components/overview/GrowthChart.jsx
 *    components/overview/TopContentTable.jsx
 *    components/ui/InsightCard.jsx
 *    components/ui/PredictionCard.jsx
 * ─────────────────────────────────────────────────────────────
 */

// ── KPI card definitions ─────────────────────────────────────────────────────

/**
 * Cards for the TikTok Analytics page KPI strip.
 * `valueKey` / `changeKey` map to fields in TikTokAccountMetrics.
 * `icon` is resolved in the component from `iconName`.
 *
 * @type {Array<{
 *   label: string,
 *   valueKey: string,
 *   changeKey: string,
 *   iconName: string,
 *   description: string,
 * }>}
 */
export const TIKTOK_KPI_CARDS = [
  {
    label:       'Followers',
    valueKey:    'followers',
    changeKey:   'followersChange',
    iconName:    'Users',
    description: 'vs last 28 days',
  },
  {
    label:       'Total Views',
    valueKey:    'totalViews',
    changeKey:   'viewsChange',
    iconName:    'Eye',
    description: 'vs last 28 days',
  },
  {
    label:       'Total Engagement',
    valueKey:    'totalEngagement',
    changeKey:   'engagementChange',
    iconName:    'Heart',
    description: 'vs last 28 days',
  },
  {
    label:       'Total Posts',
    valueKey:    'totalPosts',
    changeKey:   'postsChange',
    iconName:    'Film',
    description: 'vs last 28 days',
  },
]

/**
 * Cards for the Overview page KPI strip.
 * `valueKey` maps to fields in MOCK_KPI (prefixed with 'total').
 */
export const OVERVIEW_KPI_CARDS = [
  {
    label:       'Total Followers',
    valueKey:    'totalFollowers',
    changeKey:   'followersChange',
    iconName:    'Users',
    description: 'vs last 28 days',
  },
  {
    label:       'Total Views',
    valueKey:    'totalViews',
    changeKey:   'viewsChange',
    iconName:    'Eye',
    description: 'vs last 28 days',
  },
  {
    label:       'Total Engagement',
    valueKey:    'totalEngagement',
    changeKey:   'engagementChange',
    iconName:    'Heart',
    description: 'vs last 28 days',
  },
  {
    label:       'Total Posts',
    valueKey:    'totalPosts',
    changeKey:   'postsChange',
    iconName:    'Film',
    description: 'vs last 28 days',
  },
]

// ── Content table ─────────────────────────────────────────────────────────────

/**
 * Sort options for the ContentTable dropdown.
 * `value` is used in the sort switch; `label` is displayed in the UI.
 *
 * @type {Array<{ value: string, label: string }>}
 */
export const CONTENT_SORT_OPTIONS = [
  { value: 'latest',      label: 'Latest'      },
  { value: 'most_viewed', label: 'Most Viewed' },
  { value: 'most_liked',  label: 'Most Liked'  },
]

/** Default sort value applied when the table first mounts. */
export const CONTENT_SORT_DEFAULT = 'latest'

/**
 * Column header definitions for the ContentTable.
 * `key` uniquely identifies the column; `label` is the displayed header text.
 * `align` controls text alignment.
 *
 * @type {Array<{ key: string, label: string, align: 'left'|'right'|'center' }>}
 */
export const CONTENT_TABLE_COLUMNS = [
  { key: 'thumbnail',  label: 'Thumb',  align: 'left'   },
  { key: 'caption',    label: 'Caption', align: 'left'  },
  { key: 'uploadDate', label: 'Date',   align: 'right'  },
  { key: 'views',      label: 'Views',  align: 'right'  },
  { key: 'likes',      label: 'Likes',  align: 'right'  },
  { key: 'comments',   label: 'Cmts',   align: 'right'  },
  { key: 'shares',     label: 'Shares', align: 'right'  },
]

/** Placeholder text shown when the search input returns no results. */
export const CONTENT_EMPTY_MESSAGE = 'No videos match your search.'

/** Search input placeholder text. */
export const CONTENT_SEARCH_PLACEHOLDER = 'Search caption…'

// ── Top Content table (Overview page) ────────────────────────────────────────

/**
 * Column headers for the TopContentTable on the Overview page.
 * Used as an ordered array — index 0 is the rank column.
 */
export const TOP_CONTENT_COLUMNS = ['#', 'Title', 'Published', 'Views', 'Likes', 'Eng.']

/**
 * Engagement rate colour thresholds for the TopContentTable badge.
 * Evaluated top-to-bottom; first match wins.
 *
 * @type {Array<{ min: number, className: string }>}
 */
export const ENGAGEMENT_RATE_THRESHOLDS = [
  { min: 7, className: 'text-emerald-700 bg-emerald-50' },
  { min: 4, className: 'text-brand-700 bg-brand-50'     },
  { min: 0, className: 'text-slate-500 bg-slate-100'    },
]

// ── Growth chart ─────────────────────────────────────────────────────────────

/**
 * Metric toggle options for the GrowthChart.
 * `key`   maps to a field in the growth data points.
 * `label` is shown on the toggle button.
 * `color` is the chart line / area fill hex colour.
 *
 * @type {Array<{ key: string, label: string, color: string }>}
 */
export const GROWTH_CHART_METRICS = [
  { key: 'followers', label: 'Followers', color: '#f97316' },
  { key: 'views',     label: 'Views',     color: '#3b82f6' },
]

/** Which metric is active by default when the chart first renders. */
export const GROWTH_CHART_DEFAULT_METRIC = 'followers'

/** Section title shown above the GrowthChart. */
export const GROWTH_CHART_TITLE = 'Growth Overview'

/** Section subtitle shown below the GrowthChart title. */
export const GROWTH_CHART_SUBTITLE = 'Daily performance for the last 28 days'

// ── Insight card ─────────────────────────────────────────────────────────────

/**
 * Card header label (always displayed above the insight headline).
 */
export const INSIGHT_CARD_HEADER_LABEL = 'AI Insight'

/**
 * Trend configuration for the InsightCard accent colour and badge.
 * Keyed by TrendDirection ('positive' | 'negative' | 'neutral').
 *
 * @type {Record<string, {
 *   iconName:   string,
 *   iconClass:  string,
 *   barClass:   string,
 *   badgeClass: string,
 *   label:      string,
 * }>}
 */
export const INSIGHT_TREND_CONFIG = {
  positive: {
    iconName:   'TrendingUp',
    iconClass:  'text-emerald-500',
    barClass:   'bg-emerald-400',
    badgeClass: 'text-emerald-700 bg-emerald-50',
    label:      'Positive trend',
  },
  negative: {
    iconName:   'TrendingDown',
    iconClass:  'text-red-400',
    barClass:   'bg-red-400',
    badgeClass: 'text-red-700 bg-red-50',
    label:      'Needs attention',
  },
  neutral: {
    iconName:   'Minus',
    iconClass:  'text-slate-400',
    barClass:   'bg-slate-300',
    badgeClass: 'text-slate-600 bg-slate-100',
    label:      'Stable',
  },
}

// ── Prediction card ───────────────────────────────────────────────────────────

/**
 * Card header label (always displayed above the prediction headline).
 */
export const PREDICTION_CARD_HEADER_LABEL = 'Prediction'

/**
 * Label shown above the confidence progress bar.
 */
export const PREDICTION_CONFIDENCE_LABEL = 'Model confidence'

/**
 * Confidence score colour thresholds.
 * Applied to both the progress bar and the percentage text.
 * Evaluated top-to-bottom; first match wins.
 *
 * @type {Array<{ min: number, barClass: string, scoreClass: string }>}
 */
export const PREDICTION_CONFIDENCE_THRESHOLDS = [
  { min: 70, barClass: 'bg-emerald-400', scoreClass: 'text-emerald-600' },
  { min: 40, barClass: 'bg-amber-400',   scoreClass: 'text-amber-600'   },
  { min: 0,  barClass: 'bg-red-400',     scoreClass: 'text-red-500'     },
]
