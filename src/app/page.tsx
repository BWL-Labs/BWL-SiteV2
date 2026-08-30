"use client";

import { SiteFooter } from "@/components/site-footer";
import "@/styles/pages/home.css";
import { useHomeLogic } from "@/generated/home.logic";
export default function Home() {
  const v = useHomeLogic();
  return (<>
<meta name="viewport" content="width=device-width, initial-scale=1" /><link rel="preconnect" href="https://fonts.googleapis.com" /><link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" /><link href="https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400&family=Barlow+Condensed:wght@700;800;900&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&family=Anton&display=swap" rel="stylesheet" />
<div data-bw-loader="" aria-hidden="true" style={{position:"fixed",inset:"0",zIndex:"9999",background:"var(--bw-bg)",display:"flex",alignItems:"center",justifyContent:"center",transition:"opacity .6s cubic-bezier(.2,.7,.2,1)",opacity:"1"}}>
<div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:"18px"}}>
<svg data-bw-mark="" width="188" height="118" viewBox="0 0 132 100" fill="none" aria-hidden="true" style={{display:"block",overflow:"visible"}}>
<g stroke="var(--bw-fg)" strokeWidth="13" strokeLinecap="butt" strokeLinejoin="miter" fill="none">
<path data-bw-stroke="" pathLength="1" d="M13 7 V93" />
<path data-bw-stroke="" pathLength="1" d="M13 7 H31 A19 19 0 0 1 31 45 H13" />
<path data-bw-stroke="" pathLength="1" d="M13 45 H35 A24 24 0 0 1 35 93 H13" />
<path data-bw-stroke="" pathLength="1" d="M72 7 L85 93 L99 42 L113 93 L126 7" />
</g>
</svg>
<span data-bw-mark-sub="" style={{display:"flex",alignItems:"center",gap:"9px",font:"500 11px/1 'JetBrains Mono',monospace",letterSpacing:".28em",textTransform:"uppercase",color:"var(--bw-fg)",opacity:"0"}}>
        Labs<span style={{width:"16px",height:"1px",background:"currentColor",display:"block",opacity:".55"}}></span><span style={{color:"var(--bw-accent)"}}>//</span>
</span>
</div>
</div>
<div style={{background:"var(--bw-bg)",color:"var(--bw-fg)",minHeight:"100vh",position:"relative"}}>
<div aria-hidden="true" style={{position:"fixed",inset:"0",zIndex:"0",pointerEvents:"none",opacity:"var(--bw-grain)"}}>
<svg width="100%" height="100%" style={{display:"block"}} preserveAspectRatio="none">
<filter id="bw-grain"><feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" stitchTiles="stitch"></feTurbulence></filter>
<rect width="100%" height="100%" filter="url(#bw-grain)"></rect>
</svg>
</div>
<div style={{position:"relative",zIndex:"1"}}>
<header data-bw-nav="" style={{position:"fixed",top:"0",left:"0",right:"0",zIndex:"100",padding:"14px 0",transition:"padding .35s cubic-bezier(.22,1,.36,1),background .35s ease,box-shadow .35s ease",background:"var(--bw-head)",backdropFilter:"blur(24px) saturate(180%)",WebkitBackdropFilter:"blur(24px) saturate(180%)"}}>
<div style={{maxWidth:"1440px",margin:"0 auto",padding:"0 40px",display:"flex",alignItems:"center",justifyContent:"space-between",gap:"32px"}}>
<a href="#top" style={{display:"flex",alignItems:"center",gap:"10px",flexShrink:"0"}}>
<img data-bw-logo="" src="/assets/blackware-logo.svg" alt="Blackware Labs" style={{height:"38px",width:"auto",display:"block",flexShrink:"0"}} />
</a>
<div data-bw-head-controls=""><button className="home-p1 home-p2 home-p3" data-bw-theme-toggle="" type="button" aria-label="Switch between day and night" style={{width:"40px",height:"40px",borderRadius:"999px",border:"1px solid var(--bw-toggle-bd)",background:"transparent",color:"var(--bw-fg)",cursor:"pointer",display:"grid",placeItems:"center",flexShrink:"0",padding:"0",transition:"border-color .16s cubic-bezier(.2,.7,.2,1),color .16s cubic-bezier(.2,.7,.2,1),transform 140ms cubic-bezier(.2,.7,.2,1),background-color 200ms cubic-bezier(.2,.7,.2,1),opacity 200ms cubic-bezier(.2,.7,.2,1)"}}>
<svg data-bw-icon="sun" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2.4M12 19.6V22M2 12h2.4M19.6 12H22M4.9 4.9l1.7 1.7M17.4 17.4l1.7 1.7M19.1 4.9l-1.7 1.7M6.6 17.4l-1.7 1.7"></path></svg>
<svg data-bw-icon="moon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20.5 14.6A8.6 8.6 0 0 1 9.4 3.5a8.6 8.6 0 1 0 11.1 11.1Z"></path></svg>
</button>
<a className="home-p4 home-p5 home-p6" data-bw-cta="" href="#contact" style={{display:"inline-flex",alignItems:"center",gap:"10px",backgroundColor:"#080705",backgroundImage:"url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2790%27 height=%2790%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.85%27 numOctaves=%273%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27 opacity=%270.45%27/%3E%3C/svg%3E')",backgroundSize:"90px 90px",backgroundBlendMode:"overlay",color:"#FFFFFA",padding:"12px 20px",borderRadius:"999px",border:"1px solid var(--bw-glass-bd)",boxShadow:"0 14px 30px -18px rgba(8,7,5,.9),0 1px 0 rgba(255,255,250,.3) inset",fontSize:"13px",fontWeight:"600",letterSpacing:"-.01em",flexShrink:"0",transition:"transform 140ms cubic-bezier(.2,.7,.2,1),background-color 200ms cubic-bezier(.2,.7,.2,1),border-color 200ms cubic-bezier(.2,.7,.2,1),color 200ms cubic-bezier(.2,.7,.2,1),opacity 200ms cubic-bezier(.2,.7,.2,1)"}}>
<span aria-hidden="true" style={{position:"relative",width:"8px",height:"8px",flexShrink:"0",display:"block"}}>
<span style={{position:"absolute",inset:"-5px",borderRadius:"50%",background:"radial-gradient(circle,rgba(230,175,46,.55) 0%,rgba(230,175,46,0) 70%)",animation:"bwCorePulse 2s ease-in-out infinite"}}></span>
<span style={{position:"absolute",inset:"0",borderRadius:"50%",background:"#E6AF2E",boxShadow:"0 0 6px 1px rgba(230,175,46,.8)"}}></span>
</span>Book a call</a></div>
</div>
</header>
<div style={{position:"fixed",top:"0",left:"0",right:"0",height:"2px",zIndex:"130",background:"rgba(8,7,5,.07)",pointerEvents:"none"}}>
<div data-bw-progress="" style={{height:"100%",width:"0%",background:"linear-gradient(90deg,rgba(8,7,5,.45),#080705)",boxShadow:"0 0 12px rgba(8,7,5,.35)"}}></div>
</div>
<div data-bw-scrim="" style={{position:"fixed",inset:"0",zIndex:"110",opacity:"0",pointerEvents:"none",transition:"opacity .45s ease",background:"rgba(10, 10, 10, .85)"}}></div>
<div data-bw-radial="" style={{position:"fixed",right:"74px",bottom:"74px",width:"0",height:"0",zIndex:"120"}}>
<span data-bw-radial-ring="" style={{position:"absolute",left:"0",top:"0",width:"380px",height:"380px",translate:"-50% -50%",borderRadius:"50%",border:"1px dashed rgba(8,7,5,.16)",display:"block",opacity:"0",scale:".7",transition:"opacity .5s ease,scale .7s cubic-bezier(.16,1,.3,1)",pointerEvents:"none"}}></span>
<button className="home-p7 home-p8 home-p9" data-bw-radial-item="0" data-bw-target="#work" style={{position:"absolute",left:"0",top:"0",transformOrigin:"0 0",width:"78px",height:"78px",borderRadius:"50%",cursor:"pointer",color:"#080705",fontFamily:"Archivo,sans-serif",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"8px",border:"1px solid rgba(255,255,250,.72)",background:"linear-gradient(140deg,rgba(255,255,250,.78),rgba(255,255,250,.36))",backdropFilter:"blur(20px) saturate(180%)",WebkitBackdropFilter:"blur(20px) saturate(180%)",boxShadow:"0 18px 40px -22px rgba(8,7,5,.5),0 1px 0 rgba(255,255,250,.95) inset",opacity:"0",transition:"transform .7s cubic-bezier(.16,1,.3,1),opacity .4s ease,box-shadow .16s ease,background-color 200ms cubic-bezier(.2,.7,.2,1),border-color 200ms cubic-bezier(.2,.7,.2,1),color 200ms cubic-bezier(.2,.7,.2,1)"}}>
<span style={{width:"15px",height:"15px",border:"1.6px solid #080705",display:"block"}}></span>
<span style={{font:"500 8.5px/1 'JetBrains Mono',monospace",letterSpacing:".1em",textTransform:"uppercase"}}>Work</span>
</button>
<button className="home-p10 home-p11 home-p12" data-bw-radial-item="1" data-bw-target="#services" style={{position:"absolute",left:"0",top:"0",transformOrigin:"0 0",width:"78px",height:"78px",borderRadius:"50%",cursor:"pointer",color:"#080705",fontFamily:"Archivo,sans-serif",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"8px",border:"1px solid rgba(255,255,250,.72)",background:"linear-gradient(140deg,rgba(255,255,250,.78),rgba(255,255,250,.36))",backdropFilter:"blur(20px) saturate(180%)",WebkitBackdropFilter:"blur(20px) saturate(180%)",boxShadow:"0 18px 40px -22px rgba(8,7,5,.5),0 1px 0 rgba(255,255,250,.95) inset",opacity:"0",transition:"transform .7s cubic-bezier(.16,1,.3,1),opacity .4s ease,box-shadow .16s ease,background-color 200ms cubic-bezier(.2,.7,.2,1),border-color 200ms cubic-bezier(.2,.7,.2,1),color 200ms cubic-bezier(.2,.7,.2,1)"}}>
<span style={{width:"16px",height:"16px",border:"1.6px solid #080705",borderRadius:"50%",display:"grid",placeItems:"center"}}><span style={{width:"5px",height:"5px",background:"#080705",borderRadius:"50%",display:"block"}}></span></span>
<span style={{font:"500 8.5px/1 'JetBrains Mono',monospace",letterSpacing:".1em",textTransform:"uppercase"}}>Services</span>
</button>
<button className="home-p13 home-p14 home-p15" data-bw-radial-item="2" data-bw-target="#process" style={{position:"absolute",left:"0",top:"0",transformOrigin:"0 0",width:"78px",height:"78px",borderRadius:"50%",cursor:"pointer",color:"#080705",fontFamily:"Archivo,sans-serif",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"8px",border:"1px solid rgba(255,255,250,.72)",background:"linear-gradient(140deg,rgba(255,255,250,.78),rgba(255,255,250,.36))",backdropFilter:"blur(20px) saturate(180%)",WebkitBackdropFilter:"blur(20px) saturate(180%)",boxShadow:"0 18px 40px -22px rgba(8,7,5,.5),0 1px 0 rgba(255,255,250,.95) inset",opacity:"0",transition:"transform .7s cubic-bezier(.16,1,.3,1),opacity .4s ease,box-shadow .16s ease,background-color 200ms cubic-bezier(.2,.7,.2,1),border-color 200ms cubic-bezier(.2,.7,.2,1),color 200ms cubic-bezier(.2,.7,.2,1)"}}>
<span style={{display:"flex",flexDirection:"column",gap:"3.5px",alignItems:"flex-start"}}><span style={{width:"16px",height:"1.6px",background:"#080705",display:"block"}}></span><span style={{width:"11px",height:"1.6px",background:"#080705",display:"block"}}></span><span style={{width:"6px",height:"1.6px",background:"#080705",display:"block"}}></span></span>
<span style={{font:"500 8.5px/1 'JetBrains Mono',monospace",letterSpacing:".1em",textTransform:"uppercase"}}>Process</span>
</button>
<button className="home-p16 home-p17 home-p18" data-bw-radial-item="3" data-bw-target="#pricing" style={{position:"absolute",left:"0",top:"0",transformOrigin:"0 0",width:"78px",height:"78px",borderRadius:"50%",cursor:"pointer",color:"#080705",fontFamily:"Archivo,sans-serif",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"8px",border:"1px solid rgba(255,255,250,.72)",background:"linear-gradient(140deg,rgba(255,255,250,.78),rgba(255,255,250,.36))",backdropFilter:"blur(20px) saturate(180%)",WebkitBackdropFilter:"blur(20px) saturate(180%)",boxShadow:"0 18px 40px -22px rgba(8,7,5,.5),0 1px 0 rgba(255,255,250,.95) inset",opacity:"0",transition:"transform .7s cubic-bezier(.16,1,.3,1),opacity .4s ease,box-shadow .16s ease,background-color 200ms cubic-bezier(.2,.7,.2,1),border-color 200ms cubic-bezier(.2,.7,.2,1),color 200ms cubic-bezier(.2,.7,.2,1)"}}>
<span style={{width:"13px",height:"13px",border:"1.6px solid #080705",transform:"rotate(45deg)",display:"block"}}></span>
<span style={{font:"500 8.5px/1 'JetBrains Mono',monospace",letterSpacing:".1em",textTransform:"uppercase"}}>Pricing</span>
</button>
<button className="home-p19 home-p20" data-bw-radial-item="4" data-bw-href="/about" style={{position:"absolute",left:"0",top:"0",transformOrigin:"0 0",width:"78px",height:"78px",borderRadius:"50%",cursor:"pointer",color:"#080705",fontFamily:"'JetBrains Mono',monospace",background:"#FFFFFA",border:"1px solid rgba(8,7,5,.14)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"6px",opacity:"0",pointerEvents:"none",transition:"transform .5s cubic-bezier(.16,1,.3,1),opacity .4s ease,background .16s ease,border-color 200ms cubic-bezier(.2,.7,.2,1),color 200ms cubic-bezier(.2,.7,.2,1)"}}>
<span style={{width:"15px",height:"15px",border:"1.6px solid #080705",borderRadius:"50%",display:"block"}}></span>
<span style={{font:"500 8.5px/1 'JetBrains Mono',monospace",letterSpacing:".1em",textTransform:"uppercase"}}>About</span>
</button>
<button className="home-p21 home-p22 home-p23" data-bw-radial-item="5" data-bw-target="#insights" style={{position:"absolute",left:"0",top:"0",transformOrigin:"0 0",width:"78px",height:"78px",borderRadius:"50%",cursor:"pointer",color:"#080705",fontFamily:"Archivo,sans-serif",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"8px",border:"1px solid rgba(255,255,250,.72)",background:"linear-gradient(140deg,rgba(255,255,250,.78),rgba(255,255,250,.36))",backdropFilter:"blur(20px) saturate(180%)",WebkitBackdropFilter:"blur(20px) saturate(180%)",boxShadow:"0 18px 40px -22px rgba(8,7,5,.5),0 1px 0 rgba(255,255,250,.95) inset",opacity:"0",transition:"transform .7s cubic-bezier(.16,1,.3,1),opacity .4s ease,box-shadow .16s ease,background-color 200ms cubic-bezier(.2,.7,.2,1),border-color 200ms cubic-bezier(.2,.7,.2,1),color 200ms cubic-bezier(.2,.7,.2,1)"}}>
<span style={{width:"0",height:"0",borderLeft:"8px solid transparent",borderRight:"8px solid transparent",borderBottom:"14px solid #080705",display:"block"}}></span>
<span style={{font:"500 8.5px/1 'JetBrains Mono',monospace",letterSpacing:".1em",textTransform:"uppercase"}}>Insights</span>
</button>
<button className="home-p24 home-p25" data-bw-radial-hub="" aria-label="Open navigation" style={{position:"absolute",left:"0",top:"0",translate:"-50% -50%",width:"88px",height:"88px",borderRadius:"50%",cursor:"pointer",color:"#FFFFFA",fontFamily:"Archivo,sans-serif",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"7px",border:"1px solid rgba(255,255,250,.28)",background:"linear-gradient(150deg,rgba(34,30,25,.9),rgba(8,7,5,.78))",backdropFilter:"blur(24px) saturate(160%)",WebkitBackdropFilter:"blur(24px) saturate(160%)",boxShadow:"0 26px 54px -22px rgba(8,7,5,.8),0 1px 0 rgba(255,255,250,.28) inset",transition:"transform .6s cubic-bezier(.16,1,.3,1),box-shadow .16s ease,background-color 200ms cubic-bezier(.2,.7,.2,1),border-color 200ms cubic-bezier(.2,.7,.2,1),color 200ms cubic-bezier(.2,.7,.2,1),opacity 200ms cubic-bezier(.2,.7,.2,1)"}}>
<span data-bw-radial-glyph="" style={{width:"17px",height:"17px",position:"relative",display:"block",transition:"transform .6s cubic-bezier(.16,1,.3,1)"}}>
<span style={{position:"absolute",top:"8px",left:"0",width:"17px",height:"1.6px",background:"#FFFFFA",display:"block"}}></span>
<span style={{position:"absolute",left:"8px",top:"0",width:"1.6px",height:"17px",background:"#FFFFFA",display:"block"}}></span>
</span>
<span data-bw-radial-hublabel="" style={{font:"500 8.5px/1 'JetBrains Mono',monospace",letterSpacing:".12em",textTransform:"uppercase"}}>Menu</span>
</button>
</div>
<section id="top" style={{position:"relative",padding:"172px 0 0",minHeight:"100vh",display:"flex",flexDirection:"column",justifyContent:"space-between",overflow:"hidden"}}>
<video data-bw-hero-video="" src="/assets/hero-reel.mp4" autoPlay={true} muted={true} loop={true} playsInline={true} preload="metadata" poster="/assets/hero-reel-poster.webp" style={{position:"absolute",top:"var(--bw-head-h)",left:"0",right:"0",height:"calc(100% - var(--bw-head-h))",width:"100%",objectFit:"cover",objectPosition:"50% 50%",zIndex:"-1",display:"block",filter:"contrast(1.25) saturate(1.1)"}}></video>
<div style={{position:"absolute",top:"var(--bw-head-h)",left:"0",right:"0",height:"calc(100% - var(--bw-head-h))",background:"rgba(8,7,5,.35)",zIndex:"-1",pointerEvents:"none"}}></div>
<div style={{maxWidth:"1440px",margin:"0 auto",padding:"0 40px",width:"100%"}}>
<h1 aria-label="Ads get skipped. Games get played." style={{fontFamily:"'Barlow Condensed',Archivo,sans-serif",margin:"clamp(60px,14vh,150px) 0 0",maxWidth:"900px",display:"flex",flexWrap:"wrap",alignItems:"baseline",columnGap:".14em",rowGap:"0",fontWeight:"900",fontSize:"clamp(34px,7.4vw,148px)",lineHeight:".92",letterSpacing:"-.04em",textTransform:"uppercase",color:"#FFFFFA",mixBlendMode:"normal"}}>
<span style={{display:"inline-flex"}}>
<span className="home-p26" style={{position:"relative",display:"inline-block",animation:"bwPop .6s cubic-bezier(.2,.7,.2,1) both",animationDelay:"0s"}}>A<span style={{position:"absolute",left:"0",top:"0",color:"#C84A1F",pointerEvents:"none",animation:"bwSweep .42s ease-in-out both",animationDelay:"1.6s"}} aria-hidden="true" data-bw-sweep="A"></span></span>
<span className="home-p27" style={{position:"relative",display:"inline-block",animation:"bwPop .6s cubic-bezier(.2,.7,.2,1) both",animationDelay:".08s"}}>D</span>
<span className="home-p28" style={{position:"relative",display:"inline-block",animation:"bwPop .6s cubic-bezier(.2,.7,.2,1) both",animationDelay:".16s"}}>S<span style={{position:"absolute",left:"0",top:"0",color:"#C84A1F",pointerEvents:"none",animation:"bwSweep .42s ease-in-out both",animationDelay:"1.7s"}} aria-hidden="true" data-bw-sweep="S"></span></span>
</span>
<span style={{display:"inline-flex"}}>
<span className="home-p29" style={{position:"relative",display:"inline-block",animation:"bwPop .6s cubic-bezier(.2,.7,.2,1) both",animationDelay:".24s"}}>G<span style={{position:"absolute",left:"0",top:"0",color:"#C84A1F",pointerEvents:"none",animation:"bwSweep .42s ease-in-out both",animationDelay:"1.75s"}} aria-hidden="true" data-bw-sweep="G"></span></span>
<span className="home-p30" style={{position:"relative",display:"inline-block",animation:"bwPop .6s cubic-bezier(.2,.7,.2,1) both",animationDelay:".32s"}}>E</span>
<span className="home-p31" style={{position:"relative",display:"inline-block",animation:"bwPop .6s cubic-bezier(.2,.7,.2,1) both",animationDelay:".4s"}}>T<span style={{position:"absolute",left:"0",top:"0",color:"#C84A1F",pointerEvents:"none",animation:"bwSweep .42s ease-in-out both",animationDelay:"1.85s"}} aria-hidden="true" data-bw-sweep="T"></span></span>
</span>
<span style={{display:"inline-flex"}}>
<span className="home-p32" style={{position:"relative",display:"inline-block",animation:"bwPop .6s cubic-bezier(.2,.7,.2,1) both",animationDelay:".48s"}}>S<span style={{position:"absolute",left:"0",top:"0",color:"#C84A1F",pointerEvents:"none",animation:"bwSweep .42s ease-in-out both",animationDelay:"1.9s"}} aria-hidden="true" data-bw-sweep="S"></span></span>
<span className="home-p33" style={{position:"relative",display:"inline-block",animation:"bwPop .6s cubic-bezier(.2,.7,.2,1) both",animationDelay:".56s"}}>K</span>
<span className="home-p34" style={{position:"relative",display:"inline-block",animation:"bwPop .6s cubic-bezier(.2,.7,.2,1) both",animationDelay:".64s"}}>I<span style={{position:"absolute",left:"0",top:"0",color:"#C84A1F",pointerEvents:"none",animation:"bwSweep .42s ease-in-out both",animationDelay:"2s"}} aria-hidden="true" data-bw-sweep="I"></span></span>
<span className="home-p35" style={{position:"relative",display:"inline-block",animation:"bwPop .6s cubic-bezier(.2,.7,.2,1) both",animationDelay:".72s"}}>P<span style={{position:"absolute",left:"0",top:"0",color:"#C84A1F",pointerEvents:"none",animation:"bwSweep .42s ease-in-out both",animationDelay:"2.05s"}} aria-hidden="true" data-bw-sweep="P"></span></span>
<span className="home-p36" style={{position:"relative",display:"inline-block",animation:"bwPop .6s cubic-bezier(.2,.7,.2,1) both",animationDelay:".8s"}}>P<span style={{position:"absolute",left:"0",top:"0",color:"#C84A1F",pointerEvents:"none",animation:"bwSweep .42s ease-in-out both",animationDelay:"2.1s"}} aria-hidden="true" data-bw-sweep="P"></span></span>
<span className="home-p37" style={{position:"relative",display:"inline-block",animation:"bwPop .6s cubic-bezier(.2,.7,.2,1) both",animationDelay:".88s"}}>E<span style={{position:"absolute",left:"0",top:"0",color:"#C84A1F",pointerEvents:"none",animation:"bwSweep .42s ease-in-out both",animationDelay:"2.15s"}} aria-hidden="true" data-bw-sweep="E"></span></span>
<span className="home-p38" style={{position:"relative",display:"inline-block",animation:"bwPop .6s cubic-bezier(.2,.7,.2,1) both",animationDelay:".96s"}}>D<span style={{position:"absolute",left:"0",top:"0",color:"#C84A1F",pointerEvents:"none",animation:"bwSweep .42s ease-in-out both",animationDelay:"2.2s"}} aria-hidden="true" data-bw-sweep="D"></span></span>
</span>
</h1>
<div style={{fontFamily:"'Barlow Condensed',Archivo,sans-serif",margin:".08em 0 0",maxWidth:"900px",display:"flex",flexWrap:"wrap",alignItems:"baseline",columnGap:".14em",rowGap:"0",fontWeight:"900",fontSize:"clamp(34px,7.4vw,148px)",lineHeight:".92",letterSpacing:"-.04em",textTransform:"uppercase",color:"#FFFFFA"}}>
<span style={{display:"inline-grid",overflow:"visible",paddingRight:".5ch",verticalAlign:"baseline",lineHeight:"1.2"}}>
<span style={{gridArea:"1/1",whiteSpace:"nowrap",color:"#E6AF2E",opacity:"0",animation:"bwCycle1 6s cubic-bezier(.2,.7,.2,1) infinite"}}>Games</span>
<span style={{gridArea:"1/1",whiteSpace:"nowrap",color:"#C84A1F",opacity:"0",animation:"bwCycle2 6s cubic-bezier(.2,.7,.2,1) infinite"}}>Worlds</span>
<span style={{gridArea:"1/1",whiteSpace:"nowrap",color:"#912F40",opacity:"0",animation:"bwCycle3 6s cubic-bezier(.2,.7,.2,1) infinite"}}>Stories</span>
</span>
<span style={{whiteSpace:"nowrap"}}>Get Played</span>
</div>
</div>
<div style={{maxWidth:"1440px",margin:"0 auto",padding:"56px 40px 40px",width:"100%",display:"flex",justifyContent:"flex-end",alignItems:"flex-end",gap:"40px",flexWrap:"wrap"}}>
<div style={{display:"flex",flexDirection:"column",alignItems:"flex-start",gap:"10px",font:"500 11px/1 'JetBrains Mono',monospace",letterSpacing:".14em",textTransform:"uppercase",opacity:".5"}}>
<span>Scroll</span>
<span style={{width:"1px",height:"44px",background:"#080705",display:"block",opacity:".4"}}></span>
</div>
</div>
<div aria-hidden="true" style={{position:"absolute",left:"0",right:"0",bottom:"0",height:"210px",background:"linear-gradient(180deg,transparent,var(--bw-bg))",pointerEvents:"none"}}></div>
</section>
<section style={{position:"relative",overflow:"hidden",background:"linear-gradient(180deg,var(--bw-bg) 0,var(--bw-bg) calc(100% - 160px),transparent 100%)",padding:"160px 0 200px"}}>
<div aria-hidden="true" style={{position:"absolute",left:"0",right:"0",top:"0",height:"1px",background:"var(--bw-rule)",zIndex:"2"}}></div>
<div aria-hidden="true" style={{position:"absolute",inset:"0",backgroundImage:"linear-gradient(var(--bw-grid) 1px,transparent 1px),linear-gradient(90deg,var(--bw-grid) 1px,transparent 1px)",backgroundSize:"80px 80px",pointerEvents:"none",zIndex:"0",WebkitMaskImage:"linear-gradient(180deg,transparent 0,#000 150px,#000 calc(100% - 220px),transparent 100%)",maskImage:"linear-gradient(180deg,transparent 0,#000 150px,#000 calc(100% - 220px),transparent 100%)"}}></div>
<div style={{maxWidth:"1440px",margin:"0 auto",padding:"0 40px",position:"relative",zIndex:"1",display:"grid",gridTemplateColumns:"40% 60%",gap:"40px",alignItems:"center"}}>
<div data-bw-bot-wrap="" style={{position:"relative",aspectRatio:"4/5",width:"100%"}}>
<svg width="0" height="0" style={{position:"absolute",overflow:"hidden"}}><defs><filter id="bw-key" x="-10%" y="-10%" width="120%" height="120%" colorInterpolationFilters="sRGB"><feColorMatrix in="SourceGraphic" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  -2.99 -5.87 -1.14 0 4.9" result="mask"></feColorMatrix><feComponentTransfer in="mask" result="maskSoft"><feFuncA type="gamma" amplitude="1" exponent="1.4" offset="0"></feFuncA></feComponentTransfer><feComposite in="SourceGraphic" in2="maskSoft" operator="in"></feComposite></filter></defs></svg>
<video data-bw-hero-video="" data-bw-bot-video="a" src="/assets/bw01-video.mp4" muted={true} playsInline={true} preload="auto" style={{position:"absolute",inset:"0",width:"100%",height:"100%",objectFit:"cover",objectPosition:"50% 22%",display:"block",filter:"url(#bw-key)"}}></video>
</div>
<div data-bw-reveal="" style={{display:"flex",flexDirection:"column",gap:"24px",maxWidth:"600px",paddingRight:"60px"}}>
<div style={{display:"flex",alignItems:"center",gap:"10px",font:"600 11px/1 'JetBrains Mono',monospace",letterSpacing:".16em",textTransform:"uppercase",color:"var(--fg)"}}>
<span style={{position:"relative",width:"7px",height:"7px",flexShrink:"0",display:"block"}}>
<span style={{position:"absolute",inset:"-4px",borderRadius:"50%",background:"rgba(230,175,46,.4)",animation:"bwCorePulse 1.8s ease-in-out infinite",display:"block"}}></span>
<span style={{position:"absolute",inset:"0",borderRadius:"50%",background:"#E6AF2E",display:"block"}}></span>
</span>
          // BW-01 — ONLINE
        </div>
<h2 style={{margin:"0",fontFamily:"'Barlow Condensed',Archivo,sans-serif",fontWeight:"900",fontSize:"clamp(28px,3.4vw,46px)",lineHeight:"1.02",letterSpacing:"-.02em",textTransform:"uppercase",color:"var(--fg)"}}>
<span style={{display:"block"}}>Meet BW-01</span>
<span style={{display:"block"}}>Trained on worlds, not ads</span>
</h2>
<p style={{margin:"0",fontFamily:"Inter,Archivo,sans-serif",fontSize:"16px",lineHeight:"1.6",fontWeight:"500",color:"var(--fg-mute)",maxWidth:"52ch"}}>Tell it about your brand. It'll come back with a concept, a format, and where it would live.</p>
<form className="home-p39" data-bw-prompt="" style={{background:"#FFFFFA",border:"1px solid #080705",borderRadius:"0",padding:"8px 8px 8px 22px",display:"flex",alignItems:"center",gap:"12px",transition:"border-color .16s cubic-bezier(.2,.7,.2,1)"}}>
<span data-bw-caret="" aria-hidden="true" style={{width:"2px",height:"18px",background:"var(--bw-accent)",flexShrink:"0",animation:"bwBlink 1.4s steps(1,end) infinite"}}></span>
<textarea data-bw-prompt-input="" rows={1} placeholder="Tell me about your brand…" style={{flex:"1",border:"0",outline:"none",resize:"none",background:"none",color:"#080705",fontFamily:"'JetBrains Mono',monospace",fontWeight:"500",fontSize:"15px",lineHeight:"1.3",letterSpacing:"0",padding:"10px 0",maxHeight:"4em"}}></textarea>
<button className="home-p40 home-p41 home-p42" type="submit" data-bw-prompt-send="" style={{background:"#E6AF2E",color:"#080705",border:"0",borderRadius:"50%",width:"40px",height:"40px",fontSize:"14px",fontWeight:"600",cursor:"pointer",display:"grid",placeItems:"center",flexShrink:"0",transition:"opacity .16s cubic-bezier(.2,.7,.2,1),transform 140ms cubic-bezier(.2,.7,.2,1),background-color 200ms cubic-bezier(.2,.7,.2,1),border-color 200ms cubic-bezier(.2,.7,.2,1),color 200ms cubic-bezier(.2,.7,.2,1)"}} aria-label="Send"><span data-bw-prompt-send-label="" style={{display:"none"}}></span><span style={{fontFamily:"'JetBrains Mono',monospace",fontSize:"16px"}}>→</span></button>
</form>
<div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"10px"}}>
<button className="home-p43 home-p44 home-p45" type="button" data-bw-chip="What's an advergame?" style={{background:"none",border:"1px solid rgba(122,118,108,.25)",borderRadius:"0",color:"var(--fg-mute)",padding:"9px 16px",font:"500 12px/1 'JetBrains Mono',monospace",letterSpacing:".04em",cursor:"pointer",textAlign:"left",transition:"transform 140ms cubic-bezier(.2,.7,.2,1),background-color 200ms cubic-bezier(.2,.7,.2,1),border-color 200ms cubic-bezier(.2,.7,.2,1),color 200ms cubic-bezier(.2,.7,.2,1),opacity 200ms cubic-bezier(.2,.7,.2,1)"}}>What's an advergame?</button>
<button className="home-p46 home-p47 home-p48" type="button" data-bw-chip="Show me your work" style={{background:"none",border:"1px solid rgba(122,118,108,.25)",borderRadius:"0",color:"var(--fg-mute)",padding:"9px 16px",font:"500 12px/1 'JetBrains Mono',monospace",letterSpacing:".04em",cursor:"pointer",textAlign:"left",transition:"transform 140ms cubic-bezier(.2,.7,.2,1),background-color 200ms cubic-bezier(.2,.7,.2,1),border-color 200ms cubic-bezier(.2,.7,.2,1),color 200ms cubic-bezier(.2,.7,.2,1),opacity 200ms cubic-bezier(.2,.7,.2,1)"}}>Show me your work</button>
<button className="home-p49 home-p50 home-p51" type="button" data-bw-chip="What would you build for me?" style={{background:"none",border:"1px solid rgba(122,118,108,.25)",borderRadius:"0",color:"var(--fg-mute)",padding:"9px 16px",font:"500 12px/1 'JetBrains Mono',monospace",letterSpacing:".04em",cursor:"pointer",textAlign:"left",transition:"transform 140ms cubic-bezier(.2,.7,.2,1),background-color 200ms cubic-bezier(.2,.7,.2,1),border-color 200ms cubic-bezier(.2,.7,.2,1),color 200ms cubic-bezier(.2,.7,.2,1),opacity 200ms cubic-bezier(.2,.7,.2,1)"}}>What would you build for me?</button>
<button className="home-p52 home-p53 home-p54" type="button" data-bw-chip="How much is a pilot?" style={{background:"none",border:"1px solid rgba(122,118,108,.25)",borderRadius:"0",color:"var(--fg-mute)",padding:"9px 16px",font:"500 12px/1 'JetBrains Mono',monospace",letterSpacing:".04em",cursor:"pointer",textAlign:"left",transition:"transform 140ms cubic-bezier(.2,.7,.2,1),background-color 200ms cubic-bezier(.2,.7,.2,1),border-color 200ms cubic-bezier(.2,.7,.2,1),color 200ms cubic-bezier(.2,.7,.2,1),opacity 200ms cubic-bezier(.2,.7,.2,1)"}}>How much is a pilot?</button>
</div>
<div data-bw-prompt-reply="" style={{display:"none",background:"#FFFFFA",border:"1px solid #080705",borderRadius:"0",color:"#080705",padding:"24px 26px",gap:"16px",alignItems:"flex-start",opacity:"0",transform:"translateY(8px)",transition:"opacity .24s cubic-bezier(.2,.7,.2,1),transform .24s cubic-bezier(.2,.7,.2,1)"}}>
<span style={{width:"26px",height:"26px",background:"#080705",flexShrink:"0",marginTop:"2px",display:"grid",placeItems:"center"}}><span style={{width:"8px",height:"8px",borderRadius:"50%",background:"#E6AF2E",display:"block"}}></span></span>
<span style={{display:"flex",flexDirection:"column",gap:"8px"}}>
<span style={{fontWeight:"700",fontSize:"18px",letterSpacing:"-.02em"}}>Got it — that's a positioning problem before it's a design one.</span>
<span style={{fontFamily:"Inter,Archivo,sans-serif",fontSize:"15px",lineHeight:"1.5",fontWeight:"500",color:"#4A4640"}}>Leave an email and a strategist comes back within one working day with a first read and two ways in. No deck, no discovery call to book a discovery call.</span>
<span style={{display:"flex",gap:"10px",flexWrap:"wrap",paddingTop:"6px"}}>
<a className="home-p55 home-p56 home-p57" href="/contact" style={{background:"#080705",color:"#FFFFFA",padding:"12px 18px",fontSize:"13px",fontWeight:"600",borderRadius:"0",transition:"transform 140ms cubic-bezier(.2,.7,.2,1),background-color 200ms cubic-bezier(.2,.7,.2,1),border-color 200ms cubic-bezier(.2,.7,.2,1),color 200ms cubic-bezier(.2,.7,.2,1),opacity 200ms cubic-bezier(.2,.7,.2,1)"}}>Leave an email</a>
<a className="home-p58 home-p59 home-p60" href="#services" style={{border:"1px solid #080705",color:"#080705",padding:"12px 18px",fontSize:"13px",fontWeight:"600",borderRadius:"0",transition:"transform 140ms cubic-bezier(.2,.7,.2,1),background-color 200ms cubic-bezier(.2,.7,.2,1),border-color 200ms cubic-bezier(.2,.7,.2,1),color 200ms cubic-bezier(.2,.7,.2,1),opacity 200ms cubic-bezier(.2,.7,.2,1)"}}>See how we'd work</a>
</span>
</span>
</div>
</div>
</div>
</section>
<section style={{padding:"120px 0 0"}}>
<div style={{maxWidth:"1440px",margin:"0 auto",padding:"0 40px",display:"flex",flexDirection:"column",gap:"14px"}}>
<div style={{display:"flex",justifyContent:"flex-end"}}>
<div data-bw-visitors="" style={{display:"inline-flex",alignItems:"center",gap:"10px",background:"var(--bw-glass)",border:"1px solid var(--bw-glass-bd)",borderRadius:"999px",padding:"9px 16px",font:"600 11px/1 'JetBrains Mono',monospace",letterSpacing:".1em",textTransform:"uppercase",backdropFilter:"blur(20px) saturate(180%)",WebkitBackdropFilter:"blur(20px) saturate(180%)",boxShadow:"0 10px 24px -16px rgba(8,7,5,.4)"}}>
<span style={{position:"relative",width:"7px",height:"7px",flexShrink:"0",display:"block"}}>
<span style={{position:"absolute",inset:"-4px",borderRadius:"50%",background:"rgba(200,74,31,.4)",animation:"bwCorePulse 1.8s ease-in-out infinite",display:"block"}}></span>
<span style={{position:"absolute",inset:"0",borderRadius:"50%",background:"#C84A1F",display:"block"}}></span>
</span>
<span data-bw-visitors-count="">6</span>&nbsp;watching now
        </div>
</div>
</div>
<div data-bw-reveal="" style={{position:"relative",width:"100%",height:"min(62vh,560px)",overflow:"hidden"}}>
<video preload="none" poster="/assets/studio-reel-poster.webp" src="/assets/studio-reel.mp4" muted={true} loop={true} playsInline={true} style={{position:"absolute",inset:"0",width:"100%",height:"100%",objectFit:"cover",display:"block"}}></video>
</div>
</section>
<section id="work" style={{padding:"130px 0 0"}}>
<div style={{maxWidth:"1440px",margin:"0 auto",padding:"0 40px",position:"relative",zIndex:"1"}}>
<div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-end",gap:"48px",flexWrap:"wrap",paddingBottom:"56px"}}>
<div style={{maxWidth:"820px",display:"flex",flexDirection:"column",gap:"22px"}}>
<div data-bw-reveal="" style={{display:"flex",alignItems:"center",gap:"10px",font:"500 12px/1 'JetBrains Mono',monospace",letterSpacing:".14em",textTransform:"uppercase"}}>
<span style={{width:"7px",height:"7px",background:"#080705",display:"block"}}></span>Selected work</div>
<h2 data-bw-reveal="" style={{fontFamily:"'Barlow Condensed',Archivo,sans-serif",margin:"0",fontWeight:"800",fontSize:"clamp(38px,5.4vw,88px)",lineHeight:".92",letterSpacing:"-.04em"}}>Campaigns, sites, and sales tools that earn their budget.</h2>
</div>
<a data-bw-reveal="" href="#work" style={{font:"500 12px/1 'JetBrains Mono',monospace",letterSpacing:".14em",textTransform:"uppercase",borderBottom:"1px solid #080705",paddingBottom:"6px"}}>All case studies →</a>
</div>
</div>
<div style={{maxWidth:"1440px",margin:"0 auto",padding:"0 40px"}}>
<div data-bw-stack="" style={{display:"flex",flexDirection:"column",gap:"26px"}}>
<article data-bw-card="" data-bw-card-i="0" style={{position:"sticky",top:"104px",background:"linear-gradient(140deg,#FFFFFA 0%,#F7F1E2 60%,#F1E6D1 100%)",border:"1px solid rgba(8,7,5,.12)",borderRadius:"0",color:"#080705",boxShadow:"0 28px 64px -34px rgba(8,7,5,.42)",padding:"26px",display:"grid",gridTemplateColumns:"1.05fr .95fr",gap:"26px",alignItems:"stretch",transformOrigin:"50% 0%"}}>
<div style={{display:"flex",flexDirection:"column",justifyContent:"space-between",gap:"36px",padding:"14px 10px 10px"}}>
<div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:"20px",font:"500 12px/1 'JetBrains Mono',monospace",letterSpacing:".14em",textTransform:"uppercase"}}>
<span style={{color:"#C84A1F"}}>01 — Social &amp; Development</span><span style={{color:"#080705",opacity:".45"}}>2026</span>
</div>
<div style={{display:"flex",flexDirection:"column",gap:"0"}}>
<h3 style={{fontFamily:"'Barlow Condensed',Archivo,sans-serif",margin:"0 0 2.5rem",fontWeight:"800",fontSize:"clamp(30px,3.4vw,54px)",lineHeight:".98",letterSpacing:"-.035em"}}>Interactive experiences that shape donor engagement</h3>
<p style={{margin:"0 0 2rem",fontSize:"15px",lineHeight:"1.65",fontWeight:"500",color:"rgba(8,7,5,.7)",maxWidth:"46ch",textWrap:"pretty"}}>Donor communication in the development sector runs on static reports that get filed, not read. We built <span style={{color:"#C84A1F"}}>an interactive website</span> that turns their work and impact into something a donor moves through, not a PDF they close.</p>
<div style={{display:"flex",gap:"8px",flexWrap:"wrap"}}>
<span style={{border:"1px solid rgba(8,7,5,.20)",borderRadius:"0",padding:"8px 14px",font:"500 11px/1 'JetBrains Mono',monospace",letterSpacing:".1em",textTransform:"uppercase"}}>Website</span>
<span style={{border:"1px solid rgba(8,7,5,.20)",borderRadius:"0",padding:"8px 14px",font:"500 11px/1 'JetBrains Mono',monospace",letterSpacing:".1em",textTransform:"uppercase"}}>Interactive</span>
<span style={{border:"1px solid rgba(8,7,5,.20)",borderRadius:"0",padding:"8px 14px",font:"500 11px/1 'JetBrains Mono',monospace",letterSpacing:".1em",textTransform:"uppercase"}}>Social sector</span>
</div>
</div>
<div style={{marginTop:"3rem",borderTop:"1px solid rgba(8,7,5,.14)",paddingTop:"22px"}}>
<a href="https://khushii-foundation-homepage-redesign-cd-51c189cea4.netlify.app/" target="_blank" rel="noopener" data-bw-live="" style={{font:"500 12px/1 'JetBrains Mono',monospace",letterSpacing:".14em",textTransform:"uppercase",color:"#080705",borderBottom:"1px solid #080705",paddingBottom:"6px"}}>View live site <span style={{color:"#C84A1F"}}>→</span></a>
</div>
</div>
<div data-bw-embed-wrap="" style={{position:"relative",boxSizing:"border-box",minHeight:"448px",padding:"14px"}}><div data-bw-embed-frame="" style={{position:"absolute",inset:"14px",border:"1px solid rgba(8,7,5,.10)",boxShadow:"0 24px 60px -40px rgba(8,7,5,.45)",overflow:"hidden"}}><div data-bw-embed="" style={{position:"absolute",inset:"0",overflow:"hidden",WebkitMaskImage:"linear-gradient(to right,transparent 0,#000 1.2%,#000 98.8%,transparent 100%)",maskImage:"linear-gradient(to right,transparent 0,#000 1.2%,#000 98.8%,transparent 100%)"}}><div data-bw-embed-v="" style={{position:"absolute",inset:"0",overflow:"hidden",WebkitMaskImage:"linear-gradient(to bottom,transparent 0,#000 1%,#000 99%,transparent 100%)",maskImage:"linear-gradient(to bottom,transparent 0,#000 1%,#000 99%,transparent 100%)"}}><iframe src="https://khushii-foundation-homepage-redesign-cd-51c189cea4.netlify.app/" title="Case study live site" loading="lazy" style={{width:"160%",height:"160%",minHeight:"0",border:"0",display:"block",transform:"scale(.625)",transformOrigin:"0 0"}}></iframe></div></div></div><a href="https://khushii-foundation-homepage-redesign-cd-51c189cea4.netlify.app/" target="_blank" rel="noopener" style={{position:"absolute",top:"26px",right:"26px",display:"inline-flex",alignItems:"center",gap:"6px",padding:"6px 12px",background:"#080705",color:"#FFFFFA",font:"500 10px/1 'JetBrains Mono',monospace",letterSpacing:".1em",textTransform:"uppercase",textDecoration:"none"}}>Open ↗</a></div>
</article>
<article data-bw-card="" data-bw-card-i="1" style={{position:"sticky",top:"118px",background:"radial-gradient(110% 85% at 6% 0%,rgba(200,74,31,.14) 0%,rgba(200,74,31,0) 58%),linear-gradient(140deg,#FFFDF6 0%,#F8EFDD 60%,#F2E4CB 100%)",border:"1px solid rgba(8,7,5,.12)",borderRadius:"0",color:"#080705",boxShadow:"0 28px 64px -34px rgba(8,7,5,.42)",padding:"26px",display:"grid",gridTemplateColumns:"1.05fr .95fr",gap:"26px",alignItems:"stretch",transformOrigin:"50% 0%"}}>
<div style={{display:"flex",flexDirection:"column",justifyContent:"space-between",gap:"36px",padding:"14px 10px 10px"}}>
<div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:"20px",font:"500 12px/1 'JetBrains Mono',monospace",letterSpacing:".14em",textTransform:"uppercase"}}>
<span style={{color:"#C84A1F"}}>02 — Audit &amp; Assurance</span><span style={{color:"#080705",opacity:".45"}}>2026</span>
</div>
<div style={{display:"flex",flexDirection:"column",gap:"0"}}>
<h3 style={{fontFamily:"'Barlow Condensed',Archivo,sans-serif",margin:"0 0 2.5rem",fontWeight:"800",fontSize:"clamp(30px,3.4vw,54px)",lineHeight:".98",letterSpacing:"-.035em"}}>A modern brand that builds trust in the audit sector</h3>
<p style={{margin:"0 0 2rem",fontSize:"15px",lineHeight:"1.65",fontWeight:"500",color:"rgba(8,7,5,.7)",maxWidth:"46ch",textWrap:"pretty"}}>Audit firms look interchangeable online, and conservative categories default to dated design that quietly undercuts credibility. We built <span style={{color:"#C84A1F"}}>a website and brand identity</span> that signals a firm which is current, precise, and worth trusting.</p>
<div style={{display:"flex",gap:"8px",flexWrap:"wrap"}}>
<span style={{border:"1px solid rgba(8,7,5,.20)",borderRadius:"0",padding:"8px 14px",font:"500 11px/1 'JetBrains Mono',monospace",letterSpacing:".1em",textTransform:"uppercase"}}>Website</span>
<span style={{border:"1px solid rgba(8,7,5,.20)",borderRadius:"0",padding:"8px 14px",font:"500 11px/1 'JetBrains Mono',monospace",letterSpacing:".1em",textTransform:"uppercase"}}>Branding</span>
<span style={{border:"1px solid rgba(8,7,5,.20)",borderRadius:"0",padding:"8px 14px",font:"500 11px/1 'JetBrains Mono',monospace",letterSpacing:".1em",textTransform:"uppercase"}}>Audit sector</span>
</div>
</div>
<div style={{marginTop:"3rem",borderTop:"1px solid rgba(8,7,5,.14)",paddingTop:"22px"}}>
<a href="https://sattva-co-llp-homepage-cd-88efd1e72c.netlify.app/" target="_blank" rel="noopener" data-bw-live="" style={{font:"500 12px/1 'JetBrains Mono',monospace",letterSpacing:".14em",textTransform:"uppercase",color:"#080705",borderBottom:"1px solid #080705",paddingBottom:"6px"}}>View live site <span style={{color:"#C84A1F"}}>→</span></a>
</div>
</div>
<div data-bw-embed-wrap="" style={{position:"relative",boxSizing:"border-box",minHeight:"448px",padding:"14px"}}><div data-bw-embed-frame="" style={{position:"absolute",inset:"14px",border:"1px solid rgba(8,7,5,.10)",boxShadow:"0 24px 60px -40px rgba(8,7,5,.45)",overflow:"hidden"}}><div data-bw-embed="" style={{position:"absolute",inset:"0",overflow:"hidden",WebkitMaskImage:"linear-gradient(to right,transparent 0,#000 1.2%,#000 98.8%,transparent 100%)",maskImage:"linear-gradient(to right,transparent 0,#000 1.2%,#000 98.8%,transparent 100%)"}}><div data-bw-embed-v="" style={{position:"absolute",inset:"0",overflow:"hidden",WebkitMaskImage:"linear-gradient(to bottom,transparent 0,#000 1%,#000 99%,transparent 100%)",maskImage:"linear-gradient(to bottom,transparent 0,#000 1%,#000 99%,transparent 100%)"}}><iframe src="https://sattva-co-llp-homepage-cd-88efd1e72c.netlify.app/" title="Case study live site" loading="lazy" style={{width:"160%",height:"160%",minHeight:"0",border:"0",display:"block",transform:"scale(.625)",transformOrigin:"0 0"}}></iframe></div></div></div><a href="https://sattva-co-llp-homepage-cd-88efd1e72c.netlify.app/" target="_blank" rel="noopener" style={{position:"absolute",top:"26px",right:"26px",display:"inline-flex",alignItems:"center",gap:"6px",padding:"6px 12px",background:"#080705",color:"#FFFFFA",font:"500 10px/1 'JetBrains Mono',monospace",letterSpacing:".1em",textTransform:"uppercase",textDecoration:"none"}}>Open ↗</a></div>
</article>
<article data-bw-card="" data-bw-card-i="2" style={{position:"sticky",top:"132px",background:"radial-gradient(110% 85% at 94% 0%,rgba(145,47,64,.12) 0%,rgba(145,47,64,0) 58%),linear-gradient(140deg,#FFFFFA 0%,#F7F0E1 60%,#F1E5CE 100%)",border:"1px solid rgba(8,7,5,.12)",borderRadius:"0",color:"#080705",boxShadow:"0 28px 64px -34px rgba(8,7,5,.42)",padding:"26px",display:"grid",gridTemplateColumns:"1.05fr .95fr",gap:"26px",alignItems:"stretch",transformOrigin:"50% 0%"}}>
<div style={{display:"flex",flexDirection:"column",justifyContent:"space-between",gap:"36px",padding:"14px 10px 10px"}}>
<div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:"20px",font:"500 12px/1 'JetBrains Mono',monospace",letterSpacing:".14em",textTransform:"uppercase"}}>
<span style={{color:"#C84A1F"}}>03 — Advergame</span><span style={{color:"#080705",opacity:".45"}}>2026</span>
</div>
<div style={{display:"flex",flexDirection:"column",gap:"0"}}>
<h3 style={{fontFamily:"'Barlow Condensed',Archivo,sans-serif",margin:"0 0 2.5rem",fontWeight:"800",fontSize:"clamp(30px,3.4vw,54px)",lineHeight:".98",letterSpacing:"-.035em"}}>A playable sleep experiment, not a product page</h3>
<p style={{margin:"0 0 2rem",fontSize:"15px",lineHeight:"1.65",fontWeight:"500",color:"rgba(8,7,5,.7)",maxWidth:"46ch",textWrap:"pretty"}}>A recovery brand needed people to feel the difference its product makes, not read about it. We built Sleep Tight — <span style={{color:"#C84A1F"}}>a browser advergame</span> where you play two nights, watch your sleep score move, and understand the product by experiencing it.</p>
<div style={{display:"flex",gap:"8px",flexWrap:"wrap"}}>
<span style={{border:"1px solid rgba(8,7,5,.20)",borderRadius:"0",padding:"8px 14px",font:"500 11px/1 'JetBrains Mono',monospace",letterSpacing:".1em",textTransform:"uppercase"}}>Advergame</span>
<span style={{border:"1px solid rgba(8,7,5,.20)",borderRadius:"0",padding:"8px 14px",font:"500 11px/1 'JetBrains Mono',monospace",letterSpacing:".1em",textTransform:"uppercase"}}>Interactive</span>
<span style={{border:"1px solid rgba(8,7,5,.20)",borderRadius:"0",padding:"8px 14px",font:"500 11px/1 'JetBrains Mono',monospace",letterSpacing:".1em",textTransform:"uppercase"}}>Playable</span>
</div>
</div>
<div style={{marginTop:"3rem",borderTop:"1px solid rgba(8,7,5,.14)",paddingTop:"22px"}}>
<a href="https://sleep-experiment-advergame-cd-4a03065675.netlify.app/" target="_blank" rel="noopener" data-bw-live="" style={{font:"500 12px/1 'JetBrains Mono',monospace",letterSpacing:".14em",textTransform:"uppercase",color:"#080705",borderBottom:"1px solid #080705",paddingBottom:"6px"}}>Play it live <span style={{color:"#C84A1F"}}>→</span></a>
</div>
</div>
<div data-bw-embed-wrap="" style={{position:"relative",boxSizing:"border-box",minHeight:"448px",padding:"14px"}}><div data-bw-embed-frame="" style={{position:"absolute",inset:"14px",border:"1px solid rgba(8,7,5,.10)",boxShadow:"0 24px 60px -40px rgba(8,7,5,.45)",overflow:"hidden"}}><div data-bw-embed="" style={{position:"absolute",inset:"0",overflow:"hidden",WebkitMaskImage:"linear-gradient(to right,transparent 0,#000 1.2%,#000 98.8%,transparent 100%)",maskImage:"linear-gradient(to right,transparent 0,#000 1.2%,#000 98.8%,transparent 100%)"}}><div data-bw-embed-v="" style={{position:"absolute",inset:"0",overflow:"hidden",WebkitMaskImage:"linear-gradient(to bottom,transparent 0,#000 1%,#000 99%,transparent 100%)",maskImage:"linear-gradient(to bottom,transparent 0,#000 1%,#000 99%,transparent 100%)"}}><iframe src="https://sleep-experiment-advergame-cd-4a03065675.netlify.app/" title="Case study live game" loading="lazy" style={{width:"160%",height:"160%",minHeight:"0",border:"0",display:"block",transform:"scale(.625)",transformOrigin:"0 0"}}></iframe></div></div></div><a href="https://sleep-experiment-advergame-cd-4a03065675.netlify.app/" target="_blank" rel="noopener" style={{position:"absolute",top:"26px",right:"26px",display:"inline-flex",alignItems:"center",gap:"6px",padding:"6px 12px",background:"#080705",color:"#FFFFFA",font:"500 10px/1 'JetBrains Mono',monospace",letterSpacing:".1em",textTransform:"uppercase",textDecoration:"none"}}>Open ↗</a></div>
</article>
<article data-bw-card="" data-bw-card-i="3" style={{position:"sticky",top:"146px",background:"radial-gradient(110% 85% at 94% 100%,rgba(230,175,46,.16) 0%,rgba(230,175,46,0) 58%),linear-gradient(140deg,#FFFFFA 0%,#F8F1E4 60%,#F2E7D3 100%)",border:"1px solid rgba(8,7,5,.12)",borderRadius:"0",color:"#080705",boxShadow:"0 28px 64px -34px rgba(8,7,5,.42)",padding:"26px",display:"grid",gridTemplateColumns:"1.05fr .95fr",gap:"26px",alignItems:"stretch",transformOrigin:"50% 0%"}}>
<div style={{display:"flex",flexDirection:"column",justifyContent:"space-between",gap:"36px",padding:"14px 10px 10px"}}>
<div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:"20px",font:"500 12px/1 'JetBrains Mono',monospace",letterSpacing:".14em",textTransform:"uppercase"}}>
<span style={{color:"#C84A1F"}}>04 — Career Counselling</span><span style={{color:"#080705",opacity:".45"}}>2026</span>
</div>
<div style={{display:"flex",flexDirection:"column",gap:"0"}}>
<h3 style={{fontFamily:"'Barlow Condensed',Archivo,sans-serif",margin:"0 0 2.5rem",fontWeight:"800",fontSize:"clamp(30px,3.4vw,54px)",lineHeight:".98",letterSpacing:"-.035em"}}>A personal portfolio that proves a track record before the first call</h3>
<p style={{margin:"0 0 2rem",fontSize:"15px",lineHeight:"1.65",fontWeight:"500",color:"rgba(8,7,5,.7)",maxWidth:"46ch",textWrap:"pretty"}}>Career counsellors are judged on credibility and results, but most rely on a résumé or a LinkedIn page that can't show the depth of their work. We built Madiha Nasim <span style={{color:"#C84A1F"}}>a digital portfolio</span> that puts her background, approach, and mentorship in one place clients can explore before reaching out.</p>
<div style={{display:"flex",gap:"8px",flexWrap:"wrap"}}>
<span style={{border:"1px solid rgba(8,7,5,.20)",borderRadius:"0",padding:"8px 14px",font:"500 11px/1 'JetBrains Mono',monospace",letterSpacing:".1em",textTransform:"uppercase"}}>Portfolio</span>
<span style={{border:"1px solid rgba(8,7,5,.20)",borderRadius:"0",padding:"8px 14px",font:"500 11px/1 'JetBrains Mono',monospace",letterSpacing:".1em",textTransform:"uppercase"}}>Personal brand</span>
<span style={{border:"1px solid rgba(8,7,5,.20)",borderRadius:"0",padding:"8px 14px",font:"500 11px/1 'JetBrains Mono',monospace",letterSpacing:".1em",textTransform:"uppercase"}}>Website</span>
</div>
</div>
<div style={{marginTop:"3rem",borderTop:"1px solid rgba(8,7,5,.14)",paddingTop:"22px"}}>
<a href="https://catalyst-mentorship-cd-0b93e62e62.netlify.app/" target="_blank" rel="noopener" data-bw-live="" style={{font:"500 12px/1 'JetBrains Mono',monospace",letterSpacing:".14em",textTransform:"uppercase",color:"#080705",borderBottom:"1px solid #080705",paddingBottom:"6px"}}>View live site <span style={{color:"#C84A1F"}}>→</span></a>
</div>
</div>
<div data-bw-embed-wrap="" style={{position:"relative",boxSizing:"border-box",minHeight:"448px",padding:"14px"}}><div data-bw-embed-frame="" style={{position:"absolute",inset:"14px",border:"1px solid rgba(8,7,5,.10)",boxShadow:"0 24px 60px -40px rgba(8,7,5,.45)",overflow:"hidden"}}><div data-bw-embed="" style={{position:"absolute",inset:"0",overflow:"hidden",WebkitMaskImage:"linear-gradient(to right,transparent 0,#000 1.2%,#000 98.8%,transparent 100%)",maskImage:"linear-gradient(to right,transparent 0,#000 1.2%,#000 98.8%,transparent 100%)"}}><div data-bw-embed-v="" style={{position:"absolute",inset:"0",overflow:"hidden",WebkitMaskImage:"linear-gradient(to bottom,transparent 0,#000 1%,#000 99%,transparent 100%)",maskImage:"linear-gradient(to bottom,transparent 0,#000 1%,#000 99%,transparent 100%)"}}><iframe src="https://catalyst-mentorship-cd-0b93e62e62.netlify.app/" title="Case study live site" loading="lazy" style={{width:"160%",height:"160%",minHeight:"0",border:"0",display:"block",transform:"scale(.625)",transformOrigin:"0 0"}}></iframe></div></div></div><a href="https://catalyst-mentorship-cd-0b93e62e62.netlify.app/" target="_blank" rel="noopener" style={{position:"absolute",top:"26px",right:"26px",display:"inline-flex",alignItems:"center",gap:"6px",padding:"6px 12px",background:"#080705",color:"#FFFFFA",font:"500 10px/1 'JetBrains Mono',monospace",letterSpacing:".1em",textTransform:"uppercase",textDecoration:"none"}}>Open ↗</a></div>
</article>
</div>
</div>
</section>
<section id="services" data-bw-wheel-section="" style={{position:"relative",marginTop:"140px",height:"840vh",borderTop:"1px solid var(--bw-rule)"}}>
<div style={{position:"sticky",top:"0",height:"100vh",overflow:"hidden",display:"flex",flexDirection:"column"}}>
<div style={{maxWidth:"1440px",margin:"0 auto",padding:"clamp(72px,10vh,104px) 40px 0",width:"100%",display:"flex",justifyContent:"space-between",alignItems:"center",gap:"24px"}}>
<div style={{display:"flex",alignItems:"center",gap:"10px",font:"500 12px/1 'JetBrains Mono',monospace",letterSpacing:".14em",textTransform:"uppercase"}}>
<span style={{width:"7px",height:"7px",background:"#080705",display:"block"}}></span>What we do</div>
<div style={{display:"flex",alignItems:"center",gap:"14px",font:"500 12px/1 'JetBrains Mono',monospace",letterSpacing:".14em",textTransform:"uppercase",opacity:".5"}}>
<span data-bw-wheel-index="">01</span><span style={{width:"60px",height:"1px",background:"var(--hair)",display:"block",position:"relative",overflow:"hidden"}}><span data-bw-wheel-bar="" style={{position:"absolute",inset:"0",background:"var(--fg)",transformOrigin:"0 50%",scale:".25 1",transition:"scale .5s cubic-bezier(.22,1,.36,1)"}}></span></span><span>08</span>
</div>
</div>
<div style={{flex:"1",maxWidth:"1440px",margin:"0 auto",padding:"0 40px",width:"100%",display:"grid",gridTemplateColumns:"clamp(178px,17vw,224px) minmax(0,.96fr) minmax(0,1.04fr)",alignItems:"center",gap:"clamp(24px,3vw,56px)"}}>
<div style={{position:"relative",height:"min(52vh,400px)"}}>
<span style={{position:"absolute",left:"-10px",top:"50%",width:"min(19vh,158px)",height:"calc(min(19vh,158px) * 2)",translate:"0 -50%",border:"1px solid rgba(8,7,5,.16)",borderLeft:"0",borderRadius:"0 999px 999px 0",display:"block"}}></span>
<span data-bw-needle="" style={{position:"absolute",left:"-10px",top:"50%",width:"0",height:"0",transform:"rotate(-42deg)",transition:"transform 1.1s cubic-bezier(.16,1,.3,1)",display:"block"}}>
<span style={{position:"absolute",left:"0",top:"0",width:"min(19vh,158px)",height:"1px",translate:"0 -50%",background:"linear-gradient(90deg,var(--hair-hi),var(--hair))",display:"block"}}></span>
</span>
<span style={{position:"absolute",left:"-10px",top:"50%",width:"7px",height:"7px",borderRadius:"50%",background:"var(--fg)",translate:"-50% -50%",display:"block"}}></span>
<button data-bw-node="0" aria-label="Service 01" style={{position:"absolute",left:"-10px",top:"50%",width:"0",height:"0",transform:"rotate(-70deg) translateX(min(19vh,158px))",background:"none",border:"0",padding:"0",cursor:"pointer",color:"var(--fg-mute)",fontFamily:"'JetBrains Mono',monospace"}}>
<span style={{position:"absolute",left:"0",top:"0",translate:"-50% -50%",transform:"rotate(70deg)",display:"block",width:"0",height:"0"}}><span aria-hidden="true" style={{position:"absolute",left:"-16px",top:"-15px",width:"78px",height:"30px",display:"block"}}></span><span data-bw-dot="" style={{position:"absolute",left:"0",top:"0",translate:"-50% -50%",width:"9px",height:"9px",borderRadius:"50%",border:"1px solid var(--hair-hi)",background:"var(--bg)",display:"block",flexShrink:"0",transition:"background .5s ease,transform .5s cubic-bezier(.16,1,.3,1),border-color .5s ease"}}></span><span data-bw-nodenum="" style={{position:"absolute",left:"15px",top:"0",translate:"0 -50%",whiteSpace:"nowrap",font:"500 10px/1 'JetBrains Mono',monospace",letterSpacing:".16em",opacity:".45",transition:"opacity .5s ease,color .5s ease"}}>01</span></span>
</button>
<button data-bw-node="1" aria-label="Service 02" style={{position:"absolute",left:"-10px",top:"50%",width:"0",height:"0",transform:"rotate(-50deg) translateX(min(19vh,158px))",background:"none",border:"0",padding:"0",cursor:"pointer",color:"var(--fg-mute)",fontFamily:"'JetBrains Mono',monospace"}}>
<span style={{position:"absolute",left:"0",top:"0",translate:"-50% -50%",transform:"rotate(50deg)",display:"block",width:"0",height:"0"}}><span aria-hidden="true" style={{position:"absolute",left:"-16px",top:"-15px",width:"78px",height:"30px",display:"block"}}></span><span data-bw-dot="" style={{position:"absolute",left:"0",top:"0",translate:"-50% -50%",width:"9px",height:"9px",borderRadius:"50%",border:"1px solid var(--hair-hi)",background:"var(--bg)",display:"block",flexShrink:"0",transition:"background .5s ease,transform .5s cubic-bezier(.16,1,.3,1),border-color .5s ease"}}></span><span data-bw-nodenum="" style={{position:"absolute",left:"15px",top:"0",translate:"0 -50%",whiteSpace:"nowrap",font:"500 10px/1 'JetBrains Mono',monospace",letterSpacing:".16em",opacity:".45",transition:"opacity .5s ease,color .5s ease"}}>02</span></span>
</button>
<button data-bw-node="2" aria-label="Service 03" style={{position:"absolute",left:"-10px",top:"50%",width:"0",height:"0",transform:"rotate(-30deg) translateX(min(19vh,158px))",background:"none",border:"0",padding:"0",cursor:"pointer",color:"var(--fg-mute)",fontFamily:"'JetBrains Mono',monospace"}}>
<span style={{position:"absolute",left:"0",top:"0",translate:"-50% -50%",transform:"rotate(30deg)",display:"block",width:"0",height:"0"}}><span aria-hidden="true" style={{position:"absolute",left:"-16px",top:"-15px",width:"78px",height:"30px",display:"block"}}></span><span data-bw-dot="" style={{position:"absolute",left:"0",top:"0",translate:"-50% -50%",width:"9px",height:"9px",borderRadius:"50%",border:"1px solid var(--hair-hi)",background:"var(--bg)",display:"block",flexShrink:"0",transition:"background .5s ease,transform .5s cubic-bezier(.16,1,.3,1),border-color .5s ease"}}></span><span data-bw-nodenum="" style={{position:"absolute",left:"15px",top:"0",translate:"0 -50%",whiteSpace:"nowrap",font:"500 10px/1 'JetBrains Mono',monospace",letterSpacing:".16em",opacity:".45",transition:"opacity .5s ease,color .5s ease"}}>03</span></span>
</button>
<button data-bw-node="3" aria-label="Service 04" style={{position:"absolute",left:"-10px",top:"50%",width:"0",height:"0",transform:"rotate(-10deg) translateX(min(19vh,158px))",background:"none",border:"0",padding:"0",cursor:"pointer",color:"var(--fg-mute)",fontFamily:"'JetBrains Mono',monospace"}}>
<span style={{position:"absolute",left:"0",top:"0",translate:"-50% -50%",transform:"rotate(10deg)",display:"block",width:"0",height:"0"}}><span aria-hidden="true" style={{position:"absolute",left:"-16px",top:"-15px",width:"78px",height:"30px",display:"block"}}></span><span data-bw-dot="" style={{position:"absolute",left:"0",top:"0",translate:"-50% -50%",width:"9px",height:"9px",borderRadius:"50%",border:"1px solid var(--hair-hi)",background:"var(--bg)",display:"block",flexShrink:"0",transition:"background .5s ease,transform .5s cubic-bezier(.16,1,.3,1),border-color .5s ease"}}></span><span data-bw-nodenum="" style={{position:"absolute",left:"15px",top:"0",translate:"0 -50%",whiteSpace:"nowrap",font:"500 10px/1 'JetBrains Mono',monospace",letterSpacing:".16em",opacity:".45",transition:"opacity .5s ease,color .5s ease"}}>04</span></span>
</button>
<button data-bw-node="4" aria-label="Service 05" style={{position:"absolute",left:"-10px",top:"50%",width:"0",height:"0",transform:"rotate(10deg) translateX(min(19vh,158px))",background:"none",border:"0",padding:"0",cursor:"pointer",color:"var(--fg-mute)",fontFamily:"'JetBrains Mono',monospace"}}>
<span style={{position:"absolute",left:"0",top:"0",translate:"-50% -50%",transform:"rotate(-10deg)",display:"block",width:"0",height:"0"}}><span aria-hidden="true" style={{position:"absolute",left:"-16px",top:"-15px",width:"78px",height:"30px",display:"block"}}></span><span data-bw-dot="" style={{position:"absolute",left:"0",top:"0",translate:"-50% -50%",width:"9px",height:"9px",borderRadius:"50%",border:"1px solid var(--hair-hi)",background:"var(--bg)",display:"block",flexShrink:"0",transition:"background .5s ease,transform .5s cubic-bezier(.16,1,.3,1),border-color .5s ease"}}></span><span data-bw-nodenum="" style={{position:"absolute",left:"15px",top:"0",translate:"0 -50%",whiteSpace:"nowrap",font:"500 10px/1 'JetBrains Mono',monospace",letterSpacing:".16em",opacity:".45",transition:"opacity .5s ease,color .5s ease"}}>05</span></span>
</button>
<button data-bw-node="5" aria-label="Service 06" style={{position:"absolute",left:"-10px",top:"50%",width:"0",height:"0",transform:"rotate(30deg) translateX(min(19vh,158px))",background:"none",border:"0",padding:"0",cursor:"pointer",color:"var(--fg-mute)",fontFamily:"'JetBrains Mono',monospace"}}>
<span style={{position:"absolute",left:"0",top:"0",translate:"-50% -50%",transform:"rotate(-30deg)",display:"block",width:"0",height:"0"}}><span aria-hidden="true" style={{position:"absolute",left:"-16px",top:"-15px",width:"78px",height:"30px",display:"block"}}></span><span data-bw-dot="" style={{position:"absolute",left:"0",top:"0",translate:"-50% -50%",width:"9px",height:"9px",borderRadius:"50%",border:"1px solid var(--hair-hi)",background:"var(--bg)",display:"block",flexShrink:"0",transition:"background .5s ease,transform .5s cubic-bezier(.16,1,.3,1),border-color .5s ease"}}></span><span data-bw-nodenum="" style={{position:"absolute",left:"15px",top:"0",translate:"0 -50%",whiteSpace:"nowrap",font:"500 10px/1 'JetBrains Mono',monospace",letterSpacing:".16em",opacity:".45",transition:"opacity .5s ease,color .5s ease"}}>06</span></span>
</button>
<button data-bw-node="6" aria-label="Service 07" style={{position:"absolute",left:"-10px",top:"50%",width:"0",height:"0",transform:"rotate(50deg) translateX(min(19vh,158px))",background:"none",border:"0",padding:"0",cursor:"pointer",color:"var(--fg-mute)",fontFamily:"'JetBrains Mono',monospace"}}>
<span style={{position:"absolute",left:"0",top:"0",translate:"-50% -50%",transform:"rotate(-50deg)",display:"block",width:"0",height:"0"}}><span aria-hidden="true" style={{position:"absolute",left:"-16px",top:"-15px",width:"78px",height:"30px",display:"block"}}></span><span data-bw-dot="" style={{position:"absolute",left:"0",top:"0",translate:"-50% -50%",width:"9px",height:"9px",borderRadius:"50%",border:"1px solid var(--hair-hi)",background:"var(--bg)",display:"block",flexShrink:"0",transition:"background .5s ease,transform .5s cubic-bezier(.16,1,.3,1),border-color .5s ease"}}></span><span data-bw-nodenum="" style={{position:"absolute",left:"15px",top:"0",translate:"0 -50%",whiteSpace:"nowrap",font:"500 10px/1 'JetBrains Mono',monospace",letterSpacing:".16em",opacity:".45",transition:"opacity .5s ease,color .5s ease"}}>07</span></span>
</button>
<button data-bw-node="7" aria-label="Service 08" style={{position:"absolute",left:"-10px",top:"50%",width:"0",height:"0",transform:"rotate(70deg) translateX(min(19vh,158px))",background:"none",border:"0",padding:"0",cursor:"pointer",color:"var(--fg-mute)",fontFamily:"'JetBrains Mono',monospace"}}>
<span style={{position:"absolute",left:"0",top:"0",translate:"-50% -50%",transform:"rotate(-70deg)",display:"block",width:"0",height:"0"}}><span aria-hidden="true" style={{position:"absolute",left:"-16px",top:"-15px",width:"78px",height:"30px",display:"block"}}></span><span data-bw-dot="" style={{position:"absolute",left:"0",top:"0",translate:"-50% -50%",width:"9px",height:"9px",borderRadius:"50%",border:"1px solid var(--hair-hi)",background:"var(--bg)",display:"block",flexShrink:"0",transition:"background .5s ease,transform .5s cubic-bezier(.16,1,.3,1),border-color .5s ease"}}></span><span data-bw-nodenum="" style={{position:"absolute",left:"15px",top:"0",translate:"0 -50%",whiteSpace:"nowrap",font:"500 10px/1 'JetBrains Mono',monospace",letterSpacing:".16em",opacity:".45",transition:"opacity .5s ease,color .5s ease"}}>08</span></span>
</button>
</div>
<div style={{position:"relative",minHeight:"min(300px,42vh)"}}>
<div data-bw-panel="0" style={{display:"flex",flexDirection:"column",gap:"22px"}}>
<h3 style={{fontFamily:"'Barlow Condensed',Archivo,sans-serif",margin:"0",fontWeight:"800",fontSize:"clamp(30px,3vw,48px)",lineHeight:".98",letterSpacing:"-.038em",maxWidth:"14ch"}}>Brand design</h3>
<p style={{margin:"0",fontSize:"16px",lineHeight:"1.5",fontWeight:"500",opacity:".7",maxWidth:"38ch",textWrap:"pretty"}}>Positioning, naming, identity systems, and the messaging spine everything else hangs from. Built to hold up in a boardroom and on a banner ad.</p>
<span style={{font:"500 10px/1.7 'JetBrains Mono',monospace",letterSpacing:".14em",textTransform:"uppercase",opacity:".42",maxWidth:"34ch"}}>Positioning · Identity system · Messaging</span>
<a className="home-p61 home-p62 home-p63" href="/brand-design" style={{alignSelf:"flex-start",display:"inline-flex",alignItems:"center",gap:"12px",padding:"14px 22px",borderRadius:"0",color:"#FFFFFA",fontSize:"14px",fontWeight:"600",letterSpacing:"-.01em",background:"#080705",border:"1px solid #E6AF2E",transition:"transform 140ms cubic-bezier(.2,.7,.2,1),background-color 200ms cubic-bezier(.2,.7,.2,1),border-color 200ms cubic-bezier(.2,.7,.2,1),color 200ms cubic-bezier(.2,.7,.2,1),opacity 200ms cubic-bezier(.2,.7,.2,1)"}}>See brand design<span style={{fontFamily:"'JetBrains Mono',monospace",color:"#E6AF2E"}}>→</span></a>
</div>
<div data-bw-panel="1" style={{display:"flex",flexDirection:"column",gap:"22px",position:"absolute",inset:"0"}}>
<h3 style={{fontFamily:"'Barlow Condensed',Archivo,sans-serif",margin:"0",fontWeight:"800",fontSize:"clamp(30px,3vw,48px)",lineHeight:".98",letterSpacing:"-.038em",maxWidth:"14ch"}}>Website &amp; portfolio</h3>
<p style={{margin:"0",fontSize:"16px",lineHeight:"1.5",fontWeight:"500",opacity:".7",maxWidth:"38ch",textWrap:"pretty"}}>Sites and work portfolios that make the case for you. Fast, structured around the sale, and easy for your team to keep alive after launch.</p>
<span style={{font:"500 10px/1.7 'JetBrains Mono',monospace",letterSpacing:".14em",textTransform:"uppercase",opacity:".42",maxWidth:"34ch"}}>Design &amp; build · Case studies · CMS handover</span>
<a className="home-p64 home-p65 home-p66" href="/website-and-portfolio" style={{alignSelf:"flex-start",display:"inline-flex",alignItems:"center",gap:"12px",padding:"14px 22px",borderRadius:"0",color:"#FFFFFA",fontSize:"14px",fontWeight:"600",letterSpacing:"-.01em",background:"#080705",border:"1px solid #E6AF2E",transition:"transform 140ms cubic-bezier(.2,.7,.2,1),background-color 200ms cubic-bezier(.2,.7,.2,1),border-color 200ms cubic-bezier(.2,.7,.2,1),color 200ms cubic-bezier(.2,.7,.2,1),opacity 200ms cubic-bezier(.2,.7,.2,1)"}}>See website &amp; portfolio<span style={{fontFamily:"'JetBrains Mono',monospace",color:"#E6AF2E"}}>→</span></a>
</div>
<div data-bw-panel="2" style={{display:"flex",flexDirection:"column",gap:"22px",position:"absolute",inset:"0"}}>
<h3 style={{fontFamily:"'Barlow Condensed',Archivo,sans-serif",margin:"0",fontWeight:"800",fontSize:"clamp(30px,3vw,48px)",lineHeight:".98",letterSpacing:"-.038em",maxWidth:"14ch"}}>Interactive assets</h3>
<p style={{margin:"0",fontSize:"16px",lineHeight:"1.5",fontWeight:"500",opacity:".7",maxWidth:"38ch",textWrap:"pretty"}}>Calculators, configurators, benchmarks, and product tours. Marketing people can actually use — and that hand you a qualified lead at the end.</p>
<span style={{font:"500 10px/1.7 'JetBrains Mono',monospace",letterSpacing:".14em",textTransform:"uppercase",opacity:".42",maxWidth:"34ch"}}>ROI tools · Product tours · Microsites</span>
<a className="home-p67 home-p68 home-p69" href="/interactive-assets" style={{alignSelf:"flex-start",display:"inline-flex",alignItems:"center",gap:"12px",padding:"14px 22px",borderRadius:"0",color:"#FFFFFA",fontSize:"14px",fontWeight:"600",letterSpacing:"-.01em",background:"#080705",border:"1px solid #E6AF2E",transition:"transform 140ms cubic-bezier(.2,.7,.2,1),background-color 200ms cubic-bezier(.2,.7,.2,1),border-color 200ms cubic-bezier(.2,.7,.2,1),color 200ms cubic-bezier(.2,.7,.2,1),opacity 200ms cubic-bezier(.2,.7,.2,1)"}}>See interactive assets<span style={{fontFamily:"'JetBrains Mono',monospace",color:"#E6AF2E"}}>→</span></a>
</div>
<div data-bw-panel="3" style={{display:"flex",flexDirection:"column",gap:"22px",position:"absolute",inset:"0"}}>
<h3 style={{fontFamily:"'Barlow Condensed',Archivo,sans-serif",margin:"0",fontWeight:"800",fontSize:"clamp(30px,3vw,48px)",lineHeight:".98",letterSpacing:"-.038em",maxWidth:"14ch"}}>B2B answer engine placement</h3>
<p style={{margin:"0",fontSize:"16px",lineHeight:"1.5",fontWeight:"500",opacity:".7",maxWidth:"38ch",textWrap:"pretty"}}>Getting cited by AI answer engines: audits, on-site fixes, and third-party presence that get you named when buyers ask ChatGPT, Perplexity, Gemini or Claude.</p>
<span style={{font:"500 10px/1.7 'JetBrains Mono',monospace",letterSpacing:".14em",textTransform:"uppercase",opacity:".42",maxWidth:"34ch"}}>GEO · AEO · Answer engine citations</span>
<a className="home-p70 home-p71 home-p72" href="/b2b-answer-engine" style={{alignSelf:"flex-start",display:"inline-flex",alignItems:"center",gap:"12px",padding:"14px 22px",borderRadius:"0",color:"#FFFFFA",fontSize:"14px",fontWeight:"600",letterSpacing:"-.01em",background:"#080705",border:"1px solid #E6AF2E",transition:"transform 140ms cubic-bezier(.2,.7,.2,1),background-color 200ms cubic-bezier(.2,.7,.2,1),border-color 200ms cubic-bezier(.2,.7,.2,1),color 200ms cubic-bezier(.2,.7,.2,1),opacity 200ms cubic-bezier(.2,.7,.2,1)"}}>See answer engine placement<span style={{fontFamily:"'JetBrains Mono',monospace",color:"#E6AF2E"}}>→</span></a>
</div>
<div data-bw-panel="4" style={{display:"flex",flexDirection:"column",gap:"22px",position:"absolute",inset:"0"}}>
<h3 style={{fontFamily:"'Barlow Condensed',Archivo,sans-serif",margin:"0",fontWeight:"800",fontSize:"clamp(30px,3vw,48px)",lineHeight:".98",letterSpacing:"-.038em",maxWidth:"14ch"}}>Lead routing</h3>
<p style={{margin:"0",fontSize:"16px",lineHeight:"1.5",fontWeight:"500",opacity:".7",maxWidth:"38ch",textWrap:"pretty"}}>Inbound leads are captured the moment they arrive, enriched with firmographic data, and scored against your ideal customer profile. Lead Detective assigns each one to the right rep automatically.</p>
<span style={{font:"500 10px/1.7 'JetBrains Mono',monospace",letterSpacing:".14em",textTransform:"uppercase",opacity:".42",maxWidth:"34ch"}}>Real-time scoring · Automatic assignment · CRM sync</span>
<a className="home-p73 home-p74 home-p75" href="/lead-detective" style={{alignSelf:"flex-start",display:"inline-flex",alignItems:"center",gap:"12px",padding:"14px 22px",borderRadius:"0",color:"#FFFFFA",fontSize:"14px",fontWeight:"600",letterSpacing:"-.01em",background:"#080705",border:"1px solid #E6AF2E",transition:"transform 140ms cubic-bezier(.2,.7,.2,1),background-color 200ms cubic-bezier(.2,.7,.2,1),border-color 200ms cubic-bezier(.2,.7,.2,1),color 200ms cubic-bezier(.2,.7,.2,1),opacity 200ms cubic-bezier(.2,.7,.2,1)"}}>See lead detective<span style={{fontFamily:"'JetBrains Mono',monospace",color:"#E6AF2E"}}>→</span></a>
</div>
<div data-bw-panel="5" style={{display:"flex",flexDirection:"column",gap:"22px",position:"absolute",inset:"0"}}>
<h3 style={{fontFamily:"'Barlow Condensed',Archivo,sans-serif",margin:"0",fontWeight:"800",fontSize:"clamp(30px,3vw,48px)",lineHeight:".98",letterSpacing:"-.038em",maxWidth:"14ch"}}>Personalized outbound</h3>
<p style={{margin:"0",fontSize:"16px",lineHeight:"1.5",fontWeight:"500",opacity:".7",maxWidth:"38ch",textWrap:"pretty"}}>Every message is drafted for one recipient at a time — their role, their company, what's happening with their team right now. Not a template with a name swapped in. Mypen writes each one from scratch and sends it the moment it's ready.</p>
<span style={{font:"500 10px/1.7 'JetBrains Mono',monospace",letterSpacing:".14em",textTransform:"uppercase",opacity:".42",maxWidth:"34ch"}}>Per-recipient drafting · Zero templates · Automatic sending</span>
<a className="home-p76 home-p77 home-p78" href="/mypen" style={{alignSelf:"flex-start",display:"inline-flex",alignItems:"center",gap:"12px",padding:"14px 22px",borderRadius:"0",color:"#FFFFFA",fontSize:"14px",fontWeight:"600",letterSpacing:"-.01em",background:"#080705",border:"1px solid #E6AF2E",transition:"transform 140ms cubic-bezier(.2,.7,.2,1),background-color 200ms cubic-bezier(.2,.7,.2,1),border-color 200ms cubic-bezier(.2,.7,.2,1),color 200ms cubic-bezier(.2,.7,.2,1),opacity 200ms cubic-bezier(.2,.7,.2,1)"}}>See mypen<span style={{fontFamily:"'JetBrains Mono',monospace",color:"#E6AF2E"}}>→</span></a>
</div>
<div data-bw-panel="6" style={{display:"flex",flexDirection:"column",gap:"22px",position:"absolute",inset:"0"}}>
<h3 style={{fontFamily:"'Barlow Condensed',Archivo,sans-serif",margin:"0",fontWeight:"800",fontSize:"clamp(30px,3vw,48px)",lineHeight:".98",letterSpacing:"-.038em",maxWidth:"14ch"}}>Account research</h3>
<p style={{margin:"0",fontSize:"16px",lineHeight:"1.5",fontWeight:"500",opacity:".7",maxWidth:"38ch",textWrap:"pretty"}}>Point it at a company. Get firmographics, live buying signals, and the people who matter — compiled before your first call.</p>
<span style={{font:"500 10px/1.7 'JetBrains Mono',monospace",letterSpacing:".14em",textTransform:"uppercase",opacity:".42",maxWidth:"34ch"}}>Firmographics · Signals · Key people</span>
<a className="home-p79 home-p80 home-p81" href="/researchify" style={{alignSelf:"flex-start",display:"inline-flex",alignItems:"center",gap:"12px",padding:"14px 22px",borderRadius:"0",color:"#FFFFFA",fontSize:"14px",fontWeight:"600",letterSpacing:"-.01em",background:"#080705",border:"1px solid #E6AF2E",transition:"transform 140ms cubic-bezier(.2,.7,.2,1),background-color 200ms cubic-bezier(.2,.7,.2,1),border-color 200ms cubic-bezier(.2,.7,.2,1),color 200ms cubic-bezier(.2,.7,.2,1),opacity 200ms cubic-bezier(.2,.7,.2,1)"}}>See account research<span style={{fontFamily:"'JetBrains Mono',monospace",color:"#E6AF2E"}}>→</span></a>
</div>
<div data-bw-panel="7" style={{display:"flex",flexDirection:"column",gap:"22px",position:"absolute",inset:"0"}}>
<h3 style={{fontFamily:"'Barlow Condensed',Archivo,sans-serif",margin:"0",fontWeight:"800",fontSize:"clamp(30px,3vw,48px)",lineHeight:".98",letterSpacing:"-.038em",maxWidth:"16ch"}}>Self-serve buying</h3>
<p style={{margin:"0",fontSize:"16px",lineHeight:"1.5",fontWeight:"500",opacity:".7",maxWidth:"38ch",textWrap:"pretty"}}>Customers pick a plan, switch on the options they need, and pay. No calls. No quotes. No waiting on a rep.</p>
<span style={{font:"500 10px/1.7 'JetBrains Mono',monospace",letterSpacing:".14em",textTransform:"uppercase",opacity:".42",maxWidth:"34ch"}}>Choose a plan · Configure · Checkout</span>
<a className="home-p82 home-p83 home-p84" href="/self-serve-buying" style={{alignSelf:"flex-start",display:"inline-flex",alignItems:"center",gap:"12px",padding:"14px 22px",borderRadius:"0",color:"#FFFFFA",fontSize:"14px",fontWeight:"600",letterSpacing:"-.01em",background:"#080705",border:"1px solid #E6AF2E",transition:"transform 140ms cubic-bezier(.2,.7,.2,1),background-color 200ms cubic-bezier(.2,.7,.2,1),border-color 200ms cubic-bezier(.2,.7,.2,1),color 200ms cubic-bezier(.2,.7,.2,1),opacity 200ms cubic-bezier(.2,.7,.2,1)"}}>See self-serve buying<span style={{fontFamily:"'JetBrains Mono',monospace",color:"#E6AF2E"}}>→</span></a>
</div>
</div>
<div style={{position:"relative",display:"flex",alignItems:"center"}}>
<div data-bw-window="" style={{width:"100%",height:"min(58vh,440px)",display:"flex",flexDirection:"column",border:"1px solid var(--bw-glass-bd)",borderRadius:"0",overflow:"hidden",background:"linear-gradient(140deg,rgba(255,255,250,.78),rgba(255,255,250,.4))",backdropFilter:"blur(26px) saturate(180%)",WebkitBackdropFilter:"blur(26px) saturate(180%)",boxShadow:"0 40px 90px -40px rgba(8,7,5,.5),0 1px 0 rgba(255,255,250,.95) inset"}}>
<div style={{height:"38px",display:"flex",alignItems:"center",gap:"9px",padding:"0 14px",flexShrink:"0"}}>
<span style={{display:"flex",gap:"6px"}}><span style={{width:"9px",height:"9px",borderRadius:"50%",background:"rgba(8,7,5,.22)",display:"block"}}></span><span style={{width:"9px",height:"9px",borderRadius:"50%",background:"rgba(8,7,5,.22)",display:"block"}}></span><span style={{width:"9px",height:"9px",borderRadius:"50%",background:"rgba(8,7,5,.22)",display:"block"}}></span></span>
<span style={{flex:"1",height:"20px",borderRadius:"999px",background:"rgba(8,7,5,.06)",border:"1px solid rgba(255,255,250,.6)",display:"flex",alignItems:"center",padding:"0 10px",font:"500 9px/1 'JetBrains Mono',monospace",letterSpacing:".1em",color:"rgba(8,7,5,.5)",overflow:"hidden"}}><span data-bw-win-url="">blackwarelabs.com/brand</span></span>
</div>
<div style={{position:"relative",flex:"1",margin:"0 10px 10px",borderRadius:"0",overflow:"hidden",background:"#080705",border:"1px solid rgba(8,7,5,.6)"}}>
<div data-bw-screen="0" style={{position:"absolute",inset:"0",transition:"opacity .6s ease,transform .8s cubic-bezier(.16,1,.3,1)"}}>
<video preload="none" src="/uploads/make_thsi_live_202608170144.mp4" muted={true} loop={true} playsInline={true} style={{position:"absolute",inset:"0",width:"100%",height:"100%",objectFit:"cover",display:"block",borderRadius:"0"}}></video>
</div>
<div data-bw-screen="1" style={{position:"absolute",inset:"0",opacity:"0",transition:"opacity .6s ease,transform .8s cubic-bezier(.16,1,.3,1)"}}>
<video preload="none" src="/uploads/panel02-website-scroll.mp4" muted={true} loop={true} playsInline={true} style={{position:"absolute",inset:"0",width:"100%",height:"100%",objectFit:"contain",background:"#080705",display:"block",borderRadius:"0"}}></video>
</div>
<div data-bw-screen="2" style={{position:"absolute",inset:"0",opacity:"0",transition:"opacity .6s ease,transform .8s cubic-bezier(.16,1,.3,1)"}}>
<video preload="none" src="/uploads/ROI Calculator.mp4" muted={true} loop={true} playsInline={true} style={{position:"absolute",inset:"0",width:"100%",height:"100%",objectFit:"contain",background:"url('/uploads/panel03-gradient-bg.png') center/cover no-repeat",display:"block",borderRadius:"0"}}></video>
</div>
<div data-bw-screen="3" style={{position:"absolute",inset:"0",opacity:"0",transition:"opacity .6s ease,transform .8s cubic-bezier(.16,1,.3,1)"}}>
<img src="/uploads/panel04-bg.jpg" alt="Person working at a laptop in warm light" style={{position:"absolute",inset:"0",width:"100%",height:"100%",objectFit:"cover",display:"block",borderRadius:"0"}} />
<div style={{position:"absolute",left:"50%",bottom:"16px",transform:"translateX(-50%)",width:"calc(100% - 32px)",maxWidth:"380px",background:"linear-gradient(180deg,rgba(20,17,12,.85),rgba(30,22,14,.92))",border:"1px solid rgba(230,175,46,.55)",borderRadius:"0",padding:"18px 20px",backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",boxShadow:"0 30px 60px -20px rgba(0,0,0,.65)"}}>
<div style={{font:"600 9px/1 'JetBrains Mono',monospace",letterSpacing:".2em",color:"#E6AF2E",marginBottom:"14px"}}>// ANSWER ENGINE</div>
<div style={{display:"flex",alignItems:"center",gap:"7px",paddingBottom:"11px",marginBottom:"14px",borderBottom:"1px solid rgba(230,175,46,.18)",flexWrap:"wrap"}}>
<span style={{font:"700 9.5px/1 'JetBrains Mono',monospace",letterSpacing:".08em",color:"rgba(255,255,250,.45)"}}>CHATGPT</span><span style={{color:"rgba(230,175,46,.3)",fontSize:"10px"}}>·</span>
<span style={{font:"700 9.5px/1 'JetBrains Mono',monospace",letterSpacing:".08em",color:"#E6AF2E"}}>PERPLEXITY</span><span style={{color:"rgba(230,175,46,.3)",fontSize:"10px"}}>·</span>
<span style={{font:"500 9.5px/1 'JetBrains Mono',monospace",letterSpacing:".08em",color:"rgba(255,255,250,.45)"}}>GEMINI</span><span style={{color:"rgba(230,175,46,.3)",fontSize:"10px"}}>·</span>
<span style={{font:"500 9.5px/1 'JetBrains Mono',monospace",letterSpacing:".08em",color:"rgba(255,255,250,.45)"}}>CLAUDE</span>
</div>
<div style={{marginBottom:"14px"}}>
<div style={{font:"600 8px/1 'JetBrains Mono',monospace",letterSpacing:".18em",color:"rgba(255,255,250,.38)",marginBottom:"7px"}}>PROMPT</div>
<div style={{fontSize:"13px",fontWeight:"600",color:"#F4F1EA",lineHeight:"1.45"}}>Which studios build advergames for B2B brands?</div>
</div>
<div>
<div style={{font:"600 8px/1 'JetBrains Mono',monospace",letterSpacing:".18em",color:"rgba(255,255,250,.38)",marginBottom:"7px"}}>RESPONSE</div>
<div data-bw-ae-response="" style={{fontSize:"11.5px",lineHeight:"1.65",color:"rgba(244,241,234,.88)",minHeight:"58px"}}></div>
<div data-bw-ae-cited="" style={{display:"flex",alignItems:"center",gap:"7px",marginTop:"11px",opacity:"0",transition:"opacity .5s ease"}}>
<span style={{color:"#E6AF2E",fontSize:"9px",animation:"bwPulse 2.2s ease-in-out infinite"}}>●</span>
<span style={{color:"#E6AF2E",fontSize:"10px",letterSpacing:".2em",fontWeight:"700"}}>CITED</span>
</div>
</div>
</div>
</div>
<div data-bw-screen="4" style={{position:"absolute",inset:"0",opacity:"0",transition:"opacity .6s ease,transform .8s cubic-bezier(.16,1,.3,1)"}}>
<img src="/uploads/panel05-bg.jpg" alt="Workstation with data dashboards in warm light" style={{position:"absolute",inset:"0",width:"100%",height:"100%",objectFit:"cover",display:"block",borderRadius:"0"}} />
<div style={{position:"absolute",inset:"0",background:"rgba(8,7,5,.68)"}}></div>
<div style={{position:"absolute",inset:"0",padding:"20px 22px",display:"flex",flexDirection:"column",gap:"14px"}}>
<div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
<span style={{font:"500 9px/1 'JetBrains Mono',monospace",letterSpacing:".22em",textTransform:"uppercase",color:"#E6AF2E"}}>// lead routing</span>
<span style={{display:"flex",alignItems:"center",gap:"6px",font:"500 9px/1 'JetBrains Mono',monospace",letterSpacing:".14em",textTransform:"uppercase",color:"rgba(255,255,250,.55)"}}><span style={{width:"6px",height:"6px",borderRadius:"50%",background:"#E6AF2E",display:"block",animation:"bwPulse 2.2s ease-in-out infinite"}}></span>Live</span>
</div>
<div style={{position:"relative",height:"76px",marginTop:"4px"}}>
<div style={{position:"absolute",left:"0",right:"0",top:"54px",height:"1px",background:"rgba(255,255,250,.3)"}}></div>
<div data-bw-lr-progress="" style={{position:"absolute",left:"0",top:"54px",height:"1px",background:"#E6AF2E",transition:"width .9s cubic-bezier(.65,0,.35,1)",width:"0%"}}></div>
<div data-bw-lr-stage="0" style={{position:"absolute",top:"54px",left:"10%",display:"flex",flexDirection:"column",alignItems:"center",gap:"6px",transform:"translateX(-50%)"}}><span style={{width:"7px",height:"7px",borderRadius:"50%",marginTop:"-3.5px",display:"block"}}></span><span style={{font:"500 8px/1 'JetBrains Mono',monospace",letterSpacing:".08em",whiteSpace:"nowrap"}}>CAPTURED</span></div>
<div data-bw-lr-stage="1" style={{position:"absolute",top:"54px",left:"36.66%",display:"flex",flexDirection:"column",alignItems:"center",gap:"6px",transform:"translateX(-50%)"}}><span style={{width:"7px",height:"7px",borderRadius:"50%",marginTop:"-3.5px",display:"block"}}></span><span style={{font:"500 8px/1 'JetBrains Mono',monospace",letterSpacing:".08em",whiteSpace:"nowrap"}}>ENRICHED</span></div>
<div data-bw-lr-stage="2" style={{position:"absolute",top:"54px",left:"63.33%",display:"flex",flexDirection:"column",alignItems:"center",gap:"6px",transform:"translateX(-50%)"}}><span style={{width:"7px",height:"7px",borderRadius:"50%",marginTop:"-3.5px",display:"block"}}></span><span style={{font:"500 8px/1 'JetBrains Mono',monospace",letterSpacing:".08em",whiteSpace:"nowrap"}}>SCORED</span></div>
<div data-bw-lr-stage="3" style={{position:"absolute",top:"54px",left:"90%",display:"flex",flexDirection:"column",alignItems:"center",gap:"6px",transform:"translateX(-50%)"}}><span style={{width:"7px",height:"7px",borderRadius:"50%",marginTop:"-3.5px",display:"block"}}></span><span style={{font:"500 8px/1 'JetBrains Mono',monospace",letterSpacing:".08em",whiteSpace:"nowrap"}}>ROUTED</span></div>
<div data-bw-lr-card="" style={{position:"absolute",top:"0",left:"10%",width:"64%",maxWidth:"180px",transform:"translateX(-50%)",transition:"left 1.1s cubic-bezier(.65,0,.35,1),opacity .5s ease",boxSizing:"border-box"}}>
<div style={{background:"rgba(13,11,8,.92)",border:"1px solid rgba(255,255,250,.16)",padding:"8px 10px"}}>
<div data-bw-lr-descriptor="" style={{fontSize:"10px",lineHeight:"1.35",color:"#FFFFFA",minHeight:"26px"}}></div>
<div style={{marginTop:"6px",minHeight:"20px",display:"flex",alignItems:"center"}}>
<div data-bw-lr-badge="" style={{display:"none",alignItems:"center",gap:"5px",padding:"4px 7px",background:"rgba(230,175,46,.06)",border:"1px solid rgba(230,175,46,.3)",boxSizing:"border-box"}}>
<span style={{font:"500 8px/1 'JetBrains Mono',monospace",letterSpacing:".08em",color:"rgba(255,255,250,.45)"}}>SCORE</span>
<span data-bw-lr-score="" style={{font:"700 11px/1 'JetBrains Mono',monospace",color:"#E6AF2E"}}>0</span>
<span data-bw-lr-tier="" style={{font:"700 8px/1 'JetBrains Mono',monospace",letterSpacing:".06em",display:"none"}}></span>
</div>
</div>
<div data-bw-lr-assign="" style={{marginTop:"6px",minHeight:"14px",fontSize:"9.5px",color:"rgba(255,255,250,.7)"}}></div>
</div>
</div>
</div>
<div style={{marginTop:"2px"}}>
<div style={{font:"500 8px/1 'JetBrains Mono',monospace",letterSpacing:".16em",textTransform:"uppercase",color:"rgba(255,255,250,.65)",marginBottom:"8px"}}>Recently routed</div>
<div data-bw-lr-stack="" style={{display:"flex",flexDirection:"column"}}></div>
</div>
</div>
</div>
<div data-bw-screen="5" style={{position:"absolute",inset:"0",opacity:"0",transition:"opacity .6s ease,transform .8s cubic-bezier(.16,1,.3,1)"}}>
<img src="/uploads/panel06-bg.jpg" alt="Macro shot of a fountain pen nib writing in gold ink" style={{position:"absolute",inset:"0",width:"100%",height:"100%",objectFit:"cover",objectPosition:"35% 50%",display:"block",borderRadius:"0"}} />
<div style={{position:"absolute",inset:"0",background:"linear-gradient(100deg,rgba(8,7,5,.35) 0%,rgba(8,7,5,.15) 40%,rgba(8,7,5,.05) 100%)"}}></div>
<div style={{position:"absolute",top:"18px",right:"18px",bottom:"18px",width:"60%",maxWidth:"230px",background:"linear-gradient(180deg,rgba(20,17,12,.88),rgba(30,22,14,.94))",border:"1px solid rgba(230,175,46,.55)",padding:"14px 15px",display:"flex",flexDirection:"column",boxShadow:"0 24px 48px -16px rgba(0,0,0,.6)"}}>
<div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"10px"}}>
<span style={{font:"600 8.5px/1 'JetBrains Mono',monospace",letterSpacing:".2em",color:"#E6AF2E"}}>// OUTBOUND</span>
<span style={{width:"5px",height:"5px",borderRadius:"50%",background:"#E6AF2E",display:"block",animation:"bwPulse 2.2s ease-in-out infinite"}}></span>
</div>
<div style={{display:"flex",flexDirection:"column",gap:"8px",paddingBottom:"10px",marginBottom:"10px",borderBottom:"1px solid rgba(230,175,46,.18)"}}>
<div><div style={{font:"600 7px/1 'JetBrains Mono',monospace",letterSpacing:".14em",color:"rgba(255,255,250,.4)",marginBottom:"3px"}}>TO</div><div data-bw-po-to="" style={{fontSize:"10px",lineHeight:"1.4",color:"#F4F1EA",fontWeight:"500",minHeight:"14px",overflowWrap:"break-word"}}></div></div>
<div><div style={{font:"600 7px/1 'JetBrains Mono',monospace",letterSpacing:".14em",color:"rgba(255,255,250,.4)",marginBottom:"3px"}}>SUBJECT</div><div data-bw-po-subject="" style={{fontSize:"10px",lineHeight:"1.4",color:"#F4F1EA",fontWeight:"500",minHeight:"14px",overflowWrap:"break-word"}}></div></div>
</div>
<div data-bw-po-body="" style={{display:"flex",flexDirection:"column",gap:"6px",flex:"1",minHeight:"70px"}}></div>
<div style={{borderTop:"1px solid rgba(230,175,46,.18)",marginTop:"8px",paddingTop:"10px",display:"flex",justifyContent:"center"}}>
<div data-bw-po-sent="" style={{display:"flex",alignItems:"center",gap:"6px",opacity:"0",transition:"opacity .5s ease"}}>
<span style={{width:"6px",height:"6px",borderRadius:"50%",background:"#E6AF2E",boxShadow:"0 0 6px rgba(230,175,46,.7)",display:"block"}}></span>
<span style={{font:"700 9px/1 'JetBrains Mono',monospace",letterSpacing:".18em",color:"#E6AF2E"}}>SENT</span>
</div>
</div>
</div>
</div>
<div data-bw-screen="6" style={{position:"absolute",inset:"0",opacity:"0",transition:"opacity .6s ease,transform .8s cubic-bezier(.16,1,.3,1)"}}>
<img src="/uploads/panel07-bg.jpg" alt="Glowing gold data network on a dark background" style={{position:"absolute",inset:"0",width:"100%",height:"100%",objectFit:"cover",display:"block",borderRadius:"0"}} />
<div style={{position:"absolute",inset:"0",background:"linear-gradient(100deg,rgba(8,7,5,.55) 0%,rgba(8,7,5,.2) 45%,rgba(8,7,5,.1) 100%)"}}></div>
<div style={{position:"absolute",top:"16px",right:"16px",bottom:"16px",width:"62%",maxWidth:"250px",background:"linear-gradient(180deg,rgba(20,17,12,.88),rgba(30,22,14,.94))",border:"1px solid rgba(230,175,46,.55)",padding:"12px 14px",display:"flex",flexDirection:"column",boxShadow:"0 24px 48px -16px rgba(0,0,0,.6)"}}>
<div style={{font:"600 7px/1.15 'JetBrains Mono',monospace",letterSpacing:".18em",color:"#E6AF2E",marginBottom:"6px"}}>// ACCOUNT RESEARCH</div>
<div style={{animation:"bwARTarget 15.6s cubic-bezier(.2,.7,.2,1) infinite",marginBottom:"6px"}}>
<div style={{font:"600 6.5px/1.15 'JetBrains Mono',monospace",letterSpacing:".14em",color:"rgba(255,255,250,.4)",marginBottom:"2px"}}>TARGET</div>
<div style={{fontSize:"10px",lineHeight:"1.15",fontWeight:"600",color:"#F4F1EA"}}>SaaS · 250 employees · Series B</div>
</div>
<div style={{animation:"bwARFirmo 15.6s cubic-bezier(.2,.7,.2,1) infinite",marginBottom:"6px"}}>
<div style={{font:"600 6.5px/1.15 'JetBrains Mono',monospace",letterSpacing:".14em",color:"rgba(255,255,250,.4)"}}>FIRMOGRAPHICS</div>
<div style={{fontSize:"9.5px",lineHeight:"1.15",marginTop:"3px"}}><span style={{color:"#F4F1EA",fontWeight:"500"}}>B2B SaaS</span><span style={{color:"rgba(255,255,250,.45)"}}> · Remote-First</span></div>
</div>
<div style={{animation:"bwARSignals 15.6s cubic-bezier(.2,.7,.2,1) infinite",marginBottom:"6px"}}>
<div style={{font:"600 6.5px/1.15 'JetBrains Mono',monospace",letterSpacing:".14em",color:"rgba(255,255,250,.4)"}}>SIGNALS</div>
<div style={{display:"flex",flexDirection:"column",gap:"3px",marginTop:"3px"}}>
<div style={{display:"flex",alignItems:"center",gap:"6px",fontSize:"9.5px",lineHeight:"1.15",fontWeight:"600",animation:"bwARKeyColor 15.6s cubic-bezier(.2,.7,.2,1) infinite"}}><span style={{width:"4px",height:"4px",background:"currentColor",flexShrink:"0",display:"block"}}></span>Hiring 12 sales roles</div>
<div style={{display:"flex",alignItems:"center",gap:"6px",fontSize:"9.5px",lineHeight:"1.15",color:"#F4F1EA"}}><span style={{width:"4px",height:"4px",background:"rgba(184,179,164,.7)",flexShrink:"0",display:"block"}}></span>New VP Marketing (30 days)</div>
</div>
</div>
<div style={{animation:"bwARPeople 15.6s cubic-bezier(.2,.7,.2,1) infinite",marginBottom:"6px"}}>
<div style={{font:"600 6.5px/1.15 'JetBrains Mono',monospace",letterSpacing:".14em",color:"rgba(255,255,250,.4)"}}>KEY PEOPLE</div>
<div style={{display:"flex",flexDirection:"column",gap:"3px",marginTop:"3px",fontSize:"9.5px",lineHeight:"1.15",color:"#F4F1EA"}}>
<div><span style={{fontWeight:"600"}}>VP Sales</span><span style={{color:"rgba(255,255,250,.45)"}}>· decision maker</span></div>
<div><span style={{fontWeight:"600"}}>Head of Growth</span><span style={{color:"rgba(255,255,250,.45)"}}>· champion</span></div>
</div>
</div>
<div style={{animation:"bwARSummary 15.6s cubic-bezier(.2,.7,.2,1) infinite",paddingTop:"7px",borderTop:"1px solid rgba(255,255,250,.08)",marginBottom:"5px"}}>
<div style={{fontSize:"10px",fontWeight:"600",lineHeight:"1.2",color:"#E6AF2E"}}>Strong fit — active buying signals</div>
</div>
<div style={{animation:"bwARStatus 15.6s cubic-bezier(.2,.7,.2,1) infinite",display:"flex",alignItems:"center",gap:"6px"}}>
<span style={{width:"5px",height:"5px",borderRadius:"50%",background:"#E6AF2E",flexShrink:"0",display:"block",animation:"bwPulse 1.4s ease-in-out infinite"}}></span>
<span style={{font:"700 8px/1.15 'JetBrains Mono',monospace",letterSpacing:".16em",color:"#E6AF2E"}}>COMPILED</span>
</div>
</div>
</div>
<div data-bw-screen="7" style={{position:"absolute",inset:"0",opacity:"0",transition:"opacity .6s ease,transform .8s cubic-bezier(.16,1,.3,1)"}}>
<img src="/uploads/panel08-bg.jpg" alt="Close-up of a hand using a phone in warm light" style={{position:"absolute",inset:"0",width:"100%",height:"100%",objectFit:"cover",display:"block",borderRadius:"0"}} />
<div style={{position:"absolute",inset:"0",background:"linear-gradient(102deg,rgba(8,7,5,.85) 0%,rgba(8,7,5,.55) 35%,rgba(8,7,5,.15) 65%,rgba(8,7,5,.1) 100%)"}}></div>
<div style={{position:"absolute",top:"50%",right:"16px",transform:"translateY(-50%)",width:"60%",maxWidth:"260px",background:"rgba(8,7,5,.92)",border:"1px solid #E6AF2E",padding:"14px 16px",display:"flex",flexDirection:"column",gap:"8px",boxSizing:"border-box"}}>
<span style={{position:"absolute",top:"-1px",left:"-1px",width:"12px",height:"12px",borderTop:"1.5px solid #E6AF2E",borderLeft:"1.5px solid #E6AF2E",pointerEvents:"none",display:"block"}}></span>
<span style={{position:"absolute",top:"-1px",right:"-1px",width:"12px",height:"12px",borderTop:"1.5px solid #E6AF2E",borderRight:"1.5px solid #E6AF2E",pointerEvents:"none",display:"block"}}></span>
<span style={{position:"absolute",bottom:"-1px",left:"-1px",width:"12px",height:"12px",borderBottom:"1.5px solid #E6AF2E",borderLeft:"1.5px solid #E6AF2E",pointerEvents:"none",display:"block"}}></span>
<span style={{position:"absolute",bottom:"-1px",right:"-1px",width:"12px",height:"12px",borderBottom:"1.5px solid #E6AF2E",borderRight:"1.5px solid #E6AF2E",pointerEvents:"none",display:"block"}}></span>
<div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
<span style={{font:"600 7.5px/1.15 'JetBrains Mono',monospace",letterSpacing:".18em",color:"#E6AF2E"}}>// SELF-SERVE</span>
<span style={{font:"500 6.5px/1.15 'JetBrains Mono',monospace",letterSpacing:".16em",color:"var(--bw-accent)"}}>DEMO</span>
</div>
<div style={{height:"1px",background:"rgba(255,255,250,.1)"}}></div>
<div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"6px"}}>
<div style={{padding:"6px 3px",textAlign:"center",border:"1px solid rgba(255,255,250,.18)",fontSize:"9px",fontWeight:"600",color:"rgba(255,255,250,.72)"}}>Starter</div>
<div style={{padding:"6px 3px",textAlign:"center",border:"1px solid rgba(255,255,250,.18)",fontSize:"9px",fontWeight:"600",color:"rgba(255,255,250,.72)",animation:"bwSSBGrowth 9s cubic-bezier(.2,.7,.2,1) infinite"}}>Growth</div>
<div style={{padding:"6px 3px",textAlign:"center",border:"1px solid rgba(255,255,250,.18)",fontSize:"9px",fontWeight:"600",color:"rgba(255,255,250,.72)"}}>Scale</div>
</div>
<div style={{display:"flex",flexDirection:"column",gap:"6px"}}>
<div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
<span style={{fontSize:"9.5px",color:"#FFFFFA"}}>Add onboarding</span>
<div style={{width:"14px",height:"14px",border:"1px solid rgba(255,255,250,.18)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:"0",animation:"bwSSBCheck1 9s cubic-bezier(.2,.7,.2,1) infinite"}}>
<svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#080705" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" style={{animation:"bwSSBCheckIcon1 9s cubic-bezier(.2,.7,.2,1) infinite"}}><polyline points="4 12 9 17 20 6"></polyline></svg>
</div>
</div>
<div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
<span style={{fontSize:"9.5px",color:"#FFFFFA"}}>Priority support</span>
<div style={{width:"14px",height:"14px",border:"1px solid rgba(255,255,250,.18)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:"0",animation:"bwSSBCheck2 9s cubic-bezier(.2,.7,.2,1) infinite"}}>
<svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#080705" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" style={{animation:"bwSSBCheckIcon2 9s cubic-bezier(.2,.7,.2,1) infinite"}}><polyline points="4 12 9 17 20 6"></polyline></svg>
</div>
</div>
</div>
<div style={{height:"1px",background:"rgba(255,255,250,.1)"}}></div>
<div>
<div style={{font:"600 7px/1.15 'JetBrains Mono',monospace",letterSpacing:".16em",color:"rgba(184,179,164,.85)",textTransform:"uppercase",marginBottom:"4px"}}>Your plan</div>
<div style={{position:"relative",minHeight:"44px"}}>
<span style={{position:"absolute",left:"0",top:"0",width:"100%",fontFamily:"'Barlow Condensed',sans-serif",fontWeight:"800",fontSize:"15px",lineHeight:"1.2",whiteSpace:"nowrap",color:"#FFFFFA",animation:"bwSSBPriceBase 9s cubic-bezier(.2,.7,.2,1) infinite"}}>Growth</span>
<span style={{position:"absolute",left:"0",top:"0",width:"100%",fontFamily:"'Barlow Condensed',sans-serif",fontWeight:"800",fontSize:"15px",lineHeight:"1.2",whiteSpace:"nowrap",color:"#FFFFFA",animation:"bwSSBPriceMid 9s cubic-bezier(.2,.7,.2,1) infinite"}}>Growth · Onboarding</span>
<span style={{position:"absolute",left:"0",top:"0",width:"100%",fontFamily:"'Barlow Condensed',sans-serif",fontWeight:"800",fontSize:"15px",lineHeight:"1.25",color:"#FFFFFA",animation:"bwSSBPriceFinal 9s cubic-bezier(.2,.7,.2,1) infinite"}}>Growth · Onboarding<br />+ Priority support</span>
</div>
</div>
<div style={{padding:"8px",textAlign:"center",background:"#E6AF2E",color:"#080705",font:"700 9px/1.15 'JetBrains Mono',monospace",letterSpacing:".12em",textTransform:"uppercase",animation:"bwSSBPulse 9s cubic-bezier(.2,.7,.2,1) infinite"}}>Complete purchase</div>
<div style={{height:"12px",display:"flex",alignItems:"center"}}>
<div style={{display:"flex",alignItems:"center",gap:"6px",animation:"bwSSBConfirm 9s cubic-bezier(.2,.7,.2,1) infinite"}}>
<span style={{width:"5px",height:"5px",borderRadius:"50%",background:"#E6AF2E",flexShrink:"0",display:"block",animation:"bwPulse 1.4s ease-in-out infinite"}}></span>
<span style={{font:"700 8px/1.15 'JetBrains Mono',monospace",letterSpacing:".16em",color:"#E6AF2E"}}>CONFIRMED</span>
</div>
</div>
</div>
</div>
<span style={{position:"absolute",inset:"0",pointerEvents:"none",background:"linear-gradient(115deg,rgba(255,255,250,.07) 0%,rgba(255,255,250,0) 42%)",display:"block"}}></span>
</div>
</div>
</div>
</div>
<div style={{maxWidth:"1440px",margin:"0 auto",padding:"0 40px clamp(18px,4vh,34px)",width:"100%",flexShrink:"0",font:"500 11px/1 'JetBrains Mono',monospace",letterSpacing:".14em",textTransform:"uppercase",opacity:".45"}}>Keep scrolling to turn the wheel — or click a service</div>
</div>
</section>
<section id="process" style={{padding:"140px 0 0",borderTop:"1px solid var(--bw-rule)"}}>
<div style={{maxWidth:"1440px",margin:"0 auto",padding:"0 40px"}}>
<div style={{display:"flex",flexDirection:"column",gap:"22px",maxWidth:"900px",paddingBottom:"64px"}}>
<div data-bw-reveal="" style={{display:"flex",alignItems:"center",gap:"10px",font:"500 12px/1 'JetBrains Mono',monospace",letterSpacing:".14em",textTransform:"uppercase"}}>
<span style={{width:"7px",height:"7px",background:"#080705",display:"block"}}></span>How we work</div>
<h2 data-bw-reveal="" style={{fontFamily:"'Barlow Condensed',Archivo,sans-serif",margin:"0",fontWeight:"800",fontSize:"clamp(38px,5.4vw,88px)",lineHeight:".92",letterSpacing:"-.04em"}}>Three steps. No discovery theatre.</h2>
</div>
<div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"26px"}}>
<div data-bw-reveal="" style={{background:"var(--bw-glass)",border:"1px solid rgba(255,255,250,.66)",borderRadius:"28px",backdropFilter:"blur(26px) saturate(180%)",WebkitBackdropFilter:"blur(26px) saturate(180%)",boxShadow:"0 28px 64px -34px rgba(8,7,5,.42),0 1px 0 rgba(255,255,250,.9) inset,0 -18px 34px -26px rgba(8,7,5,.22) inset",padding:"26px",display:"flex",flexDirection:"column",gap:"22px"}}>
<div style={{display:"flex",justifyContent:"space-between",alignItems:"baseline"}}><span style={{font:"500 12px/1 'JetBrains Mono',monospace",letterSpacing:".14em"}}>STEP 01</span><span style={{fontWeight:"900",fontSize:"64px",lineHeight:".8",letterSpacing:"-.05em",opacity:".12"}}>01</span></div>
<div style={{height:"220px",border:"1px solid rgba(255,255,250,.62)",borderRadius:"0",overflow:"hidden",boxShadow:"0 18px 44px -30px rgba(8,7,5,.5),0 1px 0 rgba(255,255,250,.8) inset"}}><img src="/uploads/step01-scope-binoculars-bwlogo.jpg" alt="Illustration of a person looking through binoculars with BW Labs branding in the lenses" style={{width:"100%",height:"100%",objectFit:"cover",objectPosition:"50% 15%",display:"block",borderRadius:"0"}} /></div>
<h3 style={{fontFamily:"'Barlow Condensed',Archivo,sans-serif",margin:"0",fontWeight:"800",fontSize:"30px",letterSpacing:"-.03em"}}>Scope</h3>
<p style={{margin:"0",fontSize:"15px",lineHeight:"1.5",fontWeight:"500",opacity:".7",textWrap:"pretty"}}>Tell us what you need. We match you to the right offer, confirm the price, and lock the delivery date. One 20-minute call. No discovery workshops.</p>
</div>
<div data-bw-reveal="" style={{background:"var(--bw-glass)",border:"1px solid rgba(255,255,250,.66)",borderRadius:"28px",backdropFilter:"blur(26px) saturate(180%)",WebkitBackdropFilter:"blur(26px) saturate(180%)",boxShadow:"0 28px 64px -34px rgba(8,7,5,.42),0 1px 0 rgba(255,255,250,.9) inset,0 -18px 34px -26px rgba(8,7,5,.22) inset",padding:"26px",display:"flex",flexDirection:"column",gap:"22px"}}>
<div style={{display:"flex",justifyContent:"space-between",alignItems:"baseline"}}><span style={{font:"500 12px/1 'JetBrains Mono',monospace",letterSpacing:".14em"}}>STEP 02</span><span style={{fontWeight:"900",fontSize:"64px",lineHeight:".8",letterSpacing:"-.05em",opacity:".12"}}>02</span></div>
<div style={{height:"220px",border:"1px solid rgba(255,255,250,.62)",borderRadius:"0",overflow:"hidden",boxShadow:"0 18px 44px -30px rgba(8,7,5,.5),0 1px 0 rgba(255,255,250,.8) inset"}}><img src="/uploads/we-build-it.png" alt="Illustration of a person assembling building blocks from a cloud window" style={{width:"100%",height:"100%",objectFit:"cover",objectPosition:"center top",display:"block",borderRadius:"0"}} /></div>
<h3 style={{fontFamily:"'Barlow Condensed',Archivo,sans-serif",margin:"0",fontWeight:"800",fontSize:"30px",letterSpacing:"-.03em"}}>Build</h3>
<p style={{margin:"0",fontSize:"15px",lineHeight:"1.5",fontWeight:"500",opacity:".7",textWrap:"pretty"}}>Our pipelines handle execution. Senior people handle strategy and quality. You get working progress — not decks about progress.</p>
</div>
<div data-bw-reveal="" style={{background:"var(--bw-glass)",border:"1px solid rgba(255,255,250,.66)",borderRadius:"28px",backdropFilter:"blur(26px) saturate(180%)",WebkitBackdropFilter:"blur(26px) saturate(180%)",boxShadow:"0 28px 64px -34px rgba(8,7,5,.42),0 1px 0 rgba(255,255,250,.9) inset,0 -18px 34px -26px rgba(8,7,5,.22) inset",padding:"26px",display:"flex",flexDirection:"column",gap:"22px"}}>
<div style={{display:"flex",justifyContent:"space-between",alignItems:"baseline"}}><span style={{font:"500 12px/1 'JetBrains Mono',monospace",letterSpacing:".14em"}}>STEP 03</span><span style={{fontWeight:"900",fontSize:"64px",lineHeight:".8",letterSpacing:"-.05em",opacity:".12"}}>03</span></div>
<div style={{height:"220px",border:"1px solid rgba(255,255,250,.62)",borderRadius:"0",overflow:"hidden",boxShadow:"0 18px 44px -30px rgba(8,7,5,.5),0 1px 0 rgba(255,255,250,.8) inset"}}><video preload="none" src="/uploads/step03-ship-heli-banner.mp4" muted={true} loop={true} playsInline={true} style={{width:"100%",height:"100%",objectFit:"cover",objectPosition:"center top",display:"block",borderRadius:"0"}}></video></div>
<h3 style={{fontFamily:"'Barlow Condensed',Archivo,sans-serif",margin:"0",fontWeight:"800",fontSize:"30px",letterSpacing:"-.03em"}}>Ship</h3>
<p style={{margin:"0",fontSize:"15px",lineHeight:"1.5",fontWeight:"500",opacity:".7",textWrap:"pretty"}}>Your deliverable goes live on the date we agreed. We measure what it does and tell you what to do next.</p>
</div>
</div>
</div>
</section>
<section data-bw-stats="" style={{marginTop:"140px",color:"#080705",padding:"96px 0"}}>
<div style={{maxWidth:"1440px",margin:"0 auto",padding:"0 40px",display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"26px"}}>
<div style={{display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center",gap:"12px",borderTop:"1px solid rgba(8,7,5,.22)",paddingTop:"26px"}}>
<span style={{fontFamily:"'Barlow Condensed',Archivo,sans-serif",fontWeight:"900",fontSize:"clamp(56px,8vw,124px)",lineHeight:".82",letterSpacing:"-.05em",color:"#E6AF2E"}}>20+</span>
<span style={{font:"500 12px/1 'JetBrains Mono',monospace",letterSpacing:".14em",textTransform:"uppercase",color:"var(--fg-mute)"}}>Projects delivered</span>
</div>
<div style={{display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center",gap:"12px",borderTop:"1px solid rgba(8,7,5,.22)",paddingTop:"26px"}}>
<span style={{fontFamily:"'Barlow Condensed',Archivo,sans-serif",fontWeight:"900",fontSize:"clamp(56px,8vw,124px)",lineHeight:".82",letterSpacing:"-.05em",color:"#C84A1F"}}>100%</span>
<span style={{font:"500 12px/1 'JetBrains Mono',monospace",letterSpacing:".14em",textTransform:"uppercase",color:"var(--fg-mute)"}}>Clients who re-engage</span>
</div>
<div style={{display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center",gap:"12px",borderTop:"1px solid rgba(8,7,5,.22)",paddingTop:"26px"}}>
<span style={{fontFamily:"'Barlow Condensed',Archivo,sans-serif",fontWeight:"900",fontSize:"clamp(56px,8vw,124px)",lineHeight:".82",letterSpacing:"-.05em",color:"var(--stat-accent)"}}>2+</span>
<span style={{font:"500 12px/1 'JetBrains Mono',monospace",letterSpacing:".14em",textTransform:"uppercase",color:"var(--fg-mute)"}}>Years in market</span>
</div>
</div>
</section>
<section id="pricing" style={{padding:"140px 0 0"}}>
<div style={{maxWidth:"1440px",margin:"0 auto",padding:"0 40px"}}>
<div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-end",gap:"48px",flexWrap:"wrap",paddingBottom:"60px"}}>
<div style={{display:"flex",flexDirection:"column",gap:"22px",maxWidth:"760px"}}>
<div data-bw-reveal="" style={{display:"flex",alignItems:"center",gap:"10px",font:"500 12px/1 'JetBrains Mono',monospace",letterSpacing:".14em",textTransform:"uppercase"}}>
<span style={{width:"7px",height:"7px",background:"#080705",display:"block"}}></span>Engagements</div>
<h2 data-bw-reveal="" style={{fontFamily:"'Barlow Condensed',Archivo,sans-serif",margin:"0",fontWeight:"800",fontSize:"clamp(38px,5.4vw,88px)",lineHeight:".92",letterSpacing:"-.04em"}}>Pick the scope, not the hourly rate.</h2>
</div>
<p data-bw-reveal="" style={{margin:"0",maxWidth:"320px",fontSize:"15px",lineHeight:"1.5",fontWeight:"500",opacity:".65"}}>Fixed price, fixed window. Indicative ranges — final number comes out of the diagnose week.</p>
</div>
<div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"26px",alignItems:"stretch"}}>
<div className="home-p85" data-bw-reveal="" data-bw-eng-card="" style={{position:"relative",isolation:"isolate",overflow:"hidden",borderRadius:"20px",padding:"clamp(1.5rem,4vw,2.25rem)",display:"flex",flexDirection:"column",border:"1px solid rgba(230,175,46,.55)",transition:"transform .9s cubic-bezier(.2,.8,.2,1)"}}>
<img data-bw-eng-bg="" src="/uploads/pasted-1787345588263-0.png" alt="Vintage typewriter with a sheet of paper reading 'What's your story?'" style={{position:"absolute",inset:"0",width:"100%",height:"100%",objectFit:"cover",objectPosition:"center",zIndex:"-2",display:"block",filter:"saturate(1.1) contrast(1.05)",transition:"transform .9s cubic-bezier(.2,.8,.2,1)"}} />
<span style={{font:"500 .75rem/1 'JetBrains Mono',monospace",letterSpacing:".18em",textTransform:"uppercase",color:"#FFFFFA"}}>01 / Launch</span>
<h3 style={{fontFamily:"'Anton',sans-serif",margin:"14px 0 0",fontWeight:"400",fontSize:"1.875rem",lineHeight:"1.05",color:"#FFFFFA"}}>Get the story straight</h3>
<p style={{fontFamily:"'Inter',Archivo,Helvetica,Arial,sans-serif",margin:"14px 0 0",fontSize:".9375rem",lineHeight:"1.6",color:"rgba(255,255,250,.8)"}}>For teams with a product and no clear way to talk about it yet.</p>
<ul style={{listStyle:"none",margin:"22px 0 0",padding:"0",display:"flex",flexDirection:"column",gap:"11px",flex:"1"}}>
<li style={{position:"relative",paddingLeft:"1.6rem",fontFamily:"'Inter',Archivo,Helvetica,Arial,sans-serif",fontSize:".9375rem",color:"rgba(255,255,250,.88)"}}><span aria-hidden="true" style={{position:"absolute",left:"0",color:"#E6AF2E"}}>—</span>Positioning &amp; messaging</li>
<li style={{position:"relative",paddingLeft:"1.6rem",fontFamily:"'Inter',Archivo,Helvetica,Arial,sans-serif",fontSize:".9375rem",color:"rgba(255,255,250,.88)"}}><span aria-hidden="true" style={{position:"absolute",left:"0",color:"#E6AF2E"}}>—</span>Core identity system</li>
<li style={{position:"relative",paddingLeft:"1.6rem",fontFamily:"'Inter',Archivo,Helvetica,Arial,sans-serif",fontSize:".9375rem",color:"rgba(255,255,250,.88)"}}><span aria-hidden="true" style={{position:"absolute",left:"0",color:"#E6AF2E"}}>—</span>Marketing site (5 pages)</li>
<li style={{position:"relative",paddingLeft:"1.6rem",fontFamily:"'Inter',Archivo,Helvetica,Arial,sans-serif",fontSize:".9375rem",color:"rgba(255,255,250,.88)"}}><span aria-hidden="true" style={{position:"absolute",left:"0",color:"#E6AF2E"}}>—</span>Sales one-pager</li>
</ul>
<span aria-hidden="true" style={{display:"block",height:"1px",background:"rgba(255,255,250,.14)",margin:"1.75rem 0 1.4rem"}}></span>
<div style={{display:"flex",alignItems:"baseline",gap:".35rem"}}>
<span style={{fontFamily:"'Anton',sans-serif",fontWeight:"400",fontSize:"2.25rem",color:"#FFFFFA"}}>from $18k</span>
<span style={{fontFamily:"'Inter',Archivo,Helvetica,Arial,sans-serif",fontSize:".875rem",color:"rgba(255,255,250,.5)"}}>/ project</span>
</div>
<a className="home-p86 home-p87 home-p88" href="#contact" style={{marginTop:"1.5rem",width:"100%",boxSizing:"border-box",textAlign:"center",background:"transparent",border:"1px solid rgba(255,255,250,.26)",borderRadius:"999px",color:"#FFFFFA",fontFamily:"'Inter',Archivo,Helvetica,Arial,sans-serif",fontSize:".9375rem",fontWeight:"500",padding:".95rem",display:"inline-block",transition:"background .25s ease,color .25s ease,transform 140ms cubic-bezier(.2,.7,.2,1),border-color 200ms cubic-bezier(.2,.7,.2,1),opacity 200ms cubic-bezier(.2,.7,.2,1)",opacity:"1"}}>Enquire</a>
</div>
<div className="home-p89" data-bw-reveal="" data-bw-eng-card="" style={{position:"relative",isolation:"isolate",overflow:"hidden",borderRadius:"20px",padding:"clamp(1.5rem,4vw,2.25rem)",display:"flex",flexDirection:"column",border:"1px solid rgba(200,74,31,.62)",transition:"transform .9s cubic-bezier(.2,.8,.2,1)"}}>
<img data-bw-eng-bg="" src="/uploads/pasted-1787340903218-0.png" alt="Mechanical keyboard with a glowing doorway opening between the keys" style={{position:"absolute",inset:"0",width:"100%",height:"100%",objectFit:"cover",objectPosition:"center",zIndex:"-2",display:"block",filter:"saturate(1.15) contrast(1.05)",transition:"transform .9s cubic-bezier(.2,.8,.2,1)"}} />
<span style={{display:"flex",justifyContent:"space-between",alignItems:"baseline",gap:"12px",font:"500 .75rem/1 'JetBrains Mono',monospace",letterSpacing:".18em",textTransform:"uppercase",color:"#FFFFFA"}}><span>02 / Growth</span><span style={{color:"rgba(255,255,250,.45)"}}>Most chosen</span></span>
<h3 style={{fontFamily:"'Anton',sans-serif",margin:"14px 0 0",fontWeight:"400",fontSize:"1.875rem",lineHeight:"1.05",color:"#FFFFFA"}}>Build the machine</h3>
<p style={{fontFamily:"'Inter',Archivo,Helvetica,Arial,sans-serif",margin:"14px 0 0",fontSize:".9375rem",lineHeight:"1.6",color:"rgba(255,255,250,.8)"}}>For teams with demand and a funnel that leaks between marketing and sales.</p>
<ul style={{listStyle:"none",margin:"22px 0 0",padding:"0",display:"flex",flexDirection:"column",gap:"11px",flex:"1"}}>
<li style={{position:"relative",paddingLeft:"1.6rem",fontFamily:"'Inter',Archivo,Helvetica,Arial,sans-serif",fontSize:".9375rem",color:"rgba(255,255,250,.88)"}}><span aria-hidden="true" style={{position:"absolute",left:"0",color:"#C84A1F"}}>—</span>Everything in Launch</li>
<li style={{position:"relative",paddingLeft:"1.6rem",fontFamily:"'Inter',Archivo,Helvetica,Arial,sans-serif",fontSize:".9375rem",color:"rgba(255,255,250,.88)"}}><span aria-hidden="true" style={{position:"absolute",left:"0",color:"#C84A1F"}}>—</span>Full site &amp; case-study system</li>
<li style={{position:"relative",paddingLeft:"1.6rem",fontFamily:"'Inter',Archivo,Helvetica,Arial,sans-serif",fontSize:".9375rem",color:"rgba(255,255,250,.88)"}}><span aria-hidden="true" style={{position:"absolute",left:"0",color:"#C84A1F"}}>—</span>One interactive asset</li>
<li style={{position:"relative",paddingLeft:"1.6rem",fontFamily:"'Inter',Archivo,Helvetica,Arial,sans-serif",fontSize:".9375rem",color:"rgba(255,255,250,.88)"}}><span aria-hidden="true" style={{position:"absolute",left:"0",color:"#C84A1F"}}>—</span>Pitch system for sales</li>
<li style={{position:"relative",paddingLeft:"1.6rem",fontFamily:"'Inter',Archivo,Helvetica,Arial,sans-serif",fontSize:".9375rem",color:"rgba(255,255,250,.88)"}}><span aria-hidden="true" style={{position:"absolute",left:"0",color:"#C84A1F"}}>—</span>90-day measurement</li>
</ul>
<span aria-hidden="true" style={{display:"block",height:"1px",background:"rgba(255,255,250,.14)",margin:"1.75rem 0 1.4rem"}}></span>
<div style={{display:"flex",alignItems:"baseline",gap:".35rem"}}>
<span style={{fontFamily:"'Anton',sans-serif",fontWeight:"400",fontSize:"2.25rem",color:"#FFFFFA"}}>from $46k</span>
<span style={{fontFamily:"'Inter',Archivo,Helvetica,Arial,sans-serif",fontSize:".875rem",color:"rgba(255,255,250,.5)"}}>/ project</span>
</div>
<a className="home-p90 home-p91 home-p92" href="#contact" style={{marginTop:"1.5rem",width:"100%",boxSizing:"border-box",textAlign:"center",background:"#FFFFFA",border:"1px solid transparent",borderRadius:"999px",color:"#080705",fontFamily:"'Inter',Archivo,Helvetica,Arial,sans-serif",fontSize:".9375rem",fontWeight:"500",padding:".95rem",display:"inline-block",transition:"background .25s ease,color .25s ease,transform 140ms cubic-bezier(.2,.7,.2,1),border-color 200ms cubic-bezier(.2,.7,.2,1),opacity 200ms cubic-bezier(.2,.7,.2,1)",opacity:"1"}}>Enquire</a>
</div>
<div className="home-p93" data-bw-reveal="" data-bw-eng-card="" style={{position:"relative",isolation:"isolate",overflow:"hidden",borderRadius:"20px",padding:"clamp(1.5rem,4vw,2.25rem)",display:"flex",flexDirection:"column",border:"1px solid rgba(145,47,64,.62)",transition:"transform .9s cubic-bezier(.2,.8,.2,1)"}}>
<img data-bw-eng-bg="" src="/uploads/pasted-1787345297037-0.png" alt="Four hands, each holding a jigsaw piece, assembling them together over a gold circle" style={{position:"absolute",inset:"0",width:"100%",height:"100%",objectFit:"cover",objectPosition:"center",zIndex:"-2",display:"block",filter:"saturate(.9) contrast(1.04)",transition:"transform .9s cubic-bezier(.2,.8,.2,1)"}} />
<span style={{font:"500 .75rem/1 'JetBrains Mono',monospace",letterSpacing:".18em",textTransform:"uppercase",color:"#FFFFFA"}}>03 / Partner</span>
<h3 style={{fontFamily:"'Anton',sans-serif",margin:"14px 0 0",fontWeight:"400",fontSize:"1.875rem",lineHeight:"1.05",color:"#FFFFFA"}}>Stay in the room</h3>
<p style={{fontFamily:"'Inter',Archivo,Helvetica,Arial,sans-serif",margin:"14px 0 0",fontSize:".9375rem",lineHeight:"1.6",color:"rgba(255,255,250,.8)"}}>An embedded studio for teams shipping campaigns every month.</p>
<ul style={{listStyle:"none",margin:"22px 0 0",padding:"0",display:"flex",flexDirection:"column",gap:"11px",flex:"1"}}>
<li style={{position:"relative",paddingLeft:"1.6rem",fontFamily:"'Inter',Archivo,Helvetica,Arial,sans-serif",fontSize:".9375rem",color:"rgba(255,255,250,.88)"}}><span aria-hidden="true" style={{position:"absolute",left:"0",color:"#912F40"}}>—</span>Dedicated squad</li>
<li style={{position:"relative",paddingLeft:"1.6rem",fontFamily:"'Inter',Archivo,Helvetica,Arial,sans-serif",fontSize:".9375rem",color:"rgba(255,255,250,.88)"}}><span aria-hidden="true" style={{position:"absolute",left:"0",color:"#912F40"}}>—</span>Rolling campaign design</li>
<li style={{position:"relative",paddingLeft:"1.6rem",fontFamily:"'Inter',Archivo,Helvetica,Arial,sans-serif",fontSize:".9375rem",color:"rgba(255,255,250,.88)"}}><span aria-hidden="true" style={{position:"absolute",left:"0",color:"#912F40"}}>—</span>Sales asset pipeline</li>
<li style={{position:"relative",paddingLeft:"1.6rem",fontFamily:"'Inter',Archivo,Helvetica,Arial,sans-serif",fontSize:".9375rem",color:"rgba(255,255,250,.88)"}}><span aria-hidden="true" style={{position:"absolute",left:"0",color:"#912F40"}}>—</span>Quarterly strategy review</li>
</ul>
<span aria-hidden="true" style={{display:"block",height:"1px",background:"rgba(255,255,250,.14)",margin:"1.75rem 0 1.4rem"}}></span>
<div style={{display:"flex",alignItems:"baseline",gap:".35rem"}}>
<span style={{fontFamily:"'Anton',sans-serif",fontWeight:"400",fontSize:"2.25rem",color:"#FFFFFA"}}>$14k</span>
<span style={{fontFamily:"'Inter',Archivo,Helvetica,Arial,sans-serif",fontSize:".875rem",color:"rgba(255,255,250,.5)"}}>/ month</span>
</div>
<a className="home-p94 home-p95 home-p96" href="#contact" style={{marginTop:"1.5rem",width:"100%",boxSizing:"border-box",textAlign:"center",background:"transparent",border:"1px solid rgba(255,255,250,.26)",borderRadius:"999px",color:"#FFFFFA",fontFamily:"'Inter',Archivo,Helvetica,Arial,sans-serif",fontSize:".9375rem",fontWeight:"500",padding:".95rem",display:"inline-block",transition:"background .25s ease,color .25s ease,transform 140ms cubic-bezier(.2,.7,.2,1),border-color 200ms cubic-bezier(.2,.7,.2,1),opacity 200ms cubic-bezier(.2,.7,.2,1)",opacity:"1"}}>Enquire</a>
</div>
</div>
</div>
</section>
<section style={{padding:"150px 0 0"}}>
<div style={{maxWidth:"1440px",margin:"0 auto",padding:"0 40px"}}>
<div style={{display:"flex",flexDirection:"column",gap:"22px",maxWidth:"900px",paddingBottom:"60px"}}>
<div data-bw-reveal="" style={{display:"flex",alignItems:"center",gap:"10px",font:"500 12px/1 'JetBrains Mono',monospace",letterSpacing:".14em",textTransform:"uppercase"}}>
<span style={{width:"7px",height:"7px",background:"#080705",display:"block"}}></span>Client voices</div>
<h2 data-bw-reveal="" style={{fontFamily:"'Barlow Condensed',Archivo,sans-serif",margin:"0",fontWeight:"800",fontSize:"clamp(38px,5.4vw,88px)",lineHeight:".92",letterSpacing:"-.04em"}}>What it's like on the other side.</h2>
</div>
<div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"26px"}}>
<figure data-bw-reveal="" style={{margin:"0",background:"var(--bw-glass)",border:"1px solid rgba(255,255,250,.66)",borderRadius:"30px",backdropFilter:"blur(26px) saturate(180%)",WebkitBackdropFilter:"blur(26px) saturate(180%)",boxShadow:"0 28px 64px -34px rgba(8,7,5,.42),0 1px 0 rgba(255,255,250,.9) inset,0 -18px 34px -26px rgba(8,7,5,.22) inset",padding:"30px",display:"flex",flexDirection:"column",gap:"26px",justifyContent:"space-between"}}>
<blockquote style={{margin:"0",fontWeight:"700",fontSize:"24px",lineHeight:"1.22",letterSpacing:"-.025em",textWrap:"pretty"}}>“They rewrote how we talk about the product, and our win rate moved inside a quarter.”</blockquote>
<figcaption style={{display:"flex",alignItems:"center",gap:"14px"}}>
<span style={{width:"52px",height:"52px",border:"1px solid var(--bw-fg)",borderRadius:"50%",background:"repeating-linear-gradient(135deg,#F2F2E8 0 8px,#FFFFFA 8px 16px)",flexShrink:"0",display:"block"}}></span>
<span style={{display:"flex",flexDirection:"column",gap:"3px"}}><span style={{fontWeight:"700",fontSize:"15px"}}>Daniela Craft</span><span style={{font:"500 11px/1.3 'JetBrains Mono',monospace",letterSpacing:".06em",opacity:".55"}}>VP Marketing, Northbeam</span></span>
</figcaption>
</figure>
<figure data-bw-reveal="" style={{margin:"0",background:"linear-gradient(140deg,rgba(22,20,17,.8),rgba(8,7,5,.56))",border:"1px solid rgba(255,255,250,.24)",borderRadius:"30px",backdropFilter:"blur(28px) saturate(160%)",WebkitBackdropFilter:"blur(28px) saturate(160%)",boxShadow:"0 30px 72px -34px rgba(8,7,5,.75),0 1px 0 rgba(255,255,250,.24) inset",color:"#FFFFFA",padding:"30px",display:"flex",flexDirection:"column",gap:"26px",justifyContent:"space-between"}}>
<blockquote style={{margin:"0",fontWeight:"700",fontSize:"24px",lineHeight:"1.22",letterSpacing:"-.025em",textWrap:"pretty"}}>“The interactive pitch is now the first thing every rep sends. It sells better than we do.”</blockquote>
<figcaption style={{display:"flex",alignItems:"center",gap:"14px"}}>
<span style={{width:"52px",height:"52px",border:"1px solid rgba(255,255,250,.5)",borderRadius:"50%",background:"repeating-linear-gradient(135deg,rgba(255,255,250,.14) 0 8px,rgba(255,255,250,0) 8px 16px)",flexShrink:"0",display:"block"}}></span>
<span style={{display:"flex",flexDirection:"column",gap:"3px"}}><span style={{fontWeight:"700",fontSize:"15px"}}>Ethan Mora</span><span style={{font:"500 11px/1.3 'JetBrains Mono',monospace",letterSpacing:".06em",opacity:".6"}}>CRO, Vectra</span></span>
</figcaption>
</figure>
<figure data-bw-reveal="" style={{margin:"0",background:"var(--bw-glass)",border:"1px solid rgba(255,255,250,.66)",borderRadius:"30px",backdropFilter:"blur(26px) saturate(180%)",WebkitBackdropFilter:"blur(26px) saturate(180%)",boxShadow:"0 28px 64px -34px rgba(8,7,5,.42),0 1px 0 rgba(255,255,250,.9) inset,0 -18px 34px -26px rgba(8,7,5,.22) inset",padding:"30px",display:"flex",flexDirection:"column",gap:"26px",justifyContent:"space-between"}}>
<blockquote style={{margin:"0",fontWeight:"700",fontSize:"24px",lineHeight:"1.22",letterSpacing:"-.025em",textWrap:"pretty"}}>“Fast, opinionated, and they never once hid behind process. Rare combination.”</blockquote>
<figcaption style={{display:"flex",alignItems:"center",gap:"14px"}}>
<span style={{width:"52px",height:"52px",border:"1px solid var(--bw-fg)",borderRadius:"50%",background:"repeating-linear-gradient(135deg,#F2F2E8 0 8px,#FFFFFA 8px 16px)",flexShrink:"0",display:"block"}}></span>
<span style={{display:"flex",flexDirection:"column",gap:"3px"}}><span style={{fontWeight:"700",fontSize:"15px"}}>Marcus Vale</span><span style={{font:"500 11px/1.3 'JetBrains Mono',monospace",letterSpacing:".06em",opacity:".55"}}>Partner, Halden &amp; Co</span></span>
</figcaption>
</figure>
</div>
</div>
</section>
<section id="insights" style={{padding:"150px 0 0"}}>
<div style={{maxWidth:"1440px",margin:"0 auto",padding:"0 40px"}}>
<div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-end",gap:"40px",flexWrap:"wrap",paddingBottom:"56px"}}>
<div style={{display:"flex",flexDirection:"column",gap:"22px"}}>
<div data-bw-reveal="" style={{display:"flex",alignItems:"center",gap:"10px",font:"500 12px/1 'JetBrains Mono',monospace",letterSpacing:".14em",textTransform:"uppercase"}}>
<span style={{width:"7px",height:"7px",background:"#080705",display:"block"}}></span>Insights</div>
<h2 data-bw-reveal="" style={{fontFamily:"'Barlow Condensed',Archivo,sans-serif",margin:"0",fontWeight:"800",fontSize:"clamp(38px,5.4vw,88px)",lineHeight:".92",letterSpacing:"-.04em"}}>Notes from the studio.</h2>
</div>
<a data-bw-reveal="" href="#insights" style={{font:"500 12px/1 'JetBrains Mono',monospace",letterSpacing:".14em",textTransform:"uppercase",borderBottom:"1px solid #080705",paddingBottom:"6px"}}>All articles →</a>
</div>
<div data-bw-carousel="" style={{position:"relative",height:"min(62vh,480px)",perspective:"1600px",perspectiveOrigin:"50% 50%",transition:"perspective-origin .6s ease",touchAction:"pan-y",margin:"0 -12px"}}>
<article data-bw-slide="0" data-bw-insight-card="" style={{position:"absolute",left:"50%",top:"0",width:"min(430px,74vw)",height:"100%",transformOrigin:"50% 50%",transform:"translate(-50%,0) translateX(-108%) translateZ(-360px) rotateY(52deg) scale(0.88)",opacity:".38",zIndex:"8",transition:"transform .85s cubic-bezier(.16,1,.3,1),opacity .6s ease",cursor:"pointer",background:"linear-gradient(140deg,rgba(255,255,250,.74),rgba(255,255,250,.36))",border:"1px solid var(--bw-glass-bd)",borderRadius:"28px",backdropFilter:"blur(26px) saturate(180%)",WebkitBackdropFilter:"blur(26px) saturate(180%)",boxShadow:"0 34px 74px -34px rgba(8,7,5,.5),0 1px 0 rgba(255,255,250,.95) inset,0 -18px 34px -26px rgba(8,7,5,.22) inset",padding:"22px",display:"flex",flexDirection:"column",gap:"18px"}}>
<span style={{flex:"1",minHeight:"150px",border:"1px solid rgba(255,255,250,.62)",borderRadius:"20px",overflow:"hidden",display:"grid",placeItems:"center",boxShadow:"0 1px 0 rgba(255,255,250,.8) inset"}}><span data-bw-slide-img="" style={{display:"block",position:"relative",width:"100%",height:"100%",transition:"transform .85s cubic-bezier(.16,1,.3,1)"}}><img data-bw-insight-img="" src="/assets/insight-01-404.jpg" alt="A seated figure with a traffic cone for a head beneath a browser window showing an error page." decoding="async" loading="lazy" style={{position:"absolute",inset:"0",width:"100%",height:"100%",objectFit:"cover",objectPosition:"center top",borderRadius:"20px",display:"block",transition:"transform .7s cubic-bezier(.2,.8,.2,1)"}} /></span></span>
<span style={{display:"flex",justifyContent:"space-between",font:"500 11px/1 'JetBrains Mono',monospace",letterSpacing:".12em",textTransform:"uppercase",opacity:".55"}}><span>Jul 14, 2026</span><span>Strategy</span></span>
<span style={{fontWeight:"800",fontSize:"clamp(21px,2vw,27px)",lineHeight:"1.08",letterSpacing:"-.03em",textWrap:"pretty"}}>Your website isn't the pitch. It's the qualifier.</span>
<span style={{display:"flex",justifyContent:"space-between",alignItems:"center",gap:"16px",borderTop:"1px solid rgba(8,7,5,.12)",paddingTop:"16px",font:"500 11px/1 'JetBrains Mono',monospace",letterSpacing:".1em",textTransform:"uppercase"}}><span style={{opacity:".5"}}>6 min read</span><span>Read →</span></span>
</article>
<article data-bw-slide="1" data-bw-insight-card="" style={{position:"absolute",left:"50%",top:"0",width:"min(430px,74vw)",height:"100%",transformOrigin:"50% 50%",transform:"translate(-50%,0) translateX(-54%) translateZ(-180px) rotateY(26deg) scale(0.94)",opacity:".7",zIndex:"9",transition:"transform .85s cubic-bezier(.16,1,.3,1),opacity .6s ease",cursor:"pointer",background:"linear-gradient(140deg,rgba(255,255,250,.74),rgba(255,255,250,.36))",border:"1px solid var(--bw-glass-bd)",borderRadius:"28px",backdropFilter:"blur(26px) saturate(180%)",WebkitBackdropFilter:"blur(26px) saturate(180%)",boxShadow:"0 34px 74px -34px rgba(8,7,5,.5),0 1px 0 rgba(255,255,250,.95) inset,0 -18px 34px -26px rgba(8,7,5,.22) inset",padding:"22px",display:"flex",flexDirection:"column",gap:"18px"}}>
<span style={{flex:"1",minHeight:"150px",border:"1px solid rgba(255,255,250,.62)",borderRadius:"20px",overflow:"hidden",display:"grid",placeItems:"center",boxShadow:"0 1px 0 rgba(255,255,250,.8) inset"}}><span data-bw-slide-img="" style={{display:"block",position:"relative",width:"100%",height:"100%",transition:"transform .85s cubic-bezier(.16,1,.3,1)"}}><img data-bw-insight-img="" src="/assets/insight-02-tunnel-800.jpg" srcSet="/assets/insight-02-tunnel-800.jpg 800w, assets/insight-02-tunnel-1600.jpg 1600w" sizes="(max-width:600px) 74vw, 430px" alt="A figure standing at the centre of a tunnel lined with hundreds of glowing screens, receding to a bright point." decoding="async" loading="lazy" style={{position:"absolute",inset:"0",width:"100%",height:"100%",objectFit:"cover",objectPosition:"center center",borderRadius:"20px",display:"block",transition:"transform .7s cubic-bezier(.2,.8,.2,1)"}} /></span></span>
<span style={{display:"flex",justifyContent:"space-between",font:"500 11px/1 'JetBrains Mono',monospace",letterSpacing:".12em",textTransform:"uppercase",opacity:".55"}}><span>Jun 28, 2026</span><span>Interactive</span></span>
<span style={{fontWeight:"800",fontSize:"clamp(21px,2vw,27px)",lineHeight:"1.08",letterSpacing:"-.03em",textWrap:"pretty"}}>Five interactive assets that outperform a whitepaper.</span>
<span style={{display:"flex",justifyContent:"space-between",alignItems:"center",gap:"16px",borderTop:"1px solid rgba(8,7,5,.12)",paddingTop:"16px",font:"500 11px/1 'JetBrains Mono',monospace",letterSpacing:".1em",textTransform:"uppercase"}}><span style={{opacity:".5"}}>8 min read</span><span>Read →</span></span>
</article>
<article data-bw-slide="2" data-bw-insight-card="" style={{position:"absolute",left:"50%",top:"0",width:"min(430px,74vw)",height:"100%",transformOrigin:"50% 50%",transform:"translate(-50%,0) translateX(0%) translateZ(0px) rotateY(0deg) scale(1.00)",opacity:"1",zIndex:"10",transition:"transform .85s cubic-bezier(.16,1,.3,1),opacity .6s ease",cursor:"pointer",background:"linear-gradient(140deg,rgba(255,255,250,.74),rgba(255,255,250,.36))",border:"1px solid var(--bw-glass-bd)",borderRadius:"28px",backdropFilter:"blur(26px) saturate(180%)",WebkitBackdropFilter:"blur(26px) saturate(180%)",boxShadow:"0 34px 74px -34px rgba(8,7,5,.5),0 1px 0 rgba(255,255,250,.95) inset,0 -18px 34px -26px rgba(8,7,5,.22) inset",padding:"22px",display:"flex",flexDirection:"column",gap:"18px"}}>
<span style={{flex:"1",minHeight:"150px",border:"1px solid rgba(255,255,250,.62)",borderRadius:"20px",overflow:"hidden",display:"grid",placeItems:"center",boxShadow:"0 1px 0 rgba(255,255,250,.8) inset"}}><span data-bw-slide-img="" style={{display:"block",position:"relative",width:"100%",height:"100%",transition:"transform .85s cubic-bezier(.16,1,.3,1)"}}><img data-bw-insight-img="" src="/assets/insight-03-handset.jpg" alt="An outstretched arm holding a coiled orange telephone handset against an open sky, with the words Hey you! Call your client." decoding="async" loading="lazy" style={{position:"absolute",inset:"0",width:"100%",height:"100%",objectFit:"cover",objectPosition:"left center",transformOrigin:"left center",borderRadius:"20px",display:"block",transition:"transform .7s cubic-bezier(.2,.8,.2,1)"}} /></span></span>
<span style={{display:"flex",justifyContent:"space-between",font:"500 11px/1 'JetBrains Mono',monospace",letterSpacing:".12em",textTransform:"uppercase",opacity:".55"}}><span>Jun 09, 2026</span><span>Brand</span></span>
<span style={{fontWeight:"800",fontSize:"clamp(21px,2vw,27px)",lineHeight:"1.08",letterSpacing:"-.03em",textWrap:"pretty"}}>Rebrands don't fail at design. They fail at rollout.</span>
<span style={{display:"flex",justifyContent:"space-between",alignItems:"center",gap:"16px",borderTop:"1px solid rgba(8,7,5,.12)",paddingTop:"16px",font:"500 11px/1 'JetBrains Mono',monospace",letterSpacing:".1em",textTransform:"uppercase"}}><span style={{opacity:".5"}}>5 min read</span><span>Read →</span></span>
</article>
<article data-bw-slide="3" data-bw-insight-card="" style={{position:"absolute",left:"50%",top:"0",width:"min(430px,74vw)",height:"100%",transformOrigin:"50% 50%",transform:"translate(-50%,0) translateX(54%) translateZ(-180px) rotateY(-26deg) scale(0.94)",opacity:".7",zIndex:"9",transition:"transform .85s cubic-bezier(.16,1,.3,1),opacity .6s ease",cursor:"pointer",background:"linear-gradient(140deg,rgba(255,255,250,.74),rgba(255,255,250,.36))",border:"1px solid var(--bw-glass-bd)",borderRadius:"28px",backdropFilter:"blur(26px) saturate(180%)",WebkitBackdropFilter:"blur(26px) saturate(180%)",boxShadow:"0 34px 74px -34px rgba(8,7,5,.5),0 1px 0 rgba(255,255,250,.95) inset,0 -18px 34px -26px rgba(8,7,5,.22) inset",padding:"22px",display:"flex",flexDirection:"column",gap:"18px"}}>
<span style={{flex:"1",minHeight:"150px",border:"1px solid rgba(255,255,250,.62)",borderRadius:"20px",overflow:"hidden",display:"grid",placeItems:"center",boxShadow:"0 1px 0 rgba(255,255,250,.8) inset"}}><span data-bw-slide-img="" style={{display:"block",position:"relative",width:"100%",height:"100%",transition:"transform .85s cubic-bezier(.16,1,.3,1)"}}><img data-bw-insight-img="" src="/assets/insight-04-rewritten-800.jpg" srcSet="/assets/insight-04-rewritten-800.jpg 800w, assets/insight-04-rewritten-1600.jpg 1600w" sizes="(max-width:600px) 74vw, 430px" alt="A figure on a stepladder rolling fresh paint across a wall of coloured clouds, with the word REWRITTEN across the sky." decoding="async" loading="lazy" style={{position:"absolute",inset:"0",width:"100%",height:"100%",objectFit:"cover",objectPosition:"left center",borderRadius:"20px",display:"block",transition:"transform .7s cubic-bezier(.2,.8,.2,1)"}} /></span></span>
<span style={{display:"flex",justifyContent:"space-between",font:"500 11px/1 'JetBrains Mono',monospace",letterSpacing:".12em",textTransform:"uppercase",opacity:".55"}}><span>May 22, 2026</span><span>Sales</span></span>
<span style={{fontWeight:"800",fontSize:"clamp(21px,2vw,27px)",lineHeight:"1.08",letterSpacing:"-.03em",textWrap:"pretty"}}>Why your reps rewrite every deck you give them.</span>
<span style={{display:"flex",justifyContent:"space-between",alignItems:"center",gap:"16px",borderTop:"1px solid rgba(8,7,5,.12)",paddingTop:"16px",font:"500 11px/1 'JetBrains Mono',monospace",letterSpacing:".1em",textTransform:"uppercase"}}><span style={{opacity:".5"}}>7 min read</span><span>Read →</span></span>
</article>
<article data-bw-slide="4" data-bw-insight-card="" style={{position:"absolute",left:"50%",top:"0",width:"min(430px,74vw)",height:"100%",transformOrigin:"50% 50%",transform:"translate(-50%,0) translateX(108%) translateZ(-360px) rotateY(-52deg) scale(0.88)",opacity:".38",zIndex:"8",transition:"transform .85s cubic-bezier(.16,1,.3,1),opacity .6s ease",cursor:"pointer",background:"linear-gradient(140deg,rgba(255,255,250,.74),rgba(255,255,250,.36))",border:"1px solid var(--bw-glass-bd)",borderRadius:"28px",backdropFilter:"blur(26px) saturate(180%)",WebkitBackdropFilter:"blur(26px) saturate(180%)",boxShadow:"0 34px 74px -34px rgba(8,7,5,.5),0 1px 0 rgba(255,255,250,.95) inset,0 -18px 34px -26px rgba(8,7,5,.22) inset",padding:"22px",display:"flex",flexDirection:"column",gap:"18px"}}>
<span style={{flex:"1",minHeight:"150px",border:"1px solid rgba(255,255,250,.62)",borderRadius:"20px",overflow:"hidden",display:"grid",placeItems:"center",boxShadow:"0 1px 0 rgba(255,255,250,.8) inset"}}><span data-bw-slide-img="" style={{display:"block",position:"relative",width:"100%",height:"100%",transition:"transform .85s cubic-bezier(.16,1,.3,1)"}}><img data-bw-insight-img="" src="/assets/insight-05-tortoise-800.jpg" srcSet="/assets/insight-05-tortoise-800.jpg 800w, assets/insight-05-tortoise-1600.jpg 1600w" sizes="(max-width:600px) 74vw, 430px" alt="A tortoise standing on a pale skateboard with a stone hand held back from it, above the line Slow is the shortcut." decoding="async" loading="lazy" style={{position:"absolute",inset:"0",width:"100%",height:"100%",objectFit:"cover",objectPosition:"left center",transformOrigin:"left center",borderRadius:"20px",display:"block",transition:"transform .7s cubic-bezier(.2,.8,.2,1)"}} /></span></span>
<span style={{display:"flex",justifyContent:"space-between",font:"500 11px/1 'JetBrains Mono',monospace",letterSpacing:".12em",textTransform:"uppercase",opacity:".55"}}><span>May 04, 2026</span><span>Process</span></span>
<span style={{fontWeight:"800",fontSize:"clamp(21px,2vw,27px)",lineHeight:"1.08",letterSpacing:"-.03em",textWrap:"pretty"}}>The diagnose week: what two weeks of listening buys.</span>
<span style={{display:"flex",justifyContent:"space-between",alignItems:"center",gap:"16px",borderTop:"1px solid rgba(8,7,5,.12)",paddingTop:"16px",font:"500 11px/1 'JetBrains Mono',monospace",letterSpacing:".1em",textTransform:"uppercase"}}><span style={{opacity:".5"}}>4 min read</span><span>Read →</span></span>
</article>
</div>
<div style={{display:"flex",justifyContent:"space-between",alignItems:"center",gap:"26px",flexWrap:"wrap",paddingTop:"40px"}}>
<div style={{display:"flex",alignItems:"center",gap:"14px"}}>
<button className="home-p97 home-p98 home-p99" data-bw-carousel-prev="" aria-label="Previous article" style={{width:"54px",height:"54px",borderRadius:"50%",cursor:"pointer",color:"#080705",display:"grid",placeItems:"center",border:"1px solid rgba(255,255,250,.72)",background:"linear-gradient(140deg,rgba(255,255,250,.76),rgba(255,255,250,.34))",backdropFilter:"blur(20px) saturate(180%)",WebkitBackdropFilter:"blur(20px) saturate(180%)",boxShadow:"0 16px 34px -20px rgba(8,7,5,.5),0 1px 0 rgba(255,255,250,.95) inset",fontFamily:"'JetBrains Mono',monospace",fontSize:"16px",transition:"transform .18s cubic-bezier(.2,.7,.2,1),box-shadow .3s ease,background-color 200ms cubic-bezier(.2,.7,.2,1),border-color 200ms cubic-bezier(.2,.7,.2,1),color 200ms cubic-bezier(.2,.7,.2,1),opacity 200ms cubic-bezier(.2,.7,.2,1)"}}>←</button>
<button className="home-p100 home-p101 home-p102" data-bw-carousel-next="" aria-label="Next article" style={{width:"54px",height:"54px",borderRadius:"50%",cursor:"pointer",color:"#080705",display:"grid",placeItems:"center",border:"1px solid rgba(255,255,250,.72)",background:"linear-gradient(140deg,rgba(255,255,250,.76),rgba(255,255,250,.34))",backdropFilter:"blur(20px) saturate(180%)",WebkitBackdropFilter:"blur(20px) saturate(180%)",boxShadow:"0 16px 34px -20px rgba(8,7,5,.5),0 1px 0 rgba(255,255,250,.95) inset",fontFamily:"'JetBrains Mono',monospace",fontSize:"16px",transition:"transform .18s cubic-bezier(.2,.7,.2,1),box-shadow .3s ease,background-color 200ms cubic-bezier(.2,.7,.2,1),border-color 200ms cubic-bezier(.2,.7,.2,1),color 200ms cubic-bezier(.2,.7,.2,1),opacity 200ms cubic-bezier(.2,.7,.2,1)"}}>→</button>
<span style={{font:"500 11px/1 'JetBrains Mono',monospace",letterSpacing:".14em",textTransform:"uppercase",opacity:".45",paddingLeft:"8px"}}>Drag or use the arrows</span>
</div>
<div style={{display:"flex",alignItems:"center",gap:"18px"}}>
<div style={{display:"flex",alignItems:"center",gap:"8px"}}><button data-bw-dot-nav="0" aria-label="Article 1" style={{width:"8px",height:"8px",borderRadius:"999px",border:"1px solid rgba(255,255,250,.8)",background:"rgba(255,255,250,.5)",cursor:"pointer",padding:"0",transition:"width .4s cubic-bezier(.22,1,.36,1),background .4s ease,border-color 200ms cubic-bezier(.2,.7,.2,1),color 200ms cubic-bezier(.2,.7,.2,1),opacity 200ms cubic-bezier(.2,.7,.2,1)"}}></button><button data-bw-dot-nav="1" aria-label="Article 2" style={{width:"8px",height:"8px",borderRadius:"999px",border:"1px solid rgba(255,255,250,.8)",background:"rgba(255,255,250,.5)",cursor:"pointer",padding:"0",transition:"width .4s cubic-bezier(.22,1,.36,1),background .4s ease,border-color 200ms cubic-bezier(.2,.7,.2,1),color 200ms cubic-bezier(.2,.7,.2,1),opacity 200ms cubic-bezier(.2,.7,.2,1)"}}></button><button data-bw-dot-nav="2" aria-label="Article 3" style={{width:"26px",height:"8px",borderRadius:"999px",border:"1px solid rgba(255,255,250,.8)",background:"#080705",cursor:"pointer",padding:"0",transition:"width .4s cubic-bezier(.22,1,.36,1),background .4s ease,border-color 200ms cubic-bezier(.2,.7,.2,1),color 200ms cubic-bezier(.2,.7,.2,1),opacity 200ms cubic-bezier(.2,.7,.2,1)"}}></button><button data-bw-dot-nav="3" aria-label="Article 4" style={{width:"8px",height:"8px",borderRadius:"999px",border:"1px solid rgba(255,255,250,.8)",background:"rgba(255,255,250,.5)",cursor:"pointer",padding:"0",transition:"width .4s cubic-bezier(.22,1,.36,1),background .4s ease,border-color 200ms cubic-bezier(.2,.7,.2,1),color 200ms cubic-bezier(.2,.7,.2,1),opacity 200ms cubic-bezier(.2,.7,.2,1)"}}></button><button data-bw-dot-nav="4" aria-label="Article 5" style={{width:"8px",height:"8px",borderRadius:"999px",border:"1px solid rgba(255,255,250,.8)",background:"rgba(255,255,250,.5)",cursor:"pointer",padding:"0",transition:"width .4s cubic-bezier(.22,1,.36,1),background .4s ease,border-color 200ms cubic-bezier(.2,.7,.2,1),color 200ms cubic-bezier(.2,.7,.2,1),opacity 200ms cubic-bezier(.2,.7,.2,1)"}}></button></div>
<span data-bw-carousel-count="" style={{font:"500 11px/1 'JetBrains Mono',monospace",letterSpacing:".14em",opacity:".5"}}>03 / 05</span>
</div>
</div>
</div>
</section>
<section style={{padding:"150px 0 0",marginBottom:"6rem"}}>
<div style={{maxWidth:"1440px",margin:"0 auto",padding:"0 40px",display:"grid",gridTemplateColumns:".85fr 1.15fr",gap:"56px",alignItems:"start"}}>
<div style={{display:"flex",flexDirection:"column",gap:"22px",position:"sticky",top:"130px"}}>
<div data-bw-reveal="" style={{display:"flex",alignItems:"center",gap:"10px",font:"500 12px/1 'JetBrains Mono',monospace",letterSpacing:".14em",textTransform:"uppercase"}}>
<span style={{width:"7px",height:"7px",background:"#080705",display:"block"}}></span>FAQ</div>
<h2 data-bw-reveal="" style={{fontFamily:"'Barlow Condensed',Archivo,sans-serif",margin:"0",fontWeight:"800",fontSize:"clamp(34px,4.2vw,64px)",lineHeight:".94",letterSpacing:"-.04em"}}>Questions, answered straight.</h2>
</div>
<div style={{display:"flex",flexDirection:"column"}}>
<div style={{background:"var(--bw-glass)",border:"1px solid rgba(255,255,250,.66)",borderRadius:"24px",backdropFilter:"blur(26px) saturate(180%)",WebkitBackdropFilter:"blur(26px) saturate(180%)",boxShadow:"0 28px 64px -34px rgba(8,7,5,.42),0 1px 0 rgba(255,255,250,.9) inset,0 -18px 34px -26px rgba(8,7,5,.22) inset",padding:"0 24px",marginBottom:"12px"}}>
<button data-bw-faq="" style={{width:"100%",background:"none",border:"0",padding:"28px 0",display:"flex",alignItems:"center",gap:"22px",cursor:"pointer",textAlign:"left",color:"var(--fg)",fontFamily:"Inter,sans-serif"}}>
<span style={{font:"500 12px/1 'JetBrains Mono',monospace",letterSpacing:".14em",opacity:".5",flexShrink:"0"}}>01</span>
<span style={{fontWeight:"700",fontSize:"clamp(19px,1.7vw,26px)",letterSpacing:"-.025em",flex:"1"}}>What exactly does Blackware Labs do?</span>
<span data-bw-faq-icon="" style={{width:"15px",height:"15px",flexShrink:"0",position:"relative",transition:"transform .4s cubic-bezier(.22,1,.36,1)"}}><span style={{position:"absolute",top:"7px",left:"0",width:"15px",height:"1.5px",background:"var(--fg)",display:"block"}}></span><span style={{position:"absolute",left:"7px",top:"0",width:"1.5px",height:"15px",background:"var(--fg)",display:"block"}}></span></span>
</button>
<div data-bw-faq-panel="" style={{overflow:"hidden"}}><p style={{margin:"0",padding:"0 0 28px 52px",maxWidth:"60ch",fontSize:"16px",lineHeight:"1.55",fontWeight:"500",opacity:".7",textWrap:"pretty"}}>We're a marketing studio in four parts: brand design, websites and portfolios, interactive marketing assets, and B2B sales activation. Most clients start with one and end up using all four.</p></div>
</div>
<div style={{background:"var(--bw-glass)",border:"1px solid rgba(255,255,250,.66)",borderRadius:"24px",backdropFilter:"blur(26px) saturate(180%)",WebkitBackdropFilter:"blur(26px) saturate(180%)",boxShadow:"0 28px 64px -34px rgba(8,7,5,.42),0 1px 0 rgba(255,255,250,.9) inset,0 -18px 34px -26px rgba(8,7,5,.22) inset",padding:"0 24px",marginBottom:"12px"}}>
<button data-bw-faq="" style={{width:"100%",background:"none",border:"0",padding:"28px 0",display:"flex",alignItems:"center",gap:"22px",cursor:"pointer",textAlign:"left",color:"var(--fg)",fontFamily:"Inter,sans-serif"}}>
<span style={{font:"500 12px/1 'JetBrains Mono',monospace",letterSpacing:".14em",opacity:".5",flexShrink:"0"}}>02</span>
<span style={{fontWeight:"700",fontSize:"clamp(19px,1.7vw,26px)",letterSpacing:"-.025em",flex:"1"}}>How long does a project take?</span>
<span data-bw-faq-icon="" style={{width:"15px",height:"15px",flexShrink:"0",position:"relative",transition:"transform .4s cubic-bezier(.22,1,.36,1)"}}><span style={{position:"absolute",top:"7px",left:"0",width:"15px",height:"1.5px",background:"var(--fg)",display:"block"}}></span><span style={{position:"absolute",left:"7px",top:"0",width:"1.5px",height:"15px",background:"var(--fg)",display:"block"}}></span></span>
</button>
<div data-bw-faq-panel="" style={{overflow:"hidden"}}><p style={{margin:"0",padding:"0 0 28px 52px",maxWidth:"60ch",fontSize:"16px",lineHeight:"1.55",fontWeight:"500",opacity:".7",textWrap:"pretty"}}>A brand and site together runs eight to twelve weeks. Single interactive assets ship in three to five. Partner engagements run monthly with a rolling backlog.</p></div>
</div>
<div style={{background:"var(--bw-glass)",border:"1px solid rgba(255,255,250,.66)",borderRadius:"24px",backdropFilter:"blur(26px) saturate(180%)",WebkitBackdropFilter:"blur(26px) saturate(180%)",boxShadow:"0 28px 64px -34px rgba(8,7,5,.42),0 1px 0 rgba(255,255,250,.9) inset,0 -18px 34px -26px rgba(8,7,5,.22) inset",padding:"0 24px",marginBottom:"12px"}}>
<button data-bw-faq="" style={{width:"100%",background:"none",border:"0",padding:"28px 0",display:"flex",alignItems:"center",gap:"22px",cursor:"pointer",textAlign:"left",color:"var(--fg)",fontFamily:"Inter,sans-serif"}}>
<span style={{font:"500 12px/1 'JetBrains Mono',monospace",letterSpacing:".14em",opacity:".5",flexShrink:"0"}}>03</span>
<span style={{fontWeight:"700",fontSize:"clamp(19px,1.7vw,26px)",letterSpacing:"-.025em",flex:"1"}}>Do you work with startups or enterprises?</span>
<span data-bw-faq-icon="" style={{width:"15px",height:"15px",flexShrink:"0",position:"relative",transition:"transform .4s cubic-bezier(.22,1,.36,1)"}}><span style={{position:"absolute",top:"7px",left:"0",width:"15px",height:"1.5px",background:"var(--fg)",display:"block"}}></span><span style={{position:"absolute",left:"7px",top:"0",width:"1.5px",height:"15px",background:"var(--fg)",display:"block"}}></span></span>
</button>
<div data-bw-faq-panel="" style={{overflow:"hidden"}}><p style={{margin:"0",padding:"0 0 28px 52px",maxWidth:"60ch",fontSize:"16px",lineHeight:"1.55",fontWeight:"500",opacity:".7",textWrap:"pretty"}}>Both, as long as there's a named decision maker in the room. Our best work happens with teams of ten to five hundred selling something considered.</p></div>
</div>
<div style={{background:"var(--bw-glass)",border:"1px solid rgba(255,255,250,.66)",borderRadius:"24px",backdropFilter:"blur(26px) saturate(180%)",WebkitBackdropFilter:"blur(26px) saturate(180%)",boxShadow:"0 28px 64px -34px rgba(8,7,5,.42),0 1px 0 rgba(255,255,250,.9) inset,0 -18px 34px -26px rgba(8,7,5,.22) inset",padding:"0 24px",marginBottom:"12px"}}>
<button data-bw-faq="" style={{width:"100%",background:"none",border:"0",padding:"28px 0",display:"flex",alignItems:"center",gap:"22px",cursor:"pointer",textAlign:"left",color:"var(--fg)",fontFamily:"Inter,sans-serif"}}>
<span style={{font:"500 12px/1 'JetBrains Mono',monospace",letterSpacing:".14em",opacity:".5",flexShrink:"0"}}>04</span>
<span style={{fontWeight:"700",fontSize:"clamp(19px,1.7vw,26px)",letterSpacing:"-.025em",flex:"1"}}>Who builds the interactive assets?</span>
<span data-bw-faq-icon="" style={{width:"15px",height:"15px",flexShrink:"0",position:"relative",transition:"transform .4s cubic-bezier(.22,1,.36,1)"}}><span style={{position:"absolute",top:"7px",left:"0",width:"15px",height:"1.5px",background:"var(--fg)",display:"block"}}></span><span style={{position:"absolute",left:"7px",top:"0",width:"1.5px",height:"15px",background:"var(--fg)",display:"block"}}></span></span>
</button>
<div data-bw-faq-panel="" style={{overflow:"hidden"}}><p style={{margin:"0",padding:"0 0 28px 52px",maxWidth:"60ch",fontSize:"16px",lineHeight:"1.55",fontWeight:"500",opacity:".7",textWrap:"pretty"}}>We do — design and engineering sit in the same studio, so calculators, configurators, and product tours get built by the people who designed them.</p></div>
</div>
<div style={{background:"var(--bw-glass)",border:"1px solid rgba(255,255,250,.66)",borderRadius:"24px",backdropFilter:"blur(26px) saturate(180%)",WebkitBackdropFilter:"blur(26px) saturate(180%)",boxShadow:"0 28px 64px -34px rgba(8,7,5,.42),0 1px 0 rgba(255,255,250,.9) inset,0 -18px 34px -26px rgba(8,7,5,.22) inset",padding:"0 24px"}}>
<button data-bw-faq="" style={{width:"100%",background:"none",border:"0",padding:"28px 0",display:"flex",alignItems:"center",gap:"22px",cursor:"pointer",textAlign:"left",color:"var(--fg)",fontFamily:"Inter,sans-serif"}}>
<span style={{font:"500 12px/1 'JetBrains Mono',monospace",letterSpacing:".14em",opacity:".5",flexShrink:"0"}}>05</span>
<span style={{fontWeight:"700",fontSize:"clamp(19px,1.7vw,26px)",letterSpacing:"-.025em",flex:"1"}}>What happens after launch?</span>
<span data-bw-faq-icon="" style={{width:"15px",height:"15px",flexShrink:"0",position:"relative",transition:"transform .4s cubic-bezier(.22,1,.36,1)"}}><span style={{position:"absolute",top:"7px",left:"0",width:"15px",height:"1.5px",background:"var(--fg)",display:"block"}}></span><span style={{position:"absolute",left:"7px",top:"0",width:"1.5px",height:"15px",background:"var(--fg)",display:"block"}}></span></span>
</button>
<div data-bw-faq-panel="" style={{overflow:"hidden"}}><p style={{margin:"0",padding:"0 0 28px 52px",maxWidth:"60ch",fontSize:"16px",lineHeight:"1.55",fontWeight:"500",opacity:".7",textWrap:"pretty"}}>Ninety days of measurement and tuning is included in every project. After that you either run it yourselves with the system we hand over, or we stay on as partner.</p></div>
</div>
</div>
</div>
</section>
<SiteFooter />
</div>
</div>
</>);
}