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
  state = { hover: null, slide: 0 };
  componentDidMount() {
    this.timer = setInterval(() => {
      if (!this.paused) this.setState((s) => ({ slide: (s.slide + 1) % 4 }));
    }, 4200);
  }
  componentWillUnmount() { clearInterval(this.timer); }
  renderVals() {
    const h = this.state.hover;
    const v = { showPricing: this.props.showPricing !== false };
    const slide = this.state.slide;
    for (let i = 0; i < 4; i++) {
      const d = (i - slide + 4) % 4;
      const p = d === 0
        ? { t: 'translateX(0%) scale(1) rotateY(0deg)', o: 1, z: 4 }
        : d === 1
          ? { t: 'translateX(70%) scale(.8) rotateY(-24deg)', o: .8, z: 3 }
          : d === 3
            ? { t: 'translateX(-70%) scale(.8) rotateY(24deg)', o: .8, z: 3 }
            : { t: 'translateX(0%) scale(.62) rotateY(0deg)', o: 0, z: 1 };
      v['ph' + i] = p.t;
      v['pho' + i] = p.o;
      v['phz' + i] = p.z;
      v['dot' + i] = d === 0 ? '#E6AF2E' : 'currentColor';
      v['dotw' + i] = d === 0 ? '26px' : '8px';
      v['dotop' + i] = d === 0 ? 1 : .35;
      v['go' + i] = () => this.setState({ slide: i });
    }
    v.pause = () => { this.paused = true; };
    v.resume = () => { this.paused = false; };
    v.prev = () => this.setState((s) => ({ slide: (s.slide + 3) % 4 }));
    v.next = () => this.setState((s) => ({ slide: (s.slide + 1) % 4 }));
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
export function useInteractivePageLogic(props: any = { motion: "full", showPricing: true }) {
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
