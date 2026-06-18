import DashboardHeader       from '@/components/ui/DashboardHeader'
import KpiStrip              from '@/components/overview/KpiStrip'
import GrowthChart           from '@/components/overview/GrowthChart'
import TopContentTable       from '@/components/overview/TopContentTable'
import RecentContentList     from '@/components/overview/RecentContentList'
import PlatformStatusSection from '@/components/overview/PlatformStatusSection'
import PageShell             from '@/components/layout/PageShell'
import LoadingSpinner        from '@/components/ui/LoadingSpinner'
import ErrorMessage          from '@/components/ui/ErrorMessage'
import { useTikTokOverview } from '@/hooks/useTikTokOverview'
import platformsRaw          from '@/data/fixtures/platforms.json'
import { accountData }       from '@/data/accountData'

/**
 * OverviewPage
 * ────────────
 * Public dashboard homepage for Jatiraras Sawarga.
 *
 * Data flow:
 *   useTikTokOverview()
 *     → tiktokRepository.getOverviewPageData()
 *       → accountData.js  (KPI cards)
 *       → growth fixture  (chart)
 *       → contentData.js  (top 5 videos)
 *
 * Platform status is sourced from fixtures/platforms.json with the
 * live follower count injected from accountData at render time.
 *
 * Layout (unchanged):
 *   1. DashboardHeader
 *   2. KPI strip
 *   3. Growth chart
 *   4. Top content table (2/3) + Recent content + Platform status (1/3)
 */
export default function OverviewPage() {
  const { data, isLoading, error, refetch } = useTikTokOverview()

  // ── Platform status — always available (no async needed) ─────────────────
  const platformStatus = platformsRaw.platforms.map((p) => ({
    ...p,
    followers: p.key === 'tiktok' ? accountData.followers : null,
  }))

  // ── Loading state ─────────────────────────────────────────────────────────
  if (isLoading) {
    return (
      <PageShell>
        <DashboardHeader />
        <LoadingSpinner size="lg" />
      </PageShell>
    )
  }

  // ── Error state ───────────────────────────────────────────────────────────
  if (error) {
    return (
      <PageShell>
        <DashboardHeader />
        <ErrorMessage message={error} onRetry={refetch} />
      </PageShell>
    )
  }

  // ── Destructure page data ─────────────────────────────────────────────────
  const { accountMetrics, growth, topContent } = data

  // KPI strip expects totalFollowers key (overview variant)
  const kpiData = {
    totalFollowers:   accountMetrics.followers,
    followersChange:  accountMetrics.followersChange,
    totalViews:       accountMetrics.totalViews,
    viewsChange:      accountMetrics.viewsChange,
    totalEngagement:  accountMetrics.totalEngagement,
    engagementChange: accountMetrics.engagementChange,
    totalPosts:       accountMetrics.totalPosts,
    postsChange:      accountMetrics.postsChange,
  }

  // Growth chart expects { date, followers, views } points
  const growthPoints = growth.points.map((p) => ({
    date:      p.label,
    followers: p.followers,
    views:     p.views,
  }))

  // Top content expects rank + title fields
  const topContentRows = topContent.map((v, i) => ({
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

  // Recent content (latest 5 by date)
  const recentContent = [...topContent]
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

  // ── Render ────────────────────────────────────────────────────────────────
  return (
    <PageShell>
      <div className="space-y-6">

        {/* ── 1. Page Header ── */}
        <DashboardHeader />

        {/* ── 2. KPI Strip ── */}
        <KpiStrip data={kpiData} />

        {/* ── 3. Growth Chart ── */}
        <GrowthChart data={growthPoints} />

        {/* ── 4. Content columns ── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Left — Top performing content (2/3) */}
          <div className="lg:col-span-2">
            <TopContentTable data={topContentRows} />
          </div>

          {/* Right — Recent content + Platform status (1/3) */}
          <div className="flex flex-col gap-6">
            <RecentContentList data={recentContent} />
            <PlatformStatusSection platforms={platformStatus} />
          </div>

        </div>
      </div>
    </PageShell>
  )
}
