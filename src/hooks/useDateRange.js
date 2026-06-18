/**
 * useDateRange.js
 * ───────────────
 * Manages the active date range preset across a page or section.
 * Returns the selected range string and a setter.
 *
 * @param {string} [initial='28d']
 * @returns {{ range: string, setRange: (r: string) => void }}
 */

import { useState } from 'react'
import { DEFAULT_DATE_RANGE } from '@/config/dateRanges'

export function useDateRange(initial = DEFAULT_DATE_RANGE) {
  const [range, setRange] = useState(initial)
  return { range, setRange }
}
