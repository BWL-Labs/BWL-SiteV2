"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion, useSpring, useTransform } from "motion/react";
import {
  ArrowRight,
  Calendar,
  Check,
  ChevronLeft,
  ChevronRight,
  Database,
  Download,
  FileSpreadsheet,
  Mail,
  RotateCcw,
  Send,
  ShieldCheck,
  Target,
  Upload,
  X,
} from "lucide-react";
import { FILL, GOLD, INK_2, INK_3, LINE, PAPER, RUST, SCREEN, SPRING, SPRING_SOFT, display, mono } from "@/components/live-builds/tokens";

/* A self-running walkthrough of a Lead Detective campaign: upload a lead file,
   map its columns, apply qualification rules, QA and verify, review the funnel,
   deliver to the CRM. It auto-advances until the visitor touches it, and every
   count downstream is derived from the rules the visitor leaves switched on.
   All data is sample data and the screen says so. */

const STEPS = [
  { id: "upload", label: "Upload" },
  { id: "map", label: "Map fields" },
  { id: "rules", label: "Validation rules" },
  { id: "qa", label: "QA validation" },
  { id: "email", label: "Email validation" },
  { id: "review", label: "Review" },
  { id: "submit", label: "Submit" },
] as const;

const UPLOADED = 1240;
const CAP = 1000;

const RULES = [
  { id: "corp", label: "Corporate email domains only", detail: "Drops gmail, outlook, yahoo and disposable domains", removes: 143 },
  { id: "title", label: "Title matches your ICP list", detail: "VP+, Director, Head of, Founder", removes: 197 },
  { id: "size", label: "Company headcount ≥ 200", detail: "Enriched from company domain", removes: 68 },
  { id: "dupe", label: "Dedupe against CRM, last 90 days", detail: "Email and company-domain match", removes: 20 },
  { id: "region", label: "Region in EMEA", detail: "Country from phone prefix or form field", removes: 0 },
];

const MAPPING = [
  { from: "email_addr", to: "Email", conf: 100 },
  { from: "full_name", to: "First name · Last name", conf: 99, note: "split" },
  { from: "company", to: "Account", conf: 98 },
  { from: "job_title", to: "Title", conf: 96 },
  { from: "phone1", to: "Phone", conf: 91 },
  { from: "country_iso", to: "Country", conf: 100 },
  { from: "utm_campaign", to: "Lead source", conf: 88 },
  { from: "notes", to: "Skipped", conf: 0 },
];

const QA_ROWS = [
  { name: "Ines Rademaker", co: "Halcyon Health", title: "VP Operations", status: "pass" as const },
  { name: "Tomás Ferreira", co: "Vector Freight", title: "Head of Growth", status: "pass" as const },
  { name: "Priya Natarajan", co: "Kestrel Data", title: "Lead", status: "flag" as const, why: "title ambiguous" },
  { name: "Mark O.", co: "—", title: "Director, IT", status: "reject" as const, why: "company missing" },
  { name: "Sofia Lindqvist", co: "Orbit Payments", title: "Director, RevOps", status: "pass" as const },
  { name: "d.kim@northbeam.io", co: "Northbeam", title: "Founder", status: "reject" as const, why: "duplicate of existing account" },
];

const EMAIL_ROWS = [
  { email: "i.rademaker@halcyon.health", status: "pass" as const, why: "deliverable" },
  { email: "tferreira@vectorfreight.com", status: "pass" as const, why: "deliverable" },
  { email: "priya@kestreldata.io", status: "flag" as const, why: "catch-all domain" },
  { email: "s.lindqvist@orbitpay.eu", status: "pass" as const, why: "deliverable" },
  { email: "j.doe@mailinator.com", status: "reject" as const, why: "disposable" },
  { email: "arun.b@fieldinglabs.co", status: "reject" as const, why: "mailbox does not exist" },
];

type Status = "pass" | "flag" | "reject";

const STATUS: Record<Status, { label: string; color: string; Icon: typeof Check }> = {
  pass: { label: "Passed", color: GOLD, Icon: Check },
  flag: { label: "Flagged", color: PAPER, Icon: ShieldCheck },
  reject: { label: "Rejected", color: RUST, Icon: X },
};

function Counter({ value, format = (v: number) => Math.round(v).toLocaleString() }: { value: number; format?: (v: number) => string }) {
  const reduce = useReducedMotion();
  const spring = useSpring(value, SPRING_SOFT);
  useEffect(() => {
    if (reduce) spring.jump(value);
    else spring.set(value);
  }, [value, reduce, spring]);
  const text = useTransform(spring, format);
  return <motion.span>{text}</motion.span>;
}

const panel: React.CSSProperties = { border: `1px solid ${LINE}`, borderRadius: 12, background: FILL, padding: 18 };
const stagger = (i: number) => ({ ...SPRING, delay: i * 0.06 });

function StatusPill({ status, why }: { status: Status; why?: string }) {
  const s = STATUS[status];
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 6, color: s.color, ...mono(9, ".1em"), whiteSpace: "nowrap" }}>
      <s.Icon size={12} strokeWidth={2.2} aria-hidden="true" />
      {s.label}
      {why && <span style={{ color: INK_3, textTransform: "none", letterSpacing: 0, fontFamily: "Inter, sans-serif", fontSize: 11 }}>· {why}</span>}
    </span>
  );
}

/* ---------- Steps ---------- */

function StepUpload({ reduce }: { reduce: boolean }) {
  const [phase, setPhase] = useState(0); // 0 empty, 1 uploading, 2 parsed
  useEffect(() => {
    const a = setTimeout(() => setPhase(1), reduce ? 0 : 700);
    const b = setTimeout(() => setPhase(2), reduce ? 0 : 2100);
    return () => { clearTimeout(a); clearTimeout(b); };
  }, [reduce]);
  return (
    <div data-bw-ld-grid="" style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 18 }}>
      <div style={{ ...panel, borderStyle: "dashed", display: "grid", placeItems: "center", minHeight: 240, textAlign: "center" }}>
        <AnimatePresence initial={false}>
          {phase === 0 ? (
            <motion.div key="empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, transition: { duration: 0.15 } }} style={{ gridArea: "1 / 1", display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
              <span style={{ width: 48, height: 48, borderRadius: 12, border: `1px solid ${LINE}`, display: "grid", placeItems: "center", color: GOLD }}><Upload size={20} strokeWidth={1.75} aria-hidden="true" /></span>
              <p style={{ margin: 0, fontSize: 14, fontWeight: 600, color: PAPER }}>Drop your lead file here</p>
              <span style={{ ...mono(9), color: INK_3 }}>CSV · XLSX · XLS · up to 30 MB</span>
            </motion.div>
          ) : (
            <motion.div key="file" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={SPRING} style={{ gridArea: "1 / 1", width: "100%", maxWidth: 380, display: "flex", flexDirection: "column", gap: 12, textAlign: "left" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <span style={{ width: 40, height: 40, borderRadius: 10, background: "rgba(230,175,46,.12)", display: "grid", placeItems: "center", color: GOLD, flexShrink: 0 }}><FileSpreadsheet size={18} strokeWidth={1.75} aria-hidden="true" /></span>
                <span style={{ display: "flex", flexDirection: "column", gap: 3, minWidth: 0 }}>
                  <span style={{ fontSize: 13, fontWeight: 700, color: PAPER, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>northbeam-q3-webinar-leads.csv</span>
                  <span style={{ ...mono(9), color: INK_3 }}>2.1 MB · {phase === 2 ? `${UPLOADED.toLocaleString()} rows · 14 columns` : "uploading"}</span>
                </span>
              </div>
              <span style={{ display: "block", height: 4, borderRadius: 2, background: LINE, overflow: "hidden" }}>
                <motion.span style={{ display: "block", height: "100%", background: GOLD, transformOrigin: "left" }} initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={reduce ? { duration: 0 } : { duration: 1.2, ease: [0.2, 0.7, 0.2, 1] }} />
              </span>
              <AnimatePresence>
                {phase === 2 && (
                  <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ display: "inline-flex", alignItems: "center", gap: 6, color: GOLD, ...mono(9, ".1em") }}>
                    <Check size={12} strokeWidth={2.2} aria-hidden="true" />Headers detected · encoding UTF-8 · delimiter “,”
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div style={{ ...panel, display: "flex", flexDirection: "column", gap: 10 }}>
        <span style={{ ...mono(9), color: GOLD }}>What we accept</span>
        {["First row holds the column headers", "One lead per row, any column order", "Excel files: first sheet is read", "Nothing is stored until you press Submit"].map((t, i) => (
          <motion.span key={t} initial={{ opacity: 0, x: -6 }} animate={{ opacity: 1, x: 0 }} transition={stagger(i)} style={{ display: "flex", gap: 8, fontSize: 12.5, lineHeight: 1.4, color: INK_2 }}>
            <span aria-hidden="true" style={{ width: 4, height: 4, borderRadius: "50%", background: GOLD, marginTop: 7, flexShrink: 0 }} />{t}
          </motion.span>
        ))}
      </div>
    </div>
  );
}

function StepMap() {
  return (
    <div style={{ ...panel, padding: 0, overflow: "hidden" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 24px 1.3fr auto", gap: 12, padding: "12px 18px", borderBottom: `1px solid ${LINE}`, ...mono(9), color: INK_3 }}>
        <span>Your column</span><span /><span>CRM field</span><span>Match</span>
      </div>
      {MAPPING.map((m, i) => (
        <motion.div key={m.from} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={stagger(i)} style={{ display: "grid", gridTemplateColumns: "1fr 24px 1.3fr auto", gap: 12, alignItems: "center", padding: "10px 18px", borderBottom: i < MAPPING.length - 1 ? `1px solid ${LINE}` : 0, opacity: m.conf === 0 ? 0.5 : 1 }}>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: PAPER }}>{m.from}</span>
          <ArrowRight size={14} strokeWidth={1.75} color={m.conf ? GOLD : INK_3} aria-hidden="true" />
          <span style={{ fontSize: 13, fontWeight: 600, color: PAPER }}>
            {m.to}
            {m.note && <span style={{ ...mono(8.5), color: INK_3, marginLeft: 8 }}>{m.note}</span>}
          </span>
          <span style={{ ...mono(9, ".08em"), color: m.conf >= 95 ? GOLD : m.conf ? INK_2 : INK_3, fontVariantNumeric: "tabular-nums", justifySelf: "end" }}>
            {m.conf ? `${m.conf}% auto` : "manual"}
          </span>
        </motion.div>
      ))}
    </div>
  );
}

function StepRules({ on, toggle, remaining }: { on: boolean[]; toggle: (i: number) => void; remaining: number }) {
  return (
    <div data-bw-ld-grid="" style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: 18 }}>
      <div style={{ ...panel, padding: 0, overflow: "hidden" }}>
        {RULES.map((r, i) => (
          <motion.div key={r.id} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={stagger(i)} style={{ display: "flex", alignItems: "center", gap: 14, padding: "12px 18px", borderBottom: i < RULES.length - 1 ? `1px solid ${LINE}` : 0 }}>
            <button
              type="button"
              role="switch"
              aria-checked={on[i]}
              aria-label={r.label}
              onClick={() => toggle(i)}
              style={{ appearance: "none", width: 34, height: 20, borderRadius: 999, border: 0, padding: 2, cursor: "pointer", background: on[i] ? GOLD : "rgba(255,255,250,.18)", flexShrink: 0, transition: "background .25s" }}
            >
              <motion.span layout transition={SPRING} style={{ display: "block", width: 16, height: 16, borderRadius: "50%", background: on[i] ? "#080705" : PAPER, marginLeft: on[i] ? 14 : 0 }} />
            </button>
            <span style={{ display: "flex", flexDirection: "column", gap: 3, flex: 1, minWidth: 0, opacity: on[i] ? 1 : 0.5 }}>
              <span style={{ fontSize: 13, fontWeight: 600, color: PAPER }}>{r.label}</span>
              <span style={{ fontSize: 11.5, color: INK_3 }}>{r.detail}</span>
            </span>
            <span style={{ ...mono(9, ".06em"), color: on[i] && r.removes ? RUST : INK_3, fontVariantNumeric: "tabular-nums", whiteSpace: "nowrap" }}>
              {r.removes ? `−${r.removes}` : "all pass"}
            </span>
          </motion.div>
        ))}
      </div>
      <div style={{ ...panel, display: "flex", flexDirection: "column", justifyContent: "center", gap: 8 }}>
        <span style={{ ...mono(9), color: INK_3 }}>Leads continuing</span>
        <span style={{ ...display(44, 900), color: PAPER }}><Counter value={remaining} /></span>
        <span style={{ fontSize: 12.5, color: INK_2, lineHeight: 1.45 }}>
          of {UPLOADED.toLocaleString()} uploaded. Switch a rule off to see what it was catching. Rejected rows are kept, with the reason, for your report.
        </span>
      </div>
    </div>
  );
}

function StepScan({ rows, counts, title, note, reduce }: { rows: { primary: string; secondary: string; status: Status; why?: string }[]; counts: Record<Status, number>; title: string; note: string; reduce: boolean }) {
  /* Remounts with every step change (the body is keyed by step), so it always starts at 0. */
  const [shown, setShown] = useState(reduce ? rows.length : 0);
  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setShown((n) => (n >= rows.length ? n : n + 1)), 320);
    return () => clearInterval(t);
  }, [rows.length, reduce]);
  return (
    <div data-bw-ld-grid="" style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: 18 }}>
      <div style={{ ...panel, padding: 0, overflow: "hidden" }}>
        <div style={{ padding: "12px 18px", borderBottom: `1px solid ${LINE}`, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ ...mono(9), color: GOLD }}>{title}</span>
          <span style={{ ...mono(9), color: INK_3 }}>{shown < rows.length ? "checking…" : "sample of 6"}</span>
        </div>
        {rows.map((r, i) => (
          <div key={r.primary} style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 18px", borderBottom: i < rows.length - 1 ? `1px solid ${LINE}` : 0, opacity: i < shown ? 1 : 0.35, transition: "opacity .3s" }}>
            <span style={{ display: "flex", flexDirection: "column", gap: 2, flex: 1, minWidth: 0 }}>
              <span style={{ fontSize: 13, fontWeight: 600, color: PAPER, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{r.primary}</span>
              <span style={{ fontSize: 11.5, color: INK_3, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{r.secondary}</span>
            </span>
            <AnimatePresence>
              {i < shown && (
                <motion.span initial={{ opacity: 0, x: 6 }} animate={{ opacity: 1, x: 0 }} transition={SPRING}>
                  <StatusPill status={r.status} why={r.why} />
                </motion.span>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {(["pass", "flag", "reject"] as Status[]).map((s) => (
          <div key={s} style={{ ...panel, padding: "14px 18px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <StatusPill status={s} />
            <span style={{ ...display(22, 800), color: PAPER }}><Counter value={counts[s]} /></span>
          </div>
        ))}
        <span style={{ fontSize: 11.5, color: INK_3, lineHeight: 1.45, padding: "0 4px" }}>{note}</span>
      </div>
    </div>
  );
}

function StepReview({ funnel, verified }: { funnel: { label: string; value: number }[]; verified: number }) {
  const max = UPLOADED;
  return (
    <div data-bw-ld-grid="" style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 18 }}>
      <div style={{ ...panel, display: "flex", flexDirection: "column", gap: 12 }}>
        <span style={{ ...mono(9), color: GOLD }}>Funnel · this upload</span>
        {funnel.map((f, i) => (
          <div key={f.label} style={{ display: "flex", flexDirection: "column", gap: 5 }}>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, color: INK_2 }}>
              <span>{f.label}</span>
              <span style={{ color: PAPER, fontWeight: 600, fontVariantNumeric: "tabular-nums" }}><Counter value={f.value} /></span>
            </div>
            <span style={{ display: "block", height: 8, borderRadius: 4, background: "rgba(255,255,250,.08)", overflow: "hidden" }}>
              <motion.span style={{ display: "block", height: "100%", borderRadius: 4, background: i === funnel.length - 1 ? GOLD : "#B8871C" }} initial={{ width: 0 }} animate={{ width: `${(f.value / max) * 100}%` }} transition={{ ...SPRING_SOFT, delay: i * 0.05 }} />
            </span>
          </div>
        ))}
        <span style={{ fontSize: 11.5, color: INK_3 }}>Campaign cap {CAP.toLocaleString()} · {verified <= CAP ? `${(CAP - verified).toLocaleString()} left after this batch` : `${(verified - CAP).toLocaleString()} over cap, held for next period`}</span>
      </div>
      <div style={{ ...panel, display: "flex", flexDirection: "column", gap: 12 }}>
        <span style={{ ...mono(9), color: GOLD }}>Delivery</span>
        {[
          [Database, "Salesforce", "Campaign · Impact Maker Q3"],
          [Target, "Owner", "Round-robin · SDR pod EMEA"],
          [Mail, "Notify", "Weekly digest to RevOps"],
          [Download, "Rejection report", `${(UPLOADED - verified).toLocaleString()} rows, each with a reason`],
        ].map(([Icon, k, v]) => {
          const I = Icon as typeof Database;
          return (
            <div key={k as string} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
              <span style={{ width: 30, height: 30, borderRadius: 8, border: `1px solid ${LINE}`, display: "grid", placeItems: "center", color: GOLD, flexShrink: 0 }}><I size={14} strokeWidth={1.75} aria-hidden="true" /></span>
              <span style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <span style={{ fontSize: 13, fontWeight: 600, color: PAPER }}>{k as string}</span>
                <span style={{ fontSize: 11.5, color: INK_3 }}>{v as string}</span>
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function StepSubmit({ verified, onReplay }: { verified: number; onReplay: () => void }) {
  return (
    <div style={{ ...panel, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 14, padding: "34px 24px", minHeight: 240, justifyContent: "center" }}>
      <motion.span initial={{ scale: 0.6, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={SPRING} style={{ width: 52, height: 52, borderRadius: "50%", background: GOLD, color: "#080705", display: "grid", placeItems: "center" }}>
        <Send size={20} strokeWidth={2} aria-hidden="true" />
      </motion.span>
      <span style={{ ...display(52, 900), color: PAPER }}><Counter value={verified} /></span>
      <span style={{ fontSize: 14, fontWeight: 600, color: PAPER }}>qualified leads delivered to Salesforce</span>
      <span style={{ ...mono(9), color: INK_3, lineHeight: 1.6 }}>Batch LD-2026-0912-07 · synced in 38 s · owners assigned</span>
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap", justifyContent: "center", marginTop: 6 }}>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 8, border: `1px solid ${LINE}`, borderRadius: 999, padding: "9px 14px", ...mono(9, ".12em"), color: INK_2 }}>
          <Download size={13} strokeWidth={1.75} aria-hidden="true" />Rejection report · CSV
        </span>
        <button type="button" onClick={onReplay} style={{ appearance: "none", display: "inline-flex", alignItems: "center", gap: 8, border: 0, background: PAPER, color: "#080705", borderRadius: 999, padding: "9px 14px", cursor: "pointer", ...mono(9, ".12em"), fontWeight: 600 }}>
          <RotateCcw size={13} strokeWidth={2} aria-hidden="true" />Replay demo
        </button>
      </div>
    </div>
  );
}

/* ---------- Shell ---------- */

export function LeadDetectiveDemo() {
  const reduce = !!useReducedMotion();
  const [step, setStep] = useState(0);
  const [engaged, setEngaged] = useState(false);
  const [on, setOn] = useState<boolean[]>(RULES.map(() => true));

  const engage = useCallback(() => setEngaged(true), []);
  const go = useCallback((i: number) => { setEngaged(true); setStep(Math.max(0, Math.min(STEPS.length - 1, i))); }, []);
  const replay = useCallback(() => { setStep(0); setOn(RULES.map(() => true)); setEngaged(true); }, []);

  useEffect(() => {
    if (engaged) return;
    const t = setTimeout(() => setStep((s) => (s + 1) % STEPS.length), step === 0 ? 4600 : 4200);
    return () => clearTimeout(t);
  }, [step, engaged]);

  const n = useMemo(() => {
    const removed = RULES.reduce((acc, r, i) => acc + (on[i] ? r.removes : 0), 0);
    const remaining = UPLOADED - removed;
    const qaReject = Math.round(remaining * 0.059);
    const qaFlag = Math.round(remaining * 0.075);
    const qaPass = remaining - qaReject;
    const emailReject = Math.round(qaPass * 0.017);
    const emailFlag = Math.round(qaPass * 0.041);
    const verified = qaPass - emailReject;
    return { remaining, qaReject, qaFlag, qaPass, emailReject, emailFlag, verified };
  }, [on]);

  const toggle = useCallback((i: number) => { setEngaged(true); setOn((s) => s.map((v, k) => (k === i ? !v : v))); }, []);

  const body = (() => {
    switch (STEPS[step].id) {
      case "upload": return <StepUpload reduce={reduce} />;
      case "map": return <StepMap />;
      case "rules": return <StepRules on={on} toggle={toggle} remaining={n.remaining} />;
      case "qa": return <StepScan reduce={reduce} title="Checking required fields, titles and duplicates" note="Flagged leads are held for a human glance, not dropped. Rejections carry a reason code." rows={QA_ROWS.map((r) => ({ primary: r.name, secondary: `${r.co} · ${r.title}`, status: r.status, why: r.why }))} counts={{ pass: n.qaPass - n.qaFlag, flag: n.qaFlag, reject: n.qaReject }} />;
      case "email": return <StepScan reduce={reduce} title="Verifying every mailbox before delivery" note="Catch-all domains pass but are flagged so sales knows the bounce risk." rows={EMAIL_ROWS.map((r) => ({ primary: r.email, secondary: r.why, status: r.status, why: undefined }))} counts={{ pass: n.verified - n.emailFlag, flag: n.emailFlag, reject: n.emailReject }} />;
      case "review": return <StepReview verified={n.verified} funnel={[{ label: "Uploaded", value: UPLOADED }, { label: "After rules", value: n.remaining }, { label: "QA passed", value: n.qaPass }, { label: "Verified · to CRM", value: n.verified }]} />;
      case "submit": return <StepSubmit verified={n.verified} onReplay={replay} />;
    }
  })();

  return (
    <div data-bw-ld="" style={{ containerType: "inline-size", width: "100%", display: "flex", flexDirection: "column", gap: 14, textAlign: "left" }}>
      <div
        onPointerDownCapture={engage}
        onKeyDownCapture={engage}
        style={{ border: `1px solid ${LINE}`, borderRadius: 16, background: SCREEN, color: PAPER, fontFamily: "Inter, sans-serif", overflow: "hidden", boxShadow: "0 40px 80px -50px rgba(8,7,5,.8)" }}
      >
        {/* App header */}
        <div style={{ padding: "22px 26px 0", display: "flex", flexDirection: "column", gap: 10 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
            <span style={{ ...mono(9), color: GOLD }}>Lead Detective · campaign</span>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 6, border: `1px solid ${LINE}`, borderRadius: 999, padding: "4px 9px", ...mono(8.5, ".12em"), color: INK_2 }}>
              <span aria-hidden="true" style={{ width: 6, height: 6, borderRadius: "50%", background: GOLD, animation: "bwBlink 1.6s steps(1,end) infinite", display: "block" }} />active
            </span>
          </div>
          <h3 style={{ margin: 0, ...display(24, 800), color: PAPER }}>Northbeam — Q3 webinar leads</h3>
          <div style={{ display: "flex", gap: 18, flexWrap: "wrap", ...mono(9), color: INK_3 }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}><Calendar size={12} strokeWidth={1.75} aria-hidden="true" />12 Sep – 12 Dec 2026</span>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}><Database size={12} strokeWidth={1.75} aria-hidden="true" />Salesforce delivery</span>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}><Target size={12} strokeWidth={1.75} aria-hidden="true" />Cap · {CAP.toLocaleString()} leads</span>
          </div>
        </div>

        {/* Stepper */}
        <div role="tablist" aria-label="Campaign steps" style={{ display: "flex", padding: "22px 26px 0", position: "relative" }}>
          {STEPS.map((s, i) => {
            const state = i < step ? "done" : i === step ? "active" : "todo";
            return (
              <button
                key={s.id}
                type="button"
                role="tab"
                aria-selected={i === step}
                onClick={() => go(i)}
                style={{ appearance: "none", background: "transparent", border: 0, padding: 0, cursor: "pointer", flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 8, position: "relative", color: PAPER }}
              >
                {i < STEPS.length - 1 && (
                  <span aria-hidden="true" style={{ position: "absolute", top: 14, left: "50%", width: "100%", height: 1, background: LINE, zIndex: 0 }}>
                    <motion.span style={{ display: "block", height: "100%", background: GOLD, transformOrigin: "left" }} animate={{ scaleX: i < step ? 1 : 0 }} transition={SPRING} />
                  </span>
                )}
                <motion.span
                  animate={{ backgroundColor: state === "active" ? GOLD : state === "done" ? PAPER : SCREEN, borderColor: state === "todo" ? "rgba(255,255,250,.28)" : state === "active" ? GOLD : PAPER, scale: state === "active" ? 1.08 : 1 }}
                  transition={SPRING}
                  style={{ width: 28, height: 28, borderRadius: "50%", border: "1px solid", display: "grid", placeItems: "center", color: state === "todo" ? INK_2 : "#080705", ...mono(10, "0"), fontWeight: 700, position: "relative", zIndex: 1 }}
                >
                  {state === "done" ? <Check size={13} strokeWidth={2.4} aria-hidden="true" /> : i + 1}
                </motion.span>
                <span data-bw-ld-label="" style={{ ...mono(8.5, ".1em"), color: state === "active" ? GOLD : state === "done" ? INK_2 : INK_3, whiteSpace: "nowrap" }}>{s.label}</span>
              </button>
            );
          })}
        </div>

        {/* Body */}
        {/* Old and new step share one grid cell so they crossfade in place. */}
        <div style={{ padding: "22px 26px 0", minHeight: 300, display: "grid", alignItems: "start" }}>
          <AnimatePresence initial={false}>
            <motion.div key={STEPS[step].id} style={{ gridArea: "1 / 1" }} initial={reduce ? false : { opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={reduce ? undefined : { opacity: 0, y: -8, transition: { duration: 0.18 } }} transition={SPRING}>
              {body}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Footer */}
        <div style={{ padding: "18px 26px 22px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
          <span style={{ ...mono(9), color: INK_3 }}>
            Step {step + 1} of {STEPS.length} · {engaged ? "your pace" : "auto-playing, tap to take over"} · sample data
          </span>
          <div style={{ display: "flex", gap: 8 }}>
            <button type="button" onClick={() => go(step - 1)} disabled={step === 0} aria-label="Previous step" style={{ appearance: "none", width: 36, height: 36, borderRadius: 999, border: `1px solid ${LINE}`, background: "transparent", color: PAPER, cursor: step === 0 ? "default" : "pointer", opacity: step === 0 ? 0.35 : 1, display: "grid", placeItems: "center" }}>
              <ChevronLeft size={16} strokeWidth={2} aria-hidden="true" />
            </button>
            <button type="button" onClick={() => (step === STEPS.length - 1 ? replay() : go(step + 1))} style={{ appearance: "none", display: "inline-flex", alignItems: "center", gap: 8, height: 36, padding: "0 16px", borderRadius: 999, border: 0, background: step === STEPS.length - 2 ? GOLD : PAPER, color: "#080705", cursor: "pointer", fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: 12.5 }}>
              {step === STEPS.length - 2 ? "Submit to Salesforce" : step === STEPS.length - 1 ? "Start over" : "Continue"}
              <ChevronRight size={15} strokeWidth={2.2} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
      <span style={{ font: "500 10px/1 'JetBrains Mono',monospace", letterSpacing: ".16em", textTransform: "uppercase", opacity: 0.42 }}>Fig. 01 — Lead Detective walkthrough, sample campaign</span>
    </div>
  );
}
