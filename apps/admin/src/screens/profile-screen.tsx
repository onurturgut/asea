"use client";

import { AppShell } from "@/components/layout/AppShell";
import { skills, student } from "@/lib/mock-data";
import { useAppState } from "@/lib/app-state";
import { Progress } from "@/components/ui/progress";

export default function ProfileScreen() {
  const { xp, streak } = useAppState();
  return (
    <AppShell>
      <div className="mx-auto max-w-[1100px] p-8">
        <div className="flex items-center gap-5">
          <div className="grid size-20 place-items-center rounded-full bg-primary text-2xl font-semibold text-primary-foreground">
            {student.avatar}
          </div>
          <div>
            <h1 className="text-2xl font-semibold tracking-tight">
              {student.fullName}
            </h1>
            <p className="text-sm text-muted-foreground">
              @{student.handle} · {student.email}
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              ASEA öğrencisi · {student.joined}'dan beri
            </p>
          </div>
          <div className="ml-auto grid grid-cols-3 gap-3 text-center">
            {[
              { l: "Toplam XP", v: xp.toLocaleString("tr-TR") },
              { l: "Seri", v: `${streak} gün` },
              { l: "Rozet", v: "12" },
            ].map((s) => (
              <div
                key={s.l}
                className="rounded-xl border hairline bg-surface px-4 py-3"
              >
                <div className="text-lg font-semibold">{s.v}</div>
                <div className="text-[11px] text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-2xl border hairline bg-surface p-5 md:col-span-2">
            <h2 className="text-[13px] font-semibold uppercase tracking-wider text-muted-foreground">
              Beceriler
            </h2>
            <div className="mt-4 space-y-4">
              {skills.map((s) => (
                <div key={s.name}>
                  <div className="mb-1 flex items-center justify-between text-sm">
                    <span className="font-medium">{s.name}</span>
                    <span className="text-xs text-muted-foreground">
                      Seviye {s.level} · sonraki %{s.next}
                    </span>
                  </div>
                  <Progress value={s.next} className="h-1.5" />
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border hairline bg-surface p-5">
            <h2 className="text-[13px] font-semibold uppercase tracking-wider text-muted-foreground">
              Öğrenme tercihleri
            </h2>
            <ul className="mt-3 space-y-2 text-sm">
              <li className="flex justify-between">
                <span>Günlük hedef</span>
                <span className="text-muted-foreground">40 dk</span>
              </li>
              <li className="flex justify-between">
                <span>Tercih edilen saat</span>
                <span className="text-muted-foreground">21:00–23:00</span>
              </li>
              <li className="flex justify-between">
                <span>Bildirimler</span>
                <span className="text-muted-foreground">Yalnızca öneriler</span>
              </li>
              <li className="flex justify-between">
                <span>Mentor bağlamı</span>
                <span className="text-tool-emerald">Açık</span>
              </li>
              <li className="flex justify-between">
                <span>Hareket azaltma</span>
                <span className="text-muted-foreground">Sistem</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
