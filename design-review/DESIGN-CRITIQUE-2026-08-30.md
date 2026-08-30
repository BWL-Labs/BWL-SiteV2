---
target: site-wide UX audit
total_score: 20
max_score: 40
na_heuristics: 
p0_count: 3
p1_count: 2
timestamp: 2026-08-30T10-35-48Z
slug: src-app
---
# Design Critique — Blackware Labs site (all routes, localhost:3000)

Method: dual-agent (A: design-review · B: detector-evidence)

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Wheel progress, FAQ states, loader all legible; primary CTAs read as feedback-less to a reviewer (see P1) |
| 2 | Match System / Real World | 3 | Best-in-class buyer language; BW-01 answers every chip with the same canned line |
| 3 | User Control and Freedom | 2 | Wheel hijacks ~8 viewports (dots are a real escape hatch); loader unskippable; mobile has no navigation |
| 4 | Consistency and Standards | 1 | $18K vs $399-70%-off on one page; Brooklyn vs Dubai/New Delhi; hello@ vs support@; "Lead routing" vs "See lead detective" |
| 5 | Error Prevention | 1 | Live third-party iframes with no fallback; socials wired to #contact |
| 6 | Recognition Rather Than Recall | 2 | All navigation behind an unlabeled FAB; no footer sitemap; products discoverable only via wheel positions 05–07 |
| 7 | Flexibility and Efficiency | 2 | Wheel dots + radial menu are accelerators; no reduced-motion consideration observed on a motion-heavy surface |
| 8 | Aesthetic and Minimalist Design | 3 | Confident idiom; pricing-card photography fights bullet text |
| 9 | Error Recovery | 0 | Four raw Netlify error screens inside WORK; srcless demo video; nothing anticipates failure |
| 10 | Help and Documentation | 3 | FAQ gives straight answers; single-open accordion |
| **Total** | | **20/40** | **Authored shell, unfinished proof + funnel** |

## Design Specificity Verdict

**The shell is authored; the proof layer is filler.** No other agency could lift this unchanged: drenched-ink/paper with a genuinely re-composed light theme, the `//` mono-slash idiom, the services wheel, BW-01, the world-map footer, and a copy voice that never breaks character ("No discovery theatre", "Written to be pasted, not admired"). But wherever the site must prove rather than perform — case studies, artifacts carousel, product demo, testimonials — it currently shows placeholders or error screens, and the authored shell raises expectations the proof layer then fails.

**Deterministic scan:** 11 CLI findings (5 layout-transitions, 3 overused-font/Inter, 2 side-tab, 1 broken-image). Two are confirmed false positives (side-tab = a transparent CSS triangle; broken-image = the word `<img>` in a comment). Inter usage is corroborated at runtime (35% of homepage text) but is the site's chosen body face. Browser overlay on 4 pages: homepage ~130 findings dominated by undersized text (61 hits, most inside decorative fake-UI mockups; genuinely operable offenders: radial-menu labels 8.5px, carousel counter 11px), 31 thin-border-wide-shadow cards, 7 runtime layout transitions; /brand-design 35; /researchify 28; /contact 3. A transient 3.0:1 low-contrast hit on two dimmed buttons did not reproduce across runs.

## Priority Issues

**[P0] Mobile is unbuilt.** At 375pt: case-study iframes collapse to a ~50px column, pricing stays 3-across and clips, FAQ overflows off-canvas, wheel keeps desktop columns, and the homepage offers no visible menu; the MENU FAB never appears. A mobile visitor cannot navigate or convert. Fix: a real sub-768px pass — stack every grid, static screenshots instead of iframes, restore menu/CTA. → $impeccable adapt

**[P0] The proof layer displays error screens.** All four case studies iframe paused Netlify deployments and render "Site not available" cards in both themes; the Researchify/Lead Detective demo laptop is a srcless video (known open item — assets needed). The WORK section currently proves the studio lets client sites die. Fix: static captures/screen recordings by default, "OPEN ↗" as enhancement. → $impeccable harden

**[P0] The conversion loop is circular.** Footer "Book a call" links to #contact — the section it sits in; the header CTA scrolls there; LinkedIn/X/Dribbble also point at #contact; no scheduler exists. The funnel's last click goes nowhere. Fix: real booking URL or /contact on every CTA; wire or remove socials. One-hour fix.

**[P1] Price architecture contradicts itself on one page.** /brand-design hero: "FROM $18K · TWO Q4 2026 SLOTS." Below: "$399, 70% OFF" beside "FIXED SCOPE, FIXED PRICE." Each story falsifies the other for a skeptical buyer. Fix: one economic story per page; kill slash-pricing. Business decision required. → $impeccable clarify

**[P1] Feedback reads one-way; BW-01 undercuts the pitch.** The site performs constant ambient motion but the reviewer perceived no hover response on primary CTAs (measured hover states exist — gradient fill 0.5→1, accent color shifts — so the finding is that they read too subtle on solid pills, plausibly compounded by pointer-scaling in testing), and BW-01 returns one identical canned reply to all four chips while the studio sells personalized AI. Fix: strengthen CTA hover delta; route chips to distinct scripted answers. → $impeccable animate

**[P2] Fabricated-proof cluster.** "6 WATCHING NOW", "100% CLIENTS WHO RE-ENGAGE" beside "2+ YEARS IN MARKET", striped placeholder avatars, and "Northbeam" — a real analytics company's name — used as a fictional client. Together they teach distrust of every number. Real assets or none; rename Northbeam.

## Persona Red Flags

**Sam (skeptical CMO):** hero intrigues → four Netlify errors → placeholder avatars → circular Book-a-call → $18K-vs-$399 contradiction. Does not send the email. Failing elements: case-study iframes, footer self-link, pricing section.

**Priya (mobile-only founder):** hero reads well ("STORIES" in dark garnet near-invisible on dark video) → broken sliver-column case studies → clipped pricing → no menu, no CTA. Cannot complete any action.

**Jordan (first-timer):** "ADS GET SKIPPED / GAMES GET PLAYED" positions an advergame shop; nothing above the fold names the actual offer (it lives only in the title tag). Must find the FAB or scroll 6 viewports past broken WORK to learn what the studio does.

## Minor Observations

- Rotating hero word gap: line briefly reads "ADS GET SKIPPED GET PLAYED".
- SCROLL cue and WATCHING NOW badge collide with the MENU FAB corner at some scroll positions.
- Light-mode footer map coordinates near-invisible; ~300px dead space below footer links (deferred by user).
- Lead-routing mockup clips its own text at panel edges.
- Garnet "2+" stat and pricing-card gradients vs "garnet reserved" direction — standing design decision to revisit.
- Product names lowercase in service-page chips ("Lead detective", "Mypen") vs product treatment elsewhere.
- Researchify report cards alternate card/no-card backgrounds (03, 06 float bare); brand-design "How it runs" grid has an orphaned empty cell.
- Contact page swaps header CTA to hello@ — lovely touch, but footer says support@.
- Loader plays every visit (once-per-session offer stands).
- Genuine a11y care visible: h1 aria-label, theme-toggle label.

## Questions to Consider

1. Would you send this site to a prospect today with the WORK section as-is?
2. Is BW-01 a demo of your product thinking or a confession about it — what would it cost to make the first thing a buyer touches actually intelligent?
3. Which company is this — the $18K Dubai/New Delhi senior studio, or the $399-70%-off template shop? Each pitch currently falsifies the other.
