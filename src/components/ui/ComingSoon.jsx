import { Clock } from 'lucide-react'
import PageShell from '@/components/layout/PageShell'

/**
 * ComingSoon
 * ──────────
 * Placeholder rendered inside future platform pages (Instagram, YouTube).
 * Wraps itself in PageShell so the footer always appears.
 *
 * Props:
 *   platform {string}  display name, e.g. 'Instagram'
 */
export default function ComingSoon({ platform }) {
  return (
    <PageShell>
      <div className="flex flex-col items-center justify-center min-h-[55vh] text-center px-4">
        <span className="flex items-center justify-center w-16 h-16 rounded-2xl bg-slate-100 text-slate-400 mb-5">
          <Clock size={28} />
        </span>
        <h2 className="text-lg font-bold text-slate-800">
          {platform} — Coming Soon
        </h2>
        <p className="text-sm text-slate-400 mt-2 max-w-sm">
          {platform} analytics will appear here once the integration is connected.
        </p>
      </div>
    </PageShell>
  )
}
