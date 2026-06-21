/**
 * instagramData.js
 * ────────────────
 * Centralized Instagram data for Jatiraras Sawarga dashboard.
 * All exports sourced from fixtures — replace fixture JSON values
 * when Instagram Graph API is connected.
 */

import {
  igAccountMetricsFixture,
  igPostsFixture,
  igInsightsFixture,
  igPredictionsFixture,
} from './fixtures/instagram'

/** @type {object} Account-level KPI metrics */
export const igAccountData = igAccountMetricsFixture

/** @type {object[]} Post / content list */
export const igContentData = igPostsFixture

/** @type {object} Primary insight (first entry) */
export const igInsightData = igInsightsFixture[0]

/** @type {object[]} All insights */
export const igAllInsights = igInsightsFixture

/** @type {object} Primary prediction (first entry) */
export const igPredictionData = igPredictionsFixture[0]

/** @type {object[]} All predictions */
export const igAllPredictions = igPredictionsFixture
