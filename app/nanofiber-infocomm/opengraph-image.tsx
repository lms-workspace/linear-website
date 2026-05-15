import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const runtime = "nodejs";
export const alt = "Mission-Critical Fiber From Camera to Core — nanoFIBER at InfoComm 2026";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function NanoFiberInfocommOG() {
  const fontsDir = join(process.cwd(), "app", "nanofiber-infocomm", "fonts");
  const [bebas, rajdhani600, mono] = await Promise.all([
    readFile(join(fontsDir, "BebasNeue-Regular.ttf")),
    readFile(join(fontsDir, "Rajdhani-SemiBold.ttf")),
    readFile(join(fontsDir, "JetBrainsMono-Medium.ttf")),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "72px 96px",
          background:
            "radial-gradient(80% 70% at 90% 10%, rgba(201,168,76,0.22), transparent 60%), linear-gradient(180deg, #0B0B0B 0%, #0A0A0A 60%, #141414 100%)",
          fontFamily: "Rajdhani",
          color: "#E8E8E8",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: 96,
            top: 96,
            width: 48,
            height: 1,
            background: "#C9A84C",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 152,
            top: 84,
            fontFamily: "JetBrains Mono",
            fontSize: 22,
            letterSpacing: "0.28em",
            color: "#A0A0A0",
            display: "flex",
          }}
        >
          INFOCOMM 2026 · LAS VEGAS · JUN 17–19
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontFamily: "Bebas Neue",
            fontSize: 136,
            lineHeight: 0.92,
            letterSpacing: "0.01em",
          }}
        >
          <span style={{ display: "flex" }}>MISSION-CRITICAL FIBER</span>
          <span style={{ display: "flex", color: "#C9A84C" }}>From Camera to Core.</span>
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 40,
            fontSize: 28,
            fontWeight: 600,
            color: "#A0A0A0",
            letterSpacing: "0.04em",
          }}
        >
          nanoFIBER × Linear Marketing Solutions
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Bebas Neue", data: bebas, style: "normal", weight: 400 },
        { name: "Rajdhani", data: rajdhani600, style: "normal", weight: 600 },
        { name: "JetBrains Mono", data: mono, style: "normal", weight: 500 },
      ],
    },
  );
}
