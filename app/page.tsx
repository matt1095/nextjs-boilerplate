"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function Home() {
  return (
    <main>
      <header className="nav">
        <div className="container">
          <div className="brand">Repute</div>
          <a href="#cta" className="btn btn-dark">Start free</a>
        </div>
      </header>

      <section className="hero">
        <div className="blob" aria-hidden></div>
        <div className="container hero-inner">
          <motion.h1 initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} transition={{duration:.5}}>
            AI replies for Google & Yelp reviews
          </motion.h1>
          <p className="lead">
            Repute drafts warm, on-brand responses to every review—good, bad, or neutral—so you protect your reputation in minutes, not hours.
          </p>
          <div className="cta-row">
            <a href="#cta" className="btn btn-gradient">Start free</a>
            <a href="#how" className="btn btn-outline">See how it works</a>
          </div>
        </div>
      </section>

      <section id="how" className="section">
        <div className="container">
          <h2>How it works</h2>
          <div className="grid">
            <Card title="Paste a review" desc="Drop in any Google/Yelp/Facebook/TripAdvisor review." />
            <Card title="Pick the tone" desc="Friendly, professional, apologetic, cheerful." />
            <Card title="Copy & post" desc="One click to copy. Edit if you want. Done." />
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <h2>Why teams use Repute</h2>
          <div className="grid">
            <Card title="Consistent tone" desc="On-brand replies every time." />
            <Card title="Ridiculously fast" desc="Clear your weekly reviews in under 5 minutes." />
            <Card title="Multilingual" desc="Reply in English or French." />
          </div>
        </div>
      </section>

      <section id="pricing" className="section">
        <div className="container">
          <h2>Simple pricing</h2>
          <div className="pricing">
            <Price name="Basic" price="$29/mo" items={["Unlimited replies","Tone presets","Copy to clipboard"]}/>
            <Price name="Pro" price="$49/mo" items={["Everything in Basic","Saved templates","Multi-language"]}/>
          </div>
        </div>
      </section>

      <section id="cta" className="cta">
        <div className="container cta-inner">
          <h3>Ready to reply like a pro?</h3>
          <p>Start a free trial—no credit card required.</p>
          <div className="cta-row">
            <a href="#" className="btn btn-light">Start free</a>
            <a href="#pricing" className="btn btn-outline-light">See pricing</a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-inner">
          <p>© {new Date().getFullYear()} Repute</p>
          <div className="links">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#how">Help</a>
          </div>
        </div>
      </footer>

      <style jsx>{`
        *{box-sizing:border-box} html,body,main{margin:0;padding:0}
        body{font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,Helvetica,Arial}
        .container{max-width:1100px;margin:0 auto;padding:0 20px}
        .nav{position:sticky;top:0;background:#fff;backdrop-filter:saturate(140%) blur(8px);border-bottom:1px solid #e5e7eb}
        .nav .container{display:flex;align-items:center;justify-content:space-between;padding:14px 20px}
        .brand{font-weight:600}
        .btn{display:inline-block;padding:10px 16px;border-radius:12px;text-decoration:none;font-weight:600;border:1px solid transparent}
        .btn-dark{background:#111;color:#fff}
        .btn-gradient{background:linear-gradient(90deg,#6366f1,#d946ef);color:#fff;box-shadow:0 10px 30px rgba(217,70,239,.25)}
        .btn-outline{border-color:#e5e7eb;color:#111;background:#fff}
        .btn-light{background:#fff;color:#111}
        .btn-outline-light{border-color:#fff;color:#fff}
        .hero{position:relative;overflow:hidden;background:#fff}
        .blob{position:absolute;inset:0;pointer-events:none;background:radial-gradient(600px 300px at 50% -10%, rgba(99,102,241,.25), transparent 70%)}
        .hero-inner{padding:80px 0;text-align:center}
        h1{font-size:40px;line-height:1.1;margin:0}
        .lead{color:#6b7280;max-width:720px;margin:14px auto 0}
        .cta-row{display:flex;gap:12px;justify-content:center;margin-top:18px;flex-wrap:wrap}
        .section{padding:64px 0}
        .section-alt{background:#fafafa;border-top:1px solid #eee;border-bottom:1px solid #eee}
        h2{font-size:32px;margin:0 0 8px 0;text-align:center}
        .grid{display:grid;gap:16px;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));margin-top:24px}
        .card{border:1px solid #e5e7eb;border-radius:16px;padding:18px;background:#fff}
        .pricing{display:grid;gap:16px;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));margin-top:20px}
        .price{border:1px solid #e5e7eb;border-radius:16px;padding:18px;background:#fff;text-align:left}
        .price h3{margin:0;font-size:20px}
        .price .amount{font-size:28px;font-weight:800;margin:6px 0}
        .cta{padding:72px 0;background:linear-gradient(90deg,#6366f1,#d946ef);color:#fff}
        .cta-inner{text-align:center}
        .footer{border-top:1px solid #eee;padding:28px 0;background:#fff}
        .footer-inner{display:flex;justify-content:space-between;align-items:center;gap:16px;flex-wrap:wrap}
        .links a{margin-left:16px;color:#111;text-decoration:none}
        @media (max-width:640px){h1{font-size:32px}}
      `}</style>
    </main>
  );
}

function Card({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="card">
      <h3 style={{margin:0,fontSize:18,fontWeight:600}}>{title}</h3>
      <p style={{marginTop:8,color:"#6b7280",fontSize:14,lineHeight:1.5}}>{desc}</p>
    </div>
  );
}

function Price({ name, price, items }:{name:string; price:string; items:string[]}) {
  return (
    <div className="price">
      <h3>{name}</h3>
      <p className="amount">{price}</p>
      <ul style={{listStyle:"none",padding:0,margin:0}}>
        {items.map(i=>(
          <li key={i} style={{display:"flex",alignItems:"center",gap:8,margin:"8px 0"}}>
            <CheckCircle2 size={18} /> {i}
          </li>
        ))}
      </ul>
      <a href="#cta" className="btn btn-dark" style={{display:"block",marginTop:16,textAlign:"center"}}>Start free</a>
    </div>
  );
}
