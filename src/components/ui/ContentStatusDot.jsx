import { cn } from '@/utils/classNames'

/**
 * ContentStatusDot
 * ────────────────
 * Small coloured dot + label for content publish status.
 *
 * Props:
 *   status {'published'|'draft'|'scheduled'}
 */
const STATUS_MAP = {
  published: { dot: 'bg-emerald-400', label: 'Published' },
  draft:     { dot: 'bg-slate-300',   label: 'Draft'     },
  scheduled: { dot: 'bg-blue-400',    label: 'Scheduled' },
}

export default function ContentStatusDot({ status = 'published' }) {
  const { dot, label } = STATUS_MAP[status] ?? STATUS_MAP.published

  return (
    <span className="inline-flex items-center gap-1.5">
      <span className={cn('w-1.5 h-1.5 rounded-full', dot)} />
      <span className="text-xs text-slate-400">{label}</span>
    </span>
  )
}
