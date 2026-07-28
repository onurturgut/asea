"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";

type Theme = "light" | "dark";

export interface ShortNote {
  id: string;
  text: string;
  source: string;
  createdAt: string;
  chapterId?: string;
}

export interface LongNote {
  id: string;
  title: string;
  body: string;
  linkedTo?: string;
  chapterId?: string;
  updatedAt: string;
}

interface AppState {
  theme: Theme;
  toggleTheme: () => void;
  xp: number;
  streak: number;
  shortNotes: ShortNote[];
  addShortNote: (
    n: Omit<ShortNote, "id" | "createdAt"> & { chapterId?: string },
  ) => void;
  longNotes: LongNote[];
  updateLongNote: (id: string, patch: Partial<LongNote>) => void;
  paletteOpen: boolean;
  setPaletteOpen: (v: boolean) => void;
}

const Ctx = createContext<AppState | null>(null);

const seedLongNotes: LongNote[] = [
  {
    id: "n1",
    title: "CPU'nun fetch–decode–execute döngüsü",
    body: "CPU her komutu üç aşamada işler: getir, çöz, çalıştır. Program Counter bir sonraki komutun adresini tutar. Instruction Register çözümlenecek komutu barındırır.\n\nBu döngü saniyede milyarlarca kez tekrarlanır ve modern işlemcilerde pipeline ile üst üste bindirilir.",
    linkedTo: "V01-C02 — Bilgisayarlar Programları Nasıl Çalıştırır?",
    updatedAt: "2 dakika önce",
  },
  {
    id: "n2",
    title: "Yorumlayıcı vs derleyici",
    body: "Derleyici tüm kaynağı önceden makine koduna çevirir; hız kazanılır, esneklik azalır.\nYorumlayıcı komutları çalışma anında çözer; geri bildirim hızlıdır, performans düşer.\nJavaScript'in V8 motoru her ikisinin karışımıdır: JIT derleme.",
    linkedTo: "V01-C02 — Bilgisayarlar Programları Nasıl Çalıştırır?",
    updatedAt: "Dün",
  },
];

const seedShortNotes: ShortNote[] = [
  {
    id: "s1",
    text: "RAM uçucu bellektir; güç kesilince içerik kaybolur.",
    source: "V01-C02 · 3. Bellek Hiyerarşisi",
    createdAt: "5 dk",
    chapterId: "V01-C02",
  },
  {
    id: "s2",
    text: "console.log çalışma zamanında yorumlanır, derleme aşamasında değil.",
    source: "Kod Editörü · satır 4",
    createdAt: "12 dk",
    chapterId: "V01-C02",
  },
  {
    id: "s3",
    text: "Cache miss, RAM'e gidip veri okumayı gerektirir; bu 100x daha yavaştır.",
    source: "AI Mentor cevabı",
    createdAt: "Dün",
    chapterId: "V01-C02",
  },
];

export function AppStateProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");
  const [xp] = useState(2840);
  const [streak] = useState(14);
  const [shortNotes, setShortNotes] = useState<ShortNote[]>(seedShortNotes);
  const [longNotes, setLongNotes] = useState<LongNote[]>(seedLongNotes);
  const longNotesRef = useRef(longNotes);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const longNoteSaveTimers = useRef<Map<string, ReturnType<typeof setTimeout>>>(
    new Map(),
  );

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
  }, [theme]);

  useEffect(() => {
    longNotesRef.current = longNotes;
  }, [longNotes]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setPaletteOpen((v) => !v);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  useEffect(() => {
    let cancelled = false;
    Promise.all([
      fetch("/api/notes/short").then((response) => response.json()),
      fetch("/api/notes/long").then((response) => response.json()),
    ])
      .then(([remoteShortNotes, remoteLongNotes]) => {
        if (cancelled) return;
        if (Array.isArray(remoteShortNotes) && remoteShortNotes.length) {
          setShortNotes(
            remoteShortNotes.map((note: ShortNote & { createdAt: string }) => ({
              ...note,
              createdAt: new Date(note.createdAt).toLocaleString("tr-TR"),
            })),
          );
        }
        if (Array.isArray(remoteLongNotes) && remoteLongNotes.length) {
          setLongNotes(
            remoteLongNotes.map((note: LongNote & { updatedAt: string }) => ({
              ...note,
              updatedAt: new Date(note.updatedAt).toLocaleString("tr-TR"),
            })),
          );
        }
      })
      .catch(() => {
        // The local seed remains available while MongoDB is unavailable.
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const toggleTheme = useCallback(
    () => setTheme((t) => (t === "light" ? "dark" : "light")),
    [],
  );

  const addShortNote = useCallback(
    (
      n: Omit<ShortNote, "id" | "createdAt"> & {
        chapterId?: string;
      },
    ) => {
      const optimisticId = `s${Date.now()}`;
      setShortNotes((prev) => [
        {
          text: n.text,
          source: n.source,
          chapterId: n.chapterId,
          id: optimisticId,
          createdAt: "şimdi",
        },
        ...prev,
      ]);
      void fetch("/api/notes/short", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          ...n,
          chapterId: n.chapterId || "V01-C02",
        }),
      })
        .then((response) => {
          if (!response.ok) throw new Error("Short note could not be saved.");
          return response.json();
        })
        .then((saved: ShortNote) => {
          setShortNotes((prev) =>
            prev.map((note) =>
              note.id === optimisticId
                ? { ...saved, createdAt: "şimdi" }
                : note,
            ),
          );
        })
        .catch(() => {
          // Keep the optimistic note in the current offline session.
        });
    },
    [],
  );

  const updateLongNote = useCallback((id: string, patch: Partial<LongNote>) => {
    const current = longNotesRef.current.find((note) => note.id === id);
    if (!current) return;
    const updated = { ...current, ...patch, updatedAt: "şimdi" };
    longNotesRef.current = longNotesRef.current.map((note) =>
      note.id === id ? updated : note,
    );
    setLongNotes(longNotesRef.current);

    const currentTimer = longNoteSaveTimers.current.get(id);
    if (currentTimer) clearTimeout(currentTimer);
    longNoteSaveTimers.current.set(
      id,
      setTimeout(() => {
        void fetch("/api/notes/long", {
          method: "PUT",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(updated),
        });
        longNoteSaveTimers.current.delete(id);
      }, 700),
    );
  }, []);

  const value = useMemo(
    () => ({
      theme,
      toggleTheme,
      xp,
      streak,
      shortNotes,
      addShortNote,
      longNotes,
      updateLongNote,
      paletteOpen,
      setPaletteOpen,
    }),
    [
      theme,
      toggleTheme,
      xp,
      streak,
      shortNotes,
      addShortNote,
      longNotes,
      updateLongNote,
      paletteOpen,
    ],
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useAppState() {
  const v = useContext(Ctx);
  if (!v) throw new Error("useAppState outside provider");
  return v;
}
