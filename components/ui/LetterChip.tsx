export default function LetterChip({ glyph, selected, onClick }: { glyph: string; selected: boolean; onClick: () => void; }) {  return (
    <button
      className={`h-10 rounded-field border text-sm font-semibold transition-colors cursor-pointer ${
        selected
          ? "bg-accent-tint border-accent text-accent"
          : "bg-background border-line text-ink-soft hover:bg-surface-hover"
      }`}
      onClick={onClick}
    >
      {glyph}
      <span className="ml-1 text-xs font-normal text-ink-muted">
        {glyph.toLowerCase()}
      </span>
    </button>
  );
}
