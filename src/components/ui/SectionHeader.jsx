import { cn } from '@/utils/classNames'

/**
 * SectionHeader
 * ─────────────
 * Title + optional subtitle + optional right-side action slot
 * used inside cards and page sections.
 *
 * Props:
 *   title     {string}
 *   subtitle  {string}    optional
 *   action    {ReactNode} optional link/button on the right
 *   className {string}
 */
export default function SectionHeader({ title, subtitle, action, className }) {
  return (
    <div className={cn('flex items-start justify-between gap-4 mb-4', className)}>
      <div>
        <h2 className="text-sm font-semibold text-slate-800">{title}</h2>
        {subtitle && (
          <p className="text-xs text-slate-400 mt-0.5">{subtitle}</p>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  )
}
