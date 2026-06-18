/**
 * chartTheme.js
 * ─────────────
 * Shared visual tokens injected into every Recharts instance.
 * Change here → updates all charts at once.
 */

export const CHART_COLORS = {
  primary:   '#f97316', // brand-500
  secondary: '#3b82f6', // blue-500
  tertiary:  '#10b981', // emerald-500
  danger:    '#ef4444', // red-500
  muted:     '#94a3b8', // slate-400
}

// Ordered palette for multi-series charts
export const CHART_PALETTE = [
  CHART_COLORS.primary,
  CHART_COLORS.secondary,
  CHART_COLORS.tertiary,
  '#8b5cf6', // violet-500
  '#f59e0b', // amber-500
  CHART_COLORS.danger,
]

export const CHART_GRID_COLOR   = '#f1f5f9' // slate-100
export const CHART_AXIS_COLOR   = '#94a3b8' // slate-400
export const CHART_AXIS_FONT_SIZE = 11

// Default chart dimensions
export const CHART_HEIGHT_SM = 200
export const CHART_HEIGHT_MD = 280
export const CHART_HEIGHT_LG = 360
