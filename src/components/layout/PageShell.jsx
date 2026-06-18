import { cn } from '@/utils/classNames'
import Footer from '@/components/navigation/Footer'

/**
 * PageShell
 * ─────────
 * Responsive content container used inside every page component.
 * Provides a consistent max-width, horizontal padding, and footer.
 *
 * Usage:
 *   <PageShell>
 *     <YourPageContent />
 *   </PageShell>
 *
 * Props:
 *   children  {ReactNode}
 *   className {string}     extra classes on the inner container
 *   maxWidth  {'sm'|'md'|'lg'|'xl'|'2xl'|'full'}  default 'xl'
 *   noPadding {boolean}   remove default horizontal padding (for full-bleed layouts)
 */

const MAX_WIDTH_MAP = {
  sm:   'max-w-screen-sm',
  md:   'max-w-screen-md',
  lg:   'max-w-screen-lg',
  xl:   'max-w-screen-xl',
  '2xl':'max-w-screen-2xl',
  full: 'max-w-none',
}

export default function PageShell({
  children,
  className,
  maxWidth  = 'xl',
  noPadding = false,
}) {
  return (
    <div className="flex flex-col min-h-full">
      {/* ── Content container ── */}
      <div
        className={cn(
          'flex-1 w-full mx-auto',
          MAX_WIDTH_MAP[maxWidth] ?? MAX_WIDTH_MAP.xl,
          !noPadding && 'px-0',   // outer padding is handled by DashboardLayout's <main>
          className
        )}
      >
        {children}
      </div>

      {/* ── Footer — sits at the bottom of every page ── */}
      <div className={cn(
        'w-full mx-auto',
        MAX_WIDTH_MAP[maxWidth] ?? MAX_WIDTH_MAP.xl,
        !noPadding && 'px-0'
      )}>
        <Footer />
      </div>
    </div>
  )
}
