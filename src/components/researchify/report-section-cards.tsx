"use client";

import { useState } from "react";

/* The seven report sections, presented with the same hover treatment as the
   feature cards on the other service pages: the card tilts back on hover and a
   pinned "// researchify" label rises from it over a pulsing ground ring. */

const SECTIONS = [
  { title: "Company profile", body: "What the company does, how it is organised, and what changed recently." },
  { title: "Account snapshot", body: "Size, revenue, fiscal calendar, leadership, and the platforms already in use." },
  { title: "Strategic business priorities", body: "Stated goals for the year, each tied to the executive who owns it." },
  { title: "Operational imperatives and challenges", body: "The constraints executives keep naming, and the evidence behind them." },
  { title: "Commercial partner landscape", body: "Incumbent vendors and partners, and the seat that is still open." },
  { title: "Executive challenge", body: "The one thing your buyer has to prove this year, in their words." },
  { title: "Executive snapshot", body: "Background, public positions, and how the person prefers to be reached." },
];

const NOISE =
  "url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2790%27 height=%2790%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.85%27 numOctaves=%273%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27 opacity=%270.42%27/%3E%3C/svg%3E')";

const ring = (opacity: number, delay: string): React.CSSProperties => ({
  position: "absolute",
  left: 0,
  top: 0,
  width: 78,
  height: 78,
  translate: "-50% -50%",
  border: `1px solid rgba(230,175,46,${opacity})`,
  borderRadius: "50%",
  animation: `bwPing 2.8s cubic-bezier(.2,.7,.2,1) ${delay} infinite`,
  display: "block",
});

export function ReportSectionCards() {
  const [hover, setHover] = useState<number | null>(null);

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(272px,1fr))", gap: "clamp(18px,2vw,30px)" }}>
      {SECTIONS.map((s, i) => {
        const on = hover === i;
        return (
          <div key={s.title} onMouseEnter={() => setHover(i)} onMouseLeave={() => setHover((h) => (h === i ? null : h))} style={{ perspective: "1000px", padding: "20px 0 6px", display: "flex", justifyContent: "center" }}>
            <div style={{ position: "relative", width: "100%", transformStyle: "preserve-3d", transition: "transform .7s cubic-bezier(.16,1,.3,1)", transform: on ? "rotateX(34deg) scale(0.92)" : "none" }}>
              {/* Pin */}
              <div style={{ position: "absolute", left: "50%", bottom: "calc(100% - 4px)", translate: "-50% 0", display: "flex", flexDirection: "column", alignItems: "center", pointerEvents: "none", opacity: on ? 1 : 0, transform: on ? "translateY(0px)" : "translateY(14px)", transition: "opacity .45s ease,transform .55s cubic-bezier(.16,1,.3,1)" }}>
                <span style={{ background: "#080705", color: "#E6AF2E", border: "1px solid rgba(230,175,46,.55)", borderRadius: 999, padding: "7px 14px", font: "500 10px/1 'JetBrains Mono',monospace", letterSpacing: ".18em", textTransform: "uppercase", whiteSpace: "nowrap" }}>{"// researchify"}</span>
                <span style={{ width: 1, height: 54, background: "linear-gradient(180deg,#E6AF2E,rgba(230,175,46,0))", display: "block" }} />
              </div>
              {/* Ground rings */}
              <span aria-hidden="true" style={{ position: "absolute", left: "50%", top: "100%", width: 0, height: 0, transform: "rotateX(70deg)", pointerEvents: "none", opacity: on ? 1 : 0, transition: "opacity .5s ease", display: "block" }}>
                <span style={ring(0.55, "0s")} />
                <span style={ring(0.4, ".9s")} />
                <span style={ring(0.28, "1.8s")} />
              </span>
              {/* Card */}
              <div
                style={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  gap: 14,
                  minHeight: 200,
                  padding: 28,
                  borderRadius: 14,
                  border: "1px solid rgba(255,255,250,.16)",
                  color: "#FFFFFA",
                  backgroundColor: "#080705",
                  backgroundImage: `${NOISE},radial-gradient(at 20% 10%,oklch(0.62 0.13 84 / .5) 0%,rgba(8,7,5,0) 58%),radial-gradient(at 90% 96%,oklch(0.5 0.14 34 / .45) 0%,rgba(8,7,5,0) 62%)`,
                  backgroundSize: "90px 90px,auto,auto",
                  backgroundBlendMode: "overlay,normal,normal",
                  boxShadow: "0 34px 70px -42px rgba(8,7,5,.75),0 1px 0 rgba(255,255,255,.14) inset",
                }}
              >
                <span style={{ font: "500 10px/1 'JetBrains Mono',monospace", letterSpacing: ".2em", textTransform: "uppercase", color: "#E6AF2E" }}>/ 0{i + 1}</span>
                <span style={{ fontWeight: 800, fontSize: 22, letterSpacing: "-.03em", lineHeight: 1.1 }}>{s.title}</span>
                <span style={{ fontSize: 15, lineHeight: 1.5, fontWeight: 500, opacity: 0.72, textWrap: "pretty" }}>{s.body}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
