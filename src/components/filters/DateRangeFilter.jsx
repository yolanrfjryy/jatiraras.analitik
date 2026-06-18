import { useState } from 'react'
import { Calendar } from 'lucide-react'
import { cn } from '@/utils/classNames'
import { DATE_RANGE_PRESETS } from '@/config/dateRanges'

/**
 * DateRangeFilter
 * ───────────────
 * Dropdown preset picker for the global date range.
 * Reads preset list from config/dateRanges.js — add ranges there.
 *
 * Props:
 *   value    {string}               current range value e.g. '28d'
 *   onChange {(value: string) => void}
 */
export default function DateRangeFilter({ value, onChange }) {
  const [open, setOpen] = useState(false)

  const currentLabel =
    DATE_RANGE_PRESETS.find((p) => p.value === value)?.label ?? 'Select range'

  function handleSelect(preset) {
    setOpen(false)
    onChange?.(preset.value)
  }

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="flex items-center gap-2 text-sm font-medium text-slate-600
                   border border-surface-border rounded-lg px-3 py-1.5
                   hover:bg-surface-hover transition-colors"
      >
        <Calendar size={14} className="text-slate-400 shrink-0" />
        <span>{currentLabel}</span>
      </button>

      {open && (
        <>
          {/* Click-outside overlay */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          <ul
            role="listbox"
            className="absolute right-0 mt-1 z-50 bg-white border border-surface-border
                       rounded-lg shadow-card-md py-1 min-w-[160px]"
          >
            {DATE_RANGE_PRESETS.map((preset) => (
              <li key={preset.value}>
                <button
                  role="option"
                  aria-selected={value === preset.value}
                  onClick={() => handleSelect(preset)}
                  className={cn(
                    'w-full text-left px-4 py-2 text-sm transition-colors',
                    value === preset.value
                      ? 'text-brand-600 bg-brand-50 font-medium'
                      : 'text-slate-600 hover:bg-surface-hover'
                  )}
                >
                  {preset.label}
                </button>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  )
}
