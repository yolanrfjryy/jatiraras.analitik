import { Sparkles, TrendingUp, TrendingDown, Minus } from 'lucide-react'
import { cn } from '@/utils/classNames'
import {
  INSIGHT_CARD_HEADER_LABEL,
  INSIGHT_TREND_CONFIG,
} from '@/data/fixtures/tiktok'

/**
 * Icon resolver — maps iconName strings from uiConfig to lucide components.
 */
const TREND_ICON_MAP = { TrendingUp, TrendingDown, Minus }

/**
 * InsightCard
 * ───────────
 * AI-generated insight tile.
 * All trend labels, colours and the card header label come from uiConfig.js.
 *
 * Props:
 *   summary    {string}                          short headline
 *   detail     {string}                          1–2 sentence explanation
 *   trend      {'positive'|'negative'|'neutral'} colours the card accent
 *   updatedAt  {string}                          ISO date string
 */
export default function InsightCard({ summary, detail, trend = 'neutral', updatedAt }) {
  const config    = INSIGHT_TREND_CONFIG[trend] ?? INSIGHT_TREND_CONFIG.neutral
  const TrendIcon = TREND_ICON_MAP[config.iconName]

  const updatedLabel = updatedAt
    ? new Date(updatedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
    : null

  return (
    <div className="card flex flex-col gap-3 relative overflow-hidden">
      {/* Subtle left accent bar */}
      <span
        className={cn('absolute left-0 top-0 bottom-0 w-1 rounded-l-card', config.barClass)}
        aria-hidden="true"
      />

      {/* Header row */}
      <div className="flex items-start justify-between gap-3 pl-3">
        <div className="flex items-center gap-2">
          <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-brand-50 text-brand-500 shrink-0">
            <Sparkles size={14} />
          </span>
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            {INSIGHT_CARD_HEADER_LABEL}
          </p>
        </div>

        <span className={cn('text-[10px] font-semibold px-2 py-0.5 rounded-full shrink-0', config.badgeClass)}>
          {TrendIcon && <TrendIcon size={9} className="inline mr-0.5" />}
          {config.label}
        </span>
      </div>

      {/* Summary headline */}
      <p className="text-sm font-semibold text-slate-800 pl-3 leading-snug">
        {summary}
      </p>

      {/* Detail text */}
      <p className="text-xs text-slate-500 pl-3 leading-relaxed">
        {detail}
      </p>

      {/* Footer */}
      {updatedLabel && (
        <p className="text-[10px] text-slate-300 pl-3">
          Updated {updatedLabel}
        </p>
      )}
    </div>
  )
}
