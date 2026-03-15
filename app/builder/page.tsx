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
    <div className="relative min-h-screen bg-gradient-to-br from-soft-white via-mist/30 to-aqua-light/15">
      {/* Decorative blurred shapes */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-[-10%] top-[10%] h-[420px] w-[420px] rounded-full bg-mint/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[5%] right-[-5%] h-[350px] w-[350px] rounded-full bg-aqua/10 blur-3xl"
      />

      {/* Header */}
      <header className="relative z-10 border-b border-sage/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link
            href="/"
            className="text-lg font-semibold tracking-tight text-deep-green transition-colors hover:text-forest"
          >
            Aquascape Builder
          </Link>
          <span className="rounded-full bg-sage/10 px-4 py-1.5 text-xs font-medium text-forest">
            Builder Mode
          </span>
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
