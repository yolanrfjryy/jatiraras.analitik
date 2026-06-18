import {
  BarChart as RechartsBar,
  Bar,
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
 * BarChart
 * ────────
 * Reusable bar chart — supports horizontal and vertical layouts.
 *
 * Props:
 *   data         {Object[]}
 *   bars         {Array<{ dataKey, label?, color? }>}
 *   xKey         {string}                 default 'name'
 *   height       {number}
 *   layout       {'horizontal'|'vertical'} default 'horizontal'
 *   formatValue  {(v: number) => string}
 */
export default function BarChart({
  data = [],
  bars = [],
  xKey = 'name',
  height = CHART_HEIGHT_MD,
  layout = 'horizontal',
  formatValue,
}) {
  const isVertical = layout === 'vertical'

  return (
    <ResponsiveContainer width="100%" height={height}>
      <RechartsBar
        data={data}
        layout={layout}
        margin={{ top: 4, right: 8, left: isVertical ? 60 : -12, bottom: 0 }}
        barCategoryGap="35%"
      >
        <CartesianGrid
          strokeDasharray="3 3"
          stroke={CHART_GRID_COLOR}
          horizontal={!isVertical}
          vertical={isVertical}
        />
        {isVertical ? (
          <>
            <XAxis
              type="number"
              tick={{ fontSize: CHART_AXIS_FONT_SIZE, fill: CHART_AXIS_COLOR }}
              axisLine={false} tickLine={false}
              tickFormatter={formatValue}
            />
            <YAxis
              type="category"
              dataKey={xKey}
              width={56}
              tick={{ fontSize: CHART_AXIS_FONT_SIZE, fill: CHART_AXIS_COLOR }}
              axisLine={false} tickLine={false}
            />
          </>
        ) : (
          <>
            <XAxis
              dataKey={xKey}
              tick={{ fontSize: CHART_AXIS_FONT_SIZE, fill: CHART_AXIS_COLOR }}
              axisLine={false} tickLine={false}
            />
            <YAxis
              tick={{ fontSize: CHART_AXIS_FONT_SIZE, fill: CHART_AXIS_COLOR }}
              axisLine={false} tickLine={false}
              tickFormatter={formatValue}
            />
          </>
        )}
        <Tooltip content={<ChartTooltip formatValue={formatValue} />} />
        {bars.length > 1 && <Legend iconType="square" iconSize={8} />}
        {bars.map(({ dataKey, label, color }, i) => (
          <Bar
            key={dataKey}
            dataKey={dataKey}
            name={label ?? dataKey}
            fill={color ?? CHART_PALETTE[i % CHART_PALETTE.length]}
            radius={isVertical ? [0, 4, 4, 0] : [4, 4, 0, 0]}
          />
        ))}
      </RechartsBar>
    </ResponsiveContainer>
  )
}
