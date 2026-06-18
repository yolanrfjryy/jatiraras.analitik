# Jatiraras Analytics Dashboard

Public read-only social media analytics dashboard for **Jatiraras Sawarga** restaurant.
TikTok is the active data source — Instagram and YouTube are scaffolded and ready.

---

## Tech Stack

| Layer       | Technology                             |
|-------------|----------------------------------------|
| UI          | React 18 + Vite + Tailwind CSS         |
| Routing     | React Router v6                        |
| Charts      | Recharts                               |
| HTTP        | Axios                                  |
| Icons       | lucide-react                           |

---

## Getting Started

```bash
cd jatiraras-analytics
npm install
cp .env.example .env   # fill in API credentials when ready
npm run dev            # http://localhost:5173
```

---

## Project Structure

```
src/
├── config/
│   ├── app.js            ← global constants (app name, refresh interval)
│   ├── platforms.js      ← platform registry (TikTok/Instagram/YouTube)
│   ├── navigation.js     ← sidebar nav config
│   ├── dateRanges.js     ← date preset list
│   └── chartTheme.js     ← shared chart colours, heights
│
├── models/
│   ├── platform.js       ← shared types (TimeSeriesPoint, PlatformSummary)
│   ├── tiktok.js         ← TikTok data contracts
│   ├── instagram.js      ← Instagram data contracts (future)
│   └── youtube.js        ← YouTube data contracts (future)
│
├── services/
│   ├── apiClient.js      ← Axios instance
│   ├── tiktokService.js  ← TikTok API calls
│   ├── instagramService.js
│   └── youtubeService.js
│
├── hooks/
│   ├── useFetch.js        ← generic async data hook
│   ├── useAutoRefresh.js  ← interval-based refresh
│   ├── useDateRange.js    ← date range state
│   ├── useTableSearch.js  ← client-side table search
│   └── useSidebar.js      ← sidebar open/collapsed state
│
├── utils/
│   ├── formatters.js      ← formatCompact, formatPercent, formatDuration…
│   ├── dateHelpers.js     ← resolveDateRange, calcPercentChange
│   ├── trendHelpers.js    ← getTrendVariant, getTrendDirection
│   └── classNames.js      ← cn() wrapper for clsx
│
├── layouts/
│   └── DashboardLayout.jsx  ← sidebar + topbar shell
│
├── components/
│   ├── navigation/
│   │   ├── Sidebar.jsx       ← collapsible, config-driven
│   │   └── TopBar.jsx        ← date filter + last-updated badge
│   ├── filters/
│   │   ├── DateRangeFilter.jsx
│   │   ├── MetricToggle.jsx
│   │   └── SearchInput.jsx
│   ├── charts/
│   │   ├── ChartCard.jsx     ← title + toolbar wrapper
│   │   ├── ChartTooltip.jsx  ← shared tooltip
│   │   ├── LineChart.jsx
│   │   ├── AreaChart.jsx
│   │   ├── BarChart.jsx
│   │   └── DonutChart.jsx
│   ├── tables/
│   │   ├── DataTable.jsx     ← sortable, accessible
│   │   └── TableToolbar.jsx
│   └── ui/
│       ├── StatCard.jsx
│       ├── Badge.jsx
│       ├── PlatformBadge.jsx
│       ├── PageHeader.jsx
│       ├── LoadingSpinner.jsx
│       ├── EmptyState.jsx
│       ├── ErrorMessage.jsx
│       ├── LastUpdatedBadge.jsx
│       └── ComingSoon.jsx
│
├── pages/
│   ├── OverviewPage.jsx
│   ├── tiktok/
│   │   ├── TikTokAnalyticsPage.jsx
│   │   ├── TikTokTopContentPage.jsx
│   │   ├── TikTokGrowthPage.jsx
│   │   └── TikTokAudiencePage.jsx
│   ├── instagram/
│   │   ├── InstagramAnalyticsPage.jsx
│   │   └── InstagramTopContentPage.jsx
│   ├── youtube/
│   │   ├── YouTubeAnalyticsPage.jsx
│   │   └── YouTubeTopContentPage.jsx
│   └── NotFoundPage.jsx
│
├── styles/
│   └── globals.css
│
├── App.jsx
└── main.jsx
```

---

## Adding a New Platform

1. Add credentials to `.env`
2. Implement functions in `src/services/<platform>Service.js`
3. Add type definitions to `src/models/<platform>.js`
4. Set `enabled: true` in `src/config/platforms.js`
5. Build out the placeholder pages in `src/pages/<platform>/`

The sidebar and nav update automatically — no component changes needed.

---

## Auto-Refresh

The dashboard refreshes automatically every 5 minutes (configurable via `VITE_REFRESH_INTERVAL_MS`).
Use `useAutoRefresh(refetch, REFRESH_INTERVAL_MS)` in any page that needs live updates.
