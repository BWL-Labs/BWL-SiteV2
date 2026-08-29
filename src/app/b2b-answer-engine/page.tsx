"use client";

import "@/styles/pages/sales.css";
import { useSalesPageLogic } from "@/generated/sales.logic";
export default function SalesPage() {
  const v = useSalesPageLogic();
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
<div style={{maxWidth:"1440px",margin:"0 auto",padding:"0 40px",display:"flex",alignItems:"center",justifyContent:"space-between",gap:"32px"}}>
<a className="sales-p1 sales-p2" href="/" style={{display:"flex",alignItems:"center",gap:"10px",flexShrink:"0",transition:"transform 140ms cubic-bezier(.2,.7,.2,1)"}}>
<img data-bw-logo="" src="/assets/blackware-logo.svg" alt="Blackware Labs" style={{height:"38px",width:"auto",display:"block",flexShrink:"0"}} />
</a>
<div data-bw-crumb="" style={{display:"flex",alignItems:"center",gap:"14px",font:"500 11px/1 'JetBrains Mono',monospace",letterSpacing:".14em",textTransform:"uppercase",opacity:".5"}}>
<span style={{width:"22px",height:"1px",background:"var(--bw-fg)",display:"block"}}></span>Service 04 — B2B Answer Engine Placement</div>
<button className="sales-p3 sales-p4 sales-p5" data-bw-theme-toggle="" type="button" aria-label="Switch between day and night" style={{width:"40px",height:"40px",borderRadius:"999px",border:"1px solid var(--bw-toggle-bd)",background:"transparent",color:"var(--bw-fg)",cursor:"pointer",display:"grid",placeItems:"center",flexShrink:"0",padding:"0",transition:"border-color .16s cubic-bezier(.2,.7,.2,1),color .16s cubic-bezier(.2,.7,.2,1),transform 140ms cubic-bezier(.2,.7,.2,1)"}}>
<svg data-bw-icon="sun" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2.4M12 19.6V22M2 12h2.4M19.6 12H22M4.9 4.9l1.7 1.7M17.4 17.4l1.7 1.7M19.1 4.9l-1.7 1.7M6.6 17.4l-1.7 1.7"></path></svg>
<svg data-bw-icon="moon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20.5 14.6A8.6 8.6 0 0 1 9.4 3.5a8.6 8.6 0 1 0 11.1 11.1Z"></path></svg>
</button>
<a className="sales-p6 sales-p7 sales-p8" href="/#contact" style={{display:"inline-flex",alignItems:"center",gap:"10px",backgroundColor:"#080705",backgroundImage:"url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2790%27 height=%2790%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.85%27 numOctaves=%273%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27 opacity=%270.45%27/%3E%3C/svg%3E')",backgroundSize:"90px 90px",backgroundBlendMode:"overlay",color:"#FFFFFA",padding:"12px 20px",borderRadius:"999px",border:"1px solid var(--bw-glass-bd)",boxShadow:"0 14px 30px -18px rgba(8,7,5,.9),0 1px 0 rgba(255,255,255,.3) inset",fontSize:"13px",fontWeight:"600",letterSpacing:"-.01em",flexShrink:"0",transition:"transform 140ms cubic-bezier(.2,.7,.2,1)"}}>
<span style={{width:"6px",height:"6px",borderRadius:"50%",background:"#FFFFFA",animation:"bwBlink 2s steps(1,end) infinite"}}></span>Book a call</a>
</div>
</header>
<section style={{padding:"186px 0 0"}}>
<div style={{maxWidth:"1440px",margin:"0 auto",padding:"0 40px",display:"flex",flexDirection:"column",gap:"34px"}}>
<div style={{display:"flex",alignItems:"center",gap:"10px",font:"500 12px/1 'JetBrains Mono',monospace",letterSpacing:".14em",textTransform:"uppercase",animation:"bwRise .7s cubic-bezier(.16,1,.3,1) both"}}>
<span style={{width:"7px",height:"7px",background:"#080705",display:"block"}}></span>// 04 — B2B Answer Engine Placement</div>
<h1 style={{margin:"0",maxWidth:"22ch",fontWeight:"900",letterSpacing:"-.05em",lineHeight:".86",fontSize:"clamp(52px,9vw,148px)",textTransform:"uppercase",animation:"bwRise .8s cubic-bezier(.16,1,.3,1) .06s both"}}>Getting cited by AI answer engines</h1>
<div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-end",gap:"40px",flexWrap:"wrap",animation:"bwRise .8s cubic-bezier(.16,1,.3,1) .12s both"}}>
<p style={{margin:"0",maxWidth:"52ch",fontSize:"18px",lineHeight:"1.5",fontWeight:"500",opacity:".7",textWrap:"pretty"}}>When your buyers ask ChatGPT, Perplexity, Gemini or Claude which tool to use — does your company come up? We make sure it does.</p>
<div style={{display:"flex",gap:"14px",flexWrap:"wrap",alignItems:"center"}}>
<a className="sales-p9 sales-p10 sales-p11" href="/#contact" style={{display:"inline-flex",alignItems:"center",gap:"12px",padding:"18px 28px",borderRadius:"999px",color:"#FFFFFA",fontSize:"15px",fontWeight:"600",letterSpacing:"-.01em",backgroundColor:"#080705",backgroundImage:"url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2790%27 height=%2790%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.85%27 numOctaves=%273%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27 opacity=%270.45%27/%3E%3C/svg%3E'),radial-gradient(at 14% 18%,oklch(0.8 0.15 84 / .95) 0%,rgba(8,7,5,0) 56%),radial-gradient(at 86% 24%,oklch(0.6 0.19 34 / .92) 0%,rgba(8,7,5,0) 58%),radial-gradient(at 60% 94%,oklch(0.455 0.132 14 / .9) 0%,rgba(8,7,5,0) 62%)",backgroundSize:"90px 90px,auto,auto,auto",backgroundBlendMode:"overlay,normal,normal,normal",boxShadow:"0 16px 34px -20px rgba(8,7,5,.9),0 1px 0 rgba(255,255,255,.26) inset",transition:"transform 140ms cubic-bezier(.2,.7,.2,1)"}}>Start a GEO brief<span style={{fontFamily:"'JetBrains Mono',monospace"}}>→</span></a>
<a className="sales-p12 sales-p13 sales-p14" href="#included" style={{border:"1px solid var(--bw-fg)",backgroundImage:"url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2790%27 height=%2790%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.85%27 numOctaves=%273%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27 opacity=%270.12%27/%3E%3C/svg%3E')",backgroundSize:"90px 90px",borderRadius:"999px",padding:"18px 28px",fontSize:"15px",fontWeight:"600",transition:"transform 140ms cubic-bezier(.2,.7,.2,1)"}}>What's included</a>
</div>
</div>
<div style={{display:"flex",gap:"44px",flexWrap:"wrap",borderTop:"1px solid var(--bw-rule)",paddingTop:"22px",font:"500 11px/1.6 'JetBrains Mono',monospace",letterSpacing:".14em",textTransform:"uppercase",opacity:".55"}}>
<span>85% of citations are third-party</span><span>84% are earned media</span><span>0.3% are paid content</span>
</div>
</div>
</section>
<section id="included" style={{padding:"104px 0 0"}}>
<div style={{maxWidth:"1440px",margin:"0 auto",padding:"0 40px",display:"flex",flexDirection:"column",gap:"44px"}}>
<h2 style={{margin:"0",maxWidth:"24ch",fontWeight:"800",fontSize:"clamp(34px,4.6vw,72px)",lineHeight:".94",letterSpacing:"-.04em"}}>What we deliver.</h2>
<div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(272px,1fr))",gap:"clamp(18px,2vw,30px)"}}>
<div onMouseEnter={enter0} onMouseLeave={leave0} style={{perspective:"1000px",padding:"20px 0 6px",display:"flex",justifyContent:"center"}}>
<div style={{position:"relative",width:"100%",transformStyle:"preserve-3d",transition:"transform .7s cubic-bezier(.16,1,.3,1)",transform:tilt0}}>
<div style={{position:"absolute",left:"50%",bottom:"calc(100% - 4px)",translate:"-50% 0",display:"flex",flexDirection:"column",alignItems:"center",pointerEvents:"none",opacity:pinO0,transform:pinT0,transition:"opacity .45s ease,transform .55s cubic-bezier(.16,1,.3,1)"}}>
<span style={{background:"#080705",color:"#E6AF2E",border:"1px solid rgba(230,175,46,.55)",borderRadius:"999px",padding:"7px 14px",font:"500 10px/1 'JetBrains Mono',monospace",letterSpacing:".18em",textTransform:"uppercase",whiteSpace:"nowrap"}}>// audit</span>
<span style={{width:"1px",height:"54px",background:"linear-gradient(180deg,#E6AF2E,rgba(230,175,46,0))",display:"block"}}></span>
</div>
<span aria-hidden="true" style={{position:"absolute",left:"50%",top:"100%",width:"0",height:"0",transform:"rotateX(70deg)",pointerEvents:"none",opacity:pinO0,transition:"opacity .5s ease",display:"block"}}>
<span style={{position:"absolute",left:"0",top:"0",width:"78px",height:"78px",translate:"-50% -50%",border:"1px solid rgba(230,175,46,.55)",borderRadius:"50%",animation:"bwPing 2.8s cubic-bezier(.2,.7,.2,1) infinite",display:"block"}}></span>
<span style={{position:"absolute",left:"0",top:"0",width:"78px",height:"78px",translate:"-50% -50%",border:"1px solid rgba(230,175,46,.4)",borderRadius:"50%",animation:"bwPing 2.8s cubic-bezier(.2,.7,.2,1) .9s infinite",display:"block"}}></span>
<span style={{position:"absolute",left:"0",top:"0",width:"78px",height:"78px",translate:"-50% -50%",border:"1px solid rgba(230,175,46,.28)",borderRadius:"50%",animation:"bwPing 2.8s cubic-bezier(.2,.7,.2,1) 1.8s infinite",display:"block"}}></span>
</span>
<div style={{position:"relative",display:"flex",flexDirection:"column",gap:"14px",minHeight:"224px",padding:"28px",borderRadius:"14px",border:"1px solid rgba(255,255,250,.16)",color:"#FFFFFA",backgroundColor:"#080705",backgroundImage:"url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2790%27 height=%2790%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.85%27 numOctaves=%273%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27 opacity=%270.42%27/%3E%3C/svg%3E'),radial-gradient(at 20% 10%,oklch(0.62 0.13 84 / .5) 0%,rgba(8,7,5,0) 58%),radial-gradient(at 90% 96%,oklch(0.5 0.14 34 / .45) 0%,rgba(8,7,5,0) 62%)",backgroundSize:"90px 90px,auto,auto",backgroundBlendMode:"overlay,normal,normal",boxShadow:"0 34px 70px -42px rgba(8,7,5,.75),0 1px 0 rgba(255,255,255,.14) inset"}}>
<span style={{font:"500 10px/1 'JetBrains Mono',monospace",letterSpacing:".2em",textTransform:"uppercase",color:"#E6AF2E"}}>/ 01</span>
<span style={{fontWeight:"800",fontSize:"22px",letterSpacing:"-.03em"}}>Audit</span>
<span style={{fontSize:"15px",lineHeight:"1.5",fontWeight:"500",opacity:".72",textWrap:"pretty"}}>Measure AI visibility across ChatGPT, Perplexity, Gemini &amp; Claude.</span>
</div>
</div>
</div>
<div onMouseEnter={enter1} onMouseLeave={leave1} style={{perspective:"1000px",padding:"20px 0 6px",display:"flex",justifyContent:"center"}}>
<div style={{position:"relative",width:"100%",transformStyle:"preserve-3d",transition:"transform .7s cubic-bezier(.16,1,.3,1)",transform:tilt1}}>
<div style={{position:"absolute",left:"50%",bottom:"calc(100% - 4px)",translate:"-50% 0",display:"flex",flexDirection:"column",alignItems:"center",pointerEvents:"none",opacity:pinO1,transform:pinT1,transition:"opacity .45s ease,transform .55s cubic-bezier(.16,1,.3,1)"}}>
<span style={{background:"#080705",color:"#E6AF2E",border:"1px solid rgba(230,175,46,.55)",borderRadius:"999px",padding:"7px 14px",font:"500 10px/1 'JetBrains Mono',monospace",letterSpacing:".18em",textTransform:"uppercase",whiteSpace:"nowrap"}}>// fix on-site</span>
<span style={{width:"1px",height:"54px",background:"linear-gradient(180deg,#E6AF2E,rgba(230,175,46,0))",display:"block"}}></span>
</div>
<span aria-hidden="true" style={{position:"absolute",left:"50%",top:"100%",width:"0",height:"0",transform:"rotateX(70deg)",pointerEvents:"none",opacity:pinO1,transition:"opacity .5s ease",display:"block"}}>
<span style={{position:"absolute",left:"0",top:"0",width:"78px",height:"78px",translate:"-50% -50%",border:"1px solid rgba(230,175,46,.55)",borderRadius:"50%",animation:"bwPing 2.8s cubic-bezier(.2,.7,.2,1) infinite",display:"block"}}></span>
<span style={{position:"absolute",left:"0",top:"0",width:"78px",height:"78px",translate:"-50% -50%",border:"1px solid rgba(230,175,46,.4)",borderRadius:"50%",animation:"bwPing 2.8s cubic-bezier(.2,.7,.2,1) .9s infinite",display:"block"}}></span>
<span style={{position:"absolute",left:"0",top:"0",width:"78px",height:"78px",translate:"-50% -50%",border:"1px solid rgba(230,175,46,.28)",borderRadius:"50%",animation:"bwPing 2.8s cubic-bezier(.2,.7,.2,1) 1.8s infinite",display:"block"}}></span>
</span>
<div style={{position:"relative",display:"flex",flexDirection:"column",gap:"14px",minHeight:"224px",padding:"28px",borderRadius:"14px",border:"1px solid rgba(255,255,250,.16)",color:"#FFFFFA",backgroundColor:"#080705",backgroundImage:"url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2790%27 height=%2790%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.85%27 numOctaves=%273%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27 opacity=%270.42%27/%3E%3C/svg%3E'),radial-gradient(at 20% 10%,oklch(0.62 0.13 84 / .5) 0%,rgba(8,7,5,0) 58%),radial-gradient(at 90% 96%,oklch(0.5 0.14 34 / .45) 0%,rgba(8,7,5,0) 62%)",backgroundSize:"90px 90px,auto,auto",backgroundBlendMode:"overlay,normal,normal",boxShadow:"0 34px 70px -42px rgba(8,7,5,.75),0 1px 0 rgba(255,255,255,.14) inset"}}>
<span style={{font:"500 10px/1 'JetBrains Mono',monospace",letterSpacing:".2em",textTransform:"uppercase",color:"#E6AF2E"}}>/ 02</span>
<span style={{fontWeight:"800",fontSize:"22px",letterSpacing:"-.03em"}}>Fix on-site</span>
<span style={{fontSize:"15px",lineHeight:"1.5",fontWeight:"500",opacity:".72",textWrap:"pretty"}}>Close content gaps automatically through the Profound platform.</span>
</div>
</div>
</div>
<div onMouseEnter={enter2} onMouseLeave={leave2} style={{perspective:"1000px",padding:"20px 0 6px",display:"flex",justifyContent:"center"}}>
<div style={{position:"relative",width:"100%",transformStyle:"preserve-3d",transition:"transform .7s cubic-bezier(.16,1,.3,1)",transform:tilt2}}>
<div style={{position:"absolute",left:"50%",bottom:"calc(100% - 4px)",translate:"-50% 0",display:"flex",flexDirection:"column",alignItems:"center",pointerEvents:"none",opacity:pinO2,transform:pinT2,transition:"opacity .45s ease,transform .55s cubic-bezier(.16,1,.3,1)"}}>
<span style={{background:"#080705",color:"#E6AF2E",border:"1px solid rgba(230,175,46,.55)",borderRadius:"999px",padding:"7px 14px",font:"500 10px/1 'JetBrains Mono',monospace",letterSpacing:".18em",textTransform:"uppercase",whiteSpace:"nowrap"}}>// build off-site</span>
<span style={{width:"1px",height:"54px",background:"linear-gradient(180deg,#E6AF2E,rgba(230,175,46,0))",display:"block"}}></span>
</div>
<span aria-hidden="true" style={{position:"absolute",left:"50%",top:"100%",width:"0",height:"0",transform:"rotateX(70deg)",pointerEvents:"none",opacity:pinO2,transition:"opacity .5s ease",display:"block"}}>
<span style={{position:"absolute",left:"0",top:"0",width:"78px",height:"78px",translate:"-50% -50%",border:"1px solid rgba(230,175,46,.55)",borderRadius:"50%",animation:"bwPing 2.8s cubic-bezier(.2,.7,.2,1) infinite",display:"block"}}></span>
<span style={{position:"absolute",left:"0",top:"0",width:"78px",height:"78px",translate:"-50% -50%",border:"1px solid rgba(230,175,46,.4)",borderRadius:"50%",animation:"bwPing 2.8s cubic-bezier(.2,.7,.2,1) .9s infinite",display:"block"}}></span>
<span style={{position:"absolute",left:"0",top:"0",width:"78px",height:"78px",translate:"-50% -50%",border:"1px solid rgba(230,175,46,.28)",borderRadius:"50%",animation:"bwPing 2.8s cubic-bezier(.2,.7,.2,1) 1.8s infinite",display:"block"}}></span>
</span>
<div style={{position:"relative",display:"flex",flexDirection:"column",gap:"14px",minHeight:"224px",padding:"28px",borderRadius:"14px",border:"1px solid rgba(255,255,250,.16)",color:"#FFFFFA",backgroundColor:"#080705",backgroundImage:"url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2790%27 height=%2790%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.85%27 numOctaves=%273%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27 opacity=%270.42%27/%3E%3C/svg%3E'),radial-gradient(at 20% 10%,oklch(0.62 0.13 84 / .5) 0%,rgba(8,7,5,0) 58%),radial-gradient(at 90% 96%,oklch(0.5 0.14 34 / .45) 0%,rgba(8,7,5,0) 62%)",backgroundSize:"90px 90px,auto,auto",backgroundBlendMode:"overlay,normal,normal",boxShadow:"0 34px 70px -42px rgba(8,7,5,.75),0 1px 0 rgba(255,255,255,.14) inset"}}>
<span style={{font:"500 10px/1 'JetBrains Mono',monospace",letterSpacing:".2em",textTransform:"uppercase",color:"#E6AF2E"}}>/ 03</span>
<span style={{fontWeight:"800",fontSize:"22px",letterSpacing:"-.03em"}}>Build off-site</span>
<span style={{fontSize:"15px",lineHeight:"1.5",fontWeight:"500",opacity:".72",textWrap:"pretty"}}>Earn presence on the sources AI cites — reviews, Reddit, listicles, press.</span>
</div>
</div>
</div>
<div onMouseEnter={enter3} onMouseLeave={leave3} style={{perspective:"1000px",padding:"20px 0 6px",display:"flex",justifyContent:"center"}}>
<div style={{position:"relative",width:"100%",transformStyle:"preserve-3d",transition:"transform .7s cubic-bezier(.16,1,.3,1)",transform:tilt3}}>
<div style={{position:"absolute",left:"50%",bottom:"calc(100% - 4px)",translate:"-50% 0",display:"flex",flexDirection:"column",alignItems:"center",pointerEvents:"none",opacity:pinO3,transform:pinT3,transition:"opacity .45s ease,transform .55s cubic-bezier(.16,1,.3,1)"}}>
<span style={{background:"#080705",color:"#E6AF2E",border:"1px solid rgba(230,175,46,.55)",borderRadius:"999px",padding:"7px 14px",font:"500 10px/1 'JetBrains Mono',monospace",letterSpacing:".18em",textTransform:"uppercase",whiteSpace:"nowrap"}}>// track</span>
<span style={{width:"1px",height:"54px",background:"linear-gradient(180deg,#E6AF2E,rgba(230,175,46,0))",display:"block"}}></span>
</div>
<span aria-hidden="true" style={{position:"absolute",left:"50%",top:"100%",width:"0",height:"0",transform:"rotateX(70deg)",pointerEvents:"none",opacity:pinO3,transition:"opacity .5s ease",display:"block"}}>
<span style={{position:"absolute",left:"0",top:"0",width:"78px",height:"78px",translate:"-50% -50%",border:"1px solid rgba(230,175,46,.55)",borderRadius:"50%",animation:"bwPing 2.8s cubic-bezier(.2,.7,.2,1) infinite",display:"block"}}></span>
<span style={{position:"absolute",left:"0",top:"0",width:"78px",height:"78px",translate:"-50% -50%",border:"1px solid rgba(230,175,46,.4)",borderRadius:"50%",animation:"bwPing 2.8s cubic-bezier(.2,.7,.2,1) .9s infinite",display:"block"}}></span>
<span style={{position:"absolute",left:"0",top:"0",width:"78px",height:"78px",translate:"-50% -50%",border:"1px solid rgba(230,175,46,.28)",borderRadius:"50%",animation:"bwPing 2.8s cubic-bezier(.2,.7,.2,1) 1.8s infinite",display:"block"}}></span>
</span>
<div style={{position:"relative",display:"flex",flexDirection:"column",gap:"14px",minHeight:"224px",padding:"28px",borderRadius:"14px",border:"1px solid rgba(255,255,250,.16)",color:"#FFFFFA",backgroundColor:"#080705",backgroundImage:"url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2790%27 height=%2790%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.85%27 numOctaves=%273%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27 opacity=%270.42%27/%3E%3C/svg%3E'),radial-gradient(at 20% 10%,oklch(0.62 0.13 84 / .5) 0%,rgba(8,7,5,0) 58%),radial-gradient(at 90% 96%,oklch(0.5 0.14 34 / .45) 0%,rgba(8,7,5,0) 62%)",backgroundSize:"90px 90px,auto,auto",backgroundBlendMode:"overlay,normal,normal",boxShadow:"0 34px 70px -42px rgba(8,7,5,.75),0 1px 0 rgba(255,255,255,.14) inset"}}>
<span style={{font:"500 10px/1 'JetBrains Mono',monospace",letterSpacing:".2em",textTransform:"uppercase",color:"#E6AF2E"}}>/ 04</span>
<span style={{fontWeight:"800",fontSize:"22px",letterSpacing:"-.03em"}}>Track</span>
<span style={{fontSize:"15px",lineHeight:"1.5",fontWeight:"500",opacity:".72",textWrap:"pretty"}}>Report citation share over time, engine by engine.</span>
</div>
</div>
</div>
</div>
</div>
</section>
<section style={{padding:"96px 0 0"}}>
<div style={{maxWidth:"1440px",margin:"0 auto",padding:"0 40px",display:"flex",flexDirection:"column",gap:"24px"}}>
<span style={{font:"500 11px/1 'JetBrains Mono',monospace",letterSpacing:".14em",textTransform:"uppercase",opacity:".5"}}>// 02 — The shift in how buyers research</span>
<h2 style={{margin:"0",maxWidth:"26ch",fontWeight:"800",fontSize:"clamp(32px,4.2vw,64px)",lineHeight:".94",letterSpacing:"-.04em"}}>Buyers decide before they reach your website.</h2>
<span style={{font:"500 10px/1 'JetBrains Mono',monospace",letterSpacing:".16em",textTransform:"uppercase",opacity:".5",marginTop:"8px"}}>SEO won the old path. This is who decides the new one.</span>
<div style={{position:"relative",width:"100%",aspectRatio:"1200/420",marginTop:"4px"}}>
<svg viewBox="0 0 1200 420" preserveAspectRatio="xMidYMid meet" style={{position:"absolute",inset:"0",width:"100%",height:"100%",overflow:"visible"}} aria-hidden="true">
<defs>
<filter id="beamGlow" x="-200%" y="-200%" width="500%" height="500%"><feGaussianBlur stdDeviation="4"></feGaussianBlur></filter>
</defs>
<path d="M90,210 Q330,110 580,75" fill="none" style={{stroke:"var(--bw-rule)"}} strokeWidth="1.5"></path>
<path d="M90,210 Q330,195 580,180" fill="none" style={{stroke:"var(--bw-rule)"}} strokeWidth="1.5"></path>
<path d="M90,210 Q330,225 580,245" fill="none" style={{stroke:"var(--bw-rule)"}} strokeWidth="1.5"></path>
<path d="M90,210 Q330,330 580,355" fill="none" style={{stroke:"var(--bw-rule)"}} strokeWidth="1.5"></path>
<path d="M580,75 Q850,110 1110,210" fill="none" style={{stroke:"var(--bw-rule)"}} strokeWidth="1.5"></path>
<path d="M580,180 Q850,195 1110,210" fill="none" style={{stroke:"var(--bw-rule)"}} strokeWidth="1.5"></path>
<path d="M580,245 Q850,225 1110,210" fill="none" style={{stroke:"var(--bw-rule)"}} strokeWidth="1.5"></path>
<path d="M580,355 Q850,330 1110,210" fill="none" style={{stroke:"var(--bw-rule)"}} strokeWidth="1.5"></path>
<g id="bwBeamsLeft">
<circle r="9" fill="#E6AF2E" opacity="0.5" filter="url(#beamGlow)"><animateMotion dur="3.2s" begin="0s" repeatCount="indefinite" path="M90,210 Q330,110 580,75"></animateMotion></circle>
<circle r="3.5" fill="#FFFFFA"><animateMotion dur="3.2s" begin="0s" repeatCount="indefinite" path="M90,210 Q330,110 580,75"></animateMotion></circle>
<circle r="9" fill="#E6AF2E" opacity="0.5" filter="url(#beamGlow)"><animateMotion dur="3.2s" begin="0.5s" repeatCount="indefinite" path="M90,210 Q330,195 580,180"></animateMotion></circle>
<circle r="3.5" fill="#FFFFFA"><animateMotion dur="3.2s" begin="0.5s" repeatCount="indefinite" path="M90,210 Q330,195 580,180"></animateMotion></circle>
<circle r="9" fill="#E6AF2E" opacity="0.5" filter="url(#beamGlow)"><animateMotion dur="3.2s" begin="1s" repeatCount="indefinite" path="M90,210 Q330,225 580,245"></animateMotion></circle>
<circle r="3.5" fill="#FFFFFA"><animateMotion dur="3.2s" begin="1s" repeatCount="indefinite" path="M90,210 Q330,225 580,245"></animateMotion></circle>
<circle r="9" fill="#E6AF2E" opacity="0.5" filter="url(#beamGlow)"><animateMotion dur="3.2s" begin="1.5s" repeatCount="indefinite" path="M90,210 Q330,330 580,355"></animateMotion></circle>
<circle r="3.5" fill="#FFFFFA"><animateMotion dur="3.2s" begin="1.5s" repeatCount="indefinite" path="M90,210 Q330,330 580,355"></animateMotion></circle>
</g>
<g id="bwBeamsRight">
<circle r="9" fill="#C84A1F" opacity="0.5" filter="url(#beamGlow)"><animateMotion dur="2.6s" begin="1.6s" repeatCount="indefinite" path="M580,75 Q850,110 1110,210"></animateMotion></circle>
<circle r="3.5" fill="#FFFFFA"><animateMotion dur="2.6s" begin="1.6s" repeatCount="indefinite" path="M580,75 Q850,110 1110,210"></animateMotion></circle>
<circle r="9" fill="#C84A1F" opacity="0.5" filter="url(#beamGlow)"><animateMotion dur="2.6s" begin="2.1s" repeatCount="indefinite" path="M580,180 Q850,195 1110,210"></animateMotion></circle>
<circle r="3.5" fill="#FFFFFA"><animateMotion dur="2.6s" begin="2.1s" repeatCount="indefinite" path="M580,180 Q850,195 1110,210"></animateMotion></circle>
<circle r="9" fill="#C84A1F" opacity="0.5" filter="url(#beamGlow)"><animateMotion dur="2.6s" begin="2.6s" repeatCount="indefinite" path="M580,245 Q850,225 1110,210"></animateMotion></circle>
<circle r="3.5" fill="#FFFFFA"><animateMotion dur="2.6s" begin="2.6s" repeatCount="indefinite" path="M580,245 Q850,225 1110,210"></animateMotion></circle>
<circle r="9" fill="#C84A1F" opacity="0.5" filter="url(#beamGlow)"><animateMotion dur="2.6s" begin="3.1s" repeatCount="indefinite" path="M580,355 Q850,330 1110,210"></animateMotion></circle>
<circle r="3.5" fill="#FFFFFA"><animateMotion dur="2.6s" begin="3.1s" repeatCount="indefinite" path="M580,355 Q850,330 1110,210"></animateMotion></circle>
</g>
<circle cx="90" cy="210" r="30" fill="var(--bw-bg)" style={{stroke:"var(--bw-fg)"}} strokeWidth="1.5"></circle>
<circle cx="580" cy="75" r="26" fill="var(--bw-bg)" style={{stroke:"var(--bw-rule)"}} strokeWidth="1.5"></circle>
<circle cx="580" cy="180" r="26" fill="var(--bw-bg)" style={{stroke:"var(--bw-rule)"}} strokeWidth="1.5"></circle>
<circle cx="580" cy="245" r="26" fill="var(--bw-bg)" style={{stroke:"var(--bw-rule)"}} strokeWidth="1.5"></circle>
<circle cx="580" cy="355" r="26" fill="var(--bw-bg)" style={{stroke:"var(--bw-rule)"}} strokeWidth="1.5"></circle>
<circle cx="1110" cy="210" r="36" fill="#080705" stroke="#E6AF2E" strokeWidth="2"></circle>
</svg>
<div style={{position:"absolute",left:"7.5%",top:"50%",transform:"translate(-50%,26px)",textAlign:"center",whiteSpace:"nowrap",font:"600 12px/1.3 Archivo,sans-serif",letterSpacing:"-.01em"}}>Buyer<br />asks a question</div>
<div style={{position:"absolute",left:"48.33%",top:"17.86%",transform:"translate(-50%,20px)",textAlign:"center",whiteSpace:"nowrap",font:"700 13px/1 Archivo,sans-serif",letterSpacing:"-.02em"}}>ChatGPT</div>
<div style={{position:"absolute",left:"48.33%",top:"42.86%",transform:"translate(-50%,20px)",textAlign:"center",whiteSpace:"nowrap",font:"700 13px/1 Archivo,sans-serif",letterSpacing:"-.02em"}}>Perplexity</div>
<div style={{position:"absolute",left:"48.33%",top:"58.33%",transform:"translate(-50%,20px)",textAlign:"center",whiteSpace:"nowrap",font:"700 13px/1 Archivo,sans-serif",letterSpacing:"-.02em"}}>Gemini</div>
<div style={{position:"absolute",left:"48.33%",top:"84.52%",transform:"translate(-50%,20px)",textAlign:"center",whiteSpace:"nowrap",font:"700 13px/1 Archivo,sans-serif",letterSpacing:"-.02em"}}>Claude</div>
<div style={{position:"absolute",left:"92.5%",top:"50%",transform:"translate(-50%,32px)",textAlign:"center",whiteSpace:"nowrap",font:"800 14px/1 Archivo,sans-serif",letterSpacing:"-.02em",color:"#E6AF2E"}}>Your brand</div>
</div>
<span style={{fontSize:"15px",lineHeight:"1.5",fontWeight:"600",opacity:".85",marginTop:"12px"}}>If AI never names you, you're not in the game.</span>
</div>
</section>
<section style={{marginTop:"120px",backgroundColor:"#080705",backgroundImage:"url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2790%27 height=%2790%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.85%27 numOctaves=%273%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27 opacity=%270.4%27/%3E%3C/svg%3E')",backgroundSize:"90px 90px",backgroundBlendMode:"overlay",color:"#FFFFFA",padding:"110px 0"}}>
<div style={{maxWidth:"1440px",margin:"0 auto",padding:"0 40px",display:"flex",flexDirection:"column",gap:"56px"}}>
<div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-end",gap:"32px",flexWrap:"wrap"}}>
<h2 style={{margin:"0",maxWidth:"20ch",fontWeight:"800",fontSize:"clamp(32px,4.2vw,64px)",lineHeight:".94",letterSpacing:"-.04em"}}>GEO isn't a one-time fix — it's a position you defend.</h2>
<span style={{font:"500 11px/1 'JetBrains Mono',monospace",letterSpacing:".14em",textTransform:"uppercase",opacity:".5"}}>Citation share over time</span>
</div>
<div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))",gap:"28px"}}>
<div style={{display:"flex",flexDirection:"column",gap:"12px",borderTop:"1px solid rgba(255,255,250,.24)",paddingTop:"22px"}}>
<span style={{font:"500 10px/1 'JetBrains Mono',monospace",letterSpacing:".2em",textTransform:"uppercase",color:"#E6AF2E"}}>/ 01</span>
<span style={{fontWeight:"800",fontSize:"24px",letterSpacing:"-.03em"}}>Answers are non-deterministic</span>
<span style={{fontSize:"15px",lineHeight:"1.5",fontWeight:"500",opacity:".7",textWrap:"pretty"}}>AI regenerates responses constantly — citation share drifts week to week, even with no changes on your side.</span>
</div>
<div style={{display:"flex",flexDirection:"column",gap:"12px",borderTop:"1px solid rgba(255,255,250,.24)",paddingTop:"22px"}}>
<span style={{font:"500 10px/1 'JetBrains Mono',monospace",letterSpacing:".2em",textTransform:"uppercase",color:"#E6AF2E"}}>/ 02</span>
<span style={{fontWeight:"800",fontSize:"24px",letterSpacing:"-.03em"}}>Competitors keep building</span>
<span style={{fontSize:"15px",lineHeight:"1.5",fontWeight:"500",opacity:".7",textWrap:"pretty"}}>Rivals are earning their own reviews and mentions; standing still means losing ground you already won.</span>
</div>
<div style={{display:"flex",flexDirection:"column",gap:"12px",borderTop:"1px solid rgba(255,255,250,.24)",paddingTop:"22px"}}>
<span style={{font:"500 10px/1 'JetBrains Mono',monospace",letterSpacing:".2em",textTransform:"uppercase",color:"#E6AF2E"}}>/ 03</span>
<span style={{fontWeight:"800",fontSize:"24px",letterSpacing:"-.03em"}}>Sources refresh &amp; decay</span>
<span style={{fontSize:"15px",lineHeight:"1.5",fontWeight:"500",opacity:".7",textWrap:"pretty"}}>New Reddit threads, listicles and model updates reshuffle who gets cited; old content goes stale.</span>
</div>
</div>
<p style={{margin:"0",maxWidth:"70ch",fontSize:"16px",lineHeight:"1.6",fontWeight:"500",opacity:".75",borderTop:"1px solid rgba(255,255,250,.24)",paddingTop:"24px"}}>So we pitch a retainer, not a project: an intensive Build phase (Mo 1–2) to win the position, then an ongoing Maintain phase to hold and grow it.</p>
</div>
</section>
{showPricing ? (<>
<section style={{padding:"120px 0 0"}}>
<div style={{maxWidth:"1440px",margin:"0 auto",padding:"0 40px",display:"flex",flexDirection:"column",gap:"44px"}}>
<div style={{display:"flex",flexDirection:"column",gap:"16px",maxWidth:"64ch",borderBottom:"1px solid var(--bw-rule)",paddingBottom:"32px"}}>
<span style={{font:"500 11px/1 'JetBrains Mono',monospace",letterSpacing:".14em",textTransform:"uppercase",opacity:".5"}}>// Pricing — retainer model</span>
<h2 style={{margin:"0",fontWeight:"800",fontSize:"clamp(32px,4vw,56px)",letterSpacing:"-.04em",lineHeight:"1"}}>Two-phase retainer, priced by tier.</h2>
<p style={{margin:"0",fontSize:"16px",lineHeight:"1.5",fontWeight:"500",opacity:".7",textWrap:"pretty"}}>Mid-market GEO retainers cluster at $7K–$15K/mo. Standalone digital PR alone averages $5.5K/mo. Our bundled tracking, on-site fixes, and earned media sits within that range.</p>
</div>
<div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"24px"}}>
<div style={{display:"flex",flexDirection:"column",gap:"20px",padding:"32px 28px",borderRadius:"16px",border:"1px solid var(--bw-glass-bd)",background:"var(--bw-glass)"}}>
<span style={{font:"500 10px/1 'JetBrains Mono',monospace",letterSpacing:".2em",textTransform:"uppercase",color:"var(--bw-accent)"}}>/ 01</span>
<div style={{display:"flex",flexDirection:"column",gap:"6px"}}>
<span style={{fontWeight:"800",fontSize:"30px",letterSpacing:"-.03em",lineHeight:"1"}}>Growth</span>
<span style={{fontSize:"13px",lineHeight:"1.4",fontWeight:"500",opacity:".6"}}>$3–15M ARR</span>
</div>
<div style={{height:"1px",background:"var(--bw-rule)"}}></div>
<div style={{display:"flex",flexDirection:"column",gap:"14px"}}>
<div style={{display:"flex",flexDirection:"column",gap:"2px"}}>
<span style={{font:"500 10px/1 'JetBrains Mono',monospace",letterSpacing:".1em",textTransform:"uppercase",opacity:".5"}}>Build — Mo 1–2</span>
<span style={{fontWeight:"700",fontSize:"18px",letterSpacing:"-.01em"}}>$3,200 – $4,200/mo</span>
</div>
<div style={{display:"flex",flexDirection:"column",gap:"2px"}}>
<span style={{font:"500 10px/1 'JetBrains Mono',monospace",letterSpacing:".1em",textTransform:"uppercase",opacity:".5"}}>Maintain — Mo 3+</span>
<span style={{fontWeight:"700",fontSize:"18px",letterSpacing:"-.01em"}}>$1,800 – $2,600/mo</span>
</div>
</div>
<a className="sales-p15 sales-p16 sales-p17" href="/#contact" style={{marginTop:"4px",display:"inline-flex",alignItems:"center",justifyContent:"center",gap:"10px",padding:"14px 20px",borderRadius:"999px",border:"1px solid var(--bw-fg)",fontSize:"14px",fontWeight:"600",transition:"transform 140ms cubic-bezier(.2,.7,.2,1)"}}>Start with Growth</a>
</div>
<div style={{position:"relative",display:"flex",flexDirection:"column",gap:"20px",padding:"32px 28px",borderRadius:"16px",border:"1px solid rgba(230,175,46,.5)",color:"#FFFFFA",backgroundColor:"#080705",backgroundImage:"url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2790%27 height=%2790%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.85%27 numOctaves=%273%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27 opacity=%270.4%27/%3E%3C/svg%3E'),radial-gradient(at 16% 8%,oklch(0.62 0.13 84 / .4) 0%,rgba(8,7,5,0) 58%),radial-gradient(at 92% 96%,oklch(0.48 0.14 34 / .36) 0%,rgba(8,7,5,0) 62%)",backgroundSize:"90px 90px,auto,auto",backgroundBlendMode:"overlay,normal,normal",boxShadow:"0 34px 70px -42px rgba(8,7,5,.75)"}}>
<span style={{position:"absolute",top:"-13px",left:"28px",background:"#E6AF2E",color:"#080705",borderRadius:"999px",padding:"5px 14px",font:"600 10px/1 'JetBrains Mono',monospace",letterSpacing:".14em",textTransform:"uppercase"}}>Most picked</span>
<span style={{font:"500 10px/1 'JetBrains Mono',monospace",letterSpacing:".2em",textTransform:"uppercase",color:"#E6AF2E"}}>/ 02</span>
<div style={{display:"flex",flexDirection:"column",gap:"6px"}}>
<span style={{fontWeight:"800",fontSize:"30px",letterSpacing:"-.03em",lineHeight:"1"}}>Scale</span>
<span style={{fontSize:"13px",lineHeight:"1.4",fontWeight:"500",opacity:".65"}}>$15–60M ARR</span>
</div>
<div style={{height:"1px",background:"rgba(255,255,250,.16)"}}></div>
<div style={{display:"flex",flexDirection:"column",gap:"14px"}}>
<div style={{display:"flex",flexDirection:"column",gap:"2px"}}>
<span style={{font:"500 10px/1 'JetBrains Mono',monospace",letterSpacing:".1em",textTransform:"uppercase",opacity:".55"}}>Build — Mo 1–2</span>
<span style={{fontWeight:"700",fontSize:"18px",letterSpacing:"-.01em"}}>$5,200 – $7,200/mo</span>
</div>
<div style={{display:"flex",flexDirection:"column",gap:"2px"}}>
<span style={{font:"500 10px/1 'JetBrains Mono',monospace",letterSpacing:".1em",textTransform:"uppercase",opacity:".55"}}>Maintain — Mo 3+</span>
<span style={{fontWeight:"700",fontSize:"18px",letterSpacing:"-.01em"}}>$3,200 – $4,800/mo</span>
</div>
</div>
<a className="sales-p18 sales-p19 sales-p20" href="/#contact" style={{marginTop:"4px",display:"inline-flex",alignItems:"center",justifyContent:"center",gap:"10px",padding:"14px 20px",borderRadius:"999px",color:"#FFFFFA",fontSize:"14px",fontWeight:"600",backgroundColor:"#080705",backgroundImage:"url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2790%27 height=%2790%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.85%27 numOctaves=%273%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27 opacity=%270.45%27/%3E%3C/svg%3E'),radial-gradient(at 14% 18%,oklch(0.8 0.15 84 / .95) 0%,rgba(8,7,5,0) 56%),radial-gradient(at 86% 24%,oklch(0.6 0.19 34 / .92) 0%,rgba(8,7,5,0) 58%),radial-gradient(at 60% 94%,oklch(0.455 0.132 14 / .9) 0%,rgba(8,7,5,0) 62%)",backgroundSize:"90px 90px,auto,auto,auto",backgroundBlendMode:"overlay,normal,normal,normal",boxShadow:"0 14px 30px -18px rgba(8,7,5,.9),0 1px 0 rgba(255,255,255,.26) inset",transition:"transform 140ms cubic-bezier(.2,.7,.2,1)"}}>Start with Scale</a>
</div>
<div style={{display:"flex",flexDirection:"column",gap:"20px",padding:"32px 28px",borderRadius:"16px",border:"1px solid var(--bw-glass-bd)",background:"var(--bw-glass)"}}>
<span style={{font:"500 10px/1 'JetBrains Mono',monospace",letterSpacing:".2em",textTransform:"uppercase",color:"var(--bw-accent)"}}>/ 03</span>
<div style={{display:"flex",flexDirection:"column",gap:"6px"}}>
<span style={{fontWeight:"800",fontSize:"30px",letterSpacing:"-.03em",lineHeight:"1"}}>Enterprise</span>
<span style={{fontSize:"13px",lineHeight:"1.4",fontWeight:"500",opacity:".6"}}>$60M+ ARR</span>
</div>
<div style={{height:"1px",background:"var(--bw-rule)"}}></div>
<div style={{display:"flex",flexDirection:"column",gap:"14px"}}>
<div style={{display:"flex",flexDirection:"column",gap:"2px"}}>
<span style={{font:"500 10px/1 'JetBrains Mono',monospace",letterSpacing:".1em",textTransform:"uppercase",opacity:".5"}}>Build — Mo 1–2</span>
<span style={{fontWeight:"700",fontSize:"18px",letterSpacing:"-.01em"}}>$9,500 – $14,000/mo</span>
</div>
<div style={{display:"flex",flexDirection:"column",gap:"2px"}}>
<span style={{font:"500 10px/1 'JetBrains Mono',monospace",letterSpacing:".1em",textTransform:"uppercase",opacity:".5"}}>Maintain — Mo 3+</span>
<span style={{fontWeight:"700",fontSize:"18px",letterSpacing:"-.01em"}}>$6,500 – $10,000/mo</span>
</div>
</div>
<a className="sales-p21 sales-p22 sales-p23" href="/#contact" style={{marginTop:"4px",display:"inline-flex",alignItems:"center",justifyContent:"center",gap:"10px",padding:"14px 20px",borderRadius:"999px",border:"1px solid var(--bw-fg)",fontSize:"14px",fontWeight:"600",transition:"transform 140ms cubic-bezier(.2,.7,.2,1)"}}>Start with Enterprise</a>
</div>
</div>
<span style={{font:"500 10px/1.6 'JetBrains Mono',monospace",letterSpacing:".1em",textTransform:"uppercase",opacity:".4"}}>Two-phase retainer — intensive Build, then ongoing Maintain. Confirmed in scoping.</span>
</div>
</section>
</>) : null}
<section style={{padding:"64px 0 96px"}}>
<div style={{maxWidth:"1440px",margin:"0 auto",padding:"0 40px",display:"flex",flexDirection:"column",gap:"24px"}}>
<span style={{font:"500 11px/1 'JetBrains Mono',monospace",letterSpacing:".14em",textTransform:"uppercase",opacity:".5"}}>// Other services</span>
<div style={{display:"flex",gap:"12px",flexWrap:"wrap"}}>
<a className="sales-p24 sales-p25 sales-p26" href="/website-and-portfolio" style={{border:"1px solid var(--bw-fg)",backgroundImage:"url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2790%27 height=%2790%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.85%27 numOctaves=%273%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27 opacity=%270.12%27/%3E%3C/svg%3E')",backgroundSize:"90px 90px",borderRadius:"999px",padding:"14px 22px",fontSize:"14px",fontWeight:"600",transition:"transform 140ms cubic-bezier(.2,.7,.2,1)"}}>Website &amp; portfolio</a>
<a className="sales-p27 sales-p28 sales-p29" href="/interactive-assets" style={{border:"1px solid var(--bw-fg)",backgroundImage:"url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2790%27 height=%2790%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.85%27 numOctaves=%273%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27 opacity=%270.12%27/%3E%3C/svg%3E')",backgroundSize:"90px 90px",borderRadius:"999px",padding:"14px 22px",fontSize:"14px",fontWeight:"600",transition:"transform 140ms cubic-bezier(.2,.7,.2,1)"}}>Interactive assets</a>
<a className="sales-p30 sales-p31 sales-p32" href="/brand-design" style={{border:"1px solid var(--bw-fg)",backgroundImage:"url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2790%27 height=%2790%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.85%27 numOctaves=%273%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27 opacity=%270.12%27/%3E%3C/svg%3E')",backgroundSize:"90px 90px",borderRadius:"999px",padding:"14px 22px",fontSize:"14px",fontWeight:"600",transition:"transform 140ms cubic-bezier(.2,.7,.2,1)"}}>Brand design</a>
<a className="sales-p33 sales-p34 sales-p35" href="/lead-detective" style={{border:"1px solid var(--bw-fg)",backgroundImage:"url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2790%27 height=%2790%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.85%27 numOctaves=%273%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27 opacity=%270.12%27/%3E%3C/svg%3E')",backgroundSize:"90px 90px",borderRadius:"999px",padding:"14px 22px",fontSize:"14px",fontWeight:"600",transition:"transform 140ms cubic-bezier(.2,.7,.2,1)"}}>Lead detective</a>
<a className="sales-p36 sales-p37 sales-p38" href="/mypen" style={{border:"1px solid var(--bw-fg)",backgroundImage:"url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2790%27 height=%2790%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.85%27 numOctaves=%273%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27 opacity=%270.12%27/%3E%3C/svg%3E')",backgroundSize:"90px 90px",borderRadius:"999px",padding:"14px 22px",fontSize:"14px",fontWeight:"600",transition:"transform 140ms cubic-bezier(.2,.7,.2,1)"}}>Mypen</a>
<a className="sales-p39 sales-p40 sales-p41" href="/researchify" style={{border:"1px solid var(--bw-fg)",backgroundImage:"url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2790%27 height=%2790%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.85%27 numOctaves=%273%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27 opacity=%270.12%27/%3E%3C/svg%3E')",backgroundSize:"90px 90px",borderRadius:"999px",padding:"14px 22px",fontSize:"14px",fontWeight:"600",transition:"transform 140ms cubic-bezier(.2,.7,.2,1)"}}>Researchify</a>
<a className="sales-p42 sales-p43 sales-p44" href="/self-serve-buying" style={{border:"1px solid var(--bw-fg)",backgroundImage:"url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2790%27 height=%2790%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.85%27 numOctaves=%273%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27 opacity=%270.12%27/%3E%3C/svg%3E')",backgroundSize:"90px 90px",borderRadius:"999px",padding:"14px 22px",fontSize:"14px",fontWeight:"600",transition:"transform 140ms cubic-bezier(.2,.7,.2,1)"}}>Self-serve buying</a>
</div>
<div style={{display:"flex",justifyContent:"space-between",gap:"24px",flexWrap:"wrap",borderTop:"1px solid var(--bw-rule)",paddingTop:"24px",font:"500 11px/1 'JetBrains Mono',monospace",letterSpacing:".14em",textTransform:"uppercase",opacity:".5"}}>
<span>© 2026 Blackware Labs</span><a className="sales-p45 sales-p46" href="/">← Back to homepage</a>
</div>
</div>
</section>
</div>
</div>
</>);
}