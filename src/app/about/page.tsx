"use client";

import "@/styles/pages/about.css";
export default function AboutPage() {
  const v: any = { showPricing: true };
  return (<>
<meta name="viewport" content="width=device-width, initial-scale=1" /><link rel="preconnect" href="https://fonts.googleapis.com" /><link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" /><link href="https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
<div style={{background:"var(--bw-bg)",color:"var(--bw-fg)",minHeight:"100vh"}}>
<header data-bw-nav="" style={{position:"fixed",top:"0",left:"0",right:"0",zIndex:"100",padding:"14px 0",background:"var(--bw-head)",borderBottom:"1px solid var(--bw-head-bd)",backdropFilter:"blur(24px) saturate(180%)",WebkitBackdropFilter:"blur(24px) saturate(180%)"}}>
<div style={{maxWidth:"1440px",margin:"0 auto",padding:"0 40px",display:"flex",alignItems:"center",justifyContent:"space-between",gap:"32px"}}>
<a className="about-p1 about-p2" href="/" style={{display:"flex",alignItems:"center",gap:"10px",flexShrink:"0",transition:"transform 140ms cubic-bezier(.2,.7,.2,1),background-color 200ms cubic-bezier(.2,.7,.2,1),border-color 200ms cubic-bezier(.2,.7,.2,1),color 200ms cubic-bezier(.2,.7,.2,1),opacity 200ms cubic-bezier(.2,.7,.2,1)"}}>
<img data-bw-logo="" src="/assets/blackware-logo.svg" alt="Blackware Labs" style={{height:"38px",width:"auto",display:"block",flexShrink:"0"}} />
</a>
<div data-bw-crumb="" style={{display:"flex",alignItems:"center",gap:"14px",font:"500 11px/1 'JetBrains Mono',monospace",letterSpacing:".14em",textTransform:"uppercase",opacity:".5"}}>
<span style={{width:"22px",height:"1px",background:"var(--bw-fg)",display:"block"}}></span><a href="/#services">About Blackware Labs</a></div>
<div data-bw-head-controls=""><button className="about-p3 about-p4 about-p5" data-bw-theme-toggle="" type="button" aria-label="Switch between day and night" style={{width:"40px",height:"40px",borderRadius:"999px",border:"1px solid var(--bw-toggle-bd)",background:"transparent",color:"var(--bw-fg)",cursor:"pointer",display:"grid",placeItems:"center",flexShrink:"0",padding:"0",transition:"border-color .16s cubic-bezier(.2,.7,.2,1),color .16s cubic-bezier(.2,.7,.2,1),transform 140ms cubic-bezier(.2,.7,.2,1),background-color 200ms cubic-bezier(.2,.7,.2,1),opacity 200ms cubic-bezier(.2,.7,.2,1)"}}>
<svg data-bw-icon="sun" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2.4M12 19.6V22M2 12h2.4M19.6 12H22M4.9 4.9l1.7 1.7M17.4 17.4l1.7 1.7M19.1 4.9l-1.7 1.7M6.6 17.4l-1.7 1.7"></path></svg>
<svg data-bw-icon="moon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.5 14.6A8.6 8.6 0 0 1 9.4 3.5a8.6 8.6 0 1 0 11.1 11.1Z"></path></svg>
</button>
<a className="about-p6 about-p7 about-p8" data-bw-cta="" href="/#contact" style={{display:"inline-flex",alignItems:"center",gap:"10px",backgroundColor:"#080705",color:"#FFFFFA",padding:"12px 20px",borderRadius:"999px",border:"1px solid var(--bw-rule)",fontSize:"13px",fontWeight:"600",letterSpacing:"-.01em",flexShrink:"0",transition:"transform 140ms cubic-bezier(.2,.7,.2,1),background-color 200ms cubic-bezier(.2,.7,.2,1),border-color 200ms cubic-bezier(.2,.7,.2,1),color 200ms cubic-bezier(.2,.7,.2,1),opacity 200ms cubic-bezier(.2,.7,.2,1)"}}>
<span style={{width:"6px",height:"6px",borderRadius:"50%",background:"#FFFFFA",animation:"bwBlink 2s steps(1,end) infinite"}}></span>Book a call</a></div>
</div>
</header>
<section style={{padding:"170px 0 0"}}>
<div style={{maxWidth:"1100px",margin:"0 auto",padding:"0 40px",display:"flex",flexDirection:"column",gap:"30px"}}>
<div style={{display:"flex",alignItems:"center",gap:"10px",font:"500 12px/1 'JetBrains Mono',monospace",letterSpacing:".14em",textTransform:"uppercase",animation:"bwRise .7s cubic-bezier(.16,1,.3,1) both"}}>
<span style={{width:"7px",height:"7px",background:"#080705",display:"block"}}></span>// About</div>
<h1 style={{margin:"0",maxWidth:"16ch",fontWeight:"900",letterSpacing:"-.05em",lineHeight:".9",fontSize:"clamp(48px,8vw,120px)",textTransform:"uppercase",animation:"bwRise .8s cubic-bezier(.16,1,.3,1) .06s both"}}>A studio built for pipeline.</h1>
<p style={{margin:"0",maxWidth:"60ch",fontSize:"19px",lineHeight:"1.55",fontWeight:"500",opacity:".72",textWrap:"pretty",animation:"bwRise .8s cubic-bezier(.16,1,.3,1) .12s both"}}>We're a marketing studio in four parts: brand design, websites and portfolios, interactive marketing assets, and B2B sales activation. Most clients start with one and end up using all four.</p>
</div>
</section>
<section style={{padding:"96px 0 0"}}>
<div style={{maxWidth:"1100px",margin:"0 auto",padding:"0 40px",display:"flex",flexDirection:"column",gap:"44px"}}>
<h2 style={{margin:"0",fontWeight:"800",fontSize:"clamp(30px,4vw,52px)",lineHeight:".94",letterSpacing:"-.04em"}}>What we do.</h2>
<div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(230px,1fr))",gap:"32px",borderTop:"1px solid var(--bw-rule)",paddingTop:"32px"}}>
<div style={{display:"flex",flexDirection:"column",gap:"8px"}}>
<span style={{font:"500 11px/1 'JetBrains Mono',monospace",letterSpacing:".14em",textTransform:"uppercase",opacity:".5"}}>01 — Brand design</span>
<p style={{margin:"0",fontSize:"15px",lineHeight:"1.55",fontWeight:"500",opacity:".75"}}>Identity systems for companies that need to look like they belong in the room.</p>
</div>
<div style={{display:"flex",flexDirection:"column",gap:"8px"}}>
<span style={{font:"500 11px/1 'JetBrains Mono',monospace",letterSpacing:".14em",textTransform:"uppercase",opacity:".5"}}>02 — Website &amp; portfolio</span>
<p style={{margin:"0",fontSize:"15px",lineHeight:"1.55",fontWeight:"500",opacity:".75"}}>Sites built to close, not just to exist.</p>
</div>
<div style={{display:"flex",flexDirection:"column",gap:"8px"}}>
<span style={{font:"500 11px/1 'JetBrains Mono',monospace",letterSpacing:".14em",textTransform:"uppercase",opacity:".5"}}>03 — Interactive assets</span>
<p style={{margin:"0",fontSize:"15px",lineHeight:"1.55",fontWeight:"500",opacity:".75"}}>Calculators, configurators, and diagnostics that outperform a slide deck.</p>
</div>
<div style={{display:"flex",flexDirection:"column",gap:"8px"}}>
<span style={{font:"500 11px/1 'JetBrains Mono',monospace",letterSpacing:".14em",textTransform:"uppercase",opacity:".5"}}>04 — B2B sales activation</span>
<p style={{margin:"0",fontSize:"15px",lineHeight:"1.55",fontWeight:"500",opacity:".75"}}>Answer engine placement, outbound, lead routing, account intelligence, and self-serve buying — the machinery that turns attention into pipeline.</p>
</div>
</div>
</div>
</section>
<section style={{padding:"96px 0 0"}}>
<div style={{maxWidth:"1100px",margin:"0 auto",padding:"0 40px",display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",gap:"44px",borderTop:"1px solid var(--bw-rule)",paddingTop:"44px"}}>
<div>
<h2 style={{margin:"0 0 14px",fontWeight:"800",fontSize:"clamp(26px,3.4vw,38px)",lineHeight:"1",letterSpacing:"-.03em"}}>How we work.</h2>
<p style={{margin:"0",fontSize:"15px",lineHeight:"1.6",fontWeight:"500",opacity:".75",maxWidth:"44ch"}}>Senior people, no deck-jockeys. We diagnose before we design — most engagements open with a two-week listening phase so the work is built on how your reps actually sell, not a template.</p>
</div>
<div>
<h2 style={{margin:"0 0 14px",fontWeight:"800",fontSize:"clamp(26px,3.4vw,38px)",lineHeight:"1",letterSpacing:"-.03em"}}>Who we work with.</h2>
<p style={{margin:"0",fontSize:"15px",lineHeight:"1.6",fontWeight:"500",opacity:".75",maxWidth:"44ch"}}>B2B revenue teams — mostly Series A through growth-stage — who are done watching a pipeline built on outbound spray and a website nobody reads.</p>
</div>
</div>
</section>
<section style={{padding:"120px 0 96px"}}>
<div style={{maxWidth:"1100px",margin:"0 auto",padding:"0 40px",display:"flex",flexDirection:"column",gap:"24px"}}>
<div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-end",gap:"24px",flexWrap:"wrap"}}>
<h2 style={{margin:"0",fontWeight:"900",fontSize:"clamp(38px,6vw,84px)",lineHeight:".9",letterSpacing:"-.045em",textTransform:"uppercase",maxWidth:"14ch"}}>Let's make it sell.</h2>
<a className="about-p9 about-p10 about-p11" href="/contact" style={{display:"inline-flex",alignItems:"center",gap:"12px",padding:"18px 28px",borderRadius:"999px",color:"#FFFFFA",fontSize:"15px",fontWeight:"600",letterSpacing:"-.01em",background:"#080705",transition:"transform 140ms cubic-bezier(.2,.7,.2,1),background-color 200ms cubic-bezier(.2,.7,.2,1),border-color 200ms cubic-bezier(.2,.7,.2,1),color 200ms cubic-bezier(.2,.7,.2,1),opacity 200ms cubic-bezier(.2,.7,.2,1)"}}>Start a conversation<span style={{fontFamily:"'JetBrains Mono',monospace"}}>→</span></a>
</div>
<div style={{display:"flex",gap:"12px",flexWrap:"wrap",borderTop:"1px solid var(--bw-rule)",paddingTop:"28px"}}>
<a className="about-p12 about-p13 about-p14" href="/website-and-portfolio" style={{border:"1px solid var(--bw-fg)",borderRadius:"999px",padding:"14px 22px",fontSize:"14px",fontWeight:"600",transition:"transform 140ms cubic-bezier(.2,.7,.2,1),background-color 200ms cubic-bezier(.2,.7,.2,1),border-color 200ms cubic-bezier(.2,.7,.2,1),color 200ms cubic-bezier(.2,.7,.2,1),opacity 200ms cubic-bezier(.2,.7,.2,1)"}}>Website &amp; portfolio</a>
<a className="about-p15 about-p16 about-p17" href="/interactive-assets" style={{border:"1px solid var(--bw-fg)",borderRadius:"999px",padding:"14px 22px",fontSize:"14px",fontWeight:"600",transition:"transform 140ms cubic-bezier(.2,.7,.2,1),background-color 200ms cubic-bezier(.2,.7,.2,1),border-color 200ms cubic-bezier(.2,.7,.2,1),color 200ms cubic-bezier(.2,.7,.2,1),opacity 200ms cubic-bezier(.2,.7,.2,1)"}}>Interactive assets</a>
<a className="about-p18 about-p19 about-p20" href="/brand-design" style={{border:"1px solid var(--bw-fg)",borderRadius:"999px",padding:"14px 22px",fontSize:"14px",fontWeight:"600",transition:"transform 140ms cubic-bezier(.2,.7,.2,1),background-color 200ms cubic-bezier(.2,.7,.2,1),border-color 200ms cubic-bezier(.2,.7,.2,1),color 200ms cubic-bezier(.2,.7,.2,1),opacity 200ms cubic-bezier(.2,.7,.2,1)"}}>Brand design</a>
<a className="about-p21 about-p22 about-p23" href="/b2b-answer-engine" style={{border:"1px solid var(--bw-fg)",borderRadius:"999px",padding:"14px 22px",fontSize:"14px",fontWeight:"600",transition:"transform 140ms cubic-bezier(.2,.7,.2,1),background-color 200ms cubic-bezier(.2,.7,.2,1),border-color 200ms cubic-bezier(.2,.7,.2,1),color 200ms cubic-bezier(.2,.7,.2,1),opacity 200ms cubic-bezier(.2,.7,.2,1)"}}>Answer engine placement</a>
<a className="about-p24 about-p25 about-p26" href="/lead-detective" style={{border:"1px solid var(--bw-fg)",borderRadius:"999px",padding:"14px 22px",fontSize:"14px",fontWeight:"600",transition:"transform 140ms cubic-bezier(.2,.7,.2,1),background-color 200ms cubic-bezier(.2,.7,.2,1),border-color 200ms cubic-bezier(.2,.7,.2,1),color 200ms cubic-bezier(.2,.7,.2,1),opacity 200ms cubic-bezier(.2,.7,.2,1)"}}>Lead detective</a>
<a className="about-p27 about-p28 about-p29" href="/mypen" style={{border:"1px solid var(--bw-fg)",borderRadius:"999px",padding:"14px 22px",fontSize:"14px",fontWeight:"600",transition:"transform 140ms cubic-bezier(.2,.7,.2,1),background-color 200ms cubic-bezier(.2,.7,.2,1),border-color 200ms cubic-bezier(.2,.7,.2,1),color 200ms cubic-bezier(.2,.7,.2,1),opacity 200ms cubic-bezier(.2,.7,.2,1)"}}>Mypen</a>
<a className="about-p30 about-p31 about-p32" href="/researchify" style={{border:"1px solid var(--bw-fg)",borderRadius:"999px",padding:"14px 22px",fontSize:"14px",fontWeight:"600",transition:"transform 140ms cubic-bezier(.2,.7,.2,1),background-color 200ms cubic-bezier(.2,.7,.2,1),border-color 200ms cubic-bezier(.2,.7,.2,1),color 200ms cubic-bezier(.2,.7,.2,1),opacity 200ms cubic-bezier(.2,.7,.2,1)"}}>Researchify</a>
<a className="about-p33 about-p34 about-p35" href="/self-serve-buying" style={{border:"1px solid var(--bw-fg)",borderRadius:"999px",padding:"14px 22px",fontSize:"14px",fontWeight:"600",transition:"transform 140ms cubic-bezier(.2,.7,.2,1),background-color 200ms cubic-bezier(.2,.7,.2,1),border-color 200ms cubic-bezier(.2,.7,.2,1),color 200ms cubic-bezier(.2,.7,.2,1),opacity 200ms cubic-bezier(.2,.7,.2,1)"}}>Self-serve buying</a>
</div>
<div style={{display:"flex",justifyContent:"space-between",gap:"24px",flexWrap:"wrap",borderTop:"1px solid var(--bw-rule)",paddingTop:"24px",font:"500 11px/1 'JetBrains Mono',monospace",letterSpacing:".14em",textTransform:"uppercase",opacity:".5"}}>
<span>© 2026 Blackware Labs</span>
<div style={{display:"flex",gap:"20px"}}>
<a className="about-p36 about-p37" href="/contact">Contact</a>
<a className="about-p38 about-p39" href="/privacy-policy">Privacy Policy</a>
<a className="about-p40 about-p41" href="/terms-and-conditions">Terms &amp; Conditions</a>
<a className="about-p42 about-p43" href="/">← Back to homepage</a>
</div>
</div>
</div>
</section>
</div>
</>);
}