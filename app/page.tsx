"use client";

import { useState } from "react";
import TabBar from "@/components/TabBar";
import ScriptHeader from "@/components/ScriptHeader";
import LetterGroup from "@/components/LetterGroup";
import SelectionFooter from "@/components/SelectionFooter";
import {
  LATIN_GROUPS,
  CYRILLIC_GROUPS,
  type Tabs,
  type LetterGroupData,
} from "@/lib/letters";

type ScriptTab = { mark: string; title: string; groups: LetterGroupData[] };

const SCRIPT_TABS: Partial<Record<Tabs, ScriptTab>> = {
  latin: { mark: "Š", title: "Latin", groups: LATIN_GROUPS },
  cyrillic: { mark: "Ш", title: "Cyrillic", groups: CYRILLIC_GROUPS },
};

export default function Home() {
  const [tabName, setTabName] = useState<Tabs>("latin");

  const script = SCRIPT_TABS[tabName];
  const totalCount = script?.groups.reduce((n, g) => n + g.letters.length, 0) ?? 0;

  const [selected, setSelected] = useState(new Set<string>());

  const toggleLetter = (letter: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(letter)) {
        next.delete(letter);
      } else {
        next.add(letter);
      }
      return next;
    });
  };

  // on 'Start Studying' button click -> take set of selected letters and redirect to study page
  const handleStartStudying = () => {
    console.log(selected)
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="w-full max-w-lg relative">
        <div className="bg-surface border rounded-lg flex flex-col">
          <TabBar active={tabName} onChange={setTabName} />

          <div className="flex-1">
            {script ? (
              <>
                <ScriptHeader
                  mark={script.mark}
                  title={script.title}
                  subtitle="Overview"
                />
                <div className="px-4 py-1">
                  {script.groups.map((group) => (
                    <LetterGroup key={group.label} group={group} selected={selected} onToggle={toggleLetter} />
                  ))}
                </div>
              </>
            ) : (
              <div className="p-4 text-sm text-ink-muted">
                {/* Study tab content */}
              </div>
            )}
          </div>

          {script && (
            <SelectionFooter selectedCount={selected.size} totalCount={totalCount} onStartStudying={handleStartStudying} />
          )}
        </div>

        <div className="bg-accent p-4 rounded-lg mt-4">
          {/* This is open source - repo invitation thing */}
        </div>
      </div>
    </div>
  );
}
