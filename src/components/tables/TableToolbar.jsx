import SearchInput from '@/components/filters/SearchInput'

/**
 * TableToolbar
 * ────────────
 * Consistent header row above every DataTable.
 * Contains search input + optional right-side action slot.
 *
 * Props:
 *   search       {string}
 *   onSearch     {(v: string) => void}
 *   placeholder  {string}
 *   actions      {ReactNode}  e.g. export button, extra filters
 */
export default function TableToolbar({ search, onSearch, placeholder, actions }) {
  return (
    <div className="flex items-center justify-between gap-4 mb-4 flex-wrap">
      <SearchInput
        value={search}
        onChange={onSearch}
        placeholder={placeholder}
      />
      {actions && (
        <div className="flex items-center gap-2">{actions}</div>
      )}
    </div>
  )
}
