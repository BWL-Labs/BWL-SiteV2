"use client";

import { useReducedMotion } from "motion/react";
import { BlurReveal } from "@/components/ui/blur-reveal";

const QUOTE =
  "“Marketing is no longer about the stuff that you make, but about the stories you tell.”";
const AUTHOR = "Seth Godin";

/* Sits over the studio reel. The reel is a Dubai skyline at sunset: a bright
   warm sky over most of the frame with the skyline along the bottom, and the
   footage keeps moving, so no single text colour is safe against the raw video.
   A scrim anchored to the left builds a dark field for the type to sit on and
   fades out before the Burj, which is the frame's focal point — the quote
   occupies the open sky the composition already leaves empty.

   Colours are fixed rather than themed: this is always light type on footage,
   the same way the site's other always-dark panels work. */
export function ReelQuote() {
  const reduceMotion = useReducedMotion();

  const quoteStyle: React.CSSProperties = {
    margin: 0,
    maxWidth: "22ch",
    fontFamily: "'Barlow Condensed', Archivo, sans-serif",
    fontWeight: 800,
    fontSize: "clamp(26px, 3.1vw, 52px)",
    lineHeight: 1.04,
    letterSpacing: "-.03em",
    color: "#FFFFFA",
    textWrap: "balance",
  };

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 1,
        display: "flex",
        alignItems: "center",
        pointerEvents: "none",
      }}
    >
      {/* legibility floor, independent of whatever frame the video is on.
          The gradient lives in brand.css because it has to change shape below
          ~453px, where the quote grows past the point the desktop scrim fades
          out and the end of every line would sit on bare footage. */}
      <span data-bw-reel-scrim="" aria-hidden="true" />

      {/* same 1440/40px measure as every other section, so the quote lines up
          with the page grid instead of floating loose in the band */}
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: 1440,
          margin: "0 auto",
          padding: "0 40px",
          display: "flex",
          flexDirection: "column",
          gap: 22,
          alignItems: "flex-start",
        }}
      >
        {reduceMotion ? (
          <p style={quoteStyle}>{QUOTE}</p>
        ) : (
          <BlurReveal
            as="p"
            inView
            once
            speedReveal={2.2}
            speedSegment={1}
            style={quoteStyle}
          >
            {QUOTE}
          </BlurReveal>
        )}

        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 12,
            font: "500 11px/1 'JetBrains Mono', monospace",
            letterSpacing: ".16em",
            textTransform: "uppercase",
            color: "#E6AF2E",
          }}
        >
          <span
            aria-hidden="true"
            style={{
              display: "block",
              width: 26,
              height: 1,
              background: "#E6AF2E",
              flexShrink: 0,
            }}
          />
          {reduceMotion ? (
            AUTHOR
          ) : (
            <BlurReveal
              as="span"
              inView
              once
              delay={1.15}
              speedReveal={3}
              speedSegment={1}
            >
              {AUTHOR}
            </BlurReveal>
          )}
        </span>
      </div>
    </div>
  );
}

export default ReelQuote;
