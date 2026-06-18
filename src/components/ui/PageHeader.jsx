import { cn } from '@/utils/classNames'

/**
 * PageHeader
 * ──────────
 * Reusable page-level title block used at the top of every analytics page.
 *
 * Props:
 *   title      {string}
 *   subtitle   {string}    optional
 *   accent     {string}    optional Tailwind bg class for the accent bar, default brand-500
 *   actions    {ReactNode} optional right slot
 *   className  {string}
 */
export default function PageHeader({ title, subtitle, accent, actions, className }) {
  return (
    <div className={cn('flex items-start justify-between gap-4 mb-6', className)}>
      <div className="flex items-start gap-3">
        {/* Accent bar */}
        <span
          className={cn(
            'w-1 rounded-full shrink-0 mt-1',
            accent ?? 'bg-brand-500',
            subtitle ? 'h-9' : 'h-6'
          )}
          aria-hidden="true"
        />
        <div>
          <h1 className="text-xl font-bold text-slate-900 leading-tight">{title}</h1>
          {subtitle && (
            <p className="text-sm text-slate-400 mt-0.5">{subtitle}</p>
          )}
        </div>
      </div>

      {actions && (
        <div className="shrink-0 flex items-center gap-2">{actions}</div>
      )}
    </div>
  )
}
