import {
  AreaChart as RechartsArea,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import ChartTooltip from './ChartTooltip'
import {
  CHART_GRID_COLOR,
  CHART_AXIS_COLOR,
  CHART_AXIS_FONT_SIZE,
  CHART_HEIGHT_MD,
  CHART_PALETTE,
} from '@/config/chartTheme'

/**
 * AreaChart
 * ─────────
 * Reusable area chart — ideal for cumulative growth trends.
 *
 * Props:
 *   data         {Object[]}
 *   areas        {Array<{ dataKey, label?, color?, fillOpacity? }>}
 *   xKey         {string}   default 'date'
 *   height       {number}
 *   formatValue  {(v: number) => string}
 */
export default function AreaChart({
  data = [],
  areas = [],
  xKey = 'date',
  height = CHART_HEIGHT_MD,
  formatValue,
}) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <RechartsArea data={data} margin={{ top: 4, right: 8, left: -12, bottom: 0 }}>
        <defs>
          {areas.map(({ dataKey, color }, i) => {
            const c = color ?? CHART_PALETTE[i % CHART_PALETTE.length]
            return (
              <linearGradient key={dataKey} id={`grad-${dataKey}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%"  stopColor={c} stopOpacity={0.15} />
                <stop offset="95%" stopColor={c} stopOpacity={0}    />
              </linearGradient>
            )
          })}
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke={CHART_GRID_COLOR} />
        <XAxis
          dataKey={xKey}
          tick={{ fontSize: CHART_AXIS_FONT_SIZE, fill: CHART_AXIS_COLOR }}
          axisLine={false}
          tickLine={false}
        />
        <YAxis
          tick={{ fontSize: CHART_AXIS_FONT_SIZE, fill: CHART_AXIS_COLOR }}
          axisLine={false}
          tickLine={false}
          tickFormatter={formatValue}
        />
        <Tooltip content={<ChartTooltip formatValue={formatValue} />} />
        {areas.map(({ dataKey, label, color }, i) => {
          const c = color ?? CHART_PALETTE[i % CHART_PALETTE.length]
          return (
            <Area
              key={dataKey}
              type="monotone"
              dataKey={dataKey}
              name={label ?? dataKey}
              stroke={c}
              strokeWidth={2}
              fill={`url(#grad-${dataKey})`}
              dot={false}
              activeDot={{ r: 4, strokeWidth: 0 }}
            />
          )
        })}
      </RechartsArea>
    </ResponsiveContainer>
  )
}
