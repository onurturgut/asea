"use client";

import type {
  ChapterContentBundle,
  ChapterNavigationItem,
  StudentProgress,
} from "@asea/shared";
import { BookOpen, ChevronRight, Code2, X } from "lucide-react";
import { useEffect, useState } from "react";

import { AppShell } from "@/components/layout/AppShell";
import { CodeEditor } from "@/components/learn/CodeEditor";
import { LearningTree } from "@/components/learn/LearningTree";
import { LessonContent } from "@/components/learn/LessonContent";
import { ToolsPanel } from "@/components/learn/ToolsPanel";

type ChapterLink = ChapterNavigationItem | null;

function defaultProgress(chapterId: string): StudentProgress {
  return {
    userId: "",
    chapterId,
    activeSectionId: "lesson",
    completedSectionIds: [],
    progressPercent: 0,
    xp: 0,
    updatedAt: "",
  };
}

export default function LearnScreen({
  initialTab = "lesson",
  content,
  navigation,
  previousChapter,
  nextChapter,
}: {
  initialTab?: "lesson" | "code";
  content: ChapterContentBundle;
  navigation: ChapterNavigationItem[];
  previousChapter: ChapterLink;
  nextChapter: ChapterLink;
}) {
  const [tabs, setTabs] = useState<("lesson" | "code")[]>(
    initialTab === "code" ? ["lesson", "code"] : ["lesson"],
  );
  const [activeTab, setActiveTab] = useState<"lesson" | "code">(
    initialTab === "code" ? "code" : "lesson",
  );
  const [treeCollapsed, setTreeCollapsed] = useState(false);
  const [toolsCollapsed, setToolsCollapsed] = useState(false);
  const [progress, setProgress] = useState<StudentProgress>(() =>
    defaultProgress(content.id),
  );

  useEffect(() => {
    let cancelled = false;
    setProgress(defaultProgress(content.id));
    fetch(`/api/progress/${content.id}`)
      .then((response) => response.json())
      .then((remoteProgress: StudentProgress | null) => {
        if (!cancelled && remoteProgress) setProgress(remoteProgress);
      })
      .catch(() => {
        // The lesson remains readable while account progress is unavailable.
      });
    return () => {
      cancelled = true;
    };
  }, [content.id]);

  const completeLesson = () => {
    setProgress((current) => {
      const alreadyCompleted = current.completedSectionIds.includes("lesson");
      const updated: StudentProgress = {
        ...current,
        chapterId: content.id,
        activeSectionId: "lesson",
        completedSectionIds: ["lesson"],
        progressPercent: 100,
        xp: alreadyCompleted ? current.xp : current.xp + 25,
        updatedAt: new Date().toISOString(),
      };
      void fetch(`/api/progress/${content.id}`, {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(updated),
      });
      return updated;
    });
  };

  const openCode = () => {
    setTabs((current) =>
      current.includes("code") ? current : [...current, "code"],
    );
    setActiveTab("code");
  };
  const closeCode = () => {
    setTabs((current) => current.filter((tab) => tab !== "code"));
    setActiveTab("lesson");
  };

  return (
    <AppShell
      lessonContext={{
        academy: `${content.academyTitle} · ${content.volumeId}`,
        chapter: `${content.id} — ${content.title}`,
        path: `/learn/${content.id.toLowerCase()}`,
      }}
    >
      <div className="flex h-[calc(100dvh-56px)] min-h-0">
        {treeCollapsed ? (
          <div className="flex w-10 shrink-0 flex-col items-center border-r hairline bg-sidebar/40 py-3">
            <button
              type="button"
              onClick={() => setTreeCollapsed(false)}
              className="focus-ring rounded-md p-2 text-muted-foreground hover:bg-muted hover:text-foreground"
              aria-label="Öğrenme ağacını aç"
            >
              <ChevronRight className="size-4" />
            </button>
          </div>
        ) : (
          <LearningTree
            chapters={navigation}
            currentChapterId={content.id}
            currentModuleId={content.moduleId}
            progress={progress.progressPercent}
            previousChapter={previousChapter}
            nextChapter={nextChapter}
            onCollapse={() => setTreeCollapsed(true)}
          />
        )}

        <div className="flex min-w-0 flex-1 flex-col">
          <div className="flex h-10 items-end border-b hairline bg-surface-2/40 px-2">
            {tabs.map((tab) => (
              <button
                type="button"
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`focus-ring group -mb-px flex h-10 items-center gap-2 rounded-t-lg border border-b-0 px-3 text-xs font-medium transition ${
                  activeTab === tab
                    ? "border-hairline bg-background text-foreground"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
                style={
                  activeTab === tab
                    ? { borderColor: "var(--color-hairline)" }
                    : undefined
                }
              >
                {tab === "lesson" ? (
                  <BookOpen className="size-3.5 text-tool-indigo" />
                ) : (
                  <Code2 className="size-3.5 text-tool-amber" />
                )}
                <span>
                  {tab === "lesson"
                    ? `Ders · ${content.id}`
                    : `Kod Editörü · ${content.id.toLowerCase()}.js`}
                </span>
                {tab === "code" ? (
                  <span
                    role="button"
                    tabIndex={0}
                    aria-label="Sekmeyi kapat"
                    onClick={(event) => {
                      event.stopPropagation();
                      closeCode();
                    }}
                    onKeyDown={(event) => {
                      if (event.key === "Enter") {
                        event.stopPropagation();
                        closeCode();
                      }
                    }}
                    className="ml-1 grid size-4 place-items-center rounded-sm text-muted-foreground hover:bg-muted hover:text-foreground"
                  >
                    <X className="size-3" />
                  </span>
                ) : null}
              </button>
            ))}
          </div>

          <div className="min-h-0 flex-1 overflow-hidden">
            <div
              className={
                activeTab === "lesson" ? "h-full overflow-y-auto" : "hidden"
              }
            >
              <LessonContent
                onOpenCodeEditor={openCode}
                content={content}
                previousChapter={previousChapter}
                nextChapter={nextChapter}
                completed={progress.progressPercent === 100}
                onCompleteSection={completeLesson}
              />
            </div>
            <div className={activeTab === "code" ? "h-full" : "hidden"}>
              <CodeEditor chapterId={content.id} />
            </div>
          </div>
        </div>

        <ToolsPanel
          onOpenCodeEditor={openCode}
          collapsed={toolsCollapsed}
          onToggleCollapsed={() => setToolsCollapsed((current) => !current)}
          content={content}
          progress={progress}
        />
      </div>
    </AppShell>
  );
}
