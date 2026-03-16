"use client";

import { useState } from "react";
import Link from "next/link";
import RockCard from "@/src/components/RockCard";
import LightCard from "@/src/components/LightCard";
import RockModal from "@/src/components/RockModal";
import LightModal from "@/src/components/LightModal";
import { ROCKS, LIGHTS, type RockType, type LightProduct } from "@/src/data/equipment";

export default function EquipmentClient() {
  const [selectedRock, setSelectedRock] = useState<RockType | null>(null);
  const [selectedLight, setSelectedLight] = useState<LightProduct | null>(null);

  return (
    <div className="min-h-screen bg-soft-white">
      {/* Header */}
      <header className="border-b border-sage/10 bg-white/70 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link
            href="/"
            className="text-lg font-semibold tracking-tight text-deep-green transition-colors hover:text-forest"
          >
            Aquascape Builder
          </Link>
          <nav className="flex items-center gap-4 text-sm">
            <Link href="/gallery" className="font-medium text-forest/60 transition-colors hover:text-forest">
              Gallery
            </Link>
            <Link href="/equipment" className="font-medium text-forest">
              Equipment
            </Link>
            <Link
              href="/builder"
              className="rounded-full bg-sage/10 px-4 py-1.5 font-medium text-forest transition-colors hover:bg-sage/20"
            >
              Builder
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-b from-deep-green to-forest px-6 pb-16 pt-20 text-center text-white">
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-mint/70">
          Hardscape & Lighting
        </p>
        <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
          Equipment Library
        </h1>
        <p className="mx-auto max-w-lg text-base leading-relaxed text-white/60">
          Explore our curated selection of aquascaping stones and LED lighting.
          Each piece includes style recommendations, specs, and tips from
          experienced aquascapers.
        </p>
      </section>

      {/* Rocks section */}
      <section id="rocks" className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-sage">
            Hardscape
          </p>
          <h2 className="mb-2 text-3xl font-bold tracking-tight text-deep-green">
            Aquascaping Rocks
          </h2>
          <p className="max-w-xl text-sm leading-relaxed text-forest/50">
            Each stone type has its own character. Choose based on your layout
            style, color palette, and the textures you want to bring into your
            aquascape.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ROCKS.map((rock, i) => (
            <RockCard
              key={rock.id}
              rock={rock}
              onSelect={setSelectedRock}
              priority={i < 3}
            />
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="mx-auto max-w-7xl px-6">
        <div className="h-px bg-sage/10" />
      </div>

      {/* Lights section */}
      <section id="lights" className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-sage">
            Lighting
          </p>
          <h2 className="mb-2 text-3xl font-bold tracking-tight text-deep-green">
            WeeK LED Series
          </h2>
          <p className="max-w-xl text-sm leading-relaxed text-forest/50">
            Two models from WeeK — designed for serious planted tanks. Full RGB
            spectrum, app control, and the light output to push demanding stem
            plants.
          </p>
        </div>

        <div className="grid gap-6">
          {LIGHTS.map((light, i) => (
            <LightCard
              key={light.id}
              light={light}
              onSelect={setSelectedLight}
              priority={i === 0}
            />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-forest to-sage px-6 py-16 text-center text-white">
        <h2 className="mb-3 text-2xl font-bold tracking-tight md:text-3xl">
          Got your gear? Start designing.
        </h2>
        <p className="mx-auto mb-8 max-w-md text-sm text-white/60">
          Combine your chosen rocks and lighting in the builder to visualize
          your aquascape before setting up the tank.
        </p>
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/builder"
            className="inline-flex rounded-full bg-white px-8 py-3 text-sm font-semibold text-forest shadow-lg transition-all hover:shadow-xl"
          >
            Open the Builder
          </Link>
          <Link
            href="/gallery"
            className="inline-flex rounded-full border border-white/20 px-8 py-3 text-sm font-semibold text-white transition-all hover:border-white/40 hover:bg-white/10"
          >
            Browse Gallery
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-deep-green px-6 py-8 text-center text-xs text-white/40">
        <p>Aquascape Builder — Inspired by the art of Takashi Amano</p>
      </footer>

      {/* Modals */}
      <RockModal rock={selectedRock} onClose={() => setSelectedRock(null)} />
      <LightModal light={selectedLight} onClose={() => setSelectedLight(null)} />
    </div>
  );
}
