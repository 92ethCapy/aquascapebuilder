"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import GalleryCard from "@/src/components/GalleryCard";
import GalleryModal from "@/src/components/GalleryModal";
import {
  GALLERY_TANKS,
  ALL_STYLES,
  ALL_SIZES,
  ALL_DIFFICULTIES,
  type GalleryTank,
  type AquascapeStyle,
  type TankSizeLabel,
  type Difficulty,
} from "@/src/data/gallery";

type FilterKey = "style" | "size" | "difficulty";

interface Filters {
  style: AquascapeStyle | null;
  size: TankSizeLabel | null;
  difficulty: Difficulty | null;
}

export default function GalleryClient() {
  const [filters, setFilters] = useState<Filters>({
    style: null,
    size: null,
    difficulty: null,
  });
  const [selectedTank, setSelectedTank] = useState<GalleryTank | null>(null);

  const filtered = useMemo(
    () =>
      GALLERY_TANKS.filter((t) => {
        if (filters.style && t.style !== filters.style) return false;
        if (filters.size && t.tankSize !== filters.size) return false;
        if (filters.difficulty && t.difficulty !== filters.difficulty)
          return false;
        return true;
      }),
    [filters],
  );

  const toggle = <K extends FilterKey>(key: K, value: Filters[K]) =>
    setFilters((f) => ({ ...f, [key]: f[key] === value ? null : value }));

  const activeCount = Object.values(filters).filter(Boolean).length;

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
            <Link href="/gallery" className="font-medium text-forest">
              Gallery
            </Link>
            <Link href="/equipment" className="font-medium text-forest/60 transition-colors hover:text-forest">
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

      {/* Hero banner */}
      <section className="bg-gradient-to-b from-deep-green to-forest px-6 pb-16 pt-20 text-center text-white">
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-mint/70">
          Curated Inspiration
        </p>
        <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
          Aquascape Gallery
        </h1>
        <p className="mx-auto max-w-lg text-base leading-relaxed text-white/60">
          Explore stunning layouts across Nature, Iwagumi, and Forest styles.
          Each tank includes plants, hardscape, fish, and a pro tip to help you
          recreate it.
        </p>
      </section>

      {/* Filters */}
      <div className="sticky top-0 z-30 border-b border-sage/10 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-3 px-6 py-3">
          <span className="mr-1 text-xs font-semibold uppercase tracking-wider text-forest/40">
            Filter
          </span>

          {ALL_STYLES.map((s) => (
            <FilterPill
              key={s}
              label={s}
              active={filters.style === s}
              onClick={() => toggle("style", s)}
            />
          ))}

          <span className="mx-1 h-4 w-px bg-sage/15" />

          {ALL_SIZES.map((s) => (
            <FilterPill
              key={s}
              label={s}
              active={filters.size === s}
              onClick={() => toggle("size", s)}
            />
          ))}

          <span className="mx-1 h-4 w-px bg-sage/15" />

          {ALL_DIFFICULTIES.map((d) => (
            <FilterPill
              key={d}
              label={d}
              active={filters.difficulty === d}
              onClick={() => toggle("difficulty", d)}
            />
          ))}

          {activeCount > 0 && (
            <button
              type="button"
              onClick={() =>
                setFilters({ style: null, size: null, difficulty: null })
              }
              className="ml-auto text-xs font-medium text-forest/50 transition-colors hover:text-forest"
            >
              Clear all
            </button>
          )}
        </div>
      </div>

      {/* Grid */}
      <main className="mx-auto max-w-7xl px-6 py-10">
        <p className="mb-6 text-sm text-forest/50">
          Showing {filtered.length} of {GALLERY_TANKS.length} layouts
        </p>

        {filtered.length === 0 ? (
          <div className="py-20 text-center">
            <p className="text-lg font-medium text-forest/40">
              No layouts match those filters.
            </p>
            <button
              type="button"
              onClick={() =>
                setFilters({ style: null, size: null, difficulty: null })
              }
              className="mt-3 text-sm font-medium text-sage underline underline-offset-2 transition-colors hover:text-forest"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((tank, i) => (
              <GalleryCard
                key={tank.id}
                tank={tank}
                onSelect={setSelectedTank}
                priority={i < 3}
              />
            ))}
          </div>
        )}
      </main>

      {/* CTA */}
      <section className="bg-gradient-to-r from-forest to-sage px-6 py-16 text-center text-white">
        <h2 className="mb-3 text-2xl font-bold tracking-tight md:text-3xl">
          Inspired? Start designing your own.
        </h2>
        <p className="mx-auto mb-8 max-w-md text-sm text-white/60">
          Use our builder to pick your tank size, plants, rocks, and lighting —
          and see it come together in real time.
        </p>
        <Link
          href="/builder"
          className="inline-flex rounded-full bg-white px-8 py-3 text-sm font-semibold text-forest shadow-lg transition-all hover:shadow-xl"
        >
          Open the Builder
        </Link>
      </section>

      {/* Footer */}
      <footer className="bg-deep-green px-6 py-8 text-center text-xs text-white/40">
        <p>Aquascape Builder — Inspired by the art of Takashi Amano</p>
      </footer>

      {/* Modal */}
      <GalleryModal tank={selectedTank} onClose={() => setSelectedTank(null)} />
    </div>
  );
}

function FilterPill({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full px-3 py-1.5 text-xs font-medium transition-all ${
        active
          ? "bg-forest text-white shadow-sm"
          : "bg-sage/8 text-forest/60 hover:bg-sage/15 hover:text-forest"
      }`}
    >
      {label}
    </button>
  );
}
