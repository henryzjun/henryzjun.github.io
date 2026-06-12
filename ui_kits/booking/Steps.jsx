// Booking — multi-step form body
function StepChoose({ data, set }) {
  const { Button } = window.HenryStudioRemix_704588;
  const [infoOpen, setInfoOpen] = React.useState(false);
  const packs = [
    { id: "攝影紀錄（照片）", icon: "camera", name: "攝影紀錄", meta: "照片 · 1 小時 · 張數不設上限", price: "NT$ 8,500" },
    { id: "雪地跟拍（影片）", icon: "video", name: "雪地跟拍", meta: "影片 · 1 小時 · 精選剪輯", price: "NT$ 11,000" },
  ];
  return (
    <div style={{ display:"flex", flexDirection:"column", gap: 16 }}>
      <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", gap: 12, flexWrap:"wrap" }}>
        <h2 style={{ fontSize:"var(--text-2xl)", margin: 0 }}>選擇拍攝方案</h2>
        <Button variant="ghost" size="sm" iconLeft={<i data-lucide="info"></i>} onClick={() => setInfoOpen(true)}>服務說明</Button>
      </div>
      <div style={{ display:"grid", gap: 12 }}>
        {packs.map(p => {
          const on = data.pkg === p.id;
          return (
            <div key={p.id} onClick={()=>set({ pkg: p.id })}
              style={{
                display:"flex", alignItems:"center", gap:16, padding:"16px 18px", cursor:"pointer",
                background: on ? "var(--brand-soft)" : "var(--surface-card)",
                border: `1.5px solid ${on ? "var(--ice-400)" : "var(--border-soft)"}`,
                borderRadius:"var(--radius-md)", transition:"var(--transition-base)",
              }}>
              <span style={{ display:"inline-flex", alignItems:"center", justifyContent:"center", width:44, height:44, borderRadius:"var(--radius-md)", background: on ? "var(--brand)" : "var(--brand-soft)", color: on ? "var(--snow)" : "var(--brand-soft-text)" }}>
                <i data-lucide={p.icon}></i>
              </span>
              <div style={{ flex:1 }}>
                <div style={{ fontWeight:"var(--fw-semibold)", color:"var(--text-strong)" }}>{p.name}</div>
                <div className="ds-meta">{p.meta}</div>
              </div>
              <div style={{ fontFamily:"var(--font-display)", fontWeight:700, color:"var(--text-strong)" }}>{p.price}</div>
              <span style={{ width:22, height:22, borderRadius:"var(--radius-pill)", border:`2px solid ${on?"var(--brand)":"var(--border-default)"}`, display:"inline-flex", alignItems:"center", justifyContent:"center" }}>
                {on && <span style={{ width:11, height:11, borderRadius:"var(--radius-pill)", background:"var(--brand)" }}></span>}
              </span>
            </div>
          );
        })}
      </div>
      <p className="ds-meta" style={{ margin: 0 }}>實際拍攝 1 小時；成片約五個工作天後雲端交付。詳見「服務說明」。</p>
      <ServiceInfoModal open={infoOpen} onClose={() => setInfoOpen(false)} />
    </div>
  );
}

function StepDetails({ data, set }) {
  const { Input, Select } = window.HenryStudioRemix_704588;
  return (
    <div style={{ display:"flex", flexDirection:"column", gap: 18 }}>
      <h2 style={{ fontSize:"var(--text-2xl)" }}>拍攝細節</h2>
      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(min(100%, 220px), 1fr))", gap: 16 }}>
        <Input label="日期 *" type="date" value={data.date} onChange={(e)=>set({date:e.target.value})} />
        <Input label="時間 *" type="time" value={data.time} onChange={(e)=>set({time:e.target.value})} hint="請填入希望開始的時間" />
        <Select label="會面地點 *" value={data.loc} onChange={(e)=>set({loc:e.target.value})}
          options={["二世古 NISEKO","留壽都 RUSUTSU","喜樂樂 KIRORO","其他（請於特殊需求說明）"]}
          hint="原則限於二世古、留壽都、喜樂樂滑雪場" />
        <Select label="團體總人數 *" value={data.people} onChange={(e)=>set({people:e.target.value})}
          options={["1","2","3","4","5","6","7","8","9","10"]} />
      </div>
      <Input label="您希望的攝影風格（或希望與攝影師溝通的內容）" placeholder="例如：自然抓拍為主、希望多拍滑行動態…"
        value={data.style} onChange={(e)=>set({style:e.target.value})} />
      <Input label="您是否有其他特殊需求（若有特殊雪場需求）" placeholder="例如：希望於其他雪場拍攝…"
        value={data.special} onChange={(e)=>set({special:e.target.value})} />
    </div>
  );
}

function StepContact({ data, set }) {
  const { Input, Select } = window.HenryStudioRemix_704588;
  return (
    <div style={{ display:"flex", flexDirection:"column", gap: 18 }}>
      <h2 style={{ fontSize:"var(--text-2xl)" }}>聯絡方式</h2>
      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(min(100%, 220px), 1fr))", gap: 16 }}>
        <Input label="訂購代表人姓名 *" placeholder="王小明 WANG, HSIAO-MING" value={data.name} onChange={(e)=>set({name:e.target.value})}
          iconLeft={<i data-lucide="user"></i>} hint="請填護照真實中、英文姓名" containerStyle={{ gridColumn:"1 / -1" }} />
        <Input label="訂購代表人電子郵件 *" type="email" placeholder="you@example.com" value={data.email} onChange={(e)=>set({email:e.target.value})}
          iconLeft={<i data-lucide="mail"></i>} hint="預約確認信與付款資訊將寄送至此信箱" />
        <Select label="訂購代表人性別 *" value={data.gender} onChange={(e)=>set({gender:e.target.value})}
          options={["請選擇","男","女","其他"]} />
      </div>
    </div>
  );
}

function StepDone({ data }) {
  const { MetaRow, Button } = window.HenryStudioRemix_704588;
  return (
    <div style={{ textAlign:"center", padding:"28px 0" }}>
      <span style={{ display:"inline-flex", alignItems:"center", justifyContent:"center", width:72, height:72, borderRadius:"var(--radius-pill)", background:"var(--success-soft)", color:"var(--brand)", marginBottom: 20 }}>
        <i data-lucide="check" style={{ width:34, height:34 }}></i>
      </span>
      <h2 style={{ fontSize:"var(--text-3xl)" }}>預約已送出！</h2>
      <p style={{ color:"var(--text-muted)", fontSize:"var(--text-lg)", maxWidth: 480, margin:"12px auto 0", lineHeight: 1.7 }}>
        感謝 {data.name || "你"} 的預約。JD 白金秘書將以 Email 與您聯繫，確認預約內容與付款方式
        （信件署名 bookings@jdnisekosss.com；若 48 小時內未收到回覆，請檢查垃圾信箱）。
      </p>
      <div style={{ display:"flex", justifyContent:"center", marginTop: 22 }}>
        <MetaRow items={[{ label:"預約編號", value:"HP-2606-0148" }]} />
      </div>
      <div style={{ display:"flex", gap:12, justifyContent:"center", marginTop: 28 }}>
        <Button variant="secondary" iconLeft={<i data-lucide="calendar-plus"></i>}>加入行事曆</Button>
        <Button variant="primary" iconLeft={<i data-lucide="image"></i>} onClick={()=>window.location.href=window.HENRY_LINKS.gallery}>先看看作品集</Button>
      </div>
    </div>
  );
}
window.StepChoose = StepChoose;
window.StepDetails = StepDetails;
window.StepContact = StepContact;
window.StepDone = StepDone;
