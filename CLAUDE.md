# CLAUDE.md — 亨利攝影工作室（GitHub Pages 部署包）長期守則

此資料夾是 henryzjun.github.io 的完整部署內容。任何修改都必須遵守以下規則。

## 設計不可變
- 保留現有版面、字型、顏色、間距、動畫與整體視覺風格，除非使用者明確要求改設計。
- 三個網址永遠不變：`index.html`、`gallery.html`、`booking.html`。

## 效能規則（不可回退）
- **禁止瀏覽器端 Babel**：正式頁不得出現 `@babel/standalone` 或 `<script type="text/babel">`。所有 JSX 一律預編譯成 `js/*.min.js`（來源在專案的 `ui_kits/`，用 Babel+Terser 編譯）。
- React 一律用 production 版（`react.production.min.js` / `react-dom.production.min.js`）。
- **禁止隱藏圖片預載區**（`<div id="henry-assets">` 之類會整批下載的隱藏 `<img>`）。
- **禁止直接使用相機原始解析度圖片**。所有照片必須先做成三層 WebP：
  - `assets/images/thumbnails/` — 最長邊 640px（q0.72），給格狀縮圖用
  - `assets/images/full/` — 最長邊 1600px（q0.80），只在燈箱點開時載入
  - `assets/images/hero/` — 最長邊 1920px（q0.76），只給 LCP 主視覺（cover-hero、philosophy-band、booking-cover）
- 作品集格狀一律用 thumbnails；full 只在使用者點開燈箱後載入。
- 非首屏圖片一律 `loading="lazy" decoding="async"`；`fetchpriority="high"` 與 `<link rel="preload">` 只給 index.html 的 cover-hero 一張。

## 資料驅動
- 作品集內容唯一來源是 `data/projects.json`（首頁精選作品也從這裡讀 `featured`）。
- 新增／調整作品不改 HTML，只改 JSON ＋把優化後圖片放進對應資料夾。

## 維護
- 不引入建置系統（webpack/vite 等）；維持純靜態 HTML/CSS/JS ＋ 預編譯好的 min.js。
- `js/*.min.js` 與 `ds_bundle.min.js` 是編譯產物，不要手改；要改行為請改專案 `ui_kits/` 原始碼後重新編譯。
- 改任何 css/js/json 時同步更新網址上的 `?v=` 版本參數，避免瀏覽器快取舊檔。
- 不重新命名檔案，除非所有引用同步更新；不刪除可見內容。
