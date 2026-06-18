import {
  LineChart as RechartsLine,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
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
 * LineChart
 * ─────────
 * Reusable Recharts line chart wrapper.
 *
 * Props:
 *   data          {Object[]}              array of data points
 *   lines         {Array<{ dataKey, label?, color? }>}
 *   xKey          {string}                default 'date'
 *   height        {number}                px
 *   formatValue   {(v: number) => string} optional axis + tooltip formatter
 */
export default function LineChart({
  data = [],
  lines = [],
  xKey = 'date',
  height = CHART_HEIGHT_MD,
  formatValue,
}) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <RechartsLine data={data} margin={{ top: 4, right: 8, left: -12, bottom: 0 }}>
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
        {lines.length > 1 && <Legend iconType="circle" iconSize={8} />}
        {lines.map(({ dataKey, label, color }, i) => (
          <Line
            key={dataKey}
            type="monotone"
            dataKey={dataKey}
            name={label ?? dataKey}
            stroke={color ?? CHART_PALETTE[i % CHART_PALETTE.length]}
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 4, strokeWidth: 0 }}
          />
        ))}
      </RechartsLine>
    </ResponsiveContainer>
  )
}
