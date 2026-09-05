/* Shared visual tokens for the three phone demos on /interactive-assets.
   The phone screen is always dark, whatever the page theme, so these are fixed. */

export const GOLD = "#E6AF2E";
export const RUST = "#C84A1F";
export const PAPER = "#FFFFFA";
export const SCREEN = "#0E0E0E";
export const INK_2 = "rgba(255,255,250,.62)";
export const INK_3 = "rgba(255,255,250,.42)";
export const LINE = "rgba(255,255,250,.14)";
export const FILL = "rgba(255,255,250,.06)";

export const SPRING = { type: "spring" as const, stiffness: 260, damping: 28 };
export const SPRING_SOFT = { type: "spring" as const, stiffness: 140, damping: 22 };

/** Small uppercase monospace label, the page's established eyebrow voice. */
export function mono(size: number, tracking = ".16em"): React.CSSProperties {
  /* Longhand on purpose: callers layer lineHeight or fontVariantNumeric on top,
     and React warns when those meet the `font` shorthand. */
  return {
    fontFamily: "'JetBrains Mono', monospace",
    fontWeight: 500,
    fontSize: size,
    lineHeight: 1.3,
    letterSpacing: tracking,
    textTransform: "uppercase",
  };
}

/** Display numerals: heavy Archivo with tabular figures so values don't jitter. */
export function display(size: number, weight = 800): React.CSSProperties {
  return {
    fontFamily: "Archivo, sans-serif",
    fontWeight: weight,
    fontSize: size,
    lineHeight: 1,
    letterSpacing: "-.03em",
    fontVariantNumeric: "tabular-nums",
  };
}

export const screenPad: React.CSSProperties = {
  position: "absolute",
  inset: 0,
  padding: "30px 14px 14px",
  display: "flex",
  flexDirection: "column",
  color: PAPER,
  fontFamily: "Archivo, sans-serif",
  userSelect: "none",
  WebkitUserSelect: "none",
};

export const ghostButton: React.CSSProperties = {
  appearance: "none",
  border: `1px solid rgba(255,255,250,.22)`,
  background: "transparent",
  color: PAPER,
  borderRadius: 999,
  padding: "8px 12px",
  cursor: "pointer",
  ...mono(9, ".14em"),
};

export const solidButton: React.CSSProperties = {
  appearance: "none",
  border: 0,
  background: PAPER,
  color: "#080705",
  borderRadius: 999,
  padding: "10px 14px",
  cursor: "pointer",
  fontFamily: "Archivo, sans-serif",
  fontWeight: 700,
  fontSize: 12,
  letterSpacing: "-.01em",
};
