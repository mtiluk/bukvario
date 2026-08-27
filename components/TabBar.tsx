"use client";

import ClassButton from "@/components/ui/ClassButton";
import { TABS, type Tabs } from "@/lib/letters";

export default function TabBar({ active, onChange, }: { active: Tabs; onChange: (tab: Tabs) => void; }) {
  return (
    <div className="relative grid grid-cols-3 border-b text-sm font-semibold">
      {TABS.map((tab, key) => (
        <ClassButton
          key={tab.id}
          active={active === tab.id}
          onClick={() => onChange(tab.id)}
          isFirst={key === 0}
          isLast={key === TABS.length - 1}
        >
          {tab.label}
        </ClassButton>
      ))}

      <div aria-hidden className="absolute inset-0 grid grid-cols-3 divide-x pointer-events-none" >
        <div />
        <div />
        <div />
      </div>
    </div>
  );
}
