import { useState } from 'react'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import { cn } from '@/utils/classNames'
import { formatCompact } from '@/utils/formatters'
import ChartTooltip from '@/components/charts/ChartTooltip'
import SectionHeader from '@/components/ui/SectionHeader'
import {
  GROWTH_CHART_METRICS,
  GROWTH_CHART_DEFAULT_METRIC,
  GROWTH_CHART_TITLE,
  GROWTH_CHART_SUBTITLE,
} from '@/data/fixtures/tiktok'

/**
 * GrowthChart
 * ───────────
 * Area chart showing growth over 28 days.
 * All labels, metric definitions and chart colours come from uiConfig.js.
 *
 * Props:
 *   data {Array<{ date, followers, views }>}
 */
export default function GrowthChart({ data = [] }) {
  const [activeKey, setActiveKey] = useState(GROWTH_CHART_DEFAULT_METRIC)

  const active = GROWTH_CHART_METRICS.find((m) => m.key === activeKey)

  return (
    <div className="card">
      <SectionHeader
        title={GROWTH_CHART_TITLE}
        subtitle={GROWTH_CHART_SUBTITLE}
        action={
          <div className="inline-flex items-center bg-slate-100 rounded-lg p-1 gap-0.5">
            {GROWTH_CHART_METRICS.map((m) => (
              <button
                key={m.key}
                onClick={() => setActiveKey(m.key)}
                aria-pressed={activeKey === m.key}
                className={cn(
                  'px-3 py-1 rounded-md text-xs font-medium transition-all',
                  activeKey === m.key
                    ? 'bg-white text-slate-900 shadow-card'
                    : 'text-slate-500 hover:text-slate-700'
                )}
              >
                {m.label}
              </button>
            ))}
          </div>
        }
      />

      <ResponsiveContainer width="100%" height={220}>
        <AreaChart data={data} margin={{ top: 4, right: 4, left: -20, bottom: 0 }}>
          <defs>
            <linearGradient id="growthGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%"  stopColor={active.color} stopOpacity={0.15} />
              <stop offset="95%" stopColor={active.color} stopOpacity={0}    />
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />

          <XAxis
            dataKey="date"
            tick={{ fontSize: 10, fill: '#94a3b8' }}
            axisLine={false}
            tickLine={false}
            interval={6}
          />
          <YAxis
            tick={{ fontSize: 10, fill: '#94a3b8' }}
            axisLine={false}
            tickLine={false}
            tickFormatter={formatCompact}
          />

          <Tooltip content={<ChartTooltip formatValue={formatCompact} />} />

          <Area
            key={activeKey}
            type="monotone"
            dataKey={activeKey}
            name={active.label}
            stroke={active.color}
            strokeWidth={2}
            fill="url(#growthGrad)"
            dot={false}
            activeDot={{ r: 4, strokeWidth: 0 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}
