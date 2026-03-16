"use client";

import Image from "next/image";
import type { LightProduct } from "@/src/data/equipment";

interface LightCardProps {
  light: LightProduct;
  onSelect: (light: LightProduct) => void;
  priority?: boolean;
}

export default function LightCard({
  light,
  onSelect,
  priority = false,
}: LightCardProps) {
  return (
    <button
      type="button"
      onClick={() => onSelect(light)}
      className="group flex flex-col overflow-hidden rounded-2xl bg-white text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage sm:flex-row"
    >
      <div className="relative aspect-square shrink-0 overflow-hidden sm:w-72">
        <Image
          src={light.image}
          alt={light.alt}
          fill
          sizes="(max-width: 640px) 100vw, 288px"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          priority={priority}
        />
      </div>

      <div className="flex flex-1 flex-col justify-center p-5 sm:p-6">
        <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-sage">
          {light.brand}
        </p>
        <h3 className="mb-3 text-xl font-bold text-deep-green">
          {light.model}
        </h3>
        <ul className="mb-4 space-y-1">
          {light.features.slice(0, 4).map((f) => (
            <li
              key={f}
              className="flex items-start gap-2 text-sm text-forest/60"
            >
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-mint" />
              {f}
            </li>
          ))}
        </ul>
        <p className="text-xs leading-relaxed text-forest/45">{light.bestFor}</p>
      </div>
    </button>
  );
}
