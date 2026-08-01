"use client";

import { AppShell } from "@/components/layout/AppShell";
import type { SearchDocument } from "@asea/shared";
import { Search as SearchIcon, ArrowRight, ExternalLink } from "lucide-react";
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
  "Kaynaklar",
  "Notlarım",
  "Kısa Notlar",
];

const FILTER_KIND_MAP: Record<string, SearchDocument["kind"][]> = {
  Dersler: ["academy", "module", "chapter", "lesson", "reading-guide"],
  Kavramlar: ["concept-summary"],
  "Kod örnekleri": ["examples", "debugging"],
  Quizler: ["quiz"],
  Laboratuvarlar: ["lab"],
  Projeler: ["project"],
  Mülakat: ["interview"],
  Kaynaklar: ["external-source"],
  Notlarım: ["long-note"],
  "Kısa Notlar": ["short-note"],
};

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
      const requestedKinds = FILTER_KIND_MAP[filter];
      const kindQuery =
        requestedKinds?.length === 1 ? `&kind=${requestedKinds[0]}` : "";
      fetch(`/api/search?q=${encodeURIComponent(q)}${kindQuery}`, {
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
  }, [filter, q]);

  const visibleResults =
    filter === "Tümü"
      ? results
      : results.filter((result) => {
          return FILTER_KIND_MAP[filter]?.includes(result.kind) ?? true;
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
            visibleResults.map((r) => {
              const resultContent = (
                <>
                  <span className="mt-1 rounded-md bg-muted px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                    {r.kind === "external-source" ? "kaynak" : r.kind}
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="text-sm font-semibold">
                      {highlight(r.title, q)}
                    </div>
                    <div className="mt-0.5 text-xs text-muted-foreground">
                      {r.kind === "external-source"
                        ? [r.sourceOwner, r.sourceType, r.sourceLanguage]
                            .filter(Boolean)
                            .join(" · ")
                        : r.path}
                    </div>
                    <p className="mt-1 text-sm text-foreground/80">
                      {highlight(r.excerpt, q)}
                    </p>
                    {r.kind === "external-source" ? (
                      <div className="mt-2 flex flex-wrap gap-1.5 text-[10px] text-muted-foreground">
                        <span className="rounded-full bg-muted px-2 py-0.5">
                          Kalite {r.qualityScore ?? "—"}/100
                        </span>
                        <span className="rounded-full bg-muted px-2 py-0.5">
                          {r.sourceVerification ?? "kontrol edilmedi"}
                        </span>
                        <span className="rounded-full bg-muted px-2 py-0.5">
                          {r.sourceLicense ?? "lisans incelemesi gerekli"}
                        </span>
                      </div>
                    ) : null}
                  </div>
                  {r.kind === "external-source" ? (
                    <ExternalLink className="mt-2 size-4 shrink-0 text-muted-foreground transition group-hover:text-foreground" />
                  ) : (
                    <ArrowRight className="mt-2 size-4 shrink-0 text-muted-foreground transition group-hover:translate-x-0.5 group-hover:text-foreground" />
                  )}
                </>
              );
              const className =
                "focus-ring group flex w-full items-start gap-4 px-5 py-4 text-left hover:bg-surface-2";
              return (
                <li key={`${r.kind}-${r.id}`}>
                  {r.kind === "external-source" ? (
                    <a
                      href={r.path}
                      target="_blank"
                      rel="noreferrer"
                      className={className}
                    >
                      {resultContent}
                    </a>
                  ) : (
                    <Link href={r.path} className={className}>
                      {resultContent}
                    </Link>
                  )}
                </li>
              );
            })
          )}
        </ul>
      </div>
    </AppShell>
  );
}
