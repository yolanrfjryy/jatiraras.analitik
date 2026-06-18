import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import ChartTooltip from './ChartTooltip'
import { CHART_HEIGHT_MD, CHART_PALETTE } from '@/config/chartTheme'

/**
 * DonutChart
 * ──────────
 * Reusable donut / pie chart for split/breakdown data.
 *
 * Props:
 *   data          {Array<{ name: string, value: number, color?: string }>}
 *   height        {number}  default 260
 *   innerRadius   {number}  default 65  (set to 0 for full pie)
 *   formatValue   {(v: number) => string}
 */
export default function DonutChart({
  data = [],
  height = CHART_HEIGHT_MD,
  innerRadius = 65,
  formatValue,
}) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={innerRadius}
          outerRadius={95}
          paddingAngle={3}
          dataKey="value"
        >
          {data.map(({ name, color }, i) => (
            <Cell
              key={name}
              fill={color ?? CHART_PALETTE[i % CHART_PALETTE.length]}
            />
          ))}
        </Pie>
        <Tooltip content={<ChartTooltip formatValue={formatValue} />} />
        <Legend iconType="circle" iconSize={8} />
      </PieChart>
    </ResponsiveContainer>
  )
}
