"use client";

import type { ChapterNavigationItem } from "@asea/shared";
import {
  BookOpen,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Play,
  Search,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { Progress } from "@/components/ui/progress";

type ChapterLink = ChapterNavigationItem | null;

export function LearningTree({
  chapters,
  currentChapterId,
  currentModuleId,
  progress,
  previousChapter,
  nextChapter,
  onCollapse,
}: {
  chapters: ChapterNavigationItem[];
  currentChapterId: string;
  currentModuleId: string;
  progress: number;
  previousChapter: ChapterLink;
  nextChapter: ChapterLink;
  onCollapse: () => void;
}) {
  const [query, setQuery] = useState("");
  const currentChapter = chapters.find(
    (chapter) => chapter.id === currentChapterId,
  );
  const filtered = query
    ? chapters.filter((chapter) =>
        `${chapter.id} ${chapter.title}`
          .toLocaleLowerCase("tr-TR")
          .includes(query.toLocaleLowerCase("tr-TR")),
      )
    : chapters;

  return (
    <aside className="flex h-full w-[280px] shrink-0 flex-col border-r hairline bg-sidebar/40">
      <div className="border-b hairline p-4">
        <div className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
          Yazılım Mühendisliği · V01
        </div>
        <div className="mt-0.5 text-sm font-medium leading-snug">
          {currentChapter?.moduleTitle ?? currentModuleId}
        </div>
        <div className="mt-3 flex items-center justify-between text-[11px] text-muted-foreground">
          <span>{currentChapterId}</span>
          <span>%{progress}</span>
        </div>
        <Progress value={progress} className="mt-1.5 h-1" />
      </div>

      <div className="border-b hairline p-3">
        <div className="relative">
          <Search className="pointer-events-none absolute left-2.5 top-1/2 size-3.5 -translate-y-1/2 text-muted-foreground" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Derslerde ara…"
            className="focus-ring h-8 w-full rounded-md border hairline bg-background pl-8 pr-2 text-xs"
            aria-label="Derslerde ara"
          />
        </div>
      </div>

      <nav className="min-h-0 flex-1 overflow-y-auto p-2">
        <div className="px-2 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
          Okunabilir dersler · {chapters.length}
        </div>
        <ol className="space-y-0.5">
          {filtered.map((chapter, index) => {
            const active = chapter.id === currentChapterId;
            const completed = active && progress === 100;
            const showModuleTitle =
              index === 0 || filtered[index - 1]?.moduleId !== chapter.moduleId;
            const Icon = completed ? Check : active ? Play : BookOpen;

            return (
              <li key={chapter.id}>
                {showModuleTitle ? (
                  <div className="mb-1 mt-3 px-2 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground first:mt-1">
                    {chapter.moduleId} · {chapter.moduleTitle}
                  </div>
                ) : null}
                <Link
                  href={chapter.path}
                  aria-current={active ? "page" : undefined}
                  className={`focus-ring group flex w-full items-start gap-2.5 rounded-lg px-2.5 py-2 text-left text-[13px] transition ${
                    active
                      ? "bg-surface shadow-[0_1px_0_var(--color-hairline)]"
                      : "hover:bg-surface/70"
                  }`}
                >
                  <span
                    className={`mt-0.5 grid size-5 shrink-0 place-items-center rounded-full ${
                      completed
                        ? "bg-tool-emerald/10 text-tool-emerald"
                        : active
                          ? "bg-tool-indigo/10 text-tool-indigo"
                          : "bg-muted text-muted-foreground"
                    }`}
                  >
                    <Icon className="size-3" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span
                      className={`line-clamp-2 leading-snug ${
                        active ? "font-medium" : ""
                      }`}
                    >
                      {chapter.id} · {chapter.title}
                    </span>
                    <span className="mt-0.5 flex items-center gap-2 text-[11px] text-muted-foreground">
                      <span>{active ? "Aktif ders" : "Okunabilir"}</span>
                      <span>·</span>
                      <span>{chapter.estimatedMinutes} dk</span>
                    </span>
                    {active ? (
                      <Progress value={progress} className="mt-1.5 h-1" />
                    ) : null}
                  </span>
                </Link>
              </li>
            );
          })}
        </ol>
      </nav>

      <div className="border-t hairline p-2">
        <div className="flex items-center gap-1">
          {previousChapter ? (
            <Link
              href={previousChapter.path}
              className="focus-ring flex flex-1 items-center justify-center gap-1 rounded-md px-2 py-1.5 text-[11px] font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
            >
              <ChevronLeft className="size-3.5" /> Önceki
            </Link>
          ) : (
            <span className="flex flex-1 items-center justify-center gap-1 px-2 py-1.5 text-[11px] text-muted-foreground/50">
              <ChevronLeft className="size-3.5" /> Önceki
            </span>
          )}
          {nextChapter ? (
            <Link
              href={nextChapter.path}
              className="focus-ring flex flex-1 items-center justify-center gap-1 rounded-md px-2 py-1.5 text-[11px] font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
            >
              Sonraki <ChevronRight className="size-3.5" />
            </Link>
          ) : (
            <span className="flex flex-1 items-center justify-center gap-1 px-2 py-1.5 text-[11px] text-muted-foreground/50">
              Sonraki <ChevronRight className="size-3.5" />
            </span>
          )}
          <button
            type="button"
            onClick={onCollapse}
            className="focus-ring rounded-md p-1.5 text-muted-foreground hover:bg-muted hover:text-foreground"
            aria-label="Sol paneli daralt"
          >
            <ChevronDown className="size-3.5 rotate-90" />
          </button>
        </div>
      </div>
    </aside>
  );
}
