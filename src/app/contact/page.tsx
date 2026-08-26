"use client";

import "@/styles/pages/contact.css";
import { useContactPageLogic } from "@/generated/contact.logic";
export default function ContactPage() {
  const v = useContactPageLogic();
  return (<>
<meta name="viewport" content="width=device-width, initial-scale=1" /><link rel="preconnect" href="https://fonts.googleapis.com" /><link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" /><link href="https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
<div style={{background:"var(--bw-bg)",color:"var(--bw-fg)",minHeight:"100vh"}}>
<header style={{position:"sticky",top:"0",zIndex:"100",padding:"14px 0",background:"var(--bw-head)",borderBottom:"1px solid var(--bw-head-bd)",backdropFilter:"blur(24px) saturate(180%)",WebkitBackdropFilter:"blur(24px) saturate(180%)"}}>
<div style={{maxWidth:"1440px",margin:"0 auto",padding:"0 40px",display:"flex",alignItems:"center",justifyContent:"space-between",gap:"32px"}}>
<a className="contact-p1 contact-p2" href="/" style={{display:"flex",alignItems:"center",gap:"10px",flexShrink:"0",transition:"transform 140ms cubic-bezier(.2,.7,.2,1)"}}>
<img data-bw-logo="" src="/assets/blackware-logo.svg" alt="Blackware Labs" style={{height:"38px",width:"auto",display:"block",flexShrink:"0"}} />
</a>
<div style={{display:"flex",alignItems:"center",gap:"14px",font:"500 11px/1 'JetBrains Mono',monospace",letterSpacing:".14em",textTransform:"uppercase",opacity:".5"}}>
<span style={{width:"22px",height:"1px",background:"var(--bw-fg)",display:"block"}}></span>Get in touch</div>
<button className="contact-p3 contact-p4 contact-p5" data-bw-theme-toggle="" type="button" aria-label="Switch between day and night" style={{width:"40px",height:"40px",borderRadius:"999px",border:"1px solid var(--bw-toggle-bd)",background:"transparent",color:"var(--bw-fg)",cursor:"pointer",display:"grid",placeItems:"center",flexShrink:"0",padding:"0",transition:"border-color .16s cubic-bezier(.2,.7,.2,1),color .16s cubic-bezier(.2,.7,.2,1),transform 140ms cubic-bezier(.2,.7,.2,1)"}}>
<svg data-bw-icon="sun" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2.4M12 19.6V22M2 12h2.4M19.6 12H22M4.9 4.9l1.7 1.7M17.4 17.4l1.7 1.7M19.1 4.9l-1.7 1.7M6.6 17.4l-1.7 1.7"></path></svg>
<svg data-bw-icon="moon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.5 14.6A8.6 8.6 0 0 1 9.4 3.5a8.6 8.6 0 1 0 11.1 11.1Z"></path></svg>
</button>
<a className="contact-p6 contact-p7 contact-p8" href="mailto:hello@blackwarelabs.com" style={{display:"inline-flex",alignItems:"center",gap:"10px",backgroundColor:"#080705",color:"#FFFFFA",padding:"12px 20px",borderRadius:"999px",border:"1px solid var(--bw-rule)",fontSize:"13px",fontWeight:"600",letterSpacing:"-.01em",flexShrink:"0",transition:"transform 140ms cubic-bezier(.2,.7,.2,1)"}}>
<span style={{width:"6px",height:"6px",borderRadius:"50%",background:"#FFFFFA",animation:"bwBlink 2s steps(1,end) infinite"}}></span>hello@blackwarelabs.com</a>
</div>
</header>
<section style={{padding:"96px 0 0"}}>
<div style={{maxWidth:"1440px",margin:"0 auto",padding:"0 40px",display:"flex",flexDirection:"column",gap:"28px"}}>
<div style={{display:"flex",alignItems:"center",gap:"10px",font:"500 12px/1 'JetBrains Mono',monospace",letterSpacing:".14em",textTransform:"uppercase",animation:"bwRise .7s cubic-bezier(.16,1,.3,1) both"}}>
<span style={{width:"7px",height:"7px",background:"#080705",display:"block"}}></span>// Contact</div>
<h1 style={{margin:"0",maxWidth:"18ch",fontWeight:"900",letterSpacing:"-.05em",lineHeight:".9",fontSize:"clamp(46px,7.6vw,108px)",textTransform:"uppercase",animation:"bwRise .8s cubic-bezier(.16,1,.3,1) .06s both"}}>Tell us what you're selling.</h1>
<p style={{margin:"0",maxWidth:"56ch",fontSize:"18px",lineHeight:"1.55",fontWeight:"500",opacity:".7",textWrap:"pretty",animation:"bwRise .8s cubic-bezier(.16,1,.3,1) .12s both"}}>Leave a few details and a strategist comes back within one working day with a first read and two ways in. No deck, no discovery call to book a discovery call.</p>
</div>
</section>
<section style={{padding:"72px 0 120px"}}>
<div style={{maxWidth:"1440px",margin:"0 auto",padding:"0 40px",display:"grid",gridTemplateColumns:"1.1fr 1fr",gap:"80px"}}>
<form data-bw-contact-form="" style={{display:"flex",flexDirection:"column",gap:"20px",borderTop:"1px solid var(--bw-rule)",paddingTop:"36px"}}>
<div style={{display:"flex",flexDirection:"column",gap:"8px"}}>
<label style={{font:"500 11px/1 'JetBrains Mono',monospace",letterSpacing:".12em",textTransform:"uppercase",opacity:".55"}}>Name</label>
<input data-bw-field="" type="text" required={true} placeholder="Jordan Smith" style={{border:"0",borderBottom:"1px solid var(--bw-rule)",background:"none",color:"var(--bw-fg)",fontSize:"18px",fontWeight:"500",padding:"10px 0",outline:"none"}} />
</div>
<div style={{display:"flex",flexDirection:"column",gap:"8px"}}>
<label style={{font:"500 11px/1 'JetBrains Mono',monospace",letterSpacing:".12em",textTransform:"uppercase",opacity:".55"}}>Work email</label>
<input data-bw-field="" type="email" required={true} placeholder="jordan@company.com" style={{border:"0",borderBottom:"1px solid var(--bw-rule)",background:"none",color:"var(--bw-fg)",fontSize:"18px",fontWeight:"500",padding:"10px 0",outline:"none"}} />
</div>
<div style={{display:"flex",flexDirection:"column",gap:"8px"}}>
<label style={{font:"500 11px/1 'JetBrains Mono',monospace",letterSpacing:".12em",textTransform:"uppercase",opacity:".55"}}>Company</label>
<input data-bw-field="" type="text" placeholder="Company name" style={{border:"0",borderBottom:"1px solid var(--bw-rule)",background:"none",color:"var(--bw-fg)",fontSize:"18px",fontWeight:"500",padding:"10px 0",outline:"none"}} />
</div>
<div style={{display:"flex",flexDirection:"column",gap:"8px"}}>
<label style={{font:"500 11px/1 'JetBrains Mono',monospace",letterSpacing:".12em",textTransform:"uppercase",opacity:".55"}}>What are you trying to fix?</label>
<textarea data-bw-field="" rows={4} required={true} placeholder="A sentence or two is enough." style={{border:"0",borderBottom:"1px solid var(--bw-rule)",background:"none",color:"var(--bw-fg)",fontSize:"18px",fontWeight:"500",padding:"10px 0",outline:"none",resize:"vertical"}}></textarea>
</div>
<div style={{paddingTop:"8px"}}>
<button className="contact-p9 contact-p10 contact-p11" type="submit" data-bw-contact-submit="" style={{display:"inline-flex",alignItems:"center",gap:"12px",padding:"18px 28px",borderRadius:"999px",color:"#FFFFFA",fontSize:"15px",fontWeight:"600",letterSpacing:"-.01em",background:"#080705",border:"0",cursor:"pointer",transition:"transform 140ms cubic-bezier(.2,.7,.2,1)"}}>Send it<span style={{fontFamily:"'JetBrains Mono',monospace"}}>→</span></button>
</div>
<p data-bw-contact-confirm="" style={{display:"none",margin:"0",fontSize:"15px",lineHeight:"1.5",fontWeight:"500",opacity:".7"}}>Got it. We'll be in touch within one working day.</p>
</form>
<div style={{display:"flex",flexDirection:"column",gap:"36px"}}>
<div style={{display:"flex",flexDirection:"column",gap:"8px",borderTop:"1px solid var(--bw-rule)",paddingTop:"36px"}}>
<span style={{font:"500 11px/1 'JetBrains Mono',monospace",letterSpacing:".14em",textTransform:"uppercase",opacity:".5"}}>Email</span>
<a className="contact-p12 contact-p13 contact-p14" href="mailto:hello@blackwarelabs.com" style={{fontSize:"20px",fontWeight:"700",letterSpacing:"-.02em",transition:"transform 140ms cubic-bezier(.2,.7,.2,1)"}}>hello@blackwarelabs.com</a>
</div>
<div style={{display:"flex",flexDirection:"column",gap:"8px"}}>
<span style={{font:"500 11px/1 'JetBrains Mono',monospace",letterSpacing:".14em",textTransform:"uppercase",opacity:".5"}}>Book directly</span>
<a className="contact-p15 contact-p16 contact-p17" href="/#contact" style={{fontSize:"20px",fontWeight:"700",letterSpacing:"-.02em",transition:"transform 140ms cubic-bezier(.2,.7,.2,1)"}}>Book a call →</a>
</div>
<div style={{display:"flex",flexDirection:"column",gap:"8px"}}>
<span style={{font:"500 11px/1 'JetBrains Mono',monospace",letterSpacing:".14em",textTransform:"uppercase",opacity:".5"}}>Studio</span>
<span style={{fontSize:"16px",fontWeight:"500",opacity:".75"}}>Brooklyn, NY — remote worldwide</span>
</div>
<div style={{display:"flex",flexDirection:"column",gap:"8px"}}>
<span style={{font:"500 11px/1 'JetBrains Mono',monospace",letterSpacing:".14em",textTransform:"uppercase",opacity:".5"}}>Availability</span>
<span style={{fontSize:"16px",fontWeight:"500",opacity:".75"}}>Two studio slots open for Q4 2026.</span>
</div>
</div>
</div>
</section>
<section style={{padding:"0 0 80px"}}>
<div style={{maxWidth:"1440px",margin:"0 auto",padding:"0 40px",display:"flex",flexDirection:"column",gap:"24px"}}>
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