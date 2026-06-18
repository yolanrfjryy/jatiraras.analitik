import { Search, X } from 'lucide-react'

/**
 * SearchInput
 * ───────────
 * Controlled search input for table toolbars.
 *
 * Props:
 *   value        {string}
 *   onChange     {(value: string) => void}
 *   placeholder  {string}
 */
export default function SearchInput({ value, onChange, placeholder = 'Search…' }) {
  return (
    <div className="relative flex items-center">
      <Search
        size={14}
        className="absolute left-3 text-slate-400 pointer-events-none"
      />
      <input
        type="search"
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        placeholder={placeholder}
        className="pl-8 pr-7 py-1.5 text-sm rounded-lg border border-surface-border
                   bg-white text-slate-700 placeholder:text-slate-400
                   focus:outline-none focus:ring-2 focus:ring-brand-500 transition"
      />
      {value && (
        <button
          onClick={() => onChange?.('')}
          aria-label="Clear search"
          className="absolute right-2.5 text-slate-400 hover:text-slate-600 transition-colors"
        >
          <X size={12} />
        </button>
      )}
    </div>
  )
}
