"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Check, Download, FileSpreadsheet, FileText, Link2, Play, RotateCcw, Settings2, Upload, X } from "lucide-react";
import { GOLD, INK_2, INK_3, LINE, PAPER, RUST, SCREEN, SPRING, SPRING_SOFT, display, mono } from "@/components/live-builds/tokens";

/* A self-running walkthrough of a Researchify project: configure the pipeline
   (which enrichment services and which report sections), run it against a
   target list, watch the run monitor, then read one finished account report.
   Every toggle is live: it changes the run's search count and which report
   sections exist. Sample data, labelled as such. */

const ACCOUNTS = 120;
const SEARCHES_PER_SECTION = 3;

const SERVICES = [
  { id: "clean", label: "Name cleaning", detail: "Legal suffixes, casing, duplicates" },
  { id: "rev", label: "Revenue lookup", detail: "Filings, press, estimates with confidence" },
  { id: "emp", label: "Employee count", detail: "LinkedIn range reconciled to a number" },
];

const SECTIONS = [
  { id: "s1", label: "Company profile" },
  { id: "s2", label: "Account snapshot" },
  { id: "s3", label: "Strategic business priorities" },
  { id: "s4", label: "Operational imperatives and challenges" },
  { id: "s5", label: "Commercial partner landscape" },
  { id: "s6", label: "Executive challenge" },
  { id: "s7", label: "Executive snapshot" },
  { id: "s8", label: "Custom user section" },
];

const LAYERS = [
  { id: "L0", name: "Input", tone: PAPER, tag: "Layer 0" },
  { id: "A1", name: "Enrichment", tone: GOLD, tag: "Mandatory" },
  { id: "B1", name: "Services", tone: GOLD, tag: "Optional" },
  { id: "C1", name: "Research", tone: RUST, tag: "Optional" },
  { id: "D1", name: "Output", tone: PAPER, tag: "Layer 4" },
];

type Tab = "pipeline" | "monitor" | "output";

/* Sample report content, keyed by section. */
const REPORT: Record<string, { body: string; facts?: [string, string][]; sources: string[] }> = {
  s1: { body: "Halcyon Health runs 41 outpatient diagnostics centres across Australia and Singapore, growing through acquisition since 2022. Recent leadership emphasis is on consolidating nine legacy systems onto one service platform.", sources: ["halcyon.health/about", "ASX filing FY25", "AFR, Mar 2026"] },
  s2: { body: "", facts: [["HQ", "Sydney, AU"], ["Revenue", "A$412M · FY25"], ["Employees", "2,300"], ["Fiscal year end", "30 June"], ["CIO", "R. Okafor · since 2024"], ["Stack", "ServiceNow ITSM, SAP, Epic"]], sources: ["ASX filing FY25", "LinkedIn", "Halcyon investor deck"] },
  s3: { body: "Three stated priorities for FY26: single patient record across all sites, 30% reduction in IT ticket resolution time, and an AI triage pilot in two centres. Each is tied to a named executive owner in the annual report.", sources: ["Annual report FY25, p.14", "CEO letter", "Singapore expansion release"] },
  s4: { body: "Integration debt from the 2023–2025 acquisitions is the operational constraint most often cited by executives. Two centres still run separate scheduling. Staffing pressure in radiology is a recurring theme in job postings.", sources: ["Earnings call Q2 FY26", "Seek postings, 14 open", "Glassdoor themes"] },
  s5: { body: "Incumbent partners: Accenture (SAP), a regional MSP for endpoint, and ServiceNow via a Sydney partner. No public cloud-migration partner announced, which is the open seat.", sources: ["Partner press releases", "Case study, ServiceNow", "Tender notices"] },
  s6: { body: "For the CIO: prove the consolidation programme lands before the FY27 budget review, with visible wins in ticket resolution time and clinician satisfaction.", sources: ["CIO interview, iTnews", "Board agenda summary"] },
  s7: { body: "R. Okafor joined from a Singapore hospital group where a similar platform consolidation completed in 18 months. Speaks publicly about clinician-first design. Active on LinkedIn, weekly.", sources: ["LinkedIn", "HIMSS APAC talk 2025"] },
  s8: { body: "Your own question, answered per account. This project asks: “Which sites still run separate scheduling, and who owns that decision?”", sources: ["Site pages", "Job postings"] },
};

/* Per-section configuration, the part a buyer usually asks to see: what we
   search for, how the synthesizer is briefed, and how the output is shaped. */
type SectionConfig = { hints: string[]; question: string; exclude: string; template: string; maxWords: number; tone: string };
const CONFIG: Record<string, SectionConfig> = {
  s2: {
    hints: ["[company] IT infrastructure technology stack platform investments", "[company] ITSM customer service platform", "[company] ERP CRM enterprise software vendors", "[company] cloud migration strategy", "[company] IT budget technology spending 2025 2026"],
    question: "Write short bullet points only, one sentence each. No paragraphs, tables or headings. Bold the label at the start of each bullet. Every bullet must cite at least one source.",
    exclude: "Consumer-facing product tech stacks, unrelated SaaS subscriptions, developer tooling, anything older than the date filter.",
    template: "Current platform landscape: category · platform in use · evidence source. Categories: ITSM, CSM, HR/HCM, security, workflow automation, ERP.",
    maxWords: 40,
    tone: "Neutral, specific, no adjectives",
  },
};
const defaultConfig = (label: string): SectionConfig => ({
  hints: [`[company] ${label.toLowerCase()} 2026`, `[company] ${label.toLowerCase()} announcement press release`, `[company] ${label.toLowerCase()} annual report interview`],
  question: `Summarise ${label.toLowerCase()} for [company] in short bullets, one sentence each, each with a source. Flag anything with a single source as low-confidence.`,
  exclude: "Speculation, forum posts, content outside the date filter.",
  template: "Label · finding · source. Three to six bullets.",
  maxWords: 35,
  tone: "Neutral, specific, no adjectives",
});

const field: React.CSSProperties = { border: `1px solid ${LINE}`, borderRadius: 10, background: "rgba(255,255,250,.04)", padding: "10px 12px", fontSize: 12.5, lineHeight: 1.5, color: PAPER };
const fieldLabel: React.CSSProperties = { fontSize: 12, color: INK_2, marginTop: 6 };

function Switch({ on, onChange, label }: { on: boolean; onChange: () => void; label: string }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={on}
      aria-label={label}
      onClick={onChange}
      style={{ appearance: "none", width: 30, height: 18, borderRadius: 999, border: 0, padding: 2, cursor: "pointer", background: on ? GOLD : "rgba(255,255,250,.18)", flexShrink: 0, transition: "background .25s" }}
    >
      <motion.span layout transition={SPRING} style={{ display: "block", width: 14, height: 14, borderRadius: "50%", background: on ? "#080705" : PAPER, marginLeft: on ? 12 : 0 }} />
    </button>
  );
}

/* Solid fill so the canvas wire and dot grid stay behind the cards. */
const card: React.CSSProperties = { border: `1px solid ${LINE}`, borderRadius: 12, background: "#161514", padding: 16, display: "flex", flexDirection: "column", gap: 10, minWidth: 0 };
const chip = (color: string): React.CSSProperties => ({ display: "inline-flex", alignItems: "center", gap: 6, border: `1px solid ${LINE}`, borderRadius: 999, padding: "3px 8px", ...mono(8, ".12em"), color });

export function ResearchifyDemo() {
  const reduce = !!useReducedMotion();
  const [tab, setTab] = useState<Tab>("pipeline");
  const [engaged, setEngaged] = useState(false);
  const [services, setServices] = useState<boolean[]>(SERVICES.map(() => true));
  const [servicesOn, setServicesOn] = useState(true);
  const [sections, setSections] = useState<boolean[]>([true, true, true, true, true, true, false, false]);
  const [researchOn, setResearchOn] = useState(true);
  const [progress, setProgress] = useState(0); // 0..1 for the current run
  const [runState, setRunState] = useState<"idle" | "running" | "done">("idle");
  const runTimer = useRef<number | null>(null);
  const [configFor, setConfigFor] = useState<string | null>(null);

  const engage = useCallback(() => setEngaged(true), []);

  const enabledSections = useMemo(() => SECTIONS.filter((_, i) => researchOn && sections[i]), [sections, researchOn]);
  const searches = enabledSections.length * SEARCHES_PER_SECTION * ACCOUNTS;
  const sourcesVerified = Math.round(searches * 0.88);
  const servicesEnabled = servicesOn ? services.filter(Boolean).length : 0;

  const startRun = useCallback(() => {
    if (runTimer.current) window.clearInterval(runTimer.current);
    setTab("monitor");
    setRunState("running");
    setProgress(0);
    const t0 = performance.now();
    const dur = reduce ? 400 : 6500;
    runTimer.current = window.setInterval(() => {
      const p = Math.min(1, (performance.now() - t0) / dur);
      setProgress(p);
      if (p >= 1) {
        if (runTimer.current) window.clearInterval(runTimer.current);
        runTimer.current = null;
        setRunState("done");
      }
    }, 80);
  }, [reduce]);

  useEffect(() => () => { if (runTimer.current) window.clearInterval(runTimer.current); }, []);

  /* Finished runs open the report after a beat. */
  useEffect(() => {
    if (runState !== "done" || tab !== "monitor") return;
    const t = setTimeout(() => setTab("output"), 1200);
    return () => clearTimeout(t);
  }, [runState, tab]);

  /* Autoplay: pipeline → run → output → pipeline, until touched. */
  useEffect(() => {
    if (engaged) return;
    if (tab === "pipeline") {
      const t = setTimeout(() => startRun(), 5200);
      return () => clearTimeout(t);
    }
    if (tab === "output") {
      const t = setTimeout(() => { setTab("pipeline"); setRunState("idle"); setProgress(0); }, 9000);
      return () => clearTimeout(t);
    }
  }, [tab, engaged, startRun]);

  const layerProgress = (i: number) => {
    const bands = [[0, 0.08], [0.08, 0.32], [0.32, 0.5], [0.5, 0.9], [0.9, 1]];
    const [a, b] = bands[i];
    return Math.max(0, Math.min(1, (progress - a) / (b - a)));
  };

  const logs = [
    [0.05, `L0 · ${ACCOUNTS} accounts read · 3 input fields · 0 rejected`],
    [0.2, `A1 · ${ACCOUNTS}/${ACCOUNTS} URLs validated · 4 redirected, 2 fixed`],
    [0.32, `A1 · 7 fields enriched per account · Firecrawl + search`],
    [0.42, servicesEnabled ? `B1 · ${servicesEnabled} service${servicesEnabled === 1 ? "" : "s"} · revenue found for ${Math.round(ACCOUNTS * 0.93)}` : "B1 · skipped (layer off)"],
    [0.6, enabledSections.length ? `C1 · ${enabledSections.length} sections × ${SEARCHES_PER_SECTION} searches · ${searches.toLocaleString()} queries` : "C1 · skipped (layer off)"],
    [0.82, enabledSections.length ? `C1 · ${sourcesVerified.toLocaleString()} sources verified · ${(searches - sourcesVerified).toLocaleString()} discarded` : "C1 · nothing to verify"],
    [0.95, `D1 · ${ACCOUNTS} reports · PDF + Excel · ${ACCOUNTS} credits`],
  ] as const;

  const tabs: { id: Tab; label: string; disabled?: boolean }[] = [
    { id: "pipeline", label: "Pipeline" },
    { id: "monitor", label: "Run monitor", disabled: runState === "idle" },
    { id: "output", label: "Research output", disabled: runState !== "done" },
  ];

  return (
    <div data-bw-rf="" style={{ containerType: "inline-size", width: "100%", display: "flex", flexDirection: "column", gap: 14, textAlign: "left" }}>
      <div onPointerDownCapture={engage} onKeyDownCapture={engage} style={{ position: "relative", border: `1px solid ${LINE}`, borderRadius: 16, background: SCREEN, color: PAPER, fontFamily: "Inter, sans-serif", overflow: "hidden", boxShadow: "0 40px 80px -50px rgba(8,7,5,.8)" }}>
        {/* App bar */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 14, padding: "16px 22px", borderBottom: `1px solid ${LINE}`, flexWrap: "wrap" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, minWidth: 0, flexWrap: "wrap" }}>
            <span style={{ ...mono(9), color: GOLD }}>Researchify</span>
            <span style={{ color: INK_3 }}>/</span>
            <span style={{ fontSize: 13.5, fontWeight: 700, letterSpacing: "-.01em" }}>Northbeam — APAC ABM target list</span>
            <span style={chip(INK_2)}><span aria-hidden="true" style={{ width: 6, height: 6, borderRadius: "50%", background: GOLD, animation: "bwBlink 1.6s steps(1,end) infinite", display: "block" }} />{ACCOUNTS} accounts</span>
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 8, border: `1px solid ${LINE}`, borderRadius: 999, padding: "8px 12px", ...mono(9, ".12em"), color: INK_2 }}><Upload size={12} strokeWidth={1.75} aria-hidden="true" />Upload CSV</span>
            <button type="button" onClick={() => { engage(); startRun(); }} disabled={runState === "running"} style={{ appearance: "none", display: "inline-flex", alignItems: "center", gap: 8, border: 0, borderRadius: 999, padding: "8px 14px", background: runState === "running" ? "rgba(230,175,46,.35)" : GOLD, color: "#080705", cursor: runState === "running" ? "default" : "pointer", fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: 12.5 }}>
              <Play size={12} strokeWidth={2.4} aria-hidden="true" />{runState === "running" ? "Running…" : "Run pipeline"}
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div role="tablist" aria-label="Project views" style={{ display: "flex", gap: 22, padding: "0 22px", borderBottom: `1px solid ${LINE}` }}>
          {tabs.map((t) => {
            const on = t.id === tab;
            return (
              <button key={t.id} type="button" role="tab" aria-selected={on} disabled={t.disabled} onClick={() => { engage(); setTab(t.id); }} style={{ appearance: "none", background: "transparent", border: 0, padding: "14px 0 12px", cursor: t.disabled ? "default" : "pointer", color: on ? PAPER : t.disabled ? INK_3 : INK_2, fontSize: 12.5, fontWeight: 600, position: "relative", opacity: t.disabled ? 0.5 : 1 }}>
                {t.label}
                {on && <motion.span layoutId="rf-tab" transition={SPRING} style={{ position: "absolute", left: 0, right: 0, bottom: -1, height: 2, background: GOLD }} />}
              </button>
            );
          })}
        </div>

        {/* Views */}
        <div style={{ display: "grid", minHeight: 480 }}>
          <AnimatePresence initial={false}>
            <motion.div key={tab} style={{ gridArea: "1 / 1" }} initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} exit={reduce ? undefined : { opacity: 0, transition: { duration: 0.15 } }} transition={{ duration: 0.3 }}>
              {tab === "pipeline" && (
                <div data-bw-rf-grid="" style={{ display: "grid", gridTemplateColumns: "220px 1fr", minHeight: 480 }}>
                  {/* Rail */}
                  <aside style={{ borderRight: `1px solid ${LINE}`, padding: "20px 22px", display: "flex", flexDirection: "column", gap: 22 }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                      <span style={{ ...mono(8.5), color: INK_3 }}>Pipeline layers</span>
                      {LAYERS.map((l) => (
                        <span key={l.id} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 12.5, color: PAPER }}>
                          <span aria-hidden="true" style={{ width: 7, height: 7, borderRadius: "50%", background: l.tone, display: "block" }} />
                          <span style={{ flex: 1 }}>{l.name} <span style={{ color: INK_3 }}>({l.id})</span></span>
                          <span style={{ ...mono(7.5, ".1em"), color: l.tag === "Mandatory" ? GOLD : INK_3 }}>{l.tag}</span>
                        </span>
                      ))}
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                      <span style={{ ...mono(8.5), color: INK_3 }}>Models</span>
                      <span style={{ fontSize: 12, color: INK_2 }}>Complex steps · <span style={{ color: PAPER, fontFamily: "'JetBrains Mono', monospace", fontSize: 11 }}>claude-opus-5</span></span>
                      <span style={{ fontSize: 12, color: INK_2 }}>Simple steps · <span style={{ color: PAPER, fontFamily: "'JetBrains Mono', monospace", fontSize: 11 }}>claude-sonnet-5</span></span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                      <span style={{ ...mono(8.5), color: INK_3 }}>Project config</span>
                      {["Source preferences", "Date filter · last 18 months", "Exclusion list · 14 domains"].map((t) => (
                        <span key={t} style={{ fontSize: 12.5, color: INK_2 }}>{t}</span>
                      ))}
                    </div>
                  </aside>

                  {/* Canvas */}
                  <div data-bw-rf-canvas="" style={{ position: "relative", padding: "24px 22px", display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1.45fr 1fr", gap: 14, alignItems: "start", backgroundImage: "radial-gradient(rgba(255,255,250,.07) 1px, transparent 1px)", backgroundSize: "18px 18px" }}>
                    <span aria-hidden="true" data-bw-rf-wire="" style={{ position: "absolute", left: 22, right: 22, top: 74, borderTop: `1px dashed rgba(255,255,250,.25)` }} />
                    {/* L0 */}
                    <div style={{ ...card, position: "relative" }}>
                      <span style={{ display: "flex", gap: 6 }}><span style={chip(INK_2)}>Layer 0</span></span>
                      <span style={{ fontSize: 13.5, fontWeight: 700 }}>User input</span>
                      <span style={{ fontSize: 11.5, color: INK_3, lineHeight: 1.45 }}>CSV upload · company, domain, country</span>
                    </div>
                    {/* A1 */}
                    <div style={{ ...card, position: "relative" }}>
                      <span style={{ display: "flex", gap: 6 }}><span style={chip(GOLD)}>A1</span><span style={chip(GOLD)}>Mandatory</span></span>
                      <span style={{ fontSize: 13.5, fontWeight: 700 }}>Enrichment</span>
                      <span style={{ fontSize: 11.5, color: INK_3, lineHeight: 1.45 }}>URL validation · 7 fields enriched · Firecrawl / search</span>
                    </div>
                    {/* B1 */}
                    <div style={{ ...card, position: "relative", opacity: servicesOn ? 1 : 0.55 }}>
                      <span style={{ display: "flex", gap: 6 }}><span style={chip(GOLD)}>B1</span><span style={chip(INK_2)}>Optional</span></span>
                      <span style={{ fontSize: 13.5, fontWeight: 700 }}>Services</span>
                      {SERVICES.map((s, i) => (
                        <span key={s.id} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12, color: services[i] && servicesOn ? PAPER : INK_3 }}>
                          <Switch on={services[i] && servicesOn} label={s.label} onChange={() => { engage(); setServices((v) => v.map((x, k) => (k === i ? !x : x))); }} />
                          {s.label}
                        </span>
                      ))}
                      <span style={{ borderTop: `1px solid ${LINE}`, paddingTop: 10, marginTop: 2, display: "flex", justifyContent: "space-between", alignItems: "center", ...mono(8), color: INK_3 }}>
                        Layer enabled <Switch on={servicesOn} label="Services layer enabled" onChange={() => { engage(); setServicesOn((v) => !v); }} />
                      </span>
                    </div>
                    {/* C1 */}
                    <div style={{ ...card, position: "relative", opacity: researchOn ? 1 : 0.55 }}>
                      <span style={{ display: "flex", gap: 6 }}><span style={chip(RUST)}>C1</span><span style={chip(INK_2)}>Optional</span></span>
                      <span style={{ fontSize: 13.5, fontWeight: 700 }}>Deep research</span>
                      <span style={{ fontSize: 11.5, color: INK_3, lineHeight: 1.45 }}>{SEARCHES_PER_SECTION} searches per section · source-verified</span>
                      {SECTIONS.map((s, i) => (
                        <span key={s.id} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 11.5, lineHeight: 1.3, color: sections[i] && researchOn ? PAPER : INK_3 }}>
                          <Switch on={sections[i] && researchOn} label={s.label} onChange={() => { engage(); setSections((v) => v.map((x, k) => (k === i ? !x : x))); }} />
                          <span style={{ flex: 1, minWidth: 0 }}><span style={{ ...mono(8, ".04em"), color: INK_3, marginRight: 6 }}>S{i + 1}</span>{s.label}</span>
                          <button type="button" aria-label={`Configure ${s.label}`} onClick={() => { engage(); setConfigFor(s.id); }} style={{ appearance: "none", border: 0, background: "transparent", color: INK_3, cursor: "pointer", padding: 2, display: "grid", placeItems: "center", flexShrink: 0 }}>
                            <Settings2 size={12} strokeWidth={1.75} aria-hidden="true" />
                          </button>
                        </span>
                      ))}
                      <span style={{ borderTop: `1px solid ${LINE}`, paddingTop: 10, marginTop: 2, display: "flex", justifyContent: "space-between", alignItems: "center", ...mono(8), color: INK_3 }}>
                        Layer enabled <Switch on={researchOn} label="Research layer enabled" onChange={() => { engage(); setResearchOn((v) => !v); }} />
                      </span>
                    </div>
                    {/* D1 */}
                    <div style={{ ...card, position: "relative" }}>
                      <span style={{ display: "flex", gap: 6 }}><span style={chip(INK_2)}>D1</span></span>
                      <span style={{ fontSize: 13.5, fontWeight: 700 }}>Output</span>
                      <span style={{ fontSize: 11.5, color: INK_3, lineHeight: 1.45 }}>PDF + Excel per account · CRM push · {enabledSections.length} sections</span>
                      <span style={{ ...mono(8), color: GOLD }}>{searches.toLocaleString()} searches / run</span>
                    </div>
                  </div>
                </div>
              )}

              {tab === "monitor" && (
                <div data-bw-rf-grid="" style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 18, padding: 22, minHeight: 480 }}>
                  <div style={{ ...card, gap: 14 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                      <span style={{ ...mono(9), color: GOLD }}>Run 07 · {ACCOUNTS} accounts</span>
                      <span style={{ ...mono(9), color: runState === "done" ? GOLD : INK_3 }}>{runState === "done" ? "Complete" : `${Math.round(progress * 100)}%`}</span>
                    </div>
                    {LAYERS.map((l, i) => {
                      const p = layerProgress(i);
                      return (
                        <div key={l.id} style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, color: p > 0 ? PAPER : INK_3 }}>
                            <span><span style={{ ...mono(8, ".04em"), color: INK_3, marginRight: 8 }}>{l.id}</span>{l.name}</span>
                            <span style={{ ...mono(8.5, ".04em"), color: p >= 1 ? GOLD : INK_3, display: "inline-flex", alignItems: "center", gap: 6 }}>
                              {p >= 1 ? <><Check size={11} strokeWidth={2.4} aria-hidden="true" />done</> : p > 0 ? `${Math.round(p * ACCOUNTS)}/${ACCOUNTS}` : "queued"}
                            </span>
                          </div>
                          <span style={{ display: "block", height: 6, borderRadius: 3, background: "rgba(255,255,250,.08)", overflow: "hidden" }}>
                            <span style={{ display: "block", height: "100%", width: `${p * 100}%`, background: i === 3 ? RUST : GOLD, transition: "width .12s linear" }} />
                          </span>
                        </div>
                      );
                    })}
                  </div>
                  <div style={{ ...card, padding: 0, overflow: "hidden" }}>
                    <div style={{ padding: "12px 16px", borderBottom: `1px solid ${LINE}`, ...mono(9), color: INK_3 }}>Log</div>
                    <div style={{ padding: "8px 16px 12px", display: "flex", flexDirection: "column", gap: 8, fontFamily: "'JetBrains Mono', monospace", fontSize: 10.5, lineHeight: 1.5, color: INK_2 }}>
                      {logs.map(([at, line]) => (
                        <span key={line} style={{ opacity: progress >= at ? 1 : 0.18, transition: "opacity .3s" }}>{line}</span>
                      ))}
                      <AnimatePresence>
                        {runState === "done" && (
                          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ color: GOLD, marginTop: 4 }}>
                            ✓ {ACCOUNTS} reports ready · opening research output
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              )}

              {tab === "output" && (
                <div data-bw-rf-grid="" style={{ display: "grid", gridTemplateColumns: "1fr 260px", gap: 18, padding: 22, minHeight: 480 }}>
                  <div style={{ ...card, gap: 16, padding: 22 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12, flexWrap: "wrap" }}>
                      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                        <span style={{ ...mono(9), color: GOLD }}>Account 14 of {ACCOUNTS}</span>
                        <span style={{ ...display(22, 800) }}>Halcyon Health</span>
                        <span style={{ ...mono(8.5), color: INK_3 }}>halcyon.health · Sydney · healthcare</span>
                      </div>
                      <div style={{ display: "flex", gap: 8 }}>
                        <span style={{ display: "inline-flex", alignItems: "center", gap: 6, border: `1px solid ${LINE}`, borderRadius: 999, padding: "7px 11px", ...mono(8.5, ".1em"), color: INK_2 }}><FileText size={12} strokeWidth={1.75} aria-hidden="true" />PDF</span>
                        <span style={{ display: "inline-flex", alignItems: "center", gap: 6, border: `1px solid ${LINE}`, borderRadius: 999, padding: "7px 11px", ...mono(8.5, ".1em"), color: INK_2 }}><FileSpreadsheet size={12} strokeWidth={1.75} aria-hidden="true" />Excel</span>
                      </div>
                    </div>
                    {enabledSections.length === 0 && (
                      <span style={{ fontSize: 13, color: INK_2 }}>Research layer is off, so this report only carries the enrichment fields. Switch C1 on in the pipeline to add sections.</span>
                    )}
                    {enabledSections.map((s, i) => {
                      const r = REPORT[s.id];
                      return (
                        <motion.div key={s.id} initial={reduce ? false : { opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ ...SPRING_SOFT, delay: i * 0.05 }} style={{ display: "flex", flexDirection: "column", gap: 8, paddingTop: 14, borderTop: `1px solid ${LINE}` }}>
                          <span style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
                            <span style={{ ...mono(8, ".04em"), color: INK_3 }}>S{SECTIONS.indexOf(s) + 1}</span>
                            <span style={{ fontSize: 14, fontWeight: 700, letterSpacing: "-.01em" }}>{s.label}</span>
                          </span>
                          {r.facts ? (
                            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 8 }}>
                              {r.facts.map(([k, v]) => (
                                <span key={k} style={{ display: "flex", flexDirection: "column", gap: 2, padding: "8px 10px", borderRadius: 8, background: "rgba(255,255,250,.05)" }}>
                                  <span style={{ ...mono(7.5), color: INK_3 }}>{k}</span>
                                  <span style={{ fontSize: 12.5, fontWeight: 600 }}>{v}</span>
                                </span>
                              ))}
                            </div>
                          ) : (
                            <p style={{ margin: 0, fontSize: 13, lineHeight: 1.55, color: INK_2, maxWidth: "70ch" }}>{r.body}</p>
                          )}
                          <span style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                            {r.sources.map((src) => (
                              <span key={src} style={{ ...chip(INK_3), padding: "2px 8px" }}><Link2 size={9} strokeWidth={2} aria-hidden="true" />{src}</span>
                            ))}
                          </span>
                        </motion.div>
                      );
                    })}
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                    <div style={{ ...card, gap: 10 }}>
                      <span style={{ ...mono(9), color: GOLD }}>This run</span>
                      {[["Accounts", ACCOUNTS.toLocaleString()], ["Sections per report", String(enabledSections.length)], ["Searches", searches.toLocaleString()], ["Sources verified", sourcesVerified.toLocaleString()], ["Credits used", ACCOUNTS.toLocaleString()]].map(([k, v]) => (
                        <span key={k} style={{ display: "flex", justifyContent: "space-between", fontSize: 12.5 }}>
                          <span style={{ color: INK_2 }}>{k}</span><span style={{ fontWeight: 700, fontVariantNumeric: "tabular-nums" }}>{v}</span>
                        </span>
                      ))}
                    </div>
                    <div style={{ ...card, gap: 8 }}>
                      <span style={{ ...mono(9), color: INK_3 }}>Every claim carries its source</span>
                      <span style={{ fontSize: 12, lineHeight: 1.5, color: INK_2 }}>Sections with fewer than two agreeing sources are marked low-confidence rather than written up.</span>
                    </div>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: 8, border: `1px solid ${LINE}`, borderRadius: 999, padding: "9px 14px", ...mono(9, ".12em"), color: INK_2, alignSelf: "flex-start" }}><Download size={12} strokeWidth={1.75} aria-hidden="true" />Download all · zip</span>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Section configuration sheet */}
        <AnimatePresence>
          {configFor && (() => {
            const sec = SECTIONS.find((x) => x.id === configFor)!;
            const cfg = CONFIG[configFor] ?? defaultConfig(sec.label);
            return (
              <motion.div key="cfg" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, transition: { duration: 0.15 } }} style={{ position: "absolute", inset: 0, zIndex: 5, background: "rgba(8,7,5,.72)", backdropFilter: "blur(6px)", WebkitBackdropFilter: "blur(6px)", display: "grid", placeItems: "center", padding: 18 }} onClick={() => setConfigFor(null)}>
                <motion.div role="dialog" aria-modal="true" aria-label={`${sec.label} configuration`} initial={reduce ? false : { y: 14, scale: 0.98 }} animate={{ y: 0, scale: 1 }} exit={reduce ? undefined : { y: 8, opacity: 0, transition: { duration: 0.15 } }} transition={SPRING} onClick={(e) => e.stopPropagation()} style={{ width: "100%", maxWidth: 560, maxHeight: "100%", overflowY: "auto", background: SCREEN, border: `1px solid ${LINE}`, borderRadius: 14, boxShadow: "0 40px 80px -30px rgba(0,0,0,.9)", display: "flex", flexDirection: "column" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 20px", borderBottom: `1px solid ${LINE}`, position: "sticky", top: 0, background: SCREEN }}>
                    <span style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                      <span style={{ ...mono(8.5), color: GOLD }}>Section S{SECTIONS.indexOf(sec) + 1}</span>
                      <span style={{ fontSize: 15, fontWeight: 700, letterSpacing: "-.01em" }}>{sec.label}</span>
                    </span>
                    <button type="button" aria-label="Close" onClick={() => setConfigFor(null)} style={{ appearance: "none", width: 32, height: 32, borderRadius: 999, border: `1px solid ${LINE}`, background: "transparent", color: PAPER, cursor: "pointer", display: "grid", placeItems: "center" }}><X size={14} strokeWidth={2} aria-hidden="true" /></button>
                  </div>
                  <div style={{ padding: "6px 20px 20px", display: "flex", flexDirection: "column", gap: 8 }}>
                    <span style={{ ...mono(8.5), color: INK_3, marginTop: 12 }}>Research</span>
                    <span style={fieldLabel}>Search prompt hints · [company] is filled per account</span>
                    {cfg.hints.map((h) => (
                      <span key={h} style={{ ...field, fontFamily: "'JetBrains Mono', monospace", fontSize: 11.5 }}>{h}</span>
                    ))}
                    <span style={{ ...mono(8.5), color: INK_3, marginTop: 16, paddingTop: 14, borderTop: `1px solid ${LINE}` }}>Synthesizer</span>
                    <span style={fieldLabel}>Question</span>
                    <span style={field}>{cfg.question}</span>
                    <span style={fieldLabel}>Exclusion areas</span>
                    <span style={field}>{cfg.exclude}</span>
                    <span style={fieldLabel}>Output template</span>
                    <span style={field}>{cfg.template}</span>
                    <span style={{ ...mono(8.5), color: INK_3, marginTop: 16, paddingTop: 14, borderTop: `1px solid ${LINE}` }}>Output formatting</span>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                      <span style={{ display: "flex", flexDirection: "column", gap: 6 }}><span style={fieldLabel}>Max words per insight</span><span style={{ ...field, fontVariantNumeric: "tabular-nums" }}>{cfg.maxWords}</span></span>
                      <span style={{ display: "flex", flexDirection: "column", gap: 6 }}><span style={fieldLabel}>Tone</span><span style={field}>{cfg.tone}</span></span>
                    </div>
                    <span style={{ fontSize: 11.5, color: INK_3, lineHeight: 1.5, marginTop: 8 }}>We set these up with you in the first week. Change them any time; the next run picks them up.</span>
                  </div>
                </motion.div>
              </motion.div>
            );
          })()}
        </AnimatePresence>

        {/* Footer */}
        <div style={{ padding: "12px 22px 16px", borderTop: `1px solid ${LINE}`, display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
          <span style={{ ...mono(9), color: INK_3 }}>{engaged ? "Your pace" : "Auto-playing, tap to take over"} · sample data · 1 credit = 1 report</span>
          <button type="button" onClick={() => { engage(); setTab("pipeline"); setRunState("idle"); setProgress(0); }} style={{ appearance: "none", display: "inline-flex", alignItems: "center", gap: 6, background: "transparent", border: 0, color: INK_2, cursor: "pointer", ...mono(9, ".12em") }}>
            <RotateCcw size={12} strokeWidth={2} aria-hidden="true" />Reset
          </button>
        </div>
      </div>
      <span style={{ font: "500 10px/1 'JetBrains Mono',monospace", letterSpacing: ".16em", textTransform: "uppercase", opacity: 0.42 }}>Fig. 01 — Researchify pipeline, sample project</span>
    </div>
  );
}
