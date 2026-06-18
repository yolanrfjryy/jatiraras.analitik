/**
 * useTikTokAudience.js
 * ────────────────────
 * Fetches audience / demographic data for the Audience page.
 *
 * @param {{ range?: string }} [params]
 * @returns {{
 *   data:      import('@/models/tiktok').TikTokAudienceMetrics | null,
 *   isLoading: boolean,
 *   error:     string | null,
 *   refetch:   () => void,
 * }}
 */

import { useFetch } from './useFetch'
import { getAudienceMetrics } from '@/data/repositories/tiktokRepository'

export function useTikTokAudience(params = {}) {
  return useFetch(
    () => getAudienceMetrics(params),
    [params.range]
  )
}
