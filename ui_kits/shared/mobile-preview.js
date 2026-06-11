// Shared — 手機預覽模式：右下角按鈕，打開 390×844 的手機外框預覽本頁
(function () {
  // 已經在手機預覽 iframe 裡 → 不再顯示按鈕
  try { if (window.frameElement && window.frameElement.hasAttribute("data-mp")) return; } catch (e) {}

  function init() {
    if (document.getElementById("mp-fab")) return;

    var css = document.createElement("style");
    css.textContent = [
      "#mp-fab { position: fixed; right: 18px; bottom: 18px; z-index: 998;",
      "  display: inline-flex; align-items: center; gap: 8px; height: 44px; padding: 0 18px;",
      "  border: none; border-radius: 999px; cursor: pointer;",
      "  background: var(--brand, #538799); color: #fbfbfa;",
      "  font-family: var(--font-sans, sans-serif); font-size: 14px; font-weight: 600;",
      "  box-shadow: 0 6px 24px rgba(28,27,25,0.28); transition: transform 160ms ease, background 160ms ease; }",
      "#mp-fab:hover { background: var(--brand-hover, #426e7e); }",
      "#mp-fab:active { transform: scale(0.96); }",
      "#mp-fab svg { width: 16px; height: 16px; }",
      "#mp-overlay { position: fixed; inset: 0; z-index: 999; display: flex; align-items: center; justify-content: center;",
      "  background: rgba(20,19,18,0.82); backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px); }",
      "#mp-frame { background: #1c1b19; border-radius: 52px; padding: 12px;",
      "  box-shadow: 0 30px 80px rgba(0,0,0,0.5); flex-shrink: 0; }",
      "#mp-frame iframe { display: block; width: 390px; height: 844px; border: none; border-radius: 40px; background: #fbfbfa; }",
      "#mp-close { position: fixed; top: 16px; right: 16px; z-index: 1000; width: 40px; height: 40px;",
      "  display: inline-flex; align-items: center; justify-content: center; border: 1px solid rgba(251,251,250,0.3);",
      "  border-radius: 999px; background: rgba(28,27,25,0.6); color: #fbfbfa; cursor: pointer; font-size: 18px; }",
      "#mp-close:hover { background: rgba(28,27,25,0.85); }",
      "#mp-label { position: fixed; bottom: 14px; left: 50%; transform: translateX(-50%); z-index: 1000;",
      "  color: rgba(251,251,250,0.75); font-family: var(--font-mono, monospace); font-size: 12px; letter-spacing: 0.08em; }"
    ].join("\n");
    document.head.appendChild(css);

    var fab = document.createElement("button");
    fab.id = "mp-fab";
    fab.type = "button";
    fab.setAttribute("aria-label", "手機預覽");
    fab.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="7" y="2" width="10" height="20" rx="2.5"></rect><line x1="11" y1="18.5" x2="13" y2="18.5"></line></svg><span>手機預覽</span>';
    document.body.appendChild(fab);

    var overlay = null;

    function close() {
      if (!overlay) return;
      overlay.remove();
      overlay = null;
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", fit);
      document.documentElement.style.overflow = "";
    }
    function onKey(e) { if (e.key === "Escape") close(); }
    function fit() {
      if (!overlay) return;
      var frame = overlay.querySelector("#mp-frame");
      var s = Math.min(1, (window.innerHeight - 64) / 868, (window.innerWidth - 32) / 414);
      frame.style.transform = "scale(" + s + ")";
    }
    function open() {
      if (overlay) return;
      overlay = document.createElement("div");
      overlay.id = "mp-overlay";
      var u;
      try { u = new URL(window.location.href); u.hash = ""; u = u.toString(); }
      catch (e) { u = window.location.href; }
      overlay.innerHTML =
        '<div id="mp-frame"><iframe data-mp src="' + u.replace(/"/g, "&quot;") + '"></iframe></div>' +
        '<button id="mp-close" type="button" aria-label="關閉預覽">✕</button>' +
        '<div id="mp-label">390 × 844 · MOBILE PREVIEW</div>';
      document.body.appendChild(overlay);
      overlay.addEventListener("click", function (e) { if (e.target === overlay) close(); });
      overlay.querySelector("#mp-close").addEventListener("click", close);
      document.addEventListener("keydown", onKey);
      window.addEventListener("resize", fit);
      document.documentElement.style.overflow = "hidden";
      fit();
    }
    fab.addEventListener("click", open);
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
