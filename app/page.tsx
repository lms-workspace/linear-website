import { Capabilities } from "@/components/home/Capabilities";
import { FinalCTA } from "@/components/home/FinalCTA";
import { Hero } from "@/components/home/Hero";
import { HowItWorks } from "@/components/home/HowItWorks";
import { MarqueeStrip } from "@/components/home/MarqueeStrip";
import { Repositioning } from "@/components/home/Repositioning";
import { Reviews } from "@/components/home/Reviews";
import { SectionDivider } from "@/components/home/SectionDivider";
import { WhoWeWorkWith } from "@/components/home/WhoWeWorkWith";

export default function Home() {
  return (
    <>
      <Hero />
      <MarqueeStrip />
      <Repositioning />
      <SectionDivider />
      <Capabilities />
      <MarqueeStrip />
      <HowItWorks />
      <SectionDivider />
      <Reviews />
      <WhoWeWorkWith />
      <FinalCTA />
    </>
  );
}
