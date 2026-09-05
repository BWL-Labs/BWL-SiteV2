"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion, useSpring, useTransform } from "motion/react";
import { FILL, GOLD, INK_2, INK_3, LINE, PAPER, SPRING_SOFT, display, ghostButton, mono, screenPad } from "./tokens";

/* A pipeline ROI calculator. Three sliders drive an animated pipeline figure,
   the uplift over an industry-median baseline, and a payback estimate.
   Baseline and build cost are illustrative and labelled as such. */

const BASELINE_DEMO_RATE = 1.1; // % of visitors booking a demo, illustrative median
const CLOSE_RATE = 0.28;
const BUILD_COST = 14000;

function money(n: number) {
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 10_000) return `$${Math.round(n / 1000)}k`;
  return `$${Math.round(n).toLocaleString()}`;
}

function AnimatedMoney({ value }: { value: number }) {
  const reduce = useReducedMotion();
  const spring = useSpring(value, SPRING_SOFT);
  useEffect(() => {
    if (reduce) spring.jump(value);
    else spring.set(value);
  }, [value, reduce, spring]);
  const text = useTransform(spring, (v) => money(v));
  return <motion.span>{text}</motion.span>;
}

type Field = { key: "visitors" | "rate" | "deal"; label: string; min: number; max: number; step: number; fmt: (v: number) => string };

const FIELDS: Field[] = [
  { key: "visitors", label: "Monthly visitors", min: 500, max: 20000, step: 250, fmt: (v) => v.toLocaleString() },
  { key: "rate", label: "Demo rate", min: 0.5, max: 6, step: 0.1, fmt: (v) => `${v.toFixed(1)}%` },
  { key: "deal", label: "Avg deal", min: 2000, max: 50000, step: 500, fmt: (v) => money(v) },
];

export function RoiCalculator({ onEngage }: { onEngage?: () => void }) {
  const [vals, setVals] = useState({ visitors: 6000, rate: 2.4, deal: 12000 });

  const pipeline = vals.visitors * (vals.rate / 100) * CLOSE_RATE * vals.deal;
  const baseline = vals.visitors * (BASELINE_DEMO_RATE / 100) * CLOSE_RATE * vals.deal;
  const uplift = pipeline - baseline;
  const paybackWeeks = uplift > 0 ? Math.max(1, Math.round((BUILD_COST / uplift) * 4.33)) : null;
  const ratio = Math.min(1, baseline / Math.max(pipeline, 1));

  return (
    <div style={screenPad} aria-label="ROI calculator demo">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
        <span style={{ ...mono(8), color: GOLD }}>Pipeline calculator</span>
        <button
          type="button"
          onClick={() => { onEngage?.(); setVals({ visitors: 6000, rate: 2.4, deal: 12000 }); }}
          style={{ ...ghostButton, border: 0, padding: 0, color: INK_3 }}
        >
          Reset
        </button>
      </div>

      {/* Headline */}
      <div style={{ marginTop: 8 }}>
        <span style={{ ...display(30, 900), display: "block" }}>
          <AnimatedMoney value={pipeline} />
        </span>
        <span style={{ ...mono(8), color: INK_2, display: "block", marginTop: 4 }}>new pipeline / month</span>
      </div>

      {/* Before / after, one axis */}
      <div style={{ marginTop: 10, display: "flex", flexDirection: "column", gap: 4 }} role="img" aria-label={`Baseline ${money(baseline)} per month versus ${money(pipeline)} with the new site`}>
        <div style={{ display: "flex", justifyContent: "space-between", gap: 8, ...mono(7.5), color: INK_3 }}>
          <span>Median site {BASELINE_DEMO_RATE}%</span>
          <span style={{ fontVariantNumeric: "tabular-nums" }}>{money(baseline)}</span>
        </div>
        <span style={{ display: "block", height: 7, borderRadius: 4, background: FILL, overflow: "hidden" }}>
          <motion.span
            style={{ display: "block", height: "100%", borderRadius: 4, background: "#B9431C" }}
            animate={{ width: `${ratio * 100}%` }}
            transition={SPRING_SOFT}
          />
        </span>
        <span style={{ display: "block", height: 7, borderRadius: 4, background: "#B8871C" }} />
        <div style={{ display: "flex", justifyContent: "space-between", gap: 8, ...mono(7.5), color: INK_3 }}>
          <span>Your site {vals.rate.toFixed(1)}%</span>
          <span style={{ color: GOLD, fontVariantNumeric: "tabular-nums" }}>+{money(Math.max(uplift, 0))}</span>
        </div>
      </div>

      {/* Inputs */}
      <div style={{ marginTop: 12, display: "flex", flexDirection: "column", gap: 8 }}>
        {FIELDS.map((f) => {
          const v = vals[f.key];
          const pct = ((v - f.min) / (f.max - f.min)) * 100;
          const id = `roi-${f.key}`;
          return (
            <div key={f.key}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 4 }}>
                <label htmlFor={id} style={{ fontSize: 10, lineHeight: 1.2, fontWeight: 500, color: INK_2 }}>{f.label}</label>
                <span style={{ ...display(12, 700), color: PAPER }}>{f.fmt(v)}</span>
              </div>
              <input
                id={id}
                data-bw-range=""
                data-bw-phone-range=""
                type="range"
                min={f.min}
                max={f.max}
                step={f.step}
                value={v}
                onPointerDown={onEngage}
                onChange={(e) => setVals((s) => ({ ...s, [f.key]: Number(e.target.value) }))}
                style={{ background: `linear-gradient(90deg, ${GOLD} ${pct}%, ${LINE} ${pct}%)` }}
              />
            </div>
          );
        })}
      </div>

      <div style={{ marginTop: "auto", paddingTop: 8, borderTop: `1px solid ${LINE}`, display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 8 }}>
        <span style={{ ...mono(7.5), color: INK_3, lineHeight: 1.4 }}>
          Payback, {money(BUILD_COST)} build<br />
          <span style={{ opacity: 0.75 }}>Illustrative · {Math.round(CLOSE_RATE * 100)}% close</span>
        </span>
        <span style={{ ...display(14, 800), color: paybackWeeks ? GOLD : INK_3, whiteSpace: "nowrap", flexShrink: 0 }}>
          {paybackWeeks ? `${paybackWeeks} wk${paybackWeeks === 1 ? "" : "s"}` : "—"}
        </span>
      </div>
    </div>
  );
}
