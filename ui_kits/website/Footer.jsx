// Marketing site — philosophy quote band + footer
function PhilosophyBand() {
  return (
    <section style={{ position: "relative", padding: "104px 40px", overflow: "hidden", background: "var(--surface-inverse)" }}>
      <img src="../../assets/photos/summit-blue.jpg" alt="" style={{
        position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.32,
      }} />
      <div style={{ position: "relative", maxWidth: 820, margin: "0 auto", textAlign: "center" }}>
        <i data-lucide="quote" style={{ width: 40, height: 40, color: "var(--ice-300)", margin: "0 auto 20px" }}></i>
        <p style={{
          fontFamily: "var(--font-display)", color: "var(--snow)",
          fontSize: "var(--text-3xl)", lineHeight: 1.4, fontWeight: 500, letterSpacing: "0.01em",
        }}>設計上融合戶外冒險的機能感與現代簡約美學，用最具呼吸感的排版，呈現你最真實的雪地故事。</p>
        <p style={{ marginTop: 28, color: "var(--ice-200)", fontFamily: "var(--font-mono)", fontSize: "var(--text-sm)", letterSpacing: "0.08em" }}>— HENRY LIN, 主理人</p>
      </div>
    </section>
  );
}

function SiteFooter({ onNav }) {
  const { Button } = window.HenryStudioRemix_704588;
  return (
    <footer style={{ background: "var(--moss-800)", color: "var(--stone-200)", padding: "64px 40px 36px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 40, maxWidth: 1080, margin: "0 auto" }}>
        <div style={{ maxWidth: 320 }}>
          <img src="../../assets/logo-lockup-inverse.svg" alt="亨利攝影工作室" style={{ height: 44 }} />
          <p style={{ marginTop: 18, fontSize: "var(--text-sm)", lineHeight: 1.7, color: "var(--moss-200)" }}>
            滑雪影像自由工作者。與你並肩在風雪中前行的夥伴。
          </p>
        </div>
        <div style={{ display: "flex", gap: 56, flexWrap: "wrap" }}>
          <FootCol title="探索" items={["作品集", "拍攝方案", "雪季手記"]} />
          <FootCol title="聯絡" items={["LINE 預約", "Instagram", "Email"]} />
        </div>
        <div>
          <h4 style={{ color: "var(--snow)", fontSize: "var(--text-base)", marginBottom: 14 }}>準備好出發了嗎？</h4>
          <Button variant="inverse" iconRight={<i data-lucide="arrow-right"></i>} onClick={()=>onNav&&onNav("book")}>預約你的雪季</Button>
        </div>
      </div>
      <div style={{ borderTop: "1px solid var(--moss-700)", marginTop: 44, paddingTop: 24, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-xs)", color: "var(--moss-300)" }}>© 2026 亨利攝影工作室 HENRYPHOTO STUDIO</span>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-xs)", color: "var(--moss-300)" }}>HOKKAIDO · NAGANO · TAIWAN</span>
      </div>
    </footer>
  );
}

function FootCol({ title, items }) {
  return (
    <div>
      <h4 style={{ color: "var(--snow)", fontSize: "var(--text-sm)", letterSpacing: "0.06em", marginBottom: 14, textTransform: "uppercase" }}>{title}</h4>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {items.map((i) => <a key={i} href="#" onClick={(e)=>e.preventDefault()} style={{ color: "var(--moss-200)", fontSize: "var(--text-sm)" }}>{i}</a>)}
      </div>
    </div>
  );
}
window.PhilosophyBand = PhilosophyBand;
window.SiteFooter = SiteFooter;
