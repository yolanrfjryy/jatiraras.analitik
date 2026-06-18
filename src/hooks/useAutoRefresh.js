/**
 * useAutoRefresh.js
 * ─────────────────
 * Calls a provided async function on mount and on a recurring interval.
 * Used to keep the public dashboard up-to-date without page reloads.
 *
 * @param {() => Promise<void>} fetchFn   - the data-fetch function to call
 * @param {number}              interval  - ms between refreshes
 *
 * Usage:
 *   useAutoRefresh(refetch, REFRESH_INTERVAL_MS)
 */

import { useEffect } from 'react'

export function useAutoRefresh(fetchFn, interval) {
  useEffect(() => {
    fetchFn()
    const id = setInterval(fetchFn, interval)
    return () => clearInterval(id)
  }, [fetchFn, interval]) // eslint-disable-line react-hooks/exhaustive-deps
}
