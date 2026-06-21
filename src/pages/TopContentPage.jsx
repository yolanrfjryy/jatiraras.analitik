import PageShell             from '@/components/layout/PageShell'
import PageHeader            from '@/components/ui/PageHeader'
import LoadingSpinner        from '@/components/ui/LoadingSpinner'
import ErrorMessage          from '@/components/ui/ErrorMessage'
import InsightCard           from '@/components/ui/InsightCard'
import PredictionCard        from '@/components/ui/PredictionCard'
import TopContentKpiStrip    from '@/components/topContent/TopContentKpiStrip'
import TopContentHighlights  from '@/components/topContent/TopContentHighlights'
import TopContentTable       from '@/components/topContent/TopContentTable'
import { useTopContent }     from '@/hooks/useTopContent'

/**
 * TopContentPage
 * ──────────────
 * Cross-platform Top Content view for Jatiraras Sawarga.
 * Identical layout structure to TikTokAnalyticsPage and InstagramAnalyticsPage.
 *
 * Sections:
 *   1. Page Header
 *   2. KPI strip  — Total, Highest Views, Highest Engagement, Best Platform
 *   3. Top 3 Highlights — featured content cards
 *   4. Content grid:
 *        left (2/3)  → Content Performance Table (search + sort)
 *        right (1/3) → AI Insight + Prediction cards
 */
export default function TopContentPage() {
  const { data, isLoading, error, refetch } = useTopContent()

  const header = (
    <PageHeader
      title="Top Content"
      subtitle="Best performing content across all social media platforms."
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

  const { kpi, items, highlights, insight, prediction } = data

  // ── Render ────────────────────────────────────────────────────────────────
  return (
    <PageShell>
      <div className="space-y-6">

        {/* ── 1. Page Header ── */}
        {header}

        {/* ── 2. KPI Strip ── */}
        <TopContentKpiStrip data={kpi} />

        {/* ── 3. Top 3 Highlights ── */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
            Top 3 Highlights
          </p>
          <TopContentHighlights items={highlights} />
        </div>

        {/* ── 4. Content grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">

          {/* Content table — 2/3 */}
          <div className="lg:col-span-2">
            <TopContentTable data={items} />
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
