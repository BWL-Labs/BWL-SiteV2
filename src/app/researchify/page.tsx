"use client";

import "@/styles/pages/researchify.css";
import { ResearchifyDemo } from "@/components/researchify/researchify-demo";
import { ReportSectionCards } from "@/components/researchify/report-section-cards";
export default function ResearchifyPage() {
  const v: any = { showPricing: true };
  const { showPricing } = v;
  return (<>
<meta name="viewport" content="width=device-width, initial-scale=1" /><link rel="preconnect" href="https://fonts.googleapis.com" /><link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" /><link href="https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
<div style={{background:"var(--bw-bg)",color:"var(--bw-fg)",minHeight:"100vh",position:"relative"}}>
<div aria-hidden="true" style={{position:"fixed",inset:"0",zIndex:"0",pointerEvents:"none",overflow:"hidden",opacity:"var(--bw-blob)"}}>
<span style={{position:"absolute",top:"-14vh",left:"-8vw",width:"62vw",height:"62vw",borderRadius:"50%",background:"radial-gradient(circle,oklch(0.93 0.09 96 / .85) 0%,oklch(0.93 0.09 96 / 0) 68%)",filter:"blur(30px)",animation:"bwDriftA 34s ease-in-out infinite",display:"block"}}></span>
<span style={{position:"absolute",top:"34vh",right:"-14vw",width:"58vw",height:"58vw",borderRadius:"50%",background:"radial-gradient(circle,oklch(0.9 0.055 14 / .7) 0%,oklch(0.9 0.055 14 / 0) 68%)",filter:"blur(34px)",animation:"bwDriftB 42s ease-in-out infinite",display:"block"}}></span>
<span style={{position:"absolute",bottom:"-16vh",left:"22vw",width:"54vw",height:"54vw",borderRadius:"50%",background:"radial-gradient(circle,oklch(0.91 0.06 26 / .6) 0%,oklch(0.91 0.06 26 / 0) 68%)",filter:"blur(32px)",animation:"bwDriftC 38s ease-in-out infinite",display:"block"}}></span>
</div>
<div style={{position:"relative",zIndex:"1"}}>
<header data-bw-nav="" style={{position:"fixed",top:"0",left:"0",right:"0",zIndex:"100",padding:"14px 0",background:"var(--bw-head)",borderBottom:"1px solid var(--bw-head-bd)",backdropFilter:"blur(24px) saturate(180%)",WebkitBackdropFilter:"blur(24px) saturate(180%)"}}>
<div data-bw-pad="" style={{maxWidth:"1440px",margin:"0 auto",padding:"0 40px",display:"flex",alignItems:"center",justifyContent:"space-between",gap:"32px"}}>
<a className="researchify-p1 researchify-p2" href="/" style={{display:"flex",alignItems:"center",gap:"10px",flexShrink:"0",transition:"transform 140ms cubic-bezier(.2,.7,.2,1),background-color 200ms cubic-bezier(.2,.7,.2,1),border-color 200ms cubic-bezier(.2,.7,.2,1),color 200ms cubic-bezier(.2,.7,.2,1),opacity 200ms cubic-bezier(.2,.7,.2,1)"}}>
<img data-bw-logo="" src="/assets/blackware-logo.svg" alt="Blackware Labs" style={{height:"38px",width:"auto",display:"block",flexShrink:"0"}} />
</a>
<div data-bw-crumb="" style={{display:"flex",alignItems:"center",gap:"14px",font:"500 11px/1 'JetBrains Mono',monospace",letterSpacing:".14em",textTransform:"uppercase",opacity:".5"}}>
<span style={{width:"22px",height:"1px",background:"var(--bw-fg)",display:"block"}}></span><a href="/#services">Service 07 — Researchify</a></div>
<div data-bw-head-controls=""><button className="researchify-p3 researchify-p4 researchify-p5" data-bw-theme-toggle="" type="button" aria-label="Switch between day and night" style={{width:"40px",height:"40px",borderRadius:"999px",border:"1px solid var(--bw-toggle-bd)",background:"transparent",color:"var(--bw-fg)",cursor:"pointer",display:"grid",placeItems:"center",flexShrink:"0",padding:"0",transition:"border-color .16s cubic-bezier(.2,.7,.2,1),color .16s cubic-bezier(.2,.7,.2,1),transform 140ms cubic-bezier(.2,.7,.2,1),background-color 200ms cubic-bezier(.2,.7,.2,1),opacity 200ms cubic-bezier(.2,.7,.2,1)"}}>
<svg data-bw-icon="sun" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2.4M12 19.6V22M2 12h2.4M19.6 12H22M4.9 4.9l1.7 1.7M17.4 17.4l1.7 1.7M19.1 4.9l-1.7 1.7M6.6 17.4l-1.7 1.7"></path></svg>
<svg data-bw-icon="moon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20.5 14.6A8.6 8.6 0 0 1 9.4 3.5a8.6 8.6 0 1 0 11.1 11.1Z"></path></svg>
</button>
<a className="researchify-p6 researchify-p7 researchify-p8" data-bw-cta="" href="/contact" style={{display:"inline-flex",alignItems:"center",gap:"10px",backgroundColor:"#080705",backgroundImage:"url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2790%27 height=%2790%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.85%27 numOctaves=%273%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27 opacity=%270.45%27/%3E%3C/svg%3E')",backgroundSize:"90px 90px",backgroundBlendMode:"overlay",color:"#FFFFFA",padding:"12px 20px",borderRadius:"999px",border:"1px solid var(--bw-glass-bd)",boxShadow:"0 14px 30px -18px rgba(8,7,5,.9),0 1px 0 rgba(255,255,255,.3) inset",fontSize:"13px",fontWeight:"600",letterSpacing:"-.01em",flexShrink:"0",transition:"transform 140ms cubic-bezier(.2,.7,.2,1),background-color 200ms cubic-bezier(.2,.7,.2,1),border-color 200ms cubic-bezier(.2,.7,.2,1),color 200ms cubic-bezier(.2,.7,.2,1),opacity 200ms cubic-bezier(.2,.7,.2,1)"}}>
<span style={{width:"6px",height:"6px",borderRadius:"50%",background:"#FFFFFA",animation:"bwBlink 2s steps(1,end) infinite"}}></span>Book a call</a></div>
</div>
</header>
<section data-bw-hero="" style={{padding:"186px 0 0"}}>
<img data-bw-hero-art="" src="/uploads/hero-researchify.webp" alt="" aria-hidden="true" decoding="async" fetchPriority="high" style={{objectPosition:"72% 52%"}} />
<div data-bw-pad="" style={{maxWidth:"1440px",margin:"0 auto",padding:"0 40px",display:"flex",flexDirection:"column",gap:"34px"}}>
<div style={{display:"flex",alignItems:"center",gap:"10px",font:"500 12px/1 'JetBrains Mono',monospace",letterSpacing:".14em",textTransform:"uppercase",animation:"bwRise .7s cubic-bezier(.16,1,.3,1) both"}}>
<span style={{width:"7px",height:"7px",background:"#080705",display:"block"}}></span>// 07 — Researchify</div>
<h1 style={{margin:"0",maxWidth:"24ch",fontWeight:"900",letterSpacing:"-.05em",lineHeight:".86",fontSize:"clamp(52px,9vw,148px)",textTransform:"uppercase",animation:"bwRise .8s cubic-bezier(.16,1,.3,1) .06s both"}}>Hours of account research, cut to minutes</h1>
<div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-end",gap:"40px",flexWrap:"wrap",animation:"bwRise .8s cubic-bezier(.16,1,.3,1) .12s both"}}>
<p style={{margin:"0",maxWidth:"56ch",fontSize:"18px",lineHeight:"1.5",fontWeight:"500",opacity:".7",textWrap:"pretty"}}>We deliver deep, source-verified intelligence on any target account, configured to exactly what your team needs to know.</p>
<div style={{display:"flex",gap:"14px",flexWrap:"wrap",alignItems:"center"}}>
<a className="researchify-p9 researchify-p10 researchify-p11" data-bw-cta="" href="/contact" style={{display:"inline-flex",alignItems:"center",gap:"12px",padding:"18px 28px",borderRadius:"999px",color:"#FFFFFA",fontSize:"15px",fontWeight:"600",letterSpacing:"-.01em",backgroundColor:"#080705",backgroundImage:"url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2790%27 height=%2790%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.85%27 numOctaves=%273%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27 opacity=%270.45%27/%3E%3C/svg%3E') 56%) 58%) 62%);background-size:90px 90px;background-blend-mode:overlay;box-shadow:0 16px 34px -20px rgba(8,7,5,.9),0 1px 0 rgba(255,255,255,.26) inset;transition:transform 140ms cubic-bezier(.2,.7,.2,1),background-color 200ms cubic-bezier(.2,.7,.2,1),border-color 200ms cubic-bezier(.2,.7,.2,1),color 200ms cubic-bezier(.2,.7,.2,1),opacity 200ms cubic-bezier(.2,.7,.2,1)"}}>Start a research brief<span style={{fontFamily:"'JetBrains Mono',monospace"}}>→</span></a>
<a className="researchify-p12 researchify-p13 researchify-p14" href="#included" style={{border:"1px solid var(--bw-fg)",backgroundImage:"url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2790%27 height=%2790%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.85%27 numOctaves=%273%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27 opacity=%270.12%27/%3E%3C/svg%3E')",backgroundSize:"90px 90px",borderRadius:"999px",padding:"18px 28px",fontSize:"15px",fontWeight:"600",transition:"transform 140ms cubic-bezier(.2,.7,.2,1),background-color 200ms cubic-bezier(.2,.7,.2,1),border-color 200ms cubic-bezier(.2,.7,.2,1),color 200ms cubic-bezier(.2,.7,.2,1),opacity 200ms cubic-bezier(.2,.7,.2,1)"}}>What's included</a>
</div>
</div>
<div style={{display:"flex",gap:"44px",flexWrap:"wrap",borderTop:"1px solid var(--bw-rule)",paddingTop:"22px",font:"500 11px/1.6 'JetBrains Mono',monospace",letterSpacing:".14em",textTransform:"uppercase",opacity:".55"}}>
<span>Source-verified</span><span>Configurable sections</span><span>Credits valid 12 months</span>
</div>
</div>
</section>
<section style={{padding:"80px 0 0"}}>
<div data-bw-pad="" style={{maxWidth:"1440px",margin:"0 auto",padding:"0 40px"}}>
<div style={{display:"flex",flexDirection:"column",gap:"12px",padding:"32px 28px",borderRadius:"16px",border:"1px solid var(--bw-glass-bd)",background:"var(--bw-glass)",maxWidth:"70ch"}}>
<span style={{font:"500 11px/1 'JetBrains Mono',monospace",letterSpacing:".14em",textTransform:"uppercase",opacity:".5"}}>// Who it's for</span>
<p style={{margin:"0",fontSize:"18px",lineHeight:"1.5",fontWeight:"600",letterSpacing:"-.01em",textWrap:"pretty"}}>B2B companies running outbound or account-based marketing who need quality research at scale without the manual effort.</p>
</div>
</div>
</section>
<section style={{padding:"80px 0 0"}}>
<div data-bw-pad="" style={{maxWidth:"1440px",margin:"0 auto",padding:"0 40px",display:"flex",flexDirection:"column",gap:"32px",alignItems:"center",textAlign:"center"}}>
<span style={{font:"500 11px/1 'JetBrains Mono',monospace",letterSpacing:".14em",textTransform:"uppercase",opacity:".5"}}>// Product demo</span>
<h2 style={{margin:"0",maxWidth:"20ch",fontWeight:"800",fontSize:"clamp(32px,4.2vw,56px)",lineHeight:".98",letterSpacing:"-.04em"}}>See Researchify in action.</h2>
<div style={{width:"100%",maxWidth:"1160px"}}>
<ResearchifyDemo />
</div>
</div>
</section>
<section id="included" style={{padding:"80px 0 0"}}>
<div data-bw-pad="" style={{maxWidth:"1440px",margin:"0 auto",padding:"0 40px",display:"flex",flexDirection:"column",gap:"44px"}}>
<h2 style={{margin:"0",maxWidth:"26ch",fontWeight:"800",fontSize:"clamp(34px,4.6vw,72px)",lineHeight:".94",letterSpacing:"-.04em"}}>Report sections. Configurable.</h2>
<ReportSectionCards />
<span style={{font:"500 10px/1.6 'JetBrains Mono',monospace",letterSpacing:".1em",textTransform:"uppercase",opacity:".4"}}>Each report ships as PDF and Excel, sections configured to your team.</span>
</div>
</section>
{showPricing ? (<>
<section style={{padding:"120px 0 0"}}>
<div data-bw-pad="" style={{maxWidth:"1440px",margin:"0 auto",padding:"0 40px",display:"flex",flexDirection:"column",gap:"44px"}}>
<div style={{display:"flex",flexDirection:"column",gap:"16px",maxWidth:"64ch",borderBottom:"1px solid var(--bw-rule)",paddingBottom:"32px"}}>
<span style={{font:"500 11px/1 'JetBrains Mono',monospace",letterSpacing:".14em",textTransform:"uppercase",opacity:".5"}}>// Credit packs</span>
<h2 style={{margin:"0",fontWeight:"800",fontSize:"clamp(32px,4vw,56px)",letterSpacing:"-.04em",lineHeight:"1"}}>Buy credits, spend one per report.</h2>
<p style={{margin:"0",fontSize:"16px",lineHeight:"1.5",fontWeight:"500",opacity:".7",textWrap:"pretty"}}>1 credit = 1 full company research report, PDF and Excel, all sections configured. Credits valid 12 months.</p>
</div>
<div data-bw-stack="" style={{display:"grid",gridTemplateColumns:"repeat(5,1fr)",gap:"16px"}}>
<div style={{display:"flex",flexDirection:"column",gap:"14px",padding:"24px 20px",borderRadius:"16px",border:"1px solid var(--bw-glass-bd)",background:"var(--bw-glass)"}}>
<span style={{font:"500 10px/1 'JetBrains Mono',monospace",letterSpacing:".2em",textTransform:"uppercase",color:"var(--bw-accent)"}}>/ 01</span>
<span style={{fontWeight:"800",fontSize:"22px",letterSpacing:"-.03em",lineHeight:"1"}}>Trial</span>
<div style={{height:"1px",background:"var(--bw-rule)"}}></div>
<div style={{display:"flex",flexDirection:"column",gap:"2px"}}>
<span style={{font:"500 10px/1 'JetBrains Mono',monospace",letterSpacing:".1em",textTransform:"uppercase",opacity:".5"}}>Credits</span>
<span style={{fontWeight:"700",fontSize:"18px",letterSpacing:"-.01em"}}>3</span>
</div>
<div style={{display:"flex",flexDirection:"column",gap:"2px"}}>
<span style={{font:"500 10px/1 'JetBrains Mono',monospace",letterSpacing:".1em",textTransform:"uppercase",opacity:".5"}}>Price</span>
<span style={{fontWeight:"700",fontSize:"18px",letterSpacing:"-.01em"}}>$100</span>
</div>
<span style={{fontSize:"12px",fontWeight:"500",opacity:".55"}}>$33/account</span>
<a className="researchify-p15 researchify-p16 researchify-p17" href="/contact" style={{marginTop:"auto",display:"inline-flex",alignItems:"center",justifyContent:"center",gap:"8px",padding:"11px 14px",borderRadius:"999px",border:"1px solid var(--bw-fg)",fontSize:"12px",fontWeight:"600",transition:"transform 140ms cubic-bezier(.2,.7,.2,1),background-color 200ms cubic-bezier(.2,.7,.2,1),border-color 200ms cubic-bezier(.2,.7,.2,1),color 200ms cubic-bezier(.2,.7,.2,1),opacity 200ms cubic-bezier(.2,.7,.2,1)"}}>Get Trial</a>
</div>
<div style={{display:"flex",flexDirection:"column",gap:"14px",padding:"24px 20px",borderRadius:"16px",border:"1px solid var(--bw-glass-bd)",background:"var(--bw-glass)"}}>
<span style={{font:"500 10px/1 'JetBrains Mono',monospace",letterSpacing:".2em",textTransform:"uppercase",color:"var(--bw-accent)"}}>/ 02</span>
<span style={{fontWeight:"800",fontSize:"22px",letterSpacing:"-.03em",lineHeight:"1"}}>Starter</span>
<div style={{height:"1px",background:"var(--bw-rule)"}}></div>
<div style={{display:"flex",flexDirection:"column",gap:"2px"}}>
<span style={{font:"500 10px/1 'JetBrains Mono',monospace",letterSpacing:".1em",textTransform:"uppercase",opacity:".5"}}>Credits</span>
<span style={{fontWeight:"700",fontSize:"18px",letterSpacing:"-.01em"}}>10</span>
</div>
<div style={{display:"flex",flexDirection:"column",gap:"2px"}}>
<span style={{font:"500 10px/1 'JetBrains Mono',monospace",letterSpacing:".1em",textTransform:"uppercase",opacity:".5"}}>Price</span>
<span style={{fontWeight:"700",fontSize:"18px",letterSpacing:"-.01em"}}>$500</span>
</div>
<span style={{fontSize:"12px",fontWeight:"500",opacity:".55"}}>$50/account</span>
<a className="researchify-p18 researchify-p19 researchify-p20" href="/contact" style={{marginTop:"auto",display:"inline-flex",alignItems:"center",justifyContent:"center",gap:"8px",padding:"11px 14px",borderRadius:"999px",border:"1px solid var(--bw-fg)",fontSize:"12px",fontWeight:"600",transition:"transform 140ms cubic-bezier(.2,.7,.2,1),background-color 200ms cubic-bezier(.2,.7,.2,1),border-color 200ms cubic-bezier(.2,.7,.2,1),color 200ms cubic-bezier(.2,.7,.2,1),opacity 200ms cubic-bezier(.2,.7,.2,1)"}}>Get Starter</a>
</div>
<div style={{position:"relative",display:"flex",flexDirection:"column",gap:"14px",padding:"24px 20px",borderRadius:"16px",border:"1px solid rgba(230,175,46,.5)",color:"#FFFFFA",backgroundColor:"#080705",backgroundImage:"url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2790%27 height=%2790%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.85%27 numOctaves=%273%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27 opacity=%270.4%27/%3E%3C/svg%3E'),radial-gradient(at 16% 8%,oklch(0.62 0.13 84 / .4) 0%,rgba(8,7,5,0) 58%),radial-gradient(at 92% 96%,oklch(0.48 0.14 34 / .36) 0%,rgba(8,7,5,0) 62%)",backgroundSize:"90px 90px,auto,auto",backgroundBlendMode:"overlay,normal,normal",boxShadow:"0 34px 70px -42px rgba(8,7,5,.75)"}}>
<span style={{position:"absolute",top:"-13px",left:"20px",background:"#E6AF2E",color:"#080705",borderRadius:"999px",padding:"5px 12px",font:"600 9px/1 'JetBrains Mono',monospace",letterSpacing:".14em",textTransform:"uppercase"}}>Most picked</span>
<span style={{font:"500 10px/1 'JetBrains Mono',monospace",letterSpacing:".2em",textTransform:"uppercase",color:"#E6AF2E"}}>/ 03</span>
<span style={{fontWeight:"800",fontSize:"22px",letterSpacing:"-.03em",lineHeight:"1"}}>Growth</span>
<div style={{height:"1px",background:"rgba(255,255,250,.16)"}}></div>
<div style={{display:"flex",flexDirection:"column",gap:"2px"}}>
<span style={{font:"500 10px/1 'JetBrains Mono',monospace",letterSpacing:".1em",textTransform:"uppercase",opacity:".6"}}>Credits</span>
<span style={{fontWeight:"700",fontSize:"18px",letterSpacing:"-.01em"}}>25</span>
</div>
<div style={{display:"flex",flexDirection:"column",gap:"2px"}}>
<span style={{font:"500 10px/1 'JetBrains Mono',monospace",letterSpacing:".1em",textTransform:"uppercase",opacity:".6"}}>Price</span>
<span style={{fontWeight:"700",fontSize:"18px",letterSpacing:"-.01em"}}>$1,000</span>
</div>
<span style={{fontSize:"12px",fontWeight:"500",opacity:".7"}}>$40/account</span>
<a className="researchify-p21 researchify-p22 researchify-p23" data-bw-cta="" href="/contact" style={{marginTop:"auto",display:"inline-flex",alignItems:"center",justifyContent:"center",gap:"8px",padding:"11px 14px",borderRadius:"999px",color:"#FFFFFA",fontSize:"12px",fontWeight:"600",backgroundColor:"#080705",backgroundImage:"url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2790%27 height=%2790%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.85%27 numOctaves=%273%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27 opacity=%270.45%27/%3E%3C/svg%3E') 56%) 58%) 62%);background-size:90px 90px;background-blend-mode:overlay;box-shadow:0 14px 30px -18px rgba(8,7,5,.9),0 1px 0 rgba(255,255,255,.26) inset;transition:transform 140ms cubic-bezier(.2,.7,.2,1),background-color 200ms cubic-bezier(.2,.7,.2,1),border-color 200ms cubic-bezier(.2,.7,.2,1),color 200ms cubic-bezier(.2,.7,.2,1),opacity 200ms cubic-bezier(.2,.7,.2,1)"}}>Get Growth</a>
</div>
<div style={{display:"flex",flexDirection:"column",gap:"14px",padding:"24px 20px",borderRadius:"16px",border:"1px solid var(--bw-glass-bd)",background:"var(--bw-glass)"}}>
<span style={{font:"500 10px/1 'JetBrains Mono',monospace",letterSpacing:".2em",textTransform:"uppercase",color:"var(--bw-accent)"}}>/ 04</span>
<span style={{fontWeight:"800",fontSize:"22px",letterSpacing:"-.03em",lineHeight:"1"}}>Scale</span>
<div style={{height:"1px",background:"var(--bw-rule)"}}></div>
<div style={{display:"flex",flexDirection:"column",gap:"2px"}}>
<span style={{font:"500 10px/1 'JetBrains Mono',monospace",letterSpacing:".1em",textTransform:"uppercase",opacity:".5"}}>Credits</span>
<span style={{fontWeight:"700",fontSize:"18px",letterSpacing:"-.01em"}}>50</span>
</div>
<div style={{display:"flex",flexDirection:"column",gap:"2px"}}>
<span style={{font:"500 10px/1 'JetBrains Mono',monospace",letterSpacing:".1em",textTransform:"uppercase",opacity:".5"}}>Price</span>
<span style={{fontWeight:"700",fontSize:"18px",letterSpacing:"-.01em"}}>$1,750</span>
</div>
<span style={{fontSize:"12px",fontWeight:"500",opacity:".55"}}>$35/account</span>
<a className="researchify-p24 researchify-p25 researchify-p26" href="/contact" style={{marginTop:"auto",display:"inline-flex",alignItems:"center",justifyContent:"center",gap:"8px",padding:"11px 14px",borderRadius:"999px",border:"1px solid var(--bw-fg)",fontSize:"12px",fontWeight:"600",transition:"transform 140ms cubic-bezier(.2,.7,.2,1),background-color 200ms cubic-bezier(.2,.7,.2,1),border-color 200ms cubic-bezier(.2,.7,.2,1),color 200ms cubic-bezier(.2,.7,.2,1),opacity 200ms cubic-bezier(.2,.7,.2,1)"}}>Get Scale</a>
</div>
<div style={{display:"flex",flexDirection:"column",gap:"14px",padding:"24px 20px",borderRadius:"16px",border:"1px solid var(--bw-glass-bd)",background:"var(--bw-glass)"}}>
<span style={{font:"500 10px/1 'JetBrains Mono',monospace",letterSpacing:".2em",textTransform:"uppercase",color:"var(--bw-accent)"}}>/ 05</span>
<span style={{fontWeight:"800",fontSize:"22px",letterSpacing:"-.03em",lineHeight:"1"}}>Pro</span>
<div style={{height:"1px",background:"var(--bw-rule)"}}></div>
<div style={{display:"flex",flexDirection:"column",gap:"2px"}}>
<span style={{font:"500 10px/1 'JetBrains Mono',monospace",letterSpacing:".1em",textTransform:"uppercase",opacity:".5"}}>Credits</span>
<span style={{fontWeight:"700",fontSize:"18px",letterSpacing:"-.01em"}}>100</span>
</div>
<div style={{display:"flex",flexDirection:"column",gap:"2px"}}>
<span style={{font:"500 10px/1 'JetBrains Mono',monospace",letterSpacing:".1em",textTransform:"uppercase",opacity:".5"}}>Price</span>
<span style={{fontWeight:"700",fontSize:"18px",letterSpacing:"-.01em"}}>$3,000</span>
</div>
<span style={{fontSize:"12px",fontWeight:"500",opacity:".55"}}>$30/account</span>
<a className="researchify-p27 researchify-p28 researchify-p29" href="/contact" style={{marginTop:"auto",display:"inline-flex",alignItems:"center",justifyContent:"center",gap:"8px",padding:"11px 14px",borderRadius:"999px",border:"1px solid var(--bw-fg)",fontSize:"12px",fontWeight:"600",transition:"transform 140ms cubic-bezier(.2,.7,.2,1),background-color 200ms cubic-bezier(.2,.7,.2,1),border-color 200ms cubic-bezier(.2,.7,.2,1),color 200ms cubic-bezier(.2,.7,.2,1),opacity 200ms cubic-bezier(.2,.7,.2,1)"}}>Get Pro</a>
</div>
</div>
<span style={{font:"500 10px/1.6 'JetBrains Mono',monospace",letterSpacing:".1em",textTransform:"uppercase",opacity:".4"}}>1 credit = 1 full company research report, PDF/Excel, all sections configured. Credits valid 12 months.</span>
</div>
</section>
</>) : null}
<section style={{padding:"64px 0 96px"}}>
<div data-bw-pad="" style={{maxWidth:"1440px",margin:"0 auto",padding:"0 40px",display:"flex",flexDirection:"column",gap:"24px"}}>
<span style={{font:"500 11px/1 'JetBrains Mono',monospace",letterSpacing:".14em",textTransform:"uppercase",opacity:".5"}}>// Other services</span>
<div style={{display:"flex",gap:"12px",flexWrap:"wrap"}}>
<a className="researchify-p30 researchify-p31 researchify-p32" href="/website-and-portfolio" style={{border:"1px solid var(--bw-fg)",backgroundImage:"url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2790%27 height=%2790%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.85%27 numOctaves=%273%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27 opacity=%270.12%27/%3E%3C/svg%3E')",backgroundSize:"90px 90px",borderRadius:"999px",padding:"14px 22px",fontSize:"14px",fontWeight:"600",transition:"transform 140ms cubic-bezier(.2,.7,.2,1),background-color 200ms cubic-bezier(.2,.7,.2,1),border-color 200ms cubic-bezier(.2,.7,.2,1),color 200ms cubic-bezier(.2,.7,.2,1),opacity 200ms cubic-bezier(.2,.7,.2,1)"}}>Website &amp; portfolio</a>
<a className="researchify-p33 researchify-p34 researchify-p35" href="/interactive-assets" style={{border:"1px solid var(--bw-fg)",backgroundImage:"url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2790%27 height=%2790%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.85%27 numOctaves=%273%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27 opacity=%270.12%27/%3E%3C/svg%3E')",backgroundSize:"90px 90px",borderRadius:"999px",padding:"14px 22px",fontSize:"14px",fontWeight:"600",transition:"transform 140ms cubic-bezier(.2,.7,.2,1),background-color 200ms cubic-bezier(.2,.7,.2,1),border-color 200ms cubic-bezier(.2,.7,.2,1),color 200ms cubic-bezier(.2,.7,.2,1),opacity 200ms cubic-bezier(.2,.7,.2,1)"}}>Interactive assets</a>
<a className="researchify-p36 researchify-p37 researchify-p38" href="/brand-design" style={{border:"1px solid var(--bw-fg)",backgroundImage:"url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2790%27 height=%2790%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.85%27 numOctaves=%273%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27 opacity=%270.12%27/%3E%3C/svg%3E')",backgroundSize:"90px 90px",borderRadius:"999px",padding:"14px 22px",fontSize:"14px",fontWeight:"600",transition:"transform 140ms cubic-bezier(.2,.7,.2,1),background-color 200ms cubic-bezier(.2,.7,.2,1),border-color 200ms cubic-bezier(.2,.7,.2,1),color 200ms cubic-bezier(.2,.7,.2,1),opacity 200ms cubic-bezier(.2,.7,.2,1)"}}>Brand design</a>
<a className="researchify-p39 researchify-p40 researchify-p41" href="/b2b-answer-engine" style={{border:"1px solid var(--bw-fg)",backgroundImage:"url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2790%27 height=%2790%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.85%27 numOctaves=%273%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27 opacity=%270.12%27/%3E%3C/svg%3E')",backgroundSize:"90px 90px",borderRadius:"999px",padding:"14px 22px",fontSize:"14px",fontWeight:"600",transition:"transform 140ms cubic-bezier(.2,.7,.2,1),background-color 200ms cubic-bezier(.2,.7,.2,1),border-color 200ms cubic-bezier(.2,.7,.2,1),color 200ms cubic-bezier(.2,.7,.2,1),opacity 200ms cubic-bezier(.2,.7,.2,1)"}}>B2B answer engine placement</a>
<a className="researchify-p42 researchify-p43 researchify-p44" href="/lead-detective" style={{border:"1px solid var(--bw-fg)",backgroundImage:"url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2790%27 height=%2790%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.85%27 numOctaves=%273%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27 opacity=%270.12%27/%3E%3C/svg%3E')",backgroundSize:"90px 90px",borderRadius:"999px",padding:"14px 22px",fontSize:"14px",fontWeight:"600",transition:"transform 140ms cubic-bezier(.2,.7,.2,1),background-color 200ms cubic-bezier(.2,.7,.2,1),border-color 200ms cubic-bezier(.2,.7,.2,1),color 200ms cubic-bezier(.2,.7,.2,1),opacity 200ms cubic-bezier(.2,.7,.2,1)"}}>Lead detective</a>
<a className="researchify-p45 researchify-p46 researchify-p47" href="/mypen" style={{border:"1px solid var(--bw-fg)",backgroundImage:"url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2790%27 height=%2790%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.85%27 numOctaves=%273%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27 opacity=%270.12%27/%3E%3C/svg%3E')",backgroundSize:"90px 90px",borderRadius:"999px",padding:"14px 22px",fontSize:"14px",fontWeight:"600",transition:"transform 140ms cubic-bezier(.2,.7,.2,1),background-color 200ms cubic-bezier(.2,.7,.2,1),border-color 200ms cubic-bezier(.2,.7,.2,1),color 200ms cubic-bezier(.2,.7,.2,1),opacity 200ms cubic-bezier(.2,.7,.2,1)"}}>Mypen</a>
<a className="researchify-p48 researchify-p49 researchify-p50" href="/self-serve-buying" style={{border:"1px solid var(--bw-fg)",backgroundImage:"url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2790%27 height=%2790%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.85%27 numOctaves=%273%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27 opacity=%270.12%27/%3E%3C/svg%3E')",backgroundSize:"90px 90px",borderRadius:"999px",padding:"14px 22px",fontSize:"14px",fontWeight:"600",transition:"transform 140ms cubic-bezier(.2,.7,.2,1),background-color 200ms cubic-bezier(.2,.7,.2,1),border-color 200ms cubic-bezier(.2,.7,.2,1),color 200ms cubic-bezier(.2,.7,.2,1),opacity 200ms cubic-bezier(.2,.7,.2,1)"}}>Self-serve buying</a>
</div>
<div style={{display:"flex",justifyContent:"space-between",gap:"24px",flexWrap:"wrap",borderTop:"1px solid var(--bw-rule)",paddingTop:"24px",font:"500 11px/1 'JetBrains Mono',monospace",letterSpacing:".14em",textTransform:"uppercase",opacity:".5"}}>
<span>© 2026 Blackware Labs</span><a className="researchify-p51 researchify-p52" href="/">← Back to homepage</a>
</div>
</div>
</section>
</div>
</div>
</>);
}