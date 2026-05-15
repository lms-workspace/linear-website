import type { Metadata } from "next";
import { AboutContent } from "@/components/about/AboutContent";

export const metadata: Metadata = {
  title: "About — Custom AI Marketing Solutions | LMS",
  description:
    "LMS is a full-scale marketing agency that builds custom AI solutions for established businesses. From automated content posting to agentic C-suite orchestration.",
};

export default function About() {
  return <AboutContent />;
}
