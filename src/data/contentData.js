/**
 * contentData.js
 * ──────────────
 * Centralized TikTok video / content list for Jatiraras Sawarga.
 *
 * Shape: TikTokVideo[]  (see src/models/tiktok.js)
 *
 * ┌─ Data flow ──────────────────────────────────────────────────────┐
 * │  contentData.js (this file)                                      │
 * │    └── sourced from  fixtures/tiktok/videos.json                 │
 * │    └── consumed by   tiktokRepository.getVideos()                │
 * │    └── consumed by   hooks/useTikTokAnalytics                    │
 * │    └── consumed by   components/tiktok/ContentTable              │
 * │                                                                  │
 * │  To integrate live TikTok data:                                  │
 * │    Replace the fixture import below with the API service call    │
 * │    in tiktokRepository.js — this file requires no changes.       │
 * └──────────────────────────────────────────────────────────────────┘
 *
 * Each video object:
 *   id             {string}   TikTok video ID
 *   caption        {string}   full caption / title text
 *   thumbnailUrl   {string}   absolute URL (empty until live integration)
 *   thumbnailBg    {string}   Tailwind bg class — colour placeholder for thumbnail
 *   videoUrl       {string}   deep-link to TikTok video page
 *   uploadDate     {string}   ISO 8601 date  YYYY-MM-DD
 *   views          {number}
 *   likes          {number}
 *   comments       {number}
 *   shares         {number}
 *   engagementRate {number}   0–100
 *   avgWatchTime   {number}   seconds
 *   completionRate {number}   0–100 %
 *   hashtags       {string[]} without '#' prefix
 */

import { videosFixture } from './fixtures/tiktok'

/** @type {import('@/models/tiktok').TikTokVideo[]} */
export const contentData = videosFixture
