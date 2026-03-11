
interface DataPoint {
  name: string;
  value: number;
}

interface HorizontalBarChartProps {
  data: DataPoint[];
  barColor?: string;
}

export default function HorizontalBarChart({
  data,
  barColor = "#F7752C",
}: HorizontalBarChartProps) {
  const maxValue = Math.max(...data.map((d) => d.value));

  return (
    <div className="my-6 w-full">
      {data.map((entry, index) => (
        <div key={entry.name} className={index > 0 ? "mt-3" : ""}>
          <div className="flex items-baseline justify-between text-[13px]">
            <span className="font-medium text-dark">{entry.name}</span>
            <span className="font-semibold text-dark">
              {entry.value.toLocaleString()}
            </span>
          </div>
          <div className="mt-1 h-5 w-full rounded-md bg-dark/5">
            <div
              className="h-full rounded-md"
              style={{
                width: `${(entry.value / maxValue) * 100}%`,
                backgroundColor: index === 0 ? barColor : `${barColor}99`,
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
