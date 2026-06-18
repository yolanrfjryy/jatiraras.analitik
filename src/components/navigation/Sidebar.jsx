import { NavLink } from 'react-router-dom'
import { ChevronLeft, ChevronRight, Utensils } from 'lucide-react'
import { cn } from '@/utils/classNames'
import { NAV_ITEMS } from '@/config/navigation'
import { APP_NAME, APP_TAGLINE } from '@/config/app'

/**
 * Sidebar
 * ───────
 * Collapsible navigation rail for the dashboard.
 *
 * Features:
 *   - Brand logo area with restaurant name + tagline
 *   - Section dividers with platform labels
 *   - "Coming Soon" badge on locked nav items (non-interactive)
 *   - Collapse to icon-only mode on desktop
 *   - Full-width overlay drawer on mobile
 *
 * Props:
 *   open     {boolean}    expanded vs collapsed
 *   onToggle {() => void} toggle callback
 */
export default function Sidebar({ open, onToggle }) {
  return (
    <aside
      className={cn(
        // Base
        'relative z-30 flex flex-col bg-white border-r border-surface-border',
        'transition-all duration-300 ease-in-out shrink-0',
        // Width
        open ? 'w-sidebar' : 'w-sidebar-collapsed',
        // On mobile: fixed overlay; on md+: inline
        open ? 'fixed md:relative h-full' : 'relative'
      )}
    >
      {/* ── Brand ─────────────────────────────────────────────────────── */}
      <div className={cn(
        'flex items-center gap-3 h-16 border-b border-surface-border shrink-0',
        open ? 'px-5' : 'px-0 justify-center'
      )}>
        {/* Icon mark — always visible */}
        <span className={cn(
          'flex items-center justify-center rounded-xl bg-brand-500 text-white shrink-0',
          'transition-all duration-300',
          open ? 'w-8 h-8' : 'w-9 h-9'
        )}>
          <Utensils size={open ? 16 : 18} />
        </span>

        {/* Text — only in expanded state */}
        {open && (
          <div className="min-w-0">
            <p className="text-sm font-bold text-slate-900 truncate leading-tight">
              {APP_NAME}
            </p>
            <p className="text-[10px] text-slate-400 truncate leading-tight mt-0.5">
              {APP_TAGLINE}
            </p>
          </div>
        )}
      </div>

      {/* ── Navigation ────────────────────────────────────────────────── */}
      <nav
        className="flex-1 overflow-y-auto overflow-x-hidden py-3"
        aria-label="Main navigation"
      >
        {NAV_ITEMS.map((item) => {
          // ── Section divider / platform header ──────────────────────
          if (item.divider) {
            return (
              <div key={item.id} className={cn('mt-2 mb-1', open ? 'px-3' : 'px-2')}>
                {open ? (
                  <div className="flex items-center gap-2 pt-2">
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-400 truncate">
                      {item.label}
                    </span>
                    {item.comingSoon && (
                      <span className="text-[9px] font-semibold uppercase tracking-wide text-slate-300 bg-slate-100 px-1.5 py-0.5 rounded-full shrink-0">
                        Soon
                      </span>
                    )}
                  </div>
                ) : (
                  // Collapsed: just a thin divider line
                  <div className="border-t border-surface-border mt-1" />
                )}
              </div>
            )
          }

          const Icon = item.icon

          // ── Coming Soon item ────────────────────────────────────────
          if (item.comingSoon) {
            return (
              <div key={item.id} className="px-2 mb-0.5">
                <span
                  className={cn(
                    'flex items-center gap-3 px-3 py-2.5 rounded-lg',
                    'text-sm font-medium select-none opacity-45',
                    'cursor-not-allowed'
                  )}
                  title={!open ? `${item.label} — Coming Soon` : undefined}
                  aria-disabled="true"
                >
                  <Icon
                    size={18}
                    className="shrink-0"
                    style={{ color: item.platformColor ?? 'currentColor' }}
                  />
                  {open && (
                    <span className="flex items-center gap-2 flex-1 min-w-0">
                      <span className="truncate text-slate-500">{item.label}</span>
                    </span>
                  )}
                </span>
              </div>
            )
          }

          // ── Regular nav link ────────────────────────────────────────
          return (
            <div key={item.id} className="px-2 mb-0.5">
              <NavLink
                to={item.to}
                end
                className={({ isActive }) =>
                  cn(
                    'nav-link',
                    isActive && 'nav-link-active'
                  )
                }
                title={!open ? item.label : undefined}
              >
                <Icon
                  size={18}
                  className="shrink-0"
                  style={item.platformColor ? { color: item.platformColor } : undefined}
                />
                {open && <span className="truncate">{item.label}</span>}
              </NavLink>
            </div>
          )
        })}
      </nav>

      {/* ── Footer area ───────────────────────────────────────────────── */}
      {open && (
        <div className="px-5 py-4 border-t border-surface-border shrink-0">
          <p className="text-[10px] text-slate-300 truncate">
            © {new Date().getFullYear()} Jatiraras Sawarga
          </p>
        </div>
      )}

      {/* ── Collapse toggle ───────────────────────────────────────────── */}
      <button
        onClick={onToggle}
        aria-label={open ? 'Collapse sidebar' : 'Expand sidebar'}
        className={cn(
          'absolute -right-3 top-[4.5rem] z-40',
          'flex items-center justify-center w-6 h-6 rounded-full',
          'bg-white border border-surface-border shadow-card',
          'text-slate-400 hover:text-slate-700 transition-colors'
        )}
      >
        {open ? <ChevronLeft size={13} /> : <ChevronRight size={13} />}
      </button>
    </aside>
  )
}
