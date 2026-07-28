"use client";

import {
  Bug,
  CheckCircle2,
  Lightbulb,
  Play,
  RefreshCcw,
  Save,
  Send,
  Square,
  XCircle,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { jsSample } from "@/lib/mock-data";

type ConsoleLine = {
  kind: "log" | "info" | "warn" | "error";
  text: string;
};

type RunResult = {
  logs: ConsoleLine[];
  duration: number;
  error?: string;
};

const WORKER_SOURCE = `
const blocked = () => { throw new Error("Bu çalışma alanında ağ ve dış kaynak erişimi kapalıdır."); };
const serialize = (value) => {
  if (typeof value === "string") return value;
  try { return JSON.stringify(value); } catch { return String(value); }
};
self.onmessage = ({ data }) => {
  const startedAt = performance.now();
  const logs = [];
  const localConsole = {};
  for (const kind of ["log", "info", "warn", "error"]) {
    localConsole[kind] = (...args) => logs.push({
      kind,
      text: args.map(serialize).join(" "),
    });
  }
  try {
    const execute = new Function(
      "console",
      "fetch",
      "WebSocket",
      "XMLHttpRequest",
      "importScripts",
      '"use strict";\\n' + data.code,
    );
    execute(localConsole, blocked, blocked, blocked, blocked);
    self.postMessage({ logs, duration: performance.now() - startedAt });
  } catch (error) {
    self.postMessage({
      logs,
      duration: performance.now() - startedAt,
      error: error instanceof Error ? error.name + ": " + error.message : String(error),
    });
  }
};
`;

export function CodeEditor({ chapterId }: { chapterId: string }) {
  const [code, setCode] = useState(jsSample);
  const [saveState, setSaveState] = useState<"saved" | "saving" | "error">(
    "saved",
  );
  const [running, setRunning] = useState(false);
  const [result, setResult] = useState<RunResult | null>(null);
  const [tab, setTab] = useState<"console" | "tests">("console");
  const workerRef = useRef<Worker | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const storageKey = `asea:v1:${chapterId.toLowerCase()}:code`;

  useEffect(() => {
    const savedCode = window.localStorage.getItem(storageKey);
    setCode(savedCode || jsSample);
    setResult(null);
    return () => {
      workerRef.current?.terminate();
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [storageKey]);

  const stop = (timedOut = false) => {
    workerRef.current?.terminate();
    workerRef.current = null;
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = null;
    setRunning(false);
    if (timedOut) {
      setResult({
        logs: [],
        duration: 1500,
        error: "TimeLimitError: Kod 1500 ms sınırını aştığı için durduruldu.",
      });
    }
  };

  const run = (showTests = false) => {
    stop();
    setRunning(true);
    setResult(null);
    if (showTests) setTab("tests");

    const blobUrl = URL.createObjectURL(
      new Blob([WORKER_SOURCE], { type: "text/javascript" }),
    );
    const worker = new Worker(blobUrl);
    URL.revokeObjectURL(blobUrl);
    workerRef.current = worker;

    worker.onmessage = (event: MessageEvent<RunResult>) => {
      setResult(event.data);
      stop();
    };
    worker.onerror = (event) => {
      setResult({
        logs: [],
        duration: 0,
        error: `WorkerError: ${event.message}`,
      });
      stop();
    };
    worker.postMessage({ code });
    timeoutRef.current = setTimeout(() => stop(true), 1500);
  };

  const save = () => {
    setSaveState("saving");
    try {
      window.localStorage.setItem(storageKey, code);
      setSaveState("saved");
    } catch {
      setSaveState("error");
    }
  };

  const tests = [
    {
      name: "Kod çalışma zamanı hatası vermiyor",
      pass: Boolean(result) && !result?.error,
    },
    {
      name: "3.6 GHz sonucu 3600000000 olarak yazdırılıyor",
      pass: Boolean(
        result?.logs.some((line) => line.text.includes("3600000000")),
      ),
    },
    {
      name: "16 GB bellek bilgisi konsola yazdırılıyor",
      pass: Boolean(
        result?.logs.some(
          (line) => line.text.includes("16") && line.text.includes("GB"),
        ),
      ),
    },
    {
      name: "Program güvenli süre sınırı içinde tamamlanıyor",
      pass: Boolean(result && !result.error && result.duration < 1500),
    },
  ];
  const passedTests = tests.filter((test) => test.pass).length;
  const lineCount = code.split("\n").length;

  const saveLabel = {
    saved: "Kaydedildi",
    saving: "Kaydediliyor…",
    error: "Kaydetme hatası",
  }[saveState];

  return (
    <div className="flex h-full min-h-0 flex-col">
      <div className="flex items-center gap-1 border-b hairline bg-surface px-3 py-2">
        <span className="font-mono text-xs">
          {chapterId.toLowerCase()}-calisma.js
        </span>
        <span className="rounded-md bg-tool-amber/10 px-1.5 py-0.5 font-mono text-[10px] font-semibold text-tool-amber">
          JS
        </span>
        <span className="ml-2 text-[11px] text-muted-foreground">
          · {saveLabel}
        </span>
        <div className="ml-auto flex items-center gap-1">
          <ToolbarBtn
            onClick={() => (running ? stop() : run())}
            icon={running ? Square : Play}
            label={running ? "Durdur" : "Çalıştır"}
            primary
          />
          <ToolbarBtn
            onClick={() => run(true)}
            icon={CheckCircle2}
            label="Testleri çalıştır"
          />
          <ToolbarBtn onClick={save} icon={Save} label="Kaydet" />
          <ToolbarBtn
            onClick={() => {
              setCode(jsSample);
              setResult(null);
            }}
            icon={RefreshCcw}
            label="Sıfırla"
          />
          <ToolbarBtn icon={Lightbulb} label="Mentor ipucu" />
          <ToolbarBtn icon={Send} label="Çözümü gönder" primary />
        </div>
      </div>

      <div className="grid min-h-0 flex-1 grid-rows-[1fr_auto]">
        <div className="flex min-h-0 overflow-hidden bg-background font-mono text-[13px] leading-[1.7]">
          <div
            aria-hidden="true"
            className="select-none overflow-hidden border-r hairline bg-surface-2/50 px-3 py-3 text-right text-[11px] text-muted-foreground"
          >
            {Array.from({ length: lineCount }, (_, index) => (
              <div key={index}>{index + 1}</div>
            ))}
          </div>
          <textarea
            value={code}
            onChange={(event) => {
              setCode(event.target.value);
              setSaveState("saving");
            }}
            onBlur={save}
            spellCheck={false}
            aria-label="JavaScript kod editörü"
            className="focus-ring min-h-0 flex-1 resize-none overflow-auto border-0 bg-transparent px-4 py-3 font-mono text-[13px] leading-[1.7] outline-none"
          />
        </div>

        <div className="border-t hairline bg-surface">
          <div className="flex items-center gap-1 border-b hairline px-3">
            <TabBtn
              active={tab === "console"}
              onClick={() => setTab("console")}
              icon={Bug}
              label={`Konsol${result ? ` (${result.logs.length})` : ""}`}
            />
            <TabBtn
              active={tab === "tests"}
              onClick={() => setTab("tests")}
              icon={CheckCircle2}
              label={`Testler (${passedTests}/${tests.length})`}
            />
            <div className="ml-auto text-[11px] text-muted-foreground">
              {running
                ? "İzole çalışma alanında çalışıyor…"
                : result
                  ? `${Math.round(result.duration)} ms · ${result.error ? "1 hata" : "0 hata"}`
                  : "Çalıştırılmadı"}
            </div>
          </div>
          <div className="max-h-56 overflow-auto p-3 font-mono text-[12.5px] leading-relaxed">
            {tab === "console" ? (
              result ? (
                <>
                  {result.logs.map((line, index) => (
                    <div
                      key={`${line.text}-${index}`}
                      className={
                        line.kind === "error"
                          ? "text-destructive"
                          : line.kind === "warn"
                            ? "text-tool-amber"
                            : line.kind === "info"
                              ? "text-muted-foreground"
                              : ""
                      }
                    >
                      <span className="mr-2 select-none text-muted-foreground">
                        ›
                      </span>
                      {line.text}
                    </div>
                  ))}
                  {result.error ? (
                    <div className="text-destructive">
                      <span className="mr-2 select-none">×</span>
                      {result.error}
                    </div>
                  ) : null}
                </>
              ) : (
                <div className="text-muted-foreground">
                  <span className="mr-2 select-none">›</span>
                  Kodu çalıştırmak için üstteki Çalıştır tuşuna bas.
                </div>
              )
            ) : (
              <div className="space-y-1.5">
                {tests.map((test) => (
                  <div
                    key={test.name}
                    className={`flex items-start gap-2 rounded-md px-2 py-1.5 ${
                      test.pass
                        ? "bg-tool-emerald/10 text-tool-emerald"
                        : "bg-destructive/10 text-destructive"
                    }`}
                  >
                    {test.pass ? (
                      <CheckCircle2 className="mt-0.5 size-3.5 shrink-0" />
                    ) : (
                      <XCircle className="mt-0.5 size-3.5 shrink-0" />
                    )}
                    <span className="text-foreground">{test.name}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function ToolbarBtn({
  icon: Icon,
  label,
  onClick,
  primary,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  onClick?: () => void;
  primary?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`focus-ring inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-[12px] font-medium transition ${
        primary
          ? "bg-foreground text-background hover:opacity-90"
          : "text-muted-foreground hover:bg-muted hover:text-foreground"
      }`}
    >
      <Icon className="size-3.5" /> {label}
    </button>
  );
}

function TabBtn({
  active,
  onClick,
  icon: Icon,
  label,
}: {
  active: boolean;
  onClick: () => void;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`focus-ring -mb-px inline-flex items-center gap-1.5 border-b-2 px-3 py-2 text-xs font-medium transition ${
        active
          ? "border-tool-indigo text-foreground"
          : "border-transparent text-muted-foreground hover:text-foreground"
      }`}
    >
      <Icon className="size-3.5" /> {label}
    </button>
  );
}
