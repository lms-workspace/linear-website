import type { Metadata } from "next";
import { ServicePageLayout } from "@/components/services/ServicePageLayout";

export const metadata: Metadata = {
  title: "Web & App Development — Custom-Built Websites & Platforms | LMS",
  description:
    "Production-grade websites, web apps, dashboards, and SaaS platforms. Hard-coded, performance-optimized, built from scratch — not templated.",
};

export default function WebDevelopmentPage() {
  return (
    <ServicePageLayout
      badge="Web & App Development"
      headline="Hard-coded. Performance-optimized. Built from scratch."
      intro="No templates. No page builders. No Squarespace. We build production-grade websites and applications with custom code, 3D visuals, and performance scores above 90."
      body={[
        "Every website we build is a custom engineering project. We use Next.js, React, TypeScript, and Tailwind CSS — the same stack used by Stripe, Vercel, and the best product companies in the world. Your site isn't generated from a template. It's architected from the ground up.",
        "We build scroll-driven animations with GSAP, smooth scrolling with Lenis, 3D visuals with Three.js, and interactive elements that make visitors stay. This isn't decoration — it's differentiation. When a prospect lands on your site, they know immediately that you're not like everyone else.",
        "Performance is non-negotiable. Every site ships with Lighthouse scores above 90 across all categories. Mobile-first responsive design. Lazy loading. Code splitting. Image optimization. Your site loads fast because we built it to load fast — not because a plugin is papering over bad code.",
        "Beyond marketing sites, we build functional web applications — dashboards, internal tools, client portals, and SaaS products. If your business needs software, we build it.",
      ]}
      services={[
        { title: "Custom Website Development", description: "Hard-coded, performance-optimized websites built to convert. No templates. Built from scratch.", icon: "website" },
        { title: "Web App Development", description: "Functional web applications with real features, custom logic, and clean interfaces.", icon: "webapp" },
        { title: "UX/UI Design", description: "User experience design, interface architecture, wireframes, and interactive prototypes.", icon: "ux" },
        { title: "App Development", description: "Mobile-forward application development scoped to your specific business need.", icon: "mobile" },
        { title: "Custom Dashboard Development", description: "Internal analytics dashboards, reporting systems, and data visualization tools.", icon: "dashboard" },
        { title: "Custom SaaS Development", description: "Scoped software products built for your business or for market distribution.", icon: "saas" },
        { title: "Brand System Development", description: "Hard-coded brand kits with exportable assets, design tokens, and logo variants.", icon: "brandSystem" },
        { title: "Website Hosting & Domain Support", description: "Deployment, DNS management, uptime monitoring, and ongoing maintenance.", icon: "hosting" },
      ]}
      differentiators={[
        { title: "Custom code, not templates", description: "Every line is written for your project. No WordPress themes. No Webflow exports. No technical debt from day one." },
        { title: "Performance as a feature", description: "Lighthouse 90+ across the board. Your site loads in under 2 seconds because the code was written to be fast — not patched after the fact." },
        { title: "Interactive by default", description: "GSAP scroll animations, Three.js 3D scenes, Lenis smooth scrolling, custom cursors. Your site feels like a product, not a brochure." },
        { title: "Full ownership", description: "You own every line of code. Deployed on your Vercel account. No vendor lock-in. No monthly platform fees." },
      ]}
      related={[
        { href: "/services/ai-infrastructure", title: "AI Infrastructure", description: "Custom agents, workflow automation, CRM integration, and tool development." },
        { href: "/services/growth-engine", title: "Growth Engine", description: "Full-funnel strategy, brand systems, campaign architecture, and market intelligence." },
        { href: "/services/business-operations", title: "Business Operations", description: "CRM systems, analytics dashboards, sales enablement, and process architecture." },
      ]}
    />
  );
}
