"use client";

import { useState } from "react";
import TankOptions from "@/src/components/TankOptions";
import TankPreview from "@/src/components/TankPreview";
import type { BuilderState } from "@/src/types/builder";

const INITIAL_STATE: BuilderState = {
  tankSize: "60",
  plants: [],
  rocks: [],
};

export default function BuilderPage() {
  const [state, setState] = useState<BuilderState>(INITIAL_STATE);

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="border-b border-slate-200 bg-white px-6 py-4">
        <h1 className="text-xl font-semibold text-slate-800">
          Aquascape Tank Builder
        </h1>
      </header>

      <main className="mx-auto flex max-w-6xl gap-8 px-6 py-8">
        <aside className="w-full max-w-sm shrink-0">
          <TankOptions state={state} onStateChange={setState} />
        </aside>

        <section className="min-w-0 flex-1">
          <TankPreview state={state} />
        </section>
      </main>
    </div>
  );
}
