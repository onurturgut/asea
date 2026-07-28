"use client";

import { BookOpen, Clock3, Search, StickyNote } from "lucide-react";
import { useMemo, useState } from "react";

import { AppShell } from "@/components/layout/AppShell";
import { useAppState } from "@/lib/app-state";

export default function ShortNotesScreen() {
  const { shortNotes } = useAppState();
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => {
    const normalized = query.trim().toLocaleLowerCase("tr-TR");
    if (!normalized) return shortNotes;
    return shortNotes.filter(
      (note) =>
        note.text.toLocaleLowerCase("tr-TR").includes(normalized) ||
        note.source.toLocaleLowerCase("tr-TR").includes(normalized),
    );
  }, [query, shortNotes]);

  return (
    <AppShell>
      <div className="mx-auto max-w-[1100px] p-8">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-tool-amber">
              Hızlı yakalama
            </p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight">
              Kısa Notlar
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Derslerden, mentor cevaplarından ve kod editöründen tek tıkla
              kaydettiklerin.
            </p>
          </div>
          <div className="rounded-xl border hairline bg-surface px-4 py-3 text-center">
            <div className="text-2xl font-semibold">{shortNotes.length}</div>
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
              kayıt
            </div>
          </div>
        </div>

        <div className="relative mt-6">
          <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Kısa notlarda ara…"
            className="focus-ring h-11 w-full rounded-xl border hairline bg-surface pl-10 pr-4 text-sm"
          />
        </div>

        <div className="mt-5 grid gap-3 md:grid-cols-2">
          {filtered.map((note) => (
            <article
              key={note.id}
              className="rounded-2xl border hairline bg-surface p-5"
            >
              <StickyNote className="size-5 text-tool-amber" />
              <p className="mt-4 text-sm leading-relaxed">{note.text}</p>
              <div className="mt-5 flex items-center justify-between border-t hairline pt-3 text-[11px] text-muted-foreground">
                <span className="inline-flex min-w-0 items-center gap-1.5 truncate">
                  <BookOpen className="size-3" /> {note.source}
                </span>
                <span className="ml-3 inline-flex shrink-0 items-center gap-1">
                  <Clock3 className="size-3" /> {note.createdAt}
                </span>
              </div>
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="mt-5 rounded-2xl border border-dashed hairline p-10 text-center text-sm text-muted-foreground">
            Bu aramayla eşleşen kısa not bulunamadı.
          </div>
        )}
      </div>
    </AppShell>
  );
}
