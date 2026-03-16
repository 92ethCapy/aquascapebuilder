"use client";

import Image from "next/image";
import type { GalleryTank } from "@/src/data/gallery";

interface GalleryCardProps {
  tank: GalleryTank;
  onSelect: (tank: GalleryTank) => void;
  priority?: boolean;
}

const DIFFICULTY_COLOR = {
  Beginner: "bg-mint/20 text-forest",
  Intermediate: "bg-amber-100 text-amber-700",
  Advanced: "bg-rose-100 text-rose-700",
} as const;

export default function GalleryCard({
  tank,
  onSelect,
  priority = false,
}: GalleryCardProps) {
  return (
    <button
      type="button"
      onClick={() => onSelect(tank)}
      className="group relative overflow-hidden rounded-2xl bg-white text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage"
    >
      <div className="relative aspect-[3/2] overflow-hidden">
        <Image
          src={tank.image}
          alt={tank.alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          priority={priority}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        <div className="absolute left-3 top-3 flex gap-1.5">
          <span className="rounded-full bg-white/85 px-2.5 py-1 text-[11px] font-semibold text-deep-green backdrop-blur-sm">
            {tank.style}
          </span>
          <span
            className={`rounded-full px-2.5 py-1 text-[11px] font-semibold backdrop-blur-sm ${DIFFICULTY_COLOR[tank.difficulty]}`}
          >
            {tank.difficulty}
          </span>
        </div>

        <div className="absolute bottom-3 right-3 rounded-full bg-white/85 px-2.5 py-1 text-[11px] font-semibold text-deep-green backdrop-blur-sm">
          {tank.tankSize}
        </div>
      </div>

      <div className="p-4">
        <h3 className="mb-1 text-base font-semibold text-deep-green">
          {tank.title}
        </h3>
        <p className="line-clamp-2 text-sm leading-relaxed text-forest/60">
          {tank.description}
        </p>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {tank.plants.slice(0, 3).map((p) => (
            <span
              key={p}
              className="rounded-full bg-sage/10 px-2 py-0.5 text-[11px] font-medium text-forest"
            >
              {p}
            </span>
          ))}
          {tank.fish.length > 0 && (
            <span className="rounded-full bg-aqua/10 px-2 py-0.5 text-[11px] font-medium text-aqua">
              {tank.fish[0]}
            </span>
          )}
        </div>
      </div>
    </button>
  );
}
