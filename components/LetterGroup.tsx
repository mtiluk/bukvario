import LetterChip from "@/components/ui/LetterChip";
import SelectAllButton from "@/components/ui/SelectAllButton";
import type { LetterGroupData } from "@/lib/letters";

export default function LetterGroup({ group, selected, onToggle }: { group: LetterGroupData; selected: Set<string>; onToggle: (letter: string) => void; }) {
  return (
    <section className="py-4 border-b last:border-b-0">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-xs font-semibold uppercase tracking-wide text-ink-muted">
          {group.label}
        </h3>
        <SelectAllButton />
      </div>
      <div className="grid grid-cols-6 gap-1.5">
        {group.letters.map((letter) => (
          <LetterChip
            key={letter}
            letter={letter}
            selected={selected.has(letter)}
            onClick={() => onToggle(letter)}
          />
        ))}
      </div>
    </section>
  );
}
