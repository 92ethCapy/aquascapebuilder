import Link from "next/link";
import UnderwaterScene from "@/src/components/UnderwaterSceneLoader";

function FloatingShape({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      aria-hidden
      className={`absolute rounded-full blur-3xl ${className}`}
      style={style}
    />
  );
}

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Nav */}
      <nav className="fixed top-0 z-50 w-full">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <span className="text-lg font-semibold tracking-tight text-white">
            Aquascape Builder
          </span>
          <Link
            href="/builder"
            className="rounded-full bg-white/15 px-5 py-2 text-sm font-medium text-white backdrop-blur-md transition-colors hover:bg-white/25"
          >
            Start Building
          </Link>
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
        </div>

        {/* Bottom fade */}
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

      {/* CTA */}
      <section className="relative overflow-hidden bg-gradient-to-r from-forest to-sage px-6 py-20 text-center text-white">
        <FloatingShape
          className="h-[300px] w-[300px] bg-mint/15"
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
