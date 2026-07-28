"use client";

import type { AcademyCatalog } from "@asea/shared";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ChevronDown,
  Lock,
  Play,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { AppShell } from "@/components/layout/AppShell";
import { Progress } from "@/components/ui/progress";

export default function AcademiesScreen({
  catalog,
}: {
  catalog: AcademyCatalog;
}) {
  const [openModule, setOpenModule] = useState<string | undefined>(
    catalog.modules[0]?.id,
  );
  const totalChapters = catalog.modules.reduce(
    (sum, module) => sum + module.chapters.length,
    0,
  );
  const availableChapters = catalog.modules.reduce(
    (sum, module) =>
      sum + module.chapters.filter((chapter) => chapter.available).length,
    0,
  );
  const overallProgress = Math.round(
    catalog.modules.reduce((sum, module) => sum + module.progressPercent, 0) /
      Math.max(catalog.modules.length, 1),
  );

  return (
    <AppShell>
      <div className="mx-auto max-w-[1200px] p-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-tool-indigo">
              Akademiler
            </p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight">
              {catalog.title}
            </h1>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              {catalog.description}
            </p>
          </div>
          <div className="rounded-xl border hairline bg-surface px-4 py-3 text-right">
            <div className="text-[11px] uppercase tracking-wider text-muted-foreground">
              Genel ilerleme
            </div>
            <div className="mt-1 text-2xl font-semibold">
              %{overallProgress}
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-2xl border hairline bg-surface p-6">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                {catalog.volumeId} · {totalChapters} chapter ·{" "}
                {availableChapters} üretimde
              </div>
              <h2 className="mt-1 text-xl font-semibold">
                {catalog.volumeTitle}
              </h2>
            </div>
            <BookOpen className="size-5 text-tool-indigo" />
          </div>
          <Progress value={overallProgress} className="mt-5 h-1.5" />

          <div className="mt-6 grid gap-3">
            {catalog.modules.map((module) => {
              const isOpen = openModule === module.id;
              return (
                <section
                  key={module.id}
                  className="rounded-xl border hairline bg-background"
                >
                  <button
                    type="button"
                    onClick={() =>
                      setOpenModule(isOpen ? undefined : module.id)
                    }
                    aria-expanded={isOpen}
                    className="focus-ring flex w-full items-center gap-4 rounded-xl p-4 text-left"
                  >
                    <span
                      className={`grid size-10 shrink-0 place-items-center rounded-full ${
                        module.status === "active"
                          ? "bg-tool-indigo/10 text-tool-indigo"
                          : module.status === "locked"
                            ? "bg-muted text-muted-foreground"
                            : "bg-tool-emerald/10 text-tool-emerald"
                      }`}
                    >
                      {module.status === "active" ? (
                        <Play className="size-4" />
                      ) : module.status === "locked" ? (
                        <Lock className="size-4" />
                      ) : (
                        <CheckCircle2 className="size-4" />
                      )}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-semibold">
                        {module.id} · {module.title}
                      </span>
                      <span className="mt-0.5 block text-xs text-muted-foreground">
                        {module.purpose}
                      </span>
                      <span className="mt-2 flex items-center gap-3">
                        <Progress
                          value={module.progressPercent}
                          className="h-1 w-32"
                        />
                        <span className="text-[11px] text-muted-foreground">
                          {module.chapters.length} chapter · %
                          {module.progressPercent}
                        </span>
                      </span>
                    </span>
                    <ChevronDown
                      className={`size-4 text-muted-foreground transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen ? (
                    <div className="border-t hairline px-4 py-3">
                      <div className="grid gap-2">
                        {module.chapters.map((chapter) => (
                          <div
                            key={chapter.id}
                            className="flex items-center gap-3 rounded-lg bg-surface px-3 py-2.5"
                          >
                            {chapter.available ? (
                              <CheckCircle2 className="size-4 text-tool-emerald" />
                            ) : (
                              <Lock className="size-4 text-muted-foreground" />
                            )}
                            <div className="min-w-0 flex-1">
                              <div className="text-xs font-semibold">
                                {chapter.id}
                              </div>
                              <div className="truncate text-xs text-muted-foreground">
                                {chapter.title}
                              </div>
                            </div>
                            {chapter.available && chapter.path ? (
                              <Link
                                href={chapter.path}
                                className="focus-ring inline-flex items-center gap-1 rounded-lg bg-primary px-3 py-2 text-xs font-medium text-primary-foreground"
                              >
                                Derse git <ArrowRight className="size-3.5" />
                              </Link>
                            ) : (
                              <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                                Hazırlanıyor
                              </span>
                            )}
                          </div>
                        ))}
                      </div>
                      {module.projectId ? (
                        <div className="mt-3 text-[11px] text-muted-foreground">
                          Proje:{" "}
                          <span className="font-medium text-foreground">
                            {module.projectId} · {module.projectTitle}
                          </span>
                        </div>
                      ) : null}
                    </div>
                  ) : null}
                </section>
              );
            })}
          </div>
        </div>
      </div>
    </AppShell>
  );
}
