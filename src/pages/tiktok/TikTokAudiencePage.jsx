/**
 * TikTokAudiencePage
 * ───────────────────
 * Demographic breakdown: age groups, gender, top locations, devices.
 *
 * Layout:
 *   - Age distribution bar chart
 *   - Gender split donut chart
 *   - Top locations horizontal bar chart
 *   - Device split donut chart
 *
 * Data:
 *   useFetch(() => tiktokService.fetchAudienceMetrics({ range }), [range])
 */

import PageHeader  from '@/components/ui/PageHeader'
import ChartCard   from '@/components/charts/ChartCard'
import BarChart    from '@/components/charts/BarChart'
import DonutChart  from '@/components/charts/DonutChart'

export default function TikTokAudiencePage() {
  // TODO: wire data

  return (
    <div className="space-y-6">
      <PageHeader title="Audience" subtitle="Who is watching your content" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartCard title="Age Groups" subtitle="% of total audience">
          <BarChart data={[]} bars={[]} xKey="range" />
        </ChartCard>

        <ChartCard title="Gender Split">
          <DonutChart data={[]} />
        </ChartCard>

        <ChartCard title="Top Locations" subtitle="By % of audience" className="lg:col-span-2">
          <BarChart data={[]} bars={[]} xKey="country" layout="vertical" />
        </ChartCard>

        <ChartCard title="Device Split">
          <DonutChart data={[]} />
        </ChartCard>
      </div>
    </div>
  )
}
