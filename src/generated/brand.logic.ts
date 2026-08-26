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
  state = { hover: null, sel: null };
  constructor(props) {
    super(props);
    this.ring = React.createRef();
    this.angle = 0;
    this.vel = 0.12;
    this.drag = null;
  }
  componentDidMount() {
    const step = () => {
      this.raf = requestAnimationFrame(step);
      if (!this.drag) {
        this.angle += this.vel;
        if (Math.abs(this.vel) > 0.12) this.vel *= 0.94;
        else this.vel = this.vel < 0 ? -0.12 : 0.12;
      }
      if (this.ring.current) this.ring.current.style.transform = 'rotateY(' + this.angle + 'deg)';
    };
    this.raf = requestAnimationFrame(step);
  }
  componentWillUnmount() { cancelAnimationFrame(this.raf); }
  renderVals() {
    const h = this.state.hover;
    const v = {};
    const cards = ['Logotype', 'Color system', 'Type scale', 'Grid & layout', 'Motion rules', 'Slide template', 'Ad units', 'Packaging'];
    v.ringRef = this.ring;
    v.selName = this.state.sel === null ? '' : cards[this.state.sel];
    v.hasSel = this.state.sel !== null;
    v.closeSel = () => this.setState({ sel: null });
    for (let i = 0; i < 8; i++) {
      v['cardT' + i] = 'rotateY(' + i * 45 + 'deg) translateZ(310px)';
      v['cardName' + i] = cards[i];
      v['cardNum' + i] = '0' + (i + 1);
      v['pick' + i] = () => { if (!this.moved) this.setState({ sel: i }); };
    }
    v.onDown = (e) => {
      this.drag = { x: e.clientX, a: this.angle };
      this.moved = false;
      if (e.currentTarget.setPointerCapture) e.currentTarget.setPointerCapture(e.pointerId);
    };
    v.onMove = (e) => {
      if (!this.drag) return;
      const dx = e.clientX - this.drag.x;
      if (Math.abs(dx) > 4) this.moved = true;
      this.angle = this.drag.a + dx * 0.32;
      this.vel = dx * 0.012;
    };
    v.onUp = () => { this.drag = null; setTimeout(() => { this.moved = false; }, 60); };
    for (let i = 0; i < 4; i++) {
      const on = h === i;
      v['tilt' + i] = on ? 'rotateX(34deg) scale(0.92)' : 'none';
      v['pinO' + i] = on ? 1 : 0;
      v['pinT' + i] = on ? 'translateY(0px)' : 'translateY(14px)';
      v['enter' + i] = () => this.setState({ hover: i });
      v['leave' + i] = () => this.setState((s) => (s.hover === i ? { hover: null } : null));
    }
    return v;
  }
}

/** Instantiates the page's original logic once and keeps React in step with it.
 *  componentDidMount runs on mount; setState forces a re-render so renderVals()
 *  drives the JSX exactly as the old runtime did. */
export function useBrandDesignPageLogic(props: any = { motion: "full", showPricing: true }) {
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
