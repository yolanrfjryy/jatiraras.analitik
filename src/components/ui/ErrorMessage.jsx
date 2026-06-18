import { AlertTriangle } from 'lucide-react'

/**
 * ErrorMessage
 * ────────────
 * Displayed when a data fetch fails.
 *
 * Props:
 *   message  {string}
 *   onRetry  {() => void}  optional retry callback
 */
export default function ErrorMessage({ message, onRetry }) {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-center px-4">
      <AlertTriangle size={24} className="text-amber-400 mb-3" />
      <p className="text-sm font-semibold text-slate-700 mb-1">Failed to load data</p>
      <p className="text-xs text-slate-400 max-w-xs">{message}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="mt-4 text-xs font-semibold text-brand-600 hover:underline"
        >
          Try again
        </button>
      )}
    </div>
  )
}
