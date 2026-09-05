"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { FILL, GOLD, INK_2, INK_3, LINE, PAPER, RUST, SPRING, display, ghostButton, mono, screenPad, solidButton } from "./tokens";

/* A word-drop advergame for a fictional D2C matcha brand. Three product words,
   scrambled; tap letters in order. Solving all three unlocks a discount code.
   Scrambles are fixed (not Math.random) so server and client render the same tiles. */

const ROUNDS = [
  { word: "WHISK", scrambled: "SHWKI", hint: "Eighty strokes in a W. The tool." },
  { word: "UMAMI", scrambled: "MIAUM", hint: "The fifth taste your first sip lands on." },
  { word: "KYOTO", scrambled: "OTKYO", hint: "Where our Uji leaves are shade-grown." },
];

export function WordGame({ onEngage }: { onEngage?: () => void }) {
  const reduce = useReducedMotion();
  const [round, setRound] = useState(0);
  const [placed, setPlaced] = useState<number[]>([]);
  const [shake, setShake] = useState<{ i: number; n: number } | null>(null);
  const [solved, setSolved] = useState(false);
  const [done, setDone] = useState(false);

  const r = ROUNDS[round];
  const expected = r.word[placed.length];

  function tap(i: number) {
    onEngage?.();
    if (solved || placed.includes(i)) return;
    if (r.scrambled[i] === expected) {
      const next = [...placed, i];
      setPlaced(next);
      if (next.length === r.word.length) setSolved(true);
    } else {
      setShake((s) => ({ i, n: (s?.n ?? 0) + 1 }));
    }
  }

  useEffect(() => {
    if (!solved) return;
    const t = setTimeout(() => {
      if (round === ROUNDS.length - 1) setDone(true);
      else {
        setRound(round + 1);
        setPlaced([]);
        setSolved(false);
      }
    }, 1100);
    return () => clearTimeout(t);
  }, [solved, round]);

  function reset() {
    onEngage?.();
    setRound(0);
    setPlaced([]);
    setSolved(false);
    setDone(false);
    setShake(null);
  }

  /* Five tiles share the row; on the narrowest phone they shrink together. */
  const row: React.CSSProperties = { display: "grid", gridTemplateColumns: "repeat(5, minmax(0, 1fr))", gap: 6, maxWidth: 186, width: "100%", alignSelf: "center" };
  const tile: React.CSSProperties = {
    appearance: "none",
    width: "100%",
    aspectRatio: "32 / 38",
    borderRadius: 8,
    border: `1px solid ${LINE}`,
    background: FILL,
    color: PAPER,
    cursor: "pointer",
    display: "grid",
    placeItems: "center",
    padding: 0,
    ...display(15, 800),
  };

  return (
    <div style={screenPad} aria-label="Word drop advergame demo">
      {/* Brand bar */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
        <span style={{ ...display(16, 900), letterSpacing: ".08em" }}>KŌYO</span>
        <span style={{ ...mono(8), color: INK_3 }}>Word drop</span>
      </div>

      {/* Round progress */}
      <div style={{ display: "flex", gap: 4, marginTop: 14 }} aria-hidden="true">
        {ROUNDS.map((_, i) => (
          <motion.span
            key={i}
            style={{ height: 3, flex: 1, borderRadius: 2, background: LINE, overflow: "hidden", display: "block" }}
          >
            <motion.span
              style={{ display: "block", height: "100%", background: GOLD, transformOrigin: "left" }}
              animate={{ scaleX: done || i < round || (i === round && solved) ? 1 : i === round ? placed.length / r.word.length : 0 }}
              transition={reduce ? { duration: 0 } : SPRING}
            />
          </motion.span>
        ))}
      </div>

      <AnimatePresence mode="wait" initial={false}>
        {done ? (
          <motion.div
            key="reward"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: -8 }}
            transition={SPRING}
            style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", gap: 14, textAlign: "center" }}
          >
            <span style={{ ...mono(8), color: GOLD }}>Three for three</span>
            <span style={{ ...display(34, 900), lineHeight: 0.95 }}>15% off<br />unlocked</span>
            <span
              style={{
                alignSelf: "center",
                border: `1px dashed rgba(230,175,46,.6)`,
                borderRadius: 8,
                padding: "8px 14px",
                ...mono(12, ".22em"),
                color: GOLD,
              }}
            >
              KOYO15
            </span>
            <p style={{ margin: 0, fontSize: 11, lineHeight: 1.45, color: INK_2 }}>
              Applies to your first tin. Code is saved to your cart for 48 hours.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 4 }}>
              <button type="button" style={solidButton} onClick={onEngage}>Claim in shop →</button>
              <button type="button" style={{ ...ghostButton, border: 0, color: INK_3 }} onClick={reset}>Play again</button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key={`round-${round}`}
            initial={reduce ? false : { opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={reduce ? undefined : { opacity: 0, x: -24 }}
            transition={SPRING}
            style={{ flex: 1, display: "flex", flexDirection: "column" }}
          >
            <span style={{ ...mono(8), color: INK_3, marginTop: 18 }}>
              Round {round + 1} of {ROUNDS.length}
            </span>
            <p style={{ margin: "8px 0 0", fontSize: 14, lineHeight: 1.35, fontWeight: 600, letterSpacing: "-.01em", minHeight: 38 }}>
              {r.hint}
            </p>

            {/* Answer slots */}
            <div style={{ ...row, marginTop: 22 }}>
              {r.word.split("").map((_, slot) => {
                const tileIndex = placed[slot];
                const filled = tileIndex !== undefined;
                return (
                  <span
                    key={slot}
                    style={{
                      width: "100%",
                      aspectRatio: "32 / 38",
                      borderRadius: 8,
                      border: `1px ${filled ? "solid" : "dashed"} ${solved ? GOLD : LINE}`,
                      display: "grid",
                      placeItems: "center",
                      transition: "border-color .3s",
                    }}
                  >
                    {filled && (
                      <motion.span
                        layoutId={`koyo-${round}-${tileIndex}`}
                        transition={reduce ? { duration: 0 } : SPRING}
                        style={{ ...display(15, 800), color: solved ? GOLD : PAPER }}
                      >
                        {r.scrambled[tileIndex]}
                      </motion.span>
                    )}
                  </span>
                );
              })}
            </div>

            {/* Letter rack */}
            <div style={{ ...row, marginTop: 12 }}>
              {r.scrambled.split("").map((ch, i) => {
                if (placed.includes(i)) return <span key={i} style={{ width: "100%", aspectRatio: "32 / 38" }} aria-hidden="true" />;
                const shaking = shake?.i === i;
                return (
                  <motion.button
                    key={`${i}-${shaking ? shake!.n : 0}`}
                    type="button"
                    aria-label={`Letter ${ch}`}
                    onClick={() => tap(i)}
                    style={{ ...tile, borderColor: shaking ? RUST : LINE }}
                    whileTap={reduce ? undefined : { scale: 0.9 }}
                    initial={false}
                    animate={shaking && !reduce ? { x: [0, -6, 6, -4, 4, 0] } : { x: 0 }}
                    transition={{ duration: 0.35 }}
                  >
                    <motion.span layoutId={`koyo-${round}-${i}`} transition={reduce ? { duration: 0 } : SPRING}>
                      {ch}
                    </motion.span>
                  </motion.button>
                );
              })}
            </div>

            <div style={{ marginTop: "auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ ...mono(8), color: INK_3 }}>Solve 3 → 15% off</span>
              <AnimatePresence>
                {solved && (
                  <motion.span
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={SPRING}
                    style={{ ...mono(8), color: GOLD }}
                  >
                    Nice · {r.word}
                  </motion.span>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
