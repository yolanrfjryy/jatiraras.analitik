import { Users, Radio, Heart, Image } from 'lucide-react'
import StatCard from '@/components/ui/StatCard'

/**
 * InstagramKpiStrip
 * ─────────────────
 * Four KPI summary cards for the Instagram Analytics page.
 * Matches the exact same layout as TikTokKpiStrip.
 *
 * Props:
 *   data {object}  igAccountData shape
 */

const CARDS = [
  {
    label:       'Followers',
    valueKey:    'followers',
    changeKey:   'followersChange',
    Icon:        Users,
    description: 'vs last 28 days',
  },
  {
    label:       'Reach',
    valueKey:    'reach',
    changeKey:   'reachChange',
    Icon:        Radio,
    description: 'vs last 28 days',
  },
  {
    label:       'Total Engagement',
    valueKey:    'totalEngagement',
    changeKey:   'engagementChange',
    Icon:        Heart,
    description: 'vs last 28 days',
  },
  {
    label:       'Total Posts',
    valueKey:    'totalPosts',
    changeKey:   'postsChange',
    Icon:        Image,
    description: 'vs last 28 days',
  },
]

export default function InstagramKpiStrip({ data = {} }) {
  return (
    <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
      {CARDS.map(({ label, valueKey, changeKey, Icon, description }) => (
        <StatCard
          key={label}
          label={label}
          value={data[valueKey]}
          change={data[changeKey]}
          icon={<Icon size={16} />}
          description={description}
        />
      ))}
    </div>
  )
}
