import { Outlet, useLocation } from 'react-router-dom'
import Sidebar from '@/components/navigation/Sidebar'
import TopBar  from '@/components/navigation/TopBar'
import { useSidebar }  from '@/hooks/useSidebar'
import { SyncProvider } from '@/store/syncStore'
import { NAV_ITEMS }   from '@/config/navigation'

/**
 * DashboardLayout
 * ───────────────
 * Root shell shared by every page.
 * Wraps the entire app in <SyncProvider> so any component can access
 * sync state (SyncButton, TopBar last-updated label) without prop drilling.
 */
export default function DashboardLayout() {
  const { open, toggle } = useSidebar()
  const location = useLocation()

  const activeItem   = NAV_ITEMS.find((item) => !item.divider && item.to === location.pathname)
  const pageTitle    = activeItem?.label ?? 'Dashboard'
  const pageSubtitle = 'Jatiraras Sawarga · Social Media Analytics'

  return (
    <SyncProvider>
      <div className="flex h-screen overflow-hidden bg-surface-muted">

        {/* ── Sidebar ── */}
        <Sidebar open={open} onToggle={toggle} />

        {/* ── Mobile overlay ── */}
        {open && (
          <div
            className="fixed inset-0 z-20 bg-black/40 backdrop-blur-[1px] md:hidden"
            onClick={toggle}
            aria-hidden="true"
          />
        )}

        {/* ── Main column ── */}
        <div className="flex flex-col flex-1 min-w-0 overflow-hidden">

          <TopBar
            onMenuToggle={toggle}
            pageTitle={pageTitle}
            pageSubtitle={pageSubtitle}
          />

          <main className="flex-1 overflow-y-auto">
            <div className="p-4 md:p-6 min-h-full flex flex-col">
              <Outlet />
            </div>
          </main>

        </div>
      </div>
    </SyncProvider>
  )
}
