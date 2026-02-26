export interface AITool {
  id: string;
  name: string;
  description: string;
}

export const AI_STACK: AITool[] = [
  {
    id: "claude",
    name: "Claude (Anthropic)",
    description: "Core reasoning and content engine",
  },
  {
    id: "openclaw",
    name: "OpenClaw",
    description:
      "Autonomous personal AI agent deployed across your business channels",
  },
  {
    id: "chatgpt",
    name: "ChatGPT / OpenAI",
    description: "Supplemental generation and GPT-based workflow tools",
  },
  {
    id: "cursor",
    name: "Cursor",
    description: "AI-powered development environment for building real software",
  },
  {
    id: "make",
    name: "Make / Zapier",
    description: "Automation workflow orchestration",
  },
  {
    id: "framer",
    name: "Framer / Webflow",
    description: "AI-assisted web design and publishing",
  },
  {
    id: "elevenlabs",
    name: "ElevenLabs",
    description: "AI voice generation for content and product development",
  },
  {
    id: "midjourney",
    name: "Midjourney / DALL-E",
    description: "Visual asset generation at scale",
  },
  {
    id: "perplexity",
    name: "Perplexity",
    description: "AI-powered research and market intelligence",
  },
];
