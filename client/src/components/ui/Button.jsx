import { Spinner } from "../common/Loader";

export default function Button({
  children,
  onClick,
  type = "button",
  variant = "primary",
  size = "md",
  disabled = false,
  loading = false,
  fullWidth = false,
  className = ""
}) {
  const baseStyles = "inline-flex items-center justify-center font-bold rounded-xl transition-all active:scale-[0.98] select-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-primary-600 hover:bg-primary-500 text-white shadow-md shadow-primary-500/10 hover:shadow-primary-500/20 focus:ring-primary-500",
    secondary: "bg-slate-100 hover:bg-slate-200 text-slate-700 dark:bg-slate-800 dark:hover:bg-slate-750 dark:text-slate-200 focus:ring-slate-500 border border-slate-200 dark:border-slate-800",
    outline: "border border-slate-300 hover:bg-slate-50 dark:border-slate-750 dark:hover:bg-slate-850 text-slate-700 dark:text-slate-200 focus:ring-primary-500",
    danger: "bg-rose-600 hover:bg-rose-500 text-white shadow-md shadow-rose-500/10 focus:ring-rose-500"
  };

  const sizes = {
    sm: "px-3.5 py-1.5 text-xs",
    md: "px-4.5 py-2.5 text-xs sm:text-sm",
    lg: "px-6 py-3.5 text-sm sm:text-base"
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`
        ${baseStyles}
        ${variants[variant]}
        ${sizes[size]}
        ${fullWidth ? "w-full flex" : ""}
        ${disabled || loading ? "opacity-60 cursor-not-allowed active:scale-100" : ""}
        ${className}
      `}
    >
      {loading && <Spinner size="sm" className="mr-2" />}
      {children}
    </button>
  );
}
