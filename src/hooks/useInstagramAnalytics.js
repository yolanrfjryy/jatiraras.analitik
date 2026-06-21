/**
 * useInstagramAnalytics.js
 * ────────────────────────
 * Page-level hook for the Instagram Analytics page.
 * Returns all data the page needs from the centralized instagramData.js file.
 *
 * Currently resolves synchronously from mock data wrapped in a Promise
 * so it behaves identically to useTikTokAnalytics — ready for a live
 * data source without any page changes.
 *
 * @returns {{
 *   data:      { accountMetrics, posts, insight, prediction, fetchedAt } | null,
 *   isLoading: boolean,
 *   error:     string | null,
 *   refetch:   () => void,
 * }}
 */

import { useFetch } from './useFetch'
import {
  igAccountData,
  igContentData,
  igInsightData,
  igPredictionData,
} from '@/data/instagramData'

// ── Mock resolver — simulates async behaviour ─────────────────────────────────
const MOCK_DELAY_MS = 350

function fetchInstagramPageData() {
  return new Promise((resolve) =>
    setTimeout(() => resolve({
      accountMetrics: igAccountData,
      posts:          igContentData,
      insight:        igInsightData,
      prediction:     igPredictionData,
      fetchedAt:      new Date().toISOString(),
    }), MOCK_DELAY_MS)
  )
}

export function useInstagramAnalytics() {
  return useFetch(() => fetchInstagramPageData(), [])
}
