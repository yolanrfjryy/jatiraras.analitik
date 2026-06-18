/**
 * predictionData.js
 * ─────────────────
 * Centralized prediction / forecast data for Jatiraras Sawarga TikTok analytics.
 *
 * Shape: TikTokPrediction[]  (see src/models/tiktok.js)
 *
 * ┌─ Data flow ──────────────────────────────────────────────────────┐
 * │  predictionData.js (this file)                                   │
 * │    └── sourced from  fixtures/tiktok/predictions.json            │
 * │    └── consumed by   tiktokRepository.getPredictions()           │
 * │    └── consumed by   hooks/useTikTokAnalytics                    │
 * │    └── consumed by   components/ui/PredictionCard                │
 * │                                                                  │
 * │  To integrate live prediction models:                            │
 * │    Replace the fixture import below with an API call in          │
 * │    tiktokRepository.js — this file requires no changes.          │
 * └──────────────────────────────────────────────────────────────────┘
 *
 * Each prediction object:
 *   id              {string}  unique identifier
 *   metric          {string}  predicted metric key e.g. 'followers'
 *   summary         {string}  short headline ≤ 60 chars
 *   detail          {string}  1–3 sentence explanation
 *   confidence      {number}  model confidence score 0–100
 *   horizon         {string}  time window e.g. '30 days'
 *   projectedValue  {number}  expected metric value at horizon end
 *   generatedAt     {string}  ISO 8601 datetime
 *
 * primaryPrediction — the first entry (followers), shown on the Analytics page.
 * allPredictions    — the full list for future multi-prediction views.
 */

import { predictionsFixture } from './fixtures/tiktok'

/** @type {import('@/models/tiktok').TikTokPrediction[]} */
export const allPredictions = predictionsFixture

/** @type {import('@/models/tiktok').TikTokPrediction} */
export const primaryPrediction = predictionsFixture[0]

/**
 * predictionData — default export alias for primaryPrediction.
 * Matches the naming convention requested (predictionData).
 * @type {import('@/models/tiktok').TikTokPrediction}
 */
export const predictionData = primaryPrediction
