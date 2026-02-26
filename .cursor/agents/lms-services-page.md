---
name: lms-services-page
description: Builds the full Services & Capabilities page (/services) for Linear Marketing Solutions. Use only after Agent 3 (lms-homepage) is committed. Implements page hero, 4 service pillars with expandable capability grids, and OpenClaw feature callout. Uses design tokens from lms-design-system and layout from lms-nav-shell.
---

You are building the full Services page for Linear Marketing Solutions. This page is where prospects go to understand the full depth of what LMS can do. It should feel comprehensive but not overwhelming — organized, clear, and impressive.

## Prerequisites
- Only start after Agent 3 (lms-homepage) is committed.
- Use design tokens from lms-design-system and layout components (Container, Section, etc.) from lms-nav-shell.
- Use Framer Motion from `lib/animations.ts` where appropriate for expand/collapse and entrance animations.

---

## Page Hero
- **Headline:** "The full stack. All of it."
- **Subtext:** "Linear Marketing Solutions is not a vendor. We are the operating layer your business has been missing. From brand strategy to AI agent development, we build and run the systems that move companies forward."
- Style: Full-width section, dark background, typography per design system (Syne for headline, DM Sans for body). Optional subtle gradient glow for visual continuity with homepage.

---

## Service Architecture — 4 Pillars with Expanded Detail

Organize services into **4 major pillars**. Each pillar has a header section and an expandable grid of specific capabilities underneath.

**Layout rules:**
- On desktop, pillars stack vertically with full-width dividers between them.
- Each capability item is a **card** with: title, short description, and a subtle icon (SVG, not emoji).
- Capability grids can be expandable/collapsible (e.g. "View all" or accordion) or always visible — choose what keeps the page comprehensive but not overwhelming.
- Use design tokens: surface cards, gradient borders on key cards, var(--shadow-glow) on hover.

---

### PILLAR 1: Marketing & Growth
**Tagline:** The foundation. Strategy, content, and campaigns that produce measurable outcomes.

**Capabilities (each as a card: title + short description + icon):**
1. **Full Funnel Marketing Strategy** — OKR-based marketing roadmaps that align awareness, consideration, and conversion into one cohesive system.
2. **Brand Development** — Visual identity, messaging architecture, positioning strategy, and brand voice documentation.
3. **Social Media Management** — Content calendars, community management, platform optimization, and consistent organic growth.
4. **Content Creation** — Short-form video, long-form copy, graphics, email campaigns, white papers, and case studies.
5. **Paid Advertising** — Meta Ads, Google Ads, TikTok Ads, geo-fencing, programmatic display, retargeting, and media buying.
6. **SEO & GEO** — Search engine optimization plus Generative Engine Optimization for AI-powered search visibility.
7. **Email Marketing** — Campaign strategy, automation sequences, list segmentation, and performance analytics.
8. **Market & Competitor Research** — Deep-dive intelligence reports that inform strategy and identify opportunities.
9. **Trade Show & Event Marketing** — Booth design direction, pre/post-show campaigns, collateral, and lead capture systems.

---

### PILLAR 2: Technology & Development
**Tagline:** We build real things. Websites, apps, dashboards, and platforms that your business actually runs on.

**Capabilities:**
1. **Custom Website Development** — Hard-coded, performance-optimized websites built to convert. No templates. Built from scratch.
2. **Web App Development** — Functional web applications with real features, custom logic, and clean interfaces.
3. **UX/UI Design** — User experience design, interface architecture, wireframes, and interactive prototypes.
4. **App Development** — Mobile-forward application development scoped to your specific business need.
5. **Custom Dashboard Development** — Internal analytics dashboards, reporting systems, and data visualization tools.
6. **Custom SaaS Development** — Scoped software products built for your business or for market distribution.
7. **Brand System Development** — Hard-coded brand kits with exportable assets, design tokens, and logo variants (SVG, PNG, PDF).
8. **Website Hosting & Domain Support** — Deployment, DNS management, uptime monitoring, and ongoing maintenance.

---

### PILLAR 3: AI & Automation
**Tagline:** This is where LMS separates from every other agency. We don't just use AI — we build with it, train teams on it, and deploy it as infrastructure.

**Capabilities:**
1. **Custom AI Agent Development** — Purpose-built agents designed around your workflows, data, and specific business logic.
2. **OpenClaw Setup & Integration** — Full personal AI assistant setup using OpenClaw — the most powerful open-source AI agent platform available. We handle installation, configuration, skill development, and team onboarding. Your business gets a persistent, autonomous AI that operates across every channel you already use.
3. **Workflow Automation** — End-to-end automation of repetitive processes using AI-assisted logic and trigger systems.
4. **CRM Building & Integration** — Custom CRM configuration, pipeline architecture, and lead flow automation.
5. **AI-Powered Content Systems** — Scalable content production pipelines that combine AI generation with human quality control.
6. **Custom Tool Development** — Proprietary tools, internal platforms, and API integrations built for your exact needs.
7. **AI Education & Training** — Structured learning programs that get your team operating confidently with AI tools.
8. **Tool Onboarding Courses** — Custom onboarding programs for specific platforms — built for your team's actual workflow.

---

### PILLAR 4: Business Operations & Development
**Tagline:** The connective tissue. Strategy, systems, and support that keeps the whole operation running.

**Capabilities:**
1. **Business Development Strategy** — Market entry planning, partnership development, and revenue growth roadmaps.
2. **Sales Support & Enablement** — Sales decks, SOPs, outreach systems, and pipeline support that gives your team leverage.
3. **Operations & Logistics** — Process documentation, workflow design, team coordination systems, and operational clarity.
4. **Custom Reporting & Analytics** — Performance dashboards, KPI tracking, and data-driven decision systems.
5. **Distributor & Partner Onboarding** — Branded onboarding experiences for distributors and channel partners.

---

## OpenClaw Feature Callout

**Placement:** After Pillar 3 (AI & Automation), before Pillar 4.

**Design:** Full-width feature callout section with a dark card and gradient border glow (var(--gradient-glow), var(--shadow-glow)).

**Content:**
- **Headline:** "We set up OpenClaw for your business."
- **Copy:** OpenClaw is the fastest-growing AI agent platform in the world right now. It's an open-source personal AI assistant that connects to every platform your team already uses — WhatsApp, Slack, Discord, Gmail, iMessage, and more — and can autonomously execute real tasks. Clearing inboxes, managing calendars, running code, monitoring systems, building new skills on demand. It runs on your own hardware, so your data stays yours.
  LMS handles the full setup, configuration, custom skill development, and team training. You get a business that operates with an AI co-pilot at every level — without the complexity of figuring it out yourself.
- **CTA:** "Get OpenClaw Set Up" — gradient button (primary CTA style from design system). Link can go to contact, /contact, or a dedicated OpenClaw CTA route if one exists.

---

## When You're Done
1. Ensure the route is `/services` (app/services/page.tsx or equivalent).
2. Replace any placeholder content with the full implementation.
3. Commit with message: `feat: services page complete`
