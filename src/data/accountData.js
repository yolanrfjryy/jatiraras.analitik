/**
 * accountData.js
 * ──────────────
 * Centralized account-level summary data for Jatiraras Sawarga TikTok.
 *
 * Shape: TikTokAccountMetrics  (see src/models/tiktok.js)
 *
 * ┌─ Data flow ──────────────────────────────────────────────────────┐
 * │  accountData.js (this file)                                      │
 * │    └── sourced from  fixtures/tiktok/accountMetrics.json         │
 * │    └── consumed by   tiktokRepository.getAccountMetrics()        │
 * │    └── consumed by   hooks/useTikTokAnalytics                    │
 * │    └── consumed by   pages/tiktok/TikTokAnalyticsPage            │
 * │                                                                  │
 * │  To integrate live TikTok data:                                  │
 * │    Replace the fixture import below with the API service call    │
 * │    in tiktokRepository.js — this file requires no changes.       │
 * └──────────────────────────────────────────────────────────────────┘
 *
 * Fields:
 *   followers        {number}  current follower count
 *   followersChange  {number}  % vs previous period
 *   totalViews       {number}  cumulative views in period
 *   viewsChange      {number}  % vs previous period
 *   totalEngagement  {number}  likes + comments + shares
 *   engagementChange {number}  % vs previous period
 *   engagementRate   {number}  engagement / views × 100
 *   totalPosts       {number}  videos published in period
 *   postsChange      {number}  % vs previous period
 *   totalLikes       {number}
 *   likesChange      {number}
 *   totalComments    {number}
 *   commentsChange   {number}
 *   totalShares      {number}
 *   sharesChange     {number}
 *   profileVisits    {number}
 *   lastUpdatedAt    {string}  ISO 8601
 */

import { accountMetricsFixture } from './fixtures/tiktok'

/** @type {import('@/models/tiktok').TikTokAccountMetrics} */
export const accountData = accountMetricsFixture
