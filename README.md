# 亨利攝影工作室 — 官方網站（GitHub Pages）

滑雪攝影工作室的靜態網站：官網首頁、影像作品集、預約系統（送 Google 試算表）。
純靜態 HTML/CSS/JS，無建置系統，直接上傳到 GitHub Pages 即可運作。

## 專案結構

```
index.html            官網首頁（含精選作品，讀 data/projects.json 的 featured）
gallery.html          影像作品集（格狀縮圖 → 點開燈箱看大圖）
booking.html          預約流程（三步驟表單 → Google 試算表）
data/projects.json    ★ 作品集唯一資料來源（8 個故事、每張照片的縮圖/大圖路徑與尺寸）
js/site.min.js        首頁行為（預編譯，勿手改）
js/gallery.min.js     作品集行為（預編譯，勿手改）
js/booking.min.js     預約行為（預編譯，勿手改）
ds_bundle.min.js      設計系統元件（預編譯，勿手改）
styles.css / site.css / tokens/   樣式與設計代幣
assets/logo-lockup*.svg           Logo
assets/images/
  ├─ hero/            1920px WebP — 只給首頁 Cover、哲學帶、預約封面
  ├─ thumbnails/      640px WebP — 所有格狀縮圖
  └─ full/            1600px WebP — 燈箱大圖（點開才載入）
```

## 圖片策略（務必遵守）
- 格狀畫面只載 `thumbnails/`；`full/` 只在燈箱點開時載入；`hero/` 只給主視覺。
- 全站只 preload 一張圖：index.html 的 `hero/cover-hero.webp`（LCP）。
- 其他圖片皆 `loading="lazy" decoding="async"`。
- 不要把相機原始檔放進網站。

## 如何新增照片到既有作品
1. 把原始照片縮成兩個 WebP：
   - 最長邊 640px、品質 ~72% → `assets/images/thumbnails/<id>.webp`
   - 最長邊 1600px、品質 ~80% → `assets/images/full/<id>.webp`
   （squoosh.app 或任何批次工具皆可；`<id>` 用小寫英數與連字號）
2. 在 `data/projects.json` 找到該作品，於 `shots` 陣列加一筆：
   ```json
   { "id": "<id>", "width": 原寬, "height": 原高,
     "thumbnail": "assets/images/thumbnails/<id>.webp",
     "full": "assets/images/full/<id>.webp" }
   ```
   `shots[0]` 是封面。`width/height` 填縮圖前的像素比例即可（用來預留版位、避免載入跳動）。
3. 上傳更動的檔案。網站自動更新，不用改 HTML。

## 如何新增一個作品（故事）
在 `data/projects.json` 的 `projects` 加一個物件：
```json
{ "id": 9, "slug": "my-story", "title": "故事標題", "category": "portrait",
  "location": "NISEKO", "date": "2026 雪季", "description": "一段描述。",
  "span": 1, "tags": ["portrait", "NISEKO"], "featured": null,
  "hero": "assets/images/full/<封面id>.webp", "shots": [ …同上… ] }
```
- 要出現在首頁「精選作品」：把 `featured` 設成 `{ "order": 排序, "kind": "人像" }`。
- 要隱藏一個作品：把它的 `shots` 清空或整筆移除即可。

## 部署到 GitHub Pages
1. 把這個資料夾的**全部內容**上傳到 `henryzjun.github.io` repo 根目錄（覆蓋）。
2. 等 1–2 分鐘 GitHub Pages 重新發佈即可。
3. 若改了 css/js/json，記得 HTML 內對應網址的 `?v=` 已更新（避免舊快取）。

## 注意
- `js/*.min.js`、`ds_bundle.min.js` 是編譯產物；要改功能請回到設計專案的 `ui_kits/` 原始碼重新編譯（詳見 CLAUDE.md）。
- 預約表單欄位若有增減，Google Apps Script 的 `HEADERS` 必須同步。
