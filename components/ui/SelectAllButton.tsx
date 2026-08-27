export default function SelectAllButton({
  allSelected,
  onClick,
}: {
  allSelected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="rounded-full border border-line bg-background px-2.5 py-0.5 text-xs text-ink-soft hover:bg-surface-hover hover:border-line-strong transition-colors cursor-pointer"
    >
      {allSelected ? "Clear" : "Select all"}
    </button>
  );
}
