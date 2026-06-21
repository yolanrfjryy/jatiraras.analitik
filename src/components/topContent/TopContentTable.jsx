import { useState, useMemo } from 'react'
import { Search, X, Eye, Heart, MessageCircle, Share2 } from 'lucide-react'
import { cn } from '@/utils/classNames'
import { formatCompact, formatPercent, formatDateShort } from '@/utils/formatters'
import SectionHeader  from '@/components/ui/SectionHeader'
import PlatformBadge  from '@/components/ui/PlatformBadge'

/**
 * TopContentTable
 * ───────────────
 * Cross-platform content performance table.
 * Columns: Platform | Thumb | Title | Date | Views | Likes | Comments | Shares | Eng. Rate
 * Controls: Search by title | Sort (Most Viewed / Most Engaging / Latest)
 *
 * Props:
 *   data {Array<{
 *     id, platform, thumbnailBg, title, publishDate,
 *     views, likes, comments, shares, engagementRate
 *   }>}
 */

const SORT_OPTIONS = [
  { value: 'most_viewed',   label: 'Most Viewed'   },
  { value: 'most_engaging', label: 'Most Engaging' },
  { value: 'latest',        label: 'Latest'        },
]

const COLUMNS = [
  { key: 'platform',       label: 'Platform',   align: 'left'  },
  { key: 'thumbnail',      label: 'Thumb',      align: 'left'  },
  { key: 'title',          label: 'Content',    align: 'left'  },
  { key: 'publishDate',    label: 'Date',       align: 'right' },
  { key: 'views',          label: 'Views',      align: 'right', icon: <Eye           size={11} /> },
  { key: 'likes',          label: 'Likes',      align: 'right', icon: <Heart         size={11} /> },
  { key: 'comments',       label: 'Comments',   align: 'right', icon: <MessageCircle size={11} /> },
  { key: 'shares',         label: 'Shares',     align: 'right', icon: <Share2        size={11} /> },
  { key: 'engagementRate', label: 'Eng. Rate',  align: 'right' },
]

export default function TopContentTable({ data = [] }) {
  const [search, setSearch] = useState('')
  const [sort,   setSort]   = useState('most_viewed')

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase()
    return q ? data.filter((r) => r.title.toLowerCase().includes(q)) : data
  }, [data, search])

  const sorted = useMemo(() => {
    const copy = [...filtered]
    switch (sort) {
      case 'most_engaging': return copy.sort((a, b) => b.engagementRate - a.engagementRate)
      case 'latest':        return copy.sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate))
      case 'most_viewed':
      default:              return copy.sort((a, b) => b.views - a.views)
    }
  }, [filtered, sort])

  return (
    <div className="card">
      <SectionHeader
        title="Content Performance"
        subtitle={`${sorted.length} piece${sorted.length !== 1 ? 's' : ''} across all platforms`}
        action={
          <div className="flex items-center gap-2 flex-wrap justify-end">
            {/* Search */}
            <div className="relative flex items-center">
              <Search size={13} className="absolute left-3 text-slate-400 pointer-events-none" />
              <input
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search content…"
                className="pl-8 pr-7 py-1.5 text-xs rounded-lg border border-surface-border
                           bg-white text-slate-700 placeholder:text-slate-400
                           focus:outline-none focus:ring-2 focus:ring-brand-400 transition
                           w-44 sm:w-52"
              />
              {search && (
                <button
                  onClick={() => setSearch('')}
                  aria-label="Clear search"
                  className="absolute right-2.5 text-slate-400 hover:text-slate-600 transition-colors"
                >
                  <X size={11} />
                </button>
              )}
            </div>

            {/* Sort */}
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="text-xs border border-surface-border rounded-lg px-2.5 py-1.5
                         bg-white text-slate-600 focus:outline-none focus:ring-2
                         focus:ring-brand-400 transition cursor-pointer"
              aria-label="Sort content by"
            >
              {SORT_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>
        }
      />

      <div className="overflow-x-auto -mx-5 px-5">
        <table className="w-full text-sm min-w-[780px]">
          <thead>
            <tr className="border-b border-surface-border">
              {COLUMNS.map((col) => (
                <th
                  key={col.key}
                  className={cn(
                    'pb-2.5 text-xs font-semibold uppercase tracking-wider text-slate-400',
                    col.align === 'right' && 'text-right pl-4',
                    col.align === 'left'  && 'text-left',
                    col.key === 'thumbnail' && 'w-12 pr-3',
                    col.key === 'platform'  && 'w-28'
                  )}
                >
                  {col.icon ? (
                    <span className="inline-flex items-center gap-1 justify-end">
                      {col.icon}{col.label}
                    </span>
                  ) : col.label}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {sorted.length === 0 ? (
              <tr>
                <td colSpan={COLUMNS.length} className="py-12 text-center text-xs text-slate-400">
                  No content matches your search.
                </td>
              </tr>
            ) : (
              sorted.map((row) => (
                <tr
                  key={row.id}
                  className="border-b border-surface-border last:border-0 hover:bg-surface-hover transition-colors group"
                >
                  {/* Platform */}
                  <td className="py-3 pr-3">
                    <PlatformBadge platform={row.platform} size="sm" />
                  </td>

                  {/* Thumbnail */}
                  <td className="py-3 pr-3">
                    <div
                      className={cn(
                        'w-10 rounded-lg shrink-0 flex items-center justify-center',
                        row.platform === 'tiktok' ? 'h-[56px]' : 'h-10',
                        row.thumbnailBg ?? 'bg-slate-100'
                      )}
                      aria-hidden="true"
                    >
                      <span className="text-white/60 text-[8px] font-bold select-none">
                        {row.platform === 'tiktok' ? '▶' : '▪'}
                      </span>
                    </div>
                  </td>

                  {/* Title */}
                  <td className="py-3 pr-4 max-w-[220px]">
                    <p className="text-xs font-medium text-slate-800 line-clamp-2 leading-snug group-hover:text-brand-600 transition-colors">
                      {row.title}
                    </p>
                  </td>

                  {/* Publish date */}
                  <td className="py-3 pl-4 text-right text-xs text-slate-400 whitespace-nowrap">
                    {formatDateShort(row.publishDate)}
                  </td>

                  {/* Views */}
                  <td className="py-3 pl-4 text-right text-xs font-semibold text-slate-700 tabular-nums whitespace-nowrap">
                    {formatCompact(row.views)}
                  </td>

                  {/* Likes */}
                  <td className="py-3 pl-4 text-right text-xs text-slate-500 tabular-nums whitespace-nowrap">
                    {formatCompact(row.likes)}
                  </td>

                  {/* Comments */}
                  <td className="py-3 pl-4 text-right text-xs text-slate-500 tabular-nums whitespace-nowrap">
                    {formatCompact(row.comments)}
                  </td>

                  {/* Shares */}
                  <td className="py-3 pl-4 text-right text-xs text-slate-500 tabular-nums whitespace-nowrap">
                    {formatCompact(row.shares)}
                  </td>

                  {/* Engagement rate */}
                  <td className="py-3 pl-4 text-right">
                    <span className={cn(
                      'text-xs font-semibold tabular-nums px-2 py-0.5 rounded-full whitespace-nowrap',
                      row.engagementRate >= 9
                        ? 'text-emerald-700 bg-emerald-50'
                        : row.engagementRate >= 6
                          ? 'text-brand-700 bg-brand-50'
                          : 'text-slate-500 bg-slate-100'
                    )}>
                      {formatPercent(row.engagementRate)}
                    </span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <p className="text-[10px] text-slate-300 text-right mt-3">
        Showing {sorted.length} of {data.length} items
      </p>
    </div>
  )
}
