"use client";

import "@/styles/pages/contact.css";
import { ContactJourney, ContactOffices, INQUIRIES } from "@/components/contact/contact-journey";
export default function ContactPage() {
  return (<>
<meta name="viewport" content="width=device-width, initial-scale=1" /><link rel="preconnect" href="https://fonts.googleapis.com" /><link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" /><link href="https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
<div style={{background:"var(--bw-bg)",color:"var(--bw-fg)",minHeight:"100vh"}}>
<header data-bw-nav="" style={{position:"fixed",top:"0",left:"0",right:"0",zIndex:"100",padding:"14px 0",background:"var(--bw-head)",borderBottom:"1px solid var(--bw-head-bd)",backdropFilter:"blur(24px) saturate(180%)",WebkitBackdropFilter:"blur(24px) saturate(180%)"}}>
<div data-bw-pad="" style={{maxWidth:"1440px",margin:"0 auto",padding:"0 40px",display:"flex",alignItems:"center",justifyContent:"space-between",gap:"32px"}}>
<a className="contact-p1 contact-p2" href="/" style={{display:"flex",alignItems:"center",gap:"10px",flexShrink:"0",transition:"transform 140ms cubic-bezier(.2,.7,.2,1),background-color 200ms cubic-bezier(.2,.7,.2,1),border-color 200ms cubic-bezier(.2,.7,.2,1),color 200ms cubic-bezier(.2,.7,.2,1),opacity 200ms cubic-bezier(.2,.7,.2,1)"}}>
<img data-bw-logo="" src="/assets/blackware-logo.svg" alt="Blackware Labs" style={{height:"38px",width:"auto",display:"block",flexShrink:"0"}} />
</a>
<div data-bw-crumb="" style={{display:"flex",alignItems:"center",gap:"14px",font:"500 11px/1 'JetBrains Mono',monospace",letterSpacing:".14em",textTransform:"uppercase",opacity:".5"}}>
<span style={{width:"22px",height:"1px",background:"var(--bw-fg)",display:"block"}}></span><a href="/#services">Get in touch</a></div>
<div data-bw-head-controls=""><button className="contact-p3 contact-p4 contact-p5" data-bw-theme-toggle="" type="button" aria-label="Switch between day and night" style={{width:"40px",height:"40px",borderRadius:"999px",border:"1px solid var(--bw-toggle-bd)",background:"transparent",color:"var(--bw-fg)",cursor:"pointer",display:"grid",placeItems:"center",flexShrink:"0",padding:"0",transition:"border-color .16s cubic-bezier(.2,.7,.2,1),color .16s cubic-bezier(.2,.7,.2,1),transform 140ms cubic-bezier(.2,.7,.2,1),background-color 200ms cubic-bezier(.2,.7,.2,1),opacity 200ms cubic-bezier(.2,.7,.2,1)"}}>
<svg data-bw-icon="sun" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2.4M12 19.6V22M2 12h2.4M19.6 12H22M4.9 4.9l1.7 1.7M17.4 17.4l1.7 1.7M19.1 4.9l-1.7 1.7M6.6 17.4l-1.7 1.7"></path></svg>
<svg data-bw-icon="moon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.5 14.6A8.6 8.6 0 0 1 9.4 3.5a8.6 8.6 0 1 0 11.1 11.1Z"></path></svg>
</button>
<a className="contact-p6 contact-p7 contact-p8" href={`mailto:${INQUIRIES}`} style={{display:"inline-flex",alignItems:"center",gap:"10px",backgroundColor:"#080705",color:"#FFFFFA",padding:"12px 20px",borderRadius:"999px",border:"1px solid var(--bw-rule)",fontSize:"13px",fontWeight:"600",letterSpacing:"-.01em",flexShrink:"0",transition:"transform 140ms cubic-bezier(.2,.7,.2,1),background-color 200ms cubic-bezier(.2,.7,.2,1),border-color 200ms cubic-bezier(.2,.7,.2,1),color 200ms cubic-bezier(.2,.7,.2,1),opacity 200ms cubic-bezier(.2,.7,.2,1)"}}>
<span style={{width:"6px",height:"6px",borderRadius:"50%",background:"#FFFFFA",animation:"bwBlink 2s steps(1,end) infinite"}}></span>{INQUIRIES}</a></div>
</div>
</header>
<section style={{padding:"170px 0 0"}}>
<div data-bw-pad="" style={{maxWidth:"1440px",margin:"0 auto",padding:"0 40px",display:"flex",flexDirection:"column",gap:"28px"}}>
<div style={{display:"flex",alignItems:"center",gap:"10px",font:"500 12px/1 'JetBrains Mono',monospace",letterSpacing:".14em",textTransform:"uppercase",animation:"bwRise .7s cubic-bezier(.16,1,.3,1) both"}}>
<span style={{width:"7px",height:"7px",background:"#080705",display:"block"}}></span>{"// Contact"}</div>
<h1 style={{margin:"0",maxWidth:"16ch",fontWeight:"900",letterSpacing:"-.05em",lineHeight:".9",fontSize:"clamp(46px,7.6vw,108px)",textTransform:"uppercase",animation:"bwRise .8s cubic-bezier(.16,1,.3,1) .06s both"}}>Three questions, then we talk.</h1>
<p style={{margin:"0",maxWidth:"56ch",fontSize:"18px",lineHeight:"1.55",fontWeight:"500",opacity:".7",textWrap:"pretty",animation:"bwRise .8s cubic-bezier(.16,1,.3,1) .12s both"}}>The same three things a strategist asks in the first five minutes of a call. Tap what fits, or say it in your own words. A real person reads every answer and replies within one working day.</p>
</div>
</section>
<section style={{padding:"64px 0 0"}}>
<div data-bw-pad="" style={{maxWidth:"1440px",margin:"0 auto",padding:"0 40px",borderTop:"1px solid var(--bw-rule)",paddingTop:"40px"}}>
<ContactJourney />
</div>
</section>
<section style={{padding:"104px 0 120px"}}>
<div data-bw-pad="" style={{maxWidth:"1440px",margin:"0 auto",padding:"0 40px",display:"flex",flexDirection:"column",gap:"28px"}}>
<span style={{font:"500 11px/1 'JetBrains Mono',monospace",letterSpacing:".14em",textTransform:"uppercase",opacity:".5"}}>{"// Two homes, remote worldwide"}</span>
<ContactOffices />
</div>
</section>
<section style={{padding:"0 0 80px"}}>
<div data-bw-pad="" style={{maxWidth:"1440px",margin:"0 auto",padding:"0 40px",display:"flex",flexDirection:"column",gap:"24px"}}>
<div style={{display:"flex",justifyContent:"space-between",gap:"24px",flexWrap:"wrap",borderTop:"1px solid var(--bw-rule)",paddingTop:"24px",font:"500 11px/1 'JetBrains Mono',monospace",letterSpacing:".14em",textTransform:"uppercase",opacity:".5"}}>
<span>© 2026 Blackware Labs</span>
<div style={{display:"flex",gap:"20px"}}>
<a className="contact-p18 contact-p19" href="/about">About</a>
<a className="contact-p20 contact-p21" href="/privacy-policy">Privacy Policy</a>
<a className="contact-p22 contact-p23" href="/terms-and-conditions">Terms &amp; Conditions</a>
<a className="contact-p24 contact-p25" href="/">← Back to homepage</a>
</div>
</div>
</div>
</section>
</div>
</>);
}