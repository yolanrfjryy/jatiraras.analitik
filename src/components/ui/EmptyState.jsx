import { BarChart2 } from 'lucide-react'

/**
 * EmptyState
 * ──────────
 * Shown when a section returns no data.
 *
 * Props:
 *   title       {string}
 *   description {string}
 *   icon        {ReactNode}  optional, defaults to BarChart2
 */
export default function EmptyState({
  title       = 'No data yet',
  description = 'Data will appear here once your account is connected.',
  icon,
}) {
  return (
    <div className="flex flex-col items-center justify-center py-14 text-center px-4">
      <span className="flex items-center justify-center w-14 h-14 rounded-2xl bg-slate-100 text-slate-400 mb-4">
        {icon ?? <BarChart2 size={24} />}
      </span>
      <p className="text-sm font-semibold text-slate-700">{title}</p>
      <p className="text-xs text-slate-400 mt-1 max-w-xs">{description}</p>
    </div>
  )
}
