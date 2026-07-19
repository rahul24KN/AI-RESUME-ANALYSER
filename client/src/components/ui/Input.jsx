import React from "react";

const Input = React.forwardRef(({
  label,
  name,
  type = "text",
  placeholder,
  error,
  icon: Icon,
  className = "",
  ...props
}, ref) => {
  return (
    <div className="space-y-1.5 w-full">
      {label && (
        <label className="block text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wide">
          {label}
        </label>
      )}
      <div className="relative">
        {Icon && (
          <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-400">
            <Icon className="w-4 h-4" />
          </span>
        )}
        <input
          ref={ref}
          name={name}
          type={type}
          placeholder={placeholder}
          className={`
            w-full bg-slate-50 dark:bg-slate-950/60 border rounded-xl py-2.5 text-xs sm:text-sm focus:outline-none focus:border-primary-500 text-slate-800 dark:text-white placeholder-slate-400/80 transition-colors
            ${Icon ? "pl-10" : "pl-4"}
            ${error ? "border-rose-500/60 focus:border-rose-500" : "border-slate-200 dark:border-slate-850"}
            ${className}
          `}
          {...props}
        />
      </div>
      {error && (
        <span className="text-[10px] text-rose-500 font-bold block mt-1">
          {error}
        </span>
      )}
    </div>
  );
});

Input.displayName = "Input";
export default Input;
