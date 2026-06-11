// Marketing site — top navigation (responsive: desktop links / mobile burger sheet)
function SiteNav({ onNav, active }) {
  const { Button, IconButton } = window.HenryStudioRemix_704588;
  const [open, setOpen] = React.useState(false);
  const links = [
    { id: "work", label: "作品集" },
    { id: "services", label: "拍攝方案" },
    { id: "about", label: "關於亨利" },
    { id: "journal", label: "雪季手記" },
  ];
  const go = (e, id) => { e.preventDefault(); setOpen(false); onNav && onNav(id); };
  return (
    <header className="site-nav">
      <a className="site-nav__logo" href="#" onClick={(e) => go(e, "home")}>
        <img src={window.A ? window.A("../../assets/logo-lockup.svg") : "../../assets/logo-lockup.svg"} alt="亨利攝影工作室" />
      </a>
      <nav className="site-nav__links">
        {links.map((l) => (
          <a key={l.id} href={`#${l.id}`} onClick={(e) => go(e, l.id)}
            style={{
              padding: "8px 16px", borderRadius: "var(--radius-sm)",
              fontSize: "var(--text-sm)", fontWeight: "var(--fw-medium)",
              color: active === l.id ? "var(--brand-soft-text)" : "var(--text-body)",
              background: active === l.id ? "var(--brand-soft)" : "transparent",
              transition: "var(--transition-base)",
            }}>{l.label}</a>
        ))}
      </nav>
      <div className="site-nav__actions">
        <span className="site-nav__ig">
          <IconButton icon={<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"></rect><circle cx="12" cy="12" r="4"></circle><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"></circle></svg>} label="Instagram" variant="ghost" size="sm" />
        </span>
        <Button variant="primary" size="sm" iconLeft={<i data-lucide="calendar"></i>} onClick={(e) => go(e, "book")}>預約拍攝</Button>
        <button type="button" className="site-nav__burger" aria-label={open ? "關閉選單" : "開啟選單"}
          onClick={() => setOpen((o) => !o)}>
          {open ? (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="5" y1="5" x2="19" y2="19"></line><line x1="19" y1="5" x2="5" y2="19"></line></svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="4" y1="7" x2="20" y2="7"></line><line x1="4" y1="12" x2="20" y2="12"></line><line x1="4" y1="17" x2="20" y2="17"></line></svg>
          )}
        </button>
      </div>
      {open && (
        <nav className="site-nav__sheet">
          {links.map((l) => (
            <a key={l.id} href={`#${l.id}`} className={active === l.id ? "is-active" : ""}
              onClick={(e) => go(e, l.id)}>{l.label}</a>
          ))}
        </nav>
      )}
    </header>
  );
}
window.SiteNav = SiteNav;
