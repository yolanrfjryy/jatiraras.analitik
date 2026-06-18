/**
 * data/overviewMock.js
 * ────────────────────
 * @deprecated
 * ─────────────────────────────────────────────────────────────────────
 * This file is a legacy shim. The OverviewPage now consumes data through
 * useTikTokOverview() → tiktokRepository → named data files.
 *
 * Use the named data files instead:
 *   import { accountData } from '@/data/accountData'
 *   import { contentData } from '@/data/contentData'
 *
 * Or use the hook:
 *   import { useTikTokOverview } from '@/hooks/useTikTokOverview'
 * ─────────────────────────────────────────────────────────────────────
 */

import { accountData } from './accountData'
import { contentData } from './contentData'
import { growthFixture } from './fixtures/tiktok'
import platformsRaw from './fixtures/platforms.json'

/** @deprecated */
export const MOCK_KPI = {
  totalFollowers:   accountData.followers,
  followersChange:  accountData.followersChange,
  totalViews:       accountData.totalViews,
  viewsChange:      accountData.viewsChange,
  totalEngagement:  accountData.totalEngagement,
  engagementChange: accountData.engagementChange,
  totalPosts:       accountData.totalPosts,
  postsChange:      accountData.postsChange,
}

/** @deprecated */
export const MOCK_GROWTH_DATA = growthFixture.points.map((p) => ({
  date:      p.label,
  followers: p.followers,
  views:     p.views,
}))

/** @deprecated */
export const MOCK_TOP_CONTENT = contentData
  .slice()
  .sort((a, b) => b.engagementRate - a.engagementRate)
  .slice(0, 5)
  .map((v, i) => ({
    id:             v.id,
    rank:           i + 1,
    title:          v.caption,
    platform:       'tiktok',
    publishedAt:    v.uploadDate,
    views:          v.views,
    likes:          v.likes,
    comments:       v.comments,
    engagementRate: v.engagementRate,
  }))

/** @deprecated */
export const MOCK_RECENT_CONTENT = contentData
  .slice()
  .sort((a, b) => new Date(b.uploadDate) - new Date(a.uploadDate))
  .slice(0, 5)
  .map((v) => ({
    id:          v.id,
    title:       v.caption,
    platform:    'tiktok',
    publishedAt: v.uploadDate,
    views:       v.views,
    status:      'published',
  }))

/** @deprecated */
export const MOCK_PLATFORM_STATUS = platformsRaw.platforms.map((p) => ({
  ...p,
  followers: p.key === 'tiktok' ? accountData.followers : null,
}))
