import { cn } from '@/utils/classNames'

/**
 * MetricToggle
 * ────────────
 * Pill-button group for switching between metrics on a chart.
 *
 * Props:
 *   metrics  {Array<{ label: string, value: string }>}
 *   value    {string}                active metric value
 *   onChange {(value: string) => void}
 */
export default function MetricToggle({ metrics = [], value, onChange }) {
  return (
    <div
      className="inline-flex items-center bg-slate-100 rounded-lg p-1 gap-0.5"
      role="group"
      aria-label="Select metric"
    >
      {metrics.map((m) => (
        <button
          key={m.value}
          onClick={() => onChange?.(m.value)}
          aria-pressed={value === m.value}
          className={cn(
            'px-3 py-1 rounded-md text-sm font-medium transition-all',
            value === m.value
              ? 'bg-white text-slate-900 shadow-card'
              : 'text-slate-500 hover:text-slate-700'
          )}
        >
          {m.label}
        </button>
      ))}
    </div>
  )
}
