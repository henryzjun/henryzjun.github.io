// Booking — modals：服務說明 + 預約須知（同意後才能送出）
function BookingModal({ open, onClose, title, children, footer }) {
  if (!open) return null;
  return (
    <div onClick={onClose} style={{
      position: "fixed", inset: 0, zIndex: 90, background: "rgba(28,27,25,0.52)",
      display: "flex", alignItems: "center", justifyContent: "center", padding: "clamp(12px, 3vw, 32px)",
    }}>
      <div onClick={(e) => e.stopPropagation()} style={{
        background: "var(--surface-card)", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-lg)",
        width: "min(660px, 100%)", maxHeight: "86vh", display: "flex", flexDirection: "column", overflow: "hidden",
      }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, padding: "18px 22px", borderBottom: "1px solid var(--border-soft)" }}>
          <h3 style={{ margin: 0, fontSize: "var(--text-lg)" }}>{title}</h3>
          <button type="button" onClick={onClose} aria-label="關閉" style={{
            display: "inline-flex", alignItems: "center", justifyContent: "center", width: 34, height: 34,
            borderRadius: "var(--radius-sm)", border: "none", background: "transparent", cursor: "pointer", color: "var(--text-muted)",
          }}>
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="5" y1="5" x2="19" y2="19"></line><line x1="19" y1="5" x2="5" y2="19"></line></svg>
          </button>
        </div>
        <div style={{ overflowY: "auto", padding: "20px 22px", fontSize: "var(--text-sm)", lineHeight: 1.75, color: "var(--text-body)" }}>
          {children}
        </div>
        {footer && (
          <div style={{ padding: "14px 22px", borderTop: "1px solid var(--border-soft)", background: "var(--surface-sunken)" }}>
            {footer}
          </div>
        )}
      </div>
    </div>
  );
}

function MTitle({ children }) {
  return <h4 style={{ margin: "18px 0 8px", fontSize: "var(--text-base)", color: "var(--text-strong)" }}>{children}</h4>;
}
function MItem({ children }) {
  return <p style={{ margin: "0 0 8px" }}>{children}</p>;
}

// ===== 服務說明（拍攝方案旁的小按鈕打開） =====
function ServiceInfoModal({ open, onClose }) {
  return (
    <BookingModal open={open} onClose={onClose} title="基本服務資訊">
      <MTitle>拍攝時長</MTitle>
      <MItem>實際拍攝時間為 <b>1 小時</b>（從指定預約時段開始計算，不含妝髮、交通等準備時間）。</MItem>

      <MTitle>拍攝內容</MTitle>
      <MItem>📸 以「活動紀錄」為概念，完整捕捉精彩瞬間，不設照片張數上限。</MItem>
      <MItem>🎬 攝影師將精選最佳畫面，確保您獲得豐富的留念影像。</MItem>

      <MTitle>服裝及妝髮造型</MTitle>
      <MItem>👗 本服務不含妝髮、服裝、道具及裝備租借，請自備適合雪地的服裝與配件（手套、圍巾等）。</MItem>
      <MItem>💡 若有特殊需求（如造型建議），歡迎提前告知！</MItem>

      <MTitle>交通與場地</MTitle>
      <MItem>🚠 二世古雪場內：您只需自備該雪場纜車票，無需負擔攝影師費用。</MItem>
      <MItem>🏔️ 其他雪場／遠程地點：需另支付攝影師的纜車票或交通費。</MItem>
      <MItem>⏱️ 中途更改地點：若拍攝開始後臨時更換較遠場地，交通時間將計入拍攝總時長內。</MItem>

      <MTitle>成片交付</MTitle>
      <MItem>✅ 雲端下載：拍攝日後約「五個工作天」將透過 Google 雲端提供高畫質成片，下載連結有效期為 1 個月，請及時保存！</MItem>
      <MItem>❌ 原始 RAW 檔：由於檔案過大，恕不提供原始 RAW 檔，僅交付調色後的 JPG 檔案。</MItem>
    </BookingModal>
  );
}

// ===== 預約須知（送出前必讀並同意） =====
function NoticeModal({ open, onClose, onConfirm }) {
  const { Button } = window.HenryStudioRemix_704588;
  const [agree, setAgree] = React.useState(null);
  React.useEffect(() => { if (open) setAgree(null); }, [open]);
  const opt = (val, label) => {
    const on = agree === val;
    return (
      <label key={val} onClick={() => setAgree(val)} style={{
        display: "flex", alignItems: "center", gap: 10, padding: "10px 14px", cursor: "pointer",
        background: on ? "var(--brand-soft)" : "var(--surface-card)",
        border: `1.5px solid ${on ? "var(--brand)" : "var(--border-soft)"}`,
        borderRadius: "var(--radius-md)", fontSize: "var(--text-sm)", color: "var(--text-strong)",
      }}>
        <span style={{ width: 18, height: 18, borderRadius: "var(--radius-pill)", flexShrink: 0, border: `2px solid ${on ? "var(--brand)" : "var(--border-default)"}`, display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
          {on && <span style={{ width: 9, height: 9, borderRadius: "var(--radius-pill)", background: "var(--brand)" }}></span>}
        </span>
        {label}
      </label>
    );
  };
  return (
    <BookingModal open={open} onClose={onClose} title="預約確認及後續付款流程 — 預約須知"
      footer={
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <div style={{ fontWeight: "var(--fw-semibold)", color: "var(--text-strong)", fontSize: "var(--text-sm)" }}>我已詳細閱讀以上流程付款等注意事項 *</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 8 }}>
            {opt("yes", "是")}
            {opt("no", "否，我需要再仔細閱讀")}
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end", gap: 10, marginTop: 4 }}>
            <Button variant="ghost" onClick={onClose}>返回修改</Button>
            <Button variant="primary" disabled={agree !== "yes"} onClick={onConfirm}
              iconRight={<i data-lucide="send"></i>}>同意並送出預約</Button>
          </div>
        </div>
      }>
      <p style={{ margin: "0 0 4px", fontWeight: "var(--fw-semibold)", color: "var(--text-strong)" }}>JD 專業雪地攝影服務 — 預約確認及後續付款流程</p>

      <MTitle>【預約內容及需求確認、付款】</MTitle>
      <MItem>JD 白金秘書會將以 Email 方式聯繫您。<br />➡️ 請留意信件 — 信件署名為 bookings@jdnisekosss.com（JD booking &amp; CSD）。<br />⚠️ 有時 Google 信箱會擋信，若您 48 小時內未收到回覆，請檢查一下垃圾信箱。</MItem>
      <MItem>您收到 JD 白金秘書的預約確認信後，請確認預約內容是否正確。</MItem>
      <MItem>預約確認信中將會有付款方式及期程，請依照信中指示完成付款。付款後即正式完成預約。</MItem>
      <MItem>完成預約後您將會在行前約 14 日收到行前通知。</MItem>
      <MItem>* 請依照付款期限完成 💰️ 全額付款。相關預約及取消條款將註明於付款通知信中。</MItem>

      <MTitle>‼️ 關於基本取消（相同條款也將註明於付款通知信中）</MTitle>
      <MItem>冬季期間之預約均無法更改日期，更改日期的需求將被視為取消。</MItem>
      <MItem>所預定日期 31 日（含）前之取消，取消料金為所收行程費用 5%。</MItem>
      <MItem>所預訂日期 15 日（含）前至 30 日之取消，取消料金為所收行程費用 20%。</MItem>
      <MItem>所預訂日期 14 日前至當日之取消，取消料金為所收行程費用 100%。</MItem>

      <MTitle>⚠️ 雪地特殊條款</MTitle>
      <MItem>❗️ 改期／退費：若遇暴風雪、極寒等危險天氣，將於拍攝前 1 小時通知改期或退費。</MItem>
      <MItem>🧣 保暖準備：請自備防寒衣物、暖包，若因身體不適或安全疑慮，攝影師有權中止拍攝。</MItem>
      <MItem>🏔️ 能力評估：若拍攝地點超出您的滑雪能力範圍，基於安全考量，攝影師有權中止拍攝，並帶領您安全離開。</MItem>
      <MItem>🔋 設備限制：低溫及運動環境可能導致相機故障，若嚴重影響拍攝，將提供改期或部分退款。</MItem>

      <MTitle>【完成預約後至行程當日前之聯絡】</MTitle>
      <MItem>請以 📞 官方 LINE，或可加入 WhatsApp：+81 70 4210 7275、WeChat ID：JDnisekosss 等 JD 官方客服帳號，或經由 bookings@jdnisekosss.com 直接連絡，我們將有專人客服為您服務。</MItem>
      <MItem>如有與攝影師期前聯繫的需求，我們將為您建立與攝影師間的專屬群組，方便溝通。</MItem>

      <MTitle>【行程當日】</MTitle>
      <MItem>請於行前通知中指定地點與攝影師會面即可。</MItem>
      <MItem>如有找不到攝影師的情況，可隨時聯繫官方 LINE 群，將有專人客服為您服務。</MItem>
      <MItem>如果為 JD 課程中之攝影服務，攝影師將會在指定時間主動與您會合。</MItem>
    </BookingModal>
  );
}

Object.assign(window, { BookingModal, ServiceInfoModal, NoticeModal });
