import { CheckCircle2, Clock } from 'lucide-react'
import { cn } from '@/utils/classNames'
import { formatCompact } from '@/utils/formatters'

/**
 * PlatformStatusCard
 * ──────────────────
 * Shows connection status, platform colour, and follower count
 * for one social platform in the Platform Status section.
 *
 * Props:
 *   platform   {string}  platform key, e.g. 'tiktok'
 *   label      {string}  display name
 *   status     {'active'|'coming_soon'}
 *   followers  {number|null}
 *   color      {string}  hex colour
 */
export default function PlatformStatusCard({ label, status, followers, color }) {
  const isActive = status === 'active'

  return (
    <div
      className={cn(
        'flex items-center gap-4 p-4 rounded-xl border transition-shadow',
        isActive
          ? 'bg-white border-surface-border shadow-card hover:shadow-card-md'
          : 'bg-surface-muted border-surface-border opacity-70'
      )}
    >
      {/* Platform colour dot */}
      <span
        className="w-10 h-10 rounded-xl shrink-0 flex items-center justify-center"
        style={{ backgroundColor: `${color}18` }}
        aria-hidden="true"
      >
        <span
          className="w-4 h-4 rounded-full"
          style={{ backgroundColor: color }}
        />
      </span>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-slate-800 truncate">{label}</p>
        {isActive ? (
          <p className="text-xs text-slate-400 tabular-nums mt-0.5">
            {followers !== null ? `${formatCompact(followers)} followers` : '—'}
          </p>
        ) : (
          <p className="text-xs text-slate-400 mt-0.5">Coming soon</p>
        )}
      </div>

      {/* Status badge */}
      {isActive ? (
        <span className="flex items-center gap-1 text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full shrink-0">
          <CheckCircle2 size={11} />
          Active
        </span>
      ) : (
        <span className="flex items-center gap-1 text-xs font-medium text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full shrink-0">
          <Clock size={11} />
          Soon
        </span>
      )}
    </div>
  )
}
