"use client";

import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

interface DonutChartProps {
  trainRides: number;
  busRides: number;
}

export default function DonutChart({ trainRides, busRides }: DonutChartProps) {
  const total = trainRides + busRides;
  const trainPct = Math.round((trainRides / total) * 100);
  const busPct = 100 - trainPct;

  const data = [
    { name: "Train", value: trainRides },
    { name: "Bus", value: busRides },
  ];

  const COLORS = ["#F7752C", "#FFD4B8"];

  return (
    <div className="my-6 flex w-full flex-col items-center gap-4 sm:flex-row sm:items-center sm:justify-center sm:gap-10">
      <div className="relative">
        <ResponsiveContainer width={180} height={180}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={55}
              outerRadius={85}
              paddingAngle={2}
              dataKey="value"
              startAngle={90}
              endAngle={-270}
              stroke="none"
            >
              {data.map((entry, index) => (
                <Cell key={entry.name} fill={COLORS[index]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-2xl font-bold text-dark">
            {total.toLocaleString()}
          </span>
          <span className="text-xs text-dark/50">rides</span>
        </div>
      </div>
      <div className="flex gap-6 sm:flex-col sm:gap-3">
        <div className="flex items-center gap-2.5">
          <span
            className="inline-block h-3 w-3 rounded-full"
            style={{ backgroundColor: COLORS[0] }}
          />
          <span className="text-sm font-medium text-dark">
            Train {trainPct}%
          </span>
        </div>
        <div className="flex items-center gap-2.5">
          <span
            className="inline-block h-3 w-3 rounded-full"
            style={{ backgroundColor: COLORS[1] }}
          />
          <span className="text-sm font-medium text-dark">Bus {busPct}%</span>
        </div>
      </div>
    </div>
  );
}
