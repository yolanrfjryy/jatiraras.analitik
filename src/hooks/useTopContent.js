/**
 * useTopContent.js
 * ────────────────
 * Page-level hook for the Top Content page.
 * Async mock — identical pattern to useTikTokAnalytics and useInstagramAnalytics.
 */

import { useFetch } from './useFetch'
import {
  topContentKpi,
  topContentItems,
  topContentHighlights,
  topContentInsight,
  topContentPrediction,
} from '@/data/topContentData'

function fetchTopContentData() {
  return new Promise((resolve) =>
    setTimeout(() => resolve({
      kpi:        topContentKpi,
      items:      topContentItems,
      highlights: topContentHighlights,
      insight:    topContentInsight,
      prediction: topContentPrediction,
    }), 350)
  )
}

export function useTopContent() {
  return useFetch(() => fetchTopContentData(), [])
}
