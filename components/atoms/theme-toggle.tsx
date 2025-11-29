"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/atoms/button";
import { useIsMounted } from "@/hooks/use-is-mounted";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const mounted = useIsMounted();

  if (!mounted) {
    return (
      <Button variant="outline" aria-label="Toggle theme" disabled>
        <Sun className="h-4 w-4" />
      </Button>
    );
  }

  const isDark = theme === "dark";

  return (
    <Button
      type="button"
      variant="outline"
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="gap-2"
    >
      {isDark ? (
        <>
          <Sun className="h-4 w-4" /> Light
        </>
      ) : (
        <>
          <Moon className="h-4 w-4" /> Dark
        </>
      )}
    </Button>
  );
}

