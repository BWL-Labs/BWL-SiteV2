"use client";

import { useEffect } from "react";

/**
 * The header thickens and gains a shadow once content slides under it. That
 * behaviour was written into the homepage's own scroll handler, so the other
 * twelve pages kept a flat bar the whole way down. This runs it everywhere.
 *
 * The homepage still sets the same two properties from its own handler; the
 * values are identical, so the two agree rather than fight.
 */
export function HeaderScrollBridge() {
  useEffect(() => {
    const nav = document.querySelector<HTMLElement>("[data-bw-nav]");
    if (!nav) return;

    let raf = 0;
    let last: string | null = null;

    const apply = () => {
      raf = 0;
      const on = window.scrollY > 40 ? "1" : "0";
      if (on === last) return; // only touch the DOM when the state actually flips
      last = on;
      nav.dataset.bwScrolled = on;
      nav.style.padding = on === "1" ? "10px 0" : "14px 0";
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(apply);
    };

    apply();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return null;
}
