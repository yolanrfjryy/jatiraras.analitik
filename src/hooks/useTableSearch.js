/**
 * useTableSearch.js
 * ─────────────────
 * Provides client-side search/filter state for table components.
 *
 * @param {Object[]} data            - full dataset
 * @param {string[]} searchableKeys  - object keys to search within
 * @returns {{ search, setSearch, filtered }}
 */

import { useState, useMemo } from 'react'

export function useTableSearch(data = [], searchableKeys = []) {
  const [search, setSearch] = useState('')

  const filtered = useMemo(() => {
    if (!search.trim()) return data
    const q = search.toLowerCase()
    return data.filter((row) =>
      searchableKeys.some((key) =>
        String(row[key] ?? '').toLowerCase().includes(q)
      )
    )
  }, [data, search, searchableKeys])

  return { search, setSearch, filtered }
}
