import { cn } from '@/utils/classNames'

const VARIANT_MAP = {
  positive: 'badge-positive',
  negative: 'badge-negative',
  neutral:  'badge-neutral',
  info:     'inline-flex items-center gap-1 text-blue-600 bg-blue-50 text-xs font-medium px-2 py-0.5 rounded-full',
  warning:  'inline-flex items-center gap-1 text-amber-700 bg-amber-50 text-xs font-medium px-2 py-0.5 rounded-full',
}

/**
 * Badge
 * ─────
 * Generic status/label chip.
 *
 * Props:
 *   variant  {'positive'|'negative'|'neutral'|'info'|'warning'}
 *   children {ReactNode}
 */
export default function Badge({ variant = 'neutral', children }) {
  return (
    <span className={cn(VARIANT_MAP[variant] ?? VARIANT_MAP.neutral)}>
      {children}
    </span>
  )
}
