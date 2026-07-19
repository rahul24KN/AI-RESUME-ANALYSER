import Card from "./Card";

export default function StatCard({
  label,
  value,
  icon: Icon,
  trend,
  trendType = "neutral", // positive, negative, neutral
  loading = false,
  className = ""
}) {
  const trendColors = {
    positive: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20",
    negative: "text-rose-500 bg-rose-500/10 border-rose-500/20",
    neutral: "text-slate-500 bg-slate-150 dark:bg-slate-800 border-slate-200 dark:border-slate-800"
  };

  return (
    <Card className={`flex items-center gap-4 ${className}`}>
      {Icon && (
        <div className="p-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/80 text-slate-500 dark:text-slate-400 shrink-0">
          <Icon className="w-5.5 h-5.5" />
        </div>
      )}
      
      <div className="space-y-0.5 flex-1 min-w-0">
        <span className="block text-[10px] font-bold text-slate-400 dark:text-slate-505 uppercase tracking-wider truncate">
          {label}
        </span>
        
        {loading ? (
          <div className="w-20 h-7 bg-slate-250 dark:bg-slate-800 animate-pulse rounded-md mt-1" />
        ) : (
          <div className="flex items-baseline gap-2 flex-wrap">
            <span className="text-2xl font-black text-slate-800 dark:text-slate-100">
              {value ?? "—"}
            </span>
            {trend && (
              <span className={`text-[9px] font-extrabold uppercase px-1.5 py-0.5 rounded border ${trendColors[trendType]}`}>
                {trend}
              </span>
            )}
          </div>
        )}
      </div>
    </Card>
  );
}
