export default function Thanks() {
  return (
    <main style={{maxWidth:760, margin:"60px auto", padding:"0 20px", fontFamily:"system-ui", color:"#e5e7eb", background:"#0b1220"}}>
      <h1 style={{fontSize:32, marginBottom:12, color:"#fff"}}>You’re in 🎉</h1>
      <p>Thanks for starting Repute. Check your email for a receipt.</p>
      <p style={{marginTop:16}}>
        Next step: head to the <a href="/dashboard" style={{color:"#93c5fd", textDecoration:"underline"}}>dashboard</a> and draft your first reply.
      </p>
      <a href="/" style={{display:"inline-block", marginTop:24, padding:"10px 16px", borderRadius:12, background:"#4f46e5", color:"#fff", textDecoration:"none"}}>
        Back to home
      </a>
    </main>
  );
}
