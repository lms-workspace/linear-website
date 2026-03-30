import type { Metadata } from "next";
import { ServicePageLayout } from "@/components/services/ServicePageLayout";

export const metadata: Metadata = {
  title: "Content Pipeline — AI-Assisted Content Production | LMS",
  description:
    "Video, copy, design, social media, and email — AI-assisted content production at scale. Consistent, on-brand output without the agency bloat.",
};

export default function ContentPipelinePage() {
  return (
    <ServicePageLayout
      badge="Content Pipeline"
      headline="Content at scale. Quality at every touchpoint."
      intro="Content is the fuel for every growth channel — but most businesses either can't produce enough or can't keep it consistent. We solve both problems with an AI-assisted pipeline that never stops."
      body={[
        "The Content Pipeline is a production system, not a creative department. We build repeatable workflows that combine AI generation with human quality control to produce video, copy, graphics, email campaigns, case studies, and social content — on brand, on schedule, at volume.",
        "Every piece of content is mapped to a specific stage of your customer journey. Top-of-funnel content drives awareness. Mid-funnel content builds trust. Bottom-of-funnel content closes deals. Nothing is created in a vacuum.",
        "We handle short-form video for TikTok, Reels, and YouTube Shorts. Long-form blog content optimized for SEO and AI search engines. Email sequences that nurture leads through your pipeline automatically. Social media calendars that maintain presence without you lifting a finger.",
        "The AI layer means we produce 3-5x the volume of a traditional agency at a fraction of the cost. But every piece still gets human review, brand alignment checks, and strategic intent validation before it goes live.",
      ]}
      services={[
        { title: "Content Creation", description: "Short-form video, long-form copy, graphics, email campaigns, white papers, and case studies.", icon: "content" },
        { title: "Social Media Management", description: "Content calendars, community management, platform optimization, and consistent organic growth.", icon: "social" },
        { title: "Email Marketing", description: "Campaign strategy, automation sequences, list segmentation, and performance analytics.", icon: "email" },
        { title: "AI-Powered Content Systems", description: "Scalable content production pipelines that combine AI generation with human quality control.", icon: "contentAi" },
        { title: "Brand Voice Documentation", description: "Tone guides, messaging frameworks, and content templates that keep every piece on brand.", icon: "brand" },
        { title: "Video Production", description: "Script writing, editing, motion graphics, and platform-optimized formatting for every channel.", icon: "content" },
      ]}
      differentiators={[
        { title: "Production system, not a retainer", description: "You don't get a 'social media package.' You get a content pipeline — documented workflows, approval processes, and production schedules that run like infrastructure." },
        { title: "AI-assisted, human-verified", description: "AI handles the heavy lifting — research, first drafts, formatting. Humans handle strategy, brand voice, and final quality. Best of both worlds." },
        { title: "Mapped to your funnel", description: "Every piece of content has a job. Awareness, consideration, or conversion. Nothing is created just to fill a calendar." },
        { title: "3-5x the output", description: "AI-assisted workflows mean more content, faster, without sacrificing quality. Your competitors are still doing it the old way." },
      ]}
      related={[
        { href: "/services/growth-engine", title: "Growth Engine", description: "Full-funnel strategy, brand systems, campaign architecture, and market intelligence." },
        { href: "/services/web-development", title: "Web & App Dev", description: "Production-grade websites, dashboards, and platforms — built from scratch." },
        { href: "/services/ai-infrastructure", title: "AI Infrastructure", description: "Custom agents, workflow automation, CRM integration, and tool development." },
      ]}
    />
  );
}
