---
name: lms-work-ai-tools
description: Builds the Work Portfolio page (/work) and AI Tools page (/ai-tools) for Linear Marketing Solutions. Use only after Agent 4 (lms-services-page) is committed. Implements masonry project grid with category filter, placeholder project cards, AI stack grid, OpenClaw deep dive, and AI education section. Uses design tokens from lms-design-system and layout from lms-nav-shell.
---

You are building the Work Portfolio page and the AI Tools page for Linear Marketing Solutions. These pages showcase real client work and position LMS as an AI-infrastructure partner.

## Prerequisites
- **Only start after Agent 4 (lms-services-page) is committed.**
- Use design tokens from lms-design-system and layout components (Container, Section, etc.) from lms-nav-shell.
- Use Framer Motion from `lib/animations.ts` for filter animations and transitions.

---

# PAGE 1 — /work (Portfolio Page)

## Hero
- **Headline:** "What we've built."
- **Subtext:** "Real work. Real results. A growing library of websites, apps, dashboards, and systems built for clients across industries."

## Layout: Masonry-Style Grid of Project Cards

Each card has:
- A dark surface background with a **screenshot/mockup area** — use **solid gradient placeholders** for now and **label them clearly** so real screenshots can be swapped in later
- **Project title**
- **Category tags** (Website, Dashboard, AI Agent, Brand System, Marketing, App, etc.)
- **One-line result or outcome**
- **"View Project" link** — inactive for now: link to `#` with a "Case study coming soon" tooltip

## Placeholder Projects (Build Cards For Each)

1. **Point 2 Point Communications** — Category: Website + Brand System + Marketing | Result: Full rebrand and digital presence for nanoFIBER product line. 50+ marketing assets delivered.
2. **Bayville Bakery & Deli** — Category: Marketing + Social Strategy | Result: Organic growth system and content framework for local NJ bakery.
3. **Commit Fitness (@fit.blake)** — Category: Brand + Content + Social | Result: 160K+ following built across platforms. Millions of views. Full content and sales funnel system.
4. **LM Fitness Center** — Category: Operations + Marketing | Result: Scaled personal training revenue from $5K to $53K/month through SOPs, strategy, and outreach systems.
5. **Custom CRM Dashboard** — Category: Dashboard + Automation | Result: Placeholder — "Client dashboard built with real-time reporting and automated lead tracking." (anonymized)
6. **Custom AI Agent Build** — Category: AI Agent | Result: Placeholder — "Autonomous business assistant deployed for operations team." (anonymized)
7. **SaaS Landing + Waitlist System** — Category: Website + App | Result: Placeholder — ready for real project
8. **Brand System Export Kit** — Category: Brand System | Result: Placeholder — hard-coded brand kit with full export system

## Filter Bar
- **Above the grid:** filter cards by category tag.
- **Animation:** Smooth filter using Framer Motion — cards that don't match the filter **shrink and fade**; matching cards stay visible.

---

# PAGE 2 — /ai-tools (AI Tools & Automation Page)

## Hero
- **Headline:** "AI isn't the future. It's the operating layer."
- **Subtext:** "LMS doesn't just use AI — we deploy it as infrastructure. Here's what that means for your business."

## Section 1 — The LMS AI Stack
A **visual grid** showing the AI tools and platforms LMS uses and deploys for clients. Each tool gets a **card** with:
- Logo placeholder
- Tool name
- One-line description of how LMS uses it

**Tools to include:**
- **Claude (Anthropic)** — Core reasoning and content engine
- **OpenClaw** — Autonomous personal AI agent deployed across your business channels
- **ChatGPT / OpenAI** — Supplemental generation and GPT-based workflow tools
- **Cursor** — AI-powered development environment for building real software
- **Make / Zapier** — Automation workflow orchestration
- **Framer / Webflow** — AI-assisted web design and publishing
- **ElevenLabs** — AI voice generation for content and product development
- **Midjourney / DALL-E** — Visual asset generation at scale
- **Perplexity** — AI-powered research and market intelligence

## Section 2 — OpenClaw Deep Dive
Repeat the OpenClaw callout from the services page but **expand it here** with more detail:
- **What OpenClaw is** — personal AI agent, open source, runs on your hardware
- **What it can do** — inbox management, calendar, code execution, multi-channel messaging, custom skills
- **What LMS does for you** — full setup, configuration, skill development, team training, ongoing support
- **Who it's for** — founders, operators, small teams who want to move at AI speed
- **What you get** — a persistent AI co-pilot that works across every channel your team uses

## Section 3 — AI Education & Onboarding
- **Headline:** "We teach your team to operate in the AI era."
- **Copy:** Brief description of LMS's education and onboarding services — custom training programs, tool-specific onboarding courses, and ongoing AI literacy development for teams.
- **CTA:** "Book an AI Strategy Session" — gradient button (primary CTA style)

---

## When You're Done
1. Ensure routes are `/work` and `/ai-tools` (e.g. `app/work/page.tsx`, `app/ai-tools/page.tsx`).
2. Use gradient placeholders and clear labels for screenshot areas and logo areas so they can be swapped for real assets later.
3. **Commit with message:** `feat: work and ai-tools pages complete`
