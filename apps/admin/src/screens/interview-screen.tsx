"use client";

import { AppShell } from "@/components/layout/AppShell";
import { interviewQuestions } from "@/lib/mock-data";
import { useState } from "react";
import { Eye, RotateCcw, Timer } from "lucide-react";

export default function InterviewScreen() {
  const [i, setI] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const q = interviewQuestions[i];
  return (
    <AppShell>
      <div className="mx-auto max-w-[900px] p-8">
        <div className="mb-6 flex items-end justify-between">
          <div>
            <div className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
              Mülakat Pratiği
            </div>
            <h1 className="mt-1 text-2xl font-semibold tracking-tight">
              {q.topic}
            </h1>
          </div>
          <div className="text-xs text-muted-foreground">
            Soru {i + 1} / {interviewQuestions.length}
          </div>
        </div>
        <div className="rounded-2xl border hairline bg-surface p-6">
          <div className="flex items-center gap-2 text-[11px]">
            <span className="rounded-full bg-tool-emerald/10 px-2 py-0.5 font-medium text-tool-emerald">
              {q.difficulty}
            </span>
            <span className="inline-flex items-center gap-1 text-muted-foreground">
              <Timer className="size-3" /> {q.thinkingSec} sn düşünme süresi
            </span>
          </div>
          <h2 className="mt-3 text-lg font-medium leading-snug">
            {q.question}
          </h2>
          <details className="mt-4 rounded-lg border hairline bg-surface-2/60 p-3 text-sm">
            <summary className="cursor-pointer text-tool-cyan">
              İpucu göster
            </summary>
            <p className="mt-2 text-foreground/90">{q.hint}</p>
          </details>
          <textarea
            rows={7}
            placeholder="Cevap notların…"
            className="focus-ring mt-4 w-full resize-none rounded-xl border hairline bg-background p-3 text-sm"
          />
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <button
              onClick={() => setShowAnswer((v) => !v)}
              className="focus-ring inline-flex items-center gap-1.5 rounded-lg border hairline bg-surface px-3 py-2 text-xs font-medium hover:bg-surface-2"
            >
              <Eye className="size-3.5" />{" "}
              {showAnswer ? "Cevabı gizle" : "Cevabı göster"}
            </button>
            <div className="ml-auto flex items-center gap-1">
              <span className="mr-1 text-xs text-muted-foreground">
                Kendini değerlendir:
              </span>
              {["Zayıf", "Orta", "İyi", "Harika"].map((l) => (
                <button
                  key={l}
                  className="focus-ring rounded-md border hairline bg-surface px-2 py-1 text-xs hover:bg-surface-2"
                >
                  {l}
                </button>
              ))}
            </div>
          </div>
          {showAnswer && (
            <div className="mt-4 rounded-xl border hairline bg-tool-emerald/5 p-4 text-sm leading-relaxed">
              <div className="mb-1 text-[11px] font-medium text-tool-emerald">
                Örnek cevap
              </div>
              RAM, aktif kullanılan veriyi hızlıca okunup yazılabilir biçimde
              tutar; uçucudur, güç kesilince silinir. SSD ise kalıcı
              depolamadır; daha yavaş ama çok daha büyük ve enerji kesilse de
              veri korunur.
            </div>
          )}
        </div>
        <div className="mt-4 flex justify-between">
          <button
            onClick={() => {
              setI((v) => Math.max(0, v - 1));
              setShowAnswer(false);
            }}
            className="focus-ring rounded-lg border hairline bg-surface px-3 py-2 text-xs font-medium"
          >
            ◀ Önceki
          </button>
          <button
            onClick={() => {
              setI(0);
              setShowAnswer(false);
            }}
            className="focus-ring inline-flex items-center gap-1 rounded-lg border hairline bg-surface px-3 py-2 text-xs text-muted-foreground"
          >
            <RotateCcw className="size-3" /> Baştan
          </button>
          <button
            onClick={() => {
              setI((v) => Math.min(interviewQuestions.length - 1, v + 1));
              setShowAnswer(false);
            }}
            className="focus-ring rounded-lg bg-foreground px-3 py-2 text-xs font-medium text-background"
          >
            Sonraki ▶
          </button>
        </div>
      </div>
    </AppShell>
  );
}
