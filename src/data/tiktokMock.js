/**
 * data/tiktokMock.js
 * ──────────────────
 * @deprecated
 * ─────────────────────────────────────────────────────────────────────
 * This file is a legacy shim. No page or component should import from
 * it anymore. It exists only to avoid breaking any external reference
 * that may not yet have been updated.
 *
 * Use the named data files instead:
 *   import { accountData }   from '@/data/accountData'
 *   import { contentData }   from '@/data/contentData'
 *   import { insightData }   from '@/data/insightData'
 *   import { predictionData } from '@/data/predictionData'
 *
 * Or use the hook:
 *   import { useTikTokAnalytics } from '@/hooks/useTikTokAnalytics'
 * ─────────────────────────────────────────────────────────────────────
 */

import { accountData }    from './accountData'
import { contentData }    from './contentData'
import { insightData }    from './insightData'
import { predictionData } from './predictionData'

/** @deprecated use accountData from '@/data/accountData' */
export const TIKTOK_KPI = {
  followers:        accountData.followers,
  followersChange:  accountData.followersChange,
  totalViews:       accountData.totalViews,
  viewsChange:      accountData.viewsChange,
  totalEngagement:  accountData.totalEngagement,
  engagementChange: accountData.engagementChange,
  totalPosts:       accountData.totalPosts,
  postsChange:      accountData.postsChange,
}

/** @deprecated use contentData from '@/data/contentData' */
export const TIKTOK_CONTENT = contentData.map((v) => ({
  id:         v.id,
  thumbnail:  v.thumbnailBg,
  caption:    v.caption,
  uploadDate: v.uploadDate,
  views:      v.views,
  likes:      v.likes,
  comments:   v.comments,
  shares:     v.shares,
}))

/** @deprecated use insightData from '@/data/insightData' */
export const TIKTOK_AI_INSIGHT = insightData

/** @deprecated use predictionData from '@/data/predictionData' */
export const TIKTOK_PREDICTION = predictionData
