"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import type { BuilderState } from "@/src/types/builder";

interface TankPreviewProps {
  state: BuilderState;
}

const TANK_WIDTH_MAP = {
  "60": "w-48",
  "90": "w-64",
  "120": "w-80",
} as const;

export default function TankPreview({ state }: TankPreviewProps) {
  const tankWidthClass = TANK_WIDTH_MAP[state.tankSize];
  const tankGlassRef = useRef<HTMLDivElement>(null);
  const sandRef = useRef<HTMLDivElement>(null);
  const rocksContainerRef = useRef<HTMLDivElement>(null);
  const plantsContainerRef = useRef<HTMLDivElement>(null);
  const hasAnimatedMount = useRef(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!hasAnimatedMount.current && tankGlassRef.current) {
        hasAnimatedMount.current = true;
        gsap.from(tankGlassRef.current, {
          opacity: 0,
          duration: 0.5,
          ease: "power2.out",
        });
        if (sandRef.current) {
          gsap.from(sandRef.current, {
            opacity: 0,
            duration: 0.4,
            delay: 0.15,
            ease: "power2.out",
          });
        }
      }

      if (state.rocks.length > 0 && rocksContainerRef.current?.children.length) {
        gsap.from(rocksContainerRef.current.children, {
          y: 24,
          opacity: 0,
          duration: 0.45,
          stagger: 0.08,
          ease: "power2.out",
        });
      }

      if (state.plants.length > 0 && plantsContainerRef.current?.children.length) {
        gsap.from(plantsContainerRef.current.children, {
          opacity: 0,
          scale: 0.8,
          duration: 0.45,
          stagger: 0.08,
          ease: "power2.out",
        });
      }
    });

    return () => ctx.revert();
  }, [state.tankSize, state.rocks, state.plants]);

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-lg font-medium text-slate-800">Tank preview</h2>

      <div className="flex min-h-[320px] flex-col items-center justify-end rounded-lg bg-gradient-to-b from-sky-100 to-emerald-900/30 p-6">
        <div
          ref={tankGlassRef}
          className={`flex min-h-[200px] flex-col justify-end overflow-hidden rounded-lg border-4 border-slate-400/80 bg-slate-100/50 shadow-inner ${tankWidthClass}`}
        >
          <div className="relative flex flex-1 flex-col justify-end">
            <div
              ref={sandRef}
              className="h-10 w-full rounded-b-md bg-amber-100/90 shadow-[inset_0_2px_4px_rgba(0,0,0,0.06)]"
              aria-hidden
            />
            <div className="absolute bottom-10 left-0 right-0 flex flex-wrap content-end gap-2 p-3">
              <div
                ref={rocksContainerRef}
                className="flex flex-wrap gap-2"
              >
                {state.rocks.map((rock) => (
                  <span
                    key={rock}
                    className="rounded bg-slate-500/80 px-2.5 py-1.5 text-xs font-medium text-white shadow-md"
                  >
                    {rock}
                  </span>
                ))}
              </div>
              <div
                ref={plantsContainerRef}
                className="mt-2 flex w-full flex-wrap gap-2"
              >
                {state.plants.map((plant) => (
                  <span
                    key={plant}
                    className="rounded bg-emerald-600/85 px-2.5 py-1.5 text-xs font-medium text-white shadow-md"
                  >
                    {plant}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <p className="mt-4 text-sm text-slate-600">
          {state.tankSize}cm tank
          {state.plants.length > 0 &&
            ` · ${state.plants.length} plant${state.plants.length !== 1 ? "s" : ""}`}
          {state.rocks.length > 0 &&
            ` · ${state.rocks.length} rock${state.rocks.length !== 1 ? "s" : ""}`}
        </p>
      </div>

      {(state.plants.length > 0 || state.rocks.length > 0) && (
        <ul className="mt-4 space-y-1 text-sm text-slate-600">
          {state.plants.map((plant) => (
            <li key={plant}>
              <span className="text-emerald-600">●</span> {plant}
            </li>
          ))}
          {state.rocks.map((rock) => (
            <li key={rock}>
              <span className="text-slate-500">●</span> {rock}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
