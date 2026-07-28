"use client";

import { AppShell } from "@/components/layout/AppShell";
import { badges } from "@/lib/mock-data";
import { Award, Lock, Trophy } from "lucide-react";

export default function AchievementsScreen() {
  return (
    <AppShell>
      <div className="mx-auto max-w-[1200px] p-8">
        <h1 className="text-2xl font-semibold tracking-tight">Başarılar</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Yalnızca kendi geçmişinle karşılaştırılırsın. Rekabet değil,
          tutarlılık.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            { label: "En uzun seri", value: "18 gün" },
            { label: "Bir günde çözülen alıştırma", value: "24" },
            { label: "Kesintisiz odak", value: "112 dk" },
          ].map((r) => (
            <div
              key={r.label}
              className="rounded-2xl border hairline bg-surface p-5"
            >
              <div className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                {r.label}
              </div>
              <div className="mt-1 text-3xl font-semibold tracking-tight">
                {r.value}
              </div>
              <div className="mt-2 text-xs text-tool-emerald">
                kişisel rekor
              </div>
            </div>
          ))}
        </div>

        <h2 className="mt-10 text-[13px] font-semibold uppercase tracking-wider text-muted-foreground">
          Rozetler
        </h2>
        <div className="mt-3 grid grid-cols-2 gap-3 md:grid-cols-4">
          {badges.map((b) => (
            <div
              key={b.name}
              className="rounded-2xl border hairline bg-surface p-4"
            >
              <Award className="mb-2 size-5 text-tool-amber" />
              <div className="text-sm font-semibold">{b.name}</div>
              <div className="mt-0.5 text-xs text-muted-foreground">
                {b.desc}
              </div>
              <div className="mt-3 text-[11px] text-tool-emerald">
                Kazanıldı · {b.earnedAt}
              </div>
            </div>
          ))}
          {[
            { name: "30 Gün Serisi", req: "16 gün daha çalışmalısın" },
            { name: "Chapter Şampiyonu", req: "V01-C02'yi tamamla" },
            { name: "Kod Ustası", req: "50 alıştırma tamamla" },
            {
              name: "Rekabet Etme, Geliş",
              req: "Kişisel odak rekorunu 2h yap",
            },
          ].map((b) => (
            <div
              key={b.name}
              className="rounded-2xl border hairline bg-muted/30 p-4"
            >
              <Lock className="mb-2 size-5 text-muted-foreground" />
              <div className="text-sm font-semibold text-muted-foreground">
                {b.name}
              </div>
              <div className="mt-0.5 text-xs text-muted-foreground">
                Kilit: {b.req}
              </div>
            </div>
          ))}
        </div>

        <h2 className="mt-10 text-[13px] font-semibold uppercase tracking-wider text-muted-foreground">
          Kişisel gelişim
        </h2>
        <div className="mt-3 rounded-2xl border hairline bg-surface p-5">
          <div className="flex items-center gap-2 text-sm font-semibold">
            <Trophy className="size-4 text-tool-indigo" /> Bu ay geçen aya göre
          </div>
          <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-4 text-sm">
            {[
              { l: "Odak süresi", v: "+22%", tone: "text-tool-emerald" },
              { l: "Tamamlanan bölüm", v: "+3", tone: "text-tool-emerald" },
              { l: "Alıştırma doğruluğu", v: "+8%", tone: "text-tool-emerald" },
              { l: "Mentor kullanımı", v: "−12%", tone: "text-tool-amber" },
            ].map((m) => (
              <div key={m.l} className="rounded-lg border hairline p-3">
                <div className="text-[11px] text-muted-foreground">{m.l}</div>
                <div className={`mt-1 text-xl font-semibold ${m.tone}`}>
                  {m.v}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AppShell>
  );
}
