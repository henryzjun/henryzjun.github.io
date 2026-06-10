// Marketing site — top navigation
function SiteNav({ onNav, active }) {
  const { Button, IconButton } = window.HenryStudioRemix_704588;
  const links = [
    { id: "work", label: "作品集" },
    { id: "services", label: "拍攝方案" },
    { id: "about", label: "關於亨利" },
    { id: "journal", label: "雪季手記" },
  ];
  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 50,
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "16px 40px",
      background: "var(--surface-frost)",
      backdropFilter: "blur(var(--blur-frost))",
      WebkitBackdropFilter: "blur(var(--blur-frost))",
      borderBottom: "1px solid var(--border-soft)",
    }}>
      <a href="#" onClick={(e)=>{e.preventDefault();onNav&&onNav("home");}} style={{ display: "flex", alignItems: "center" }}>
        <img src="../../assets/logo-lockup.svg" alt="亨利攝影工作室" style={{ height: 40 }} />
      </a>
      <nav style={{ display: "flex", alignItems: "center", gap: 4 }}>
        {links.map((l) => (
          <a key={l.id} href={`#${l.id}`}
            onClick={(e)=>{e.preventDefault();onNav&&onNav(l.id);}}
            style={{
              padding: "8px 16px", borderRadius: "var(--radius-sm)",
              fontSize: "var(--text-sm)", fontWeight: "var(--fw-medium)",
              color: active === l.id ? "var(--brand-soft-text)" : "var(--text-body)",
              background: active === l.id ? "var(--brand-soft)" : "transparent",
              transition: "var(--transition-base)",
            }}>{l.label}</a>
        ))}
      </nav>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <IconButton icon={<i data-lucide="instagram"></i>} label="Instagram" variant="ghost" size="sm" />
        <Button variant="primary" size="sm" iconLeft={<i data-lucide="calendar"></i>}>預約拍攝</Button>
      </div>
    </header>
  );
}
window.SiteNav = SiteNav;
