"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion, useSpring, useTransform } from "motion/react";
import { FILL, GOLD, INK_2, INK_3, LINE, PAPER, SPRING, SPRING_SOFT, display, mono, screenPad, solidButton } from "./tokens";

/* An interactive B2B research report. One segmented filter re-renders a
   headline figure and a single-axis bar chart; a toggle adds last year's
   series; tapping a bar reveals its delta. Sample data, labelled as such. */

const SEGMENTS = ["SaaS", "Fintech", "Industrial"] as const;
type Segment = (typeof SEGMENTS)[number];

const CHANNELS = ["Peer referrals", "AI search", "Review sites", "Vendor site"];

const DATA: Record<Segment, { shortlist: number; now: number[]; prior: number[] }> = {
  SaaS: { shortlist: 71, now: [62, 48, 41, 33], prior: [58, 29, 44, 38] },
  Fintech: { shortlist: 64, now: [55, 39, 36, 41], prior: [51, 21, 39, 44] },
  Industrial: { shortlist: 52, now: [47, 27, 22, 45], prior: [45, 12, 24, 47] },
};

/* Two categorical series on a dark surface. Both steps validated with the
   dataviz palette script (lightness band, chroma, CVD separation, contrast);
   the brand gold itself is too light to be a mark here, so the chart uses a
   darker step of the same hue and the UI keeps the brand gold for accents. */
const NOW = "#B8871C";
const PRIOR = "#B9431C";

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const reduce = useReducedMotion();
  const spring = useSpring(value, SPRING_SOFT);
  useEffect(() => {
    if (reduce) spring.jump(value);
    else spring.set(value);
  }, [value, reduce, spring]);
  const text = useTransform(spring, (v) => `${Math.round(v)}${suffix}`);
  return <motion.span>{text}</motion.span>;
}

export function B2BReport({ onEngage }: { onEngage?: () => void }) {
  const reduce = useReducedMotion();
  const [segment, setSegment] = useState<Segment>("SaaS");
  const [compare, setCompare] = useState(false);
  const [picked, setPicked] = useState<number | null>(null);
  const d = DATA[segment];
  const max = 70;

  return (
    <div style={screenPad} aria-label="Interactive B2B report demo">
      <span style={{ ...mono(8), color: GOLD }}>2026 buying report</span>
      <h3 style={{ margin: "6px 0 0", ...display(14, 800), lineHeight: 1.1, letterSpacing: "-.03em" }}>
        Where buyers research first
      </h3>

      {/* Segment filter */}
      <div
        role="tablist"
        aria-label="Industry"
        style={{ display: "flex", marginTop: 10, padding: 3, borderRadius: 999, background: FILL, border: `1px solid ${LINE}`, position: "relative" }}
      >
        {SEGMENTS.map((s) => {
          const on = s === segment;
          return (
            <button
              key={s}
              role="tab"
              type="button"
              aria-selected={on}
              onClick={() => { onEngage?.(); setSegment(s); setPicked(null); }}
              style={{
                appearance: "none",
                border: 0,
                background: "transparent",
                flex: 1,
                position: "relative",
                padding: "6px 0",
                borderRadius: 999,
                cursor: "pointer",
                color: on ? "#080705" : INK_2,
                ...mono(8, ".1em"),
                zIndex: 1,
              }}
            >
              {on && (
                <motion.span
                  layoutId="report-segment"
                  transition={reduce ? { duration: 0 } : SPRING}
                  style={{ position: "absolute", inset: 0, borderRadius: 999, background: PAPER, zIndex: -1 }}
                />
              )}
              {s}
            </button>
          );
        })}
      </div>

      {/* Headline figure */}
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginTop: 12 }}>
        <div>
          <span style={{ ...display(30, 900) }}>
            <Counter value={d.shortlist} suffix="%" />
          </span>
          <p style={{ margin: "4px 0 0", fontSize: 9.5, lineHeight: 1.3, color: INK_2, maxWidth: "18ch" }}>
            shortlist a vendor before the first call
          </p>
        </div>
        <button
          type="button"
          aria-pressed={compare}
          onClick={() => { onEngage?.(); setCompare((c) => !c); }}
          style={{
            appearance: "none",
            border: `1px solid ${compare ? GOLD : LINE}`,
            background: compare ? "rgba(230,175,46,.12)" : "transparent",
            color: compare ? GOLD : INK_2,
            borderRadius: 999,
            padding: "6px 9px",
            cursor: "pointer",
            ...mono(7.5, ".12em"),
            whiteSpace: "nowrap",
          }}
        >
          vs 2025
        </button>
      </div>

      {/* Legend: only when two series are on screen */}
      <div style={{ height: 12, marginTop: 8, display: "flex", gap: 12, alignItems: "center" }}>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 5, ...mono(7.5), color: INK_3 }}>
          <span style={{ width: 8, height: 8, borderRadius: 2, background: NOW, display: "block" }} />2026
        </span>
        <AnimatePresence>
          {compare && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{ display: "inline-flex", alignItems: "center", gap: 5, ...mono(7.5), color: INK_3 }}
            >
              <span style={{ width: 8, height: 8, borderRadius: 2, background: PRIOR, display: "block" }} />2025
            </motion.span>
          )}
        </AnimatePresence>
      </div>

      {/* Chart: one axis, horizontal bars, 2px surface gap between series */}
      <div role="img" aria-label={`Research channels used by ${segment} buyers, percent`} style={{ display: "flex", flexDirection: "column", gap: 5, marginTop: 4 }}>
        {CHANNELS.map((label, i) => {
          const v = d.now[i];
          const p = d.prior[i];
          const on = picked === i;
          const delta = v - p;
          return (
            <button
              key={label}
              type="button"
              onClick={() => { onEngage?.(); setPicked(on ? null : i); }}
              aria-label={`${label}: ${v} percent${compare ? `, ${p} percent in 2025` : ""}`}
              style={{ appearance: "none", border: 0, background: "transparent", padding: 0, cursor: "pointer", textAlign: "left", color: PAPER, display: "block" }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                <span style={{ fontSize: 9.5, lineHeight: 1.2, fontWeight: 500, color: on ? PAPER : INK_2 }}>{label}</span>
                <span style={{ ...mono(8.5, ".04em"), lineHeight: 1.2, color: on ? GOLD : INK_2, fontVariantNumeric: "tabular-nums" }}>
                  {on && compare ? `${delta > 0 ? "+" : ""}${delta} pts` : `${v}%`}
                </span>
              </div>
              <div style={{ marginTop: 3, display: "flex", flexDirection: "column", gap: 2 }}>
                <span style={{ display: "block", height: 7, borderRadius: 4, background: FILL, overflow: "hidden" }}>
                  <motion.span
                    style={{ display: "block", height: "100%", borderRadius: 4, background: NOW, opacity: picked === null || on ? 1 : 0.45 }}
                    animate={{ width: `${(v / max) * 100}%` }}
                    transition={reduce ? { duration: 0 } : { ...SPRING_SOFT, delay: i * 0.03 }}
                  />
                </span>
                <AnimatePresence initial={false}>
                  {compare && (
                    <motion.span
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 4, opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={reduce ? { duration: 0 } : SPRING}
                      style={{ display: "block", borderRadius: 2, background: FILL, overflow: "hidden" }}
                    >
                      <motion.span
                        style={{ display: "block", height: "100%", borderRadius: 2, background: PRIOR, opacity: picked === null || on ? 1 : 0.45 }}
                        animate={{ width: `${(p / max) * 100}%` }}
                        transition={reduce ? { duration: 0 } : SPRING_SOFT}
                      />
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>
            </button>
          );
        })}
      </div>

      <div style={{ marginTop: "auto", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8 }}>
        <span style={{ ...mono(7.5), color: INK_3 }}>Sample data · n=1,240</span>
        <button type="button" style={{ ...solidButton, padding: "7px 11px", fontSize: 10.5 }} onClick={onEngage}>
          Full report →
        </button>
      </div>
    </div>
  );
}
