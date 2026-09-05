"use client";

import "@/styles/pages/interactive.css";
import { useInteractivePageLogic } from "@/generated/interactive.logic";
import { LiveBuildsCarousel } from "@/components/live-builds/live-builds-carousel";
export default function InteractivePage() {
  const v = useInteractivePageLogic();
  const { enter0, enter1, enter2, enter3, leave0, leave1, leave2, leave3, pinO0, pinO1, pinO2, pinO3, pinT0, pinT1, pinT2, pinT3, showPricing, tilt0, tilt1, tilt2, tilt3 } = v;
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
<a className="interactive-p1 interactive-p2" href="/" style={{display:"flex",alignItems:"center",gap:"10px",flexShrink:"0",transition:"transform 140ms cubic-bezier(.2,.7,.2,1),background-color 200ms cubic-bezier(.2,.7,.2,1),border-color 200ms cubic-bezier(.2,.7,.2,1),color 200ms cubic-bezier(.2,.7,.2,1),opacity 200ms cubic-bezier(.2,.7,.2,1)"}}>
<img data-bw-logo="" src="/assets/blackware-logo.svg" alt="Blackware Labs" style={{height:"38px",width:"auto",display:"block",flexShrink:"0"}} />
</a>
<div data-bw-crumb="" style={{display:"flex",alignItems:"center",gap:"14px",font:"500 11px/1 'JetBrains Mono',monospace",letterSpacing:".14em",textTransform:"uppercase",opacity:".5"}}>
<span style={{width:"22px",height:"1px",background:"var(--bw-fg)",display:"block"}}></span><a href="/#services">Service 03 — Interactive assets</a></div>
<div data-bw-head-controls=""><button className="interactive-p3 interactive-p4 interactive-p5" data-bw-theme-toggle="" type="button" aria-label="Switch between day and night" style={{width:"40px",height:"40px",borderRadius:"999px",border:"1px solid var(--bw-toggle-bd)",background:"transparent",color:"var(--bw-fg)",cursor:"pointer",display:"grid",placeItems:"center",flexShrink:"0",padding:"0",transition:"border-color .16s cubic-bezier(.2,.7,.2,1),color .16s cubic-bezier(.2,.7,.2,1),transform 140ms cubic-bezier(.2,.7,.2,1),background-color 200ms cubic-bezier(.2,.7,.2,1),opacity 200ms cubic-bezier(.2,.7,.2,1)"}}>
<svg data-bw-icon="sun" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2.4M12 19.6V22M2 12h2.4M19.6 12H22M4.9 4.9l1.7 1.7M17.4 17.4l1.7 1.7M19.1 4.9l-1.7 1.7M6.6 17.4l-1.7 1.7"></path></svg>
<svg data-bw-icon="moon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20.5 14.6A8.6 8.6 0 0 1 9.4 3.5a8.6 8.6 0 1 0 11.1 11.1Z"></path></svg>
</button>
<a className="interactive-p6 interactive-p7 interactive-p8" data-bw-cta="" href="/contact" style={{display:"inline-flex",alignItems:"center",gap:"10px",backgroundColor:"#080705",backgroundImage:"url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2790%27 height=%2790%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.85%27 numOctaves=%273%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27 opacity=%270.45%27/%3E%3C/svg%3E')",backgroundSize:"90px 90px",backgroundBlendMode:"overlay",color:"#FFFFFA",padding:"12px 20px",borderRadius:"999px",border:"1px solid var(--bw-glass-bd)",boxShadow:"0 14px 30px -18px rgba(8,7,5,.9),0 1px 0 rgba(255,255,255,.3) inset",fontSize:"13px",fontWeight:"600",letterSpacing:"-.01em",flexShrink:"0",transition:"transform 140ms cubic-bezier(.2,.7,.2,1),background-color 200ms cubic-bezier(.2,.7,.2,1),border-color 200ms cubic-bezier(.2,.7,.2,1),color 200ms cubic-bezier(.2,.7,.2,1),opacity 200ms cubic-bezier(.2,.7,.2,1)"}}>
<span style={{width:"6px",height:"6px",borderRadius:"50%",background:"#FFFFFA",animation:"bwBlink 2s steps(1,end) infinite"}}></span>Book a call</a></div>
</div>
</header>
<section data-bw-hero="" style={{padding:"186px 0 0"}}>
<img data-bw-hero-art="" src="/uploads/hero-interactive-assets.webp" alt="" aria-hidden="true" decoding="async" fetchPriority="high" style={{objectPosition:"72% 38%"}} />
<div data-bw-pad="" style={{maxWidth:"1440px",margin:"0 auto",padding:"0 40px",display:"flex",flexDirection:"column",gap:"34px"}}>
<div style={{display:"flex",alignItems:"center",gap:"10px",font:"500 12px/1 'JetBrains Mono',monospace",letterSpacing:".14em",textTransform:"uppercase",animation:"bwRise .7s cubic-bezier(.16,1,.3,1) both"}}>
<span style={{width:"7px",height:"7px",background:"#080705",display:"block"}}></span>// 03 — Interactive assets</div>
<h1 style={{margin:"0",maxWidth:"22ch",fontWeight:"900",letterSpacing:"-.01em",lineHeight:".86",fontSize:"clamp(36px,6.3vw,104px)",textTransform:"uppercase",animation:"bwRise .8s cubic-bezier(.16,1,.3,1) .06s both"}}>Tools prospects actually finish</h1>
<div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-end",gap:"40px",flexWrap:"wrap",animation:"bwRise .8s cubic-bezier(.16,1,.3,1) .12s both"}}>
<p style={{margin:"0",maxWidth:"52ch",fontSize:"18px",lineHeight:"1.5",fontWeight:"500",opacity:".7",textWrap:"pretty"}}>Calculators, configurators, benchmarks, and product tours marketing can actually use — and that hand you a qualified lead at the end.</p>
<div style={{display:"flex",gap:"14px",flexWrap:"wrap",alignItems:"center"}}>
<a className="interactive-p9 interactive-p10 interactive-p11" data-bw-cta="" href="/contact" style={{display:"inline-flex",alignItems:"center",gap:"12px",padding:"18px 28px",borderRadius:"999px",color:"#FFFFFA",fontSize:"15px",fontWeight:"600",letterSpacing:"-.01em",backgroundColor:"#080705",backgroundImage:"url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2790%27 height=%2790%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.85%27 numOctaves=%273%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27 opacity=%270.45%27/%3E%3C/svg%3E') 56%) 58%) 62%);background-size:90px 90px;background-blend-mode:overlay;box-shadow:0 16px 34px -20px rgba(8,7,5,.9),0 1px 0 rgba(255,255,255,.26) inset;transition:transform 140ms cubic-bezier(.2,.7,.2,1),background-color 200ms cubic-bezier(.2,.7,.2,1),border-color 200ms cubic-bezier(.2,.7,.2,1),color 200ms cubic-bezier(.2,.7,.2,1),opacity 200ms cubic-bezier(.2,.7,.2,1)"}}>Start a tool brief<span style={{fontFamily:"'JetBrains Mono',monospace"}}>→</span></a>
<a className="interactive-p12 interactive-p13 interactive-p14" href="#included" style={{border:"1px solid var(--bw-fg)",backgroundImage:"url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2790%27 height=%2790%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.85%27 numOctaves=%273%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27 opacity=%270.12%27/%3E%3C/svg%3E')",backgroundSize:"90px 90px",borderRadius:"999px",padding:"18px 28px",fontSize:"15px",fontWeight:"600",transition:"transform 140ms cubic-bezier(.2,.7,.2,1),background-color 200ms cubic-bezier(.2,.7,.2,1),border-color 200ms cubic-bezier(.2,.7,.2,1),color 200ms cubic-bezier(.2,.7,.2,1),opacity 200ms cubic-bezier(.2,.7,.2,1)"}}>What's included</a>
</div>
</div>
<div style={{display:"flex",gap:"44px",flexWrap:"wrap",borderTop:"1px solid var(--bw-rule)",paddingTop:"22px",font:"500 11px/1.6 'JetBrains Mono',monospace",letterSpacing:".14em",textTransform:"uppercase",opacity:".55"}}>
<span>7 weeks typical</span><span>From $22k</span><span>Senior team only</span><span>Two Q4 2026 slots</span>
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
<span style={{background:"#080705",color:"#E6AF2E",border:"1px solid rgba(230,175,46,.55)",borderRadius:"999px",padding:"7px 14px",font:"500 10px/1 'JetBrains Mono',monospace",letterSpacing:".18em",textTransform:"uppercase",whiteSpace:"nowrap"}}>// roi model</span>
<span style={{width:"1px",height:"54px",background:"linear-gradient(180deg,#E6AF2E,rgba(230,175,46,0))",display:"block"}}></span>
</div>
<span aria-hidden="true" style={{position:"absolute",left:"50%",top:"100%",width:"0",height:"0",transform:"rotateX(70deg)",pointerEvents:"none",opacity:pinO0,transition:"opacity .5s ease",display:"block"}}>
<span style={{position:"absolute",left:"0",top:"0",width:"78px",height:"78px",translate:"-50% -50%",border:"1px solid rgba(230,175,46,.55)",borderRadius:"50%",animation:"bwPing 2.8s cubic-bezier(.2,.7,.2,1) infinite",display:"block"}}></span>
<span style={{position:"absolute",left:"0",top:"0",width:"78px",height:"78px",translate:"-50% -50%",border:"1px solid rgba(230,175,46,.4)",borderRadius:"50%",animation:"bwPing 2.8s cubic-bezier(.2,.7,.2,1) .9s infinite",display:"block"}}></span>
<span style={{position:"absolute",left:"0",top:"0",width:"78px",height:"78px",translate:"-50% -50%",border:"1px solid rgba(230,175,46,.28)",borderRadius:"50%",animation:"bwPing 2.8s cubic-bezier(.2,.7,.2,1) 1.8s infinite",display:"block"}}></span>
</span>
<div style={{position:"relative",display:"flex",flexDirection:"column",gap:"14px",minHeight:"224px",padding:"28px",borderRadius:"14px",border:"1px solid rgba(255,255,250,.16)",color:"#FFFFFA",backgroundColor:"#080705",backgroundImage:"url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2790%27 height=%2790%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.85%27 numOctaves=%273%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27 opacity=%270.42%27/%3E%3C/svg%3E'),radial-gradient(at 20% 10%,oklch(0.62 0.13 84 / .5) 0%,rgba(8,7,5,0) 58%),radial-gradient(at 90% 96%,oklch(0.5 0.14 34 / .45) 0%,rgba(8,7,5,0) 62%)",backgroundSize:"90px 90px,auto,auto",backgroundBlendMode:"overlay,normal,normal",boxShadow:"0 34px 70px -42px rgba(8,7,5,.75),0 1px 0 rgba(255,255,255,.14) inset"}}>
<span style={{font:"500 10px/1 'JetBrains Mono',monospace",letterSpacing:".2em",textTransform:"uppercase",color:"#E6AF2E"}}>/ 01</span>
<span style={{fontWeight:"800",fontSize:"22px",letterSpacing:"-.03em"}}>ROI calculators</span>
<span style={{fontSize:"15px",lineHeight:"1.5",fontWeight:"500",opacity:".72",textWrap:"pretty"}}>One number your buyer needs to defend the purchase internally. Their inputs, your math, a result they can forward.</span>
</div>
</div>
</div>
<div onMouseEnter={enter1} onMouseLeave={leave1} style={{perspective:"1000px",padding:"20px 0 6px",display:"flex",justifyContent:"center"}}>
<div style={{position:"relative",width:"100%",transformStyle:"preserve-3d",transition:"transform .7s cubic-bezier(.16,1,.3,1)",transform:tilt1}}>
<div style={{position:"absolute",left:"50%",bottom:"calc(100% - 4px)",translate:"-50% 0",display:"flex",flexDirection:"column",alignItems:"center",pointerEvents:"none",opacity:pinO1,transform:pinT1,transition:"opacity .45s ease,transform .55s cubic-bezier(.16,1,.3,1)"}}>
<span style={{background:"#080705",color:"#E6AF2E",border:"1px solid rgba(230,175,46,.55)",borderRadius:"999px",padding:"7px 14px",font:"500 10px/1 'JetBrains Mono',monospace",letterSpacing:".18em",textTransform:"uppercase",whiteSpace:"nowrap"}}>// configurator</span>
<span style={{width:"1px",height:"54px",background:"linear-gradient(180deg,#E6AF2E,rgba(230,175,46,0))",display:"block"}}></span>
</div>
<span aria-hidden="true" style={{position:"absolute",left:"50%",top:"100%",width:"0",height:"0",transform:"rotateX(70deg)",pointerEvents:"none",opacity:pinO1,transition:"opacity .5s ease",display:"block"}}>
<span style={{position:"absolute",left:"0",top:"0",width:"78px",height:"78px",translate:"-50% -50%",border:"1px solid rgba(230,175,46,.55)",borderRadius:"50%",animation:"bwPing 2.8s cubic-bezier(.2,.7,.2,1) infinite",display:"block"}}></span>
<span style={{position:"absolute",left:"0",top:"0",width:"78px",height:"78px",translate:"-50% -50%",border:"1px solid rgba(230,175,46,.4)",borderRadius:"50%",animation:"bwPing 2.8s cubic-bezier(.2,.7,.2,1) .9s infinite",display:"block"}}></span>
<span style={{position:"absolute",left:"0",top:"0",width:"78px",height:"78px",translate:"-50% -50%",border:"1px solid rgba(230,175,46,.28)",borderRadius:"50%",animation:"bwPing 2.8s cubic-bezier(.2,.7,.2,1) 1.8s infinite",display:"block"}}></span>
</span>
<div style={{position:"relative",display:"flex",flexDirection:"column",gap:"14px",minHeight:"224px",padding:"28px",borderRadius:"14px",border:"1px solid rgba(255,255,250,.16)",color:"#FFFFFA",backgroundColor:"#080705",backgroundImage:"url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2790%27 height=%2790%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.85%27 numOctaves=%273%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27 opacity=%270.42%27/%3E%3C/svg%3E'),radial-gradient(at 20% 10%,oklch(0.62 0.13 84 / .5) 0%,rgba(8,7,5,0) 58%),radial-gradient(at 90% 96%,oklch(0.5 0.14 34 / .45) 0%,rgba(8,7,5,0) 62%)",backgroundSize:"90px 90px,auto,auto",backgroundBlendMode:"overlay,normal,normal",boxShadow:"0 34px 70px -42px rgba(8,7,5,.75),0 1px 0 rgba(255,255,255,.14) inset"}}>
<span style={{font:"500 10px/1 'JetBrains Mono',monospace",letterSpacing:".2em",textTransform:"uppercase",color:"#E6AF2E"}}>/ 02</span>
<span style={{fontWeight:"800",fontSize:"22px",letterSpacing:"-.03em"}}>Configurators</span>
<span style={{fontSize:"15px",lineHeight:"1.5",fontWeight:"500",opacity:".72",textWrap:"pretty"}}>Let buyers assemble the version they want. What they pick lands in your CRM as intent, not a form fill.</span>
</div>
</div>
</div>
<div onMouseEnter={enter2} onMouseLeave={leave2} style={{perspective:"1000px",padding:"20px 0 6px",display:"flex",justifyContent:"center"}}>
<div style={{position:"relative",width:"100%",transformStyle:"preserve-3d",transition:"transform .7s cubic-bezier(.16,1,.3,1)",transform:tilt2}}>
<div style={{position:"absolute",left:"50%",bottom:"calc(100% - 4px)",translate:"-50% 0",display:"flex",flexDirection:"column",alignItems:"center",pointerEvents:"none",opacity:pinO2,transform:pinT2,transition:"opacity .45s ease,transform .55s cubic-bezier(.16,1,.3,1)"}}>
<span style={{background:"#080705",color:"#E6AF2E",border:"1px solid rgba(230,175,46,.55)",borderRadius:"999px",padding:"7px 14px",font:"500 10px/1 'JetBrains Mono',monospace",letterSpacing:".18em",textTransform:"uppercase",whiteSpace:"nowrap"}}>// product tour</span>
<span style={{width:"1px",height:"54px",background:"linear-gradient(180deg,#E6AF2E,rgba(230,175,46,0))",display:"block"}}></span>
</div>
<span aria-hidden="true" style={{position:"absolute",left:"50%",top:"100%",width:"0",height:"0",transform:"rotateX(70deg)",pointerEvents:"none",opacity:pinO2,transition:"opacity .5s ease",display:"block"}}>
<span style={{position:"absolute",left:"0",top:"0",width:"78px",height:"78px",translate:"-50% -50%",border:"1px solid rgba(230,175,46,.55)",borderRadius:"50%",animation:"bwPing 2.8s cubic-bezier(.2,.7,.2,1) infinite",display:"block"}}></span>
<span style={{position:"absolute",left:"0",top:"0",width:"78px",height:"78px",translate:"-50% -50%",border:"1px solid rgba(230,175,46,.4)",borderRadius:"50%",animation:"bwPing 2.8s cubic-bezier(.2,.7,.2,1) .9s infinite",display:"block"}}></span>
<span style={{position:"absolute",left:"0",top:"0",width:"78px",height:"78px",translate:"-50% -50%",border:"1px solid rgba(230,175,46,.28)",borderRadius:"50%",animation:"bwPing 2.8s cubic-bezier(.2,.7,.2,1) 1.8s infinite",display:"block"}}></span>
</span>
<div style={{position:"relative",display:"flex",flexDirection:"column",gap:"14px",minHeight:"224px",padding:"28px",borderRadius:"14px",border:"1px solid rgba(255,255,250,.16)",color:"#FFFFFA",backgroundColor:"#080705",backgroundImage:"url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2790%27 height=%2790%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.85%27 numOctaves=%273%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27 opacity=%270.42%27/%3E%3C/svg%3E'),radial-gradient(at 20% 10%,oklch(0.62 0.13 84 / .5) 0%,rgba(8,7,5,0) 58%),radial-gradient(at 90% 96%,oklch(0.5 0.14 34 / .45) 0%,rgba(8,7,5,0) 62%)",backgroundSize:"90px 90px,auto,auto",backgroundBlendMode:"overlay,normal,normal",boxShadow:"0 34px 70px -42px rgba(8,7,5,.75),0 1px 0 rgba(255,255,255,.14) inset"}}>
<span style={{font:"500 10px/1 'JetBrains Mono',monospace",letterSpacing:".2em",textTransform:"uppercase",color:"#E6AF2E"}}>/ 03</span>
<span style={{fontWeight:"800",fontSize:"22px",letterSpacing:"-.03em"}}>Product tours</span>
<span style={{fontSize:"15px",lineHeight:"1.5",fontWeight:"500",opacity:".72",textWrap:"pretty"}}>Guided and clickable, no sales seat required. Built from the three moments that win the deal.</span>
</div>
</div>
</div>
<div onMouseEnter={enter3} onMouseLeave={leave3} style={{perspective:"1000px",padding:"20px 0 6px",display:"flex",justifyContent:"center"}}>
<div style={{position:"relative",width:"100%",transformStyle:"preserve-3d",transition:"transform .7s cubic-bezier(.16,1,.3,1)",transform:tilt3}}>
<div style={{position:"absolute",left:"50%",bottom:"calc(100% - 4px)",translate:"-50% 0",display:"flex",flexDirection:"column",alignItems:"center",pointerEvents:"none",opacity:pinO3,transform:pinT3,transition:"opacity .45s ease,transform .55s cubic-bezier(.16,1,.3,1)"}}>
<span style={{background:"#080705",color:"#E6AF2E",border:"1px solid rgba(230,175,46,.55)",borderRadius:"999px",padding:"7px 14px",font:"500 10px/1 'JetBrains Mono',monospace",letterSpacing:".18em",textTransform:"uppercase",whiteSpace:"nowrap"}}>// benchmark</span>
<span style={{width:"1px",height:"54px",background:"linear-gradient(180deg,#E6AF2E,rgba(230,175,46,0))",display:"block"}}></span>
</div>
<span aria-hidden="true" style={{position:"absolute",left:"50%",top:"100%",width:"0",height:"0",transform:"rotateX(70deg)",pointerEvents:"none",opacity:pinO3,transition:"opacity .5s ease",display:"block"}}>
<span style={{position:"absolute",left:"0",top:"0",width:"78px",height:"78px",translate:"-50% -50%",border:"1px solid rgba(230,175,46,.55)",borderRadius:"50%",animation:"bwPing 2.8s cubic-bezier(.2,.7,.2,1) infinite",display:"block"}}></span>
<span style={{position:"absolute",left:"0",top:"0",width:"78px",height:"78px",translate:"-50% -50%",border:"1px solid rgba(230,175,46,.4)",borderRadius:"50%",animation:"bwPing 2.8s cubic-bezier(.2,.7,.2,1) .9s infinite",display:"block"}}></span>
<span style={{position:"absolute",left:"0",top:"0",width:"78px",height:"78px",translate:"-50% -50%",border:"1px solid rgba(230,175,46,.28)",borderRadius:"50%",animation:"bwPing 2.8s cubic-bezier(.2,.7,.2,1) 1.8s infinite",display:"block"}}></span>
</span>
<div style={{position:"relative",display:"flex",flexDirection:"column",gap:"14px",minHeight:"224px",padding:"28px",borderRadius:"14px",border:"1px solid rgba(255,255,250,.16)",color:"#FFFFFA",backgroundColor:"#080705",backgroundImage:"url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2790%27 height=%2790%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.85%27 numOctaves=%273%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27 opacity=%270.42%27/%3E%3C/svg%3E'),radial-gradient(at 20% 10%,oklch(0.62 0.13 84 / .5) 0%,rgba(8,7,5,0) 58%),radial-gradient(at 90% 96%,oklch(0.5 0.14 34 / .45) 0%,rgba(8,7,5,0) 62%)",backgroundSize:"90px 90px,auto,auto",backgroundBlendMode:"overlay,normal,normal",boxShadow:"0 34px 70px -42px rgba(8,7,5,.75),0 1px 0 rgba(255,255,255,.14) inset"}}>
<span style={{font:"500 10px/1 'JetBrains Mono',monospace",letterSpacing:".2em",textTransform:"uppercase",color:"#E6AF2E"}}>/ 04</span>
<span style={{fontWeight:"800",fontSize:"22px",letterSpacing:"-.03em"}}>Benchmark microsites</span>
<span style={{fontSize:"15px",lineHeight:"1.5",fontWeight:"500",opacity:".72",textWrap:"pretty"}}>Turn your data into the reference everyone in the category cites — and links to.</span>
</div>
</div>
</div>
</div>
</div>
</section>
<section style={{padding:"96px 0 0"}}>
<div data-bw-pad="" style={{maxWidth:"1440px",margin:"0 auto",padding:"0 40px",display:"flex",flexDirection:"column",gap:"14px"}}>
<LiveBuildsCarousel />
</div>
</section>
<section style={{marginTop:"120px",backgroundColor:"#080705",backgroundImage:"url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2790%27 height=%2790%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.85%27 numOctaves=%273%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27 opacity=%270.4%27/%3E%3C/svg%3E')",backgroundSize:"90px 90px",backgroundBlendMode:"overlay",color:"#FFFFFA",padding:"110px 0"}}>
<div data-bw-pad="" style={{maxWidth:"1440px",margin:"0 auto",padding:"0 40px",display:"flex",flexDirection:"column",gap:"56px"}}>
<div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-end",gap:"32px",flexWrap:"wrap"}}>
<h2 style={{margin:"0",maxWidth:"20ch",fontWeight:"800",fontSize:"clamp(32px,4.2vw,64px)",lineHeight:".94",letterSpacing:"-.04em"}}>How it runs. Seven weeks, three gates.</h2>
<span style={{font:"500 11px/1 'JetBrains Mono',monospace",letterSpacing:".14em",textTransform:"uppercase",opacity:".5"}}>No discovery theatre</span>
</div>
<div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))",gap:"28px"}}>
<div style={{display:"flex",flexDirection:"column",gap:"12px",borderTop:"1px solid rgba(255,255,250,.24)",paddingTop:"22px"}}>
<span style={{font:"500 10px/1 'JetBrains Mono',monospace",letterSpacing:".2em",textTransform:"uppercase",color:"#E6AF2E"}}>/ Week 1</span>
<span style={{fontWeight:"800",fontSize:"24px",letterSpacing:"-.03em"}}>Pick the question</span>
<span style={{fontSize:"15px",lineHeight:"1.5",fontWeight:"500",opacity:".7",textWrap:"pretty"}}>We choose the one number worth modelling, and check your buyer already has the inputs it needs.</span>
</div>
<div style={{display:"flex",flexDirection:"column",gap:"12px",borderTop:"1px solid rgba(255,255,250,.24)",paddingTop:"22px"}}>
<span style={{font:"500 10px/1 'JetBrains Mono',monospace",letterSpacing:".2em",textTransform:"uppercase",color:"#E6AF2E"}}>/ Week 2–3</span>
<span style={{fontWeight:"800",fontSize:"24px",letterSpacing:"-.03em"}}>Prototype</span>
<span style={{fontSize:"15px",lineHeight:"1.5",fontWeight:"500",opacity:".7",textWrap:"pretty"}}>A working version in week two. Ugly, honest, and tested on five real prospects before any design.</span>
</div>
<div style={{display:"flex",flexDirection:"column",gap:"12px",borderTop:"1px solid rgba(255,255,250,.24)",paddingTop:"22px"}}>
<span style={{font:"500 10px/1 'JetBrains Mono',monospace",letterSpacing:".2em",textTransform:"uppercase",color:"#E6AF2E"}}>/ Week 4–7</span>
<span style={{fontWeight:"800",fontSize:"24px",letterSpacing:"-.03em"}}>Instrument and ship</span>
<span style={{fontSize:"15px",lineHeight:"1.5",fontWeight:"500",opacity:".7",textWrap:"pretty"}}>Design, build, analytics, CRM handoff. You see every drop-off from the first week it is live.</span>
</div>
</div>
</div>
</section>
{showPricing ? (<>
<section style={{padding:"120px 0 0"}}>
<div data-bw-pad="" style={{maxWidth:"1440px",margin:"0 auto",padding:"0 40px",display:"flex",flexDirection:"column",gap:"44px"}}>
<div style={{display:"flex",flexDirection:"column",gap:"16px",maxWidth:"60ch",borderBottom:"1px solid var(--bw-rule)",paddingBottom:"32px"}}>
<span style={{font:"500 11px/1 'JetBrains Mono',monospace",letterSpacing:".14em",textTransform:"uppercase",opacity:".5"}}>// What it costs</span>
<h2 style={{margin:"0",fontWeight:"800",fontSize:"clamp(32px,4vw,56px)",letterSpacing:"-.04em",lineHeight:"1"}}>Three ways in.</h2>
<p style={{margin:"0",fontSize:"16px",lineHeight:"1.5",fontWeight:"500",opacity:".7",textWrap:"pretty"}}>Fixed scope, fixed price. Custom builds are scoped in a brief.</p>
</div>
<div data-bw-stack="" style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"24px"}}>
<div style={{display:"flex",flexDirection:"column",gap:"20px",padding:"32px 28px",borderRadius:"16px",border:"1px solid var(--bw-glass-bd)",background:"var(--bw-glass)"}}>
<span style={{font:"500 10px/1 'JetBrains Mono',monospace",letterSpacing:".2em",textTransform:"uppercase",color:"var(--bw-accent)"}}>/ 01</span>
<div style={{display:"flex",flexDirection:"column",gap:"6px"}}>
<span style={{fontWeight:"800",fontSize:"22px",letterSpacing:"-.02em"}}>Interactive reports</span>
<span style={{fontWeight:"800",fontSize:"34px",letterSpacing:"-.03em",lineHeight:"1"}}>From $700</span>
<span style={{fontSize:"13px",lineHeight:"1.4",fontWeight:"500",opacity:".65"}}>Transform a static report, case study, or document into a scrollable, clickable web experience.</span>
</div>
<div style={{height:"1px",background:"var(--bw-rule)"}}></div>
<div style={{display:"flex",flexDirection:"column",gap:"11px"}}>
<span style={{display:"flex",gap:"10px",alignItems:"flex-start",fontSize:"14px",lineHeight:"1.4",fontWeight:"500",opacity:".72"}}><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{flexShrink:"0",marginTop:"2px"}}><circle cx="12" cy="12" r="9.5"></circle><path d="M7.5 12.5l3 3 6-6.5"></path></svg>Animated data, interactive charts, clickable sections</span>
<span style={{display:"flex",gap:"10px",alignItems:"flex-start",fontSize:"14px",lineHeight:"1.4",fontWeight:"500",opacity:".72"}}><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{flexShrink:"0",marginTop:"2px"}}><circle cx="12" cy="12" r="9.5"></circle><path d="M7.5 12.5l3 3 6-6.5"></path></svg>Embed code delivered, no install required</span>
</div>
<div style={{display:"flex",flexDirection:"column",gap:"14px"}}>
<span style={{font:"500 10px/1 'JetBrains Mono',monospace",letterSpacing:".16em",textTransform:"uppercase",opacity:".5"}}>Delivered in 7 days</span>
<a className="interactive-p29 interactive-p30 interactive-p31" href="/contact" style={{display:"inline-flex",alignItems:"center",justifyContent:"center",gap:"10px",padding:"14px 20px",borderRadius:"999px",border:"1px solid var(--bw-fg)",fontSize:"14px",fontWeight:"600",transition:"transform 140ms cubic-bezier(.2,.7,.2,1),background-color 200ms cubic-bezier(.2,.7,.2,1),border-color 200ms cubic-bezier(.2,.7,.2,1),color 200ms cubic-bezier(.2,.7,.2,1),opacity 200ms cubic-bezier(.2,.7,.2,1)"}}>Choose Interactive reports</a>
</div>
</div>
<div style={{position:"relative",display:"flex",flexDirection:"column",gap:"20px",padding:"32px 28px",borderRadius:"16px",border:"1px solid rgba(230,175,46,.5)",color:"#FFFFFA",backgroundColor:"#080705",backgroundImage:"url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2790%27 height=%2790%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.85%27 numOctaves=%273%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27 opacity=%270.4%27/%3E%3C/svg%3E'),radial-gradient(at 16% 8%,oklch(0.62 0.13 84 / .4) 0%,rgba(8,7,5,0) 58%),radial-gradient(at 92% 96%,oklch(0.48 0.14 34 / .36) 0%,rgba(8,7,5,0) 62%)",backgroundSize:"90px 90px,auto,auto",backgroundBlendMode:"overlay,normal,normal",boxShadow:"0 34px 70px -42px rgba(8,7,5,.75)"}}>
<span style={{position:"absolute",top:"-13px",left:"28px",background:"#E6AF2E",color:"#080705",borderRadius:"999px",padding:"5px 14px",font:"600 10px/1 'JetBrains Mono',monospace",letterSpacing:".14em",textTransform:"uppercase"}}>Most picked</span>
<span style={{font:"500 10px/1 'JetBrains Mono',monospace",letterSpacing:".2em",textTransform:"uppercase",color:"#E6AF2E"}}>/ 02</span>
<div style={{display:"flex",flexDirection:"column",gap:"6px"}}>
<span style={{fontWeight:"800",fontSize:"22px",letterSpacing:"-.02em"}}>Advergame pilot</span>
<span style={{fontWeight:"800",fontSize:"34px",letterSpacing:"-.03em",lineHeight:"1"}}>From $2,500</span>
<span style={{fontSize:"13px",lineHeight:"1.4",fontWeight:"500",opacity:".65"}}>One lightweight branded interactive experience — quiz, casual game, spin mechanic, or interactive calculator.</span>
</div>
<div style={{height:"1px",background:"rgba(255,255,250,.16)"}}></div>
<div style={{display:"flex",flexDirection:"column",gap:"11px"}}>
<span style={{display:"flex",gap:"10px",alignItems:"flex-start",fontSize:"14px",lineHeight:"1.4",fontWeight:"500",opacity:".85"}}><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{flexShrink:"0",marginTop:"2px"}}><circle cx="12" cy="12" r="9.5"></circle><path d="M7.5 12.5l3 3 6-6.5"></path></svg>Custom branded design</span>
<span style={{display:"flex",gap:"10px",alignItems:"flex-start",fontSize:"14px",lineHeight:"1.4",fontWeight:"500",opacity:".85"}}><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{flexShrink:"0",marginTop:"2px"}}><circle cx="12" cy="12" r="9.5"></circle><path d="M7.5 12.5l3 3 6-6.5"></path></svg>Lead capture built in</span>
<span style={{display:"flex",gap:"10px",alignItems:"flex-start",fontSize:"14px",lineHeight:"1.4",fontWeight:"500",opacity:".85"}}><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{flexShrink:"0",marginTop:"2px"}}><circle cx="12" cy="12" r="9.5"></circle><path d="M7.5 12.5l3 3 6-6.5"></path></svg>Embed code delivered, works on any site</span>
</div>
<div style={{display:"flex",flexDirection:"column",gap:"14px"}}>
<span style={{font:"500 10px/1 'JetBrains Mono',monospace",letterSpacing:".16em",textTransform:"uppercase",opacity:".55"}}>Delivered in 3 weeks</span>
<a className="interactive-p32 interactive-p33 interactive-p34" data-bw-cta="" href="/contact" style={{display:"inline-flex",alignItems:"center",justifyContent:"center",gap:"10px",padding:"14px 20px",borderRadius:"999px",color:"#FFFFFA",fontSize:"14px",fontWeight:"600",backgroundColor:"#080705",backgroundImage:"url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2790%27 height=%2790%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.85%27 numOctaves=%273%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27 opacity=%270.45%27/%3E%3C/svg%3E') 56%) 58%) 62%);background-size:90px 90px;background-blend-mode:overlay;box-shadow:0 14px 30px -18px rgba(8,7,5,.9),0 1px 0 rgba(255,255,255,.26) inset;transition:transform 140ms cubic-bezier(.2,.7,.2,1),background-color 200ms cubic-bezier(.2,.7,.2,1),border-color 200ms cubic-bezier(.2,.7,.2,1),color 200ms cubic-bezier(.2,.7,.2,1),opacity 200ms cubic-bezier(.2,.7,.2,1)"}}>Choose Advergame pilot</a>
</div>
</div>
<div style={{display:"flex",flexDirection:"column",gap:"20px",padding:"32px 28px",borderRadius:"16px",border:"1px solid var(--bw-glass-bd)",background:"var(--bw-glass)"}}>
<span style={{font:"500 10px/1 'JetBrains Mono',monospace",letterSpacing:".2em",textTransform:"uppercase",color:"var(--bw-accent)"}}>/ 03</span>
<div style={{display:"flex",flexDirection:"column",gap:"6px"}}>
<span style={{fontWeight:"800",fontSize:"22px",letterSpacing:"-.02em"}}>Custom interactive asset</span>
<span style={{fontWeight:"800",fontSize:"34px",letterSpacing:"-.03em",lineHeight:"1"}}>Contact for pricing</span>
<span style={{fontSize:"13px",lineHeight:"1.4",fontWeight:"500",opacity:".65"}}>Full-scale advergame or multi-mechanic experience.</span>
</div>
<div style={{height:"1px",background:"var(--bw-rule)"}}></div>
<div style={{display:"flex",flexDirection:"column",gap:"11px",flex:"1"}}>
<span style={{display:"flex",gap:"10px",alignItems:"flex-start",fontSize:"14px",lineHeight:"1.4",fontWeight:"500",opacity:".72"}}><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{flexShrink:"0",marginTop:"2px"}}><circle cx="12" cy="12" r="9.5"></circle><path d="M7.5 12.5l3 3 6-6.5"></path></svg>Custom scope defined in a brief</span>
</div>
<a className="interactive-p35 interactive-p36 interactive-p37" href="/contact" style={{display:"inline-flex",alignItems:"center",justifyContent:"center",gap:"10px",padding:"14px 20px",borderRadius:"999px",border:"1px solid var(--bw-fg)",fontSize:"14px",fontWeight:"600",transition:"transform 140ms cubic-bezier(.2,.7,.2,1),background-color 200ms cubic-bezier(.2,.7,.2,1),border-color 200ms cubic-bezier(.2,.7,.2,1),color 200ms cubic-bezier(.2,.7,.2,1),opacity 200ms cubic-bezier(.2,.7,.2,1)"}}>Get a quote</a>
</div>
</div>
</div>
</section>
</>) : null}
<section style={{padding:"64px 0 96px"}}>
<div data-bw-pad="" style={{maxWidth:"1440px",margin:"0 auto",padding:"0 40px",display:"flex",flexDirection:"column",gap:"24px"}}>
<span style={{font:"500 11px/1 'JetBrains Mono',monospace",letterSpacing:".14em",textTransform:"uppercase",opacity:".5"}}>// Other services</span>
<div style={{display:"flex",gap:"12px",flexWrap:"wrap"}}>
<a className="interactive-p38 interactive-p39 interactive-p40" href="/website-and-portfolio" style={{border:"1px solid var(--bw-fg)",backgroundImage:"url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2790%27 height=%2790%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.85%27 numOctaves=%273%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27 opacity=%270.12%27/%3E%3C/svg%3E')",backgroundSize:"90px 90px",borderRadius:"999px",padding:"14px 22px",fontSize:"14px",fontWeight:"600",transition:"transform 140ms cubic-bezier(.2,.7,.2,1),background-color 200ms cubic-bezier(.2,.7,.2,1),border-color 200ms cubic-bezier(.2,.7,.2,1),color 200ms cubic-bezier(.2,.7,.2,1),opacity 200ms cubic-bezier(.2,.7,.2,1)"}}>Website &amp; portfolio</a>
<a className="interactive-p41 interactive-p42 interactive-p43" href="/brand-design" style={{border:"1px solid var(--bw-fg)",backgroundImage:"url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2790%27 height=%2790%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.85%27 numOctaves=%273%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27 opacity=%270.12%27/%3E%3C/svg%3E')",backgroundSize:"90px 90px",borderRadius:"999px",padding:"14px 22px",fontSize:"14px",fontWeight:"600",transition:"transform 140ms cubic-bezier(.2,.7,.2,1),background-color 200ms cubic-bezier(.2,.7,.2,1),border-color 200ms cubic-bezier(.2,.7,.2,1),color 200ms cubic-bezier(.2,.7,.2,1),opacity 200ms cubic-bezier(.2,.7,.2,1)"}}>Brand design</a>
<a className="interactive-p44 interactive-p45 interactive-p46" href="/b2b-answer-engine" style={{border:"1px solid var(--bw-fg)",backgroundImage:"url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2790%27 height=%2790%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.85%27 numOctaves=%273%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27 opacity=%270.12%27/%3E%3C/svg%3E')",backgroundSize:"90px 90px",borderRadius:"999px",padding:"14px 22px",fontSize:"14px",fontWeight:"600",transition:"transform 140ms cubic-bezier(.2,.7,.2,1),background-color 200ms cubic-bezier(.2,.7,.2,1),border-color 200ms cubic-bezier(.2,.7,.2,1),color 200ms cubic-bezier(.2,.7,.2,1),opacity 200ms cubic-bezier(.2,.7,.2,1)"}}>B2B answer engine placement</a>
<a className="interactive-p47 interactive-p48 interactive-p49" href="/lead-detective" style={{border:"1px solid var(--bw-fg)",backgroundImage:"url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2790%27 height=%2790%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.85%27 numOctaves=%273%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27 opacity=%270.12%27/%3E%3C/svg%3E')",backgroundSize:"90px 90px",borderRadius:"999px",padding:"14px 22px",fontSize:"14px",fontWeight:"600",transition:"transform 140ms cubic-bezier(.2,.7,.2,1),background-color 200ms cubic-bezier(.2,.7,.2,1),border-color 200ms cubic-bezier(.2,.7,.2,1),color 200ms cubic-bezier(.2,.7,.2,1),opacity 200ms cubic-bezier(.2,.7,.2,1)"}}>Lead detective</a>
<a className="interactive-p50 interactive-p51 interactive-p52" href="/mypen" style={{border:"1px solid var(--bw-fg)",backgroundImage:"url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2790%27 height=%2790%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.85%27 numOctaves=%273%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27 opacity=%270.12%27/%3E%3C/svg%3E')",backgroundSize:"90px 90px",borderRadius:"999px",padding:"14px 22px",fontSize:"14px",fontWeight:"600",transition:"transform 140ms cubic-bezier(.2,.7,.2,1),background-color 200ms cubic-bezier(.2,.7,.2,1),border-color 200ms cubic-bezier(.2,.7,.2,1),color 200ms cubic-bezier(.2,.7,.2,1),opacity 200ms cubic-bezier(.2,.7,.2,1)"}}>Mypen</a>
<a className="interactive-p53 interactive-p54 interactive-p55" href="/researchify" style={{border:"1px solid var(--bw-fg)",backgroundImage:"url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2790%27 height=%2790%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.85%27 numOctaves=%273%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27 opacity=%270.12%27/%3E%3C/svg%3E')",backgroundSize:"90px 90px",borderRadius:"999px",padding:"14px 22px",fontSize:"14px",fontWeight:"600",transition:"transform 140ms cubic-bezier(.2,.7,.2,1),background-color 200ms cubic-bezier(.2,.7,.2,1),border-color 200ms cubic-bezier(.2,.7,.2,1),color 200ms cubic-bezier(.2,.7,.2,1),opacity 200ms cubic-bezier(.2,.7,.2,1)"}}>Researchify</a>
<a className="interactive-p56 interactive-p57 interactive-p58" href="/self-serve-buying" style={{border:"1px solid var(--bw-fg)",backgroundImage:"url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2790%27 height=%2790%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.85%27 numOctaves=%273%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27 opacity=%270.12%27/%3E%3C/svg%3E')",backgroundSize:"90px 90px",borderRadius:"999px",padding:"14px 22px",fontSize:"14px",fontWeight:"600",transition:"transform 140ms cubic-bezier(.2,.7,.2,1),background-color 200ms cubic-bezier(.2,.7,.2,1),border-color 200ms cubic-bezier(.2,.7,.2,1),color 200ms cubic-bezier(.2,.7,.2,1),opacity 200ms cubic-bezier(.2,.7,.2,1)"}}>Self-serve buying</a>
</div>
<div style={{display:"flex",justifyContent:"space-between",gap:"24px",flexWrap:"wrap",borderTop:"1px solid var(--bw-rule)",paddingTop:"24px",font:"500 11px/1 'JetBrains Mono',monospace",letterSpacing:".14em",textTransform:"uppercase",opacity:".5"}}>
<span>© 2026 Blackware Labs</span><a className="interactive-p59 interactive-p60" href="/">← Back to homepage</a>
</div>
</div>
</section>
</div>
</div>
</>);
}