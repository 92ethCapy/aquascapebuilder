import type { Metadata } from "next";
import GalleryClient from "./GalleryClient";

export const metadata: Metadata = {
  title: "Aquascape Gallery — Inspiration for Your Next Tank",
  description:
    "Browse 10 stunning aquascape layouts — from Nature and Iwagumi to Forest style. Each tank includes plant lists, hardscape details, fish species, and expert tips to help you build your own.",
  openGraph: {
    title: "Aquascape Gallery — Inspiration for Your Next Tank",
    description:
      "Explore curated aquascape designs inspired by Takashi Amano. Find your next layout, learn which plants and hardscape to use, and jump straight into the builder.",
    images: [{ url: "/images/tanks/6.JPEG", width: 1200, height: 800 }],
  },
};

export default function GalleryPage() {
  return <GalleryClient />;
}
