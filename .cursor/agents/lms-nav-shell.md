---
name: lms-nav-shell
description: Navigation, layout shell, and routing for Linear Marketing Solutions. Use when building or updating Navbar, Footer, PageShell, layout primitives (Container, Section, Grid), or app routing. Requires the LMS design system (tokens from lms-design-system) to be in place. Use proactively after the design system is ready.
---

# Navigation, Layout Shell & Routing — Linear Marketing Solutions

You are building the navigation, page shell, and routing structure for Linear Marketing Solutions. The design system from Agent 1 (lms-design-system) is already in place — **use all tokens and never hardcode colors, fonts, or spacing values.**

---

## Site Architecture — Pages to Create

- `/` — Homepage
- `/services` — Full Services & Capabilities
- `/work` — Portfolio (apps, dashboards, websites built)
- `/ai-tools` — AI Tools & OpenClaw Setup
- `/contact` — Contact

---

## Navigation Component (`/components/ui/Navbar.tsx`)

Build a sophisticated navigation bar with these exact behaviors:

**Default state:** Fully transparent, sitting on top of the hero. Logo left, nav links center, CTA right.

**Scrolled state:** After 80px scroll, transitions to a frosted glass effect:
- `background: rgba(10,10,15,0.85)`
- `backdrop-filter: blur(20px)`
- Subtle bottom border using `var(--color-border-accent)`
- Transition is smooth over 300ms

**Logo:** Uses `logo-full.svg`. On hover, the gradient slash pulses with a glow animation.

**Nav Links:** Services, Work, AI Tools, Contact. Each link:
- Underline that animates in from left on hover using a pseudo-element
- Color: `var(--color-text-secondary)` default, `var(--color-text-primary)` on hover

**Active state:** Current page link gets the gradient text treatment (use `var(--gradient-brand)` or equivalent token).

**CTA Button — "Let's Talk":**
- Background: gradient from `var(--color-accent-primary)` to `var(--color-accent-secondary)`
- Border radius: `var(--radius-md)`
- On hover: brightness increases slightly, box-shadow adds a glow effect using `var(--shadow-glow)`
- Text: white, DM Sans 500 weight

**Mobile:** Hamburger menu that slides in a full-screen dark overlay with links centered and large. Hamburger icon animates to X on open.

---

## Footer Component (`/components/ui/Footer.tsx`)

- Dark background matching site (use `var(--color-bg)` or `var(--color-surface-1)`)
- **Top section:** Logo left, tagline right
- **Middle:** 4-column link grid (Services, Work, AI Tools, Company)
- **Bottom bar:** Copyright left, "Built with AI. Operated by humans." right — this is a brand statement, not just filler
- Subtle top border using gradient: `border-image: var(--gradient-brand) 1`
- Social icons: minimal, clean, using simple SVG icons (LinkedIn, Instagram)

---

## Page Shell (`/components/ui/PageShell.tsx`)

A wrapper component that:

1. Renders Navbar and Footer around all pages
2. Adds scroll-to-top behavior on route change
3. Manages page transition animations using Framer Motion's `AnimatePresence`
4. Each page fades in over 400ms on mount

---

## Layout Primitives

Create these reusable layout components (e.g. in `/components/ui/` or `/components/layout/`):

- **&lt;Container&gt;** — max-width 1200px, centered, horizontal padding responsive (use spacing tokens)
- **&lt;Section&gt;** — standard vertical padding (80px desktop / `var(--space-2xl)`, 48px mobile / `var(--space-xl)`), accepts `id` prop for anchor linking
- **&lt;Grid&gt;** — flexible CSS grid wrapper with responsive column props

---

## Rules

- Never hardcode hex colors, font names, or pixel values for spacing/radius — always use design tokens from the LMS design system.
- Ensure Navbar and Footer are accessible (semantic HTML, focus states, aria where needed).
- Use Next.js App Router for routing and layout structure.
- After implementing, suggest commit message: `feat: navigation, shell, routing structure`
