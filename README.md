# Gurusha Arora — Portfolio

> **A UX/UI Designer portfolio built with Next.js 16, React 19, and Tailwind CSS v4.** Showcasing high-impact product design work across media platforms, ERP ecosystems, and accessibility-first experiences.

---

## What This Project Is

This is the personal portfolio website of **Gurusha Arora**, a multidisciplinary UX/UI Designer with 2+ years of experience. The site is built to present design work in a premium, editorial style — prioritising typography, intentional whitespace, and smooth micro-animations over visual noise.

**The problem it solves:** Most designer portfolios are either over-engineered or visually generic. This site deliberately mirrors the craft of its owner — every layout decision, colour choice, and animation serves the goal of communicating design sensibility at a glance.

**Key goals of this codebase:**
- Present case studies (ANI News, ShriConnect, Wave City, Ability Connect) in a scannable, gallery-like layout
- Deliver a polished experience on both desktop and touch/mobile devices
- Support light and dark modes with no flash-of-unstyled-content (FOUC) on initial load
- Keep the codebase lean — no backend, no database, static rendering where possible

---

## Live Routes

| Route | Description |
|---|---|
| `/` | Homepage — animated hero + scrollable work preview |
| `/work` | Full portfolio grid with category filter pills |
| `/work/ani-news` | Detailed case study: ANI News Platform Redesign |
| `/about` | Designer bio, core expertise, toolkit, and academic background |
| `/contacts` | Contact form with interest selector and social links |

---

## Project Structure

```
Portfolio_1/
├── app/                        # Next.js App Router — all pages live here
│   ├── layout.tsx              # Root layout: fonts, global nav, footer, theme provider
│   ├── template.tsx            # Page transition wrapper (animate-page-in on every route)
│   ├── globals.css             # Design token system (Material You palette + dark overrides)
│   ├── page.tsx                # Homepage (renders <Hero> + <Work> components)
│   ├── about/page.tsx          # About page — expertise, toolkit, education timeline
│   ├── contacts/page.tsx       # Contact form with interest selector
│   └── work/
│       ├── page.tsx            # Work index — filterable project grid
│       └── ani-news/page.tsx   # Full ANI News case study with metrics + process breakdown
│
├── components/                 # Shared UI components, all globally available
│   ├── NavBar.tsx              # Fixed top nav — active-route highlighting, mobile hamburger menu
│   ├── Hero.tsx                # Homepage hero — staggered text reveal animations, CTA buttons
│   ├── Work.tsx                # Alternating work cards on homepage with hover/active effects
│   ├── Contacts.tsx            # Site-wide footer — email, social links, copyright
│   ├── ThemeWrapper.tsx        # Thin wrapper around next-themes ThemeProvider
│   ├── ThemeToggle.tsx         # Sun/Moon icon toggle button; hydration-safe (mounts client-side)
│   ├── ScrollToTop.tsx         # Disables browser scroll restoration; forces scroll to top on load
│   └── CopyrightYear.tsx       # Client component that renders the current year
│
├── public/
│   └── media/                  # Static assets (e.g., resume PDF)
│
├── next.config.ts              # Next.js config (allowed dev origins for LAN access)
├── tailwind.config.js          # Tailwind content paths (v4 — most config lives in globals.css)
├── postcss.config.mjs          # PostCSS using @tailwindcss/postcss (v4 plugin pipeline)
├── tsconfig.json               # TypeScript paths — @/ alias maps to project root
└── package.json
```

### How the pieces connect

```
Browser Request
     │
     ▼
app/layout.tsx          ← Sets fonts, metadata, wraps entire app
     │
     ├── ThemeWrapper   ← Provides light/dark theme context (next-themes)
     ├── ScrollToTop    ← Client effect: forces scroll to top on navigation
     ├── NavBar         ← Fixed header; reads pathname for active state
     ├── <main>
     │     └── app/template.tsx  ← Wraps every page in animate-page-in transition
     │           └── {page}      ← e.g., app/page.tsx → <Hero> + <Work>
     └── Contacts       ← Site-wide footer (rendered on every page)
```

**Theme system flow:**
1. `ThemeWrapper` (`next-themes`) injects `class="dark"` or `class="light"` on `<html>` at the earliest possible point, preventing FOUC.
2. `globals.css` defines a full **Material You** colour palette as CSS custom properties under `@theme {}` (Tailwind v4 syntax).
3. The `.dark {}` block at the bottom of `globals.css` overrides key tokens for the dark palette — deep navy backgrounds (`#0f172a`), warm amber accent (`#f4c844`), and high-contrast text.
4. `ThemeToggle` renders `null` until mounted client-side (guarded by `useEffect`) to avoid hydration mismatches.

---

## Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| **Next.js** | 16.2.4 | App Router, SSR/SSG, file-based routing, `next/font` |
| **React** | 19.2.4 | UI rendering |
| **TypeScript** | 5.x | Type safety across all components and pages |
| **Tailwind CSS** | 4.x | Utility-first styling via `@tailwindcss/postcss` |
| **next-themes** | 0.4.6 | Light/dark mode with class-based toggling, no FOUC |
| **lucide-react** | 1.8.0 | Icon set (Sun/Moon icons in `ThemeToggle`) |

### Why this stack?

- **Next.js App Router** — enables per-page metadata, the `template.tsx` pattern for page transitions, and straightforward SSR without extra configuration.
- **Tailwind CSS v4** — the new PostCSS-first pipeline (`@import "tailwindcss"`) and `@theme {}` blocks replace the old `tailwind.config.js` for design tokens, keeping the colour system co-located with the CSS.
- **next-themes** — handles the `suppressHydrationWarning` / server-client mismatch problem elegantly; the `defaultTheme="light"` prop ensures light mode is the baseline without requiring cookies or `localStorage` reads on the server.
- **No external UI library** — every component is hand-crafted, which keeps bundle size minimal and gives complete control over design fidelity.

---

## Getting Started

### Prerequisites

- **Node.js** `>= 18.x` (LTS recommended)
- **npm** `>= 9.x`

### Installation

```bash
# 1. Clone the repository
git clone <your-repo-url>
cd Portfolio_1

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

The dev server starts on **http://localhost:3000** by default.

> **Note:** `next.config.ts` also allows LAN access from `10.32.156.53`. Remove or update `allowedDevOrigins` if you are running on a different network.

### Available Scripts

```bash
# Development server with Hot Module Replacement (HMR)
npm run dev

# Production build (outputs to .next/)
npm run build

# Serve the production build locally
npm run start

# Lint the codebase using ESLint
npm run lint
```

---

## Customisation Guide

### Updating Portfolio Content

All project data for the homepage work section lives as a static array in **`components/Work.tsx`**:

```tsx
const workData = [
  {
    id: 'ani-news',          // Used for routing: links to /work/ani-news
    role: 'PRODUCT DESIGNER',
    date: 'FEB 2026 - PRESENT',
    title: 'ANI News Platform Redesign',
    description: 'Led the full redesign...',
    image: 'https://...',    // Replace with your own image URL or local path
    reverse: false           // true = image on left, false = image on right
  },
  // Add more projects here
];
```

To add a full case study page for a new project:
1. Create `app/work/[your-project-id]/page.tsx`
2. Update the `href` in `Work.tsx` to point to your new route

### Changing the Colour Palette

The entire colour system is declared in **`app/globals.css`** inside `@theme {}`. To retheme the site:

```css
/* Light mode — update these tokens */
@theme {
  --color-primary: #765a00;         /* Main brand colour */
  --color-primary-container: #ffc929; /* Button fills, highlights */
  --color-background: #f7f9fc;
  /* ... */
}

/* Dark mode overrides */
.dark {
  --color-background: #0f172a;
  --color-primary: #f4c844;
  /* ... */
}
```

### Adding a New Page

Next.js App Router convention — create a directory under `app/` with a `page.tsx` file:

```bash
# Example: adding a /process page
touch app/process/page.tsx
```

The new page automatically inherits the root `layout.tsx` (navbar, footer, theme), and the `template.tsx` page transition animation.

### Updating Personal Information

| What to change | Where |
|---|---|
| Site `<title>` and meta description | `app/layout.tsx` → `export const metadata` |
| Name in the navbar logo | `components/NavBar.tsx` → `<Link href="/">` |
| Contact email | `components/NavBar.tsx`, `components/Contacts.tsx`, `app/contacts/page.tsx` |
| LinkedIn URL | `components/Hero.tsx`, `components/Contacts.tsx` |
| Resume PDF | `public/media/Gurusha_Arora_UX_UI_Designer.pdf` |
| Location | `app/contacts/page.tsx` → "Based in New Delhi" |

---

## Design System

### Typography

Two Google Fonts are loaded via `next/font/google` in `layout.tsx` and exposed as CSS variables:

| Variable | Font | Usage |
|---|---|---|
| `--font-headline` | **Noto Serif** | All `<h1>` – `<h3>` tags, logo, display text |
| `--font-body` | **Manrope** | Body copy, labels, UI text, navigation |

Apply via Tailwind utilities: `font-headline`, `font-body`, `font-label`.

### Animations

Defined as custom keyframes and `@theme` tokens in `globals.css`:

| Token | Effect | Usage |
|---|---|---|
| `--animate-reveal-text` | Slides text up from below (1.2s) | Hero section headlines |
| `--animate-fade-up` | Fades up 30px (0.8s) | Scroll-triggered content |
| `--animate-page-in` | Fade + scale-up (0.7s) | Applied to every page via `template.tsx` |

Scroll-triggered animations use the `.scroll-reveal` utility class. Elements start at `opacity: 0` and gain the `visible` class via a JS `IntersectionObserver` (if implemented), at which point `--animate-fade-up` fires.

### Colour Tokens (Key Subset)

| Token | Light | Dark | Role |
|---|---|---|---|
| `--color-primary` | `#765a00` | `#f4c844` | Buttons, accents, links |
| `--color-background` | `#f7f9fc` | `#0f172a` | Page background |
| `--color-on-surface` | `#191c1e` | `#f1f5f9` | Body text |
| `--color-primary-container` | `#ffc929` | — | Pill highlights, badges |

---

## Deployment

This project is a standard Next.js application and can be deployed to **Vercel** (recommended), Netlify, or any Node.js hosting environment.

### Deploy to Vercel (One Click)

1. Push the repository to GitHub
2. Go to [vercel.com](https://vercel.com) → **New Project** → Import your repo
3. Vercel auto-detects Next.js — no configuration needed
4. Click **Deploy**

### Manual Production Build

```bash
npm run build   # Generates optimised output in .next/
npm run start   # Serves the production build on port 3000
```

---

## Contributing

This is a personal portfolio. However, if you spot a bug or an accessibility issue:

1. **Fork** the repository
2. Create a branch: `git checkout -b fix/your-issue-description`
3. Make your changes and commit: `git commit -m "fix: describe the fix"`
4. Open a **Pull Request** with a clear description

### Code Style

- **TypeScript** is used throughout — avoid `any`
- Components follow the Next.js `'use client'` directive pattern — only add it when the component uses browser APIs, hooks with effects, or event handlers
- Class names use Tailwind utilities; avoid inline `style={{}}` except for animation `keyframe` values that Tailwind cannot express
- Component files use **PascalCase** (`NavBar.tsx`); page files use **lowercase** (`page.tsx`) per Next.js convention

---

## License

This project is licensed under the terms of the [MIT License](./LICENSE).

---

*Curated with intention.*
