"use client";

import { useState } from "react";
import Link from "next/link";
import TankOptions from "@/src/components/TankOptions";
import TankPreview from "@/src/components/TankPreview";
import type { BuilderState } from "@/src/types/builder";

const INITIAL_STATE: BuilderState = {
  tankSize: "60",
  plants: [],
  rocks: [],
  lighting: "natural",
};

export default function BuilderPage() {
  const [state, setState] = useState<BuilderState>(INITIAL_STATE);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0c1e17]">
      {/* Organic background shapes */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div
          aria-hidden
          className="animate-drift absolute h-[500px] w-[500px] rounded-full opacity-35 blur-[100px]"
          style={{
            top: "5%",
            left: "-8%",
            background: "radial-gradient(circle, #0f3d2e 0%, transparent 70%)",
          }}
        />
        <div
          aria-hidden
          className="animate-drift-slow absolute h-[400px] w-[400px] rounded-full opacity-25 blur-[90px]"
          style={{
            bottom: "10%",
            right: "-5%",
            background: "radial-gradient(circle, #0a2a3a 0%, transparent 70%)",
          }}
        />
        <div
          aria-hidden
          className="animate-drift absolute h-[350px] w-[350px] rounded-full opacity-20 blur-[80px]"
          style={{
            top: "50%",
            left: "40%",
            background: "radial-gradient(circle, #143d30 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Header */}
      <header className="relative z-10 border-b border-white/5">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link
            href="/"
            className="text-lg font-semibold tracking-tight text-white/90 transition-colors hover:text-white"
          >
            Aquascape Builder
          </Link>
          <nav className="flex items-center gap-4 text-sm">
            <Link href="/gallery" className="font-medium text-white/50 transition-colors hover:text-white/80">
              Gallery
            </Link>
            <Link href="/equipment" className="font-medium text-white/50 transition-colors hover:text-white/80">
              Equipment
            </Link>
            <span className="rounded-full bg-mint/15 px-4 py-1.5 text-xs font-medium text-mint">
              Builder Mode
            </span>
          </nav>
        </div>
      </header>

      {/* Main split layout */}
      <main className="relative z-10 mx-auto flex max-w-7xl gap-8 px-6 py-8 lg:gap-10">
        <aside className="w-full max-w-[360px] shrink-0">
          <TankOptions state={state} onStateChange={setState} />
        </aside>
        <section className="min-w-0 flex-1">
          <TankPreview state={state} />
        </section>
      </main>
    </div>
  );
}
