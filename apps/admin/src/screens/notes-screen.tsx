"use client";

import { AppShell } from "@/components/layout/AppShell";
import { useAppState } from "@/lib/app-state";
import { useState } from "react";
import { ChevronRight, Link2, Redo2, Trash2, Undo2 } from "lucide-react";

export default function NotesScreen() {
  const { longNotes, updateLongNote } = useAppState();
  const [id, setId] = useState(longNotes[0].id);
  const note = longNotes.find((n) => n.id === id)!;
  return (
    <AppShell>
      <div className="flex h-[calc(100dvh-56px)] min-h-0">
        <aside className="flex w-[280px] shrink-0 flex-col border-r hairline bg-sidebar/40 p-3">
          <div className="px-2 py-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
            Notlarım
          </div>
          <button className="focus-ring mt-1 rounded-lg border hairline bg-surface px-3 py-2 text-left text-sm hover:bg-surface-2">
            + Yeni not
          </button>
          <ul className="mt-3 space-y-0.5">
            {longNotes.map((n) => (
              <li key={n.id}>
                <button
                  onClick={() => setId(n.id)}
                  className={`focus-ring w-full rounded-lg px-3 py-2 text-left text-sm ${
                    n.id === id
                      ? "bg-surface shadow-[0_1px_0_var(--color-hairline)]"
                      : "hover:bg-surface/60"
                  }`}
                >
                  <div className="line-clamp-1 font-medium">{n.title}</div>
                  <div className="mt-0.5 line-clamp-1 text-[11px] text-muted-foreground">
                    {n.body.slice(0, 60)}…
                  </div>
                  <div className="mt-1 text-[10px] text-muted-foreground">
                    {n.updatedAt}
                  </div>
                </button>
              </li>
            ))}
          </ul>
        </aside>
        <main className="flex min-w-0 flex-1 flex-col">
          <div className="flex items-center gap-2 border-b hairline px-6 py-3 text-xs text-muted-foreground">
            <span>Araçlar</span>
            <ChevronRight className="size-3" />
            <span className="text-foreground">Notlarım</span>
            <button className="ml-auto focus-ring inline-flex items-center gap-1 rounded-md p-1.5 hover:bg-muted">
              <Trash2 className="size-3.5" />
            </button>
            <button className="focus-ring rounded-md p-1.5 hover:bg-muted">
              <Undo2 className="size-3.5" />
            </button>
            <button className="focus-ring rounded-md p-1.5 hover:bg-muted">
              <Redo2 className="size-3.5" />
            </button>
          </div>
          <div className="border-b hairline px-8 pt-8">
            <input
              value={note.title}
              onChange={(e) =>
                updateLongNote(note.id, { title: e.target.value })
              }
              className="focus-ring w-full bg-transparent text-3xl font-semibold tracking-tight outline-none"
            />
            <div className="mt-2 flex items-center gap-3 pb-4 text-xs text-muted-foreground">
              <span>Kaydedildi · {note.updatedAt}</span>
              {note.linkedTo && (
                <span className="inline-flex items-center gap-1">
                  <Link2 className="size-3" /> {note.linkedTo}
                </span>
              )}
              <button className="ml-auto focus-ring rounded-md border hairline bg-surface px-2 py-1 hover:bg-surface-2">
                Aktif derse bağla
              </button>
            </div>
          </div>
          <div className="flex items-center gap-1 border-b hairline bg-surface-2/40 px-6 py-1 text-muted-foreground">
            {[
              { l: "Paragraf" },
              { l: "B" },
              { l: "I" },
              { l: "H1" },
              { l: "H2" },
              { l: "• Liste" },
              { l: "1. Liste" },
              { l: "Kod" },
              { l: "Blok kod" },
              { l: "🔗 Bağlantı" },
            ].map((t) => (
              <button
                key={t.l}
                className="focus-ring rounded-md px-2 py-1 text-xs hover:bg-muted hover:text-foreground"
              >
                {t.l}
              </button>
            ))}
          </div>
          <div className="min-h-0 flex-1 overflow-y-auto">
            <textarea
              value={note.body}
              onChange={(e) =>
                updateLongNote(note.id, { body: e.target.value })
              }
              className="focus-ring mx-auto block h-full w-full max-w-[760px] resize-none border-0 bg-transparent px-8 py-6 text-[15px] leading-[1.75] outline-none"
              spellCheck={false}
            />
          </div>
        </main>
      </div>
    </AppShell>
  );
}
