import { Check, AlertTriangle } from "lucide-react";

export default function SkillBadge({ name, score, type = "normal", showIcon = false }) {
  const getBadgeStyle = () => {
    switch (type) {
      case "matched":
        return "bg-emerald-500/10 border-emerald-500/20 text-emerald-600 dark:text-emerald-400";
      case "missing":
        return "bg-rose-500/10 border-rose-500/20 text-rose-600 dark:text-rose-400";
      case "high-criticality":
        return "bg-purple-500/10 border-purple-500/20 text-purple-600 dark:text-purple-400 font-semibold";
      default:
        return "bg-slate-500/10 border-slate-500/20 text-slate-700 dark:text-slate-300";
    }
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium border rounded-full ${getBadgeStyle()}`}
    >
      {showIcon && type === "matched" && <Check className="w-3.5 h-3.5" />}
      {showIcon && type === "missing" && <AlertTriangle className="w-3.5 h-3.5" />}
      {name}
      {score !== undefined && (
        <span className="ml-1 px-1 py-0.5 text-[10px] rounded bg-white/20 dark:bg-black/20 font-bold">
          {score}%
        </span>
      )}
    </span>
  );
}
