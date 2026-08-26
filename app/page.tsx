"use client";

import { useState } from "react";
import ClassButton from "@/components/ui/ClassButton";

const CLASSES = ["Latin", "Cyrilic", "Study"];

export default function Home() {
  const [active, setActive] = useState(0);

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="w-full max-w-lg relative">
        <div className="bg-surface border rounded-lg overflow-hidden">
          {/* Classes */}
          <div className="relative grid grid-cols-3 border-b text-sm font-semibold">
            {CLASSES.map((label, i) => (
              <ClassButton key={label} active={active === i} onClick={() => setActive(i)} isFirst={i === 0} isLast={i === CLASSES.length - 1}>
                {label}
              </ClassButton>
            ))}

            {/* Dividers — painted above the pill */}
            <div
              aria-hidden
              className="absolute inset-0 grid grid-cols-3 divide-x pointer-events-none"
            >
              <div />
              <div />
              <div />
            </div>
          </div>

          {/* Body */}
          <div className="py-4" />
        </div>

        <div className="bg-accent p-4 rounded-lg mt-4">
          {/* This is open source - repo invitation thing */}
        </div>
      </div>
    </div>
  );
}
