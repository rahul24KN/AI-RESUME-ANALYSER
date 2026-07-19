import { motion } from "framer-motion";

export function Spinner({ size = "md" }) {
  const sizeClasses = {
    sm: "w-6 h-6 border-2",
    md: "w-10 h-10 border-3",
    lg: "w-16 h-16 border-4"
  };

  return (
    <div className="flex items-center justify-center p-4">
      <div
        className={`${sizeClasses[size]} rounded-full border-t-primary-500 border-r-transparent border-b-primary-200 border-l-transparent animate-spin`}
      />
    </div>
  );
}

export function ScreenLoader() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-900/80 backdrop-blur-md">
      <div className="relative flex items-center justify-center">
        <div className="w-16 h-16 rounded-full border-4 border-primary-500/30 border-t-primary-500 animate-spin" />
        <div className="absolute w-24 h-24 rounded-full border border-cyber-cyan/20 cyber-loader" />
      </div>
      <motion.p
        initial={{ opacity: 0.5 }}
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="mt-6 text-sm font-semibold tracking-wider text-slate-300 uppercase"
      >
        Synchronizing Platform Intelligence...
      </motion.p>
    </div>
  );
}

export function CardSkeleton() {
  return (
    <div className="p-5 border rounded-xl bg-white/5 border-slate-200/50 dark:border-slate-800 animate-pulse">
      <div className="w-1/3 h-4 rounded bg-slate-200 dark:bg-slate-700" />
      <div className="w-full h-8 mt-4 rounded bg-slate-200 dark:bg-slate-700" />
      <div className="w-2/3 h-4 mt-3 rounded bg-slate-200 dark:bg-slate-700" />
    </div>
  );
}

export function TableSkeleton({ rows = 4 }) {
  return (
    <div className="w-full space-y-3">
      {Array.from({ length: rows }).map((_, i) => (
        <div key={i} className="flex space-x-4 animate-pulse">
          <div className="flex-1 py-1 space-y-4">
            <div className="grid grid-cols-4 gap-4">
              <div className="h-4 col-span-1 rounded bg-slate-200 dark:bg-slate-700" />
              <div className="h-4 col-span-2 rounded bg-slate-200 dark:bg-slate-700" />
              <div className="h-4 col-span-1 rounded bg-slate-200 dark:bg-slate-700" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
