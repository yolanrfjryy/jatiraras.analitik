import { RefreshCw } from 'lucide-react'
import { cn } from '@/utils/classNames'
import { useSyncStore } from '@/store/syncStore'

/**
 * SyncButton
 * ──────────
 * "Sync TikTok Data" button.
 * Reads sync state from the global SyncStore — no props needed.
 *
 * Visual states:
 *   idle     → orange pill button with refresh icon
 *   syncing  → spinner + "Syncing…" label, button disabled
 *   error    → brief red tint on the label (clears on next sync)
 *
 * Props:
 *   onSync  {() => Promise<void>}  the async fetch to run when clicked
 *   size    {'sm'|'md'}            default 'md'
 */
export default function SyncButton({ onSync, size = 'md' }) {
  const { isSyncing, syncError, triggerSync } = useSyncStore()

  function handleClick() {
    if (onSync) triggerSync(onSync)
  }

  const isSm = size === 'sm'

  return (
    <button
      onClick={handleClick}
      disabled={isSyncing}
      aria-label="Sync TikTok data"
      className={cn(
        // Base shape
        'inline-flex items-center gap-1.5 font-medium rounded-lg border transition-all',
        // Size
        isSm
          ? 'text-xs px-2.5 py-1.5'
          : 'text-xs px-3 py-1.5',
        // State colours
        isSyncing
          ? 'bg-slate-50 border-surface-border text-slate-400 cursor-not-allowed'
          : syncError
            ? 'bg-red-50 border-red-200 text-red-600 hover:bg-red-100'
            : 'bg-brand-500 border-brand-500 text-white hover:bg-brand-600 hover:border-brand-600 shadow-sm'
      )}
    >
      <RefreshCw
        size={isSm ? 11 : 12}
        className={cn('shrink-0', isSyncing && 'animate-spin')}
      />
      {isSyncing ? 'Syncing…' : syncError ? 'Retry Sync' : 'Sync TikTok Data'}
    </button>
  )
}
