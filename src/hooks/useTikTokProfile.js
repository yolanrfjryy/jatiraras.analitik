/**
 * useTikTokProfile.js
 * ───────────────────
 * Fetches the public profile for @jatiraras.sawarga.
 *
 * @returns {{
 *   data:      import('@/models/tiktok').TikTokPublicProfile | null,
 *   isLoading: boolean,
 *   error:     string | null,
 *   refetch:   () => void,
 * }}
 *
 * Usage:
 *   const { data: profile, isLoading } = useTikTokProfile()
 */

import { useFetch }        from './useFetch'
import { getPublicProfile } from '@/data/repositories/tiktokRepository'

export function useTikTokProfile() {
  return useFetch(() => getPublicProfile(), [])
}
