export type TankSize = "60" | "90" | "120";

export type LightingType = "warm" | "natural" | "cool";

export interface BuilderState {
  tankSize: TankSize;
  plants: string[];
  rocks: string[];
  lighting: LightingType;
}
