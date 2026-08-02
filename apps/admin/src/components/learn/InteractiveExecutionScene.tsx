"use client";

import {
  BrainCircuit,
  Check,
  ChevronLeft,
  ChevronRight,
  CircleDot,
  Pause,
  Play,
  RotateCcw,
  Sparkles,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";

const PREDICTION_OPTIONS = [
  { id: "pc", label: "Program sayacı" },
  { id: "number", label: "number değişkeni" },
  { id: "input", label: "Girdi" },
  { id: "result", label: "result değişkeni" },
  { id: "output", label: "Çıktı" },
] as const;

const CORRECT_PREDICTION = new Set(["pc", "number", "input"]);

type PredictionId = (typeof PREDICTION_OPTIONS)[number]["id"];

interface MachineState {
  pc: number;
  activeLine: number | null;
  number: number | null;
  result: number | null;
  inputConsumed: boolean;
  output: number | null;
  status: "hazır" | "çalışıyor" | "tamamlandı";
  title: string;
  explanation: string;
  operation: string;
}

function buildTrace(input: number): MachineState[] {
  return [
    {
      pc: 0,
      activeLine: 0,
      number: null,
      result: null,
      inputConsumed: false,
      output: null,
      status: "hazır",
      title: "Program çalışmaya hazır",
      operation: "Henüz hiçbir talimat yürütülmedi.",
      explanation:
        "Program sayacı 0 değerini gösteriyor. Bu, sıradaki talimatın READ number olduğu anlamına gelir. Girdi dışarıda bekliyor; number ve result henüz bir değer taşımıyor.",
    },
    {
      pc: 1,
      activeLine: 1,
      number: input,
      result: null,
      inputConsumed: true,
      output: null,
      status: "çalışıyor",
      title: "Girdi çalışma durumuna alındı",
      operation: `READ number → number = ${input}`,
      explanation: `READ talimatı dışarıda bekleyen ${input} değerini number değişkenine taşıdı. Talimat tamamlandığı için program sayacı 1 oldu. result değişmedi; çünkü toplama işlemi henüz yapılmadı.`,
    },
    {
      pc: 2,
      activeLine: 2,
      number: input,
      result: input * 2,
      inputConsumed: true,
      output: null,
      status: "çalışıyor",
      title: "Toplama sonucu bellekte tutuluyor",
      operation: `result = ${input} + ${input} → ${input * 2}`,
      explanation: `Program number değerini iki kez okuyarak ${input} + ${input} işlemini yaptı. Üretilen ${input * 2} değeri result içinde saklandı. Henüz WRITE çalışmadığı için dışarıya bir çıktı verilmedi.`,
    },
    {
      pc: 3,
      activeLine: null,
      number: input,
      result: input * 2,
      inputConsumed: true,
      output: input * 2,
      status: "tamamlandı",
      title: "Sonuç dışarıya aktarıldı",
      operation: `WRITE result → çıktı = ${input * 2}`,
      explanation: `WRITE talimatı result içinde tutulan ${input * 2} değerini programın çıktısına aktardı. Yürütülecek talimat kalmadığı için program tamamlandı. Kaynak metin değişmedi; değişen şey programın çalışma durumudur.`,
    },
  ];
}

function samePrediction(selected: Set<PredictionId>) {
  return (
    selected.size === CORRECT_PREDICTION.size &&
    [...selected].every((item) => CORRECT_PREDICTION.has(item))
  );
}

function StateValue({ value }: { value: string | number | null }) {
  return (
    <span className="font-mono text-sm font-semibold text-foreground">
      {value ?? "boş"}
    </span>
  );
}

export function InteractiveExecutionScene() {
  const [input, setInput] = useState(6);
  const [stepIndex, setStepIndex] = useState(0);
  const [selectedPrediction, setSelectedPrediction] = useState<
    Set<PredictionId>
  >(() => new Set());
  const [predictionSubmitted, setPredictionSubmitted] = useState(false);
  const [playing, setPlaying] = useState(false);

  const trace = useMemo(() => buildTrace(input), [input]);
  const current = trace[stepIndex];
  const previous = stepIndex > 0 ? trace[stepIndex - 1] : null;
  const predictionCorrect = samePrediction(selectedPrediction);

  useEffect(() => {
    if (!playing) return;
    if (stepIndex >= trace.length - 1) {
      setPlaying(false);
      return;
    }
    const timer = window.setTimeout(
      () => setStepIndex((currentStep) => currentStep + 1),
      1600,
    );
    return () => window.clearTimeout(timer);
  }, [playing, stepIndex, trace.length]);

  const togglePrediction = (id: PredictionId) => {
    if (predictionSubmitted) return;
    setSelectedPrediction((currentSelection) => {
      const next = new Set(currentSelection);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const resetExecution = () => {
    setPlaying(false);
    setStepIndex(0);
  };

  const changeInput = (nextInput: number) => {
    setInput(nextInput);
    setPlaying(false);
    setStepIndex(0);
  };

  const changed = {
    pc: previous ? previous.pc !== current.pc : false,
    number: previous ? previous.number !== current.number : false,
    result: previous ? previous.result !== current.result : false,
    input: previous ? previous.inputConsumed !== current.inputConsumed : false,
    output: previous ? previous.output !== current.output : false,
  };

  return (
    <section
      aria-labelledby="execution-scene-title"
      className="mt-8 overflow-hidden rounded-3xl border border-tool-indigo/25 bg-surface shadow-[0_24px_70px_-48px_color-mix(in_oklab,var(--tool-indigo)_55%,transparent)]"
    >
      <div className="border-b border-tool-indigo/15 bg-gradient-to-br from-tool-indigo/12 via-background to-tool-cyan/8 px-5 py-5 sm:px-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-tool-indigo/20 bg-background/80 px-3 py-1 text-[11px] font-semibold text-tool-indigo">
            <Sparkles className="size-3.5" /> Etkileşimli öğrenme sahnesi
          </div>
          <div className="text-[11px] font-medium text-muted-foreground">
            V01-C02 · Yürütme durumu
          </div>
        </div>
        <div className="mt-4 flex items-start gap-3">
          <div className="grid size-10 shrink-0 place-items-center rounded-2xl bg-tool-indigo text-white shadow-sm">
            <BrainCircuit className="size-5" />
          </div>
          <div>
            <h2
              id="execution-scene-title"
              className="text-xl font-semibold tracking-tight"
            >
              Programın zihninde ne değişiyor?
            </h2>
            <p className="mt-1 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              Aynı küçük programı birlikte yürüteceğiz. Önce tahmin et, sonra
              her talimatın program sayacını, değerleri ve çıktıyı nasıl
              değiştirdiğini kendi hızında gözlemle.
            </p>
          </div>
        </div>
      </div>

      <div className="p-4 sm:p-6">
        <div className="rounded-2xl border border-tool-amber/25 bg-tool-amber/6 p-4">
          <div className="flex items-center gap-2 text-sm font-semibold">
            <CircleDot className="size-4 text-tool-amber" /> Önce tahmin et
          </div>
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
            <span className="font-mono text-foreground">READ number</span>{" "}
            tamamlandığında hangi alanlar değişir? Birden fazla seçim
            yapabilirsin.
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {PREDICTION_OPTIONS.map((option) => {
              const selected = selectedPrediction.has(option.id);
              return (
                <button
                  type="button"
                  key={option.id}
                  onClick={() => togglePrediction(option.id)}
                  aria-pressed={selected}
                  disabled={predictionSubmitted}
                  className={`focus-ring rounded-full border px-3 py-1.5 text-xs font-medium transition ${
                    selected
                      ? "border-tool-amber/45 bg-tool-amber/15 text-foreground"
                      : "hairline bg-background text-muted-foreground hover:bg-muted hover:text-foreground"
                  } disabled:cursor-default`}
                >
                  {selected ? "✓ " : ""}
                  {option.label}
                </button>
              );
            })}
          </div>
          {!predictionSubmitted ? (
            <button
              type="button"
              disabled={selectedPrediction.size === 0}
              onClick={() => setPredictionSubmitted(true)}
              className="focus-ring mt-4 rounded-xl bg-foreground px-4 py-2 text-xs font-semibold text-background transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-35"
            >
              Tahminimi kontrol et
            </button>
          ) : (
            <div
              role="status"
              className={`mt-4 rounded-xl border p-3 text-xs leading-relaxed ${
                predictionCorrect
                  ? "border-tool-emerald/30 bg-tool-emerald/8"
                  : "border-tool-cyan/30 bg-tool-cyan/8"
              }`}
            >
              <div className="flex items-center gap-2 font-semibold">
                <Check
                  className={`size-4 ${
                    predictionCorrect ? "text-tool-emerald" : "text-tool-cyan"
                  }`}
                />
                {predictionCorrect
                  ? "Tahminin doğru. Şimdi değişimi gözlemle."
                  : "Şimdi yürütelim ve hangi alanların neden değiştiğini karşılaştıralım."}
              </div>
              <p className="mt-1 text-muted-foreground">
                READ; girdiyi tüketir, değeri number içine taşır ve tamamlanınca
                program sayacını sıradaki talimata ilerletir. result ve çıktı bu
                adımda değişmez.
              </p>
            </div>
          )}
        </div>

        <div
          className={`mt-5 grid gap-4 transition-opacity md:grid-cols-[0.92fr_1.08fr] ${
            predictionSubmitted
              ? "opacity-100"
              : "pointer-events-none opacity-45"
          }`}
          aria-disabled={!predictionSubmitted}
        >
          <div className="overflow-hidden rounded-2xl border hairline bg-[#0f172a] text-slate-100 shadow-inner">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-2.5 text-[11px] text-slate-400">
              <span className="font-mono">double-number.asea</span>
              <span>soyut program</span>
            </div>
            <div className="p-3 font-mono text-[13px] leading-7">
              {[
                ["READ", "number"],
                ["result", "= number + number"],
                ["WRITE", "result"],
              ].map(([left, right], index) => {
                const isActive = current.activeLine === index;
                const isDone = stepIndex > index;
                return (
                  <div
                    key={`${left}-${right}`}
                    className={`grid grid-cols-[24px_1fr] rounded-lg px-2 transition ${
                      isActive
                        ? "bg-amber-300/14 ring-1 ring-inset ring-amber-300/30"
                        : isDone
                          ? "text-slate-400"
                          : ""
                    }`}
                  >
                    <span className="select-none text-slate-600">{index}</span>
                    <span>
                      <span
                        className={
                          left === "result"
                            ? "text-sky-300"
                            : "text-fuchsia-300"
                        }
                      >
                        {left}
                      </span>{" "}
                      <span className="text-emerald-300">{right}</span>
                    </span>
                  </div>
                );
              })}
            </div>
            <div className="border-t border-white/10 bg-black/15 px-4 py-3">
              <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                Bu adımda yapılan işlem
              </div>
              <div className="mt-1 font-mono text-xs text-amber-200">
                {current.operation}
              </div>
            </div>
          </div>

          <div className="rounded-2xl border hairline bg-surface-2/60 p-4">
            <div className="flex items-center justify-between gap-3">
              <div>
                <div className="text-[10px] font-semibold uppercase tracking-wider text-tool-indigo">
                  Programın Zihni
                </div>
                <div className="mt-0.5 text-sm font-semibold">
                  Adım {stepIndex + 1} / {trace.length}
                </div>
              </div>
              <span
                className={`rounded-full px-2.5 py-1 text-[10px] font-semibold ${
                  current.status === "tamamlandı"
                    ? "bg-tool-emerald/12 text-tool-emerald"
                    : current.status === "çalışıyor"
                      ? "bg-tool-cyan/12 text-tool-cyan"
                      : "bg-muted text-muted-foreground"
                }`}
              >
                {current.status}
              </span>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-2.5">
              <div
                className={`rounded-xl border p-3 transition ${
                  changed.pc
                    ? "border-tool-amber/40 bg-tool-amber/10"
                    : "hairline bg-background"
                }`}
              >
                <div className="text-[10px] text-muted-foreground">PC</div>
                <StateValue value={current.pc} />
              </div>
              <div
                className={`rounded-xl border p-3 transition ${
                  changed.input
                    ? "border-tool-cyan/40 bg-tool-cyan/10"
                    : "hairline bg-background"
                }`}
              >
                <div className="text-[10px] text-muted-foreground">Girdi</div>
                <StateValue
                  value={current.inputConsumed ? "tüketildi" : input}
                />
              </div>
              <div
                className={`rounded-xl border p-3 transition ${
                  changed.number
                    ? "border-tool-indigo/40 bg-tool-indigo/10"
                    : "hairline bg-background"
                }`}
              >
                <div className="text-[10px] text-muted-foreground">number</div>
                <StateValue value={current.number} />
              </div>
              <div
                className={`rounded-xl border p-3 transition ${
                  changed.result
                    ? "border-tool-violet/40 bg-tool-violet/10"
                    : "hairline bg-background"
                }`}
              >
                <div className="text-[10px] text-muted-foreground">result</div>
                <StateValue value={current.result} />
              </div>
              <div
                className={`col-span-2 rounded-xl border p-3 transition ${
                  changed.output
                    ? "border-tool-emerald/40 bg-tool-emerald/10"
                    : "hairline bg-background"
                }`}
              >
                <div className="text-[10px] text-muted-foreground">Çıktı</div>
                <StateValue value={current.output} />
              </div>
            </div>
          </div>
        </div>

        <div
          aria-live="polite"
          className={`mt-4 rounded-2xl border border-tool-indigo/20 bg-tool-indigo/6 p-4 transition-opacity ${
            predictionSubmitted ? "opacity-100" : "opacity-45"
          }`}
        >
          <div className="text-sm font-semibold">{current.title}</div>
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
            {current.explanation}
          </p>
        </div>

        <div className="mt-4 flex flex-col gap-4 border-t hairline pt-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-1.5">
              {trace.map((step, index) => (
                <button
                  type="button"
                  key={step.title}
                  disabled={!predictionSubmitted}
                  onClick={() => {
                    setPlaying(false);
                    setStepIndex(index);
                  }}
                  aria-label={`${index + 1}. adıma git: ${step.title}`}
                  aria-current={index === stepIndex ? "step" : undefined}
                  className={`focus-ring h-2.5 rounded-full transition-all ${
                    index === stepIndex
                      ? "w-8 bg-tool-indigo"
                      : index < stepIndex
                        ? "w-2.5 bg-tool-emerald"
                        : "w-2.5 bg-muted"
                  }`}
                />
              ))}
            </div>
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                disabled={!predictionSubmitted || stepIndex === 0}
                onClick={() => {
                  setPlaying(false);
                  setStepIndex((currentStep) => currentStep - 1);
                }}
                aria-label="Önceki yürütme adımı"
                className="focus-ring grid size-9 place-items-center rounded-xl border hairline hover:bg-muted disabled:cursor-not-allowed disabled:opacity-35"
              >
                <ChevronLeft className="size-4" />
              </button>
              <button
                type="button"
                disabled={!predictionSubmitted}
                onClick={() => {
                  if (stepIndex === trace.length - 1) setStepIndex(0);
                  setPlaying((currentPlaying) => !currentPlaying);
                }}
                className="focus-ring inline-flex h-9 items-center gap-2 rounded-xl bg-foreground px-3.5 text-xs font-semibold text-background hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-35"
              >
                {playing ? (
                  <Pause className="size-3.5" />
                ) : (
                  <Play className="size-3.5" />
                )}
                {playing ? "Duraklat" : "Otomatik yürüt"}
              </button>
              <button
                type="button"
                disabled={
                  !predictionSubmitted || stepIndex === trace.length - 1
                }
                onClick={() => {
                  setPlaying(false);
                  setStepIndex((currentStep) => currentStep + 1);
                }}
                aria-label="Sonraki yürütme adımı"
                className="focus-ring grid size-9 place-items-center rounded-xl border hairline hover:bg-muted disabled:cursor-not-allowed disabled:opacity-35"
              >
                <ChevronRight className="size-4" />
              </button>
              <button
                type="button"
                disabled={!predictionSubmitted || stepIndex === 0}
                onClick={resetExecution}
                aria-label="Yürütmeyi başa al"
                className="focus-ring grid size-9 place-items-center rounded-xl border hairline hover:bg-muted disabled:cursor-not-allowed disabled:opacity-35"
              >
                <RotateCcw className="size-3.5" />
              </button>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="mr-1 text-xs font-medium text-muted-foreground">
              Girdiyi değiştir:
            </span>
            {[6, 9, 0].map((value) => (
              <button
                type="button"
                key={value}
                disabled={!predictionSubmitted}
                onClick={() => changeInput(value)}
                aria-pressed={input === value}
                className={`focus-ring rounded-lg border px-3 py-1.5 font-mono text-xs font-semibold transition ${
                  input === value
                    ? "border-tool-indigo/40 bg-tool-indigo/10 text-tool-indigo"
                    : "hairline hover:bg-muted"
                } disabled:cursor-not-allowed disabled:opacity-35`}
              >
                {value}
              </button>
            ))}
            <span className="text-[11px] text-muted-foreground">
              Değeri değiştirince program başa alınır; davranış aynı, durum
              farklı olur.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
