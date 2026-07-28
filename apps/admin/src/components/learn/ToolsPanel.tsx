import { useState } from "react";
import type { LucideIcon } from "lucide-react";
import type {
  ChapterContentBundle,
  ContentArtifactKind,
  ContentBlock,
  ContentDocument,
  StudentProgress,
} from "@asea/shared";
import {
  ArrowLeft,
  ArrowRight,
  Award,
  Beaker,
  BookOpen,
  Brain,
  ChevronRight,
  Code2,
  Dumbbell,
  Eye,
  FileText,
  Layers,
  Lightbulb,
  ListChecks,
  LockKeyhole,
  MessagesSquare,
  Network,
  Send,
  Sparkles,
  StickyNote,
  Target,
  ThumbsDown,
  ThumbsUp,
  Trophy,
  Zap,
} from "lucide-react";
import { useAppState } from "@/lib/app-state";
import { toast } from "sonner";

type ToolId =
  | "mentor"
  | "exercise"
  | "quiz"
  | "lab"
  | "challenge"
  | "flashcards"
  | "mindmap"
  | "viz"
  | "interview"
  | "shortnotes"
  | "notes"
  | "progress";

const TOOLS: {
  id: ToolId;
  name: string;
  desc: string;
  icon: LucideIcon;
  color: string;
  badge?: string;
}[] = [
  {
    id: "mentor",
    name: "AI Mentor",
    desc: "Bağlamsal ipucu ve açıklama",
    icon: Sparkles,
    color: "tool-indigo",
    badge: "Yeni cevap",
  },
  {
    id: "exercise",
    name: "Alıştırmalar",
    desc: "Kısa uygulamalı sorular",
    icon: Dumbbell,
    color: "tool-emerald",
  },
  {
    id: "quiz",
    name: "Quiz",
    desc: "Bilgi kontrolü",
    icon: ListChecks,
    color: "tool-cyan",
  },
  {
    id: "lab",
    name: "Laboratuvar",
    desc: "Yönlendirilmiş görev",
    icon: Beaker,
    color: "tool-violet",
  },
  {
    id: "challenge",
    name: "Challenge",
    desc: "Serbest problem",
    icon: Trophy,
    color: "tool-amber",
  },
  {
    id: "flashcards",
    name: "Bilgi Kartları",
    desc: "Kavramları tekrarla",
    icon: Layers,
    color: "tool-rose",
  },
  {
    id: "mindmap",
    name: "Zihin Haritası",
    desc: "Kavramlar arası bağ",
    icon: Network,
    color: "tool-indigo",
  },
  {
    id: "viz",
    name: "Görselleştirmeler",
    desc: "CPU, RAM ve akış",
    icon: Eye,
    color: "tool-cyan",
  },
  {
    id: "interview",
    name: "Mülakat Soruları",
    desc: "Konu bazlı pratik",
    icon: MessagesSquare,
    color: "tool-emerald",
  },
  {
    id: "shortnotes",
    name: "Kısa Notlar",
    desc: "Anlık kayıtların",
    icon: StickyNote,
    color: "tool-amber",
  },
  {
    id: "notes",
    name: "Notlarım",
    desc: "Uzun notlar",
    icon: FileText,
    color: "tool-violet",
  },
  {
    id: "progress",
    name: "İlerleme ve Kanıtlar",
    desc: "Bu chapter'daki kanıt",
    icon: Target,
    color: "tool-rose",
  },
];

const TOOL_ARTIFACT_KIND: Partial<Record<ToolId, ContentArtifactKind>> = {
  mentor: "mentor",
  exercise: "exercises",
  quiz: "quiz",
  lab: "lab",
  challenge: "challenge",
  flashcards: "flashcards",
  mindmap: "concept-summary",
  viz: "visualization",
  interview: "interview",
};

const SUCCESS_GATED_TOOLS = new Set<ToolId>(["lab", "challenge"]);

export function ToolsPanel({
  onOpenCodeEditor,
  collapsed,
  onToggleCollapsed,
  content,
  progress,
}: {
  onOpenCodeEditor: () => void;
  collapsed: boolean;
  onToggleCollapsed: () => void;
  content: ChapterContentBundle;
  progress: StudentProgress;
}) {
  const [tool, setTool] = useState<ToolId | null>(null);

  if (collapsed) {
    return (
      <aside className="flex h-full w-12 shrink-0 flex-col items-center gap-1 border-l hairline bg-sidebar/40 py-3">
        <button
          onClick={onToggleCollapsed}
          className="focus-ring rounded-md p-2 text-muted-foreground hover:bg-muted hover:text-foreground"
          aria-label="Araç panelini aç"
        >
          <ArrowLeft className="size-4" />
        </button>
        {TOOLS.slice(0, 8).map((t) => {
          const Icon = t.icon;
          return (
            <button
              key={t.id}
              onClick={onToggleCollapsed}
              className="focus-ring rounded-md p-2 text-muted-foreground hover:bg-muted hover:text-foreground"
              aria-label={t.name}
              title={t.name}
            >
              <Icon className="size-4" style={{ color: `var(--${t.color})` }} />
            </button>
          );
        })}
      </aside>
    );
  }

  return (
    <aside
      className={`flex h-full ${tool === "notes" ? "w-[520px]" : "w-[360px]"} shrink-0 flex-col border-l hairline bg-sidebar/40`}
    >
      <div className="flex items-center gap-2 border-b hairline px-4 py-3">
        {tool ? (
          <>
            <button
              onClick={() => setTool(null)}
              className="focus-ring -ml-1 rounded-md p-1.5 text-muted-foreground hover:bg-muted hover:text-foreground"
              aria-label="Geri"
            >
              <ArrowLeft className="size-4" />
            </button>
            <div className="min-w-0 flex-1">
              <div className="text-[11px] text-muted-foreground">
                Araçlar · {TOOLS.find((x) => x.id === tool)?.name}
              </div>
              <div className="truncate text-sm font-semibold">
                {TOOLS.find((x) => x.id === tool)?.name}
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="flex-1">
              <div className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                Çalışma araçları
              </div>
              <div className="text-sm font-semibold">Bu ders için</div>
            </div>
          </>
        )}
        <button
          onClick={onToggleCollapsed}
          className="focus-ring rounded-md p-1.5 text-muted-foreground hover:bg-muted hover:text-foreground"
          aria-label="Paneli daralt"
        >
          <ArrowRight className="size-4" />
        </button>
      </div>

      <div className="min-h-0 flex-1 overflow-y-auto">
        {tool === null ? (
          <div className="grid grid-cols-2 gap-2 p-3">
            {TOOLS.map((t) => {
              const Icon = t.icon;
              const artifactKind = TOOL_ARTIFACT_KIND[t.id];
              const missingArtifact =
                Boolean(artifactKind) && !content.artifacts[artifactKind!];
              const gated =
                SUCCESS_GATED_TOOLS.has(t.id) && progress.progressPercent < 100;
              const unavailable = missingArtifact || gated;
              const handle = () => {
                if (missingArtifact) {
                  toast.info("Bu araç paketi henüz hazırlanmadı", {
                    description: `${content.id} ders metnini okumaya devam edebilirsin.`,
                  });
                  return;
                }
                if (gated) {
                  toast.info("Başarı kapısı", {
                    description:
                      "Bu aracı açmak için önce ders metnini tamamla.",
                  });
                  return;
                }
                if (t.id === "shortnotes") {
                  toast.success("Kısa nota kaydedildi", {
                    description:
                      "Bu bölümdeki seçili yer kısa notlarına eklendi.",
                  });
                  return;
                }
                if (t.id === "notes") {
                  setTool("notes");
                  return;
                }
                setTool(t.id);
              };
              return (
                <button
                  key={t.id}
                  onClick={handle}
                  className={`focus-ring group relative flex flex-col items-start gap-2 rounded-xl border hairline bg-surface p-3 text-left transition ${
                    unavailable ? "opacity-60" : "hover:bg-surface-2"
                  }`}
                >
                  <div className="flex w-full items-center justify-between">
                    <span
                      className="grid size-8 place-items-center rounded-lg"
                      style={{
                        background: `color-mix(in oklab, var(--${t.color}) 15%, transparent)`,
                        color: `var(--${t.color})`,
                      }}
                    >
                      <Icon className="size-4" />
                    </span>
                    <ChevronRight className="size-3.5 text-muted-foreground transition group-hover:translate-x-0.5" />
                  </div>
                  <div>
                    <div className="text-[13px] font-semibold leading-tight">
                      {t.name}
                    </div>
                    <div className="mt-0.5 line-clamp-2 text-[11px] text-muted-foreground">
                      {t.desc}
                    </div>
                  </div>
                  {t.badge && (
                    <span className="absolute right-2 top-2 rounded-full bg-tool-rose/15 px-1.5 py-0.5 text-[9px] font-medium text-tool-rose">
                      {t.badge}
                    </span>
                  )}
                  {unavailable ? (
                    <span className="absolute bottom-2 right-2 text-[9px] font-medium uppercase tracking-wider text-muted-foreground">
                      {gated ? "Başarı kapısı" : "Hazırlanıyor"}
                    </span>
                  ) : null}
                </button>
              );
            })}

            {/* Kod Editörü — special card */}
            <button
              onClick={onOpenCodeEditor}
              className="focus-ring group col-span-2 flex items-center gap-3 rounded-xl border hairline bg-gradient-to-r from-tool-indigo/10 to-transparent p-3 text-left transition hover:from-tool-indigo/15"
            >
              <span className="grid size-9 place-items-center rounded-lg bg-tool-indigo/15 text-tool-indigo">
                <Code2 className="size-4" />
              </span>
              <div className="flex-1">
                <div className="text-[13px] font-semibold">Kod Editörü</div>
                <div className="text-[11px] text-muted-foreground">
                  Orta sütunda ikinci sekmede açılır
                </div>
              </div>
              <ChevronRight className="size-4 text-muted-foreground transition group-hover:translate-x-0.5" />
            </button>
          </div>
        ) : (
          <ToolDetail id={tool} content={content} progress={progress} />
        )}
      </div>
    </aside>
  );
}

function ToolDetail({
  id,
  content,
  progress,
}: {
  id: ToolId;
  content: ChapterContentBundle;
  progress: StudentProgress;
}) {
  switch (id) {
    case "mentor":
      return <MentorDetail content={content} />;
    case "shortnotes":
      return <ShortNotesDetail chapterId={content.id} />;
    case "notes":
      return <NotesEditorDetail content={content} />;
    case "progress":
      return <ProgressDetail content={content} progress={progress} />;
    default: {
      const artifactKind = TOOL_ARTIFACT_KIND[id];
      const document = artifactKind
        ? content.artifacts[artifactKind]
        : undefined;
      return document ? (
        <ArtifactDetail document={document} />
      ) : (
        <UnavailableTool chapterId={content.id} />
      );
    }
  }
}

function ArtifactBlock({ block }: { block: ContentBlock }) {
  if (block.type === "heading") {
    return <h3 className="mt-4 text-sm font-semibold">{block.text}</h3>;
  }
  if (block.type === "list") {
    const Tag = block.ordered ? "ol" : "ul";
    return (
      <Tag
        className={`mt-2 space-y-1.5 pl-4 text-xs leading-relaxed ${
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
      <pre className="mt-3 overflow-x-auto rounded-lg bg-surface-2 p-3 text-[11px]">
        <code>{block.code}</code>
      </pre>
    );
  }
  if (block.type === "quote") {
    return (
      <blockquote className="mt-3 border-l-2 border-tool-indigo pl-3 text-xs italic text-muted-foreground">
        {block.text}
      </blockquote>
    );
  }
  return <p className="mt-2 text-xs leading-relaxed">{block.text}</p>;
}

function ArtifactDetail({ document }: { document: ContentDocument }) {
  return (
    <div className="p-4">
      <div className="text-[10px] font-semibold uppercase tracking-wider text-tool-indigo">
        {document.kind}
      </div>
      <h2 className="mt-1 text-base font-semibold">{document.title}</h2>
      <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
        {document.description}
      </p>
      <div className="mt-4 border-t hairline pt-1">
        {document.blocks.slice(0, 28).map((block, index) => (
          <ArtifactBlock
            key={`${block.type}-${"text" in block ? block.text.slice(0, 24) : index}`}
            block={block}
          />
        ))}
      </div>
    </div>
  );
}

function UnavailableTool({ chapterId }: { chapterId: string }) {
  return (
    <div className="p-6 text-center">
      <LockKeyhole className="mx-auto size-5 text-tool-amber" />
      <h2 className="mt-3 text-sm font-semibold">Etkinlik hazırlanıyor</h2>
      <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
        {chapterId} ders metni okunabilir; bu çalışma aracının üretim paketi
        henüz bulunmuyor.
      </p>
    </div>
  );
}

function ContextTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border hairline bg-surface px-2 py-0.5 text-[10px] text-muted-foreground">
      {children}
    </span>
  );
}

function MentorDetail({ content }: { content: ChapterContentBundle }) {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<
    Array<{ role: "student" | "mentor"; text: string }>
  >([
    {
      role: "mentor",
      text: "Merhaba! Önce mevcut düşünceni görmek isterim; ardından sana tek bir sonraki ipucunu vereceğim.",
    },
  ]);

  const askMentor = async (
    mode: "hint" | "explain" | "example",
    suggestedQuestion?: string,
  ) => {
    const message = (suggestedQuestion ?? input).trim();
    if (!message && mode !== "hint") return;

    setMessages((current) => [
      ...current,
      {
        role: "student",
        text: message || "Mevcut bağlam için bir sonraki ipucunu verir misin?",
      },
    ]);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/mentor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chapterId: content.id,
          message,
          mode,
        }),
      });
      if (!response.ok) throw new Error("Mentor yanıtı alınamadı.");
      const data = (await response.json()) as { answer: string };
      setMessages((current) => [
        ...current,
        { role: "mentor", text: data.answer },
      ]);
    } catch {
      toast.error("Mentor şu anda yanıt veremiyor.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-full flex-col">
      <div className="border-b hairline p-4">
        <div className="mb-2 text-[11px] font-medium text-muted-foreground">
          AI Mentor · aktif bağlam
        </div>
        <div className="flex flex-wrap gap-1">
          <ContextTag>{content.id}</ContextTag>
          <ContextTag>{content.title}</ContextTag>
          <ContextTag>{content.moduleId}</ContextTag>
          <ContextTag>Hedef: kavramı uygula</ContextTag>
        </div>
        <p className="mt-2 text-[11px] text-muted-foreground">
          Mentor önce ipucu verir, sonra kavramı açıklar, örnek çözümü yalnızca
          isteğinle gösterir. Bağlam erişimini{" "}
          <button className="underline">ayarlardan</button> kapatabilirsin.
        </p>
      </div>
      <div className="min-h-0 flex-1 space-y-4 overflow-y-auto p-4">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`flex gap-2 ${m.role === "student" ? "justify-end" : ""}`}
          >
            {m.role === "mentor" && (
              <span className="grid size-7 shrink-0 place-items-center rounded-full bg-tool-indigo/15 text-tool-indigo">
                <Sparkles className="size-3.5" />
              </span>
            )}
            <div
              className={`max-w-[85%] rounded-2xl px-3 py-2 text-[13px] leading-relaxed ${
                m.role === "student"
                  ? "bg-foreground text-background"
                  : "bg-surface border hairline"
              }`}
            >
              <div className="whitespace-pre-wrap">{m.text}</div>
              {m.role === "mentor" && (
                <div className="mt-1.5 flex items-center gap-1 text-muted-foreground">
                  <button
                    aria-label="Faydalı"
                    className="rounded p-1 hover:bg-muted"
                  >
                    <ThumbsUp className="size-3" />
                  </button>
                  <button
                    aria-label="Faydalı değil"
                    className="rounded p-1 hover:bg-muted"
                  >
                    <ThumbsDown className="size-3" />
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
        {loading ? (
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Sparkles className="size-3.5 animate-pulse" />
            Dokümanlar inceleniyor…
          </div>
        ) : null}

        <div className="rounded-lg border hairline bg-surface-2/60 p-2">
          <div className="mb-1.5 text-[11px] font-medium text-muted-foreground">
            Önerilen sorular
          </div>
          <div className="flex flex-wrap gap-1">
            {[
              "Bu dersin ana kavramını açıkla",
              "İlk yanlış düşüncemi bulmama yardım et",
              "Bana kısa bir uygulama sorusu sor",
            ].map((s) => (
              <button
                key={s}
                onClick={() => void askMentor("hint", s)}
                className="focus-ring rounded-full border hairline bg-background px-2 py-1 text-[11px] hover:bg-surface-2"
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t hairline p-3">
        <div className="mb-2 flex gap-1">
          <ChipBtn icon={Lightbulb} onClick={() => void askMentor("hint")}>
            İpucu ver
          </ChipBtn>
          <ChipBtn icon={BookOpen} onClick={() => void askMentor("explain")}>
            Kavramı açıkla
          </ChipBtn>
          <ChipBtn icon={Zap} onClick={() => void askMentor("example")}>
            Örnek çözüm
          </ChipBtn>
        </div>
        <div className="flex items-end gap-2 rounded-xl border hairline bg-background p-2">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Mentor'a bir şey sor…"
            rows={2}
            className="focus-ring w-full resize-none bg-transparent text-sm outline-none placeholder:text-muted-foreground"
          />
          <button
            type="button"
            onClick={() => void askMentor("hint")}
            disabled={loading}
            className="focus-ring grid size-8 shrink-0 place-items-center rounded-lg bg-foreground text-background hover:opacity-90"
            aria-label="Gönder"
          >
            <Send className="size-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

function ChipBtn({
  icon: Icon,
  children,
  onClick,
}: {
  icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="focus-ring inline-flex flex-1 items-center justify-center gap-1 rounded-lg border hairline bg-surface px-2 py-1.5 text-[11px] font-medium hover:bg-surface-2"
    >
      <Icon className="size-3" /> {children}
    </button>
  );
}

function ExerciseDetail() {
  return (
    <div className="space-y-4 p-4">
      <div className="text-[11px] text-muted-foreground">
        Alıştırma 3 / 5 · %60
      </div>
      <div className="h-1 rounded-full bg-muted">
        <div
          className="h-1 rounded-full bg-tool-emerald"
          style={{ width: "60%" }}
        />
      </div>
      <div className="rounded-xl border hairline bg-surface p-4">
        <div className="text-xs font-medium text-tool-emerald">Soru</div>
        <p className="mt-1 text-sm leading-relaxed">
          Aşağıdakilerden hangisi CPU'ya <strong>en yakın</strong> bellek
          katmanıdır?
        </p>
      </div>
      <div className="space-y-2">
        {["RAM", "L1 Cache", "SSD", "L3 Cache"].map((c, i) => (
          <label
            key={c}
            className={`flex cursor-pointer items-center gap-2 rounded-lg border hairline px-3 py-2 text-sm ${i === 1 ? "bg-tool-emerald/5" : "hover:bg-surface"}`}
          >
            <input
              type="radio"
              name="ex"
              defaultChecked={i === 1}
              className="accent-tool-emerald"
            />
            <span>{c}</span>
          </label>
        ))}
      </div>
      <div className="rounded-lg border-l-2 border-tool-cyan bg-tool-cyan/5 px-3 py-2 text-xs">
        <strong>İpucu:</strong> Cache katmanları çekirdeğin fiziksel olarak
        içinde bulunur.
      </div>
      <div className="flex gap-2">
        <button className="focus-ring flex-1 rounded-lg border hairline bg-surface py-2 text-xs font-medium hover:bg-surface-2">
          İpucu al
        </button>
        <button className="focus-ring flex-1 rounded-lg bg-foreground py-2 text-xs font-medium text-background">
          Kontrol et
        </button>
      </div>
    </div>
  );
}

function QuizDetail() {
  return (
    <div className="p-4">
      <div className="mb-3 flex items-center justify-between text-[11px] text-muted-foreground">
        <span>Soru 2 / 5</span>
        <span>Bellek türleri</span>
      </div>
      <div className="h-1 rounded-full bg-muted">
        <div
          className="h-1 rounded-full bg-tool-cyan"
          style={{ width: "40%" }}
        />
      </div>
      <h3 className="mt-5 text-base font-semibold leading-snug">
        Uçucu bellek nedir?
      </h3>
      <p className="mt-1 text-xs text-muted-foreground">
        Yalnızca bir cevap seçin.
      </p>
      <div className="mt-4 space-y-2">
        {[
          "Güç kesildiğinde içeriğini kaybeden bellek",
          "Kalıcı olarak saklanabilen bellek",
          "Sadece okunabilen bellek",
          "Anakart üzerinde bulunmayan bellek",
        ].map((c) => (
          <label
            key={c}
            className="flex cursor-pointer items-center gap-2 rounded-lg border hairline px-3 py-2.5 text-sm hover:bg-surface"
          >
            <input type="radio" name="q" className="accent-tool-cyan" />
            <span>{c}</span>
          </label>
        ))}
      </div>
      <button className="focus-ring mt-5 w-full rounded-lg bg-foreground py-2.5 text-sm font-medium text-background">
        Sonraki soru
      </button>
    </div>
  );
}

function LabDetail() {
  return (
    <div className="space-y-4 p-4 text-sm">
      <div>
        <div className="text-[11px] font-medium uppercase tracking-wider text-tool-violet">
          Laboratuvar
        </div>
        <h3 className="mt-1 text-base font-semibold">
          Bellek kullanımını gözlemle
        </h3>
      </div>
      <div className="rounded-xl border hairline bg-surface p-3">
        <div className="mb-1 text-[11px] font-medium text-muted-foreground">
          Amaç
        </div>
        <p className="text-sm leading-relaxed">
          Farklı veri boyutlarını RAM'de tutan küçük bir program yazmak ve
          bellek tüketimini gözlemlemek.
        </p>
      </div>
      <div>
        <div className="mb-2 text-[11px] font-medium text-muted-foreground">
          Görevler
        </div>
        <ul className="space-y-1.5 text-sm">
          {[
            { d: "1 milyon elemanlı bir dizi oluştur", ok: true },
            { d: "Belleği bir Map yapısıyla karşılaştır", ok: true },
            { d: "performance.memory sonuçlarını kaydet", ok: false },
            { d: "Kanıt olarak konsol çıktısını yükle", ok: false },
          ].map((t) => (
            <li key={t.d} className="flex items-start gap-2">
              <input
                type="checkbox"
                defaultChecked={t.ok}
                className="mt-0.5 accent-tool-violet"
              />
              <span
                className={t.ok ? "line-through text-muted-foreground" : ""}
              >
                {t.d}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="rounded-xl border-2 border-dashed hairline p-4 text-center text-xs text-muted-foreground">
        Kanıt dosyası bırak veya <button className="underline">yükle</button>
      </div>
      <button className="focus-ring w-full rounded-lg bg-foreground py-2.5 text-sm font-medium text-background">
        Tamamlandı olarak işaretle
      </button>
    </div>
  );
}

function ChallengeDetail() {
  return (
    <div className="space-y-4 p-4">
      <div>
        <div className="text-[11px] font-medium uppercase tracking-wider text-tool-amber">
          Challenge
        </div>
        <h3 className="mt-1 text-base font-semibold leading-snug">
          Bellek dostu bir Fibonacci
        </h3>
      </div>
      <p className="text-sm leading-relaxed">
        n. Fibonacci sayısını sabit bellek kullanarak (yalnızca birkaç değişken)
        hesaplayan bir fonksiyon yaz.
      </p>
      <div>
        <div className="mb-1 text-[11px] font-medium text-muted-foreground">
          Kısıtlar
        </div>
        <ul className="space-y-1 text-xs text-foreground/90">
          <li>· Dizi veya recursion kullanma</li>
          <li>· 0 ≤ n ≤ 90</li>
          <li>· Süre: 25 dk</li>
        </ul>
      </div>
      <div className="rounded-lg border hairline bg-surface p-3 text-xs text-muted-foreground">
        <strong className="text-foreground">Teslim beklentisi:</strong>{" "}
        JavaScript fonksiyonu ve kısa açıklama.
      </div>
      <button className="focus-ring w-full rounded-lg bg-foreground py-2.5 text-sm font-medium text-background">
        Başlat
      </button>
    </div>
  );
}

function FlashcardsDetail() {
  const [flipped, setFlipped] = useState(false);
  return (
    <div className="p-4">
      <div className="mb-3 flex items-center justify-between text-[11px] text-muted-foreground">
        <span>Kart 4 / 12</span>
        <span>Bellek Kavramları</span>
      </div>
      <div className="h-1 rounded-full bg-muted">
        <div
          className="h-1 rounded-full bg-tool-rose"
          style={{ width: "33%" }}
        />
      </div>
      <button
        onClick={() => setFlipped((f) => !f)}
        className="focus-ring mt-4 grid h-52 w-full place-items-center rounded-2xl border hairline bg-surface p-6 text-center transition hover:bg-surface-2"
      >
        {flipped ? (
          <div>
            <div className="text-[11px] uppercase tracking-wider text-tool-rose">
              Cevap
            </div>
            <div className="mt-2 text-sm leading-relaxed">
              CPU çekirdeğinin içinde bulunan, çok küçük ama en hızlı bellek
              katmanı. Genellikle 32–64 KB boyutundadır.
            </div>
          </div>
        ) : (
          <div>
            <div className="text-[11px] uppercase tracking-wider text-muted-foreground">
              Soru
            </div>
            <div className="mt-2 text-lg font-semibold">L1 Cache nedir?</div>
            <div className="mt-3 text-[11px] text-muted-foreground">
              Çevirmek için tıkla
            </div>
          </div>
        )}
      </button>
      <div className="mt-3 flex gap-2">
        <button className="focus-ring flex-1 rounded-lg border hairline bg-surface py-2 text-xs font-medium hover:bg-surface-2">
          Tekrar et
        </button>
        <button className="focus-ring flex-1 rounded-lg bg-foreground py-2 text-xs font-medium text-background">
          Biliyorum
        </button>
      </div>
    </div>
  );
}

function MindmapDetail() {
  const nodes = [
    { x: 150, y: 100, label: "Program", color: "tool-indigo" },
    { x: 60, y: 40, label: "Kaynak Kod", color: "tool-cyan" },
    { x: 260, y: 40, label: "Makine Kodu", color: "tool-cyan" },
    { x: 60, y: 160, label: "Bellek", color: "tool-emerald" },
    { x: 260, y: 160, label: "CPU", color: "tool-violet" },
    { x: 150, y: 210, label: "Motor", color: "tool-amber" },
  ];
  return (
    <div className="p-4">
      <div className="text-[11px] text-muted-foreground">
        Bu chapter için kavram haritası
      </div>
      <div className="mt-3 overflow-hidden rounded-xl border hairline bg-surface">
        <svg viewBox="0 0 340 260" className="h-56 w-full">
          {nodes.slice(1).map((n) => (
            <line
              key={n.label}
              x1={nodes[0].x}
              y1={nodes[0].y}
              x2={n.x}
              y2={n.y}
              stroke="var(--color-hairline)"
              strokeWidth="1.5"
            />
          ))}
          {nodes.map((n) => (
            <g key={n.label} transform={`translate(${n.x - 40} ${n.y - 14})`}>
              <rect
                width="80"
                height="28"
                rx="14"
                fill="var(--color-surface-2)"
                stroke={`var(--${n.color})`}
                strokeWidth="1.5"
              />
              <text
                x="40"
                y="18"
                textAnchor="middle"
                fontFamily="Inter"
                fontSize="11"
                fontWeight="500"
                fill="var(--color-foreground)"
              >
                {n.label}
              </text>
            </g>
          ))}
        </svg>
      </div>
      <p className="mt-3 text-xs text-muted-foreground">
        Bir düğüme tıklayarak ilgili derse veya kavrama gidebilirsin.
      </p>
    </div>
  );
}

function VizDetail() {
  return (
    <div className="p-4">
      <div className="text-[11px] text-muted-foreground">
        Program yürütme akışı
      </div>
      <div className="mt-2 overflow-hidden rounded-xl border hairline bg-surface p-3">
        <svg viewBox="0 0 320 220" className="h-52 w-full">
          {[
            "Kaynak Kod",
            "Parser",
            "Bytecode",
            "JIT Derleyici",
            "Makine Kodu",
          ].map((s, i) => (
            <g key={s} transform={`translate(20 ${20 + i * 38})`}>
              <rect
                width="280"
                height="28"
                rx="8"
                fill="var(--color-surface-2)"
                stroke="var(--color-hairline)"
              />
              <text
                x="14"
                y="18"
                fontFamily="Inter"
                fontSize="12"
                fill="var(--color-foreground)"
              >
                {s}
              </text>
              <circle
                cx="260"
                cy="14"
                r="4"
                fill={i < 3 ? "var(--tool-emerald)" : "var(--color-muted)"}
              />
            </g>
          ))}
        </svg>
      </div>
      <div className="mt-3 flex gap-2">
        <button className="focus-ring flex-1 rounded-lg border hairline bg-surface py-1.5 text-xs">
          ◀ Adım
        </button>
        <button className="focus-ring flex-1 rounded-lg bg-foreground py-1.5 text-xs text-background">
          Oynat
        </button>
        <button className="focus-ring flex-1 rounded-lg border hairline bg-surface py-1.5 text-xs">
          Adım ▶
        </button>
      </div>
    </div>
  );
}

function InterviewShort() {
  return (
    <div className="space-y-3 p-4">
      <div className="text-[11px] text-muted-foreground">
        İlgili mülakat sorusu
      </div>
      <div className="rounded-xl border hairline bg-surface p-4">
        <div className="text-[11px] font-medium text-tool-emerald">
          Bilgisayar Mimarisi · Orta
        </div>
        <p className="mt-1.5 text-sm leading-relaxed">
          RAM ile SSD arasındaki temel farkları nasıl anlatırsın?
        </p>
      </div>
      <div className="flex items-center gap-2 text-[11px] text-muted-foreground">
        <span className="rounded-full bg-muted px-2 py-0.5">
          Düşünme süresi 60 sn
        </span>
      </div>
      <textarea
        rows={5}
        className="focus-ring w-full resize-none rounded-xl border hairline bg-background p-3 text-sm"
        placeholder="Cevap notların…"
      />
      <div className="flex gap-2">
        <button className="focus-ring flex-1 rounded-lg border hairline bg-surface py-2 text-xs">
          Cevabı göster
        </button>
        <button className="focus-ring flex-1 rounded-lg bg-foreground py-2 text-xs text-background">
          Kendini değerlendir
        </button>
      </div>
    </div>
  );
}

function ShortNotesDetail({ chapterId }: { chapterId: string }) {
  const { shortNotes } = useAppState();
  const chapterNotes = shortNotes.filter(
    (note) => !note.chapterId || note.chapterId === chapterId,
  );
  return (
    <div className="p-4">
      <div className="text-[11px] text-muted-foreground">
        {chapterNotes.length} kısa not · {chapterId}
      </div>
      <ul className="mt-3 space-y-2">
        {chapterNotes.map((n) => (
          <li key={n.id} className="rounded-xl border hairline bg-surface p-3">
            <p className="text-sm leading-relaxed">{n.text}</p>
            <div className="mt-1.5 flex items-center justify-between text-[11px] text-muted-foreground">
              <span>{n.source}</span>
              <span>{n.createdAt}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function NotesEditorDetail({ content }: { content: ChapterContentBundle }) {
  const { longNotes, updateLongNote } = useAppState();
  const [id, setId] = useState(longNotes[0].id);
  const note = longNotes.find((n) => n.id === id)!;
  return (
    <div className="flex h-full flex-col">
      <div className="border-b hairline p-3">
        <div className="flex items-center gap-2 text-[11px] text-muted-foreground">
          <span>Araçlar</span>
          <ChevronRight className="size-3" />
          <span className="text-foreground">Notlarım</span>
        </div>
        <input
          value={note.title}
          onChange={(e) => updateLongNote(note.id, { title: e.target.value })}
          className="focus-ring mt-2 w-full bg-transparent text-lg font-semibold outline-none"
        />
        <div className="mt-1 flex items-center gap-2 text-[11px] text-muted-foreground">
          <span>Kaydedildi · {note.updatedAt}</span>
          {note.linkedTo && <span>· 🔗 {note.linkedTo}</span>}
        </div>
      </div>
      <div className="flex items-center gap-1 border-b hairline px-2 py-1 text-muted-foreground">
        {["B", "I", "H", "•", "1.", "</>", "🔗", "↺", "↻"].map((t) => (
          <button
            key={t}
            className="focus-ring rounded-md px-2 py-1 text-xs font-medium hover:bg-muted hover:text-foreground"
          >
            {t}
          </button>
        ))}
        <button
          type="button"
          onClick={() =>
            updateLongNote(note.id, {
              linkedTo: `${content.id} — ${content.title}`,
              chapterId: content.id,
            })
          }
          className="focus-ring ml-auto rounded-md px-2 py-1 text-xs font-medium hover:bg-muted"
        >
          Aktif derse bağla
        </button>
      </div>
      <div className="min-h-0 flex-1 overflow-y-auto">
        <textarea
          value={note.body}
          onChange={(e) => updateLongNote(note.id, { body: e.target.value })}
          className="focus-ring h-full w-full resize-none border-0 bg-transparent p-5 text-[14px] leading-relaxed outline-none"
          spellCheck={false}
        />
      </div>
      <div className="border-t hairline p-3">
        <div className="mb-2 text-[11px] font-medium text-muted-foreground">
          Diğer notlar
        </div>
        <div className="flex flex-wrap gap-1">
          {longNotes.map((n) => (
            <button
              key={n.id}
              onClick={() => setId(n.id)}
              className={`focus-ring rounded-full border hairline px-2 py-1 text-[11px] ${n.id === id ? "bg-foreground text-background" : "bg-surface hover:bg-surface-2"}`}
            >
              {n.title.length > 30 ? n.title.slice(0, 30) + "…" : n.title}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProgressDetail({
  content,
  progress,
}: {
  content: ChapterContentBundle;
  progress: StudentProgress;
}) {
  return (
    <div className="space-y-4 p-4">
      <div>
        <div className="text-[11px] text-muted-foreground">
          {content.id} · Bu chapter
        </div>
        <div className="mt-1 text-2xl font-semibold">
          %{progress.progressPercent}
        </div>
        <div className="mt-2 h-1.5 rounded-full bg-muted">
          <div
            className="h-1.5 rounded-full bg-tool-rose"
            style={{ width: `${progress.progressPercent}%` }}
          />
        </div>
      </div>
      <div className="rounded-xl border hairline bg-surface p-3">
        <div className="mb-2 text-[11px] font-medium text-muted-foreground">
          Tamamlanan aktiviteler
        </div>
        <ul className="space-y-1.5 text-sm">
          <li className="flex items-center justify-between">
            <span>{progress.completedSectionIds.length} tamamlanmış kayıt</span>
            <Award className="size-3.5 text-tool-emerald" />
          </li>
          <li className="flex items-center justify-between">
            <span>1 alıştırma</span>
            <Award className="size-3.5 text-tool-emerald" />
          </li>
          <li className="flex items-center justify-between">
            <span>1 kod örneği çalıştırıldı</span>
            <Award className="size-3.5 text-tool-emerald" />
          </li>
        </ul>
      </div>
      <div className="rounded-xl border hairline bg-tool-indigo/5 p-3 text-xs">
        <div className="mb-1 font-semibold text-tool-indigo">
          Kişisel karşılaştırma
        </div>
        Bu haftaki odak süren geçen haftaya göre{" "}
        <strong className="text-foreground">%22 daha uzun</strong>.
      </div>
      <div className="text-[11px] text-muted-foreground">
        Bu chapter’dan kazanılan XP: {progress.xp}
      </div>
    </div>
  );
}
