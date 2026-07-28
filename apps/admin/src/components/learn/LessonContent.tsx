"use client";

import type {
  ChapterContentBundle,
  ChapterNavigationItem,
  ContentBlock,
} from "@asea/shared";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Code2,
  Lightbulb,
  ListChecks,
  LockKeyhole,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";

import { useAppState } from "@/lib/app-state";

function ContentBlockView({
  block,
  onOpenCodeEditor,
}: {
  block: ContentBlock;
  onOpenCodeEditor: () => void;
}) {
  if (block.type === "heading") {
    const className =
      block.level === 2
        ? "mt-10 text-xl font-semibold tracking-tight"
        : "mt-7 text-lg font-semibold tracking-tight";
    return <h2 className={className}>{block.text}</h2>;
  }
  if (block.type === "list") {
    const Tag = block.ordered ? "ol" : "ul";
    return (
      <Tag
        className={`mt-3 space-y-2 pl-5 text-[15px] leading-[1.75] ${
          block.ordered ? "list-decimal" : "list-disc"
        }`}
      >
        {block.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </Tag>
    );
  }
  if (block.type === "code") {
    return (
      <div className="mt-4 overflow-hidden rounded-xl border hairline bg-surface-2/60">
        <div className="flex items-center justify-between border-b hairline px-3 py-1.5 text-[11px] text-muted-foreground">
          <span className="font-mono">{block.language || "text"}</span>
          <button
            type="button"
            onClick={onOpenCodeEditor}
            className="focus-ring inline-flex items-center gap-1 rounded-md px-2 py-1 hover:bg-muted hover:text-foreground"
          >
            <Code2 className="size-3" /> Kod Editöründe Aç
          </button>
        </div>
        <pre className="overflow-x-auto p-4 text-[13px] leading-relaxed">
          <code className="font-mono">{block.code}</code>
        </pre>
      </div>
    );
  }
  if (block.type === "quote") {
    return (
      <blockquote className="mt-4 border-l-2 border-tool-indigo pl-4 text-sm italic text-muted-foreground">
        {block.text}
      </blockquote>
    );
  }
  return <p className="mt-3 text-[15px] leading-[1.75]">{block.text}</p>;
}

export function LessonContent({
  onOpenCodeEditor,
  content,
  previousChapter,
  nextChapter,
  completed,
  onCompleteSection,
}: {
  onOpenCodeEditor: () => void;
  content: ChapterContentBundle;
  previousChapter: ChapterNavigationItem | null;
  nextChapter: ChapterNavigationItem | null;
  completed: boolean;
  onCompleteSection: () => void;
}) {
  const { addShortNote } = useAppState();

  const saveSelection = () => {
    const selection = window.getSelection?.()?.toString()?.trim();
    if (selection && selection.length > 3) {
      addShortNote({
        text: selection,
        source: `${content.id} · ${content.title}`,
        chapterId: content.id,
      });
      toast.success("Kısa nota kaydedildi", {
        description:
          selection.slice(0, 80) + (selection.length > 80 ? "…" : ""),
      });
    } else {
      toast.info("Önce ders metninden bir yer seç");
    }
  };

  return (
    <article className="mx-auto max-w-[760px] px-8 py-8">
      <div className="mb-6 flex flex-wrap items-center gap-2 text-[11px] text-muted-foreground">
        <span className="rounded-full border hairline bg-surface px-2 py-0.5 font-mono">
          {content.id}
        </span>
        <span className="rounded-full bg-tool-emerald/10 px-2 py-0.5 font-medium text-tool-emerald">
          {content.difficulty}
        </span>
        <span>·</span>
        <span>≈ {content.estimatedMinutes} dk</span>
        <span>·</span>
        <span>{content.moduleId}</span>
      </div>

      <h1 className="text-3xl font-semibold leading-tight tracking-tight">
        {content.title}
      </h1>
      <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
        {content.description}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={saveSelection}
          className="focus-ring inline-flex items-center gap-1.5 rounded-lg border hairline px-3 py-1.5 text-xs font-medium hover:bg-surface"
        >
          <Sparkles className="size-3.5 text-tool-amber" /> Seçimi Kısa Notlara
          kaydet
        </button>
        <button
          type="button"
          onClick={() =>
            toast("Sağ panelde AI Mentor’u aç", {
              description: `${content.id} ders bağlamı otomatik aktarılacak.`,
            })
          }
          className="focus-ring inline-flex items-center gap-1.5 rounded-lg border hairline px-3 py-1.5 text-xs font-medium hover:bg-surface"
        >
          <Lightbulb className="size-3.5 text-tool-cyan" /> Seçili yeri Mentor’a
          sor
        </button>
      </div>

      <div className="mt-8 rounded-xl border hairline bg-surface-2/60 p-5">
        <div className="mb-2 flex items-center gap-2 text-[13px] font-semibold">
          <ListChecks className="size-4 text-tool-indigo" /> Öğrenme çıktıları
        </div>
        <ul className="space-y-1.5 text-sm text-foreground/90">
          {content.learningOutcomes.map((outcome) => (
            <li key={outcome} className="flex items-start gap-2">
              <Check className="mt-0.5 size-3.5 shrink-0 text-tool-emerald" />
              <span>{outcome}</span>
            </li>
          ))}
        </ul>
      </div>

      {!content.hasActivityPackage ? (
        <div className="mt-6 flex items-start gap-3 rounded-xl border border-tool-amber/30 bg-tool-amber/5 p-4 text-sm">
          <LockKeyhole className="mt-0.5 size-4 shrink-0 text-tool-amber" />
          <div>
            <div className="font-semibold">Ders metni açık</div>
            <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
              Bu chapter okunabilir. Quiz, lab ve mentor paketi henüz
              hazırlanmadığı için yalnızca çalışma etkinlikleri kapalıdır.
            </p>
          </div>
        </div>
      ) : null}

      <section className="mt-10 rounded-2xl border hairline bg-surface p-6">
        <div className="text-[11px] font-semibold uppercase tracking-wider text-tool-indigo">
          Kanonik ASEA ders içeriği
        </div>
        {content.lesson.blocks.map((block, index) => (
          <ContentBlockView
            key={`${block.type}-${"text" in block ? block.text.slice(0, 32) : index}`}
            block={block}
            onOpenCodeEditor={onOpenCodeEditor}
          />
        ))}
      </section>

      <div className="mt-12 grid grid-cols-[1fr_auto_1fr] items-center gap-3 border-t hairline pt-6">
        {previousChapter ? (
          <Link
            href={previousChapter.path}
            className="focus-ring inline-flex items-center gap-2 justify-self-start rounded-lg border hairline px-4 py-2 text-sm font-medium hover:bg-surface"
          >
            <ArrowLeft className="size-4" />
            <span className="hidden sm:inline">{previousChapter.id}</span>
            Önceki
          </Link>
        ) : (
          <span />
        )}
        <button
          type="button"
          onClick={() => {
            onCompleteSection();
            toast.success(
              completed ? "Ders zaten tamamlanmıştı" : "Ders tamamlandı",
              {
                description: "İlerlemen MongoDB hesabına kaydedildi.",
              },
            );
          }}
          className="focus-ring inline-flex items-center gap-2 rounded-lg bg-foreground px-4 py-2 text-sm font-medium text-background hover:opacity-90"
        >
          <Check className="size-4" />
          {completed ? "Tamamlandı" : "Dersi tamamla"}
        </button>
        {nextChapter ? (
          <Link
            href={nextChapter.path}
            className="focus-ring inline-flex items-center gap-2 justify-self-end rounded-lg border hairline px-4 py-2 text-sm font-medium hover:bg-surface"
          >
            Sonraki
            <span className="hidden sm:inline">{nextChapter.id}</span>
            <ArrowRight className="size-4" />
          </Link>
        ) : (
          <span />
        )}
      </div>
    </article>
  );
}
