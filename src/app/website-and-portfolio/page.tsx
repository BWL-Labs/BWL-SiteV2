"use client";

import "@/styles/pages/website.css";
import { HeroHeadingReveal } from "@/components/ui/hero-heading-reveal";
import { useWebsitePageLogic } from "@/generated/website.logic";
export default function WebsitePage() {
  const v = useWebsitePageLogic();
  const { barScale, enter0, enter1, enter2, enter3, leave0, leave1, leave2, leave3, pinO0, pinO1, pinO2, pinO3, pinT0, pinT1, pinT2, pinT3, shipCount, showPricing, tilt0, tilt1, tilt2, tilt3 } = v;
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
<a className="website-p1 website-p2" href="/" style={{display:"flex",alignItems:"center",gap:"10px",flexShrink:"0",transition:"transform 140ms cubic-bezier(.2,.7,.2,1),background-color 200ms cubic-bezier(.2,.7,.2,1),border-color 200ms cubic-bezier(.2,.7,.2,1),color 200ms cubic-bezier(.2,.7,.2,1),opacity 200ms cubic-bezier(.2,.7,.2,1)"}}>
<img data-bw-logo="" src="/assets/blackware-logo.svg" alt="Blackware Labs" style={{height:"38px",width:"auto",display:"block",flexShrink:"0"}} />
</a>
<div data-bw-crumb="" style={{display:"flex",alignItems:"center",gap:"14px",font:"500 11px/1 'JetBrains Mono',monospace",letterSpacing:".14em",textTransform:"uppercase",opacity:".5"}}>
<span style={{width:"22px",height:"1px",background:"var(--bw-fg)",display:"block"}}></span><a href="/#services">Service 02 — Website &amp; portfolio</a></div>
<div data-bw-head-controls=""><button className="website-p3 website-p4 website-p5" data-bw-theme-toggle="" type="button" aria-label="Switch between day and night" style={{width:"40px",height:"40px",borderRadius:"999px",border:"1px solid var(--bw-toggle-bd)",background:"transparent",color:"var(--bw-fg)",cursor:"pointer",display:"grid",placeItems:"center",flexShrink:"0",padding:"0",transition:"border-color .16s cubic-bezier(.2,.7,.2,1),color .16s cubic-bezier(.2,.7,.2,1),transform 140ms cubic-bezier(.2,.7,.2,1),background-color 200ms cubic-bezier(.2,.7,.2,1),opacity 200ms cubic-bezier(.2,.7,.2,1)"}}>
<svg data-bw-icon="sun" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2.4M12 19.6V22M2 12h2.4M19.6 12H22M4.9 4.9l1.7 1.7M17.4 17.4l1.7 1.7M19.1 4.9l-1.7 1.7M6.6 17.4l-1.7 1.7"></path></svg>
<svg data-bw-icon="moon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20.5 14.6A8.6 8.6 0 0 1 9.4 3.5a8.6 8.6 0 1 0 11.1 11.1Z"></path></svg>
</button>
<a className="website-p6 website-p7 website-p8" data-bw-cta="" href="/contact" style={{display:"inline-flex",alignItems:"center",gap:"10px",backgroundColor:"#080705",backgroundImage:"url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2790%27 height=%2790%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.85%27 numOctaves=%273%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27 opacity=%270.45%27/%3E%3C/svg%3E')",backgroundSize:"90px 90px",backgroundBlendMode:"overlay",color:"#FFFFFA",padding:"12px 20px",borderRadius:"999px",border:"1px solid var(--bw-glass-bd)",boxShadow:"0 14px 30px -18px rgba(8,7,5,.9),0 1px 0 rgba(255,255,255,.3) inset",fontSize:"13px",fontWeight:"600",letterSpacing:"-.01em",flexShrink:"0",transition:"transform 140ms cubic-bezier(.2,.7,.2,1),background-color 200ms cubic-bezier(.2,.7,.2,1),border-color 200ms cubic-bezier(.2,.7,.2,1),color 200ms cubic-bezier(.2,.7,.2,1),opacity 200ms cubic-bezier(.2,.7,.2,1)"}}>
<span style={{width:"6px",height:"6px",borderRadius:"50%",background:"#FFFFFA",animation:"bwBlink 2s steps(1,end) infinite"}}></span>Book a call</a></div>
</div>
</header>
<section data-bw-hero="" style={{padding:"186px 0 0"}}>
<img data-bw-hero-art="" src="/uploads/hero-website-portfolio.webp" alt="" aria-hidden="true" decoding="async" fetchPriority="high" style={{objectPosition:"72% 50%"}} />
<div data-bw-pad="" style={{maxWidth:"1440px",margin:"0 auto",padding:"0 40px",display:"flex",flexDirection:"column",gap:"34px"}}>
<div style={{display:"flex",alignItems:"center",gap:"10px",font:"500 12px/1 'JetBrains Mono',monospace",letterSpacing:".14em",textTransform:"uppercase",animation:"bwRise .7s cubic-bezier(.16,1,.3,1) both"}}>
<span style={{width:"7px",height:"7px",background:"#080705",display:"block"}}></span>// 02 — Website &amp; portfolio</div>
<HeroHeadingReveal style={{margin:"0",maxWidth:"22ch",fontWeight:"900",letterSpacing:"-.01em",lineHeight:".86",fontSize:"clamp(36px,6.3vw,104px)",textTransform:"uppercase"}}>Your site should qualify, not decorate</HeroHeadingReveal>
<div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-end",gap:"40px",flexWrap:"wrap",animation:"bwRise .8s cubic-bezier(.16,1,.3,1) .12s both"}}>
<p style={{margin:"0",maxWidth:"52ch",fontSize:"18px",lineHeight:"1.5",fontWeight:"500",opacity:".7",textWrap:"pretty"}}>Sites and work portfolios that make the case for you. Fast, structured around the sale, and easy for your team to keep alive after launch.</p>
<div style={{display:"flex",gap:"14px",flexWrap:"wrap",alignItems:"center"}}>
<a className="website-p9 website-p10 website-p11" data-bw-cta="" href="/contact" style={{display:"inline-flex",alignItems:"center",gap:"12px",padding:"18px 28px",borderRadius:"999px",color:"#FFFFFA",fontSize:"15px",fontWeight:"600",letterSpacing:"-.01em",backgroundColor:"#080705",backgroundImage:"url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2790%27 height=%2790%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.85%27 numOctaves=%273%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27 opacity=%270.45%27/%3E%3C/svg%3E') 56%) 58%) 62%);background-size:90px 90px;background-blend-mode:overlay;box-shadow:0 16px 34px -20px rgba(8,7,5,.9),0 1px 0 rgba(255,255,255,.26) inset;transition:transform 140ms cubic-bezier(.2,.7,.2,1),background-color 200ms cubic-bezier(.2,.7,.2,1),border-color 200ms cubic-bezier(.2,.7,.2,1),color 200ms cubic-bezier(.2,.7,.2,1),opacity 200ms cubic-bezier(.2,.7,.2,1)"}}>Start a site brief<span style={{fontFamily:"'JetBrains Mono',monospace"}}>→</span></a>

</div>
</div>
<div style={{display:"flex",gap:"44px",flexWrap:"wrap",borderTop:"1px solid var(--bw-rule)",paddingTop:"22px",font:"500 11px/1.6 'JetBrains Mono',monospace",letterSpacing:".14em",textTransform:"uppercase",opacity:".55"}}>
<span>10 weeks typical</span><span>From $499 — 70% off</span><span>Senior team only</span><span>Two Q4 2026 slots</span>
</div>
</div>
</section>
<section id="included" style={{padding:"104px 0 0"}}>
<div data-bw-pad="" style={{maxWidth:"1440px",margin:"0 auto",padding:"0 40px",display:"flex",flexDirection:"column",gap:"44px"}}>
<h2 style={{margin:"0",maxWidth:"24ch",fontWeight:"800",fontSize:"clamp(34px,4.6vw,72px)",lineHeight:".94",letterSpacing:"-.04em"}}>What you get.</h2>
<div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(272px,1fr))",gap:"clamp(18px,2vw,30px)"}}>
<div onMouseEnter={enter0} onMouseLeave={leave0} style={{perspective:"1000px",padding:"20px 0 6px",display:"flex",justifyContent:"center"}}>
<div style={{position:"relative",width:"100%",transformStyle:"preserve-3d",transition:"transform .7s cubic-bezier(.16,1,.3,1)",transform:tilt0}}>
<div style={{position:"absolute",left:"50%",bottom:"calc(100% - 4px)",translate:"-50% 0",display:"flex",flexDirection:"column",alignItems:"center",pointerEvents:"none",opacity:pinO0,transform:pinT0,transition:"opacity .45s ease,transform .55s cubic-bezier(.16,1,.3,1)"}}>
<span style={{background:"#080705",color:"#E6AF2E",border:"1px solid rgba(230,175,46,.55)",borderRadius:"999px",padding:"7px 14px",font:"500 10px/1 'JetBrains Mono',monospace",letterSpacing:".18em",textTransform:"uppercase",whiteSpace:"nowrap"}}>// message map</span>
<span style={{width:"1px",height:"54px",background:"linear-gradient(180deg,#E6AF2E,rgba(230,175,46,0))",display:"block"}}></span>
</div>
<span aria-hidden="true" style={{position:"absolute",left:"50%",top:"100%",width:"0",height:"0",transform:"rotateX(70deg)",pointerEvents:"none",opacity:pinO0,transition:"opacity .5s ease",display:"block"}}>
<span style={{position:"absolute",left:"0",top:"0",width:"78px",height:"78px",translate:"-50% -50%",border:"1px solid rgba(230,175,46,.55)",borderRadius:"50%",animation:"bwPing 2.8s cubic-bezier(.2,.7,.2,1) infinite",display:"block"}}></span>
<span style={{position:"absolute",left:"0",top:"0",width:"78px",height:"78px",translate:"-50% -50%",border:"1px solid rgba(230,175,46,.4)",borderRadius:"50%",animation:"bwPing 2.8s cubic-bezier(.2,.7,.2,1) .9s infinite",display:"block"}}></span>
<span style={{position:"absolute",left:"0",top:"0",width:"78px",height:"78px",translate:"-50% -50%",border:"1px solid rgba(230,175,46,.28)",borderRadius:"50%",animation:"bwPing 2.8s cubic-bezier(.2,.7,.2,1) 1.8s infinite",display:"block"}}></span>
</span>
<div style={{position:"relative",display:"flex",flexDirection:"column",gap:"14px",minHeight:"224px",padding:"28px",borderRadius:"14px",border:"1px solid rgba(255,255,250,.16)",color:"#FFFFFA",backgroundColor:"#080705",backgroundImage:"url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2790%27 height=%2790%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.85%27 numOctaves=%273%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27 opacity=%270.42%27/%3E%3C/svg%3E'),radial-gradient(at 20% 10%,oklch(0.62 0.13 84 / .5) 0%,rgba(8,7,5,0) 58%),radial-gradient(at 90% 96%,oklch(0.5 0.14 34 / .45) 0%,rgba(8,7,5,0) 62%)",backgroundSize:"90px 90px,auto,auto",backgroundBlendMode:"overlay,normal,normal",boxShadow:"0 34px 70px -42px rgba(8,7,5,.75),0 1px 0 rgba(255,255,255,.14) inset"}}>
<span style={{font:"500 10px/1 'JetBrains Mono',monospace",letterSpacing:".2em",textTransform:"uppercase",color:"#E6AF2E"}}>/ 01</span>
<span style={{fontWeight:"800",fontSize:"22px",letterSpacing:"-.03em"}}>Message map</span>
<span style={{fontSize:"15px",lineHeight:"1.5",fontWeight:"500",opacity:".72",textWrap:"pretty"}}>Sitemap and a page-by-page argument, drawn from how your best rep actually sells. Structure before pixels.</span>
</div>
</div>
</div>
<div onMouseEnter={enter1} onMouseLeave={leave1} style={{perspective:"1000px",padding:"20px 0 6px",display:"flex",justifyContent:"center"}}>
<div style={{position:"relative",width:"100%",transformStyle:"preserve-3d",transition:"transform .7s cubic-bezier(.16,1,.3,1)",transform:tilt1}}>
<div style={{position:"absolute",left:"50%",bottom:"calc(100% - 4px)",translate:"-50% 0",display:"flex",flexDirection:"column",alignItems:"center",pointerEvents:"none",opacity:pinO1,transform:pinT1,transition:"opacity .45s ease,transform .55s cubic-bezier(.16,1,.3,1)"}}>
<span style={{background:"#080705",color:"#E6AF2E",border:"1px solid rgba(230,175,46,.55)",borderRadius:"999px",padding:"7px 14px",font:"500 10px/1 'JetBrains Mono',monospace",letterSpacing:".18em",textTransform:"uppercase",whiteSpace:"nowrap"}}>// design system</span>
<span style={{width:"1px",height:"54px",background:"linear-gradient(180deg,#E6AF2E,rgba(230,175,46,0))",display:"block"}}></span>
</div>
<span aria-hidden="true" style={{position:"absolute",left:"50%",top:"100%",width:"0",height:"0",transform:"rotateX(70deg)",pointerEvents:"none",opacity:pinO1,transition:"opacity .5s ease",display:"block"}}>
<span style={{position:"absolute",left:"0",top:"0",width:"78px",height:"78px",translate:"-50% -50%",border:"1px solid rgba(230,175,46,.55)",borderRadius:"50%",animation:"bwPing 2.8s cubic-bezier(.2,.7,.2,1) infinite",display:"block"}}></span>
<span style={{position:"absolute",left:"0",top:"0",width:"78px",height:"78px",translate:"-50% -50%",border:"1px solid rgba(230,175,46,.4)",borderRadius:"50%",animation:"bwPing 2.8s cubic-bezier(.2,.7,.2,1) .9s infinite",display:"block"}}></span>
<span style={{position:"absolute",left:"0",top:"0",width:"78px",height:"78px",translate:"-50% -50%",border:"1px solid rgba(230,175,46,.28)",borderRadius:"50%",animation:"bwPing 2.8s cubic-bezier(.2,.7,.2,1) 1.8s infinite",display:"block"}}></span>
</span>
<div style={{position:"relative",display:"flex",flexDirection:"column",gap:"14px",minHeight:"224px",padding:"28px",borderRadius:"14px",border:"1px solid rgba(255,255,250,.16)",color:"#FFFFFA",backgroundColor:"#080705",backgroundImage:"url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2790%27 height=%2790%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.85%27 numOctaves=%273%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27 opacity=%270.42%27/%3E%3C/svg%3E'),radial-gradient(at 20% 10%,oklch(0.62 0.13 84 / .5) 0%,rgba(8,7,5,0) 58%),radial-gradient(at 90% 96%,oklch(0.5 0.14 34 / .45) 0%,rgba(8,7,5,0) 62%)",backgroundSize:"90px 90px,auto,auto",backgroundBlendMode:"overlay,normal,normal",boxShadow:"0 34px 70px -42px rgba(8,7,5,.75),0 1px 0 rgba(255,255,255,.14) inset"}}>
<span style={{font:"500 10px/1 'JetBrains Mono',monospace",letterSpacing:".2em",textTransform:"uppercase",color:"#E6AF2E"}}>/ 02</span>
<span style={{fontWeight:"800",fontSize:"22px",letterSpacing:"-.03em"}}>Design system</span>
<span style={{fontSize:"15px",lineHeight:"1.5",fontWeight:"500",opacity:".72",textWrap:"pretty"}}>Components, type scale, and states in one file — so page ten looks like page one and nothing drifts.</span>
</div>
</div>
</div>
<div onMouseEnter={enter2} onMouseLeave={leave2} style={{perspective:"1000px",padding:"20px 0 6px",display:"flex",justifyContent:"center"}}>
<div style={{position:"relative",width:"100%",transformStyle:"preserve-3d",transition:"transform .7s cubic-bezier(.16,1,.3,1)",transform:tilt2}}>
<div style={{position:"absolute",left:"50%",bottom:"calc(100% - 4px)",translate:"-50% 0",display:"flex",flexDirection:"column",alignItems:"center",pointerEvents:"none",opacity:pinO2,transform:pinT2,transition:"opacity .45s ease,transform .55s cubic-bezier(.16,1,.3,1)"}}>
<span style={{background:"#080705",color:"#E6AF2E",border:"1px solid rgba(230,175,46,.55)",borderRadius:"999px",padding:"7px 14px",font:"500 10px/1 'JetBrains Mono',monospace",letterSpacing:".18em",textTransform:"uppercase",whiteSpace:"nowrap"}}>// build</span>
<span style={{width:"1px",height:"54px",background:"linear-gradient(180deg,#E6AF2E,rgba(230,175,46,0))",display:"block"}}></span>
</div>
<span aria-hidden="true" style={{position:"absolute",left:"50%",top:"100%",width:"0",height:"0",transform:"rotateX(70deg)",pointerEvents:"none",opacity:pinO2,transition:"opacity .5s ease",display:"block"}}>
<span style={{position:"absolute",left:"0",top:"0",width:"78px",height:"78px",translate:"-50% -50%",border:"1px solid rgba(230,175,46,.55)",borderRadius:"50%",animation:"bwPing 2.8s cubic-bezier(.2,.7,.2,1) infinite",display:"block"}}></span>
<span style={{position:"absolute",left:"0",top:"0",width:"78px",height:"78px",translate:"-50% -50%",border:"1px solid rgba(230,175,46,.4)",borderRadius:"50%",animation:"bwPing 2.8s cubic-bezier(.2,.7,.2,1) .9s infinite",display:"block"}}></span>
<span style={{position:"absolute",left:"0",top:"0",width:"78px",height:"78px",translate:"-50% -50%",border:"1px solid rgba(230,175,46,.28)",borderRadius:"50%",animation:"bwPing 2.8s cubic-bezier(.2,.7,.2,1) 1.8s infinite",display:"block"}}></span>
</span>
<div style={{position:"relative",display:"flex",flexDirection:"column",gap:"14px",minHeight:"224px",padding:"28px",borderRadius:"14px",border:"1px solid rgba(255,255,250,.16)",color:"#FFFFFA",backgroundColor:"#080705",backgroundImage:"url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2790%27 height=%2790%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.85%27 numOctaves=%273%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27 opacity=%270.42%27/%3E%3C/svg%3E'),radial-gradient(at 20% 10%,oklch(0.62 0.13 84 / .5) 0%,rgba(8,7,5,0) 58%),radial-gradient(at 90% 96%,oklch(0.5 0.14 34 / .45) 0%,rgba(8,7,5,0) 62%)",backgroundSize:"90px 90px,auto,auto",backgroundBlendMode:"overlay,normal,normal",boxShadow:"0 34px 70px -42px rgba(8,7,5,.75),0 1px 0 rgba(255,255,255,.14) inset"}}>
<span style={{font:"500 10px/1 'JetBrains Mono',monospace",letterSpacing:".2em",textTransform:"uppercase",color:"#E6AF2E"}}>/ 03</span>
<span style={{fontWeight:"800",fontSize:"22px",letterSpacing:"-.03em"}}>Build &amp; CMS</span>
<span style={{fontSize:"15px",lineHeight:"1.5",fontWeight:"500",opacity:".72",textWrap:"pretty"}}>Fast, accessible, indexed. Editors ship a case study on Friday without opening a ticket.</span>
</div>
</div>
</div>
<div onMouseEnter={enter3} onMouseLeave={leave3} style={{perspective:"1000px",padding:"20px 0 6px",display:"flex",justifyContent:"center"}}>
<div style={{position:"relative",width:"100%",transformStyle:"preserve-3d",transition:"transform .7s cubic-bezier(.16,1,.3,1)",transform:tilt3}}>
<div style={{position:"absolute",left:"50%",bottom:"calc(100% - 4px)",translate:"-50% 0",display:"flex",flexDirection:"column",alignItems:"center",pointerEvents:"none",opacity:pinO3,transform:pinT3,transition:"opacity .45s ease,transform .55s cubic-bezier(.16,1,.3,1)"}}>
<span style={{background:"#080705",color:"#E6AF2E",border:"1px solid rgba(230,175,46,.55)",borderRadius:"999px",padding:"7px 14px",font:"500 10px/1 'JetBrains Mono',monospace",letterSpacing:".18em",textTransform:"uppercase",whiteSpace:"nowrap"}}>// case studies</span>
<span style={{width:"1px",height:"54px",background:"linear-gradient(180deg,#E6AF2E,rgba(230,175,46,0))",display:"block"}}></span>
</div>
<span aria-hidden="true" style={{position:"absolute",left:"50%",top:"100%",width:"0",height:"0",transform:"rotateX(70deg)",pointerEvents:"none",opacity:pinO3,transition:"opacity .5s ease",display:"block"}}>
<span style={{position:"absolute",left:"0",top:"0",width:"78px",height:"78px",translate:"-50% -50%",border:"1px solid rgba(230,175,46,.55)",borderRadius:"50%",animation:"bwPing 2.8s cubic-bezier(.2,.7,.2,1) infinite",display:"block"}}></span>
<span style={{position:"absolute",left:"0",top:"0",width:"78px",height:"78px",translate:"-50% -50%",border:"1px solid rgba(230,175,46,.4)",borderRadius:"50%",animation:"bwPing 2.8s cubic-bezier(.2,.7,.2,1) .9s infinite",display:"block"}}></span>
<span style={{position:"absolute",left:"0",top:"0",width:"78px",height:"78px",translate:"-50% -50%",border:"1px solid rgba(230,175,46,.28)",borderRadius:"50%",animation:"bwPing 2.8s cubic-bezier(.2,.7,.2,1) 1.8s infinite",display:"block"}}></span>
</span>
<div style={{position:"relative",display:"flex",flexDirection:"column",gap:"14px",minHeight:"224px",padding:"28px",borderRadius:"14px",border:"1px solid rgba(255,255,250,.16)",color:"#FFFFFA",backgroundColor:"#080705",backgroundImage:"url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2790%27 height=%2790%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.85%27 numOctaves=%273%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27 opacity=%270.42%27/%3E%3C/svg%3E'),radial-gradient(at 20% 10%,oklch(0.62 0.13 84 / .5) 0%,rgba(8,7,5,0) 58%),radial-gradient(at 90% 96%,oklch(0.5 0.14 34 / .45) 0%,rgba(8,7,5,0) 62%)",backgroundSize:"90px 90px,auto,auto",backgroundBlendMode:"overlay,normal,normal",boxShadow:"0 34px 70px -42px rgba(8,7,5,.75),0 1px 0 rgba(255,255,255,.14) inset"}}>
<span style={{font:"500 10px/1 'JetBrains Mono',monospace",letterSpacing:".2em",textTransform:"uppercase",color:"#E6AF2E"}}>/ 04</span>
<span style={{fontWeight:"800",fontSize:"22px",letterSpacing:"-.03em"}}>Case study engine</span>
<span style={{fontSize:"15px",lineHeight:"1.5",fontWeight:"500",opacity:".72",textWrap:"pretty"}}>A repeatable format for proof: problem, work, number. We build three with you; the rest is a template.</span>
</div>
</div>
</div>
</div>
</div>
</section>
<section style={{padding:"96px 0 0"}}>
<div data-bw-pad="" style={{maxWidth:"1440px",margin:"0 auto",padding:"0 40px",display:"flex",flexDirection:"column",gap:"14px"}}>
<div style={{position:"relative",overflow:"hidden",border:"1px solid var(--bw-rule)",borderRadius:"16px",color:"#FFFFFA",backgroundColor:"#080705",backgroundImage:"url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2790%27 height=%2790%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.85%27 numOctaves=%273%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27 opacity=%270.4%27/%3E%3C/svg%3E'),radial-gradient(at 16% 6%,oklch(0.6 0.13 84 / .4) 0%,rgba(8,7,5,0) 58%),radial-gradient(at 92% 94%,oklch(0.48 0.14 34 / .36) 0%,rgba(8,7,5,0) 62%)",backgroundSize:"90px 90px,auto,auto",backgroundBlendMode:"overlay,normal,normal",padding:"32px",display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(320px,1fr))",gap:"24px",alignItems:"stretch"}}>
<div style={{display:"flex",flexDirection:"column",gap:"16px",minHeight:"360px"}}>
<span style={{font:"500 10px/1 'JetBrains Mono',monospace",letterSpacing:".2em",textTransform:"uppercase",color:"#E6AF2E"}}>// the build</span>
<div data-bw-preview="" role="img" aria-label="Preview of a homepage template Blackware ships: a red-framed editorial layout with an oversized cropped wordmark, black-and-white photography and a moving ticker" style={{flex:"1",minHeight:"300px",display:"flex",flexDirection:"column",border:"1px solid rgba(255,255,250,.14)",borderRadius:"14px",overflow:"hidden",background:"#141110"}}>
<div aria-hidden="true" style={{flexShrink:"0",display:"flex",alignItems:"center",gap:"7px",padding:"10px 12px",background:"rgba(255,255,250,.03)",borderBottom:"1px solid rgba(255,255,250,.1)"}}>
<span style={{width:"7px",height:"7px",borderRadius:"50%",background:"rgba(255,255,250,.2)",flexShrink:"0"}}></span>
<span style={{width:"7px",height:"7px",borderRadius:"50%",background:"rgba(255,255,250,.2)",flexShrink:"0"}}></span>
<span style={{width:"7px",height:"7px",borderRadius:"50%",background:"rgba(255,255,250,.2)",flexShrink:"0"}}></span>
<span style={{marginLeft:"6px",flex:"1",background:"rgba(255,255,250,.05)",borderRadius:"999px",padding:"3px 10px",font:"500 8.5px/1.3 'JetBrains Mono',monospace",letterSpacing:".06em",color:"rgba(255,255,250,.4)",textAlign:"center",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>yourbrand.com</span>
</div>
<div aria-hidden="true" style={{position:"relative",flex:"1",minHeight:"0",containerType:"size",overflow:"hidden",background:"#D3131B"}}>
<div style={{position:"absolute",top:"4.5cqh",left:"3cqw",right:"3cqw",bottom:"0",background:"#F4F4F1",color:"#141110",overflow:"hidden"}}>
<div style={{position:"absolute",top:"4.5cqh",left:"3cqw",right:"3cqw",display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:"2cqw",font:"500 clamp(5px,1.45cqw,10px)/1.35 Archivo,sans-serif",letterSpacing:".03em",textTransform:"uppercase"}}>
<span style={{display:"flex",flexDirection:"column",whiteSpace:"nowrap"}}><span>Creative agency</span><span>— Est. 2020</span></span>
<svg viewBox="0 0 24 24" style={{width:"4.2cqw",height:"4.2cqw",flexShrink:"0",marginTop:"-.4cqw"}} fill="none" aria-hidden="true"><circle cx="12" cy="12" r="8" stroke="#D3131B" strokeWidth="5" strokeDasharray="2.4 1.8"></circle></svg>
<span style={{display:"flex",flexDirection:"column",whiteSpace:"nowrap"}}><span>Home</span><span style={{color:"rgba(20,17,16,.42)"}}>About us</span><span style={{color:"rgba(20,17,16,.42)"}}>Portfolio</span><span style={{color:"rgba(20,17,16,.42)"}}>Contact</span></span>
<span style={{display:"flex",flexDirection:"column",whiteSpace:"nowrap"}}><span>11:33 AM</span><span style={{color:"rgba(20,17,16,.42)"}}>(GMT+7)</span></span>
<span style={{display:"flex",flexDirection:"column",whiteSpace:"nowrap",textAlign:"right"}}><span>Available for project</span><span style={{color:"rgba(20,17,16,.42)"}}>Early Nov 2026</span></span>
</div>
<p style={{position:"absolute",left:"3cqw",top:"30cqh",width:"20cqw",margin:"0",font:"500 clamp(5px,1.45cqw,10px)/1.35 Archivo,sans-serif",letterSpacing:".03em",textTransform:"uppercase",lineHeight:"1.45"}}>We are a creative agency helping modern brands grow through strategy, identity, and digital experiences.</p>
<span style={{position:"absolute",left:"0",right:"0",top:"52cqh",height:"1px",background:"rgba(20,17,16,.14)",display:"block"}}></span>
<span style={{position:"absolute",left:"8cqw",bottom:"-2cqw",font:"900 min(24cqw,56cqh)/1 Archivo,sans-serif",letterSpacing:"-.04em",color:"#D3131B",whiteSpace:"nowrap"}}>MODO</span>
<div style={{position:"absolute",right:"3cqw",top:"24cqh",width:"22cqw",display:"flex",flexDirection:"column",gap:".8cqw"}}>
<span style={{display:"flex",justifyContent:"space-between",font:"500 clamp(4px,1.2cqw,8px)/1.35 Archivo,sans-serif",letterSpacing:".03em",textTransform:"uppercase"}}><span>Creative agency</span><span>(Est 2020)</span></span>
<img src="/uploads/pasted-1787345588263-0.png" alt="" decoding="async" loading="lazy" style={{width:"100%",height:"min(22cqw,34cqh)",objectFit:"cover",objectPosition:"50% 42%",filter:"grayscale(1) contrast(1.15) brightness(.82)",display:"block"}} />
</div>
<div style={{position:"absolute",left:"27cqw",top:"46cqh",bottom:"0",width:"21cqw",display:"flex",flexDirection:"column",gap:".7cqw"}}>
<span style={{display:"flex",justifyContent:"space-between",font:"500 clamp(4px,1.2cqw,8px)/1.35 Archivo,sans-serif",letterSpacing:".03em"}}><span>{"/**"}</span><span>(/021)</span></span>
<img src="/uploads/pasted-1787345297037-0.png" alt="" decoding="async" loading="lazy" style={{width:"100%",flex:"1",minHeight:"0",objectFit:"cover",objectPosition:"88% 18%",filter:"grayscale(1) contrast(1.2) brightness(.9)",display:"block"}} />
</div>
<div data-bw-mini-ticker="" style={{position:"absolute",left:"0",right:"0",bottom:"0",height:"max(12px,7cqh)",overflow:"hidden",background:"#D3131B",display:"flex",alignItems:"center"}}>
<div style={{display:"flex",alignItems:"center",gap:"6cqw",whiteSpace:"nowrap",width:"max-content",paddingRight:"6cqw",font:"500 clamp(5px,1.45cqw,10px)/1 Archivo,sans-serif",letterSpacing:".03em",textTransform:"uppercase",color:"#F4F4F1",animation:"bwMarquee 22s linear infinite"}}>
<span style={{flexShrink:"0"}}>LET&apos;S BUILD SOMETHING GREAT.</span><span style={{flexShrink:"0"}}>LET&apos;S BUILD SOMETHING GREAT.</span><span style={{flexShrink:"0"}}>LET&apos;S BUILD SOMETHING GREAT.</span><span style={{flexShrink:"0"}}>LET&apos;S BUILD SOMETHING GREAT.</span><span style={{flexShrink:"0"}}>LET&apos;S BUILD SOMETHING GREAT.</span><span style={{flexShrink:"0"}}>LET&apos;S BUILD SOMETHING GREAT.</span><span style={{flexShrink:"0"}}>LET&apos;S BUILD SOMETHING GREAT.</span><span style={{flexShrink:"0"}}>LET&apos;S BUILD SOMETHING GREAT.</span><span style={{flexShrink:"0"}}>LET&apos;S BUILD SOMETHING GREAT.</span><span style={{flexShrink:"0"}}>LET&apos;S BUILD SOMETHING GREAT.</span>
</div>
</div>
</div>
</div>
</div>
</div>
<div style={{display:"flex",flexDirection:"column",gap:"16px"}}>
<div style={{border:"1px solid rgba(255,255,250,.14)",borderRadius:"14px",background:"linear-gradient(150deg,rgba(255,255,250,.08),rgba(255,255,250,.03))",padding:"24px",display:"flex",flexDirection:"column",gap:"22px",flex:"1"}}>
<div style={{display:"flex",alignItems:"center",gap:"14px"}}>
<span style={{width:"44px",height:"44px",borderRadius:"12px",border:"1px solid rgba(255,255,250,.16)",background:"rgba(255,255,250,.06)",display:"grid",placeItems:"center",flexShrink:"0"}}>
<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E6AF2E" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true"><circle cx="12" cy="12" r="8.5"></circle><circle cx="12" cy="12" r="3.5"></circle><path d="M12 1.5v3M12 19.5v3M1.5 12h3M19.5 12h3"></path></svg>
</span>
<span style={{display:"flex",flexDirection:"column",gap:"4px"}}>
<span style={{fontWeight:"800",fontSize:"32px",letterSpacing:"-.03em",lineHeight:"1",fontVariantNumeric:"tabular-nums"}}>38 sites</span>
<span style={{fontSize:"13px",fontWeight:"500",color:"rgba(255,255,250,.6)"}}>Shipped since 2017</span>
</span>
</div>
<div style={{display:"flex",flexDirection:"column",gap:"10px"}}>
<div style={{display:"flex",justifyContent:"space-between",alignItems:"baseline",gap:"12px",fontSize:"13px",fontWeight:"500"}}>
<span style={{color:"rgba(255,255,250,.6)"}}>Launched on the first date given</span><span style={{fontVariantNumeric:"tabular-nums"}}>94%</span>
</div>
<div style={{height:"6px",borderRadius:"999px",background:"rgba(255,255,250,.12)",overflow:"hidden"}}>
<span style={{display:"block",height:"100%",borderRadius:"999px",background:"linear-gradient(90deg,#E6AF2E,#C84A1F)",transformOrigin:"left",transition:"transform 1.4s cubic-bezier(.2,.7,.2,1)",transform:`scaleX(${barScale})`}}></span>
</div>
</div>
<div style={{height:"1px",background:"rgba(255,255,250,.14)"}}></div>
<div data-bw-stack="" style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"12px",textAlign:"center"}}>
<span style={{display:"flex",flexDirection:"column",gap:"7px"}}>
<span style={{fontWeight:"800",fontSize:"22px",lineHeight:"1",letterSpacing:"-.03em",fontVariantNumeric:"tabular-nums"}}>{shipCount}</span>
<span style={{font:"500 10px/1.4 'JetBrains Mono',monospace",letterSpacing:".14em",textTransform:"uppercase",color:"rgba(255,255,250,.55)"}}>Median build</span>
</span>
<span style={{display:"flex",flexDirection:"column",gap:"7px",borderLeft:"1px solid rgba(255,255,250,.14)",borderRight:"1px solid rgba(255,255,250,.14)"}}>
<span style={{fontWeight:"800",fontSize:"22px",lineHeight:"1",letterSpacing:"-.03em",fontVariantNumeric:"tabular-nums"}}>0.9s</span>
<span style={{font:"500 10px/1.4 'JetBrains Mono',monospace",letterSpacing:".14em",textTransform:"uppercase",color:"rgba(255,255,250,.55)"}}>Median LCP</span>
</span>
<span style={{display:"flex",flexDirection:"column",gap:"7px"}}>
<span style={{fontWeight:"800",fontSize:"22px",lineHeight:"1",letterSpacing:"-.03em",fontVariantNumeric:"tabular-nums"}}>100</span>
<span style={{font:"500 10px/1.4 'JetBrains Mono',monospace",letterSpacing:".14em",textTransform:"uppercase",color:"rgba(255,255,250,.55)"}}>A11y score</span>
</span>
</div>
<div style={{display:"flex",flexWrap:"wrap",gap:"8px",marginTop:"auto"}}>
<span style={{display:"inline-flex",alignItems:"center",gap:"8px",border:"1px solid rgba(255,255,250,.16)",borderRadius:"999px",padding:"7px 12px",font:"500 10px/1 'JetBrains Mono',monospace",letterSpacing:".14em",textTransform:"uppercase",color:"rgba(255,255,250,.85)"}}>
<span style={{width:"6px",height:"6px",borderRadius:"50%",background:"#E6AF2E",animation:"bwBlink 1.4s steps(1,end) infinite",display:"block"}}></span>Two Q4 slots open</span>
<span style={{display:"inline-flex",alignItems:"center",gap:"8px",border:"1px solid rgba(255,255,250,.16)",borderRadius:"999px",padding:"7px 12px",font:"500 10px/1 'JetBrains Mono',monospace",letterSpacing:".14em",textTransform:"uppercase",color:"rgba(255,255,250,.85)"}}>Senior team only</span>
</div>
</div>
<div style={{border:"1px solid rgba(255,255,250,.14)",borderRadius:"14px",background:"linear-gradient(150deg,rgba(255,255,250,.08),rgba(255,255,250,.03))",overflow:"hidden",padding:"24px 0 22px"}}>
<span style={{display:"block",padding:"0 24px 18px",font:"500 10px/1 'JetBrains Mono',monospace",letterSpacing:".2em",textTransform:"uppercase",color:"#E6AF2E"}}>// Built for</span>
<div style={{display:"flex",overflow:"hidden",maskImage:"linear-gradient(to right,transparent,#000 16%,#000 84%,transparent)",WebkitMaskImage:"linear-gradient(to right,transparent,#000 16%,#000 84%,transparent)"}}>
<div style={{display:"flex",alignItems:"center",gap:"34px",whiteSpace:"nowrap",paddingRight:"34px",animation:"bwMarquee 32s linear infinite"}}>
<span style={{fontWeight:"800",fontSize:"18px",letterSpacing:"-.03em",color:"rgba(255,255,250,.62)"}}>Northbeam</span><span style={{color:"rgba(255,255,250,.3)"}}>·</span><span style={{fontWeight:"800",fontSize:"18px",letterSpacing:"-.03em",color:"rgba(255,255,250,.62)"}}>Halcyon Health</span><span style={{color:"rgba(255,255,250,.3)"}}>·</span><span style={{fontWeight:"800",fontSize:"18px",letterSpacing:"-.03em",color:"rgba(255,255,250,.62)"}}>Vector Freight</span><span style={{color:"rgba(255,255,250,.3)"}}>·</span><span style={{fontWeight:"800",fontSize:"18px",letterSpacing:"-.03em",color:"rgba(255,255,250,.62)"}}>Kestrel Data</span><span style={{color:"rgba(255,255,250,.3)"}}>·</span><span style={{fontWeight:"800",fontSize:"18px",letterSpacing:"-.03em",color:"rgba(255,255,250,.62)"}}>Orbit Payments</span><span style={{color:"rgba(255,255,250,.3)"}}>·</span><span style={{fontWeight:"800",fontSize:"18px",letterSpacing:"-.03em",color:"rgba(255,255,250,.62)"}}>Fielding Labs</span><span style={{color:"rgba(255,255,250,.3)"}}>·</span>
</div>
<div style={{display:"flex",alignItems:"center",gap:"34px",whiteSpace:"nowrap",paddingRight:"34px",animation:"bwMarquee 32s linear infinite"}} aria-hidden="true">
<span style={{fontWeight:"800",fontSize:"18px",letterSpacing:"-.03em",color:"rgba(255,255,250,.62)"}}>Northbeam</span><span style={{color:"rgba(255,255,250,.3)"}}>·</span><span style={{fontWeight:"800",fontSize:"18px",letterSpacing:"-.03em",color:"rgba(255,255,250,.62)"}}>Halcyon Health</span><span style={{color:"rgba(255,255,250,.3)"}}>·</span><span style={{fontWeight:"800",fontSize:"18px",letterSpacing:"-.03em",color:"rgba(255,255,250,.62)"}}>Vector Freight</span><span style={{color:"rgba(255,255,250,.3)"}}>·</span><span style={{fontWeight:"800",fontSize:"18px",letterSpacing:"-.03em",color:"rgba(255,255,250,.62)"}}>Kestrel Data</span><span style={{color:"rgba(255,255,250,.3)"}}>·</span><span style={{fontWeight:"800",fontSize:"18px",letterSpacing:"-.03em",color:"rgba(255,255,250,.62)"}}>Orbit Payments</span><span style={{color:"rgba(255,255,250,.3)"}}>·</span><span style={{fontWeight:"800",fontSize:"18px",letterSpacing:"-.03em",color:"rgba(255,255,250,.62)"}}>Fielding Labs</span><span style={{color:"rgba(255,255,250,.3)"}}>·</span>
</div>
</div>
</div>
</div>
</div>
<span style={{font:"500 10px/1 'JetBrains Mono',monospace",letterSpacing:".16em",textTransform:"uppercase",opacity:".42"}}>Fig. 01 — Northbeam site, 2026</span>
</div>
</section>
<section style={{marginTop:"120px",backgroundColor:"#080705",backgroundImage:"url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2790%27 height=%2790%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.85%27 numOctaves=%273%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27 opacity=%270.4%27/%3E%3C/svg%3E')",backgroundSize:"90px 90px",backgroundBlendMode:"overlay",color:"#FFFFFA",padding:"110px 0"}}>
<div data-bw-pad="" style={{maxWidth:"1440px",margin:"0 auto",padding:"0 40px",display:"flex",flexDirection:"column",gap:"56px"}}>
<div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-end",gap:"32px",flexWrap:"wrap"}}>
<h2 style={{margin:"0",maxWidth:"20ch",fontWeight:"800",fontSize:"clamp(32px,4.2vw,64px)",lineHeight:".94",letterSpacing:"-.04em"}}>How it runs. Ten weeks, three gates.</h2>
<span style={{font:"500 11px/1 'JetBrains Mono',monospace",letterSpacing:".14em",textTransform:"uppercase",opacity:".5"}}>No discovery theatre</span>
</div>
<div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))",gap:"28px"}}>
<div style={{display:"flex",flexDirection:"column",gap:"12px",borderTop:"1px solid rgba(255,255,250,.24)",paddingTop:"22px"}}>
<span style={{font:"500 10px/1 'JetBrains Mono',monospace",letterSpacing:".2em",textTransform:"uppercase",color:"#E6AF2E"}}>/ Week 1–2</span>
<span style={{fontWeight:"800",fontSize:"24px",letterSpacing:"-.03em"}}>Map the sale</span>
<span style={{fontSize:"15px",lineHeight:"1.5",fontWeight:"500",opacity:".7",textWrap:"pretty"}}>We read your pipeline, not your old site. Every page earns a job in the sale or it does not get built.</span>
</div>
<div style={{display:"flex",flexDirection:"column",gap:"12px",borderTop:"1px solid rgba(255,255,250,.24)",paddingTop:"22px"}}>
<span style={{font:"500 10px/1 'JetBrains Mono',monospace",letterSpacing:".2em",textTransform:"uppercase",color:"#E6AF2E"}}>/ Week 3–5</span>
<span style={{fontWeight:"800",fontSize:"24px",letterSpacing:"-.03em"}}>Design the spine</span>
<span style={{fontSize:"15px",lineHeight:"1.5",fontWeight:"500",opacity:".7",textWrap:"pretty"}}>Home, service, and case study designed as a system. One review round, one decision, then we build.</span>
</div>
<div style={{display:"flex",flexDirection:"column",gap:"12px",borderTop:"1px solid rgba(255,255,250,.24)",paddingTop:"22px"}}>
<span style={{font:"500 10px/1 'JetBrains Mono',monospace",letterSpacing:".2em",textTransform:"uppercase",color:"#E6AF2E"}}>/ Week 6–10</span>
<span style={{fontWeight:"800",fontSize:"24px",letterSpacing:"-.03em"}}>Build and hand over</span>
<span style={{fontSize:"15px",lineHeight:"1.5",fontWeight:"500",opacity:".7",textWrap:"pretty"}}>Front end, CMS, analytics, and a training session for the person who keeps it alive.</span>
</div>
</div>
</div>
</section>
{showPricing ? (<>
<section style={{padding:"120px 0 0"}}>
<div data-bw-pad="" style={{maxWidth:"1440px",margin:"0 auto",padding:"0 40px",display:"flex",flexDirection:"column",gap:"40px"}}>
<div style={{display:"flex",flexDirection:"column",gap:"16px",maxWidth:"60ch",borderBottom:"1px solid var(--bw-rule)",paddingBottom:"32px"}}>
<span style={{font:"500 11px/1 'JetBrains Mono',monospace",letterSpacing:".14em",textTransform:"uppercase",opacity:".5"}}>// What it costs</span>
<h2 style={{margin:"0",fontWeight:"800",fontSize:"clamp(32px,4vw,56px)",letterSpacing:"-.04em",lineHeight:"1"}}>Five tiers. Fixed fees. Pick your stage.</h2>
<p style={{margin:"0",fontSize:"16px",lineHeight:"1.5",fontWeight:"500",opacity:".7",textWrap:"pretty"}}>All prices in USD. Each tier is a fixed fee — no hourly billing, no scope creep.</p>
</div>
<div style={{display:"flex",alignItems:"center",gap:"14px",flexWrap:"wrap",padding:"18px 24px",border:"1px solid #E6AF2E",borderRadius:"12px",background:"rgba(230,175,46,.08)"}}>
<span style={{background:"#E6AF2E",color:"#080705",borderRadius:"999px",padding:"6px 14px",font:"700 11px/1 'JetBrains Mono',monospace",letterSpacing:".14em",textTransform:"uppercase",whiteSpace:"nowrap"}}>70% Off</span>
<span style={{fontSize:"15px",fontWeight:"600",letterSpacing:"-.01em"}}>30-day launch offer — every tier below is 70% off list price.</span>
<span style={{font:"500 11px/1 'JetBrains Mono',monospace",letterSpacing:".1em",textTransform:"uppercase",opacity:".55"}}>Regular pricing resumes after 30 days</span>
</div>
<div data-bw-stack="" data-bw-tiers="" style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"20px",alignItems:"stretch"}}>
<div style={{display:"flex",flexDirection:"column",gap:"18px",padding:"30px 24px",borderRadius:"16px",border:"1px solid var(--bw-glass-bd)",background:"var(--bw-glass)"}}>
<span style={{font:"500 10px/1 'JetBrains Mono',monospace",letterSpacing:".2em",textTransform:"uppercase",color:"var(--bw-accent)"}}>/ 01</span>
<div style={{display:"flex",flexDirection:"column",gap:"8px"}}>
<span style={{fontWeight:"800",fontSize:"30px",letterSpacing:"-.03em"}}>Launch</span>
<div style={{display:"flex",flexDirection:"column",gap:"6px"}}><div style={{display:"flex",alignItems:"center",gap:"8px",flexWrap:"wrap"}}><span style={{fontSize:"15px",fontWeight:"600",opacity:".4",textDecoration:"line-through"}}>$1,663</span><span style={{background:"#E6AF2E",color:"#080705",borderRadius:"999px",padding:"3px 9px",font:"700 9px/1 'JetBrains Mono',monospace",letterSpacing:".1em",textTransform:"uppercase"}}>70% off</span></div><span style={{fontWeight:"800",fontSize:"32px",letterSpacing:"-.03em",lineHeight:"1.05",whiteSpace:"nowrap"}}>$499</span><span style={{fontSize:"13px",fontWeight:"500",opacity:".5",letterSpacing:"0",marginTop:"1px"}}>/ project</span></div>
</div>
<div style={{height:"1px",background:"var(--bw-rule)"}}></div>
<div style={{flex:"1",display:"flex",flexDirection:"column",gap:"10px"}}>
<span style={{display:"flex",gap:"10px",alignItems:"flex-start",fontSize:"14px",lineHeight:"1.4",fontWeight:"500",opacity:".72"}}><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{flexShrink:"0",marginTop:"2px"}}><circle cx="12" cy="12" r="9.5"></circle><path d="M7.5 12.5l3 3 6-6.5"></path></svg>Single-page site, mobile-first</span>
<span style={{display:"flex",gap:"10px",alignItems:"flex-start",fontSize:"14px",lineHeight:"1.4",fontWeight:"500",opacity:".72"}}><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{flexShrink:"0",marginTop:"2px"}}><circle cx="12" cy="12" r="9.5"></circle><path d="M7.5 12.5l3 3 6-6.5"></path></svg>Domain, DNS + business email setup</span>
<span style={{display:"flex",gap:"10px",alignItems:"flex-start",fontSize:"14px",lineHeight:"1.4",fontWeight:"500",opacity:".72"}}><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{flexShrink:"0",marginTop:"2px"}}><circle cx="12" cy="12" r="9.5"></circle><path d="M7.5 12.5l3 3 6-6.5"></path></svg>Contact form + WhatsApp capture</span>
<span style={{display:"flex",gap:"10px",alignItems:"flex-start",fontSize:"14px",lineHeight:"1.4",fontWeight:"500",opacity:".72"}}><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{flexShrink:"0",marginTop:"2px"}}><circle cx="12" cy="12" r="9.5"></circle><path d="M7.5 12.5l3 3 6-6.5"></path></svg>GA4 + Meta pixel installed</span>
<span style={{display:"flex",gap:"10px",alignItems:"flex-start",fontSize:"14px",lineHeight:"1.4",fontWeight:"500",opacity:".72"}}><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{flexShrink:"0",marginTop:"2px"}}><circle cx="12" cy="12" r="9.5"></circle><path d="M7.5 12.5l3 3 6-6.5"></path></svg>One revision round</span>
</div>
<div style={{marginTop:"auto",display:"flex",flexDirection:"column",gap:"12px"}}><span style={{minHeight:"2.8em",display:"flex",alignItems:"flex-end",font:"600 12px/1.4 'JetBrains Mono',monospace",letterSpacing:".06em",color:"var(--bw-accent)"}}>Live in 7 days</span><a className="website-p15 website-p16 website-p17" href="/contact" style={{display:"inline-flex",alignItems:"center",justifyContent:"center",gap:"10px",padding:"14px 20px",borderRadius:"999px",border:"1px solid var(--bw-fg)",fontSize:"14px",fontWeight:"600",transition:"transform 140ms cubic-bezier(.2,.7,.2,1),background-color 200ms cubic-bezier(.2,.7,.2,1),border-color 200ms cubic-bezier(.2,.7,.2,1),color 200ms cubic-bezier(.2,.7,.2,1),opacity 200ms cubic-bezier(.2,.7,.2,1)"}}>Choose Launch</a></div>
</div>
<div style={{display:"flex",flexDirection:"column",gap:"18px",padding:"30px 24px",borderRadius:"16px",border:"1px solid var(--bw-glass-bd)",background:"var(--bw-glass)"}}>
<span style={{font:"500 10px/1 'JetBrains Mono',monospace",letterSpacing:".2em",textTransform:"uppercase",color:"var(--bw-accent)"}}>/ 02</span>
<div style={{display:"flex",flexDirection:"column",gap:"8px"}}>
<span style={{fontWeight:"800",fontSize:"30px",letterSpacing:"-.03em"}}>Establish</span>
<div style={{display:"flex",flexDirection:"column",gap:"6px"}}><div style={{display:"flex",alignItems:"center",gap:"8px",flexWrap:"wrap"}}><span style={{fontSize:"15px",fontWeight:"600",opacity:".4",textDecoration:"line-through"}}>$3,997</span><span style={{background:"#E6AF2E",color:"#080705",borderRadius:"999px",padding:"3px 9px",font:"700 9px/1 'JetBrains Mono',monospace",letterSpacing:".1em",textTransform:"uppercase"}}>70% off</span></div><span style={{fontWeight:"800",fontSize:"32px",letterSpacing:"-.03em",lineHeight:"1.05",whiteSpace:"nowrap"}}>$1,199</span><span style={{fontSize:"13px",fontWeight:"500",opacity:".5",letterSpacing:"0",marginTop:"1px"}}>/ project</span></div>
</div>
<div style={{height:"1px",background:"var(--bw-rule)"}}></div>
<div style={{flex:"1",display:"flex",flexDirection:"column",gap:"10px"}}>
<span style={{display:"flex",gap:"10px",alignItems:"flex-start",fontSize:"14px",lineHeight:"1.4",fontWeight:"500",opacity:".72"}}><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{flexShrink:"0",marginTop:"2px"}}><circle cx="12" cy="12" r="9.5"></circle><path d="M7.5 12.5l3 3 6-6.5"></path></svg>Everything in Launch</span>
<span style={{display:"flex",gap:"10px",alignItems:"flex-start",fontSize:"14px",lineHeight:"1.4",fontWeight:"500",opacity:".72"}}><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{flexShrink:"0",marginTop:"2px"}}><circle cx="12" cy="12" r="9.5"></circle><path d="M7.5 12.5l3 3 6-6.5"></path></svg>5-page website (fixed scope)</span>
<span style={{display:"flex",gap:"10px",alignItems:"flex-start",fontSize:"14px",lineHeight:"1.4",fontWeight:"500",opacity:".72"}}><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{flexShrink:"0",marginTop:"2px"}}><circle cx="12" cy="12" r="9.5"></circle><path d="M7.5 12.5l3 3 6-6.5"></path></svg>Logo suite — primary, secondary, icon, mono</span>
<span style={{display:"flex",gap:"10px",alignItems:"flex-start",fontSize:"14px",lineHeight:"1.4",fontWeight:"500",opacity:".72"}}><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{flexShrink:"0",marginTop:"2px"}}><circle cx="12" cy="12" r="9.5"></circle><path d="M7.5 12.5l3 3 6-6.5"></path></svg>Colour + typography system</span>
<span style={{display:"flex",gap:"10px",alignItems:"flex-start",fontSize:"14px",lineHeight:"1.4",fontWeight:"500",opacity:".72"}}><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{flexShrink:"0",marginTop:"2px"}}><circle cx="12" cy="12" r="9.5"></circle><path d="M7.5 12.5l3 3 6-6.5"></path></svg>One-page brand usage sheet</span>
<span style={{display:"flex",gap:"10px",alignItems:"flex-start",fontSize:"14px",lineHeight:"1.4",fontWeight:"500",opacity:".72"}}><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{flexShrink:"0",marginTop:"2px"}}><circle cx="12" cy="12" r="9.5"></circle><path d="M7.5 12.5l3 3 6-6.5"></path></svg>Google Business Profile + on-page SEO</span>
<span style={{display:"flex",gap:"10px",alignItems:"flex-start",fontSize:"14px",lineHeight:"1.4",fontWeight:"500",opacity:".72"}}><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{flexShrink:"0",marginTop:"2px"}}><circle cx="12" cy="12" r="9.5"></circle><path d="M7.5 12.5l3 3 6-6.5"></path></svg>Two revision rounds</span>
</div>
<div style={{marginTop:"auto",display:"flex",flexDirection:"column",gap:"12px"}}><span style={{minHeight:"2.8em",display:"flex",alignItems:"flex-end",font:"600 12px/1.4 'JetBrains Mono',monospace",letterSpacing:".06em",color:"var(--bw-accent)"}}>Live in 14 days</span><a className="website-p18 website-p19 website-p20" href="/contact" style={{display:"inline-flex",alignItems:"center",justifyContent:"center",gap:"10px",padding:"14px 20px",borderRadius:"999px",border:"1px solid var(--bw-fg)",fontSize:"14px",fontWeight:"600",transition:"transform 140ms cubic-bezier(.2,.7,.2,1),background-color 200ms cubic-bezier(.2,.7,.2,1),border-color 200ms cubic-bezier(.2,.7,.2,1),color 200ms cubic-bezier(.2,.7,.2,1),opacity 200ms cubic-bezier(.2,.7,.2,1)"}}>Choose Establish</a></div>
</div>
<div style={{display:"flex",flexDirection:"column",gap:"18px",padding:"30px 24px",borderRadius:"16px",border:"1px solid var(--bw-glass-bd)",background:"var(--bw-glass)"}}>
<span style={{font:"500 10px/1 'JetBrains Mono',monospace",letterSpacing:".2em",textTransform:"uppercase",color:"var(--bw-accent)"}}>/ 03</span>
<div style={{display:"flex",flexDirection:"column",gap:"8px"}}>
<span style={{fontWeight:"800",fontSize:"30px",letterSpacing:"-.03em"}}>Growth</span>
<div style={{display:"flex",flexDirection:"column",gap:"6px"}}><div style={{display:"flex",alignItems:"center",gap:"8px",flexWrap:"wrap"}}><span style={{fontSize:"15px",fontWeight:"600",opacity:".4",textDecoration:"line-through"}}>$8,330</span><span style={{background:"#E6AF2E",color:"#080705",borderRadius:"999px",padding:"3px 9px",font:"700 9px/1 'JetBrains Mono',monospace",letterSpacing:".1em",textTransform:"uppercase"}}>70% off</span></div><span style={{fontWeight:"800",fontSize:"32px",letterSpacing:"-.03em",lineHeight:"1.05",whiteSpace:"nowrap"}}>$2,499</span><span style={{fontSize:"13px",fontWeight:"500",opacity:".5",letterSpacing:"0",marginTop:"1px"}}>/ project</span></div>
</div>
<div style={{height:"1px",background:"var(--bw-rule)"}}></div>
<div style={{flex:"1",display:"flex",flexDirection:"column",gap:"10px"}}>
<span style={{display:"flex",gap:"10px",alignItems:"flex-start",fontSize:"14px",lineHeight:"1.4",fontWeight:"500",opacity:".72"}}><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{flexShrink:"0",marginTop:"2px"}}><circle cx="12" cy="12" r="9.5"></circle><path d="M7.5 12.5l3 3 6-6.5"></path></svg>Everything in Establish</span>
<span style={{display:"flex",gap:"10px",alignItems:"flex-start",fontSize:"14px",lineHeight:"1.4",fontWeight:"500",opacity:".72"}}><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{flexShrink:"0",marginTop:"2px"}}><circle cx="12" cy="12" r="9.5"></circle><path d="M7.5 12.5l3 3 6-6.5"></path></svg>10–12 page site on a CMS you can edit</span>
<span style={{display:"flex",gap:"10px",alignItems:"flex-start",fontSize:"14px",lineHeight:"1.4",fontWeight:"500",opacity:".72"}}><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{flexShrink:"0",marginTop:"2px"}}><circle cx="12" cy="12" r="9.5"></circle><path d="M7.5 12.5l3 3 6-6.5"></path></svg>Full brand guidelines document</span>
<span style={{display:"flex",gap:"10px",alignItems:"flex-start",fontSize:"14px",lineHeight:"1.4",fontWeight:"500",opacity:".72"}}><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{flexShrink:"0",marginTop:"2px"}}><circle cx="12" cy="12" r="9.5"></circle><path d="M7.5 12.5l3 3 6-6.5"></path></svg>Collateral + social templates</span>
<span style={{display:"flex",gap:"10px",alignItems:"flex-start",fontSize:"14px",lineHeight:"1.4",fontWeight:"500",opacity:".72"}}><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{flexShrink:"0",marginTop:"2px"}}><circle cx="12" cy="12" r="9.5"></circle><path d="M7.5 12.5l3 3 6-6.5"></path></svg>Structured on-page SEO</span>
<span style={{display:"flex",gap:"10px",alignItems:"flex-start",fontSize:"14px",lineHeight:"1.4",fontWeight:"500",opacity:".72"}}><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{flexShrink:"0",marginTop:"2px"}}><circle cx="12" cy="12" r="9.5"></circle><path d="M7.5 12.5l3 3 6-6.5"></path></svg>Two campaign landing pages</span>
<span style={{display:"flex",gap:"10px",alignItems:"flex-start",fontSize:"14px",lineHeight:"1.4",fontWeight:"500",opacity:".72"}}><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{flexShrink:"0",marginTop:"2px"}}><circle cx="12" cy="12" r="9.5"></circle><path d="M7.5 12.5l3 3 6-6.5"></path></svg>Lead routing with Lead Detective scoring</span>
</div>
<div style={{marginTop:"auto",display:"flex",flexDirection:"column",gap:"12px"}}><span style={{minHeight:"2.8em",display:"flex",alignItems:"flex-end",font:"600 12px/1.4 'JetBrains Mono',monospace",letterSpacing:".06em",color:"var(--bw-accent)"}}>3–4 weeks</span><a className="website-p21 website-p22 website-p23" href="/contact" style={{display:"inline-flex",alignItems:"center",justifyContent:"center",gap:"10px",padding:"14px 20px",borderRadius:"999px",border:"1px solid var(--bw-fg)",fontSize:"14px",fontWeight:"600",transition:"transform 140ms cubic-bezier(.2,.7,.2,1),background-color 200ms cubic-bezier(.2,.7,.2,1),border-color 200ms cubic-bezier(.2,.7,.2,1),color 200ms cubic-bezier(.2,.7,.2,1),opacity 200ms cubic-bezier(.2,.7,.2,1)"}}>Choose Growth</a></div>
</div>
<div style={{display:"flex",flexDirection:"column",gap:"18px",padding:"30px 24px",borderRadius:"16px",border:"1px solid var(--bw-glass-bd)",background:"var(--bw-glass)"}}>
<span style={{font:"500 10px/1 'JetBrains Mono',monospace",letterSpacing:".2em",textTransform:"uppercase",color:"var(--bw-accent)"}}>/ 04</span>
<div style={{display:"flex",flexDirection:"column",gap:"8px"}}>
<span style={{fontWeight:"800",fontSize:"30px",letterSpacing:"-.03em"}}>Platform</span>
<div style={{display:"flex",flexDirection:"column",gap:"6px"}}><div style={{display:"flex",alignItems:"center",gap:"8px",flexWrap:"wrap"}}><span style={{fontSize:"15px",fontWeight:"600",opacity:".4",textDecoration:"line-through"}}>from $11,663</span><span style={{background:"#E6AF2E",color:"#080705",borderRadius:"999px",padding:"3px 9px",font:"700 9px/1 'JetBrains Mono',monospace",letterSpacing:".1em",textTransform:"uppercase"}}>70% off</span></div><span style={{fontWeight:"800",fontSize:"32px",letterSpacing:"-.03em",lineHeight:"1.05",whiteSpace:"nowrap"}}>from $3,499</span><span style={{fontSize:"13px",fontWeight:"500",opacity:".5",letterSpacing:"0",marginTop:"1px"}}>/ project</span></div>
</div>
<div style={{height:"1px",background:"var(--bw-rule)"}}></div>
<div style={{flex:"1",display:"flex",flexDirection:"column",gap:"10px"}}>
<span style={{display:"flex",gap:"10px",alignItems:"flex-start",fontSize:"14px",lineHeight:"1.4",fontWeight:"500",opacity:".72"}}><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{flexShrink:"0",marginTop:"2px"}}><circle cx="12" cy="12" r="9.5"></circle><path d="M7.5 12.5l3 3 6-6.5"></path></svg>Custom web app or platform, scoped to your brief</span>
<span style={{display:"flex",gap:"10px",alignItems:"flex-start",fontSize:"14px",lineHeight:"1.4",fontWeight:"500",opacity:".72"}}><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{flexShrink:"0",marginTop:"2px"}}><circle cx="12" cy="12" r="9.5"></circle><path d="M7.5 12.5l3 3 6-6.5"></path></svg>Integrations, dashboards, user accounts</span>
<span style={{display:"flex",gap:"10px",alignItems:"flex-start",fontSize:"14px",lineHeight:"1.4",fontWeight:"500",opacity:".72"}}><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{flexShrink:"0",marginTop:"2px"}}><circle cx="12" cy="12" r="9.5"></circle><path d="M7.5 12.5l3 3 6-6.5"></path></svg>Full brand system</span>
</div>
<div style={{marginTop:"auto",display:"flex",flexDirection:"column",gap:"12px"}}><span style={{minHeight:"2.8em",display:"flex",alignItems:"flex-end",font:"600 12px/1.4 'JetBrains Mono',monospace",letterSpacing:".06em",color:"var(--bw-accent)"}}>Fixed quote after a 20-minute scoping call</span><a className="website-p24 website-p25 website-p26" href="/contact" style={{display:"inline-flex",alignItems:"center",justifyContent:"center",gap:"10px",padding:"14px 20px",borderRadius:"999px",border:"1px solid var(--bw-fg)",fontSize:"14px",fontWeight:"600",transition:"transform 140ms cubic-bezier(.2,.7,.2,1),background-color 200ms cubic-bezier(.2,.7,.2,1),border-color 200ms cubic-bezier(.2,.7,.2,1),color 200ms cubic-bezier(.2,.7,.2,1),opacity 200ms cubic-bezier(.2,.7,.2,1)"}}>Choose Platform</a></div>
</div>
</div>
<div style={{position:"relative",display:"flex",flexDirection:"column",gap:"20px",padding:"36px 32px",borderRadius:"16px",border:"1px solid rgba(230,175,46,.5)",color:"#FFFFFA",backgroundColor:"#080705",backgroundImage:"url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2790%27 height=%2790%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.85%27 numOctaves=%273%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27 opacity=%270.4%27/%3E%3C/svg%3E'),radial-gradient(at 16% 8%,oklch(0.62 0.13 84 / .4) 0%,rgba(8,7,5,0) 58%),radial-gradient(at 92% 96%,oklch(0.48 0.14 34 / .36) 0%,rgba(8,7,5,0) 62%)",backgroundSize:"90px 90px,auto,auto",backgroundBlendMode:"overlay,normal,normal",boxShadow:"0 34px 70px -42px rgba(8,7,5,.75)"}}>
<div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:"24px",flexWrap:"wrap"}}>
<div style={{display:"flex",flexDirection:"column",gap:"8px"}}>
<span style={{font:"500 10px/1 'JetBrains Mono',monospace",letterSpacing:".2em",textTransform:"uppercase",color:"#E6AF2E"}}>/ 05</span>
<span style={{fontWeight:"800",fontSize:"34px",letterSpacing:"-.03em"}}>Scale</span>
<span style={{fontSize:"14px",lineHeight:"1.4",fontWeight:"500",opacity:".75",maxWidth:"44ch"}}>Everything in Platform, plus three months of campaign management.</span>
</div>
<div style={{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:"4px"}}>
<span style={{fontSize:"16px",fontWeight:"600",opacity:".45",textDecoration:"line-through"}}>from $18,330</span>
<div style={{display:"flex",alignItems:"baseline",gap:"10px"}}>
<span style={{fontWeight:"800",fontSize:"34px",letterSpacing:"-.03em",lineHeight:"1",color:"#E6AF2E"}}>from $5,499</span>
<span style={{background:"#E6AF2E",color:"#080705",borderRadius:"999px",padding:"3px 10px",font:"700 10px/1 'JetBrains Mono',monospace",letterSpacing:".1em",textTransform:"uppercase"}}>70% off</span>
</div>
</div>
</div>
<div style={{height:"1px",background:"rgba(255,255,250,.16)"}}></div>
<div data-bw-stack="" style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"24px"}}>
<span style={{font:"500 11px/1.4 'JetBrains Mono',monospace",letterSpacing:".14em",textTransform:"uppercase",color:"#E6AF2E"}}>// Paid social + search setup</span>
<span style={{font:"500 11px/1.4 'JetBrains Mono',monospace",letterSpacing:".14em",textTransform:"uppercase",color:"#E6AF2E"}}>// Ad creative production</span>
<span style={{font:"500 11px/1.4 'JetBrains Mono',monospace",letterSpacing:".14em",textTransform:"uppercase",color:"#E6AF2E"}}>// Monthly performance reporting</span>
</div>
<span style={{fontSize:"14px",lineHeight:"1.5",fontWeight:"500",opacity:".75"}}>After month 3, rolls to a monthly retainer at <span style={{fontWeight:"700",opacity:"1"}}>$625/mo</span> — regular rate, not part of the launch offer.</span>
<span style={{display:"inline-flex",alignSelf:"flex-start",padding:"10px 16px",border:"1px solid rgba(230,175,46,.5)",borderRadius:"8px",font:"500 11px/1 'JetBrains Mono',monospace",letterSpacing:".1em",textTransform:"uppercase",color:"#E6AF2E"}}>// Ad spend billed separately</span>
<a className="website-p27 website-p28 website-p29" data-bw-cta="" href="/contact" style={{alignSelf:"flex-start",marginTop:"4px",display:"inline-flex",alignItems:"center",justifyContent:"center",gap:"10px",padding:"14px 20px",borderRadius:"999px",color:"#FFFFFA",fontSize:"14px",fontWeight:"600",backgroundColor:"#080705",backgroundImage:"url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2790%27 height=%2790%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.85%27 numOctaves=%273%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27 opacity=%270.45%27/%3E%3C/svg%3E') 56%) 58%) 62%);background-size:90px 90px;background-blend-mode:overlay;box-shadow:0 14px 30px -18px rgba(8,7,5,.9),0 1px 0 rgba(255,255,255,.26) inset;transition:transform 140ms cubic-bezier(.2,.7,.2,1),background-color 200ms cubic-bezier(.2,.7,.2,1),border-color 200ms cubic-bezier(.2,.7,.2,1),color 200ms cubic-bezier(.2,.7,.2,1),opacity 200ms cubic-bezier(.2,.7,.2,1)"}}>Choose Scale</a>
</div>
<span style={{font:"500 10px/1.6 'JetBrains Mono',monospace",letterSpacing:".1em",textTransform:"uppercase",opacity:".4"}}>Fixed-fee pricing, confirmed in scoping. Launch pricing valid for 30 days from offer start.</span>
</div>
</section>
</>) : null}
<section style={{padding:"64px 0 96px"}}>
<div data-bw-pad="" style={{maxWidth:"1440px",margin:"0 auto",padding:"0 40px",display:"flex",flexDirection:"column",gap:"24px"}}>
<span style={{font:"500 11px/1 'JetBrains Mono',monospace",letterSpacing:".14em",textTransform:"uppercase",opacity:".5"}}>// Other services</span>
<div style={{display:"flex",gap:"12px",flexWrap:"wrap"}}>
<a className="website-p30 website-p31 website-p32" href="/brand-design" style={{border:"1px solid var(--bw-fg)",backgroundImage:"url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2790%27 height=%2790%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.85%27 numOctaves=%273%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27 opacity=%270.12%27/%3E%3C/svg%3E')",backgroundSize:"90px 90px",borderRadius:"999px",padding:"14px 22px",fontSize:"14px",fontWeight:"600",transition:"transform 140ms cubic-bezier(.2,.7,.2,1),background-color 200ms cubic-bezier(.2,.7,.2,1),border-color 200ms cubic-bezier(.2,.7,.2,1),color 200ms cubic-bezier(.2,.7,.2,1),opacity 200ms cubic-bezier(.2,.7,.2,1)"}}>Brand design</a>
<a className="website-p33 website-p34 website-p35" href="/interactive-assets" style={{border:"1px solid var(--bw-fg)",backgroundImage:"url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2790%27 height=%2790%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.85%27 numOctaves=%273%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27 opacity=%270.12%27/%3E%3C/svg%3E')",backgroundSize:"90px 90px",borderRadius:"999px",padding:"14px 22px",fontSize:"14px",fontWeight:"600",transition:"transform 140ms cubic-bezier(.2,.7,.2,1),background-color 200ms cubic-bezier(.2,.7,.2,1),border-color 200ms cubic-bezier(.2,.7,.2,1),color 200ms cubic-bezier(.2,.7,.2,1),opacity 200ms cubic-bezier(.2,.7,.2,1)"}}>Interactive assets</a>
<a className="website-p36 website-p37 website-p38" href="/b2b-answer-engine" style={{border:"1px solid var(--bw-fg)",backgroundImage:"url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2790%27 height=%2790%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.85%27 numOctaves=%273%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27 opacity=%270.12%27/%3E%3C/svg%3E')",backgroundSize:"90px 90px",borderRadius:"999px",padding:"14px 22px",fontSize:"14px",fontWeight:"600",transition:"transform 140ms cubic-bezier(.2,.7,.2,1),background-color 200ms cubic-bezier(.2,.7,.2,1),border-color 200ms cubic-bezier(.2,.7,.2,1),color 200ms cubic-bezier(.2,.7,.2,1),opacity 200ms cubic-bezier(.2,.7,.2,1)"}}>B2B answer engine placement</a>
<a className="website-p39 website-p40 website-p41" href="/lead-detective" style={{border:"1px solid var(--bw-fg)",backgroundImage:"url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2790%27 height=%2790%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.85%27 numOctaves=%273%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27 opacity=%270.12%27/%3E%3C/svg%3E')",backgroundSize:"90px 90px",borderRadius:"999px",padding:"14px 22px",fontSize:"14px",fontWeight:"600",transition:"transform 140ms cubic-bezier(.2,.7,.2,1),background-color 200ms cubic-bezier(.2,.7,.2,1),border-color 200ms cubic-bezier(.2,.7,.2,1),color 200ms cubic-bezier(.2,.7,.2,1),opacity 200ms cubic-bezier(.2,.7,.2,1)"}}>Lead detective</a>
<a className="website-p42 website-p43 website-p44" href="/mypen" style={{border:"1px solid var(--bw-fg)",backgroundImage:"url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2790%27 height=%2790%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.85%27 numOctaves=%273%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27 opacity=%270.12%27/%3E%3C/svg%3E')",backgroundSize:"90px 90px",borderRadius:"999px",padding:"14px 22px",fontSize:"14px",fontWeight:"600",transition:"transform 140ms cubic-bezier(.2,.7,.2,1),background-color 200ms cubic-bezier(.2,.7,.2,1),border-color 200ms cubic-bezier(.2,.7,.2,1),color 200ms cubic-bezier(.2,.7,.2,1),opacity 200ms cubic-bezier(.2,.7,.2,1)"}}>Mypen</a>
<a className="website-p45 website-p46 website-p47" href="/researchify" style={{border:"1px solid var(--bw-fg)",backgroundImage:"url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2790%27 height=%2790%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.85%27 numOctaves=%273%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27 opacity=%270.12%27/%3E%3C/svg%3E')",backgroundSize:"90px 90px",borderRadius:"999px",padding:"14px 22px",fontSize:"14px",fontWeight:"600",transition:"transform 140ms cubic-bezier(.2,.7,.2,1),background-color 200ms cubic-bezier(.2,.7,.2,1),border-color 200ms cubic-bezier(.2,.7,.2,1),color 200ms cubic-bezier(.2,.7,.2,1),opacity 200ms cubic-bezier(.2,.7,.2,1)"}}>Researchify</a>
<a className="website-p48 website-p49 website-p50" href="/self-serve-buying" style={{border:"1px solid var(--bw-fg)",backgroundImage:"url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2790%27 height=%2790%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.85%27 numOctaves=%273%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27 opacity=%270.12%27/%3E%3C/svg%3E')",backgroundSize:"90px 90px",borderRadius:"999px",padding:"14px 22px",fontSize:"14px",fontWeight:"600",transition:"transform 140ms cubic-bezier(.2,.7,.2,1),background-color 200ms cubic-bezier(.2,.7,.2,1),border-color 200ms cubic-bezier(.2,.7,.2,1),color 200ms cubic-bezier(.2,.7,.2,1),opacity 200ms cubic-bezier(.2,.7,.2,1)"}}>Self-serve buying</a>
</div>
<div style={{display:"flex",justifyContent:"space-between",gap:"24px",flexWrap:"wrap",borderTop:"1px solid var(--bw-rule)",paddingTop:"24px",font:"500 11px/1 'JetBrains Mono',monospace",letterSpacing:".14em",textTransform:"uppercase",opacity:".5"}}>
<span>© 2026 Blackware Labs</span><a className="website-p51 website-p52" href="/">← Back to homepage</a>
</div>
</div>
</section>
</div>
</div>
</>);
}