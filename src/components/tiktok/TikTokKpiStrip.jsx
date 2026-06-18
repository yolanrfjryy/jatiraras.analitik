import { Users, Eye, Heart, Film } from 'lucide-react'
import StatCard from '@/components/ui/StatCard'
import { TIKTOK_KPI_CARDS } from '@/data/fixtures/tiktok'

/**
 * Icon resolver — maps iconName strings from uiConfig to lucide components.
 * Keeps the config file free of React imports while staying declarative.
 */
const ICON_MAP = { Users, Eye, Heart, Film }

/**
 * TikTokKpiStrip
 * ──────────────
 * Four summary KPI cards for the TikTok Analytics page.
 * Card definitions (labels, keys, descriptions) come from uiConfig.js.
 *
 * Props:
 *   data {import('@/models/tiktok').TikTokAccountMetrics}
 */
export default function TikTokKpiStrip({ data = {} }) {
  return (
    <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
      {TIKTOK_KPI_CARDS.map((card) => {
        const Icon = ICON_MAP[card.iconName]
        return (
          <StatCard
            key={card.label}
            label={card.label}
            value={data[card.valueKey]}
            change={data[card.changeKey]}
            icon={Icon ? <Icon size={16} /> : null}
            description={card.description}
          />
        )
      })}
    </div>
  )
}
