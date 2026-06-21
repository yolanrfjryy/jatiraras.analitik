import { Eye, Heart } from 'lucide-react'
import { cn } from '@/utils/classNames'
import { formatCompact, formatPercent } from '@/utils/formatters'
import RankBadge    from '@/components/ui/RankBadge'
import PlatformBadge from '@/components/ui/PlatformBadge'

/**
 * TopContentHighlights
 * ────────────────────
 * Three featured content cards displayed in a horizontal grid.
 * Each card shows: rank, platform, thumbnail, title, views, engagement rate.
 *
 * Props:
 *   items {Array<{ id, platform, thumbnailBg, title, views, engagementRate }>}
 */
export default function TopContentHighlights({ items = [] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {items.slice(0, 3).map((item, i) => (
        <div
          key={item.id}
          className="card hover:shadow-card-md transition-shadow flex flex-col gap-3"
        >
          {/* Rank + Platform row */}
          <div className="flex items-center justify-between">
            <RankBadge rank={i + 1} />
            <PlatformBadge platform={item.platform} size="sm" />
          </div>

          {/* Thumbnail */}
          <div
            className={cn(
              'w-full h-28 rounded-xl flex items-center justify-center',
              item.thumbnailBg ?? 'bg-slate-100'
            )}
            aria-hidden="true"
          >
            <span className="text-white/50 text-lg font-bold select-none">
              {item.platform === 'tiktok' ? '▶' : '▪'}
            </span>
          </div>

          {/* Title */}
          <p className="text-xs font-medium text-slate-800 leading-snug line-clamp-2">
            {item.title}
          </p>

          {/* Stats row */}
          <div className="flex items-center gap-4 mt-auto pt-1 border-t border-surface-border">
            <span className="flex items-center gap-1 text-xs text-slate-500">
              <Eye size={11} className="shrink-0 text-slate-400" />
              <span className="tabular-nums font-medium text-slate-700">
                {formatCompact(item.views)}
              </span>
            </span>
            <span className="flex items-center gap-1 text-xs text-slate-500">
              <Heart size={11} className="shrink-0 text-slate-400" />
              <span className="tabular-nums font-medium text-slate-700">
                {formatPercent(item.engagementRate)}
              </span>
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}
