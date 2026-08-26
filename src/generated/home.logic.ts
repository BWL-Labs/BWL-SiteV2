/* eslint-disable */
// @ts-nocheck
/* GENERATED from the .dc.html source by tools/build_logic.py — do not hand-edit.
   Regenerate with:  python3 tools/build_logic.py                              */

import React, { useEffect, useReducer, useRef } from "react";
/* the old runtime exposed React globally; page logic uses React.createRef() */

class DCLogic {
  props: any;
  state: any = {};
  __force: (() => void) | null = null;
  constructor(props: any = {}) { this.props = props; }
  setState(patch: any) {
    const next = typeof patch === "function" ? patch(this.state) : patch;
    if (next) { this.state = { ...this.state, ...next }; this.__force?.(); }
  }
}

class Component extends DCLogic {
  componentDidMount() {
    this.reduced = (this.props.motion || "full") === "reduced"
      || window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    /* playback is owned solely by initMediaGating()'s IntersectionObserver.
       a blanket pause->play resume handler here would undo every pause it issues. */
    document.querySelectorAll("video").forEach((v) => {
      v.muted = true;
      if (v.hasAttribute("loop")) v.loop = true;
      if (v.dataset.bwBotVideo) return; /* initBotLoop owns the bot pair — a resume handler would fight its crossfade pauses */
      const gated = () => v.dataset.bwOnScreen === "0" || v.dataset.bwWheelHidden === "1";
      v.addEventListener("canplay", () => { if (!gated() && !document.hidden) v.play().catch(() => {}); });
      v.addEventListener("pause", () => {
        if (v.seeking || document.hidden || gated()) return;
        v.play().catch(() => {});
      });
    });
    this.wheelIndex = -1;
    this.raf = null;
    this.seen = new WeakSet();

    if (this.props.showPricing === false) {
      const p = document.getElementById("pricing");
      if (p) p.style.display = "none";
    }

    const dismissLoader = () => {
      const l = document.querySelector("[data-bw-loader]");
      if (!l || l.dataset.dismissed) return;
      l.dataset.dismissed = "1";
      l.style.opacity = "0";
      l.style.pointerEvents = "none";
      setTimeout(() => { l.style.display = "none"; }, 450);
    };
    this.hideLoader = setTimeout(dismissLoader, 1100);
    if (document.readyState === "complete") dismissLoader();
    else window.addEventListener("load", dismissLoader, { once: true });

    this.initPrompt();
    this.initVisitors();
    this.initRadial();
    this.initCarousel();
    this.initGlide();
    this.initFaq();
    this.initHero();
    this.initReveal();
    this.initCounters();
    this.raf = null;
    this.onScroll = () => {
      this.startGlideLoop();
      if (this.raf) cancelAnimationFrame(this.raf);
      this.raf = requestAnimationFrame(() => { this.raf = null; this.tick(); });
    };
    window.addEventListener("scroll", this.onScroll, { passive: true });
    window.addEventListener("resize", this.onScroll);
    this.bindWheelClicks();
    this.setWheel(0, true);
    this.initEngagementCardHover();
    this.initSiteFooter();
    this.tick();
    this.retry = setTimeout(() => { this.initReveal(); this.initCounters(); this.initFaq(); this.initGlide(); this.tick(); }, 900);
    clearInterval(this.heartbeat);
    this.heartbeat = setInterval(() => {
      if (document.hidden) return;
      if (!this.glideEls || !this.glideEls.length) this.initGlide();
      this.tick();
    }, 3000);
    this.startVideoLoopGuard();
    this.initMediaGating();
    this.initBotLoop();
    this.initCaseStack();
  }

  /* sticky case-study stack: each card recedes as the next one covers it.
     own rAF-throttled scroll handler — deliberately not part of the glide loop */
  initCaseStack() {
    const cards = Array.from(document.querySelectorAll("[data-bw-card]"));
    if (cards.length < 2 || this.reduced) return;
    let raf = null;
    const update = () => {
      raf = null;
      for (let i = 0; i < cards.length - 1; i++) {
        const el = cards[i];
        const c = el.getBoundingClientRect();
        const n = cards[i + 1].getBoundingClientRect();
        const p = Math.max(0, Math.min(1, (c.bottom - n.top) / (c.height || 1)));
        if (p < 0.002) {
          if (el.style.transform) { el.style.transform = ""; el.style.filter = ""; }
          continue;
        }
        el.style.transform = "scale(" + (1 - 0.05 * p).toFixed(4) + ")";
        el.style.filter = "brightness(" + (1 - 0.14 * p).toFixed(4) + ")";
      }
    };
    this.onStackScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    window.addEventListener("scroll", this.onStackScroll, { passive: true });
    window.addEventListener("resize", this.onStackScroll);
    update();
  }

  /* only decode video that is actually on screen — 8+ simultaneous autoplay
     loops saturate the main thread and make the whole page unresponsive */
  initMediaGating() {
    const vids = Array.from(document.querySelectorAll("video"));
    if (!vids.length) return;
    /* preload is declared in the markup (eager on the hero, "none" elsewhere) —
       don't override it here or off-screen clips start fetching again */

    if (window.IntersectionObserver) {
      if (this.mediaIO) this.mediaIO.disconnect();
      this.mediaIO = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          const v = e.target;
          v.dataset.bwOnScreen = e.isIntersecting ? "1" : "0";
          if (v.dataset.bwBotVideo) return; /* the bot pair is driven by initBotLoop's crossfade */
          if (e.isIntersecting && v.dataset.bwWheelHidden !== "1") v.play().catch(() => {});
          else if (!e.isIntersecting) v.pause();
        });
      }, { rootMargin: "150px 0px", threshold: 0 });
      vids.forEach((v) => this.mediaIO.observe(v));
    }

    if (this.onMediaVis) document.removeEventListener("visibilitychange", this.onMediaVis);
    this.onMediaVis = () => {
      document.querySelectorAll("video").forEach((v) => {
        if (v.dataset.bwBotVideo) return;
        if (document.hidden) v.pause();
        else if (v.dataset.bwOnScreen === "1" && v.dataset.bwWheelHidden !== "1") v.play().catch(() => {});
      });
    };
    document.addEventListener("visibilitychange", this.onMediaVis);
  }

  /* the services wheel stacks all screens on top of each other — only the
     active one is visible, so the rest must not keep decoding */
  syncScreenVideos(i) {
    document.querySelectorAll("[data-bw-screen]").forEach((s) => {
      const active = s.getAttribute("data-bw-screen") === String(i);
      s.querySelectorAll("video").forEach((v) => {
        v.dataset.bwWheelHidden = active ? "0" : "1";
        if (active) { if (v.dataset.bwOnScreen !== "0") v.play().catch(() => {}); }
        else v.pause();
      });
    });
  }

  /* the bot clip cuts hard between its last and first frame, so a native loop
     jumps. ping-pong instead: play forward to the tail, then walk currentTime
     back to 0 at real speed and play forward again — no seam by construction. */
  initBotLoop() {
    const v = document.querySelector("[data-bw-bot-video]");
    if (!v) return;
    v.muted = true;
    if (this.reduced) { v.loop = true; return; }
    v.loop = false;
    /* the cycle lives strictly inside [HEAD, d - TAIL] — it never touches frame 0
       or the last frame, so neither turnaround needs a seek back to the start */
    const TAIL = 0.25, HEAD = 0.1;
    let dir = 1, last = 0, pending = 0;
    if (this.botRaf) cancelAnimationFrame(this.botRaf);
    const step = (ts) => {
      this.botRaf = requestAnimationFrame(step);
      const dt = last ? Math.min((ts - last) / 1000, 0.1) : 0;
      last = ts;
      if (document.hidden || v.dataset.bwOnScreen === "0") {
        if (!v.paused) v.pause();
        last = 0;
        pending = 0;
        return;
      }
      const d = v.duration;
      if (!d || !isFinite(d)) return;
      if (dir === 1) {
        /* flip BEFORE any play() call: a rAF gap can let playback run past d,
           which fires 'ended' — and play() on an ended element restarts at 0,
           flashing the first frame straight through the loop */
        if (v.ended || v.currentTime >= d - TAIL) {
          dir = -1;
          pending = 0;
          if (!v.paused) v.pause();
          if (v.currentTime > d - TAIL) { try { v.currentTime = d - TAIL; } catch (err) {} }
          return;
        }
        if (v.paused) v.play().catch(() => {});
        return;
      }
      if (!v.paused) v.pause();
      /* a seek spans several frames — bank their elapsed time instead of
         dropping it, or the rewind crawls at a fraction of real speed */
      pending += dt;
      if (v.seeking || pending < 1 / 30) return;
      const t = v.currentTime - pending;
      pending = 0;
      /* hand straight back to forward playback from wherever we are — no
         seek to 0, so there is no first-frame flash at the turnaround */
      if (t <= HEAD) {
        dir = 1;
        v.play().catch(() => {});
        return;
      }
      try { v.currentTime = t; } catch (err) {}
    };
    this.botRaf = requestAnimationFrame(step);
  }

  /* watchdog: some source mp4s stall on the last frame instead of firing 'ended' + looping natively */
  startVideoLoopGuard() {
    const last = new Map();
    clearInterval(this.videoLoopGuard);
    this.videoLoopGuard = setInterval(() => {
      if (document.hidden) return;
      document.querySelectorAll("video[loop]").forEach((v) => {
        if (v.paused || v.dataset.bwOnScreen === "0" || v.dataset.bwWheelHidden === "1") return;
        if (!v.duration || !isFinite(v.duration)) return;
        const prevTime = last.get(v);
        const nearEnd = v.currentTime >= v.duration - 0.35;
        const stuck = prevTime !== undefined && Math.abs(prevTime - v.currentTime) < 0.02;
        if (nearEnd && stuck) {
          v.currentTime = 0;
          if (v.paused) v.play().catch(() => {});
        }
        last.set(v, v.currentTime);
      });
    }, 900);
  }

  /* ---------- engagements cards: photo hover ---------- */
  initEngagementCardHover() {
    document.querySelectorAll("[data-bw-eng-card]").forEach((card) => {
      const bg = card.querySelector("[data-bw-eng-bg]");
      const setHover = (on) => {
        if (this.reduced) return;
        card.style.transform = on ? "translateY(-4px)" : "";
        if (bg) bg.style.transform = on ? "scale(1.05)" : "scale(1)";
      };
      card.addEventListener("mouseenter", () => setHover(true));
      card.addEventListener("mouseleave", () => setHover(false));
    });
  }

  /* map is preserveAspectRatio="xMidYMid slice" — uniform scale, so pins need
     no counter-scale; clear any transform a previous build left behind */
  initFooterPinScale() {
    document.querySelectorAll(".site-footer .bwf-pin").forEach((g) => g.removeAttribute("transform"));
  }

  /* ---------- site footer: live clocks + email copy ---------- */
  initSiteFooter() {
    this.initFooterPinScale();
    const clocks = () => {
      document.querySelectorAll(".site-footer .bwf-ptime").forEach((n) => {
        try {
          n.textContent = new Intl.DateTimeFormat("en-GB", { timeZone: n.dataset.tz, hour: "2-digit", minute: "2-digit", hour12: false }).format(new Date()) + " LOCAL";
        } catch (e) {}
      });
    };
    clocks();
    clearInterval(this.footerClocks);
    this.footerClocks = setInterval(clocks, 20000);

    const mail = document.getElementById("bwf-mail");
    const cp = document.getElementById("bwf-cp");
    if (!mail || mail.dataset.bwfBound) return;
    mail.dataset.bwfBound = "1";
    mail.addEventListener("click", () => {
      const addr = "support@blackwarelabs.com";
      if (!navigator.clipboard || !navigator.clipboard.writeText) {
        window.location.href = "mailto:" + addr;
        return;
      }
      navigator.clipboard.writeText(addr).then(() => {
        if (!cp) return;
        cp.classList.add("bwf-on");
        clearTimeout(this.footerCopyTimer);
        this.footerCopyTimer = setTimeout(() => cp.classList.remove("bwf-on"), 1600);
      }).catch(() => { window.location.href = "mailto:" + addr; });
    });
  }

  componentWillUnmount() {
    if (this.onStackScroll) {
      window.removeEventListener("scroll", this.onStackScroll);
      window.removeEventListener("resize", this.onStackScroll);
    }
    if (this.mediaIO) this.mediaIO.disconnect();
    if (this.onMediaVis) document.removeEventListener("visibilitychange", this.onMediaVis);
    if (this.botRaf) cancelAnimationFrame(this.botRaf);
    clearTimeout(this.botHand);
    if (this.pinRO) this.pinRO.disconnect();
    if (this.pinResize) window.removeEventListener("resize", this.pinResize);
    clearInterval(this.footerClocks);
    clearTimeout(this.footerCopyTimer);
    clearInterval(this.videoLoopGuard);
    clearTimeout(this.hideLoader);
    clearTimeout(this.aeTimer);
    clearInterval(this.lrTimer);
    clearTimeout(this.poTimer);
    window.removeEventListener("scroll", this.onScroll);
    window.removeEventListener("resize", this.onScroll);
    if (this.faqRemeasure) window.removeEventListener("resize", this.faqRemeasure);
    if (this.onRadialKey) window.removeEventListener("keydown", this.onRadialKey);
    if (this.onCarouselKey) window.removeEventListener("keydown", this.onCarouselKey);
    if (this.glideRaf) cancelAnimationFrame(this.glideRaf);
    if (this.fitNeuron) window.removeEventListener("resize", this.fitNeuron);
    if (this.orbRaf) cancelAnimationFrame(this.orbRaf);
    clearInterval(this.visitorTimer);
    if (this.onRadialResize) window.removeEventListener("resize", this.onRadialResize);
    clearInterval(this.heartbeat);
    clearInterval(this.typer);
    clearTimeout(this.retry);
    if (this.io) this.io.disconnect();
    if (this.co) this.co.disconnect();
  }

  /* ---------- fake live-visitor counter: always 2n*3 ---------- */
  initVisitors() {
    const el = document.querySelector("[data-bw-visitors-count]");
    if (!el || el.dataset.bound) return;
    el.dataset.bound = "1";
    let n = 1;
    const paint = () => { el.textContent = String(2 * n * 3); n += 1; };
    paint();
    clearInterval(this.visitorTimer);
    this.visitorTimer = setInterval(paint, 2400);
  }

  /* ---------- orb: canvas-drawn glowing sphere ---------- */
  buildNeuron(brain) {
    const host = brain.querySelector("[data-bw-neuron]");
    if (!host || host.dataset.built) return;
    host.dataset.built = "1";
    const canvas = host.querySelector("[data-bw-orb-canvas]");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0, h = 0;
    const fit = () => {
      const r = canvas.getBoundingClientRect();
      w = Math.max(1, r.width); h = Math.max(1, r.height);
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
    };
    this.fitNeuron = () => { clearTimeout(this.fitT); this.fitT = setTimeout(fit, 90); };
    window.addEventListener("resize", this.fitNeuron);
    fit();

    this.orbIntensity = 1;
    const draw = (t) => {
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);
      const cx = w / 2, cy = h / 2;
      const k = this.orbIntensity;
      const baseR = Math.min(w, h) * 0.5 * (1 + Math.sin(t * 0.00075) * 0.025);
      const wobA = 0.065 + (k - 1) * 0.4;
      const N = 56;
      const pts = [];
      for (let i = 0; i < N; i++) {
        const a = (i / N) * Math.PI * 2;
        const n = Math.sin(a * 3 + t * 0.00083) * wobA
          + Math.sin(a * 5 - t * 0.00058) * (wobA * 0.5)
          + Math.sin(a * 2 + t * 0.00041) * (wobA * 0.65)
          + Math.sin(a * 7 + t * 0.00097) * (wobA * 0.3);
        const r = baseR * (1 + n);
        pts.push([cx + Math.cos(a) * r, cy + Math.sin(a) * r]);
      }
      ctx.save();
      ctx.beginPath();
      const m0 = [(pts[N - 1][0] + pts[0][0]) / 2, (pts[N - 1][1] + pts[0][1]) / 2];
      ctx.moveTo(m0[0], m0[1]);
      for (let i = 0; i < N; i++) {
        const p = pts[i], np = pts[(i + 1) % N];
        const mx = (p[0] + np[0]) / 2, my = (p[1] + np[1]) / 2;
        ctx.quadraticCurveTo(p[0], p[1], mx, my);
      }
      ctx.closePath();
      ctx.clip();

      ctx.fillStyle = "#060608";
      ctx.fillRect(0, 0, w, h);

      ctx.globalCompositeOperation = "lighten";
      const ang = t * 0.00035;
      const blobs = [
        { a: ang, c: "rgba(61,90,255," + (0.92 * k).toFixed(2) + ")" },
        { a: ang + 2.15, c: "rgba(157,0,255," + (0.85 * k).toFixed(2) + ")" },
        { a: ang + 4.25, c: "rgba(255,95,31," + (0.85 * k).toFixed(2) + ")" },
      ];
      blobs.forEach((b) => {
        const bx = cx + Math.cos(b.a) * baseR * 0.5;
        const by = cy + Math.sin(b.a) * baseR * 0.5;
        const g = ctx.createRadialGradient(bx, by, 0, bx, by, baseR * 1.15);
        g.addColorStop(0, b.c);
        g.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, w, h);
      });
      ctx.globalCompositeOperation = "source-over";

      const hx = cx - baseR * 0.26, hy = cy - baseR * 0.32;
      const hg = ctx.createRadialGradient(hx, hy, 0, hx, hy, baseR * 0.5);
      hg.addColorStop(0, "rgba(255,255,250," + (0.5 * k).toFixed(2) + ")");
      hg.addColorStop(1, "rgba(255,255,250,0)");
      ctx.fillStyle = hg;
      ctx.fillRect(0, 0, w, h);
      ctx.restore();
    };

    const loop = (t) => {
      draw(t);
      this.orbRaf = requestAnimationFrame(loop);
    };
    draw(performance.now());
    if (!this.reduced) this.orbRaf = requestAnimationFrame(loop);

    brain.addEventListener("pointerenter", () => {
      this.orbIntensity = 1.35;
      canvas.style.transform = "scale(1.03)";
      if (this.reduced) draw(performance.now());
    });
    brain.addEventListener("pointerleave", () => {
      this.orbIntensity = 1;
      canvas.style.transform = "scale(1)";
      if (this.reduced) draw(performance.now());
    });
  }

  /* ---------- inertial scroll glide (velocity lag + parallax) ---------- */
  initGlide() {
    if (this.smoothY === undefined) this.smoothY = window.scrollY;
    const glide = [];
    const push = (sel, base) => {
      document.querySelectorAll(sel).forEach((el, i) => {
        glide.push([el, base * (1 + (i % 3) * 0.42)]);
      });
    };
    if (!this.reduced) {
      push("section h2", 0.5);
      push("figure", 0.42);
      push("[data-bw-carousel]", 0.3);
      push("[data-bw-stats] > div > div", 0.55);
      push("#process > div > div:nth-child(2) > div", 0.36);
      push("#pricing > div > div:nth-child(2) > div", 0.3);
    }
    this.glideEls = glide;
    const heroFoot = document.querySelector("[data-bw-time]");
    this.heroEl = document.querySelector("#top h1");
    this.heroFootRow = heroFoot ? heroFoot.closest("div[style*='space-between']") : null;
    this.startGlideLoop();
  }

  /* the loop must IDLE when nothing moves: writing hero styles every frame on a
     static page invalidates paint behind the backdrop-filter surfaces forever.
     onScroll/onResize restart it. */
  startGlideLoop() {
    if (this.glideRaf || this.reduced) return;
    let last = 0;
    const loop = () => {
      const y = window.scrollY;
      this.smoothY += (y - this.smoothY) * 0.085;
      let lag = Math.max(-150, Math.min(150, y - this.smoothY));
      if (Math.abs(lag) < 0.04) lag = 0;

      if (y === this.lastGlideY && lag === 0 && last === 0) {
        this.glideRaf = null;
        return;
      }

      const els = this.glideEls || [];
      if (lag !== 0 || last !== 0) {
        for (let i = 0; i < els.length; i++) {
          els[i][0].style.translate = "0 " + (lag * els[i][1]).toFixed(2) + "px";
        }
        last = lag;
      }
      if (y !== this.lastGlideY && this.heroEl && y < window.innerHeight * 1.3) {
        this.heroEl.style.translate = "0 " + (y * 0.16).toFixed(1) + "px";
        this.heroEl.style.opacity = String(Math.max(0, 1 - y / (window.innerHeight * 0.85)));
        if (this.heroFootRow) this.heroFootRow.style.translate = "0 " + (y * 0.08).toFixed(1) + "px";
      }
      this.lastGlideY = y;
      this.glideRaf = requestAnimationFrame(loop);
    };
    this.glideRaf = requestAnimationFrame(loop);
  }

  /* reveal / count anything the viewport jumped past */
  /* single place that lands a reveal, so the compositor hint is always released */
  revealNow(el, delayMs) {
    el.style.transitionDelay = (delayMs || 0) + "ms";
    el.style.opacity = "1";
    el.style.transform = "none";
    el.addEventListener("transitionend", function done() {
      el.style.willChange = "auto";
      el.style.transitionDelay = "0ms";
      el.removeEventListener("transitionend", done);
    });
  }

  catchUp() {
    const vh = window.innerHeight;
    document.querySelectorAll("[data-bw-reveal]").forEach((el) => {
      if (el.style.opacity !== "0") return;
      if (el.getBoundingClientRect().top < vh * 1.02) {
        this.revealNow(el, 0);
      }
    });
    document.querySelectorAll("[data-bw-count]").forEach((el) => {
      if (el.dataset.bwRan) return;
      if (el.getBoundingClientRect().top < vh) this.runCount(el);
    });
  }

  /* ---------- 3D glass carousel ---------- */
  initCarousel() {
    const stage = document.querySelector("[data-bw-carousel]");
    if (!stage || stage.dataset.bound) return;
    stage.dataset.bound = "1";
    const slides = Array.from(stage.querySelectorAll("[data-bw-slide]"));
    if (!slides.length) return;
    const dots = Array.from(document.querySelectorAll("[data-bw-dot-nav]"));
    const count = document.querySelector("[data-bw-carousel-count]");
    const pad = (n) => (n < 10 ? "0" + n : String(n));
    const last = slides.length - 1;
    let active = Math.min(2, last);
    let pos = active;   /* fractional position — the gesture and the spring own this */
    let vel = 0;        /* slides per second */
    let raf = null;

    /* the spring writes transform/opacity every frame, so CSS must not also
       interpolate them — otherwise the two fight and the drag stops tracking 1:1 */
    slides.forEach((el) => {
      el.style.transition = "none";
      const im = el.querySelector("[data-bw-slide-img]");
      if (im) im.style.transition = "none";
    });

    const paint = (p) => {
      slides.forEach((el, i) => {
        const o = i - p;
        const a = Math.abs(o);
        el.style.transform = "translate(-50%,0) translateX(" + (o * 54) + "%) translateZ(" + (-a * 180) + "px) rotateY(" + (o * -26) + "deg) scale(" + (1 - a * 0.06).toFixed(3) + ")";
        el.style.opacity = String(a <= 1 ? 1 - 0.3 * a : a <= 2 ? 0.7 - 0.32 * (a - 1) : 0.38);
        el.style.zIndex = String(10 - Math.round(a));
        el.style.pointerEvents = Math.round(a) > 2 ? "none" : "auto";
        const im = el.querySelector("[data-bw-slide-img]");
        if (im) im.style.transform = "translateX(" + (o * -16) + "px)";
      });
      const idx = Math.max(0, Math.min(last, Math.round(p)));
      dots.forEach((d, i) => {
        const on = i === idx;
        d.style.width = on ? "26px" : "8px";
        d.style.background = on ? "#080705" : "rgba(255,255,250,.5)";
      });
      if (count) count.textContent = pad(idx + 1) + " / " + pad(slides.length);
    };

    /* soft boundary: resist past the ends instead of hitting a wall */
    const rubber = (over) => (over * 0.55) / (1 + 0.55 * Math.abs(over));
    const bounded = (p) => (p < 0 ? -rubber(-p) : p > last ? last + rubber(p - last) : p);

    /* interruptible spring — always animates from the live value, never the target */
    const settle = (target, v0) => {
      active = Math.max(0, Math.min(last, Math.round(target)));
      if (this.reduced) { pos = active; vel = 0; paint(pos); return; }
      vel = v0 || 0;
      if (raf) cancelAnimationFrame(raf);
      const k = 190, damp = 23;
      let prevT = performance.now();
      const step = (now) => {
        const dt = Math.min(0.032, (now - prevT) / 1000);
        prevT = now;
        vel += (-k * (pos - active) - damp * vel) * dt;
        pos += vel * dt;
        paint(pos);
        if (Math.abs(pos - active) < 0.002 && Math.abs(vel) < 0.02) {
          pos = active; vel = 0; paint(pos); raf = null; return;
        }
        raf = requestAnimationFrame(step);
      };
      raf = requestAnimationFrame(step);
    };

    const go = (i) => settle(Math.max(0, Math.min(last, i)), vel);
    paint(pos);

    slides.forEach((el, i) => el.addEventListener("click", () => { if (i !== active) go(i); }));
    dots.forEach((d, i) => d.addEventListener("click", () => go(i)));
    const prevBtn = document.querySelector("[data-bw-carousel-prev]");
    const nextBtn = document.querySelector("[data-bw-carousel-next]");
    if (prevBtn) prevBtn.addEventListener("click", () => go(active - 1));
    if (nextBtn) nextBtn.addEventListener("click", () => go(active + 1));

    /* ---- direct manipulation: 1:1 tracking, velocity commit, momentum ---- */
    let drag = null;
    /* one step of `pos` moves a slide by 54% of ITS OWN width (translateX is
       percentage-of-self), so the finger-to-content ratio must divide by that —
       using the stage width made the drag ~3x too heavy to track 1:1 */
    /* offsetWidth, not getBoundingClientRect: the slides carry scale/rotateY/translateZ,
       so the rect is the foreshortened visual box, not the layout width the 54% resolves against */
    const stepPx = () => Math.max(80, slides[0].offsetWidth * 0.54);

    stage.addEventListener("pointerdown", (e) => {
      if (e.button != null && e.button !== 0) return;
      if (raf) { cancelAnimationFrame(raf); raf = null; }   /* grab it mid-flight */
      try { stage.setPointerCapture(e.pointerId); } catch (err) {}
      stage.dataset.bwDragged = "0";
      /* keep a short position history — velocity from just the last two points
         spikes when two moves land in the same millisecond */
      drag = { startX: e.clientX, startPos: pos, moved: 0, samples: [{ x: e.clientX, t: performance.now() }] };
      vel = 0;
    });

    stage.addEventListener("pointermove", (e) => {
      if (!drag) return;
      const now = performance.now();
      drag.samples.push({ x: e.clientX, t: now });
      while (drag.samples.length > 2 && now - drag.samples[0].t > 90) drag.samples.shift();
      pos = bounded(drag.startPos - (e.clientX - drag.startX) / stepPx());
      drag.moved = Math.max(drag.moved, Math.abs(e.clientX - drag.startX));
      paint(pos);
    });

    /* velocity over the sample window, in slides per second */
    const flickVelocity = (d) => {
      const a = d.samples[0], b = d.samples[d.samples.length - 1];
      const dt = (b.t - a.t) / 1000;
      if (dt < 0.008) return 0;            /* too short to be a trustworthy reading */
      return -((b.x - a.x) / stepPx()) / dt;
    };

    const release = (e) => {
      if (!drag) return;
      const moved = drag.moved;
      const drag0 = drag;
      drag = null;
      try { if (e && e.pointerId != null && stage.hasPointerCapture(e.pointerId)) stage.releasePointerCapture(e.pointerId); } catch (err) {}
      vel = flickVelocity({ samples: drag0.samples });
      /* project where the flick is heading, then snap to the slide nearest that point */
      const projected = pos + (vel / 1000) * 0.998 / (1 - 0.998);
      const capped = Math.max(pos - 3, Math.min(pos + 3, projected));
      stage.dataset.bwDragged = moved > 6 ? "1" : "0";
      settle(Math.max(0, Math.min(last, Math.round(capped))), vel);
    };
    stage.addEventListener("pointerup", release);
    stage.addEventListener("pointercancel", release);

    /* a drag must not also fire a slide's click-to-focus */
    stage.addEventListener("click", (e) => {
      if (stage.dataset.bwDragged === "1") {
        stage.dataset.bwDragged = "0";
        e.stopPropagation();
        e.preventDefault();
      }
    }, true);

    // 3d parallax on pointer move
    if (!this.reduced) {
      stage.addEventListener("pointermove", (e) => {
        const r = stage.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        stage.style.perspectiveOrigin = (50 + px * 22) + "% " + (50 + py * 22) + "%";
      });
      stage.addEventListener("pointerleave", () => { stage.style.perspectiveOrigin = "50% 50%"; });
    }

    this.onCarouselKey = (e) => {
      if (!stage.matches(":hover")) return;
      if (e.key === "ArrowLeft") go(active - 1);
      if (e.key === "ArrowRight") go(active + 1);
    };
    window.addEventListener("keydown", this.onCarouselKey);
  }

  /* ---------- radial dial navigation ---------- */
  initRadial() {
    const wrap = document.querySelector("[data-bw-radial]");
    if (!wrap || wrap.dataset.bound) return;
    wrap.dataset.bound = "1";
    const hub = wrap.querySelector("[data-bw-radial-hub]");
    const glyph = wrap.querySelector("[data-bw-radial-glyph]");
    const hubLabel = wrap.querySelector("[data-bw-radial-hublabel]");
    const ring = wrap.querySelector("[data-bw-radial-ring]");
    const scrim = document.querySelector("[data-bw-scrim]");
    const items = Array.from(wrap.querySelectorAll("[data-bw-radial-item]"));
    const ANG = [180, 198, 216, 234, 252, 270];
    this.radialOpen = false;

    // radius derives from item size + angular step so adjacent circles never touch
    const step = (ANG[1] - ANG[0]) * Math.PI / 180;
    const s = Math.sin(step / 2);
    const geom = () => {
      const limit = Math.min(window.innerWidth, window.innerHeight) - 82; // hub inset + margin
      let size = 78;
      let r = size / (2 * s) + 12;
      if (r + size / 2 > limit) {
        size = Math.max(52, (limit - 12) / (1 / (2 * s) + 0.5));
        r = size / (2 * s) + 12;
      }
      return { r: r, size: size };
    };

    /* per-item springs — the menu fans out with a little give rather than a fixed
       curve, and a rapid re-toggle retargets from the live value instead of jumping */
    const springs = items.map(() => ({ p: 0, v: 0 }));
    let radialTarget = 0, radialRaf = null, radialT0 = 0;

    const applyItem = (el, i, p, g) => {
      const a = ANG[i];
      el.style.width = el.style.height = g.size + "px";
      el.style.transform = "rotate(" + a + "deg) translateX(" + (g.r * p).toFixed(2) + "px) rotate(" + (-a) + "deg) translate(-50%,-50%) scale(" + (0.5 + 0.5 * p).toFixed(4) + ")";
      el.style.opacity = String(Math.max(0, Math.min(1, p * 1.7)));
    };

    const runSprings = () => {
      const g = geom();
      const k = 210, damp = 24;   /* ~0.83 damping ratio: a touch of overshoot, no wobble */
      let prevT = performance.now();
      const step = (now) => {
        const dt = Math.min(0.032, (now - prevT) / 1000);
        prevT = now;
        const elapsed = now - radialT0;
        let settled = true;
        items.forEach((el, i) => {
          const s = springs[i];
          const delay = (radialTarget === 1 ? i : (items.length - 1 - i)) * 42;
          const goal = elapsed < delay ? s.p : radialTarget;   /* hold until its turn */
          s.v += (-k * (s.p - goal) - damp * s.v) * dt;
          s.p += s.v * dt;
          applyItem(el, i, s.p, g);
          if (elapsed < delay || Math.abs(s.p - radialTarget) > 0.001 || Math.abs(s.v) > 0.01) settled = false;
        });
        if (settled) {
          items.forEach((el, i) => { springs[i].p = radialTarget; springs[i].v = 0; applyItem(el, i, radialTarget, g); });
          radialRaf = null;
          return;
        }
        radialRaf = requestAnimationFrame(step);
      };
      if (radialRaf) cancelAnimationFrame(radialRaf);
      radialT0 = performance.now();
      radialRaf = requestAnimationFrame(step);
    };

    const place = (open) => {
      const g = geom();
      items.forEach((el) => {
        /* the spring owns transform+opacity; leave only the press-feedback transitions */
        el.style.transition = "box-shadow .16s ease, background .16s ease";
        el.style.transitionDelay = "0s";
        el.style.pointerEvents = open ? "auto" : "none";
      });
      radialTarget = open ? 1 : 0;
      if (this.reduced) {
        if (radialRaf) { cancelAnimationFrame(radialRaf); radialRaf = null; }
        items.forEach((el, i) => { springs[i].p = radialTarget; springs[i].v = 0; applyItem(el, i, radialTarget, g); });
      } else {
        runSprings();
      }
      if (ring) {
        ring.style.width = ring.style.height = (g.r * 2) + "px";
        ring.style.opacity = open ? "1" : "0";
        ring.style.scale = open ? "1" : "0.7";
      }
      if (glyph) glyph.style.transform = open ? "rotate(135deg)" : "rotate(0deg)";
      if (hubLabel) hubLabel.textContent = open ? "Close" : "Menu";
      if (hub) hub.style.transform = open ? "scale(.94)" : "scale(1)";
      if (scrim) {
        scrim.style.opacity = open ? "1" : "0";
        scrim.style.pointerEvents = open ? "auto" : "none";
      }
    };

    const set = (open) => { this.radialOpen = open; place(open); };
    place(false);

    if (hub) hub.addEventListener("click", () => set(!this.radialOpen));
    if (scrim) scrim.addEventListener("click", () => set(false));
    items.forEach((el) => {
      el.addEventListener("click", () => {
        const href = el.getAttribute("data-bw-href");
        if (href) { window.location.href = href; return; }
        const target = document.querySelector(el.getAttribute("data-bw-target"));
        set(false);
        if (!target) return;
        const top = target.getBoundingClientRect().top + window.scrollY - 90;
        window.scrollTo({ top: top, behavior: this.reduced ? "auto" : "smooth" });
      });
    });
    this.onRadialKey = (e) => { if (e.key === "Escape" && this.radialOpen) set(false); };
    this.onRadialResize = () => {
      if (!this.radialOpen) return;
      const g = geom();
      items.forEach((el, i) => applyItem(el, i, springs[i].p, g));
      if (ring) ring.style.width = ring.style.height = (g.r * 2) + "px";
    };
    window.addEventListener("keydown", this.onRadialKey);
    window.addEventListener("resize", this.onRadialResize);
  }

  /* ---------- hero chat prompt ---------- */
  initPrompt() {
    const form = document.querySelector("[data-bw-prompt]");
    if (!form || form.dataset.bound) return;
    form.dataset.bound = "1";

    // collapsed neural trigger -> chat box
    const brain = document.querySelector("[data-bw-brain]");
    const closeBtn = form.querySelector("[data-bw-brain-close]");
    const setChat = (open) => {
      if (brain) {
        brain.style.display = open ? "none" : "flex";
        if (!open) {
          brain.style.opacity = "0";
          brain.style.transform = "translateY(10px)";
          requestAnimationFrame(() => { brain.style.opacity = "1"; brain.style.transform = "translateY(0)"; });
        }
      }
      form.style.display = open ? "flex" : "none";
      if (open) {
        form.style.opacity = "0";
        form.style.transform = "translateY(12px) scale(.985)";
        requestAnimationFrame(() => {
          form.style.opacity = "1";
          form.style.transform = "translateY(0) scale(1)";
        });
        const ta = form.querySelector("[data-bw-prompt-input]");
        if (ta) setTimeout(() => ta.focus(), 260);
      }
    };
    if (brain) {
      form.style.transition = "opacity .5s ease, transform .6s cubic-bezier(.16,1,.3,1), box-shadow .4s ease, border-color .4s ease";
      setChat(false);
      brain.addEventListener("click", () => setChat(true));
      this.buildNeuron(brain);
    }
    if (closeBtn) closeBtn.addEventListener("click", () => setChat(false));
    const input = form.querySelector("[data-bw-prompt-input]");
    const sendLabel = form.querySelector("[data-bw-prompt-send-label]");
    const reply = document.querySelector("[data-bw-prompt-reply]");

    const grow = () => {
      if (!input) return;
      input.style.height = "auto";
      input.style.height = Math.max(input.scrollHeight, 60) + "px";
    };
    if (input) input.addEventListener("input", grow);

    form.addEventListener("focusin", () => { form.style.borderColor = "#FFFFFA"; });
    form.addEventListener("focusout", () => { form.style.borderColor = "#E6AF2E"; });

    document.querySelectorAll("[data-bw-chip]").forEach((chip) => {
      chip.addEventListener("click", () => {
        if (!input) return;
        const text = chip.getAttribute("data-bw-chip");
        input.value = "";
        input.focus();
        clearInterval(this.typer);
        let i = 0;
        this.typer = setInterval(() => {
          input.value = text.slice(0, ++i);
          grow();
          if (i >= text.length) clearInterval(this.typer);
        }, this.reduced ? 0 : 14);
      });
    });

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (input && !input.value.trim()) { input.focus(); return; }
      if (sendLabel) sendLabel.textContent = "Sent";
      if (!reply) return;
      reply.style.display = "flex";
      requestAnimationFrame(() => {
        reply.style.opacity = "1";
        reply.style.transform = "translateY(0)";
      });
    });
  }

  /* ---------- hero line entrance ---------- */
  initHero() {
    const lines = document.querySelectorAll("[data-bw-lineinner]");
    lines.forEach((l, i) => {
      if (this.reduced) return;
      l.style.transform = "translateY(105%)";
      l.style.transition = "transform 1.15s cubic-bezier(.16,1,.3,1) " + (i * 0.12 + 0.05) + "s";
      requestAnimationFrame(() => requestAnimationFrame(() => { l.style.transform = "translateY(0)"; }));
    });
  }

  /* ---------- reveal on scroll ---------- */
  initReveal() {
    const els = document.querySelectorAll("[data-bw-reveal]");
    if (!els.length) return;
    if (!this.io) {
      this.io = new IntersectionObserver((entries) => {
        /* stagger whatever crosses together — top-to-bottom, capped so a big
           batch never turns into a slow cascade */
        const hits = entries.filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        hits.forEach((e, i) => {
          this.revealNow(e.target, Math.min(i * 55, 220));
          this.io.unobserve(e.target);
        });
      }, { rootMargin: "0px 0px -12% 0px", threshold: 0.05 });
    }
    els.forEach((el) => {
      if (this.seen.has(el)) return;
      this.seen.add(el);
      if (this.reduced) return;
      el.style.opacity = "0";
      el.style.transform = "translateY(14px)";
      el.style.transition = "opacity .5s cubic-bezier(.22,1,.36,1), transform .62s cubic-bezier(.22,1,.36,1)";
      el.style.willChange = "opacity, transform";
      this.io.observe(el);
    });
  }

  /* ---------- number counters ---------- */
  initCounters() {
    const els = document.querySelectorAll("[data-bw-count]");
    if (!els.length) return;
    if (!this.co) {
      this.co = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          this.co.unobserve(e.target);
          this.runCount(e.target);
        });
      }, { threshold: 0.4 });
    }
    els.forEach((el) => {
      if (el.dataset.bwCounted) return;
      el.dataset.bwCounted = "1";
      if (this.reduced) return;
      el.textContent = "0";
      this.co.observe(el);
    });
  }

  runCount(el) {
    if (el.dataset.bwRan) return;
    el.dataset.bwRan = "1";
    const target = parseFloat(el.getAttribute("data-bw-count")) || 0;
    const dur = 1500;
    const t0 = performance.now();
    const step = (t) => {
      const p = Math.min(1, (t - t0) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = String(Math.round(target * eased));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }

  /* ---------- FAQ accordion ---------- */
  initFaq() {
    const btns = document.querySelectorAll("[data-bw-faq]");
    btns.forEach((btn, i) => {
      if (btn.dataset.bound) return;
      btn.dataset.bound = "1";
      const panel = btn.parentElement.querySelector("[data-bw-faq-panel]");
      const icon = btn.querySelector("[data-bw-faq-icon]");
      if (!panel) return;
      panel.style.transition = "height .5s cubic-bezier(.22,1,.36,1), opacity .4s ease";
      const close = () => {
        panel.style.height = "0px";
        panel.style.opacity = "0";
        if (icon) icon.style.transform = "rotate(0deg)";
        btn.dataset.open = "";
      };
      const open = () => {
        panel.style.height = panel.scrollHeight + "px";
        panel.style.opacity = "1";
        if (icon) icon.style.transform = "rotate(135deg)";
        btn.dataset.open = "1";
      };
      btn._bwOpen = open;
      btn._bwClose = close;
      panel.addEventListener("transitionend", (e) => {
        if (e.propertyName === "height" && btn.dataset.open === "1") panel.style.height = "auto";
      });
      if (i === 0) { open(); this.openFaq = btn; } else { close(); }
      btn.addEventListener("click", () => {
        const isOpen = btn.dataset.open === "1";
        document.querySelectorAll("[data-bw-faq]").forEach((b) => { if (b._bwClose) b._bwClose(); });
        if (!isOpen) { open(); this.openFaq = btn; } else { this.openFaq = null; }
      });
    });

    if (!this.faqRemeasure) {
      this.faqRemeasure = () => {
        const btn = this.openFaq;
        if (!btn) return;
        const panel = btn.parentElement.querySelector("[data-bw-faq-panel]");
        if (!panel) return;
        panel.style.height = "auto";
        panel.style.opacity = "1";
      };
      window.addEventListener("resize", this.faqRemeasure);
      if (document.fonts && document.fonts.ready) document.fonts.ready.then(this.faqRemeasure);
      setTimeout(this.faqRemeasure, 1200);
    }
  }

  /* ---------- service wheel ---------- */
  bindWheelClicks() {
    const sec = document.querySelector("[data-bw-wheel-section]");
    document.querySelectorAll("[data-bw-node]").forEach((node) => {
      if (node.dataset.bound) return;
      node.dataset.bound = "1";
      node.addEventListener("click", () => {
        const i = parseInt(node.getAttribute("data-bw-node"), 10);
        if (!sec) { this.setWheel(i); return; }
        const rect = sec.getBoundingClientRect();
        const top = rect.top + window.scrollY;
        const span = sec.offsetHeight - window.innerHeight;
        const target = top + span * ((i + 0.5) / 8);
        window.scrollTo({ top: target, behavior: this.reduced ? "auto" : "smooth" });
      });
    });
  }

  setWheel(i, force) {
    if (i === this.wheelIndex && !force) return;
    this.wheelIndex = i;
    const ANG = [-70, -50, -30, -10, 10, 30, 50, 70];
    const rot = -ANG[i];
    const dial = document.querySelector("[data-bw-dial]");
    if (dial) dial.style.transform = "rotate(" + rot + "deg)";
    const needle = document.querySelector("[data-bw-needle]");
    if (needle) needle.style.transform = "rotate(" + ANG[i] + "deg)";
    document.querySelectorAll("[data-bw-node]").forEach((node) => {
      const idx = parseInt(node.getAttribute("data-bw-node"), 10);
      const dot = node.querySelector("[data-bw-dot]");
      const num = node.querySelector("[data-bw-nodenum]");
      const active = idx === i;
      if (dot) {
        dot.style.background = active ? "var(--fg)" : "var(--bg)";
        dot.style.borderColor = active ? "var(--fg)" : "var(--hair-hi)";
        dot.style.transform = active ? "scale(1.5)" : "scale(1)";
      }
      if (num) {
        num.style.opacity = active ? "1" : "0.4";
        num.style.color = active ? "var(--accent)" : "var(--fg-mute)";
      }
    });
    document.querySelectorAll("[data-bw-panel]").forEach((p) => {
      const idx = parseInt(p.getAttribute("data-bw-panel"), 10);
      const active = idx === i;
      p.style.transition = "opacity .55s ease, transform .7s cubic-bezier(.22,1,.36,1)";
      p.style.opacity = active ? "1" : "0";
      p.style.transform = active ? "translateY(0)" : "translateY(26px)";
      p.style.pointerEvents = active ? "auto" : "none";
      if (idx !== 0) p.style.position = "absolute";
      p.style.inset = idx === 0 ? "0 auto auto 0" : "0";
    });
    this.showScreen(i);
    const label = document.querySelector("[data-bw-wheel-index]");
    if (label) label.textContent = "0" + (i + 1);
    const bar = document.querySelector("[data-bw-wheel-bar]");
    if (bar) bar.style.scale = ((i + 1) / 8) + " 1";
  }

  /* ---------- service window screens ---------- */
  showScreen(i) {
    const screens = document.querySelectorAll("[data-bw-screen]");
    if (!screens.length) return;
    const urls = ["blackwarelabs.com/brand", "blackwarelabs.com/build", "blackwarelabs.com/tools", "blackwarelabs.com/pitch", "blackwarelabs.com/leads", "blackwarelabs.com/outbound", "blackwarelabs.com/research", "blackwarelabs.com/selfserve"];
    const url = document.querySelector("[data-bw-win-url]");
    if (url) url.textContent = urls[i] || urls[0];

    screens.forEach((s) => {
      const idx = parseInt(s.getAttribute("data-bw-screen"), 10);
      const on = idx === i;
      s.style.opacity = on ? "1" : "0";
      s.style.transform = on ? "none" : "scale(.985) translateY(8px)";
      s.style.pointerEvents = on ? "auto" : "none";
      if (!on) return;
      // replay the screen's animations from the top
      s.querySelectorAll("[data-bw-play]").forEach((el) => {
        if (!el.dataset.bwAnim) el.dataset.bwAnim = el.style.animation;
        el.style.animation = "none";
        void el.offsetWidth;
        el.style.animation = el.dataset.bwAnim;
      });
      s.querySelectorAll("[data-bw-tally]").forEach((el) => {
        const target = parseFloat(el.getAttribute("data-bw-tally")) || 0;
        const dec = parseInt(el.getAttribute("data-bw-dec"), 10) || 0;
        if (this.reduced) { el.textContent = target.toFixed(dec); return; }
        const t0 = performance.now();
        const step = (t) => {
          const p = Math.min(1, (t - t0) / 1200);
          el.textContent = (target * (1 - Math.pow(1 - p, 3))).toFixed(dec);
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      });
    });
    clearTimeout(this.aeTimer);
    if (i === 3) this.playAnswerEngine();
    clearInterval(this.lrTimer);
    if (i === 4) this.playLeadRouting();
    clearTimeout(this.poTimer);
    if (i === 5) this.playOutbound();
    this.syncScreenVideos(i);
  }

  /* ---------- personalized outbound email card (panel 06) ---------- */
  playOutbound() {
    const root = document.querySelector('[data-bw-screen="5"]');
    if (!root) return;
    const toEl = root.querySelector("[data-bw-po-to]");
    const subjEl = root.querySelector("[data-bw-po-subject]");
    const bodyEl = root.querySelector("[data-bw-po-body]");
    const sentEl = root.querySelector("[data-bw-po-sent]");
    if (!toEl || !bodyEl) return;

    const toText = "Head of Growth · SaaS · 250 employees";
    const subjText = "quick thought on your Q3 sales hiring";
    const lines = [
      { text: "Hi there,", gold: false },
      { text: "Noticed you're scaling the sales team this quarter.", gold: true },
      { text: "Ramping new reps on outbound usually eats the first month.", gold: false },
      { text: "Worth 15 minutes this week to see how we'd help?", gold: false },
    ];
    bodyEl.innerHTML = lines.map((_, i) => '<div data-po-line="' + i + '" style="font-size:10px;line-height:1.5;color:rgba(244,241,234,.9)"></div>').join("");
    const lineEls = Array.from(bodyEl.children);

    const CH_HEAD = 16, CH_BODY = 20, GAP = 260, GOLD_HOLD = 550, HOLD = 2200;

    if (this.reduced) {
      toEl.textContent = toText;
      subjEl.textContent = subjText;
      lineEls.forEach((el, i) => {
        el.textContent = lines[i].text;
        if (lines[i].gold) { el.style.color = "#E6AF2E"; el.style.fontWeight = "600"; }
      });
      sentEl.style.opacity = "1";
      return;
    }

    const typeInto = (el, text, speed, cb) => {
      let n = 0;
      const step = () => {
        n++;
        el.textContent = text.slice(0, n);
        if (n < text.length) this.poTimer = setTimeout(step, speed);
        else this.poTimer = setTimeout(cb, GAP);
      };
      step();
    };
    const typeLine = (idx, cb) => {
      if (idx >= lines.length) { cb(); return; }
      const { text, gold } = lines[idx];
      const el = lineEls[idx];
      let n = 0;
      const step = () => {
        n++;
        el.textContent = text.slice(0, n);
        if (n < text.length) { this.poTimer = setTimeout(step, CH_BODY); return; }
        if (gold) {
          this.poTimer = setTimeout(() => {
            el.style.color = "#E6AF2E";
            el.style.fontWeight = "600";
            this.poTimer = setTimeout(() => typeLine(idx + 1, cb), GOLD_HOLD);
          }, 150);
        } else {
          this.poTimer = setTimeout(() => typeLine(idx + 1, cb), GAP);
        }
      };
      step();
    };
    const run = () => {
      sentEl.style.opacity = "0";
      toEl.textContent = "";
      subjEl.textContent = "";
      lineEls.forEach((el) => { el.textContent = ""; el.style.color = "rgba(244,241,234,.9)"; el.style.fontWeight = "400"; });
      typeInto(toEl, toText, CH_HEAD, () => {
        typeInto(subjEl, subjText, CH_HEAD, () => {
          typeLine(0, () => {
            this.poTimer = setTimeout(() => {
              sentEl.style.opacity = "1";
              this.poTimer = setTimeout(run, HOLD);
            }, 300);
          });
        });
      });
    };
    run();
  }

  /* ---------- lead routing pipeline (panel 05) ---------- */
  playLeadRouting() {
    const root = document.querySelector('[data-bw-screen="4"]');
    if (!root) return;
    const dotEls = [0, 1, 2, 3].map((i) => root.querySelector('[data-bw-lr-stage="' + i + '"]'));
    const progressEl = root.querySelector('[data-bw-lr-progress]');
    const cardEl = root.querySelector('[data-bw-lr-card]');
    const descEl = root.querySelector('[data-bw-lr-descriptor]');
    const badgeEl = root.querySelector('[data-bw-lr-badge]');
    const scoreEl = root.querySelector('[data-bw-lr-score]');
    const tierEl = root.querySelector('[data-bw-lr-tier]');
    const assignEl = root.querySelector('[data-bw-lr-assign]');
    const stackEl = root.querySelector('[data-bw-lr-stack]');
    if (!progressEl || !cardEl || !stackEl) return;

    const leads = [
      { descriptor: 'New lead · SaaS · 250 employees', short: 'SaaS · 250 employees', score: 87, tier: 'HIGH', team: 'Sales', region: 'West' },
      { descriptor: 'New lead · Fintech · 80 employees', short: 'Fintech · 80 employees', score: 74, tier: 'MEDIUM', team: 'Sales', region: 'East' },
      { descriptor: 'New lead · E-commerce · 500 employees', short: 'E-commerce · 500 employees', score: 92, tier: 'HIGH', team: 'Sales', region: 'Central' },
    ];
    const phases = [
      ['enter', 500], ['holdCaptured', 1300], ['toEnriched', 1100], ['enriching', 500], ['enriched', 1000],
      ['toScored', 1100], ['counting', 1300], ['holdScored', 900], ['toRouted', 1100], ['holdRouted', 1500],
      ['dropping', 600], ['gap', 500],
    ];
    const stageByPhase = { enter: 0, holdCaptured: 0, toEnriched: 1, enriching: 1, enriched: 1, toScored: 2, counting: 2, holdScored: 2, toRouted: 3, holdRouted: 3, dropping: 3, gap: 0 };
    const stagePos = [10, 36.66, 63.33, 90];
    const total = phases.reduce((s, p) => s + p[1], 0);
    const countDur = phases.find((p) => p[0] === 'counting')[1];

    let elapsed = 0, leadIndex = 0, lastDropKey = null;
    let stack = [
      { text: 'Fintech · 80 employees', scoreText: '72 · MEDIUM' },
      { text: 'Logistics · 400 employees', scoreText: '91 · HIGH' },
    ];

    const renderStack = () => {
      stackEl.innerHTML = stack.slice(0, 3).map((row, i) =>
        '<div style="display:flex;justify-content:space-between;align-items:center;padding:7px 0;' + (i === 0 ? "" : "border-top:1px solid rgba(255,255,250,.07);") + '">' +
          '<span style="font-size:10.5px;color:rgba(255,255,250,.8)">' + row.text + "</span>" +
          '<span style="font:500 9px/1 \'JetBrains Mono\',monospace;color:rgba(230,175,46,.75);border:1px solid rgba(230,175,46,.25);padding:3px 7px">' + row.scoreText + "</span>" +
        "</div>"
      ).join("");
    };
    renderStack();

    const computePhase = (t) => {
      let acc = 0;
      for (const [key, dur] of phases) {
        if (t < acc + dur) return { key, elapsedInPhase: t - acc };
        acc += dur;
      }
      return { key: phases[phases.length - 1][0], elapsedInPhase: 0 };
    };

    const paint = () => {
      const phase = computePhase(elapsed);
      const lead = leads[leadIndex];
      const activeIndex = phase.key === "gap" ? -1 : stageByPhase[phase.key];

      dotEls.forEach((el, i) => {
        const dot = el.firstElementChild, label = el.lastElementChild;
        if (i === activeIndex) { dot.style.background = "#E6AF2E"; dot.style.border = "1px solid #E6AF2E"; label.style.color = "#E6AF2E"; }
        else if (i < activeIndex) { dot.style.background = "rgba(230,175,46,.5)"; dot.style.border = "1px solid rgba(230,175,46,.5)"; label.style.color = "rgba(255,255,250,.85)"; }
        else { dot.style.background = "transparent"; dot.style.border = "1px solid rgba(255,255,250,.5)"; label.style.color = "rgba(255,255,250,.6)"; }
      });
      const posIndex = activeIndex === -1 ? 0 : activeIndex;
      progressEl.style.width = (activeIndex === -1 ? 0 : stagePos[activeIndex]) + "%";
      cardEl.style.left = stagePos[posIndex] + "%";
      cardEl.style.opacity = (phase.key === "gap" || phase.key === "dropping") ? "0" : "1";
      descEl.textContent = lead.descriptor;

      const scoredOnwards = ["counting", "holdScored", "toRouted", "holdRouted", "dropping"];
      if (scoredOnwards.includes(phase.key)) {
        badgeEl.style.display = "inline-flex";
        let fill = 1, val = lead.score;
        if (phase.key === "counting") { fill = Math.min(1, phase.elapsedInPhase / countDur); val = Math.round(fill * lead.score); }
        scoreEl.textContent = String(val);
        tierEl.style.display = fill >= 0.85 ? "inline" : "none";
        tierEl.textContent = "· " + lead.tier;
        tierEl.style.color = lead.tier === "HIGH" ? "#E6AF2E" : "#C84A1F";
        badgeEl.style.borderColor = "rgba(230,175,46," + (0.25 + 0.55 * fill).toFixed(2) + ")";
      } else {
        badgeEl.style.display = "none";
      }

      if (phase.key === "holdRouted" || phase.key === "dropping") {
        assignEl.textContent = "→ Assigned: " + lead.team + ", " + lead.region;
        assignEl.style.color = "#E6AF2E";
      } else if (phase.key === "enriching") {
        assignEl.textContent = "Enriching profile…";
        assignEl.style.color = "rgba(255,255,250,.7)";
      } else if (phase.key === "enriched") {
        assignEl.textContent = "✓ Firmographic data added";
        assignEl.style.color = "rgba(255,255,250,.7)";
      } else {
        assignEl.textContent = "";
      }

      if (phase.key === "dropping") {
        const dropKey = "d" + leadIndex;
        if (lastDropKey !== dropKey) {
          lastDropKey = dropKey;
          stack = [{ text: lead.short, scoreText: lead.score + " · " + lead.tier }, ...stack].slice(0, 3);
          renderStack();
        }
      }
    };

    if (this.reduced) {
      leadIndex = 0;
      elapsed = total - phases.find((p) => p[0] === "holdRouted")[1] / 2;
      paint();
      return;
    }
    paint();
    this.lrTimer = setInterval(() => {
      elapsed += 40;
      if (elapsed >= total) { elapsed -= total; leadIndex = (leadIndex + 1) % leads.length; lastDropKey = null; }
      paint();
    }, 40);
  }

  /* ---------- answer engine card (panel 04) ---------- */
  playAnswerEngine() {
    const respEl = document.querySelector("[data-bw-ae-response]");
    const citedEl = document.querySelector("[data-bw-ae-cited]");
    if (!respEl) return;
    const prefix = "A handful of specialized studios operate in this space, pairing game design with brand strategy for enterprise clients. ";
    const brand = "[Studio Name]";
    const suffix = " is frequently cited for this kind of work.";
    const full = prefix + brand + suffix;
    const cursor = '<span style="display:inline-block;width:2px;height:11px;background:#E6AF2E;margin-left:1px;vertical-align:-1px"></span>';
    const paint = (n, gold, typing) => {
      let html;
      if (n <= prefix.length) {
        html = prefix.slice(0, n);
      } else if (n <= prefix.length + brand.length) {
        const bn = n - prefix.length;
        html = prefix + '<span style="color:' + (gold ? "#E6AF2E" : "inherit") + ';font-weight:' + (gold ? 700 : 400) + '">' + brand.slice(0, bn) + "</span>";
      } else {
        html = prefix + '<span style="color:' + (gold ? "#E6AF2E" : "inherit") + ';font-weight:' + (gold ? 700 : 400) + '">' + brand + "</span>" + suffix.slice(0, n - prefix.length - brand.length);
      }
      respEl.innerHTML = html + (typing ? cursor : "");
    };
    if (this.reduced) { paint(full.length, true, false); if (citedEl) citedEl.style.opacity = "1"; return; }
    const cycle = () => {
      if (citedEl) citedEl.style.opacity = "0";
      let i = 0;
      const gold = () => {
        paint(full.length, true, false);
        this.aeTimer = setTimeout(() => {
          if (citedEl) citedEl.style.opacity = "1";
          this.aeTimer = setTimeout(cycle, 3000);
        }, 350);
      };
      const step = () => {
        i++;
        const ch = full[i - 1] || "";
        paint(i, false, i < full.length);
        if (i >= full.length) { this.aeTimer = setTimeout(gold, 400); return; }
        let delay = 22 + Math.random() * 14;
        if (ch === ",") delay = 160;
        if (ch === ".") delay = 300;
        this.aeTimer = setTimeout(step, delay);
      };
      step();
    };
    cycle();
  }

  /* ---------- scroll frame ---------- */
  tick() {
    const nav = document.querySelector("[data-bw-nav]");
    const y = window.scrollY;

    if (!this.glideRaf) this.startGlideLoop();
    const bar = document.querySelector("[data-bw-progress]");
    if (bar) {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.width = (max > 0 ? Math.min(100, (y / max) * 100) : 0).toFixed(2) + "%";
    }
    this.catchUp();
    if (nav) {
      const on = y > 40;
      nav.style.padding = on ? "10px 0" : "14px 0";
      /* scrolled look lives in CSS vars so it follows the theme — the previous
         hardcoded values painted a near-white bar over the dark surface */
      nav.dataset.bwScrolled = on ? "1" : "0";
    }

    const sec = document.querySelector("[data-bw-wheel-section]");
    if (sec) {
      const rect = sec.getBoundingClientRect();
      const span = sec.offsetHeight - window.innerHeight;
      const p = span > 0 ? Math.min(1, Math.max(0, -rect.top / span)) : 0;
      const idx = Math.min(7, Math.floor(p * 8 + 0.0001));
      this.setWheel(idx);
    }

    if (!this.reduced) {
      document.querySelectorAll("[data-bw-parallax]").forEach((el) => {
        const speed = parseFloat(el.getAttribute("data-bw-speed")) || 0;
        const r = el.getBoundingClientRect();
        const mid = (r.top + r.height / 2 - window.innerHeight / 2) / window.innerHeight;
        el.style.translate = "0 calc(-50% + " + (mid * speed).toFixed(1) + "px)";
      });
    }
  }

  renderVals() { return {}; }
}

/** Instantiates the page's original logic once and keeps React in step with it.
 *  componentDidMount runs on mount; setState forces a re-render so renderVals()
 *  drives the JSX exactly as the old runtime did. */
export function useHomeLogic(props: any = { motion: "full", showPricing: true }) {
  const [, force] = useReducer((n: number) => n + 1, 0);
  const ref = useRef<any>(null);
  if (!ref.current) {
    const inst: any = new Component(props);
    inst.__force = force;
    ref.current = inst;
  }
  useEffect(() => {
    try { ref.current.componentDidMount?.(); } catch (e) { console.error(e); }
    return () => { try { ref.current.componentWillUnmount?.(); } catch (e) {} };
  }, []);
  return (ref.current.renderVals?.() ?? {}) as any;
}
