// Marketing site — hero (cover 圖可直接上傳更換)
function HeroVideoModal({ open, onClose }) {
  React.useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);
  if (!open) return null;
  return (
    <div onClick={onClose} style={{
      position: "fixed", inset: 0, zIndex: 95, background: "rgba(28,27,25,0.88)",
      display: "flex", alignItems: "center", justifyContent: "center", padding: "clamp(12px, 4vw, 48px)",
    }}>
      <button type="button" onClick={onClose} aria-label="關閉影片" style={{
        position: "absolute", top: 18, right: 18, width: 44, height: 44, borderRadius: "var(--radius-pill)",
        border: "1px solid rgba(251,251,250,0.35)", background: "rgba(28,27,25,0.55)", color: "#fbfbfa",
        display: "inline-flex", alignItems: "center", justifyContent: "center", cursor: "pointer",
      }}>
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="5" y1="5" x2="19" y2="19"></line><line x1="19" y1="5" x2="5" y2="19"></line></svg>
      </button>
      <div onClick={(e) => e.stopPropagation()} style={{
        height: "min(82vh, 780px)", aspectRatio: "9 / 16", maxWidth: "100%",
        borderRadius: "var(--radius-lg)", overflow: "hidden", boxShadow: "var(--shadow-lg)", background: "#000",
      }}>
        <iframe src="https://www.youtube-nocookie.com/embed/FQdwLqhzvdg?autoplay=1&rel=0"
          title="亨利攝影工作室 — 影片" style={{ width: "100%", height: "100%", border: 0, display: "block" }}
          allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowFullScreen></iframe>
      </div>
    </div>
  );
}

function Hero({ onNav }) {
  const { Button, MetaRow } = window.HenryStudioRemix_704588;
  const [videoOpen, setVideoOpen] = React.useState(false);
  return (
    <section style={{ position: "relative", minHeight: "var(--hero-h, min(620px, 88svh))", display: "flex", alignItems: "flex-end", overflow: "hidden" }}>
      <EditableImage id="cover-hero" src="../../assets/slots/cover-hero.jpg" alt="" maxEdge={1920}
        label="更換 Cover" style={{ position: "absolute", inset: 0 }} />
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: "linear-gradient(180deg, rgba(28,27,25,0.12) 0%, rgba(28,27,25,0.05) 40%, rgba(28,27,25,0.62) 100%)",
      }}></div>
      <div style={{ position: "relative", padding: "96px clamp(20px, 5vw, 40px) clamp(36px, 7vw, 56px)", maxWidth: 880 }}>
        <span className="ds-eyebrow" style={{ color: "var(--ice-200)" }}>FREELANCE SKI IMAGERY · 北海道 / 二世谷</span>
        <h1 style={{
          color: "var(--snow)", fontSize: "clamp(38px, 7vw, var(--text-6xl))", lineHeight: 1.06,
          margin: "16px 0 20px", letterSpacing: "var(--tracking-tight)", maxWidth: 760,
          textShadow: "0 2px 30px rgba(28,27,25,0.35)", textWrap: "balance",
        }}>每一幀影像，<br />都記錄著美好的回憶</h1>
        <p style={{ color: "var(--stone-100)", fontSize: "clamp(16px, 2.4vw, var(--text-xl))", maxWidth: 540, lineHeight: 1.6, fontWeight: 400 }}>
          快門背後的眼睛，與你並肩在風雪中前行。記錄挑戰的汗水，也定格登頂的笑容。
        </p>
        <div style={{ display: "flex", gap: 14, marginTop: 32, alignItems: "center", flexWrap: "wrap" }}>
          <Button variant="inverse" size="lg" iconRight={<i data-lucide="arrow-right"></i>} onClick={() => onNav && onNav("work")}>瀏覽作品集</Button>
          <Button variant="ghost" size="lg" style={{ color: "var(--snow)" }} iconLeft={<i data-lucide="play"></i>} onClick={() => setVideoOpen(true)}>觀看影片</Button>
        </div>
      </div>
      <HeroVideoModal open={videoOpen} onClose={() => setVideoOpen(false)} />
    </section>
  );
}
window.Hero = Hero;
