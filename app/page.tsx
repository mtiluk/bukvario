"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import TabBar from "@/components/TabBar";
import ScriptHeader from "@/components/ScriptHeader";
import LetterGroup from "@/components/LetterGroup";
import SelectionFooter from "@/components/SelectionFooter";
import { ALPHABET, LATIN_GROUPS, CYRILLIC_GROUPS } from "@/lib/letters";
import type { Tabs } from "@/lib/letters";

export default function Home() {
  const [tabName, setTabName] = useState<Tabs>("Latin");
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const totalCount = ALPHABET.length
  const router = useRouter();

  function toggleLetter(id: string) {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }

  function setMany(ids: string[], on: boolean) {
    setSelected((prev) => {
      const next = new Set(prev);
      ids.forEach((id) => (on ? next.add(id) : next.delete(id)));
      return next;
    });
  }

  function reset() {
    setSelected(new Set());
  }

  const handleStartStudying = () => {
    if (selected.size === 0) return;

    const params = new URLSearchParams({
      script: tabName,
      letters: Array.from(selected).join(","),
    });

    router.push(`/study?${params}`);
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="w-full max-w-lg relative">
        <div className="bg-surface border rounded-lg flex flex-col">
          <TabBar active={tabName} action={setTabName} />

          <div className="flex-1">
            {tabName !== "Study" ? (
              <>
                <ScriptHeader mark={tabName === "Latin" ? "Š" : "Ш"} title={tabName} subtitle="Overview" />
                <div className="px-4 py-1">
                  {(tabName === "Latin" ? LATIN_GROUPS : CYRILLIC_GROUPS).map((g) => (
                    <LetterGroup
                      key={g.key}
                      label={g.label}
                      letters={ALPHABET.filter((l) =>
                        tabName === "Latin" ? l.latinGroup === g.key : l.cyrillicGroup === g.key
                      )}
                      script={tabName}
                      selected={selected}
                      onSetMany={setMany}
                    />
                  ))}
                </div>
              </>
            ) : (
              <div className="p-4 text-sm text-ink-muted"></div>
            )}
           </div>

           <SelectionFooter reset={reset} selectedCount={selected.size} totalCount={totalCount} onStartStudying={handleStartStudying} />
        </div>

        <div className="bg-accent p-4 rounded-lg mt-4">
          {/* This is open source - repo invitation thing */}
        </div>
      </div>
    </div>
  );
}
