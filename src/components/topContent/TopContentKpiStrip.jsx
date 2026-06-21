import { LayoutList, Eye, Heart, Award } from 'lucide-react'
import StatCard from '@/components/ui/StatCard'

/**
 * TopContentKpiStrip
 * ──────────────────
 * Four KPI cards for the Top Content page.
 * Same grid layout as TikTokKpiStrip and InstagramKpiStrip.
 *
 * Props:
 *   data {{ totalTopContent, highestViews, highestEngagement, bestPlatform }}
 */
export default function TopContentKpiStrip({ data = {} }) {
  return (
    <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
      <StatCard
        label="Total Top Content"
        value={data.totalTopContent}
        icon={<LayoutList size={16} />}
        compact={false}
      />
      <StatCard
        label="Highest Views"
        value={data.highestViews}
        icon={<Eye size={16} />}
      />
      <StatCard
        label="Highest Engagement"
        value={data.highestEngagement != null ? `${data.highestEngagement}%` : '—'}
        icon={<Heart size={16} />}
        compact={false}
      />
      <StatCard
        label="Best Performing Platform"
        value={data.bestPlatform ?? '—'}
        icon={<Award size={16} />}
        compact={false}
      />
    </div>
  )
}
