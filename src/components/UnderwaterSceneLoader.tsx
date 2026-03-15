"use client";

import dynamic from "next/dynamic";

const UnderwaterScene = dynamic(
  () => import("@/src/components/UnderwaterScene"),
  { ssr: false },
);

export default function UnderwaterSceneLoader() {
  return <UnderwaterScene />;
}
