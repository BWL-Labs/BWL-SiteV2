"use client";

import { useEffect } from "react";
import { flushSync } from "react-dom";
import { useTheme } from "next-themes";

/**
 * The ported markup still carries the original `[data-bw-theme-toggle]` buttons,
 * but their click handler lived in the .dc.html <helmet> script, which the
 * converter skips. This re-attaches that behaviour to next-themes, including the
 * circular view-transition reveal the old site had.
 *
 * Delegated at the document, so it covers every page and any number of buttons
 * without the generated markup having to know about React.
 */
export function ThemeToggleBridge() {
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const btn = (e.target as Element | null)?.closest?.("[data-bw-theme-toggle]");
      if (!btn) return;

      const next = resolvedTheme === "dark" ? "light" : "dark";
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      // startViewTransition needs the DOM to change inside its callback, so the
      // state update has to be flushed synchronously rather than batched
      const apply = () => flushSync(() => setTheme(next));

      const start = (document as any).startViewTransition?.bind(document);
      if (!start || reduce) {
        setTheme(next);
        return;
      }

      const r = btn.getBoundingClientRect();
      const x = r.left + r.width / 2;
      const y = r.top + r.height / 2;
      const end = Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y)
      );

      const vt = start(apply);
      // a second click supersedes the first; .ready rejects and would surface as
      // an unhandled rejection, so swallow that specific abort
      vt.ready.then(() => {
        document.documentElement.animate(
          {
            clipPath: [
              `circle(0px at ${x}px ${y}px)`,
              `circle(${end}px at ${x}px ${y}px)`,
            ],
          },
          {
            duration: 640,
            easing: "cubic-bezier(.2,.7,.2,1)",
            pseudoElement: "::view-transition-new(root)",
          }
        );
      }).catch(() => {});
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [resolvedTheme, setTheme]);

  return null;
}
