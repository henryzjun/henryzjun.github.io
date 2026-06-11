// Shared — EditableImage：可直接上傳替換的圖片槽
// 圖片會自動縮放 + 壓縮成適合網頁的大小，存在瀏覽器 localStorage，重新整理也會保留。
(function () {
  if (document.getElementById("ei-styles")) return;
  const st = document.createElement("style");
  st.id = "ei-styles";
  st.textContent = `
    .ei-wrap { position: relative; overflow: hidden; }
    .ei-controls { position: absolute; top: 10px; right: 10px; z-index: 6; display: flex; gap: 6px;
      opacity: 0; transition: opacity 160ms ease; }
    .ei-wrap:hover .ei-controls, .ei-wrap:focus-within .ei-controls,
    figure:hover .ei-controls, .hs-card:hover .ei-controls { opacity: 1; }
    @media (hover: none) { .ei-controls { opacity: 1; } }
    .ei-btn { display: inline-flex; align-items: center; gap: 6px; height: 30px; padding: 0 11px;
      border-radius: 999px; border: 1px solid rgba(251,251,250,0.35);
      background: rgba(28,27,25,0.55); color: #fbfbfa; font-size: 12px; line-height: 1;
      font-family: var(--font-sans, sans-serif); font-weight: 500; cursor: pointer;
      backdrop-filter: blur(6px); -webkit-backdrop-filter: blur(6px);
      transition: background 160ms ease; white-space: nowrap; }
    .ei-btn:hover { background: rgba(28,27,25,0.78); }
    .ei-btn svg { width: 13px; height: 13px; flex-shrink: 0; }
  `;
  document.head.appendChild(st);
})();

// 讀取某個圖片槽目前的圖（自訂優先，否則用預設）— 給 Lightbox 等唯讀場景用
window.henryImg = function (id, fallback) {
  const fb = window.A ? window.A(fallback) : fallback;
  try { return localStorage.getItem("henry-img-" + id) || fb; } catch (e) { return fb; }
};

function EditableImage({ id, src, alt = "", style = {}, imgStyle = {}, maxEdge = 1600, label = "更換圖片" }) {
  const key = "henry-img-" + id;
  const [custom, setCustom] = React.useState(() => {
    try { return localStorage.getItem(key); } catch (e) { return null; }
  });
  const inputRef = React.useRef(null);

  const onFile = (e) => {
    const f = e.target.files && e.target.files[0];
    e.target.value = "";
    if (!f) return;
    const url = URL.createObjectURL(f);
    const img = new Image();
    img.onload = () => {
      const scale = Math.min(1, maxEdge / Math.max(img.width, img.height));
      const w = Math.max(1, Math.round(img.width * scale));
      const h = Math.max(1, Math.round(img.height * scale));
      const c = document.createElement("canvas");
      c.width = w; c.height = h;
      c.getContext("2d").drawImage(img, 0, 0, w, h);
      let q = 0.85;
      let out = c.toDataURL("image/jpeg", q);
      while (out.length > 700 * 1024 && q > 0.55) { q -= 0.08; out = c.toDataURL("image/jpeg", q); }
      URL.revokeObjectURL(url);
      try { localStorage.setItem(key, out); setCustom(out); }
      catch (err) { alert("瀏覽器儲存空間不足：請先「還原」其他圖片，或改用較小的照片。"); }
    };
    img.onerror = () => { URL.revokeObjectURL(url); alert("無法讀取此圖片，請改用 JPG 或 PNG 檔。"); };
    img.src = url;
  };

  const reset = (e) => {
    e.stopPropagation();
    try { localStorage.removeItem(key); } catch (err) {}
    setCustom(null);
  };

  return (
    <div className="ei-wrap" style={style}>
      <img src={custom || (window.A ? window.A(src) : src)} alt={alt}
        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", ...imgStyle }} />
      <div className="ei-controls" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="ei-btn" aria-label={label}
          onClick={(e) => { e.stopPropagation(); inputRef.current && inputRef.current.click(); }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
          {label}
        </button>
        {custom && (
          <button type="button" className="ei-btn" onClick={reset} aria-label="還原預設圖片">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 1 0 3-6.7L3 8"></path><polyline points="3 3 3 8 8 8"></polyline></svg>
            還原
          </button>
        )}
      </div>
      <input ref={inputRef} type="file" accept="image/*" style={{ display: "none" }}
        onChange={onFile} onClick={(e) => e.stopPropagation()} />
    </div>
  );
}
window.EditableImage = EditableImage;
