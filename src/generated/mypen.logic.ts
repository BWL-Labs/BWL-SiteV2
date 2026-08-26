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

const PIPELINE_STEPS = [
  { title: 'Segmentation', desc: 'Strategy defines who gets targeted.' },
  { title: 'Sourcing', desc: 'Leads and prospects sourced from your databases.' },
  { title: 'Research', desc: 'Each prospect is researched individually.' },
  { title: 'Drafting', desc: '3 custom emails written per prospect — personalized to the research, not generic.' },
  { title: 'Sequencing', desc: 'The sequence runs live for that prospect.' },
  { title: 'QA check', desc: 'A QA agent checks every email before it goes out.' },
];

class Component extends DCLogic {
  state = { hover: null, pipelineVisible: 1 };
  componentDidMount() {
    this._pipelineTimer = setInterval(() => {
      this.setState((s) => ({ pipelineVisible: s.pipelineVisible >= PIPELINE_STEPS.length + 1 ? 1 : s.pipelineVisible + 1 }));
    }, 1100);
  }
  componentWillUnmount() {
    clearInterval(this._pipelineTimer);
  }
  renderVals() {
    const h = this.state.hover;
    const v = { showPricing: this.props.showPricing !== false };
    v.pipeline = PIPELINE_STEPS.map((s, i) => {
      const visible = i < this.state.pipelineVisible;
      return { num: String(i + 1).padStart(2, '0'), title: s.title, desc: s.desc, opacity: visible ? 1 : 0.12, transform: visible ? 'translateY(0px) scale(1)' : 'translateY(10px) scale(0.98)' };
    });
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
export function useMypenPageLogic(props: any = { motion: "full", showPricing: true }) {
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
