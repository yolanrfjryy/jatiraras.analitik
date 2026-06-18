import { Routes, Route, Navigate } from 'react-router-dom'
import DashboardLayout from '@/layouts/DashboardLayout'

// Pages
import OverviewPage             from '@/pages/OverviewPage'
import TikTokAnalyticsPage      from '@/pages/tiktok/TikTokAnalyticsPage'
import TikTokTopContentPage     from '@/pages/tiktok/TikTokTopContentPage'
import TikTokGrowthPage         from '@/pages/tiktok/TikTokGrowthPage'
import TikTokAudiencePage       from '@/pages/tiktok/TikTokAudiencePage'
import InstagramAnalyticsPage   from '@/pages/instagram/InstagramAnalyticsPage'
import InstagramTopContentPage  from '@/pages/instagram/InstagramTopContentPage'
import YouTubeAnalyticsPage     from '@/pages/youtube/YouTubeAnalyticsPage'
import YouTubeTopContentPage    from '@/pages/youtube/YouTubeTopContentPage'
import NotFoundPage             from '@/pages/NotFoundPage'

/**
 * App
 * ───
 * Route definitions. All pages live inside DashboardLayout.
 *
 * Adding a new platform:
 *   1. Import the page component
 *   2. Add a <Route> here
 *   3. Add the nav item to config/navigation.js
 *   4. Flip platform.enabled in config/platforms.js
 */
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        {/* Default redirect */}
        <Route index element={<Navigate to="/overview" replace />} />

        {/* ── Overview ── */}
        <Route path="overview" element={<OverviewPage />} />

        {/* ── TikTok ── */}
        <Route path="tiktok/analytics" element={<TikTokAnalyticsPage />} />
        <Route path="tiktok/content"   element={<TikTokTopContentPage />} />
        <Route path="tiktok/growth"    element={<TikTokGrowthPage />} />
        <Route path="tiktok/audience"  element={<TikTokAudiencePage />} />

        {/* ── Instagram (future) ── */}
        <Route path="instagram/analytics" element={<InstagramAnalyticsPage />} />
        <Route path="instagram/content"   element={<InstagramTopContentPage />} />

        {/* ── YouTube (future) ── */}
        <Route path="youtube/analytics" element={<YouTubeAnalyticsPage />} />
        <Route path="youtube/content"   element={<YouTubeTopContentPage />} />
      </Route>

      {/* 404 */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}
