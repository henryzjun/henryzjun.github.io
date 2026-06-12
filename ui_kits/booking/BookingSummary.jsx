// Booking — summary sidebar (sticky)
function BookingSummary({ data }) {
  const { MetaRow, Badge } = window.HenryStudioRemix_704588;
  const priceMap = { "攝影紀錄（照片）": 8500, "雪地跟拍（影片）": 11000 };
  const price = priceMap[data.pkg] ?? 0;
  return (
    <aside style={{
      flex:"1 1 300px", maxWidth: 480, alignSelf: "flex-start", position: "sticky", top: 32,
      background: "var(--surface-card)", border: "1px solid var(--border-soft)",
      borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-sm)", overflow: "hidden",
    }}>
      <div style={{ height: 140, position: "relative" }}>
        <EditableImage id="booking-cover" src="../../assets/slots/booking-cover.jpg" alt="" style={{ position:"absolute", inset:0 }} />
        <div style={{ position:"absolute", inset:0, background:"linear-gradient(180deg,rgba(28,27,25,0) 30%,rgba(28,27,25,0.6))" }}></div>
        <span style={{ position:"absolute", bottom:12, left:16 }}>
          <Badge tone="accent" variant="solid">{data.loc || "雪場待定"}</Badge>
        </span>
      </div>
      <div style={{ padding: 22, display:"flex", flexDirection:"column", gap: 16 }}>
        <div className="ds-eyebrow">預約摘要</div>
        <Row label="方案" value={data.pkg || "尚未選擇"} />
        <Row label="日期" value={data.date || "尚未選擇"} />
        <Row label="時間" value={data.time || "—"} />
        <Row label="地點" value={data.loc || "—"} />
        <Row label="人數" value={data.people ? `${data.people} 人` : "—"} />
        <Row label="代表人" value={data.name || "—"} />
        <div style={{ borderTop: "1px dashed var(--border-default)", paddingTop: 16, display:"flex", justifyContent:"space-between", alignItems:"baseline" }}>
          <span style={{ color:"var(--text-muted)", fontSize:"var(--text-sm)" }}>預估金額</span>
          <span style={{ fontFamily:"var(--font-display)", fontSize:"var(--text-2xl)", fontWeight:700, color:"var(--text-strong)" }}>
            {price ? `NT$ ${price.toLocaleString()}` : "—"}
          </span>
        </div>
        <MetaRow items={[{ value:"拍攝 1 小時" }, { value:"約 5 個工作天交付" }]} />
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
