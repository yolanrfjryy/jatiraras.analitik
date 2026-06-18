import { Users, Eye, Heart, Film } from 'lucide-react'
import StatCard from '@/components/ui/StatCard'
import { OVERVIEW_KPI_CARDS } from '@/data/fixtures/tiktok'

/**
 * Icon resolver — maps iconName strings from uiConfig to lucide components.
 */
const ICON_MAP = { Users, Eye, Heart, Film }

/**
 * KpiStrip
 * ────────
 * Four KPI stat cards for the Overview dashboard.
 * Card definitions (labels, keys, descriptions) come from uiConfig.js.
 *
 * Props:
 *   data {object}  MOCK_KPI shape from overviewMock.js
 */
export default function KpiStrip({ data = {} }) {
  return (
    <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
      {OVERVIEW_KPI_CARDS.map((card) => {
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
