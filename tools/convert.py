#!/usr/bin/env python3
"""Convert Blackware .dc.html pages into React + TypeScript.

Faithfulness is the goal, not idiomatic React: the markup becomes JSX with the
same inline styles, and each page's DCLogic class becomes one imperative
useEffect running the same DOM code. That keeps behaviour identical instead of
re-deriving 67KB of bespoke motion by hand.

The one thing that genuinely must change is the 622 style-hover/active/focus/
before/after attributes: inline styles cannot express pseudo-states, so they
are hoisted into a real stylesheet per page.
"""
import re, json, sys, os
from html.parser import HTMLParser

VOID = {"area","base","br","col","embed","hr","img","input","link","meta",
        "param","source","track","wbr"}

# attributes HTMLParser lowercases that JSX/SVG need cased correctly
ATTR = {
 "class":"className","for":"htmlFor","tabindex":"tabIndex","autoplay":"autoPlay",
 "playsinline":"playsInline","crossorigin":"crossOrigin","srcset":"srcSet",
 "maxlength":"maxLength","readonly":"readOnly","colspan":"colSpan","rowspan":"rowSpan",
 "contenteditable":"contentEditable","spellcheck":"spellCheck","inputmode":"inputMode",
 "enterkeyhint":"enterKeyHint","autocomplete":"autoComplete","novalidate":"noValidate",
 "viewbox":"viewBox","preserveaspectratio":"preserveAspectRatio","stroke-width":"strokeWidth",
 "stroke-linecap":"strokeLinecap","stroke-linejoin":"strokeLinejoin",
 "stroke-dasharray":"strokeDasharray","stroke-dashoffset":"strokeDashoffset",
 "stroke-opacity":"strokeOpacity","fill-rule":"fillRule","clip-rule":"clipRule",
 "clip-path":"clipPath","fill-opacity":"fillOpacity","stop-color":"stopColor",
 "stop-opacity":"stopOpacity","text-anchor":"textAnchor","dominant-baseline":"dominantBaseline",
 "baseline-shift":"baselineShift","letter-spacing":"letterSpacing","font-family":"fontFamily",
 "font-size":"fontSize","font-weight":"fontWeight","patternunits":"patternUnits",
 "patterntransform":"patternTransform","gradientunits":"gradientUnits",
 "gradienttransform":"gradientTransform","spreadmethod":"spreadMethod",
 "basefrequency":"baseFrequency","numoctaves":"numOctaves","stitchtiles":"stitchTiles",
 "color-interpolation-filters":"colorInterpolationFilters","vector-effect":"vectorEffect",
 "pathlength":"pathLength","fetchpriority":"fetchPriority",
 "paint-order":"paintOrder","attributename":"attributeName","repeatcount":"repeatCount",
 "begintime":"beginTime","keysplines":"keySplines","keytimes":"keyTimes",
 "calcmode":"calcMode","transform-origin":"transformOrigin","transform-box":"transformBox",
 "marker-end":"markerEnd","marker-start":"markerStart","mask-image":"maskImage",
 "xlink:href":"xlinkHref","xmlns:xlink":"xmlnsXlink","shape-rendering":"shapeRendering",
 "text-rendering":"textRendering","pointer-events":"pointerEvents","mix-blend-mode":"mixBlendMode",
 "filterunits":"filterUnits","primitiveunits":"primitiveUnits","result":"result",
 "in2":"in2","edgemode":"edgeMode","xchannelselector":"xChannelSelector",
 "ychannelselector":"yChannelSelector","stddeviation":"stdDeviation",
 "surfacescale":"surfaceScale","specularconstant":"specularConstant",
 "specularexponent":"specularExponent","diffuseconstant":"diffuseConstant",
 "kernelmatrix":"kernelMatrix","targetx":"targetX","targety":"targetY",
 "preservealpha":"preserveAlpha","tablevalues":"tableValues",
}


# element names HTMLParser lowercases that SVG needs cased correctly
TAG = {
 "animatemotion":"animateMotion","animatetransform":"animateTransform",
 "lineargradient":"linearGradient","radialgradient":"radialGradient",
 "clippath":"clipPath","textpath":"textPath","foreignobject":"foreignObject",
 "fecolormatrix":"feColorMatrix","fecomponenttransfer":"feComponentTransfer",
 "fecomposite":"feComposite","fefunca":"feFuncA","fefuncr":"feFuncR",
 "fefuncg":"feFuncG","fefuncb":"feFuncB","fegaussianblur":"feGaussianBlur",
 "feturbulence":"feTurbulence","feoffset":"feOffset","feblend":"feBlend",
 "feflood":"feFlood","femerge":"feMerge","femergenode":"feMergeNode",
 "fedisplacementmap":"feDisplacementMap","fedropshadow":"feDropShadow",
 "feimage":"feImage","femorphology":"feMorphology","fetile":"feTile",
 "fespecularlighting":"feSpecularLighting","fediffuselighting":"feDiffuseLighting",
 "fepointlight":"fePointLight","fespotlight":"feSpotLight","fedistantlight":"feDistantLight",
 "feconvolvematrix":"feConvolveMatrix",
}

# DOM event attributes -> React handler names
EVENTS = {
 "onclick":"onClick","onmouseenter":"onMouseEnter","onmouseleave":"onMouseLeave",
 "onmouseover":"onMouseOver","onmouseout":"onMouseOut","onmousemove":"onMouseMove",
 "onmousedown":"onMouseDown","onmouseup":"onMouseUp","onpointerdown":"onPointerDown",
 "onpointerup":"onPointerUp","onpointermove":"onPointerMove","onpointerenter":"onPointerEnter",
 "onpointerleave":"onPointerLeave","onpointercancel":"onPointerCancel",
 "onfocus":"onFocus","onblur":"onBlur","oninput":"onInput","onchange":"onChange",
 "onsubmit":"onSubmit","onkeydown":"onKeyDown","onkeyup":"onKeyUp","onkeypress":"onKeyPress",
 "onscroll":"onScroll","onwheel":"onWheel","ontouchstart":"onTouchStart",
 "ontouchmove":"onTouchMove","ontouchend":"onTouchEnd",
}


BOOL_ATTR = {"autoPlay","playsInline","muted","loop","controls","disabled","checked",
 "readOnly","required","hidden","open","multiple","selected","noValidate","autoFocus",
 "reversed","async","defer","itemScope","default","allowFullScreen","formNoValidate"}
NUM_ATTR = {"rows","cols","span","colSpan","rowSpan","tabIndex","start","maxLength","size"}

def camel_css(p):
    p = p.strip()
    if p.startswith("--"):
        return p            # custom properties keep their literal name
    return re.sub(r"-([a-z])", lambda m: m.group(1).upper(), p)

def css_value(v):
    """a style value, honouring {{ expr }} the way ATTR/text nodes already do.
       without this every interpolated value ships as the literal string
       "{{ pinO0 }}", which is not valid CSS — the browser drops the
       declaration and the bound state (opacity, transform) never applies. """
    m = re.fullmatch(r"\s*\{\{(.+?)\}\}\s*", v, flags=re.S)
    if m:
        return m.group(1).strip()
    if "{{" not in v:
        return json.dumps(v)
    # mixed literal + expression -> template literal
    buf = []
    for p in re.split(r"(\{\{.+?\}\})", v, flags=re.S):
        mm = re.fullmatch(r"\{\{(.+?)\}\}", p, flags=re.S)
        if mm:
            buf.append("${" + mm.group(1).strip() + "}")
        else:
            buf.append(p.replace("\\", "\\\\").replace("`", "\\`").replace("${", "\\${"))
    return "`" + "".join(buf) + "`"

def css_to_obj(css):
    """inline style string -> JSX style object literal"""
    out = []
    for decl in split_decls(css):
        if ":" not in decl:
            continue
        k, v = decl.split(":", 1)
        k, v = k.strip(), v.strip()
        if not k:
            continue
        key = camel_css(k)
        if key.startswith("--"):
            key = f'"{key}"'
        elif not re.fullmatch(r"[A-Za-z][A-Za-z0-9]*", key):
            key = f'"{key}"'
        out.append(f"{key}:{css_value(v)}")
    return "{" + ",".join(out) + "}"

def split_decls(css):
    """split on ; that are not inside () or quotes"""
    parts, depth, buf, q = [], 0, [], None
    for ch in css:
        if q:
            buf.append(ch)
            if ch == q: q = None
            continue
        if ch in "'\"":
            q = ch; buf.append(ch); continue
        if ch == "(": depth += 1
        elif ch == ")": depth -= 1
        if ch == ";" and depth == 0:
            parts.append("".join(buf)); buf = []
        else:
            buf.append(ch)
    if buf: parts.append("".join(buf))
    return [p for p in parts if p.strip()]


class Conv(HTMLParser):
    def __init__(self, slug):
        super().__init__(convert_charrefs=False)
        self.out, self.stack = [], []
        self.slug = slug
        self.rules = []          # hoisted pseudo-state CSS
        self.n = 0
        self.skip_depth = 0
        self.in_helmet = False
        self.helmet_style, self.helmet_raw = [], []
        self._raw_tag = None
        self.needs_fragment = False
        self.uses_footer = False

    # ---- pseudo-state hoisting -------------------------------------------
    def pseudo_class(self, pseudo, css):
        self.n += 1
        cls = f"{self.slug}-p{self.n}"
        sel = f".{cls}::{pseudo}" if pseudo in ("before", "after") else f".{cls}:{pseudo}"
        decls = "; ".join(d.strip() for d in split_decls(css))
        if pseudo in ("before", "after"):
            self.rules.append(f"{sel} {{ {decls} }}")
        else:
            imp = "; ".join(f"{d.strip()} !important" for d in split_decls(css))
            self.rules.append(f"{sel} {{ {imp} }}")
        return cls

    # ---- tag handling -----------------------------------------------------
    def handle_starttag(self, tag, attrs):
        self._emit_tag(tag, attrs, tag in VOID)

    def handle_startendtag(self, tag, attrs):
        self._emit_tag(tag, attrs, True)

    def _emit_tag(self, tag, attrs, self_closing):
        tag = TAG.get(tag, tag)
        if self.skip_depth:
            if not self_closing and tag not in VOID:
                self.skip_depth += 1
            return
        if tag == "footer" and any(k == "class" and "site-footer" in (v or "") for k, v in attrs):
            # the footer was copy-pasted into all 13 pages; it is one component now
            self.out.append("<SiteFooter />")
            self.uses_footer = True
            self.skip_depth = 1
            return
        if tag in ("script", "style") and self.in_helmet:
            self._raw_tag = tag
            return
        if tag == "helmet":
            self.in_helmet = True; return
        if tag == "x-dc":
            return

        if tag == "sc-for":
            lst, alias = "[]", "item"
            for k, v in attrs:
                if k == "list" and v:
                    m = re.fullmatch(r"\s*\{\{(.+?)\}\}\s*", v)
                    lst = m.group(1).strip() if m else "[]"
                elif k == "as" and v:
                    alias = v.strip() or "item"
            self.out.append(
                f"{{(({lst}) ?? []).map(({alias}: any, __i: number) => ("
                f"<Fragment key={{__i}}>")
            self.stack.append("sc-for")
            self.needs_fragment = True
            return

        # <sc-if value="{{ x }}"> -> {x && (<> ... </>)}
        if tag == "sc-if":
            cond = "true"
            for k, v in attrs:
                if k == "value" and v:
                    m = re.fullmatch(r"\s*\{\{(.+?)\}\}\s*", v)
                    cond = m.group(1).strip() if m else "true"
            self.out.append(f"{{{cond} ? (<>")
            self.stack.append("sc-if")
            return

        props, classes = [], []
        for k, v in attrs:
            v = v if v is not None else ""
            if k.startswith("style-"):
                classes.append(self.pseudo_class(k[6:], v)); continue
            if k == "style":
                props.append(f"style={{{css_to_obj(v)}}}"); continue
            if k == "class":
                classes.append(v); continue
            # event handler bound to a template expression
            m = re.fullmatch(r"\s*\{\{(.+?)\}\}\s*", v)
            name = ATTR.get(k, k)
            if k in EVENTS:
                name = EVENTS[k]
            if not re.fullmatch(r"[A-Za-z_][A-Za-z0-9_:\-]*", name):
                continue
            if ":" in name and name not in ("xlinkHref",):
                continue
            if m:
                props.append(f"{name}={{{m.group(1).strip()}}}")
            elif "{{" in v:
                expr = re.sub(r"\{\{(.+?)\}\}", lambda mm: "${" + mm.group(1).strip() + "}", v)
                props.append(f"{name}={{`{expr}`}}")
            elif name in BOOL_ATTR:
                props.append(f"{name}={{true}}")
            elif name in NUM_ATTR and re.fullmatch(r"-?\d+", v.strip()):
                props.append(f"{name}={{{v.strip()}}}")
            elif v == "":
                props.append(f'{name}=""')
            else:
                # ensure_ascii would emit … for an ellipsis. that is a valid
                # JS string escape but this lands in a JSX attribute, where
                # escapes are not processed — the page then shows the six
                # characters "…" instead of the character.
                props.append(f"{name}={json.dumps(v, ensure_ascii=False)}")

        if classes:
            props.insert(0, f"className={json.dumps(' '.join(classes), ensure_ascii=False)}")

        s = " ".join(props)
        if self_closing:
            self.out.append(f"<{tag}{(' ' + s) if s else ''} />")
        else:
            self.out.append(f"<{tag}{(' ' + s) if s else ''}>")
            self.stack.append(tag)

    def handle_endtag(self, tag):
        tag = TAG.get(tag, tag)
        if self.skip_depth:
            self.skip_depth -= 1
            return
        if self._raw_tag == tag:
            self._raw_tag = None; return
        if tag == "helmet":
            self.in_helmet = False; return
        if tag in ("x-dc",):
            return
        if tag == "sc-for":
            if self.stack and self.stack[-1] == "sc-for":
                self.stack.pop()
            self.out.append("</Fragment>))}")
            return
        if tag == "sc-if":
            if self.stack and self.stack[-1] == "sc-if":
                self.stack.pop()
            self.out.append("</>) : null}")
            return
        if tag in VOID:
            return
        if self.stack and self.stack[-1] == tag:
            self.stack.pop()
        self.out.append(f"</{tag}>")

    def handle_data(self, data):
        if self.skip_depth: return
        if self._raw_tag == "style":
            self.helmet_style.append(data); return
        if self._raw_tag == "script" or self.in_helmet:
            return
        if not data.strip():
            if "\n" in data: self.out.append("\n")
            return
        # {{ expr }} -> {expr};  bare braces must be escaped for JSX
        parts = re.split(r"(\{\{.+?\}\})", data, flags=re.S)
        for p in parts:
            m = re.fullmatch(r"\{\{(.+?)\}\}", p, flags=re.S)
            if m:
                self.out.append("{" + m.group(1).strip() + "}")
            elif p:
                self.out.append(p.replace("{", "&#123;").replace("}", "&#125;"))

    def handle_entityref(self, name):
        if self.skip_depth: return
        if not self.in_helmet: self.out.append(f"&{name};")

    def handle_charref(self, name):
        if self.skip_depth: return
        if not self.in_helmet: self.out.append(f"&#{name};")

    def handle_comment(self, data):
        pass


def extract_logic(src):
    """Pull the DCLogic class body out of the page's <script data-dc-script>."""
    m = re.search(r'<script type="text/x-dc"[^>]*>(.*?)</script>', src, re.S)
    if not m: return None, {}
    body = m.group(1)
    props = {}
    pm = re.search(r'data-props="([^"]*)"', src)
    if pm:
        raw = pm.group(1)
        for a, b in [("&quot;", '"'), ("&amp;", "&"), ("&lt;", "<"), ("&gt;", ">")]:
            raw = raw.replace(a, b)
        try: props = json.loads(raw)
        except Exception: props = {}
    return body, props


def convert(path, slug):
    src = open(path, encoding="utf-8").read()
    tpl = re.search(r"<x-dc>(.*)</x-dc>", src, re.S)
    template = tpl.group(1) if tpl else src

    c = Conv(slug)
    c.feed(template)
    jsx = "".join(c.out)
    jsx = re.sub(r"\n{3,}", "\n\n", jsx)

    logic, props = extract_logic(src)
    page_css = "\n".join(c.helmet_style) + "\n\n" + "\n".join(c.rules)
    return jsx, page_css, logic, props, c.needs_fragment, c.uses_footer


if __name__ == "__main__":
    print("module")
