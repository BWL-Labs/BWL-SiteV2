"use client";

import { Fragment } from "react";
import "@/styles/pages/mypen.css";
import { useMypenPageLogic } from "@/generated/mypen.logic";
export default function MypenPage() {
  const v = useMypenPageLogic();
  const { __i, enter0, enter1, enter2, enter3, leave0, leave1, leave2, leave3, pinO0, pinO1, pinO2, pinO3, pinT0, pinT1, pinT2, pinT3, pipeline, showPricing, tilt0, tilt1, tilt2, tilt3 } = v;
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
<a className="mypen-p1 mypen-p2" href="/" style={{display:"flex",alignItems:"center",gap:"10px",flexShrink:"0",transition:"transform 140ms cubic-bezier(.2,.7,.2,1),background-color 200ms cubic-bezier(.2,.7,.2,1),border-color 200ms cubic-bezier(.2,.7,.2,1),color 200ms cubic-bezier(.2,.7,.2,1),opacity 200ms cubic-bezier(.2,.7,.2,1)"}}>
<img data-bw-logo="" src="/assets/blackware-logo.svg" alt="Blackware Labs" style={{height:"38px",width:"auto",display:"block",flexShrink:"0"}} />
</a>
<div data-bw-crumb="" style={{display:"flex",alignItems:"center",gap:"14px",font:"500 11px/1 'JetBrains Mono',monospace",letterSpacing:".14em",textTransform:"uppercase",opacity:".5"}}>
<span style={{width:"22px",height:"1px",background:"var(--bw-fg)",display:"block"}}></span><a href="/#services">Service 06 — Mypen</a></div>
<div data-bw-head-controls=""><button className="mypen-p3 mypen-p4 mypen-p5" data-bw-theme-toggle="" type="button" aria-label="Switch between day and night" style={{width:"40px",height:"40px",borderRadius:"999px",border:"1px solid var(--bw-toggle-bd)",background:"transparent",color:"var(--bw-fg)",cursor:"pointer",display:"grid",placeItems:"center",flexShrink:"0",padding:"0",transition:"border-color .16s cubic-bezier(.2,.7,.2,1),color .16s cubic-bezier(.2,.7,.2,1),transform 140ms cubic-bezier(.2,.7,.2,1),background-color 200ms cubic-bezier(.2,.7,.2,1),opacity 200ms cubic-bezier(.2,.7,.2,1)"}}>
<svg data-bw-icon="sun" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2.4M12 19.6V22M2 12h2.4M19.6 12H22M4.9 4.9l1.7 1.7M17.4 17.4l1.7 1.7M19.1 4.9l-1.7 1.7M6.6 17.4l-1.7 1.7"></path></svg>
<svg data-bw-icon="moon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20.5 14.6A8.6 8.6 0 0 1 9.4 3.5a8.6 8.6 0 1 0 11.1 11.1Z"></path></svg>
</button>
<a className="mypen-p6 mypen-p7 mypen-p8" data-bw-cta="" href="/contact" style={{display:"inline-flex",alignItems:"center",gap:"10px",backgroundColor:"#080705",backgroundImage:"url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2790%27 height=%2790%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.85%27 numOctaves=%273%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27 opacity=%270.45%27/%3E%3C/svg%3E')",backgroundSize:"90px 90px",backgroundBlendMode:"overlay",color:"#FFFFFA",padding:"12px 20px",borderRadius:"999px",border:"1px solid var(--bw-glass-bd)",boxShadow:"0 14px 30px -18px rgba(8,7,5,.9),0 1px 0 rgba(255,255,255,.3) inset",fontSize:"13px",fontWeight:"600",letterSpacing:"-.01em",flexShrink:"0",transition:"transform 140ms cubic-bezier(.2,.7,.2,1),background-color 200ms cubic-bezier(.2,.7,.2,1),border-color 200ms cubic-bezier(.2,.7,.2,1),color 200ms cubic-bezier(.2,.7,.2,1),opacity 200ms cubic-bezier(.2,.7,.2,1)"}}>
<span style={{width:"6px",height:"6px",borderRadius:"50%",background:"#FFFFFA",animation:"bwBlink 2s steps(1,end) infinite"}}></span>Book a call</a></div>
</div>
</header>
<section style={{padding:"186px 0 0"}}>
<div data-bw-pad="" style={{maxWidth:"1440px",margin:"0 auto",padding:"0 40px",display:"flex",flexDirection:"column",gap:"34px"}}>
<div style={{display:"flex",alignItems:"center",gap:"10px",font:"500 12px/1 'JetBrains Mono',monospace",letterSpacing:".14em",textTransform:"uppercase",animation:"bwRise .7s cubic-bezier(.16,1,.3,1) both"}}>
<span style={{width:"7px",height:"7px",background:"#080705",display:"block"}}></span>// 06 — Mypen</div>
<h1 style={{margin:"0",maxWidth:"22ch",fontWeight:"900",letterSpacing:"-.05em",lineHeight:".86",fontSize:"clamp(52px,9vw,148px)",textTransform:"uppercase",animation:"bwRise .8s cubic-bezier(.16,1,.3,1) .06s both"}}>Cold email fails when it feels cold</h1>
<div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-end",gap:"40px",flexWrap:"wrap",animation:"bwRise .8s cubic-bezier(.16,1,.3,1) .12s both"}}>
<p style={{margin:"0",maxWidth:"56ch",fontSize:"18px",lineHeight:"1.5",fontWeight:"500",opacity:".7",textWrap:"pretty"}}>We run AI research on every recipient, write a genuinely personalized email for each one, and send at scale through a dedicated infrastructure — so your outreach reads like it was written by someone who actually did their homework.</p>
<div style={{display:"flex",gap:"14px",flexWrap:"wrap",alignItems:"center"}}>
<a className="mypen-p9 mypen-p10 mypen-p11" data-bw-cta="" href="/contact" style={{display:"inline-flex",alignItems:"center",gap:"12px",padding:"18px 28px",borderRadius:"999px",color:"#FFFFFA",fontSize:"15px",fontWeight:"600",letterSpacing:"-.01em",backgroundColor:"#080705",backgroundImage:"url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2790%27 height=%2790%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.85%27 numOctaves=%273%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27 opacity=%270.45%27/%3E%3C/svg%3E') 56%) 58%) 62%);background-size:90px 90px;background-blend-mode:overlay;box-shadow:0 16px 34px -20px rgba(8,7,5,.9),0 1px 0 rgba(255,255,255,.26) inset;transition:transform 140ms cubic-bezier(.2,.7,.2,1),background-color 200ms cubic-bezier(.2,.7,.2,1),border-color 200ms cubic-bezier(.2,.7,.2,1),color 200ms cubic-bezier(.2,.7,.2,1),opacity 200ms cubic-bezier(.2,.7,.2,1)"}}>Start an outbound brief<span style={{fontFamily:"'JetBrains Mono',monospace"}}>→</span></a>
<a className="mypen-p12 mypen-p13 mypen-p14" href="#included" style={{border:"1px solid var(--bw-fg)",backgroundImage:"url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2790%27 height=%2790%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.85%27 numOctaves=%273%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27 opacity=%270.12%27/%3E%3C/svg%3E')",backgroundSize:"90px 90px",borderRadius:"999px",padding:"18px 28px",fontSize:"15px",fontWeight:"600",transition:"transform 140ms cubic-bezier(.2,.7,.2,1),background-color 200ms cubic-bezier(.2,.7,.2,1),border-color 200ms cubic-bezier(.2,.7,.2,1),color 200ms cubic-bezier(.2,.7,.2,1),opacity 200ms cubic-bezier(.2,.7,.2,1)"}}>What's included</a>
</div>
</div>
<div style={{display:"flex",gap:"44px",flexWrap:"wrap",borderTop:"1px solid var(--bw-rule)",paddingTop:"22px",font:"500 11px/1.6 'JetBrains Mono',monospace",letterSpacing:".14em",textTransform:"uppercase",opacity:".55"}}>
<span>AI research per recipient</span><span>Dedicated sending infra</span><span>Replies, not just sends</span>
</div>
</div>
</section>
<section style={{padding:"80px 0 0"}}>
<div data-bw-pad="" style={{maxWidth:"1440px",margin:"0 auto",padding:"0 40px"}}>
<div style={{display:"flex",flexDirection:"column",gap:"12px",padding:"32px 28px",borderRadius:"16px",border:"1px solid var(--bw-glass-bd)",background:"var(--bw-glass)",maxWidth:"70ch"}}>
<span style={{font:"500 11px/1 'JetBrains Mono',monospace",letterSpacing:".14em",textTransform:"uppercase",opacity:".5"}}>// Who it's for</span>
<p style={{margin:"0",fontSize:"18px",lineHeight:"1.5",fontWeight:"600",letterSpacing:"-.01em",textWrap:"pretty"}}>B2B companies running outbound who want replies, not just sends.</p>
</div>
</div>
</section>
<section style={{padding:"80px 0 0"}}>
<div data-bw-stack="" style={{maxWidth:"1440px",margin:"0 auto",padding:"0 40px",display:"grid",gridTemplateColumns:"minmax(0,1fr) minmax(0,1fr)",gap:"56px",alignItems:"start"}}>
<div style={{display:"flex",flexDirection:"column",gap:"16px",position:"sticky",top:"120px"}}>
<span style={{font:"500 11px/1 'JetBrains Mono',monospace",letterSpacing:".14em",textTransform:"uppercase",opacity:".5"}}>// The pipeline</span>
<h2 style={{margin:"0",maxWidth:"16ch",fontWeight:"800",fontSize:"clamp(30px,3.6vw,56px)",lineHeight:".98",letterSpacing:"-.04em"}}>Every send runs the same six steps.</h2>
<p style={{margin:"0",maxWidth:"40ch",fontSize:"16px",lineHeight:"1.5",fontWeight:"500",opacity:".7",textWrap:"pretty"}}>No batch-and-blast. Every prospect goes through research, drafting, and a QA check before anything sends — at speed and at scale.</p>
</div>
<div style={{display:"flex",flexDirection:"column",gap:"14px"}}>
{((pipeline) ?? []).map((step: any, __i: number) => (<Fragment key={__i}>
<div style={{opacity:step.opacity,transform:step.transform,transition:"opacity .5s cubic-bezier(.16,1,.3,1),transform .5s cubic-bezier(.16,1,.3,1)",display:"flex",gap:"16px",alignItems:"flex-start",padding:"20px 22px",borderRadius:"14px",border:"1px solid var(--bw-glass-bd)",background:"var(--bw-glass)"}}>
<span style={{flexShrink:"0",width:"34px",height:"34px",borderRadius:"50%",background:"#080705",color:"#E6AF2E",display:"flex",alignItems:"center",justifyContent:"center",font:"600 13px/1 'JetBrains Mono',monospace"}}>{step.num}</span>
<div style={{display:"flex",flexDirection:"column",gap:"4px"}}>
<span style={{fontWeight:"800",fontSize:"17px",letterSpacing:"-.02em"}}>{step.title}</span>
<span style={{fontSize:"14px",lineHeight:"1.5",fontWeight:"500",opacity:".68"}}>{step.desc}</span>
</div>
</div>
</Fragment>))}
</div>
</div>
</section>
<section id="included" style={{padding:"80px 0 0"}}>
<div data-bw-pad="" style={{maxWidth:"1440px",margin:"0 auto",padding:"0 40px",display:"flex",flexDirection:"column",gap:"44px"}}>
<h2 style={{margin:"0",maxWidth:"24ch",fontWeight:"800",fontSize:"clamp(34px,4.6vw,72px)",lineHeight:".94",letterSpacing:"-.04em"}}>What's included.</h2>
<div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",gap:"clamp(18px,2vw,30px)"}}>
<div onMouseEnter={enter0} onMouseLeave={leave0} style={{perspective:"1000px",padding:"20px 0 6px",display:"flex",justifyContent:"center"}}>
<div style={{position:"relative",width:"100%",transformStyle:"preserve-3d",transition:"transform .7s cubic-bezier(.16,1,.3,1)",transform:tilt0}}>
<div style={{position:"absolute",left:"50%",bottom:"calc(100% - 4px)",translate:"-50% 0",display:"flex",flexDirection:"column",alignItems:"center",pointerEvents:"none",opacity:pinO0,transform:pinT0,transition:"opacity .45s ease,transform .55s cubic-bezier(.16,1,.3,1)"}}>
<span style={{background:"#080705",color:"#E6AF2E",border:"1px solid rgba(230,175,46,.55)",borderRadius:"999px",padding:"7px 14px",font:"500 10px/1 'JetBrains Mono',monospace",letterSpacing:".18em",textTransform:"uppercase",whiteSpace:"nowrap"}}>// research</span>
<span style={{width:"1px",height:"54px",background:"linear-gradient(180deg,#E6AF2E,rgba(230,175,46,0))",display:"block"}}></span>
</div>
<span aria-hidden="true" style={{position:"absolute",left:"50%",top:"100%",width:"0",height:"0",transform:"rotateX(70deg)",pointerEvents:"none",opacity:pinO0,transition:"opacity .5s ease",display:"block"}}>
<span style={{position:"absolute",left:"0",top:"0",width:"78px",height:"78px",translate:"-50% -50%",border:"1px solid rgba(230,175,46,.55)",borderRadius:"50%",animation:"bwPing 2.8s cubic-bezier(.2,.7,.2,1) infinite",display:"block"}}></span>
<span style={{position:"absolute",left:"0",top:"0",width:"78px",height:"78px",translate:"-50% -50%",border:"1px solid rgba(230,175,46,.4)",borderRadius:"50%",animation:"bwPing 2.8s cubic-bezier(.2,.7,.2,1) .9s infinite",display:"block"}}></span>
<span style={{position:"absolute",left:"0",top:"0",width:"78px",height:"78px",translate:"-50% -50%",border:"1px solid rgba(230,175,46,.28)",borderRadius:"50%",animation:"bwPing 2.8s cubic-bezier(.2,.7,.2,1) 1.8s infinite",display:"block"}}></span>
</span>
<div style={{position:"relative",display:"flex",flexDirection:"column",gap:"14px",minHeight:"200px",padding:"28px",borderRadius:"14px",border:"1px solid rgba(255,255,250,.16)",color:"#FFFFFA",backgroundColor:"#080705",backgroundImage:"url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2790%27 height=%2790%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.85%27 numOctaves=%273%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27 opacity=%270.42%27/%3E%3C/svg%3E'),radial-gradient(at 20% 10%,oklch(0.62 0.13 84 / .5) 0%,rgba(8,7,5,0) 58%),radial-gradient(at 90% 96%,oklch(0.5 0.14 34 / .45) 0%,rgba(8,7,5,0) 62%)",backgroundSize:"90px 90px,auto,auto",backgroundBlendMode:"overlay,normal,normal",boxShadow:"0 34px 70px -42px rgba(8,7,5,.75),0 1px 0 rgba(255,255,255,.14) inset"}}>
<span style={{font:"500 10px/1 'JetBrains Mono',monospace",letterSpacing:".2em",textTransform:"uppercase",color:"#E6AF2E"}}>/ 01</span>
<span style={{fontWeight:"800",fontSize:"22px",letterSpacing:"-.03em"}}>AI research</span>
<span style={{fontSize:"15px",lineHeight:"1.5",fontWeight:"500",opacity:".72",textWrap:"pretty"}}>AI research on each recipient.</span>
</div>
</div>
</div>
<div onMouseEnter={enter1} onMouseLeave={leave1} style={{perspective:"1000px",padding:"20px 0 6px",display:"flex",justifyContent:"center"}}>
<div style={{position:"relative",width:"100%",transformStyle:"preserve-3d",transition:"transform .7s cubic-bezier(.16,1,.3,1)",transform:tilt1}}>
<div style={{position:"absolute",left:"50%",bottom:"calc(100% - 4px)",translate:"-50% 0",display:"flex",flexDirection:"column",alignItems:"center",pointerEvents:"none",opacity:pinO1,transform:pinT1,transition:"opacity .45s ease,transform .55s cubic-bezier(.16,1,.3,1)"}}>
<span style={{background:"#080705",color:"#E6AF2E",border:"1px solid rgba(230,175,46,.55)",borderRadius:"999px",padding:"7px 14px",font:"500 10px/1 'JetBrains Mono',monospace",letterSpacing:".18em",textTransform:"uppercase",whiteSpace:"nowrap"}}>// draft</span>
<span style={{width:"1px",height:"54px",background:"linear-gradient(180deg,#E6AF2E,rgba(230,175,46,0))",display:"block"}}></span>
</div>
<span aria-hidden="true" style={{position:"absolute",left:"50%",top:"100%",width:"0",height:"0",transform:"rotateX(70deg)",pointerEvents:"none",opacity:pinO1,transition:"opacity .5s ease",display:"block"}}>
<span style={{position:"absolute",left:"0",top:"0",width:"78px",height:"78px",translate:"-50% -50%",border:"1px solid rgba(230,175,46,.55)",borderRadius:"50%",animation:"bwPing 2.8s cubic-bezier(.2,.7,.2,1) infinite",display:"block"}}></span>
<span style={{position:"absolute",left:"0",top:"0",width:"78px",height:"78px",translate:"-50% -50%",border:"1px solid rgba(230,175,46,.4)",borderRadius:"50%",animation:"bwPing 2.8s cubic-bezier(.2,.7,.2,1) .9s infinite",display:"block"}}></span>
<span style={{position:"absolute",left:"0",top:"0",width:"78px",height:"78px",translate:"-50% -50%",border:"1px solid rgba(230,175,46,.28)",borderRadius:"50%",animation:"bwPing 2.8s cubic-bezier(.2,.7,.2,1) 1.8s infinite",display:"block"}}></span>
</span>
<div style={{position:"relative",display:"flex",flexDirection:"column",gap:"14px",minHeight:"200px",padding:"28px",borderRadius:"14px",border:"1px solid rgba(255,255,250,.16)",color:"#FFFFFA",backgroundColor:"#080705",backgroundImage:"url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2790%27 height=%2790%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.85%27 numOctaves=%273%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27 opacity=%270.42%27/%3E%3C/svg%3E'),radial-gradient(at 20% 10%,oklch(0.62 0.13 84 / .5) 0%,rgba(8,7,5,0) 58%),radial-gradient(at 90% 96%,oklch(0.5 0.14 34 / .45) 0%,rgba(8,7,5,0) 62%)",backgroundSize:"90px 90px,auto,auto",backgroundBlendMode:"overlay,normal,normal",boxShadow:"0 34px 70px -42px rgba(8,7,5,.75),0 1px 0 rgba(255,255,255,.14) inset"}}>
<span style={{font:"500 10px/1 'JetBrains Mono',monospace",letterSpacing:".2em",textTransform:"uppercase",color:"#E6AF2E"}}>/ 02</span>
<span style={{fontWeight:"800",fontSize:"22px",letterSpacing:"-.03em"}}>Personalized draft</span>
<span style={{fontSize:"15px",lineHeight:"1.5",fontWeight:"500",opacity:".72",textWrap:"pretty"}}>A genuinely personalized draft for each recipient.</span>
</div>
</div>
</div>
<div onMouseEnter={enter2} onMouseLeave={leave2} style={{perspective:"1000px",padding:"20px 0 6px",display:"flex",justifyContent:"center"}}>
<div style={{position:"relative",width:"100%",transformStyle:"preserve-3d",transition:"transform .7s cubic-bezier(.16,1,.3,1)",transform:tilt2}}>
<div style={{position:"absolute",left:"50%",bottom:"calc(100% - 4px)",translate:"-50% 0",display:"flex",flexDirection:"column",alignItems:"center",pointerEvents:"none",opacity:pinO2,transform:pinT2,transition:"opacity .45s ease,transform .55s cubic-bezier(.16,1,.3,1)"}}>
<span style={{background:"#080705",color:"#E6AF2E",border:"1px solid rgba(230,175,46,.55)",borderRadius:"999px",padding:"7px 14px",font:"500 10px/1 'JetBrains Mono',monospace",letterSpacing:".18em",textTransform:"uppercase",whiteSpace:"nowrap"}}>// send</span>
<span style={{width:"1px",height:"54px",background:"linear-gradient(180deg,#E6AF2E,rgba(230,175,46,0))",display:"block"}}></span>
</div>
<span aria-hidden="true" style={{position:"absolute",left:"50%",top:"100%",width:"0",height:"0",transform:"rotateX(70deg)",pointerEvents:"none",opacity:pinO2,transition:"opacity .5s ease",display:"block"}}>
<span style={{position:"absolute",left:"0",top:"0",width:"78px",height:"78px",translate:"-50% -50%",border:"1px solid rgba(230,175,46,.55)",borderRadius:"50%",animation:"bwPing 2.8s cubic-bezier(.2,.7,.2,1) infinite",display:"block"}}></span>
<span style={{position:"absolute",left:"0",top:"0",width:"78px",height:"78px",translate:"-50% -50%",border:"1px solid rgba(230,175,46,.4)",borderRadius:"50%",animation:"bwPing 2.8s cubic-bezier(.2,.7,.2,1) .9s infinite",display:"block"}}></span>
<span style={{position:"absolute",left:"0",top:"0",width:"78px",height:"78px",translate:"-50% -50%",border:"1px solid rgba(230,175,46,.28)",borderRadius:"50%",animation:"bwPing 2.8s cubic-bezier(.2,.7,.2,1) 1.8s infinite",display:"block"}}></span>
</span>
<div style={{position:"relative",display:"flex",flexDirection:"column",gap:"14px",minHeight:"200px",padding:"28px",borderRadius:"14px",border:"1px solid rgba(255,255,250,.16)",color:"#FFFFFA",backgroundColor:"#080705",backgroundImage:"url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2790%27 height=%2790%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.85%27 numOctaves=%273%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27 opacity=%270.42%27/%3E%3C/svg%3E'),radial-gradient(at 20% 10%,oklch(0.62 0.13 84 / .5) 0%,rgba(8,7,5,0) 58%),radial-gradient(at 90% 96%,oklch(0.5 0.14 34 / .45) 0%,rgba(8,7,5,0) 62%)",backgroundSize:"90px 90px,auto,auto",backgroundBlendMode:"overlay,normal,normal",boxShadow:"0 34px 70px -42px rgba(8,7,5,.75),0 1px 0 rgba(255,255,255,.14) inset"}}>
<span style={{font:"500 10px/1 'JetBrains Mono',monospace",letterSpacing:".2em",textTransform:"uppercase",color:"#E6AF2E"}}>/ 03</span>
<span style={{fontWeight:"800",fontSize:"22px",letterSpacing:"-.03em"}}>Sending via Instantly</span>
<span style={{fontSize:"15px",lineHeight:"1.5",fontWeight:"500",opacity:".72",textWrap:"pretty"}}>Sending via Instantly, on dedicated infrastructure.</span>
</div>
</div>
</div>
<div onMouseEnter={enter3} onMouseLeave={leave3} style={{perspective:"1000px",padding:"20px 0 6px",display:"flex",justifyContent:"center"}}>
<div style={{position:"relative",width:"100%",transformStyle:"preserve-3d",transition:"transform .7s cubic-bezier(.16,1,.3,1)",transform:tilt3}}>
<div style={{position:"absolute",left:"50%",bottom:"calc(100% - 4px)",translate:"-50% 0",display:"flex",flexDirection:"column",alignItems:"center",pointerEvents:"none",opacity:pinO3,transform:pinT3,transition:"opacity .45s ease,transform .55s cubic-bezier(.16,1,.3,1)"}}>
<span style={{background:"#080705",color:"#E6AF2E",border:"1px solid rgba(230,175,46,.55)",borderRadius:"999px",padding:"7px 14px",font:"500 10px/1 'JetBrains Mono',monospace",letterSpacing:".18em",textTransform:"uppercase",whiteSpace:"nowrap"}}>// report</span>
<span style={{width:"1px",height:"54px",background:"linear-gradient(180deg,#E6AF2E,rgba(230,175,46,0))",display:"block"}}></span>
</div>
<span aria-hidden="true" style={{position:"absolute",left:"50%",top:"100%",width:"0",height:"0",transform:"rotateX(70deg)",pointerEvents:"none",opacity:pinO3,transition:"opacity .5s ease",display:"block"}}>
<span style={{position:"absolute",left:"0",top:"0",width:"78px",height:"78px",translate:"-50% -50%",border:"1px solid rgba(230,175,46,.55)",borderRadius:"50%",animation:"bwPing 2.8s cubic-bezier(.2,.7,.2,1) infinite",display:"block"}}></span>
<span style={{position:"absolute",left:"0",top:"0",width:"78px",height:"78px",translate:"-50% -50%",border:"1px solid rgba(230,175,46,.4)",borderRadius:"50%",animation:"bwPing 2.8s cubic-bezier(.2,.7,.2,1) .9s infinite",display:"block"}}></span>
<span style={{position:"absolute",left:"0",top:"0",width:"78px",height:"78px",translate:"-50% -50%",border:"1px solid rgba(230,175,46,.28)",borderRadius:"50%",animation:"bwPing 2.8s cubic-bezier(.2,.7,.2,1) 1.8s infinite",display:"block"}}></span>
</span>
<div style={{position:"relative",display:"flex",flexDirection:"column",gap:"14px",minHeight:"200px",padding:"28px",borderRadius:"14px",border:"1px solid rgba(255,255,250,.16)",color:"#FFFFFA",backgroundColor:"#080705",backgroundImage:"url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2790%27 height=%2790%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.85%27 numOctaves=%273%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27 opacity=%270.42%27/%3E%3C/svg%3E'),radial-gradient(at 20% 10%,oklch(0.62 0.13 84 / .5) 0%,rgba(8,7,5,0) 58%),radial-gradient(at 90% 96%,oklch(0.5 0.14 34 / .45) 0%,rgba(8,7,5,0) 62%)",backgroundSize:"90px 90px,auto,auto",backgroundBlendMode:"overlay,normal,normal",boxShadow:"0 34px 70px -42px rgba(8,7,5,.75),0 1px 0 rgba(255,255,255,.14) inset"}}>
<span style={{font:"500 10px/1 'JetBrains Mono',monospace",letterSpacing:".2em",textTransform:"uppercase",color:"#E6AF2E"}}>/ 04</span>
<span style={{fontWeight:"800",fontSize:"22px",letterSpacing:"-.03em"}}>Delivery reporting</span>
<span style={{fontSize:"15px",lineHeight:"1.5",fontWeight:"500",opacity:".72",textWrap:"pretty"}}>Delivery reporting on every send.</span>
</div>
</div>
</div>
</div>
</div>
</section>
{showPricing ? (<>
<section style={{padding:"120px 0 0"}}>
<div data-bw-pad="" style={{maxWidth:"1440px",margin:"0 auto",padding:"0 40px",display:"flex",flexDirection:"column",gap:"44px"}}>
<div style={{display:"flex",flexDirection:"column",gap:"16px",maxWidth:"64ch",borderBottom:"1px solid var(--bw-rule)",paddingBottom:"32px"}}>
<span style={{font:"500 11px/1 'JetBrains Mono',monospace",letterSpacing:".14em",textTransform:"uppercase",opacity:".5"}}>// Pricing</span>
<h2 style={{margin:"0",fontWeight:"800",fontSize:"clamp(32px,4vw,56px)",letterSpacing:"-.04em",lineHeight:"1"}}>Plans that scale with send volume.</h2>
</div>
<div data-bw-stack="" style={{display:"grid",gridTemplateColumns:"repeat(5,1fr)",gap:"16px"}}>
<div style={{display:"flex",flexDirection:"column",gap:"16px",padding:"24px 20px",borderRadius:"16px",border:"1px solid var(--bw-glass-bd)",background:"var(--bw-glass)"}}>
<span style={{font:"500 10px/1 'JetBrains Mono',monospace",letterSpacing:".2em",textTransform:"uppercase",color:"var(--bw-accent)"}}>/ 01</span>
<div style={{display:"flex",flexDirection:"column",gap:"6px"}}>
<span style={{fontWeight:"800",fontSize:"22px",letterSpacing:"-.03em",lineHeight:"1"}}>Trial</span>
<span style={{fontWeight:"700",fontSize:"15px",letterSpacing:"-.01em"}}>$150 <span style={{fontSize:"11px",fontWeight:"500",opacity:".55"}}>one-time</span></span>
</div>
<div style={{height:"1px",background:"var(--bw-rule)"}}></div>
<span style={{font:"500 10px/1 'JetBrains Mono',monospace",letterSpacing:".1em",textTransform:"uppercase",opacity:".5"}}>Emails/month</span>
<span style={{fontWeight:"700",fontSize:"18px",letterSpacing:"-.01em"}}>50</span>
<a className="mypen-p15 mypen-p16 mypen-p17" href="/contact" style={{marginTop:"auto",display:"inline-flex",alignItems:"center",justifyContent:"center",gap:"8px",padding:"11px 14px",borderRadius:"999px",border:"1px solid var(--bw-fg)",fontSize:"12px",fontWeight:"600",transition:"transform 140ms cubic-bezier(.2,.7,.2,1),background-color 200ms cubic-bezier(.2,.7,.2,1),border-color 200ms cubic-bezier(.2,.7,.2,1),color 200ms cubic-bezier(.2,.7,.2,1),opacity 200ms cubic-bezier(.2,.7,.2,1)"}}>Start with Trial</a>
</div>
<div style={{display:"flex",flexDirection:"column",gap:"16px",padding:"24px 20px",borderRadius:"16px",border:"1px solid var(--bw-glass-bd)",background:"var(--bw-glass)"}}>
<span style={{font:"500 10px/1 'JetBrains Mono',monospace",letterSpacing:".2em",textTransform:"uppercase",color:"var(--bw-accent)"}}>/ 02</span>
<div style={{display:"flex",flexDirection:"column",gap:"6px"}}>
<span style={{fontWeight:"800",fontSize:"22px",letterSpacing:"-.03em",lineHeight:"1"}}>Starter</span>
<span style={{fontWeight:"700",fontSize:"15px",letterSpacing:"-.01em"}}>$1,500<span style={{fontSize:"11px",fontWeight:"500",opacity:".55"}}>/mo</span></span>
</div>
<div style={{height:"1px",background:"var(--bw-rule)"}}></div>
<span style={{font:"500 10px/1 'JetBrains Mono',monospace",letterSpacing:".1em",textTransform:"uppercase",opacity:".5"}}>Emails/month</span>
<span style={{fontWeight:"700",fontSize:"18px",letterSpacing:"-.01em"}}>500</span>
<a className="mypen-p18 mypen-p19 mypen-p20" href="/contact" style={{marginTop:"auto",display:"inline-flex",alignItems:"center",justifyContent:"center",gap:"8px",padding:"11px 14px",borderRadius:"999px",border:"1px solid var(--bw-fg)",fontSize:"12px",fontWeight:"600",transition:"transform 140ms cubic-bezier(.2,.7,.2,1),background-color 200ms cubic-bezier(.2,.7,.2,1),border-color 200ms cubic-bezier(.2,.7,.2,1),color 200ms cubic-bezier(.2,.7,.2,1),opacity 200ms cubic-bezier(.2,.7,.2,1)"}}>Start with Starter</a>
</div>
<div style={{position:"relative",display:"flex",flexDirection:"column",gap:"16px",padding:"24px 20px",borderRadius:"16px",border:"1px solid rgba(230,175,46,.5)",color:"#FFFFFA",backgroundColor:"#080705",backgroundImage:"url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2790%27 height=%2790%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.85%27 numOctaves=%273%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27 opacity=%270.4%27/%3E%3C/svg%3E'),radial-gradient(at 16% 8%,oklch(0.62 0.13 84 / .4) 0%,rgba(8,7,5,0) 58%),radial-gradient(at 92% 96%,oklch(0.48 0.14 34 / .36) 0%,rgba(8,7,5,0) 62%)",backgroundSize:"90px 90px,auto,auto",backgroundBlendMode:"overlay,normal,normal",boxShadow:"0 34px 70px -42px rgba(8,7,5,.75)"}}>
<span style={{position:"absolute",top:"-13px",left:"20px",background:"#E6AF2E",color:"#080705",borderRadius:"999px",padding:"5px 12px",font:"600 9px/1 'JetBrains Mono',monospace",letterSpacing:".14em",textTransform:"uppercase"}}>Most picked</span>
<span style={{font:"500 10px/1 'JetBrains Mono',monospace",letterSpacing:".2em",textTransform:"uppercase",color:"#E6AF2E"}}>/ 03</span>
<div style={{display:"flex",flexDirection:"column",gap:"6px"}}>
<span style={{fontWeight:"800",fontSize:"22px",letterSpacing:"-.03em",lineHeight:"1"}}>Growth</span>
<span style={{fontWeight:"700",fontSize:"15px",letterSpacing:"-.01em"}}>$3,000<span style={{fontSize:"11px",fontWeight:"500",opacity:".6"}}>/mo</span></span>
</div>
<div style={{height:"1px",background:"rgba(255,255,250,.16)"}}></div>
<span style={{font:"500 10px/1 'JetBrains Mono',monospace",letterSpacing:".1em",textTransform:"uppercase",opacity:".6"}}>Emails/month</span>
<span style={{fontWeight:"700",fontSize:"18px",letterSpacing:"-.01em"}}>1,500</span>
<a className="mypen-p21 mypen-p22 mypen-p23" data-bw-cta="" href="/contact" style={{marginTop:"auto",display:"inline-flex",alignItems:"center",justifyContent:"center",gap:"8px",padding:"11px 14px",borderRadius:"999px",color:"#FFFFFA",fontSize:"12px",fontWeight:"600",backgroundColor:"#080705",backgroundImage:"url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2790%27 height=%2790%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.85%27 numOctaves=%273%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27 opacity=%270.45%27/%3E%3C/svg%3E') 56%) 58%) 62%);background-size:90px 90px;background-blend-mode:overlay;box-shadow:0 14px 30px -18px rgba(8,7,5,.9),0 1px 0 rgba(255,255,255,.26) inset;transition:transform 140ms cubic-bezier(.2,.7,.2,1),background-color 200ms cubic-bezier(.2,.7,.2,1),border-color 200ms cubic-bezier(.2,.7,.2,1),color 200ms cubic-bezier(.2,.7,.2,1),opacity 200ms cubic-bezier(.2,.7,.2,1)"}}>Start with Growth</a>
</div>
<div style={{display:"flex",flexDirection:"column",gap:"16px",padding:"24px 20px",borderRadius:"16px",border:"1px solid var(--bw-glass-bd)",background:"var(--bw-glass)"}}>
<span style={{font:"500 10px/1 'JetBrains Mono',monospace",letterSpacing:".2em",textTransform:"uppercase",color:"var(--bw-accent)"}}>/ 04</span>
<div style={{display:"flex",flexDirection:"column",gap:"6px"}}>
<span style={{fontWeight:"800",fontSize:"22px",letterSpacing:"-.03em",lineHeight:"1"}}>Scale</span>
<span style={{fontWeight:"700",fontSize:"15px",letterSpacing:"-.01em"}}>$5,000<span style={{fontSize:"11px",fontWeight:"500",opacity:".55"}}>/mo</span></span>
</div>
<div style={{height:"1px",background:"var(--bw-rule)"}}></div>
<span style={{font:"500 10px/1 'JetBrains Mono',monospace",letterSpacing:".1em",textTransform:"uppercase",opacity:".5"}}>Emails/month</span>
<span style={{fontWeight:"700",fontSize:"18px",letterSpacing:"-.01em"}}>3,000</span>
<a className="mypen-p24 mypen-p25 mypen-p26" href="/contact" style={{marginTop:"auto",display:"inline-flex",alignItems:"center",justifyContent:"center",gap:"8px",padding:"11px 14px",borderRadius:"999px",border:"1px solid var(--bw-fg)",fontSize:"12px",fontWeight:"600",transition:"transform 140ms cubic-bezier(.2,.7,.2,1),background-color 200ms cubic-bezier(.2,.7,.2,1),border-color 200ms cubic-bezier(.2,.7,.2,1),color 200ms cubic-bezier(.2,.7,.2,1),opacity 200ms cubic-bezier(.2,.7,.2,1)"}}>Start with Scale</a>
</div>
<div style={{display:"flex",flexDirection:"column",gap:"16px",padding:"24px 20px",borderRadius:"16px",border:"1px solid var(--bw-glass-bd)",background:"var(--bw-glass)"}}>
<span style={{font:"500 10px/1 'JetBrains Mono',monospace",letterSpacing:".2em",textTransform:"uppercase",color:"var(--bw-accent)"}}>/ 05</span>
<div style={{display:"flex",flexDirection:"column",gap:"6px"}}>
<span style={{fontWeight:"800",fontSize:"22px",letterSpacing:"-.03em",lineHeight:"1"}}>Enterprise</span>
<span style={{fontWeight:"700",fontSize:"15px",letterSpacing:"-.01em"}}>Custom</span>
</div>
<div style={{height:"1px",background:"var(--bw-rule)"}}></div>
<span style={{font:"500 10px/1 'JetBrains Mono',monospace",letterSpacing:".1em",textTransform:"uppercase",opacity:".5"}}>Emails/month</span>
<span style={{fontWeight:"700",fontSize:"18px",letterSpacing:"-.01em"}}>Custom</span>
<a className="mypen-p27 mypen-p28 mypen-p29" href="/contact" style={{marginTop:"auto",display:"inline-flex",alignItems:"center",justifyContent:"center",gap:"8px",padding:"11px 14px",borderRadius:"999px",border:"1px solid var(--bw-fg)",fontSize:"12px",fontWeight:"600",transition:"transform 140ms cubic-bezier(.2,.7,.2,1),background-color 200ms cubic-bezier(.2,.7,.2,1),border-color 200ms cubic-bezier(.2,.7,.2,1),color 200ms cubic-bezier(.2,.7,.2,1),opacity 200ms cubic-bezier(.2,.7,.2,1)"}}>Talk to us</a>
</div>
</div>
<span style={{font:"500 10px/1.6 'JetBrains Mono',monospace",letterSpacing:".1em",textTransform:"uppercase",opacity:".4"}}>Includes AI research on each recipient, a personalized draft, sending via Instantly, and delivery reporting.</span>
</div>
</section>
</>) : null}
<section style={{padding:"64px 0 96px"}}>
<div data-bw-pad="" style={{maxWidth:"1440px",margin:"0 auto",padding:"0 40px",display:"flex",flexDirection:"column",gap:"24px"}}>
<span style={{font:"500 11px/1 'JetBrains Mono',monospace",letterSpacing:".14em",textTransform:"uppercase",opacity:".5"}}>// Other services</span>
<div style={{display:"flex",gap:"12px",flexWrap:"wrap"}}>
<a className="mypen-p30 mypen-p31 mypen-p32" href="/website-and-portfolio" style={{border:"1px solid var(--bw-fg)",backgroundImage:"url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2790%27 height=%2790%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.85%27 numOctaves=%273%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27 opacity=%270.12%27/%3E%3C/svg%3E')",backgroundSize:"90px 90px",borderRadius:"999px",padding:"14px 22px",fontSize:"14px",fontWeight:"600",transition:"transform 140ms cubic-bezier(.2,.7,.2,1),background-color 200ms cubic-bezier(.2,.7,.2,1),border-color 200ms cubic-bezier(.2,.7,.2,1),color 200ms cubic-bezier(.2,.7,.2,1),opacity 200ms cubic-bezier(.2,.7,.2,1)"}}>Website &amp; portfolio</a>
<a className="mypen-p33 mypen-p34 mypen-p35" href="/interactive-assets" style={{border:"1px solid var(--bw-fg)",backgroundImage:"url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2790%27 height=%2790%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.85%27 numOctaves=%273%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27 opacity=%270.12%27/%3E%3C/svg%3E')",backgroundSize:"90px 90px",borderRadius:"999px",padding:"14px 22px",fontSize:"14px",fontWeight:"600",transition:"transform 140ms cubic-bezier(.2,.7,.2,1),background-color 200ms cubic-bezier(.2,.7,.2,1),border-color 200ms cubic-bezier(.2,.7,.2,1),color 200ms cubic-bezier(.2,.7,.2,1),opacity 200ms cubic-bezier(.2,.7,.2,1)"}}>Interactive assets</a>
<a className="mypen-p36 mypen-p37 mypen-p38" href="/brand-design" style={{border:"1px solid var(--bw-fg)",backgroundImage:"url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2790%27 height=%2790%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.85%27 numOctaves=%273%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27 opacity=%270.12%27/%3E%3C/svg%3E')",backgroundSize:"90px 90px",borderRadius:"999px",padding:"14px 22px",fontSize:"14px",fontWeight:"600",transition:"transform 140ms cubic-bezier(.2,.7,.2,1),background-color 200ms cubic-bezier(.2,.7,.2,1),border-color 200ms cubic-bezier(.2,.7,.2,1),color 200ms cubic-bezier(.2,.7,.2,1),opacity 200ms cubic-bezier(.2,.7,.2,1)"}}>Brand design</a>
<a className="mypen-p39 mypen-p40 mypen-p41" href="/b2b-answer-engine" style={{border:"1px solid var(--bw-fg)",backgroundImage:"url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2790%27 height=%2790%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.85%27 numOctaves=%273%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27 opacity=%270.12%27/%3E%3C/svg%3E')",backgroundSize:"90px 90px",borderRadius:"999px",padding:"14px 22px",fontSize:"14px",fontWeight:"600",transition:"transform 140ms cubic-bezier(.2,.7,.2,1),background-color 200ms cubic-bezier(.2,.7,.2,1),border-color 200ms cubic-bezier(.2,.7,.2,1),color 200ms cubic-bezier(.2,.7,.2,1),opacity 200ms cubic-bezier(.2,.7,.2,1)"}}>B2B answer engine placement</a>
<a className="mypen-p42 mypen-p43 mypen-p44" href="/lead-detective" style={{border:"1px solid var(--bw-fg)",backgroundImage:"url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2790%27 height=%2790%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.85%27 numOctaves=%273%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27 opacity=%270.12%27/%3E%3C/svg%3E')",backgroundSize:"90px 90px",borderRadius:"999px",padding:"14px 22px",fontSize:"14px",fontWeight:"600",transition:"transform 140ms cubic-bezier(.2,.7,.2,1),background-color 200ms cubic-bezier(.2,.7,.2,1),border-color 200ms cubic-bezier(.2,.7,.2,1),color 200ms cubic-bezier(.2,.7,.2,1),opacity 200ms cubic-bezier(.2,.7,.2,1)"}}>Lead detective</a>
<a className="mypen-p45 mypen-p46 mypen-p47" href="/researchify" style={{border:"1px solid var(--bw-fg)",backgroundImage:"url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2790%27 height=%2790%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.85%27 numOctaves=%273%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27 opacity=%270.12%27/%3E%3C/svg%3E')",backgroundSize:"90px 90px",borderRadius:"999px",padding:"14px 22px",fontSize:"14px",fontWeight:"600",transition:"transform 140ms cubic-bezier(.2,.7,.2,1),background-color 200ms cubic-bezier(.2,.7,.2,1),border-color 200ms cubic-bezier(.2,.7,.2,1),color 200ms cubic-bezier(.2,.7,.2,1),opacity 200ms cubic-bezier(.2,.7,.2,1)"}}>Researchify</a>
<a className="mypen-p48 mypen-p49 mypen-p50" href="/self-serve-buying" style={{border:"1px solid var(--bw-fg)",backgroundImage:"url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2790%27 height=%2790%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.85%27 numOctaves=%273%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27 opacity=%270.12%27/%3E%3C/svg%3E')",backgroundSize:"90px 90px",borderRadius:"999px",padding:"14px 22px",fontSize:"14px",fontWeight:"600",transition:"transform 140ms cubic-bezier(.2,.7,.2,1),background-color 200ms cubic-bezier(.2,.7,.2,1),border-color 200ms cubic-bezier(.2,.7,.2,1),color 200ms cubic-bezier(.2,.7,.2,1),opacity 200ms cubic-bezier(.2,.7,.2,1)"}}>Self-serve buying</a>
</div>
<div style={{display:"flex",justifyContent:"space-between",gap:"24px",flexWrap:"wrap",borderTop:"1px solid var(--bw-rule)",paddingTop:"24px",font:"500 11px/1 'JetBrains Mono',monospace",letterSpacing:".14em",textTransform:"uppercase",opacity:".5"}}>
<span>© 2026 Blackware Labs</span><a className="mypen-p51 mypen-p52" href="/">← Back to homepage</a>
</div>
</div>
</section>
</div>
</div>
</>);
}