import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { formatCompact, formatPercent, formatDateShort } from '@/utils/formatters'
import { cn } from '@/utils/classNames'
import SectionHeader from '@/components/ui/SectionHeader'
import RankBadge from '@/components/ui/RankBadge'
import PlatformBadge from '@/components/ui/PlatformBadge'
import {
  TOP_CONTENT_COLUMNS,
  ENGAGEMENT_RATE_THRESHOLDS,
} from '@/data/fixtures/tiktok'

/**
 * Resolves the engagement rate badge className from the threshold config.
 * @param {number} rate
 * @returns {string}
 */
function getEngagementRateClass(rate) {
  const match = ENGAGEMENT_RATE_THRESHOLDS.find((t) => rate >= t.min)
  return match?.className ?? 'text-slate-500 bg-slate-100'
}

/**
 * TopContentTable
 * ───────────────
 * Compact table of the top-performing content pieces on the Overview page.
 * Column headers and engagement rate thresholds come from uiConfig.js.
 *
 * Props:
 *   data {Array<{
 *     id, rank, title, platform,
 *     publishedAt, views, likes, comments, engagementRate
 *   }>}
 */
export default function TopContentTable({ data = [] }) {
  return (
    <div className="card">
      <SectionHeader
        title="Top Performing Content"
        subtitle="Ranked by engagement rate"
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

      <div className="overflow-x-auto -mx-5 px-5">
        <table className="w-full text-sm min-w-[540px]">
          <thead>
            <tr className="border-b border-surface-border">
              {TOP_CONTENT_COLUMNS.map((h, i) => (
                <th
                  key={h}
                  className={cn(
                    'pb-2.5 text-xs font-semibold uppercase tracking-wider text-slate-400',
                    i === 0 ? 'text-center w-10 pr-3' :
                    i === 1 ? 'text-left' :
                    'text-right'
                  )}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {data.map((row) => (
              <tr
                key={row.id}
                className="border-b border-surface-border last:border-0 hover:bg-surface-hover transition-colors group"
              >
                {/* Rank */}
                <td className="py-3 pr-3 text-center">
                  <RankBadge rank={row.rank} />
                </td>

                {/* Title + platform */}
                <td className="py-3 pr-4 max-w-[220px]">
                  <p className="text-slate-800 font-medium text-xs leading-snug truncate group-hover:text-brand-600 transition-colors">
                    {row.title}
                  </p>
                  <div className="mt-1">
                    <PlatformBadge platform={row.platform} size="sm" />
                  </div>
                </td>

                {/* Published */}
                <td className="py-3 pr-4 text-right text-xs text-slate-400 whitespace-nowrap">
                  {formatDateShort(row.publishedAt)}
                </td>

                {/* Views */}
                <td className="py-3 pr-4 text-right text-xs font-medium text-slate-700 tabular-nums whitespace-nowrap">
                  {formatCompact(row.views)}
                </td>

                {/* Likes */}
                <td className="py-3 pr-4 text-right text-xs text-slate-500 tabular-nums whitespace-nowrap">
                  {formatCompact(row.likes)}
                </td>

                {/* Engagement rate */}
                <td className="py-3 text-right">
                  <span className={cn(
                    'text-xs font-semibold tabular-nums px-2 py-0.5 rounded-full',
                    getEngagementRateClass(row.engagementRate)
                  )}>
                    {formatPercent(row.engagementRate)}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
