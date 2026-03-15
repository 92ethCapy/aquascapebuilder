"use client";

import type { BuilderState, TankSize } from "@/src/types/builder";

const TANK_SIZES: { value: TankSize; label: string }[] = [
  { value: "60", label: "60cm" },
  { value: "90", label: "90cm" },
  { value: "120", label: "120cm" },
];

const PLANTS = ["Monte Carlo", "Java Fern", "Anubias"];

const ROCKS = ["Seiryu Stone", "Dragon Stone"];

interface TankOptionsProps {
  state: BuilderState;
  onStateChange: (state: BuilderState) => void;
}

export default function TankOptions({ state, onStateChange }: TankOptionsProps) {
  const setTankSize = (tankSize: TankSize) => {
    onStateChange({ ...state, tankSize });
  };

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

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-lg font-medium text-slate-800">Configure tank</h2>

      <div className="space-y-8">
        <div>
          <label className="mb-3 block text-sm font-medium text-slate-600">
            Tank size
          </label>
          <div className="flex flex-wrap gap-2">
            {TANK_SIZES.map(({ value, label }) => (
              <button
                key={value}
                type="button"
                onClick={() => setTankSize(value)}
                className={`rounded-lg border px-4 py-2 text-sm font-medium transition-colors ${
                  state.tankSize === value
                    ? "border-emerald-500 bg-emerald-50 text-emerald-700"
                    : "border-slate-200 bg-slate-50 text-slate-600 hover:border-slate-300 hover:bg-slate-100"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="mb-3 block text-sm font-medium text-slate-600">
            Plants
          </label>
          <ul className="space-y-2">
            {PLANTS.map((plant) => (
              <li key={plant}>
                <label className="flex cursor-pointer items-center gap-3 rounded-lg border border-slate-200 bg-slate-50/50 px-4 py-3 transition-colors hover:bg-slate-50">
                  <input
                    type="checkbox"
                    checked={state.plants.includes(plant)}
                    onChange={() => togglePlant(plant)}
                    className="h-4 w-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
                  />
                  <span className="text-sm text-slate-700">{plant}</span>
                </label>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <label className="mb-3 block text-sm font-medium text-slate-600">
            Rocks
          </label>
          <ul className="space-y-2">
            {ROCKS.map((rock) => (
              <li key={rock}>
                <label className="flex cursor-pointer items-center gap-3 rounded-lg border border-slate-200 bg-slate-50/50 px-4 py-3 transition-colors hover:bg-slate-50">
                  <input
                    type="checkbox"
                    checked={state.rocks.includes(rock)}
                    onChange={() => toggleRock(rock)}
                    className="h-4 w-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
                  />
                  <span className="text-sm text-slate-700">{rock}</span>
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
