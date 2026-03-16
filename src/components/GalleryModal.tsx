"use client";

import { useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import type { GalleryTank } from "@/src/data/gallery";

interface GalleryModalProps {
  tank: GalleryTank | null;
  onClose: () => void;
}

const DIFFICULTY_COLOR = {
  Beginner: "bg-mint/20 text-forest",
  Intermediate: "bg-amber-100 text-amber-700",
  Advanced: "bg-rose-100 text-rose-700",
} as const;

export default function GalleryModal({ tank, onClose }: GalleryModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose],
  );

  useEffect(() => {
    if (!tank) return;
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [tank, handleKeyDown]);

  if (!tank) return null;

  return (
    <div
      ref={overlayRef}
      role="dialog"
      aria-modal="true"
      aria-label={tank.title}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      onClick={(e) => {
        if (e.target === overlayRef.current) onClose();
      }}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Panel */}
      <div className="relative z-10 flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl">
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition-colors hover:bg-black/60"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Scrollable content */}
        <div className="overflow-y-auto">
          {/* Image */}
          <div className="relative aspect-[16/9] w-full">
            <Image
              src={tank.image}
              alt={tank.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 896px"
              className="object-cover"
              priority
            />
          </div>

          {/* Details */}
          <div className="p-6 sm:p-8">
            {/* Header */}
            <div className="mb-4 flex flex-wrap items-start gap-2">
              <h2 className="mr-auto text-2xl font-bold text-deep-green sm:text-3xl">
                {tank.title}
              </h2>
              <span className="rounded-full bg-deep-green/10 px-3 py-1 text-xs font-semibold text-deep-green">
                {tank.style}
              </span>
              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold ${DIFFICULTY_COLOR[tank.difficulty]}`}
              >
                {tank.difficulty}
              </span>
              <span className="rounded-full bg-aqua/10 px-3 py-1 text-xs font-semibold text-aqua">
                {tank.tankSize}
              </span>
            </div>

            <p className="mb-6 text-sm leading-relaxed text-forest/70 sm:text-base">
              {tank.description}
            </p>

            {/* Specs grid */}
            <div className="mb-6 grid gap-4 sm:grid-cols-3">
              <SpecList label="Plants" items={tank.plants} color="sage" />
              <SpecList label="Hardscape" items={tank.hardscape} color="forest" />
              <SpecList
                label="Fish"
                items={tank.fish.length > 0 ? tank.fish : ["—"]}
                color="aqua"
              />
            </div>

            {/* Tip */}
            <div className="mb-6 rounded-xl bg-mint/8 p-4">
              <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-forest/50">
                Pro Tip
              </p>
              <p className="text-sm leading-relaxed text-forest/80">
                {tank.tip}
              </p>
            </div>

            {/* CTA */}
            <Link
              href="/builder"
              className="inline-flex items-center gap-2 rounded-full bg-sage px-6 py-3 text-sm font-semibold text-white shadow transition-all hover:bg-forest hover:shadow-md"
              onClick={onClose}
            >
              Build a similar layout
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

const SPEC_COLORS = {
  sage: "bg-sage/10 text-sage",
  forest: "bg-forest/10 text-forest",
  aqua: "bg-aqua/10 text-aqua",
} as const;

function SpecList({
  label,
  items,
  color,
}: {
  label: string;
  items: string[];
  color: keyof typeof SPEC_COLORS;
}) {
  return (
    <div>
      <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-forest/40">
        {label}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {items.map((item) => (
          <span
            key={item}
            className={`rounded-full px-2.5 py-1 text-xs font-medium ${SPEC_COLORS[color]}`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
