import SectionHeader from '@/components/ui/SectionHeader'
import PlatformStatusCard from '@/components/ui/PlatformStatusCard'

/**
 * PlatformStatusSection
 * ─────────────────────
 * Grid of PlatformStatusCard tiles — one per platform.
 *
 * Props:
 *   platforms {Array<{ key, label, status, followers, color }>}
 */
export default function PlatformStatusSection({ platforms = [] }) {
  return (
    <div className="card">
      <SectionHeader
        title="Platform Status"
        subtitle="Connected accounts and integration status"
      />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {platforms.map((p) => (
          <PlatformStatusCard
            key={p.key}
            platform={p.key}
            label={p.label}
            status={p.status}
            followers={p.followers}
            color={p.color}
          />
        ))}
      </div>
    </div>
  )
}
