# Implement Project-Wide Dark Mode

Adding a Dark Mode theme switcher and retrofitting existing hardcoded layouts throughout the application. 

## User Review Required

> [!WARNING]  
> The project currently relies on heavily hardcoded light-mode colors (e.g. `bg-[#fcf1c5]`, `text-gray-900`, `bg-white`) inside components like `Hero.tsx` and `NavBar.tsx`. To make this toggle switch seamlessly work across the whole site, I will need to rewrite these hardcoded values using Tailwind `dark:` variants and native CSS variables. 

Please review the process below:

## Proposed Changes

### Setup and Dependencies
- Run `npm install next-themes lucide-react` to fetch a bulletproof Dark/Light state wrapper and UI icons for the toggle button. 

---

### Project Providers & Toggle Button
#### [NEW] `components/ThemeWrapper.tsx`
- Build a generic client component for `next-themes` `<ThemeProvider>` context wrapper.

#### [NEW] `components/ThemeToggle.tsx`
- Add a new circular client component toggle button (switching between Moon/Sun icons).

#### [MODIFY] `app/layout.tsx`
- Wrap `RootLayout` sub-children directly in `<ThemeWrapper>` so context spans everywhere.

#### [MODIFY] `components/NavBar.tsx`
- Place the exact `<ThemeToggle />` component directly beside the `Hire Me` button inside both Desktop and Mobile navigations.
- Convert hard-coded transparent navigation bar colors to respect `dark:...` styling.

---

### Global Styling Overhaul
#### [MODIFY] `app/globals.css`
- Introduce a `.dark` media scheme map at the end of the file. Setup deep slate and dark golden variations of the `primary`/`surface` variables to invert the core palette organically.

#### [MODIFY] Component Refactoring
- `components/Hero.tsx`
- `components/Work.tsx`
- `components/Contacts.tsx`
- Systematically sweep the codebase replacing colors like `bg-white` with `bg-white dark:bg-gray-950` and `text-gray-900` with `text-gray-900 dark:text-gray-100`. 
- Ensure accessibility of gradients in both modes.

## Open Questions
- Standard dark mode maps perfectly against grey/slates with gold accents. Are you fine with me picking an esthetically premium dark color scheme directly, or do you have strict dark mode hex colors you want used?

## Verification Plan

### Automated Tests
- Run `npm run lint` and `npm run build` after making sweeping changes to ensure UI integrity.

### Manual Verification
- Deploying the development server to ensure the moon/sun toggles without hydration flicker.
- Check "Hero", "Work", and "Contacts" pages for layout/color bleeding during transitions.
