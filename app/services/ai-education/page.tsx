import type { Metadata } from "next";
import { ServicePageLayout } from "@/components/services/ServicePageLayout";

export const metadata: Metadata = {
  title: "AI Education & Training — Team Onboarding for AI Tools | LMS",
  description:
    "Structured AI training programs, tool onboarding courses, and operational integration. Get your team confidently using AI tools — not just experimenting with them.",
};

export default function AIEducationPage() {
  return (
    <ServicePageLayout
      badge="AI Education"
      headline="Your team needs to operate AI. Not just use it."
      intro="The gap between 'trying ChatGPT' and 'operating AI infrastructure' is enormous. We close it — with structured training, tool onboarding, and operational integration designed for your specific team and workflow."
      body={[
        "AI adoption fails when it's treated as a tool demo. Someone shows your team ChatGPT, maybe Midjourney, and says 'go figure it out.' Three months later, adoption is at 10% and nobody's workflow actually changed. That's not training — that's abandonment.",
        "LMS builds structured learning programs tailored to your team's actual workflow. We don't teach generic 'prompt engineering.' We teach your sales team how to use AI for prospecting. We teach your marketing team how to build content pipelines. We teach your ops team how to automate reporting. Specific tools, specific workflows, specific outcomes.",
        "For companies deploying OpenClaw or other AI agent platforms, we provide full onboarding — from installation to daily operation. Your team learns how to interact with their AI agent, how to train it on company data, how to build custom skills, and how to monitor its output.",
        "We also build custom onboarding courses for specific platforms. If you're rolling out a new CRM, project management tool, or analytics platform, we create documented training that gets your team productive in days instead of months.",
      ]}
      services={[
        { title: "AI Education & Training", description: "Structured learning programs that get your team operating confidently with AI tools.", icon: "education" },
        { title: "Tool Onboarding Courses", description: "Custom onboarding programs for specific platforms — built for your team's actual workflow.", icon: "onboarding" },
        { title: "OpenClaw Team Training", description: "Full onboarding for AI agent platforms — interaction, training, skill building, and monitoring.", icon: "openclaw" },
        { title: "Workflow Integration", description: "We don't just teach tools — we integrate them into your existing processes so adoption actually sticks.", icon: "workflow" },
        { title: "Custom Documentation", description: "SOPs, video walkthroughs, and reference guides built for your specific tools and team structure.", icon: "ops" },
        { title: "Ongoing Support", description: "Post-training support to answer questions, troubleshoot issues, and evolve workflows as tools update.", icon: "tools" },
      ]}
      differentiators={[
        { title: "Workflow-first, not tool-first", description: "We start with how your team works, then teach the AI tools that fit. Not the other way around. This is why adoption sticks." },
        { title: "Custom to your stack", description: "No generic 'intro to AI' courses. Every training program is built around the specific tools, data, and processes your team uses daily." },
        { title: "Measurable adoption", description: "We track adoption metrics post-training. If your team isn't using what we taught, we adjust the approach — not just repeat the same slides." },
        { title: "Built by operators, not academics", description: "LMS runs on AI internally. We're not teaching theory — we're teaching the same workflows we use every day to run a business." },
      ]}
      related={[
        { href: "/services/ai-infrastructure", title: "AI Infrastructure", description: "Custom agents, workflow automation, CRM integration, and tool development." },
        { href: "/services/business-operations", title: "Business Operations", description: "CRM systems, analytics dashboards, sales enablement, and process architecture." },
        { href: "/services/content-pipeline", title: "Content Pipeline", description: "Video, copy, design, social — AI-assisted production at scale." },
      ]}
    />
  );
}
