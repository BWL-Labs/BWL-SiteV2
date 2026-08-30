"use client";

import { useState } from "react";
import Link from "next/link";
import { WorldMap } from "@/components/ui/world-map";
import "@/styles/site-footer.css";

/* Dual HQ, per the brand kit. On a world projection these two sit ~49 of 800
   units apart, so they anchor their labels outward to avoid colliding. */
const DUBAI = { lat: 25.2048, lng: 55.2708, label: "DUBAI", tz: "Asia/Dubai", anchor: "end" as const };
const DELHI = { lat: 28.6139, lng: 77.209, label: "NEW DELHI", tz: "Asia/Kolkata", anchor: "start" as const };

/* "Working globally" is the footer's claim — draw it. */
const REACH = [
  { lat: 51.5074, lng: -0.1278 },   // London
  { lat: 40.7128, lng: -74.006 },   // New York
  { lat: 1.3521, lng: 103.8198 },   // Singapore
  { lat: -1.2921, lng: 36.8219 },   // Nairobi
  { lat: -33.8688, lng: 151.2093 }, // Sydney
];

const NAV = [
  { href: "#contact", label: "LinkedIn" },
  { href: "#contact", label: "X" },
  { href: "#contact", label: "Dribbble" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-and-conditions", label: "Terms & Conditions" },
  { href: "/contact", label: "Contact" },
];

export function SiteFooter() {
  const [copied, setCopied] = useState(false);

  const copyMail = async () => {
    try {
      await navigator.clipboard.writeText("support@blackwarelabs.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      /* clipboard blocked (insecure origin / denied) — the address is still
         visible on the button, so fail quietly rather than alerting */
    }
  };

  return (
    <footer id="contact" className="site-footer">
      <div className="bwf-map" aria-hidden="true">
        <WorldMap
          dots={[
            { start: DUBAI, end: DELHI },
            ...REACH.map((d, i) => ({ start: i % 2 ? DELHI : DUBAI, end: d })),
          ]}
          markers={[DUBAI, DELHI]}
          className="h-full"
        />
      </div>

      <div className="bwf-inner">
        <div className="bwf-eyebrow">Idea → Pipeline</div>
        <h2>Build it with BW Labs.</h2>
        <div className="bwf-acts">
          {/* was href="#contact" — the id this footer itself carries, so the
              funnel's last click went nowhere. The contact page has the form. */}
          <a className="bwf-btn bwf-btn--p bw-press" href="/contact">
            Book a call
          </a>
          <button className="bwf-btn bwf-btn--g bw-press" type="button" onClick={copyMail}>
            support@blackwarelabs.com
          </button>
          <span className={`bwf-copied${copied ? " bwf-on" : ""}`} role="status">
            Copied
          </span>
        </div>
      </div>

      <div className="bwf-base">
        <span>© 2026 Blackware Labs</span>
        <nav>
          {NAV.map((n) => (
            <Link key={n.label} href={n.href}>
              {n.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
