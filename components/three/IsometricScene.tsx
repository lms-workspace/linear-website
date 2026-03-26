"use client";

import { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  RoundedBox,
  Environment,
  PerspectiveCamera,
  Float,
} from "@react-three/drei";
import * as THREE from "three";

/**
 * Premium isometric 3D scene — glass cards, floating elements, subtle glow.
 * Inspired by the "Supercharging Connectivity" reference.
 * Interactive: responds to mouse position.
 */

/* ── Glass Card ─────────────────────────────────────── */

function GlassCard({
  position,
  size = [2, 0.08, 1.4],
  color = "#1a1a2e",
  emissive = "#7C3AED",
  emissiveIntensity = 0.05,
  rotation = [0, 0, 0],
}: {
  position: [number, number, number];
  size?: [number, number, number];
  color?: string;
  emissive?: string;
  emissiveIntensity?: number;
  rotation?: [number, number, number];
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  return (
    <group position={position} rotation={rotation as unknown as THREE.Euler}>
      <RoundedBox ref={meshRef} args={size} radius={0.03} smoothness={2}>
        <meshPhysicalMaterial
          color={color}
          emissive={emissive}
          emissiveIntensity={emissiveIntensity}
          transparent
          opacity={0.35}
          roughness={0.05}
          metalness={0.1}
          clearcoat={1}
          clearcoatRoughness={0.02}
          side={THREE.DoubleSide}
          envMapIntensity={0.8}
        />
      </RoundedBox>
      {/* Edge glow */}
      <RoundedBox args={[size[0] + 0.02, size[1] + 0.02, size[2] + 0.02]} radius={0.04} smoothness={2}>
        <meshBasicMaterial
          color={emissive}
          transparent
          opacity={0.06}
          blending={THREE.AdditiveBlending}
          side={THREE.DoubleSide}
          depthWrite={false}
        />
      </RoundedBox>
    </group>
  );
}

/* ── Floating Accent Shape ─────────────────────────── */

function AccentShape({
  position,
  shape = "sphere",
  color = "#8B5CF6",
  size = 0.15,
}: {
  position: [number, number, number];
  shape?: "sphere" | "octahedron" | "torus";
  color?: string;
  size?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.5;
    meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
  });

  return (
    <Float speed={2} rotationIntensity={0.3} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position}>
        {shape === "sphere" && <sphereGeometry args={[size, 16, 16]} />}
        {shape === "octahedron" && <octahedronGeometry args={[size]} />}
        {shape === "torus" && <torusGeometry args={[size, size * 0.3, 16, 32]} />}
        <meshPhysicalMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.3}
          roughness={0.1}
          metalness={0.9}
          clearcoat={1}
          transparent
          opacity={0.9}
        />
      </mesh>
    </Float>
  );
}

/* ── Connection Lines ──────────────────────────────── */

function ConnectionBeam({
  start,
  end,
  color = "#8B5CF6",
}: {
  start: [number, number, number];
  end: [number, number, number];
  color?: string;
}) {
  const ref = useRef<THREE.LineSegments>(null);

  const geometry = new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(...start),
    new THREE.Vector3(...end),
  ]);

  return (
    <lineSegments ref={ref} geometry={geometry}>
      <lineBasicMaterial
        color={color}
        transparent
        opacity={0.15}
        blending={THREE.AdditiveBlending}
      />
    </lineSegments>
  );
}

/* ── Main Scene ────────────────────────────────────── */

function IsometricSceneContent() {
  const groupRef = useRef<THREE.Group>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  // Mouse tracking for subtle rotation
  useFrame((state) => {
    if (!groupRef.current) return;
    const time = state.clock.elapsedTime;

    // Slow idle rotation + mouse influence
    const targetY = -0.4 + mouseRef.current.x * 0.15 + time * 0.05;
    const targetX = -0.3 + mouseRef.current.y * 0.1;

    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      targetY,
      0.02
    );
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      targetX,
      0.02
    );
  });

  // Track mouse
  if (typeof window !== "undefined") {
    const onMove = (e: MouseEvent) => {
      mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    if (typeof window !== "undefined") {
      window.addEventListener("mousemove", onMove);
    }
  }

  return (
    <>
      <PerspectiveCamera makeDefault position={[4, 3, 5]} fov={35} />
      <ambientLight intensity={0.15} />
      <directionalLight position={[5, 8, 5]} intensity={0.3} color="#ffffff" />
      <pointLight position={[-3, 2, 3]} intensity={0.4} color="#7C3AED" />
      <pointLight position={[3, -1, -2]} intensity={0.2} color="#6366F1" />
      <Environment preset="night" />

      <group ref={groupRef}>
        {/* Main platform card */}
        <GlassCard
          position={[0, 0, 0]}
          size={[3, 0.06, 2]}
          color="#12121a"
          emissive="#6366F1"
          emissiveIntensity={0.03}
        />

        {/* Stacked secondary cards */}
        <GlassCard
          position={[-0.3, 0.4, -0.2]}
          size={[1.8, 0.05, 1.2]}
          color="#16162a"
          emissive="#8B5CF6"
          emissiveIntensity={0.06}
        />

        <GlassCard
          position={[0.5, 0.8, 0.1]}
          size={[1.4, 0.04, 1]}
          color="#1a1a3e"
          emissive="#A78BFA"
          emissiveIntensity={0.08}
        />

        {/* Small floating accent card */}
        <GlassCard
          position={[1.2, 1.3, -0.5]}
          size={[0.8, 0.03, 0.6]}
          color="#1e1e40"
          emissive="#7C3AED"
          emissiveIntensity={0.12}
          rotation={[0, 0.3, 0]}
        />

        {/* Accent shapes */}
        <AccentShape position={[-1.2, 0.6, 0.8]} shape="octahedron" color="#8B5CF6" size={0.12} />
        <AccentShape position={[1.6, 0.3, -0.6]} shape="sphere" color="#6366F1" size={0.08} />
        <AccentShape position={[0, 1.5, 0.4]} shape="torus" color="#A78BFA" size={0.1} />

        {/* Connection beams between cards */}
        <ConnectionBeam start={[0, 0.06, 0]} end={[-0.3, 0.35, -0.2]} color="#8B5CF6" />
        <ConnectionBeam start={[-0.3, 0.45, -0.2]} end={[0.5, 0.75, 0.1]} color="#6366F1" />
        <ConnectionBeam start={[0.5, 0.84, 0.1]} end={[1.2, 1.27, -0.5]} color="#A78BFA" />
      </group>
    </>
  );
}

/* ── Export ─────────────────────────────────────────── */

export function IsometricScene({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <Suspense fallback={null}>
        <Canvas
          dpr={[1, 1.5]}
          gl={{ antialias: true, alpha: true }}
          style={{ background: "transparent" }}
        >
          <IsometricSceneContent />
        </Canvas>
      </Suspense>
    </div>
  );
}
