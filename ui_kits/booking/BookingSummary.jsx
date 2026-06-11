// Booking — summary sidebar (sticky)
function BookingSummary({ data }) {
  const { MetaRow, Badge } = window.HenryStudioRemix_704588;
  const priceMap = { "個人跟拍 · 半日": 6800, "團體紀錄 · 全日": 12000, "空拍企劃 · 客製": 0 };
  const price = priceMap[data.pkg] ?? 0;
  return (
    <aside style={{
      flex:"1 1 300px", maxWidth: 480, alignSelf: "flex-start", position: "sticky", top: 32,
      background: "var(--surface-card)", border: "1px solid var(--border-soft)",
      borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-sm)", overflow: "hidden",
    }}>
      <div style={{ height: 140, position: "relative" }}>
        <img src={window.A ? window.A("../../assets/photos-web/slope-dawn.jpg") : "../../assets/photos-web/slope-dawn.jpg"} alt="" style={{ width:"100%", height:"100%", objectFit:"cover" }} />
        <div style={{ position:"absolute", inset:0, background:"linear-gradient(180deg,rgba(28,27,25,0) 30%,rgba(28,27,25,0.6))" }}></div>
        <span style={{ position:"absolute", bottom:12, left:16 }}>
          <Badge tone="accent" variant="solid">{data.loc || "雪場待定"}</Badge>
        </span>
      </div>
      <div style={{ padding: 22, display:"flex", flexDirection:"column", gap: 16 }}>
        <div className="ds-eyebrow">預約摘要</div>
        <Row label="方案" value={data.pkg || "尚未選擇"} />
        <Row label="日期" value={data.date || "尚未選擇"} />
        <Row label="人數" value={data.people ? `${data.people} 人` : "—"} />
        <Row label="姓名" value={data.name || "—"} />
        <div style={{ borderTop: "1px dashed var(--border-default)", paddingTop: 16, display:"flex", justifyContent:"space-between", alignItems:"baseline" }}>
          <span style={{ color:"var(--text-muted)", fontSize:"var(--text-sm)" }}>預估金額</span>
          <span style={{ fontFamily:"var(--font-display)", fontSize:"var(--text-2xl)", fontWeight:700, color:"var(--text-strong)" }}>
            {price ? `NT$ ${price.toLocaleString()}` : "客製報價"}
          </span>
        </div>
        <MetaRow items={[{ value:"訂金 30%" }, { value:"可改期 1 次" }]} />
      </div>
    </aside>
  );
}
function Row({ label, value }) {
  return (
    <div style={{ display:"flex", justifyContent:"space-between", gap: 12, fontSize:"var(--text-sm)" }}>
      <span style={{ color:"var(--text-muted)" }}>{label}</span>
      <span style={{ color:"var(--text-strong)", fontWeight:"var(--fw-medium)", textAlign:"right" }}>{value}</span>
    </div>
  );
}
window.BookingSummary = BookingSummary;
