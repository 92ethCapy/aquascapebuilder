"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import type { BuilderState, LightingType } from "@/src/types/builder";

interface TankPreviewProps {
  state: BuilderState;
}

const TANK_DIMS = {
  "60": { width: 320, height: 210 },
  "90": { width: 440, height: 250 },
  "120": { width: 560, height: 290 },
} as const;

const LIGHTING_OVERLAY: Record<LightingType, string> = {
  warm: "rgba(255,200,100,0.12)",
  natural: "rgba(255,255,255,0.06)",
  cool: "rgba(130,200,255,0.12)",
};

const LIGHTING_RAYS: Record<LightingType, string> = {
  warm: "rgba(255,210,120,0.10)",
  natural: "rgba(255,255,255,0.07)",
  cool: "rgba(150,210,255,0.10)",
};

function MonteCarlo() {
  return (
    <svg
      viewBox="0 0 220 50"
      className="absolute bottom-[11%] left-[5%] w-[90%]"
      preserveAspectRatio="xMidYMax meet"
    >
      <ellipse cx="30" cy="38" rx="28" ry="12" fill="#3a8c5c" opacity=".85" />
      <ellipse cx="80" cy="36" rx="32" ry="14" fill="#2d7a4e" opacity=".8" />
      <ellipse cx="140" cy="37" rx="30" ry="13" fill="#40916c" opacity=".85" />
      <ellipse cx="190" cy="38" rx="26" ry="12" fill="#35845a" opacity=".8" />
      <circle cx="22" cy="30" r="7" fill="#4da872" opacity=".6" />
      <circle cx="55" cy="28" r="8" fill="#52b788" opacity=".5" />
      <circle cx="100" cy="29" r="7" fill="#4da872" opacity=".6" />
      <circle cx="150" cy="28" r="8" fill="#52b788" opacity=".55" />
      <circle cx="185" cy="30" r="6" fill="#4da872" opacity=".6" />
    </svg>
  );
}

function JavaFern() {
  return (
    <svg
      viewBox="0 0 90 130"
      className="absolute bottom-[14%] left-[8%] h-[60%]"
      preserveAspectRatio="xMidYMax meet"
    >
      <path d="M45 130 Q43 90 35 55 Q30 30 34 15 Q37 4 45 2 Q53 4 56 15 Q60 30 55 55 Q47 90 45 130Z" fill="#2d6a4f" opacity=".88" />
      <path d="M38 115 Q26 75 20 48 Q17 32 22 22 Q27 16 32 22 Q35 38 38 115Z" fill="#40916c" opacity=".75" />
      <path d="M52 115 Q64 75 70 48 Q73 32 68 22 Q63 16 58 22 Q55 38 52 115Z" fill="#40916c" opacity=".75" />
      <path d="M42 120 Q30 85 25 60 Q23 50 28 42 Q32 38 35 44 Q36 55 42 120Z" fill="#52b788" opacity=".5" />
    </svg>
  );
}

function Anubias() {
  return (
    <svg
      viewBox="0 0 100 110"
      className="absolute bottom-[14%] right-[10%] h-[48%]"
      preserveAspectRatio="xMidYMax meet"
    >
      <line x1="50" y1="110" x2="50" y2="55" stroke="#2d6a4f" strokeWidth="3" />
      <line x1="50" y1="75" x2="32" y2="42" stroke="#2d6a4f" strokeWidth="2.5" />
      <line x1="50" y1="65" x2="68" y2="36" stroke="#2d6a4f" strokeWidth="2.5" />
      <ellipse cx="50" cy="44" rx="20" ry="14" fill="#1a4d2e" opacity=".88" transform="rotate(-8,50,44)" />
      <ellipse cx="30" cy="34" rx="17" ry="12" fill="#2d6a4f" opacity=".82" transform="rotate(12,30,34)" />
      <ellipse cx="70" cy="30" rx="17" ry="11" fill="#2d6a4f" opacity=".82" transform="rotate(-15,70,30)" />
    </svg>
  );
}

function SeiryuStone() {
  return (
    <svg
      viewBox="0 0 90 80"
      className="absolute bottom-[11%] left-[28%] h-[34%]"
      preserveAspectRatio="xMidYMax meet"
    >
      <polygon points="12,80 6,45 22,18 42,5 60,12 78,28 84,55 72,80" fill="#6b7d8e" opacity=".92" />
      <polygon points="18,74 12,48 28,22 44,14 56,20 66,38 60,74" fill="#7d8fa0" opacity=".45" />
      <line x1="16" y1="50" x2="68" y2="46" stroke="#5a6b7a" strokeWidth="1" opacity=".4" />
      <line x1="22" y1="62" x2="62" y2="58" stroke="#5a6b7a" strokeWidth=".8" opacity=".3" />
    </svg>
  );
}

function DragonStone() {
  return (
    <svg
      viewBox="0 0 75 65"
      className="absolute bottom-[11%] right-[22%] h-[28%]"
      preserveAspectRatio="xMidYMax meet"
    >
      <path d="M10,65 Q4,42 14,26 Q24,10 40,8 Q56,6 65,22 Q72,38 68,58 Q64,65 10,65Z" fill="#8B6914" opacity=".9" />
      <circle cx="32" cy="32" r="5" fill="#6b5010" opacity=".45" />
      <circle cx="48" cy="27" r="4" fill="#6b5010" opacity=".38" />
      <circle cx="27" cy="46" r="3.5" fill="#6b5010" opacity=".4" />
      <circle cx="52" cy="44" r="3" fill="#6b5010" opacity=".35" />
    </svg>
  );
}

export default function TankPreview({ state }: TankPreviewProps) {
  const dims = TANK_DIMS[state.tankSize];
  const tankGlassRef = useRef<HTMLDivElement>(null);
  const sandRef = useRef<HTMLDivElement>(null);
  const rocksRef = useRef<HTMLDivElement>(null);
  const plantsRef = useRef<HTMLDivElement>(null);
  const hasAnimatedMount = useRef(false);

  useEffect(() => {
    if (hasAnimatedMount.current || !tankGlassRef.current) return;
    hasAnimatedMount.current = true;
    const ctx = gsap.context(() => {
      gsap.from(tankGlassRef.current!, { opacity: 0, y: 12, duration: 0.7, ease: "power3.out" });
      if (sandRef.current) gsap.from(sandRef.current, { opacity: 0, duration: 0.5, delay: 0.2, ease: "power2.out" });
    });
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!rocksRef.current?.children.length) return;
    const ctx = gsap.context(() => {
      gsap.from(Array.from(rocksRef.current!.children), { y: 30, opacity: 0, duration: 0.55, stagger: 0.1, ease: "power3.out" });
    });
    return () => ctx.revert();
  }, [state.rocks]);

  useEffect(() => {
    if (!plantsRef.current?.children.length) return;
    const ctx = gsap.context(() => {
      gsap.from(Array.from(plantsRef.current!.children), { opacity: 0, scale: 0.8, duration: 0.55, stagger: 0.1, ease: "power3.out" });
    });
    return () => ctx.revert();
  }, [state.plants]);

  return (
    <div className="glass-dark-strong rounded-2xl p-6 shadow-lg">
      <h2 className="mb-1 text-lg font-semibold text-white/90">
        Tank Preview
      </h2>
      <p className="mb-6 text-sm text-white/35">
        {dims.width / 10} × {dims.height / 10} cm — {state.lighting} lighting
      </p>

      {/* Scene backdrop */}
      <div className="relative flex items-end justify-center overflow-hidden rounded-xl p-8 pb-12" style={{ background: "linear-gradient(180deg, #0a2520 0%, #0d3028 40%, #0a1f1a 100%)" }}>
        {/* Ambient glow behind tank */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 blur-[60px]"
          style={{ background: "radial-gradient(ellipse, rgba(82,183,136,0.15) 0%, transparent 70%)" }}
        />

        <div
          ref={tankGlassRef}
          className="relative overflow-hidden rounded-lg transition-all duration-500"
          style={{
            width: dims.width,
            maxWidth: "100%",
            aspectRatio: `${dims.width} / ${dims.height}`,
            border: "4px solid rgba(140,180,190,0.25)",
            boxShadow: "0 0 40px rgba(82,183,136,0.08), 0 8px 32px rgba(0,0,0,0.4), inset 0 0 40px rgba(255,255,255,0.04)",
          }}
        >
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(100,200,220,0.20) 0%, rgba(80,180,200,0.15) 40%, rgba(30,80,60,0.30) 100%)" }} />
          <div className="absolute inset-0 transition-colors duration-700" style={{ background: `linear-gradient(180deg, ${LIGHTING_OVERLAY[state.lighting]} 0%, transparent 60%)` }} />
          <div className="absolute inset-0 transition-colors duration-700" style={{ background: `linear-gradient(155deg, ${LIGHTING_RAYS[state.lighting]} 0%, transparent 40%, transparent 60%, ${LIGHTING_RAYS[state.lighting]} 100%)` }} />
          <div className="absolute inset-x-0 top-0 h-[3px]" style={{ background: "linear-gradient(90deg, transparent 10%, rgba(255,255,255,0.3) 50%, transparent 90%)" }} />

          <div ref={plantsRef} className="absolute inset-0">
            {state.plants.includes("Monte Carlo") && <MonteCarlo />}
            {state.plants.includes("Java Fern") && <JavaFern />}
            {state.plants.includes("Anubias") && <Anubias />}
          </div>

          <div ref={rocksRef} className="absolute inset-0">
            {state.rocks.includes("Seiryu Stone") && <SeiryuStone />}
            {state.rocks.includes("Dragon Stone") && <DragonStone />}
          </div>

          <div ref={sandRef} className="absolute inset-x-0 bottom-0" style={{ height: "14%", background: "linear-gradient(180deg, #8a6a3a 0%, #6b5030 100%)", borderTop: "1px solid rgba(120,90,50,0.3)" }} />
          <div className="absolute bottom-0 left-0 top-0 w-[6px]" style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.20) 0%, rgba(255,255,255,0.04) 100%)" }} />
        </div>
      </div>

      {/* Summary */}
      {(state.plants.length > 0 || state.rocks.length > 0) && (
        <div className="mt-6 flex flex-wrap gap-2">
          {state.plants.map((p) => (
            <span key={p} className="rounded-full bg-mint/10 px-3 py-1 text-xs font-medium text-mint/80">
              {p}
            </span>
          ))}
          {state.rocks.map((r) => (
            <span key={r} className="rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-white/45">
              {r}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
