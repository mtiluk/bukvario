export default function ScriptHeader({ mark, title, subtitle }: { mark: string; title: string; subtitle: string; }) {
  return (
    <div className="px-4 pt-4">
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-field bg-accent text-xl font-bold text-on-accent">
          {mark}
        </div>
        <div>
          <h2 className="text-lg font-bold leading-tight">{title}</h2>
          <p className="text-sm text-ink-muted leading-tight">{subtitle}</p>
        </div>
      </div>
      <p className="mt-3 text-sm">
        Choose the characters you want to practise, then press{" "}
        <span className="rounded bg-accent px-1.5 py-0.5 text-xs font-semibold text-on-accent">
          Start studying
        </span>
        .
      </p>
    </div>
  );
}
