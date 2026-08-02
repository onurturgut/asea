"use client";

import type { ContentBlock } from "@asea/shared";
import {
  ArrowDown,
  ArrowRight,
  Binary,
  Boxes,
  Braces,
  Check,
  ChevronLeft,
  ChevronRight,
  CircleDot,
  Code2,
  Cpu,
  Database,
  FileCode2,
  Gauge,
  Layers3,
  MemoryStick,
  MonitorUp,
  Network,
  Pause,
  Play,
  RotateCcw,
  Sparkles,
  TerminalSquare,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";

const STAGES = [
  {
    title: "Hazırlan",
    description: "Hedefini ve çalışma yolunu kur",
    headings: ["Learning Objectives", "Prerequisites", "Estimated Study Time"],
  },
  {
    title: "Büyük resmi gör",
    description: "Problemi, sezgiyi ve chapter’ın ana modelini keşfet",
    headings: ["Introduction"],
  },
  {
    title: "Sistemin içine gir",
    description: "Temel kavramları ve aralarındaki ilişkileri izle",
    headings: ["Core Concepts"],
  },
  {
    title: "Mühendis gibi düşün",
    description: "Gerçek senaryoları ve hataları çöz",
    headings: [
      "Engineering Perspective",
      "Real World Examples",
      "Common Mistakes",
      "Best Practices",
    ],
  },
  {
    title: "Uygula ve kanıtla",
    description: "Bilgini uygulamaya dönüştür",
    headings: [
      "Hands-on Exercise",
      "Reflection Questions",
      "Chapter Summary",
      "Key Takeaways",
      "Further Reading",
      "References",
    ],
  },
] as const;

const HEADING_TRANSLATIONS: Record<string, string> = {
  "Learning Objectives": "Öğrenme hedefleri",
  Prerequisites: "Başlamadan önce",
  "Estimated Study Time": "Çalışma planı",
  Introduction: "Yolculuğa başlayalım",
  "Core Concepts": "Programın iç dünyası",
  "Engineering Perspective": "Mühendislik perspektifi",
  "Real World Examples": "Gerçek dünya senaryoları",
  "Common Mistakes": "Sık yapılan hatalar",
  "Best Practices": "İyi çalışma alışkanlıkları",
  "Hands-on Exercise": "Şimdi sen uygula",
  Objective: "Hedef",
  Requirements: "Gereksinimler",
  Tasks: "Görevler",
  Deliverables: "Teslim edilecekler",
  "Evaluation Criteria": "Değerlendirme ölçütleri",
  "Reflection Questions": "Düşünme soruları",
  "Chapter Summary": "Bölüm özeti",
  "Key Takeaways": "Aklında kalması gerekenler",
  "Further Reading": "İleri okumalar",
  References: "Kaynakça",
};

type LessonSection = {
  title: string;
  blocks: ContentBlock[];
};

function groupIntoSections(blocks: ContentBlock[]) {
  const sections: LessonSection[] = [];
  let current: LessonSection | null = null;

  for (const block of blocks) {
    if (block.type === "heading" && block.level === 2) {
      current = { title: block.text, blocks: [] };
      sections.push(current);
      continue;
    }
    if (!current) {
      current = { title: "Derse giriş", blocks: [] };
      sections.push(current);
    }
    current.blocks.push(block);
  }

  return sections;
}

function ExecutionJourneyDiagram() {
  const [path, setPath] = useState<"native" | "virtual">("native");
  const [activeStep, setActiveStep] = useState(0);
  const [playing, setPlaying] = useState(true);

  const nodes =
    path === "native"
      ? [
          { label: "Kaynak kod", detail: "İnsan yazar", icon: FileCode2 },
          { label: "Derleyici", detail: "Temsili dönüştürür", icon: Braces },
          { label: "Yürütülebilir", detail: "Diskte bekler", icon: Binary },
          { label: "Süreç", detail: "Çalışan örnek", icon: Cpu },
          { label: "Çıktı", detail: "Sonuç görünür", icon: MonitorUp },
        ]
      : [
          { label: "Kaynak kod", detail: "İnsan yazar", icon: FileCode2 },
          { label: "Ara temsil", detail: "Ortak dil", icon: Layers3 },
          { label: "Sanal makine", detail: "Talimatları yürütür", icon: Boxes },
          { label: "Çalışan durum", detail: "Değerler değişir", icon: Gauge },
          { label: "Çıktı", detail: "Sonuç görünür", icon: MonitorUp },
        ];

  useEffect(() => {
    if (!playing) return;
    const timer = window.setTimeout(
      () => setActiveStep((step) => (step + 1) % nodes.length),
      1250,
    );
    return () => window.clearTimeout(timer);
  }, [activeStep, nodes.length, path, playing]);

  const changePath = (nextPath: "native" | "virtual") => {
    setPath(nextPath);
    setActiveStep(0);
    setPlaying(true);
  };

  return (
    <figure className="my-6 overflow-hidden rounded-3xl border border-tool-cyan/25 bg-gradient-to-br from-tool-cyan/8 via-background to-tool-indigo/8 p-4 sm:p-5">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <figcaption>
          <div className="flex items-center gap-2 text-sm font-semibold">
            <Network className="size-4 text-tool-cyan" /> Kaynak kod nasıl
            sonuca dönüşür?
          </div>
          <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
            Aynı niyet iki farklı yürütme yolundan geçebilir. Hareket eden ışığı
            takip et.
          </p>
        </figcaption>
        <div className="flex rounded-xl border hairline bg-background p-1 text-[11px] font-medium">
          {(
            [
              ["native", "Yerel yol"],
              ["virtual", "Sanal makine"],
            ] as const
          ).map(([value, label]) => (
            <button
              type="button"
              key={value}
              onClick={() => changePath(value)}
              aria-pressed={path === value}
              className={`focus-ring rounded-lg px-2.5 py-1.5 transition ${
                path === value
                  ? "bg-foreground text-background"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-5 grid gap-2 sm:grid-cols-5">
        {nodes.map((node, index) => {
          const Icon = node.icon;
          const active = activeStep === index;
          const visited = activeStep > index;
          return (
            <div key={node.label} className="relative flex sm:block">
              <button
                type="button"
                onClick={() => {
                  setActiveStep(index);
                  setPlaying(false);
                }}
                className={`focus-ring relative z-10 flex w-full items-center gap-3 rounded-2xl border p-3 text-left transition-all sm:min-h-28 sm:flex-col sm:justify-center sm:text-center ${
                  active
                    ? "scale-[1.02] border-tool-cyan/60 bg-tool-cyan/12 shadow-lg shadow-tool-cyan/10"
                    : visited
                      ? "border-tool-emerald/25 bg-tool-emerald/6"
                      : "hairline bg-background/80"
                }`}
              >
                <span
                  className={`grid size-9 shrink-0 place-items-center rounded-xl transition ${
                    active
                      ? "bg-tool-cyan text-white"
                      : visited
                        ? "bg-tool-emerald/15 text-tool-emerald"
                        : "bg-muted text-muted-foreground"
                  }`}
                >
                  {visited ? (
                    <Check className="size-4" />
                  ) : (
                    <Icon className="size-4" />
                  )}
                </span>
                <span>
                  <span className="block text-xs font-semibold">
                    {node.label}
                  </span>
                  <span className="mt-0.5 block text-[10px] leading-snug text-muted-foreground">
                    {node.detail}
                  </span>
                </span>
              </button>
              {index < nodes.length - 1 ? (
                <span className="grid w-7 shrink-0 place-items-center text-muted-foreground sm:absolute sm:left-[calc(100%-4px)] sm:top-1/2 sm:z-20 sm:-translate-y-1/2">
                  <ArrowDown className="size-3.5 sm:hidden" />
                  <ArrowRight className="hidden size-3.5 sm:block" />
                </span>
              ) : null}
            </div>
          );
        })}
      </div>

      <div className="mt-4 flex items-center justify-between gap-3 rounded-2xl border hairline bg-background/80 p-3">
        <p className="text-xs leading-relaxed text-muted-foreground">
          <span className="font-semibold text-foreground">
            {nodes[activeStep].label}:
          </span>{" "}
          {nodes[activeStep].detail}. Bu aşama kaynak dosyanın kendisini değil,
          yürütme zincirindeki mevcut temsili gösterir.
        </p>
        <button
          type="button"
          onClick={() => setPlaying((value) => !value)}
          aria-label={playing ? "Animasyonu duraklat" : "Animasyonu oynat"}
          className="focus-ring grid size-9 shrink-0 place-items-center rounded-xl border hairline hover:bg-muted"
        >
          {playing ? (
            <Pause className="size-3.5" />
          ) : (
            <Play className="size-3.5" />
          )}
        </button>
      </div>
    </figure>
  );
}

const CYCLE_PHASES = [
  {
    title: "Getir",
    english: "Fetch",
    explanation: "PC’nin gösterdiği adresteki talimat bellekten alınır.",
    color: "tool-cyan",
  },
  {
    title: "Çözümle",
    english: "Decode",
    explanation:
      "Talimatın hangi işlemi ve hangi değerleri istediği belirlenir.",
    color: "tool-violet",
  },
  {
    title: "Yürüt",
    english: "Execute",
    explanation:
      "İşlem uygulanır; durum ve ardından program sayacı güncellenir.",
    color: "tool-emerald",
  },
] as const;

function InstructionCycleDiagram() {
  const [phase, setPhase] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) return;
    const timer = window.setTimeout(
      () => setPhase((value) => (value + 1) % CYCLE_PHASES.length),
      1400,
    );
    return () => window.clearTimeout(timer);
  }, [phase, running]);

  const current = CYCLE_PHASES[phase];

  return (
    <figure className="my-6 rounded-3xl border border-tool-violet/25 bg-[#0b1120] p-4 text-slate-100 sm:p-5">
      <div className="flex items-start justify-between gap-4">
        <figcaption>
          <div className="flex items-center gap-2 text-sm font-semibold">
            <Cpu className="size-4 text-violet-300" /> CPU’nun üç vuruşluk ritmi
          </div>
          <p className="mt-1 text-xs leading-relaxed text-slate-400">
            Bir talimatın CPU içinde oluşturduğu kavramsal döngüyü adım adım
            izle.
          </p>
        </figcaption>
        <button
          type="button"
          onClick={() => setRunning((value) => !value)}
          className="focus-ring inline-flex h-9 items-center gap-2 rounded-xl bg-white px-3 text-xs font-semibold text-slate-950"
        >
          {running ? (
            <Pause className="size-3.5" />
          ) : (
            <Play className="size-3.5" />
          )}
          {running ? "Duraklat" : "Canlandır"}
        </button>
      </div>

      <div className="mt-5 grid grid-cols-[1fr_auto_1fr] items-center gap-3">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
          <div className="text-[10px] uppercase tracking-widest text-slate-500">
            Bellek
          </div>
          <div className="mt-2 space-y-1 font-mono text-[11px]">
            {["0  READ number", "1  ADD number", "2  WRITE result"].map(
              (line, index) => (
                <div
                  key={line}
                  className={`rounded-lg px-2 py-1.5 transition ${
                    phase === 0 && index === 0
                      ? "bg-cyan-300/15 text-cyan-200 ring-1 ring-cyan-300/30"
                      : "text-slate-400"
                  }`}
                >
                  {line}
                </div>
              ),
            )}
          </div>
        </div>

        <div className="flex flex-col items-center gap-1 text-slate-500">
          <ArrowRight
            className={`size-5 transition ${phase === 0 ? "text-cyan-300" : ""}`}
          />
          <span className="text-[9px]">talimat</span>
        </div>

        <div className="relative rounded-3xl border border-violet-300/25 bg-violet-300/8 p-4 text-center">
          <div className="mx-auto grid size-14 place-items-center rounded-2xl bg-violet-300/15 text-violet-200">
            <Cpu className={`size-7 ${running ? "animate-pulse" : ""}`} />
          </div>
          <div className="mt-2 text-sm font-semibold">CPU</div>
          <div className="mt-1 font-mono text-[10px] text-slate-400">
            PC = {phase === 2 ? 1 : 0}
          </div>
        </div>
      </div>

      <div className="mt-5 grid gap-2 sm:grid-cols-3">
        {CYCLE_PHASES.map((item, index) => (
          <button
            type="button"
            key={item.title}
            onClick={() => {
              setPhase(index);
              setRunning(false);
            }}
            aria-pressed={phase === index}
            className={`focus-ring rounded-2xl border p-3 text-left transition ${
              phase === index
                ? "border-violet-300/45 bg-white/10"
                : "border-white/10 bg-white/[0.03] text-slate-400"
            }`}
          >
            <span className="text-[10px] text-slate-500">0{index + 1}</span>
            <span className="mt-1 block text-xs font-semibold text-slate-100">
              {item.title}{" "}
              <span className="font-normal text-slate-500">
                ({item.english})
              </span>
            </span>
          </button>
        ))}
      </div>

      <div
        aria-live="polite"
        className="mt-4 rounded-2xl border border-white/10 bg-black/20 p-3 text-xs leading-relaxed text-slate-300"
      >
        <span className="font-semibold text-white">{current.title}:</span>{" "}
        {current.explanation}
      </div>
    </figure>
  );
}

const MEMORY_AREAS = [
  {
    id: "code",
    label: "Kod alanı",
    value: "READ · ADD · WRITE",
    explanation: "Yürütülecek talimatların temsili burada düşünülür.",
    icon: FileCode2,
  },
  {
    id: "stack",
    label: "Yığın",
    value: "Yerel değer · dönüş noktası",
    explanation:
      "Çağrıların ve yerel çalışma bilgilerinin düzenlenebildiği mantıksal alandır.",
    icon: Layers3,
  },
  {
    id: "heap",
    label: "Öbek",
    value: "Dinamik veri · nesneler",
    explanation:
      "Çalışma ortamının yaşam döngüsünü yönettiği dinamik veriler burada temsil edilebilir.",
    icon: Boxes,
  },
  {
    id: "io",
    label: "Girdi / çıktı",
    value: "6 → 12",
    explanation: "Programın dış dünya ile kurduğu gözlenebilir sınırdır.",
    icon: TerminalSquare,
  },
] as const;

function MemoryLandscapeDiagram() {
  const [selected, setSelected] =
    useState<(typeof MEMORY_AREAS)[number]["id"]>("stack");
  const current =
    MEMORY_AREAS.find((area) => area.id === selected) ?? MEMORY_AREAS[0];

  return (
    <figure className="my-6 rounded-3xl border border-tool-amber/25 bg-gradient-to-br from-tool-amber/8 via-background to-tool-violet/7 p-4 sm:p-5">
      <figcaption className="flex items-start gap-3">
        <span className="grid size-10 shrink-0 place-items-center rounded-2xl bg-tool-amber/15 text-tool-amber">
          <MemoryStick className="size-5" />
        </span>
        <span>
          <span className="block text-sm font-semibold">
            Bellek tek bir çekmece değildir
          </span>
          <span className="mt-1 block text-xs leading-relaxed text-muted-foreground">
            Alanlara dokun; her birinin çalışan programdaki sorumluluğunu
            karşılaştır.
          </span>
        </span>
      </figcaption>

      <div className="mt-5 grid gap-3 sm:grid-cols-[1fr_0.9fr]">
        <div className="rounded-3xl border hairline bg-background p-3">
          <div className="mb-2 flex items-center justify-between px-1 text-[10px] uppercase tracking-widest text-muted-foreground">
            <span>Sanal adres alanı</span>
            <span>yüksek adres</span>
          </div>
          <div className="space-y-2">
            {MEMORY_AREAS.map((area) => {
              const Icon = area.icon;
              const active = selected === area.id;
              return (
                <button
                  type="button"
                  key={area.id}
                  onClick={() => setSelected(area.id)}
                  aria-pressed={active}
                  className={`focus-ring flex w-full items-center gap-3 rounded-2xl border p-3 text-left transition-all ${
                    active
                      ? "translate-x-1 border-tool-amber/45 bg-tool-amber/10 shadow-sm"
                      : "hairline bg-surface-2/50 hover:bg-muted"
                  }`}
                >
                  <span
                    className={`grid size-8 place-items-center rounded-xl ${active ? "bg-tool-amber text-white" : "bg-muted text-muted-foreground"}`}
                  >
                    <Icon className="size-4" />
                  </span>
                  <span>
                    <span className="block text-xs font-semibold">
                      {area.label}
                    </span>
                    <span className="mt-0.5 block font-mono text-[10px] text-muted-foreground">
                      {area.value}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
          <div className="mt-2 px-1 text-right text-[10px] uppercase tracking-widest text-muted-foreground">
            düşük adres
          </div>
        </div>

        <div className="flex min-h-52 flex-col justify-between rounded-3xl border border-tool-amber/25 bg-tool-amber/7 p-4">
          <div>
            <div className="text-[10px] font-semibold uppercase tracking-wider text-tool-amber">
              Seçili alan
            </div>
            <div className="mt-2 text-lg font-semibold">{current.label}</div>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {current.explanation}
            </p>
          </div>
          <div className="mt-5 rounded-2xl border hairline bg-background/80 p-3">
            <div className="text-[10px] text-muted-foreground">
              Bu örnekte görünen temsil
            </div>
            <div className="mt-1 font-mono text-xs font-semibold">
              {current.value}
            </div>
          </div>
        </div>
      </div>
    </figure>
  );
}

function ConceptMapDiagram() {
  const concepts = [
    ["Kaynak kod", "insanın yazdığı temsil"],
    ["Çeviri", "uygun talimata dönüşüm"],
    ["Çalışma ortamı", "süreç ve kaynaklar"],
    ["Yürütme durumu", "PC · bellek · değerler"],
    ["Çıktı", "dışarıdan görülen sonuç"],
  ];

  return (
    <figure className="my-6 rounded-3xl border border-tool-indigo/25 bg-tool-indigo/6 p-4 sm:p-5">
      <figcaption className="flex items-center gap-2 text-sm font-semibold">
        <CircleDot className="size-4 text-tool-indigo" /> Chapter’ın kavram
        omurgası
      </figcaption>
      <div className="mt-4 flex flex-col items-stretch gap-2">
        {concepts.map(([title, detail], index) => (
          <div key={title} className="contents">
            <div className="flex items-center gap-3 rounded-2xl border hairline bg-background p-3">
              <span className="grid size-8 shrink-0 place-items-center rounded-xl bg-tool-indigo/12 font-mono text-xs font-semibold text-tool-indigo">
                {index + 1}
              </span>
              <span>
                <span className="block text-xs font-semibold">{title}</span>
                <span className="block text-[11px] text-muted-foreground">
                  {detail}
                </span>
              </span>
            </div>
            {index < concepts.length - 1 ? (
              <ArrowDown className="mx-auto size-4 text-tool-indigo/50" />
            ) : null}
          </div>
        ))}
      </div>
    </figure>
  );
}

function StageConceptJourney({
  chapterId,
  chapterTitle,
  stageTitle,
  concepts,
}: {
  chapterId: string;
  chapterTitle: string;
  stageTitle: string;
  concepts: string[];
}) {
  const [activeConcept, setActiveConcept] = useState(0);
  const [playing, setPlaying] = useState(true);
  const visibleConcepts = concepts.slice(0, 6);

  useEffect(() => {
    if (!playing || visibleConcepts.length < 2) return;
    const timer = window.setTimeout(
      () =>
        setActiveConcept((current) => (current + 1) % visibleConcepts.length),
      1500,
    );
    return () => window.clearTimeout(timer);
  }, [activeConcept, playing, visibleConcepts.length]);

  useEffect(() => {
    setActiveConcept(0);
    setPlaying(true);
  }, [stageTitle]);

  if (visibleConcepts.length === 0) return null;

  return (
    <figure className="mb-6 overflow-hidden rounded-3xl border border-tool-cyan/20 bg-gradient-to-br from-tool-cyan/7 via-background to-tool-indigo/7 p-4 sm:p-5">
      <div className="flex items-start justify-between gap-4">
        <figcaption>
          <div className="flex items-center gap-2 text-sm font-semibold">
            <Network className="size-4 text-tool-cyan" /> Bu durakta kuracağın
            bağlantı
          </div>
          <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
            {chapterTitle} içindeki kavramların birbirine hangi sırayla
            bağlandığını izle.
          </p>
        </figcaption>
        <span className="rounded-full border hairline bg-background px-2.5 py-1 font-mono text-[10px] text-muted-foreground">
          {chapterId}
        </span>
      </div>

      <div className="mt-5 grid gap-2 sm:grid-cols-3">
        {visibleConcepts.map((concept, index) => {
          const active = activeConcept === index;
          const visited = index < activeConcept;
          return (
            <button
              type="button"
              key={`${index}-${concept}`}
              onClick={() => {
                setActiveConcept(index);
                setPlaying(false);
              }}
              aria-pressed={active}
              className={`focus-ring relative min-h-20 rounded-2xl border p-3 text-left transition-all ${
                active
                  ? "-translate-y-1 border-tool-cyan/50 bg-tool-cyan/12 shadow-lg shadow-tool-cyan/10"
                  : visited
                    ? "border-tool-emerald/25 bg-tool-emerald/6"
                    : "hairline bg-background/80 hover:bg-muted"
              }`}
            >
              <span
                className={`grid size-6 place-items-center rounded-lg font-mono text-[10px] font-semibold ${
                  active
                    ? "bg-tool-cyan text-white"
                    : visited
                      ? "bg-tool-emerald/15 text-tool-emerald"
                      : "bg-muted text-muted-foreground"
                }`}
              >
                {visited ? <Check className="size-3.5" /> : index + 1}
              </span>
              <span className="mt-2 block text-xs font-semibold leading-snug">
                {concept}
              </span>
              {index < visibleConcepts.length - 1 ? (
                <ArrowRight className="absolute -right-2.5 top-1/2 z-10 hidden size-4 -translate-y-1/2 rounded-full bg-background text-tool-cyan/55 sm:block" />
              ) : null}
            </button>
          );
        })}
      </div>

      <div className="mt-4 flex items-center justify-between gap-3 rounded-2xl border hairline bg-background/80 p-3">
        <div className="min-w-0">
          <div className="text-[10px] font-semibold uppercase tracking-wider text-tool-cyan">
            Şu an odakta
          </div>
          <div
            aria-live="polite"
            className="mt-0.5 truncate text-xs font-semibold"
          >
            {visibleConcepts[activeConcept]}
          </div>
        </div>
        <button
          type="button"
          disabled={visibleConcepts.length < 2}
          onClick={() => setPlaying((current) => !current)}
          aria-label={
            playing ? "Kavram rotasını duraklat" : "Kavram rotasını oynat"
          }
          className="focus-ring grid size-9 shrink-0 place-items-center rounded-xl border hairline hover:bg-muted disabled:opacity-35"
        >
          {playing ? (
            <Pause className="size-3.5" />
          ) : (
            <Play className="size-3.5" />
          )}
        </button>
      </div>
    </figure>
  );
}

function visualForHeading(heading: string, chapterId: string) {
  if (chapterId !== "V01-C02") return null;
  if (heading === "Büyük Resim") return <ExecutionJourneyDiagram />;
  if (heading.includes("Talimat Döngüsü")) return <InstructionCycleDiagram />;
  if (heading.includes("Belleği katmanlar")) return <MemoryLandscapeDiagram />;
  if (heading.includes("Kavram Haritası")) return <ConceptMapDiagram />;
  return null;
}

function VisualContentBlock({
  block,
  onOpenCodeEditor,
  chapterId,
}: {
  block: ContentBlock;
  onOpenCodeEditor: () => void;
  chapterId: string;
}) {
  if (block.type === "heading") {
    const translated = HEADING_TRANSLATIONS[block.text] ?? block.text;
    if (block.level === 3) {
      return (
        <>
          <div className="mt-8 flex items-center gap-3">
            <span className="h-px flex-1 bg-border" />
            <h3 className="max-w-[80%] text-center text-lg font-semibold tracking-tight">
              {translated}
            </h3>
            <span className="h-px flex-1 bg-border" />
          </div>
          {visualForHeading(block.text, chapterId)}
        </>
      );
    }
    return (
      <>
        <h4 className="mt-6 flex items-start gap-2 text-[15px] font-semibold">
          <Sparkles className="mt-0.5 size-4 shrink-0 text-tool-indigo" />
          {translated}
        </h4>
        {visualForHeading(block.text, chapterId)}
      </>
    );
  }

  if (block.type === "list") {
    const Tag = block.ordered ? "ol" : "ul";
    return (
      <Tag className="mt-4 grid gap-2">
        {block.items.map((item, index) => (
          <li
            key={`${index}-${item}`}
            className="flex items-start gap-3 rounded-2xl border hairline bg-surface-2/45 p-3 text-sm leading-relaxed"
          >
            <span className="grid size-6 shrink-0 place-items-center rounded-lg bg-tool-indigo/10 font-mono text-[10px] font-semibold text-tool-indigo">
              {block.ordered ? index + 1 : "•"}
            </span>
            <span>{item}</span>
          </li>
        ))}
      </Tag>
    );
  }

  if (block.type === "code") {
    return (
      <div className="mt-5 overflow-hidden rounded-2xl border border-slate-700/80 bg-[#0b1120] text-slate-100 shadow-xl shadow-slate-950/10">
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-2.5 text-[11px] text-slate-400">
          <span className="flex items-center gap-2 font-mono">
            <span className="size-2 rounded-full bg-emerald-400" />
            {block.language || "text"}
          </span>
          <button
            type="button"
            onClick={onOpenCodeEditor}
            className="focus-ring inline-flex items-center gap-1.5 rounded-lg px-2 py-1 hover:bg-white/10 hover:text-white"
          >
            <Code2 className="size-3" /> Kod Editöründe Aç
          </button>
        </div>
        <pre className="overflow-x-auto p-4 text-[13px] leading-7">
          <code className="font-mono text-sky-100">{block.code}</code>
        </pre>
      </div>
    );
  }

  if (block.type === "quote") {
    return (
      <blockquote className="mt-5 rounded-2xl border border-tool-amber/25 bg-tool-amber/7 p-4 text-sm leading-relaxed">
        <div className="flex items-start gap-3">
          <span className="grid size-8 shrink-0 place-items-center rounded-xl bg-tool-amber/15 text-tool-amber">
            <Sparkles className="size-4" />
          </span>
          <span>{block.text}</span>
        </div>
      </blockquote>
    );
  }

  return (
    <p className="mt-4 text-[15px] leading-[1.85] text-foreground/90">
      {block.text}
    </p>
  );
}

export function VisualLessonJourney({
  blocks,
  onOpenCodeEditor,
  chapterId,
  chapterTitle,
}: {
  blocks: ContentBlock[];
  onOpenCodeEditor: () => void;
  chapterId: string;
  chapterTitle: string;
}) {
  const [activeStage, setActiveStage] = useState(1);
  const sections = useMemo(() => groupIntoSections(blocks), [blocks]);
  const visibleSections = useMemo(
    () =>
      sections.filter((section) =>
        (STAGES[activeStage].headings as readonly string[]).includes(
          section.title,
        ),
      ),
    [activeStage, sections],
  );
  const stageConcepts = useMemo(() => {
    const headings = visibleSections.flatMap((section) =>
      section.blocks.flatMap((block) =>
        block.type === "heading" && block.level >= 3 ? [block.text] : [],
      ),
    );
    if (headings.length >= 2) return headings;
    return [
      ...visibleSections.map(
        (section) => HEADING_TRANSLATIONS[section.title] ?? section.title,
      ),
      STAGES[activeStage].description,
    ];
  }, [activeStage, visibleSections]);

  return (
    <section className="mt-10 overflow-hidden rounded-3xl border border-tool-indigo/20 bg-surface shadow-[0_30px_90px_-65px_color-mix(in_oklab,var(--tool-indigo)_55%,transparent)]">
      <div className="border-b border-tool-indigo/15 bg-gradient-to-br from-tool-indigo/10 via-background to-tool-cyan/7 p-5 sm:p-6">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-tool-indigo/20 bg-background/80 px-3 py-1 text-[11px] font-semibold text-tool-indigo">
              <Sparkles className="size-3.5" /> Görsel ders yolculuğu
            </div>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight">
              Okuma değil, zihinde çalıştırma alanı
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              {chapterTitle} içeriği tek parça bir metin olarak değil, birbirine
              bağlı öğrenme durakları olarak ilerliyor.
            </p>
          </div>
          <div className="rounded-2xl border hairline bg-background/75 px-3 py-2 text-right">
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
              Yolculuk
            </div>
            <div className="mt-0.5 font-mono text-sm font-semibold">
              {activeStage + 1} / {STAGES.length}
            </div>
          </div>
        </div>

        <div className="mt-5 grid gap-2 sm:grid-cols-5">
          {STAGES.map((stage, index) => (
            <button
              type="button"
              key={stage.title}
              onClick={() => setActiveStage(index)}
              aria-current={activeStage === index ? "step" : undefined}
              className={`focus-ring rounded-2xl border p-3 text-left transition-all ${
                activeStage === index
                  ? "border-tool-indigo/40 bg-tool-indigo/10 shadow-sm"
                  : index < activeStage
                    ? "border-tool-emerald/20 bg-tool-emerald/5"
                    : "hairline bg-background/70 hover:bg-muted"
              }`}
            >
              <span className="flex items-center justify-between gap-2">
                <span
                  className={`grid size-6 place-items-center rounded-lg font-mono text-[10px] font-semibold ${activeStage === index ? "bg-tool-indigo text-white" : index < activeStage ? "bg-tool-emerald/15 text-tool-emerald" : "bg-muted text-muted-foreground"}`}
                >
                  {index < activeStage ? (
                    <Check className="size-3.5" />
                  ) : (
                    index + 1
                  )}
                </span>
              </span>
              <span className="mt-2 block text-xs font-semibold leading-tight">
                {stage.title}
              </span>
              <span className="mt-1 hidden text-[10px] leading-snug text-muted-foreground xl:block">
                {stage.description}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="p-4 sm:p-6">
        <div className="mb-5 flex items-center gap-3 rounded-2xl border hairline bg-surface-2/50 p-3">
          <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-tool-indigo/10 text-tool-indigo">
            <CircleDot className="size-4" />
          </span>
          <div>
            <div className="text-sm font-semibold">
              {STAGES[activeStage].title}
            </div>
            <div className="text-xs text-muted-foreground">
              {STAGES[activeStage].description}
            </div>
          </div>
        </div>

        <StageConceptJourney
          chapterId={chapterId}
          chapterTitle={chapterTitle}
          stageTitle={STAGES[activeStage].title}
          concepts={stageConcepts}
        />

        <div className="space-y-5">
          {visibleSections.map((section) => (
            <section
              key={section.title}
              className="rounded-3xl border hairline bg-background p-4 sm:p-6"
            >
              <div className="mb-5 flex items-center gap-3 border-b hairline pb-4">
                <span className="grid size-10 shrink-0 place-items-center rounded-2xl bg-tool-indigo/10 text-tool-indigo">
                  <Database className="size-4" />
                </span>
                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-tool-indigo">
                    Öğrenme sahnesi
                  </div>
                  <h2 className="mt-0.5 text-xl font-semibold tracking-tight">
                    {HEADING_TRANSLATIONS[section.title] ?? section.title}
                  </h2>
                </div>
              </div>
              {section.blocks.map((block, index) => (
                <VisualContentBlock
                  key={`${block.type}-${index}`}
                  block={block}
                  chapterId={chapterId}
                  onOpenCodeEditor={onOpenCodeEditor}
                />
              ))}
            </section>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between gap-3 border-t hairline pt-5">
          <button
            type="button"
            disabled={activeStage === 0}
            onClick={() => setActiveStage((value) => value - 1)}
            className="focus-ring inline-flex h-10 items-center gap-2 rounded-xl border hairline px-3 text-xs font-semibold hover:bg-muted disabled:cursor-not-allowed disabled:opacity-35"
          >
            <ChevronLeft className="size-4" /> Önceki durak
          </button>
          <button
            type="button"
            onClick={() =>
              setActiveStage((value) =>
                value === STAGES.length - 1 ? 0 : value + 1,
              )
            }
            className="focus-ring inline-flex h-10 items-center gap-2 rounded-xl bg-foreground px-4 text-xs font-semibold text-background hover:opacity-90"
          >
            {activeStage === STAGES.length - 1 ? (
              <RotateCcw className="size-4" />
            ) : null}
            {activeStage === STAGES.length - 1 ? "Başa dön" : "Sonraki durak"}
            {activeStage < STAGES.length - 1 ? (
              <ChevronRight className="size-4" />
            ) : null}
          </button>
        </div>
      </div>
    </section>
  );
}
