/**
 * syncStore.js
 * ────────────
 * Lightweight global sync state using React Context + useReducer.
 * No external state library needed.
 *
 * Provides:
 *   isSyncing     {boolean}      true while a sync is in progress
 *   lastSyncedAt  {string|null}  ISO 8601 datetime of last successful sync
 *   syncError     {string|null}  error message if last sync failed
 *
 *   triggerSync(fetchFn)  — call with any async fetch function to run a sync
 *
 * Usage:
 *   // Wrap the app (done in DashboardLayout)
 *   <SyncProvider><App /></SyncProvider>
 *
 *   // In any component
 *   const { isSyncing, lastSyncedAt, triggerSync } = useSyncStore()
 */

import { createContext, useContext, useReducer, useCallback } from 'react'

// ── State shape ───────────────────────────────────────────────────────────────

const INITIAL_STATE = {
  isSyncing:    false,
  lastSyncedAt: null,   // ISO 8601 string, set after first successful sync
  syncError:    null,
}

// ── Reducer ───────────────────────────────────────────────────────────────────

function syncReducer(state, action) {
  switch (action.type) {
    case 'SYNC_START':
      return { ...state, isSyncing: true, syncError: null }

    case 'SYNC_SUCCESS':
      return {
        ...state,
        isSyncing:    false,
        lastSyncedAt: action.payload.syncedAt,
        syncError:    null,
      }

    case 'SYNC_ERROR':
      return {
        ...state,
        isSyncing: false,
        syncError: action.payload.message,
      }

    default:
      return state
  }
}

// ── Context ───────────────────────────────────────────────────────────────────

const SyncContext = createContext(null)

// ── Provider ──────────────────────────────────────────────────────────────────

export function SyncProvider({ children }) {
  const [state, dispatch] = useReducer(syncReducer, INITIAL_STATE)

  /**
   * triggerSync
   * ───────────
   * Runs the provided async fetch function, updates sync state accordingly.
   * Call this from the SyncButton or any auto-refresh hook.
   *
   * @param {() => Promise<void>} fetchFn  — async function that re-fetches data
   */
  const triggerSync = useCallback(async (fetchFn) => {
    if (state.isSyncing) return   // prevent concurrent syncs

    dispatch({ type: 'SYNC_START' })

    try {
      await fetchFn()
      dispatch({
        type:    'SYNC_SUCCESS',
        payload: { syncedAt: new Date().toISOString() },
      })
    } catch (err) {
      dispatch({
        type:    'SYNC_ERROR',
        payload: { message: err?.message ?? 'Sync failed' },
      })
    }
  }, [state.isSyncing])

  return (
    <SyncContext.Provider value={{ ...state, triggerSync }}>
      {children}
    </SyncContext.Provider>
  )
}

// ── Hook ──────────────────────────────────────────────────────────────────────

/**
 * @returns {{
 *   isSyncing:    boolean,
 *   lastSyncedAt: string | null,
 *   syncError:    string | null,
 *   triggerSync:  (fetchFn: () => Promise<void>) => void,
 * }}
 */
export function useSyncStore() {
  const ctx = useContext(SyncContext)
  if (!ctx) throw new Error('useSyncStore must be used inside <SyncProvider>')
  return ctx
}
