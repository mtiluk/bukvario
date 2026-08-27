import LetterChip from "@/components/ui/LetterChip";
import SelectAllButton from "@/components/ui/SelectAllButton";
import type { Letter, Tabs } from "@/lib/letters";

export default function LetterGroup({
  label,
  letters,
  script,
  selected,
  onSetMany,
}: {
  label: string;
  letters: Letter[];
  script: Exclude<Tabs, "Study">;
  selected: Set<string>;
  onSetMany: (ids: string[], on: boolean) => void;
}) {
  const ids = letters.map((l) => l.latin);
  const allSelected = ids.every((id) => selected.has(id));

  return (
    <section className="py-4 border-b last:border-b-0">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-xs font-semibold uppercase tracking-wide text-ink-muted">
          {label}
        </h3>
        <SelectAllButton
          allSelected={allSelected}
          onClick={() => onSetMany(ids, !allSelected)}
        />
      </div>
      <div className="grid grid-cols-6 gap-1.5">
        {letters.map((letter) => (
          <LetterChip
            key={letter.latin}
            glyph={script === "Latin" ? letter.latin : letter.cyrillic}
            selected={selected.has(letter.latin)}
            onClick={() => onSetMany([letter.latin], !selected.has(letter.latin))}
          />
        ))}
      </div>
    </section>
  );
}
