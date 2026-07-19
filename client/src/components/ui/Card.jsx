export default function Card({ children, className = "", onClick, glass = false }) {
  return (
    <div
      onClick={onClick}
      className={`
        border rounded-2xl p-5 shadow-sm bg-white dark:bg-slate-900 border-slate-200/60 dark:border-slate-800/80 text-slate-850 dark:text-slate-100 transition-all
        ${glass ? "glass-panel bg-white/70 dark:bg-slate-900/60 backdrop-blur-md" : ""}
        ${onClick ? "hover:shadow-md hover:border-primary-500/20 hover:-translate-y-0.5 cursor-pointer" : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
