/**
 * platforms.js
 * ────────────
 * Single source of truth for every supported (and future) social platform.
 *
 * To add a new platform:
 *   1. Add an entry to PLATFORMS
 *   2. Set enabled: false until the integration is ready
 *   3. Flip enabled: true when the API service is wired up
 *
 * Nothing else in the codebase needs to change for a platform to appear
 * in the sidebar and switcher.
 */

export const PLATFORM_KEYS = {
  TIKTOK:    'tiktok',
  INSTAGRAM: 'instagram',
  YOUTUBE:   'youtube',
}

/** @type {Platform[]} */
export const PLATFORMS = [
  {
    key:     PLATFORM_KEYS.TIKTOK,
    label:   'TikTok',
    color:   '#010101',
    bgClass: 'bg-platform-tiktok',
    enabled: true,
    basePath: '/tiktok',
  },
  {
    key:     PLATFORM_KEYS.INSTAGRAM,
    label:   'Instagram',
    color:   '#c13584',
    bgClass: 'bg-platform-instagram',
    enabled: false,           // flip to true when Instagram API is connected
    basePath: '/instagram',
  },
  {
    key:     PLATFORM_KEYS.YOUTUBE,
    label:   'YouTube',
    color:   '#ff0000',
    bgClass: 'bg-platform-youtube',
    enabled: false,           // flip to true when YouTube API is connected
    basePath: '/youtube',
  },
]

/**
 * @typedef {Object} Platform
 * @property {string}  key
 * @property {string}  label
 * @property {string}  color      - hex colour for charts/icons
 * @property {string}  bgClass    - Tailwind bg utility
 * @property {boolean} enabled
 * @property {string}  basePath   - React Router base path for this platform
 */
