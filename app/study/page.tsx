"use client";

import StudyCard from "@/components/StudyCard";
import { Suspense } from "react";

export default function StudyPage() {
  return (
    <Suspense fallback={null}>
      <StudyCard />
    </Suspense>
  );
}
