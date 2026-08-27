"use client";

import ClassButton from "@/components/ui/ClassButton";
import { TABS, type Tabs } from "@/lib/letters";

export default function TabBar({ active, action }: { active: Tabs, action: (tab: Tabs) => void}) {

  return (
    <div className="relative grid grid-cols-3 border-b text-sm font-semibold">
      {TABS.map((tab, key) => (
        <ClassButton key={tab} active={active === tab} onClick={() => action(tab)} isFirst={key === 0} isLast={key === TABS.length - 1} >
          {tab}
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
