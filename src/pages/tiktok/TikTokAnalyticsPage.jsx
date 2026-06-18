import PageShell      from '@/components/layout/PageShell'
import PageHeader     from '@/components/ui/PageHeader'
import TikTokKpiStrip from '@/components/tiktok/TikTokKpiStrip'
import ContentTable   from '@/components/tiktok/ContentTable'
import InsightCard    from '@/components/ui/InsightCard'
import PredictionCard from '@/components/ui/PredictionCard'
import LoadingSpinner from '@/components/ui/LoadingSpinner'
import ErrorMessage   from '@/components/ui/ErrorMessage'
import SyncButton     from '@/components/ui/SyncButton'
import { useTikTokAnalytics } from '@/hooks/useTikTokAnalytics'

/**
 * TikTokAnalyticsPage
 * ────────────────────
 * Full TikTok analytics view for Jatiraras Sawarga.
 *
 * Data flow:
 *   useTikTokAnalytics()
 *     → tiktokRepository.getAnalyticsPageData()
 *       → accountData.js    (KPI cards)
 *       → contentData.js    (video table)
 *       → insightData.js    (AI insight card)
 *       → predictionData.js (prediction card)
 *
 * Sync flow:
 *   <SyncButton onSync={refetch} />
 *     → useSyncStore.triggerSync(refetch)
 *       → runs refetch() (re-calls useTikTokAnalytics)
 *       → on success: updates lastSyncedAt in SyncStore
 *       → TopBar reads lastSyncedAt and shows "Updated HH:MM"
 *
 * To connect live data: set USE_MOCK = false in tiktokRepository.js.
 * This page requires zero changes.
 */
export default function TikTokAnalyticsPage() {
  const { data, isLoading, error, refetch } = useTikTokAnalytics()

  // Shared page header used in all states
  const header = (
    <PageHeader
      title="TikTok Analytics"
      subtitle="Monitor TikTok content performance · @jatiraras.sawarga"
      accent="bg-slate-900"
      actions={<SyncButton onSync={refetch} />}
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

  // ── Data ready ────────────────────────────────────────────────────────────
  const { accountMetrics, videos, insight, prediction, fetchedAt } = data

  return (
    <PageShell>
      <div className="space-y-6">

        {/* ── 1. Page Header + Sync Button ── */}
        {header}

        {/* ── 2. KPI Strip ── */}
        <TikTokKpiStrip data={accountMetrics} />

        {/* ── 3. Content grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">

          {/* Content table — 2/3 */}
          <div className="lg:col-span-2">
            <ContentTable data={videos} />
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
