"use client";

/**
 * Persistent ambient glow (etherfuse.com's signature effect).
 * Fixed position, color-dodge blend mode, 20s drift animation.
 * Lives at the layout level — affects the ENTIRE page.
 * This is what makes the whole site feel "alive."
 */
export function AmbientGlow() {
  return (
    <>
      {/* Primary glow — large, slow drift */}
      <div
        className="fixed pointer-events-none z-[5]"
        style={{
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: "radial-gradient(circle, #CCFF00, #000 85%)",
          mixBlendMode: "color-dodge",
          opacity: 0.6,
          animation: "glow-drift 20s ease-in-out infinite",
        }}
      />
      {/* Secondary glow — smaller, offset timing */}
      <div
        className="fixed pointer-events-none z-[5]"
        style={{
          width: 300,
          height: 300,
          borderRadius: "50%",
          background: "radial-gradient(circle, #A3E635, #000 80%)",
          mixBlendMode: "color-dodge",
          opacity: 0.3,
          animation: "glow-drift-2 25s ease-in-out infinite",
        }}
      />
    </>
  );
}
