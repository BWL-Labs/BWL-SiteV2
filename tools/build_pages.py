#!/usr/bin/env python3
"""Emit one .tsx page + one .css per .dc.html source."""
import os, re, sys, json
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from convert import convert

SRC = os.path.expanduser("~/Developer/blackware-homepage")
DST = os.path.expanduser("~/Developer/blackware-site")

PAGES = [
    ("Blackware Labs Homepage.dc.html", "home",        "",                          "Home"),
    ("About Us.dc.html",                "about",       "about",                     "AboutPage"),
    ("Contact Us.dc.html",              "contact",     "contact",                   "ContactPage"),
    ("Privacy Policy.dc.html",          "privacy",     "privacy-policy",            "PrivacyPage"),
    ("Terms and Conditions.dc.html",    "terms",       "terms-and-conditions",      "TermsPage"),
    ("Brand Design.dc.html",            "brand",       "brand-design",              "BrandDesignPage"),
    ("Website and Portfolio.dc.html",   "website",     "website-and-portfolio",     "WebsitePage"),
    ("Interactive Assets.dc.html",      "interactive", "interactive-assets",        "InteractivePage"),
    ("Sales Activation.dc.html",        "sales",       "b2b-answer-engine",         "SalesPage"),
    ("Lead Detective.dc.html",          "lead",        "lead-detective",            "LeadDetectivePage"),
    ("Mypen.dc.html",                   "mypen",       "mypen",                     "MypenPage"),
    ("Researchify.dc.html",             "researchify", "researchify",               "ResearchifyPage"),
    ("Self-Serve Buying Experience.dc.html","selfserve","self-serve-buying",         "SelfServePage"),
]

# .dc.html hrefs -> Next routes
ROUTE = {
    "Blackware%20Labs%20Homepage.dc.html": "/",
    "About%20Us.dc.html": "/about",
    "Contact%20Us.dc.html": "/contact",
    "Privacy%20Policy.dc.html": "/privacy-policy",
    "Terms%20and%20Conditions.dc.html": "/terms-and-conditions",
    "Brand%20Design.dc.html": "/brand-design",
    "Website%20and%20Portfolio.dc.html": "/website-and-portfolio",
    "Interactive%20Assets.dc.html": "/interactive-assets",
    "Sales%20Activation.dc.html": "/b2b-answer-engine",
    "Lead%20Detective.dc.html": "/lead-detective",
    "Mypen.dc.html": "/mypen",
    "Researchify.dc.html": "/researchify",
    "Self-Serve%20Buying%20Experience.dc.html": "/self-serve-buying",
}

def fix_links(s):
    for k, v in ROUTE.items():
        s = s.replace(f'"{k}"', f'"{v}"').replace(f'"{k}#', f'"{v}#')
    # assets now live under /public
    s = s.replace('"assets/', '"/assets/').replace('"uploads/', '"/uploads/')
    s = s.replace("'assets/", "'/assets/").replace("'uploads/", "'/uploads/")
    return s

def build_state(logic):
    """Turn the common `state = {...}` + renderVals() pattern into hooks."""
    if not logic:
        return "", "", False
    sm = re.search(r"state\s*=\s*\{([^}]*)\}", logic)
    if not sm:
        return "", "", False
    fields = {}
    for part in sm.group(1).split(","):
        if ":" in part:
            k, v = part.split(":", 1)
            fields[k.strip()] = v.strip()
    hooks = "\n".join(
        f"  const [{k}, set_{k}] = useState<any>({v});" for k, v in fields.items()
    )
    rv = re.search(r"renderVals\(\)\s*\{(.*?)\n  \}", logic, re.S)
    body = rv.group(1) if rv else ""
    # this.state.x -> x ; this.setState({x: y}) -> set_x(y)
    for k in fields:
        body = body.replace(f"this.state.{k}", k)
    body = re.sub(r"this\.setState\(\(s\)\s*=>\s*\(s\.(\w+)\s*===\s*([^?]+)\?\s*\{\s*\w+:\s*([^}]+)\}\s*:\s*null\)\)",
                  r"set_\1((s:any)=> s===\2? \3 : s)", body)
    body = re.sub(r"this\.setState\(\{\s*(\w+):\s*([^}]+)\}\)", r"set_\1(\2)", body)
    body = body.replace("this.props.", "props.")
    return hooks, body, True

def emit(fname, slug, route, comp):
    jsx, css, logic, props, needs_fragment, uses_footer = convert(os.path.join(SRC, fname), slug)
    jsx = fix_links(jsx)
    css = fix_links(css)

    has_logic = bool(logic and "class Component" in logic)

    imports = ['"use client";', ""]
    if needs_fragment:
        imports.append('import { Fragment } from "react";')
    if uses_footer:
        imports.append('import { SiteFooter } from "@/components/site-footer";')
    imports.append(f'import "@/styles/pages/{slug}.css";')
    if has_logic:
        imports.append(f'import {{ use{comp}Logic }} from "@/generated/{slug}.logic";')

    parts = ["\n".join(imports), "", f"export default function {comp}() {{"]
    if has_logic:
        parts.append(f"  const v = use{comp}Logic();")
    else:
        parts.append('  const v: any = { showPricing: true };')
    if True:
        # bring exactly the identifiers the JSX references into scope
        used = set(re.findall(r"\{([A-Za-z_$][\w$]*)\}", jsx))
        used |= set(re.findall(r"\$\{([A-Za-z_$][\w$]*)\}", jsx))
        used |= set(re.findall(r"\{([A-Za-z_$][\w$]*) \?", jsx))     # sc-if conditions
        used |= set(re.findall(r"\{\(\(([A-Za-z_$][\w$]*)\) \?\? \[\]\)", jsx))  # sc-for lists
        reserved = {"true","false","null","undefined"}
        reserved |= set(re.findall(r"\.map\(\(([A-Za-z_$][\w$]*): any", jsx))
        names = sorted(n for n in used if n not in reserved)
        if names:
            parts.append("  const { " + ", ".join(names) + " } = v;")
    parts.append("  return (<>" + jsx + "</>);")
    parts.append("}")
    tsx = "\n".join(p for p in parts if p != "")

    d = os.path.join(DST, "src/app", route) if route else os.path.join(DST, "src/app")
    os.makedirs(d, exist_ok=True)
    open(os.path.join(d, "page.tsx"), "w").write(tsx)
    open(os.path.join(DST, "src/styles/pages", f"{slug}.css"), "w").write(css)
    return len(jsx), len(css), has_logic, False, len(props)

if __name__ == "__main__":
    print(f"{'page':<34}{'jsx':>9}{'css':>9}{'logic':>7}{'state':>7}")
    print("-" * 68)
    for fname, slug, route, comp in PAGES:
        j, c, hl, hs, np = emit(fname, slug, route, comp)
        print(f"{slug:<34}{j//1024:>7}KB{c//1024:>7}KB{str(hl):>7}{str(hs):>7}")
