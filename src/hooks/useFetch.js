/**
 * useFetch.js
 * ───────────
 * Generic data-fetching hook that wraps any async service function.
 * Provides: data, isLoading, error, and a refetch callback.
 *
 * @template T
 * @param {() => Promise<T>}    fetchFn    - service function to call
 * @param {any[]}               [deps=[]]  - re-fetch when these values change
 * @returns {{ data: T|null, isLoading: boolean, error: string|null, refetch: () => void }}
 *
 * Usage:
 *   const { data, isLoading, error, refetch } = useFetch(
 *     () => fetchAccountMetrics({ range }),
 *     [range]
 *   )
 */

import { useState, useEffect, useCallback } from 'react'

export function useFetch(fetchFn, deps = []) {
  const [data,      setData]      = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error,     setError]     = useState(null)

  const execute = useCallback(async () => {
    setIsLoading(true)
    setError(null)
    try {
      const result = await fetchFn()
      setData(result)
    } catch (err) {
      setError(err?.message ?? 'Failed to load data')
    } finally {
      setIsLoading(false)
    }
  }, deps) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    execute()
  }, [execute])

  return { data, isLoading, error, refetch: execute }
}
