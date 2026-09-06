"use client";

import type React from "react";
import { useReducedMotion } from "motion/react";
import { BlurReveal } from "@/components/ui/blur-reveal";

/* BlurReveal ships with no prefers-reduced-motion handling, so this wrapper
   adds it: reduced-motion visitors get the plain heading immediately rather
   than forty-odd characters each animating their own blur/position. */
export function HeroHeadingReveal({
  children,
  style,
}: {
  children: string;
  style?: React.CSSProperties;
}) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <h1 style={style}>{children}</h1>;
  }

  return (
    <BlurReveal as="h1" style={style}>
      {children}
    </BlurReveal>
  );
}

export default HeroHeadingReveal;
