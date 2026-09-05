import { BadgeCheck, EyeOff, MessageSquareText } from "lucide-react";

/* "Buyers decide before they reach your website."
   Three columns: the question, the answer engines, the outcome. Beams leave the
   buyer, pass through each engine, and land on one of two outcomes: the brand
   that gets named, or the one that never gets mentioned. The old search path
   runs faded along the bottom for contrast.

   Geometry lives in one 1200x440 viewBox. Lines are SVG; nodes are HTML pills
   placed at the same coordinates as percentages, so the type stays crisp and
   real-sized while the lines scale. Below 720px the same content stacks. */

const W = 1200;
const H = 440;

const BUYER = { x: 110, y: 220 };
const ENGINES = [
  { name: "ChatGPT", y: 70 },
  { name: "Perplexity", y: 170 },
  { name: "Gemini", y: 270 },
  { name: "Claude", y: 370 },
];
const EX = 560;
const NAMED = { x: 1090, y: 160 };
const UNNAMED = { x: 1090, y: 300 };

const GOLD = "#E6AF2E";
const RUST = "#C84A1F";

const pct = (x: number, y: number) => ({ left: `${(x / W) * 100}%`, top: `${(y / H) * 100}%` });

/* Horizontal-tangent cubic between two nodes reads as a wiring diagram, not a swoop. */
const link = (x1: number, y1: number, x2: number, y2: number) => {
  const c1 = x1 + (x2 - x1) * 0.45;
  const c2 = x1 + (x2 - x1) * 0.55;
  return `M${x1},${y1} C${c1},${y1} ${c2},${y2} ${x2},${y2}`;
};

const toEngine = ENGINES.map((e) => link(BUYER.x, BUYER.y, EX, e.y));
/* Three engines name the brand; one never does. */
const toOutcome = ENGINES.map((e, i) => (i === 3 ? link(EX, e.y, UNNAMED.x, UNNAMED.y) : link(EX, e.y, NAMED.x, NAMED.y)));

const pill: React.CSSProperties = {
  position: "absolute",
  transform: "translate(-50%,-50%)",
  display: "inline-flex",
  alignItems: "center",
  gap: 8,
  padding: "9px 14px",
  borderRadius: 999,
  background: "var(--bw-bg)",
  border: "1px solid var(--bw-rule)",
  color: "var(--bw-fg)",
  font: "700 13px/1 Inter, sans-serif",
  letterSpacing: "-.02em",
  whiteSpace: "nowrap",
  boxShadow: "0 10px 24px -18px rgba(8,7,5,.5)",
};

const columnLabel: React.CSSProperties = {
  position: "absolute",
  top: 0,
  transform: "translate(-50%,0)",
  font: "500 10px/1 'JetBrains Mono', monospace",
  letterSpacing: ".16em",
  textTransform: "uppercase",
  opacity: 0.5,
  whiteSpace: "nowrap",
};

function Beam({ d, color, dur, begin, fade }: { d: string; color: string; dur: string; begin: string; fade?: boolean }) {
  return (
    <>
      <circle r="9" fill={color} opacity="0.45" filter="url(#bwBeamGlow)">
        <animateMotion dur={dur} begin={begin} repeatCount="indefinite" path={d} />
        {fade && <animate attributeName="opacity" values="0.45;0.45;0" keyTimes="0;0.6;1" dur={dur} begin={begin} repeatCount="indefinite" />}
      </circle>
      <circle r="3.5" fill="var(--bw-bg)" stroke={color} strokeWidth="1.5">
        <animateMotion dur={dur} begin={begin} repeatCount="indefinite" path={d} />
        {fade && <animate attributeName="opacity" values="1;1;0" keyTimes="0;0.6;1" dur={dur} begin={begin} repeatCount="indefinite" />}
      </circle>
    </>
  );
}

export function DecisionPath() {
  return (
    <div data-bw-path="" style={{ containerType: "inline-size" }}>
      {/* Wide layout */}
      <div data-bw-path-wide="" style={{ position: "relative", width: "100%", aspectRatio: `${W}/${H}`, marginTop: 28 }}>
        <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", overflow: "visible" }} aria-hidden="true">
          <defs>
            <filter id="bwBeamGlow" x="-200%" y="-200%" width="500%" height="500%">
              <feGaussianBlur stdDeviation="4" />
            </filter>
          </defs>

          {/* The old path: search result to website, still there, no longer where the decision happens */}
          <line x1={BUYER.x} y1={H - 14} x2={NAMED.x} y2={H - 14} stroke="var(--bw-fg)" strokeOpacity=".18" strokeWidth="1.5" strokeDasharray="2 7" vectorEffect="non-scaling-stroke" />

          {/* Wiring */}
          {toEngine.map((d, i) => (
            <path key={`a${i}`} d={d} fill="none" stroke="var(--bw-fg)" strokeOpacity=".22" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
          ))}
          {toOutcome.map((d, i) => (
            <path key={`b${i}`} d={d} fill="none" stroke={i === 3 ? "var(--bw-fg)" : RUST} strokeOpacity={i === 3 ? ".14" : ".45"} strokeWidth="1.5" strokeDasharray={i === 3 ? "4 6" : undefined} vectorEffect="non-scaling-stroke" />
          ))}

          {/* Beams: question out, answer back. Hidden under prefers-reduced-motion via CSS. */}
          <g data-bw-beams="">
            {toEngine.map((d, i) => (
              <Beam key={`c${i}`} d={d} color={GOLD} dur="3.2s" begin={`${i * 0.5}s`} />
            ))}
            {toOutcome.map((d, i) => (
              <Beam key={`d${i}`} d={d} color={i === 3 ? "#8E8E88" : RUST} dur="2.6s" begin={`${1.6 + i * 0.5}s`} fade={i === 3} />
            ))}
          </g>
        </svg>

        {/* Column labels */}
        <span style={{ ...columnLabel, left: `${(BUYER.x / W) * 100}%` }}>01 · The question</span>
        <span style={{ ...columnLabel, left: `${(EX / W) * 100}%` }}>02 · Who answers it</span>
        <span style={{ ...columnLabel, left: `${(NAMED.x / W) * 100}%` }}>03 · Who gets named</span>

        {/* Nodes */}
        <div style={{ ...pill, ...pct(BUYER.x, BUYER.y), border: "1px solid var(--bw-fg)", padding: "10px 16px 10px 12px" }}>
          <MessageSquareText size={16} strokeWidth={1.75} aria-hidden="true" />
          <span style={{ display: "flex", flexDirection: "column", gap: 3, textAlign: "left" }}>
            Buyer
            <span style={{ font: "500 10.5px/1 Inter, sans-serif", letterSpacing: 0, opacity: 0.6 }}>“Which tool should we use?”</span>
          </span>
        </div>

        {ENGINES.map((e) => (
          <div key={e.name} style={{ ...pill, ...pct(EX, e.y) }}>
            <span aria-hidden="true" style={{ width: 6, height: 6, borderRadius: "50%", background: GOLD, display: "block" }} />
            {e.name}
          </div>
        ))}

        <div style={{ ...pill, ...pct(NAMED.x, NAMED.y), background: "var(--bw-fg)", color: "var(--bw-bg)", border: `1px solid ${GOLD}`, boxShadow: `0 0 0 4px rgba(230,175,46,.18), 0 18px 34px -20px rgba(8,7,5,.7)` }}>
          <BadgeCheck size={16} strokeWidth={1.75} color={GOLD} aria-hidden="true" />
          <span style={{ display: "flex", flexDirection: "column", gap: 3, textAlign: "left" }}>
            Your brand
            <span style={{ font: "500 10.5px/1 Inter, sans-serif", letterSpacing: 0, opacity: 0.6 }}>named in the answer</span>
          </span>
        </div>

        <div style={{ ...pill, ...pct(UNNAMED.x, UNNAMED.y), borderStyle: "dashed", opacity: 0.55, boxShadow: "none" }}>
          <EyeOff size={16} strokeWidth={1.75} aria-hidden="true" />
          <span style={{ display: "flex", flexDirection: "column", gap: 3, textAlign: "left" }}>
            Everyone else
            <span style={{ font: "500 10.5px/1 Inter, sans-serif", letterSpacing: 0, opacity: 0.7 }}>never mentioned</span>
          </span>
        </div>

        <span style={{ ...columnLabel, top: "auto", bottom: 22, left: "50%", opacity: 0.38 }}>The old path · search result → website</span>
      </div>

      {/* Stacked layout for narrow containers */}
      <div data-bw-path-stack="" style={{ display: "none", flexDirection: "column", alignItems: "center", gap: 14, marginTop: 28 }}>
        <span style={{ ...columnLabel, position: "static", transform: "none" }}>01 · The question</span>
        <div style={{ ...pill, position: "static", transform: "none", border: "1px solid var(--bw-fg)" }}>
          <MessageSquareText size={16} strokeWidth={1.75} aria-hidden="true" />Buyer asks
        </div>
        <span aria-hidden="true" style={{ width: 1, height: 22, background: "var(--bw-rule)", display: "block" }} />
        <span style={{ ...columnLabel, position: "static", transform: "none" }}>02 · Who answers it</span>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, justifyItems: "stretch", width: "100%", maxWidth: 320 }}>
          {ENGINES.map((e) => (
            <div key={e.name} style={{ ...pill, position: "static", transform: "none", justifyContent: "center", boxShadow: "none" }}>
              <span aria-hidden="true" style={{ width: 6, height: 6, borderRadius: "50%", background: GOLD, display: "block" }} />
              {e.name}
            </div>
          ))}
        </div>
        <span aria-hidden="true" style={{ width: 1, height: 22, background: "var(--bw-rule)", display: "block" }} />
        <span style={{ ...columnLabel, position: "static", transform: "none" }}>03 · Who gets named</span>
        <div style={{ display: "flex", flexDirection: "column", gap: 8, alignItems: "center" }}>
          <div style={{ ...pill, position: "static", transform: "none", background: "var(--bw-fg)", color: "var(--bw-bg)", border: `1px solid ${GOLD}` }}>
            <BadgeCheck size={16} strokeWidth={1.75} color={GOLD} aria-hidden="true" />Your brand · named
          </div>
          <div style={{ ...pill, position: "static", transform: "none", borderStyle: "dashed", opacity: 0.55, boxShadow: "none" }}>
            <EyeOff size={16} strokeWidth={1.75} aria-hidden="true" />Everyone else · never mentioned
          </div>
        </div>
      </div>
    </div>
  );
}
