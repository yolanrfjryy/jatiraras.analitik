import PageShell              from '@/components/layout/PageShell'
import PageHeader             from '@/components/ui/PageHeader'
import InstagramKpiStrip      from '@/components/instagram/InstagramKpiStrip'
import InstagramContentTable  from '@/components/instagram/InstagramContentTable'
import InsightCard            from '@/components/ui/InsightCard'
import PredictionCard         from '@/components/ui/PredictionCard'
import LoadingSpinner         from '@/components/ui/LoadingSpinner'
import ErrorMessage           from '@/components/ui/ErrorMessage'
import { useInstagramAnalytics } from '@/hooks/useInstagramAnalytics'

/**
 * InstagramAnalyticsPage
 * ──────────────────────
 * Instagram analytics view — identical layout to TikTokAnalyticsPage.
 *
 * Data flow:
 *   useInstagramAnalytics()
 *     → instagramData.js
 *       → fixtures/instagram/accountMetrics.json  (KPI cards)
 *       → fixtures/instagram/posts.json           (content table)
 *       → fixtures/instagram/insights.json        (AI insight card)
 *       → fixtures/instagram/predictions.json     (prediction card)
 *
 * To connect live Instagram Graph API:
 *   Replace fetchInstagramPageData() in useInstagramAnalytics.js
 *   with a real API call. This page requires zero changes.
 */
export default function InstagramAnalyticsPage() {
  const { data, isLoading, error, refetch } = useInstagramAnalytics()

  // Accent bar uses Instagram brand colour
  const header = (
    <PageHeader
      title="Instagram Analytics"
      subtitle="Monitor Instagram content performance · @jatiraras.sawarga"
      accent="bg-[#c13584]"
    />
  )

  // ── Loading ───────────────────────────────────────────────────────────────
  if (isLoading) {
    return (
      <PageShell>
        {header}
        <LoadingSpinner size="lg" />
      </PageShell>
    )
  }

  // ── Error ─────────────────────────────────────────────────────────────────
  if (error) {
    return (
      <PageShell>
        {header}
        <ErrorMessage message={error} onRetry={refetch} />
      </PageShell>
    )
  }

  const { accountMetrics, posts, insight, prediction } = data

  // ── Render ────────────────────────────────────────────────────────────────
  return (
    <PageShell>
      <div className="space-y-6">

        {/* ── 1. Page Header ── */}
        {header}

        {/* ── 2. KPI Strip ── */}
        <InstagramKpiStrip data={accountMetrics} />

        {/* ── 3. Content grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">

          {/* Content table — 2/3 */}
          <div className="lg:col-span-2">
            <InstagramContentTable data={posts} />
          </div>

          {/* Right column — insight + prediction */}
          <div className="flex flex-col gap-4">
            <InsightCard
              summary={insight.summary}
              detail={insight.detail}
              trend={insight.trend}
              updatedAt={insight.updatedAt}
            />
            <PredictionCard
              summary={prediction.summary}
              detail={prediction.detail}
              confidence={prediction.confidence}
              horizon={prediction.horizon}
            />
          </div>

        </div>
      </div>
    </PageShell>
  )
}
