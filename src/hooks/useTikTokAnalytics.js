/**
 * useTikTokAnalytics.js
 * ─────────────────────
 * Page-level hook for the TikTok Analytics page.
 * Fetches account metrics, videos, insight, and prediction in one call.
 *
 * Uses the repository layer — no direct JSON imports in page components.
 *
 * @param {{ range?: string }} [params]
 * @returns {{
 *   data:      import('@/models/tiktok').TikTokAnalyticsPageData | null,
 *   isLoading: boolean,
 *   error:     string | null,
 *   refetch:   () => void,
 * }}
 *
 * Usage:
 *   const { data, isLoading, error, refetch } = useTikTokAnalytics({ range: '28d' })
 */

import { useFetch } from './useFetch'
import { getAnalyticsPageData } from '@/data/repositories/tiktokRepository'

export function useTikTokAnalytics(params = {}) {
  return useFetch(
    () => getAnalyticsPageData(params),
    [params.range]
  )
}
