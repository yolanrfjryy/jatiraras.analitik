/**
 * TikTokGrowthPage
 * ─────────────────
 * Follower, views, and likes growth over time.
 *
 * Layout:
 *   - Follower growth area chart
 *   - Views trend area chart
 *   - Likes trend area chart
 *
 * Data:
 *   useFetch(() => tiktokService.fetchGrowthData({ range }), [range])
 */

import PageHeader from '@/components/ui/PageHeader'
import ChartCard  from '@/components/charts/ChartCard'
import AreaChart  from '@/components/charts/AreaChart'

export default function TikTokGrowthPage() {
  // TODO: wire data

  return (
    <div className="space-y-6">
      <PageHeader title="Growth Analytics" subtitle="Trends over the selected period" />

      <ChartCard title="Follower Growth" subtitle="Daily follower count">
        <AreaChart data={[]} areas={[]} />
      </ChartCard>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartCard title="Views Trend" subtitle="Daily video views">
          <AreaChart data={[]} areas={[]} />
        </ChartCard>

        <ChartCard title="Likes Trend" subtitle="Daily likes received">
          <AreaChart data={[]} areas={[]} />
        </ChartCard>
      </div>
    </div>
  )
}
