import { Link } from 'react-router-dom'
import { ArrowRight, Eye } from 'lucide-react'
import { formatCompact, formatDateShort } from '@/utils/formatters'
import SectionHeader from '@/components/ui/SectionHeader'
import PlatformBadge from '@/components/ui/PlatformBadge'
import ContentStatusDot from '@/components/ui/ContentStatusDot'

/**
 * RecentContentList
 * ─────────────────
 * Stacked list of the 5 most recently published pieces.
 *
 * Props:
 *   data {Array<{ id, title, platform, publishedAt, views, status }>}
 */
export default function RecentContentList({ data = [] }) {
  return (
    <div className="card">
      <SectionHeader
        title="Recent Content"
        subtitle="Latest published posts"
        action={
          <Link
            to="/tiktok/content"
            className="flex items-center gap-1 text-xs font-medium text-brand-600 hover:text-brand-700 transition-colors"
          >
            View all
            <ArrowRight size={12} />
          </Link>
        }
      />

      <ul className="space-y-1">
        {data.map((item, i) => (
          <li
            key={item.id}
            className="flex items-start gap-3 p-3 rounded-xl hover:bg-surface-hover transition-colors group"
          >
            {/* Index number */}
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-100 text-slate-400 text-xs font-semibold shrink-0 mt-0.5">
              {i + 1}
            </span>

            {/* Content info */}
            <div className="flex-1 min-w-0">
              <p className="text-xs font-medium text-slate-800 leading-snug line-clamp-2 group-hover:text-brand-600 transition-colors">
                {item.title}
              </p>
              <div className="flex items-center gap-3 mt-1.5 flex-wrap">
                <PlatformBadge platform={item.platform} size="sm" />
                <ContentStatusDot status={item.status} />
                <span className="text-xs text-slate-400">
                  {formatDateShort(item.publishedAt)}
                </span>
              </div>
            </div>

            {/* Views */}
            <div className="flex items-center gap-1 text-xs text-slate-400 shrink-0 mt-0.5">
              <Eye size={11} className="shrink-0" />
              <span className="tabular-nums">{formatCompact(item.views)}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
