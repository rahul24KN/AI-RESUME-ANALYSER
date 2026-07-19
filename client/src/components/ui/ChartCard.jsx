import Card from "./Card";

export default function ChartCard({
  title,
  subtitle,
  rightElement,
  children,
  loading = false,
  className = ""
}) {
  return (
    <Card className={`flex flex-col space-y-4 ${className}`}>
      {/* Header */}
      {(title || rightElement) && (
        <div className="flex items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-3">
          <div>
            {title && (
              <h3 className="text-sm font-extrabold text-slate-800 dark:text-slate-100 flex items-center gap-2">
                {title}
              </h3>
            )}
            {subtitle && (
              <p className="text-[10px] text-slate-400 dark:text-slate-500 font-semibold mt-0.5">
                {subtitle}
              </p>
            )}
          </div>
          {rightElement && <div>{rightElement}</div>}
        </div>
      )}

      {/* Content Chart Panel */}
      <div className="flex-1 w-full min-h-[240px] relative flex items-center justify-center">
        {loading ? (
          <div className="absolute inset-0 flex items-center justify-center bg-slate-50/10 dark:bg-slate-900/10 backdrop-blur-sm">
            <div className="w-8 h-8 rounded-full border-2 border-primary-500/20 border-t-primary-500 animate-spin" />
          </div>
        ) : null}
        <div className={`w-full h-full flex items-center justify-center ${loading ? "opacity-30" : ""}`}>
          {children}
        </div>
      </div>
    </Card>
  );
}
