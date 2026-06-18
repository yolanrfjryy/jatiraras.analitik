/**
 * useSidebar.js
 * ─────────────
 * Manages sidebar open/collapsed state.
 * Starts expanded on desktop, collapsed on mobile (< 768px).
 */

import { useState, useEffect } from 'react'

export function useSidebar() {
  const isMobile = () => window.innerWidth < 768

  const [open, setOpen] = useState(!isMobile())

  // Collapse on resize to mobile
  useEffect(() => {
    function handleResize() {
      if (isMobile()) setOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const toggle = () => setOpen((v) => !v)
  const close  = () => setOpen(false)
  const expand = () => setOpen(true)

  return { open, toggle, close, expand }
}
