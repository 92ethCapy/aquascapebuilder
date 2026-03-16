"use client";

import { useEffect, useRef, useCallback, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { LightProduct } from "@/src/data/equipment";

interface LightModalProps {
  light: LightProduct | null;
  onClose: () => void;
}

export default function LightModal({ light, onClose }: LightModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const [activeImg, setActiveImg] = useState(0);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose],
  );

  useEffect(() => {
    if (!light) return;
    setActiveImg(0);
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [light, handleKeyDown]);

  if (!light) return null;

  return (
    <div
      ref={overlayRef}
      role="dialog"
      aria-modal="true"
      aria-label={`${light.brand} ${light.model}`}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      onClick={(e) => {
        if (e.target === overlayRef.current) onClose();
      }}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      <div className="relative z-10 flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl">
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

        <div className="overflow-y-auto">
          {/* Main image */}
          <div className="relative aspect-[16/10] w-full bg-slate-50">
            <Image
              src={light.gallery[activeImg]}
              alt={light.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 768px"
              className="object-contain"
              priority
            />
          </div>

          {/* Thumbnail strip */}
          {light.gallery.length > 1 && (
            <div className="flex gap-2 bg-slate-50 px-6 pb-4">
              {light.gallery.map((src, i) => (
                <button
                  key={src}
                  type="button"
                  onClick={() => setActiveImg(i)}
                  className={`relative h-16 w-16 shrink-0 overflow-hidden rounded-lg transition-all ${
                    i === activeImg
                      ? "ring-2 ring-sage ring-offset-2"
                      : "opacity-60 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={src}
                    alt=""
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          )}

          {/* Details */}
          <div className="p-6 sm:p-8">
            <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-sage">
              {light.brand}
            </p>
            <h2 className="mb-4 text-2xl font-bold text-deep-green sm:text-3xl">
              {light.model}
            </h2>

            <ul className="mb-6 space-y-2">
              {light.features.map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-2 text-sm text-forest/70"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-mint" />
                  {f}
                </li>
              ))}
            </ul>

            <div className="mb-6 rounded-xl bg-mint/8 p-4">
              <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-forest/50">
                Best For
              </p>
              <p className="text-sm leading-relaxed text-forest/80">
                {light.bestFor}
              </p>
            </div>

            <Link
              href="/builder"
              className="inline-flex items-center gap-2 rounded-full bg-sage px-6 py-3 text-sm font-semibold text-white shadow transition-all hover:bg-forest hover:shadow-md"
              onClick={onClose}
            >
              Try in the Builder
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
