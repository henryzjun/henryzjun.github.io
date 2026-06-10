// Marketing site — hero
function Hero({ onNav }) {
  const { Button, MetaRow } = window.HenryStudioRemix_704588;
  return (
    <section style={{ position: "relative", minHeight: 620, display: "flex", alignItems: "flex-end", overflow: "hidden" }}>
      <img src="../../assets/photos/hero-ridge.jpg" alt="" style={{
        position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover",
      }} />
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(180deg, rgba(28,27,25,0.12) 0%, rgba(28,27,25,0.05) 40%, rgba(28,27,25,0.62) 100%)",
      }}></div>
      <div style={{ position: "relative", padding: "0 40px 56px", maxWidth: 880 }}>
        <span className="ds-eyebrow" style={{ color: "var(--ice-200)" }}>FREELANCE SKI IMAGERY · 北海道 / 長野</span>
        <h1 style={{
          color: "var(--snow)", fontSize: "var(--text-6xl)", lineHeight: 1.04,
          margin: "16px 0 20px", letterSpacing: "var(--tracking-tight)", maxWidth: 760,
          textShadow: "0 2px 30px rgba(28,27,25,0.35)",
        }}>每一次出發，<br/>都是一場對未知的探索。</h1>
        <p style={{ color: "var(--stone-100)", fontSize: "var(--text-xl)", maxWidth: 540, lineHeight: 1.6, fontWeight: 400 }}>
          快門背後的眼睛，與你並肩在風雪中前行。記錄挑戰的汗水，也定格登頂的笑容。
        </p>
        <div style={{ display: "flex", gap: 14, marginTop: 32, alignItems: "center" }}>
          <Button variant="inverse" size="lg" iconRight={<i data-lucide="arrow-right"></i>} onClick={()=>onNav&&onNav("work")}>瀏覽作品集</Button>
          <Button variant="ghost" size="lg" style={{ color: "var(--snow)" }} iconLeft={<i data-lucide="play"></i>}>觀看影片</Button>
        </div>
        <div style={{ marginTop: 40 }}>
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
