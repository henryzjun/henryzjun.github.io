# UI Kit — 影像作品集 Photo / Video Gallery

The work showcase. A masonry gallery that opens any image into a fullscreen
lightbox with an EXIF panel — leaning into the photographer-tool aesthetic.

## Screens / sections
- **data.jsx** — the placeholder image set with EXIF metadata (`window.GALLERY_ITEMS`).
- **GalleryGrid.jsx** — CSS-columns masonry; hover reveals a caption gradient + 放大 control; video items get an accent 影片 badge.
- **Lightbox.jsx** — fixed overlay, large image, prev/next (← → keys, Esc to close), and a right-hand EXIF + actions panel.

## Interaction
Filter tabs (粉雪 / 空拍 / 人像) drive the visible set; clicking a tile opens the
lightbox scoped to the filtered set; arrows wrap around.

## Components used
`Tabs`, `Badge`, `IconButton`, `MetaRow`, `Button` from `window.HenryStudioRemix_704588`.

> Imagery is placeholder. Replace `assets/photos/*.jpg` with real ski photography,
> and wire `video:true` items to actual clips.
