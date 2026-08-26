"use client";

import { useMemo, useRef } from "react";
import { motion } from "motion/react";
import DottedMap from "dotted-map";
import { useTheme } from "next-themes";

export interface MapArc {
  start: { lat: number; lng: number; label?: string };
  end: { lat: number; lng: number; label?: string };
}

interface WorldMapProps {
  arcs?: MapArc[];
  /** brand default is gold; rust is reserved for the named products */
  lineColor?: string;
  className?: string;
}

export function WorldMap({
  arcs = [],
  lineColor = "#E6AF2E",
  className = "",
}: WorldMapProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  /* DottedMap re-samples world geometry on every construction — memoise it or
     every theme toggle and re-render pays that cost again. */
  const svgMap = useMemo(() => {
    const map = new DottedMap({ height: 100, grid: "diagonal" });
    return map.getSVG({
      radius: 0.22,
      color: isDark ? "rgba(255,255,250,0.28)" : "rgba(8,7,5,0.30)",
      shape: "circle",
      backgroundColor: "transparent",
    });
  }, [isDark]);

  const project = (lat: number, lng: number) => ({
    x: (lng + 180) * (800 / 360),
    y: (90 - lat) * (400 / 180),
  });

  const curve = (a: { x: number; y: number }, b: { x: number; y: number }) => {
    const midX = (a.x + b.x) / 2;
    const midY = Math.min(a.y, b.y) - 50;
    return `M ${a.x} ${a.y} Q ${midX} ${midY} ${b.x} ${b.y}`;
  };

  return (
    <div className={`relative aspect-[2/1] w-full ${className}`}>
      {/* plain <img>: the dot field is an inline data-URI, so next/image's
          optimiser has nothing to optimise and would only add a round trip */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
        alt=""
        aria-hidden="true"
        draggable={false}
        className="pointer-events-none h-full w-full select-none [mask-image:linear-gradient(to_bottom,transparent,black_12%,black_88%,transparent)]"
      />

      <svg
        ref={svgRef}
        viewBox="0 0 800 400"
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full select-none"
      >
        <defs>
          <linearGradient id="bw-arc" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={lineColor} stopOpacity="0" />
            <stop offset="12%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="88%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="100%" stopColor={lineColor} stopOpacity="0" />
          </linearGradient>
        </defs>

        {arcs.map((arc, i) => (
          <motion.path
            key={`arc-${i}`}
            d={curve(project(arc.start.lat, arc.start.lng), project(arc.end.lat, arc.end.lng))}
            fill="none"
            stroke="url(#bw-arc)"
            strokeWidth="1"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 0.4 * i, ease: [0.2, 0.7, 0.2, 1] }}
          />
        ))}

        {arcs.flatMap((arc, i) =>
          [arc.start, arc.end].map((pt, j) => {
            const p = project(pt.lat, pt.lng);
            return (
              <g key={`pt-${i}-${j}`}>
                <circle cx={p.x} cy={p.y} r="2.4" fill={lineColor} />
                <circle cx={p.x} cy={p.y} r="2.4" fill={lineColor} opacity="0.5">
                  {/* SMIL keeps the ping off the main thread and out of React's
                      render loop; it also no-ops under reduced motion below */}
                  <animate attributeName="r" from="2.4" to="9" dur="1.6s" repeatCount="indefinite" />
                  <animate attributeName="opacity" from="0.5" to="0" dur="1.6s" repeatCount="indefinite" />
                </circle>
              </g>
            );
          })
        )}
      </svg>
    </div>
  );
}
