import { formatDateFull } from '@/utils/formatters'

/**
 * LastUpdatedBadge
 * ────────────────
 * Small pill in the TopBar showing when data was last refreshed.
 *
 * Props:
 *   date {string}  ISO 8601 date string
 */
export default function LastUpdatedBadge({ date }) {
  return (
    <span className="hidden sm:inline-flex items-center text-xs text-slate-400">
      Updated {formatDateFull(date)}
    </span>
  )
}
