/**
 * topContentData.js
 * ─────────────────
 * Centralized cross-platform top content data for the Top Content page.
 * Source: fixtures/topContent/topContent.json
 *
 * Replace fixture values with real merged data from TikTok + Instagram
 * services when live integration is ready.
 */

import raw from './fixtures/topContent/topContent.json'

/** @type {{ totalTopContent, highestViews, highestEngagement, bestPlatform }} */
export const topContentKpi = raw.kpi

/** @type {object[]} Full content list sorted by views descending */
export const topContentItems = raw.items

/** @type {object[]} Top 3 items for highlight cards */
export const topContentHighlights = raw.items.slice(0, 3)

/** @type {object} Primary AI insight */
export const topContentInsight = raw.insight

/** @type {object} Primary prediction */
export const topContentPrediction = raw.prediction
