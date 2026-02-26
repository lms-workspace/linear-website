---
name: lms-homepage
description: Builds the full Linear Marketing Solutions homepage. Use only after Agent 2 (lms-nav-shell) is committed. Implements hero, repositioning, capabilities grid, how it works, reviews carousel, who we work with, and final CTA. Uses design tokens from lms-design-system, layout components from lms-nav-shell, and Framer Motion from lib/animations.ts.
---

You are building the full homepage for Linear Marketing Solutions. This is the most important page. Every section should feel intentional, not templated. The goal: a visitor lands here and within 10 seconds feels they are looking at something genuinely different — a company operating at the frontier of AI and marketing.

## Prerequisites
- Only start after Agent 2 (lms-nav-shell) is committed.
- Use ALL tokens from Agent 1 (lms-design-system).
- Use ALL layout components from Agent 2 (lms-nav-shell).
- Animate everything with Framer Motion using the variants from `/lib/animations.ts`.

---

## Section 1 — Hero
**Visual:** Full viewport height. Near-black background. A large ambient gradient glow blob sits center-right, using `var(--gradient-glow)` — it slowly pulses/breathes using a keyframe animation. Behind the text, a very subtle grid pattern (CSS-only, using `background-image: linear-gradient`) creates a sense of depth and structure without being distracting.

**Layout:** Text content left-aligned, takes up ~55% of width. Right side has an abstract visual element — a dark card with a simulated terminal/dashboard interface showing mock metrics animating in. This implies "we build real systems" without saying it.

**Headline** (Syne 800, 72px, white):
- Your business.
- Fully automated.
- Infinitely scalable.
- Each line animates in sequentially with fadeUp variant, 0.15s stagger.

**Subheadline** (DM Sans 400, 20px, var(--color-text-secondary)):
Linear Marketing Solutions is your AI-powered operating system for marketing, technology, and growth. Strategy, creative, automation, and development — all under one roof. No overhead. No risk. Just results.

**CTAs:**
- Primary: "Start a Project" — gradient button, large
- Secondary: "See Our Work" — ghost button with gradient border, links to /work

**Animated stat bar** below CTAs — three stats that count up on load:
- $3M+ — Revenue Generated for Clients
- 160K+ — Social Audience Built
- 50+ — Brands Elevated
Stats use JetBrains Mono for numbers, DM Sans for labels.

**Right side mock dashboard card:** A dark surface card (var(--color-surface-2)) with a subtle gradient border. Inside: a simplified visual showing mock data — a small line chart, some metric readouts, status indicators. This is purely visual/decorative but coded in real HTML/CSS. It should feel like a glimpse into one of the dashboards LMS builds for clients. Animate it in with scaleIn variant after a 0.5s delay.

---

## Section 2 — Repositioning (formerly "The Problem / The Solution")
**Headline:** "The old model is broken."

**Layout:** Two columns. Left is "The Old Way" — plain surface card, slightly muted, lists problems. Right is "The LMS Way" — glowing gradient border card, vibrant, lists the solution. The contrast between the cards visually tells the story.

**Old Way card** (muted, dull):
- Hiring a full team: 6 figures in salaries before they produce anything
- Agencies: cookie-cutter strategies, slow execution, enterprise pricing
- Freelancers: inconsistent, unaccountable, can't see the full picture
- Result: wasted budget, fragmented strategy, no one owns the outcome

**LMS Way card** (gradient border, glowing):
- One integrated partner who owns strategy, creative, technology, and AI
- Built for speed — systems and execution from day one
- AI-powered at every layer — content, automation, research, development
- Measurable outcomes with full transparency
- "One expert. All capabilities. Results that move your business."

---

## Section 3 — Capabilities Overview
**Headline:** "Everything your business needs. Nothing you don't."

**Layout:** A 3x3 grid of capability cards that expand on hover. Each card has:
- A minimal icon (SVG, not emoji — use simple geometric icons)
- Category label in gradient text
- Short description
- On hover: card elevates (var(--shadow-glow)), a subtle glow appears at the card's top edge

**The 9 capability categories** (these link to full detail on /services):
1. Marketing & Strategy — Full funnel strategy, brand development, campaign management, market research
2. Content & Creative — Video, copy, design, social media, AI-assisted production at scale
3. Web & App Development — Hard-coded websites, web apps, UX/UI design, hosting, domain support
4. AI Agent Development — Custom agents, workflow automation, OpenClaw setup, AI integration
5. Business Operations — CRM building, custom dashboards, SaaS development, process systems
6. Custom Tools & Software — Purpose-built tools, internal platforms, API integrations
7. AI Education & Onboarding — Training courses, tool onboarding, team education programs
8. Sales & Business Development — Sales support, lead generation, competitor research, strategy
9. Brand Systems — Hard-coded brand kits, design systems, logo development, export-ready assets

**Below the grid:** a single CTA — "Explore All Services →" linking to /services

---

## Section 4 — How It Works
**Headline:** "Simple entry. Serious depth."

**Layout:** Horizontal step flow on desktop, vertical on mobile. Three steps connected by a gradient line.

- **Step 01 — Discovery Call**  
  We learn your business, goals, current stack, and gaps. No pitch. Just clarity. This call is the foundation of everything we build together.

- **Step 02 — System Design**  
  We map your full operating picture — marketing, technology, automation, and growth. You get a clear plan before a single dollar is spent.

- **Step 03 — Build & Execute**  
  We build, launch, optimize, and scale. You get a partner who owns outcomes, not just deliverables. Weekly check-ins, full transparency, measurable results.

**CTA below:** "Book Your Discovery Call" — gradient button, centered

---

## Section 5 — Social Proof / Reviews
**Headline:** "What our clients say."

**Layout:** Horizontal scrolling carousel on mobile, 3-column grid on desktop. Each review card uses var(--color-surface-2) with a gradient border on top edge only.

**Review 1:**  
"Blake and his team didn't just run our marketing — they rebuilt our entire go-to-market system from scratch. Within 90 days we had a content engine, a CRM that actually worked, and campaigns producing real leads. I've never seen execution like this from a single partner."  
— Marcus T., CEO, Pacific Rim Distributors  
★★★★★

**Review 2:**  
"We came to LMS for social media help and left with an automated lead pipeline, a new website, and a custom dashboard that our sales team uses every day. The scope of what they can do is genuinely surprising."  
— Danielle K., Founder, Clearpath Wellness  
★★★★★

**Review 3:**  
"The AI integration work alone was worth the engagement. Our team now runs on tools that Blake built and trained us to use. We operate faster and smarter than companies three times our size."  
— Jordan M., Director of Operations, NexLayer Tech  
★★★★★

**Review 4:**  
"I was skeptical about outsourcing marketing and operations to one partner. Six months later our monthly revenue has tripled and I have more clarity on our business than I've ever had. LMS is the real deal."  
— Sofia R., Co-Founder, Forma Studio  
★★★★★

**Review 5:**  
"The website they built us is the best thing that's happened to our brand. It doesn't look like a template. It looks like us — better than we could have imagined. And the ongoing support has been seamless."  
— Derek W., President, SummitCore Group  
★★★★★

---

## Section 6 — Who We Work With
**Headline:** "Built for businesses ready to move."

**Copy:**  
LMS works with founders, operators, and growth-stage companies who are done waiting for results. Our clients range from local businesses building their first real marketing system to multi-location companies and distributors who need execution without bureaucracy.

**"You're a fit if:" card** — upgraded visual treatment. Dark card with gradient border. Checkmarks use the gradient accent. Items:
- You need marketing, technology, and AI under one roof
- You're done paying for strategy that never gets executed
- You want systems that work without you managing them daily
- You're ready to compete like an enterprise brand — without enterprise overhead
- You want a partner who is accountable to outcomes, not just deliverables

---

## Section 7 — Final CTA
Full-width dark section with ambient glow background.

**Headline** (large, gradient text): "Ready to operate at a different level?"

**Subtext:** The conversation starts with a call. No pitch. No pressure. Just a clear picture of what's possible.

**Two buttons:** "Book a Call" (gradient, primary) and "View Our Services" (ghost, secondary)

---

## When Done
Commit with message: `feat: homepage complete`
