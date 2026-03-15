"use client";

import type { BuilderState, LightingType, TankSize } from "@/src/types/builder";

const TANK_SIZES: { value: TankSize; label: string; desc: string }[] = [
  { value: "60", label: "60 cm", desc: "Nano" },
  { value: "90", label: "90 cm", desc: "Standard" },
  { value: "120", label: "120 cm", desc: "Large" },
];

const PLANTS: { name: string; desc: string }[] = [
  { name: "Monte Carlo", desc: "Lush carpet plant" },
  { name: "Java Fern", desc: "Hardy mid-ground fern" },
  { name: "Anubias", desc: "Broad-leafed accent" },
];

const ROCKS: { name: string; desc: string }[] = [
  { name: "Seiryu Stone", desc: "Angular blue-gray limestone" },
  { name: "Dragon Stone", desc: "Warm porous sandstone" },
];

const LIGHTING: { value: LightingType; label: string; color: string }[] = [
  { value: "warm", label: "Warm", color: "bg-amber-400" },
  { value: "natural", label: "Natural", color: "bg-yellow-100" },
  { value: "cool", label: "Cool", color: "bg-sky-300" },
];

interface TankOptionsProps {
  state: BuilderState;
  onStateChange: (state: BuilderState) => void;
}

export default function TankOptions({ state, onStateChange }: TankOptionsProps) {
  const setTankSize = (tankSize: TankSize) =>
    onStateChange({ ...state, tankSize });

  const togglePlant = (plant: string) => {
    const plants = state.plants.includes(plant)
      ? state.plants.filter((p) => p !== plant)
      : [...state.plants, plant];
    onStateChange({ ...state, plants });
  };

  const toggleRock = (rock: string) => {
    const rocks = state.rocks.includes(rock)
      ? state.rocks.filter((r) => r !== rock)
      : [...state.rocks, rock];
    onStateChange({ ...state, rocks });
  };

  const setLighting = (lighting: LightingType) =>
    onStateChange({ ...state, lighting });

  return (
    <div className="glass-panel-strong rounded-2xl p-6 shadow-sm">
      <h2 className="mb-1 text-lg font-semibold text-deep-green">
        Configure Your Tank
      </h2>
      <p className="mb-8 text-sm text-forest/60">
        Select options to build your aquascape
      </p>

      <div className="space-y-8">
        {/* Tank size */}
        <Section label="Tank Size">
          <div className="grid grid-cols-3 gap-2">
            {TANK_SIZES.map(({ value, label, desc }) => (
              <button
                key={value}
                type="button"
                onClick={() => setTankSize(value)}
                className={`flex flex-col items-center rounded-xl border px-3 py-3 text-center transition-all ${
                  state.tankSize === value
                    ? "border-sage bg-sage/10 shadow-sm"
                    : "border-transparent bg-white/60 hover:bg-white/80"
                }`}
              >
                <span
                  className={`text-sm font-semibold ${
                    state.tankSize === value ? "text-forest" : "text-deep-green/70"
                  }`}
                >
                  {label}
                </span>
                <span className="mt-0.5 text-[11px] text-forest/50">{desc}</span>
              </button>
            ))}
          </div>
        </Section>

        {/* Plants */}
        <Section label="Plants">
          <ul className="space-y-2">
            {PLANTS.map(({ name, desc }) => {
              const selected = state.plants.includes(name);
              return (
                <li key={name}>
                  <button
                    type="button"
                    onClick={() => togglePlant(name)}
                    className={`flex w-full items-center gap-3 rounded-xl border px-4 py-3 text-left transition-all ${
                      selected
                        ? "border-sage/50 bg-sage/10 shadow-sm"
                        : "border-transparent bg-white/60 hover:bg-white/80"
                    }`}
                  >
                    <span
                      className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md border text-xs transition-colors ${
                        selected
                          ? "border-sage bg-sage text-white"
                          : "border-forest/20 bg-white"
                      }`}
                    >
                      {selected && "✓"}
                    </span>
                    <div>
                      <span
                        className={`block text-sm font-medium ${
                          selected ? "text-forest" : "text-deep-green/70"
                        }`}
                      >
                        {name}
                      </span>
                      <span className="block text-[11px] text-forest/45">{desc}</span>
                    </div>
                  </button>
                </li>
              );
            })}
          </ul>
        </Section>

        {/* Rocks */}
        <Section label="Hardscape">
          <ul className="space-y-2">
            {ROCKS.map(({ name, desc }) => {
              const selected = state.rocks.includes(name);
              return (
                <li key={name}>
                  <button
                    type="button"
                    onClick={() => toggleRock(name)}
                    className={`flex w-full items-center gap-3 rounded-xl border px-4 py-3 text-left transition-all ${
                      selected
                        ? "border-sage/50 bg-sage/10 shadow-sm"
                        : "border-transparent bg-white/60 hover:bg-white/80"
                    }`}
                  >
                    <span
                      className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md border text-xs transition-colors ${
                        selected
                          ? "border-sage bg-sage text-white"
                          : "border-forest/20 bg-white"
                      }`}
                    >
                      {selected && "✓"}
                    </span>
                    <div>
                      <span
                        className={`block text-sm font-medium ${
                          selected ? "text-forest" : "text-deep-green/70"
                        }`}
                      >
                        {name}
                      </span>
                      <span className="block text-[11px] text-forest/45">{desc}</span>
                    </div>
                  </button>
                </li>
              );
            })}
          </ul>
        </Section>

        {/* Lighting */}
        <Section label="Lighting">
          <div className="grid grid-cols-3 gap-2">
            {LIGHTING.map(({ value, label, color }) => (
              <button
                key={value}
                type="button"
                onClick={() => setLighting(value)}
                className={`flex flex-col items-center gap-2 rounded-xl border px-3 py-3 transition-all ${
                  state.lighting === value
                    ? "border-sage bg-sage/10 shadow-sm"
                    : "border-transparent bg-white/60 hover:bg-white/80"
                }`}
              >
                <span className={`h-4 w-4 rounded-full ${color} shadow-sm`} />
                <span
                  className={`text-xs font-medium ${
                    state.lighting === value ? "text-forest" : "text-deep-green/60"
                  }`}
                >
                  {label}
                </span>
              </button>
            ))}
          </div>
        </Section>
      </div>
    </div>
  );
}

function Section({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <span className="mb-3 block text-xs font-semibold uppercase tracking-wider text-forest/50">
        {label}
      </span>
      {children}
    </div>
  );
}
