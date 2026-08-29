"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "motion/react";
import DottedMap from "dotted-map";

export interface MapPoint {
  lat: number;
  lng: number;
  label?: string;
  /** IANA zone — renders a live local clock under the label */
  tz?: string;
  /** which side the label sits on; lets close-together cities separate */
  anchor?: "start" | "end";
}

export interface MapArc {
  start: { lat: number; lng: number };
  end: { lat: number; lng: number };
}

interface WorldMapProps {
  /** connection arcs; endpoints get a pulsing dot */
  dots?: MapArc[];
  /** labelled points (city, coordinates, live local time) */
  markers?: MapPoint[];
  /** brand default is gold; rust stays reserved for the named products */
  lineColor?: string;
  className?: string;
}

const VW = 800;
const VH = 400;

const project = (lat: number, lng: number) => ({
  x: (lng + 180) * (VW / 360),
  y: (90 - lat) * (VH / 180),
});

function useLocalTime(tz?: string) {
  const [t, setT] = useState("");
  useEffect(() => {
    if (!tz) return;
    const tick = () => {
      try {
        setT(
          new Intl.DateTimeFormat("en-GB", {
            timeZone: tz,
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
          }).format(new Date()) + " LOCAL"
        );
      } catch {
        /* unknown zone — stay blank rather than show a wrong time */
      }
    };
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, [tz]);
  return t;
}

function Marker({ p, color }: { p: MapPoint; color: string }) {
  const time = useLocalTime(p.tz);
  const { x, y } = project(p.lat, p.lng);
  const anchor = p.anchor ?? "start";
  const dx = anchor === "start" ? 11 : -11;
  const coord =
    `${Math.abs(p.lat).toFixed(2)}°${p.lat >= 0 ? "N" : "S"} ` +
    `${Math.abs(p.lng).toFixed(2)}°${p.lng >= 0 ? "E" : "W"}`;
  return (
    <g>
      <circle cx={x} cy={y} r="3" fill={color} />
      <circle cx={x} cy={y} r="3" fill={color} opacity="0.5">
        <animate attributeName="r" from="3" to="11" dur="1.6s" repeatCount="indefinite" />
        <animate attributeName="opacity" from="0.5" to="0" dur="1.6s" repeatCount="indefinite" />
      </circle>
      {/* casing keeps map labels legible over the dot field, whatever sits behind */}
      <g
        style={{ paintOrder: "stroke fill" }}
        stroke="var(--bw-bg)"
        strokeWidth={3}
        strokeLinejoin="round"
      >
        <text
          x={x + dx}
          y={y - 4}
          textAnchor={anchor}
          fill={color}
          style={{ font: "500 11px/1 var(--font-mono), monospace", letterSpacing: "2px" }}
        >
          {p.label}
        </text>
        <text
          x={x + dx}
          y={y + 8}
          textAnchor={anchor}
          fill="var(--fg-mute)"
          style={{ font: "400 8px/1 var(--font-mono), monospace", letterSpacing: "1px" }}
        >
          {coord}
        </text>
        {time ? (
          <text
            x={x + dx}
            y={y + 19}
            textAnchor={anchor}
            fill="var(--fg-mute)"
            style={{ font: "400 8px/1 var(--font-mono), monospace", letterSpacing: "1px" }}
          >
            {time}
          </text>
        ) : null}
      </g>
    </g>
  );
}

export function WorldMap({
  dots = [],
  markers = [],
  lineColor = "var(--bw-accent)",
  className = "",
}: WorldMapProps) {
  /* The dot field is generated once with `currentColor`, then inlined rather
     than used as an <img>. That lets CSS drive the colour, so a theme flip is
     instant and there is no server/client mismatch from reading the theme in JS. */
  const svgMap = useMemo(() => {
    const map = new DottedMap({ height: 100, grid: "diagonal" });
    return map.getSVG({
      radius: 0.22,
      color: "currentColor",
      shape: "circle",
      backgroundColor: "transparent",
    });
  }, []);

  const curve = (a: { x: number; y: number }, b: { x: number; y: number }) => {
    const midX = (a.x + b.x) / 2;
    const midY = Math.min(a.y, b.y) - 50;
    return `M ${a.x} ${a.y} Q ${midX} ${midY} ${b.x} ${b.y}`;
  };

  return (
    <div className={`relative w-full ${className}`}>
      <div
        aria-hidden="true"
        className="bw-dotfield pointer-events-none absolute inset-0 select-none"
        dangerouslySetInnerHTML={{ __html: svgMap }}
      />

      <svg
        viewBox={`0 0 ${VW} ${VH}`}
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full select-none"
      >
        <defs>
          <linearGradient id="bw-arc" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={lineColor} stopOpacity="0" />
            <stop offset="14%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="86%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="100%" stopColor={lineColor} stopOpacity="0" />
          </linearGradient>
        </defs>

        {dots.map((d, i) => (
          <motion.path
            key={`arc-${i}`}
            d={curve(project(d.start.lat, d.start.lng), project(d.end.lat, d.end.lng))}
            fill="none"
            stroke="url(#bw-arc)"
            strokeWidth="1"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.1, delay: 0.25 * i, ease: [0.2, 0.7, 0.2, 1] }}
          />
        ))}

        {dots.map((d, i) => {
          const p = project(d.end.lat, d.end.lng);
          return <circle key={`dst-${i}`} cx={p.x} cy={p.y} r="1.8" fill={lineColor} opacity="0.75" />;
        })}

        {markers.map((m, i) => (
          <Marker key={`m-${i}`} p={m} color={lineColor} />
        ))}
      </svg>
    </div>
  );
}
