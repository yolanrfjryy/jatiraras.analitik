import { cn } from '@/utils/classNames'

/**
 * ChartCard
 * ─────────
 * Consistent card wrapper for every chart section.
 * Provides title, optional subtitle, and a right-side toolbar slot.
 *
 * Props:
 *   title     {string}
 *   subtitle  {string}    optional
 *   toolbar   {ReactNode} optional — MetricToggle, DateRangeFilter, etc.
 *   children  {ReactNode} the chart itself
 *   className {string}    additional Tailwind classes
 */
export default function ChartCard({ title, subtitle, toolbar, children, className }) {
  return (
    <div className={cn('card', className)}>
      <div className="flex items-start justify-between gap-4 mb-5">
        <div className="min-w-0">
          <h3 className="text-sm font-semibold text-slate-800 truncate">{title}</h3>
          {subtitle && (
            <p className="text-xs text-slate-400 mt-0.5">{subtitle}</p>
          )}
        </div>
        {toolbar && <div className="shrink-0">{toolbar}</div>}
      </div>
      {children}
    </div>
  )
}
