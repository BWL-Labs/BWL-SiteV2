"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  /* theme is only known client-side; render a stable placeholder until then so
     server and client markup agree */
  useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Switch between day and night"
      className="bw-press bw-press--sm grid size-10 place-items-center rounded-full border border-[var(--bw-toggle-bd)] text-[var(--bw-fg)] transition-colors hover:border-[var(--bw-gold)] hover:text-[var(--bw-gold)]"
    >
      {mounted ? (
        isDark ? <Moon size={18} strokeWidth={1.5} /> : <Sun size={18} strokeWidth={1.5} />
      ) : (
        <span className="size-[18px]" />
      )}
    </button>
  );
}
