/**
 * DashboardHeader
 * ───────────────
 * Top hero section of the Overview page.
 * Shows brand name, dashboard subtitle, and current date.
 * Fully self-contained — no props required.
 */

export default function DashboardHeader() {
  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year:    'numeric',
    month:   'long',
    day:     'numeric',
  })

  return (
    <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 mb-8">
      {/* Brand + subtitle */}
      <div>
        <div className="flex items-center gap-2 mb-1">
          {/* Accent bar */}
          <span className="w-1 h-6 rounded-full bg-brand-500 shrink-0" aria-hidden="true" />
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">
            Jatiraras Sawarga
          </h1>
        </div>
        <p className="text-sm text-slate-400 pl-3">
          Social Media Analytics Dashboard
        </p>
      </div>

      {/* Current date */}
      <p className="text-xs font-medium text-slate-400 pl-3 sm:pl-0 sm:text-right">
        {today}
      </p>
    </div>
  )
}
