import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";

type Theme = "light" | "dark";

function getSystemTheme(): Theme {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function getStoredTheme(): Theme | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem("theme") as Theme | null;
}

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  if (theme === "dark") {
    root.classList.add("dark");
  } else {
    root.classList.remove("dark");
  }
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(() => {
    // On first render, use stored preference or system default
    return getStoredTheme() ?? getSystemTheme();
  });

  // Apply theme on mount and when it changes
  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  // Listen for system theme changes (only when no stored preference)
  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = (e: MediaQueryListEvent) => {
      if (!getStoredTheme()) {
        const newTheme = e.matches ? "dark" : "light";
        setTheme(newTheme);
      }
    };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("theme", next);
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggle}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className="relative overflow-hidden"
    >
      <Sun className="size-[1.15rem] rotate-0 scale-100 transition-all duration-300 dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute size-[1.15rem] rotate-90 scale-0 transition-all duration-300 dark:rotate-0 dark:scale-100" />
    </Button>
  );
}
