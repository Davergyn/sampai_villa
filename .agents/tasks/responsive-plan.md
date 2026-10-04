# Responsive Design Implementation Plan
## Sampai Villa Jogja — Next.js 14 / Tailwind CSS v4

> **Rules**: Only Tailwind responsive prefixes (`sm:`, `md:`, `lg:`, `xl:`). No brand color, copy, or structure changes. Verify with `npm run build` from `c:\Users\M S I\PentingDah\Project\booking_villa`.

---

## 1. `src/components/layout/Navbar.tsx`

### Issues found
- Hamburger button has `p-2` only — renders ~38×38px, below the 44px touch-target minimum.
- Desktop nav hides at `md:` but the spec requires `lg:` — on a 768px tablet, no nav links are shown yet the hamburger is also hidden.

### Exact changes

| Location | Old class(es) | New class(es) |
|---|---|---|
| `<nav>` (desktop) | `hidden md:flex` | `hidden lg:flex` |
| Book Now `<Link>` (desktop) | `hidden md:inline-flex` | `hidden lg:inline-flex` |
| hamburger `<button>` | `md:hidden p-2` | `lg:hidden min-h-[44px] min-w-[44px] flex items-center justify-center` |

No other changes needed — logo, mobile overlay, and colour logic are fine.

### Expected behaviour
- **375px**: Logo left, hamburger right (≥44×44px tap area). Tapping opens full-screen overlay with nav links + Book Now.
- **768px**: Same as 375px — hamburger is visible, overlay opens.
- **1280px**: Horizontal logo + 4 nav links + Book Now button on one line. Hamburger hidden.

---

## 2. `src/components/layout/Footer.tsx`

### Issues found
- `grid-cols-1 md:grid-cols-4` skips the 2-column tablet breakpoint required by the spec.
- Brand column (`md:col-span-2`) is correct once grid is fixed.

### Exact changes

| Location | Old class(es) | New class(es) |
|---|---|---|
| grid wrapper `<div>` | `grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8` | `grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 md:gap-8` |
| Brand `<div>` | `md:col-span-2` | `sm:col-span-2 md:col-span-2` |

### Expected behaviour
- **375px**: Single-column stack (brand → nav → contact).
- **768px**: 2-column grid (brand spans full row, nav + contact side by side).
- **1280px**: 4-column grid, brand takes 2 cols.

---

## 3. `src/components/home/Hero.tsx`

### Issues found
- SearchBar panel uses `-mb-16` (negative margin bottom) which causes it to overlap the next section on all screens, including mobile where the overlap is visually broken.
- CTA buttons use `flex-wrap gap-4` — they wrap, but the spec requires explicitly `flex-col` on mobile and `flex-row` on sm+.
- No explicit `sm:` step in headline — already has `text-4xl sm:text-5xl md:text-6xl lg:text-7xl` ✓ (no change needed).

### Exact changes

| Location | Old class(es) | New class(es) |
|---|---|---|
| CTA button wrapper `<div>` | `flex flex-wrap gap-4` | `flex flex-col sm:flex-row gap-4` |
| SearchBar wrapper `<div>` (bottom of section) | `relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-0 -mb-16` | `relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-6 md:pb-0 md:-mb-16` |

The `pb-6` on mobile gives the search bar breathing room inside the hero. The `md:-mb-16` restores the overlap effect only on md+, matching the spec requirement ("negative margin only on md+").

### Expected behaviour
- **375px**: Hero full viewport height. Headline ~36px. CTA buttons stacked vertically. SearchBar inside the hero with 24px bottom padding — does NOT overlap next section.
- **768px**: Headline ~48px. CTA buttons side by side. SearchBar begins to overlap the next section (-mb-16 active from md).
- **1280px**: Headline ~72px. CTA side by side. SearchBar overlaps next section by 64px.

---

## 4. `src/app/page.tsx`

### Issues found
- `pt-20 md:pt-24` on the wrapper after `<Hero>` compensates for the search bar's `-mb-16` overlap. On mobile, the Hero no longer uses negative margin, so the wrapper needs `pt-0 md:pt-20 lg:pt-24`.

### Exact changes

| Location | Old class(es) | New class(es) |
|---|---|---|
| wrapper `<div>` after `<Hero />` | `pt-20 md:pt-24` | `pt-0 md:pt-20` |

### Expected behaviour
- **375px**: FeaturedVillas section starts directly below the hero search bar (no gap).
- **768px+**: 80px top-padding applied to compensate for the -mb-16 overlap.

---

## 5. `src/components/home/SearchBar.tsx`

### Issues found
- Mobile fields have no minimum height — inputs render ~30px, below 44px touch minimum.
- Search button is right-aligned only; on mobile it should be full-width.
- `first:pl-0` on the location field is an irregular pattern that can be replaced by proper responsive padding.

### Exact changes

| Location | Old class(es) | New class(es) |
|---|---|---|
| Location field wrapper `<div>` | `flex items-center gap-3 md:px-5 first:pl-0` | `flex items-center gap-3 py-3 md:py-0 md:px-5` |
| Check-in field wrapper `<div>` | `flex items-center gap-3 md:px-5` | `flex items-center gap-3 py-3 md:py-0 md:px-5` |
| Check-out field wrapper `<div>` | `flex items-center gap-3 md:px-5` | `flex items-center gap-3 py-3 md:py-0 md:px-5` |
| Guests field wrapper `<div>` | `flex items-center gap-3 md:px-5` | `flex items-center gap-3 py-3 md:py-0 md:px-5` |
| Button wrapper `<div>` | `mt-4 md:mt-3 flex justify-end` | `mt-4 md:mt-3 flex justify-end` *(no change — button below)* |
| Search `<button>` | `inline-flex items-center gap-2 px-7 py-3 ...` | `w-full md:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 ...` |

### Expected behaviour
- **375px**: Fields stacked vertically, each ≥44px tall. Button is full-width.
- **768px**: 4-column horizontal grid, button is auto-width right-aligned.
- **1280px**: Same as 768px.

---

## 6. `src/components/home/FeaturedVillas.tsx`

### Issues found
- Grid is already `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3` ✓ — no change needed.
- `VillaCard` title is `text-base` on all sizes. Spec requires `text-base` (acceptable for card), but per typography baseline: H3/card title should be `text-xl sm:text-2xl`. Apply to VillaCard (see item 9 below).
- No changes needed in this file itself.

---

## 7. `src/components/ui/SectionHeading.tsx`

### Issues found
- H2 is `text-3xl md:text-4xl lg:text-5xl` — missing `sm:` step specified in the typography baseline (`text-3xl sm:text-4xl md:text-5xl`).

### Exact changes

| Location | Old class(es) | New class(es) |
|---|---|---|
| `<h2>` | `text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight` | `text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-tight` |

### Expected behaviour
- **375px**: Section headings ~30px.
- **768px**: ~36px.
- **1280px**: ~48px.

---

## 8. `src/components/home/ExperienceSection.tsx`

### Issues found
- The floating accent image uses `absolute -bottom-6 -right-6 md:-right-10` — on mobile, this absolutely-positioned element bleeds outside the parent container at the right edge, causing horizontal overflow.
- The parent `<div className="relative">` has no overflow guard or bottom padding to contain the floating image.

### Exact changes

| Location | Old class(es) | New class(es) |
|---|---|---|
| Accent image outer `<div>` | `absolute -bottom-6 -right-6 md:-right-10 w-48 md:w-64 aspect-square rounded-2xl overflow-hidden border-4 border-[#F7F7F5]` | `hidden sm:block absolute -bottom-6 -right-6 md:-right-10 w-48 md:w-64 aspect-square rounded-2xl overflow-hidden border-4 border-[#F7F7F5]` |
| Image wrapper `<div className="relative">` | `relative` | `relative pb-8 sm:pb-0` |

The `hidden sm:block` hides the accent image on phones entirely (prevents overflow). The `pb-8` is only needed on xs to give the main image container breathing room when the accent image IS shown on sm+, but since it's hidden on xs that padding is harmless and we can also just use `sm:pb-6` to push the image column down only when the accent is visible.

Revised cleaner version:
- Accent `<div>`: add `hidden sm:block` to existing classes (no other class change).
- Image wrapper `<div>`: change `relative` → `relative pb-0 sm:pb-6`.

### Expected behaviour
- **375px**: Only main portrait image is shown, no accent tile, no overflow.
- **768px**: Accent tile appears bottom-right of the main image, contained.
- **1280px**: Full accent tile effect as designed.

---

## 9. `src/components/villas/VillaCard.tsx`

### Issues found
- Card title `<h3>` is `text-base` — spec says H3/card title should scale with `text-xl sm:text-2xl` but for a card grid this would be oversized. The spec's intent is that on mobile cards don't truncate. Current `text-base` is appropriate; keep as-is.
- No overflow/truncation issues found — text has no `truncate` or `overflow-hidden`.
- `aspect-[4/3]` is maintained ✓.
- **No changes needed** in VillaCard.tsx.

---

## 10. `src/components/home/WhySampai.tsx`

### Issues found
- Grid is already `grid-cols-1 md:grid-cols-2` ✓.
- Cell padding `p-8 md:p-12` — adequate on mobile.
- Number text `text-6xl md:text-7xl` — fine.
- H3 `text-xl md:text-2xl` — matches spec baseline ✓.
- **No changes needed**.

---

## 11. `src/components/home/LocationsSection.tsx`

### Issues found
- Grid is `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5` — this already matches the spec's required value. ✓
- Cards use `aspect-[3/4]` on all breakpoints. Spec requires `aspect-[2/3]` on mobile to prevent portrait cards being too tall on phones.

### Exact changes

| Location | Old class(es) | New class(es) |
|---|---|---|
| Link card `className` | `group block relative aspect-[3/4] rounded-xl overflow-hidden` | `group block relative aspect-[2/3] sm:aspect-[3/4] rounded-xl overflow-hidden` |

### Expected behaviour
- **375px**: Cards are 2:3 ratio (landscape-ish portrait), less extreme height. Grid is 1 column.
- **768px**: 2-column grid, cards revert to 3:4 portrait.
- **1280px**: 5-column grid, 3:4 portrait.

---

## 12. `src/components/home/CtaSection.tsx`

### Issues found
- Headline already has `text-3xl sm:text-4xl md:text-5xl lg:text-6xl` ✓.
- Section has `overflow-hidden` ✓.
- **No changes needed**.

---

## 13. `src/components/locations/LocationCard.tsx`

### Issues found
- `aspect-[3/4]` maintained ✓.
- Text has no truncation, readable at all widths ✓.
- **No changes needed**.

---

## 14. `src/components/villas/VillaFilters.tsx`

### Issues found
- Mobile filter open button: `px-4 py-2.5` → height ~40px, below 44px minimum.
- Mobile drawer close (X) button: bare `<button onClick...><X /></button>` — no padding, renders ~20×20px touch target.

### Exact changes

| Location | Old class(es) | New class(es) |
|---|---|---|
| Mobile open `<button>` | `inline-flex items-center gap-2 px-4 py-2.5 border border-[#E7E7E7] rounded-full text-sm font-medium text-[#171717]` | `inline-flex items-center gap-2 px-4 py-3 min-h-[44px] border border-[#E7E7E7] rounded-full text-sm font-medium text-[#171717]` |
| Drawer close `<button>` | `onClick={() => setShowMobileFilters(false)}` *(no className)* | add `className="p-2 min-h-[44px] min-w-[44px] flex items-center justify-center text-[#171717]"` |

### Expected behaviour
- **375px**: Filter button ≥44px tall. Drawer opens. Close (X) button ≥44×44px tappable area.
- **768px**: Same as 375px (lg:hidden still active at 768px after Navbar fix sets lg breakpoint).
- **1280px**: Desktop sidebar shown, no mobile button.

---

## 15. `src/components/villas/VillaGallery.tsx`

### Issues found
- On mobile (`<md`), the grid is `grid-cols-2 md:grid-cols-4` — this shows a small main image alongside 3 tiny thumbnails (each ~40% viewport width), all extremely cramped.
- Spec: mobile → show only main image full-width, hide thumbnails, add prev/next overlay buttons.
- Lightbox close/prev/next buttons have no padding (use only icon size for hit area), below 44px.

### Exact changes

**Grid wrapper:**
- Old: `grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3`
- New: `grid grid-cols-1 md:grid-cols-4 md:gap-3`

**Main image wrapper:**
- Old: `col-span-2 row-span-2 relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer`
- New: `col-span-1 md:col-span-2 md:row-span-2 relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer`

**Thumbnail wrappers** (the `.slice(1,4).map` items):
- Old: `relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer`
- New: `hidden md:block relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer`

**Add mobile prev/next overlay buttons** inside the main image wrapper (visible only on `<md`):
```tsx
{/* Mobile prev/next buttons — only shown when <md */}
<button
  onClick={(e) => { e.stopPropagation(); prevMobileImage(); }}
  className="md:hidden absolute left-2 top-1/2 -translate-y-1/2 z-10 p-3 bg-black/40 rounded-full text-white min-h-[44px] min-w-[44px] flex items-center justify-center"
  aria-label="Sebelumnya"
>
  <ChevronLeft size={20} />
</button>
<button
  onClick={(e) => { e.stopPropagation(); nextMobileImage(); }}
  className="md:hidden absolute right-2 top-1/2 -translate-y-1/2 z-10 p-3 bg-black/40 rounded-full text-white min-h-[44px] min-w-[44px] flex items-center justify-center"
  aria-label="Berikutnya"
>
  <ChevronRight size={20} />
</button>
```

Add `mobileIndex` state (`useState(0)`) and helpers:
```tsx
const [mobileIndex, setMobileIndex] = useState(0);
const prevMobileImage = () => setMobileIndex((i) => (i - 1 + images.length) % images.length);
const nextMobileImage = () => setMobileIndex((i) => (i + 1) % images.length);
```
The main image `src` on mobile uses `images[mobileIndex]` — but to avoid JSX branching, use a ternary: the `onClick` on the main image wrapper should `openLightbox(mobileIndex)` rather than `openLightbox(0)`.

**Lightbox buttons** (close/prev/next):
- Close: `className="absolute top-4 right-4 text-white/70 hover:text-white"` → `className="absolute top-4 right-4 p-3 min-h-[44px] min-w-[44px] flex items-center justify-center text-white/70 hover:text-white"`
- Prev: `className="absolute left-4 text-white/70 hover:text-white"` → `className="absolute left-4 top-1/2 -translate-y-1/2 p-3 min-h-[44px] min-w-[44px] flex items-center justify-center text-white/70 hover:text-white"`
- Next: `className="absolute right-4 text-white/70 hover:text-white"` → `className="absolute right-4 top-1/2 -translate-y-1/2 p-3 min-h-[44px] min-w-[44px] flex items-center justify-center text-white/70 hover:text-white"`

### Expected behaviour
- **375px**: Single full-width main image with left/right overlay buttons. Lightbox buttons are easy tap targets.
- **768px**: Still single main image with overlay nav.
- **1280px**: 2-col-main + 3 thumbnails grid. Overlay nav buttons hidden.

---

## 16. `src/components/villas/VillaBookingPanel.tsx`

### Issues found
- Date inputs inside `<div className="p-3">` — the 12px padding means the clickable area is tight on mobile, but the label + input combo is ok. The spec says `py-3` for date inputs; currently `p-3` already includes `py-3`, so ✓.
- Guest counter `+/-` buttons: `w-7 h-7` = 28×28px, below the 44px spec.

### Exact changes

| Location | Old class(es) | New class(es) |
|---|---|---|
| Decrement `<button>` | `w-7 h-7 rounded-full border border-[#E7E7E7] flex items-center justify-center text-[#171717] hover:border-[#7A6A58] transition-colors` | `w-9 h-9 rounded-full border border-[#E7E7E7] flex items-center justify-center text-[#171717] hover:border-[#7A6A58] transition-colors` |
| Increment `<button>` | `w-7 h-7 rounded-full border border-[#E7E7E7] flex items-center justify-center text-[#171717] hover:border-[#7A6A58] transition-colors` | `w-9 h-9 rounded-full border border-[#E7E7E7] flex items-center justify-center text-[#171717] hover:border-[#7A6A58] transition-colors` |

Note: `w-9 h-9` = 36px. Still below 44px but the spec says "w-9 h-9 min" — honour spec exactly. The surrounding `flex items-center justify-between` row gives each button more real tappable context.

The panel is already `lg:sticky` ✓ and flows in-document on mobile.

### Expected behaviour
- **375px**: Booking panel is in-flow below gallery. Guest +/− buttons 36×36px. Date inputs comfortable.
- **1280px**: Panel sticky in right column (lg:sticky lg:top-28 from parent page).

---

## 17. `src/components/villas/VillaGrid.tsx`

### Issues found
- Already `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3` ✓.
- **No changes needed**.

---

## 18. `src/app/villas/page.tsx`

### Issues found
- Page header H1 is `text-4xl md:text-5xl` — missing `sm:` step.
- Villa count paragraph `{filtered.length} villa tersedia` in the header is always visible; the `{filtered.length} villa ditemukan` in the mobile row is redundant but follows spec ("visible on mobile") ✓.
- The mobile filter row shows count + filter button correctly ✓.

### Exact changes

| Location | Old class(es) | New class(es) |
|---|---|---|
| `<h1>` in header | `text-4xl md:text-5xl font-semibold text-[#171717] tracking-tight` | `text-4xl sm:text-5xl font-semibold text-[#171717] tracking-tight` |

### Expected behaviour
- **375px**: Heading ~36px, filter row + villa count visible above single-column grid.
- **768px**: Heading ~48px, same mobile layout (lg:hidden still shows filter button).
- **1280px**: Heading ~48px (sm:text-5xl is the max), sidebar + grid layout.

---

## 19. `src/app/villas/[slug]/page.tsx`

### Issues found
- Gallery section: `VillaGallery` renders full-width already (no wrapper width constraint) ✓.
- Info + booking layout: `flex flex-col lg:flex-row gap-12` ✓ — already correct.
- Facilities grid: already `grid-cols-2 sm:grid-cols-3` ✓.
- Page H1: `text-3xl md:text-4xl` — missing `sm:` step.

### Exact changes

| Location | Old class(es) | New class(es) |
|---|---|---|
| Villa name `<h1>` | `text-3xl md:text-4xl font-semibold text-[#171717] tracking-tight` | `text-3xl sm:text-4xl font-semibold text-[#171717] tracking-tight` |

### Expected behaviour
- **375px**: Name ~30px, info stacks above booking panel.
- **768px**: Name ~36px, still stacked.
- **1280px**: Name ~36px, side-by-side layout (lg:flex-row).

---

## 20. `src/app/about/page.tsx`

### Issues found
- Page H1: `text-4xl md:text-5xl` — missing `sm:` step.
- Story section H2: `text-3xl` (no sm/md steps) — should be `text-3xl sm:text-4xl`.
- Mission block padding: `p-10 md:p-16` — spec says `p-8 md:p-16` for better mobile readability.
- Story image: `aspect-[4/3]` ✓, no issues.
- Values grid: `grid-cols-1 md:grid-cols-2` ✓.
- Mission grid: `grid-cols-1 md:grid-cols-3` ✓.

### Exact changes

| Location | Old class(es) | New class(es) |
|---|---|---|
| Page `<h1>` | `text-4xl md:text-5xl font-semibold text-[#171717] tracking-tight` | `text-4xl sm:text-5xl font-semibold text-[#171717] tracking-tight` |
| Story `<h2>` | `text-3xl font-semibold text-[#171717] mb-6 tracking-tight` | `text-3xl sm:text-4xl font-semibold text-[#171717] mb-6 tracking-tight` |
| Mission block `<div>` | `bg-[#171717] rounded-3xl p-10 md:p-16 mb-20` | `bg-[#171717] rounded-3xl p-8 md:p-16 mb-20` |
| Mission `<h2>` | `text-3xl md:text-4xl font-semibold text-white mb-8 tracking-tight max-w-2xl` | `text-3xl sm:text-4xl font-semibold text-white mb-8 tracking-tight max-w-2xl` |
| Values `<h2>` | `text-3xl font-semibold text-[#171717] mb-10 tracking-tight` | `text-3xl sm:text-4xl font-semibold text-[#171717] mb-10 tracking-tight` |

### Expected behaviour
- **375px**: H1 ~36px, mission block has 32px padding, content readable.
- **768px**: H1 ~48px, mission block has 32px padding.
- **1280px**: Mission block has 64px padding, headings ~48px.

---

## 21. `src/app/contact/page.tsx`

### Issues found
- Submit button `inline-flex ... px-8 py-3.5` — not full-width on mobile. Spec requires `w-full sm:w-auto`.
- Page H1: `text-4xl md:text-5xl` — missing `sm:` step.

### Exact changes

| Location | Old class(es) | New class(es) |
|---|---|---|
| Page `<h1>` | `text-4xl md:text-5xl font-semibold text-[#171717] tracking-tight` | `text-4xl sm:text-5xl font-semibold text-[#171717] tracking-tight` |
| Submit `<button>` | `inline-flex items-center gap-2 px-8 py-3.5 bg-[#7A6A58] text-white font-semibold rounded-full hover:bg-[#6a5a48] transition-colors` | `w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#7A6A58] text-white font-semibold rounded-full hover:bg-[#6a5a48] transition-colors` |

### Expected behaviour
- **375px**: Submit button spans full width of form. H1 ~36px.
- **768px**: H1 ~48px, button auto-width.
- **1280px**: 2-column layout, button auto-width.

---

## 22. `src/app/locations/page.tsx`

### Issues found
- Page H1: `text-4xl md:text-5xl` — missing `sm:` step.
- Location card grid: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3` ✓.

### Exact changes

| Location | Old class(es) | New class(es) |
|---|---|---|
| Page `<h1>` | `text-4xl md:text-5xl font-semibold text-[#171717] tracking-tight mb-4` | `text-4xl sm:text-5xl font-semibold text-[#171717] tracking-tight mb-4` |

### Expected behaviour
- **375px**: H1 ~36px.
- **768px**: H1 ~48px, 2-column grid.
- **1280px**: 3-column grid.

---

## Implementation Order (dependency-first)

The items below are ordered so each leaves the codebase buildable. Items 1–5 are independent of each other and can be done in any order. Items 6+ are independent unless noted.

```
- [ ] 1. Navbar.tsx           — change md: → lg: for nav/button; fix hamburger touch target
- [ ] 2. Footer.tsx           — add sm:grid-cols-2 to grid; sm:col-span-2 on brand
- [ ] 3. Hero.tsx             — CTA flex-col mobile; SearchBar pb-6 md:pb-0 md:-mb-16
- [ ] 4. app/page.tsx         — change pt-20 md:pt-24 → pt-0 md:pt-20
- [ ] 5. SearchBar.tsx        — py-3 per field on mobile; button w-full md:w-auto
- [ ] 6. SectionHeading.tsx   — add sm:text-4xl step
- [ ] 7. ExperienceSection.tsx — accent image hidden sm:block; wrapper pb-0 sm:pb-6
- [ ] 8. LocationsSection.tsx  — aspect-[2/3] sm:aspect-[3/4] on location link cards
- [ ] 9. VillaFilters.tsx     — mobile open button min-h-[44px]; drawer X button p-2 min-h-[44px] min-w-[44px]
- [ ] 10. VillaGallery.tsx    — mobile single-image + prev/next; hide thumbnails; lightbox button padding
- [ ] 11. VillaBookingPanel.tsx — w-7→w-9, h-7→h-9 on guest counter buttons
- [ ] 12. villas/page.tsx     — h1 text-4xl sm:text-5xl
- [ ] 13. villas/[slug]/page.tsx — villa name h1 text-3xl sm:text-4xl
- [ ] 14. about/page.tsx      — 4 heading fixes; p-10→p-8 on mission block
- [ ] 15. contact/page.tsx    — h1 sm step; button w-full sm:w-auto
- [ ] 16. locations/page.tsx  — h1 sm step
```

---

## Verification

After all changes are applied:

```bash
cd "c:\Users\M S I\PentingDah\Project\booking_villa"
npm run build
```

Expected output: `✓ Compiled successfully` with zero TypeScript and zero Tailwind errors. All pages generate static routes without errors.
