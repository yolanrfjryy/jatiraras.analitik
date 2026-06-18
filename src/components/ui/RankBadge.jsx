import { cn } from '@/utils/classNames'

/**
 * RankBadge
 * ─────────
 * Displays a rank number (#1, #2, #3 …) with a gold/silver/bronze
 * highlight for the top 3 positions.
 *
 * Props:
 *   rank {number}
 */
const RANK_STYLES = {
  1: 'bg-amber-50  text-amber-600  border-amber-200',
  2: 'bg-slate-50  text-slate-500  border-slate-200',
  3: 'bg-orange-50 text-orange-500 border-orange-200',
}

export default function RankBadge({ rank }) {
  return (
    <span
      className={cn(
        'inline-flex items-center justify-center w-7 h-7 rounded-lg border text-xs font-bold shrink-0',
        RANK_STYLES[rank] ?? 'bg-slate-50 text-slate-400 border-slate-200'
      )}
    >
      {rank}
    </span>
  )
}
