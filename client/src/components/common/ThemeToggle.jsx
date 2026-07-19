import { Sun, Moon } from "lucide-react";
import { useAuthStore } from "../../store/authStore";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useAuthStore();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary-500"
      aria-label="Toggle Theme Mode"
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === "dark" ? 180 : 0, scale: [0.8, 1.1, 1] }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      >
        {theme === "dark" ? (
          <Sun className="w-5 h-5 text-amber-400" />
        ) : (
          <Moon className="w-5 h-5 text-indigo-600" />
        )}
      </motion.div>
    </button>
  );
}
