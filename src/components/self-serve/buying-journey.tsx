"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

/* The B2B buying journey as a touchpoint map. Five stages run left to right;
   the buyer's path rides above the stage bar where they can act alone and dips
   below it where they need a human. Touchpoints are filled when you control
   them and hatched when you don't. One toggle compares a typical SaaS site
   with the same site after the self-serve layer: the path lifts, the dots move.
   Geometry is pure arithmetic, so server and client draw the same picture. */

const W = 1200;
const H = 520;
const BAR = { top: 236, bottom: 284 };
const Y_SELF = 150;
const Y_ASSIST = 372;

const STAGES = ["Discover", "Evaluate", "Try", "Buy", "Expand"];
const STAGE_W = W / STAGES.length;
const cx = (i: number) => STAGE_W * i + STAGE_W / 2;

/* Sequential ramp, gold to rust, one step per stage. */
const RAMP = ["#E6AF2E", "#D9992A", "#CC8226", "#C36622", "#B9431C"];
const onRamp = (i: number) => (i < 2 ? "#080705" : "#FFFFFA");

type Mode = "self" | "assisted";
type State = "today" | "after";
type Touchpoint = {
  id: string;
  stage: number;
  label: string;
  managed: boolean;
  today: Mode | null;
  after: Mode | null;
  note: { today: string; after: string };
};

const TOUCHPOINTS: Touchpoint[] = [
  { id: "ai", stage: 0, label: "AI answer engines", managed: false, today: "self", after: "self", note: { today: "Buyers ask ChatGPT or Perplexity first. You can't script the answer, only earn a place in it.", after: "Same. The self-serve layer gives the engines something concrete to cite: public pricing, a demo, real numbers." } },
  { id: "reviews", stage: 0, label: "Peer reviews", managed: false, today: "self", after: "self", note: { today: "G2, Capterra, Reddit threads. Read before anyone visits your site.", after: "Unchanged. Reviews start mentioning the trial and the demo, which is the point." } },
  { id: "home", stage: 0, label: "Your homepage", managed: true, today: "self", after: "self", note: { today: "The first page you control. Today it ends in one button: Book a demo.", after: "Now it ends in three: see the demo, check pricing, start a sandbox." } },
  { id: "outbound", stage: 0, label: "Outbound email", managed: true, today: "assisted", after: "assisted", note: { today: "An SDR sequence. Human-led by design.", after: "Still human-led, but the reply link goes to a personalised demo rather than a calendar." } },

  { id: "pricing", stage: 1, label: "Pricing", managed: true, today: "assisted", after: "self", note: { today: "“Contact us for pricing.” The single biggest reason evaluators leave.", after: "Public tiers and a calculator that lands on a number in under a minute." } },
  { id: "demo", stage: 1, label: "Product demo", managed: true, today: "assisted", after: "self", note: { today: "A calendar invite, a wait of two to five days, a 45-minute call.", after: "An interactive demo, four minutes, no form. The call becomes optional." } },
  { id: "cases", stage: 1, label: "Case studies", managed: true, today: "self", after: "self", note: { today: "Read alone. Usually written for the vendor rather than the buyer.", after: "Rewritten around the buyer's question: problem, work, number." } },
  { id: "peers", stage: 1, label: "Asking peers", managed: false, today: "assisted", after: "assisted", note: { today: "Slack communities, a former colleague. Out of your reach.", after: "Out of reach, but peers can now send a link to something that answers the question." } },

  { id: "trial", stage: 2, label: "Trial or sandbox", managed: true, today: "assisted", after: "self", note: { today: "Gated. Sales decides who gets hands on the product.", after: "Self-serve sandbox with seeded data. The buyer qualifies themselves." } },
  { id: "security", stage: 2, label: "Security review", managed: true, today: "assisted", after: "self", note: { today: "A questionnaire by email, answered by whoever is free.", after: "A trust centre: SOC 2, DPA, sub-processors, downloadable without asking." } },
  { id: "roi", stage: 2, label: "ROI calculator", managed: true, today: null, after: "self", note: { today: "Doesn't exist. The business case is built in a spreadsheet you never see.", after: "The buyer builds the case on your site, with your assumptions, and can export it." } },

  { id: "quote", stage: 3, label: "Quote and contract", managed: true, today: "assisted", after: "self", note: { today: "An account executive prepares a quote. Days pass.", after: "Starter and team tiers check out on the site. Enterprise still gets a person." } },
  { id: "procurement", stage: 3, label: "Procurement", managed: false, today: "assisted", after: "assisted", note: { today: "The buyer's own process. Legal, finance, a vendor form.", after: "Still theirs. You shorten it by having the documents ready in the trust centre." } },
  { id: "call", stage: 3, label: "Expert call", managed: true, today: "assisted", after: "assisted", note: { today: "Mandatory. The only route to a price.", after: "Optional, and booked by people who already know they want the product." } },

  { id: "onboarding", stage: 4, label: "Onboarding", managed: true, today: "assisted", after: "self", note: { today: "A customer success manager runs kickoff calls.", after: "Guided in product for smaller accounts; the CSM's time goes to the largest." } },
  { id: "upgrade", stage: 4, label: "Upgrade", managed: true, today: "assisted", after: "self", note: { today: "Talk to your account manager to add seats.", after: "Add seats or a tier in the billing screen. Upsell without a meeting." } },
  { id: "community", stage: 4, label: "Community", managed: false, today: "self", after: "self", note: { today: "Users help each other in places you don't run.", after: "Unchanged, and a source of the peer signal that starts the next buyer's journey." } },
];

/* ---------- geometry ---------- */

type Pt = { x: number; y: number };
type Placed = Touchpoint & Pt & { mode: Mode; onPath: boolean; slot: number };

const SPREAD = [[0], [-48, 48], [-80, 0, 80], [-90, -30, 30, 90]];
/* Small: the label offset (30px) must clear a neighbouring dot (radius 11) plus this. */
const WOBBLE = [-4, 3, -2, 4];

function layout(state: State): { dots: Placed[]; path: string; selfCount: number; assistedCount: number } {
  const dots: Placed[] = [];
  const anchors: Pt[] = [];
  for (let s = 0; s < STAGES.length; s++) {
    const here = TOUCHPOINTS.filter((t) => t.stage === s && t[state]);
    const self = here.filter((t) => t[state] === "self");
    const assisted = here.filter((t) => t[state] === "assisted");
    const pathMode: Mode = self.length >= assisted.length ? "self" : "assisted";
    for (const mode of ["self", "assisted"] as Mode[]) {
      const list = mode === "self" ? self : assisted;
      const onPath = mode === pathMode;
      const base = mode === "self" ? Y_SELF : Y_ASSIST;
      const offsets = SPREAD[Math.min(list.length, 4) - 1] ?? [0];
      list.forEach((t, i) => {
        const x = cx(s) + (offsets[i] ?? 0);
        const y = base + (onPath ? WOBBLE[i % WOBBLE.length] : (mode === "self" ? -1 : 1) * 34 + WOBBLE[i % WOBBLE.length] * 0.4);
        dots.push({ ...t, x, y, mode, onPath, slot: i });
        if (onPath) anchors.push({ x, y });
      });
    }
  }
  anchors.sort((a, b) => a.x - b.x);
  const pts: Pt[] = [{ x: -60, y: anchors[0].y }, ...anchors, { x: W + 60, y: anchors[anchors.length - 1].y }];
  return { dots, path: spline(pts, 72), selfCount: dots.filter((d) => d.mode === "self").length, assistedCount: dots.filter((d) => d.mode === "assisted").length };
}

/* Catmull-Rom through the anchors, sampled to a fixed point count so the two
   states morph cleanly into each other. */
function spline(p: Pt[], samples: number): string {
  const pt = (i: number) => p[Math.max(0, Math.min(p.length - 1, i))];
  const out: Pt[] = [];
  const segs = p.length - 1;
  for (let k = 0; k <= samples; k++) {
    const u = (k / samples) * segs;
    const i = Math.min(segs - 1, Math.floor(u));
    const t = u - i;
    const p0 = pt(i - 1), p1 = pt(i), p2 = pt(i + 1), p3 = pt(i + 2);
    const t2 = t * t, t3 = t2 * t;
    const x = 0.5 * (2 * p1.x + (-p0.x + p2.x) * t + (2 * p0.x - 5 * p1.x + 4 * p2.x - p3.x) * t2 + (-p0.x + 3 * p1.x - 3 * p2.x + p3.x) * t3);
    const y = 0.5 * (2 * p1.y + (-p0.y + p2.y) * t + (2 * p0.y - 5 * p1.y + 4 * p2.y - p3.y) * t2 + (-p0.y + 3 * p1.y - 3 * p2.y + p3.y) * t3);
    out.push({ x, y });
  }
  return out.map((q, i) => `${i ? "L" : "M"}${q.x.toFixed(1)},${q.y.toFixed(1)}`).join(" ");
}

const chevron = (i: number) => {
  const x0 = STAGE_W * i, x1 = STAGE_W * (i + 1), mid = (BAR.top + BAR.bottom) / 2, n = 16;
  const left = i === 0 ? `${x0},${BAR.top} ${x0},${BAR.bottom}` : `${x0},${BAR.top} ${x0 + n},${mid} ${x0},${BAR.bottom}`;
  return `${x0},${BAR.top} ${x1 - n},${BAR.top} ${x1},${mid} ${x1 - n},${BAR.bottom} ${x0},${BAR.bottom} ${i === 0 ? "" : `${x0 + n},${mid}`}`.replace(left, left);
};

const pct = (x: number, y: number) => ({ left: `${(x / W) * 100}%`, top: `${(y / H) * 100}%` });

const mono: React.CSSProperties = { fontFamily: "'JetBrains Mono', monospace", fontWeight: 500, fontSize: 10, letterSpacing: ".16em", textTransform: "uppercase" };

/* ---------- component ---------- */

export function BuyingJourney() {
  const reduce = !!useReducedMotion();
  const [state, setState] = useState<State>("today");
  const [engaged, setEngaged] = useState(false);
  const [picked, setPicked] = useState<string | null>(null);

  const engage = useCallback(() => setEngaged(true), []);
  const L = useMemo(() => ({ today: layout("today"), after: layout("after") }), []);
  const cur = L[state];
  const sel = TOUCHPOINTS.find((t) => t.id === picked) ?? null;

  useEffect(() => {
    if (engaged) return;
    const t = setTimeout(() => setState((s) => (s === "today" ? "after" : "today")), 6500);
    return () => clearTimeout(t);
  }, [state, engaged]);

  const spring = reduce ? { duration: 0 } : { type: "spring" as const, stiffness: 120, damping: 22 };

  return (
    <div data-bw-journey="" onPointerDownCapture={engage} onKeyDownCapture={engage} style={{ containerType: "inline-size", display: "flex", flexDirection: "column", gap: 18 }}>
      {/* Controls */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
        <div role="tablist" aria-label="Compare" style={{ display: "inline-flex", padding: 3, borderRadius: 999, border: "1px solid var(--bw-rule)", background: "var(--bw-glass)", position: "relative" }}>
          {(["today", "after"] as State[]).map((s) => {
            const on = s === state;
            return (
              <button key={s} type="button" role="tab" aria-selected={on} onClick={() => { engage(); setState(s); }} style={{ appearance: "none", border: 0, background: "transparent", position: "relative", padding: "9px 16px", borderRadius: 999, cursor: "pointer", color: on ? "var(--bw-bg)" : "var(--bw-fg)", ...mono, fontSize: 10.5, zIndex: 1 }}>
                {on && <motion.span layoutId="journey-toggle" transition={spring} style={{ position: "absolute", inset: 0, borderRadius: 999, background: "var(--bw-fg)", zIndex: -1 }} />}
                {s === "today" ? "Typical SaaS site" : "With the self-serve layer"}
              </button>
            );
          })}
        </div>
        <div style={{ display: "flex", gap: 22, ...mono, fontSize: 10, opacity: 0.6, flexWrap: "wrap" }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}><span aria-hidden="true" style={{ width: 10, height: 10, borderRadius: "50%", background: "var(--bw-fg)", display: "block" }} />You control it</span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}><span aria-hidden="true" style={{ width: 10, height: 10, borderRadius: "50%", display: "block", backgroundImage: "repeating-linear-gradient(45deg, var(--bw-fg) 0 1.5px, transparent 1.5px 4px)", border: "1px solid var(--bw-fg)", boxSizing: "border-box" }} />You don&apos;t</span>
        </div>
      </div>

      {/* Map */}
      <div data-bw-journey-map="" style={{ position: "relative", width: "100%", aspectRatio: `${W}/${H}` }}>
        <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", overflow: "visible" }} aria-hidden="true">
          <defs>
            {RAMP.map((c, i) => (
              <pattern key={i} id={`bwHatch${i}`} patternUnits="userSpaceOnUse" width="6" height="6" patternTransform="rotate(45)">
                <rect width="2.4" height="6" fill={c} />
              </pattern>
            ))}
          </defs>

          {/* Zone labels */}
          <text x={W / 2} y={28} textAnchor="middle" fill="var(--bw-fg)" opacity=".55" style={{ font: "500 11px 'JetBrains Mono', monospace", letterSpacing: ".2em", textTransform: "uppercase" }}>Buyer acts alone</text>
          <text x={W / 2} y={H - 14} textAnchor="middle" fill="var(--bw-fg)" opacity=".55" style={{ font: "500 11px 'JetBrains Mono', monospace", letterSpacing: ".2em", textTransform: "uppercase" }}>Buyer needs a human</text>

          {/* Stage bar */}
          {STAGES.map((name, i) => (
            <g key={name}>
              <polygon points={chevron(i)} fill={RAMP[i]} />
              <text x={cx(i)} y={(BAR.top + BAR.bottom) / 2 + 5} textAnchor="middle" fill={onRamp(i)} style={{ font: "800 15px Archivo, sans-serif", letterSpacing: "-.02em" }}>{name}</text>
            </g>
          ))}

          {/* Buyer's path */}
          <motion.path initial={false} fill="none" stroke="var(--bw-fg)" strokeOpacity=".5" strokeWidth="2" strokeDasharray="7 7" strokeLinecap="round" vectorEffect="non-scaling-stroke" animate={{ d: cur.path }} transition={spring} />

          {/* Dots */}
          {TOUCHPOINTS.map((t) => {
            const d = cur.dots.find((x) => x.id === t.id);
            const hidden = !d;
            const fallback = L.after.dots.find((x) => x.id === t.id)!;
            const p = d ?? fallback;
            const on = picked === t.id;
            const above = (p.mode === "self") !== (p.slot % 2 === 1);
            return (
              <motion.g key={t.id} animate={{ x: p.x, y: p.y, opacity: hidden ? 0 : 1, scale: on ? 1.25 : 1 }} initial={false} transition={spring} style={{ cursor: hidden ? "default" : "pointer" }} onClick={() => { if (hidden) return; engage(); setPicked(on ? null : t.id); }}>
                <circle r="20" fill="transparent" />
                {/* Leader to the label */}
                <line x1="0" x2="0" y1={above ? -11 : 11} y2={above ? -25 : 25} stroke="var(--bw-fg)" strokeOpacity=".35" strokeWidth="1" vectorEffect="non-scaling-stroke" />
                {on && <circle r="17" fill="none" stroke={RAMP[t.stage]} strokeOpacity=".5" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />}
                <circle r="11" fill="var(--bw-bg)" />
                <circle r="11" fill={t.managed ? RAMP[t.stage] : `url(#bwHatch${t.stage})`} stroke={RAMP[t.stage]} strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
              </motion.g>
            );
          })}
        </svg>

        {/* Labels (HTML, so they keep a real font size) */}
        {TOUCHPOINTS.map((t) => {
          const d = cur.dots.find((x) => x.id === t.id);
          if (!d) return null;
          const on = picked === t.id;
          /* Labels alternate above and below along a run of dots so neighbours never
             collide; they sit to the right unless the dot is near the right edge. */
          const flip = d.slot % 2 === 1;
          const above = (d.mode === "self") !== flip;
          const rightEdge = d.x > W - 150;
          return (
            <motion.button
              key={t.id}
              type="button"
              aria-pressed={on}
              onClick={() => { engage(); setPicked(on ? null : t.id); }}
              initial={false}
              animate={{ left: pct(d.x, d.y).left, top: pct(d.x, d.y).top, opacity: 1 }}
              transition={spring}
              style={{
                position: "absolute",
                transform: `translate(${rightEdge ? "calc(-100% - 14px)" : "14px"}, ${above ? "calc(-100% - 30px)" : "30px"})`,
                appearance: "none",
                border: 0,
                cursor: "pointer",
                padding: "3px 8px",
                borderRadius: 999,
                background: on ? "var(--bw-fg)" : "var(--bw-glass)",
                color: on ? "var(--bw-bg)" : "var(--bw-fg)",
                font: "600 11.5px/1.2 Archivo, sans-serif",
                letterSpacing: "-.01em",
                whiteSpace: "nowrap",
                boxShadow: on ? "none" : "0 1px 0 rgba(255,255,255,.4) inset",
                outline: "none",
              }}
            >
              {t.label}
            </motion.button>
          );
        })}
      </div>

      {/* Stacked fallback for narrow containers */}
      <div data-bw-journey-stack="" style={{ display: "none", flexDirection: "column", gap: 10 }}>
        {STAGES.map((name, s) => {
          const here = cur.dots.filter((d) => d.stage === s);
          return (
            <div key={name} style={{ display: "grid", gridTemplateColumns: "84px 1fr", gap: 12, alignItems: "start", padding: "12px 0", borderTop: "1px solid var(--bw-rule)" }}>
              <span style={{ display: "inline-flex", alignSelf: "start", padding: "5px 9px", borderRadius: 6, background: RAMP[s], color: onRamp(s), font: "800 12px Archivo, sans-serif" }}>{name}</span>
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                {(["self", "assisted"] as Mode[]).map((m) => {
                  const list = here.filter((d) => d.mode === m);
                  if (!list.length) return null;
                  return (
                    <div key={m} style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                      <span style={{ ...mono, fontSize: 8.5, opacity: 0.5 }}>{m === "self" ? "Alone" : "Needs a human"}</span>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                        {list.map((d) => (
                          <button key={d.id} type="button" onClick={() => { engage(); setPicked(picked === d.id ? null : d.id); }} style={{ appearance: "none", display: "inline-flex", alignItems: "center", gap: 6, border: "1px solid var(--bw-rule)", background: picked === d.id ? "var(--bw-fg)" : "transparent", color: picked === d.id ? "var(--bw-bg)" : "var(--bw-fg)", borderRadius: 999, padding: "5px 9px", font: "600 11.5px Archivo, sans-serif", cursor: "pointer" }}>
                            <span aria-hidden="true" style={{ width: 8, height: 8, borderRadius: "50%", background: d.managed ? RAMP[s] : "transparent", border: `1.5px solid ${RAMP[s]}`, display: "block" }} />
                            {d.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Readout */}
      <div data-bw-journey-grid="" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 2.2fr", gap: 14, alignItems: "stretch" }}>
        {[
          ["Buyer acts alone", cur.selfCount, "touchpoints"],
          ["Needs a human", cur.assistedCount, "touchpoints"],
          ["Time to hands-on", state === "today" ? "3 days" : "4 min", state === "today" ? "book a demo, wait" : "interactive demo"],
        ].map(([k, v, sub]) => (
          <div key={k as string} style={{ display: "flex", flexDirection: "column", gap: 6, padding: "18px 20px", borderRadius: 14, border: "1px solid var(--bw-glass-bd)", background: "var(--bw-glass)" }}>
            <span style={{ ...mono, fontSize: 9.5, opacity: 0.5 }}>{k as string}</span>
            <span style={{ fontFamily: "Archivo, sans-serif", fontWeight: 800, fontSize: 30, letterSpacing: "-.03em", lineHeight: 1, fontVariantNumeric: "tabular-nums" }}>{v as string | number}</span>
            <span style={{ fontSize: 12.5, opacity: 0.6 }}>{sub as string}</span>
          </div>
        ))}
        <div style={{ position: "relative", padding: "18px 20px", borderRadius: 14, border: "1px solid var(--bw-glass-bd)", background: "var(--bw-glass)", minHeight: 112, display: "grid" }}>
          <AnimatePresence initial={false}>
            <motion.div key={sel ? `${sel.id}-${state}` : "empty"} style={{ gridArea: "1 / 1", display: "flex", flexDirection: "column", gap: 8 }} initial={reduce ? false : { opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={reduce ? undefined : { opacity: 0, transition: { duration: 0.12 } }} transition={spring}>
              {sel ? (
                <>
                  <span style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
                    <span style={{ ...mono, fontSize: 9.5, color: RAMP[sel.stage] }}>{STAGES[sel.stage]}</span>
                    <span style={{ ...mono, fontSize: 9.5, opacity: 0.5 }}>{sel.managed ? "You control it" : "You don't control it"}</span>
                    <span style={{ ...mono, fontSize: 9.5, opacity: 0.5 }}>{sel[state] === "self" ? "Buyer acts alone" : sel[state] === "assisted" ? "Needs a human" : "Doesn't exist yet"}</span>
                  </span>
                  <span style={{ fontFamily: "Archivo, sans-serif", fontWeight: 800, fontSize: 18, letterSpacing: "-.02em" }}>{sel.label}</span>
                  <span style={{ fontSize: 14, lineHeight: 1.5, opacity: 0.75, maxWidth: "60ch", textWrap: "pretty" }}>{sel.note[state]}</span>
                </>
              ) : (
                <>
                  <span style={{ ...mono, fontSize: 9.5, opacity: 0.5 }}>{engaged ? "Your pace" : "Auto-playing, tap to take over"}</span>
                  <span style={{ fontFamily: "Archivo, sans-serif", fontWeight: 800, fontSize: 18, letterSpacing: "-.02em" }}>Tap any touchpoint</span>
                  <span style={{ fontSize: 14, lineHeight: 1.5, opacity: 0.75, maxWidth: "60ch", textWrap: "pretty" }}>
                    {state === "today" ? "On a typical SaaS site the buyer is alone until they want a price or a look at the product. Then everything routes through a calendar." : "With the self-serve layer the buyer stays in control through evaluation, trial and purchase. People step in where they add the most: large deals and procurement."}
                  </span>
                </>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      <span style={{ ...mono, fontSize: 10, opacity: 0.42 }}>Fig. 01 — Touchpoint map, illustrative journey</span>
    </div>
  );
}
