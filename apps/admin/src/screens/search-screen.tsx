"use client";

import { AppShell } from "@/components/layout/AppShell";
import type { SearchDocument } from "@asea/shared";
import { Search as SearchIcon, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const FILTERS = [
  "Tümü",
  "Dersler",
  "Kavramlar",
  "Kod örnekleri",
  "Quizler",
  "Laboratuvarlar",
  "Projeler",
  "Mülakat",
  "Notlarım",
  "Kısa Notlar",
];

function highlight(text: string, q: string) {
  if (!q) return text;
  const i = text.toLowerCase().indexOf(q.toLowerCase());
  if (i === -1) return text;
  return (
    <>
      {text.slice(0, i)}
      <mark className="bg-tool-amber/25 text-foreground">
        {text.slice(i, i + q.length)}
      </mark>
      {text.slice(i + q.length)}
    </>
  );
}

export default function SearchScreen() {
  const [q, setQ] = useState("bellek");
  const [filter, setFilter] = useState("Tümü");
  const [results, setResults] = useState<SearchDocument[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    const timer = setTimeout(() => {
      setLoading(true);
      fetch(`/api/search?q=${encodeURIComponent(q)}`, {
        signal: controller.signal,
      })
        .then((response) => response.json())
        .then((payload: { results: SearchDocument[] }) =>
          setResults(payload.results),
        )
        .catch(() => {
          if (!controller.signal.aborted) setResults([]);
        })
        .finally(() => {
          if (!controller.signal.aborted) setLoading(false);
        });
    }, 180);
    return () => {
      clearTimeout(timer);
      controller.abort();
    };
  }, [q]);

  const visibleResults =
    filter === "Tümü"
      ? results
      : results.filter((result) => {
          const map: Record<string, SearchDocument["kind"][]> = {
            Dersler: [
              "academy",
              "module",
              "chapter",
              "lesson",
              "reading-guide",
            ],
            Kavramlar: ["concept-summary"],
            "Kod örnekleri": ["examples", "debugging"],
            Quizler: ["quiz"],
            Laboratuvarlar: ["lab"],
            Projeler: ["project"],
            Mülakat: ["interview"],
            Notlarım: ["long-note"],
            "Kısa Notlar": ["short-note"],
          };
          return map[filter]?.includes(result.kind) ?? true;
        });
  return (
    <AppShell>
      <div className="mx-auto max-w-[1000px] p-8">
        <h1 className="text-2xl font-semibold tracking-tight">Arama</h1>
        <div className="relative mt-4">
          <SearchIcon className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Ders, kavram, quiz veya not ara…"
            className="focus-ring h-12 w-full rounded-xl border hairline bg-surface pl-11 pr-4 text-[15px]"
          />
        </div>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`focus-ring rounded-full border hairline px-3 py-1 text-xs font-medium transition ${
                filter === f
                  ? "bg-foreground text-background"
                  : "bg-surface hover:bg-surface-2"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
        <div className="mt-6 text-xs text-muted-foreground">
          {loading ? "Aranıyor…" : `${visibleResults.length} sonuç · "${q}"`}
        </div>
        <ul className="mt-3 divide-y hairline overflow-hidden rounded-2xl border hairline bg-surface">
          {!loading && visibleResults.length === 0 ? (
            <li className="p-10 text-center text-sm text-muted-foreground">
              Bu sorguyla eşleşen içerik yok. Farklı anahtar kelime dene.
            </li>
          ) : (
            visibleResults.map((r) => (
              <li key={`${r.kind}-${r.id}`}>
                <Link
                  href={r.path}
                  className="focus-ring group flex w-full items-start gap-4 px-5 py-4 text-left hover:bg-surface-2"
                >
                  <span className="mt-1 rounded-md bg-muted px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                    {r.kind}
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="text-sm font-semibold">
                      {highlight(r.title, q)}
                    </div>
                    <div className="mt-0.5 text-xs text-muted-foreground">
                      {r.path}
                    </div>
                    <p className="mt-1 text-sm text-foreground/80">
                      {highlight(r.excerpt, q)}
                    </p>
                  </div>
                  <ArrowRight className="mt-2 size-4 shrink-0 text-muted-foreground transition group-hover:translate-x-0.5 group-hover:text-foreground" />
                </Link>
              </li>
            ))
          )}
        </ul>
      </div>
    </AppShell>
  );
}
