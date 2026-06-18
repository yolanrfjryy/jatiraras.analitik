/**
 * LoadingSpinner
 * ──────────────
 * Centred spinner for async data states.
 *
 * Props:
 *   size  {'sm'|'md'|'lg'}  default 'md'
 */

const SIZE_MAP = {
  sm: 'w-4 h-4 border-2',
  md: 'w-7 h-7 border-2',
  lg: 'w-10 h-10 border-[3px]',
}

export default function LoadingSpinner({ size = 'md' }) {
  return (
    <div className="flex items-center justify-center w-full py-12" role="status" aria-label="Loading">
      <span
        className={`${SIZE_MAP[size]} rounded-full border-slate-200 border-t-brand-500 animate-spin`}
      />
    </div>
  )
}
