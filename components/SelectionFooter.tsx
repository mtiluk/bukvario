export default function SelectionFooter({ selectedCount, totalCount, onStartStudying }: { selectedCount: number; totalCount: number; onStartStudying: () => void; }) {
  return (
    <div className="flex items-center justify-between border-t px-4 py-3">
      <span className="text-xs text-ink-muted">
        {selectedCount} of {totalCount} selected
      </span>
      <div className="flex items-center gap-2">
        <button className="rounded-field border border-line bg-background px-4 py-2 text-sm font-semibold text-ink-soft hover:bg-surface-hover hover:border-line-strong transition-colors cursor-pointer">
          Reset
        </button>
        <button className="rounded-field bg-accent px-4 py-2 text-sm font-semibold text-on-accent hover:bg-accent-hover active:bg-accent-active transition-colors cursor-pointer" onClick={onStartStudying}>
          Start studying
        </button>
      </div>
    </div>
  );
}
