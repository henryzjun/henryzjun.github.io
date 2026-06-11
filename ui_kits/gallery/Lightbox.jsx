// Gallery — fullscreen lightbox with EXIF panel
function Lightbox({ item, onClose, onPrev, onNext }) {
  const { IconButton, MetaRow, Badge, Button } = window.HenryStudioRemix_704588;
  if (!item) return null;
  React.useEffect(() => {
    const h = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [item]);

  return (
    <div className="lb-root" style={{
      position: "fixed", inset: 0, zIndex: 100, display: "flex",
      background: "rgba(18,17,16,0.86)", backdropFilter: "blur(8px)",
    }} onClick={onClose}>
      <div className="lb-stage" style={{ flex: 1, position: "relative", display: "flex", alignItems: "center", justifyContent: "center", padding: 40 }}
        onClick={(e)=>e.stopPropagation()}>
        <IconButton icon={<i data-lucide="chevron-left"></i>} label="上一張" variant="frost" size="lg"
          onClick={onPrev} style={{ position: "absolute", left: 24 }} />
        <img src={window.henryImg(`photo-${item.img}`, `../../assets/photos-web/${item.img}.jpg`)} alt={item.title}
          style={{ maxWidth: "100%", maxHeight: "100%", borderRadius: "var(--radius-md)", boxShadow: "var(--shadow-xl)" }} />
        <IconButton icon={<i data-lucide="chevron-right"></i>} label="下一張" variant="frost" size="lg"
          onClick={onNext} style={{ position: "absolute", right: 24 }} />
      </div>
      <aside className="lb-aside" style={{
        width: 320, flexShrink: 0, background: "var(--surface-card)",
        padding: "28px 26px", display: "flex", flexDirection: "column", gap: 20, overflowY: "auto",
      }} onClick={(e)=>e.stopPropagation()}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Badge tone={item.video ? "accent" : "brand"}>{item.video ? "影片" : "照片"}</Badge>
          <IconButton icon={<i data-lucide="x"></i>} label="關閉" variant="ghost" onClick={onClose} />
        </div>
        <div>
          <h2 style={{ fontSize: "var(--text-2xl)" }}>{item.title}</h2>
          <p style={{ color: "var(--text-muted)", fontSize: "var(--text-sm)", marginTop: 4 }}>{item.loc} · 2026 雪季</p>
        </div>
        <div style={{ borderTop: "1px solid var(--divider)", borderBottom: "1px solid var(--divider)", padding: "16px 0" }}>
          <div className="ds-eyebrow" style={{ marginBottom: 10 }}>EXIF</div>
          <MetaRow items={[
            { label: "ISO", value: item.iso },
            { label: "ƒ/", value: item.f },
            { value: item.s, unit: "s" },
            { value: item.mm, unit: "mm" },
          ]} />
        </div>
        <div style={{ display: "flex", gap: 10 }}>
          <Button variant="primary" iconLeft={<i data-lucide="download"></i>} fullWidth>下載</Button>
          <IconButton icon={<i data-lucide="heart"></i>} label="收藏" variant="outline" />
          <IconButton icon={<i data-lucide="share-2"></i>} label="分享" variant="outline" />
        </div>
        <p style={{ fontSize: "var(--text-sm)", color: "var(--text-body)", lineHeight: 1.75 }}>
          清晨第一道光灑落稜線，霧氣尚未散去。我蹲在風口等了四十分鐘，只為等你滑進這道光裡。
        </p>
      </aside>
    </div>
  );
}
window.Lightbox = Lightbox;
