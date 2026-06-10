// Marketing site — services / packages + philosophy band
function Services({ onNav }) {
  const { Card, Button, Badge } = window.HenryStudioRemix_704588;
  const packs = [
    { icon: "user", name: "個人跟拍", price: "NT$ 6,800", unit: "/ 半日", desc: "貼身跟拍你的滑行，捕捉最自然的姿態與表情。", feat: ["3–4 小時", "30+ 張精修", "當日精選預覽"], tone: "neutral" },
    { icon: "users", name: "團體紀錄", price: "NT$ 12,000", unit: "/ 全日", desc: "為你的滑雪團隊留下完整一天的影像敘事。", feat: ["6–8 小時", "80+ 張精修", "3 分鐘短片"], tone: "brand", featured: true },
    { icon: "plane", name: "空拍企劃", price: "客製報價", unit: "", desc: "結合空拍與地面機位，從天際到雪面的史詩感。", feat: ["空拍 + 跟拍", "4K 影片", "腳本企劃"], tone: "neutral" },
  ];
  return (
    <section style={{ background: "var(--surface-sunken)", padding: "88px 40px" }}>
      <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 48px" }}>
        <span className="ds-eyebrow">PACKAGES</span>
        <h2 style={{ fontSize: "var(--text-3xl)", margin: "10px 0 14px" }}>選一段，與你並肩前行的方式</h2>
        <p style={{ color: "var(--text-muted)", fontSize: "var(--text-lg)" }}>每個方案都可依雪場、天數與需求彈性調整。</p>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 22, maxWidth: 1080, margin: "0 auto" }}>
        {packs.map((p) => (
          <Card key={p.name} elevation={p.featured ? "lg" : "sm"} padding="28px"
            style={p.featured ? { border: "1.5px solid var(--moss-300)" } : {}}>
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
