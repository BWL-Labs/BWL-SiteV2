"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Compass,
  Copy,
  Gamepad2,
  Globe,
  Layers,
  Mail,
  Megaphone,
  PenLine,
  Rocket,
  Search,
  Snail,
  Sparkles,
  Target,
  Timer,
  TrendingUp,
  Users,
  Hourglass,
  EyeOff,
} from "lucide-react";

/* The contact page as a short conversation. Three questions a strategist would
   ask in the first five minutes of a call, answered by tapping; the visitor's
   answers accumulate in a transcript so the page visibly listens. Then the
   details, then a review. There is no mail backend in this project, so Send
   composes the transcript into an email to the inquiries inbox and confirms. */

export const INQUIRIES = "inquiries@blackwarelabs.com";
export const SUPPORT = "support@blackwarelabs.com";

const GOLD = "#E6AF2E";
const RUST = "#C84A1F";

type Option = { id: string; label: string; Icon: typeof Globe };
type Step = { id: "trigger" | "destination" | "pain"; frame: string; question: string; options: Option[]; other: string };

const STEPS: Step[] = [
  {
    id: "trigger",
    frame: "Let’s start with what’s on your mind.",
    question: "What made you reach out today?",
    other: "Something else",
    options: [
      { id: "web", label: "We need a website or web experience built", Icon: Globe },
      { id: "games", label: "We want branded games or interactive campaign assets", Icon: Gamepad2 },
      { id: "content", label: "We need creative or content production at scale", Icon: Layers },
      { id: "ai", label: "We want to show up in AI search and answer engines", Icon: Search },
      { id: "exploring", label: "We’re not sure yet, just exploring", Icon: Compass },
    ],
  },
  {
    id: "destination",
    frame: "Picture three months from now.",
    question: "If this works out, what does “done” look like for you?",
    other: "Something specific",
    options: [
      { id: "leads", label: "More qualified leads coming in", Icon: TrendingUp },
      { id: "launch", label: "A launch we’re proud to show people", Icon: Rocket },
      { id: "output", label: "Faster, cheaper creative output", Icon: Timer },
      { id: "brand", label: "A brand people finally remember", Icon: Sparkles },
    ],
  },
  {
    id: "pain",
    frame: "Be blunt. This is the part we actually solve.",
    question: "What’s the one thing that keeps getting in the way?",
    other: "Something else",
    options: [
      { id: "agencies", label: "Agencies are too slow or too expensive", Icon: Snail },
      { id: "generic", label: "Our current work looks generic", Icon: EyeOff },
      { id: "speed", label: "We can’t produce content fast enough", Icon: Hourglass },
      { id: "discovery", label: "Nobody’s discovering us online", Icon: Megaphone },
    ],
  },
];

const RAIL = ["The trigger", "The destination", "The pain", "Your details", "Send"];

type Answer = { optionId: string | null; text: string };
type Details = { name: string; email: string; company: string; note: string };

const mono: React.CSSProperties = { fontFamily: "'JetBrains Mono', monospace", fontWeight: 500, fontSize: 10.5, letterSpacing: ".14em", textTransform: "uppercase" };
const field: React.CSSProperties = { border: 0, borderBottom: "1px solid var(--bw-rule)", background: "none", color: "var(--bw-fg)", fontSize: 18, fontWeight: 500, padding: "10px 0", outline: "none", width: "100%", fontFamily: "Inter, sans-serif" };
const label: React.CSSProperties = { ...mono, opacity: 0.55 };

function answerText(step: Step, a: Answer) {
  if (a.optionId) return step.options.find((o) => o.id === a.optionId)?.label ?? "";
  return a.text.trim();
}

export function ContactJourney() {
  const reduce = !!useReducedMotion();
  const [stage, setStage] = useState(0); // 0..2 questions, 3 details, 4 review, 5 sent
  const [answers, setAnswers] = useState<Answer[]>(STEPS.map(() => ({ optionId: null, text: "" })));
  const [otherOpen, setOtherOpen] = useState(false);
  const [details, setDetails] = useState<Details>({ name: "", email: "", company: "", note: "" });
  const [copied, setCopied] = useState(false);
  const [pending, setPending] = useState<number | null>(null);
  const otherRef = useRef<HTMLInputElement>(null);

  /* A tap answers and, after a beat, advances; the beat lets the selection register before the card moves. */
  useEffect(() => {
    if (pending === null) return;
    const t = window.setTimeout(() => { setStage(pending + 1); setPending(null); }, reduce ? 80 : 420);
    return () => window.clearTimeout(t);
  }, [pending, reduce]);
  useEffect(() => { if (otherOpen) otherRef.current?.focus(); }, [otherOpen]);

  const go = useCallback((n: number) => { setOtherOpen(false); setStage(Math.max(0, Math.min(5, n))); }, []);

  const pick = useCallback((stepIdx: number, optionId: string) => {
    setAnswers((a) => a.map((x, i) => (i === stepIdx ? { optionId, text: "" } : x)));
    setOtherOpen(false);
    setPending(stepIdx);
  }, []);

  const submitOther = (stepIdx: number) => {
    if (!answers[stepIdx].text.trim()) return;
    setOtherOpen(false);
    setStage(stepIdx + 1);
  };

  const summary = useMemo(() => {
    const lines = STEPS.map((s, i) => `${s.question}\n→ ${answerText(s, answers[i]) || "(skipped)"}`);
    const who = [details.name, details.company].filter(Boolean).join(", ");
    return [`From: ${who || "—"} <${details.email || "—"}>`, "", ...lines, details.note.trim() ? `\nAnything else:\n${details.note.trim()}` : ""].join("\n");
  }, [answers, details]);

  const mailHref = useMemo(() => {
    const subject = `New inquiry${details.company ? ` · ${details.company}` : ""}`;
    return `mailto:${INQUIRIES}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(summary)}`;
  }, [summary, details.company]);

  const detailsValid = details.name.trim().length > 1 && /.+@.+\..+/.test(details.email);

  const copy = async () => {
    try { await navigator.clipboard.writeText(summary); setCopied(true); setTimeout(() => setCopied(false), 1600); } catch { /* clipboard blocked; the mail link still works */ }
  };

  const spring = reduce ? { duration: 0 } : { type: "spring" as const, stiffness: 220, damping: 26 };
  const progress = Math.min(1, stage / 5);

  return (
    <div style={{ containerType: "inline-size" }}>
    <div data-bw-cj="" style={{ display: "grid", gridTemplateColumns: "220px minmax(0, 1fr) 300px", gap: "clamp(28px, 4vw, 64px)", alignItems: "start" }}>
      {/* Rail */}
      <ol data-bw-cj-rail="" aria-label="Steps" style={{ listStyle: "none", margin: 0, padding: "6px 0 0", display: "flex", flexDirection: "column", gap: 18, position: "sticky", top: 120 }}>
        {RAIL.map((name, i) => {
          const done = stage > i, on = stage === i;
          const reachable = i <= Math.min(stage, 3) || (i === 4 && detailsValid && stage >= 3);
          return (
            <li key={name} style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <button type="button" disabled={!reachable} onClick={() => go(i)} aria-current={on ? "step" : undefined} style={{ appearance: "none", border: 0, background: "transparent", padding: 0, display: "flex", alignItems: "center", gap: 12, cursor: reachable ? "pointer" : "default", color: "var(--bw-fg)", textAlign: "left" }}>
                <motion.span animate={{ backgroundColor: on ? GOLD : done ? "var(--bw-fg)" : "rgba(0,0,0,0)", borderColor: on ? GOLD : done ? "var(--bw-fg)" : "var(--bw-rule)" }} transition={spring} style={{ width: 26, height: 26, borderRadius: "50%", border: "1px solid", display: "grid", placeItems: "center", color: on ? "#080705" : done ? "var(--bw-bg)" : "var(--bw-fg)", ...mono, fontSize: 9.5, letterSpacing: 0, flexShrink: 0 }}>
                  {done ? <Check size={12} strokeWidth={2.6} aria-hidden="true" /> : `0${i + 1}`}
                </motion.span>
                <span style={{ fontSize: 13.5, fontWeight: on ? 700 : 500, opacity: on ? 1 : done ? 0.8 : 0.45, letterSpacing: "-.01em" }}>{name}</span>
              </button>
            </li>
          );
        })}
        <li aria-hidden="true" style={{ marginTop: 6, height: 2, background: "var(--bw-rule)", borderRadius: 1, overflow: "hidden" }}>
          <motion.span style={{ display: "block", height: "100%", background: GOLD, transformOrigin: "left" }} animate={{ scaleX: progress }} transition={spring} />
        </li>
      </ol>

      {/* Card */}
      <div style={{ display: "grid", minHeight: 420 }}>
        <AnimatePresence initial={false}>
          <motion.div key={stage} style={{ gridArea: "1 / 1" }} initial={reduce ? false : { opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={reduce ? undefined : { opacity: 0, y: -10, transition: { duration: 0.16 } }} transition={spring}>
            {stage < 3 && (() => {
              const step = STEPS[stage];
              const a = answers[stage];
              return (
                <section aria-labelledby={`q-${step.id}`} style={{ display: "flex", flexDirection: "column", gap: 22 }}>
                  <span style={{ ...mono, color: "#B8871C" }}>{`0${stage + 1} · ${RAIL[stage]}`}</span>
                  <p style={{ margin: 0, fontSize: 15, fontWeight: 500, opacity: 0.6, letterSpacing: "-.005em" }}>{step.frame}</p>
                  <h2 id={`q-${step.id}`} style={{ margin: 0, fontWeight: 800, fontSize: "clamp(28px, 3.2vw, 44px)", lineHeight: 1.02, letterSpacing: "-.04em", maxWidth: "20ch", textWrap: "balance" }}>{step.question}</h2>
                  <div role="group" aria-label="Choose one" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(230px, 1fr))", gap: 10, marginTop: 6 }}>
                    {step.options.map((o) => {
                      const on = a.optionId === o.id;
                      return (
                        <motion.button key={o.id} type="button" aria-pressed={on} onClick={() => pick(stage, o.id)} whileTap={reduce ? undefined : { scale: 0.98 }} style={{ appearance: "none", textAlign: "left", display: "flex", alignItems: "center", gap: 14, padding: "16px 18px", borderRadius: 14, border: `1px solid ${on ? GOLD : "var(--bw-glass-bd)"}`, background: on ? "rgba(230,175,46,.12)" : "var(--bw-glass)", color: "var(--bw-fg)", cursor: "pointer", fontFamily: "Inter, sans-serif", fontSize: 15, fontWeight: 600, letterSpacing: "-.01em", lineHeight: 1.3, transition: "border-color .2s, background-color .2s" }}>
                          <span aria-hidden="true" style={{ width: 38, height: 38, borderRadius: 10, display: "grid", placeItems: "center", flexShrink: 0, background: on ? GOLD : "var(--bw-fg)", color: on ? "#080705" : "var(--bw-bg)", transition: "background-color .2s" }}>
                            <o.Icon size={17} strokeWidth={1.8} />
                          </span>
                          {o.label}
                        </motion.button>
                      );
                    })}
                    <button type="button" aria-expanded={otherOpen} onClick={() => { setOtherOpen(true); setAnswers((arr) => arr.map((x, i) => (i === stage ? { ...x, optionId: null } : x))); }} style={{ appearance: "none", textAlign: "left", display: "flex", alignItems: "center", gap: 14, padding: "16px 18px", borderRadius: 14, border: `1px dashed ${otherOpen || (!a.optionId && a.text) ? GOLD : "var(--bw-rule)"}`, background: "transparent", color: "var(--bw-fg)", cursor: "pointer", fontFamily: "Inter, sans-serif", fontSize: 15, fontWeight: 600, letterSpacing: "-.01em" }}>
                      <span aria-hidden="true" style={{ width: 38, height: 38, borderRadius: 10, display: "grid", placeItems: "center", flexShrink: 0, border: "1px dashed var(--bw-fg)", opacity: 0.7 }}><PenLine size={17} strokeWidth={1.8} /></span>
                      {step.other}
                    </button>
                  </div>
                  <AnimatePresence initial={false}>
                    {otherOpen && (
                      <motion.form key="other" onSubmit={(e) => { e.preventDefault(); submitOther(stage); }} initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={spring} style={{ display: "flex", gap: 12, alignItems: "flex-end", overflow: "hidden", margin: 0 }}>
                        <label style={{ flex: 1, display: "flex", flexDirection: "column", gap: 6 }}>
                          <span style={label}>In your words</span>
                          <input ref={otherRef} value={a.text} onChange={(e) => setAnswers((arr) => arr.map((x, i) => (i === stage ? { optionId: null, text: e.target.value } : x)))} placeholder="One line is plenty" style={field} />
                        </label>
                        <button type="submit" disabled={!a.text.trim()} style={{ appearance: "none", display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 18px", borderRadius: 999, border: 0, background: "var(--bw-fg)", color: "var(--bw-bg)", cursor: a.text.trim() ? "pointer" : "default", opacity: a.text.trim() ? 1 : 0.4, fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: 14 }}>
                          Next <ArrowRight size={14} strokeWidth={2.2} aria-hidden="true" />
                        </button>
                      </motion.form>
                    )}
                  </AnimatePresence>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 6 }}>
                    <button type="button" onClick={() => go(stage - 1)} disabled={stage === 0} style={{ appearance: "none", background: "transparent", border: 0, padding: 0, display: "inline-flex", alignItems: "center", gap: 6, cursor: stage === 0 ? "default" : "pointer", opacity: stage === 0 ? 0.3 : 0.7, color: "var(--bw-fg)", ...mono }}>
                      <ArrowLeft size={12} strokeWidth={2.2} aria-hidden="true" /> Back
                    </button>
                    <button type="button" onClick={() => go(stage + 1)} style={{ appearance: "none", background: "transparent", border: 0, padding: 0, cursor: "pointer", opacity: 0.55, color: "var(--bw-fg)", ...mono }}>Skip this one</button>
                  </div>
                </section>
              );
            })()}

            {stage === 3 && (
              <form onSubmit={(e) => { e.preventDefault(); if (detailsValid) go(4); }} style={{ display: "flex", flexDirection: "column", gap: 22 }}>
                <span style={{ ...mono, color: "#B8871C" }}>04 · Your details</span>
                <p style={{ margin: 0, fontSize: 15, fontWeight: 500, opacity: 0.6 }}>Almost there. Who should we write back to?</p>
                <h2 style={{ margin: 0, fontWeight: 800, fontSize: "clamp(28px, 3.2vw, 44px)", lineHeight: 1.02, letterSpacing: "-.04em", maxWidth: "20ch" }}>A strategist replies within one working day.</h2>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "18px 28px", marginTop: 6 }} data-bw-cj-fields="">
                  <label style={{ display: "flex", flexDirection: "column", gap: 8 }}><span style={label}>Name</span><input required autoComplete="name" value={details.name} onChange={(e) => setDetails((d) => ({ ...d, name: e.target.value }))} placeholder="Jordan Smith" style={field} /></label>
                  <label style={{ display: "flex", flexDirection: "column", gap: 8 }}><span style={label}>Work email</span><input required type="email" autoComplete="email" value={details.email} onChange={(e) => setDetails((d) => ({ ...d, email: e.target.value }))} placeholder="jordan@company.com" style={field} /></label>
                  <label style={{ display: "flex", flexDirection: "column", gap: 8 }}><span style={label}>Company</span><input autoComplete="organization" value={details.company} onChange={(e) => setDetails((d) => ({ ...d, company: e.target.value }))} placeholder="Company name" style={field} /></label>
                  <label style={{ display: "flex", flexDirection: "column", gap: 8 }}><span style={label}>Anything else · optional</span><input value={details.note} onChange={(e) => setDetails((d) => ({ ...d, note: e.target.value }))} placeholder="Timeline, budget range, a link" style={field} /></label>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, marginTop: 6, flexWrap: "wrap" }}>
                  <button type="button" onClick={() => go(2)} style={{ appearance: "none", background: "transparent", border: 0, padding: 0, display: "inline-flex", alignItems: "center", gap: 6, cursor: "pointer", opacity: 0.7, color: "var(--bw-fg)", ...mono }}><ArrowLeft size={12} strokeWidth={2.2} aria-hidden="true" /> Back</button>
                  <button type="submit" disabled={!detailsValid} style={{ appearance: "none", display: "inline-flex", alignItems: "center", gap: 10, padding: "16px 24px", borderRadius: 999, border: 0, background: "var(--bw-fg)", color: "var(--bw-bg)", cursor: detailsValid ? "pointer" : "default", opacity: detailsValid ? 1 : 0.4, fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: 15 }}>
                    Review <ArrowRight size={15} strokeWidth={2.2} aria-hidden="true" />
                  </button>
                </div>
              </form>
            )}

            {stage === 4 && (
              <section style={{ display: "flex", flexDirection: "column", gap: 22 }}>
                <span style={{ ...mono, color: "#B8871C" }}>05 · Send</span>
                <p style={{ margin: 0, fontSize: 15, fontWeight: 500, opacity: 0.6 }}>Here is what we will read first.</p>
                <h2 style={{ margin: 0, fontWeight: 800, fontSize: "clamp(28px, 3.2vw, 44px)", lineHeight: 1.02, letterSpacing: "-.04em", maxWidth: "20ch" }}>Sound right, {details.name.split(" ")[0] || "there"}?</h2>
                <pre style={{ margin: 0, whiteSpace: "pre-wrap", fontFamily: "'JetBrains Mono', monospace", fontSize: 12.5, lineHeight: 1.65, padding: "18px 20px", borderRadius: 14, border: "1px solid var(--bw-glass-bd)", background: "var(--bw-glass)", opacity: 0.9 }}>{summary}</pre>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
                  <button type="button" onClick={() => go(3)} style={{ appearance: "none", background: "transparent", border: 0, padding: 0, display: "inline-flex", alignItems: "center", gap: 6, cursor: "pointer", opacity: 0.7, color: "var(--bw-fg)", ...mono }}><ArrowLeft size={12} strokeWidth={2.2} aria-hidden="true" /> Edit</button>
                  <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                    <button type="button" onClick={copy} style={{ appearance: "none", display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 18px", borderRadius: 999, border: "1px solid var(--bw-fg)", background: "transparent", color: "var(--bw-fg)", cursor: "pointer", fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: 14 }}>
                      {copied ? <Check size={14} strokeWidth={2.4} aria-hidden="true" /> : <Copy size={14} strokeWidth={2} aria-hidden="true" />}{copied ? "Copied" : "Copy summary"}
                    </button>
                    <a href={mailHref} onClick={() => setTimeout(() => go(5), 300)} style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "16px 24px", borderRadius: 999, background: "var(--bw-fg)", color: "var(--bw-bg)", fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: 15, textDecoration: "none" }}>
                      <Mail size={15} strokeWidth={2} aria-hidden="true" /> Send to {INQUIRIES.split("@")[0]}
                    </a>
                  </div>
                </div>
                <span style={{ fontSize: 12.5, opacity: 0.55, lineHeight: 1.5 }}>Send opens your mail app with this summary addressed to {INQUIRIES}. Nothing is stored on this site.</span>
              </section>
            )}

            {stage === 5 && (
              <section style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                <span style={{ ...mono, color: "#B8871C" }}>Sent</span>
                <h2 style={{ margin: 0, fontWeight: 800, fontSize: "clamp(28px, 3.2vw, 44px)", lineHeight: 1.02, letterSpacing: "-.04em", maxWidth: "18ch" }}>Got it. A strategist writes back within one working day.</h2>
                <p style={{ margin: 0, fontSize: 16, lineHeight: 1.55, opacity: 0.7, maxWidth: "52ch" }}>If your mail app did not open, copy the summary and send it to {INQUIRIES}, or call us on the numbers to the right.</p>
                <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                  <button type="button" onClick={copy} style={{ appearance: "none", display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 18px", borderRadius: 999, border: "1px solid var(--bw-fg)", background: "transparent", color: "var(--bw-fg)", cursor: "pointer", fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: 14 }}>
                    {copied ? <Check size={14} strokeWidth={2.4} aria-hidden="true" /> : <Copy size={14} strokeWidth={2} aria-hidden="true" />}{copied ? "Copied" : "Copy summary"}
                  </button>
                  <button type="button" onClick={() => { setAnswers(STEPS.map(() => ({ optionId: null, text: "" }))); setDetails({ name: "", email: "", company: "", note: "" }); go(0); }} style={{ appearance: "none", background: "transparent", border: 0, padding: "14px 6px", cursor: "pointer", opacity: 0.6, color: "var(--bw-fg)", ...mono }}>Start over</button>
                </div>
              </section>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Transcript */}
      <aside data-bw-cj-transcript="" aria-live="polite" style={{ position: "sticky", top: 120, display: "flex", flexDirection: "column", gap: 12, padding: "20px 22px", borderRadius: 16, border: "1px solid var(--bw-glass-bd)", background: "var(--bw-glass)" }}>
        <span style={{ ...mono, opacity: 0.5 }}>What we’ve heard so far</span>
        {STEPS.map((s, i) => {
          const t = answerText(s, answers[i]);
          const skipped = stage > i && !t;
          if (!t && !skipped) return null;
          return (
            <motion.div key={s.id} initial={reduce ? false : { opacity: 0, x: 8 }} animate={{ opacity: 1, x: 0 }} transition={spring} style={{ display: "flex", flexDirection: "column", gap: 4, paddingTop: 10, borderTop: "1px solid var(--bw-rule)" }}>
              <span style={{ ...mono, fontSize: 9, opacity: 0.5 }}>{RAIL[i]}</span>
              <span style={{ fontSize: 14, fontWeight: 600, lineHeight: 1.35, letterSpacing: "-.01em", opacity: skipped ? 0.45 : 1 }}>{skipped ? "Skipped, for now" : t}</span>
            </motion.div>
          );
        })}
        {answers.every((a) => !a.optionId && !a.text) && stage === 0 && (
          <span style={{ fontSize: 13.5, lineHeight: 1.5, opacity: 0.6 }}>Your answers appear here as you go. Three taps, then your details. About ninety seconds.</span>
        )}
        {stage >= 3 && (details.name || details.company) && (
          <div style={{ display: "flex", flexDirection: "column", gap: 4, paddingTop: 10, borderTop: "1px solid var(--bw-rule)" }}>
            <span style={{ ...mono, fontSize: 9, opacity: 0.5 }}>From</span>
            <span style={{ fontSize: 14, fontWeight: 600 }}>{[details.name, details.company].filter(Boolean).join(" · ")}</span>
          </div>
        )}
      </aside>
    </div>
    </div>
  );
}

/* ---------- Offices ---------- */

export function ContactOffices() {
  const block: React.CSSProperties = { display: "flex", flexDirection: "column", gap: 10, paddingTop: 28, borderTop: "1px solid var(--bw-rule)" };
  const h: React.CSSProperties = { ...mono, opacity: 0.5 };
  const big: React.CSSProperties = { fontSize: 18, fontWeight: 700, letterSpacing: "-.02em", color: "var(--bw-fg)", textDecoration: "none" };
  const body: React.CSSProperties = { fontSize: 15, lineHeight: 1.55, fontWeight: 500, opacity: 0.75, margin: 0 };
  return (
    <div data-bw-offices="" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "28px 48px" }}>
      <div style={block}>
        <span style={h}>Dubai · GMT+4</span>
        <span style={{ fontSize: 16, fontWeight: 700, letterSpacing: "-.01em" }}>Blackware Labs FZCO</span>
        <p style={body}>Building A1, Dubai Digital Park<br />Dubai Silicon Oasis<br />Dubai, United Arab Emirates</p>
        <a href="tel:+971558417678" style={big}>+971 55 841 7678</a>
      </div>
      <div style={block}>
        <span style={h}>India · GMT+5:30</span>
        <span style={{ fontSize: 16, fontWeight: 700, letterSpacing: "-.01em" }}>Blackwarelabs Private Limited</span>
        <p style={body}>New Delhi, India</p>
        <a href="tel:+917819803014" style={big}>+91 78198 03014</a>
        <span style={{ ...mono, fontSize: 9.5, opacity: 0.5, lineHeight: 1.8, letterSpacing: ".08em" }}>CIN U73100DL2026PTC466682<br />GSTIN 07AAOCB7620G1ZL</span>
      </div>
      <div style={block}>
        <span style={h}>Write</span>
        <a href={`mailto:${INQUIRIES}`} style={big}>{INQUIRIES}</a>
        <span style={{ fontSize: 13, opacity: 0.6 }}>New projects and partnerships</span>
        <a href={`mailto:${SUPPORT}`} style={{ ...big, fontSize: 16, marginTop: 6 }}>{SUPPORT}</a>
        <span style={{ fontSize: 13, opacity: 0.6 }}>Existing clients</span>
      </div>
      <div style={block}>
        <span style={h}>Hours</span>
        <p style={body}>Someone is working on your account from 08:00 Dubai to 20:00 India, Sunday to Friday. Remote worldwide.</p>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 8, ...mono, fontSize: 9.5, opacity: 0.7 }}><Users size={12} strokeWidth={1.8} aria-hidden="true" /> Two studio slots open for Q4 2026</span>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 8, ...mono, fontSize: 9.5, opacity: 0.7 }}><Target size={12} strokeWidth={1.8} aria-hidden="true" /> Reply within one working day</span>
      </div>
    </div>
  );
}

export { RUST };
