// Booking — multi-step form body
function StepChoose({ data, set }) {
  const { Card, Badge } = window.HenryStudioRemix_704588;
  const packs = [
    { id:"個人跟拍 · 半日", icon:"user", name:"個人跟拍", meta:"半日 · 30+ 張精修", price:"NT$ 6,800" },
    { id:"團體紀錄 · 全日", icon:"users", name:"團體紀錄", meta:"全日 · 短片 + 80 張", price:"NT$ 12,000" },
    { id:"空拍企劃 · 客製", icon:"plane", name:"空拍企劃", meta:"空拍 + 跟拍 · 客製", price:"客製報價" },
  ];
  return (
    <div style={{ display:"flex", flexDirection:"column", gap: 16 }}>
      <h2 style={{ fontSize:"var(--text-2xl)" }}>選擇拍攝方案</h2>
      <div style={{ display:"grid", gap: 12 }}>
        {packs.map(p => {
          const on = data.pkg === p.id;
          return (
            <div key={p.id} onClick={()=>set({ pkg: p.id })}
              style={{
                display:"flex", alignItems:"center", gap:16, padding:"16px 18px", cursor:"pointer",
                background: on ? "var(--brand-soft)" : "var(--surface-card)",
                border: `1.5px solid ${on ? "var(--moss-400)" : "var(--border-soft)"}`,
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
    </div>
  );
}

function StepDetails({ data, set }) {
  const { Input, Select } = window.HenryStudioRemix_704588;
  return (
    <div style={{ display:"flex", flexDirection:"column", gap: 18 }}>
      <h2 style={{ fontSize:"var(--text-2xl)" }}>拍攝細節</h2>
      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap: 16 }}>
        <Select label="雪場地點" value={data.loc} onChange={(e)=>set({loc:e.target.value})}
          options={["NISEKO 二世谷","HAKUBA 白馬","ZAO 藏王","FURANO 富良野","其他（請備註）"]} />
        <Input label="預約日期" type="date" value={data.date} onChange={(e)=>set({date:e.target.value})} />
        <Select label="拍攝人數" value={data.people} onChange={(e)=>set({people:e.target.value})}
          options={["1","2","3","4","5 人以上"]} />
        <Select label="影片需求" options={["僅照片","照片 + 短片","完整影片企劃"]} />
      </div>
      <Input label="想呈現的故事 / 特殊需求" placeholder="例如：想記錄第一次挑戰黑線的過程…"
        value={data.notes} onChange={(e)=>set({notes:e.target.value})} />
    </div>
  );
}

function StepContact({ data, set }) {
  const { Input } = window.HenryStudioRemix_704588;
  return (
    <div style={{ display:"flex", flexDirection:"column", gap: 18 }}>
      <h2 style={{ fontSize:"var(--text-2xl)" }}>聯絡方式</h2>
      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap: 16 }}>
        <Input label="你的名字" placeholder="王小明" value={data.name} onChange={(e)=>set({name:e.target.value})} iconLeft={<i data-lucide="user"></i>} />
        <Input label="LINE ID" placeholder="@henryphoto" iconLeft={<i data-lucide="message-circle"></i>} />
        <Input label="Email" type="email" placeholder="you@example.com" iconLeft={<i data-lucide="mail"></i>} hint="我們會寄送拍攝確認信" containerStyle={{ gridColumn:"1 / -1" }} />
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
      <p style={{ color:"var(--text-muted)", fontSize:"var(--text-lg)", maxWidth: 420, margin:"12px auto 0" }}>
        感謝 {data.name || "你"} 的預約。我會在 24 小時內透過 LINE 與你確認細節，期待與你並肩在風雪中前行。
      </p>
      <div style={{ display:"flex", justifyContent:"center", marginTop: 22 }}>
        <MetaRow items={[{ label:"預約編號", value:"HP-2602-0148" }]} />
      </div>
      <div style={{ display:"flex", gap:12, justifyContent:"center", marginTop: 28 }}>
        <Button variant="secondary" iconLeft={<i data-lucide="calendar-plus"></i>}>加入行事曆</Button>
        <Button variant="primary" iconLeft={<i data-lucide="image"></i>} onClick={()=>window.location.href="../gallery/index.html"}>先看看作品集</Button>
      </div>
    </div>
  );
}
window.StepChoose = StepChoose;
window.StepDetails = StepDetails;
window.StepContact = StepContact;
window.StepDone = StepDone;
