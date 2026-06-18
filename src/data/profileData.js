/**
 * profileData.js
 * ──────────────
 * Public profile identity for @jatiraras.sawarga.
 *
 * Shape: TikTokPublicProfile  (see src/models/tiktok.js)
 *
 * ┌─ Data flow ──────────────────────────────────────────────────────┐
 * │  profileData.js (this file)                                      │
 * │    └── sourced from  fixtures/tiktok/profile.json                │
 * │    └── consumed by   tiktokRepository.getPublicProfile()         │
 * │    └── consumed by   hooks/useTikTokAnalytics                    │
 * │    └── ready for display in any profile header component         │
 * │                                                                  │
 * │  To connect live public data:                                    │
 * │    Implement tiktokPublicService.fetchProfile() and point        │
 * │    tiktokRepository.getPublicProfile() at it.                    │
 * │    This file requires no changes.                                │
 * └──────────────────────────────────────────────────────────────────┘
 *
 * Fields (TikTokPublicProfile):
 *   username     {string}  handle without '@'   → 'jatiraras.sawarga'
 *   displayName  {string}  full display name    → 'Jatiraras Sawarga'
 *   bio          {string}  profile bio text
 *   avatarUrl    {string}  profile picture URL  (empty until live)
 *   profileUrl   {string}  canonical TikTok profile URL
 *   followers    {number}  public follower count
 *   following    {number}  public following count
 *   totalLikes   {number}  cumulative likes across all videos
 *   totalVideos  {number}  total public videos posted
 *   lastFetchedAt {string} ISO 8601 datetime of last data refresh
 */

import { profileFixture } from './fixtures/tiktok'

/** @type {import('@/models/tiktok').TikTokPublicProfile} */
export const profileData = profileFixture
