import { motion } from "framer-motion";

export default function ATSScoreCard({ score = 0, label = "Overall ATS Score" }) {
  // SVG circular properties
  const radius = 60;
  const strokeWidth = 10;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (score / 100) * circumference;

  // Determine feedback color
  const getColor = () => {
    if (score >= 80) return "text-emerald-500 stroke-emerald-500";
    if (score >= 60) return "text-amber-500 stroke-amber-500";
    return "text-rose-500 stroke-rose-500";
  };

  const getBackgroundCircleColor = () => {
    return "stroke-slate-100 dark:stroke-slate-800";
  };

  const getGradientColors = () => {
    if (score >= 80) return ["#10B981", "#059669"]; // Emerald
    if (score >= 60) return ["#F59E0B", "#D97706"]; // Amber
    return ["#EF4444", "#DC2626"]; // Rose
  };

  const [colorStart, colorEnd] = getGradientColors();

  return (
    <div className="flex flex-col items-center justify-center border rounded-2xl bg-white dark:bg-slate-900 border-slate-200/60 dark:border-slate-800 p-6 shadow-sm">
      <h3 className="text-sm font-bold tracking-wider text-slate-400 dark:text-slate-500 uppercase mb-4">
        {label}
      </h3>

      <div className="relative flex items-center justify-center w-36 h-36">
        {/* SVG Circular Ring */}
        <svg className="w-full h-full transform -rotate-90">
          <defs>
            <linearGradient id={`atsGrad-${label.replace(/\s+/g, "")}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={colorStart} />
              <stop offset="100%" stopColor={colorEnd} />
            </linearGradient>
          </defs>
          {/* Track Circle */}
          <circle
            className={getBackgroundCircleColor()}
            strokeWidth={strokeWidth}
            fill="transparent"
            r={radius}
            cx="72"
            cy="72"
          />
          {/* Progressive Circle */}
          <motion.circle
            stroke={`url(#atsGrad-${label.replace(/\s+/g, "")})`}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            strokeLinecap="round"
            fill="transparent"
            r={radius}
            cx="72"
            cy="72"
          />
        </svg>

        {/* Floating Centered Percentage */}
        <div className="absolute flex flex-col items-center justify-center">
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className={`text-3xl font-extrabold ${getColor().split(" ")[0]}`}
          >
            {score}%
          </motion.span>
          <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 tracking-wide uppercase mt-0.5">
            {score >= 80 ? "Optimal" : score >= 60 ? "Average" : "Weak"}
          </span>
        </div>
      </div>

      {/* Mini details list */}
      <div className="mt-4 text-center">
        <p className="text-xs text-slate-500 dark:text-slate-400 font-medium max-w-[180px]">
          {score >= 80 
            ? "Your resume matches the core target metrics exceptionally well."
            : score >= 60 
            ? "Good base alignment. Increase matching keywords to cross 80%."
            : "Significant skill mismatch detected. Add target capabilities."
          }
        </p>
      </div>
    </div>
  );
}
