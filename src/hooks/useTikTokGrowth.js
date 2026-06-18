/**
 * useTikTokGrowth.js
 * ──────────────────
 * Fetches the daily growth time-series for the Growth page charts.
 *
 * @param {{ range?: string }} [params]
 * @returns {{
 *   data:      import('@/models/tiktok').TikTokGrowthData | null,
 *   isLoading: boolean,
 *   error:     string | null,
 *   refetch:   () => void,
 * }}
 */

import { useFetch } from './useFetch'
import { getGrowthData } from '@/data/repositories/tiktokRepository'

export function useTikTokGrowth(params = {}) {
  return useFetch(
    () => getGrowthData(params),
    [params.range]
  )
}
