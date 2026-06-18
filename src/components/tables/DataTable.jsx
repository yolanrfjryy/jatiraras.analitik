import { useState } from 'react'
import { ChevronUp, ChevronDown, ChevronsUpDown } from 'lucide-react'
import { cn } from '@/utils/classNames'
import LoadingSpinner from '@/components/ui/LoadingSpinner'
import EmptyState from '@/components/ui/EmptyState'

/**
 * DataTable
 * ─────────
 * Sortable, accessible data table.
 *
 * Props:
 *   columns      {Array<{
 *                  key:       string,
 *                  header:    string,
 *                  sortable?: boolean,
 *                  render?:   (value, row) => ReactNode,
 *                  align?:    'left'|'right'|'center',
 *                  className?: string,
 *                }>}
 *   data         {Object[]}
 *   isLoading    {boolean}
 *   keyExtractor {(row) => string}   unique row key
 *   emptyTitle       {string}
 *   emptyDescription {string}
 */
export default function DataTable({
  columns = [],
  data = [],
  isLoading = false,
  keyExtractor,
  emptyTitle,
  emptyDescription,
}) {
  const [sortKey, setSortKey] = useState(null)
  const [sortDir, setSortDir] = useState('asc')

  function handleSort(key) {
    if (sortKey === key) {
      setSortDir((d) => (d === 'asc' ? 'desc' : 'asc'))
    } else {
      setSortKey(key)
      setSortDir('asc')
    }
  }

  const sorted = sortKey
    ? [...data].sort((a, b) => {
        const av = a[sortKey]
        const bv = b[sortKey]
        if (av < bv) return sortDir === 'asc' ? -1 : 1
        if (av > bv) return sortDir === 'asc' ? 1  : -1
        return 0
      })
    : data

  function SortIcon({ col }) {
    if (!col.sortable) return null
    if (sortKey !== col.key) return <ChevronsUpDown size={11} className="text-slate-300" />
    return sortDir === 'asc'
      ? <ChevronUp   size={11} className="text-brand-500" />
      : <ChevronDown size={11} className="text-brand-500" />
  }

  const alignClass = { left: 'text-left', right: 'text-right', center: 'text-center' }

  return (
    <div className="overflow-x-auto -mx-5 px-5">
      <table className="w-full text-sm border-collapse min-w-[480px]">
        <thead>
          <tr className="border-b border-surface-border">
            {columns.map((col) => (
              <th
                key={col.key}
                scope="col"
                onClick={() => col.sortable && handleSort(col.key)}
                className={cn(
                  'py-3 px-4 text-xs font-semibold uppercase tracking-wider text-slate-400',
                  alignClass[col.align ?? 'left'],
                  col.sortable && 'cursor-pointer select-none hover:text-slate-600',
                  col.className
                )}
              >
                <span className="inline-flex items-center gap-1">
                  {col.header}
                  <SortIcon col={col} />
                </span>
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {isLoading ? (
            <tr>
              <td colSpan={columns.length}>
                <LoadingSpinner />
              </td>
            </tr>
          ) : sorted.length === 0 ? (
            <tr>
              <td colSpan={columns.length}>
                <EmptyState title={emptyTitle} description={emptyDescription} />
              </td>
            </tr>
          ) : (
            sorted.map((row, i) => (
              <tr
                key={keyExtractor ? keyExtractor(row) : i}
                className="border-b border-surface-border hover:bg-surface-hover transition-colors"
              >
                {columns.map((col) => (
                  <td
                    key={col.key}
                    className={cn(
                      'py-3 px-4 text-slate-700',
                      alignClass[col.align ?? 'left'],
                      col.className
                    )}
                  >
                    {col.render ? col.render(row[col.key], row) : (row[col.key] ?? '—')}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  )
}
