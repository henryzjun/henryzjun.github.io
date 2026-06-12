// Marketing site — services / packages + philosophy band
function Services({ onNav }) {
  const { Card, Button, Badge } = window.HenryStudioRemix_704588;
  const packs = [
    { icon: "camera", name: "攝影紀錄（照片）", price: "NT$ 8,500", unit: "/ 1 小時", desc: "以「活動紀錄」為概念，完整捕捉精彩瞬間。", feat: ["實拍 1 小時", "照片張數不設上限", "約 5 個工作天雲端交付"], tone: "neutral" },
    { icon: "video", name: "雪地跟拍（影片）", price: "NT$ 11,000", unit: "/ 1 小時", desc: "跟拍你的滑行，精選最佳畫面剪輯成影像記憶。", feat: ["實拍 1 小時", "精選剪輯影片", "約 5 個工作天雲端交付"], tone: "brand", featured: true },
  ];
  return (
    <section style={{ background: "var(--surface-sunken)", padding: "clamp(56px, 9vw, 88px) clamp(20px, 4vw, 40px)" }}>
      <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 48px" }}>
        <span className="ds-eyebrow">PACKAGES</span>
        <h2 style={{ fontSize: "clamp(26px, 4vw, var(--text-3xl))", margin: "10px 0 14px" }}>選一段，與你並肩前行的方式</h2>
        <p style={{ color: "var(--text-muted)", fontSize: "var(--text-lg)" }}>實際拍攝 1 小時，成片約五個工作天後雲端交付。</p>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 270px), 1fr))", gap: 22, maxWidth: 760, margin: "0 auto" }}>
        {packs.map((p) => (
          <Card key={p.name} elevation={p.featured ? "lg" : "sm"} padding="28px"
            style={p.featured ? { border: "1.5px solid var(--ice-300)" } : {}}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span style={{
                display: "inline-flex", alignItems: "center", justifyContent: "center",
                width: 48, height: 48, borderRadius: "var(--radius-md)",
                background: p.featured ? "var(--brand)" : "var(--brand-soft)",
                color: p.featured ? "var(--snow)" : "var(--brand-soft-text)",
              }}><i data-lucide={p.icon}></i></span>
              {p.featured && <Badge tone="brand">最受歡迎</Badge>}
            </div>
            <h3 style={{ fontSize: "var(--text-2xl)", marginTop: 8 }}>{p.name}</h3>
            <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
              <span style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-2xl)", fontWeight: 700, color: "var(--text-strong)" }}>{p.price}</span>
              <span style={{ color: "var(--text-muted)", fontSize: "var(--text-sm)" }}>{p.unit}</span>
            </div>
            <p style={{ color: "var(--text-muted)", fontSize: "var(--text-sm)", lineHeight: 1.7 }}>{p.desc}</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10, margin: "6px 0 4px" }}>
              {p.feat.map((f) => (
                <div key={f} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: "var(--text-sm)", color: "var(--text-body)" }}>
                  <i data-lucide="check" style={{ width: 16, height: 16, color: "var(--brand)" }}></i>{f}
                </div>
              ))}
            </div>
            <Button variant={p.featured ? "primary" : "secondary"} fullWidth onClick={()=>onNav&&onNav("book")}>選擇方案</Button>
          </Card>
        ))}
      </div>
    </section>
  );
}
window.Services = Services;
