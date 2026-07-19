import Button from "./Button";

export default function EmptyState({
  title,
  description,
  icon: Icon,
  actionText,
  onAction,
  className = ""
}) {
  return (
    <div className={`flex flex-col items-center justify-center text-center p-8 border border-dashed rounded-2xl bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-805 shadow-sm min-h-[300px] ${className}`}>
      {Icon && (
        <div className="p-4 rounded-full bg-primary-500/10 text-primary-500 mb-4 animate-pulse">
          <Icon className="w-8 h-8" />
        </div>
      )}
      <h3 className="text-base font-extrabold text-slate-800 dark:text-slate-150">
        {title}
      </h3>
      <p className="text-xs text-slate-450 dark:text-slate-505 font-medium max-w-sm mt-1 mb-6 leading-relaxed">
        {description}
      </p>
      {actionText && onAction && (
        <Button onClick={onAction} variant="primary" size="md">
          {actionText}
        </Button>
      )}
    </div>
  );
}
