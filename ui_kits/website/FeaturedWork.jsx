// Marketing site — featured work grid (每張作品圖都可直接上傳更換)
function FeaturedWork({ onNav }) {
  const { Card, Badge, MetaRow, Tabs, Button } = window.HenryStudioRemix_704588;
  const [cat, setCat] = React.useState("all");
  const items = [
    { img: "peak-mist", title: "二世谷・霧中稜線", loc: "NISEKO", tag: "powder", kind: "粉雪", badge: "精選" },
    { img: "slope-dawn", title: "白馬・晨光斜坡", loc: "HAKUBA", tag: "aerial", kind: "空拍", badge: null },
    { img: "powder-run", title: "藏王・纜車時刻", loc: "ZAO", tag: "powder", kind: "粉雪", badge: null },
    { img: "summit-blue", title: "立山・企鵝", loc: "TATEYAMA", tag: "portrait", kind: "人像", badge: "新作" },
    { img: "forest-valley", title: "野澤・纜車風景", loc: "NOZAWA", tag: "aerial", kind: "空拍", badge: null },
    { img: "hero-ridge", title: "富良野・山頂風景", loc: "FURANO", tag: "portrait", kind: "人像", badge: null },
  ];
  const shown = cat === "all" ? items : items.filter((i) => i.tag === cat);

  return (
    <section style={{ padding: "clamp(56px, 9vw, 88px) clamp(20px, 4vw, 40px)" }}>
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 32, flexWrap: "wrap", gap: 20 }}>
        <div>
          <span className="ds-eyebrow">SELECTED WORK</span>
          <h2 style={{ fontSize: "clamp(26px, 4vw, var(--text-3xl))", marginTop: 10 }}>雪地的故事，逐格收藏</h2>
        </div>
        <div style={{ maxWidth: "100%", overflowX: "auto" }}>
          <Tabs value={cat} onChange={setCat} tabs={[
            { value: "all", label: "全部", count: items.length },
            { value: "powder", label: "粉雪" },
            { value: "aerial", label: "空拍" },
            { value: "portrait", label: "人像" },
          ]} />
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 270px), 1fr))", gap: 22 }}>
        {shown.map((it) => (
          <Card key={it.title} coverHeight={230} interactive onClick={()=>onNav&&onNav("work")}
            cover={<EditableImage id={`photo-${it.img}`} src={`../../assets/slots/photo-${it.img}.jpg`} alt={it.title} style={{ width: "100%", height: "100%" }} />}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 8 }}>
              <h3 style={{ fontSize: "var(--text-xl)" }}>{it.title}</h3>
              {it.badge && <Badge tone="brand">{it.badge}</Badge>}
            </div>
            <MetaRow items={[{ value: it.loc }, { value: it.kind }, { value: "4K" }]} />
          </Card>
        ))}
      </div>
      <div style={{ display: "flex", justifyContent: "center", marginTop: 44 }}>
        <Button variant="secondary" size="lg" iconRight={<i data-lucide="arrow-right"></i>} onClick={()=>onNav&&onNav("work")}>查看完整作品集</Button>
      </div>
    </section>
  );
}
window.FeaturedWork = FeaturedWork;
