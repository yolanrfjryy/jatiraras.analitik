/**
 * useTikTokOverview.js
 * ────────────────────
 * Fetches the TikTok data subset needed by the main Overview page.
 * Returns account metrics, growth series, and top 5 videos.
 *
 * @param {{ range?: string }} [params]
 * @returns {{
 *   data:      import('@/models/tiktok').TikTokOverviewPageData | null,
 *   isLoading: boolean,
 *   error:     string | null,
 *   refetch:   () => void,
 * }}
 */

import { useFetch } from './useFetch'
import { getOverviewPageData } from '@/data/repositories/tiktokRepository'

export function useTikTokOverview(params = {}) {
  return useFetch(
    () => getOverviewPageData(params),
    [params.range]
  )
}
