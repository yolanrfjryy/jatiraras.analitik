import { Telescope } from 'lucide-react'
import { cn } from '@/utils/classNames'
import {
  PREDICTION_CARD_HEADER_LABEL,
  PREDICTION_CONFIDENCE_LABEL,
  PREDICTION_CONFIDENCE_THRESHOLDS,
} from '@/data/fixtures/tiktok'

/**
 * Resolves bar and score colour classes from the threshold config.
 * @param {number} confidence
 * @returns {{ barClass: string, scoreClass: string }}
 */
function resolveConfidenceClasses(confidence) {
  const match = PREDICTION_CONFIDENCE_THRESHOLDS.find((t) => confidence >= t.min)
  return {
    barClass:   match?.barClass   ?? 'bg-slate-300',
    scoreClass: match?.scoreClass ?? 'text-slate-500',
  }
}

/**
 * PredictionCard
 * ──────────────
 * Forecast / prediction tile.
 * All labels, colour thresholds, and copy come from uiConfig.js.
 *
 * Props:
 *   summary     {string}  short headline
 *   detail      {string}  1–2 sentence explanation
 *   confidence  {number}  0–100 percentage confidence score
 *   horizon     {string}  time window e.g. '30 days'
 */
export default function PredictionCard({ summary, detail, confidence = 0, horizon }) {
  const { barClass, scoreClass } = resolveConfidenceClasses(confidence)

  return (
    <div className="card flex flex-col gap-3 relative overflow-hidden">
      {/* Accent bar */}
      <span
        className="absolute left-0 top-0 bottom-0 w-1 rounded-l-card bg-brand-400"
        aria-hidden="true"
      />

      {/* Header */}
      <div className="flex items-center gap-2 pl-3">
        <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-brand-50 text-brand-500 shrink-0">
          <Telescope size={14} />
        </span>
        <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
          {PREDICTION_CARD_HEADER_LABEL}
        </p>
        {horizon && (
          <span className="ml-auto text-[10px] font-medium text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">
            {horizon}
          </span>
        )}
      </div>

      {/* Summary */}
      <p className="text-sm font-semibold text-slate-800 pl-3 leading-snug">
        {summary}
      </p>

      {/* Detail */}
      <p className="text-xs text-slate-500 pl-3 leading-relaxed">
        {detail}
      </p>

      {/* Confidence bar */}
      <div className="pl-3 pr-1">
        <div className="flex items-center justify-between mb-1">
          <span className="text-[10px] text-slate-400 font-medium">
            {PREDICTION_CONFIDENCE_LABEL}
          </span>
          <span className={cn('text-xs font-bold tabular-nums', scoreClass)}>
            {confidence}%
          </span>
        </div>
        <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
          <div
            className={cn('h-full rounded-full transition-all', barClass)}
            style={{ width: `${confidence}%` }}
            role="progressbar"
            aria-valuenow={confidence}
            aria-valuemin={0}
            aria-valuemax={100}
          />
        </div>
      </div>
    </div>
  )
}
