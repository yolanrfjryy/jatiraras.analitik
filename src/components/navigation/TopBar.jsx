import { Menu, Calendar, Clock, AlertCircle } from 'lucide-react'
import { useSyncStore } from '@/store/syncStore'

/**
 * TopBar
 * ──────
 * Sticky top navigation bar rendered on every page.
 *
 * Right side now reads lastSyncedAt + isSyncing + syncError directly
 * from the global SyncStore — no prop drilling required.
 *
 * Props:
 *   onMenuToggle  {() => void}   opens / closes sidebar
 *   pageTitle     {string}       current page name
 *   pageSubtitle  {string}       optional subtitle
 */
export default function TopBar({ onMenuToggle, pageTitle = 'Dashboard', pageSubtitle }) {
  const { isSyncing, lastSyncedAt, syncError } = useSyncStore()

  // ── Current date ─────────────────────────────────────────────────────────
  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'short',
    month:   'short',
    day:     'numeric',
    year:    'numeric',
  })

  // ── Last-synced time label ────────────────────────────────────────────────
  const syncedLabel = lastSyncedAt
    ? new Date(lastSyncedAt).toLocaleTimeString('en-US', {
        hour:   '2-digit',
        minute: '2-digit',
      })
    : null

  return (
    <header className="flex items-center h-16 px-4 md:px-6 bg-white border-b border-surface-border shrink-0 gap-4">

      {/* ── Left: hamburger + page identity ── */}
      <div className="flex items-center gap-3 min-w-0">
        <button
          onClick={onMenuToggle}
          aria-label="Toggle sidebar"
          className="flex items-center justify-center w-8 h-8 rounded-lg text-slate-500 hover:bg-surface-hover hover:text-slate-800 transition-colors shrink-0"
        >
          <Menu size={18} />
        </button>

        <span className="w-px h-5 bg-surface-border shrink-0" aria-hidden="true" />

        <div className="min-w-0">
          <h2 className="text-sm font-semibold text-slate-900 truncate leading-tight">
            {pageTitle}
          </h2>
          {pageSubtitle && (
            <p className="text-[11px] text-slate-400 truncate leading-tight mt-0.5">
              {pageSubtitle}
            </p>
          )}
        </div>
      </div>

      {/* ── Spacer ── */}
      <div className="flex-1" />

      {/* ── Right: date + sync status ── */}
      <div className="flex items-center gap-3 shrink-0">

        {/* Current date */}
        <div className="hidden sm:flex items-center gap-1.5 text-xs text-slate-400">
          <Calendar size={13} className="shrink-0" />
          <span className="whitespace-nowrap">{today}</span>
        </div>

        {/* Divider */}
        {(syncedLabel || isSyncing || syncError) && (
          <span className="hidden sm:block w-px h-4 bg-surface-border" aria-hidden="true" />
        )}

        {/* Sync error */}
        {syncError && !isSyncing && (
          <div className="hidden md:flex items-center gap-1.5 text-xs text-red-500">
            <AlertCircle size={12} className="shrink-0" />
            <span className="whitespace-nowrap">Sync failed</span>
          </div>
        )}

        {/* Last synced */}
        {syncedLabel && !syncError && (
          <div className="hidden md:flex items-center gap-1.5 text-xs text-slate-400">
            <Clock size={13} className="shrink-0" />
            <span className="whitespace-nowrap">
              {isSyncing ? 'Syncing…' : `Updated ${syncedLabel}`}
            </span>
          </div>
        )}

        {/* Syncing in progress (shown even before first sync) */}
        {isSyncing && !syncedLabel && (
          <div className="hidden md:flex items-center gap-1.5 text-xs text-brand-500">
            <Clock size={13} className="shrink-0 animate-pulse" />
            <span className="whitespace-nowrap">Syncing…</span>
          </div>
        )}
      </div>
    </header>
  )
}
