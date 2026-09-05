"use client";

import { motion, useReducedMotion } from "motion/react";

/* DIRECTION CONTRACT — /about (impeccable surface round, seed 0978377f)
   THESIS: The About page is a letter to the founder we haven't met yet. It
     refuses the category default (hero statement, values grid, team grid).
   OWN-WORLD: Blackware's fixed identity: ink and paper, gold and rust, Archivo
     display, JetBrains Mono apparatus, the `//` idiom. Letter set at reading
     scale with a hanging annotation margin, one-device-pixel rules and
     brackets (discipline donated by the reference-rail challenger).
   STORY: A founder reads what we refuse, how an engagement opens, that four
     practices run as one system, and where we are. They trust the people and
     write back.
   FIRST VIEWPORT: eyebrow, a two-line display headline, then the letter's
     opening at reading measure with the first margin note bracketed to it.
     The primary action is the reply at the end of the letter.
   FORM: Founder's letter, candidate 5 of 7 on the grounded list, dealt by the
     roll. Facts in the margin are confirmed; the voice is a draft for review.
   FINISH: unreviewed and undocumented is unfinished; this build ends with
     the finish review, the verdict, DESIGN.md, and every shipping raster
     carrying its provenance. */

const GOLD = "#E6AF2E";

type Note = { label: string; value: string };
type Para = { note?: Note; text: string };

const LETTER: Para[] = [
  {
    note: { label: "Founded", value: "2025" },
    text: "We started Blackware Labs in 2025 after too many years watching good companies lose deals for bad reasons. The product was fine. The pipeline was built on outbound spray and a website nobody read, and the people who could fix that were three agencies and a freelancer away from each other.",
  },
  {
    note: { label: "What we refuse", value: "Pitch teams, templates, decks that sell the work" },
    text: "So here is what we decided not to do. We do not have a pitch team; the people you meet on the first call are the people who do the work. We do not start from a template, ours or anyone's. And we do not send a deck to sell the work, because if the work needs a deck, it is the wrong work.",
  },
  {
    note: { label: "How an engagement opens", value: "A two-week listening phase" },
    text: "Every engagement opens with two weeks of listening. We sit in on your sales calls, read the lost-deal notes, and ask your reps what they wish the website said. Then we diagnose. Only then do we design, so the work is built on how your team actually sells, not on how a template imagines they might.",
  },
  {
    note: { label: "Four practices", value: "One system" },
    text: "We run four practices as one system: brand design, websites and portfolios, interactive marketing assets, and B2B sales activation. Most clients come for one. Most end up using all four, not because we upsell, but because a site that qualifies buyers wants a demo they can touch, and a demo wants a brand that looks like it belongs in the room.",
  },
  {
    note: { label: "Where we are", value: "India and Dubai, remote worldwide" },
    text: "We are based in India and Dubai and work with teams wherever they are. In practice that means your day is covered: someone is awake and working on your account from before your morning until well after it. It also means we have sat on both sides of the time zone problem, and we build for buyers who never meet a salesperson in their own hours.",
  },
  {
    note: { label: "What we ask of you", value: "A decision-maker in the room" },
    text: "What we ask in return is small and non-negotiable: a real decision-maker in the room, honesty about the numbers, and the patience to let the listening phase finish before anyone asks for a mockup. Give us that, and we will give you a pipeline you can explain to your board without slides.",
  },
];

/* Six seats. Names, roles and portraits are placeholders until the founder
   supplies them; the page says so out loud rather than pretending. */
const SEATS = [
  "Founder & creative director",
  "Head of brand",
  "Lead web engineer",
  "Interactive assets lead",
  "Sales activation lead",
  "Research lead",
];

const mono: React.CSSProperties = { fontFamily: "'JetBrains Mono', monospace", fontWeight: 500, fontSize: 10, letterSpacing: ".16em", textTransform: "uppercase" };

export function FounderLetter() {
  const reduce = !!useReducedMotion();
  const rise = (delay = 0) =>
    reduce
      ? {}
      /* Entrances start legible (0.4), never from blank: if the observer never fires, the letter still reads. */
      : { initial: { opacity: 0.4, y: 12 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.2 }, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number], delay } };

  return (
    <div data-bw-letter="" style={{ containerType: "inline-size", display: "flex", flexDirection: "column", gap: 56 }}>
      {/* Draft notice: the facts are confirmed, the voice is not yet. */}
      <div style={{ display: "flex", gap: 14, alignItems: "flex-start", padding: "16px 20px", borderRadius: 14, border: `1px solid rgba(230,175,46,.55)`, background: "rgba(230,175,46,.08)", maxWidth: "72ch" }}>
        <span aria-hidden="true" style={{ width: 8, height: 8, borderRadius: "50%", background: GOLD, marginTop: 5, flexShrink: 0, animation: "bwBlink 1.6s steps(1,end) infinite" }} />
        <span style={{ fontSize: 13.5, lineHeight: 1.5 }}>
          <span style={{ ...mono, color: "#B8871C", display: "block", marginBottom: 4 }}>Draft for the founder&apos;s review</span>
          The facts in the margin are confirmed. The wording is a first draft in the site&apos;s voice, and the six signatures below are placeholders until names, roles and portraits are supplied. Remove this notice when the letter is yours.
        </span>
      </div>

      {/* Letter */}
      <article data-bw-letter-grid="" style={{ display: "grid", gridTemplateColumns: "minmax(200px, 260px) minmax(0, 68ch)", columnGap: "clamp(32px, 5vw, 80px)", rowGap: 0, alignItems: "start" }}>
        {/* Letterhead */}
        <div data-bw-letter-note="" style={{ paddingTop: 6, ...mono, opacity: 0.5, lineHeight: 1.8 }}>
          Blackware Labs<br />India · Dubai<br />September 2026
        </div>
        <motion.p {...rise()} style={{ margin: 0, fontFamily: "Inter, sans-serif", fontSize: "clamp(20px, 1.6vw, 23px)", lineHeight: 1.45, fontWeight: 700, letterSpacing: "-.02em", paddingBottom: 28, borderBottom: "1px solid var(--bw-rule)", marginBottom: 36 }}>
          To the founder deciding whether to hire us,
        </motion.p>

        {LETTER.map((p, i) => (
          <Paragraph key={i} p={p} index={i} rise={rise} reduce={reduce} />
        ))}

        {/* Sign-off */}
        <div data-bw-letter-note="" aria-hidden="true" />
        <motion.p {...rise()} style={{ margin: "8px 0 0", fontFamily: "Inter, sans-serif", fontSize: 19, lineHeight: 1.6, fontWeight: 500 }}>
          Write back when you are ready. We answer ourselves.
        </motion.p>

        {/* Signatures */}
        <div data-bw-letter-note="" style={{ paddingTop: 46, ...mono, opacity: 0.5, lineHeight: 1.8 }}>
          Signed<br />
          <span style={{ color: "#B8871C", opacity: 1 }}>Six placeholder seats</span>
        </div>
        <motion.div {...rise(0.05)} style={{ paddingTop: 40, display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "18px 24px" }}>
          {SEATS.map((role, i) => (
            <div key={role} style={{ display: "flex", gap: 12, alignItems: "center" }}>
              <span aria-hidden="true" style={{ width: 44, height: 44, borderRadius: "50%", border: "1px dashed var(--bw-fg)", opacity: 0.45, display: "grid", placeItems: "center", ...mono, fontSize: 9, flexShrink: 0 }}>0{i + 1}</span>
              <span style={{ display: "flex", flexDirection: "column", gap: 3, minWidth: 0 }}>
                <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 800, fontSize: 15, letterSpacing: "-.02em", opacity: 0.45 }}>Name to add</span>
                <span style={{ fontSize: 12.5, opacity: 0.7 }}>{role}</span>
                <span style={{ ...mono, fontSize: 8, color: "#B8871C" }}>placeholder</span>
              </span>
            </div>
          ))}
        </motion.div>
      </article>
    </div>
  );
}

function Paragraph({ p, index, rise, reduce }: { p: Para; index: number; rise: (d?: number) => object; reduce: boolean }) {
  return (
    <>
      <div data-bw-letter-note="" style={{ position: "relative", paddingLeft: 14, marginBottom: 30 }}>
        {p.note && (
          <>
            {/* Bracket: one-device-pixel rule that draws in as the paragraph arrives */}
            <motion.span
              aria-hidden="true"
              style={{ position: "absolute", left: 0, top: 4, bottom: 4, width: 1, background: "var(--bw-fg)", opacity: 0.5, transformOrigin: "top" }}
              initial={reduce ? false : { scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            />
            <motion.div {...rise(0.08)} style={{ display: "flex", flexDirection: "column", gap: 5 }}>
              <span style={{ ...mono, color: "#B8871C" }}>{p.note.label}</span>
              <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: 14.5, letterSpacing: "-.015em", lineHeight: 1.35, textWrap: "pretty" }}>{p.note.value}</span>
            </motion.div>
          </>
        )}
      </div>
      <motion.p {...rise()} style={{ margin: "0 0 30px", fontFamily: "Inter, sans-serif", fontSize: 19, lineHeight: 1.6, fontWeight: 500, textWrap: "pretty", letterSpacing: "-.005em" }}>
        {index === 0 && <span style={{ ...mono, fontSize: 9, color: "#B8871C", display: "block", marginBottom: 10 }}>/ 01</span>}
        {p.text}
      </motion.p>
    </>
  );
}
