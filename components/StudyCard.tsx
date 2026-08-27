"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import AudioButton from "@/components/ui/AudioButton";

export default function StudyCard() {
  const searchParams = useSearchParams();
  const selectedLetters = searchParams.get("letters");

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="w-full max-w-lg relative">
        <div className="bg-surface border rounded-lg flex flex-col overflow-hidden">
          {/* Progress */}
          <div className="flex items-center justify-between border-b px-4 py-2 text-xs text-ink-muted">
            <span>Card 1 of 20</span>
            <span>Latin → Cyrillic</span>
          </div>

          {/* Prompt */}
          <div className="flex flex-col items-center gap-4 px-4 py-12">
            <div className="flex items-center gap-3">
              <span className="text-7xl font-bold leading-none text-ink">{selectedLetters}</span>
              <AudioButton />
            </div>

            <p className="text-xs uppercase tracking-wide text-ink-muted">
              Type the pronunciation
            </p>

            <input
              autoFocus
              autoComplete="off"
              autoCorrect="off"
              spellCheck={false}
              placeholder="…"
              className="w-40 rounded-field border border-line bg-background px-3 py-2 text-center text-lg font-semibold text-ink outline-none focus:border-accent transition-colors"
            />
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between border-t px-4 py-3">
            <Link
              href="/"
              className="rounded-field border border-line bg-background px-4 py-2 text-sm font-semibold text-ink-soft hover:bg-surface-hover hover:border-line-strong transition-colors cursor-pointer"
            >
              Quit
            </Link>
            <button className="rounded-field bg-accent px-4 py-2 text-sm font-semibold text-on-accent hover:bg-accent-hover active:bg-accent-active transition-colors cursor-pointer">
              Check
            </button>
          </div>
        </div>

        <div className="bg-accent p-4 rounded-lg mt-4">
          {/* This is open source - repo invitation thing */}
        </div>
      </div>
    </div>
  );
}
