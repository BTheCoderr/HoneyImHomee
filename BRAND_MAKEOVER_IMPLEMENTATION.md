# Honey, I'm Home — Brand Makeover Implementation Plan

## Overview

This document outlines the step-by-step technical plan used to migrate the site from the previous "HoneyByJasmine" style to the new **Honey, I'm Home** (@honeyimhome.co) brand—high-end, cozy, and artisanal.

---

## 1. Visual Identity & Design System

### Color Mapping (Brand Style Guide)

| Element | Color Name | Hex | Usage |
|--------|------------|-----|-------|
| Primary | Dusty Rose | `#D8A7A7` | Buttons, logo accents, active links |
| Secondary | Sage Green | `#8A9A5B` | Botanical accents, success states, tags |
| Background | Warm Cream | `#FDFBF7` | Body background (replaces `#FFFFFF`) |
| Accent | Soft Lavender | `#E6E6FA` | Section dividers, subtle textures |
| Text | Charcoal Grey | `#333333` | Primary body text |

**Files updated:**
- `tailwind.config.js` — Extended `colors`, `fontFamily`, `animation`, `keyframes`
- `src/index.css` — Base styles, body background, typography layers

### Font Pairing

| Role | Font | Usage |
|------|------|-------|
| Primary Header (Brand) | Montserrat / Josefin Sans | Logo, "Honey, I'm Home" |
| Secondary Header (Dish Names) | Playfair Display | Serif, artisanal feel (e.g., Habibi on the Grill) |
| Accent | Great Vibes | Sub-headers, "Stay Awhile", "Come on in" |
| Body | Open Sans | Descriptions, navigation, pricing |

**Fonts loaded in:** `public/index.html`

---

## 2. New Components Implemented

### A. Cozy Hero Section (`src/components/CozyHero.js`)

- Full-width header with "Come On In" vibe (replaces "Order Now")
- Prominent Honey, I'm Home logo + signature dish photo
- CTAs: "Come On In" (primary), "Stay Awhile" (secondary)
- Subtle botanical line-art accents in corners

### B. Artisanal Menu Card (`src/components/ArtisanalMenuCard.js`)

- IG flyer–style layout: large photo area, corner price badge
- Price badge: `$12` + `3 for $40` in Dusty Rose / Sage
- Serif dish names (e.g., Habibi on the Grill)
- Tags, allergens, Add to Cart button
- Soft hover lift and image zoom

**Integration:** `Menu.js` now uses `ArtisanalMenuCard` instead of `MealCard`.

### C. Social-First Footer (`src/components/SocialFirstFooter.js`)

- Invitation copy: "We'd love to hear from you"
- Prominent contact: **Phone (508) 556-1264** + **Instagram @honeyimhome.co**
- Card-style CTAs for Text/Call and Order via DM
- Navigation links and copyright

### D. Botanical Section Divider (`src/components/SectionDivider.js`)

- Wavy vine + dots SVG matching logo botanical line art
- Used between: Hero → How It Works, Email Signup, Testimonials, FAQ → Footer

---

## 3. Feel & Micro-Interactions

- **Card hover:** `.card-hover-lift` — slight lift + shadow (calm, homey)
- **Image zoom on hover:** Menu card images `scale(1.05)` on hover
- **Soft transitions:** 0.35s ease for transforms and shadows
- **Section fade-in:** Intersection Observer–driven opacity transitions (existing in `LandingPage.js`)
- **Botanical dividers:** `SectionDivider` component + `.divider-botanical` utility

---

## 4. Implementation Strategy (What Was Done)

### Phase 1: Design System
1. Update `tailwind.config.js` with brand colors, fonts, shadows, animations
2. Update `src/index.css` with base styles and Warm Cream background
3. Add Google Fonts in `public/index.html`

### Phase 2: New Components
4. Create `CozyHero.js` and swap Hero section in `LandingPage.js`
5. Create `ArtisanalMenuCard.js` and use it in `Menu.js`
6. Create `SocialFirstFooter.js` and replace footer in `LandingPage.js`
7. Create `SectionDivider.js` and insert between key sections

### Phase 3: Copy & Contact
8. Change "Order Now" → "Come On In" in nav and mobile menu
9. Update phone to **508-556-1264** in contact bar, footer, meta description

### Phase 4: Polish
10. Update `Menu.css` with new color tokens
11. Add `.card-hover-lift` and `.divider-botanical` utilities
12. Verify build: `npm run build`

---

## 5. How to Swap Components Without Breaking Functionality

| Old Component | New Component | Notes |
|--------------|---------------|-------|
| Inline Hero section | `CozyHero` | Same `navigate('/order')` and anchor scroll |
| `MealCard` | `ArtisanalMenuCard` | Same props: `meal`, `price`, `portionSize`, `addToCart` |
| Inline Footer | `SocialFirstFooter` | Same nav links, phone, IG; new layout |
| N/A | `SectionDivider` | Decorative only, no behavior |

**Backwards compatibility:** Cart, Checkout, and Confirmation flows are unchanged. Menu filtering (dietary preferences, allergies) remains intact.

---

## 6. Next Steps (Optional)

- Replace placeholder `/images/hero/honeybyjas.png` with final Honey, I'm Home logo
- Swap MealCard images for higher-quality lifestyle food photos
- Add Jasmine photo at `public/images/about/jasmine-photo.jpg` if missing
- Consider adding subtle hand-drawn whisk/bowl SVGs as section accents
