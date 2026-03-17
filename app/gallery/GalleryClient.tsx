"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
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
    <div className="relative min-h-screen overflow-hidden bg-[#0a1a14]">
      {/* Organic background shapes */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div
          aria-hidden
          className="animate-drift absolute h-[600px] w-[600px] rounded-full opacity-40 blur-[100px]"
          style={{
            top: "-10%",
            left: "-8%",
            background: "radial-gradient(circle, #0f3d2e 0%, transparent 70%)",
          }}
        />
        <div
          aria-hidden
          className="animate-drift-slow absolute h-[500px] w-[500px] rounded-full opacity-30 blur-[90px]"
          style={{
            top: "40%",
            right: "-5%",
            background: "radial-gradient(circle, #0a2a3a 0%, transparent 70%)",
          }}
        />
        <div
          aria-hidden
          className="animate-drift absolute h-[450px] w-[450px] rounded-full opacity-25 blur-[80px]"
          style={{
            bottom: "5%",
            left: "20%",
            background: "radial-gradient(circle, #143d30 0%, transparent 70%)",
          }}
        />
        {/* Mist overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(10,26,20,0.3) 0%, transparent 30%, transparent 70%, rgba(10,26,20,0.5) 100%)",
          }}
        />
      </div>

      {/* Header */}
      <header className="relative z-20 border-b border-white/5">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link
            href="/"
            className="text-lg font-semibold tracking-tight text-white/90 transition-colors hover:text-white"
          >
            Aquascape Builder
          </Link>
          <nav className="flex items-center gap-4 text-sm">
            <Link href="/gallery" className="font-medium text-mint">
              Gallery
            </Link>
            <Link
              href="/equipment"
              className="font-medium text-white/50 transition-colors hover:text-white/80"
            >
              Equipment
            </Link>
            <Link
              href="/builder"
              className="rounded-full bg-white/8 px-4 py-1.5 font-medium text-white/70 backdrop-blur-sm transition-colors hover:bg-white/12 hover:text-white/90"
            >
              Builder
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero banner */}
      <section className="relative z-10 px-6 pb-16 pt-20 text-center">
        {/* Radial light behind heading */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-[80px]"
          style={{
            background:
              "radial-gradient(ellipse, rgba(82,183,136,0.3) 0%, transparent 65%)",
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-mint/60">
            Curated Inspiration
          </p>
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-white/95 md:text-5xl">
            Aquascape Gallery
          </h1>
          <p className="mx-auto max-w-lg text-base leading-relaxed text-white/40">
            Explore stunning layouts across Nature, Iwagumi, and Forest styles.
            Each tank includes plants, hardscape, fish, and a pro tip to help you
            recreate it.
          </p>
        </motion.div>
      </section>

      {/* Filters */}
      <div className="sticky top-0 z-30 border-b border-white/5 bg-[#0a1a14]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-3 px-6 py-3">
          <span className="mr-1 text-xs font-semibold uppercase tracking-wider text-white/20">
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

          <span className="mx-1 h-4 w-px bg-white/8" />

          {ALL_SIZES.map((s) => (
            <FilterPill
              key={s}
              label={s}
              active={filters.size === s}
              onClick={() => toggle("size", s)}
            />
          ))}

          <span className="mx-1 h-4 w-px bg-white/8" />

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
              className="ml-auto text-xs font-medium text-white/30 transition-colors hover:text-white/60"
            >
              Clear all
            </button>
          )}
        </div>
      </div>

      {/* Grid */}
      <main className="relative z-10 mx-auto max-w-7xl px-6 py-10">
        <p className="mb-6 text-sm text-white/25">
          Showing {filtered.length} of {GALLERY_TANKS.length} layouts
        </p>

        {filtered.length === 0 ? (
          <div className="py-20 text-center">
            <p className="text-lg font-medium text-white/25">
              No layouts match those filters.
            </p>
            <button
              type="button"
              onClick={() =>
                setFilters({ style: null, size: null, difficulty: null })
              }
              className="mt-3 text-sm font-medium text-mint/60 underline underline-offset-2 transition-colors hover:text-mint"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <AnimatePresence mode="wait">
            <motion.div
              key={JSON.stringify(filters)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {filtered.map((tank, i) => (
                <GalleryCard
                  key={tank.id}
                  tank={tank}
                  onSelect={setSelectedTank}
                  priority={i < 3}
                  index={i}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        )}
      </main>

      {/* CTA */}
      <section className="relative z-10 px-6 py-16 text-center">
        <div className="glass-dark-strong mx-auto max-w-2xl rounded-2xl px-8 py-12">
          <h2 className="mb-3 text-2xl font-bold tracking-tight text-white/90 md:text-3xl">
            Inspired? Start designing your own.
          </h2>
          <p className="mx-auto mb-8 max-w-md text-sm text-white/40">
            Use our builder to pick your tank size, plants, rocks, and lighting —
            and see it come together in real time.
          </p>
          <Link
            href="/builder"
            className="inline-flex rounded-full bg-mint px-8 py-3 text-sm font-semibold text-deep-green shadow-lg shadow-mint/15 transition-all hover:bg-leaf hover:shadow-xl hover:shadow-mint/25"
          >
            Open the Builder
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/5 px-6 py-8 text-center text-xs text-white/20">
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
          ? "bg-mint/20 text-mint shadow-sm shadow-mint/10"
          : "bg-white/5 text-white/40 hover:bg-white/8 hover:text-white/60"
      }`}
    >
      {label}
    </button>
  );
}
