import Link from "next/link";

const REPO_URL = "https://github.com/mtiluk/bukvario;

export default function OpenSourceCard() {
  return (
    <div className="mt-4 rounded-card bg-github p-4 shadow-card">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          {/* GitHub mark */}
          <svg
            viewBox="0 0 16 16"
            aria-hidden="true"
            className="h-8 w-8 shrink-0 fill-white/90"
          >
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.5 7.5 0 0 1 2-.27c.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
          </svg>
          <div>
            <p className="text-sm font-semibold text-white">
              This project is open source
            </p>
            <p className="text-xs text-white/60">
              Found a bug or want a feature? Contributions welcome.
            </p>
          </div>
        </div>

        <Link
          href={REPO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 rounded-field bg-white px-4 py-2 text-sm font-semibold text-github transition-colors hover:bg-white/90 active:bg-white/80"
        >
          View repo
        </Link>
      </div>
    </div>
  );
}
