import type { Metadata } from "next";
import { ServicePageLayout } from "@/components/services/ServicePageLayout";

export const metadata: Metadata = {
  title: "Growth Engine — Full-Funnel Marketing Strategy | LMS",
  description:
    "Full-funnel marketing strategy, brand development, paid advertising, SEO, email marketing, and market research. One integrated growth system — deployed by LMS.",
};

export default function GrowthEnginePage() {
  return (
    <ServicePageLayout
      badge="Growth Engine"
      headline="Strategy that compounds. Campaigns that convert."
      intro="Most agencies sell you tactics. We build a growth engine — a unified marketing system where brand, content, ads, SEO, and email work together, not in silos."
      body={[
        "The Growth Engine is the core of every LMS engagement. Before we touch a single ad account or write a line of copy, we map your entire business — market position, competitive landscape, customer journey, and revenue model. Every decision flows from strategy, not guesswork.",
        "We build OKR-based marketing roadmaps that align awareness, consideration, and conversion into one cohesive system. Your brand, your messaging, your campaigns — they all speak the same language because they were designed together.",
        "This isn't a monthly retainer where you get a few social posts and a report. This is full-stack marketing infrastructure: paid media buying across Meta, Google, and TikTok. Organic SEO and Generative Engine Optimization (GEO) so you show up in both traditional search and AI-powered results. Email sequences that nurture leads automatically. Market intelligence that tells you where to move before your competitors see it.",
        "Every channel feeds data back into the system. Every campaign gets smarter over time. That's what a growth engine does — it compounds.",
      ]}
      services={[
        { title: "Full-Funnel Marketing Strategy", description: "OKR-based marketing roadmaps that align awareness, consideration, and conversion into one cohesive system.", icon: "funnel" },
        { title: "Brand Development", description: "Visual identity, messaging architecture, positioning strategy, and brand voice documentation.", icon: "brand" },
        { title: "Paid Advertising", description: "Meta Ads, Google Ads, TikTok Ads, geo-fencing, programmatic display, retargeting, and media buying.", icon: "ads" },
        { title: "SEO & GEO", description: "Search engine optimization plus Generative Engine Optimization for AI-powered search visibility.", icon: "search" },
        { title: "Email Marketing", description: "Campaign strategy, automation sequences, list segmentation, and performance analytics.", icon: "email" },
        { title: "Market & Competitor Research", description: "Deep-dive intelligence reports that inform strategy and identify opportunities before your competitors see them.", icon: "research" },
        { title: "Social Media Management", description: "Content calendars, community management, platform optimization, and consistent organic growth.", icon: "social" },
        { title: "Trade Show & Event Marketing", description: "Booth design direction, pre/post-show campaigns, collateral, and lead capture systems.", icon: "event" },
      ]}
      differentiators={[
        { title: "Strategy before tactics", description: "We don't start running ads on day one. Every campaign is built on a market-informed strategy that tells us exactly where to spend, what to say, and who to target." },
        { title: "One system, not five vendors", description: "Your SEO team talks to your ad team because they're the same team. No handoff gaps. No conflicting strategies. One integrated growth engine." },
        { title: "AI-assisted at every layer", description: "Market research, content production, ad optimization, and reporting — all accelerated by AI. You get agency-quality output at a fraction of the overhead." },
        { title: "Built to compound", description: "Every campaign generates data. Every data point improves the next campaign. After 90 days, your marketing isn't just running — it's accelerating." },
      ]}
      related={[
        { href: "/services/content-pipeline", title: "Content Pipeline", description: "Video, copy, design, social — AI-assisted production at scale." },
        { href: "/services/ai-infrastructure", title: "AI Infrastructure", description: "Custom agents, workflow automation, CRM integration, and tool development." },
        { href: "/services/business-operations", title: "Business Operations", description: "CRM systems, analytics dashboards, sales enablement, and process architecture." },
      ]}
    />
  );
}
