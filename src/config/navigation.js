/**
 * navigation.js
 * ─────────────
 * Declarative sidebar navigation config.
 * The Sidebar component reads this array — add routes here only.
 *
 * Item shape:
 *   id          {string}   unique key
 *   label       {string}   display text
 *   to          {string}   route path
 *   icon        {Component} lucide icon
 *   comingSoon  {boolean}  shows a "Soon" badge, link is non-interactive
 */

import {
  LayoutDashboard,
  TrendingUp,
  Film,
  BarChart2,
  Star,
} from 'lucide-react'

export const NAV_ITEMS = [
  // ── Main ────────────────────────────────────────────────────────────────
  {
    id:    'overview',
    label: 'Dashboard',
    to:    '/overview',
    icon:  LayoutDashboard,
  },
  {
    id:    'top-content',
    label: 'Top Content',
    to:    '/top-content',
    icon:  Star,
  },

  // ── TikTok ──────────────────────────────────────────────────────────────
  {
    id:      'tiktok-divider',
    divider: true,
    label:   'TikTok',
  },
  {
    id:    'tiktok-analytics',
    label: 'Analytics',
    to:    '/tiktok/analytics',
    icon:  BarChart2,
    platformColor: '#010101',
  },
  {
    id:    'tiktok-content',
    label: 'Top Content',
    to:    '/tiktok/content',
    icon:  Film,
    platformColor: '#010101',
  },
  {
    id:    'tiktok-growth',
    label: 'Growth',
    to:    '/tiktok/growth',
    icon:  TrendingUp,
    platformColor: '#010101',
  },

  // ── Instagram ────────────────────────────────────────────────────────────
  {
    id:      'instagram-divider',
    divider: true,
    label:   'Instagram',
  },
  {
    id:            'instagram-analytics',
    label:         'Analytics',
    to:            '/instagram/analytics',
    icon:          BarChart2,
    platformColor: '#c13584',
  },
  {
    id:            'instagram-content',
    label:         'Top Content',
    to:            '/instagram/content',
    icon:          Film,
    platformColor: '#c13584',
  },

  // ── YouTube ──────────────────────────────────────────────────────────────
  {
    id:      'youtube-divider',
    divider: true,
    label:   'YouTube',
    comingSoon: true,
  },
  {
    id:         'youtube-analytics',
    label:      'Analytics',
    to:         '/youtube/analytics',
    icon:       BarChart2,
    comingSoon: true,
    platformColor: '#ff0000',
  },
  {
    id:         'youtube-content',
    label:      'Top Content',
    to:         '/youtube/content',
    icon:       Film,
    comingSoon: true,
    platformColor: '#ff0000',
  },
]
