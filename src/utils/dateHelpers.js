/**
 * dateHelpers.js
 * ──────────────
 * Date range calculation utilities.
 * Used by service layers to build API query parameters.
 */

/**
 * Returns { from, to } ISO date strings for a given range preset.
 * @param {'7d'|'28d'|'90d'|'180d'|'365d'} range
 * @returns {{ from: string, to: string }}
 */
export function resolveDateRange(range) {
  const to   = new Date()
  const from = new Date()

  const days = {
    '7d':   7,
    '28d':  28,
    '90d':  90,
    '180d': 180,
    '365d': 365,
  }

  from.setDate(to.getDate() - (days[range] ?? 28))

  return {
    from: from.toISOString().split('T')[0],
    to:   to.toISOString().split('T')[0],
  }
}

/**
 * Returns the same range one period earlier (for calculating % change).
 * e.g. for '28d' ending today, returns the 28-day window before that.
 * @param {'7d'|'28d'|'90d'|'180d'|'365d'} range
 * @returns {{ from: string, to: string }}
 */
export function resolvePreviousPeriod(range) {
  const days  = { '7d': 7, '28d': 28, '90d': 90, '180d': 180, '365d': 365 }
  const n     = days[range] ?? 28
  const to    = new Date()
  const toP   = new Date()
  toP.setDate(to.getDate() - n)
  const fromP = new Date(toP)
  fromP.setDate(toP.getDate() - n)

  return {
    from: fromP.toISOString().split('T')[0],
    to:   toP.toISOString().split('T')[0],
  }
}

/**
 * Calculates percentage change between two numbers.
 * @param {number} current
 * @param {number} previous
 * @returns {number}  rounded to 1 decimal place
 */
export function calcPercentChange(current, previous) {
  if (!previous || previous === 0) return 0
  return Math.round(((current - previous) / Math.abs(previous)) * 1000) / 10
}
