export default function LetterChip({ letter, selected }: { letter: string; selected: boolean; }) {
  return (
    <button
      className={`h-10 rounded-field border text-sm font-semibold transition-colors cursor-pointer ${
        selected
          ? "bg-accent-tint border-accent text-accent"
          : "bg-background border-line text-ink-soft hover:bg-surface-hover"
      }`}
    >
      {letter}
      <span className="ml-1 text-xs font-normal text-ink-muted">
        {letter.toLowerCase()}
      </span>
    </button>
  );
}
