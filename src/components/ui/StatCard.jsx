import { TrendingUp, TrendingDown, Minus } from 'lucide-react'
import { cn } from '@/utils/classNames'
import { formatCompact, formatPercent, formatChangePrefix } from '@/utils/formatters'
import { getTrendDirection } from '@/utils/trendHelpers'

/**
 * StatCard
 * ────────
 * KPI summary tile used in the overview strip.
 *
 * Props:
 *   label       {string}
 *   value       {number|string}
 *   change      {number}         percentage change vs prev period
 *   icon        {ReactNode}
 *   description {string}         optional context label, e.g. 'vs prev 28 days'
 *   compact     {boolean}        use formatCompact for value display
 */
export default function StatCard({ label, value, change, icon, description, compact = true }) {
  const direction = getTrendDirection(change ?? 0)

  const trendIcon = {
    up:      <TrendingUp  size={11} />,
    down:    <TrendingDown size={11} />,
    neutral: <Minus        size={11} />,
  }

  const trendClass = {
    up:      'badge-positive',
    down:    'badge-negative',
    neutral: 'badge-neutral',
  }

  const displayValue =
    typeof value === 'number' && compact
      ? formatCompact(value)
      : (value ?? '—')

  return (
    <div className="card hover:shadow-card-md transition-shadow">
      {/* Header row */}
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
          {label}
        </span>
        {icon && (
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-brand-50 text-brand-600">
            {icon}
          </span>
        )}
      </div>

      {/* Value */}
      <p className="text-2xl font-bold text-slate-900 mb-2 tabular-nums">
        {displayValue}
      </p>

      {/* Trend + description */}
      {change !== undefined && (
        <div className="flex items-center gap-2 flex-wrap">
          <span className={cn(trendClass[direction])}>
            {trendIcon[direction]}
            {formatPercent(Math.abs(change ?? 0))}
          </span>
          {description && (
            <span className="text-xs text-slate-400">{description}</span>
          )}
        </div>
      )}
    </div>
  )
}
