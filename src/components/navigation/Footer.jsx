import { APP_NAME, APP_VERSION } from '@/config/app'

/**
 * Footer
 * ──────
 * Minimal footer rendered at the bottom of the main content area.
 * Stays at the bottom of the scrollable page — not fixed.
 *
 * Contains: brand name · version · copyright · tagline
 */
export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-auto pt-8 pb-4 px-1">
      <div className="border-t border-surface-border pt-4 flex flex-col sm:flex-row items-center justify-between gap-2">

        {/* Left: brand + version */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-slate-500">{APP_NAME}</span>
          <span className="text-slate-300 text-xs">·</span>
          <span className="text-[10px] text-slate-300 font-mono">v{APP_VERSION}</span>
        </div>

        {/* Right: copyright */}
        <p className="text-[11px] text-slate-300 text-center sm:text-right">
          © {year} {APP_NAME}. Social Media Analytics Dashboard.
        </p>
      </div>
    </footer>
  )
}
