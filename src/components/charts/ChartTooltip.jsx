/**
 * ChartTooltip
 * ────────────
 * Shared custom tooltip used by LineChart, BarChart, and AreaChart.
 * Recharts passes { active, payload, label } automatically.
 *
 * Props:
 *   formatValue  {(v: number) => string}  optional formatter
 */
export default function ChartTooltip({ active, payload, label, formatValue }) {
  if (!active || !payload?.length) return null

  return (
    <div className="bg-white border border-surface-border rounded-lg shadow-card-md px-3 py-2 text-sm">
      {label && (
        <p className="text-xs font-medium text-slate-500 mb-1.5">{label}</p>
      )}
      {payload.map(({ name, value, color }) => (
        <div key={name} className="flex items-center gap-2">
          <span
            className="w-2 h-2 rounded-full shrink-0"
            style={{ backgroundColor: color }}
          />
          <span className="text-slate-500">{name}:</span>
          <span className="font-semibold text-slate-800">
            {formatValue ? formatValue(value) : value?.toLocaleString()}
          </span>
        </div>
      ))}
    </div>
  )
}
