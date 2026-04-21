# Dark Mode Debugging Report

## The Issue
The toggle physically changed the Sun/Moon icons inside `NavBar.tsx`, but the rest of the application (backgrounds, text) remained stubbornly white.
A close analysis of the codebase versus **Tailwind CSS v4** architecture revealed a severe change in how Tailwind calculates "dark mode".

### Why It Failed
In previous Tailwind versions (v3), setting `darkMode: 'class'` inside `tailwind.config.js` was standard practice. 
However, **Tailwind CSS v4** eradicated `tailwind.config.js` and moved completely to CSS-driven logic. By default, Tailwind v4 exclusively monitors `@media (prefers-color-scheme: dark)` natively at the OS level. It completely ignores `class="dark"` toggles rendered by React providers like `next-themes` unless strictly commanded.

### The Fix
The solution was to inject a **Custom Variant** mapping directly into `app/globals.css`. 

I appended the following directive at the very top of your global stylesheet:
```css
@custom-variant dark (&:where(.dark, .dark *));
```

This single line forcefully rewires Tailwind's v4 compiler to instantly respect the `.dark` class toggle deployed by `<ThemeWrapper>`. Furthermore, I executed a sweeping replace protocol across `app/about/page.tsx`, `app/contacts/page.tsx`, and `app/work/page.tsx` since these specific Next.js router pages were skipped during the initial component rewrite.

## Status
Resolved. The `npm run build` compiles completely error-free. The pages natively listen to the Sun/Moon switch and immediately swap `bg-white` dependencies for `dark:bg-slate-900` variations!
