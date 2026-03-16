"use client";

import Image from "next/image";
import type { RockType } from "@/src/data/equipment";

interface RockCardProps {
  rock: RockType;
  onSelect: (rock: RockType) => void;
  priority?: boolean;
}

export default function RockCard({
  rock,
  onSelect,
  priority = false,
}: RockCardProps) {
  return (
    <button
      type="button"
      onClick={() => onSelect(rock)}
      className="group overflow-hidden rounded-2xl bg-white text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage"
    >
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={rock.image}
          alt={rock.alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          priority={priority}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      <div className="p-4">
        <h3 className="mb-1 text-base font-semibold text-deep-green">
          {rock.name}
        </h3>
        <div className="mb-2 flex items-center gap-2 text-xs text-forest/50">
          <span>{rock.color}</span>
          <span className="h-1 w-1 rounded-full bg-forest/20" />
          <span>{rock.texture}</span>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {rock.bestStyles.map((s) => (
            <span
              key={s}
              className="rounded-full bg-sage/10 px-2 py-0.5 text-[11px] font-medium text-forest"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </button>
  );
}
