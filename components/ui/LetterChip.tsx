export default function LetterChip({ letter, selected, onClick }: { letter: string; selected: boolean; onClick: () => void; }) {
  return (
    <button
      className={`h-10 rounded-field border text-sm font-semibold transition-colors cursor-pointer ${
        selected
          ? "bg-accent-tint border-accent text-accent"
          : "bg-background border-line text-ink-soft hover:bg-surface-hover"
      }`}
      onClick={onClick}
    >
      {letter}
      <span className="ml-1 text-xs font-normal text-ink-muted">
        {letter.toLowerCase()}
      </span>
    </button>
  );
}
