"use client";

import type { ProjectSummary } from "@asea/shared";
import { FolderKanban, GitBranch, LockKeyhole } from "lucide-react";
import Link from "next/link";

import { AppShell } from "@/components/layout/AppShell";

export default function ProjectsScreen({
  projects,
}: {
  projects: ProjectSummary[];
}) {
  return (
    <AppShell>
      <div className="mx-auto max-w-[1200px] p-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-tool-violet">
            Üretim alanı
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight">
            Projeler
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Gerçek Volume 01 proje planı · {projects.length} üretim projesi.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.id}
              className="rounded-2xl border hairline bg-surface p-5"
            >
              <div className="flex items-start justify-between">
                <div className="grid size-10 place-items-center rounded-xl bg-tool-violet/10 text-tool-violet">
                  <FolderKanban className="size-5" />
                </div>
                <span className="rounded-full border hairline bg-background px-2 py-1 text-[10px] text-muted-foreground">
                  {project.difficulty}
                </span>
              </div>
              <div className="mt-5 text-[11px] font-semibold uppercase tracking-wider text-tool-violet">
                {project.id}
              </div>
              <h2 className="mt-1 text-lg font-semibold">{project.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {project.goal}
              </p>
              <div className="mt-5 grid gap-2 rounded-xl bg-background p-3 text-xs">
                <div className="flex gap-2">
                  <GitBranch className="mt-0.5 size-3.5 shrink-0 text-muted-foreground" />
                  <span>
                    <strong>Kapı:</strong> {project.requiredChapters}
                  </span>
                </div>
                <div className="text-muted-foreground">
                  Tahmini süre: {project.estimatedDuration || "Planlanıyor"}
                </div>
              </div>
              <button
                type="button"
                disabled={project.locked}
                className="mt-5 inline-flex w-full cursor-not-allowed items-center justify-center gap-2 rounded-lg border hairline px-3 py-2 text-xs font-medium text-muted-foreground"
              >
                <LockKeyhole className="size-3.5" />
                Başarı kapısı kilitli
              </button>
            </article>
          ))}
        </div>

        <div className="mt-6 rounded-2xl border border-dashed hairline p-6 text-center">
          <LockKeyhole className="mx-auto size-5 text-tool-amber" />
          <h2 className="mt-3 font-semibold">
            İlk proje: Instruction Simulator
          </h2>
          <p className="mt-1 text-xs text-muted-foreground">
            V01-C01–C04 ve ilgili değerlendirmeler tamamlandığında açılacak.
          </p>
          <Link
            href="/learn/v01-c02"
            className="mt-4 inline-flex text-xs font-medium text-tool-indigo hover:underline"
          >
            Aktif derse dön
          </Link>
        </div>
      </div>
    </AppShell>
  );
}
