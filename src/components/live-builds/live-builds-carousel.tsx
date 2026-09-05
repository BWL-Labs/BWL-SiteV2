"use client";

import { useCallback, useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { WordGame } from "./word-game";
import { B2BReport } from "./b2b-report";
import { RoiCalculator } from "./roi-calculator";
import { GOLD, PAPER, SCREEN } from "./tokens";

/* Three working demos on a rotating phone stage. Autoplay stops for good the
   moment someone touches a demo, so a game or a slider is never rotated away
   mid-interaction. Side phones are inert and bring themselves forward on tap. */

const SLIDES = [
  { id: "game", label: "Word advergame", caption: "Word drop advergame", Demo: WordGame },
  { id: "report", label: "Interactive report", caption: "Interactive buying report", Demo: B2BReport },
  { id: "roi", label: "ROI calculator", caption: "Pipeline calculator", Demo: RoiCalculator },
];
const N = SLIDES.length;

const NOISE =
  "url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2790%27 height=%2790%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.85%27 numOctaves=%273%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27 opacity=%270.4%27/%3E%3C/svg%3E')";

const controlButton: React.CSSProperties = {
  width: 38,
  height: 38,
  borderRadius: 999,
  border: "1px solid rgba(255,255,250,.24)",
  background: "transparent",
  color: PAPER,
  cursor: "pointer",
  fontFamily: "'JetBrains Mono', monospace",
  fontSize: 14,
  display: "grid",
  placeItems: "center",
  flexShrink: 0,
  padding: 0,
  transition: "border-color 200ms cubic-bezier(.2,.7,.2,1), color 200ms cubic-bezier(.2,.7,.2,1)",
};

export function LiveBuildsCarousel() {
  const reduce = useReducedMotion();
  const [slide, setSlide] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [engaged, setEngaged] = useState(false);

  const engage = useCallback(() => setEngaged(true), []);
  /* Manual navigation also ends autoplay: once someone picks a demo, the stage
     stays where they put it. */
  const go = useCallback((i: number) => {
    setEngaged(true);
    setSlide(((i % N) + N) % N);
  }, []);

  useEffect(() => {
    if (hovered || engaged) return;
    const t = setInterval(() => setSlide((s) => (s + 1) % N), 6000);
    return () => clearInterval(t);
  }, [hovered, engaged]);

  const spring = reduce ? { duration: 0 } : { type: "spring" as const, stiffness: 170, damping: 26 };

  return (
    <>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onFocusCapture={() => setHovered(true)}
        onBlurCapture={() => setHovered(false)}
        style={{
          position: "relative",
          border: "1px solid var(--bw-rule)",
          borderRadius: 16,
          backgroundColor: "#080705",
          backgroundImage: `${NOISE},radial-gradient(at 18% 8%,oklch(0.6 0.13 84 / .42) 0%,rgba(8,7,5,0) 58%),radial-gradient(at 88% 96%,oklch(0.48 0.14 34 / .38) 0%,rgba(8,7,5,0) 62%)`,
          backgroundSize: "90px 90px,auto,auto",
          backgroundBlendMode: "overlay,normal,normal",
          padding: "58px 32px 30px",
          overflow: "hidden",
        }}
      >
        <span
          style={{
            position: "absolute",
            top: 22,
            left: 26,
            font: "500 10px/1 'JetBrains Mono',monospace",
            letterSpacing: ".2em",
            textTransform: "uppercase",
            color: GOLD,
          }}
        >
          {"// live builds"}
        </span>

        <div style={{ position: "relative", height: "clamp(430px,52vh,470px)", perspective: 1400, display: "grid", placeItems: "center" }}>
          {SLIDES.map(({ id, label, Demo }, i) => {
            const d = (i - slide + N) % N;
            const front = d === 0;
            const target = front
              ? { x: "0%", scale: 1, rotateY: 0, opacity: 1 }
              : d === 1
                ? { x: "70%", scale: 0.8, rotateY: -24, opacity: 0.55 }
                : { x: "-70%", scale: 0.8, rotateY: 24, opacity: 0.55 };
            return (
              <motion.div
                key={id}
                initial={false}
                animate={target}
                transition={spring}
                style={{
                  position: "absolute",
                  height: "100%",
                  aspectRatio: "9 / 19",
                  transformStyle: "preserve-3d",
                  zIndex: front ? 4 : 3,
                  cursor: front ? "auto" : "pointer",
                }}
                onClick={front ? undefined : () => go(i)}
                aria-hidden={!front}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    borderRadius: 34,
                    background: "#050505",
                    border: "1px solid rgba(255,255,250,.22)",
                    boxShadow: "0 40px 80px -40px rgba(0,0,0,.9)",
                    padding: 9,
                  }}
                >
                  <div
                    data-bw-phone=""
                    inert={!front}
                    onPointerDownCapture={front ? engage : undefined}
                    onKeyDownCapture={front ? engage : undefined}
                    style={{ position: "relative", height: "100%", borderRadius: 26, overflow: "hidden", background: SCREEN }}
                  >
                    <span
                      aria-hidden="true"
                      style={{ position: "absolute", top: 9, left: "50%", translate: "-50% 0", width: 58, height: 16, borderRadius: 999, background: "#050505", zIndex: 2 }}
                    />
                    <Demo onEngage={engage} />
                    {!front && <span aria-hidden="true" style={{ position: "absolute", inset: 0, background: "rgba(5,5,5,.35)" }} />}
                  </div>
                </div>
                {!front && <span className="sr-only">{label}</span>}
              </motion.div>
            );
          })}
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 20, paddingTop: 30 }}>
          <button className="interactive-p15 interactive-p16 interactive-p17" type="button" onClick={() => go(slide - 1)} aria-label="Previous demo" style={controlButton}>←</button>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }} role="tablist" aria-label="Live builds">
            {SLIDES.map((s, i) => {
              const on = i === slide;
              return (
                <button
                  key={s.id}
                  className="interactive-p18 interactive-p19"
                  type="button"
                  role="tab"
                  aria-selected={on}
                  aria-label={s.label}
                  onClick={() => go(i)}
                  style={{
                    height: 8,
                    width: on ? 26 : 8,
                    border: 0,
                    borderRadius: 999,
                    padding: 0,
                    cursor: "pointer",
                    background: on ? GOLD : PAPER,
                    opacity: on ? 1 : 0.35,
                    transition: "width .4s cubic-bezier(.2,.7,.2,1), opacity .4s ease, background-color .3s",
                  }}
                />
              );
            })}
          </div>
          <button className="interactive-p26 interactive-p27 interactive-p28" type="button" onClick={() => go(slide + 1)} aria-label="Next demo" style={controlButton}>→</button>
        </div>
      </div>
      <span style={{ font: "500 10px/1 'JetBrains Mono',monospace", letterSpacing: ".16em", textTransform: "uppercase", opacity: 0.42 }}>
        Fig. 0{slide + 1} — {SLIDES[slide].caption}, 2026
      </span>
    </>
  );
}
