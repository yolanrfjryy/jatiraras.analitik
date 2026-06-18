import { cn } from '@/utils/classNames'
import { PLATFORMS } from '@/config/platforms'

/**
 * PlatformBadge
 * ─────────────
 * Coloured dot + label identifying a social platform.
 *
 * Props:
 *   platform {string}  one of PLATFORM_KEYS
 *   size     {'sm'|'md'} default 'md'
 */
export default function PlatformBadge({ platform, size = 'md' }) {
  const config = PLATFORMS.find((p) => p.key === platform)
  if (!config) return null

  return (
    <span className={cn(
      'inline-flex items-center gap-1.5 font-medium',
      size === 'sm' ? 'text-xs' : 'text-sm'
    )}>
      <span
        className={cn('rounded-full shrink-0', size === 'sm' ? 'w-2 h-2' : 'w-2.5 h-2.5')}
        style={{ backgroundColor: config.color }}
      />
      {config.label}
    </span>
  )
}
