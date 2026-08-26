"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

/**
 * The .dc.html site keyed dark mode off `data-bw-theme="dark"` on <html>, and
 * every brand token in brand.css still does. Binding next-themes to the same
 * attribute means the ported markup works unchanged.
 */
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="data-bw-theme"
      defaultTheme="light"
      enableSystem={false}
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  );
}
