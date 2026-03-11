interface Stat {
  value: string;
  label: string;
}

interface StatGridProps {
  stats: Stat[];
}

export default function StatGrid({ stats }: StatGridProps) {
  return (
    <div className="my-6 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-lg border border-dark/10 px-3 py-2.5 sm:px-4 sm:py-3"
        >
          <span className="block text-lg font-bold leading-tight text-brand sm:text-xl">
            {stat.value}
          </span>
          <span className="mt-0.5 block text-[11px] font-medium leading-tight text-dark/60 sm:text-xs">
            {stat.label}
          </span>
        </div>
      ))}
    </div>
  );
}
