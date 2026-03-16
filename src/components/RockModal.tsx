"use client";

import { useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import type { RockType } from "@/src/data/equipment";

interface RockModalProps {
  rock: RockType | null;
  onClose: () => void;
}

export default function RockModal({ rock, onClose }: RockModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose],
  );

  useEffect(() => {
    if (!rock) return;
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [rock, handleKeyDown]);

  if (!rock) return null;

  return (
    <div
      ref={overlayRef}
      role="dialog"
      aria-modal="true"
      aria-label={rock.name}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      onClick={(e) => {
        if (e.target === overlayRef.current) onClose();
      }}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      <div className="relative z-10 flex max-h-[90vh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl">
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
          <div className="relative aspect-[4/3] w-full">
            <Image
              src={rock.image}
              alt={rock.alt}
              fill
              sizes="(max-width: 768px) 100vw, 672px"
              className="object-cover"
              priority
            />
          </div>

          <div className="p-6 sm:p-8">
            <h2 className="mb-4 text-2xl font-bold text-deep-green">
              {rock.name}
            </h2>

            <div className="mb-6 grid grid-cols-2 gap-4">
              <div>
                <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-forest/40">
                  Color
                </p>
                <p className="text-sm text-forest/70">{rock.color}</p>
              </div>
              <div>
                <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-forest/40">
                  Texture
                </p>
                <p className="text-sm text-forest/70">{rock.texture}</p>
              </div>
            </div>

            <div className="mb-6">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-forest/40">
                Best Styles
              </p>
              <div className="flex flex-wrap gap-1.5">
                {rock.bestStyles.map((s) => (
                  <span
                    key={s}
                    className="rounded-full bg-sage/10 px-3 py-1 text-xs font-medium text-forest"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-6 rounded-xl bg-mint/8 p-4">
              <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-forest/50">
                Pro Tip
              </p>
              <p className="text-sm leading-relaxed text-forest/80">
                {rock.tip}
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
