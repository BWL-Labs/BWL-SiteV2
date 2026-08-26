import { WorldMap } from "@/components/ui/world-map";
import { ThemeToggle } from "@/components/theme-toggle";

const ROUTES: { label: string; from: [number, number]; to: [number, number] }[] = [
  { label: "Dubai → New Delhi", from: [25.2048, 55.2708], to: [28.6139, 77.209] },
  { label: "Dubai → London", from: [25.2048, 55.2708], to: [51.5074, -0.1278] },
  { label: "New Delhi → Singapore", from: [28.6139, 77.209], to: [1.3521, 103.8198] },
  { label: "Dubai → New York", from: [25.2048, 55.2708], to: [40.7128, -74.006] },
];

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      <header className="flex items-center justify-between px-6 py-5 md:px-10">
        <span className="font-[family-name:var(--font-display)] text-2xl font-black tracking-tight">
          BW
        </span>
        <ThemeToggle />
      </header>

      <section className="mx-auto max-w-7xl px-6 pt-10 md:px-10">
        <p className="flex items-center gap-2 font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.2em] text-[var(--accent)]">
          <span aria-hidden className="inline-block size-2 bg-[var(--accent)]" />
          Idea → Pipeline
        </p>

        <h1 className="mt-6 max-w-[14ch] font-[family-name:var(--font-anton)] text-5xl leading-[0.9] tracking-tight md:text-7xl">
          Working from Dubai and New Delhi.
        </h1>

        <p className="mt-6 max-w-[52ch] text-base leading-relaxed text-[var(--fg-mute)]">
          A micro-product studio for anyone who has to be chosen. Brand design,
          websites and portfolios, interactive marketing assets, and B2B sales
          activation.
        </p>
      </section>

      <section className="mx-auto mt-12 max-w-7xl px-6 pb-24 md:px-10">
        <WorldMap
          arcs={ROUTES.map((r) => ({
            start: { lat: r.from[0], lng: r.from[1] },
            end: { lat: r.to[0], lng: r.to[1] },
          }))}
        />
      </section>
    </main>
  );
}
