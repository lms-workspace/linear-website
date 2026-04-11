import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const runtime = "nodejs";
export const alt = "Linear Marketing Solutions — AI Marketing & Web Development";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const fontDir = join(process.cwd(), "app");
  const [geistBlack, geistMedium] = await Promise.all([
    readFile(join(fontDir, "Geist-Black.ttf")),
    readFile(join(fontDir, "Geist-Medium.ttf")),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          padding: "0 80px",
          background: "linear-gradient(135deg, #2E1065 0%, #0F0A1F 100%)",
          position: "relative",
          fontFamily: "Geist",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: -150,
            top: -150,
            width: 700,
            height: 700,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(167,139,250,0.35), transparent 70%)",
            display: "flex",
          }}
        />
        <svg
          width="340"
          height="340"
          viewBox="0 0 200 200"
          style={{ flexShrink: 0, marginRight: 60 }}
        >
          <defs>
            <linearGradient id="ogface" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#DDD6FE" />
              <stop offset="100%" stopColor="#A78BFA" />
            </linearGradient>
            <radialGradient id="ogshadow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#A78BFA" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#A78BFA" stopOpacity="0" />
            </radialGradient>
          </defs>
          <ellipse cx="105" cy="184" rx="78" ry="6" fill="url(#ogshadow)" />
          <path d="M 50 30 L 86 44 L 86 148 L 50 134 Z" fill="url(#ogface)" />
          <path d="M 50 30 L 50 134 L 32 126 L 32 22 Z" fill="#4C1D95" />
          <path d="M 50 30 L 32 22 L 68 8 L 86 16 Z" fill="#FFFFFF" />
          <path d="M 50 134 L 86 148 L 168 126 L 132 112 Z" fill="#4C1D95" />
          <path d="M 86 148 L 168 126 L 168 150 L 86 172 Z" fill="url(#ogface)" />
          <path d="M 86 148 L 86 172 L 50 158 L 50 134 Z" fill="#2E1065" />
        </svg>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            position: "relative",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 104,
              fontWeight: 900,
              letterSpacing: "-0.04em",
              lineHeight: 0.9,
              color: "white",
            }}
          >
            <span style={{ color: "#A78BFA" }}>L</span>inear
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 104,
              fontWeight: 900,
              letterSpacing: "-0.04em",
              lineHeight: 0.9,
              color: "white",
            }}
          >
            Marketing
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 104,
              fontWeight: 900,
              letterSpacing: "-0.04em",
              lineHeight: 0.9,
              color: "white",
            }}
          >
            Solutions
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 32,
              fontSize: 28,
              fontWeight: 500,
              color: "#C4B5FD",
              letterSpacing: "-0.01em",
            }}
          >
            AI marketing &amp; web development · Southern California
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Geist", data: geistBlack, style: "normal", weight: 900 },
        { name: "Geist", data: geistMedium, style: "normal", weight: 500 },
      ],
    }
  );
}
