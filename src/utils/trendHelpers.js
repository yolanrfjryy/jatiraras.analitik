/**
 * trendHelpers.js
 * ───────────────
 * Helpers for deriving trend direction and badge variant from numeric changes.
 */

/**
 * Returns the badge variant based on a numeric percentage change.
 * @param {number} change
 * @returns {'positive'|'negative'|'neutral'}
 */
export function getTrendVariant(change) {
  if (change > 0)  return 'positive'
  if (change < 0)  return 'negative'
  return 'neutral'
}

/**
 * Returns 'up', 'down', or 'neutral' — used for icon selection.
 * @param {number} change
 * @returns {'up'|'down'|'neutral'}
 */
export function getTrendDirection(change) {
  if (change > 0) return 'up'
  if (change < 0) return 'down'
  return 'neutral'
}
