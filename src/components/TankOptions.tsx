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
    <div className="glass-dark-strong rounded-2xl p-6 shadow-lg">
      <h2 className="mb-1 text-lg font-semibold text-white/90">
        Configure Your Tank
      </h2>
      <p className="mb-8 text-sm text-white/35">
        Select options to build your aquascape
      </p>

      <div className="space-y-8">
        <Section label="Tank Size">
          <div className="grid grid-cols-3 gap-2">
            {TANK_SIZES.map(({ value, label, desc }) => (
              <button
                key={value}
                type="button"
                onClick={() => setTankSize(value)}
                className={`flex flex-col items-center rounded-xl border px-3 py-3 text-center transition-all ${
                  state.tankSize === value
                    ? "border-mint/30 bg-mint/10 shadow-sm shadow-mint/5"
                    : "border-white/5 bg-white/3 hover:bg-white/6"
                }`}
              >
                <span
                  className={`text-sm font-semibold ${
                    state.tankSize === value ? "text-mint" : "text-white/60"
                  }`}
                >
                  {label}
                </span>
                <span className="mt-0.5 text-[11px] text-white/30">{desc}</span>
              </button>
            ))}
          </div>
        </Section>

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
                        ? "border-mint/25 bg-mint/8 shadow-sm shadow-mint/5"
                        : "border-white/5 bg-white/3 hover:bg-white/6"
                    }`}
                  >
                    <span
                      className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md border text-xs transition-colors ${
                        selected
                          ? "border-mint bg-mint text-white"
                          : "border-white/15 bg-white/5"
                      }`}
                    >
                      {selected && "✓"}
                    </span>
                    <div>
                      <span
                        className={`block text-sm font-medium ${
                          selected ? "text-mint" : "text-white/60"
                        }`}
                      >
                        {name}
                      </span>
                      <span className="block text-[11px] text-white/25">{desc}</span>
                    </div>
                  </button>
                </li>
              );
            })}
          </ul>
        </Section>

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
                        ? "border-mint/25 bg-mint/8 shadow-sm shadow-mint/5"
                        : "border-white/5 bg-white/3 hover:bg-white/6"
                    }`}
                  >
                    <span
                      className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md border text-xs transition-colors ${
                        selected
                          ? "border-mint bg-mint text-white"
                          : "border-white/15 bg-white/5"
                      }`}
                    >
                      {selected && "✓"}
                    </span>
                    <div>
                      <span
                        className={`block text-sm font-medium ${
                          selected ? "text-mint" : "text-white/60"
                        }`}
                      >
                        {name}
                      </span>
                      <span className="block text-[11px] text-white/25">{desc}</span>
                    </div>
                  </button>
                </li>
              );
            })}
          </ul>
        </Section>

        <Section label="Lighting">
          <div className="grid grid-cols-3 gap-2">
            {LIGHTING.map(({ value, label, color }) => (
              <button
                key={value}
                type="button"
                onClick={() => setLighting(value)}
                className={`flex flex-col items-center gap-2 rounded-xl border px-3 py-3 transition-all ${
                  state.lighting === value
                    ? "border-mint/30 bg-mint/10 shadow-sm shadow-mint/5"
                    : "border-white/5 bg-white/3 hover:bg-white/6"
                }`}
              >
                <span className={`h-4 w-4 rounded-full ${color} shadow-sm`} />
                <span
                  className={`text-xs font-medium ${
                    state.lighting === value ? "text-mint" : "text-white/40"
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
      <span className="mb-3 block text-xs font-semibold uppercase tracking-wider text-white/25">
        {label}
      </span>
      {children}
    </div>
  );
}
