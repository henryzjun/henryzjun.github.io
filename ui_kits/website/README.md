# UI Kit — 行銷／作品集網站 Marketing & Portfolio Website

The public face of 亨利攝影工作室. A single-page marketing site that leads with
full-bleed mountain imagery and a clear path to booking.

## Screens / sections
- **SiteNav.jsx** — frosted sticky header with logo lockup, section links, IG + 預約 CTA.
- **Hero.jsx** — full-bleed photo, oversized display headline (品牌主文案), stat MetaRow.
- **FeaturedWork.jsx** — filterable 3-col portfolio grid using `Card` + `Tabs` + `Badge`.
- **Services.jsx** — 3 pricing packages on a sunken band; the middle one is featured.
- **Footer.jsx** — `PhilosophyBand` (quote over dark photo) + `SiteFooter`.

## Composition
`index.html` mounts the sections and wires simple in-page nav. The 預約 CTA links to
`../booking/`, the 作品集 CTA links to `../gallery/`.

## Components used
`Button`, `IconButton`, `Card`, `Badge`, `Tabs`, `MetaRow` from the DS bundle
(`window.HenryStudioRemix_704588`), plus Lucide icons via CDN.

> Imagery is placeholder (atmospheric gradient renders). Swap `assets/photos/*.jpg`
> for real ski photography.
