#!/usr/bin/env python3
"""Emit the per-page logic modules.

The DCLogic classes are almost entirely imperative DOM code driven from
componentDidMount. Rather than re-derive 67KB of bespoke motion as idiomatic
React (and risk changing how any of it feels), the class body is kept verbatim
and given a tiny base with the same surface the runtime provided:
props / state / setState / componentDidMount / componentWillUnmount.

Each page exports mount<Page>() which instantiates it and returns the teardown,
so a page is just `useEffect(() => mountHome(), [])`.
"""
import os, re, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from build_pages import PAGES, SRC, DST, fix_links
from convert import extract_logic

SHIM = '''/* eslint-disable */
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
'''

def emit(fname, slug, comp):
    src = open(os.path.join(SRC, fname), encoding="utf-8").read()
    logic, _ = extract_logic(src)
    if not logic or "class Component" not in logic:
        return None
    body = fix_links(logic.strip())
    # the runtime auto-bound props; give the shim the same default
    hook = f"""
/** Instantiates the page's original logic once and keeps React in step with it.
 *  componentDidMount runs on mount; setState forces a re-render so renderVals()
 *  drives the JSX exactly as the old runtime did. */
export function use{comp}Logic(props: any = {{ motion: "full", showPricing: true }}) {{
  const [, force] = useReducer((n: number) => n + 1, 0);
  const ref = useRef<any>(null);
  if (!ref.current) {{
    const inst: any = new Component(props);
    inst.__force = force;
    ref.current = inst;
  }}
  useEffect(() => {{
    try {{ ref.current.componentDidMount?.(); }} catch (e) {{ console.error(e); }}
    return () => {{ try {{ ref.current.componentWillUnmount?.(); }} catch (e) {{}} }};
  }}, []);
  return (ref.current.renderVals?.() ?? {{}}) as any;
}}
"""
    out = SHIM + "\n" + body + "\n" + hook
    p = os.path.join(DST, "src/generated", f"{slug}.logic.ts")
    open(p, "w").write(out)
    return len(out)

if __name__ == "__main__":
    os.makedirs(os.path.join(DST, "src/generated"), exist_ok=True)
    for fname, slug, route, comp in PAGES:
        n = emit(fname, slug, comp)
        if n:
            print(f"  {slug:<14} {n//1024:>4}KB  -> src/generated/{slug}.logic.ts")
