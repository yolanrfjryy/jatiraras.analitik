/**
 * formatters.js
 * ─────────────
 * Pure formatting functions used across charts, tables, and stat cards.
 * No side effects. Easy to unit-test.
 */

/**
 * Compact-format a large number.
 * 1200 → '1.2K'   |  1_500_000 → '1.5M'
 * @param {number} value
 * @returns {string}
 */
export function formatCompact(value) {
  if (value === null || value === undefined) return '—'
  if (value >= 1_000_000) return `${(value / 1_000_000).toFixed(1)}M`
  if (value >= 1_000)     return `${(value / 1_000).toFixed(1)}K`
  return value.toLocaleString()
}

/**
 * Format a percentage value with a fixed decimal.
 * 5.372 → '5.4%'
 * @param {number} value
 * @param {number} [decimals=1]
 * @returns {string}
 */
export function formatPercent(value, decimals = 1) {
  if (value === null || value === undefined) return '—'
  return `${Number(value).toFixed(decimals)}%`
}

/**
 * Format seconds into a human-readable duration.
 * 75 → '1m 15s'   |  3661 → '1h 1m'
 * @param {number} seconds
 * @returns {string}
 */
export function formatDuration(seconds) {
  if (!seconds && seconds !== 0) return '—'
  const h = Math.floor(seconds / 3600)
  const m = Math.floor((seconds % 3600) / 60)
  const s = Math.floor(seconds % 60)
  if (h > 0) return `${h}h ${m}m`
  if (m > 0) return `${m}m ${s}s`
  return `${s}s`
}

/**
 * Format an ISO date string to a short display label.
 * '2024-06-15' → 'Jun 15'
 * @param {string} isoDate
 * @returns {string}
 */
export function formatDateShort(isoDate) {
  if (!isoDate) return '—'
  return new Date(isoDate).toLocaleDateString('en-US', {
    month: 'short',
    day:   'numeric',
  })
}

/**
 * Format an ISO date string to a full readable date.
 * '2024-06-15' → 'June 15, 2024'
 * @param {string} isoDate
 * @returns {string}
 */
export function formatDateFull(isoDate) {
  if (!isoDate) return '—'
  return new Date(isoDate).toLocaleDateString('en-US', {
    year:  'numeric',
    month: 'long',
    day:   'numeric',
  })
}

/**
 * Prefix a positive number with '+', negative numbers keep their '-'.
 * 12.5 → '+12.5'  |  -3.2 → '-3.2'
 * @param {number} value
 * @returns {string}
 */
export function formatChangePrefix(value) {
  if (value === null || value === undefined) return '—'
  return value > 0 ? `+${value}` : String(value)
}
