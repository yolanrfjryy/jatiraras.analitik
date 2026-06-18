/**
 * insightData.js
 * ──────────────
 * Centralized AI insight data for Jatiraras Sawarga TikTok analytics.
 *
 * Shape: TikTokAiInsight[]  (see src/models/tiktok.js)
 *
 * ┌─ Data flow ──────────────────────────────────────────────────────┐
 * │  insightData.js (this file)                                      │
 * │    └── sourced from  fixtures/tiktok/insights.json               │
 * │    └── consumed by   tiktokRepository.getInsights()              │
 * │    └── consumed by   hooks/useTikTokAnalytics                    │
 * │    └── consumed by   components/ui/InsightCard                   │
 * │                                                                  │
 * │  To integrate live insight generation:                           │
 * │    Replace the fixture import below with an API call in          │
 * │    tiktokRepository.js — this file requires no changes.          │
 * └──────────────────────────────────────────────────────────────────┘
 *
 * Each insight object:
 *   id         {string}           unique identifier
 *   summary    {string}           short headline ≤ 60 chars
 *   detail     {string}           1–3 sentence explanation
 *   trend      {TrendDirection}   'positive' | 'negative' | 'neutral'
 *   category   {string}           'engagement'|'content'|'audience'|'growth'
 *   updatedAt  {string}           ISO 8601 datetime
 *
 * primaryInsight — the first entry, shown on the Analytics page card.
 * allInsights    — the full list, used when displaying multiple insights.
 */

import { insightsFixture } from './fixtures/tiktok'

/** @type {import('@/models/tiktok').TikTokAiInsight[]} */
export const allInsights = insightsFixture

/** @type {import('@/models/tiktok').TikTokAiInsight} */
export const primaryInsight = insightsFixture[0]

/**
 * insightData — default export alias for primaryInsight.
 * Matches the naming convention requested (insightData).
 * @type {import('@/models/tiktok').TikTokAiInsight}
 */
export const insightData = primaryInsight
