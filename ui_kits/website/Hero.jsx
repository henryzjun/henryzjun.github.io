// Marketing site — hero (cover 圖可直接上傳更換)
function Hero({ onNav }) {
  const { Button, MetaRow } = window.HenryStudioRemix_704588;
  return (
    <section style={{ position: "relative", minHeight: "min(620px, 88svh)", display: "flex", alignItems: "flex-end", overflow: "hidden" }}>
      <EditableImage id="cover-hero" src="../../assets/photos-web/hero-ridge.jpg" alt="" maxEdge={1920}
        label="更換 Cover" style={{ position: "absolute", inset: 0 }} />
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: "linear-gradient(180deg, rgba(28,27,25,0.12) 0%, rgba(28,27,25,0.05) 40%, rgba(28,27,25,0.62) 100%)",
      }}></div>
      <div style={{ position: "relative", padding: "96px clamp(20px, 5vw, 40px) clamp(36px, 7vw, 56px)", maxWidth: 880 }}>
        <span className="ds-eyebrow" style={{ color: "var(--ice-200)" }}>FREELANCE SKI IMAGERY · 北海道 / 長野</span>
        <h1 style={{
          color: "var(--snow)", fontSize: "clamp(38px, 7vw, var(--text-6xl))", lineHeight: 1.06,
          margin: "16px 0 20px", letterSpacing: "var(--tracking-tight)", maxWidth: 760,
          textShadow: "0 2px 30px rgba(28,27,25,0.35)", textWrap: "balance",
        }}>每一次出發，<br />都是一場對未知的探索。</h1>
        <p style={{ color: "var(--stone-100)", fontSize: "clamp(16px, 2.4vw, var(--text-xl))", maxWidth: 540, lineHeight: 1.6, fontWeight: 400 }}>
          快門背後的眼睛，與你並肩在風雪中前行。記錄挑戰的汗水，也定格登頂的笑容。
        </p>
        <div style={{ display: "flex", gap: 14, marginTop: 32, alignItems: "center", flexWrap: "wrap" }}>
          <Button variant="inverse" size="lg" iconRight={<i data-lucide="arrow-right"></i>} onClick={() => onNav && onNav("work")}>瀏覽作品集</Button>
          <Button variant="ghost" size="lg" style={{ color: "var(--snow)" }} iconLeft={<i data-lucide="play"></i>}>觀看影片</Button>
        </div>
        <div style={{ marginTop: "clamp(24px, 5vw, 40px)" }}>
          <MetaRow style={{ color: "var(--stone-200)" }} items={[
            { value: "08+", unit: "雪季" },
            { value: "240", unit: "場拍攝" },
            { value: "12", unit: "座雪場" },
          ]} />
        </div>
      </div>
    </section>
  );
}
window.Hero = Hero;
