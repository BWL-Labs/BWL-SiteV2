import type { Metadata } from "next";
import { Barlow_Condensed, Inter, JetBrains_Mono, Anton } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggleBridge } from "@/components/theme-toggle-bridge";
import "./globals.css";

/* self-hosted at build time by next/font — the brand kit asks production not to
   hit Google's CDN directly, and this satisfies that while keeping the stack */
const display = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  variable: "--font-display",
});
const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});
const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});
const anton = Anton({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-anton",
});

export const metadata: Metadata = {
  title: "Blackware Labs — A micro-product studio for anyone who has to be chosen",
  description:
    "Brand design, websites and portfolios, interactive marketing assets, and B2B sales activation. Dubai · New Delhi.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${display.variable} ${body.variable} ${mono.variable} ${anton.variable}`}
    >
      <body className="font-[family-name:var(--font-body)]">
        <ThemeProvider>
          <ThemeToggleBridge />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
