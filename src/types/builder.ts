export type TankSize = "60" | "90" | "120";

export interface BuilderState {
  tankSize: TankSize;
  plants: string[];
  rocks: string[];
}
