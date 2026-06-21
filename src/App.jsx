import { Routes, Route, Navigate } from 'react-router-dom'
import DashboardLayout from '@/layouts/DashboardLayout'

// Pages
import OverviewPage             from '@/pages/OverviewPage'
import TopContentPage           from '@/pages/TopContentPage'
import TikTokAnalyticsPage      from '@/pages/tiktok/TikTokAnalyticsPage'
import TikTokGrowthPage         from '@/pages/tiktok/TikTokGrowthPage'
import TikTokAudiencePage       from '@/pages/tiktok/TikTokAudiencePage'
import InstagramAnalyticsPage   from '@/pages/instagram/InstagramAnalyticsPage'
import InstagramTopContentPage  from '@/pages/instagram/InstagramTopContentPage'
import YouTubeAnalyticsPage     from '@/pages/youtube/YouTubeAnalyticsPage'
import YouTubeTopContentPage    from '@/pages/youtube/YouTubeTopContentPage'
import NotFoundPage             from '@/pages/NotFoundPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<Navigate to="/overview" replace />} />

        {/* ── Overview ── */}
        <Route path="overview"     element={<OverviewPage />} />

        {/* ── Cross-platform Top Content ── */}
        <Route path="top-content"  element={<TopContentPage />} />

        {/* ── TikTok ── */}
        <Route path="tiktok/analytics" element={<TikTokAnalyticsPage />} />
        <Route path="tiktok/content"   element={<TopContentPage />} />
        <Route path="tiktok/growth"    element={<TikTokGrowthPage />} />
        <Route path="tiktok/audience"  element={<TikTokAudiencePage />} />

        {/* ── Instagram ── */}
        <Route path="instagram/analytics" element={<InstagramAnalyticsPage />} />
        <Route path="instagram/content"   element={<InstagramTopContentPage />} />

        {/* ── YouTube (coming soon) ── */}
        <Route path="youtube/analytics" element={<YouTubeAnalyticsPage />} />
        <Route path="youtube/content"   element={<YouTubeTopContentPage />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}
