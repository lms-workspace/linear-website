import type { Metadata } from "next";
import { Bebas_Neue, Rajdhani, DM_Sans, JetBrains_Mono } from "next/font/google";
import styles from "./page.module.css";

const display = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--nf-font-display",
  display: "swap",
});

const heading = Rajdhani({
  weight: ["500", "600", "700"],
  subsets: ["latin"],
  variable: "--nf-font-heading",
  display: "swap",
});

const body = DM_Sans({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--nf-font-body",
  display: "swap",
});

const mono = JetBrains_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--nf-font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mission-Critical Fiber From Camera to Core | nanoFIBER × InfoComm 2026",
  description:
    "nanoFIBER tactical fiber for mission-critical broadcast and Pro AV. Talk specs with Blake Pederson — at InfoComm 2026 in Las Vegas (June 17–19) or any time after.",
  alternates: {
    canonical: "https://linearmarketingsolutions.com/nanofiber-infocomm",
  },
  openGraph: {
    title: "Mission-Critical Fiber From Camera to Core",
    description:
      "Tactical-armored single-mode and multimode for broadcast, Pro AV, stadium, and data-center deployments. Connect with Blake at InfoComm 2026 — or after.",
    url: "https://linearmarketingsolutions.com/nanofiber-infocomm",
    siteName: "nanoFIBER × Linear Marketing Solutions",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mission-Critical Fiber From Camera to Core",
    description:
      "nanoFIBER tactical fiber for broadcast and Pro AV. Book a call with Blake — InfoComm 2026 or after.",
  },
};

export default function NanoFiberInfocommLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      data-bare-route="nanofiber-infocomm"
      className={`${styles.scope} ${display.variable} ${heading.variable} ${body.variable} ${mono.variable}`}
    >
      {children}
    </div>
  );
}
