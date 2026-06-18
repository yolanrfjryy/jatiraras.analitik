/**
 * dateRanges.js
 * ─────────────
 * Canonical list of date range presets used across all filter components.
 * Add custom ranges here — DateRangeFilter reads this array automatically.
 */

export const DATE_RANGE_PRESETS = [
  { label: 'Last 7 days',  value: '7d'     },
  { label: 'Last 28 days', value: '28d'    },
  { label: 'Last 90 days', value: '90d'    },
  { label: 'Last 6 months',value: '180d'   },
  { label: 'Last year',    value: '365d'   },
  { label: 'Custom',       value: 'custom' },
]

export const DEFAULT_DATE_RANGE = '28d'
