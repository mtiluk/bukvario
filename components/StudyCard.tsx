"use client";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import confetti from "canvas-confetti";
import AudioButton from "@/components/ui/AudioButton";
import { ALPHABET } from "@/lib/letters";
import { definePatch } from "@web-kits/audio";
import { _patch } from "@/.web-kits/retro";

function shuffle<T>(items: T[]): T[] {
  const out = [...items];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

export default function StudyCard() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedLetters = searchParams.get("letters");
  const [index, setIndex] = useState(0);
  const [status, setStatus] = useState<"TYPING" | "CORRECT" | "WRONG">("TYPING");

  const deck = useMemo(() => {
    const ids = new Set(selectedLetters?.split(",") ?? []);
    return shuffle(ALPHABET.filter((l) => ids.has(l.latin)));
  }, [selectedLetters]);

  const patch = definePatch(_patch);
  const done = deck.length <= 0 || index >= deck.length;

  useEffect(() => {
    if (!done) return;

    patch.play("success");
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 },
    });

    const timeout = setTimeout(() => router.push("/"), 2500);
    return () => clearTimeout(timeout);
  }, [done, router]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const input = new FormData(e.target as HTMLFormElement);
    const value = input.get("answer") as string;
    if (deck[index]?.answers.includes(value)) {
      setStatus("TYPING");
      setIndex(index + 1);
      (e.target as HTMLFormElement).reset();
      patch.play("success");
    } else {
      setStatus("WRONG");
      patch.play("error");
    }
  }

  if (done) {
    return (
      <div className="w-screen h-screen flex items-center justify-center">
        <div className="flex flex-col items-center gap-3 text-center">
          <span className="text-7xl">🎉</span>
          <h1 className="text-2xl font-bold text-ink">All done!</h1>
          <p className="text-sm text-ink-muted">
            Taking you back home…
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="w-full max-w-lg relative">
        <div className="bg-surface border rounded-lg flex flex-col overflow-hidden">
          {/* Progress */}
          <div className="flex items-center justify-between border-b px-4 py-2 text-xs text-ink-muted">
            <span>Card {index + 1} of {deck.length}</span>
            <span>Latin → Cyrillic</span>
          </div>
          {/* Prompt */}
          <div className="flex flex-col items-center gap-4 px-4 py-12">
            <div className="flex items-center gap-3">
              <span className="text-7xl font-bold leading-none text-ink">
                {deck[index]?.latin}
              </span>
              <AudioButton />
            </div>
            <p className="text-xs uppercase tracking-wide text-ink-muted">
              Type the pronunciation
            </p>
            <form id="study-form" onSubmit={handleSubmit}>
              <input
                name="answer"
                autoFocus
                autoComplete="off"
                autoCorrect="off"
                spellCheck={false}
                placeholder="…"
                onInput={() => setStatus("TYPING")}
                className={`w-40 rounded-field border border-line bg-background px-3 py-2 text-center text-lg font-semibold text-ink outline-none focus:border-accent transition-colors ${status === "WRONG" ? "border-red-600 focus:border-red-600" : ""}`}
              />
            </form>
          </div>
          {/* Footer */}
          <div className="flex items-center justify-between border-t px-4 py-3">
            <Link
              href="/"
              className="rounded-field border border-line bg-background px-4 py-2 text-sm font-semibold text-ink-soft hover:bg-surface-hover hover:border-line-strong transition-colors cursor-pointer"
            >
              Quit
            </Link>
            <button form="study-form" className="rounded-field bg-accent px-4 py-2 text-sm font-semibold text-on-accent hover:bg-accent-hover active:bg-accent-active transition-colors cursor-pointer">
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
