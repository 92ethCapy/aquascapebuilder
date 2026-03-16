import type { Metadata } from "next";
import EquipmentClient from "./EquipmentClient";

export const metadata: Metadata = {
  title: "Aquascape Equipment — Rocks & Lighting for Your Tank",
  description:
    "Browse aquascaping rocks and LED lighting from WeeK. Detailed specs, pro tips, and style recommendations for every hardscape stone and light fixture.",
  openGraph: {
    title: "Aquascape Equipment — Rocks & Lighting",
    description:
      "Find the perfect rocks and lighting for your planted aquarium. Vietnamese hardscape stones and WeeK LED fixtures with specs and expert tips.",
    images: [{ url: "/images/rocks/Danhamxanhsieuvan.JPEG", width: 1200, height: 800 }],
  },
};

export default function EquipmentPage() {
  return <EquipmentClient />;
}
