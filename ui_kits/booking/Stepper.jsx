// Booking — progress stepper
function Stepper({ step, steps }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 0 }}>
      {steps.map((s, i) => {
        const done = i < step;
        const active = i === step;
        return (
          <React.Fragment key={s}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{
                display: "inline-flex", alignItems: "center", justifyContent: "center",
                width: 30, height: 30, borderRadius: "var(--radius-pill)",
                fontFamily: "var(--font-mono)", fontSize: "var(--text-sm)", fontWeight: 700,
                background: done ? "var(--brand)" : active ? "var(--brand-soft)" : "var(--surface-sunken)",
                color: done ? "var(--snow)" : active ? "var(--brand-soft-text)" : "var(--text-subtle)",
                border: active ? "1.5px solid var(--moss-300)" : "1.5px solid transparent",
                transition: "var(--transition-base)",
              }}>{done ? <i data-lucide="check" style={{width:15,height:15}}></i> : i + 1}</span>
              <span style={{
                fontSize: "var(--text-sm)", fontWeight: active ? "var(--fw-semibold)" : "var(--fw-medium)",
                color: active || done ? "var(--text-strong)" : "var(--text-subtle)",
              }}>{s}</span>
            </div>
            {i < steps.length - 1 && (
              <span style={{ flex: 1, height: 2, margin: "0 14px", borderRadius: 2,
                background: done ? "var(--brand-300, var(--moss-300))" : "var(--border-soft)" }}></span>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}
window.Stepper = Stepper;
