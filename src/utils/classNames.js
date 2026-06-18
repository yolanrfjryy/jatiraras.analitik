/**
 * classNames.js
 * ─────────────
 * Thin re-export of clsx for conditional Tailwind class merging.
 * Import from here instead of directly from 'clsx' so the whole
 * codebase has a single import path to update if the library changes.
 *
 * Usage:
 *   import { cn } from '@/utils/classNames'
 *   <div className={cn('base-class', isActive && 'active-class')} />
 */
export { clsx as cn } from 'clsx'
