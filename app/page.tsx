import Link from "next/link";
import Image from "next/image";
import UnderwaterScene from "@/src/components/UnderwaterSceneLoader";
import { GALLERY_TANKS } from "@/src/data/gallery";
import { ROCKS, LIGHTS } from "@/src/data/equipment";

const SHOWCASE_TANKS = GALLERY_TANKS.slice(0, 6);
const SHOWCASE_ROCKS = ROCKS.slice(0, 3);
const SHOWCASE_LIGHT = LIGHTS[0];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Nav */}
      <nav className="fixed top-0 z-50 w-full">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <span className="text-lg font-semibold tracking-tight text-white">
            Aquascape Builder
          </span>
          <div className="flex items-center gap-4">
            <Link
              href="/gallery"
              className="text-sm font-medium text-white/70 transition-colors hover:text-white"
            >
              Gallery
            </Link>
            <Link
              href="/equipment"
              className="text-sm font-medium text-white/70 transition-colors hover:text-white"
            >
              Equipment
            </Link>
            <Link
              href="/builder"
              className="rounded-full bg-white/15 px-5 py-2 text-sm font-medium text-white backdrop-blur-md transition-colors hover:bg-white/25"
            >
              Start Building
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#0d3b27] via-[#1a5c3e] to-[#1a6b5a] px-6 text-center text-white">
        <UnderwaterScene />

        <div className="relative z-10 mx-auto max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-mint/80">
            Inspired by Nature
          </p>
          <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl">
            Design Your Natural{" "}
            <span className="text-mint">Aquascape</span>
          </h1>
          <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-white/70">
            Craft stunning underwater landscapes inspired by the philosophy of
            Takashi Amano. Choose your tank, plants, hardscape, and lighting to
            bring your vision to life.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/builder"
              className="group inline-flex items-center gap-2 rounded-full bg-mint px-8 py-4 text-base font-semibold text-deep-green shadow-lg shadow-mint/25 transition-all hover:bg-leaf hover:shadow-xl hover:shadow-mint/30"
            >
              Start Building
              <svg
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
            <Link
              href="/gallery"
              className="inline-flex rounded-full border border-white/20 px-7 py-4 text-base font-semibold text-white transition-all hover:border-white/40 hover:bg-white/10"
            >
              Browse Gallery
            </Link>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-soft-white to-transparent" />
      </section>

      {/* Features */}
      <section className="bg-soft-white px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <p className="mb-3 text-center text-sm font-medium uppercase tracking-widest text-sage">
            How It Works
          </p>
          <h2 className="mb-16 text-center text-3xl font-bold tracking-tight text-deep-green md:text-4xl">
            Build your dream aquarium in minutes
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            <FeatureCard
              icon={
                <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7 text-forest">
                  <rect x="3" y="6" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M3 16h18" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              }
              title="Choose Your Tank"
              description="Select from 60cm, 90cm, or 120cm tanks to match your space and vision."
            />
            <FeatureCard
              icon={
                <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7 text-forest">
                  <path
                    d="M12 22c0-8-6-10-6-16a6 6 0 1 1 12 0c0 6-6 8-6 16Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path d="M12 12v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              }
              title="Add Flora & Stone"
              description="Pick from curated plants and hardscape materials to compose your layout."
            />
            <FeatureCard
              icon={
                <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7 text-forest">
                  <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32 1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41m11.32-11.32 1.41-1.41" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              }
              title="Set the Mood"
              description="Adjust lighting from warm to cool and watch your aquascape come alive."
            />
          </div>
        </div>
      </section>

      {/* Gallery Showcase */}
      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-center text-sm font-medium uppercase tracking-widest text-sage">
            Inspiration
          </p>
          <h2 className="mb-4 text-center text-3xl font-bold tracking-tight text-deep-green md:text-4xl">
            Explore stunning aquascapes
          </h2>
          <p className="mx-auto mb-12 max-w-lg text-center text-sm leading-relaxed text-forest/60">
            From serene Iwagumi layouts to lush forest canopies — browse real
            tanks with plant lists, hardscape details, and expert tips.
          </p>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SHOWCASE_TANKS.map((tank, i) => (
              <Link
                key={tank.id}
                href="/gallery"
                className="group relative overflow-hidden rounded-2xl shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative aspect-[3/2]">
                  <Image
                    src={tank.image}
                    alt={tank.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    priority={i < 3}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className="mb-1 inline-block rounded-full bg-white/20 px-2.5 py-0.5 text-[11px] font-semibold text-white backdrop-blur-sm">
                      {tank.style} · {tank.tankSize}
                    </span>
                    <h3 className="text-base font-semibold text-white">
                      {tank.title}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/gallery"
              className="group inline-flex items-center gap-2 rounded-full bg-sage/10 px-7 py-3 text-sm font-semibold text-forest transition-all hover:bg-sage/20"
            >
              View all {GALLERY_TANKS.length} layouts
              <svg
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Equipment Showcase */}
      <section className="bg-soft-white px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-center text-sm font-medium uppercase tracking-widest text-sage">
            Hardscape & Lighting
          </p>
          <h2 className="mb-4 text-center text-3xl font-bold tracking-tight text-deep-green md:text-4xl">
            Premium equipment for your tank
          </h2>
          <p className="mx-auto mb-12 max-w-lg text-center text-sm leading-relaxed text-forest/60">
            Browse our selection of Vietnamese aquascaping stones and WeeK LED
            lighting — each piece hand-picked with expert tips.
          </p>

          {/* Rocks preview */}
          <div className="grid gap-5 sm:grid-cols-3">
            {SHOWCASE_ROCKS.map((rock) => (
              <Link
                key={rock.id}
                href="/equipment#rocks"
                className="group relative overflow-hidden rounded-2xl shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative aspect-square">
                  <Image
                    src={rock.image}
                    alt={rock.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-base font-semibold text-white">
                      {rock.name}
                    </h3>
                    <p className="mt-0.5 text-xs text-white/60">
                      {rock.texture} · {rock.bestStyles.join(", ")}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Light preview */}
          <Link
            href="/equipment#lights"
            className="group mt-6 flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:flex-row"
          >
            <div className="relative aspect-[4/3] shrink-0 overflow-hidden sm:w-80">
              <Image
                src={SHOWCASE_LIGHT.image}
                alt={SHOWCASE_LIGHT.alt}
                fill
                sizes="(max-width: 640px) 100vw, 320px"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-1 flex-col justify-center p-5 sm:p-8">
              <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-sage">
                {SHOWCASE_LIGHT.brand} Lighting
              </p>
              <h3 className="mb-2 text-xl font-bold text-deep-green">
                {SHOWCASE_LIGHT.model}
              </h3>
              <p className="mb-3 text-sm leading-relaxed text-forest/50">
                {SHOWCASE_LIGHT.bestFor}
              </p>
              <span className="text-sm font-medium text-sage transition-colors group-hover:text-forest">
                View all lighting →
              </span>
            </div>
          </Link>

          <div className="mt-10 text-center">
            <Link
              href="/equipment"
              className="group inline-flex items-center gap-2 rounded-full bg-sage/10 px-7 py-3 text-sm font-semibold text-forest transition-all hover:bg-sage/20"
            >
              Browse all equipment
              <svg
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-gradient-to-r from-forest to-sage px-6 py-20 text-center text-white">
        <div
          aria-hidden
          className="absolute rounded-full blur-3xl h-[300px] w-[300px] bg-mint/15"
          style={{ top: "-20%", right: "-5%" }}
        />
        <div className="relative z-10">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            Ready to create?
          </h2>
          <p className="mx-auto mb-8 max-w-md text-white/70">
            Jump into the builder and start designing your perfect natural
            aquascape today.
          </p>
          <Link
            href="/builder"
            className="inline-flex rounded-full bg-white px-8 py-4 text-base font-semibold text-forest shadow-lg transition-all hover:shadow-xl"
          >
            Open the Builder
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-deep-green px-6 py-10 text-center text-sm text-white/50">
        <p>Aquascape Builder — Inspired by the art of Takashi Amano</p>
      </footer>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="glass-panel-strong rounded-2xl p-8 shadow-sm transition-shadow hover:shadow-md">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-mint/15">
        {icon}
      </div>
      <h3 className="mb-2 text-lg font-semibold text-deep-green">{title}</h3>
      <p className="text-sm leading-relaxed text-forest/70">{description}</p>
    </div>
  );
}
