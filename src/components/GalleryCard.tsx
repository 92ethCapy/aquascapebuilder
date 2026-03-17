"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { GalleryTank } from "@/src/data/gallery";

interface GalleryCardProps {
  tank: GalleryTank;
  onSelect: (tank: GalleryTank) => void;
  priority?: boolean;
  index?: number;
}

const DIFFICULTY_COLOR = {
  Beginner: "bg-mint/25 text-mint",
  Intermediate: "bg-amber-400/20 text-amber-300",
  Advanced: "bg-rose-400/20 text-rose-300",
} as const;

export default function GalleryCard({
  tank,
  onSelect,
  priority = false,
  index = 0,
}: GalleryCardProps) {
  return (
    <motion.button
      type="button"
      onClick={() => onSelect(tank)}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      className="glass-dark group relative overflow-hidden rounded-2xl text-left card-glow transition-shadow duration-300 hover:card-glow-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mint"
    >
      {/* Radial glow behind image */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-4 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(circle at 50% 40%, rgba(82,183,136,0.12), transparent 70%)",
        }}
      />

      <div className="relative aspect-[3/2] overflow-hidden rounded-t-2xl">
        <Image
          src={tank.image}
          alt={tank.alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-110"
          priority={priority}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1f1a]/70 via-transparent to-transparent" />

        <div className="absolute left-3 top-3 flex gap-1.5">
          <span className="rounded-full bg-white/10 px-2.5 py-1 text-[11px] font-semibold text-white/90 backdrop-blur-md">
            {tank.style}
          </span>
          <span
            className={`rounded-full px-2.5 py-1 text-[11px] font-semibold backdrop-blur-md ${DIFFICULTY_COLOR[tank.difficulty]}`}
          >
            {tank.difficulty}
          </span>
        </div>

        <div className="absolute bottom-3 right-3 rounded-full bg-white/10 px-2.5 py-1 text-[11px] font-semibold text-white/90 backdrop-blur-md">
          {tank.tankSize}
        </div>
      </div>

      <div className="relative p-4">
        <h3 className="mb-1 text-base font-semibold text-white/90">
          {tank.title}
        </h3>
        <p className="line-clamp-2 text-sm leading-relaxed text-white/40">
          {tank.description}
        </p>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {tank.plants.slice(0, 3).map((p) => (
            <span
              key={p}
              className="rounded-full bg-mint/10 px-2 py-0.5 text-[11px] font-medium text-mint/80"
            >
              {p}
            </span>
          ))}
          {tank.fish.length > 0 && (
            <span className="rounded-full bg-aqua/10 px-2 py-0.5 text-[11px] font-medium text-aqua-light/80">
              {tank.fish[0]}
            </span>
          )}
        </div>
      </div>
    </motion.button>
  );
}
