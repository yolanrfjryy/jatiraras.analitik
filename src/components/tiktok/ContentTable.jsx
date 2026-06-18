import { useState, useMemo } from 'react'
import { Search, X, Eye, Heart, MessageCircle, Share2 } from 'lucide-react'
import { cn } from '@/utils/classNames'
import { formatCompact, formatDateShort } from '@/utils/formatters'
import SectionHeader from '@/components/ui/SectionHeader'
import {
  CONTENT_SORT_OPTIONS,
  CONTENT_SORT_DEFAULT,
  CONTENT_TABLE_COLUMNS,
  CONTENT_EMPTY_MESSAGE,
  CONTENT_SEARCH_PLACEHOLDER,
} from '@/data/fixtures/tiktok'

/**
 * Column icon map — keyed by column key, returns a lucide icon element.
 * Columns without an icon return null.
 */
const COLUMN_ICONS = {
  views:    <Eye            size={11} />,
  likes:    <Heart          size={11} />,
  comments: <MessageCircle  size={11} />,
  shares:   <Share2         size={11} />,
}

/**
 * ContentTable
 * ────────────
 * TikTok content performance table.
 * All labels, sort options and column definitions come from uiConfig.js.
 *
 * Props:
 *   data {Array<{
 *     id, thumbnail, caption, uploadDate,
 *     views, likes, comments, shares
 *   }>}
 */
export default function ContentTable({ data = [] }) {
  const [search, setSearch] = useState('')
  const [sort,   setSort]   = useState(CONTENT_SORT_DEFAULT)

  // ── Filter ───────────────────────────────────────────────────────────────
  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase()
    return q
      ? data.filter((row) => row.caption.toLowerCase().includes(q))
      : data
  }, [data, search])

  // ── Sort ─────────────────────────────────────────────────────────────────
  const sorted = useMemo(() => {
    const copy = [...filtered]
    switch (sort) {
      case 'most_viewed': return copy.sort((a, b) => b.views - a.views)
      case 'most_liked':  return copy.sort((a, b) => b.likes - a.likes)
      case 'latest':
      default:            return copy.sort((a, b) => new Date(b.uploadDate) - new Date(a.uploadDate))
    }
  }, [filtered, sort])

  return (
    <div className="card">
      <SectionHeader
        title="Content Performance"
        subtitle={`${sorted.length} video${sorted.length !== 1 ? 's' : ''} found`}
        action={
          <div className="flex items-center gap-2 flex-wrap justify-end">
            {/* Search */}
            <div className="relative flex items-center">
              <Search size={13} className="absolute left-3 text-slate-400 pointer-events-none" />
              <input
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder={CONTENT_SEARCH_PLACEHOLDER}
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

            {/* Sort dropdown */}
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="text-xs border border-surface-border rounded-lg px-2.5 py-1.5
                         bg-white text-slate-600 focus:outline-none focus:ring-2
                         focus:ring-brand-400 transition cursor-pointer"
              aria-label="Sort videos by"
            >
              {CONTENT_SORT_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>
        }
      />

      {/* ── Table ── */}
      <div className="overflow-x-auto -mx-5 px-5">
        <table className="w-full text-sm min-w-[640px]">
          {/* Head — driven by CONTENT_TABLE_COLUMNS */}
          <thead>
            <tr className="border-b border-surface-border">
              {CONTENT_TABLE_COLUMNS.map((col) => (
                <th
                  key={col.key}
                  className={cn(
                    'pb-2.5 text-xs font-semibold uppercase tracking-wider text-slate-400',
                    col.align === 'right'  && 'text-right pl-4',
                    col.align === 'left'   && 'text-left',
                    col.align === 'center' && 'text-center',
                    col.key === 'thumbnail' && 'w-12 pr-3'
                  )}
                >
                  {COLUMN_ICONS[col.key] ? (
                    <span className="inline-flex items-center gap-1 justify-end">
                      {COLUMN_ICONS[col.key]}
                      {col.label}
                    </span>
                  ) : col.label}
                </th>
              ))}
            </tr>
          </thead>

          {/* Body */}
          <tbody>
            {sorted.length === 0 ? (
              <tr>
                <td
                  colSpan={CONTENT_TABLE_COLUMNS.length}
                  className="py-12 text-center text-xs text-slate-400"
                >
                  {CONTENT_EMPTY_MESSAGE}
                </td>
              </tr>
            ) : (
              sorted.map((row) => (
                <tr
                  key={row.id}
                  className="border-b border-surface-border last:border-0 hover:bg-surface-hover transition-colors group"
                >
                  {/* Thumbnail */}
                  <td className="py-3 pr-3">
                    <div
                      className={cn(
                        'w-10 h-[56px] rounded-lg shrink-0 flex items-center justify-center',
                        row.thumbnail ?? 'bg-slate-100'
                      )}
                      aria-hidden="true"
                    >
                      <span className="text-white/60 text-[8px] font-bold select-none">▶</span>
                    </div>
                  </td>

                  {/* Caption */}
                  <td className="py-3 pr-4 max-w-[240px]">
                    <p className="text-xs font-medium text-slate-800 line-clamp-2 leading-snug group-hover:text-brand-600 transition-colors">
                      {row.caption}
                    </p>
                  </td>

                  {/* Upload date */}
                  <td className="py-3 pl-4 text-right text-xs text-slate-400 whitespace-nowrap">
                    {formatDateShort(row.uploadDate)}
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
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Row count footer */}
      <p className="text-[10px] text-slate-300 text-right mt-3">
        Showing {sorted.length} of {data.length} videos
      </p>
    </div>
  )
}
