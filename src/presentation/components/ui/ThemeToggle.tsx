import React from "react";

interface ThemeToggleProps {
  theme: "light" | "dark";
  toggleTheme: () => void;
  mounted: boolean;
}

export function ThemeToggle({ theme, toggleTheme, mounted }: ThemeToggleProps) {
  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-xl glass border border-slate-200/40 dark:border-slate-800/40 opacity-50" />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="p-2.5 rounded-xl glass hover:bg-slate-200/50 dark:hover:bg-slate-800/50 border border-slate-200/40 dark:border-slate-800/40 transition-all cursor-pointer text-slate-700 dark:text-slate-200"
    >
      {theme === "light" ? (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      ) : (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
        </svg>
      )}
    </button>
  );
}
