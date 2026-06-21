/**
 * fixtures/instagram/index.js
 * ───────────────────────────
 * Barrel export for all Instagram mock fixtures.
 * Always import from this file — never from individual JSON files.
 */

import accountMetricsRaw from './accountMetrics.json'
import postsRaw          from './posts.json'
import insightsRaw       from './insights.json'
import predictionsRaw    from './predictions.json'

/** @type {object} Instagram account KPI metrics */
export const igAccountMetricsFixture = accountMetricsRaw

/** @type {object[]} Instagram post list */
export const igPostsFixture = postsRaw.posts

/** @type {object[]} Instagram AI insights */
export const igInsightsFixture = insightsRaw.insights

/** @type {object[]} Instagram predictions */
export const igPredictionsFixture = predictionsRaw.predictions
