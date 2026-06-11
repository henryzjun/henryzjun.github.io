// Gallery — masonry grid + tile
function GalleryGrid({ items, onOpen }) {
  const { Badge, IconButton } = window.HenryStudioRemix_704588;
  return (
    <div style={{
      columnWidth: 300, columnGap: 18, padding: "0 clamp(20px, 4vw, 40px) 80px",
    }}>
      {items.map((it) => (
        <figure key={it.id} onClick={() => onOpen(it)}
          style={{
            breakInside: "avoid", margin: "0 0 18px", position: "relative",
            borderRadius: "var(--radius-md)", overflow: "hidden", cursor: "pointer",
            boxShadow: "var(--shadow-sm)", background: "var(--surface-card)",
          }}
          onMouseEnter={(e)=>{ e.currentTarget.style.boxShadow="var(--shadow-lg)"; e.currentTarget.querySelector(".gov").style.opacity=1; }}
          onMouseLeave={(e)=>{ e.currentTarget.style.boxShadow="var(--shadow-sm)"; e.currentTarget.querySelector(".gov").style.opacity=0; }}>
          <EditableImage id={`photo-${it.img}`} src={`../../assets/photos-web/${it.img}.jpg`} alt={it.title}
            imgStyle={{ aspectRatio: it.span === 2 ? "4 / 5" : "4 / 3", height: "auto" }} />
          {it.video && (
            <span style={{ position: "absolute", top: 12, left: 12 }}>
              <Badge tone="accent" variant="solid"><i data-lucide="play" style={{width:12,height:12}}></i> 影片</Badge>
            </span>
          )}
          <figcaption className="gov" style={{
            position: "absolute", inset: 0, opacity: 0, transition: "opacity var(--dur-base) var(--ease-out)",
            background: "linear-gradient(180deg, rgba(28,27,25,0) 40%, rgba(28,27,25,0.72) 100%)",
            display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: 16, pointerEvents: "none",
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
              <div>
                <div style={{ color: "var(--snow)", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "var(--text-lg)" }}>{it.title}</div>
                <div className="ds-meta" style={{ color: "var(--stone-200)" }}>{it.loc} · {it.mm}mm · ƒ/{it.f}</div>
              </div>
              <IconButton icon={<i data-lucide="maximize-2"></i>} label="放大" variant="frost" size="sm" />
            </div>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
window.GalleryGrid = GalleryGrid;
