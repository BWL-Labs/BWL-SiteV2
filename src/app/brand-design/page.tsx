"use client";

import "@/styles/pages/brand.css";
import { useBrandDesignPageLogic } from "@/generated/brand.logic";
export default function BrandDesignPage() {
  const v = useBrandDesignPageLogic();
  const { cardT0, cardT1, cardT2, cardT3, cardT4, cardT5, cardT6, cardT7, closeSel, enter0, enter1, enter2, enter3, hasSel, leave0, leave1, leave2, leave3, onDown, onMove, onUp, pick0, pick1, pick2, pick3, pick4, pick5, pick6, pick7, pinO0, pinO1, pinO2, pinO3, pinT0, pinT1, pinT2, pinT3, ringRef, selName, tilt0, tilt1, tilt2, tilt3 } = v;
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
<a className="brand-p1 brand-p2" href="/" style={{display:"flex",alignItems:"center",gap:"10px",flexShrink:"0",transition:"transform 140ms cubic-bezier(.2,.7,.2,1),background-color 200ms cubic-bezier(.2,.7,.2,1),border-color 200ms cubic-bezier(.2,.7,.2,1),color 200ms cubic-bezier(.2,.7,.2,1),opacity 200ms cubic-bezier(.2,.7,.2,1)"}}>
<img data-bw-logo="" src="/assets/blackware-logo.svg" alt="Blackware Labs" style={{height:"38px",width:"auto",display:"block",flexShrink:"0"}} />
</a>
<div data-bw-crumb="" style={{display:"flex",alignItems:"center",gap:"14px",font:"500 11px/1 'JetBrains Mono',monospace",letterSpacing:".14em",textTransform:"uppercase",opacity:".7"}}>
<span style={{width:"22px",height:"1px",background:"var(--bw-fg)",display:"block"}}></span><a href="/#services">Service 01 — Brand design</a></div>
<div data-bw-head-controls=""><button className="brand-p3 brand-p4 brand-p5" data-bw-theme-toggle="" type="button" aria-label="Switch between day and night" style={{width:"40px",height:"40px",borderRadius:"999px",border:"1px solid var(--bw-toggle-bd)",background:"transparent",color:"var(--bw-fg)",cursor:"pointer",display:"grid",placeItems:"center",flexShrink:"0",padding:"0",transition:"border-color .16s cubic-bezier(.2,.7,.2,1),color .16s cubic-bezier(.2,.7,.2,1),transform 140ms cubic-bezier(.2,.7,.2,1),background-color 200ms cubic-bezier(.2,.7,.2,1),opacity 200ms cubic-bezier(.2,.7,.2,1)"}}>
<svg data-bw-icon="sun" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2.4M12 19.6V22M2 12h2.4M19.6 12H22M4.9 4.9l1.7 1.7M17.4 17.4l1.7 1.7M19.1 4.9l-1.7 1.7M6.6 17.4l-1.7 1.7"></path></svg>
<svg data-bw-icon="moon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20.5 14.6A8.6 8.6 0 0 1 9.4 3.5a8.6 8.6 0 1 0 11.1 11.1Z"></path></svg>
</button>
<a className="brand-p6 brand-p7 brand-p8" data-bw-cta="" href="/contact" style={{display:"inline-flex",alignItems:"center",gap:"10px",backgroundColor:"#080705",backgroundImage:"url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2790%27 height=%2790%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.85%27 numOctaves=%273%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27 opacity=%270.45%27/%3E%3C/svg%3E')",backgroundSize:"90px 90px",backgroundBlendMode:"overlay",color:"#FFFFFA",padding:"12px 20px",borderRadius:"999px",border:"1px solid var(--bw-glass-bd)",boxShadow:"0 14px 30px -18px rgba(8,7,5,.9),0 1px 0 rgba(255,255,255,.3) inset",fontSize:"13px",fontWeight:"600",letterSpacing:"-.01em",flexShrink:"0",transition:"transform 140ms cubic-bezier(.2,.7,.2,1),background-color 200ms cubic-bezier(.2,.7,.2,1),border-color 200ms cubic-bezier(.2,.7,.2,1),color 200ms cubic-bezier(.2,.7,.2,1),opacity 200ms cubic-bezier(.2,.7,.2,1)"}}>
<span style={{width:"6px",height:"6px",borderRadius:"50%",background:"#FFFFFA",animation:"bwBlink 2s steps(1,end) infinite"}}></span>Book a call</a></div>
</div>
</header>
<section data-bw-hero="" data-bw-hero-photo-section="" style={{padding:"186px 0 0",position:"relative",overflow:"hidden"}}>
<img data-bw-hero-photo="" src="/uploads/brand-hero-bg.webp" alt="" aria-hidden="true" decoding="async" fetchPriority="high" style={{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"right center",zIndex:0}} />
<span aria-hidden="true" style={{position:"absolute",inset:0,zIndex:0,background:"linear-gradient(to right, rgba(8,7,5,.35) 0%, rgba(8,7,5,0) 60%)"}}></span>
<div data-bw-pad="" style={{maxWidth:"1440px",margin:"0 auto",padding:"0 40px"}}>
<div data-bw-hero-safe="" style={{maxWidth:"min(640px,50%)",display:"flex",flexDirection:"column",gap:"34px"}}>
<div style={{display:"flex",alignItems:"center",gap:"10px",font:"500 12px/1 'JetBrains Mono',monospace",letterSpacing:".14em",textTransform:"uppercase",color:"#FFFFFA",animation:"bwRise .7s cubic-bezier(.16,1,.3,1) both"}}>
<span style={{width:"7px",height:"7px",background:"#E6AF2E",display:"block"}}></span>// 01 — Brand design</div>
<h1 style={{margin:"0",maxWidth:"22ch",fontWeight:"900",letterSpacing:"-.01em",lineHeight:".86",fontSize:"clamp(36px,6.3vw,104px)",textTransform:"uppercase",color:"#FFFFFA",animation:"bwRise .8s cubic-bezier(.16,1,.3,1) .06s both"}}>A brand that survives the sales call</h1>
<div style={{display:"flex",flexDirection:"column",gap:"22px",alignItems:"flex-start",animation:"bwRise .8s cubic-bezier(.16,1,.3,1) .12s both"}}>
<p style={{margin:"0",maxWidth:"48ch",fontSize:"18px",lineHeight:"1.5",fontWeight:"500",color:"#FFFFFA",opacity:".78",textWrap:"pretty"}}>Positioning, naming, identity systems, and the messaging spine everything else hangs from. Built to hold up in a boardroom and on a banner ad.</p>
<div style={{display:"flex",gap:"14px",flexWrap:"wrap",alignItems:"center"}}>
<a className="brand-p9 brand-p10 brand-p11" data-bw-cta="" href="/contact" style={{display:"inline-flex",alignItems:"center",gap:"12px",padding:"18px 28px",borderRadius:"999px",color:"#080705",fontSize:"15px",fontWeight:"600",letterSpacing:"-.01em",backgroundColor:"#E6AF2E",boxShadow:"0 16px 34px -20px rgba(0,0,0,.65),0 1px 0 rgba(255,255,255,.4) inset",transition:"transform 140ms cubic-bezier(.2,.7,.2,1),background-color 200ms cubic-bezier(.2,.7,.2,1),border-color 200ms cubic-bezier(.2,.7,.2,1),color 200ms cubic-bezier(.2,.7,.2,1),opacity 200ms cubic-bezier(.2,.7,.2,1)"}}>Start a brand brief<span style={{fontFamily:"'JetBrains Mono',monospace"}}>→</span></a>
<a className="brand-p12 brand-p13 brand-p14" href="#included" style={{border:"1px solid rgba(255,255,250,.55)",color:"#FFFFFA",borderRadius:"999px",padding:"18px 28px",fontSize:"15px",fontWeight:"600",transition:"transform 140ms cubic-bezier(.2,.7,.2,1),background-color 200ms cubic-bezier(.2,.7,.2,1),border-color 200ms cubic-bezier(.2,.7,.2,1),color 200ms cubic-bezier(.2,.7,.2,1),opacity 200ms cubic-bezier(.2,.7,.2,1)"}}>What's included</a>
</div>
</div>
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
<span style={{background:"#080705",color:"#E6AF2E",border:"1px solid rgba(230,175,46,.55)",borderRadius:"999px",padding:"7px 14px",font:"500 10px/1 'JetBrains Mono',monospace",letterSpacing:".18em",textTransform:"uppercase",whiteSpace:"nowrap"}}>// positioning</span>
<span style={{width:"1px",height:"54px",background:"linear-gradient(180deg,#E6AF2E,rgba(230,175,46,0))",display:"block"}}></span>
</div>
<span aria-hidden="true" style={{position:"absolute",left:"50%",top:"100%",width:"0",height:"0",transform:"rotateX(70deg)",pointerEvents:"none",opacity:pinO0,transition:"opacity .5s ease",display:"block"}}>
<span style={{position:"absolute",left:"0",top:"0",width:"78px",height:"78px",translate:"-50% -50%",border:"1px solid rgba(230,175,46,.55)",borderRadius:"50%",animation:"bwPing 2.8s cubic-bezier(.2,.7,.2,1) infinite",display:"block"}}></span>
<span style={{position:"absolute",left:"0",top:"0",width:"78px",height:"78px",translate:"-50% -50%",border:"1px solid rgba(230,175,46,.4)",borderRadius:"50%",animation:"bwPing 2.8s cubic-bezier(.2,.7,.2,1) .9s infinite",display:"block"}}></span>
<span style={{position:"absolute",left:"0",top:"0",width:"78px",height:"78px",translate:"-50% -50%",border:"1px solid rgba(230,175,46,.28)",borderRadius:"50%",animation:"bwPing 2.8s cubic-bezier(.2,.7,.2,1) 1.8s infinite",display:"block"}}></span>
</span>
<div style={{position:"relative",display:"flex",flexDirection:"column",gap:"14px",minHeight:"224px",padding:"28px",borderRadius:"14px",border:"1px solid rgba(255,255,250,.16)",color:"#FFFFFA",backgroundColor:"#080705",backgroundImage:"url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2790%27 height=%2790%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.85%27 numOctaves=%273%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27 opacity=%270.42%27/%3E%3C/svg%3E'),radial-gradient(at 20% 10%,oklch(0.62 0.13 84 / .5) 0%,rgba(8,7,5,0) 58%),radial-gradient(at 90% 96%,oklch(0.5 0.14 34 / .45) 0%,rgba(8,7,5,0) 62%)",backgroundSize:"90px 90px,auto,auto",backgroundBlendMode:"overlay,normal,normal",boxShadow:"0 34px 70px -42px rgba(8,7,5,.75),0 1px 0 rgba(255,255,255,.14) inset"}}>
<span style={{font:"500 10px/1 'JetBrains Mono',monospace",letterSpacing:".2em",textTransform:"uppercase",color:"#E6AF2E"}}>/ 01</span>
<span style={{fontWeight:"800",fontSize:"22px",letterSpacing:"-.03em"}}>Positioning &amp; narrative</span>
<span style={{fontSize:"15px",lineHeight:"1.5",fontWeight:"500",opacity:".72",textWrap:"pretty"}}>One sentence your CEO, your reps, and your ads all say the same way. Tested against the deals you lost.</span>
</div>
</div>
</div>
<div onMouseEnter={enter1} onMouseLeave={leave1} style={{perspective:"1000px",padding:"20px 0 6px",display:"flex",justifyContent:"center"}}>
<div style={{position:"relative",width:"100%",transformStyle:"preserve-3d",transition:"transform .7s cubic-bezier(.16,1,.3,1)",transform:tilt1}}>
<div style={{position:"absolute",left:"50%",bottom:"calc(100% - 4px)",translate:"-50% 0",display:"flex",flexDirection:"column",alignItems:"center",pointerEvents:"none",opacity:pinO1,transform:pinT1,transition:"opacity .45s ease,transform .55s cubic-bezier(.16,1,.3,1)"}}>
<span style={{background:"#080705",color:"#E6AF2E",border:"1px solid rgba(230,175,46,.55)",borderRadius:"999px",padding:"7px 14px",font:"500 10px/1 'JetBrains Mono',monospace",letterSpacing:".18em",textTransform:"uppercase",whiteSpace:"nowrap"}}>// identity</span>
<span style={{width:"1px",height:"54px",background:"linear-gradient(180deg,#E6AF2E,rgba(230,175,46,0))",display:"block"}}></span>
</div>
<span aria-hidden="true" style={{position:"absolute",left:"50%",top:"100%",width:"0",height:"0",transform:"rotateX(70deg)",pointerEvents:"none",opacity:pinO1,transition:"opacity .5s ease",display:"block"}}>
<span style={{position:"absolute",left:"0",top:"0",width:"78px",height:"78px",translate:"-50% -50%",border:"1px solid rgba(230,175,46,.55)",borderRadius:"50%",animation:"bwPing 2.8s cubic-bezier(.2,.7,.2,1) infinite",display:"block"}}></span>
<span style={{position:"absolute",left:"0",top:"0",width:"78px",height:"78px",translate:"-50% -50%",border:"1px solid rgba(230,175,46,.4)",borderRadius:"50%",animation:"bwPing 2.8s cubic-bezier(.2,.7,.2,1) .9s infinite",display:"block"}}></span>
<span style={{position:"absolute",left:"0",top:"0",width:"78px",height:"78px",translate:"-50% -50%",border:"1px solid rgba(230,175,46,.28)",borderRadius:"50%",animation:"bwPing 2.8s cubic-bezier(.2,.7,.2,1) 1.8s infinite",display:"block"}}></span>
</span>
<div style={{position:"relative",display:"flex",flexDirection:"column",gap:"14px",minHeight:"224px",padding:"28px",borderRadius:"14px",border:"1px solid rgba(255,255,250,.16)",color:"#FFFFFA",backgroundColor:"#080705",backgroundImage:"url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2790%27 height=%2790%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.85%27 numOctaves=%273%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27 opacity=%270.42%27/%3E%3C/svg%3E'),radial-gradient(at 20% 10%,oklch(0.62 0.13 84 / .5) 0%,rgba(8,7,5,0) 58%),radial-gradient(at 90% 96%,oklch(0.5 0.14 34 / .45) 0%,rgba(8,7,5,0) 62%)",backgroundSize:"90px 90px,auto,auto",backgroundBlendMode:"overlay,normal,normal",boxShadow:"0 34px 70px -42px rgba(8,7,5,.75),0 1px 0 rgba(255,255,255,.14) inset"}}>
<span style={{font:"500 10px/1 'JetBrains Mono',monospace",letterSpacing:".2em",textTransform:"uppercase",color:"#E6AF2E"}}>/ 02</span>
<span style={{fontWeight:"800",fontSize:"22px",letterSpacing:"-.03em"}}>Identity system</span>
<span style={{fontSize:"15px",lineHeight:"1.5",fontWeight:"500",opacity:".72",textWrap:"pretty"}}>Mark, type, color, layout rules, and the files your team actually opens. Built for slides and ads, not just a poster.</span>
</div>
</div>
</div>
<div onMouseEnter={enter2} onMouseLeave={leave2} style={{perspective:"1000px",padding:"20px 0 6px",display:"flex",justifyContent:"center"}}>
<div style={{position:"relative",width:"100%",transformStyle:"preserve-3d",transition:"transform .7s cubic-bezier(.16,1,.3,1)",transform:tilt2}}>
<div style={{position:"absolute",left:"50%",bottom:"calc(100% - 4px)",translate:"-50% 0",display:"flex",flexDirection:"column",alignItems:"center",pointerEvents:"none",opacity:pinO2,transform:pinT2,transition:"opacity .45s ease,transform .55s cubic-bezier(.16,1,.3,1)"}}>
<span style={{background:"#080705",color:"#E6AF2E",border:"1px solid rgba(230,175,46,.55)",borderRadius:"999px",padding:"7px 14px",font:"500 10px/1 'JetBrains Mono',monospace",letterSpacing:".18em",textTransform:"uppercase",whiteSpace:"nowrap"}}>// messaging</span>
<span style={{width:"1px",height:"54px",background:"linear-gradient(180deg,#E6AF2E,rgba(230,175,46,0))",display:"block"}}></span>
</div>
<span aria-hidden="true" style={{position:"absolute",left:"50%",top:"100%",width:"0",height:"0",transform:"rotateX(70deg)",pointerEvents:"none",opacity:pinO2,transition:"opacity .5s ease",display:"block"}}>
<span style={{position:"absolute",left:"0",top:"0",width:"78px",height:"78px",translate:"-50% -50%",border:"1px solid rgba(230,175,46,.55)",borderRadius:"50%",animation:"bwPing 2.8s cubic-bezier(.2,.7,.2,1) infinite",display:"block"}}></span>
<span style={{position:"absolute",left:"0",top:"0",width:"78px",height:"78px",translate:"-50% -50%",border:"1px solid rgba(230,175,46,.4)",borderRadius:"50%",animation:"bwPing 2.8s cubic-bezier(.2,.7,.2,1) .9s infinite",display:"block"}}></span>
<span style={{position:"absolute",left:"0",top:"0",width:"78px",height:"78px",translate:"-50% -50%",border:"1px solid rgba(230,175,46,.28)",borderRadius:"50%",animation:"bwPing 2.8s cubic-bezier(.2,.7,.2,1) 1.8s infinite",display:"block"}}></span>
</span>
<div style={{position:"relative",display:"flex",flexDirection:"column",gap:"14px",minHeight:"224px",padding:"28px",borderRadius:"14px",border:"1px solid rgba(255,255,250,.16)",color:"#FFFFFA",backgroundColor:"#080705",backgroundImage:"url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2790%27 height=%2790%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.85%27 numOctaves=%273%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27 opacity=%270.42%27/%3E%3C/svg%3E'),radial-gradient(at 20% 10%,oklch(0.62 0.13 84 / .5) 0%,rgba(8,7,5,0) 58%),radial-gradient(at 90% 96%,oklch(0.5 0.14 34 / .45) 0%,rgba(8,7,5,0) 62%)",backgroundSize:"90px 90px,auto,auto",backgroundBlendMode:"overlay,normal,normal",boxShadow:"0 34px 70px -42px rgba(8,7,5,.75),0 1px 0 rgba(255,255,255,.14) inset"}}>
<span style={{font:"500 10px/1 'JetBrains Mono',monospace",letterSpacing:".2em",textTransform:"uppercase",color:"#E6AF2E"}}>/ 03</span>
<span style={{fontWeight:"800",fontSize:"22px",letterSpacing:"-.03em"}}>Messaging kit</span>
<span style={{fontSize:"15px",lineHeight:"1.5",fontWeight:"500",opacity:".72",textWrap:"pretty"}}>Proof points, objection answers, and the words for each buyer in the room. Written to be pasted, not admired.</span>
</div>
</div>
</div>
<div onMouseEnter={enter3} onMouseLeave={leave3} style={{perspective:"1000px",padding:"20px 0 6px",display:"flex",justifyContent:"center"}}>
<div style={{position:"relative",width:"100%",transformStyle:"preserve-3d",transition:"transform .7s cubic-bezier(.16,1,.3,1)",transform:tilt3}}>
<div style={{position:"absolute",left:"50%",bottom:"calc(100% - 4px)",translate:"-50% 0",display:"flex",flexDirection:"column",alignItems:"center",pointerEvents:"none",opacity:pinO3,transform:pinT3,transition:"opacity .45s ease,transform .55s cubic-bezier(.16,1,.3,1)"}}>
<span style={{background:"#080705",color:"#E6AF2E",border:"1px solid rgba(230,175,46,.55)",borderRadius:"999px",padding:"7px 14px",font:"500 10px/1 'JetBrains Mono',monospace",letterSpacing:".18em",textTransform:"uppercase",whiteSpace:"nowrap"}}>// rollout</span>
<span style={{width:"1px",height:"54px",background:"linear-gradient(180deg,#E6AF2E,rgba(230,175,46,0))",display:"block"}}></span>
</div>
<span aria-hidden="true" style={{position:"absolute",left:"50%",top:"100%",width:"0",height:"0",transform:"rotateX(70deg)",pointerEvents:"none",opacity:pinO3,transition:"opacity .5s ease",display:"block"}}>
<span style={{position:"absolute",left:"0",top:"0",width:"78px",height:"78px",translate:"-50% -50%",border:"1px solid rgba(230,175,46,.55)",borderRadius:"50%",animation:"bwPing 2.8s cubic-bezier(.2,.7,.2,1) infinite",display:"block"}}></span>
<span style={{position:"absolute",left:"0",top:"0",width:"78px",height:"78px",translate:"-50% -50%",border:"1px solid rgba(230,175,46,.4)",borderRadius:"50%",animation:"bwPing 2.8s cubic-bezier(.2,.7,.2,1) .9s infinite",display:"block"}}></span>
<span style={{position:"absolute",left:"0",top:"0",width:"78px",height:"78px",translate:"-50% -50%",border:"1px solid rgba(230,175,46,.28)",borderRadius:"50%",animation:"bwPing 2.8s cubic-bezier(.2,.7,.2,1) 1.8s infinite",display:"block"}}></span>
</span>
<div style={{position:"relative",display:"flex",flexDirection:"column",gap:"14px",minHeight:"224px",padding:"28px",borderRadius:"14px",border:"1px solid rgba(255,255,250,.16)",color:"#FFFFFA",backgroundColor:"#080705",backgroundImage:"url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2790%27 height=%2790%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.85%27 numOctaves=%273%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27 opacity=%270.42%27/%3E%3C/svg%3E'),radial-gradient(at 20% 10%,oklch(0.62 0.13 84 / .5) 0%,rgba(8,7,5,0) 58%),radial-gradient(at 90% 96%,oklch(0.5 0.14 34 / .45) 0%,rgba(8,7,5,0) 62%)",backgroundSize:"90px 90px,auto,auto",backgroundBlendMode:"overlay,normal,normal",boxShadow:"0 34px 70px -42px rgba(8,7,5,.75),0 1px 0 rgba(255,255,255,.14) inset"}}>
<span style={{font:"500 10px/1 'JetBrains Mono',monospace",letterSpacing:".2em",textTransform:"uppercase",color:"#E6AF2E"}}>/ 04</span>
<span style={{fontWeight:"800",fontSize:"22px",letterSpacing:"-.03em"}}>Rollout plan</span>
<span style={{fontSize:"15px",lineHeight:"1.5",fontWeight:"500",opacity:".72",textWrap:"pretty"}}>What changes on day one, what waits for the next site build, and who owns each piece after we leave.</span>
</div>
</div>
</div>
</div>
</div>
</section>
<section style={{padding:"96px 0 0"}}>
<div data-bw-pad="" style={{maxWidth:"1440px",margin:"0 auto",padding:"0 40px",display:"flex",flexDirection:"column",gap:"14px"}}>
<div style={{position:"relative",overflow:"hidden",border:"1px solid var(--bw-rule)",borderRadius:"16px",color:"#FFFFFA",backgroundColor:"#080705",backgroundImage:"url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2790%27 height=%2790%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.85%27 numOctaves=%273%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27 opacity=%270.4%27/%3E%3C/svg%3E'),radial-gradient(at 10% 4%,oklch(0.6 0.13 84 / .36) 0%,rgba(8,7,5,0) 56%),radial-gradient(at 92% 98%,oklch(0.48 0.14 34 / .34) 0%,rgba(8,7,5,0) 60%)",backgroundSize:"90px 90px,auto,auto",backgroundBlendMode:"overlay,normal,normal",padding:"26px 26px 22px"}}>
<div style={{display:"flex",justifyContent:"space-between",alignItems:"baseline",gap:"20px",flexWrap:"wrap"}}>
<span style={{font:"500 10px/1 'JetBrains Mono',monospace",letterSpacing:".2em",textTransform:"uppercase",color:"#E6AF2E"}}>// the system, eight artifacts</span>
<span style={{font:"500 10px/1 'JetBrains Mono',monospace",letterSpacing:".14em",textTransform:"uppercase",opacity:".7"}}>Drag to spin · Click a card</span>
</div>
<div className="brand-p15" onPointerDown={onDown} onPointerMove={onMove} onPointerUp={onUp} onPointerCancel={onUp} style={{position:"relative",height:"clamp(340px,52vh,420px)",perspective:"1200px",touchAction:"pan-y",cursor:"grab",userSelect:"none",overflow:"hidden"}}>
<div ref={ringRef} style={{position:"absolute",inset:"0",transformStyle:"preserve-3d",willChange:"transform"}}>
<div onClick={pick0} style={{position:"absolute",left:"50%",top:"50%",width:"168px",height:"226px",margin:"-113px 0 0 -84px",cursor:"pointer",backfaceVisibility:"hidden",WebkitBackfaceVisibility:"hidden",transform:cardT0}}>
<div className="brand-p16" style={{height:"100%",borderRadius:"12px",border:"1px solid rgba(255,255,250,.18)",background:"linear-gradient(160deg,rgba(255,255,250,.1),rgba(255,255,250,.03))",backdropFilter:"blur(10px)",WebkitBackdropFilter:"blur(10px)",boxShadow:"0 26px 50px -30px rgba(0,0,0,.9)",padding:"12px",display:"flex",flexDirection:"column",gap:"10px",transition:"border-color .16s cubic-bezier(.2,.7,.2,1)",backfaceVisibility:"hidden",WebkitBackfaceVisibility:"hidden"}}>
<div data-bw-artifact="" role="img" aria-label="Logotype: gold-foil emblem embossed at three scales on uncoated card" style={{flex:"1",borderRadius:"7px",backgroundImage:"url('/uploads/brand-artifact-01-logotype.webp')",backgroundSize:"cover",backgroundPosition:"center",border:"1px solid rgba(255,255,250,.1)"}}></div>
<div style={{display:"flex",justifyContent:"space-between",alignItems:"baseline",gap:"8px"}}>
<span style={{fontWeight:"700",fontSize:"12px",letterSpacing:"-.01em"}}>Logotype</span>
<span style={{font:"500 9px/1 'JetBrains Mono',monospace",letterSpacing:".16em",color:"#E6AF2E"}}>/ 01</span>
</div>
</div>
</div>
<div onClick={pick1} style={{position:"absolute",left:"50%",top:"50%",width:"168px",height:"226px",margin:"-113px 0 0 -84px",cursor:"pointer",backfaceVisibility:"hidden",WebkitBackfaceVisibility:"hidden",transform:cardT1}}>
<div className="brand-p17" style={{height:"100%",borderRadius:"12px",border:"1px solid rgba(255,255,250,.18)",background:"linear-gradient(160deg,rgba(255,255,250,.1),rgba(255,255,250,.03))",backdropFilter:"blur(10px)",WebkitBackdropFilter:"blur(10px)",boxShadow:"0 26px 50px -30px rgba(0,0,0,.9)",padding:"12px",display:"flex",flexDirection:"column",gap:"10px",transition:"border-color .16s cubic-bezier(.2,.7,.2,1)",backfaceVisibility:"hidden",WebkitBackfaceVisibility:"hidden"}}>
<div data-bw-artifact="" role="img" aria-label="Colour system: painted swatch chips and a fanned colour deck" style={{flex:"1",borderRadius:"7px",backgroundImage:"url('/uploads/brand-artifact-02-color-system.webp')",backgroundSize:"cover",backgroundPosition:"center",border:"1px solid rgba(255,255,250,.1)"}}></div>
<div style={{display:"flex",justifyContent:"space-between",alignItems:"baseline",gap:"8px"}}>
<span style={{fontWeight:"700",fontSize:"12px",letterSpacing:"-.01em"}}>Color system</span>
<span style={{font:"500 9px/1 'JetBrains Mono',monospace",letterSpacing:".16em",color:"#E6AF2E"}}>/ 02</span>
</div>
</div>
</div>
<div onClick={pick2} style={{position:"absolute",left:"50%",top:"50%",width:"168px",height:"226px",margin:"-113px 0 0 -84px",cursor:"pointer",backfaceVisibility:"hidden",WebkitBackfaceVisibility:"hidden",transform:cardT2}}>
<div className="brand-p18" style={{height:"100%",borderRadius:"12px",border:"1px solid rgba(255,255,250,.18)",background:"linear-gradient(160deg,rgba(255,255,250,.1),rgba(255,255,250,.03))",backdropFilter:"blur(10px)",WebkitBackdropFilter:"blur(10px)",boxShadow:"0 26px 50px -30px rgba(0,0,0,.9)",padding:"12px",display:"flex",flexDirection:"column",gap:"10px",transition:"border-color .16s cubic-bezier(.2,.7,.2,1)",backfaceVisibility:"hidden",WebkitBackfaceVisibility:"hidden"}}>
<div data-bw-artifact="" role="img" aria-label="Type scale: printed specimen cards descending through the hierarchy" style={{flex:"1",borderRadius:"7px",backgroundImage:"url('/uploads/brand-artifact-03-type-scale.webp')",backgroundSize:"cover",backgroundPosition:"center",border:"1px solid rgba(255,255,250,.1)"}}></div>
<div style={{display:"flex",justifyContent:"space-between",alignItems:"baseline",gap:"8px"}}>
<span style={{fontWeight:"700",fontSize:"12px",letterSpacing:"-.01em"}}>Type scale</span>
<span style={{font:"500 9px/1 'JetBrains Mono',monospace",letterSpacing:".16em",color:"#E6AF2E"}}>/ 03</span>
</div>
</div>
</div>
<div onClick={pick3} style={{position:"absolute",left:"50%",top:"50%",width:"168px",height:"226px",margin:"-113px 0 0 -84px",cursor:"pointer",backfaceVisibility:"hidden",WebkitBackfaceVisibility:"hidden",transform:cardT3}}>
<div className="brand-p19" style={{height:"100%",borderRadius:"12px",border:"1px solid rgba(255,255,250,.18)",background:"linear-gradient(160deg,rgba(255,255,250,.1),rgba(255,255,250,.03))",backdropFilter:"blur(10px)",WebkitBackdropFilter:"blur(10px)",boxShadow:"0 26px 50px -30px rgba(0,0,0,.9)",padding:"12px",display:"flex",flexDirection:"column",gap:"10px",transition:"border-color .16s cubic-bezier(.2,.7,.2,1)",backfaceVisibility:"hidden",WebkitBackfaceVisibility:"hidden"}}>
<div data-bw-artifact="" role="img" aria-label="Grid and layout: gold column grid under a tracing-paper overlay" style={{flex:"1",borderRadius:"7px",backgroundImage:"url('/uploads/brand-artifact-04-grid-layout.webp')",backgroundSize:"cover",backgroundPosition:"center",border:"1px solid rgba(255,255,250,.1)"}}></div>
<div style={{display:"flex",justifyContent:"space-between",alignItems:"baseline",gap:"8px"}}>
<span style={{fontWeight:"700",fontSize:"12px",letterSpacing:"-.01em"}}>Grid & layout</span>
<span style={{font:"500 9px/1 'JetBrains Mono',monospace",letterSpacing:".16em",color:"#E6AF2E"}}>/ 04</span>
</div>
</div>
</div>
<div onClick={pick4} style={{position:"absolute",left:"50%",top:"50%",width:"168px",height:"226px",margin:"-113px 0 0 -84px",cursor:"pointer",backfaceVisibility:"hidden",WebkitBackfaceVisibility:"hidden",transform:cardT4}}>
<div className="brand-p20" style={{height:"100%",borderRadius:"12px",border:"1px solid rgba(255,255,250,.18)",background:"linear-gradient(160deg,rgba(255,255,250,.1),rgba(255,255,250,.03))",backdropFilter:"blur(10px)",WebkitBackdropFilter:"blur(10px)",boxShadow:"0 26px 50px -30px rgba(0,0,0,.9)",padding:"12px",display:"flex",flexDirection:"column",gap:"10px",transition:"border-color .16s cubic-bezier(.2,.7,.2,1)",backfaceVisibility:"hidden",WebkitBackfaceVisibility:"hidden"}}>
<div data-bw-artifact="" role="img" aria-label="Motion rules: a frame-by-frame rotation study with an easing streak" style={{flex:"1",borderRadius:"7px",backgroundImage:"url('/uploads/brand-artifact-05-motion-rules.webp')",backgroundSize:"cover",backgroundPosition:"center",border:"1px solid rgba(255,255,250,.1)"}}></div>
<div style={{display:"flex",justifyContent:"space-between",alignItems:"baseline",gap:"8px"}}>
<span style={{fontWeight:"700",fontSize:"12px",letterSpacing:"-.01em"}}>Motion rules</span>
<span style={{font:"500 9px/1 'JetBrains Mono',monospace",letterSpacing:".16em",color:"#E6AF2E"}}>/ 05</span>
</div>
</div>
</div>
<div onClick={pick5} style={{position:"absolute",left:"50%",top:"50%",width:"168px",height:"226px",margin:"-113px 0 0 -84px",cursor:"pointer",backfaceVisibility:"hidden",WebkitBackfaceVisibility:"hidden",transform:cardT5}}>
<div className="brand-p21" style={{height:"100%",borderRadius:"12px",border:"1px solid rgba(255,255,250,.18)",background:"linear-gradient(160deg,rgba(255,255,250,.1),rgba(255,255,250,.03))",backdropFilter:"blur(10px)",WebkitBackdropFilter:"blur(10px)",boxShadow:"0 26px 50px -30px rgba(0,0,0,.9)",padding:"12px",display:"flex",flexDirection:"column",gap:"10px",transition:"border-color .16s cubic-bezier(.2,.7,.2,1)",backfaceVisibility:"hidden",WebkitBackfaceVisibility:"hidden"}}>
<div data-bw-artifact="" role="img" aria-label="Slide template: printed presentation boards laid out in a grid" style={{flex:"1",borderRadius:"7px",backgroundImage:"url('/uploads/brand-artifact-06-slide-template.webp')",backgroundSize:"cover",backgroundPosition:"center",border:"1px solid rgba(255,255,250,.1)"}}></div>
<div style={{display:"flex",justifyContent:"space-between",alignItems:"baseline",gap:"8px"}}>
<span style={{fontWeight:"700",fontSize:"12px",letterSpacing:"-.01em"}}>Slide template</span>
<span style={{font:"500 9px/1 'JetBrains Mono',monospace",letterSpacing:".16em",color:"#E6AF2E"}}>/ 06</span>
</div>
</div>
</div>
<div onClick={pick6} style={{position:"absolute",left:"50%",top:"50%",width:"168px",height:"226px",margin:"-113px 0 0 -84px",cursor:"pointer",backfaceVisibility:"hidden",WebkitBackfaceVisibility:"hidden",transform:cardT6}}>
<div className="brand-p22" style={{height:"100%",borderRadius:"12px",border:"1px solid rgba(255,255,250,.18)",background:"linear-gradient(160deg,rgba(255,255,250,.1),rgba(255,255,250,.03))",backdropFilter:"blur(10px)",WebkitBackdropFilter:"blur(10px)",boxShadow:"0 26px 50px -30px rgba(0,0,0,.9)",padding:"12px",display:"flex",flexDirection:"column",gap:"10px",transition:"border-color .16s cubic-bezier(.2,.7,.2,1)",backfaceVisibility:"hidden",WebkitBackfaceVisibility:"hidden"}}>
<div data-bw-artifact="" role="img" aria-label="Ad units: the mark cropped across a family of display formats" style={{flex:"1",borderRadius:"7px",backgroundImage:"url('/uploads/brand-artifact-07-ad-units.webp')",backgroundSize:"cover",backgroundPosition:"center",border:"1px solid rgba(255,255,250,.1)"}}></div>
<div style={{display:"flex",justifyContent:"space-between",alignItems:"baseline",gap:"8px"}}>
<span style={{fontWeight:"700",fontSize:"12px",letterSpacing:"-.01em"}}>Ad units</span>
<span style={{font:"500 9px/1 'JetBrains Mono',monospace",letterSpacing:".16em",color:"#E6AF2E"}}>/ 07</span>
</div>
</div>
</div>
<div onClick={pick7} style={{position:"absolute",left:"50%",top:"50%",width:"168px",height:"226px",margin:"-113px 0 0 -84px",cursor:"pointer",backfaceVisibility:"hidden",WebkitBackfaceVisibility:"hidden",transform:cardT7}}>
<div className="brand-p23" style={{height:"100%",borderRadius:"12px",border:"1px solid rgba(255,255,250,.18)",background:"linear-gradient(160deg,rgba(255,255,250,.1),rgba(255,255,250,.03))",backdropFilter:"blur(10px)",WebkitBackdropFilter:"blur(10px)",boxShadow:"0 26px 50px -30px rgba(0,0,0,.9)",padding:"12px",display:"flex",flexDirection:"column",gap:"10px",transition:"border-color .16s cubic-bezier(.2,.7,.2,1)",backfaceVisibility:"hidden",WebkitBackfaceVisibility:"hidden"}}>
<div data-bw-artifact="" role="img" aria-label="Packaging: embossed rigid box, tissue and printed tape" style={{flex:"1",borderRadius:"7px",backgroundImage:"url('/uploads/brand-artifact-08-packaging.webp')",backgroundSize:"cover",backgroundPosition:"center",border:"1px solid rgba(255,255,250,.1)"}}></div>
<div style={{display:"flex",justifyContent:"space-between",alignItems:"baseline",gap:"8px"}}>
<span style={{fontWeight:"700",fontSize:"12px",letterSpacing:"-.01em"}}>Packaging</span>
<span style={{font:"500 9px/1 'JetBrains Mono',monospace",letterSpacing:".16em",color:"#E6AF2E"}}>/ 08</span>
</div>
</div>
</div>
</div>
<span aria-hidden="true" style={{position:"absolute",left:"50%",bottom:"22px",translate:"-50% 0",width:"min(420px,74%)",height:"36px",borderRadius:"50%",background:"radial-gradient(ellipse,rgba(0,0,0,.7) 0%,rgba(0,0,0,0) 70%)",pointerEvents:"none",display:"block"}}></span>
</div>
{hasSel ? (<>
<div style={{position:"absolute",inset:"0",background:"rgba(8,7,5,.86)",backdropFilter:"blur(8px)",WebkitBackdropFilter:"blur(8px)",display:"grid",placeItems:"center",padding:"26px",zIndex:"5"}}>
<div style={{width:"min(340px,100%)",border:"1px solid rgba(255,255,250,.18)",borderRadius:"14px",background:"linear-gradient(160deg,rgba(255,255,250,.1),rgba(255,255,250,.03))",padding:"18px",display:"flex",flexDirection:"column",gap:"14px"}}>
<div style={{display:"flex",justifyContent:"space-between",alignItems:"center",gap:"12px"}}>
<span style={{fontWeight:"800",fontSize:"19px",letterSpacing:"-.03em"}}>{selName}</span>
<button className="brand-p24 brand-p25 brand-p26" type="button" onClick={closeSel} aria-label="Close" style={{width:"32px",height:"32px",borderRadius:"999px",border:"1px solid rgba(255,255,250,.24)",background:"transparent",color:"#FFFFFA",cursor:"pointer",display:"grid",placeItems:"center",flexShrink:"0",padding:"0",fontFamily:"'JetBrains Mono',monospace",fontSize:"13px",transition:"transform 140ms cubic-bezier(.2,.7,.2,1),background-color 200ms cubic-bezier(.2,.7,.2,1),border-color 200ms cubic-bezier(.2,.7,.2,1),color 200ms cubic-bezier(.2,.7,.2,1),opacity 200ms cubic-bezier(.2,.7,.2,1)"}}>✕</button>
</div>
<div style={{aspectRatio:"4/3",borderRadius:"9px",border:"1px solid rgba(255,255,250,.12)",backgroundImage:"repeating-linear-gradient(135deg,rgba(255,255,250,.09) 0 2px,rgba(255,255,250,0) 2px 11px)",display:"grid",placeItems:"center",padding:"16px",textAlign:"center"}}>
<span style={{font:"500 10px/1.6 'JetBrains Mono',monospace",letterSpacing:".16em",textTransform:"uppercase",opacity:".7"}}>Drop artifact here</span>
</div>
</div>
</div>
</>) : null}
</div>
<span style={{font:"500 10px/1 'JetBrains Mono',monospace",letterSpacing:".16em",textTransform:"uppercase",opacity:".7"}}>Fig. 01 — Northbeam identity, 2026</span>
</div>
</section>
<section style={{marginTop:"120px",backgroundColor:"#080705",backgroundImage:"url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2790%27 height=%2790%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.85%27 numOctaves=%273%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27 opacity=%270.4%27/%3E%3C/svg%3E')",backgroundSize:"90px 90px",backgroundBlendMode:"overlay",color:"#FFFFFA",padding:"110px 0"}}>
<div data-bw-pad="" style={{maxWidth:"1440px",margin:"0 auto",padding:"0 40px",display:"flex",flexDirection:"column",gap:"56px"}}>
<div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-end",gap:"32px",flexWrap:"wrap"}}>
<h2 style={{margin:"0",maxWidth:"20ch",fontWeight:"800",fontSize:"clamp(32px,4.2vw,64px)",lineHeight:".94",letterSpacing:"-.04em"}}>How it runs. Nine weeks, three gates.</h2>
<span style={{font:"500 11px/1 'JetBrains Mono',monospace",letterSpacing:".14em",textTransform:"uppercase",opacity:".7"}}>No discovery theatre</span>
</div>
<div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))",gap:"28px"}}>
<div style={{display:"flex",flexDirection:"column",gap:"12px",borderTop:"1px solid rgba(255,255,250,.24)",paddingTop:"22px"}}>
<span style={{font:"500 10px/1 'JetBrains Mono',monospace",letterSpacing:".2em",textTransform:"uppercase",color:"#E6AF2E"}}>/ Week 1–2</span>
<span style={{fontWeight:"800",fontSize:"24px",letterSpacing:"-.03em"}}>Diagnose</span>
<span style={{fontSize:"15px",lineHeight:"1.5",fontWeight:"500",opacity:".7",textWrap:"pretty"}}>We sit in on calls, read lost-deal notes, and interview six people. You get a written read of where the story breaks.</span>
</div>
<div style={{display:"flex",flexDirection:"column",gap:"12px",borderTop:"1px solid rgba(255,255,250,.24)",paddingTop:"22px"}}>
<span style={{font:"500 10px/1 'JetBrains Mono',monospace",letterSpacing:".2em",textTransform:"uppercase",color:"#E6AF2E"}}>/ Week 3–4</span>
<span style={{fontWeight:"800",fontSize:"24px",letterSpacing:"-.03em"}}>Decide</span>
<span style={{fontSize:"15px",lineHeight:"1.5",fontWeight:"500",opacity:".7",textWrap:"pretty"}}>Positioning and narrative, signed off in one room. Two directions, one decision, no committee round three.</span>
</div>
<div style={{display:"flex",flexDirection:"column",gap:"12px",borderTop:"1px solid rgba(255,255,250,.24)",paddingTop:"22px"}}>
<span style={{font:"500 10px/1 'JetBrains Mono',monospace",letterSpacing:".2em",textTransform:"uppercase",color:"#E6AF2E"}}>/ Week 5–9</span>
<span style={{fontWeight:"800",fontSize:"24px",letterSpacing:"-.03em"}}>Build</span>
<span style={{fontSize:"15px",lineHeight:"1.5",fontWeight:"500",opacity:".7",textWrap:"pretty"}}>Identity system, messaging kit, and rollout plan. Handed over with a working session, not a PDF drop.</span>
</div>
</div>
</div>
</section>
<section style={{padding:"104px 0 0"}}>
<div data-bw-pad="" style={{maxWidth:"1440px",margin:"0 auto",padding:"0 40px",display:"flex",flexDirection:"column",gap:"44px"}}>
<div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-end",gap:"32px",flexWrap:"wrap"}}>
<div style={{display:"flex",flexDirection:"column",gap:"18px"}}>
<span style={{display:"flex",alignItems:"center",gap:"10px",font:"500 12px/1 'JetBrains Mono',monospace",letterSpacing:".14em",textTransform:"uppercase",opacity:".7"}}><span style={{width:"7px",height:"7px",background:"#080705",display:"block"}}></span>// Pricing</span>
<h2 style={{margin:"0",maxWidth:"22ch",fontWeight:"800",fontSize:"clamp(34px,4.6vw,72px)",lineHeight:".94",letterSpacing:"-.04em"}}>Three ways in.</h2>
</div>
<span style={{font:"500 11px/1 'JetBrains Mono',monospace",letterSpacing:".14em",textTransform:"uppercase",opacity:".7",maxWidth:"26ch",textAlign:"right"}}>Fixed scope, fixed price</span>
</div>
<div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))",gap:"clamp(18px,2vw,28px)",alignItems:"stretch"}}>
<div style={{display:"flex",flexDirection:"column",gap:"24px",padding:"32px 28px",border:"1px solid var(--bw-rule)",borderRadius:"16px"}}>
<div style={{display:"flex",flexDirection:"column",gap:"10px"}}>
<span style={{font:"500 10px/1 'JetBrains Mono',monospace",letterSpacing:".2em",textTransform:"uppercase",color:"var(--bw-accent)"}}>/ 01 — Essential</span>
<div style={{display:"flex",flexDirection:"column",gap:"7px"}}>
<span style={{fontWeight:"900",fontSize:"44px",letterSpacing:"-.03em"}}>$399</span>
<div style={{display:"flex",alignItems:"baseline",gap:"10px"}}><span style={{fontSize:"17px",fontWeight:"600",textDecoration:"line-through",opacity:".7"}}>$1,330</span><span style={{font:"600 10px/1 'JetBrains Mono',monospace",letterSpacing:".14em",textTransform:"uppercase",color:"var(--bw-accent)"}}>70% off</span></div>
</div>
</div>
<div style={{display:"flex",flexDirection:"column",gap:"11px",borderTop:"1px solid var(--bw-rule)",paddingTop:"20px",flex:"1"}}>
<div style={{display:"flex",alignItems:"flex-start",gap:"10px",fontSize:"14px",lineHeight:"1.5",fontWeight:"500",opacity:".8"}}><span style={{color:"var(--bw-accent)",fontFamily:"'JetBrains Mono',monospace",flexShrink:"0"}}>→</span><span>Logo suite (primary, secondary, icon, mono)</span></div>
<div style={{display:"flex",alignItems:"flex-start",gap:"10px",fontSize:"14px",lineHeight:"1.5",fontWeight:"500",opacity:".8"}}><span style={{color:"var(--bw-accent)",fontFamily:"'JetBrains Mono',monospace",flexShrink:"0"}}>→</span><span>Color system</span></div>
<div style={{display:"flex",alignItems:"flex-start",gap:"10px",fontSize:"14px",lineHeight:"1.5",fontWeight:"500",opacity:".8"}}><span style={{color:"var(--bw-accent)",fontFamily:"'JetBrains Mono',monospace",flexShrink:"0"}}>→</span><span>Font pairing</span></div>
<div style={{display:"flex",alignItems:"flex-start",gap:"10px",fontSize:"14px",lineHeight:"1.5",fontWeight:"500",opacity:".8"}}><span style={{color:"var(--bw-accent)",fontFamily:"'JetBrains Mono',monospace",flexShrink:"0"}}>→</span><span>One-page brand usage sheet</span></div>
</div>
<div style={{display:"flex",flexDirection:"column",gap:"14px"}}>
<span style={{font:"500 10px/1 'JetBrains Mono',monospace",letterSpacing:".16em",textTransform:"uppercase",opacity:".7"}}>Delivered in 7 days</span>
<a className="brand-p27 brand-p28 brand-p29" href="/contact" style={{border:"1px solid var(--bw-fg)",backgroundImage:"url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2790%27 height=%2790%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.85%27 numOctaves=%273%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27 opacity=%270.12%27/%3E%3C/svg%3E')",backgroundSize:"90px 90px",borderRadius:"999px",padding:"14px 22px",fontSize:"14px",fontWeight:"600",textAlign:"center",transition:"transform 140ms cubic-bezier(.2,.7,.2,1),background-color 200ms cubic-bezier(.2,.7,.2,1),border-color 200ms cubic-bezier(.2,.7,.2,1),color 200ms cubic-bezier(.2,.7,.2,1),opacity 200ms cubic-bezier(.2,.7,.2,1)"}}>Start with Essential</a>
</div>
</div>
<div style={{position:"relative",display:"flex",flexDirection:"column",gap:"24px",padding:"32px 28px",borderRadius:"16px",border:"1px solid rgba(230,175,46,.5)",color:"#FFFFFA",backgroundColor:"#080705",backgroundImage:"url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2790%27 height=%2790%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.85%27 numOctaves=%273%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27 opacity=%270.42%27/%3E%3C/svg%3E'),radial-gradient(at 20% 10%,oklch(0.62 0.13 84 / .5) 0%,rgba(8,7,5,0) 58%),radial-gradient(at 90% 96%,oklch(0.5 0.14 34 / .45) 0%,rgba(8,7,5,0) 62%)",backgroundSize:"90px 90px,auto,auto",backgroundBlendMode:"overlay,normal,normal",boxShadow:"0 34px 70px -42px rgba(8,7,5,.75),0 1px 0 rgba(255,255,255,.14) inset"}}>
<span style={{position:"absolute",top:"-13px",left:"28px",background:"#E6AF2E",color:"#080705",borderRadius:"999px",padding:"5px 12px",font:"600 10px/1 'JetBrains Mono',monospace",letterSpacing:".16em",textTransform:"uppercase"}}>Most requested</span>
<div style={{display:"flex",flexDirection:"column",gap:"10px"}}>
<span style={{font:"500 10px/1 'JetBrains Mono',monospace",letterSpacing:".2em",textTransform:"uppercase",color:"#E6AF2E"}}>/ 02 — Identity</span>
<div style={{display:"flex",flexDirection:"column",gap:"7px"}}>
<span style={{fontWeight:"900",fontSize:"44px",letterSpacing:"-.03em"}}>$799</span>
<div style={{display:"flex",alignItems:"baseline",gap:"10px"}}><span style={{fontSize:"17px",fontWeight:"600",textDecoration:"line-through",opacity:".7"}}>$2,663</span><span style={{font:"600 10px/1 'JetBrains Mono',monospace",letterSpacing:".14em",textTransform:"uppercase",color:"#E6AF2E"}}>70% off</span></div>
</div>
</div>
<div style={{display:"flex",flexDirection:"column",gap:"11px",borderTop:"1px solid rgba(255,255,250,.16)",paddingTop:"20px",flex:"1"}}>
<div style={{display:"flex",alignItems:"flex-start",gap:"10px",fontSize:"14px",lineHeight:"1.5",fontWeight:"500",opacity:".85"}}><span style={{color:"#E6AF2E",fontFamily:"'JetBrains Mono',monospace",flexShrink:"0"}}>→</span><span>Everything in Essential</span></div>
<div style={{display:"flex",alignItems:"flex-start",gap:"10px",fontSize:"14px",lineHeight:"1.5",fontWeight:"500",opacity:".85"}}><span style={{color:"#E6AF2E",fontFamily:"'JetBrains Mono',monospace",flexShrink:"0"}}>→</span><span>Full brand guidelines document</span></div>
<div style={{display:"flex",alignItems:"flex-start",gap:"10px",fontSize:"14px",lineHeight:"1.5",fontWeight:"500",opacity:".85"}}><span style={{color:"#E6AF2E",fontFamily:"'JetBrains Mono',monospace",flexShrink:"0"}}>→</span><span>Social media profile templates</span></div>
<div style={{display:"flex",alignItems:"flex-start",gap:"10px",fontSize:"14px",lineHeight:"1.5",fontWeight:"500",opacity:".85"}}><span style={{color:"#E6AF2E",fontFamily:"'JetBrains Mono',monospace",flexShrink:"0"}}>→</span><span>Business card design</span></div>
</div>
<div style={{display:"flex",flexDirection:"column",gap:"14px"}}>
<span style={{font:"500 10px/1 'JetBrains Mono',monospace",letterSpacing:".16em",textTransform:"uppercase",opacity:".7"}}>Delivered in 14 days</span>
<a className="brand-p30 brand-p31 brand-p32" href="/contact" style={{border:"1px solid rgba(255,255,250,.4)",borderRadius:"999px",padding:"14px 22px",fontSize:"14px",fontWeight:"600",textAlign:"center",color:"#FFFFFA",transition:"transform 140ms cubic-bezier(.2,.7,.2,1),background-color 200ms cubic-bezier(.2,.7,.2,1),border-color 200ms cubic-bezier(.2,.7,.2,1),color 200ms cubic-bezier(.2,.7,.2,1),opacity 200ms cubic-bezier(.2,.7,.2,1)"}}>Start with Identity</a>
</div>
</div>
<div style={{display:"flex",flexDirection:"column",gap:"24px",padding:"32px 28px",border:"1px solid var(--bw-rule)",borderRadius:"16px"}}>
<div style={{display:"flex",flexDirection:"column",gap:"10px"}}>
<span style={{font:"500 10px/1 'JetBrains Mono',monospace",letterSpacing:".2em",textTransform:"uppercase",color:"var(--bw-accent)"}}>/ 03 — Brand system</span>
<div style={{display:"flex",flexDirection:"column",gap:"7px"}}>
<span style={{fontWeight:"900",fontSize:"44px",letterSpacing:"-.03em"}}>$1,499</span>
<div style={{display:"flex",alignItems:"baseline",gap:"10px"}}><span style={{fontSize:"17px",fontWeight:"600",textDecoration:"line-through",opacity:".7"}}>$4,997</span><span style={{font:"600 10px/1 'JetBrains Mono',monospace",letterSpacing:".14em",textTransform:"uppercase",color:"var(--bw-accent)"}}>70% off</span></div>
</div>
</div>
<div style={{display:"flex",flexDirection:"column",gap:"11px",borderTop:"1px solid var(--bw-rule)",paddingTop:"20px",flex:"1"}}>
<div style={{display:"flex",alignItems:"flex-start",gap:"10px",fontSize:"14px",lineHeight:"1.5",fontWeight:"500",opacity:".8"}}><span style={{color:"var(--bw-accent)",fontFamily:"'JetBrains Mono',monospace",flexShrink:"0"}}>→</span><span>Everything in Identity</span></div>
<div style={{display:"flex",alignItems:"flex-start",gap:"10px",fontSize:"14px",lineHeight:"1.5",fontWeight:"500",opacity:".8"}}><span style={{color:"var(--bw-accent)",fontFamily:"'JetBrains Mono',monospace",flexShrink:"0"}}>→</span><span>Collateral templates (letterhead, proposal, email signature)</span></div>
<div style={{display:"flex",alignItems:"flex-start",gap:"10px",fontSize:"14px",lineHeight:"1.5",fontWeight:"500",opacity:".8"}}><span style={{color:"var(--bw-accent)",fontFamily:"'JetBrains Mono',monospace",flexShrink:"0"}}>→</span><span>Social media content template set</span></div>
</div>
<div style={{display:"flex",flexDirection:"column",gap:"14px"}}>
<span style={{font:"500 10px/1 'JetBrains Mono',monospace",letterSpacing:".16em",textTransform:"uppercase",opacity:".7"}}>Delivered in 3 weeks</span>
<a className="brand-p33 brand-p34 brand-p35" href="/contact" style={{border:"1px solid var(--bw-fg)",backgroundImage:"url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2790%27 height=%2790%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.85%27 numOctaves=%273%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27 opacity=%270.12%27/%3E%3C/svg%3E')",backgroundSize:"90px 90px",borderRadius:"999px",padding:"14px 22px",fontSize:"14px",fontWeight:"600",textAlign:"center",transition:"transform 140ms cubic-bezier(.2,.7,.2,1),background-color 200ms cubic-bezier(.2,.7,.2,1),border-color 200ms cubic-bezier(.2,.7,.2,1),color 200ms cubic-bezier(.2,.7,.2,1),opacity 200ms cubic-bezier(.2,.7,.2,1)"}}>Start with Brand system</a>
</div>
</div>
<div style={{display:"flex",flexDirection:"column",gap:"24px",padding:"32px 28px",border:"1px solid var(--bw-rule)",borderRadius:"16px"}}>
<div style={{display:"flex",flexDirection:"column",gap:"10px"}}>
<span style={{font:"500 10px/1 'JetBrains Mono',monospace",letterSpacing:".2em",textTransform:"uppercase",color:"var(--bw-accent)"}}>/ 04 — Brand strategy</span>
<div style={{display:"flex",flexDirection:"column",gap:"7px"}}>
<span style={{fontWeight:"900",fontSize:"44px",letterSpacing:"-.03em"}}>$2,000</span>
<div style={{display:"flex",alignItems:"baseline",gap:"10px"}}><span style={{fontSize:"17px",fontWeight:"600",textDecoration:"line-through",opacity:".7"}}>$6,667</span><span style={{font:"600 10px/1 'JetBrains Mono',monospace",letterSpacing:".14em",textTransform:"uppercase",color:"var(--bw-accent)"}}>70% off</span></div>
</div>
</div>
<div style={{display:"flex",flexDirection:"column",gap:"11px",borderTop:"1px solid var(--bw-rule)",paddingTop:"20px",flex:"1"}}>
<div style={{display:"flex",alignItems:"flex-start",gap:"10px",fontSize:"14px",lineHeight:"1.5",fontWeight:"500",opacity:".8"}}><span style={{color:"var(--bw-accent)",fontFamily:"'JetBrains Mono',monospace",flexShrink:"0"}}>→</span><span>Everything in Brand system</span></div>
<div style={{display:"flex",alignItems:"flex-start",gap:"10px",fontSize:"14px",lineHeight:"1.5",fontWeight:"500",opacity:".8"}}><span style={{color:"var(--bw-accent)",fontFamily:"'JetBrains Mono',monospace",flexShrink:"0"}}>→</span><span>Brand positioning</span></div>
<div style={{display:"flex",alignItems:"flex-start",gap:"10px",fontSize:"14px",lineHeight:"1.5",fontWeight:"500",opacity:".8"}}><span style={{color:"var(--bw-accent)",fontFamily:"'JetBrains Mono',monospace",flexShrink:"0"}}>→</span><span>Messaging framework</span></div>
<div style={{display:"flex",alignItems:"flex-start",gap:"10px",fontSize:"14px",lineHeight:"1.5",fontWeight:"500",opacity:".8"}}><span style={{color:"var(--bw-accent)",fontFamily:"'JetBrains Mono',monospace",flexShrink:"0"}}>→</span><span>Competitive research</span></div>
</div>
<div style={{display:"flex",flexDirection:"column",gap:"14px"}}>
<a className="brand-p36 brand-p37 brand-p38" href="/contact" style={{border:"1px solid var(--bw-fg)",backgroundImage:"url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2790%27 height=%2790%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.85%27 numOctaves=%273%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27 opacity=%270.12%27/%3E%3C/svg%3E')",backgroundSize:"90px 90px",borderRadius:"999px",padding:"14px 22px",fontSize:"14px",fontWeight:"600",textAlign:"center",transition:"transform 140ms cubic-bezier(.2,.7,.2,1),background-color 200ms cubic-bezier(.2,.7,.2,1),border-color 200ms cubic-bezier(.2,.7,.2,1),color 200ms cubic-bezier(.2,.7,.2,1),opacity 200ms cubic-bezier(.2,.7,.2,1)"}}>Start with Brand strategy</a>
</div>
</div>
</div>
</div>
</section>
<section style={{padding:"64px 0 96px"}}>
<div data-bw-pad="" style={{maxWidth:"1440px",margin:"0 auto",padding:"0 40px",display:"flex",flexDirection:"column",gap:"24px"}}>
<span style={{font:"500 11px/1 'JetBrains Mono',monospace",letterSpacing:".14em",textTransform:"uppercase",opacity:".7"}}>// Other services</span>
<div style={{display:"flex",gap:"12px",flexWrap:"wrap"}}>
<a className="brand-p39 brand-p40 brand-p41" href="/website-and-portfolio" style={{border:"1px solid var(--bw-fg)",backgroundImage:"url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2790%27 height=%2790%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.85%27 numOctaves=%273%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27 opacity=%270.12%27/%3E%3C/svg%3E')",backgroundSize:"90px 90px",borderRadius:"999px",padding:"14px 22px",fontSize:"14px",fontWeight:"600",transition:"transform 140ms cubic-bezier(.2,.7,.2,1),background-color 200ms cubic-bezier(.2,.7,.2,1),border-color 200ms cubic-bezier(.2,.7,.2,1),color 200ms cubic-bezier(.2,.7,.2,1),opacity 200ms cubic-bezier(.2,.7,.2,1)"}}>Website &amp; portfolio</a>
<a className="brand-p42 brand-p43 brand-p44" href="/interactive-assets" style={{border:"1px solid var(--bw-fg)",backgroundImage:"url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2790%27 height=%2790%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.85%27 numOctaves=%273%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27 opacity=%270.12%27/%3E%3C/svg%3E')",backgroundSize:"90px 90px",borderRadius:"999px",padding:"14px 22px",fontSize:"14px",fontWeight:"600",transition:"transform 140ms cubic-bezier(.2,.7,.2,1),background-color 200ms cubic-bezier(.2,.7,.2,1),border-color 200ms cubic-bezier(.2,.7,.2,1),color 200ms cubic-bezier(.2,.7,.2,1),opacity 200ms cubic-bezier(.2,.7,.2,1)"}}>Interactive assets</a>
<a className="brand-p45 brand-p46 brand-p47" href="/b2b-answer-engine" style={{border:"1px solid var(--bw-fg)",backgroundImage:"url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2790%27 height=%2790%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.85%27 numOctaves=%273%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27 opacity=%270.12%27/%3E%3C/svg%3E')",backgroundSize:"90px 90px",borderRadius:"999px",padding:"14px 22px",fontSize:"14px",fontWeight:"600",transition:"transform 140ms cubic-bezier(.2,.7,.2,1),background-color 200ms cubic-bezier(.2,.7,.2,1),border-color 200ms cubic-bezier(.2,.7,.2,1),color 200ms cubic-bezier(.2,.7,.2,1),opacity 200ms cubic-bezier(.2,.7,.2,1)"}}>B2B answer engine placement</a>
<a className="brand-p48 brand-p49 brand-p50" href="/lead-detective" style={{border:"1px solid var(--bw-fg)",backgroundImage:"url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2790%27 height=%2790%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.85%27 numOctaves=%273%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27 opacity=%270.12%27/%3E%3C/svg%3E')",backgroundSize:"90px 90px",borderRadius:"999px",padding:"14px 22px",fontSize:"14px",fontWeight:"600",transition:"transform 140ms cubic-bezier(.2,.7,.2,1),background-color 200ms cubic-bezier(.2,.7,.2,1),border-color 200ms cubic-bezier(.2,.7,.2,1),color 200ms cubic-bezier(.2,.7,.2,1),opacity 200ms cubic-bezier(.2,.7,.2,1)"}}>Lead detective</a>
<a className="brand-p51 brand-p52 brand-p53" href="/mypen" style={{border:"1px solid var(--bw-fg)",backgroundImage:"url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2790%27 height=%2790%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.85%27 numOctaves=%273%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27 opacity=%270.12%27/%3E%3C/svg%3E')",backgroundSize:"90px 90px",borderRadius:"999px",padding:"14px 22px",fontSize:"14px",fontWeight:"600",transition:"transform 140ms cubic-bezier(.2,.7,.2,1),background-color 200ms cubic-bezier(.2,.7,.2,1),border-color 200ms cubic-bezier(.2,.7,.2,1),color 200ms cubic-bezier(.2,.7,.2,1),opacity 200ms cubic-bezier(.2,.7,.2,1)"}}>Mypen</a>
<a className="brand-p54 brand-p55 brand-p56" href="/researchify" style={{border:"1px solid var(--bw-fg)",backgroundImage:"url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2790%27 height=%2790%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.85%27 numOctaves=%273%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27 opacity=%270.12%27/%3E%3C/svg%3E')",backgroundSize:"90px 90px",borderRadius:"999px",padding:"14px 22px",fontSize:"14px",fontWeight:"600",transition:"transform 140ms cubic-bezier(.2,.7,.2,1),background-color 200ms cubic-bezier(.2,.7,.2,1),border-color 200ms cubic-bezier(.2,.7,.2,1),color 200ms cubic-bezier(.2,.7,.2,1),opacity 200ms cubic-bezier(.2,.7,.2,1)"}}>Researchify</a>
<a className="brand-p57 brand-p58 brand-p59" href="/self-serve-buying" style={{border:"1px solid var(--bw-fg)",backgroundImage:"url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2790%27 height=%2790%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.85%27 numOctaves=%273%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27 opacity=%270.12%27/%3E%3C/svg%3E')",backgroundSize:"90px 90px",borderRadius:"999px",padding:"14px 22px",fontSize:"14px",fontWeight:"600",transition:"transform 140ms cubic-bezier(.2,.7,.2,1),background-color 200ms cubic-bezier(.2,.7,.2,1),border-color 200ms cubic-bezier(.2,.7,.2,1),color 200ms cubic-bezier(.2,.7,.2,1),opacity 200ms cubic-bezier(.2,.7,.2,1)"}}>Self-serve buying</a>
</div>
<div style={{display:"flex",justifyContent:"space-between",gap:"24px",flexWrap:"wrap",borderTop:"1px solid var(--bw-rule)",paddingTop:"24px",font:"500 11px/1 'JetBrains Mono',monospace",letterSpacing:".14em",textTransform:"uppercase",opacity:".7"}}>
<span>© 2026 Blackware Labs</span><a className="brand-p60 brand-p61" href="/">← Back to homepage</a>
</div>
</div>
</section>
</div>
</div>
</>);
}